// const express = require("express");

// const router = express.Router();
// const TeacherLogin = require("../models/teacherLogin");

// router.get("/", (req, res) => {
//   TeacherLogin.find()
//   .then((teacherLogin) =>{
//     res.json(teacherLogin);
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(500).end();
//   })
// })

// router.post("/", (req,res) => {
//   console.log(req.body);
//   TeacherLogin.create(req.body).then((newTeacherLogin) => {
//     console.log(TeacherLogin);
//     res.json(TeacherLogin);
//   })
// })


// module.exports = router;