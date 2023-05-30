var express = require('express');
var router = express.Router();

var plantas = require("../controllers/plantas");

router.get('/', function(req, res, next) {

    if (!req.query.especie && !req.query.implant) {

        plantas.list()
        .then(data => {
            res.status(200).jsonp(data);
        })
        .catch(erro => {
            res.status(500).jsonp(err);
        });
    }

    else next();
});

router.get("/", function(req,res,next) {

    var especie = req.query.especie;

    if (especie) {

        plantas.plantExp(especie)
        .then(data => {
            res.status(200).jsonp(data);
        })
        .catch(erro => {
            res.status(500).jsonp(err);
        });
    }

    else next();
})

router.get("/", function(req,res) {

    var implant = req.query.implant;

    if (implant) {

        plantas.plantImplant(implant)
        .then(data => {
            res.status(200).jsonp(data);
        })
        .catch(erro => {
            res.status(500).jsonp(err);
        });
    }
})

router.get("/freguesias", function(req,res, next) {

    if (req.params.id) next();

    else {

        plantas.freguesias()
        .then(data => {
            res.status(200).jsonp(data);
        })
        .catch(erro => {
            res.status(500).jsonp(err);
        });
    }
})

router.get("/especies", function(req,res, next) {

    if (req.params.id) next();

    else {

        plantas.especies()
        .then(data => {
            res.status(200).jsonp(data);
        })
        .catch(erro => {
            res.status(500).jsonp(err);
        });
    }
})


router.get("/:id", function(req,res) {

    plantas.onePlant(parseInt(req.params.id))
    .then(data => {
        res.status(200).jsonp(data);
    })
    .catch(erro => {
        res.status(500).jsonp(err);
    });
});

router.get("/nomeCient/:esp", function(req,res) {

    plantas.nomeCientifico(req.params.esp)
    .then(data => {
        res.status(200).jsonp(data);
    })
    .catch(erro => {
        res.status(500).jsonp(err);
    });
})

router.post("/", function (req,res) {

    plantas.addPlant(req.body)
    .then(data => {
        res.status(201).jsonp(data);
    })
    .catch(erro => {
        res.status(601).jsonp(err);
    });
})

router.delete("/:id", function(req,res) {
    
    plantas.deletePlant(req.params.id)
    .then(data => {
        res.status(201).jsonp(data);
    })
    .catch(erro => {
        res.status(602).jsonp(err);
    });
})

module.exports = router;
