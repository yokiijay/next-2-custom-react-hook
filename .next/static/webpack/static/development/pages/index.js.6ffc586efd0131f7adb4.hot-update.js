webpackHotUpdate("static/development/pages/index.js",{

/***/ "./libs/useInput.js":
/*!**************************!*\
  !*** ./libs/useInput.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useInput() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  ref.current.onChange = function (ev) {
    setValue(ev.target.value);
    ev.target.value = value;
  };

  return [ref, value, setValue];
}

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ })

})
//# sourceMappingURL=index.js.6ffc586efd0131f7adb4.hot-update.js.map