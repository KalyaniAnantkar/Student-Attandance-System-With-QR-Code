// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const userRoutes = require("./routes/userRoutes");
// const lectureRoutes = require("./routes/lectureRoutes");
// const attendanceRoutes = require("./routes/attendanceRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());  

// // Routes
// app.use("/users", userRoutes);
// app.use("/lectures", lectureRoutes);
// app.use("/attendance", attendanceRoutes);

// // MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/attendance")
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// app.listen(5000, () => console.log("Server running on port 5000"));





/// server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const userRoutes = require("./routes/userRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/users", userRoutes);

// mongoose.connect("mongodb://localhost:27017/attendanceDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// app.listen(5000, () => console.log("Server running on port 5000"));










// const express = require("express");
// const cors = require("cors");

// const app = express();

// // middleware
// app.use(cors());
// app.use(express.json());

// // test route
// app.get("/", (req, res) => {
//   res.send("Server is running ✅");
// });

// // start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000 🚀");
// });














// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// let users = [];

// // ✅ CREATE USER API
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created successfully ✅" });
// });

// // ✅ LOGIN API
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000 🚀");
// });





//

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🔹 In-memory storage (for now)
// let users = [];
// let lectures = [];

// // ================== USER APIs ==================

// // ✅ CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   const existingUser = users.find((u) => u.email === email);
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created successfully ✅" });
// });

// // ✅ LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================== LECTURE APIs ==================

// // ✅ GET ALL LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // ✅ ADD LECTURE
// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title is required ❌" });
//   }

//   const newLecture = {
//     _id: Date.now().toString(),
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//   };

//   lectures.push(newLecture);

//   res.json({ message: "Lecture added successfully ✅" });
// });

// // ✅ DELETE LECTURE
// app.delete("/lectures/:id", (req, res) => {
//   const { id } = req.params;

//   lectures = lectures.filter((lec) => lec._id !== id);

//   res.json({ message: "Lecture deleted ✅" });
// });

// // ================== TEST API ==================
// app.get("/", (req, res) => {
//   res.send("Server is running ✅");
// });

// // ================== START SERVER ==================
// app.listen(5000, () => {
//   console.log("Server running on port 5000 🚀");
// });








//

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// let users = [];
// let lectures = [];
// let attendance = [];

// // ✅ Register
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;
//   users.push({ name, email, password, role });
//   res.json({ message: "User created ✅" });
// });

// // ✅ Login
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) return res.status(401).json({ message: "Invalid ❌" });

//   res.json({ message: "Login success ✅", user });
// });

// // ✅ Add lecture
// app.post("/lectures", (req, res) => {
//   const lecture = { ...req.body, _id: Date.now().toString() };
//   lectures.push(lecture);
//   res.json(lecture);
// });

// // ✅ Get lectures
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // ✅ Mark attendance
// app.post("/attendance", (req, res) => {
//   const { lectureId, studentEmail } = req.body;

//   attendance.push({
//     lectureId,
//     studentEmail,
//     time: new Date(),
//   });

//   res.json({ message: "Attendance marked ✅" });
// });

// // ✅ Get student attendance
// app.get("/attendance/:email", (req, res) => {
//   const data = attendance.filter(
//     (a) => a.studentEmail === req.params.email
//   );
//   res.json(data);
// });

// app.listen(5000, () => {
//   console.log("Server running on 5000 🚀");
// });















//
// const express = require("express");
// const cors = require("cors");

// const app = express();   // ✅ VERY IMPORTANT (this was missing or misplaced)

// app.use(cors());
// app.use(express.json());

// // ✅ In-memory storage
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER APIs =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created successfully ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURE APIs =================

// // ADD LECTURE
// app.post("/lectures", (req, res) => {
//   const lecture = {
//     _id: Date.now().toString(),
//     ...req.body,
//   };

//   lectures.push(lecture);
//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // DELETE LECTURE
// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// // ================= ATTENDANCE APIs =================

// // MARK ATTENDANCE
// app.post("/attendance", (req, res) => {
//   const { lectureId, time } = req.body;

//   const already = attendance.find(
//     (a) => a.lectureId === lectureId
//   );

//   if (already) {
//     return res.status(400).json({ message: "Already marked ❌" });
//   }

//   attendance.push({ lectureId, time });

//   res.json({ message: "Attendance marked ✅" });
// });

// // GET ATTENDANCE
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// // ================= SERVER =================

// app.listen(5000, () => {
//   console.log("Server running on port 5000 🚀");
// });














// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// // ADD LECTURE (Teacher)
// app.post("/lectures", (req, res) => {
//   const { subject, title } = req.body;

//   const lecture = {
//     _id: Date.now().toString(),
//     subject,
//     title,
//     qrData: `${subject}-${title}`, // IMPORTANT QR VALUE
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET ALL LECTURES (Student dashboard)
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // ================= ATTENDANCE =================

// // ✅ MARK ATTENDANCE (MATCH FRONTEND)
// app.post("/attendance/mark", (req, res) => {
//   const { qrData, studentId } = req.body;

//   // find lecture
//   const lecture = lectures.find((l) => l.qrData === qrData);

//   if (!lecture) {
//     return res.status(400).json({ message: "Invalid QR ❌" });
//   }

//   // check already marked
//   const already = attendance.find(
//     (a) =>
//       a.studentId === studentId &&
//       a.lectureId === lecture._id
//   );

//   if (already) {
//     return res.status(400).json({ message: "Already marked ❌" });
//   }

//   const record = {
//     studentId,
//     subjectId: lecture.subject,
//     lectureId: lecture.title,
//     date: new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.json({ message: "Attendance marked ✅", record });
// });

// // ✅ GET STUDENT ATTENDANCE (MATCH FRONTEND)
// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter(
//     (a) => a.studentId === req.params.id
//   );

//   res.json(data);
// });

// // ✅ GET ALL ATTENDANCE (Teacher)
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// // ================= SERVER =================

// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });




















// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// // ADD LECTURE (Teacher)
// app.post("/lectures", (req, res) => {
//   const { subject, title } = req.body;

//   if (!subject || !title) {
//     return res.status(400).json({ message: "Missing lecture data ❌" });
//   }

//   const lecture = {
//     _id: Date.now().toString(),
//     subject,
//     title,
//     qrData: `${subject}-${title}`, // IMPORTANT QR VALUE
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET ALL LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // ================= ATTENDANCE =================

// // ✅ METHOD 1: QR BASED (MAIN)
// app.post("/attendance/mark", (req, res) => {
//   const { qrData, studentId } = req.body;

//   console.log("QR RECEIVED:", qrData);

//   // 🔍 Find lecture by QR
//   const lecture = lectures.find((l) => l.qrData === qrData);

//   if (!lecture) {
//     return res.status(400).json({ message: "Invalid QR ❌" });
//   }

//   // ❌ Prevent duplicate
//   const already = attendance.find(
//     (a) =>
//       a.studentId === studentId &&
//       a.lectureId === lecture._id
//   );

//   if (already) {
//     return res.status(400).json({ message: "Already marked ❌" });
//   }

//   const record = {
//     studentId,
//     subjectId: lecture.subject,
//     lectureId: lecture.title,
//     date: new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.json({ message: "Attendance marked ✅", record });
// });

// // ✅ METHOD 2: DIRECT (OPTIONAL / FALLBACK)
// app.post("/attendance", (req, res) => {
//   const { lectureId, studentId, qrData, time } = req.body;

//   // 🔍 Find lecture by ID
//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.status(400).json({ message: "Lecture not found ❌" });
//   }

//   // 🔐 QR VALIDATION
//   if (!qrData || qrData !== lecture.qrData) {
//     return res.status(400).json({ message: "Invalid QR ❌" });
//   }

//   // ❌ Prevent duplicate
//   const already = attendance.find(
//     (a) =>
//       a.studentId === studentId &&
//       a.lectureId === lectureId
//   );

