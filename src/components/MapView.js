
import 'leaflet/dist/leaflet.css';
import { MapContainer,useMap, } from 'react-leaflet'

function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
} 
const MapView = () => {
  return <div id="map" style={{ height: '400px' }}>
 <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent />
    </MapContainer>
  </div>;
};

export default MapView;

