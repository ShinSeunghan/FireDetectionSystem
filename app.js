const express = require("express");
const { sequelize } = require("./models");
const deviceRouter = require("./routes/device");
const placeRouter = require("./routes/place");
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
app.use("/place", placeRouter);

app.use("/", (req, res) => {
  res.send("정보통신공학과 야간 4학년 프로젝트실습");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "is open");
});
