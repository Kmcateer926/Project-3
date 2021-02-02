const express = require("express");
const router = express.Router();

const db = require("../models");

app.get('/', function(req, res) {
    res.send("Yep it's working");
  });
  
  app.get('/request', (req, res) => {
    res.send('Hi Request');
  });

  app.post("/api/request", (req, res) => {
    db.Tutor-hub.create(req.body).then((request) => {
      res.json(request);
    });
  });

module.exports = router;