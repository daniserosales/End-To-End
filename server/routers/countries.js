const { Router } = require('express');

//Bring in our controller to get information on country
const countryController = require("../controllers/countries")

//Initialise our router
const countryRouter = Router ();

//Define the route we want to hit and the controller which will be executed
countryRouter.get("/", countryController.index);
countryRouter.get("/:name", countryController.show);
countryRouter.post("/", countryController.create);
countryRouter.delete("/:name", countryController.destroy)

module.exports = countryRouter;
