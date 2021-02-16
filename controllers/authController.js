// const express = require("express");
// const { ModelBuildContext } = require("twilio/lib/rest/autopilot/v1/assistant/modelBuild");
// const router = express.Router();
// const User = require("../models/user");
// const bcrypt = require("bcrypt");

// router.post("/", (req, res) => {

//     bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
//         console.log(hashedPassword);
//         const newUser = {
//             email: req.body.email,
//             password: hashedPassword,
//         };
//         User.create(newUser).then(newUser => {
//             res.json(newUser);
//         })
//             .catch((err) => {
//                 console.log(err);
//                 res.status(500).end();
//             });
//     });
    
// });

// router.post("/loginform", (req, res) => {
//     User.findOne({email: req.body.email.toLowerCase() }).then((foundUser) => {
//         console.log(foundUser);
//         bcrypt.compare(req.body.password, foundUser.password).then((result) => {
//         console.log(result);
//         if (result) {
//             res.json({
//                 token: "banana!",
//             });

//         } else {
//             res.status(401).end();
//         }
//     });
//     });
// });

// module.exports = router;