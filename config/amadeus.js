var Amadeus = require('amadeus');

module.exports =  new Amadeus({

    clientId: process.env.AMADEUS_API_KEY,
    clientSecret: process.env.AMADEUS_API_SECRET
})

