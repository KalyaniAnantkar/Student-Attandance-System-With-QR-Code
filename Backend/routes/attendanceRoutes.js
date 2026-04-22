// const express = require("express");
// const router = express.Router(); // ✅ MUST BE FIRST

// const Attendance = require("../models/Attendance");

// // ✅ MARK ATTENDANCE
// router.post("/mark", async (req, res) => {
//   try {
//     const { qrData, studentId } = req.body;

//     const parsed = JSON.parse(qrData);

//     const existing = await Attendance.findOne({
//       studentId,
//       lectureId: parsed.lectureId,
//     });

//     if (existing) {
//       return res.json({ message: "Already marked" });
//     }

//     const attendance = new Attendance({
//       studentId,
//       subjectId: parsed.subjectId,
//       lectureId: parsed.lectureId,
//       date: parsed.date,
//       status: "Present",
//     });

//     await attendance.save();

//     res.json({ message: "Attendance marked successfully" });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ GET STUDENT ATTENDANCE
// router.get("/student/:id", async (req, res) => {
//   try {
//     const data = await Attendance.find({ studentId: req.params.id });
//     res.json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router; // ✅ MUST BE LAST/

// const express = require("express");
// const router = express.Router();


// // ✅ TEST ROUTE
// router.get("/test", (req, res) => {
//   res.send("Attendance route working ✅");
// });

// // ✅ GET attendance
// router.get("/student/:id", (req, res) => {
//   console.log("API HIT ✅");

//   res.json([
//     {
//       subjectId: "Demo",
//       lectureId: "Lec-1",
//       date: new Date(),
//       status: "Present",
//     },
//   ]);
// });

// // ✅ MARK attendance
// router.post("/mark", (req, res) => {
//   res.json({ message: "Attendance Marked ✅" });
// });

// module.exports = router;











// const express = require("express");
// const router = express.Router();

// console.log("Attendance Routes Loaded ✅");

// // ✅ TEST
// router.get("/test", (req, res) => {
//   res.send("Attendance route working ✅");
// });

// // ✅ GET student attendance
// router.get("/student/:id", (req, res) => {
//   console.log("Student API HIT:", req.params.id);

//   res.json([
//     {
//       subjectId: "Linux",
//       lectureId: "Lec-1",
//       date: new Date(),
//       status: "Present",
//     },
//   ]);
// });

// // ✅ MARK attendance
// router.post("/mark", (req, res) => {
//   const { qrData, studentId } = req.body;

//   console.log("QR:", qrData);
//   console.log("Student:", studentId);

//   res.json({
//     message: "Attendance Marked ✅",
//   });
// });

// module.exports = router;


















//
const express = require("express");
const router = express.Router();

let attendance = [];

// Student attendance
router.get("/student/:id", (req, res) => {
  const data = attendance.filter(a => a.studentId === req.params.id);
  res.json(data);
});

// Teacher view (all attendance)
router.get("/", (req, res) => {
  res.json(attendance);
});

// Mark attendance
router.post("/mark", (req, res) => {
  const { qrData, studentId } = req.body;

  const record = {
    studentId,
    subjectId: qrData,
    lectureId: qrData,
    date: new Date(),
    status: "Present",
  };

  attendance.push(record);

  res.json({ message: "Attendance Marked" });
});

module.exports = router;
