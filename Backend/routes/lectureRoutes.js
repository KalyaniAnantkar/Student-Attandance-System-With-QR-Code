// const express = require("express");
// const router = express.Router();
// const { createLecture, getLectures, updateLecture, deleteLecture } = require("../controllers/lectureController");

// router.post("/", createLecture);
// router.get("/", getLectures);
// router.put("/:id", updateLecture);
// router.delete("/:id", deleteLecture);

// module.exports = router;






// const express = require("express");
// const router = express.Router();

// // ✅ import full controller object (IMPORTANT)
// const lectureController = require("../controllers/lectureController");

// // ✅ routes (SAFE WAY)
// router.post("/", lectureController.createLecture);
// router.get("/", lectureController.getLectures);
// router.put("/:id", lectureController.updateLecture);
// router.delete("/:id", lectureController.deleteLecture);

// module.exports = router;



























const express = require("express");
const router = express.Router();

let lectures = [
  {
    _id: "1",
    subject: "Linux",
    title: "Lecture 1",
    qrData: "linux-1",
  },
  {
    _id: "2",
    subject: "DBMS",
    title: "Lecture 2",
    qrData: "dbms-2",
  },
];

// GET all lectures
router.get("/", (req, res) => {
  res.json(lectures);
});

// Teacher adds lecture
router.post("/add", (req, res) => {
  const newLecture = {
    _id: Date.now().toString(),
    ...req.body,
  };
  lectures.push(newLecture);
  res.json(newLecture);
});

module.exports = router;