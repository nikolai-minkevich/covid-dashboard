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

/***/ "./covid-dashboard/src/CountryStatistic.js":
/*!*************************************************!*\
  !*** ./covid-dashboard/src/CountryStatistic.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ \"./covid-dashboard/src/Slider.js\");\n/* harmony import */ var _StatisticItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatisticItem */ \"./covid-dashboard/src/StatisticItem.js\");\n\n\n\n\nclass CountryStatistic {\n  constructor() {\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    const countryStatistic = new _StatisticItem__WEBPACK_IMPORTED_MODULE_2__.default(\"Russia Cases\");\n    const slider = new _Slider__WEBPACK_IMPORTED_MODULE_1__.default(\"жужужу\");\n    const countryStatisticContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"statistic_container__prime countryStatistic_container__prime\", [countryStatistic, slider]);\n    return countryStatisticContainer;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryStatistic);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/CountryStatistic.js?");

/***/ }),

/***/ "./covid-dashboard/src/Header.js":
/*!***************************************!*\
  !*** ./covid-dashboard/src/Header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n\n\nclass Header {\n  constructor() {\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"header\", null, (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"h1\", null, \"COVID-19 Dashboard\"));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/Header.js?");

/***/ }),

/***/ "./covid-dashboard/src/Main.js":
/*!*************************************!*\
  !*** ./covid-dashboard/src/Main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n/* harmony import */ var _StatisticTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticTable */ \"./covid-dashboard/src/StatisticTable.js\");\n/* harmony import */ var _CountryStatistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountryStatistic */ \"./covid-dashboard/src/CountryStatistic.js\");\n\n\n\n\nclass Main {\n  constructor() {\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"main\", \"mainContent_container\", [new _CountryStatistic__WEBPACK_IMPORTED_MODULE_2__.default(), new _StatisticTable__WEBPACK_IMPORTED_MODULE_1__.default()]);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/Main.js?");

/***/ }),

/***/ "./covid-dashboard/src/Slider.js":
/*!***************************************!*\
  !*** ./covid-dashboard/src/Slider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n\n\nclass Slider {\n  constructor(nameOfItem\n  /*, className*/\n  ) {\n    this.nameOfItem = nameOfItem;\n    /*this.className = className;*/\n\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    const nameOfItem = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'slider_nameOfItem', `${this.nameOfItem}`);\n    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"slider_container\", [(0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", 'slider_leftArrow', \"<\"), nameOfItem, (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"slider_rightArrow\", \">\")]);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/Slider.js?");

/***/ }),

/***/ "./covid-dashboard/src/StatisticItem.js":
/*!**********************************************!*\
  !*** ./covid-dashboard/src/StatisticItem.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n\n\nclass StatisticItem {\n  constructor(itemName) {\n    this.itemName = itemName;\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    const statisticItemContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"statistic_container\", [(0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"h2\", \"statistic_header\", `${this.itemName}`), (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"ul\", \"statistic_list\")]);\n    return statisticItemContainer;\n  }\n\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticItem);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/StatisticItem.js?");

/***/ }),

/***/ "./covid-dashboard/src/StatisticTable.js":
/*!***********************************************!*\
  !*** ./covid-dashboard/src/StatisticTable.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ \"./covid-dashboard/src/Slider.js\");\n/* harmony import */ var _StatisticItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatisticItem */ \"./covid-dashboard/src/StatisticItem.js\");\n\n\n\n\nclass StatisticTable {\n  constructor() {\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    const casesContainer = new _StatisticItem__WEBPACK_IMPORTED_MODULE_2__.default(\"Cases\");\n    const deathsContainer = new _StatisticItem__WEBPACK_IMPORTED_MODULE_2__.default(\"Deaths\");\n    const recoveredContainer = new _StatisticItem__WEBPACK_IMPORTED_MODULE_2__.default(\"Recovered\");\n    const slider = new _Slider__WEBPACK_IMPORTED_MODULE_1__.default(\"жужужу\");\n    const statisticContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"statistic_container__prime\", [casesContainer, deathsContainer, recoveredContainer, slider]);\n    return statisticContainer;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticTable);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/StatisticTable.js?");

/***/ }),

