import React, { createContext } from 'react'
import useAxios from 'axios-hooks'

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
    const [{data}] = useAxios("http://localhost:8080/api/locations")
    console.log(data);
    const locations = data

    return (
        <LocationsContext.Provider value={{ locations }}>
            {props.children}
        </LocationsContext.Provider>
    )
}

export default LocationsContextProvider