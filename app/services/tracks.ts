// tracks.services.ts

const API_URL_BASE: string = 'http://localhost:9000/api';

export interface Track {
  _id: string;
  title: string;
  duration: string;
  artist: string;
  cover: string;
  metadata: string;
}

const getTracks = (): Promise<Track[]> => {
  return fetch(`${API_URL_BASE}/track`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() as Promise<Track[]>; // Ajout du cast pour indiquer le type de retour
    })
    .catch((error) => {
      console.error('Error fetching tracks:', error);
      throw error;
    });
};

export default getTracks;
