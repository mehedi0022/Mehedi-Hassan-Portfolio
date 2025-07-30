const Work = require("../models/works.model");

const createWork = async (req, res) => {
  try {
    const {
      title,
      category,
      client,
      summary,
      description,
      date,
      link,
      technologies,
      role,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !category ||
      !client ||
      !summary ||
      !description ||
      !link ||
      !technologies ||
      !role
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }
    // Use the uploaded file's path
    const imagePath = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;

    const newWork = new Work({
      title,
      category,
      client,
      summary,
      description,
      image: imagePath, // Store the path of the uploaded image
      date,
      link,
      technologies,
      role,
    });

    await newWork.save();

    res.status(201).json({
      success: true,
      message: "Work created successfully",
      work: newWork,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating work", error: error.message });
  }
};

const updateWork = async (req, res) => {
  try {
    const { id } = req.params;
    const workData = req.body;
    // Assuming you have a Work model to handle database operations
    const updatedWork = await Work.findByIdAndUpdate(id, workData, {
      new: true,
    });
    if (!updatedWork) {
      return res.status(404).json({ message: "Work not found" });
    }
    res.status(200).json(updatedWork);
  } catch (error) {
    res.status(500).json({ message: "Error updating work", error });
  }
};

const getAllWorks = async (req, res) => {
  try {
    // Assuming you have a Work model to handle database operations
    const works = await Work.find();
    res.status(200).json(works);
  } catch (error) {
    console.error("❌ Error fetching works:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching works", error: error.message });
  }
};

const getWorkById = async (req, res) => {
  try {
    const { id } = req.params;
    // Assuming you have a Work model to handle database operations
    const work = await Work.findById(id);
    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json({ message: "Error fetching work", error });
  }
};
const deleteWork = async (req, res) => {
  try {
    const { id } = req.params;
    // Assuming you have a Work model to handle database operations
    const deletedWork = await Work.findByIdAndDelete(id);
    if (!deletedWork) {
      return res.status(404).json({ message: "Work not found" });
    }
    res.status(200).json({ message: "Work deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting work", error });
  }
};
// Assuming you have a Work model defined
module.exports = {
  createWork,
  getAllWorks,
  getWorkById,
  updateWork,
  deleteWork,
};
