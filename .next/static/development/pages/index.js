(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

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
 // class ValueObj {
//   constructor(value, setValue, validation, setValidation){
//     this.value = value
//     this.setValue = setValue
//     this.validation = validation
//     this.setValidation = setValue
//   }
//   get(){
//     return this.value
//   }
//   set(newValue){
//     return this.setValue(newValue)
//   }
//   onChange(cb){
//     if(!cb) return
//     const result = cb(this.value)
//     // result ? this.setValidation(true) : this.setValidation(false)
//   }
// }

function useInput(ref) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _validation = _useState2[0],
      setValidation = _useState2[1]; // updateValue


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current.oninput = function (ev) {
      setValue(ev.target.value);
    };
  }, []); // bindValue

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current.value = value;
  }); // on value change event
  // const valueObj = new ValueObj(value, setValue, validation, setValidation)

  var valueObj = {
    get: function get() {
      return value;
    },
    set: function set(newValue) {
      return setValue(newValue);
    },
    validation: function validation() {
      return _validation;
    },
    onChange: function onChange(cb) {
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        cb && cb(value) ? setValidation(true) : setValidation(false);
      }, [value]);
    }
  };
  return valueObj;
}

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./libs/useTitle.js":
/*!**************************!*\
  !*** ./libs/useTitle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useTitle(title) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = title;
  }, []);
}

/* harmony default export */ __webpack_exports__["default"] = (useTitle);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fyokiijay%2FDesktop%2Fnext-2-custom-react-hook%2Fpages%2Findex.js!./":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fyokiijay%2FDesktop%2Fnext-2-custom-react-hook%2Fpages%2Findex.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/useInput */ "./libs/useInput.js");
/* harmony import */ var _libs_useTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/useTitle */ "./libs/useTitle.js");
var _jsxFileName = "/Users/yokiijay/Desktop/next-2-custom-react-hook/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Index = function Index() {
  Object(_libs_useTitle__WEBPACK_IMPORTED_MODULE_2__["default"])('Use Input');
  var usernameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var hobbyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var username = Object(_libs_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])(usernameRef);
  var hobby = Object(_libs_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])(hobbyRef);
  username.onChange(function (value) {
    return /^\w{6,12}$/.test(value);
  });
  hobby.onChange(function (value) {
    return /^([a-zA-z]+\,?\s?)+$/.test(value);
  });

  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    username.set('');
    hobby.set('');
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "username:", __jsx("input", {
    type: "text",
    placeholder: "6-12\u4F4D\u82F1\u6587\u6216\u6570\u5B57",
    ref: usernameRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), " ", username.validation() ? '✅' : '❌', " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), "hobby:", __jsx("input", {
    type: "text",
    placeholder: "\u82F1\u6587 \u5E76\u7528\u9017\u53F7\u9694\u5F00",
    ref: hobbyRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), " ", hobby.validation() ? '✅' : '❌', __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Reset")), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u7528\u6237\u540D\uFF1A", username.get()), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u7231\u597D\uFF1A", hobby.get()));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 1:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fyokiijay%2FDesktop%2Fnext-2-custom-react-hook%2Fpages%2Findex.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fyokiijay%2FDesktop%2Fnext-2-custom-react-hook%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fyokiijay%2FDesktop%2Fnext-2-custom-react-hook%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map