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

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"../node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst data = __webpack_require__(/*! @Data/options.json */ \"./data/options.json\");\nconst Option = (param)=>/*#__PURE__*/ {\n    let { props } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.map((props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: props.path,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full h-full left-0 bottom-0 items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"opacity-50 h-1/2\",\n                        src: props.ico\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, undefined)\n            }, props.id, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined))\n    }, void 0, false);\n};\n_c = Option;\nconst Layout = (param)=>{\n    let { children, title = \"This is the default title\" } = param;\n    _s();\n    const [datam, setDatam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [refresh, setRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchMenuOptions() {\n            const menuOptions = await [];\n            setDatam(menuOptions);\n            // DEBUG\n            console.log(menuOptions);\n        }\n        fetchMenuOptions();\n    }, [\n        refresh\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"menu h-12 border-b-2 text-gray-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"menu-options flex absolute\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Option, {\n                                    props: data\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"menu-optons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/initial-props\",\n                                        children: \"Personal\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"I'm here to stay (Footer)\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layout, \"JcoNEgxz7W/aA2LZ67uiqkau8pc=\");\n_c1 = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c, _c1;\n$RefreshReg$(_c, \"Option\");\n$RefreshReg$(_c1, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRztBQUNmO0FBQ0E7QUFPNUIsTUFBTUssT0FBT0MsbUJBQU9BLENBQUM7QUFFckIsTUFBTUMsU0FBUztRQUFDLEVBQUVDLEtBQUssRUFBTztXQUM1QjtrQkFBR0EsTUFBTUMsR0FBRyxDQUFDLENBQUNELHNCQUNaLDhEQUFDTCxrREFBSUE7Z0JBQWdCTyxNQUFNRixNQUFNRyxJQUFJOzBCQUNuQyw0RUFBQ0M7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO3dCQUFtQkUsS0FBS1AsTUFBTVEsR0FBRzs7Ozs7Ozs7Ozs7ZUFGekNSLE1BQU1TLEVBQUU7Ozs7OztBQUtoQjtLQVBEVjtBQWFOLE1BQU1XLFNBQVM7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsMkJBQTJCLEVBQVM7O0lBQ3RFLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHckIsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNzQixTQUFTQyxXQUFXLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixlQUFldUI7WUFDYixNQUFNQyxjQUFjLE1BQU0sRUFBRTtZQUM1QkosU0FBU0k7WUFDVCxRQUFRO1lBQ1JDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtRQUNBRDtJQUNGLEdBQUc7UUFBQ0Y7S0FBUTtJQUVaLHFCQUNFLDhEQUFDWDs7MEJBQ0MsOERBQUNSLGtEQUFJQTs7a0NBQ0gsOERBQUNnQjtrQ0FBT0E7Ozs7OztrQ0FDUiw4REFBQ1M7d0JBQUtDLFNBQVE7Ozs7OztrQ0FDZCw4REFBQ0Q7d0JBQUtFLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNDOzBCQUNDLDRFQUFDQztvQkFBSXJCLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNOO29DQUFPQyxPQUFPSDs7Ozs7Ozs7Ozs7MENBRWpCLDhEQUFDTztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNWLGtEQUFJQTt3Q0FBQ08sTUFBSztrREFBaUI7Ozs7OztrREFDNUIsOERBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLUk87MEJBQ0QsOERBQUNnQjs7a0NBQ0MsOERBQUNDOzs7OztrQ0FDRCw4REFBQ0M7a0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkO0dBekNNbkI7TUFBQUE7QUEyQ04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzNjOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmNvbnN0IGRhdGEgPSByZXF1aXJlKCdARGF0YS9vcHRpb25zLmpzb24nKVxuXG5jb25zdCBPcHRpb24gPSAoeyBwcm9wcyB9OiBhbnkpID0+IChcbiAgPD57cHJvcHMubWFwKChwcm9wczogeyBpZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGljbzogc3RyaW5nIH0pID0+IChcbiAgICA8TGluayBrZXk9e3Byb3BzLmlkfSBocmVmPXtwcm9wcy5wYXRofT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBoLWZ1bGwgbGVmdC0wIGJvdHRvbS0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvcGFjaXR5LTUwIGgtMS8yJyBzcmM9e3Byb3BzLmljb30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKSl9PC8+XG4pXG5cblxuXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbZGF0YW0sIHNldERhdGFtXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZSgwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZW51T3B0aW9ucygpIHtcbiAgICAgIGNvbnN0IG1lbnVPcHRpb25zID0gYXdhaXQgW11cbiAgICAgIHNldERhdGFtKG1lbnVPcHRpb25zKVxuICAgICAgLy8gREVCVUdcbiAgICAgIGNvbnNvbGUubG9nKG1lbnVPcHRpb25zKVxuICAgIH1cbiAgICBmZXRjaE1lbnVPcHRpb25zKClcbiAgfSwgW3JlZnJlc2hdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPSdtZW51IGgtMTIgYm9yZGVyLWItMiB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtb3B0aW9ucyBmbGV4IGFic29sdXRlJz5cbiAgICAgICAgICAgICAgPE9wdGlvbiBwcm9wcz17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtb3B0b25zJz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbml0aWFsLXByb3BzXCI+UGVyc29uYWw8L0xpbms+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8c3Bhbj5JJ20gaGVyZSB0byBzdGF5IChGb290ZXIpPC9zcGFuPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJIZWFkIiwiZGF0YSIsInJlcXVpcmUiLCJPcHRpb24iLCJwcm9wcyIsIm1hcCIsImhyZWYiLCJwYXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaWNvIiwiaWQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGF0YW0iLCJzZXREYXRhbSIsInJlZnJlc2giLCJzZXRSZWZyZXNoIiwiZmV0Y2hNZW51T3B0aW9ucyIsIm1lbnVPcHRpb25zIiwiY29uc29sZSIsImxvZyIsIm1ldGEiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJoZWFkZXIiLCJuYXYiLCJmb290ZXIiLCJociIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n"));

/***/ })

});