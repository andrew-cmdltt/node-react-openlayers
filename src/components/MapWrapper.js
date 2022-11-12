import React, { useState, useEffect, useRef, useContext } from 'react';
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {tour} from "../utils/tour"
import { LocationsContext } from '../contexts/LocationsContext';

function MapWrapper(props) {
  const {locations} = useContext(LocationsContext)

  const initialView = new View({
    center: fromLonLat([37.6178, 55.7517]),
    zoom: 6,
  });

  const [map, setMap] = useState()
  const [view, setView] = useState(initialView)

  const mapElement = useRef()
  const mapRef = useRef()
  mapRef.current = map

  const handleMapClick = () => {    
    tour(locations, view)
  }

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          preload: 4,
          source: new OSM(),
        }),
      ],
      view: initialView,
      controls: []
    })

    setMap(initialMap)
    setView(initialView)
  }, [])

  return (
    <div>
      <div ref={mapElement} className="map-container"></div>
      <div className="clicked-coord-label">
        <button onClick={handleMapClick}>Take a tour</button>
      </div>
    </div>
  )

}

export default MapWrapper