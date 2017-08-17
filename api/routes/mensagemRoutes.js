'use strict';
module.exports = function (app) {
    var mensagem = require('../controllers/mensagemController');

    // todoList Routes
    app.route('/mensagem/enviar')
        .post(mensagem.enviar);

};