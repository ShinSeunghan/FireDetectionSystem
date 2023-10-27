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
        area_name: req.body.area_name,
        name: req.body.name,
        sensor_temp: req.body.sensor_temp,
        motor_state: req.body.motor_state,
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