/***/ "./covid-dashboard/src/Wrapper.js":
/*!****************************************!*\
  !*** ./covid-dashboard/src/Wrapper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./covid-dashboard/src/create.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ \"./covid-dashboard/src/Main.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./covid-dashboard/src/Header.js\");\n\n\n\n\nclass Wrapper {\n  constructor() {\n    return this.generateLayout();\n  }\n\n  generateLayout() {\n    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\", \"wraper\", [new _Header__WEBPACK_IMPORTED_MODULE_2__.default(), new _Main__WEBPACK_IMPORTED_MODULE_1__.default()]);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/Wrapper.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/style.css */ \"./covid-dashboard/css/style.css\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wrapper */ \"./covid-dashboard/src/Wrapper.js\");\nconsole.log(\"init\");\n\n\ndocument.body.prepend(new _Wrapper__WEBPACK_IMPORTED_MODULE_1__.default());\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://covid-dashboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/countryStatistic.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/countryStatistic.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".countryStatistic_container__prime{\\r\\n    width: 20vw;\\r\\n}\\r\\n.countryStatistic_container__prime .statistic_container{\\r\\nwidth: 100%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/css/countryStatistic.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/header.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/header.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"header{\\r\\n    height: 8%;\\r\\n    padding: 0.5%;\\r\\n    background-color: cadetblue;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin: 0.5% 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/css/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/slider.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/slider.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".slider_container {\\r\\n  width: 100%;\\r\\n  height: 20%;\\r\\n  background-color: crimson;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.slider_leftArrow, .slider_rightArrow{\\r\\n  height: 100%;\\r\\n  width: 15%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/css/slider.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/statisticTable.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/statisticTable.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".statistic_container__prime {\\r\\n  width: 37.9vw;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n.statistic_container {\\r\\n  background-color: cornflowerblue;/*потом убрать мб*/\\r\\n  width: 12.5vw;\\r\\n  height: 40vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.statistic_header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  justify-content: center;\\r\\n  background-color: cadetblue;/*потом убрать мб*/\\r\\n  height: 20%;\\r\\n  width: 100%;\\r\\n}\\r\\n.statistic_list{\\r\\n  background-color: aquamarine;/*потом убрать мб*/\\r\\n  height: 80%;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/css/statisticTable.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/style.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_statisticTable_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./statisticTable.css */ \"./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/statisticTable.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_countryStatistic_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./countryStatistic.css */ \"./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/countryStatistic.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slider.css */ \"./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/slider.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/header.css\");\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_statisticTable_css__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_countryStatistic_css__WEBPACK_IMPORTED_MODULE_2__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_3__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_4__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*:before,\\r\\n*:after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\na:hover,\\r\\na:visited,\\r\\na:link,\\r\\na:active {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-family: \\\"Arial\\\", sans-serif;\\r\\n  font-size: 15px;\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  line-height: 20px;\\r\\n}\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n  margin: 0;\\r\\n}\\r\\nh2 {\\r\\n  font-size: 1.6em;\\r\\n  line-height: 1.65em;\\r\\n  font-weight: 600;\\r\\n}\\r\\nh3 {\\r\\n  font-size: 1.2em;\\r\\n  line-height: 1.3em;\\r\\n  font-weight: 600;\\r\\n}\\r\\nh3 {\\r\\n  font-size: 1.1em;\\r\\n  line-height: 1.15em;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\nul,\\r\\nli {\\r\\n  display: block;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #222222;\\r\\n  font-family: \\\"Arial\\\", sans-serif;\\r\\n  font-size: 15px;\\r\\n  line-height: 24px;\\r\\n  letter-spacing: 0.005em;\\r\\n}\\r\\na:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n.wraper{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 98%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n.mainContent_container{\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n}\\r\\n/*\\r\\n\\r\\n\\r\\n.casesStatistics_container{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 18vw;\\r\\n}\\r\\n\\r\\n.globalCases_container{\\r\\n    height: 80px;\\r\\n    width: 100%;\\r\\n    margin-bottom: 0.5%;\\r\\n    background-color: aquamarine;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.groupingTypeOfCases_slider_innerContent, .recoveredDeaths_slider_innerContent, .testsAndRatio_slider_innerContent{\\r\\n    display: flex;\\r\\n    width: 18vw;\\r\\n    overflow: hidden;\\r\\n}\\r\\n.groupingTypeOfCases_container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    min-width: 18vw;\\r\\n}\\r\\n\\r\\n.slider_arrowsContainer{\\r\\n    padding: 5%;\\r\\n    background-color: tomato;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    width: 100%;\\r\\n    align-items: center;\\r\\n    height: 4.5em;\\r\\n    border-top: 2px solid white;\\r\\n}\\r\\n.groupingTypeOfCases_slider__arrowsContainer_nameOfSlide{\\r\\n    width: 60%;\\r\\n}\\r\\n.statistics_item{\\r\\n    padding: 5%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 3em;\\r\\n    background-color: chartreuse;\\r\\n    border-top: 2px solid white;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n.recoveredDeathsTestsSchedule_container{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 36.2vw;\\r\\n    justify-content: space-between;\\r\\n    background-color: aquamarine;\\r\\n}\\r\\n\\r\\n.statistics_title{\\r\\n    padding: 5%;\\r\\n    background-color: tomato;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n    align-items: center;\\r\\n    height: 5em;\\r\\n    border-top: 2px solid white;\\r\\n}\\r\\n\\r\\n.recovered_container, .deaths_container, .tests_container, .recoveredDeathsRatio_container{\\r\\n    min-width: 18vw;\\r\\n}\\r\\n.recoveredDeaths_container .testsAndRatio_container{\\r\\n    width: 18vw;\\r\\n}\\r\\n.recoveredDeathsRatio_number{\\r\\n    text-align: center;\\r\\n    font-size: 1.3em;\\r\\n    line-height:1.2em;\\r\\n    letter-spacing: 0.005em;\\r\\n}*/\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./covid-dashboard/css/style.css":
/*!***************************************!*\
  !*** ./covid-dashboard/css/style.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./covid-dashboard/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://covid-dashboard/./covid-dashboard/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://covid-dashboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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