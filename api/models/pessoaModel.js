'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PessoaSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },

    cidade: {
        type: Schema.Types.ObjectId,
        ref: 'Cidades',
        required: true
    }

});

module.exports = mongoose.model('Pessoas', PessoaSchema);