"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DownloadButton = _ref => {
  let {
    filename,
    filesize,
    count
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: "http://www.example.com/folder/file.zip",
    class: "download_button"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "downloadicon"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "cloud"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "arrowdown"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "filename"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "value"
  }, filename)), /*#__PURE__*/_react.default.createElement("div", {
    class: "filesize"
  }, "Size : ", /*#__PURE__*/_react.default.createElement("span", {
    class: "value"
  }, filesize)), /*#__PURE__*/_react.default.createElement("div", {
    class: "downloads"
  }, "Downloads : ", /*#__PURE__*/_react.default.createElement("span", {
    class: "value"
  }, count)));
};

var _default = DownloadButton;
exports.default = _default;