const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bookingSchema = new Schema({
  babysitterName: [
    { type: mongoose.Schema.Types.ObjectId, ref: "babysitterName" },
  ],
  dateOfService: Date, // Date
  durationOfService: Number,
  pricePerHour: Number,
});

module.exports = model("Booking", bookingSchema);
