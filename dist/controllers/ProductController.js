'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Products = require('../models/Products');

var _Products2 = _interopRequireDefault(_Products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductController = function () {
  function ProductController() {
    _classCallCheck(this, ProductController);
  }

  _createClass(ProductController, [{
    key: 'index',
    value: function index(req, res) {

      _Products2.default.find().then(function (err, products) {
        if (err) {
          return res.send(err);
        }
        return res.json(products);
      });
    }
  }, {
    key: 'read',
    value: function read(req, res) {
      _Products2.default.findOne({ _id: req.params.id }).then(function (product) {
        console.log('index1', product);
        if (!product) {
          return res.send({ error: "not found" });
        } else {
          console.log('id', product);
          return res.json(product);
        }
      });
    }
  }, {
    key: 'name',
    value: function name(req, res) {
      _Products2.default.find({ name: req.params.name }).then(function (products) {
        if (!products) {
          return res.send({ error: "not found" });
        } else {
          console.log('name', products);
          return res.json(products);
        }
      });
    }
  }, {
    key: 'parameter',
    value: function parameter(req, res) {

      var par = req.params.parameter;
      var value = req.params.value;
      var parameters = {};
      var param = 'parameters.' + par;
      parameters[param] = value;

      _Products2.default.find(parameters).then(function (products) {
        if (!products) {
          return res.send({ error: "not found" });
        } else {
          return res.json(products);
        }
      });
    }
  }, {
    key: 'create',
    value: function create(req, res) {
      var data = req.body;
      var product = new _Products2.default({
        name: data.name,
        description: data.description,
        parameters: data.parameters
      });

      product.save().then(function () {
        return res.send({ status: "OK" });
      });
    }
  }, {
    key: 'update',
    value: function update(req, res) {
      _Products2.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) {
          return res.send(err);
        }
        return res.json({ status: "update" });
      });
    }
  }, {
    key: 'delete',
    value: function _delete(req, res) {
      _Products2.default.remove({
        _id: req.params.id
      }).then(function (post) {
        if (post) {
          return res.json({ status: "deleted" });
        } else {
          return res.json({ status: "error" });
        }
      });
    }
  }]);

  return ProductController;
}();

;

exports.default = ProductController;