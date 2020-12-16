/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./covid-dashboard/src/Header.js":
/*!***************************************!*\
  !*** ./covid-dashboard/src/Header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n\n\nclass Header {\n  constructor() {\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.create)(\"div\", null, (0,_create__WEBPACK_IMPORTED_MODULE_0__.create)(\"h1\", null, \"COVID-19 Dashboard\"));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/Header.js?");

/***/ }),

/***/ "./covid-dashboard/src/Main.js":
/*!*************************************!*\
  !*** ./covid-dashboard/src/Main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n\n\nclass Main {\n  constructor() {\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.create)(\"main\", \"mainContent_container\");\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/Main.js?");

/***/ }),

/***/ "./covid-dashboard/src/Wrapper.js":
/*!****************************************!*\
  !*** ./covid-dashboard/src/Wrapper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ \"./covid-dashboard/src/Main.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./covid-dashboard/src/Header.js\");\n\n\n\n\nclass Wrapper {\n  constructor() {\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.create)('div', 'wraper', [new _Header__WEBPACK_IMPORTED_MODULE_2__.Header(), new _Main__WEBPACK_IMPORTED_MODULE_1__.Main()]);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/Wrapper.js?");

/***/ }),

/***/ "./covid-dashboard/src/create.js":
/*!***************************************!*\
  !*** ./covid-dashboard/src/create.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction create(el, classNames, child, parent, ...dataAttr) {\n  let element = null;\n\n  try {\n    element = document.createElement(el);\n  } catch (error) {\n    throw new Error(\"Unable to create HTMLElement! Give a proper tag name\");\n  }\n\n  if (classNames) element.classList.add(...classNames.split(\" \")); // \"class1 class2 class3\"\n\n  if (child && Array.isArray(child)) {\n    child.forEach(childElement => childElement && element.appendChild(childElement));\n  } else if (child && typeof child === \"object\") {\n    element.appendChild(child);\n  } else if (child && typeof child === \"string\") {\n    element.innerHTML = child;\n  }\n\n  if (parent) {\n    parent.appendChild(element);\n  }\n\n  if (dataAttr.length) {\n    dataAttr.forEach(([attrName, attrValue]) => {\n      if (attrValue === \"\") {\n        element.setAttribute(attrName, \"\");\n      }\n\n      if (attrName.match(/type|id|value|for|name|selected/)) {\n        element.setAttribute(attrName, attrValue);\n      } else {\n        element.dataset[attrName] = attrValue;\n      }\n    });\n  }\n\n  return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/create.js?");

/***/ }),

/***/ "./covid-dashboard/src/index.js":
/*!**************************************!*\
  !*** ./covid-dashboard/src/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wrapper */ \"./covid-dashboard/src/Wrapper.js\");\nconsole.log('init');\n\ndocument.body.append(new _Wrapper__WEBPACK_IMPORTED_MODULE_0__.Wrapper());\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./covid-dashboard/src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;