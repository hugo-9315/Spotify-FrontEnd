import { useEffect, useState } from 'react';
import { Track } from '@/app/services/tracks';
import Image from 'next/image';
import PlayButton from '../playButton';
import useLoadImageFromBackend from '@/app/hooks/useLoadImage';

interface SongItemProps {
  data: Track;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const [imagePath, setImagePath] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const path = await useLoadImageFromBackend(data.cover);
        setImagePath(path);
      } catch (error) {
        console.error('Error loading image:', error);
        setImagePath(null);
      }
    };

    loadImage();
  }, [data.cover]);

  return (
    <div
      onClick={() => onClick(data._id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 "
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        {/* {imagePath ? ( */}
        <Image
            className="object-cover"
            src={data.cover}
            alt="image"
            width={"200"} // Remplacez par la largeur réelle de l'image
            height={"200"} // Remplacez par la hauteur réelle de l'image
          />
        {/* // ) : (
           <div className="w-full h-full bg-gray-300 flex items-center justify-center">
             Default Image
           </div>
       )} */}
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">By {data.artist}</p>
      </div>
      <div className="absolute bottom-24 right-5">
        {/* <PlayButton /> */}
      </div>
    </div>
  );
};

export default SongItem;


  //"https://tracksbucket.s3.eu-west-3.amazonaws.com/Elvis%20Presley%20(Japan%20Papersleeve%2024%20Bit%20%20Remaster)/cover.jpg"