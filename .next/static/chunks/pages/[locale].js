/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/[locale]"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fproject%2Fsandbox%2Fpages%2F%5Blocale%5D%2Findex.tsx&page=%2F%5Blocale%5D!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fproject%2Fsandbox%2Fpages%2F%5Blocale%5D%2Findex.tsx&page=%2F%5Blocale%5D! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/[locale]\",\n      function () {\n        return __webpack_require__(/*! ./pages/[locale]/index.tsx */ \"./pages/[locale]/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/[locale]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZwcm9qZWN0JTJGc2FuZGJveCUyRnBhZ2VzJTJGJTVCbG9jYWxlJTVEJTJGaW5kZXgudHN4JnBhZ2U9JTJGJTVCbG9jYWxlJTVEIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDhEQUE0QjtBQUNuRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NzU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1tsb2NhbGVdXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9bbG9jYWxlXS9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1tsb2NhbGVdXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fproject%2Fsandbox%2Fpages%2F%5Blocale%5D%2Findex.tsx&page=%2F%5Blocale%5D!\n"));

/***/ }),

/***/ "./components/LocaleSwitcher.tsx":
/*!***************************************!*\
  !*** ./components/LocaleSwitcher.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var i18next_ssg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-ssg */ \"./node_modules/i18next-ssg/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst localeMap = {\n    en: \"English\",\n    zh: \"中文\"\n};\nconst DropdownContent = (param)=>/*#__PURE__*/ {\n    let { options  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: options.map((param)=>/*#__PURE__*/ {\n            let { label , path , locale  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: path,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>{\n                            (0,i18next_ssg__WEBPACK_IMPORTED_MODULE_3__.setUserLocale)(locale);\n                        },\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"/project/sandbox/components/LocaleSwitcher.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/project/sandbox/components/LocaleSwitcher.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, path, false, {\n                fileName: \"/project/sandbox/components/LocaleSwitcher.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_c = DropdownContent;\nfunction LocaleSwitcher() {\n    _s();\n    const { label , options  } = (0,i18next_ssg__WEBPACK_IMPORTED_MODULE_3__.useLocaleSwitcher)({\n        localeMap\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group fixed left-8 top-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                tabIndex: 0,\n                className: \"text-2xl\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/project/sandbox/components/LocaleSwitcher.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                tabIndex: 0,\n                className: \"hidden list-disc text-base group-hover:block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DropdownContent, {\n                    options: options\n                }, void 0, false, {\n                    fileName: \"/project/sandbox/components/LocaleSwitcher.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/project/sandbox/components/LocaleSwitcher.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/sandbox/components/LocaleSwitcher.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(LocaleSwitcher, \"2xUD5bk4I1sAXrw3dj6+zE3DHE0=\", false, function() {\n    return [\n        i18next_ssg__WEBPACK_IMPORTED_MODULE_3__.useLocaleSwitcher\n    ];\n});\n_c1 = LocaleSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocaleSwitcher);\nvar _c, _c1;\n$RefreshReg$(_c, \"DropdownContent\");\n$RefreshReg$(_c1, \"LocaleSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvY2FsZVN3aXRjaGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBQ2tDO0FBRS9ELE1BQU1JLFlBQW9DO0lBQ3hDQyxJQUFJO0lBQ0pDLElBQUk7QUFDTjtBQUVBLE1BQU1DLGtCQUFrQix1QkFTdEI7UUFUdUIsRUFDdkJDLFFBQU8sRUFPUjtXQUNDO2tCQUNHQSxRQUFRQyxHQUFHLENBQUMsdUJBQ1g7Z0JBRFksRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRTttQkFDbkMsOERBQUNDOzBCQUNDLDRFQUFDWixrREFBSUE7b0JBQUNhLE1BQU1IOzhCQUNWLDRFQUFDSTt3QkFDQ0MsU0FBUyxJQUFNOzRCQUNiYiwwREFBYUEsQ0FBQ1M7d0JBQ2hCO2tDQUVDRjs7Ozs7Ozs7Ozs7ZUFQRUM7Ozs7O1FBVUw7O0FBRU47S0F2QkVKO0FBMEJOLFNBQVNVLGlCQUFpQjs7SUFDeEIsTUFBTSxFQUFFUCxNQUFLLEVBQUVGLFFBQU8sRUFBRSxHQUFHTiw4REFBaUJBLENBQUM7UUFBRUU7SUFBVTtJQUN6RCxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNUO2dCQUFNVSxVQUFVO2dCQUFHRCxXQUFVOzBCQUMzQlQ7Ozs7OzswQkFFSCw4REFBQ1c7Z0JBQUdELFVBQVU7Z0JBQUdELFdBQVU7MEJBQ3pCLDRFQUFDWjtvQkFBZ0JDLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQztHQVpTUzs7UUFDb0JmLDBEQUFpQkE7OztNQURyQ2U7QUFjVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvY2FsZVN3aXRjaGVyLnRzeD9iZjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUxvY2FsZVN3aXRjaGVyLCBzZXRVc2VyTG9jYWxlIH0gZnJvbSBcImkxOG5leHQtc3NnXCI7XG5cbmNvbnN0IGxvY2FsZU1hcDogUmVjb3JkPExvY2FsZSwgc3RyaW5nPiA9IHtcbiAgZW46IFwiRW5nbGlzaFwiLFxuICB6aDogXCLkuK3mlodcIixcbn07XG5cbmNvbnN0IERyb3Bkb3duQ29udGVudCA9ICh7XG4gIG9wdGlvbnMsXG59OiB7XG4gIG9wdGlvbnM6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBsb2NhbGU6IExvY2FsZTtcbiAgfVtdO1xufSkgPT4gKFxuICA8PlxuICAgIHtvcHRpb25zLm1hcCgoeyBsYWJlbCwgcGF0aCwgbG9jYWxlIH0pID0+IChcbiAgICAgIDxsaSBrZXk9e3BhdGh9PlxuICAgICAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VyTG9jYWxlKGxvY2FsZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKSl9XG4gIDwvPlxuKTtcblxuZnVuY3Rpb24gTG9jYWxlU3dpdGNoZXIoKSB7XG4gIGNvbnN0IHsgbGFiZWwsIG9wdGlvbnMgfSA9IHVzZUxvY2FsZVN3aXRjaGVyKHsgbG9jYWxlTWFwIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgZml4ZWQgbGVmdC04IHRvcC04XCI+XG4gICAgICA8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImhpZGRlbiBsaXN0LWRpc2MgdGV4dC1iYXNlIGdyb3VwLWhvdmVyOmJsb2NrXCI+XG4gICAgICAgIDxEcm9wZG93bkNvbnRlbnQgb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZVN3aXRjaGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZUxvY2FsZVN3aXRjaGVyIiwic2V0VXNlckxvY2FsZSIsImxvY2FsZU1hcCIsImVuIiwiemgiLCJEcm9wZG93bkNvbnRlbnQiLCJvcHRpb25zIiwibWFwIiwibGFiZWwiLCJwYXRoIiwibG9jYWxlIiwibGkiLCJocmVmIiwic3BhbiIsIm9uQ2xpY2siLCJMb2NhbGVTd2l0Y2hlciIsImRpdiIsImNsYXNzTmFtZSIsInRhYkluZGV4IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LocaleSwitcher.tsx\n"));

