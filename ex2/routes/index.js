var express = require('express');
var router = express.Router();

var axios = require("axios");

/* GET home page. */
router.get('/', function(req, res) {

  axios.get("http://localhost:15030/plantas")
  .then(r => {
    res.render('index', {list: r.data});
   })
   .catch(err => {
    res.render("error", {error: err})
   })
});

router.get("/:id", function(req,res) {

  axios.get("http://localhost:15030/plantas/" + req.params.id)
  .then(r => {
    res.render('registo', {item: r.data});
   })
   .catch(err => {
    res.render("error", {error: err})
   })
});

router.get("/especies/:id", function(req,res) {

  axios.get("http://localhost:15030/plantas?especie=" + req.params.id)
  .then(r => {
    res.render('especie', {list: r.data});
   })
   .catch(err => {
    res.render("error", {error: err})
   })
})

module.exports = router;
