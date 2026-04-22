// const mongoose = require("mongoose");

// const attendanceSchema = new mongoose.Schema({
//   lectureId: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture", required: true },
//   studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   status: { type: String, enum: ["present", "absent"], default: "absent" },
//   date: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Attendance", attendanceSchema);



const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Attendance", attendanceSchema);