"use client";
import SongItem from "@/app/components/SongItem.tsx";
import { Track } from "@/app/services/tracks";

interface PageContentProps {
  tracks: Track[];
}

const PageContent: React.FC<PageContentProps> = ({ tracks }) => {
  // Fonction pour mélanger les pistes
  const shuffleTracks = (array: Track[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Mélanger les pistes avant de les mapper
  const shuffledTracks = shuffleTracks(tracks);

  if (shuffledTracks.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        No songs available.
      </div>
    );
  }

  return (
    <div className="flex overflow-x-auto mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
        {shuffledTracks.slice(0, 10).map((track) => (
          <SongItem key={track._id} onClick={() => {}} data={track} />
        ))}
      </div>
    </div>
  );
};

export default PageContent;
