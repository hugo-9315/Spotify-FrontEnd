import { useState, useEffect } from "react";
import Image from "next/image";
import { Track } from "@/app/services/tracks";
import useLoadImageFromBackend from "@/app/hooks/useLoadImage";

interface MediaItemProps {
  data: Track;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick(data._id);
    }
    // Activer le lecteur
  };

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
            <p className="text-white truncate">
                {data.title}
            </p>
            <p className="text-neutral-400 text-sm truncate">
                {data.artist || "artist"}
            </p>
      </div>
    </div>
  );
};

export default MediaItem;
