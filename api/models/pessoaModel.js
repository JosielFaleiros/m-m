'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Cidade = require('./cidadeModel');

var PessoaSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  cidade: {
      type: Schema.Types.ObjectId, 
      ref: 'Cidades',
      required: true
    }

});

module.exports = mongoose.model('Pessoas', PessoaSchema);