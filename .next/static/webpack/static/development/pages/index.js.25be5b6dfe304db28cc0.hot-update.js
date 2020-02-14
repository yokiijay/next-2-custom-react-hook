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


function useInput(ref) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  console.log(ref);

  ref.current.onchange = function (ev) {
    setValue(ev.target.value);
    ev.target.value = value;
  };

  return [value, setValue];
}

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ })

})
//# sourceMappingURL=index.js.25be5b6dfe304db28cc0.hot-update.js.map