import { useState, useEffect } from "react";
import Image from "next/image";
import { Track } from "@/app/services/tracks";
import useLoadImageFromBackend from "@/app/hooks/useLoadImage";
import { getOneArtist } from "@/app/services/tracks";

interface MediaItemProps {
  data: Track;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [artistName, setArtistName] = useState<string>("");

  useEffect(() => {
    // Créer l'élément audio
    const audioElement = new Audio(data.url);
    setAudio(audioElement);

    // Nettoyer l'audio lors du démontage du composant
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = "";
        audioElement.load();
      }
    };
  }, [data.url]);

  useEffect(() => {
    const fetchArtistName = async () => {
      try {
        const artistData = await getOneArtist(data.artist.name);
        setArtistName(artistData.name);
      } catch (error) {
        console.error("Error fetching artist name:", error);
      }
    };

    fetchArtistName();
  }, [data.artist]);

  const handleClick = () => {
    if (onClick) {
      onClick(data._id);
    }

    // Démarrer ou mettre en pause l'audio lors du clic
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  console.log()

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-y-[48px] overflow-hidden">
        <Image
          className="object-cover"
          src={data.cover}
          alt="image"
          width={"75"}
          height={"75"}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.artist.name}</p>
      </div>
      <button className="ml-auto">Play</button>
    </div>
  );
};

export default MediaItem;
