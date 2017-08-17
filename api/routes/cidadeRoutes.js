'use strict';
module.exports = function(app) {
  var cidade = require('../controllers/cidadeController');

  // todoList Routes
  app.route('/cidades')
    .get(cidade.list_all)
    .post(cidade.create);


  app.route('/cidades/:cidadeId')
    .get(cidade.read)
    .put(cidade.update)
    .delete(cidade.delete);
};