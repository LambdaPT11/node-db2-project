const express = require("express");

const db = require('../knexconfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to get cars' })
        })
});

module.exports = router;