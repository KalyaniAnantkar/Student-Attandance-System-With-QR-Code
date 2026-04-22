// const express = require("express");
// const router = express.Router();

// const {
//   createUser,
//   loginUser,
//   getUsers   // ✅ add this
// } = require("../controllers/userController");

// // routes
// router.post("/", createUser);
// router.post("/login", loginUser);
// router.get("/", getUsers);   // ✅ ADD THIS

// module.exports = router;

// routes/userRoutes.js
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;