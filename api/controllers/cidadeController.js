'use strict';


var mongoose = require('mongoose'),
    Cidade = mongoose.model('Cidades');

exports.list_all = function (req, res) {
    Cidade.find({}, '-__v', function (err, cidade) {
        if (err)
            res.send(err);
        res.json(cidade);
    });
};


exports.create = function (req, res) {
    var new_cidade = new Cidade(req.body);
    new_cidade.save(function (err, cidade) {
        if (err)
            res.send(err);
        res.json(cidade);
    });
};


exports.read = function (req, res) {
    Cidade.findById(req.params.cidadeId, '-_id -__v' ,function (err, cidade) {
        if (err)
            res.send(err);
        res.json(cidade);
    });
};


exports.update = function (req, res) {
    Cidade.findOneAndUpdate({ _id: req.params.cidadeId }, req.body, { new: true }, function (err, cidade) {
        if (err)
            res.send(err);
        res.json(cidade);
    });
};


exports.delete = function (req, res) {
    Cidade.remove({
        _id: req.params.cidadeId
    }, function (err, cidade) {
        if (err)
            res.send(err);
        res.json({ message: 'Cidade deletada com sucesso' });
    });
};

