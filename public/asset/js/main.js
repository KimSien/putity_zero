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

/***/ "./resource/js/Putity/Putity.js":
/*!**************************************!*\
  !*** ./resource/js/Putity/Putity.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Putity; });\n/** -------------------------------------------------- */\n\n/**\n * PutiFlame\n */\nclass Putity {\n  constructor(h) {\n    //this.state = {};\n    this.state = this.setState();\n    this.props = h.props;\n    this.joinpt = null;\n\n    if (typeof this.targetDom != undefined) {\n      this.targetDom = h.targetDom;\n\n      this._render();\n    }\n  }\n\n  setState() {}\n\n  setjoin(j) {\n    this.joinipt = j;\n  }\n\n  changeState(name, value) {\n    self.state[name] = value; //if(this.targetDom != void 0){\n\n    this._render();\n\n    if (this.joinipt != null) {\n      this.joinipt._render();\n    } //}\n\n  }\n\n  _render() {\n    if (this.targetDom == void 0) {} else {\n      let tcontents = document.createElement(\"div\");\n      tcontents.innerHTML = this.render();\n      let dom = document.getElementById(this.targetDom);\n      dom.innerHTML = \"\";\n      dom.appendChild(tcontents);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./resource/js/Putity/Putity.js?");

/***/ }),

/***/ "./resource/js/main.js":
/*!*****************************!*\
  !*** ./resource/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Putity_Putity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Putity/Putity */ \"./resource/js/Putity/Putity.js\");\n\nvar sta = {\n  fff: {\n    test: \"this is global ff\"\n  },\n  ff: {\n    test: \"this is global ff\"\n  },\n  f: {\n    test: \"test message\",\n    goukei: 1\n  }\n};\n\nclass FF {\n  constructor() {\n    this.run();\n  }\n\n  run() {\n    self.ff = this;\n  }\n\n  df() {\n    sta.ff.test = \"click df\"; //console.log(\"test\");\n\n    Renders();\n  }\n\n  component() {\n    return `\n        <div>submodule des ------------ ${sta.ff.test}\n        <button onClick=\"self.ff.df()\">click</button>\n        </div>\n        `;\n  }\n\n}\n\nconst ff = new FF();\n\nclass FFF {\n  constructor() {\n    this.run();\n  }\n\n  run() {\n    self.fff = this;\n  }\n\n  df() {\n    sta.fff.test = \"click df\"; //console.log(\"test\");\n\n    Renders();\n  }\n\n  component() {\n    return `\n          <div>submodule des ------------ ${sta.fff.test}\n          <button onClick=\"self.fff.df()\">click</button>\n          </div>\n          `;\n  }\n\n}\n\nconst fff = new FFF();\n/**\n * extends PutiFlame\n */\n\nclass F {\n  constructor(h) {\n    this.run();\n  }\n\n  sender() {\n    sta.f.goukei += 1; //console.log(\"sender\");\n\n    Renders();\n  }\n\n  run() {\n    window.f = this;\n  }\n\n  component() {\n    const myname = \"name\";\n    return `<p>\n        my name is ${myname}\n        <br>this is ${sta.f.test}\n        <br>goukei is ${sta.f.goukei}\n        <span id=\"app2\"></span>\n        ${ff.component()}\n        </p>\n        <p>\n        ${fff.component()}\n        </p>\n        <button onClick=\"window.f.sender()\">test</button>  \n        `;\n  }\n\n}\n\nconst f = new F();\nconst BaseComponent = f;\nconst BaseAppID = \"app\";\n\nconst Renders = function Renders() {\n  let tcontents = document.createElement(\"div\");\n  tcontents.innerHTML = BaseComponent.component();\n  let dom = document.getElementById(BaseAppID);\n  dom.innerHTML = \"\";\n  dom.appendChild(tcontents);\n};\n\nRenders();\n\n//# sourceURL=webpack:///./resource/js/main.js?");

/***/ })

/******/ });