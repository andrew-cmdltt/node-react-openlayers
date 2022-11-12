const res = require("express/lib/response");
const db = require("../db")

class LocationsController {
    async getLocations(req, res) {
        const locations = await db.query("SELECT * FROM locations")

        res.json(locations.rows)
    }
}

module.exports = new LocationsController()