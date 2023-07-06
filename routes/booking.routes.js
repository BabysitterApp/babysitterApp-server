const router = require("express").Router();
// const mongoose = require("mongoose");

const Booking = require("../models/Booking.model");
const BabysitterService = require("../models/BabysitterServices.model");

//  POST /api/booking  -  Creates a new booking
router.post("/babysitterServices/booking", (req, res, next) => {
  const { babysitterServicesId, dateOfServices, durationOfServices, pricePerHour } =
    req.body;
console.log(req.body);
  const newBooking = {
    babysitterName: babysitterServicesId,
        dateOfServices: dateOfServices,
    durationOfServices: durationOfServices,
    pricePerHour: pricePerHour,
  };

  Booking.create(newBooking)
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
