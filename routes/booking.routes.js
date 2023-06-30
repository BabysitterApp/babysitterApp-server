const router = require("express").Router();
// const mongoose = require("mongoose");

const Booking = require("../models/Booking.model");
const BabysitterService = require("../models/BabysitterServices.model");

//  POST /api/booking  -  Creates a new booking
router.post("/babysitterServices/booking", (req, res, next) => {
  const { babysitterName, dateOfService, durationOfService, pricePerHour } =
    req.body;

  const newBooking = {
    babysitterName: babysitterName,
    dateOfService: dateOfService,
    durationOfService: durationOfService,
    pricePerHour: pricePerHour,
  };

  Booking.create(newBooking)
    .then((bookingFromDB) => {
      return Booking.findByIdAndUpdate(bookingId);
    })
    .then((response) => res.status(201).json(response))
    .catch((err) => {
      console.log("error creating a new booking", err);
      res.status(500).json({
        message: "error creating a new booking",
        error: err,
      });
    });
});

module.exports = router;
