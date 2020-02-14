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

  ref.current.onChang = function (ev) {
    setValue(ev.target.value);
    ev.target.value = value;
  };

  return [ref, value, setValue];
}

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
false,

/***/ "./node_modules/core-js/library/fn/object/assign.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/useInput */ "./libs/useInput.js");

var _jsxFileName = "/Users/yokiijay/Desktop/next-2-custom-react-hook/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Index = function Index() {
  var _useInput = Object(_libs_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      usernameRef = _useInput2[0],
      username = _useInput2[1],
      setUsername = _useInput2[2];

  var _useInput3 = Object(_libs_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 3),
      hobbyRef = _useInput4[0],
      hobby = _useInput4[1],
      setHobby = _useInput4[2];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "username:", __jsx("input", {
    type: "text",
    ref: usernameRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), "hobby:", __jsx("input", {
    type: "text",
    ref: hobbyRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f79ca7f0efce5af762f6.hot-update.js.map