const { Startup } = require("../models/startup");
const express = require("express");
const router = express.Router();

router.post(`/signup`, async (req, res) => {
  console.log(req.body)
  const { semail } = req.body;

  let found = false

  await Startup.findOne({ oEmail: semail }, (err, result) => {
    if (result) {
      found = true;
      res.send({
        message: "Official Email already exists.",
        alert: true,
      });
    }
  });

  if (found){
    return;
  }

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
  return res.send({
    message: "Registeration Successful",
    alert: true,
  });
});

module.exports = router;