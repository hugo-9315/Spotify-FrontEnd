import { useState, useEffect, useMemo } from 'react';
import getTracks, { Track } from '@/app/services/tracks';

const useGetTracksByTitle = (title: string): { isLoading: boolean; tracks: Track[] } => {
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setIsLoading(true);

        if (!title) {
          const allTracks = await getTracks();
          setTracks(allTracks);
        } else {
          const filteredTracks = (await getTracks()).filter((track) =>
            track.title.toLowerCase().includes(title.toLowerCase())
          );
          setTracks(filteredTracks);
        }
      } catch (error) {
        console.error('Error fetching tracks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTracks();
  }, [title]);

  return useMemo(() => ({ isLoading, tracks }), [isLoading, tracks]);
};

export default useGetTracksByTitle;
