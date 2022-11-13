import React from 'react';

import { useMap } from '../hooks/useMap';
import { getLocations } from '../utils/getLocations';

function MapWrapper() {
  const [view, mapElement] = useMap()

  const handleMapClick = () => {
    getLocations(view)
  }

  return (
    <div>
      <div ref={mapElement} className="map-container"></div>
      <div className="tour-button">
        <button onClick={handleMapClick}>Совершить тур!</button>
      </div>
    </div>
  )

}

export default MapWrapper