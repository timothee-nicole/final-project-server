const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourSchema = new Schema({
    amadeusId: String,
    type: String,
    self: {
        href: String,
        methods: [String]
    },
    name: String,
    shortDescription: String,
    geoCode: {
        latitude: String,
        longitude: String,
    },
    rating: String,
    pictures: [String],
    bookingLink: String,
    price: {
        currencyCode: String,
        amount: String
    },
    destination: String
})

const TourModel = mongoose.model("Tour", TourSchema)
module.exports = TourModel