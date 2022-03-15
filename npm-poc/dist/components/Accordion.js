"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Accordion = _ref => {
  let {
    title,
    children
  } = _ref;
  const [isOpen, setOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-title ".concat(isOpen ? "open" : ""),
    onClick: () => setOpen(!isOpen)
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-item ".concat(!isOpen ? "collapsed" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-content"
  }, children)));
};

var _default = Accordion;
exports.default = _default;