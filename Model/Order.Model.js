const { Schema, model, default: mongoose } = require("mongoose");

const OrderSchema = new Schema({
  user_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  sub_total: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const OrderModel = model("order", OrderSchema);
module.exports = OrderModel;
