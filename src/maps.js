import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './MapMarker';

function MapContainer(props) {
  const [places, setPlaces] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const service = new props.google.maps.places.PlacesService(document.createElement('div'));

    service.nearbySearch(
      {
        location: props.center,
        radius: 5000,
        type: 'restaurant'
      },
      (results, status) => {
        if (status === props.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      }
    );
  }, [props.center, props.google.maps.places.PlacesServiceStatus.OK]);

  useEffect(() => {
    // Load a list of cities from your database or a third-party API
    setCities(['New York', 'San Francisco', 'Chicago']);
  }, []);

  const handleCityToggle = (city) => {
    // Filter the list of nearby places based on the selected city
    const filteredPlaces = places.filter(place => place.vicinity.includes(city));
    setPlaces(filteredPlaces);
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: props.apiKey }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {places.map(place => (
          <MapMarker
            key={place.id}
            lat={place.geometry.location.lat()}
            lng={place.geometry.location.lng()}
            name={place.name}
            address={place.vicinity}
          />
        ))}
      </GoogleMapReact>
      <div>
        {cities.map(city => (
          <button key={city} onClick={() => handleCityToggle(city)}>
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MapContainer;
