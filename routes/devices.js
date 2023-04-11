const express = require("express");
const Device = require("../models/deivce");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const devices = await Device.findAll();
      res.json(devices);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const device = await Device.create({
        name: req.body.name,
        address: req.body.address,
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
      res.json(device);
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
      res.json(device);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
