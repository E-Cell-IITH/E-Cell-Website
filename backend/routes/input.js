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
    name: req.body.sname,
    fName: req.body.fname,
    pocName: req.body.pocname,
    pocNum: req.body.contact,
    stage: req.body.startup,
    sector: req.body.service,
    pocEmail: req.body.email,
    oEmail: req.body.semail,
    fIndustry: req.body.ifocus,
    location: "",
    aYears: req.body.ayears,
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