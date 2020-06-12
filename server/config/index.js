"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CACHE_KEY = exports.JWT_SECRET = exports.API_NAME = exports.MONGO_URI = exports.PORT = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = process.env.PORT || 8888;
exports.PORT = PORT;
var MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/".concat(process.env.API_NAME);
exports.MONGO_URI = MONGO_URI;
var API_NAME = process.env.API_NAME;
exports.API_NAME = API_NAME;
var JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_SECRET = JWT_SECRET;
var CACHE_KEY = process.env.CACHE_KEY;
exports.CACHE_KEY = CACHE_KEY;