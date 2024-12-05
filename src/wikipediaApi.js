export const fetchWikipediaInfo = async (regionId) => {
  try {
    const encodedId = encodeURIComponent(regionId);
    const response = await fetch(`http://localhost:3000/wikipedia/${encodedId}`);
    console.log(response.data);
    if (response.ok) {
      const data = await response.json();
      return data.extract;  // Le texte extrait de Wikipedia
    } else {
      throw new Error('Erreur lors de la récupération des données');
    }
  } catch (error) {
    console.error('Erreur:', error);
    return 'Désolé, une erreur s\'est produite.';
  }
};