import {fromLonLat} from 'ol/proj';

export function convertLocations(latitude, longitude) {
    return fromLonLat([latitude, longitude])
}