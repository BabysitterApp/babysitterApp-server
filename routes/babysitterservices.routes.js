const router = require("express").Router();

const mongoose = require("mongoose");

const BabysitterServices = require("../models/BabysitterServices.model");
const Booking = require("../models/Booking.model");

//  POST /api/projects  -  Creates a new babysitterServices profile
router.post("/babysitterServices/add", (req, res, next) => {
  const {
    babysitterName,
    aboutMe,
    languages,
    yearsOfExperience,
    provideServiceFor,
    pricePerHour,
    supportServices,
  } = req.body;
  console.log(req.body);
  const newBabysitterService = {
    babysitterName: babysitterName,
    aboutMe: aboutMe,
    languages: languages,
    yearsOfExperience: yearsOfExperience,
    provideServiceFor: provideServiceFor,
    pricePerHour: pricePerHour,
    supportServices: supportServices,
  };

  BabysitterServices.create(newBabysitterService)
    .then((response) => {
      res.status(201).json(response);
      console.log(response);
    })

    .catch((err) => {
      console.log("error creating a new babysitterServices", err);
      res.status(500).json({
        message: "error creating a new babysitterServices",
        error: err,
      });
    });
});

// GET /api/babysitterServices -  Retrieves all of the babysitterServices
router.get("/babysitterServices", (req, res, next) => {
  BabysitterServices.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("error getting list of babysitters", err);
      res.status(500).json({
        message: "error getting list of babysitters",
        error: err,
      });
    });
});

//  GET /api/babysitterServices/:babysitterServiceId  -  Get details of a specific babysitterServices by id
router.get("/babysitterServices/:babysitterServiceId", (req, res, next) => {
  const { babysitterServiceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(babysitterServiceId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  BabysitterServices.findById(babysitterServiceId)
    .then((babysitter) => res.json(babysitter))
    .catch((err) => {
      console.log("error getting details of a babysitterService", err);
      res.status(500).json({
        message: "error getting details of a babysitterService",
        error: err,
      });
    });
});

// PUT /api/update/:babysitterServiceId  -  Updates a specific babysitter by id
router.put("/babysitterServices/:babysitterServiceId", (req, res, next) => {
  const { babysitterServiceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(babysitterServiceId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // const newDetails = {
  //     title: req.body.title,
  //     aboutMe: req.body.aboutMe,
  //     tasks: req.body.tasks
  // }

  BabysitterServices.findByIdAndUpdate(babysitterServiceId, req.body, {
    new: true,
  })
    .then((updatedBabysitterService) => res.json(updatedBabysitterService))
    .catch((err) => {
      console.log("error updating babysitter service", err);
      res.status(500).json({
        message: "error updating babysitter service",
        error: err,
      });
    });
});

// Delete a specific project by id
router.delete("/babysitterServices/:babysitterServiceId", (req, res, next) => {
  const { babysitterServiceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(babysitterServiceId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  BabysitterServices.findByIdAndRemove(babysitterServiceId)
    // .then((deletedProject) => {
    //   return Task.deleteMany({ _id: { $in: deletedProject.tasks } });
    // })
    .then(() =>
      res.json({
        message: `Babysitter Service with id ${babysitterServiceId} has been removed successfully.`,
      })
    )
    .catch((err) => {
      console.log("error deleting babysitter service", err);
      res.status(500).json({
        message: "error deleting babysitter service",
        error: err,
      });
    });
});

module.exports = router;
