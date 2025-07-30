const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/mongoDB");
const contactRouter = require("./routes/contact.routes");
const authRouter = require("./routes/auth.routes");
const workRouter = require("./routes/work.routes");

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Importing routes
app.use("/api/auth", authRouter);
app.use("/api/work", workRouter);
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Welcome To Mehedi");
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("✅ Server running on PORT " + port);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
