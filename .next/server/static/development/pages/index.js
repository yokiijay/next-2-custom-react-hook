module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/useInput.js":
/*!**************************!*\
  !*** ./libs/useInput.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

function useInput(ref, initialValue = '') {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const {
    0: validation,
    1: setValidation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // updateValue

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current.oninput = ev => {
      setValue(ev.target.value);
    };
  }, []); // bindValue

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current.value = value;
  }); // on value change event
  // const valueObj = new ValueObj(value, setValue, validation, setValidation)

  const valueObj = {
    get: () => value,
    set: newValue => setValue(newValue),
    validation: () => validation,
    onChange: cb => {
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useTitle(title) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.title = title;
  }, []);
}

/* harmony default export */ __webpack_exports__["default"] = (useTitle);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/useInput */ "./libs/useInput.js");
/* harmony import */ var _libs_useTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/useTitle */ "./libs/useTitle.js");
var _jsxFileName = "/Users/yokiijay/Desktop/next-2-custom-react-hook/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  Object(_libs_useTitle__WEBPACK_IMPORTED_MODULE_2__["default"])('Use Input');
  const usernameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const hobbyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const username = Object(_libs_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])(usernameRef);
  const hobby = Object(_libs_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])(hobbyRef);
  username.onChange(value => {
    return /^\w{6,12}$/.test(value);
  });
  hobby.onChange(value => {
    return /^([a-zA-z]+\,?\s?)+$/.test(value);
  });

  const handleSubmit = ev => {
    ev.preventDefault();
    username.set('');
    hobby.set('');
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "username:", __jsx("input", {
    type: "text",
    placeholder: "6-12\u4F4D\u82F1\u6587\u6216\u6570\u5B57",
    ref: usernameRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), " ", username.validation() ? '✅' : '❌', " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), "hobby:", __jsx("input", {
    type: "text",
    placeholder: "\u82F1\u6587 \u5E76\u7528\u9017\u53F7\u9694\u5F00",
    ref: hobbyRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), " ", hobby.validation() ? '✅' : '❌', __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Reset")), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "\u7528\u6237\u540D\uFF1A", username.get()), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "\u7231\u597D\uFF1A", hobby.get()));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yokiijay/Desktop/next-2-custom-react-hook/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map