const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Parent = require("../models/parent");



router.get("/", (req, res) => {
  Parent.find({
    where: {
      id: req.params.id,
    },
  })
  .then((parents) =>{
    res.json(parents);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
  });
});

// CREATED A SIGNUP
router.post("/", (req, res) => {

  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
      console.log(hashedPassword);
      const newParent = {
          email: req.body.email,
          password: hashedPassword,
      };
      Parent.create(newParent).then(newParent => {
          res.json(newParent);
      })
          .catch((err) => {
              console.log(err);
              res.status(500).end();
          });
  });
  
});

router.post("/loginform", (req, res) => {
  Parent.findOne({email: req.body.email.toLowerCase() }).then((foundParent) => {
      console.log(foundParent);
      bcrypt.compare(req.body.password, foundParent.password).then((result) => {
      console.log(result);
      if (result) {
          res.json({
              token: "banana!",
          });

      } else {
          res.status(401).end();
      }
  });
  });
});





// router.post("/", (req,res) => {
//   console.log(req.body);
//   Parent.create(req.body).then((newParent) => {
//     console.log(newParent);
//     res.json(newParent);
//   }).catch((err) => {
//     console.log(err);
//   });
// });

// // FOUND THE CREATED SIGNUP TO ENABLE LOGIN
// router.post("/login", (req,res) => {
//   console.log(req.body);
//   Parent.find(req.body).then((Parent) => {
//     console.log(Parent);
//     res.json(Parent);
//   }).catch((err) => {
//     console.log(err);
//   });
// });




module.exports = router;