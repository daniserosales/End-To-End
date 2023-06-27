const Country = require("../models/Country");

async function index(req, res) {
    try {
        const countries = await Country.getAll();
        res.status(200).send(countries);
    } catch (err) {
        res.status(500).send({"error": err.message})
    }
}

async function show(req, res) {
    try {
        const name = req.params.name.toLowerCase();
        const country = await Country.getOneByCountryName(name);
        res.status(200).send(country);
    } catch (err) {
        res.status(404).send({ "error": err.message })
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        const newCountry = await Country.createCountry(data);
        res.status(201).send(newCountry);
    } catch (err) {
        res.status(400).send({"error": err.message})
    }
}

module.exports = {index, show, create}