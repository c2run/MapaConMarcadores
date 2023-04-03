import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import { L,Icon, marker } from "leaflet";
import Modal from "./Modal";

function App() {
  
  const [abrirModal, setAbrirModal] = useState(false);

  const marcadores = [
    {
        geocode: [-34.170500388817594, -70.7418826042293],
        popUp: "Pop up 1!"
    },
    {
        geocode: [-34.17028732281829, -70.73596040859776],
        popUp: "Hola soy un pop 2"
    },
    {
        geocode: [-34.17324325871442, -70.73862107668197],
        popUp: "Hola soy un pop 3"
    },
    {
        geocode: [-34.168276752954704, -70.74236542857214],
        popUp: "Marcador pop 4"
    },
    {
      geocode: [-34.16898670231962, -70.74800881609326],
      popUp: "Marcador pop 5"
    }
    ];

  return (
    <MapContainer center={[-34.1702607423072, -70.74072389897137]} zoom={16}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
     {marcadores.map(marker => (
      <Marker position={marker.geocode}>
      <Popup><h2>{marker.popUp}</h2> 
      <hr></hr>
      <button className="modalBTN" onClick={() => setAbrirModal(true)}>Modal</button>
      <Modal open={abrirModal} onClose={() => setAbrirModal(false) } />
      </Popup>
      </Marker>
     ))}
    
    </MapContainer>
  );
}

export default App;
