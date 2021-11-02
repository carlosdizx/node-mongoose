const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSquema = new Schema(
  {
    name: {
      type: "string",
      required: true,
      unique: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Dishes = mongoose.model("Dish", dishSquema);

module.exports = Dishes;
