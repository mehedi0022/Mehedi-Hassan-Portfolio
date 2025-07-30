const express = require("express");
const router = express.Router();
const login = require("../controllers/auth.controller");

// Register route
router.post("/login", login);

// Export the router
module.exports = router;
