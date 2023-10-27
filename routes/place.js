const express = require("express");
const Place = require("../models/place");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const places = await Place.findAll();
      res.status(200).json(places);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const place = await Place.create({
        name: req.body.name,
        address: req.body.address,
        remark: req.body.remark,
      });
      res.status(201).json(place);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router
  .route("/:name")
  .put(async (req, res, next) => {
    try {
      const place = await Place.update(
        {
          name: req.body.name,
          address: req.body.address,
          remark: req.body.remark,
        },
        { where: { name: req.params.name } }
      );
      res.status(200).json(place);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const place = Place.destroy({
        where: { name: req.params.name },
      });
      res.status(200).json(place);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
