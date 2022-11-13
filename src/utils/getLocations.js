import axios from "axios";
import { tour } from "./tour";

export function getLocations(view) {
    axios.get("https://node-react-openlayers.herokuapp.com/api/locations")
        .then(res => {
            tour(res.data, view)
        })
}