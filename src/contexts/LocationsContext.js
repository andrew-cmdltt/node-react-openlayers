import React, { createContext } from 'react'
import {fromLonLat} from 'ol/proj';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
    const london = fromLonLat([-0.12755, 51.507222]);
    const istanbul = fromLonLat([28.9744, 41.0128]);
    const rome = fromLonLat([12.5, 41.9]);
    const bern = fromLonLat([7.4458, 46.95]);
  
    const locations = [london, bern, rome, istanbul];

    return (
        <LocationsContext.Provider value={{ locations }}>
            {props.children}
        </LocationsContext.Provider>
    )
}

export default LocationsContextProvider