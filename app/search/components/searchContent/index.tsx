// SearchContent.tsx

import React, { useState, useEffect } from "react";
import MediaItem from "@/app/components/mediaItem";
import { Track } from "@/app/services/tracks";
import { getTracks } from "@/app/services/tracks"; // Importez la fonction de recherche appropriée

interface SearchContentProps {
  // Pas besoin de passer les pistes ici, car vous utiliserez la fonction de recherche pour les récupérer
}

const SearchContent: React.FC<SearchContentProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Track[]>([]);

  useEffect(() => {
    // Étant donné que la recherche dépend de la requête, lancez la recherche à chaque changement de la requête
    const fetchSearchResults = async () => {
      try {
        const data = await getTracks(); // Remplacez par la fonction de recherche appropriée
        const filteredResults = data.filter((track) =>
          track.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Search Error:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]); // Re-exécutez la recherche chaque fois que la requête change

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {/* Champ de recherche */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for songs..."
        className="p-2 border border-neutral-500 rounded-md"
      />

      {/* Résultats de la recherche */}
      {searchResults.length === 0 ? (
        <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
          No songs found.
        </div>
      ) : (
        searchResults.map((track: Track) => (
          <div key={track._id} className="flex items-center gap-x-4 w-full">
            <div className="flex-1">
              <MediaItem onClick={() => {}} data={track} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchContent;
