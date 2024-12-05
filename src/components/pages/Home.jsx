import { useState } from 'react';
import MapFrance1030 from '../../assets/MapFrance1030.svg?react';
import MapFrance1180  from '../../assets/MapFrance1180.svg?react';
import MapFrance1477 from '../../assets/MapFrance1477.svg?react';
import LeftBorder from '../LeftBorder';
import Header from '../Header';
import { fetchWikipediaInfo } from '../../wikipediaApi.js'

const App = () => {
  const [wikiInfo, setWikiInfo] = useState(''); // Contient les informations de Wikipedia
  const [openInfo, setOpenInfo] = useState(false); // Contrôle si les infos sont visibles ou non
  const [titleRegion, setTitleRegion] = useState('');
  const [selectedYear, setSelectedYear] = useState("1180"); // Année sélectionnée (par défaut 1180)

  // Gérer les clics sur la timeline
  const handleChangeMap = (year) => {
    setSelectedYear(year); // Met à jour l'année sélectionnée
  };

  const renderMap = () => {
    // Logique conditionnelle pour afficher la carte appropriée
    switch (selectedYear) {
      case "1030":
        return <MapFrance1030 onClick={handleClick} style={{ width: "100%", height: "auto" }} />;
      case "1180":
        return <MapFrance1180 onClick={handleClick} style={{ width: "100%", height: "auto" }} />;
      case "1477":
        return <MapFrance1477 onClick={handleClick} style={{ width: "100%", height: "auto" }} />;
      default:
        return <h2>Map not available for the selected year.</h2>;
    }
  };

  const handleClick = async (e) => {
    const clickedElement = e.target;

    // Vérifiez si l'élément cliqué est un <path> (ou potentiellement un <tspan>)
    if (clickedElement.tagName === 'path' || clickedElement.tagName === 'tspan') {
      const regionId = clickedElement.id; // Récupération de l'ID de la région
      console.log('ID du path:', regionId);
      setTitleRegion(regionId)

      if (regionId) {
        try {
          const info = await fetchWikipediaInfo(regionId); // Récupérer les infos de Wikipedia
          setWikiInfo(info); // Mettre à jour l'état avec les données récupérées
          setOpenInfo(true); // Afficher les infos
        } catch (error) {
          console.error('Erreur lors de la récupération des informations:', error);
          setWikiInfo("Impossible de récupérer les informations."); // Gestion des erreurs
        }
      }
    }
  };

  return (
    <div>
      <Header />
      <LeftBorder onChangeMap={handleChangeMap} />
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15vh', marginLeft: '18vw' }}>
        <div style={{ width: '100%', padding: '20px' }}>
          {renderMap()}        
        </div>
        {!openInfo && (
          <h2>Click on an element to get its description.</h2>
        )}
        {openInfo && (
        <div 
          style={{
            width: '40%',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            overflowY: 'auto',
            marginRight: '100px'
          }}
        >
          <h2>Informations about {titleRegion}</h2>
          <p>{wikiInfo}</p>
        </div>
      )}
      </div>
    </div>
  );
};


export default App