import React, { useState, useEffect } from 'react';
import './App.css';
import GeoJSON from 'ol/format/GeoJSON'
import MapWrapper from './components/MapWrapper'
import LocationsContextProvider from './contexts/LocationsContext';

function App() {
  const [features, setFeatures] = useState([])

  useEffect(() => {
    fetch('/mock-geojson-api.json')
      .then(response => response.json())
      .then((fetchedFeatures) => {
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857'
        }
        const parsedFeatures = new GeoJSON().readFeatures(fetchedFeatures, wktOptions)
        setFeatures(parsedFeatures)
      })
  }, [])

  return (
    <div className="App">
      <LocationsContextProvider>
        <MapWrapper features={features} />
      </LocationsContextProvider>
    </div>
  )
}

export default App
