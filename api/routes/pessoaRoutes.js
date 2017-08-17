'use strict';
module.exports = function (app) {
    var pessoa = require('../controllers/pessoaController');

    // todoList Routes
    app.route('/pessoas')
        .get(pessoa.list_all)
        .post(pessoa.create);


    app.route('/pessoas/:pessoaId')
        .get(pessoa.read)
        .put(pessoa.update)
        .delete(pessoa.delete);
};