//   if (already) {
//     return res.status(400).json({ message: "Already marked ❌" });
//   }

//   const record = {
//     studentId,
//     subjectId: lecture.subject,
//     lectureId: lecture.title,
//     date: time || new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.json({ message: "Attendance marked ✅", record });
// });

// // ✅ GET STUDENT ATTENDANCE
// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter(
//     (a) => a.studentId === req.params.id
//   );

//   res.json(data);
// });

// // ✅ GET ALL ATTENDANCE (Teacher)
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// // ================= TEST =================
// app.get("/", (req, res) => {
//   res.send("API Working ✅");
// });

// // ================= SERVER =================
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });
































// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES (UPDATED) =================

// // ✅ ADD LECTURE (FIXED)
// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const lecture = {
//     _id: Date.now().toString(),
//     title,
//     description,
//     videoUrl,
//     date,
//     time,

//     // 🔥 IMPORTANT: QR VALUE
//     qrData: Date.now().toString(),
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // ✅ GET ALL LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // ✅ DELETE LECTURE
// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Lecture deleted ✅" });
// });

// // ================= ATTENDANCE =================

// // ✅ QR BASED ATTENDANCE (MAIN)
// app.post("/attendance/mark", (req, res) => {
//   const { qrData, studentId } = req.body;

//   console.log("QR RECEIVED:", qrData);

//   const lecture = lectures.find((l) => l.qrData === qrData);

//   if (!lecture) {
//     return res.status(400).json({ message: "Invalid QR ❌" });
//   }

//   const already = attendance.find(
//     (a) =>
//       a.studentId === studentId &&
//       a.lectureId === lecture._id
//   );

//   if (already) {
//     return res.status(400).json({ message: "Already marked ❌" });
//   }

//   const record = {
//     studentId,
//     subjectId: lecture.title,
//     lectureId: lecture._id,
//     date: new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.json({ message: "Attendance marked ✅", record });
// });

// // ✅ OPTIONAL DIRECT METHOD
// app.post("/attendance", (req, res) => {
//   const { lectureId, studentId, qrData } = req.body;

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.status(400).json({ message: "Lecture not found ❌" });
//   }

//   if (qrData !== lecture.qrData) {
//     return res.status(400).json({ message: "Invalid QR ❌" });
//   }

//   const already = attendance.find(
//     (a) =>
//       a.studentId === studentId &&
//       a.lectureId === lectureId
//   );

//   if (already) {
//     return res.status(400).json({ message: "Already marked ❌" });
//   }

//   attendance.push({
//     studentId,
//     lectureId,
//     date: new Date(),
//     status: "Present",
//   });

//   res.json({ message: "Attendance marked ✅" });
// });

// // ✅ GET STUDENT ATTENDANCE
// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter(
//     (a) => a.studentId === req.params.id
//   );

//   res.json(data);
// });

// // ✅ GET ALL ATTENDANCE
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// // ================= TEST =================
// app.get("/", (req, res) => {
//   res.send("API Working ✅");
// });

// // ================= SERVER =================
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });




























// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// // ADD LECTURE
// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//     qrData: id, // 🔥 SAME ID USED AS QR
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // DELETE LECTURE
// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Lecture deleted ✅" });
// });

// // ================= ATTENDANCE =================

// // ✅ FINAL FIXED METHOD (ONLY USE THIS)
// app.post("/attendance", (req, res) => {
//   const { lectureId, studentId, qrData } = req.body;

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.status(400).json({ message: "Lecture not found ❌" });
//   }

//   // 🔐 QR VALIDATION
//   if (qrData !== lecture.qrData) {
//     return res.status(400).json({ message: "Invalid QR ❌" });
//   }

//   // ❌ Prevent duplicate
//   const already = attendance.find(
//     (a) =>
//       a.studentId === studentId &&
//       a.lectureId === lectureId
//   );

//   if (already) {
//     return res.status(400).json({ message: "Already marked ❌" });
//   }

//   const record = {
//     studentId,
//     lectureId: lecture.title, // 🔥 show title in UI
//     date: new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.json({ message: "Attendance marked ✅", record });
// });

// // GET STUDENT ATTENDANCE
// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter(
//     (a) => a.studentId === req.params.id
//   );

//   res.json(data);
// });

// // GET ALL ATTENDANCE (Teacher)
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// // ================= TEST =================
// app.get("/", (req, res) => {
//   res.send("API Working ✅");
// });

// // ================= SERVER =================
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
//   console.log("Mongo DB connected");
// });













































// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });
//   res.json({ message: "User created ✅" });
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================
// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//     qrData: id, // 🔥 QR value
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // ================= MOBILE QR SCAN =================
// app.get("/scan", (req, res) => {
//   const { lectureId, studentId, studentName } = req.query;

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.send("❌ Invalid Lecture");
//   }

//   const already = attendance.find(
//     (a) => a.studentId === studentId && a.lectureId === lectureId
//   );

//   if (already) {
//     return res.send("⚠ Already Marked");
//   }

//   const record = {
//     studentId,
//     studentName,
//     lectureTitle: lecture.title,
//     date: new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.send(`
//     <h2>✅ Attendance Marked</h2>
//     <p>Lecture: ${lecture.title}</p>
//     <p>Student: ${studentName}</p>
//   `);
// });

// // ================= ATTENDANCE =================
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter((a) => a.studentId === req.params.id);
//   res.json(data);
// });

// // ================= SERVER =================
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });













// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// // ADD LECTURE
// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//     qrData: id,
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // DELETE
// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// ================= QR SCAN =================

// // ✅ YOUR CORRECT IP
// const BASE_URL = "http://10.217.219.163:5000";

// app.get("/scan", (req, res) => {
//   const { lectureId, studentId, studentName } = req.query;

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.send("❌ Invalid Lecture");
//   }

//   const already = attendance.find(
//     (a) => a.studentId === studentId && a.lectureId === lectureId
//   );

//   if (already) {
//     return res.send("⚠ Already Marked");
//   }

//   const record = {
//     studentId,
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     date: new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.send(`
//     <h2>✅ Attendance Marked</h2>
//     <p>Lecture: ${lecture.title}</p>
//     <p>Student: ${studentName}</p>
//   `);
// });



// // ================= ATTENDANCE =================

// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter((a) => a.studentId === req.params.id);
//   res.json(data);
// });

// // ================= SERVER =================

// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running on http://10.217.219.163:5000");
//   console.log("MongoDB is connected");
// });



































// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// // ================= QR SCAN =================

// // 🔥 IMPORTANT: PUT YOUR IP HERE
// const BASE_URL = "http://10.217.219.163:5000";

// app.get("/scan", (req, res) => {
//   const { lectureId, studentId, studentName } = req.query;

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) return res.send("❌ Invalid Lecture");

//   const already = attendance.find(
//     (a) => a.studentId === studentId && a.lectureId === lectureId
//   );

//   if (already) return res.send("⚠ Already Marked");

//   const record = {
//     studentId,
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     date: new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.send(`
//     <h2>✅ Attendance Marked</h2>
//     <p>Lecture: ${lecture.title}</p>
//     <p>Student: ${studentName}</p>
//   `);
// });

// // ================= ATTENDANCE =================

// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter((a) => a.studentId === req.params.id);
//   res.json(data);
// });

// // ================= SERVER =================
// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running on http://0.0.0.0:5000");
//   console.log("MongoDB connected");
// });


















// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// // ================= QR SCAN =================

// // 🔥 IMPORTANT: PUT YOUR IP HERE
// const BASE_URL = "http://10.217.219.163:5000";

// app.get("/scan", (req, res) => {
//   const { lectureId, studentId, studentName } = req.query;

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) return res.send("❌ Invalid Lecture");

//   const already = attendance.find(
//     (a) => a.studentId === studentId && a.lectureId === lectureId
//   );

//   if (already) return res.send("⚠ Already Marked");

