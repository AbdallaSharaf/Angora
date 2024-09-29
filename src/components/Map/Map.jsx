import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerSize = [35, 61]; // Adjust size here

const redMarkerIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${markerSize[0]}" height="${markerSize[1]}" viewBox="0 0 25 41">
      <path fill="rgba(255, 0, 0, 0.5)" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 8.8 12.5 28.5 12.5 28.5S25 21.3 25 12.5C25 5.6 19.4 0 12.5 0zm0 19.4c-3.9 0-7.1-3.2-7.1-7.1 0-3.9 3.2-7.1 7.1-7.1 3.9 0 7.1 3.2 7.1 7.1 0 3.9-3.2 7.1-7.1 7.1z"/>
      <circle cx="12.5" cy="12.5" r="7" fill="darkred" /> <!-- Inner dot -->
    </svg>`),
  iconSize: markerSize,
  iconAnchor: [markerSize[0] / 2, markerSize[1]],
  popupAnchor: [1, -34],
});

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const MapComponent = () => {
  const [position, setPosition] = useState(null); // Default to null
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          setHasLocation(true);
        },
        (error) => {
          console.error(error);
          setHasLocation(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="relative h-[250px] md:h-[450px] w-full">
      {position && (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%", zIndex: 0 }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={redMarkerIcon}>
            <Popup>
              You are here! <br /> Latitude: {position[0]}, Longitude: {position[1]}
            </Popup>
          </Marker>
        </MapContainer>
      )}
      <div className="w-full absolute bottom-[-25px] z-10 flex justify-center"> {/* Ensure z-10 to bring button forward */}
        <div
          onClick={scrollToTop}
          className="flex items-center  justify-center opacity-70 h-12 w-12 text-white rounded-full bg-[#f25454] hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <FontAwesomeIcon className="text-white" icon={faChevronUp} />
        </div>
      </div>
      {!position && <p>Loading map...</p>}
    </div>
  );
};

export default MapComponent;
