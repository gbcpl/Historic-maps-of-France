
import { Chrono } from "react-chrono";

const LeftBorder = ({ onChangeMap }) => {
  const items = [
    {
      title: "1030",
    },
    {
      title: "1180",
    },
    {
      title: "1477",
    }]
  
    const handleTimelineClick = (selectedItem) => {
    if (onChangeMap) {
      onChangeMap(selectedItem.title); // Appelle la fonction avec l'année sélectionnée
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '15vw',
        padding: '20px',
        position: 'fixed',
        top: '12vh',
        left: 0,
        overflowY: 'auto',
      }}
    >
      <h2 style={{ margin: '0px', marginBottom: '10px' }}>Chronology</h2>
      <div style={{ width: "100%", justifyContent: 'center' }}>
        <Chrono items={items} mode="VERTICAL" cardLess="true" timelinePointShape="diamond" onItemSelected={handleTimelineClick} scrollable="true" />
      </div>
    </div>
  );
};

export default LeftBorder;