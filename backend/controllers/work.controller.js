const Work = require("../models/works.model");
const fs = require("fs");
const path = require("path");

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
      throw new Error("All fields are required");
    }

    if (!req.file) {
      throw new Error("Image is required");
    }
    const imagePath = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;

    const newWork = new Work({
      title,
      category,
      client,
      summary,
      description,
      image: imagePath,
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
    console.error("❌ Error creating work:", error.message);
    if (req.file) {
      fs.unlinkSync(path.join(__dirname, "../uploads", req.file.filename));
    }
    res
      .status(500)
      .json({ message: "Error creating work", error: error.message });
  }
};

const updateWork = async (req, res) => {
  try {
    const { id } = req.params;
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

    const work = await Work.findById(id);

    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }

    work.title = title || work.title;
    work.category = category || work.category;
    work.client = client || work.client;
    work.summary = summary || work.summary;
    work.description = description || work.description;
    work.date = date || work.date;
    work.link = link || work.link;
    work.technologies = technologies || work.technologies;
    work.role = role || work.role;

    if (req.file) {
      const oldImagePath = work.image?.split("/uploads/")[1];
      const imagePath = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;
      if (oldImagePath) {
        const oldImageFullPath = path.join(
          __dirname,
          "../uploads",
          oldImagePath
        );
        if (fs.existsSync(oldImageFullPath)) {
          fs.unlinkSync(oldImageFullPath);
        }
      }
      work.image = imagePath;
    }

    await work.save();

    res.status(200).json({
      success: true,
      message: "Work updated successfully",
      work,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating work", error });
  }
};

const getAllWorks = async (req, res) => {
  try {
    const works = await Work.find();
    res.status(200).json(works);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching works", error: error.message });
  }
};

const getWorkById = async (req, res) => {
  try {
    const { id } = req.params;
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
    const deletedWork = await Work.findByIdAndDelete(id);
    if (!deletedWork) {
      return res.status(404).json({ message: "Work not found" });
    }
    res.status(200).json({ message: "Work deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting work", error });
  }
};

module.exports = {
  createWork,
  getAllWorks,
  getWorkById,
  updateWork,
  deleteWork,
};
