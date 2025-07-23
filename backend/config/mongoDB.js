const mongosse = require("mongoose");

const connectDB = async () => {
  mongosse
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected");
    })
    .catch(() => {
      console.log("Something Wrong");
    });
};

module.exports = connectDB;
