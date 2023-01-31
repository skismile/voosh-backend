const express = require("express");
const app = express.Router();
const OrderModel = require("../Model/Order.Model");
app.get("/", async (req, res) => {
  let query = req.query;
  try {
    let orders = await OrderModel.find({ user_id: query.userId });
    // console.log(orders);
    // console.log("wqewqdwq", query);
    res.send(orders);
  } catch (e) {
    res.status(501).send(e);
  }
});
app.post("/add-order", async (req, res) => {
  const body = req.body;

  // console.log(body);

  try {
    let order = await OrderModel.create(body);

    // console.log(order);
    res.send({
      message: "order created succesfully",
    });
  } catch (e) {
    res.status(501).send(e);
    console.log(e);
  }
});

module.exports = app;
