const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).send({ message: "All fields are required" });
  }
  if (password.length <= 6) {
    return res
      .status(400)
      .send({ message: "password should be more than 6 characters" });
  }
  if (password !== confirmPassword) {
    return res.status(400).send({ message: "Passwords do not match" });
  }
  try {
    const exisitingUser = await UserModel.findOne({ email });
    if (exisitingUser) {
      return res.send({ message: "user already registered! please Login" });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, password: hashed });
    await user.save();
    res.send("user Regsitered");
  } catch (error) {
    res.send("user registration failed");
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }

  try {
    const user = await UserModel.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(400).send({ message: "Email is not registered" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("req.body", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(400).send({ message: "Incorrect password" });
    }

    let token = jwt.sign({ userId: user._id }, "bank");
    res.send({ msg: "login success", token: token });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = { userRouter };
