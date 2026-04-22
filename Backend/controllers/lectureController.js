const Lecture = require("../models/Lecture");

// CREATE
exports.createLecture = async (req, res) => {
  try {
    const lecture = await Lecture.create(req.body);
    res.status(201).json(lecture);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating lecture" });
  }
};

// GET
exports.getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.json(lectures);
  } catch (err) {
    res.status(500).json({ message: "Error fetching lectures" });
  }
};

// UPDATE
exports.updateLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(lecture);
  } catch (err) {
    res.status(500).json({ message: "Error updating lecture" });
  }
};

// DELETE
exports.deleteLecture = async (req, res) => {
  try {
    await Lecture.findByIdAndDelete(req.params.id);
    res.json({ message: "Lecture deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting lecture" });
  }
};