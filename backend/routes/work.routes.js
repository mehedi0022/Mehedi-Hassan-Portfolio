const express = require("express");
const router = express.Router();

const {
  getAllWorks,
  getWorkById,
  createWork,
  updateWork,
  deleteWork,
} = require("../controllers/work.controller");
const checkAuth = require("../middlewares/checkAuth");
const upload = require("../config/multer");

// Route to get all works
router.get("/", getAllWorks);

// Route to get a work by ID
router.get("/:id", getWorkById);

// Route to create a new work
router.post("/add", checkAuth, upload.single("image"), createWork);

// Route to update a work
router.put("/:id", checkAuth, updateWork);

// Route to delete a work
router.delete("/:id", checkAuth, deleteWork);

module.exports = router;
