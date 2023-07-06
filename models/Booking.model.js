const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bookingSchema = new Schema({
  babysitterName:
    { type: mongoose.Schema.Types.ObjectId, ref: "babysitterName" },
  dateOfServices: Date, // Date
  durationOfServices: Number,
  pricePerHour: Number,
});

module.exports = model("Booking", bookingSchema);
