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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Putity; });\n/** -------------------------------------------------- */\n\n/**\n * PutiFlame\n */\nclass Putity {\n  constructor(h) {\n    //this.state = {};\n    this.state = this.setState();\n    this.props = h.props;\n\n    if (typeof this.targetDom != undefined) {\n      this.targetDom = h.targetDom;\n\n      this._render();\n    }\n  }\n\n  setState() {}\n\n  changeState(name, value) {\n    self.state[name] = value; //if(this.targetDom != void 0){\n\n    this._render(); //}\n\n  }\n\n  _render() {\n    if (this.targetDom == void 0) {} else {\n      let tcontents = document.createElement(\"div\");\n      tcontents.innerHTML = this.render();\n      let dom = document.getElementById(this.targetDom);\n      dom.innerHTML = \"\";\n      dom.appendChild(tcontents);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./resource/js/Putity/Putity.js?");

/***/ }),

/***/ "./resource/js/main.js":
/*!*****************************!*\
  !*** ./resource/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Putity_Putity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Putity/Putity */ \"./resource/js/Putity/Putity.js\");\n\n/**\n * extends PutiFlame\n */\n\nclass F extends _Putity_Putity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(h) {\n    super(h);\n  }\n\n  setState() {\n    return self.state = {\n      test: \"test message\",\n      goukei: 1\n    };\n  }\n\n  sender() {\n    this.changeState(\"test\", \"change message\");\n  }\n\n  alertmessage() {\n    const temp = self.state.goukei + 1;\n    this.changeState(\"goukei\", temp);\n  }\n\n  run() {\n    self.f = this;\n  }\n\n  render() {\n    const myname = this.props.name;\n    return `<p>\n        my name is ${myname}\n        <br>this is ${self.state.test}\n        <br>goukei is ${self.state.goukei}\n        <span id=\"app2\"></span>\n        </p>\n        <button onClick=\"self.f.sender()\">test</button>  \n        `;\n  }\n\n}\n\nlet action;\nconst f = new F({\n  props: {\n    name: \"new name\"\n  },\n  targetDom: \"app\"\n}, action);\nf.run();\n\nfunction sender2() {\n  console.log(\"fda\");\n}\n\nclass FF extends _Putity_Putity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(h) {\n    super(h);\n  }\n\n  sender2() {\n    console.log(\"test\");\n  }\n\n  run() {\n    self.ff = this;\n  }\n\n  render() {\n    return `<p>\n              sub module --------\n          </p>\n          <button onClick=\"self.ff.sender2()\">click</button>\n              `;\n  }\n\n}\n\nconst ff = new FF({\n  props: {\n    name: \"new name\"\n  },\n  targetDom: \"app2\"\n});\nff.run();\n\n//# sourceURL=webpack:///./resource/js/main.js?");

/***/ })

/******/ });