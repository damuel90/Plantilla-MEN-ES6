"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _compression = _interopRequireDefault(require("compression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// packeges
var app = (0, _express["default"])();

var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.end("Hola Mundo");
});
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _compression["default"])());
app.use('/', router);
var _default = app;
exports["default"] = _default;