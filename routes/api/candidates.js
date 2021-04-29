const express = require("express");
const router = express.Router();
const Candidate = require("../../models/Candidate");

router.get("/", (req, res) => {
  console.log(req.body);
  res.status().send({ message: "message" });
});

router.post("/registration", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  try {
    const newCandidate = new Candidate({
      // ...req.body,
      ip,
    });
    const candidate = await newCandidate.save();
    res.json(candidate);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
