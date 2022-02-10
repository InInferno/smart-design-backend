'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _ProductController = require('./controllers/ProductController');

var _ProductController2 = _interopRequireDefault(_ProductController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = new _ProductController2.default();

var app = (0, _express2.default)();

_mongoose2.default.connect('mongodb://localhost/smart-design-server');

// For CORS
app.use(function (req, res, next) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  });
  return next();
});

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.get('/products', Product.index);
app.get('/products/:id', Product.read);
app.get('/products/name/:name', Product.name);
app.get('/products/parameters/:parameter/:value', Product.parameter);
app.post('/products', Product.create);
app.put('/products/:id', Product.update);
app.delete('/products/:id', Product.delete);

app.listen(27017, function () {
  return console.log("Server running on 27017 port");
});