const axios = require('axios')
const express = require('express')
const router = express.Router()



router.get("/:ville", async (req, res, next) => {
    console.log('toto')
    const ville = 
    {paris: `https://api.opentripmap.com/0.1/en/places/radius?radius=20000&lon=2.349014&lat=48.864716&limit=1000&apikey=${process.env.OPENTRIPMAP_API_KEY}`, 
    berlin: `https://api.opentripmap.com/0.1/en/places/radius?radius=20000&lon=13.404954&lat=52.520008&limit=1000&apikey=${process.env.OPENTRIPMAP_API_KEY}`,
    london: `https://api.opentripmap.com/0.1/en/places/radius?radius=20000&lon=-0.118092&lat=51.509865&limit=1000&apikey=${process.env.OPENTRIPMAP_API_KEY}`,
    barcelona: `https://api.opentripmap.com/0.1/en/places/radius?radius=20000&lon=2.154007&lat=41.390205&limit=1000&apikey=${process.env.OPENTRIPMAP_API_KEY}`
}
    axios
        .get(ville[req.params.ville])
        .then((apiRes) => {
            res.json(apiRes.data)
            // console.log(apiRes.data)
        })
        .catch((apiErr)  => {
            // res.status(500).json(apiErr)
            console.log(apiErr)
        })
});

router.get

// Et ca marche ! a refaire pour Berlin Londres et Barcelone 

module.exports = router;