const express = require("express");
const mongoose = require("mongoose");
    require("dotenv").config()
const app = express();
const UserRouter = require("./Routes/User.Route");
const OrderRouter = require("./Routes/Order.Router");
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.use("/order", OrderRouter);
app.get("/", (req, res) => {
  res.send("hello");
});
const PORT=process.env.PORT ||8080
const Mongo_URL=process.env.Mongo_URL
const SECRET_KEY=process.env.SECRET_KEY
mongoose.connect(
    Mongo_URL,
    () => {
        app.listen(PORT, () => {
       
      console.log("server is runing on port 8080");
    });
  }
);
