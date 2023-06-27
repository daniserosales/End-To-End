const Country = require("../models/Country")

async function index(req, res) {
    try {
        const countries = await Country.getAll(countries);
        res.status(200).send(countries)
    } catch(err) {
        res.status(500).send({"error": err.message})
        }
}   

async function show(req, res) {
    try {
        const name = req.params.name.toLowerCase();
        const country = await Country.getOneByCountryName(name)
        res.status(200).send(country);
    } catch(err) {
        res.status(404).send({"error": err.message})
        }
}

async function create(req, res) {
    try {
        const data = req.body;
        const newCountry = await Country.createCountry(data)
        res.status(201).send(newCountry);
    } catch(err) {
        res.status(400).send({"error": err.message})
    }
}
async function destroy(req,res) {
   try {
        const name = req.params.name.toLowerCase()
        const country = await Country.getOneByCountryName(name)
        const result = await country.destroy();
        res.sendStatus(204).end();
   } catch(err) {
        res.status(500).send({error: "Failed to delete country."})
   }
}
module.exports = {
    index,
    show,
    create,
    destroy
 }
