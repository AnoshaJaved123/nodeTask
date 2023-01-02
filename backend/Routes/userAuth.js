const express = require("express");
const router = express.Router();
const User = require("../Modules/User");
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var CryptoJS = require("crypto-js");
const dotenv = require("dotenv");

dotenv.config();

//Route 1: Create user
router.post("/usercreate", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.AES_SECRET
      ).toString(),
    });
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// login API
router.post("/fetchuser", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
      let decryptedpass = bytes.toString(CryptoJS.enc.Utf8);
      if (req.body.email == user.email && req.body.password == decryptedpass) {
        // var token = jwt.sign({name:user.name, email:user.email}, process.env.JWT_SECRET , { expiresIn: '2d' });
        var token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "2d",
        });
        var name = user.name;
        var email = user.email;

        res.status(200).json({ success: true, token, name, email });
      } else {
        res.status(400).json({ success: false, error: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ success: false, error: "No user found" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("internal server error");
  }
});




module.exports = router;
