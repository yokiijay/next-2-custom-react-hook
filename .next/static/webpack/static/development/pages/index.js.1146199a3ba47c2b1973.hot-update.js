webpackHotUpdate("static/development/pages/index.js",{

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
  var usernameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var hobbyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useInput = Object(_libs_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      username = _useInput2[0],
      setUsername = _useInput2[1];

  var _useInput3 = Object(_libs_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      hobby = _useInput4[0],
      setHobby = _useInput4[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "username:", __jsx("input", {
    type: "text",
    ref: usernameRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), "hobby:", __jsx("input", {
    type: "text",
    ref: hobbyRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1146199a3ba47c2b1973.hot-update.js.map