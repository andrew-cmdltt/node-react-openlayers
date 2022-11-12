const res = require("express/lib/response");
const db = require("../db")
const log4js = require("log4js");
log4js.configure({
    appenders: { locationsLogs: { type: "file", filename: "locationsLogs.log" } },
    categories: { default: { appenders: ["locationsLogs"], level: "info" } },
});

const logger = log4js.getLogger("locationsLogs");

class LocationsController {
    async getLocations(req, res) {
        const locations = await db.query("SELECT * FROM locations")

        if (locations.rows.length !== 0) {
            logger.info("Locations was received successfully");
        } else {
            logger.error("Locations not received");
        }

        res.json(locations.rows)
    }
}

module.exports = new LocationsController()