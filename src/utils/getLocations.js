import axios from "axios";
import { tour } from "./tour";

export function getLocations(view) {
    axios.get("http://localhost:8080/api/locations")
        .then(res => {
            tour(res.data, view)
        })
}