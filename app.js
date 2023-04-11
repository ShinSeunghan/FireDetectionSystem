const express = require("express");
const { sequelize } = require("./models");
const deviceRouter = require("./routes/devices");
const app = express();

app.set("port", process.env.PORT || 3000);

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

app.use("/devices", deviceRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "is open");
});
