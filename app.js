const express = require("express");
const { sequelize } = require("./models");
const deviceRouter = require("./routes/device");
const areaRouter = require("./routes/area");
const app = express();

app.set("port", 3000);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connect Success");
  })
  .catch((err) => {
    console.log("Connect Fail");
  });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/device", deviceRouter);
app.use("/area", areaRouter);

app.use("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "is open");
});
