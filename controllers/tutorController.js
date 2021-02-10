const express = require("express");

const router = express.Router();
const Tutor = require("../models/tutor");

router.get("/", (req, res) => {
  Tutor.find({})
    .then((tutors) => {
      res.json(tutors);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/:id", (req, res) => {
  Tutor.find({
    where: {
      id: req.params.id,
    },
  }).populate("session")
    .then((tutors) => {
      res.json(tutors);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Tutor.create()
  .populate("session")
    .then((newTutor) => {
      console.log(newTutor);
      res.json(newTutor);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

router.delete("/:id", (req, res) => {
  Tutor.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});
// // FOUND THE CREATED SIGNUP TO ENABLE LOGIN
// router.post("/login", (req,res) => {
//   console.log(req.body);
//   Tutor.find(req.body).then((Tutor) => {
//     console.log(Tutor);
//     res.json(Tutor);
//   }).catch((err) => {
//     console.log(err);
//   });
// });

module.exports = router;
