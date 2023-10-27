const express = require("express");
const Device = require("../models/device");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const devices = await Device.findAll();
      res.status(200).json(devices);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const device = await Device.create({
        placeName: req.body.placeName,
        name: req.body.name,
        sensorTemp: req.body.sensorTemp,
        motorState: req.body.motorState,
      });
      res.status(201).json(device);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router
  .route("/:name")
  .put(async (req, res, next) => {
    try {
      const device = await Device.update(
        {
          name: req.body.name,
          address: req.body.address,
        },
        { where: { name: req.params.name } }
      );
      res.status(200).json(device);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const device = Device.destroy({
        where: { name: req.params.name },
      });
      res.status(200).json(device);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
