
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // ✅ REGISTER USER
// exports.createUser = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     // check existing user
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // create user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//     });

//     await newUser.save();

//     res.status(201).json({ message: "User created successfully ✅" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ✅ LOGIN USER
// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // check user
//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ message: "User not found" });

//     // compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid password" });

//     // create token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       "secretkey",
//       { expiresIn: "1d" }
//     );

//     res.json({
//       message: "Login successful ✅",
//       token,
//       role: user.role,
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };



const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ✅ REGISTER USER
exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully ✅" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ LOGIN USER
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Entered:", password);
    console.log("Stored:", user.password);
    console.log("Match:", isMatch);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful ✅",
      token,
      role: user.role,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET ALL USERS (FIX FOR YOUR ERROR)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching users" });
  }
};
