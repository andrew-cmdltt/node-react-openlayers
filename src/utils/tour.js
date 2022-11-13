import { flyTo } from "./flyTo";
import { convertLocations } from "./convertLocation";

export function tour(locations, view) {
    let index = -1;
    function next(more) {
        if (more) {
            ++index;
            if (index < locations.length) {
                const delay = index === 0 ? 0 : 750;
                setTimeout(function () {
                    flyTo(convertLocations(locations[index].latitude, locations[index].longitude), next, view);
                }, delay);
            }
        }
    }
    next(true);
}