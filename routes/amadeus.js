const express = require('express');
const router = express.Router();

const amadeus = require("../config/amadeus")
// Tour And Activities
router.get("/paris", (req, res, next) => {
    amadeus
    .shopping
    .activities
    .get({
        latitude : 48.866667,
        longitude : 2.333333,
        radius: 10,
    })
    .then((apiRes) => {
       res.json(apiRes.data);
       console.log(apiRes)
    })
    .then((nextApiRes) => {
        console.log("toto" , nextApiRes)
    })
    .catch((apiErr) => {
        console.log(apiErr.code);
        res.status(500).json(apiErr.code)
    })
});

router.get("/london", (req, res, next) => {
    amadeus
    .shopping
    .activities
    .get({
        latitude : 	51.509865,
        longitude : -0.118092,
        radius: 10,
    })
    .then((apiRes) => {
       res.json(apiRes.data);
       console.log(apiRes)
    })
    .then((nextApiRes) => {
        console.log("toto" , nextApiRes)
    })
    .catch((apiErr) => {
        console.log(apiErr.code);
        res.status(500).json(apiErr.code)
    })
});

router.get("/berlin", (req, res, next) => {
    amadeus
    .shopping
    .activities
    .get({
        latitude : 52.520008,
        longitude : 13.404954,
        radius: 10,
    })
    .then((apiRes) => {
       res.json(apiRes.data);
       console.log(apiRes)
    })
    .then((nextApiRes) => {
        console.log("toto" , nextApiRes)
    })
    .catch((apiErr) => {
        console.log(apiErr.code);
        res.status(500).json(apiErr.code)
    })
});

router.get("/barcelona", (req, res, next) => {
    amadeus
    amadeus.shopping.activities.bySquare.get({
        north: 41.397158,
        west: 2.160873,
        south: 41.394582,
        east: 2.177181
    })
    .then((apiRes) => {
       res.json(apiRes.data);
       console.log(apiRes)
    })
    .catch((apiErr) => {
        console.log(apiErr.code);
        res.status(500).json(apiErr.code)
    })
});




module.exports = router