//   const record = {
//     studentId,
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     date: new Date(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.send(`
//     <h2>✅ Attendance Marked</h2>
//     <p>Lecture: ${lecture.title}</p>
//     <p>Student: ${studentName}</p>
//   `);
// });

// // ================= ATTENDANCE =================

// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter((a) => a.studentId === req.params.id);
//   res.json(data);
// });

// // ================= SERVER =================
// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running on network");
// });
















// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// // ================= QR SCAN =================

// app.get("/scan", (req, res) => {
//   const { lectureId, studentId, studentName } = req.query;

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.send("❌ Invalid Lecture");
//   }

//   if (!studentId || !studentName) {
//     return res.send(`
//       <h2>⚠ Student Info Missing</h2>
//       <p>Please login first from Student Dashboard</p>
//     `);
//   }

//   const already = attendance.find(
//     (a) => a.studentId === studentId && a.lectureId === lectureId
//   );

//   if (already) {
//     return res.send("⚠ Already Marked");
//   }

//   const record = {
//     studentId,
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     date: new Date().toLocaleString(),
//     status: "Present",
//   };

//   attendance.push(record);

//   res.send(`
//     <h2>✅ Attendance Marked</h2>
//     <p><b>Lecture:</b> ${lecture.title}</p>
//     <p><b>Student:</b> ${studentName}</p>
//     <p><b>Date:</b> ${record.date}</p>
//   `);
// });

// // ================= ATTENDANCE =================

// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter((a) => a.studentId === req.params.id);
//   res.json(data);
// });

// // ================= SERVER =================

// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running on http://0.0.0.0:5000");
// });









// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// // ADD LECTURE
// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET ALL LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // DELETE LECTURE
// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// // ================= QR SCAN =================

// // 🔥 IMPORTANT: Use your real IP
// const BASE_URL = "http://10.217.219.163:5000";

// app.get("/scan", (req, res) => {
//   const { lectureId, studentId, studentName } = req.query;

//   // Validate
//   if (!lectureId || !studentId || !studentName) {
//     return res.send("❌ Missing data");
//   }

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.send("❌ Invalid Lecture");
//   }

//   // Prevent duplicate attendance
//   const already = attendance.find(
//     (a) => a.studentId === studentId && a.lectureId === lectureId
//   );

//   if (already) {
//     return res.send(`
//       <h2>⚠ Already Marked</h2>
//       <p>Lecture: ${lecture.title}</p>
//       <p>Student: ${studentName}</p>
//     `);
//   }

//   // Save attendance
//   const record = {
//     studentId,
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//     date: new Date(),
//   };

//   attendance.push(record);

//   // Response page
//   res.send(`
//     <div style="text-align:center; font-family:Arial; margin-top:50px;">
//       <h2 style="color:green;">✅ Attendance Marked</h2>
//       <p><strong>Lecture:</strong> ${lecture.title}</p>
//       <p><strong>Student:</strong> ${studentName}</p>
//       <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
//     </div>
//   `);
// });

// // ================= ATTENDANCE =================

// // GET ALL
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// // GET BY STUDENT
// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter((a) => a.studentId === req.params.id);
//   res.json(data);
// });

// // ================= SERVER =================

// // 🔥 MUST use 0.0.0.0 for mobile access
// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running on:");
//   console.log("👉 http://localhost:5000");
//   console.log("👉 http://10.217.219.163:5000 (for mobile)");
// });














//this runable code 

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// // ADD LECTURE
// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET ALL LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // DELETE LECTURE
// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// // ================= QR SCAN =================

// // 🔥 IMPORTANT: Use your real IP
// const BASE_URL = "http://10.217.219.163:5000";

// app.get("/scan", (req, res) => {
//   const { lectureId, studentId, studentName } = req.query;

//   // Validate
//   if (!lectureId || !studentId || !studentName) {
//     return res.send("❌ Missing data");
//   }

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.send("❌ Invalid Lecture");
//   }

//   // Prevent duplicate attendance
//   const already = attendance.find(
//     (a) => a.studentId === studentId && a.lectureId === lectureId
//   );

//   if (already) {
//     return res.send(`
//       <h2>⚠ Already Marked</h2>
//       <p>Lecture: ${lecture.title}</p>
//       <p>Student: ${studentName}</p>
//     `);
//   }

//   // Save attendance
//   const record = {
//     studentId,
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//     date: new Date(),
//   };

//   attendance.push(record);

//   // Response page
//   res.send(`
//     <div style="text-align:center; font-family:Arial; margin-top:50px;">
//       <h2 style="color:green;">✅ Attendance Marked</h2>
//       <p><strong>Lecture:</strong> ${lecture.title}</p>
//       <p><strong>Student:</strong> ${studentName}</p>
//       <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
//     </div>
//   `);
// });

// // ================= ATTENDANCE =================

// // GET ALL
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// // GET BY STUDENT
// app.get("/attendance/student/:id", (req, res) => {
//   const data = attendance.filter((a) => a.studentId === req.params.id);
//   res.json(data);
// });

// // ================= SERVER =================

// // 🔥 MUST use 0.0.0.0 for mobile access
// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running on:");
//   console.log("👉 http://localhost:5000");
//   console.log("👉 http://10.217.219.163:5000 (for mobile)");
// });













//testing

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ================= STORAGE =================
// let users = [];
// let lectures = [];
// let attendance = [];

// // ================= USER =================

// // CREATE USER
// app.post("/users", (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   users.push({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// // ================= LECTURES =================

// // ADD LECTURE
// app.post("/lectures", (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const id = Date.now().toString();

//   const lecture = {
//     _id: id,
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//   };

//   lectures.push(lecture);

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET ALL LECTURES
// app.get("/lectures", (req, res) => {
//   res.json(lectures);
// });

// // DELETE LECTURE
// app.delete("/lectures/:id", (req, res) => {
//   lectures = lectures.filter((l) => l._id !== req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// // ================= QR SCAN =================

// // 🔥 IMPORTANT: Your real IP
// const BASE_URL = "http://10.217.219.163:5000";

// app.get("/scan", (req, res) => {
//   const { lectureId, studentName } = req.query;

//   // ✅ Step 1: lectureId required
//   if (!lectureId) {
//     return res.send("❌ Missing lectureId");
//   }

//   const lecture = lectures.find((l) => l._id === lectureId);

//   if (!lecture) {
//     return res.send("❌ Invalid Lecture");
//   }

//   // ✅ Step 2: Ask student name if not present
//   if (!studentName) {
//     return res.send(`
//       <div style="text-align:center; margin-top:50px; font-family:Arial;">
//         <h2>Enter Your Name</h2>

//         <form method="GET" action="/scan">
//           <input type="hidden" name="lectureId" value="${lectureId}" />

//           <input 
//             type="text" 
//             name="studentName" 
//             placeholder="Enter your name"
//             required
//             style="padding:10px; width:220px;"
//           /><br><br>

//           <button style="padding:10px 20px;">Submit</button>
//         </form>
//       </div>
//     `);
//   }

//   // ✅ Step 3: Prevent duplicate
//   const already = attendance.find(
//     (a) =>
//       a.studentName === studentName &&
//       a.lectureId === lectureId
//   );

//   if (already) {
//     return res.send(`
//       <div style="text-align:center; margin-top:50px;">
//         <h2 style="color:orange;">⚠ Already Marked</h2>
//         <p><strong>Lecture:</strong> ${lecture.title}</p>
//         <p><strong>Student:</strong> ${studentName}</p>
//       </div>
//     `);
//   }

//   // // ✅ Step 4: Save attendance
//   // const record = {
//   //   studentName,
//   //   lectureTitle: lecture.title,
//   //   lectureId,
//   //   status: "Present",
//   //   date: new Date().toLocaleString(),
//   // };
//        const record = {
//   studentName,
//   lectureTitle: lecture.title,
//   lectureId,
//   status: "Present",
//   date: new Date().toISOString(), // ✅ FIXED
// };


  
//   attendance.push(record);
  

//   // ✅ Step 5: Success page
//   res.send(`
//     <div style="text-align:center; font-family:Arial; margin-top:50px;">
//       <h2 style="color:green;">✅ Attendance Marked</h2>
//       <p><strong>Lecture:</strong> ${lecture.title}</p>
//       <p><strong>Student:</strong> ${studentName}</p>
//       <p><strong>Date:</strong> ${record.date}</p>
//     </div>
//   `);
// });

// // ================= ATTENDANCE =================

// // GET ALL ATTENDANCE
// app.get("/attendance", (req, res) => {
//   res.json(attendance);
// });

// // GET BY STUDENT NAME
// app.get("/attendance/student/:name", (req, res) => {
//   const data = attendance.filter(
//     (a) => a.studentName === req.params.name
//   );
//   res.json(data);
// });

// // ================= SERVER =================

// // 🔥 IMPORTANT for mobile access
// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running on:");
//   console.log("👉 http://localhost:5000");
//   console.log("👉 http://10.217.219.163:5000 (for mobile)");
// });























//demo
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// app.use(cors());
// app.use(express.json());

// /* ================= MONGODB CONNECTION ================= */
// mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB")
//   .then(() => console.log("MongoDB Connected ✅"))
//   .catch((err) => console.log(err));

// /* ================= SCHEMAS ================= */

// // USER
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });
// const User = mongoose.model("User", UserSchema);

