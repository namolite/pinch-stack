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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/notifications */ \"./utils/notifications.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst IndexPage = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleMessage = (_event, args)=>alert(args);\n        // add a listener to 'message' channel\n        __webpack_require__.g.ipcRenderer.addListener(\"message\", handleMessage);\n        return ()=>{\n            __webpack_require__.g.ipcRenderer.removeListener(\"message\", handleMessage);\n        };\n    }, []);\n    const onSayHiClick = ()=>{\n        __webpack_require__.g.ipcRenderer.send(\"message\", \"hi from next\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Pinch Stack | Home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello \\uD83D\\uDC4B\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onSayHiClick,\n                children: \"Say hi\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/about\",\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\pages\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Program Files\\\\Lab.js\\\\momo\\\\renderer\\\\pages\\\\index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(IndexPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTDtBQUNhO0FBQ1Y7QUFFL0IsTUFBTUcsWUFBWTs7SUFDaEJILGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUksZ0JBQWdCLENBQUNDLFFBQVFDLE9BQVNDLE1BQU1EO1FBRTlDLHNDQUFzQztRQUN0Q0UscUJBQU1BLENBQUNDLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDLFdBQVdOO1FBRTFDLE9BQU87WUFDTEkscUJBQU1BLENBQUNDLFdBQVcsQ0FBQ0UsY0FBYyxDQUFDLFdBQVdQO1FBQy9DO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVEsZUFBZTtRQUNuQkoscUJBQU1BLENBQUNDLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDLFdBQVc7SUFDckM7SUFFQSxxQkFDRSw4REFBQ1gsMERBQU1BO1FBQUNZLE9BQU07OzBCQUNaLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBU0w7MEJBQWM7Ozs7OzswQkFDL0IsOERBQUNNOzBCQUNDLDRFQUFDakIsa0RBQUlBO29CQUFDa0IsTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUI7R0F6Qk1oQjtLQUFBQTtBQTJCTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgJy4uL3V0aWxzL25vdGlmaWNhdGlvbnMnXG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gKF9ldmVudCwgYXJncykgPT4gYWxlcnQoYXJncylcblxuICAgIC8vIGFkZCBhIGxpc3RlbmVyIHRvICdtZXNzYWdlJyBjaGFubmVsXG4gICAgZ2xvYmFsLmlwY1JlbmRlcmVyLmFkZExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBnbG9iYWwuaXBjUmVuZGVyZXIucmVtb3ZlTGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3Qgb25TYXlIaUNsaWNrID0gKCkgPT4ge1xuICAgIGdsb2JhbC5pcGNSZW5kZXJlci5zZW5kKCdtZXNzYWdlJywgJ2hpIGZyb20gbmV4dCcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJQaW5jaCBTdGFjayB8IEhvbWVcIj5cbiAgICAgIDxoMT5IZWxsbyDwn5GLPC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17b25TYXlIaUNsaWNrfT5TYXkgaGk8L2J1dHRvbj5cbiAgICAgIDxwPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XG4gICAgICA8L3A+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiTGluayIsIkxheW91dCIsIkluZGV4UGFnZSIsImhhbmRsZU1lc3NhZ2UiLCJfZXZlbnQiLCJhcmdzIiwiYWxlcnQiLCJnbG9iYWwiLCJpcGNSZW5kZXJlciIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJvblNheUhpQ2xpY2siLCJzZW5kIiwidGl0bGUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./utils/notifications.ts":
/*!********************************!*\
  !*** ./utils/notifications.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst notification = (notificationTitle, notificationBody, terminalMessage)=>{\n    const tt = \"Your change has already saved\";\n    const bd = \"Notification from the Renderer process\";\n    const msg = \"Pinch Stack\";\n    new window.Notification(tt, {\n        body: bd\n    }).onclick = ()=>{\n        document.getElementById(\"output\").innerText = msg;\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (notification);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ub3RpZmljYXRpb25zLnRzIiwibWFwcGluZ3MiOiI7QUFFQSxNQUFNQSxlQUFlLENBQUNDLG1CQUEyQkMsa0JBQTBCQztJQUN6RSxNQUFNQyxLQUFLO0lBQ1gsTUFBTUMsS0FBSztJQUNYLE1BQU1DLE1BQU07SUFFWixJQUFJQyxPQUFPQyxZQUFZLENBQUNKLElBQUk7UUFBRUssTUFBTUo7SUFBRyxHQUFHSyxPQUFPLEdBQUc7UUFDbERDLFNBQVNDLGNBQWMsQ0FBQyxVQUFVQyxTQUFTLEdBQUdQO0lBQ2hEO0FBQ0Y7QUFFQSwrREFBZU4sWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9ub3RpZmljYXRpb25zLnRzPzlkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBub3RpZmljYXRpb24gPSAobm90aWZpY2F0aW9uVGl0bGU6IFN0cmluZywgbm90aWZpY2F0aW9uQm9keTogU3RyaW5nLCB0ZXJtaW5hbE1lc3NhZ2U6IFN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHR0ID0gJ1lvdXIgY2hhbmdlIGhhcyBhbHJlYWR5IHNhdmVkJ1xyXG4gIGNvbnN0IGJkID0gJ05vdGlmaWNhdGlvbiBmcm9tIHRoZSBSZW5kZXJlciBwcm9jZXNzJ1xyXG4gIGNvbnN0IG1zZyA9ICdQaW5jaCBTdGFjaydcclxuXHJcbiAgbmV3IHdpbmRvdy5Ob3RpZmljYXRpb24odHQsIHsgYm9keTogYmQgfSkub25jbGljayA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKS5pbm5lclRleHQgPSBtc2dcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvblxyXG4iXSwibmFtZXMiOlsibm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uVGl0bGUiLCJub3RpZmljYXRpb25Cb2R5IiwidGVybWluYWxNZXNzYWdlIiwidHQiLCJiZCIsIm1zZyIsIndpbmRvdyIsIk5vdGlmaWNhdGlvbiIsImJvZHkiLCJvbmNsaWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/notifications.ts\n"));

/***/ })

});