// const mongoose = require("mongoose");

// const lectureSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   date: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Lecture", lectureSchema);



// const mongoose = require("mongoose");

// const lectureSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: String,

//   videoUrl: {
//     type: String
//   },

//   date: {
//     type: String   // e.g. "2026-04-10"
//   },

//   time: {
//     type: String   // e.g. "10:30 AM"
//   }

// }, { timestamps: true }); // ✅ auto createdAt

// module.exports = mongoose.model("Lecture", lectureSchema);



//

const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  subject: String,
  title: String,
  isActive: { type: Boolean, default: false },
  createdAt: Date,
});

module.exports = mongoose.model("Lecture", lectureSchema);