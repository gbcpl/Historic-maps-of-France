const Header = () => (
  <div
    style={{
      backgroundColor: '#f0f0f0', // Optionnel : couleur d'arrière-plan
      textAlign: 'center', // Centre le texte horizontalement
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optionnel : ajoute une ombre pour un effet élégant
      position: 'fixed', // Reste en haut de la page
      top: 0, // Position alignée en haut
      width: '100%', // Occupe toute la largeur de la page
      zIndex: 1000, // Assure que le header est au-dessus des autres éléments
    }}
  >
    <h1>Interactive map of France</h1>
  </div>
);

export default Header;