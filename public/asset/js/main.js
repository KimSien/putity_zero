/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resource/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resource/js/Ems2.js":
/*!*****************************!*\
  !*** ./resource/js/Ems2.js ***!
  \*****************************/
/*! exports provided: Ems2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ems2\", function() { return Ems2; });\n/* harmony import */ var _Putity_PutityComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Putity/PutityComponent */ \"./resource/js/Putity/PutityComponent.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nclass Ems2 extends _Putity_PutityComponent__WEBPACK_IMPORTED_MODULE_0__[\"PutitiyComponent\"] {\n  constructor(childname) {\n    super();\n    this.name = \"king\";\n    this.childname = childname;\n  }\n\n  hello(n) {\n    console.log(n);\n    this.name = \"queen\";\n    _Putity_PutityComponent__WEBPACK_IMPORTED_MODULE_0__[\"Putity\"].Render();\n  }\n\n  GetJson() {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      const url = \"datas.json\";\n      const d = yield _this.CallAjax(url);\n      _this.name = d.data[1].name;\n      _Putity_PutityComponent__WEBPACK_IMPORTED_MODULE_0__[\"Putity\"].Render();\n    })();\n  }\n\n  renders() {\n    //console.log(this.datajson);\n    return `\n        <p>my chiledname is ${this.childname} module </p> \n        <p>my name is ${this.name} module </p> \n        <button onClick=\"${this.component}.GetJson()\">getjson1</button>\n        <button onClick=\"${this.component}.hello('blocken')\">click</button>\n        `;\n  }\n\n}\n\n//# sourceURL=webpack:///./resource/js/Ems2.js?");

/***/ }),

/***/ "./resource/js/Putity/Putity.js":
/*!**************************************!*\
  !*** ./resource/js/Putity/Putity.js ***!
  \**************************************/
/*! exports provided: PutitiyComponent, Putity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PutityComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PutityComponent */ \"./resource/js/Putity/PutityComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PutitiyComponent\", function() { return _PutityComponent__WEBPACK_IMPORTED_MODULE_0__[\"PutitiyComponent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Putity\", function() { return _PutityComponent__WEBPACK_IMPORTED_MODULE_0__[\"Putity\"]; });\n\n/**\n * \n * Putity \n * \n * ver 0.1\n * \n * \n */\n\n\n//# sourceURL=webpack:///./resource/js/Putity/Putity.js?");

/***/ }),

/***/ "./resource/js/Putity/PutityComponent.js":
/*!***********************************************!*\
  !*** ./resource/js/Putity/PutityComponent.js ***!
  \***********************************************/
/*! exports provided: PutitiyComponent, Putity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PutitiyComponent\", function() { return PutitiyComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Putity\", function() { return Putity; });\nclass PutitiyComponent {\n  constructor() {\n    this.state = [];\n  }\n\n  CallAjax(jsonurl) {\n    return fetch(jsonurl).then(function (response) {\n      return response.json();\n    }).then(function (rv) {\n      return rv;\n    });\n  }\n\n}\n/** */\n\nclass Putity {\n  static RenderSetting(atach_component, atach_dom) {\n    window.PutityApp = {\n      AtachComponent: atach_component,\n      AtachDom: atach_dom\n    };\n  }\n\n  static ComponentAtach(name, classobject) {\n    let param = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n    if (param == null) {\n      window[name] = new classobject();\n    } else {\n      window[name] = new classobject(param);\n    }\n\n    window[name].component = \"window.\" + name;\n    return window[name];\n  }\n\n  static Render() {\n    const str = window.PutityApp.AtachComponent.renders();\n    const dummy = document.createElement(\"div\");\n    dummy.innerHTML = window.PutityApp.AtachComponent.renders();\n    document.querySelector(window.PutityApp.AtachDom).innerHTML = dummy.innerHTML;\n  }\n\n  static Run() {\n    Putity.Render();\n  }\n\n}\n\n//# sourceURL=webpack:///./resource/js/Putity/PutityComponent.js?");

/***/ }),

/***/ "./resource/js/main.js":
/*!*****************************!*\
  !*** ./resource/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Putity_Putity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Putity/Putity */ \"./resource/js/Putity/Putity.js\");\n/* harmony import */ var _Ems2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ems2 */ \"./resource/js/Ems2.js\");\n\n\n_Putity_Putity__WEBPACK_IMPORTED_MODULE_0__[\"Putity\"].ComponentAtach(\"king2\", _Ems2__WEBPACK_IMPORTED_MODULE_1__[\"Ems2\"]); //Putity.ComponentAtach(\"king3\", Ems2);\n// Merge all of the nodes that the callback returns\n\nclass Ems extends _Putity_Putity__WEBPACK_IMPORTED_MODULE_0__[\"PutitiyComponent\"] {\n  constructor() {\n    super();\n    this.name = \"king5\";\n  }\n\n  hello(n) {\n    console.log(n);\n    this.name = \"queen\";\n    _Putity_Putity__WEBPACK_IMPORTED_MODULE_0__[\"Putity\"].Render();\n  }\n\n  renders() {\n    return `\n      <p>my name is ${this.name} module </p> \n      <button onClick=\"${this.component}.hello('blocken')\">click</button>\n      ${king2.renders()}\n      `;\n  }\n\n}\n\n_Putity_Putity__WEBPACK_IMPORTED_MODULE_0__[\"Putity\"].ComponentAtach(\"king\", Ems);\n_Putity_Putity__WEBPACK_IMPORTED_MODULE_0__[\"Putity\"].RenderSetting(king, \"#app\");\n_Putity_Putity__WEBPACK_IMPORTED_MODULE_0__[\"Putity\"].Run();\n\n//# sourceURL=webpack:///./resource/js/main.js?");

/***/ })

/******/ });