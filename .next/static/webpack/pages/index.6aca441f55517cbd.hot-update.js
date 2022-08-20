"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _query_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../query/posts */ \"./query/posts.ts\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.ts\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _hooks_useDelay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useDelay */ \"./hooks/useDelay.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar MainPage = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.feed.links), posts = ref[0], setPosts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), search = ref1[0], setSearch = ref1[1];\n    console.log(data);\n    var ref2 = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__.useAuth)(), token = ref2.token, login = ref2.login, logout = ref2.logout;\n    var delayed = (0,_hooks_useDelay__WEBPACK_IMPORTED_MODULE_5__.useDelay)(search);\n    // @ts-ignore\n    var ref3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)((0,_query_posts__WEBPACK_IMPORTED_MODULE_3__.GET_All_POSTS)(delayed)), newData = ref3.data, loading = ref3.loading, error = ref3.error, refetch = ref3.refetch;\n    // @ts-ignore\n    var handleSearch = function(event) {\n        setSearch(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!loading && !error) setPosts(newData.feed.links);\n    }, [\n        newData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        refetch().then(function() {\n            return console.log(\"vrtv\");\n        });\n    }, [\n        delayed\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().search),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.InputBase, {\n                        placeholder: \"Search for a link…\",\n                        value: search,\n                        onChange: handleSearch,\n                        fullWidth: true\n                    }, void 0, false, {\n                        fileName: \"/Users/petemarianne/WebstormProjects/reddit/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/petemarianne/WebstormProjects/reddit/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/petemarianne/WebstormProjects/reddit/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_1__.Post, {\n                        data: post\n                    }, post.id, false, {\n                        fileName: \"/Users/petemarianne/WebstormProjects/reddit/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 36\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/petemarianne/WebstormProjects/reddit/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MainPage, \"pqgzpy98BT3lIHqI9xPrpR700PQ=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__.useAuth,\n        _hooks_useDelay__WEBPACK_IMPORTED_MODULE_5__.useDelay,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = MainPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);\nvar _c;\n$RefreshReg$(_c, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgR0VUX0FsbF9QT1NUUyB9IGZyb20gJy4uL3F1ZXJ5L3Bvc3RzJztcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2Fwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2hvb2tzL3VzZUF1dGgnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VEZWxheSB9IGZyb20gJy4uL2hvb2tzL3VzZURlbGF5JztcblxuY29uc3QgTWFpblBhZ2U6IE5leHRQYWdlPHtkYXRhOiBhbnl9PiA9ICh7ZGF0YX0pOiBKU1guRWxlbWVudCA9PiB7XG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxbYW55XT4oZGF0YS5mZWVkLmxpbmtzKTtcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgY29uc3Qge3Rva2VuLCBsb2dpbiwgbG9nb3V0fSA9IHVzZUF1dGgoKTtcbiAgICBjb25zdCBkZWxheWVkID0gdXNlRGVsYXkoc2VhcmNoKTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB7ZGF0YTogbmV3RGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2h9ID0gdXNlUXVlcnkoR0VUX0FsbF9QT1NUUyhkZWxheWVkKSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgICAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFsb2FkaW5nICYmICFlcnJvcikgc2V0UG9zdHMobmV3RGF0YS5mZWVkLmxpbmtzKTtcbiAgICB9LCBbbmV3RGF0YV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVmZXRjaCgpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ3ZydHYnKSk7XG4gICAgfSwgW2RlbGF5ZWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCYXNlIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIGEgbGlua+KApicgdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH0gZnVsbFdpZHRoLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gPFBvc3Qga2V5PXtwb3N0LmlkfSBkYXRhPXtwb3N0fS8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IEdFVF9BbGxfUE9TVFMoKSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlBvc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwiR0VUX0FsbF9QT1NUUyIsInVzZUF1dGgiLCJJbnB1dEJhc2UiLCJ1c2VEZWxheSIsIk1haW5QYWdlIiwiZGF0YSIsImZlZWQiLCJsaW5rcyIsInBvc3RzIiwic2V0UG9zdHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJsb2dpbiIsImxvZ291dCIsImRlbGF5ZWQiLCJuZXdEYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0aGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImZ1bGxXaWR0aCIsIm1haW4iLCJtYXAiLCJwb3N0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});