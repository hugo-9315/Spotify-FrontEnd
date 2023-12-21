import React, { useEffect, useState } from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import getTracks, { Track } from "@/app/services/tracks";
import MediaItem from "../mediaItem";
import * as mm from 'music-metadata';
import fs from 'fs'

interface LibraryProps {
    tracks : Track[];
  // Vous n'avez plus besoin de passer les tracks en tant que prop
}

const Library: React.FC<LibraryProps> = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

  const testtrack = 'https://tracksbucket.s3.eu-west-3.amazonaws.com/1.%20Elvis%20Presley%20-%20Blue%20Suede%20Shoes.m4a';

// Library component (ou tout autre composant qui doit récupérer les métadonnées côté client)

useEffect(() => {
  const fetchMetadata = async () => {
    try {
      const response = await fetch(testtrack); // Remplacez l'URL par celle de votre serveur
      const metadata = await response.json();
      console.log('hello', metadata);
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
  };

  fetchMetadata();
}, []);

  

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        // Récupérez les données depuis votre service
        const data = await getTracks();
        setTracks(data);
      } catch (error) {
        console.error("Tracks Fail:", error);
      }
    };

    fetchTracks();
  }, []); // Le tableau vide signifie que cela ne s'exécutera qu'une fois après le montage initial

  console.log('Tracks:', tracks);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {tracks.slice(0,10).map((track) => (
            <MediaItem onClick={() => {}} key={track._id} data={track}/>
        //  <div key={track._id}>{track.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Library;
