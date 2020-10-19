const express = require("express");
const router = express.Router();
const Tour = require('../models/Tour')

router.get("/destination/:desti", (req, res, next) => {
    Tour
        .find({destination: req.params.desti})
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
})


router.get("/:id", (req, res, next) => {
    Tour
        .findById(req.params.id)
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
})

module.exports = router