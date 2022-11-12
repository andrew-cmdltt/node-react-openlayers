import React, { useState, useEffect, useRef } from 'react';
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

function MapWrapper(props) {
  const london = fromLonLat([-0.12755, 51.507222]);
  const moscow = fromLonLat([37.6178, 55.7517]);
  const istanbul = fromLonLat([28.9744, 41.0128]);
  const rome = fromLonLat([12.5, 41.9]);
  const bern = fromLonLat([7.4458, 46.95]);

  const initialView = new View({
    center: istanbul,
    zoom: 6,
  });

  const [map, setMap] = useState()
  const [view, setView] = useState(initialView)

  const mapElement = useRef()

  const mapRef = useRef()
  mapRef.current = map

  const handleMapClick = () => {    
    tour()
  }

  function tour() {
    const locations = [london, bern, rome, moscow, istanbul];
    let index = -1;
    function next(more) {
      if (more) {
        ++index;
        if (index < locations.length) {
          const delay = index === 0 ? 0 : 750;
          setTimeout(function () {
            flyTo(locations[index], next);
          }, delay);
        } else {
          alert('Tour complete');
        }
      } else {
        alert('Tour cancelled');
      }
    }
    next(true);
  }

  function flyTo(location, done) {
    const duration = 2000;
    const zoom = view.getZoom();
    let parts = 2;
    let called = false;
    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;
        done(complete);
      }
    }
    view.animate(
      {
        center: location,
        duration: duration,
      },
      callback
    );
    view.animate(
      {
        zoom: zoom - 1,
        duration: duration / 2,
      },
      {
        zoom: zoom,
        duration: duration / 2,
      },
      callback
    );
  }

  useEffect(() => {
    console.log("component was updated");
  
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

    initialView.animate({
      center: moscow,
      duration: 2000,
    });

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