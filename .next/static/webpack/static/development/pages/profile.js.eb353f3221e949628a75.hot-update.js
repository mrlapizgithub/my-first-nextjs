webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/All.module.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./pages/All.module.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ./ComicNeue-Bold.ttf */ "./pages/ComicNeue-Bold.ttf");
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\r\n  font-family: \"Comic Neue\";\r\n  src: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\r\n}\r\n.All_all__17e_2 {\r\n  font-family: sans-serif;\r\n}\r\n.All_all__17e_2 h1{\r\n  font-family: consolas;\r\n}\r\n.All_all__17e_2 small {\r\n  font-family: serif;\r\n}\r\n.All_all__17e_2 small a {\r\n  color: #0084ff;\r\n  text-decoration: underline;\r\n}\r\n.All_all__17e_2 small a:hover {\r\n  color: #004d94;\r\n  text-decoration: none;\r\n}\r\n", "",{"version":3,"sources":["All.module.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,uCAA4B;AAC9B;AACA;EACE,uBAAuB;AACzB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,0BAA0B;AAC5B;AACA;EACE,cAAc;EACd,qBAAqB;AACvB","file":"All.module.css","sourcesContent":["@font-face {\r\n  font-family: \"Comic Neue\";\r\n  src: url(ComicNeue-Bold.ttf);\r\n}\r\n.all {\r\n  font-family: sans-serif;\r\n}\r\n.all h1{\r\n  font-family: consolas;\r\n}\r\n.all small {\r\n  font-family: serif;\r\n}\r\n.all small a {\r\n  color: #0084ff;\r\n  text-decoration: underline;\r\n}\r\n.all small a:hover {\r\n  color: #004d94;\r\n  text-decoration: none;\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"all": "All_all__17e_2"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./pages/ComicNeue-Bold.ttf":
/*!**********************************!*\
  !*** ./pages/ComicNeue-Bold.ttf ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ComicNeue-Bold.d700ff9cac24ac4fc0d2a3b43adf323e.ttf";

/***/ })

})
//# sourceMappingURL=profile.js.eb353f3221e949628a75.hot-update.js.map