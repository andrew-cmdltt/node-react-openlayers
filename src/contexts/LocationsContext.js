import React, { createContext } from 'react'

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
    const locations = [
        {
            title: "London",
            latitude: -0.12755,
            longitude: 51.507222
        },
        {
            title: "Istanbul",
            latitude: 28.9744,
            longitude: 41.0128
        },
        {
            title: "Rome",
            latitude: 12.5,
            longitude: 41.9
        },
        {
            title: "Bern",
            latitude: 7.4458,
            longitude: 46.95
        },
    ];

    return (
        <LocationsContext.Provider value={{ locations }}>
            {props.children}
        </LocationsContext.Provider>
    )
}

export default LocationsContextProvider