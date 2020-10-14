const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: {type: String},
  lastName: {type: String },
  profilePicture: {type: String, default:'https://res.cloudinary.com/timothee-nicole/image/upload/v1602682004/de_iy5ov1.jpg'},
  phoneNumber: String,
  trips: [{type: Schema.Types.ObjectId, ref: "Trip"}],
  birthDate: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
