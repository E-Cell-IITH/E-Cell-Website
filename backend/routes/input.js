const { Startup } = require("../models/startup");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post(`/signup`, async (req, res) => {
  const { oEmail } = req.body;
  Startup.findOne({ oEmail: oEmail }, (err, result) => {
    if (result) {
      res.send({
        message: "Official Email already exists.",
        alert: false,
      });
    }
  });

  let startup = new Startup({
    name: req.body.name,
    fName: req.body.fName,
    pocName: req.body.pocName,
    pocNum: req.body.pocNum,
    pocEmail: req.body.pocEmail,
    oEmail: req.body.oEmail,
    stage: req.body.stage,
    fIndustry: req.body.fIndustry,
    sector: req.body.sector,
    location: req.body.location,
    aYears: req.body.aYears,
  });

  startup = await startup.save();
  if (!startup) {
    return res.status(500).send({
      message: "Can't Register",
      alert: false,
    });
  }
  res.send({
    message: "Registeration Successful",
    alert: true,
  });
});

module.exports = router;