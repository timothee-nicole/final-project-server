const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    dateBegin: {type: Date, required:true},
    dateEnd: {type: Date, required:true},
    tripLength: Number,
    destination: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    tour: [{type: Schema.Types.ObjectId, ref: "Tour"}],
    organisation: [],
    pointsOfInterest: []
})

const TripModel = mongoose.model('Trip', TripSchema)

module.exports = TripModel