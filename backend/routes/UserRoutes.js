const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerCheck, loginCheck, validator} = require("../middlewares/Validator");
const isAuth = require("../middlewares/isAuth");
const upload = require("../utils/multer");
const isAdmin = require("../middlewares/isAdmin");

//register
router.post("/register", registerCheck(), validator, async (req, res) => {
  const { email, password, role } = req.body;
  try {
    if (role == "admin") {
      return res.status(401).send({ msg: "not auth !!" });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "user exist ,please login" });
    }
    const newUser = new User(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);

    newUser.password = hashedPassword;

    await newUser.save();
    return res.status(201).send({ msg: "user added successfuly" });
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
});
//login user
router.post("/login",loginCheck(),validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).send({ msg: "bad credential !!" });
    }
    const isMatched = await bcrypt.compare(password, existUser.password);

    if (!isMatched) {
      return res.status(400).send({ msg: "bad credential !!" });
    }
    existUser.password = undefined;
    const payload = { _id: existUser._id };
    const token = jwt.sign(payload, process.env.secretKey);
    res.send({ user: existUser, token });
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
});
// get current user ==>private
router.get("/current",isAuth(), (req, res) => {
  return res.status(200).send({ user: req.user });
});
//edituser => private
router.put( "/:id",upload.single("file"),isAuth(),async (req, res) => {
    try {
      const {  newpassword,password} = req.body;
      if (newpassword && password&&newpassword===password) {
       const hashednewpassword = await bcrypt.hash(newpassword, 10);
          req.body.password = hashednewpassword;
        } else {
          return res.status(400).send({ msg: "Current password not matched!" });
        }
      
      const result = await User.updateOne(
        { _id: req.params.id },
        { ...req.body }
      );
      const UserUpdated = await User.findOne({ _id: req.params.id });
      UserUpdated.newpassword = undefined;
      // change photo
      if (req.file) { 
        UserUpdated.img =req.file.path;
        await UserUpdated.save();
      }
      if (result.modifiedCount || req.file) {
        return res.status(203).send({ msg: "update success", user: UserUpdated });
      }
      return res.status(400).send({ msg: " Aleardy update " });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);
//userlist=>private for admin
router.get("/admin", isAuth(), isAdmin, async (req, res) => {
  try {
    const users = await User.find().sort({ name: 1 });
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
});

module.exports = router;
