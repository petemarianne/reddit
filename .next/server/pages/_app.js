/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./apollo/client.ts":
/*!**************************!*\
  !*** ./apollo/client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__);\n/*import { ApolloClient, InMemoryCache } from '@apollo/client';\n\nexport const client = new ApolloClient({\n    uri: 'https://api.vrmarketing.guru/',\n    cache: new InMemoryCache()\n});*/ \n\nconst httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({\n    uri: \"https://api.vrmarketing.guru/\"\n});\nconst authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__.setContext)((_, { headers  })=>{\n    let token = \"\";\n    if (false) {}\n    return {\n        headers: {\n            ...headers,\n            authorization: token ? `Bearer ${token}` : \"\"\n        }\n    };\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: authLink.concat(httpLink),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8vY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0csR0FFMEU7QUFDcEI7QUFFekQsTUFBTUksUUFBUSxHQUFHSCw4REFBYyxDQUFDO0lBQzVCSSxHQUFHLEVBQUUsK0JBQStCO0NBQ3ZDLENBQUM7QUFFRixNQUFNQyxRQUFRLEdBQUdILHVFQUFVLENBQUMsQ0FBQ0ksQ0FBQyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFLO0lBQzVDLElBQUlDLEtBQUssR0FBRyxFQUFFO0lBQ2QsSUFBSSxLQUFnQyxFQUFFQSxFQUFnRDtJQUN0RixPQUFPO1FBQ0hELE9BQU8sRUFBRTtZQUNMLEdBQUdBLE9BQU87WUFDVkksYUFBYSxFQUFFSCxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUVBLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTtTQUNoRDtLQUNKO0NBQ0osQ0FBQztBQUVLLE1BQU1JLE1BQU0sR0FBRyxJQUFJYix3REFBWSxDQUFDO0lBQ25DYyxJQUFJLEVBQUVSLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDWCxRQUFRLENBQUM7SUFDL0JZLEtBQUssRUFBRSxJQUFJZCx5REFBYSxFQUFFO0NBQzdCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGRpdC8uL2Fwb2xsby9jbGllbnQudHM/Mjk1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogJ2h0dHBzOi8vYXBpLnZybWFya2V0aW5nLmd1cnUvJyxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxufSk7Ki9cblxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHQnO1xuXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgICB1cmk6ICdodHRwczovL2FwaS52cm1hcmtldGluZy5ndXJ1LycsXG59KTtcblxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICAgIGxldCB0b2tlbiA9ICcnO1xuICAgIGlmICghKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSkgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLi4uaGVhZGVycyxcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJyxcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxufSk7XG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiY3JlYXRlSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwic2V0Q29udGV4dCIsImh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJfIiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF1dGhvcml6YXRpb24iLCJjbGllbnQiLCJsaW5rIiwiY29uY2F0IiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/client.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apollo/client */ \"./apollo/client.ts\");\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n        client: _apollo_client__WEBPACK_IMPORTED_MODULE_4__.client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/petemarianne/WebstormProjects/reddit/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/petemarianne/WebstormProjects/reddit/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDSDtBQUNzQjtBQUNOO0FBRTFDLE1BQU1HLEtBQUssR0FBK0MsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxHQUFrQjtJQUNqRyxxQkFDSSw4REFBQ0osMERBQWM7UUFBQ0MsTUFBTSxFQUFFQSxrREFBTTtrQkFDMUIsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztxQkFBSTs7Ozs7aUJBQ2YsQ0FDbkI7Q0FDTDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRkaXQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9hcG9sbG8vY2xpZW50JztcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPHtDb21wb25lbnQ6IGFueSwgcGFnZVByb3BzOiBhbnl9PiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();