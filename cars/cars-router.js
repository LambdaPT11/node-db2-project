const express = require("express");
const router = express.Router();

const db = require('../data/db-config');



router.get('/', (req, res) => {
    db('cars-db')
        .then(rows => {
            res.status(200).json({ data: rows })
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to get cars' })
        })
});

router.post('/', (req, res) => {
    db('cars-db')
        .insert(req.body, "id")
        .then(ids => {
            res.status(201).json({ results: ids });
        })
        .catch(error => {
            res.status(500).json({ error: "post went wrong" });
        });
});

module.exports = router;