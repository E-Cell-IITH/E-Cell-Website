const { system } = require("nodemon/lib/config");
const {exec} = require("child_process")
const { Startup } = require("../models/startup");
const express = require("express");
const router = express.Router();
const path = require("path")

function export_csv(db, collection, fields){
  const file_name = `data_files/${db + "_" + collection}.csv`
  const cmd = `mongoexport --host localhost --db ${db} --collection ${collection} --csv --out ${file_name} --fields ${fields}`
  exec(cmd)
  exec(`ssconvert ${file_name} data_files/${db + "_" + collection}.xlsx`)
}

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

  const data = {
    name: req.body.sname,
    fName: req.body.fname,
    pocName: req.body.pocname,
    pocNum: req.body.contact,
    stage: req.body.startup,
    sector: req.body.service,
    pocEmail: req.body.email,
    oEmail: req.body.semail,
    fIndustry: req.body.ifocus,
    location: req.body.location,
    aYears: req.body.ayears,
    city: req.body.city,
    about: req.body.about
  }

  let startup = new Startup(data);

  startup = await startup.save();
  if (!startup) {
    return res.status(500).send({
      message: "Can't Register",
      alert: false,
    });
  }

  export_csv("ecell", "startups", Object.keys(data).join(","));
  return res.send({
    message: "Registeration Successful",
    alert: true,
  });
});

router.get("/ecell_startups.csv", (req, res) => {
  // console.log(path.dirname(__dirname) + "/data_files/ecell_startups.csv")
  res.sendFile(path.dirname(__dirname) + "/data_files/ecell_startups.csv")
})

router.get("/ecell_startups.xlsx", (req, res) => {
  res.sendFile(path.dirname(__dirname) + "/data_files/ecell_startups.xlsx")
})

module.exports = router;
