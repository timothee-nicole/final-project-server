const express = require('express');
const router = express.Router()
const TripModel = require('../models/Trip')

router.get("/", (req, res, next) => {
    // console.log('toto')
    TripModel
        .find()
        .populate("tour organisation.tourId")
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
        .populate("tour organisation.tourId")
        .then((dbRes) => {
            console.log(dbRes)
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
    console.log(req.body.organisation,"before")
    req.body.organisation = req.body.organisation.map( org => ({tourId: org.tourId._id || org.tourId, day: org.day }))
    console.log(req.body.organisation,"after")
    TripModel
        .findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("tour organisation.tourId")
        .then((dbRes) => {
            console.log(dbRes, "dbRes pop")
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