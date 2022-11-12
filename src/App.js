import React, { useState, useEffect } from 'react';
import './App.css';
import GeoJSON from 'ol/format/GeoJSON'
import MapWrapper from './components/MapWrapper'

function App() {
  const [ features, setFeatures ] = useState([])

  useEffect( () => {
    fetch('/mock-geojson-api.json')
      .then(response => response.json())
      .then( (fetchedFeatures) => {
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857'
        }
        const parsedFeatures = new GeoJSON().readFeatures(fetchedFeatures, wktOptions)
        setFeatures(parsedFeatures)
      })
  },[])
  
  return (
    <div className="App">
      <MapWrapper features={features} />
    </div>
  )
}

export default App
