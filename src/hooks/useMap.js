import { useRef, useEffect, useState } from "react";
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

export function useMap() {
    const initialView = new View({
        center: fromLonLat([37.6178, 55.7517]),
        zoom: 6,
    });

    const [map, setMap] = useState()
    const [view, setView] = useState(initialView)

    const mapElement = useRef()
    const mapRef = useRef()
    mapRef.current = map

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

    return [view, mapElement]
}