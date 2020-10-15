const axios = require('axios')
const express = require('express')
const router = express.Router()



router.get("/", async (req, res, next) => {
    console.log('toto')
    axios
        .get(`https://api.opentripmap.com/0.1/en/places/radius?radius=20000&lon=2.349014&lat=48.864716& limit=1000&apikey=5ae2e3f221c38a28845f05b6a4983bcf649f7495fb8f3ee9ea1bfe77`)
        .then((apiRes) => {
            res.json(apiRes.data)
            console.log(apiRes.data)
        })
        .catch((apiErr)  => {
            // res.status(500).json(apiErr)
            console.log(apiErr)
        })
});

// Et ca marche ! a refaire pour Berlin Londres et Barcelone 

module.exports = router;