"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/initial-props",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta */ \"./components/meta.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst data = __webpack_require__(/*! @Data/options.json */ \"./data/options.json\");\nconst Option = (param)=>/*#__PURE__*/ {\n    let { props } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.map((props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: props.path,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full h-full left-0 top-0 items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"opacity-50 h-1/2\",\n                        src: props.ico\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined)\n            }, props.id, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined))\n    }, void 0, false);\n};\n_c = Option;\nconst Layout = (param)=>{\n    let { children, title = \"Nya!\" } = param;\n    _s();\n    const [datam, setDatam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [refresh, setRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchMenuOptions() {\n            const menuOptions = await [];\n            setDatam(menuOptions);\n            // DEBUG\n            console.log(menuOptions);\n        }\n        fetchMenuOptions();\n    }, [\n        refresh\n    ]);\n    const handleMenuOptions = (opt)=>{\n        const createOptions = ((opt)=>{\n            {}\n        })(opt).then((opts)=>{\n            setRefresh((oldKey)=>oldKey + 1);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_meta__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageTitle: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"menu w-12 h-full fixed border-r-2 text-gray-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-full flex flex-col content-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"a\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"menu-options flex flex-col absolute\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Option, {\n                                    props: data\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"menu-optons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/initial-props\",\n                                        children: \"Personal\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu-window\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"right-0 fixed\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"I'm here to stay ❤ (Footer)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\components\\\\Layout.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layout, \"JcoNEgxz7W/aA2LZ67uiqkau8pc=\");\n_c1 = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c, _c1;\n$RefreshReg$(_c, \"Option\");\n$RefreshReg$(_c1, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBQ2Y7QUFFSDtBQU96QixNQUFNSyxPQUFPQyxtQkFBT0EsQ0FBQztBQUVyQixNQUFNQyxTQUFTO1FBQUMsRUFBRUMsS0FBSyxFQUFPO1dBQzVCO2tCQUFHQSxNQUFNQyxHQUFHLENBQUMsQ0FBQ0Qsc0JBQ1osOERBQUNMLGtEQUFJQTtnQkFBZ0JPLE1BQU1GLE1BQU1HLElBQUk7MEJBQ25DLDRFQUFDQztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7d0JBQW1CRSxLQUFLUCxNQUFNUSxHQUFHOzs7Ozs7Ozs7OztlQUZ6Q1IsTUFBTVMsRUFBRTs7Ozs7O0FBS2hCO0tBUERWO0FBV04sTUFBTVcsU0FBUztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxNQUFNLEVBQVM7O0lBQ2pELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHckIsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNzQixTQUFTQyxXQUFXLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixlQUFldUI7WUFDYixNQUFNQyxjQUFjLE1BQU0sRUFBRTtZQUM1QkosU0FBU0k7WUFDVCxRQUFRO1lBQ1JDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtRQUNBRDtJQUNGLEdBQUc7UUFBQ0Y7S0FBUTtJQUVaLE1BQU1NLG9CQUFvQixDQUFDQztRQUN6QixNQUFNQyxnQkFBZ0IsQ0FBQyxDQUFDRDtZQUN0QixDQUFFO1FBQ0osR0FBR0EsS0FBS0UsSUFBSSxDQUFDLENBQUNDO1lBQ1pULFdBQVdVLENBQUFBLFNBQVVBLFNBQVM7UUFDaEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDdEI7OzBCQUNDLDhEQUFDUiw2Q0FBSUE7Z0JBQUMrQixXQUFXZjs7Ozs7OzBCQUNqQiw4REFBQ2dCOzBCQUNDLDRFQUFDQztvQkFBSXhCLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7MENBQ0MsNEVBQUNBOzhDQUFJOzs7Ozs7Ozs7OzswQ0FJUCw4REFBQ0E7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNOO29DQUFPQyxPQUFPSDs7Ozs7Ozs7Ozs7MENBRWpCLDhEQUFDTztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNWLGtEQUFJQTt3Q0FBQ08sTUFBSztrREFBaUI7Ozs7OztrREFDNUIsOERBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1QsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztvQkFDZE07Ozs7Ozs7MEJBRUgsOERBQUNtQjswQkFDQyw0RUFBQzFCO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQzBCOzs7OztzQ0FDRCw4REFBQ0M7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBdkRNdEI7TUFBQUE7QUF5RE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzNjOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgTWV0YSBmcm9tICcuL21ldGEnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJ0BEYXRhL29wdGlvbnMuanNvbicpXG5cbmNvbnN0IE9wdGlvbiA9ICh7IHByb3BzIH06IGFueSkgPT4gKFxuICA8Pntwcm9wcy5tYXAoKHByb3BzOiB7IGlkOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgaWNvOiBzdHJpbmcgfSkgPT4gKFxuICAgIDxMaW5rIGtleT17cHJvcHMuaWR9IGhyZWY9e3Byb3BzLnBhdGh9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGgtZnVsbCBsZWZ0LTAgdG9wLTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J29wYWNpdHktNTAgaC0xLzInIHNyYz17cHJvcHMuaWNvfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApKX08Lz5cbilcblxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnTnlhIScgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2RhdGFtLCBzZXREYXRhbV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3JlZnJlc2gsIHNldFJlZnJlc2hdID0gdXNlU3RhdGUoMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoTWVudU9wdGlvbnMoKSB7XG4gICAgICBjb25zdCBtZW51T3B0aW9ucyA9IGF3YWl0IFtdXG4gICAgICBzZXREYXRhbShtZW51T3B0aW9ucylcbiAgICAgIC8vIERFQlVHXG4gICAgICBjb25zb2xlLmxvZyhtZW51T3B0aW9ucylcbiAgICB9XG4gICAgZmV0Y2hNZW51T3B0aW9ucygpXG4gIH0sIFtyZWZyZXNoXSlcblxuICBjb25zdCBoYW5kbGVNZW51T3B0aW9ucyA9IChvcHQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVPcHRpb25zID0gKChvcHQpID0+IHtcbiAgICAgIHsgfVxuICAgIH0pKG9wdCkudGhlbigob3B0cykgPT4ge1xuICAgICAgc2V0UmVmcmVzaChvbGRLZXkgPT4gb2xkS2V5ICsgMSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1ldGEgcGFnZVRpdGxlPXt0aXRsZX0vPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J21lbnUgdy0xMiBoLWZ1bGwgZml4ZWQgYm9yZGVyLXItMiB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGZsZXggZmxleC1jb2wgY29udGVudC1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgYVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtb3B0aW9ucyBmbGV4IGZsZXgtY29sIGFic29sdXRlJz5cbiAgICAgICAgICAgICAgPE9wdGlvbiBwcm9wcz17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtb3B0b25zJz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbml0aWFsLXByb3BzXCI+UGVyc29uYWw8L0xpbms+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0xMic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LXdpbmRvdyc+PC9kaXY+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LTAgZml4ZWQnPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxzcGFuPkknbSBoZXJlIHRvIHN0YXkg4p2kIChGb290ZXIpPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTWV0YSIsImRhdGEiLCJyZXF1aXJlIiwiT3B0aW9uIiwicHJvcHMiLCJtYXAiLCJocmVmIiwicGF0aCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImljbyIsImlkIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRhdGFtIiwic2V0RGF0YW0iLCJyZWZyZXNoIiwic2V0UmVmcmVzaCIsImZldGNoTWVudU9wdGlvbnMiLCJtZW51T3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVNZW51T3B0aW9ucyIsIm9wdCIsImNyZWF0ZU9wdGlvbnMiLCJ0aGVuIiwib3B0cyIsIm9sZEtleSIsInBhZ2VUaXRsZSIsImhlYWRlciIsIm5hdiIsImZvb3RlciIsImhyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n"));

/***/ })

});