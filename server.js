var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Cidade = require('./api/models/cidadeModel'),
  Pessoa = require('./api/models/pessoaModel'), //created model loading here
  bodyParser = require('body-parser');
  


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MailMarketing'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routesCidade = require('./api/routes/cidadeRoutes.js'); //importing route
routesCidade(app); //register the route
var routesPessoa = require('./api/routes/pessoaRoutes.js'); //importing route
routesPessoa(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);