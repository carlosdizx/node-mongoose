const mongoose = require("mongoose");

const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url);

connect.then(() => {
  console.log("Connected correctly to server");

  Dishes.create({
    name: "Uthappizza",
    description: "test",
  })
    .then((dish) => {
      console.log(dish);

      return Dishes.find({}).exec();
    })
    .then((dishes) => {
      console.log(dishes);

      return Dishes.deleteOne({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((error) => console.log(error));
});
