const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const babysitterSchema = new Schema({
  babysitterName: String,
  description: String,
  timeslots: String,
  languages: {
    type: String,
    enum: ["English", "German", "Spanish", "French"],
  },
  yearsOfExperience: Number,
  provideServiceFor: {
    type: String,
    enum: ["Baby(0-2yr)", "toddler(2-4yr)", "Child(4-10yr)"],
  },
  pricePerHour: Number,
  supportServices: {
    type: String,
    enum: [
      "Pickup Services",
      "Household Help",
      "Cooking & Feeding",
      "Bathe children",
      "Play & Read",
      "Put child to bed",
      "Help with homework",
      "Activities",
    ],
  },
});

module.exports = model("BabysitterService", babysitterSchema);
