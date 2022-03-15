"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Sidebar = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar col-md-3"
  }, children);
};

var _default = Sidebar;
exports.default = _default;