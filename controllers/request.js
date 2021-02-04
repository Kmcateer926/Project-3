// const express = require("express");

// const router = express.Router();
// const Request = require("../models/request");

// router.get("/", (req, res) => {
//   Request.find()
//   .then((requests) =>{
//     res.json(requests);
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(500).end();
//   })
// })

// router.post("/", (req,res) => {
//   console.log(req.body);
//   Request.create(req.body).then((newRequest) => {
//     console.log(newRequest);
//     res.json(newRequest);
//   })
// })


// module.exports = router;