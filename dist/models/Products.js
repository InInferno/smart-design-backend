'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductSchema = new _mongoose.Schema({
  id: String,
  name: String,
  description: String,
  parameters: {
    parameterOne: String,
    parameterTwo: String
  }
}, {
  timestamps: true
});
var Product = _mongoose2.default.model('Product', ProductSchema);

exports.default = Product;