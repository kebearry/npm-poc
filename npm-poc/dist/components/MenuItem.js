"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MenuItem = _ref => {
  let {
    title,
    icon,
    link
  } = _ref;
  var menuItemStyle = {
    display: 'block',
    padding: '10px',
    color: '#fdfdfd',
    borderBottom: '1px solid rgb(35, 50, 66)'
  };
  var iconStyle = {
    marginRight: '10px'
  };
  return /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    style: menuItemStyle
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: 'fa fa-fw fa-' + icon,
    style: iconStyle
  }), title);
};

var _default = MenuItem;
exports.default = _default;