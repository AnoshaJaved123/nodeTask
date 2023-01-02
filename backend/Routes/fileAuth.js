const express = require("express");
const router = express.Router();
const File = require("../Modules/File");

const dotenv = require("dotenv");

dotenv.config();

//Route 1: Create file
router.post("/createfile", async (req, res) => {
  try {
    const file = await File.create({
      name: req.body.name,
      content: req.body.content,
      });
    res.json(file);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;
