"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"##ffffff\", \"#202023\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#ff17a6\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    },\n    Button: {\n        variants: {\n            \"makegoodButton\": {\n                bg: \"#B22181\",\n                color: \"whiteAlpha.900\",\n                _hover: {\n                    bg: \"#B93295\",\n                    shadow: \"0 4px 6px -2px #dc98ca \"\n                }\n            }\n        }\n    }\n};\nvar fonts = {\n    heading: \"Roboto\"\n};\nvar colors = {\n    grassTeal: \"#B22181\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar shadows = {\n    outline: \"0 0 0 3px #B22181\"\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors,\n    shadows: shadows\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0Q7QUFFN0MsSUFBTUUsTUFBTSxHQUFHO0lBQ2JDLE1BQU0sRUFBRUMsU0FBQUEsS0FBSztlQUFLO1lBQ2hCQyxJQUFJLEVBQUU7Z0JBQ0pDLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQzthQUN2QztTQUNGO0tBQUM7Q0FDSDtBQUVELElBQU1HLFVBQVUsR0FBRztJQUNqQkMsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRTtnQkFDZkMsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG1CQUFtQixFQUFFLFNBQVM7Z0JBQzlCQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNEQyxJQUFJLEVBQUU7UUFDSkMsU0FBUyxFQUFFZCxTQUFBQSxLQUFLO21CQUFLO2dCQUNuQmUsS0FBSyxFQUFFbEIsNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQztnQkFDeENRLG1CQUFtQixFQUFFLENBQUM7YUFDdkI7U0FBQztLQUNIO0lBQ0RRLE1BQU0sRUFBRTtRQUNOWCxRQUFRLEVBQUU7WUFDUixnQkFBZ0IsRUFBRTtnQkFDaEJILEVBQUUsRUFBQyxTQUFTO2dCQUNaYSxLQUFLLEVBQUMsZ0JBQWdCO2dCQUN0QkUsTUFBTSxFQUFFO29CQUNOZixFQUFFLEVBQUUsU0FBUztvQkFDYmdCLE1BQU0sRUFBRSx5QkFBeUI7aUJBQUM7YUFDckM7U0FDRjtLQUVGO0NBRUY7QUFFRCxJQUFNQyxLQUFLLEdBQUc7SUFDWkMsT0FBTyxFQUFFLFFBQVE7Q0FDbEI7QUFFRCxJQUFNQyxNQUFNLEdBQUc7SUFDYkMsU0FBUyxFQUFFLFNBQVM7Q0FDckI7QUFFRCxJQUFNQyxNQUFNLEdBQUc7SUFDYkMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QkMsa0JBQWtCLEVBQUUsSUFBSTtDQUN6QjtBQUVELElBQU1DLE9BQU8sR0FBRztJQUNkQyxPQUFPLEVBQUUsbUJBQW1CO0NBQzdCO0FBR0QsSUFBTUMsS0FBSyxHQUFHaEMsNkRBQVcsQ0FBQztJQUFFMkIsTUFBTSxFQUFOQSxNQUFNO0lBQUV6QixNQUFNLEVBQU5BLE1BQU07SUFBRUssVUFBVSxFQUFWQSxVQUFVO0lBQUVnQixLQUFLLEVBQUxBLEtBQUs7SUFBRUUsTUFBTSxFQUFOQSxNQUFNO0lBQUVLLE9BQU8sRUFBUEEsT0FBTztDQUFFLENBQUM7QUFDakYsK0RBQWVFLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBnbG9iYWw6IHByb3BzID0+ICh7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGJnOiBtb2RlKCcjI2ZmZmZmZicsICcjMjAyMDIzJykocHJvcHMpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICBIZWFkaW5nOiB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICAnc2VjdGlvbi10aXRsZSc6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxyXG4gICAgICAgIG1hcmdpblRvcDogMyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgTGluazoge1xyXG4gICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICBjb2xvcjogbW9kZSgnI2ZmMTdhNicsICcjZmY2M2MzJykocHJvcHMpLFxyXG4gICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIEJ1dHRvbjoge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgJ21ha2Vnb29kQnV0dG9uJzoge1xyXG4gICAgICAgIGJnOicjQjIyMTgxJyxcclxuICAgICAgICBjb2xvcjond2hpdGVBbHBoYS45MDAnLFxyXG4gICAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgICAgYmc6ICcjQjkzMjk1JyxcclxuICAgICAgICAgIHNoYWRvdzogJzAgNHB4IDZweCAtMnB4ICNkYzk4Y2EgJ31cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICBoZWFkaW5nOiAnUm9ib3RvJyxcclxufVxyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gIGdyYXNzVGVhbDogJyNCMjIxODEnLFxyXG59XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZVxyXG59XHJcblxyXG5jb25zdCBzaGFkb3dzID0ge1xyXG4gIG91dGxpbmU6ICcwIDAgMCAzcHggI0IyMjE4MScsXHJcbn1cclxuXHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29uZmlnLCBzdHlsZXMsIGNvbXBvbmVudHMsIGZvbnRzLCBjb2xvcnMsIHNoYWRvd3MgfSlcclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsInRleHRVbmRlcmxpbmVPZmZzZXQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dERlY29yYXRpb25UaGlja25lc3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJMaW5rIiwiYmFzZVN0eWxlIiwiY29sb3IiLCJCdXR0b24iLCJfaG92ZXIiLCJzaGFkb3ciLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJncmFzc1RlYWwiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwic2hhZG93cyIsIm91dGxpbmUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});