// // LECTURE
// const LectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   videoUrl: String,
//   date: String,
//   time: String,
// });
// const Lecture = mongoose.model("Lecture", LectureSchema);

// // ATTENDANCE
// const AttendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: String,
// });
// const Attendance = mongoose.model("Attendance", AttendanceSchema);

// /* ================= USER ================= */

// // REGISTER
// app.post("/users", async (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields required ❌" });
//   }

//   await User.create({ name, email, password, role });

//   res.json({ message: "User created ✅" });
// });

// // LOGIN
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email, password });

//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials ❌" });
//   }

//   res.json({ message: "Login successful ✅", user });
// });

// /* ================= LECTURES ================= */

// // ADD LECTURE
// app.post("/lectures", async (req, res) => {
//   const { title, description, videoUrl, date, time } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required ❌" });
//   }

//   const lecture = await Lecture.create({
//     title,
//     description,
//     videoUrl,
//     date,
//     time,
//   });

//   res.json({ message: "Lecture added ✅", lecture });
// });

// // GET LECTURES
// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// // DELETE LECTURE
// app.delete("/lectures/:id", async (req, res) => {
//   await Lecture.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   const { lectureId, studentName } = req.query;

//   if (!lectureId) {
//     return res.send("❌ Missing lectureId");
//   }

//   const lecture = await Lecture.findById(lectureId);

//   if (!lecture) {
//     return res.send("❌ Invalid Lecture");
//   }

//   // Ask name
//   if (!studentName) {
//     return res.send(`
//       <div style="text-align:center; margin-top:50px;">
//         <h2>Enter Your Name</h2>
//         <form method="GET" action="/scan">
//           <input type="hidden" name="lectureId" value="${lectureId}" />
//           <input type="text" name="studentName" required />
//           <br><br>
//           <button>Submit</button>
//         </form>
//       </div>
//     `);
//   }

//   // Prevent duplicate
//   const already = await Attendance.findOne({
//     studentName,
//     lectureId,
//   });

//   if (already) {
//     return res.send(`
//       <h2 style="color:orange;">⚠ Already Marked</h2>
//     `);
//   }

//   // SAVE
//   const record = await Attendance.create({
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//     date: new Date().toLocaleString("en-IN", {
//       day: "numeric",
//       month: "numeric",
//       year: "numeric",
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     }),
//   });

//   res.send(`
//     <div style="text-align:center; margin-top:50px;">
//       <h2 style="color:green;">✅ Attendance Marked</h2>
//       <p><strong>Lecture:</strong> ${lecture.title}</p>
//       <p><strong>Student:</strong> ${studentName}</p>
//       <p><strong>Date:</strong> ${record.date}</p>
//     </div>
//   `);
// });

// /* ================= ATTENDANCE ================= */

// // ALL
// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });

// // BY STUDENT
// app.get("/attendance/student/:name", async (req, res) => {
//   const data = await Attendance.find({
//     studentName: req.params.name,
//   });
//   res.json(data);
// });

// /* ================= SERVER ================= */

// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running:");
//   console.log("http://localhost:5000");
// });




//mongodb runable but data not in mongodb
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// app.use(cors());
// app.use(express.json());

// /* ================= MONGODB CONNECT ================= */
// mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.log("❌ Mongo Error:", err));

// /* ================= SCHEMAS ================= */

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const lectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   videoUrl: String,
//   date: String,
//   time: String,
// });

// const attendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: String,
// });

// /* ================= MODELS ================= */

// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= USER ================= */

// // REGISTER
// app.post("/users", async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();

//     res.json({ message: "User created ✅" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // LOGIN
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email, password });

//   if (!user) {
//     return res.status(401).json({ message: "Invalid ❌" });
//   }

//   res.json({ message: "Login success ✅", user });
// });

// /* ================= LECTURES ================= */

// // ADD LECTURE
// app.post("/lectures", async (req, res) => {
//   try {
//     const lecture = new Lecture(req.body);
//     await lecture.save();

//     res.json({ message: "Lecture added ✅", lecture });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET ALL
// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// // DELETE
// app.delete("/lectures/:id", async (req, res) => {
//   await Lecture.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   const { lectureId, studentName } = req.query;

//   if (!lectureId) return res.send("❌ Missing lectureId");

//   const lecture = await Lecture.findById(lectureId);

//   if (!lecture) return res.send("❌ Invalid Lecture");

//   // ask name
//   if (!studentName) {
//     return res.send(`
//       <div style="text-align:center;margin-top:50px">
//         <h2>Enter Name</h2>
//         <form method="GET" action="/scan">
//           <input type="hidden" name="lectureId" value="${lectureId}" />
//           <input name="studentName" placeholder="Enter name" required />
//           <br><br>
//           <button>Submit</button>
//         </form>
//       </div>
//     `);
//   }

//   // prevent duplicate
//   const already = await Attendance.findOne({
//     studentName,
//     lectureId
//   });

//   if (already) {
//     return res.send(`<h2 style="color:orange">Already Marked</h2>`);
//   }

//   // SAVE
//   const record = new Attendance({
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//     date: new Date().toISOString(),
//   });

//   await record.save(); // 🔥 IMPORTANT

//   // format date for display
//   const formattedDate = new Date(record.date).toLocaleString("en-IN", {
//     hour: "numeric",
//     minute: "2-digit",
//     hour12: true,
//     day: "numeric",
//     month: "numeric",
//     year: "numeric",
//   });

//   res.send(`
//     <div style="text-align:center;margin-top:50px">
//       <h2 style="color:green">✅ Attendance Marked</h2>
//       <p><b>Lecture:</b> ${lecture.title}</p>
//       <p><b>Student:</b> ${studentName}</p>
//       <p><b>Date:</b> ${formattedDate}</p>
//     </div>
//   `);
// });

// /* ================= ATTENDANCE ================= */

// // ALL
// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });

// // BY STUDENT
// app.get("/attendance/student/:name", async (req, res) => {
//   const data = await Attendance.find({
//     studentName: req.params.name
//   });
//   res.json(data);
// });

// /* ================= SERVER ================= */

// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running");
// });




//
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// // ✅ Middlewares
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connection
// // mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log("✅ MongoDB Connected"))
// // .catch(err => console.log("❌ Mongo Error:", err));


// mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.log("❌ Mongo Error:", err));

// // 🔥 Debug mode (see DB queries)
// mongoose.set("debug", true);

