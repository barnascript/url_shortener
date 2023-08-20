const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });

module.exports = connectDB;
