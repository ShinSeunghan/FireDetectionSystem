const express = require("express");
const Area = require("../models/area");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const areas = await Area.findAll();
      res.status(200).json(areas);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const area = await Area.create({
        name: req.body.name,
        address: req.body.address,
      });
      res.status(201).json(area);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

/*router
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
*/

module.exports = router;
