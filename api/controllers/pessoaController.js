'use strict';

var mongoose = require('mongoose'),
    Pessoa = mongoose.model('Pessoas'),
    Cidade = mongoose.model('Cidades');

exports.list_all = function(req, res) {
    if(req.query.cidade) {
        Cidade.find({nome: req.query.cidade}, function(err, cidade) {
            Pessoa.find({cidade: cidade}, function(err, pessoa) {
                if (err)
                res.send(err);
                res.json(pessoa);
            });
        });
    } else {
        Pessoa.find({}).populate('cidade').exec(function(err, pessoa) {
            if (err)
                res.send(err);
            res.json(pessoa);
        });
    }
};

exports.create = function(req, res) {
  var new_pessoa = new Pessoa(req.body);
  new_pessoa.save(function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(pessoa);
  });
};


exports.read = function(req, res) {
  Pessoa.findById(req.params.pessoaId).populate('cidade').exec( function(err, pessoa) {
    if (err)
      res.send(err);

    res.json(pessoa);
  });
};


exports.update = function(req, res) {
  Pessoa.findOneAndUpdate({_id: req.params.pessoaId}, req.body, {new: true}, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(pessoa);
  });
};


exports.delete = function(req, res) {
  Pessoa.remove({
    _id: req.params.pessoaId
  }, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json({ message: 'Pessoa deletada com sucesso' });
  });
};