// /* ================= SCHEMA ================= */

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, default: "student" },
// });

// /* ================= MODEL ================= */
// const User = mongoose.model("User", userSchema);

// /* ================= ROUTES ================= */

// // ✅ REGISTER USER
// app.post("/users", async (req, res) => {
//   try {
//     console.log("📥 Incoming Data:", req.body);

//     const { name, email, password, role } = req.body;

//     // 🔥 Check duplicate email
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         message: "Email already exists ❌"
//       });
//     }

//     const newUser = new User({
//       name,
//       email,
//       password,
//       role,
//     });

//     await newUser.save();

//     console.log("✅ Saved User:", newUser);

//     res.json({
//       message: "User created successfully ✅",
//       user: newUser
//     });

//   } catch (err) {
//     console.error("❌ Register Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ LOGIN
// app.post("/login", async (req, res) => {
//   try {
//     console.log("🔐 Login Attempt:", req.body);

//     const { email, password } = req.body;

//     const user = await User.findOne({ email, password });

//     if (!user) {
//       return res.status(401).json({
//         message: "Invalid email or password ❌"
//       });
//     }

//     res.json({
//       message: "Login successful ✅",
//       user
//     });

//   } catch (err) {
//     console.error("❌ Login Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// /* ================= SERVER ================= */

// app.listen(5000, "0.0.0.0", () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });









//testing 
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(cors());
// app.use(express.json());

// /* ================= SCHEMAS ================= */

// // USER
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// // LECTURE
// const lectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   videoUrl: String,
//   date: String,
//   time: String,
// });

// // ATTENDANCE
// const attendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: String,
// });

// /* ================= MODELS ================= */

// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= ROUTES ================= */

// // REGISTER
// app.post("/users", async (req, res) => {
//   try {
//     console.log("📥 User:", req.body);

//     const user = new User(req.body);
//     await user.save();

//     console.log("✅ Saved User");

//     res.json({ message: "User created ✅" });

//   } catch (err) {
//     console.error("❌ Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // LOGIN
// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne(req.body);

//     if (!user) {
//       return res.status(401).json({ message: "Invalid ❌" });
//     }

//     res.json({ message: "Login success ✅", user });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ADD LECTURE
// app.post("/lectures", async (req, res) => {
//   try {
//     console.log("📥 Lecture:", req.body);

//     const lecture = new Lecture(req.body);
//     await lecture.save();

//     console.log("✅ Lecture Saved");

//     res.json({ message: "Lecture added ✅" });

//   } catch (err) {
//     console.error("❌ Lecture Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // GET LECTURES
// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// // ATTENDANCE SAVE
// app.post("/attendance", async (req, res) => {
//   try {
//     console.log("📥 Attendance:", req.body);

//     const record = new Attendance(req.body);
//     await record.save();

//     console.log("✅ Attendance Saved");

//     res.json({ message: "Attendance saved ✅" });

//   } catch (err) {
//     console.error("❌ Attendance Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // GET ATTENDANCE
// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });

// /* ================= START SERVER AFTER DB ================= */

// mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB")
//   .then(() => {
//     console.log("✅ MongoDB Connected");

//     app.listen(5000, () => {
//       console.log("🚀 Server running on http://localhost:5000");
//     });
//   })
//   .catch(err => {
//     console.log("❌ Mongo Error:", err);
//   });

























//run all tecaher good student
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ================= DB CONNECT ================= */
// mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB")
//   .then(() => {
//     console.log("✅ MongoDB Connected");

//     app.listen(5000, () => {
//       console.log("🚀 Server running on http://10.62.213.163:5000");
//     });
//   })
//   .catch(err => console.log("❌ Mongo Error:", err));

// /* ================= SCHEMAS ================= */

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const lectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   date: String,
//   time: String,
// });

// const attendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: String,
// });

// /* ================= MODELS ================= */

// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= USER ================= */

// app.post("/users", async (req, res) => {
//   const user = new User(req.body);
//   await user.save();
//   res.json({ message: "User created" });
// });

// app.post("/login", async (req, res) => {
//   const user = await User.findOne(req.body);
//   if (!user) return res.status(401).json({ message: "Invalid" });
//   res.json({ user });
// });

// /* ================= LECTURE ================= */

// app.post("/lectures", async (req, res) => {
//   const lecture = new Lecture(req.body);
//   await lecture.save();
//   res.json({ message: "Lecture added" });
// });

// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   const { lectureId, studentName } = req.query;

//   const lecture = await Lecture.findById(lectureId);

//   if (!studentName) {
//     return res.send(`
//       <h2>Enter Name</h2>
//       <form>
//         <input type="hidden" name="lectureId" value="${lectureId}" />
//         <input name="studentName" placeholder="Name" required />
//         <button>Submit</button>
//       </form>
//     `);
//   }

//   const already = await Attendance.findOne({ lectureId, studentName });

//   if (already) return res.send("Already Marked");

//   await new Attendance({
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//     date: new Date(),
//   }).save();

//   res.send("Attendance Marked ✅");
// });

// /* ================= ATTENDANCE ================= */

// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });


















//globally
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ================= DB CONNECT (UPDATED) ================= */

// mongoose.connect("mongodb+srv://kalyaniA:ankita12345@cluster0.pemgsy9.mongodb.net/attendance?retryWrites=true&w=majority")
//   .then(() => {
//     console.log("✅ MongoDB Atlas Connected");

//     app.listen(5000, "0.0.0.0", () => {
//       console.log("🚀 Server running on http://localhost:5000");
//     });
//   })
//   .catch(err => console.log("❌ Mongo Error:", err));

// /* ================= SCHEMAS ================= */

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const lectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   date: String,
//   time: String,
// });

// const attendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: String,
// });

// /* ================= MODELS ================= */

// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= USER ================= */

// app.post("/users", async (req, res) => {
//   const user = new User(req.body);
//   await user.save();
//   res.json({ message: "User created" });
// });

// app.post("/login", async (req, res) => {
//   const user = await User.findOne(req.body);
//   if (!user) return res.status(401).json({ message: "Invalid" });
//   res.json({ user });
// });

// /* ================= LECTURE ================= */

// app.post("/lectures", async (req, res) => {
//   const lecture = new Lecture(req.body);
//   await lecture.save();
//   res.json({ message: "Lecture added" });
// });

// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   const { lectureId, studentName } = req.query;

//   const lecture = await Lecture.findById(lectureId);

//   if (!lecture) return res.send("Invalid Lecture ❌");

//   if (!studentName) {
//     return res.send(`
//       <h2>Enter Name</h2>
//       <form>
//         <input type="hidden" name="lectureId" value="${lectureId}" />
//         <input name="studentName" placeholder="Name" required />
//         <button>Submit</button>
//       </form>
//     `);
//   }

//   const already = await Attendance.findOne({ lectureId, studentName });

//   if (already) return res.send("Already Marked ✅");

//   await new Attendance({
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//     date: new Date(),
//   }).save();

//   res.send("Attendance Marked ✅");
// });

// /* ================= ATTENDANCE ================= */

// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });



// ge
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// console.log("🚀 Starting Server...");

// app.use(cors());
// app.use(express.json());

// /* ================= DB CONNECT ================= */

// mongoose.connect(
//   "mongodb+srv://kalyaniA:ankita12345@cluster0.pemgsy9.mongodb.net/attendance?retryWrites=true&w=majority"
// )
// .then(() => {
//   console.log("✅ MongoDB Atlas Connected Successfully");

//   app.listen(5000, "0.0.0.0", () => {
//     console.log("🌍 Server running on port 5000");
//     console.log("👉 http://localhost:5000");
//   });
// })
// .catch((err) => {
//   console.log("❌ MongoDB Connection Error:");
//   console.log(err);
// });

// /* ================= SCHEMAS ================= */

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, required: true },
// });

// const lectureSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: String,
//   date: String,
//   time: String,
// });

