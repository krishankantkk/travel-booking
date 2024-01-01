import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css';
import { FaMapPin } from "react-icons/fa";
const MapView = ({ listings }) => {
  // Ensure that the listings array exists
  if (!listings || listings.length === 0) {
    return null; // If no listings, render nothing
  }

  // Define a custom pointer icon
  const pointerIcon = new L.Icon({
    iconUrl: FaMapPin, // Provide the path to your custom pointer icon
    iconSize: [32, 32], // Adjust the size of the icon
    iconAnchor: [16, 32], // Adjust the anchor point of the icon
    popupAnchor: [0, -32], // Adjust the popup anchor point
  });

  return (
    <MapContainer className='border-solid border-white ' center={[listings[0].latitude, listings[0].longitude]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      
      {listings.map((item, index) => (
        <>
        <Marker key={index} position={[item.latitude, item.longitude]} icon={pointerIcon} title={item.name} alt={item.name}>
          {item.name}
          <Popup>
            <div>
              <strong>{item.name}</strong>
              <p>Latitude: {item.latitude}</p>
              <p>Longitude: {item.longitude}</p>
            </div>
          </Popup>
        </Marker>
        <FaMapPin />
        </>
      ))}
    </MapContainer>
  );
};

export default MapView;
