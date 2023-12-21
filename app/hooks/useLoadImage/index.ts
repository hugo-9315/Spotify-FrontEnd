// Assurez-vous d'importer correctement les dépendances nécessaires
import axios from 'axios'; // Importez Axios ou votre bibliothèque de requêtes HTTP

const useLoadImageFromBackend = async (coverPath: any) => {
  if (!coverPath) {
    return null;
  }

  try {
    // Utilisez Axios pour effectuer la requête GET
    const response = await axios.get(`http://localhost:9000/api/cover/${encodeURIComponent(coverPath)}`, {
      responseType: 'arraybuffer', // Assurez-vous de définir le bon type de réponse
    });

    // Convertissez la réponse en base64
    const base64Image = `data:image/jpeg;base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
    
    return base64Image;
  } catch (error) {
    console.error('Error loading image from backend:', error);
    return null;
  }
};

export default useLoadImageFromBackend;