// const attendanceSchema = new mongoose.Schema({
//   studentName: { type: String, required: true },
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: { type: Date, default: Date.now },
// });

// /* ================= MODELS ================= */

// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= USER ================= */

// // REGISTER
// app.post("/users", async (req, res) => {
//   try {
//     console.log("📥 Register:", req.body);

//     const exists = await User.findOne({ email: req.body.email });
//     if (exists) {
//       return res.json({ message: "User already exists ⚠️" });
//     }

//     const user = new User(req.body);
//     await user.save();

//     res.json({ message: "User stored in MongoDB ✅" });
//   } catch (err) {
//     console.log("❌ User Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // LOGIN
// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne(req.body);

//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials ❌" });
//     }

//     res.json({ user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* ================= LECTURES ================= */

// // ADD LECTURE
// app.post("/lectures", async (req, res) => {
//   try {
//     console.log("📥 Lecture:", req.body);

//     const lecture = new Lecture(req.body);
//     await lecture.save();

//     res.json({ message: "Lecture stored in MongoDB ✅" });
//   } catch (err) {
//     console.log("❌ Lecture Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET ALL LECTURES
// app.get("/lectures", async (req, res) => {
//   try {
//     const data = await Lecture.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   try {
//     const { lectureId, studentName } = req.query;

//     if (!lectureId) return res.send("❌ Lecture ID missing");

//     const lecture = await Lecture.findById(lectureId);
//     if (!lecture) return res.send("❌ Invalid Lecture");

//     // Ask name if not provided
//     if (!studentName) {
//       return res.send(`
//         <h2>Enter Name</h2>
//         <form method="GET" action="/scan">
//           <input type="hidden" name="lectureId" value="${lectureId}" />
//           <input name="studentName" placeholder="Your Name" required />
//           <br><br>
//           <button>Submit</button>
//         </form>
//       `);
//     }

//     const already = await Attendance.findOne({ lectureId, studentName });

//     if (already) {
//       return res.send("<h2 style='color:orange'>Already Marked</h2>");
//     }

//     const record = new Attendance({
//       studentName,
//       lectureTitle: lecture.title,
//       lectureId,
//       status: "Present",
//     });

//     await record.save();

//     console.log("✅ Attendance Saved:", record);

//     res.send(`
//       <h2 style="color:green">✅ Attendance Marked</h2>
//       <p><b>Lecture:</b> ${lecture.title}</p>
//       <p><b>Student:</b> ${studentName}</p>
//     `);

//   } catch (err) {
//     console.log("❌ Scan Error:", err);
//     res.send("Error ❌ " + err.message);
//   }
// });

// /* ================= ATTENDANCE ================= */

// // ALL
// app.get("/attendance", async (req, res) => {
//   try {
//     const data = await Attendance.find();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // BY STUDENT
// app.get("/attendance/student/:name", async (req, res) => {
//   try {
//     const data = await Attendance.find({
//       studentName: req.params.name,
//     });
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* ================= ROOT ================= */

// app.get("/", (req, res) => {
//   res.send("🚀 QR Attendance Backend Running");
// });

























//all new
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// console.log("🚀 Starting Server...");

// /* ================= DB CONNECT ================= */

// mongoose.connect(
//   "mongodb+srv://kalyaniA:ankita12345@cluster0.pemgsy9.mongodb.net/attendance?retryWrites=true&w=majority"
// )
// .then(() => {
//   console.log("✅ MongoDB Connected");

//   app.listen(5000, "0.0.0.0", () => {
//     console.log("🌍 Server running on port 5000");
//   });
// })
// .catch((err) => {
//   console.log("❌ Mongo Error:", err.message);
// });

// /* ================= SCHEMAS ================= */