/***/ }),

/***/ "./pages/[locale]/index.tsx":
/*!**********************************!*\
  !*** ./pages/[locale]/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var i18next_ssg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-ssg */ \"./node_modules/i18next-ssg/dist/esm/index.js\");\n/* harmony import */ var components_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/LocaleSwitcher */ \"./components/LocaleSwitcher.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction Page() {\n    _s();\n    const { t  } = (0,i18next_ssg__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(\"common\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen flex-col items-center justify-center space-y-8 text-3xl font-bold text-neutral-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: t(\"title\")\n            }, void 0, false, {\n                fileName: \"/project/sandbox/pages/[locale]/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(i18next_ssg__WEBPACK_IMPORTED_MODULE_2__.I18NLink, {\n                href: \"/sansa\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cursor-pointer text-slate-700 underline\",\n                    children: t(\"people.sansa\")\n                }, void 0, false, {\n                    fileName: \"/project/sandbox/pages/[locale]/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/project/sandbox/pages/[locale]/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(i18next_ssg__WEBPACK_IMPORTED_MODULE_2__.I18NLink, {\n                href: \"/arya\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cursor-pointer text-slate-700 underline\",\n                    children: t(\"people.arya\")\n                }, void 0, false, {\n                    fileName: \"/project/sandbox/pages/[locale]/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/project/sandbox/pages/[locale]/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/project/sandbox/pages/[locale]/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/sandbox/pages/[locale]/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function() {\n    return [\n        i18next_ssg__WEBPACK_IMPORTED_MODULE_2__.useTranslation\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbG9jYWxlXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFFNkI7QUFFQTs7QUFFeEMsU0FBU0ksT0FBTzs7SUFDN0IsTUFBTSxFQUFFQyxFQUFDLEVBQUUsR0FBR0osMkRBQWNBLENBQUM7SUFDN0IscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDswQkFBS0QsRUFBRTs7Ozs7OzBCQUNSLDhEQUFDSCxpREFBUUE7Z0JBQUNNLE1BQUs7MEJBQ2IsNEVBQUNDO29CQUFLRixXQUFVOzhCQUNiRixFQUFFOzs7Ozs7Ozs7OzswQkFHUCw4REFBQ0gsaURBQVFBO2dCQUFDTSxNQUFLOzBCQUNiLDRFQUFDQztvQkFBS0YsV0FBVTs4QkFDYkYsRUFBRTs7Ozs7Ozs7Ozs7MEJBR1AsOERBQUNGLGlFQUFjQTs7Ozs7Ozs7Ozs7QUFHckIsQ0FBQztHQWxCdUJDOztRQUNSSCx1REFBY0E7OztLQURORyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbG9jYWxlXS9pbmRleC50c3g/YTE0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBJMThOTGluayB9IGZyb20gXCJpMThuZXh0LXNzZ1wiO1xuaW1wb3J0IHsgbWFrZVN0YXRpY1Byb3BzLCBnZXRTdGF0aWNQYXRocyB9IGZyb20gXCJpMThuZXh0LXNzZy9zZXJ2ZXJcIjtcbmltcG9ydCBMb2NhbGVTd2l0Y2hlciBmcm9tIFwiY29tcG9uZW50cy9Mb2NhbGVTd2l0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS04IHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtODAwXCI+XG4gICAgICA8ZGl2Pnt0KFwidGl0bGVcIil9PC9kaXY+XG4gICAgICA8STE4TkxpbmsgaHJlZj1cIi9zYW5zYVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXNsYXRlLTcwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICB7dChcInBlb3BsZS5zYW5zYVwiKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9JMThOTGluaz5cbiAgICAgIDxJMThOTGluayBocmVmPVwiL2FyeWFcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1zbGF0ZS03MDAgdW5kZXJsaW5lXCI+XG4gICAgICAgICAge3QoXCJwZW9wbGUuYXJ5YVwiKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9JMThOTGluaz5cbiAgICAgIDxMb2NhbGVTd2l0Y2hlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdGF0aWNQcm9wcyA9IG1ha2VTdGF0aWNQcm9wcyhbXCJjb21tb25cIl0pO1xuZXhwb3J0IHsgZ2V0U3RhdGljUGF0aHMsIGdldFN0YXRpY1Byb3BzIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsIkkxOE5MaW5rIiwiTG9jYWxlU3dpdGNoZXIiLCJQYWdlIiwidCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[locale]/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fproject%2Fsandbox%2Fpages%2F%5Blocale%5D%2Findex.tsx&page=%2F%5Blocale%5D!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);