const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    dateBegin: Date,
    dateEnd: Date,
    destination: String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    tour: [String],
    pointOfInterest: [String]
})

const TripModel = mongoose.model('Trip', TripSchema)

module.exports = TripModel