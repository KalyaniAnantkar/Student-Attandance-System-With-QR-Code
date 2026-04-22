// const Attendance = require("../models/attendance");

// exports.markAttendance = async (req, res) => {
//   const attendance = await Attendance.create(req.body);
//   res.status(201).json(attendance);
// };

// exports.getAttendanceByLecture = async (req, res) => {
//   const records = await Attendance.find({ lectureId: req.params.lectureId })
//     .populate("studentId", "name email");
//   res.json(records);
// };

const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const { studentId, lectureId } = req.body;

    const existing = await Attendance.findOne({ studentId, lectureId });
    if (existing) {
      return res.json({ message: "Already marked ✅" });
    }

    const record = await Attendance.create({
      studentId,
      lectureId,
    });

    res.json({ message: "Attendance marked ✅", record });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};