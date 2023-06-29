const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bookingSchema = new Schema({
    babysitterName: String,
    dateOfService: String,
    durationOfService:Number,
    pricePerHour: Number,
    supportServices: { 
        type:String,
      enum: ["Pickup Services","Household Help", "Cooking & Feeding", "Bathe children", "Play & Read", "Put child to bed", "Help with homework","Activities"],
      },

    },)

module.exports = model('Booking', bookingSchema);