// const User = mongoose.model("User", {
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const Lecture = mongoose.model("Lecture", {
//   title: String,
//   description: String,
//   date: String,
//   time: String,
// });

// const Attendance = mongoose.model("Attendance", {
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: { type: Date, default: Date.now },
// });

// /* ================= USER ================= */

// app.post("/users", async (req, res) => {
//   try {
//     console.log("📥 Register:", req.body);

//     const exists = await User.findOne({ email: req.body.email });
//     if (exists) {
//       return res.json({ message: "User already exists ⚠️" });
//     }

//     const user = new User(req.body);
//     await user.save();

//     console.log("✅ User Saved");

//     res.json({ message: "User stored in MongoDB ✅" });
//   } catch (err) {
//     console.log("❌ User Error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/login", async (req, res) => {
//   const user = await User.findOne(req.body);
//   if (!user) return res.status(401).json({ message: "Invalid ❌" });
//   res.json({ user });
// });

// /* ================= LECTURE ================= */

// app.post("/lectures", async (req, res) => {
//   try {
//     console.log("📥 Lecture:", req.body);

//     const lecture = new Lecture(req.body);
//     await lecture.save();

//     console.log("✅ Lecture Saved");

//     res.json({ message: "Lecture added ✅" });
//   } catch (err) {
//     console.log("❌ Lecture Error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   try {
//     const { lectureId, studentName } = req.query;

//     if (!lectureId) return res.send("❌ Missing lectureId");

//     const lecture = await Lecture.findById(lectureId);
//     if (!lecture) return res.send("❌ Invalid Lecture");

//     if (!studentName) {
//       return res.send(`
//         <h2>Enter Name</h2>
//         <form method="GET">
//           <input type="hidden" name="lectureId" value="${lectureId}" />
//           <input name="studentName" required />
//           <button>Submit</button>
//         </form>
//       `);
//     }

//     const already = await Attendance.findOne({ lectureId, studentName });

//     if (already) return res.send("Already Marked");

//     await new Attendance({
//       studentName,
//       lectureTitle: lecture.title,
//       lectureId,
//       status: "Present",
//     }).save();

//     console.log("✅ Attendance Saved");

//     res.send("<h2 style='color:green'>Attendance Marked ✅</h2>");

//   } catch (err) {
//     console.log("❌ Scan Error:", err.message);
//     res.send("Error ❌");
//   }
// });

// /* ================= ATTENDANCE ================= */

// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });

// app.get("/attendance/student/:name", async (req, res) => {
//   const data = await Attendance.find({
//     studentName: req.params.name,
//   });
//   res.json(data);
// });

// /* ================= ROOT ================= */

// app.get("/", (req, res) => {
//   res.send("🚀 Backend Running");
// });












//
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ================= DB CONNECT ================= */
// mongoose.connect(
//   "mongodb+srv://kalyaniA:ankita12345@cluster0.pemgsy9.mongodb.net/attendance?retryWrites=true&w=majority"
// )
// .then(() => {
//   console.log("✅ MongoDB Connected");

//   app.listen(5000, "0.0.0.0", () => {
//     console.log("🚀 Server running on port 5000");
//   });
// })
// .catch(err => console.log("❌ Mongo Error:", err));

// /* ================= SCHEMAS ================= */

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const lectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   date: String,
//   time: String,
// });

// const attendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: { type: Date, default: Date.now },
// });

// /* ================= MODELS ================= */

// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= USER ================= */

// app.post("/users", async (req, res) => {
//   try {
//     const exists = await User.findOne({ email: req.body.email });

//     if (exists) {
//       return res.json({ message: "User already exists ⚠️" });
//     }

//     const user = new User(req.body);
//     await user.save();

//     res.json({ message: "User stored in MongoDB ✅" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/login", async (req, res) => {
//   const user = await User.findOne(req.body);

//   if (!user) return res.status(401).json({ message: "Invalid ❌" });

//   res.json({ user });
// });

// /* ================= LECTURES ================= */

// app.post("/lectures", async (req, res) => {
//   try {
//     const lecture = new Lecture(req.body);
//     await lecture.save();

//     res.json({ message: "Lecture added ✅" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   const { lectureId, studentName } = req.query;

//   if (!lectureId) return res.send("Lecture ID missing ❌");

//   const lecture = await Lecture.findById(lectureId);

//   if (!lecture) return res.send("Invalid Lecture ❌");

//   if (!studentName) {
//     return res.send(`
//       <h2>Enter Name</h2>
//       <form method="GET">
//         <input type="hidden" name="lectureId" value="${lectureId}" />
//         <input name="studentName" required />
//         <button>Submit</button>
//       </form>
//     `);
//   }

//   const already = await Attendance.findOne({ lectureId, studentName });

//   if (already) return res.send("Already Marked ✅");

//   await new Attendance({
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//   }).save();

//   res.send("Attendance Marked ✅");
// });

// /* ================= ATTENDANCE ================= */

// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });

// app.get("/attendance/student/:name", async (req, res) => {
//   const data = await Attendance.find({
//     studentName: req.params.name,
//   });
//   res.json(data);
// });







//success
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ================= ROOT ROUTE ================= */
// app.get("/", (req, res) => {
//   res.send("API is running ✅");
// });

// /* ================= DB CONNECT ================= */
// mongoose.connect(
//   process.env.MONGO_URI || "mongodb+srv://kalyaniA:ankita12345@cluster0.pemgsy9.mongodb.net/attendance?retryWrites=true&w=majority"
// )
// .then(() => {
//   console.log("✅ MongoDB Connected");

//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, "0.0.0.0", () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//   });
// })
// .catch(err => console.log("❌ Mongo Error:", err));

// /* ================= SCHEMAS ================= */

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const lectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   date: String,
//   time: String,
// });

// const attendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: { type: Date, default: Date.now },
// });

// /* ================= MODELS ================= */

// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= USER ================= */

// app.post("/users", async (req, res) => {
//   try {
//     const exists = await User.findOne({ email: req.body.email });

//     if (exists) {
//       return res.json({ message: "User already exists ⚠️" });
//     }

//     const user = new User(req.body);
//     await user.save();

//     res.json({ message: "User stored in MongoDB ✅" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/login", async (req, res) => {
//   const user = await User.findOne(req.body);

//   if (!user) return res.status(401).json({ message: "Invalid ❌" });

//   res.json({ user });
// });

// /* ================= LECTURES ================= */

// app.post("/lectures", async (req, res) => {
//   try {
//     const lecture = new Lecture(req.body);
//     await lecture.save();

//     res.json({ message: "Lecture added ✅" });
//   } catch (err) {
//     console.log("Lecture Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// app.delete("/lectures/:id", async (req, res) => {
//   await Lecture.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   const { lectureId, studentName } = req.query;

//   if (!lectureId) return res.send("Lecture ID missing ❌");

//   const lecture = await Lecture.findById(lectureId);
//   if (!lecture) return res.send("Invalid Lecture ❌");

//   if (!studentName) {
//     return res.send(`
//       <h2>Enter Name</h2>
//       <form method="GET">
//         <input type="hidden" name="lectureId" value="${lectureId}" />
//         <input name="studentName" required />
//         <button>Submit</button>
//       </form>
//     `);
//   }

//   const already = await Attendance.findOne({ lectureId, studentName });
//   if (already) return res.send("Already Marked ✅");

//   await new Attendance({
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//   }).save();

//   res.send("Attendance Marked ✅");
// });

// /* ================= ATTENDANCE ================= */

// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });

// app.get("/attendance/student/:name", async (req, res) => {
//   const data = await Attendance.find({
//     studentName: req.params.name,
//   });
//   res.json(data);
// });








//vvvv
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ================= ROOT ================= */
// app.get("/", (req, res) => {
//   res.send("API is running ✅");
// });

// /* ================= DB CONNECT ================= */
// const MONGO =
//   process.env.MONGO_URI ||
//   "mongodb+srv://kalyaniA:ankita12345@cluster0.pemgsy9.mongodb.net/attendance?retryWrites=true&w=majority";

// mongoose
//   .connect(MONGO)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, "0.0.0.0", () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => console.log("❌ Mongo Error:", err));

// /* ================= SCHEMAS ================= */

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const lectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   videoUrl: String, // added (you used it in UI)
//   date: String,
//   time: String,
// });

// const attendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: { type: Date, default: Date.now },
// });

// /* ================= MODELS ================= */

// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= USER ================= */

// app.post("/users", async (req, res) => {
//   try {
//     const exists = await User.findOne({ email: req.body.email });
//     if (exists) return res.json({ message: "User already exists ⚠️" });

//     const user = new User(req.body);
//     await user.save();
//     res.json({ message: "User stored in MongoDB ✅" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/login", async (req, res) => {
//   const user = await User.findOne(req.body);
//   if (!user) return res.status(401).json({ message: "Invalid ❌" });
//   res.json({ user });
// });

// /* ================= LECTURES ================= */

// app.post("/lectures", async (req, res) => {
//   try {
//     const lecture = new Lecture(req.body);
//     await lecture.save();
//     res.json({ message: "Lecture added ✅" });
//   } catch (err) {
//     console.log("Lecture Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// app.delete("/lectures/:id", async (req, res) => {
//   await Lecture.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted ✅" });
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   const { lectureId, studentName } = req.query;

//   if (!lectureId) return res.send("Lecture ID missing ❌");

//   const lecture = await Lecture.findById(lectureId);
//   if (!lecture) return res.send("Invalid Lecture ❌");

//   if (!studentName) {
//     return res.send(`
//       <h2>Enter Name</h2>
//       <form method="GET">
//         <input type="hidden" name="lectureId" value="${lectureId}" />
//         <input name="studentName" required />
//         <button>Submit</button>
//       </form>
//     `);
//   }

//   const already = await Attendance.findOne({ lectureId, studentName });
//   if (already) return res.send("Already Marked ✅");

//   await new Attendance({
//     studentName,
//     lectureTitle: lecture.title,
//     lectureId,
//     status: "Present",
//   }).save();

//   res.send("Attendance Marked ✅");
// });

// /* ================= ATTENDANCE ================= */

// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });

// app.get("/attendance/student/:name", async (req, res) => {
//   const data = await Attendance.find({
//     studentName: req.params.name,
//   });
//   res.json(data);
// });







//
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ USE LOCALHOST FOR NOW
//   const BASE_URL = "http://localhost:5000";

//   const studentName = "Kalyani";

//   // ================= FETCH =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Lecture fetch error:", err.message);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance fetch error:", err.message);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ================= FORM =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ FIXED SUBMIT
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("🔥 Button Clicked");
//     console.log("📤 Sending:", form);

//     if (!form.title) {
//       alert("Title required ❌");
//       return;
//     }

//     try {
//       const res = await axios.post(`${BASE_URL}/lectures`, form);

//       console.log("✅ Response:", res.data);

//       alert("Lecture Added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log("❌ FULL ERROR:", err.response?.data || err.message);
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ================= DELETE =================
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch (err) {
//       console.log("Delete error:", err.message);
//     }
//   };

//   // ================= UI =================
//   return (
//     <div className="dashboard">
//       <h2>👩‍🏫 Teacher Dashboard</h2>

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         {/* ✅ IMPORTANT */}
//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.length === 0 ? (
//           <p>No lectures yet ❌</p>
//         ) : (
//           lectures.map((lec) => (
//             <div key={lec._id} className="lecture-card">
//               <h3>{lec.title}</h3>
//               <p>{lec.description}</p>

//               {lec.videoUrl && (
//                 <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                   ▶ Watch Lecture
//                 </a>
//               )}

//               <br />

//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => handleDelete(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ================= QR ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: 20 }}>
//           <h3>{selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentName=${studentName}`}
//             size={220}
//           />

//           <p>Scan QR</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close ❌
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.length === 0 ? (
//             <tr>
//               <td colSpan="4">No Attendance Yet</td>
//             </tr>
//           ) : (
//             attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureTitle}</td>
//                 <td>{a.studentName}</td>
//                 <td>{a.status}</td>
//                 <td>
//                   {a.date
//                     ? new Date(a.date).toLocaleString()
//                     : "No Date"}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

























//testin1
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// console.log("🚀 Server Starting...");

// /* ================= DB CONNECT ================= */
// mongoose.connect(
//   "mongodb+srv://kalyaniA:ankita12345@cluster0.pemgsy9.mongodb.net/attendance?retryWrites=true&w=majority"
// )
// .then(() => {
//   console.log("✅ MongoDB Connected");
//   app.listen(5000, () => console.log("🌍 Server running on port 5000"));
// })
// .catch((err) => console.log("❌ Mongo Error:", err));

// /* ================= SCHEMAS ================= */
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   role: String,
// });

// const lectureSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   videoUrl: String,
//   date: String,
//   time: String,
// });

// const attendanceSchema = new mongoose.Schema({
//   studentName: String,
//   lectureTitle: String,
//   lectureId: String,
//   status: String,
//   date: { type: Date, default: Date.now },
// });

// /* ================= MODELS ================= */
// const User = mongoose.model("User", userSchema);
// const Lecture = mongoose.model("Lecture", lectureSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// /* ================= ROOT ================= */
// app.get("/", (req, res) => {
//   res.send("🚀 Backend Running Successfully");
// });

// /* ================= USER ================= */

// // Register
// app.post("/users", async (req, res) => {
//   try {
//     const exists = await User.findOne({ email: req.body.email });

//     if (exists) {
//       return res.json({ message: "User already exists ⚠️" });
//     }

//     const user = new User(req.body);
//     await user.save();

//     res.json({ message: "User registered ✅" });
//   } catch (err) {
//     console.log("❌ User Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Login
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("🔐 Login:", req.body);

//     const user = await User.findOne({ email, password });

//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password ❌" });
//     }

//     res.json({ message: "Login success ✅", user });

//   } catch (err) {
//     console.log("❌ Login Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// /* ================= LECTURES ================= */

// // Add lecture
// app.post("/lectures", async (req, res) => {
//   try {
//     console.log("📥 Lecture:", req.body);

//     if (!req.body.title) {
//       return res.status(400).json({ error: "Title required ❌" });
//     }

//     const lecture = new Lecture(req.body);
//     await lecture.save();

//     res.json({ message: "Lecture added ✅" });
//   } catch (err) {
//     console.log("❌ Lecture Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get lectures
// app.get("/lectures", async (req, res) => {
//   const data = await Lecture.find();
//   res.json(data);
// });

// // Delete lecture
// app.delete("/lectures/:id", async (req, res) => {
//   try {
//     await Lecture.findByIdAndDelete(req.params.id);
//     res.json({ message: "Lecture deleted ✅" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* ================= QR SCAN ================= */

// app.get("/scan", async (req, res) => {
//   try {
//     const { lectureId, studentName } = req.query;

//     if (!lectureId) return res.send("❌ Missing lectureId");

//     const lecture = await Lecture.findById(lectureId);
//     if (!lecture) return res.send("❌ Invalid Lecture");

//     if (!studentName) {
//       return res.send(`
//         <h2>Enter Name</h2>
//         <form method="GET">
//           <input type="hidden" name="lectureId" value="${lectureId}" />
//           <input name="studentName" required />
//           <button>Submit</button>
//         </form>
//       `);
//     }

//     const already = await Attendance.findOne({ lectureId, studentName });

//     if (already) return res.send("<h2>Already Marked ✅</h2>");

//     await new Attendance({
//       studentName,
//       lectureTitle: lecture.title,
//       lectureId,
//       status: "Present",
//     }).save();

//     res.send("<h2 style='color:green'>Attendance Marked ✅</h2>");

//   } catch (err) {
//     console.log("❌ Scan Error:", err);
//     res.send("Error ❌");
//   }
// });

// /* ================= ATTENDANCE ================= */

// // All attendance
// app.get("/attendance", async (req, res) => {
//   const data = await Attendance.find();
//   res.json(data);
// });

// // Student attendance
// app.get("/attendance/student/:name", async (req, res) => {
//   const data = await Attendance.find({
//     studentName: req.params.name,
//   });
//   res.json(data);
// });








//
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

console.log("🚀 Server Starting...");

/* ================= DB CONNECT ================= */
mongoose.connect(
  "mongodb+srv://kalyaniA:ankita12345@cluster0.pemgsy9.mongodb.net/attendance?retryWrites=true&w=majority"
)
.then(() => {
  console.log("✅ MongoDB Connected");

  // ✅ IMPORTANT: allow mobile access
  app.listen(5000, "0.0.0.0", () => {
    console.log("🌍 Server running on port 5000");
  });

})
.catch((err) => console.log("❌ Mongo Error:", err));


/* ================= SCHEMAS ================= */
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const lectureSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  date: String,
  time: String,
});

const attendanceSchema = new mongoose.Schema({
  studentName: String,
  lectureTitle: String,
  lectureId: String,
  status: String,
  date: { type: Date, default: Date.now },
});


/* ================= MODELS ================= */
const User = mongoose.model("User", userSchema);
const Lecture = mongoose.model("Lecture", lectureSchema);
const Attendance = mongoose.model("Attendance", attendanceSchema);


/* ================= ROOT ================= */
app.get("/", (req, res) => {
  res.send("🚀 Backend Running Successfully");
});


/* ================= USER ================= */

// Register
app.post("/users", async (req, res) => {
  try {
    const exists = await User.findOne({ email: req.body.email });

    if (exists) {
      return res.json({ message: "User already exists ⚠️" });
    }

    const user = new User(req.body);
    await user.save();

    res.json({ message: "User registered ✅" });

  } catch (err) {
    console.log("❌ User Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("🔐 Login:", req.body);

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password ❌" });
    }

    res.json({ message: "Login success ✅", user });

  } catch (err) {
    console.log("❌ Login Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


/* ================= LECTURES ================= */

// Add lecture
app.post("/lectures", async (req, res) => {
  try {
    console.log("📥 Lecture:", req.body);

    if (!req.body.title) {
      return res.status(400).json({ error: "Title required ❌" });
    }

    const lecture = new Lecture(req.body);
    await lecture.save();

    res.json({ message: "Lecture added ✅" });

  } catch (err) {
    console.log("❌ Lecture Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Get lectures
app.get("/lectures", async (req, res) => {
  const data = await Lecture.find();
  res.json(data);
});

// Delete lecture
app.delete("/lectures/:id", async (req, res) => {
  try {
    await Lecture.findByIdAndDelete(req.params.id);
    res.json({ message: "Lecture deleted ✅" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/* ================= QR SCAN ================= */

app.get("/scan", async (req, res) => {
  try {
    const { lectureId, studentName } = req.query;

    if (!lectureId) return res.send("❌ Missing lectureId");

    const lecture = await Lecture.findById(lectureId);
    if (!lecture) return res.send("❌ Invalid Lecture");

    // Ask name if not provided
    if (!studentName) {
      return res.send(`
        <h2>Enter Name</h2>
        <form method="GET">
          <input type="hidden" name="lectureId" value="${lectureId}" />
          <input name="studentName" required />
          <button>Submit</button>
        </form>
      `);
    }

    const already = await Attendance.findOne({ lectureId, studentName });

    if (already) {
      return res.send("<h2>Already Marked ✅</h2>");
    }

    await new Attendance({
      studentName,
      lectureTitle: lecture.title,
      lectureId,
      status: "Present",
    }).save();

    res.send("<h2 style='color:green'>Attendance Marked ✅</h2>");

  } catch (err) {
    console.log("❌ Scan Error:", err);
    res.send("Error ❌");
  }
});


/* ================= ATTENDANCE ================= */

// All attendance
app.get("/attendance", async (req, res) => {
  const data = await Attendance.find();
  res.json(data);
});

// Student attendance
app.get("/attendance/student/:name", async (req, res) => {
  const data = await Attendance.find({
    studentName: req.params.name,
  });
  res.json(data);
});