const express = require('express');
const router = express.Router();
const amadeus = require("../config/amadeus")

// const axios = require("axios");

// const qs = require("qs")


// axios.post(`https://test.api.amadeus.com/v1/security/oauth2/token`, qs.stringify({grant_type: "client_credentials",
// client_id: process.env.AMADEUS_API_KEY, client_secret: process.env.AMADEUS_API_SECRET}), { headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
// }}).then(resp => {
//     console.log(resp.data.access_token)

// }).catch(error => {
//     console.log(error.response.data)
// })



// const amadeuseWrapper = async () => {
//    const res =  await axios.post(`https://test.api.amadeus.com/v1/security/oauth2/token`, qs.stringify({grant_type: "client_credentials",
//     client_id: process.env.AMADEUS_API_KEY, client_secret: process.env.AMADEUS_API_SECRET}), { headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }});


//     const service=  axios.create({
//     baseURL: "https://test.api.amadeus.com/v2",
//     headers:{
//         Authorization: `Bearer ${res.data.access_token}`  
//     }
//     })
//     return service;
// }

// const toto =  amadeuseWrapper();

// Tour And Activities

router.get("/activities/paris", (req, res, next) => {
    amadeus.shopping.activities.bySquare.get({
        north: 48.91,
        west: 2.25,
        south: 48.80,
        east: 2.46,
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

router.get("/activities/london", (req, res, next) => {
    amadeus.shopping.activities.bySquare.get({
        north: 51.520180,
        west: -0.169882,
        south: 51.484703,
        east: -0.061048,
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

router.get("/activities/berlin", (req, res, next) => {
    amadeus.shopping.activities.bySquare.get({
        north: 52.541755,
        west: 13.354201,
        south: 52.490569,
        east: 13.457198,
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

router.get("/activities/barcelona", (req, res, next) => {
    amadeus.shopping.activities.bySquare.get({
        north: 41.42,
        west: 2.11,
        south: 41.347463,
        east: 2.228208,
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

router.get("/activity/:activityId", (req, res, next) => {
    amadeus
        .shopping
        .activity(req.params.activityId)
        .get()
        .then((apiRes) => {
            res.status(200).json(apiRes.data)
        })
        .catch((apiErr)  => {
            res.status(500).json(apiErr)
        })
});


// Points Of Interest

router.get("/points-of-interest/paris", (req, res, next) => {

    toto.then(service => {
        service.get("/reference-data/urls/checkin-links?airline=IB").then(pp => console.log(pp)).catch(error => {
            console.log("fooo,",error.response.data)
        })
    })

    amadeus
        .referenceData
        .locations
        .pointsOfInterest
        .bySquare
        .get({
            north: 48.91,
            west: 2.25,
            south: 48.80,
            east: 2.46,
            page: {limit: 1, offset: 2}
            
        })
        .then((apiRes) => {
            res.status(200).json(apiRes.data)
          //  console.log(apiRes)
        })
        .catch((apiErr)  => {
            res.status(500).json(apiErr)
            console.log(apiErr)
        })
});

router.get("/points-of-interest/london", (req, res, next) => {
    amadeus
        .referenceData
        .locations
        .pointsOfInterest
        .bySquare
        .get({
            north: 51.520180,
            west: -0.169882,
            south: 51.484703,
            east: -0.061048,
            
        })
        .then((apiRes) => {
            res.status(200).json(apiRes.data)
            console.log(apiRes)
        })
        .catch((apiErr)  => {
            res.status(500).json(apiErr)
            console.log(apiErr)
        })
});

router.get("/points-of-interest/berlin", (req, res, next) => {
    amadeus
        .referenceData
        .locations
        .pointsOfInterest
        .bySquare
        .get({
            north: 52.541755,
            west: 13.354201,
            south: 52.490569,
            east: 13.457198,
            
        })
        .then((apiRes) => {
            res.status(200).json(apiRes.data)
            console.log(apiRes)
        })
        .catch((apiErr)  => {
            res.status(500).json(apiErr)
            console.log(apiErr)
        })
});

router.get("/points-of-interest/barcelona", (req, res, next) => {

  //  amadeus.referenceData.locations.get({page: {limit: 1000}}).then(resp => res.json(resp))
 

    amadeus
        .referenceData
        .locations
        .pointsOfInterest
        .bySquare
        .get({
            north: 41.42,
            west: 2.11,
            south: 41.347463,
            east: 2.228208,
            page: {limit: 1},
            // categories: ["SIGHTS"]
        
           
        })
        .then((apiRes) => {
            res.status(200).json(apiRes.data)
            console.log(apiRes)
        })
        .catch((apiErr)  => {
            res.status(500).json(apiErr)
            console.log(apiErr)
        })
});

router.get("/points-of-interest/:pointsOfInterestId", (req, res, next) => {
    amadeus
        .referenceData
        .locations
        .pointsOfInterest(req.params.pointsOfInterestId)
        .bySquare
        .get({
            north: 41.42,
            west: 2.11,
            south: 41.347463,
            east: 2.228208,
            
        })
        .then((apiRes) => {
            res.status(200).json(apiRes.data)
            console.log(apiRes)
        })
        .catch((apiErr)  => {
            res.status(500).json(apiErr)
            console.log(apiErr)
        })
});

module.exports = router