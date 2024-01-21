// tracks.services.ts

const API_URL_BASE: string = 'http://16.171.148.207:9000/api';

export interface Track {
  _id: string;
  title: string;
  duration: string;
  artist: {
    _id: string;
    name: string;
  }
  cover: string;
  url: string;
}

export interface Artist {
  _id: string;
  name: string;
}

export const getTracks = (): Promise<Track[]> => {
  return fetch(`${API_URL_BASE}/track`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() as Promise<Track[]>;
    })
    .catch((error) => {
      console.error('Error fetching tracks:', error);
      throw error;
    });
};

export const getArtists = (): Promise<Artist[]> => {
  return fetch(`${API_URL_BASE}/artist`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() as Promise<Artist[]>;
    })
    .catch((error) => {
      console.error('Error fetching artists:', error);
      throw error;
    });
};

export const getAllArtists = (): Promise<Artist[]> => {
  return fetch(`${API_URL_BASE}/artists`) // Vérifiez que la route correcte est utilisée
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() as Promise<Artist[]>;
    })
    .catch((error) => {
      console.error('Error fetching all artists:', error);
      throw error;
    });
};

export const getOneArtist = (id: string): Promise<Artist> => {
  return fetch(`${API_URL_BASE}/artist/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() as Promise<Artist>;
    })
    .catch((error) => {
      console.error('Error fetching artist:', error);
      throw error;
    });
};

export default getTracks;
