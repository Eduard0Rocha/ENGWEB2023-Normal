var plantas = require("../models/plantas");

module.exports.list = () => {

    return plantas.find()
    .then(res => {
    return res;
    })
    .catch(err => {
    return err;
    })
}

module.exports.onePlant = id => {

    return plantas.findOne({Id: id})
    .then(res => {
    return res;
    })
    .catch(err => {
    return err;
    })
}

module.exports.plantExp = EEEE => {

    return plantas.find({"Espécie": EEEE})
    .then(res => {
        return res;
        })
        .catch(err => {
        return err;
        })
}

module.exports.plantImplant = AAA => {

    return plantas.find({"Implantação": AAA})
    .then(res => {
        return res;
        })
        .catch(err => {
        return err;
        })
}

module.exports.freguesias = () => {

    return plantas.distinct("Freguesia").sort()
    .then(res => {
        return res;
        })
        .catch(err => {
        return err;
        })
}

module.exports.especies = () => {

    return plantas.distinct("Espécie").sort()
    .then(res => {
        return res;
        })
        .catch(err => {
        return err;
        })
}

module.exports.addPlant = p => {

    return plantas.create(p)
    .then(res => {
        return res;
        })
        .catch(err => {
        return err;
        })
}

module.exports.deletePlant = id => {

    return plantas.deleteOne({Id: id})
    .then(res => {
        return res;
        })
        .catch(err => {
        return err;
        })
}

module.exports.nomeCientifico = Esp => {

    return plantas.findOne({"Espécie": Esp}, {"Nome Científico": 1, "_id": 0, "Espécie": 1})
    .then(res => {
        return res;
        })
        .catch(err => {
        return err;
        })
}