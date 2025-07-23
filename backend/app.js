const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/mongoDB");
const contactRouter = require("./routes/contact.routes");

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/contact/", contactRouter);

app.get("/", (req, res) => {
  res.send("Welcome To Mehedi");
});

connectDB();

app.listen(port, () => {
  console.log("App Running on PORT " + port);
});
