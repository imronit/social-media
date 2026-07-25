import { Router } from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
const router = Router();

//Register
router.post("/register", async (req, res) => {
  //   const user = new User({
  //     userName: "ronit",
  //     email: "sjkls@gal.com",
  //     password: "fdkfkf",
  //   });
  //console.log(req);
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPass,
  });
  console.log(newUser);
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("failed");
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("User not found");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    !validPassword && res.status(400).json("Wrong password");
    res.status(200).json(user);

    console.log(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

export default router;
