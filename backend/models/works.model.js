const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    client: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    link: {
      type: String,
      required: true,
    },
    technologies: [
      {
        type: String,
      },
    ],
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
