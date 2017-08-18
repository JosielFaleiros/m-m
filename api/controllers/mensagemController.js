'use strict';


var mongoose = require('mongoose'),
    Pessoa = mongoose.model('Pessoas'),
    Cidade = mongoose.model('Cidades');

exports.enviar = function (req, res) {
    if (req.body.cidade) {
        Cidade.find({ nome: req.body.cidade }, function (err, cidade) {
            Pessoa.find({ cidade: cidade }, '-__v -_id -cidade', function (err, pessoa) {
                if (err)
                    res.send(err);
                res.json([pessoa, req.body.mensagem]);
            });
        });
    } else {
        Pessoa.find({}, '-__v -_id -cidade').populate('cidade').exec(function (err, pessoa) {
            if (err)
                res.send(err);
            res.json([pessoa, req.body.mensagem]);
        });
    }
};

