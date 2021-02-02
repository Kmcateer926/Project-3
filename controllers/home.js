const express = require("express");
const router = express.Router();

const db = require("../models");

app.get('/', function(req, res) {
    res.send("Yep it's working");
  });
  
  app.get('/Home', (req, res) => {
    res.send('Hi Home');
  });

module.exports = router;