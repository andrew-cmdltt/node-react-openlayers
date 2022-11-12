import React, { useState, useEffect, useRef } from 'react';
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {tour} from "../utils/tour"

function MapWrapper(props) {
  const london = fromLonLat([-0.12755, 51.507222]);
  const istanbul = fromLonLat([28.9744, 41.0128]);
  const rome = fromLonLat([12.5, 41.9]);
  const bern = fromLonLat([7.4458, 46.95]);

  const locations = [london, bern, rome, istanbul];

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