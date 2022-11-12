const Router = require("express")
const router = new Router()
const locationsController = require("../controllers/locations.controller")

router.get("/locations", locationsController.getLocations)

module.exports = router 