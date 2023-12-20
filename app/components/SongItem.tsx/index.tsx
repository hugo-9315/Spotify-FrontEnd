"use client";
import { Track } from "@/app/services/tracks";
import Image from "next/image";
import PlayButton from "../playButton";

interface SongItemProps {
    data: Track;
    onClick: (id: string) => void
};

const SongItem: React.FC<SongItemProps> = ({data, onClick}) => {
    const imagePath = data.cover;
    return ( 
        <div onClick={() => onClick(data._id)} className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 ">
            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                <Image className="object-cover" src={imagePath || '/images/dailymix.webp'} fill alt="image"/>
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncatew-full">
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm pb-4 w-full truncate">
                   By {data.artist}
                </p>
            </div>
            <div className="absolute bottom-24 right-5">
                <PlayButton />
            </div>
        </div>
     );
}
 
export default SongItem;

// SongItem.tsx

// import { Track } from "@/app/services/tracks";
// import Image from "next/image";

// interface SongItemProps {
//   data: Track;
//   onClick: (id: string) => void;
// }

// const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
//   const imagePath = data.cover;

//   // Vérifiez si la propriété cover existe et n'est pas vide
//   if (!imagePath) {
//     console.error(`Missing or empty "cover" property in Track data:`, data);
//     return null; // Ou fournissez une image par défaut si nécessaire
//   }

//   return (
//     <div
//       onClick={() => onClick(data._id)}
//       className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
//     >
//       <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
//         <Image className="object-cover" src={imagePath} fill alt="image" />
//       </div>
//     </div>
//   );
// };

// export default SongItem;
