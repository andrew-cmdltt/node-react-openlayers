import { flyTo } from "./flyTo";

export function tour(locations, view) {
    let index = -1;
    function next(more) {
        if (more) {
            ++index;
            if (index < locations.length) {
                const delay = index === 0 ? 0 : 750;
                setTimeout(function () {
                    flyTo(locations[index], next, view);
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