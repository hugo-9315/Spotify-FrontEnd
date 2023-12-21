import { useEffect, useMemo, useState } from "react";
import getTracks, { Track } from "@/app/services/tracks";

const useGetSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [track, setTrack] = useState<Track | undefined>(undefined);

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true);

    const fetchSong = async () => {
      try {
        const tracks = await getTracks();
        const foundSong = tracks.find((track) => track._id === id);

        if (foundSong) {
          setTrack(foundSong);
        } else {
          console.error(`Track with ID ${id} not found`);
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSong();
  }, [id]);

  return useMemo(() => ({ isLoading, track }),[isLoading, track]);
};

export default useGetSongById;
