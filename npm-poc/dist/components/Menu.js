"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Menu = _ref => {
  let {
    pages
  } = _ref;
  var navStyle = {
    display: 'block',
    width: '100%'
  };
  return /*#__PURE__*/_react.default.createElement("nav", {
    style: navStyle
  }, pages.map(page => {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      title: page.name,
      link: page.link,
      icon: page.icon
    });
  }));
};

var _default = Menu;
exports.default = _default;