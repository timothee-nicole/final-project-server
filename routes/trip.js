const express = require('express');
const router = express.Router()
const TripModel = require('../models/Trip')

router.get("/", (req, res, next) => {
    // console.log('toto')
    TripModel
        .find()
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
});

router.get("/:id", (req, res, next) => {
    TripModel
        .findById(req.params.id)
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
});

router.post("/", (req, res, next) => {
    TripModel
        .create(req.body)
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
});

router.patch("/:id", (req, res, next) => {
    TripModel
        .findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
});

router.delete("/:id", (req, res, next) => {
    TripModel
        .findByIdAndRemove(req.params.id)
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
});

module.exports = router;