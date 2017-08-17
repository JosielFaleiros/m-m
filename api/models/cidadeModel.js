'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CidadeSchema = new Schema({
    nome: {
        type: String,
        required: true,
        index: true,
        unique: true
    }
});

module.exports = mongoose.model('Cidades', CidadeSchema);