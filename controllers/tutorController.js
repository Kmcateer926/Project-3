const express = require("express");

const router = express.Router();
const Tutor = require("../models/tutor");



router.get("/", (req, res) => {
  Tutor.find({
    where: {
      id: req.params.id,
    },
  })
  .then((tutors) =>{
    res.json(tutors);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
  });
});

// CREATED A SIGNUP
router.post("/", (req,res) => {
  console.log(req.body);
  Tutor.create().then((newTutor) => {
    console.log(newTutor);
    res.json(newTutor);
  }).catch((err) => {
    console.log(err);
  });
});

// FOUND THE CREATED SIGNUP TO ENABLE LOGIN
router.post("/login", (req,res) => {
  console.log(req.body);
  Tutor.find(req.body).then((Tutor) => {
    console.log(Tutor);
    res.json(Tutor);
  }).catch((err) => {
    console.log(err);
  });
});




module.exports = router;