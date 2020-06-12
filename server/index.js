"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _app = _interopRequireDefault(require("./app"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect(_config.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(function () {
  return _app["default"].listen(_config.PORT, function () {
    return console.log("".concat(_config.API_NAME, ": API running on port ").concat(_config.PORT));
  });
})["catch"](console.log);