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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** multi ./src/index.src.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.src.js */1);


/***/ }),
/* 1 */
/*!**************************!*\
  !*** ./src/index.src.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _test = __webpack_require__(/*! ./components/test-component/test.component */ 2);\n\n__webpack_require__(/*! ./lib/style-processor */ 5);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguc3JjLmpzPzJmNTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgXCIuL2xpYi9kb20tcmVuZGVyZXJcIlxuaW1wb3J0IHsgVGVzdEVsZW1lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVzdC1jb21wb25lbnQvdGVzdC5jb21wb25lbnQnXG5pbXBvcnQgXCIuL2xpYi9zdHlsZS1wcm9jZXNzb3JcIlxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguc3JjLmpzIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************!*\
  !*** ./src/components/test-component/test.component.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.TestElement = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _testComponent = __webpack_require__(/*! ./test.component.html */ 3);\n\nvar _testComponent2 = _interopRequireDefault(_testComponent);\n\nvar _testComponent3 = __webpack_require__(/*! ./test.component.css */ 4);\n\nvar _testComponent4 = _interopRequireDefault(_testComponent3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _CustomElement() {\n    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);\n}\n\n;\nObject.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);\nObject.setPrototypeOf(_CustomElement, HTMLElement);\n\n\nvar selector = 'test-element';\n\nvar TestElement = exports.TestElement = function (_CustomElement2) {\n    _inherits(TestElement, _CustomElement2);\n\n    function TestElement() {\n        _classCallCheck(this, TestElement);\n\n        return _possibleConstructorReturn(this, (TestElement.__proto__ || Object.getPrototypeOf(TestElement)).call(this));\n    }\n\n    _createClass(TestElement, [{\n        key: \"connectedCallback\",\n        value: function connectedCallback() {\n            this.innerHTML += \"<div class=\\\"test\\\">teste</div>\";\n            this.innerHTML += \"<style scoped>\\n\" + _testComponent4.default + \"\\n</style>\";\n        }\n    }, {\n        key: \"func\",\n        value: function func() {\n            console.log(\"tester\");\n        }\n    }]);\n\n    return TestElement;\n}(_CustomElement);\n\ncustomElements.define(selector, TestElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy90ZXN0LWNvbXBvbmVudC90ZXN0LmNvbXBvbmVudC5qcz8yYjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRNYXJrdXAgZnJvbSBcIi4vdGVzdC5jb21wb25lbnQuaHRtbFwiXG5pbXBvcnQgQ29tcG9uZW50U3R5bGVzIGZyb20gXCIuL3Rlc3QuY29tcG9uZW50LmNzc1wiXG5cblxuXG52YXIgc2VsZWN0b3IgPSAndGVzdC1lbGVtZW50J1xuZXhwb3J0IGNsYXNzIFRlc3RFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpICAgICAgICBcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpe1xuICAgICAgICB0aGlzLmlubmVySFRNTCArPSBcIjxkaXYgY2xhc3M9XFxcInRlc3RcXFwiPnRlc3RlPC9kaXY+XCJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgKz0gXCI8c3R5bGUgc2NvcGVkPlxcblwiICsgQ29tcG9uZW50U3R5bGVzICsgXCJcXG48L3N0eWxlPlwiXG4gICAgfSAgIFxuXG4gICAgZnVuYygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RlclwiKVxuICAgIH1cblxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShzZWxlY3RvciwgVGVzdEVsZW1lbnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy90ZXN0LWNvbXBvbmVudC90ZXN0LmNvbXBvbmVudC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************************************!*\
  !*** ./src/components/test-component/test.component.html ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = \"sdgsdfg\\n<div onclick=\\\"this.func()\\\">test</div>\\n\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rlc3QtY29tcG9uZW50L3Rlc3QuY29tcG9uZW50Lmh0bWw/NjdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwic2Rnc2RmZ1xcbjxkaXYgb25jbGljaz1cXFwidGhpcy5mdW5jKClcXFwiPnRlc3Q8L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdGVzdC1jb21wb25lbnQvdGVzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**********************************************************!*\
  !*** ./src/components/test-component/test.component.css ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = \":host {\\n    color: red;\\n}\\n\\n* {\\n    color: blue;\\n    user-select: none;\\n}\\n\\nh1 {\\n    cursor: pointer;\\n}\\n\\n.test {\\n    color: green;\\n}\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rlc3QtY29tcG9uZW50L3Rlc3QuY29tcG9uZW50LmNzcz9hMzkwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI6aG9zdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbioge1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGVzdCB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Rlc3QtY29tcG9uZW50L3Rlc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!************************************!*\
  !*** ./src/lib/style-processor.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* global exports */\n\nfunction init() {\n  var style = document.createElement(\"style\");\n  style.appendChild(document.createTextNode(\"\"));\n  document.head.appendChild(style);\n  style.sheet.insertRule(\"body { visibility: hidden; }\", 0);\n}\n\nfunction scoper(css, prefix) {\n  var re = new RegExp(\"([^\\r\\n,{}]+)(,(?=[^}]*{)|\\s*{)\", \"g\");\n  css = css.replace(re, function (g0, g1, g2) {\n\n    if (g1.match(/^\\s*(@media|@keyframes|to|from|@font-face)/)) {\n      return g1 + g2;\n    }\n\n    if (g1.match(/:host/)) {\n      g1 = g1.replace(/([^\\s]*):host/, function (h0, h1) {\n        if (h1 === \"\") {\n          return \"\";\n        }\n      });\n    }\n\n    if (g1.match(/:scope/)) {\n      g1 = g1.replace(/([^\\s]*):scope/, function (h0, h1) {\n        if (h1 === \"\") {\n          return \"> *\";\n        } else {\n          return \"> \" + h1;\n        }\n      });\n    }\n\n    g1 = g1.replace(/^(\\s*)/, \"*[\" + prefix + \"] \");\n\n    return g1 + g2;\n  });\n\n  return css;\n}\n\nfunction process() {\n  var styles = document.body.querySelectorAll(\"style[scoped]\");\n\n  if (styles.length === 0) {\n    document.getElementsByTagName(\"body\")[0].style.visibility = \"visible\";\n    return;\n  }\n\n  var head = document.head || document.getElementsByTagName(\"head\")[0];\n  var newstyle = document.createElement(\"style\");\n  var csses = \"\";\n\n  for (var i = 0; i < styles.length; i++) {\n    var style = styles[i];\n    var css = style.innerHTML;\n\n    if (css && style.parentElement.nodeName !== \"BODY\") {\n      var prefix = \"csspointer\" + i;\n\n      var parent = style.parentNode;\n      var grandparent = parent.parentNode;\n\n      parent.setAttribute(prefix, '');\n\n      style.parentNode.removeChild(style);\n\n      csses = csses + scoper(css, prefix);\n    }\n  }\n\n  if (newstyle.styleSheet) {\n    newstyle.styleSheet.cssText = csses;\n  } else {\n    newstyle.appendChild(document.createTextNode(csses));\n  }\n\n  head.appendChild(newstyle);\n  document.getElementsByTagName(\"body\")[0].style.visibility = \"visible\";\n}\n\n(function () {\n  \"use strict\";\n\n  if (\"scoped\" in document.createElement(\"style\")) {\n    return;\n  }\n\n  init();\n\n  if (document.readyState === \"complete\" || document.readyState === \"loaded\") {\n    process();\n  } else {\n    document.addEventListener(\"DOMContentLoaded\", process);\n  }\n})();\n\nif (true) {\n  exports.scoper = scoper;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-scoper/scoper.js\n// module id = 5\n// module chunks = 0//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbGliL3N0eWxlLXByb2Nlc3Nvci5qcz8zZGVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBleHBvcnRzICovXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKFwiYm9keSB7IHZpc2liaWxpdHk6IGhpZGRlbjsgfVwiLCAwKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gc2NvcGVyKGNzcywgcHJlZml4KSB7XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIihbXlxcclxcbix7fV0rKSgsKD89W159XSp7KXxcXHMqeylcIiwgXCJnXCIpO1xuICAgIGNzcyA9IGNzcy5yZXBsYWNlKHJlLCBmdW5jdGlvbihnMCwgZzEsIGcyKSB7XG4gIFxuICAgICAgaWYgKGcxLm1hdGNoKC9eXFxzKihAbWVkaWF8QGtleWZyYW1lc3x0b3xmcm9tfEBmb250LWZhY2UpLykpIHtcbiAgICAgICAgcmV0dXJuIGcxICsgZzI7XG4gICAgICB9XG5cbiAgICAgIGlmIChnMS5tYXRjaCgvOmhvc3QvKSkge1xuICAgICAgICBnMSA9IGcxLnJlcGxhY2UoLyhbXlxcc10qKTpob3N0LywgZnVuY3Rpb24oaDAsIGgxKSB7XG4gICAgICAgICAgaWYgKGgxID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICB9IFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoZzEubWF0Y2goLzpzY29wZS8pKSB7XG4gICAgICAgIGcxID0gZzEucmVwbGFjZSgvKFteXFxzXSopOnNjb3BlLywgZnVuY3Rpb24oaDAsIGgxKSB7XG4gICAgICAgICAgaWYgKGgxID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI+ICpcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiPiBcIiArIGgxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gIFxuICAgICAgZzEgPSBnMS5yZXBsYWNlKC9eKFxccyopLywgXCIqW1wiICsgcHJlZml4ICsgXCJdIFwiKTtcbiAgXG4gICAgICByZXR1cm4gZzEgKyBnMjtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gY3NzO1xuICB9XG4gIFxuICBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgIHZhciBzdHlsZXMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtzY29wZWRdXCIpO1xuICBcbiAgICBpZiAoc3R5bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gICAgdmFyIG5ld3N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHZhciBjc3NlcyA9IFwiXCI7XG4gIFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZXNbaV07XG4gICAgICB2YXIgY3NzID0gc3R5bGUuaW5uZXJIVE1MO1xuICBcbiAgICAgIGlmIChjc3MgJiYgKHN0eWxlLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiQk9EWVwiKSkge1xuICAgICAgICB2YXIgcHJlZml4ID0gYGNzc3BvaW50ZXIke2l9YDtcbiAgICAgICAgXG4gICAgICAgIHZhciBwYXJlbnQgPSBzdHlsZS5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgZ3JhbmRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblxuICAgICAgICBwYXJlbnQuc2V0QXR0cmlidXRlKHByZWZpeCwgJycpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICBcbiAgICAgICAgY3NzZXMgPSBjc3NlcyArIHNjb3Blcihjc3MsIHByZWZpeCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZiAobmV3c3R5bGUuc3R5bGVTaGVldCl7XG4gICAgICBuZXdzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NlcztcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzZXMpKTtcbiAgICB9XG4gIFxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobmV3c3R5bGUpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH1cbiAgXG4gIChmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgXG4gICAgaWYgKFwic2NvcGVkXCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGluaXQoKTtcbiAgXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRlZFwiKSB7XG4gICAgICBwcm9jZXNzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHByb2Nlc3MpO1xuICAgIH1cbiAgfSgpKTtcbiAgXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGV4cG9ydHMuc2NvcGVyID0gc2NvcGVyO1xuICB9XG4gIFxuICBcbiAgXG4gIC8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBXRUJQQUNLIEZPT1RFUlxuICAvLyAuL25vZGVfbW9kdWxlcy9jc3Mtc2NvcGVyL3Njb3Blci5qc1xuICAvLyBtb2R1bGUgaWQgPSA1XG4gIC8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9saWIvc3R5bGUtcHJvY2Vzc29yLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);