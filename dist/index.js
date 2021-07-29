(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Stories", ["React"], factory);
	else if(typeof exports === 'object')
		exports["Stories"] = factory(require("react"));
	else
		root["Stories"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/play.svg":
/*!*****************************!*\
  !*** ./src/assets/play.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: "48",
    stroke: "#fff",
    fill: "#fff",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 511.999 511.999"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M443.86 196.919L141.46 10.514C119.582-2.955 93.131-3.515 70.702 9.016c-22.429 12.529-35.819 35.35-35.819 61.041v371.112c0 38.846 31.3 70.619 69.77 70.829l.313.001c12.022-.001 24.55-3.769 36.251-10.909 9.413-5.743 12.388-18.029 6.645-27.441-5.743-9.414-18.031-12.388-27.441-6.645-5.473 3.338-10.818 5.065-15.553 5.064-14.515-.079-30.056-12.513-30.056-30.898V70.058c0-11.021 5.744-20.808 15.364-26.183 9.621-5.375 20.966-5.135 30.339.636l302.401 186.405c9.089 5.596 14.29 14.927 14.268 25.601-.022 10.673-5.261 19.983-14.4 25.56L204.147 415.945c-9.404 5.758-12.36 18.049-6.602 27.452 5.757 9.404 18.048 12.36 27.452 6.602l218.611-133.852c20.931-12.769 33.457-35.029 33.507-59.55.05-24.518-12.386-46.83-33.255-59.678z"
  }));
});

/***/ }),

/***/ "./src/assets/puff.svg":
/*!*****************************!*\
  !*** ./src/assets/puff.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: "44",
    height: "44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#fff"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
});

/***/ }),

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./../context/Stories */ "./src/context/Stories.ts"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

var Story_1 = __importDefault(__webpack_require__(/*! ./Story */ "./src/components/Story.tsx"));

var ProgressArray_1 = __importDefault(__webpack_require__(/*! ./ProgressArray */ "./src/components/ProgressArray.tsx"));

function default_1() {
  var _react_1$useState = react_1.useState(0),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      currentId = _react_1$useState2[0],
      setCurrentId = _react_1$useState2[1];

  var _react_1$useState3 = react_1.useState(true),
      _react_1$useState4 = _slicedToArray(_react_1$useState3, 2),
      pause = _react_1$useState4[0],
      setPause = _react_1$useState4[1];

  var _react_1$useState5 = react_1.useState(false),
      _react_1$useState6 = _slicedToArray(_react_1$useState5, 2),
      resetTimer = _react_1$useState6[0],
      setResetTimer = _react_1$useState6[1];

  var _react_1$useState7 = react_1.useState(true),
      _react_1$useState8 = _slicedToArray(_react_1$useState7, 2),
      bufferAction = _react_1$useState8[0],
      setBufferAction = _react_1$useState8[1];

  var _react_1$useState9 = react_1.useState(0),
      _react_1$useState10 = _slicedToArray(_react_1$useState9, 2),
      videoDuration = _react_1$useState10[0],
      setVideoDuration = _react_1$useState10[1];

  var mousedownId = react_1.useRef();
  var isMounted = react_1.useRef(true);

  var _react_1$useContext = react_1.useContext(Global_1["default"]),
      width = _react_1$useContext.width,
      height = _react_1$useContext.height,
      loop = _react_1$useContext.loop,
      currentIndex = _react_1$useContext.currentIndex,
      isPaused = _react_1$useContext.isPaused,
      keyboardNavigation = _react_1$useContext.keyboardNavigation,
      _react_1$useContext$s = _react_1$useContext.storyContainerStyles,
      storyContainerStyles = _react_1$useContext$s === void 0 ? {} : _react_1$useContext$s;

  var _react_1$useContext2 = react_1.useContext(Stories_1["default"]),
      stories = _react_1$useContext2.stories;

  react_1.useEffect(function () {
    if (typeof currentIndex === 'number') {
      if (currentIndex >= 0 && currentIndex < stories.length) {
        setCurrentIdWrapper(function () {
          return currentIndex;
        });
      } else {
        console.error('Index out of bounds. Current index was set to value more than the length of stories array.', currentIndex);
      }
    }
  }, [currentIndex]);
  react_1.useEffect(function () {
    if (typeof isPaused === 'boolean') {
      setPause(isPaused);
    }
  }, [isPaused]);
  react_1.useEffect(function () {
    var isClient = typeof window !== 'undefined' && window.document;

    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]); // Cleanup mounted state - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)

  react_1.useEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      previous();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  var toggleState = function toggleState(action, bufferAction) {
    if (action === 'reset') {
      setResetTimer(true);
    } else {
      setPause(action === 'pause');
      setBufferAction(!!bufferAction);
    }
  };

  var setCurrentIdWrapper = function setCurrentIdWrapper(callback) {
    setCurrentId(callback);
    toggleState('pause', true);
  };

  var previous = function previous() {
    setCurrentIdWrapper(function (prev) {
      return prev > 0 ? prev - 1 : prev;
    });
  };

  var next = function next() {
    if (isMounted.current) {
      if (loop) {
        updateNextStoryIdForLoop();
      } else {
        updateNextStoryId();
      }
    }
  };

  var updateNextStoryIdForLoop = function updateNextStoryIdForLoop() {
    setCurrentIdWrapper(function (prev) {
      return (prev + 1) % stories.length;
    });
  };

  var updateNextStoryId = function updateNextStoryId() {
    setCurrentIdWrapper(function (prev) {
      if (prev < stories.length - 1) return prev + 1;
      return prev;
    });
  };

  var debouncePause = function debouncePause(e) {
    e.preventDefault();
    mousedownId.current = setTimeout(function () {
      toggleState('pause');
    }, 200);
  };

  var mouseUp = function mouseUp(type) {
    return function (e) {
      e.preventDefault();
      mousedownId.current && clearTimeout(mousedownId.current);

      if (pause) {
        toggleState('play');
      } else {
        type === 'next' ? next() : previous();
      }
    };
  };

  var getVideoDuration = function getVideoDuration(duration) {
    setVideoDuration(duration * 1000);
  };

  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, storyContainerStyles), styles.container), {
      width: width,
      height: height
    })
  }, react_1["default"].createElement(Progress_1["default"].Provider, {
    value: {
      bufferAction: bufferAction,
      videoDuration: videoDuration,
      currentId: currentId,
      pause: pause,
      next: next
    }
  }, react_1["default"].createElement(ProgressArray_1["default"], {
    resetTimer: resetTimer,
    setResetTimer: setResetTimer
  })), react_1["default"].createElement(Story_1["default"], {
    action: toggleState,
    bufferAction: bufferAction,
    playState: pause,
    story: stories[currentId],
    getVideoDuration: getVideoDuration
  }), react_1["default"].createElement("div", {
    style: styles.overlay
  }, react_1["default"].createElement("div", {
    style: {
      width: '50%',
      zIndex: 999
    },
    onTouchStart: debouncePause,
    onTouchEnd: mouseUp('previous'),
    onMouseDown: debouncePause,
    onMouseUp: mouseUp('previous')
  }), react_1["default"].createElement("div", {
    style: {
      width: '50%',
      zIndex: 999
    },
    onTouchStart: debouncePause,
    onTouchEnd: mouseUp('next'),
    onMouseDown: debouncePause,
    onMouseUp: mouseUp('next')
  })));
}

exports["default"] = default_1;
var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#111',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: 'inherit',
    width: 'inherit',
    display: 'flex'
  }
};

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var Header = function Header(_ref) {
  var profileImage = _ref.profileImage,
      heading = _ref.heading,
      subheading = _ref.subheading;
  return react_1["default"].createElement("div", {
    style: styles.main
  }, profileImage && react_1["default"].createElement("img", {
    style: styles.img,
    src: profileImage
  }), react_1["default"].createElement("span", {
    style: styles.text
  }, react_1["default"].createElement("p", {
    style: styles.heading
  }, heading), react_1["default"].createElement("p", {
    style: styles.subheading
  }, subheading)));
};

var styles = {
  main: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
  },
  heading: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    marginBottom: 2
  },
  subheading: {
    fontSize: '0.6rem',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0
  }
};
exports["default"] = Header;

/***/ }),

/***/ "./src/components/Play.tsx":
/*!*********************************!*\
  !*** ./src/components/Play.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var play_svg_1 = __importDefault(__webpack_require__(/*! ./../assets/play.svg */ "./src/assets/play.svg"));

var Play = function Play() {
  return react_1["default"].createElement(play_svg_1["default"], null);
};

exports["default"] = Play;

/***/ }),

/***/ "./src/components/Progress.tsx":
/*!*************************************!*\
  !*** ./src/components/Progress.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var ProgressWrapper_1 = __importDefault(__webpack_require__(/*! ./ProgressWrapper */ "./src/components/ProgressWrapper.tsx"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

exports["default"] = function (props) {
  var _react_1$useContext = react_1.useContext(Progress_1["default"]),
      bufferAction = _react_1$useContext.bufferAction,
      pause = _react_1$useContext.pause;

  var _react_1$useState = react_1.useState(false),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      show = _react_1$useState2[0],
      setShow = _react_1$useState2[1];

  react_1.useEffect(function () {
    setShow(!pause);
  }, [pause]);

  var getProgressStyle = function getProgressStyle(_ref) {
    var active = _ref.active;

    switch (active) {
      case 2:
        return {
          width: '100%'
        };

      case 1:
        return {
          transform: "scaleX(".concat(props.count / 100, ")")
        };

      case 0:
        return {
          width: 0
        };

      default:
        return {
          width: 0
        };
    }
  };

  var width = props.width,
      active = props.active;
  return react_1["default"].createElement(ProgressWrapper_1["default"], {
    width: width,
    pause: pause,
    bufferAction: bufferAction
  }, react_1["default"].createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, getProgressStyle({
      active: active
    })), styles.inner), {
      opacity: show ? 1 : 0
    })
  }));
};

var styles = {
  inner: {
    background: '#fff',
    height: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    transformOrigin: 'center left',
    translate: ' left',
    transition: "opacity 2s",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitPerspective: 1000,
    MozPerspective: 1000,
    msPerspective: 1000,
    perspective: 1000
  }
};

/***/ }),

/***/ "./src/components/ProgressArray.tsx":
/*!******************************************!*\
  !*** ./src/components/ProgressArray.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./Progress */ "./src/components/Progress.tsx"));

var Progress_2 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./../context/Stories */ "./src/context/Stories.ts"));

exports["default"] = function (_ref) {
  var resetTimer = _ref.resetTimer,
      setResetTimer = _ref.setResetTimer;

  var _react_1$useState = react_1.useState(0),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      count = _react_1$useState2[0],
      setCount = _react_1$useState2[1];

  var _react_1$useContext = react_1.useContext(Progress_2["default"]),
      currentId = _react_1$useContext.currentId,
      next = _react_1$useContext.next,
      videoDuration = _react_1$useContext.videoDuration,
      pause = _react_1$useContext.pause;

  var _react_1$useContext2 = react_1.useContext(Global_1["default"]),
      defaultInterval = _react_1$useContext2.defaultInterval,
      onStoryEnd = _react_1$useContext2.onStoryEnd,
      onStoryStart = _react_1$useContext2.onStoryStart,
      onAllStoriesEnd = _react_1$useContext2.onAllStoriesEnd;

  var _react_1$useContext3 = react_1.useContext(Stories_1["default"]),
      stories = _react_1$useContext3.stories;

  react_1.useEffect(function () {
    setCount(0);
  }, [currentId, stories]);
  react_1.useEffect(function () {
    if (resetTimer) {
      setCount(0);
      setResetTimer(false);
    }
  }, [resetTimer]);
  react_1.useEffect(function () {
    if (pause) {
      cancelAnimationFrame(animationFrameId.current);
    } else {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    }
  }, [currentId, pause]);
  var animationFrameId = react_1.useRef();
  var countCopy = count;

  var incrementCount = function incrementCount() {
    if (countCopy === 0) storyStartCallback();
    setCount(function (count) {
      var interval = getCurrentInterval();
      countCopy = count + 100 / (interval / 1000 * 60);
      return count + 100 / (interval / 1000 * 60);
    });

    if (countCopy < 100) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    } else {
      storyEndCallback();

      if (currentId === stories.length - 1) {
        allStoriesEndCallback();
      }

      cancelAnimationFrame(animationFrameId.current);
      next();
    }
  };

  var storyStartCallback = function storyStartCallback() {
    onStoryStart && onStoryStart(currentId, stories[currentId]);
  };

  var storyEndCallback = function storyEndCallback() {
    onStoryEnd && onStoryEnd(currentId, stories[currentId]);
  };

  var allStoriesEndCallback = function allStoriesEndCallback() {
    onAllStoriesEnd && onAllStoriesEnd(currentId, stories);
  };

  var getCurrentInterval = function getCurrentInterval() {
    if (stories[currentId].type === 'video') return videoDuration;
    if (typeof stories[currentId].duration === 'number') return stories[currentId].duration;
    return defaultInterval;
  };

  return react_1["default"].createElement("div", {
    style: styles.progressArr
  }, stories.map(function (_, i) {
    return react_1["default"].createElement(Progress_1["default"], {
      key: i,
      count: count,
      width: 1 / stories.length,
      active: i === currentId ? 1 : i < currentId ? 2 : 0
    });
  }));
};

var styles = {
  progressArr: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    flexWrap: 'row',
    position: 'absolute',
    width: '98%',
    padding: 5,
    paddingTop: 7,
    alignSelf: 'center',
    zIndex: 99,
    filter: 'drop-shadow(0 1px 8px #222)'
  }
};

/***/ }),

/***/ "./src/components/ProgressWrapper.tsx":
/*!********************************************!*\
  !*** ./src/components/ProgressWrapper.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var ProgressWrapper = function ProgressWrapper(props) {
  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign({}, styles.progress), getProgressWrapperStyle(props))
  }, props.children);
};

var getProgressWrapperStyle = function getProgressWrapperStyle(_ref) {
  var width = _ref.width,
      pause = _ref.pause,
      bufferAction = _ref.bufferAction;
  return {
    width: "".concat(width * 100, "%"),
    opacity: pause && !bufferAction ? 0 : 1
  };
};

var styles = {
  progress: {
    height: 2,
    maxWidth: '100%',
    background: '#555',
    margin: 2,
    borderRadius: 2,
    transition: 'opacity 400ms ease-in-out'
  }
};
exports["default"] = ProgressWrapper;

/***/ }),

/***/ "./src/components/SeeMore.tsx":
/*!************************************!*\
  !*** ./src/components/SeeMore.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

function seeMore(props) {
  var SeeMoreContent = props.seeMoreContent;
  var CustomCollapsed = props.customCollapsed;

  var _react_1$useContext = react_1.useContext(Global_1["default"]),
      keyboardNavigation = _react_1$useContext.keyboardNavigation;

  react_1.useEffect(function () {
    var isClient = typeof window !== 'undefined' && window.document;

    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]);

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      props.toggleMore(true);
    } else if (e.key === 'ArrowDown' || e.key === 'Escape') {
      e.preventDefault();
      props.toggleMore(false);
    }
  };

  return props.showContent ? react_1["default"].createElement("div", {
    style: styles.seeMoreExpanded
  }, react_1["default"].createElement(SeeMoreContent, {
    close: function close() {
      return props.toggleMore(false);
    }
  })) : CustomCollapsed ? react_1["default"].createElement(CustomCollapsed, {
    action: props.action,
    toggleMore: props.toggleMore
  }) : react_1["default"].createElement("div", {
    style: styles.seeMore,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      props.toggleMore(true);
    }
  }, react_1["default"].createElement("span", {
    style: styles.seeMoreIcon
  }, "\u2303"), react_1["default"].createElement("span", {
    style: styles.seeMoreText
  }, "See more"));
}

exports["default"] = seeMore;
var styles = {
  seeMore: {
    height: "10vh",
    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 0
  },
  seeMoreExpanded: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    zIndex: 99999
  },
  seeMoreText: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.1em",
    marginBottom: "2.2vh",
    textTransform: "capitalize",
    opacity: "1",
    fontSize: "0.8em",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreIcon: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.2em",
    marginBottom: "0.4vh",
    opacity: "1",
    filter: "drop-shadow(0 0 5px black)",
    textTransform: "capitalize",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreClose: {
    position: "absolute",
    filter: "drop-shadow(0 3px 2px #ccc)",
    right: "0.5rem",
    top: "0.5rem",
    fontSize: "1.5rem",
    opacity: "0.7",
    padding: "1rem"
  }
};

/***/ }),

/***/ "./src/components/Spinner.tsx":
/*!************************************!*\
  !*** ./src/components/Spinner.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var puff_svg_1 = __importDefault(__webpack_require__(/*! ./../assets/puff.svg */ "./src/assets/puff.svg"));

var Spinner = function Spinner() {
  return react_1["default"].createElement(puff_svg_1["default"], null);
};

exports["default"] = Spinner;

/***/ }),

/***/ "./src/components/Story.tsx":
/*!**********************************!*\
  !*** ./src/components/Story.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Story = function Story(props) {
  var globalContext = react_1.useContext(Global_1["default"]);
  var width = globalContext.width,
      height = globalContext.height,
      loader = globalContext.loader,
      header = globalContext.header,
      storyStyles = globalContext.storyStyles;

  var rendererMessageHandler = function rendererMessageHandler(type, data) {
    switch (type) {
      case 'UPDATE_VIDEO_DURATION':
        props.getVideoDuration(data.duration);
        return {
          ack: 'OK'
        };
    }
  };

  var getStoryContent = function getStoryContent() {
    var InnerContent = props.story.content;
    var config = {
      width: width,
      height: height,
      loader: loader,
      header: header,
      storyStyles: storyStyles
    };
    return react_1["default"].createElement(InnerContent, {
      action: props.action,
      isPaused: props.playState,
      story: props.story,
      config: config,
      messageHandler: rendererMessageHandler
    });
  };

  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign({}, styles.story), {
      width: width,
      height: height
    })
  }, getStoryContent());
};

var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
    alignItems: "center"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};
exports["default"] = Story;

/***/ }),

/***/ "./src/context/Global.ts":
/*!*******************************!*\
  !*** ./src/context/Global.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialContext = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports.initialContext = {
  defaultInterval: 4000,
  width: 360,
  height: 640
};
var GlobalContext = react_1["default"].createContext(exports.initialContext);
exports["default"] = GlobalContext;

/***/ }),

/***/ "./src/context/Progress.ts":
/*!*********************************!*\
  !*** ./src/context/Progress.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports["default"] = react_1["default"].createContext({
  currentId: 0,
  videoDuration: 0,
  bufferAction: false,
  pause: false,
  next: function next() {}
});

/***/ }),

/***/ "./src/context/Stories.ts":
/*!********************************!*\
  !*** ./src/context/Stories.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialContext = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports.initialContext = {
  stories: []
};
var StoriesContext = react_1["default"].createContext(exports.initialContext);
exports["default"] = StoriesContext;

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithSeeMore = exports.WithHeader = void 0;

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Container_1 = __importDefault(__webpack_require__(/*! ./components/Container */ "./src/components/Container.tsx"));

var Global_1 = __importDefault(__webpack_require__(/*! ./context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./context/Stories */ "./src/context/Stories.ts"));

var renderers_1 = __webpack_require__(/*! ./util/renderers */ "./src/util/renderers.tsx");

var index_1 = __webpack_require__(/*! ./renderers/index */ "./src/renderers/index.ts");

var withHeader_1 = __importDefault(__webpack_require__(/*! ./renderers/wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./renderers/wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

var ReactInstaStories = function ReactInstaStories(props) {
  var renderers = props.renderers ? props.renderers.concat(index_1.renderers) : index_1.renderers;
  var context = {
    width: props.width,
    height: props.height,
    loader: props.loader,
    header: props.header,
    storyContainerStyles: props.storyContainerStyles,
    storyStyles: props.storyStyles,
    loop: props.loop,
    defaultInterval: props.defaultInterval,
    isPaused: props.isPaused,
    currentIndex: props.currentIndex,
    onStoryStart: props.onStoryStart,
    onStoryEnd: props.onStoryEnd,
    onAllStoriesEnd: props.onAllStoriesEnd,
    keyboardNavigation: props.keyboardNavigation
  };

  var _react_1$useState = react_1.useState({
    stories: generateStories(props.stories, renderers)
  }),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      stories = _react_1$useState2[0],
      setStories = _react_1$useState2[1];

  react_1.useEffect(function () {
    setStories({
      stories: generateStories(props.stories, renderers)
    });
  }, [props.stories, props.renderers]);
  return react_1["default"].createElement(Global_1["default"].Provider, {
    value: context
  }, react_1["default"].createElement(Stories_1["default"].Provider, {
    value: stories
  }, react_1["default"].createElement(Container_1["default"], null)));
};

var generateStories = function generateStories(stories, renderers) {
  return stories.map(function (s) {
    var story = {};

    if (typeof s === 'string') {
      story.url = s;
      story.type = 'image';
    } else if (_typeof(s) === 'object') {
      story = Object.assign(story, s);
    }

    var renderer = renderers_1.getRenderer(story, renderers);
    story.originalContent = story.content;
    story.content = renderer;
    return story;
  });
};

ReactInstaStories.defaultProps = {
  width: 360,
  height: 640,
  defaultInterval: 4000
};
exports.WithHeader = withHeader_1["default"];
exports.WithSeeMore = withSeeMore_1["default"];
exports["default"] = ReactInstaStories;

/***/ }),

/***/ "./src/renderers/AutoPlayContent.tsx":
/*!*******************************************!*\
  !*** ./src/renderers/AutoPlayContent.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

exports.renderer = function (props) {
  React.useEffect(function () {
    props.action('play');
  }, [props.story]);
  var Content = props.story.originalContent;
  return React.createElement(Content, Object.assign({}, props));
};

exports.tester = function (story) {
  return {
    condition: !!story.content,
    priority: 2
  };
};

exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Default.tsx":
/*!***********************************!*\
  !*** ./src/renderers/Default.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action;
  React.useEffect(function () {
    action('play');
  }, [story]);
  return React.createElement("div", {
    style: styles.storyContent
  }, React.createElement("p", {
    style: styles.text
  }, "This story could not be loaded."));
};

var styles = {
  storyContent: {
    width: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  text: {
    textAlign: 'center',
    color: 'white',
    width: '90%',
    margin: 'auto'
  }
};

exports.tester = function () {
  return {
    condition: true,
    priority: 1
  };
};

exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Image.tsx":
/*!*********************************!*\
  !*** ./src/renderers/Image.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var Spinner_1 = __importDefault(__webpack_require__(/*! ../components/Spinner */ "./src/components/Spinner.tsx"));

var withHeader_1 = __importDefault(__webpack_require__(/*! ./wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action,
      isPaused = _ref.isPaused,
      config = _ref.config;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var width = config.width,
      height = config.height,
      loader = config.loader,
      storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});

  var imageLoaded = function imageLoaded() {
    setLoaded(true);
    action('play');
  };

  return React.createElement(withHeader_1["default"], {
    story: story,
    globalHeader: config.header
  }, React.createElement(withSeeMore_1["default"], {
    story: story,
    action: action
  }, React.createElement("div", null, React.createElement("img", {
    style: computedStyles,
    src: story.url,
    onLoad: imageLoaded
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1["default"], null)))));
};

var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};

exports.tester = function (story) {
  return {
    condition: !story.content && (!story.type || story.type === 'image'),
    priority: 2
  };
};

exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Video.tsx":
/*!*********************************!*\
  !*** ./src/renderers/Video.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var Spinner_1 = __importDefault(__webpack_require__(/*! ../components/Spinner */ "./src/components/Spinner.tsx"));

var Play_1 = __importDefault(__webpack_require__(/*! ../components/Play */ "./src/components/Play.tsx"));

var withHeader_1 = __importDefault(__webpack_require__(/*! ./wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action,
      isPaused = _ref.isPaused,
      config = _ref.config,
      messageHandler = _ref.messageHandler;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      paying = _React$useState4[0],
      setPlaying = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      muted = _React$useState6[0],
      setMuted = _React$useState6[1];

  var loader = config.loader,
      storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});
  var vid = React.useRef(null);
  React.useEffect(function () {
    if (vid.current) {
      if (isPaused) {
        vid.current.pause();
      } else {
        vid.current.play()["catch"](function () {});
      }
    }
  }, [isPaused]);

  var onWaiting = function onWaiting() {
    action("pause", true);
  };

  var onPlaying = function onPlaying() {
    action("play", true);
  };

  var videoLoaded = function videoLoaded() {
    messageHandler('UPDATE_VIDEO_DURATION', {
      duration: vid.current.duration
    });
    setLoaded(true);
    vid.current.play().then(function () {
      setPlaying(true);
      action('play');
    })["catch"](function () {
      setMuted(true);
      vid.current.play().then(function () {
        setPlaying(true);
        action('play');
      })["catch"](function () {
        action('pause');
        action('reset');
        setPlaying(false);
      });
    });
  };

  var handleVideoPlay = function handleVideoPlay() {
    messageHandler('UPDATE_VIDEO_DURATION', {
      duration: vid.current.duration
    });
    vid.current.play().then(function () {
      setPlaying(true);
      action('play');
    })["catch"](function () {
      setPlaying(false);
      action('pause');
    });
  };

  return React.createElement(withHeader_1["default"], {
    story: story,
    globalHeader: config.header
  }, React.createElement(withSeeMore_1["default"], {
    story: story,
    action: action
  }, React.createElement("div", {
    style: styles.videoContainer
  }, !paying && loaded && React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    },
    onClick: handleVideoPlay
  }, React.createElement(Play_1["default"], null)), React.createElement("video", {
    ref: vid,
    style: computedStyles,
    src: story.url,
    controls: false,
    onLoadedData: videoLoaded,
    playsInline: true,
    onWaiting: onWaiting,
    onPlaying: onPlaying,
    muted: muted,
    autoPlay: true,
    "webkit-playsinline": "true"
  }), !loaded && React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1["default"], null)))));
};

var styles = {
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  videoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

exports.tester = function (story) {
  return {
    condition: story.type === 'video',
    priority: 2
  };
};

exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/index.ts":
/*!********************************!*\
  !*** ./src/renderers/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderers = void 0;

var Image_1 = __importDefault(__webpack_require__(/*! ./Image */ "./src/renderers/Image.tsx"));

var Video_1 = __importDefault(__webpack_require__(/*! ./Video */ "./src/renderers/Video.tsx"));

var Default_1 = __importDefault(__webpack_require__(/*! ./Default */ "./src/renderers/Default.tsx"));

var AutoPlayContent_1 = __importDefault(__webpack_require__(/*! ./AutoPlayContent */ "./src/renderers/AutoPlayContent.tsx"));

exports.renderers = [Image_1["default"], Video_1["default"], AutoPlayContent_1["default"], Default_1["default"]];

/***/ }),

/***/ "./src/renderers/wrappers/withHeader.tsx":
/*!***********************************************!*\
  !*** ./src/renderers/wrappers/withHeader.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var Header_1 = __importDefault(__webpack_require__(/*! ./../../components/Header */ "./src/components/Header.tsx"));

var withHeader = function withHeader(_ref) {
  var story = _ref.story,
      globalHeader = _ref.globalHeader,
      children = _ref.children;
  return react_1["default"].createElement(react_1["default"].Fragment, null, children, story.header && react_1["default"].createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 20,
      zIndex: 19
    }
  }, _typeof(story) === "object" ? globalHeader ? globalHeader(story.header) : react_1["default"].createElement(Header_1["default"], {
    heading: story.header.heading,
    subheading: story.header.subheading,
    profileImage: story.header.profileImage
  }) : null));
};

exports["default"] = withHeader;

/***/ }),

/***/ "./src/renderers/wrappers/withSeeMore.tsx":
/*!************************************************!*\
  !*** ./src/renderers/wrappers/withSeeMore.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var SeeMore_1 = __importDefault(__webpack_require__(/*! ./../../components/SeeMore */ "./src/components/SeeMore.tsx"));

var withSeeMore = function withSeeMore(_ref) {
  var story = _ref.story,
      action = _ref.action,
      customCollapsed = _ref.customCollapsed,
      children = _ref.children;

  var _react_1$useState = react_1.useState(false),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      showMore = _react_1$useState2[0],
      setShowMore = _react_1$useState2[1];

  var toggleMore = function toggleMore(show) {
    action(show ? 'pause' : 'play');
    setShowMore(show);
  };

  var CollapsedComponent = SeeMore_1["default"];
  return react_1["default"].createElement(react_1["default"].Fragment, null, children, story.seeMore && react_1["default"].createElement("div", {
    style: {
      position: "absolute",
      margin: "auto",
      bottom: showMore ? 'unset' : 0,
      zIndex: 9999,
      width: "100%",
      height: showMore ? '100%' : 'auto'
    }
  }, react_1["default"].createElement(CollapsedComponent, {
    action: action,
    toggleMore: toggleMore,
    showContent: showMore,
    seeMoreContent: story.seeMore,
    customCollapsed: customCollapsed || story.seeMoreCollapsed
  })));
};

exports["default"] = withSeeMore;

/***/ }),

/***/ "./src/util/renderers.tsx":
/*!********************************!*\
  !*** ./src/util/renderers.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderer = void 0;

exports.getRenderer = function (story, renderers) {
  var probable = renderers.map(function (r) {
    return Object.assign(Object.assign({}, r), {
      testerResult: r.tester(story)
    });
  }).filter(function (r) {
    return r.testerResult.condition;
  });
  probable.sort(function (a, b) {
    return b.testerResult.priority - a.testerResult.priority;
  });
  return probable[0].renderer;
};

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvYXNzZXRzL3BsYXkuc3ZnIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvYXNzZXRzL3B1ZmYuc3ZnIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9QbGF5LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3MudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0FycmF5LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3NXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvU2VlTW9yZS50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9TdG9yeS50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb250ZXh0L0dsb2JhbC50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvUHJvZ3Jlc3MudHMiLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb250ZXh0L1N0b3JpZXMudHMiLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvQXV0b1BsYXlDb250ZW50LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9EZWZhdWx0LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9JbWFnZS50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvVmlkZW8udHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL2luZGV4LnRzIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL3dyYXBwZXJzL3dpdGhIZWFkZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL3dyYXBwZXJzL3dpdGhTZWVNb3JlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3V0aWwvcmVuZGVyZXJzLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iXSwibmFtZXMiOlsic3R5bGVzIiwicHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNB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QUtMLFdBQUM7QUFBQSxXQUFJLENBQUMsQ0FBQyxZQUFGLENBQWUsU0FBbkI7QUFBQSxHQUxJLENBQWY7QUFNQSxVQUFRLENBQUMsSUFBVCxDQUFjLFVBQUMsQ0FBRCxFQUFJLENBQUo7QUFBQSxXQUFVLENBQUMsQ0FBQyxZQUFGLENBQWUsUUFBZixHQUEwQixDQUFDLENBQUMsWUFBRixDQUFlLFFBQW5EO0FBQUEsR0FBZDtBQUNBLFNBQU8sUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLFFBQW5CO0FBQ0gsQ0FUWSxDOzs7Ozs7Ozs7OztBQ0ZiLG1EIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdG9yaWVzXCIsIFtcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN0b3JpZXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3Rvcmllc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0ICgoe1xuICBzdHlsZXMgPSB7fSxcbiAgLi4ucHJvcHNcbn0pID0+IDxzdmcgd2lkdGg9XCI0OFwiIHN0cm9rZT1cIiNmZmZcIiBmaWxsPVwiI2ZmZlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMS45OTkgNTExLjk5OVwiIHsuLi5wcm9wc30+PHBhdGggZD1cIk00NDMuODYgMTk2LjkxOUwxNDEuNDYgMTAuNTE0QzExOS41ODItMi45NTUgOTMuMTMxLTMuNTE1IDcwLjcwMiA5LjAxNmMtMjIuNDI5IDEyLjUyOS0zNS44MTkgMzUuMzUtMzUuODE5IDYxLjA0MXYzNzEuMTEyYzAgMzguODQ2IDMxLjMgNzAuNjE5IDY5Ljc3IDcwLjgyOWwuMzEzLjAwMWMxMi4wMjItLjAwMSAyNC41NS0zLjc2OSAzNi4yNTEtMTAuOTA5IDkuNDEzLTUuNzQzIDEyLjM4OC0xOC4wMjkgNi42NDUtMjcuNDQxLTUuNzQzLTkuNDE0LTE4LjAzMS0xMi4zODgtMjcuNDQxLTYuNjQ1LTUuNDczIDMuMzM4LTEwLjgxOCA1LjA2NS0xNS41NTMgNS4wNjQtMTQuNTE1LS4wNzktMzAuMDU2LTEyLjUxMy0zMC4wNTYtMzAuODk4VjcwLjA1OGMwLTExLjAyMSA1Ljc0NC0yMC44MDggMTUuMzY0LTI2LjE4MyA5LjYyMS01LjM3NSAyMC45NjYtNS4xMzUgMzAuMzM5LjYzNmwzMDIuNDAxIDE4Ni40MDVjOS4wODkgNS41OTYgMTQuMjkgMTQuOTI3IDE0LjI2OCAyNS42MDEtLjAyMiAxMC42NzMtNS4yNjEgMTkuOTgzLTE0LjQgMjUuNTZMMjA0LjE0NyA0MTUuOTQ1Yy05LjQwNCA1Ljc1OC0xMi4zNiAxOC4wNDktNi42MDIgMjcuNDUyIDUuNzU3IDkuNDA0IDE4LjA0OCAxMi4zNiAyNy40NTIgNi42MDJsMjE4LjYxMS0xMzMuODUyYzIwLjkzMS0xMi43NjkgMzMuNDU3LTM1LjAyOSAzMy41MDctNTkuNTUuMDUtMjQuNTE4LTEyLjM4Ni00Ni44My0zMy4yNTUtNTkuNjc4elwiIC8+PC9zdmc+KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKHtcbiAgc3R5bGVzID0ge30sXG4gIC4uLnByb3BzXG59KSA9PiA8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI0NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9XCIjZmZmXCIgey4uLnByb3BzfT48ZyBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIHN0cm9rZVdpZHRoPVwiMlwiPjxjaXJjbGUgY3g9XCIyMlwiIGN5PVwiMjJcIiByPVwiMVwiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgYmVnaW49XCIwc1wiIGR1cj1cIjEuOHNcIiB2YWx1ZXM9XCIxOyAyMFwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOyAxXCIga2V5U3BsaW5lcz1cIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlLW9wYWNpdHlcIiBiZWdpbj1cIjBzXCIgZHVyPVwiMS44c1wiIHZhbHVlcz1cIjE7IDBcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsgMVwiIGtleVNwbGluZXM9XCIwLjMsIDAuNjEsIDAuMzU1LCAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgLz48L2NpcmNsZT48Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjIyXCIgcj1cIjFcIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIGJlZ2luPVwiLTAuOXNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMjBcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsgMVwiIGtleVNwbGluZXM9XCIwLjE2NSwgMC44NCwgMC40NCwgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIC8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInN0cm9rZS1vcGFjaXR5XCIgYmVnaW49XCItMC45c1wiIGR1cj1cIjEuOHNcIiB2YWx1ZXM9XCIxOyAwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4zLCAwLjYxLCAwLjM1NSwgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIC8+PC9jaXJjbGU+PC9nPjwvc3ZnPik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSAnLi8uLi9jb250ZXh0L0dsb2JhbCdcbmltcG9ydCBTdG9yaWVzQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvU3RvcmllcydcbmltcG9ydCBQcm9ncmVzc0NvbnRleHQgZnJvbSAnLi8uLi9jb250ZXh0L1Byb2dyZXNzJ1xuaW1wb3J0IFN0b3J5IGZyb20gJy4vU3RvcnknXG5pbXBvcnQgUHJvZ3Jlc3NBcnJheSBmcm9tICcuL1Byb2dyZXNzQXJyYXknXG5pbXBvcnQgeyBHbG9iYWxDdHgsIFN0b3JpZXNDb250ZXh0IGFzIFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgW2N1cnJlbnRJZCwgc2V0Q3VycmVudElkXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgICBjb25zdCBbcGF1c2UsIHNldFBhdXNlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG4gICAgY29uc3QgW3Jlc2V0VGltZXIsIHNldFJlc2V0VGltZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgW2J1ZmZlckFjdGlvbiwgc2V0QnVmZmVyQWN0aW9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG4gICAgY29uc3QgW3ZpZGVvRHVyYXRpb24sIHNldFZpZGVvRHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuXG4gICAgbGV0IG1vdXNlZG93bklkID0gdXNlUmVmPGFueT4oKTtcbiAgICBsZXQgaXNNb3VudGVkID0gdXNlUmVmPGJvb2xlYW4+KHRydWUpO1xuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb29wLCBjdXJyZW50SW5kZXgsIGlzUGF1c2VkLCBrZXlib2FyZE5hdmlnYXRpb24sIHN0b3J5Q29udGFpbmVyU3R5bGVzID0ge30gfSA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4PihHbG9iYWxDb250ZXh0KTtcbiAgICBjb25zdCB7IHN0b3JpZXMgfSA9IHVzZUNvbnRleHQ8U3Rvcmllc0NvbnRleHRJbnRlcmZhY2U+KFN0b3JpZXNDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+PSAwICYmIGN1cnJlbnRJbmRleCA8IHN0b3JpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcigoKSA9PiBjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZGV4IG91dCBvZiBib3VuZHMuIEN1cnJlbnQgaW5kZXggd2FzIHNldCB0byB2YWx1ZSBtb3JlIHRoYW4gdGhlIGxlbmd0aCBvZiBzdG9yaWVzIGFycmF5LicsIGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50SW5kZXhdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpc1BhdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBzZXRQYXVzZShpc1BhdXNlZClcbiAgICAgICAgfVxuICAgIH0sIFtpc1BhdXNlZF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICBpZiAoaXNDbGllbnQgJiYgKHR5cGVvZiBrZXlib2FyZE5hdmlnYXRpb24gPT09ICdib29sZWFuJyAmJiBrZXlib2FyZE5hdmlnYXRpb24pKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBba2V5Ym9hcmROYXZpZ2F0aW9uXSk7XG5cbiAgICAvLyBDbGVhbnVwIG1vdW50ZWQgc3RhdGUgLSBmb3IgaXNzdWUgIzEzMCAoaHR0cHM6Ly9naXRodWIuY29tL21vaGl0azA1L3JlYWN0LWluc3RhLXN0b3JpZXMvaXNzdWVzLzEzMClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICBwcmV2aW91cygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVTdGF0ZSA9IChhY3Rpb246IHN0cmluZywgYnVmZmVyQWN0aW9uPzogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSAncmVzZXQnKSB7XG4gICAgICAgICAgICBzZXRSZXNldFRpbWVyKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UGF1c2UoYWN0aW9uID09PSAncGF1c2UnKVxuICAgICAgICAgICAgc2V0QnVmZmVyQWN0aW9uKCEhYnVmZmVyQWN0aW9uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q3VycmVudElkV3JhcHBlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SWQoY2FsbGJhY2spO1xuICAgICAgICB0b2dnbGVTdGF0ZSgncGF1c2UnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcihwcmV2ID0+IHByZXYgPiAwID8gcHJldiAtIDEgOiBwcmV2KVxuICAgIH1cblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVOZXh0U3RvcnlJZEZvckxvb3AoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVOZXh0U3RvcnlJZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlTmV4dFN0b3J5SWRGb3JMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SWRXcmFwcGVyKHByZXYgPT4gKHByZXYgKyAxKSAlIHN0b3JpZXMubGVuZ3RoKVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZU5leHRTdG9yeUlkID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SWRXcmFwcGVyKHByZXYgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXYgPCBzdG9yaWVzLmxlbmd0aCAtIDEpIHJldHVybiBwcmV2ICsgMVxuICAgICAgICAgICAgcmV0dXJuIHByZXZcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkZWJvdW5jZVBhdXNlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5Ub3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBtb3VzZWRvd25JZC5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVTdGF0ZSgncGF1c2UnKVxuICAgICAgICB9LCAyMDApXG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VVcCA9ICh0eXBlOiBzdHJpbmcpID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbW91c2Vkb3duSWQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQobW91c2Vkb3duSWQuY3VycmVudClcbiAgICAgICAgaWYgKHBhdXNlKSB7XG4gICAgICAgICAgICB0b2dnbGVTdGF0ZSgncGxheScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0eXBlID09PSAnbmV4dCcgPyBuZXh0KCkgOiBwcmV2aW91cygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRWaWRlb0R1cmF0aW9uID0gKGR1cmF0aW9uOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0VmlkZW9EdXJhdGlvbihkdXJhdGlvbiAqIDEwMDApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdG9yeUNvbnRhaW5lclN0eWxlcywgLi4uc3R5bGVzLmNvbnRhaW5lciwgLi4ueyB3aWR0aCwgaGVpZ2h0IH0gfX0+XG4gICAgICAgICAgICA8UHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgYnVmZmVyQWN0aW9uOiBidWZmZXJBY3Rpb24sXG4gICAgICAgICAgICAgICAgdmlkZW9EdXJhdGlvbjogdmlkZW9EdXJhdGlvbixcbiAgICAgICAgICAgICAgICBjdXJyZW50SWQsXG4gICAgICAgICAgICAgICAgcGF1c2UsXG4gICAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPFByb2dyZXNzQXJyYXkgcmVzZXRUaW1lcj17cmVzZXRUaW1lcn0gc2V0UmVzZXRUaW1lcj17c2V0UmVzZXRUaW1lcn0gLz5cbiAgICAgICAgICAgIDwvUHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgPFN0b3J5XG4gICAgICAgICAgICAgICAgYWN0aW9uPXt0b2dnbGVTdGF0ZX1cbiAgICAgICAgICAgICAgICBidWZmZXJBY3Rpb249e2J1ZmZlckFjdGlvbn1cbiAgICAgICAgICAgICAgICBwbGF5U3RhdGU9e3BhdXNlfVxuICAgICAgICAgICAgICAgIHN0b3J5PXtzdG9yaWVzW2N1cnJlbnRJZF19XG4gICAgICAgICAgICAgICAgZ2V0VmlkZW9EdXJhdGlvbj17Z2V0VmlkZW9EdXJhdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMub3ZlcmxheX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzUwJScsIHpJbmRleDogOTk5IH19IG9uVG91Y2hTdGFydD17ZGVib3VuY2VQYXVzZX0gb25Ub3VjaEVuZD17bW91c2VVcCgncHJldmlvdXMnKX0gb25Nb3VzZURvd249e2RlYm91bmNlUGF1c2V9IG9uTW91c2VVcD17bW91c2VVcCgncHJldmlvdXMnKX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgekluZGV4OiA5OTkgfX0gb25Ub3VjaFN0YXJ0PXtkZWJvdW5jZVBhdXNlfSBvblRvdWNoRW5kPXttb3VzZVVwKCduZXh0Jyl9IG9uTW91c2VEb3duPXtkZWJvdW5jZVBhdXNlfSBvbk1vdXNlVXA9e21vdXNlVXAoJ25leHQnKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMxMTEnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkZXJQcm9wcyB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcblxuY29uc3QgSGVhZGVyID0gKHsgcHJvZmlsZUltYWdlLCBoZWFkaW5nLCBzdWJoZWFkaW5nIH06IEhlYWRlclByb3BzKSA9PlxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge3Byb2ZpbGVJbWFnZSAmJiA8aW1nIHN0eWxlPXtzdHlsZXMuaW1nfSBzcmM9e3Byb2ZpbGVJbWFnZX0gLz59XG4gICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmhlYWRpbmd9PntoZWFkaW5nfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuc3ViaGVhZGluZ30+e3N1YmhlYWRpbmd9PC9wPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBtYWluOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogNDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3coMCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KSknLFxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJ1xuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjkpKSdcbiAgICB9LFxuICAgIGhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgIH0sXG4gICAgc3ViaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogJzAuNnJlbScsXG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJyxcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsYXlTVkcgZnJvbSAnLi8uLi9hc3NldHMvcGxheS5zdmcnO1xuXG5jb25zdCBQbGF5ID0gKCkgPT4ge1xuICAgIHJldHVybiA8UGxheVNWRyAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5OyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc1Byb3BzLCBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgUHJvZ3Jlc3NXcmFwcGVyIGZyb20gJy4vUHJvZ3Jlc3NXcmFwcGVyJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9ncmVzc1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBidWZmZXJBY3Rpb24sIHBhdXNlIH0gPSB1c2VDb250ZXh0PFByb2dyZXNzQ29udGV4dD4oUHJvZ3Jlc3NDdHgpXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTaG93KCFwYXVzZSk7XG4gICAgfSwgW3BhdXNlXSlcblxuXG4gICAgY29uc3QgZ2V0UHJvZ3Jlc3NTdHlsZSA9ICh7IGFjdGl2ZSB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aXZlKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6ICcxMDAlJyB9XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHJhbnNmb3JtOiBgc2NhbGVYKCR7cHJvcHMuY291bnQgLyAxMDB9KWAgfVxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiAwIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IDAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyB3aWR0aCwgYWN0aXZlIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm9ncmVzc1dyYXBwZXIgd2lkdGg9e3dpZHRofSBwYXVzZT17cGF1c2V9IGJ1ZmZlckFjdGlvbj17YnVmZmVyQWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5nZXRQcm9ncmVzc1N0eWxlKHsgYWN0aXZlIH0pLCAuLi5zdHlsZXMuaW5uZXIsIG9wYWNpdHk6IHNob3cgPyAxIDogMCB9fSAvPlxuICAgICAgICA8L1Byb2dyZXNzV3JhcHBlcj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlczogYW55ID0ge1xuICAgIGlubmVyOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGxlZnQnLFxuICAgICAgICB0cmFuc2xhdGU6ICcgbGVmdCcsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAyc1wiLFxuICAgICAgICBXZWJraXRCYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBNb3pCYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBtc0JhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG5cbiAgICAgICAgV2Via2l0UGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIE1velBlcnNwZWN0aXZlOiAxMDAwLFxuICAgICAgICBtc1BlcnNwZWN0aXZlOiAxMDAwLFxuICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMFxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9Qcm9ncmVzcydcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCwgR2xvYmFsQ3R4LCBTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBQcm9ncmVzc0N0eCBmcm9tICcuLy4uL2NvbnRleHQvUHJvZ3Jlc3MnXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IFN0b3JpZXNDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9TdG9yaWVzJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyByZXNldFRpbWVyLCBzZXRSZXNldFRpbWVyIH0pID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgICBjb25zdCB7IGN1cnJlbnRJZCwgbmV4dCwgdmlkZW9EdXJhdGlvbiwgcGF1c2UgfSA9IHVzZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0PihQcm9ncmVzc0N0eClcbiAgICBjb25zdCB7IGRlZmF1bHRJbnRlcnZhbCwgb25TdG9yeUVuZCwgb25TdG9yeVN0YXJ0LCBvbkFsbFN0b3JpZXNFbmQgfSA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4PihHbG9iYWxDb250ZXh0KTtcbiAgICBjb25zdCB7IHN0b3JpZXMgfSA9IHVzZUNvbnRleHQ8U3Rvcmllc0NvbnRleHRJbnRlcmZhY2U+KFN0b3JpZXNDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50KDApXG4gICAgfSwgW2N1cnJlbnRJZCwgc3Rvcmllc10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocmVzZXRUaW1lcikge1xuICAgICAgICAgICAgc2V0Q291bnQoMClcbiAgICAgICAgICAgIHNldFJlc2V0VGltZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgW3Jlc2V0VGltZXJdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHBhdXNlKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaW5jcmVtZW50Q291bnQpXG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudElkLCBwYXVzZV0pXG5cbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZCA9IHVzZVJlZjxudW1iZXI+KClcblxuICAgIGxldCBjb3VudENvcHkgPSBjb3VudDtcbiAgICBjb25zdCBpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvdW50Q29weSA9PT0gMCkgc3RvcnlTdGFydENhbGxiYWNrKClcbiAgICAgICAgc2V0Q291bnQoKGNvdW50OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gZ2V0Q3VycmVudEludGVydmFsKClcbiAgICAgICAgICAgIGNvdW50Q29weSA9IGNvdW50ICsgKDEwMCAvICgoaW50ZXJ2YWwgLyAxMDAwKSAqIDYwKSlcbiAgICAgICAgICAgIHJldHVybiBjb3VudCArICgxMDAgLyAoKGludGVydmFsIC8gMTAwMCkgKiA2MCkpXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjb3VudENvcHkgPCAxMDApIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpbmNyZW1lbnRDb3VudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3J5RW5kQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SWQgPT09IHN0b3JpZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGFsbFN0b3JpZXNFbmRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50KTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3J5U3RhcnRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgb25TdG9yeVN0YXJ0ICYmIG9uU3RvcnlTdGFydChjdXJyZW50SWQsIHN0b3JpZXNbY3VycmVudElkXSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yeUVuZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBvblN0b3J5RW5kICYmIG9uU3RvcnlFbmQoY3VycmVudElkLCBzdG9yaWVzW2N1cnJlbnRJZF0pXG4gICAgfVxuXG4gICAgY29uc3QgYWxsU3Rvcmllc0VuZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBvbkFsbFN0b3JpZXNFbmQgJiYgb25BbGxTdG9yaWVzRW5kKGN1cnJlbnRJZCwgc3RvcmllcylcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50SW50ZXJ2YWwgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdG9yaWVzW2N1cnJlbnRJZF0udHlwZSA9PT0gJ3ZpZGVvJykgcmV0dXJuIHZpZGVvRHVyYXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBzdG9yaWVzW2N1cnJlbnRJZF0uZHVyYXRpb24gPT09ICdudW1iZXInKSByZXR1cm4gc3Rvcmllc1tjdXJyZW50SWRdLmR1cmF0aW9uXG4gICAgICAgIHJldHVybiBkZWZhdWx0SW50ZXJ2YWxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucHJvZ3Jlc3NBcnJ9PlxuICAgICAgICAgICAge3N0b3JpZXMubWFwKChfLCBpKSA9PlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEgLyBzdG9yaWVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpID09PSBjdXJyZW50SWQgPyAxIDogKGkgPCBjdXJyZW50SWQgPyAyIDogMCl9XG4gICAgICAgICAgICAgICAgLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBwcm9ncmVzc0Fycjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZmxleFdyYXA6ICdyb3cnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICc5OCUnLFxuICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICBwYWRkaW5nVG9wOiA3LFxuICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICB6SW5kZXg6IDk5LFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDFweCA4cHggIzIyMiknXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzV3JhcHBlclByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBQcm9ncmVzc1dyYXBwZXIgPSAocHJvcHM6IFByb2dyZXNzV3JhcHBlclByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMucHJvZ3Jlc3MsIC4uLmdldFByb2dyZXNzV3JhcHBlclN0eWxlKHByb3BzKSB9fT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBnZXRQcm9ncmVzc1dyYXBwZXJTdHlsZSA9ICh7IHdpZHRoLCBwYXVzZSwgYnVmZmVyQWN0aW9uIH0pID0+ICh7XG4gICAgd2lkdGg6IGAke3dpZHRoICogMTAwfSVgLFxuICAgIG9wYWNpdHk6IHBhdXNlICYmICFidWZmZXJBY3Rpb24gPyAwIDogMVxufSlcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHByb2dyZXNzOiB7XG4gICAgICAgIGhlaWdodDogMixcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyM1NTUnLFxuICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgNDAwbXMgZWFzZS1pbi1vdXQnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc1dyYXBwZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IHsgR2xvYmFsQ3R4IH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgU2VlTW9yZVByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWVNb3JlKHByb3BzOiBTZWVNb3JlUHJvcHMpIHtcbiAgICBjb25zdCBTZWVNb3JlQ29udGVudCA9IHByb3BzLnNlZU1vcmVDb250ZW50O1xuICAgIGNvbnN0IEN1c3RvbUNvbGxhcHNlZCA9IHByb3BzLmN1c3RvbUNvbGxhcHNlZDtcblxuICAgIGNvbnN0IHsga2V5Ym9hcmROYXZpZ2F0aW9uIH0gPSB1c2VDb250ZXh0PEdsb2JhbEN0eD4oR2xvYmFsQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICBpZiAoaXNDbGllbnQgJiYgKHR5cGVvZiBrZXlib2FyZE5hdmlnYXRpb24gPT09ICdib29sZWFuJyAmJiBrZXlib2FyZE5hdmlnYXRpb24pKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBba2V5Ym9hcmROYXZpZ2F0aW9uXSlcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgcHJvcHMuc2hvd0NvbnRlbnRcbiAgICAgICAgICAgID8gPGRpdiBzdHlsZT17c3R5bGVzLnNlZU1vcmVFeHBhbmRlZH0+XG4gICAgICAgICAgICAgICAgPFNlZU1vcmVDb250ZW50IGNsb3NlPXsoKSA9PiBwcm9wcy50b2dnbGVNb3JlKGZhbHNlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgKEN1c3RvbUNvbGxhcHNlZCA/IDxDdXN0b21Db2xsYXBzZWQgYWN0aW9uPXtwcm9wcy5hY3Rpb259IHRvZ2dsZU1vcmU9e3Byb3BzLnRvZ2dsZU1vcmV9IC8+IDogPGRpdiBzdHlsZT17c3R5bGVzLnNlZU1vcmV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcHJvcHMudG9nZ2xlTW9yZSh0cnVlKVxuICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc2VlTW9yZUljb259PuKMgzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnNlZU1vcmVUZXh0fT5TZWUgbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzOiBhbnkgPSB7XG4gICAgc2VlTW9yZToge1xuICAgICAgICBoZWlnaHQ6IFwiMTB2aFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMikpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgIGJvdHRvbTogMFxuICAgIH0sXG4gICAgc2VlTW9yZUV4cGFuZGVkOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgekluZGV4OiA5OTk5OVxuICAgIH0sXG4gICAgc2VlTW9yZVRleHQ6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMWVtXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIyLjJ2aFwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOGVtXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dFwiXG4gICAgfSxcbiAgICBzZWVNb3JlSWNvbjoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4yZW1cIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjAuNHZoXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMCAwIDVweCBibGFjaylcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dFwiXG4gICAgfSxcbiAgICBzZWVNb3JlQ2xvc2U6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDAgM3B4IDJweCAjY2NjKVwiLFxuICAgICAgICByaWdodDogXCIwLjVyZW1cIixcbiAgICAgICAgdG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcbiAgICAgICAgb3BhY2l0eTogXCIwLjdcIixcbiAgICAgICAgcGFkZGluZzogXCIxcmVtXCJcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyU1ZHIGZyb20gJy4vLi4vYXNzZXRzL3B1ZmYuc3ZnJztcblxuY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gPFNwaW5uZXJTVkcgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RvcnlQcm9wcywgR2xvYmFsQ3R4IH0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4vLi4vY29udGV4dC9HbG9iYWxcIjtcblxuY29uc3QgU3RvcnkgPSAocHJvcHM6IFN0b3J5UHJvcHMpID0+IHtcblx0Y29uc3QgZ2xvYmFsQ29udGV4dCA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4Pihcblx0XHRHbG9iYWxDb250ZXh0XG5cdCk7XG5cblx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIGhlYWRlciwgc3RvcnlTdHlsZXMgfSA9IGdsb2JhbENvbnRleHQ7XG5cblx0Y29uc3QgcmVuZGVyZXJNZXNzYWdlSGFuZGxlciA9ICh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4ge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnVVBEQVRFX1ZJREVPX0RVUkFUSU9OJzpcblx0XHRcdFx0cHJvcHMuZ2V0VmlkZW9EdXJhdGlvbihkYXRhLmR1cmF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHsgYWNrOiAnT0snIGFzICdPSycgfVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGdldFN0b3J5Q29udGVudCA9ICgpID0+IHtcblx0XHRsZXQgSW5uZXJDb250ZW50ID0gcHJvcHMuc3RvcnkuY29udGVudDtcblx0XHRsZXQgY29uZmlnID0geyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIGhlYWRlciwgc3RvcnlTdHlsZXMgfTtcblx0XHRyZXR1cm4gPElubmVyQ29udGVudFxuXHRcdFx0YWN0aW9uPXtwcm9wcy5hY3Rpb259XG5cdFx0XHRpc1BhdXNlZD17cHJvcHMucGxheVN0YXRlfVxuXHRcdFx0c3Rvcnk9e3Byb3BzLnN0b3J5fVxuXHRcdFx0Y29uZmlnPXtjb25maWd9XG5cdFx0XHRtZXNzYWdlSGFuZGxlcj17cmVuZGVyZXJNZXNzYWdlSGFuZGxlcn1cblx0XHQvPlxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e3sgLi4uc3R5bGVzLnN0b3J5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH19XG5cdFx0PlxuXHRcdFx0e2dldFN0b3J5Q29udGVudCgpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRzdG9yeToge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIlxuXHR9LFxuXHRzdG9yeUNvbnRlbnQ6IHtcblx0XHR3aWR0aDogXCJhdXRvXCIsXG5cdFx0bWF4V2lkdGg6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIlxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iYWxDdHggfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDb250ZXh0ID0ge1xuXHRkZWZhdWx0SW50ZXJ2YWw6IDQwMDAsXG5cdHdpZHRoOiAzNjAsXG5cdGhlaWdodDogNjQwLFxufTtcblxuY29uc3QgR2xvYmFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8R2xvYmFsQ3R4Pihpbml0aWFsQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0Pih7XG4gICAgY3VycmVudElkOiAwLFxuICAgIHZpZGVvRHVyYXRpb246IDAsXG4gICAgYnVmZmVyQWN0aW9uOiBmYWxzZSxcbiAgICBwYXVzZTogZmFsc2UsXG4gICAgbmV4dDogKCkgPT4geyB9XG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSxcblx0U3RvcnksXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbnRleHQ6IHsgc3RvcmllczogU3RvcnlbXSB9ID0ge1xuXHRzdG9yaWVzOiBbXSxcbn07XG5cbmNvbnN0IFN0b3JpZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTdG9yaWVzQ29udGV4dEludGVyZmFjZT4oXG5cdGluaXRpYWxDb250ZXh0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWFjdEluc3RhU3Rvcmllc1Byb3BzLCBHbG9iYWxDdHgsIFN0b3J5LCBUZXN0ZXIsIFJlbmRlcmVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSAnLi9jb250ZXh0L0dsb2JhbCdcbmltcG9ydCBTdG9yaWVzQ29udGV4dCBmcm9tICcuL2NvbnRleHQvU3Rvcmllcyc7XG5pbXBvcnQgeyBnZXRSZW5kZXJlciB9IGZyb20gJy4vdXRpbC9yZW5kZXJlcnMnXG5pbXBvcnQgeyByZW5kZXJlcnMgYXMgZGVmYXVsdFJlbmRlcmVycyB9IGZyb20gJy4vcmVuZGVyZXJzL2luZGV4JztcbmltcG9ydCB3aXRoSGVhZGVyIGZyb20gJy4vcmVuZGVyZXJzL3dyYXBwZXJzL3dpdGhIZWFkZXInXG5pbXBvcnQgd2l0aFNlZU1vcmUgZnJvbSAnLi9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aFNlZU1vcmUnXG5cbmNvbnN0IFJlYWN0SW5zdGFTdG9yaWVzID0gZnVuY3Rpb24gKHByb3BzOiBSZWFjdEluc3RhU3Rvcmllc1Byb3BzKSB7XG4gICAgbGV0IHJlbmRlcmVycyA9IHByb3BzLnJlbmRlcmVycyA/IHByb3BzLnJlbmRlcmVycy5jb25jYXQoZGVmYXVsdFJlbmRlcmVycykgOiBkZWZhdWx0UmVuZGVyZXJzO1xuICAgIGxldCBjb250ZXh0OiBHbG9iYWxDdHggPSB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGxvYWRlcjogcHJvcHMubG9hZGVyLFxuICAgICAgICBoZWFkZXI6IHByb3BzLmhlYWRlcixcbiAgICAgICAgc3RvcnlDb250YWluZXJTdHlsZXM6IHByb3BzLnN0b3J5Q29udGFpbmVyU3R5bGVzLFxuICAgICAgICBzdG9yeVN0eWxlczogcHJvcHMuc3RvcnlTdHlsZXMsXG4gICAgICAgIGxvb3A6IHByb3BzLmxvb3AsXG4gICAgICAgIGRlZmF1bHRJbnRlcnZhbDogcHJvcHMuZGVmYXVsdEludGVydmFsLFxuICAgICAgICBpc1BhdXNlZDogcHJvcHMuaXNQYXVzZWQsXG4gICAgICAgIGN1cnJlbnRJbmRleDogcHJvcHMuY3VycmVudEluZGV4LFxuICAgICAgICBvblN0b3J5U3RhcnQ6IHByb3BzLm9uU3RvcnlTdGFydCxcbiAgICAgICAgb25TdG9yeUVuZDogcHJvcHMub25TdG9yeUVuZCxcbiAgICAgICAgb25BbGxTdG9yaWVzRW5kOiBwcm9wcy5vbkFsbFN0b3JpZXNFbmQsXG4gICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbjogcHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uXG4gICAgfVxuICAgIGNvbnN0IFtzdG9yaWVzLCBzZXRTdG9yaWVzXSA9IHVzZVN0YXRlPHsgc3RvcmllczogU3RvcnlbXSB9Pih7IHN0b3JpZXM6IGdlbmVyYXRlU3Rvcmllcyhwcm9wcy5zdG9yaWVzLCByZW5kZXJlcnMpIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFN0b3JpZXMoeyBzdG9yaWVzOiBnZW5lcmF0ZVN0b3JpZXMocHJvcHMuc3RvcmllcywgcmVuZGVyZXJzKSB9KTtcbiAgICB9LCBbcHJvcHMuc3RvcmllcywgcHJvcHMucmVuZGVyZXJzXSk7XG5cbiAgICByZXR1cm4gPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAgICA8U3Rvcmllc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JpZXN9PlxuICAgICAgICAgICAgPENvbnRhaW5lciAvPlxuICAgICAgICA8L1N0b3JpZXNDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuY29uc3QgZ2VuZXJhdGVTdG9yaWVzID0gKHN0b3JpZXM6IFN0b3J5W10sIHJlbmRlcmVyczogeyByZW5kZXJlcjogUmVuZGVyZXIsIHRlc3RlcjogVGVzdGVyIH1bXSkgPT4ge1xuICAgIHJldHVybiBzdG9yaWVzLm1hcChzID0+IHtcbiAgICAgICAgbGV0IHN0b3J5OiBTdG9yeSA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0b3J5LnVybCA9IHM7XG4gICAgICAgICAgICBzdG9yeS50eXBlID0gJ2ltYWdlJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHN0b3J5ID0gT2JqZWN0LmFzc2lnbihzdG9yeSwgcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVuZGVyZXIgPSBnZXRSZW5kZXJlcihzdG9yeSwgcmVuZGVyZXJzKTtcbiAgICAgICAgc3Rvcnkub3JpZ2luYWxDb250ZW50ID0gc3RvcnkuY29udGVudDtcbiAgICAgICAgc3RvcnkuY29udGVudCA9IHJlbmRlcmVyO1xuICAgICAgICByZXR1cm4gc3RvcnlcbiAgICB9KVxufTtcblxuUmVhY3RJbnN0YVN0b3JpZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiAzNjAsXG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgZGVmYXVsdEludGVydmFsOiA0MDAwXG59XG5cbmV4cG9ydCBjb25zdCBXaXRoSGVhZGVyID0gd2l0aEhlYWRlcjtcbmV4cG9ydCBjb25zdCBXaXRoU2VlTW9yZSA9IHdpdGhTZWVNb3JlO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdEluc3RhU3RvcmllcyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHByb3BzKSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcHJvcHMuYWN0aW9uKCdwbGF5Jyk7XG4gICAgfSwgW3Byb3BzLnN0b3J5XSlcbiAgICBjb25zdCBDb250ZW50ID0gcHJvcHMuc3Rvcnkub3JpZ2luYWxDb250ZW50O1xuICAgIHJldHVybiA8Q29udGVudCB7Li4ucHJvcHN9IC8+XG59XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9IChzdG9yeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmRpdGlvbjogISFzdG9yeS5jb250ZW50LFxuICAgICAgICBwcmlvcml0eTogMlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcmVyLFxuICAgIHRlc3RlclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHsgc3RvcnksIGFjdGlvbiB9KSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYWN0aW9uKCdwbGF5Jyk7XG4gICAgfSwgW3N0b3J5XSlcblxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZXMuc3RvcnlDb250ZW50fT5cbiAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy50ZXh0fT5UaGlzIHN0b3J5IGNvdWxkIG5vdCBiZSBsb2FkZWQuPC9wPlxuICAgIDwvZGl2PlxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgc3RvcnlDb250ZW50OiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIlxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgd2lkdGg6ICc5MCUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246IHRydWUsXG4gICAgICAgIHByaW9yaXR5OiAxXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcmVyLFxuICAgIHRlc3RlclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgeyBSZW5kZXJlciwgVGVzdGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBXaXRoSGVhZGVyIGZyb20gJy4vd3JhcHBlcnMvd2l0aEhlYWRlcic7XG5pbXBvcnQgV2l0aFNlZU1vcmUgZnJvbSAnLi93cmFwcGVycy93aXRoU2VlTW9yZSc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAoeyBzdG9yeSwgYWN0aW9uLCBpc1BhdXNlZCwgY29uZmlnIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbG9hZGVyLCBzdG9yeVN0eWxlcyB9ID0gY29uZmlnO1xuICAgIGxldCBjb21wdXRlZFN0eWxlcyA9IHtcbiAgICAgICAgLi4uc3R5bGVzLnN0b3J5Q29udGVudCxcbiAgICAgICAgLi4uKHN0b3J5U3R5bGVzIHx8IHt9KVxuICAgIH1cblxuICAgIGNvbnN0IGltYWdlTG9hZGVkID0gKCkgPT4ge1xuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgIGFjdGlvbigncGxheScpO1xuICAgIH1cblxuICAgIHJldHVybiA8V2l0aEhlYWRlciBzdG9yeT17c3Rvcnl9IGdsb2JhbEhlYWRlcj17Y29uZmlnLmhlYWRlcn0+XG4gICAgICAgIDxXaXRoU2VlTW9yZSBzdG9yeT17c3Rvcnl9IGFjdGlvbj17YWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y29tcHV0ZWRTdHlsZXN9IHNyYz17c3RvcnkudXJsfSBvbkxvYWQ9e2ltYWdlTG9hZGVkfSAvPlxuICAgICAgICAgICAgICAgIHshbG9hZGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNjY2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRlciB8fCA8U3Bpbm5lciAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1dpdGhTZWVNb3JlPlxuICAgIDwvV2l0aEhlYWRlcj5cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHN0b3J5OiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgIH0sXG4gICAgc3RvcnlDb250ZW50OiB7XG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RlcjogVGVzdGVyID0gKHN0b3J5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uZGl0aW9uOiAhc3RvcnkuY29udGVudCAmJiAoIXN0b3J5LnR5cGUgfHwgc3RvcnkudHlwZSA9PT0gJ2ltYWdlJyksXG4gICAgICAgIHByaW9yaXR5OiAyXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyZXIsXG4gICAgdGVzdGVyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCBQbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvUGxheSc7XG5pbXBvcnQgeyBSZW5kZXJlciwgVGVzdGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBXaXRoSGVhZGVyIGZyb20gJy4vd3JhcHBlcnMvd2l0aEhlYWRlcic7XG5pbXBvcnQgV2l0aFNlZU1vcmUgZnJvbSAnLi93cmFwcGVycy93aXRoU2VlTW9yZSc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAoeyBzdG9yeSwgYWN0aW9uLCBpc1BhdXNlZCwgY29uZmlnLCBtZXNzYWdlSGFuZGxlciB9KSA9PiB7XG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcGF5aW5nLCBzZXRQbGF5aW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFttdXRlZCwgc2V0TXV0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgbG9hZGVyLCBzdG9yeVN0eWxlcyB9ID0gY29uZmlnO1xuXG4gICAgbGV0IGNvbXB1dGVkU3R5bGVzID0ge1xuICAgICAgICAuLi5zdHlsZXMuc3RvcnlDb250ZW50LFxuICAgICAgICAuLi4oc3RvcnlTdHlsZXMgfHwge30pXG4gICAgfVxuXG4gICAgbGV0IHZpZCA9IFJlYWN0LnVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh2aWQuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKGlzUGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdmlkLmN1cnJlbnQucGF1c2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkLmN1cnJlbnQucGxheSgpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaXNQYXVzZWRdKTtcblxuICAgIGNvbnN0IG9uV2FpdGluZyA9ICgpID0+IHtcbiAgICAgICAgYWN0aW9uKFwicGF1c2VcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25QbGF5aW5nID0gKCkgPT4ge1xuICAgICAgICBhY3Rpb24oXCJwbGF5XCIsIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZGVvTG9hZGVkID0gKCkgPT4ge1xuICAgICAgICBtZXNzYWdlSGFuZGxlcignVVBEQVRFX1ZJREVPX0RVUkFUSU9OJywgeyBkdXJhdGlvbjogdmlkLmN1cnJlbnQuZHVyYXRpb24gfSk7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgdmlkLmN1cnJlbnQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UGxheWluZyh0cnVlKTtcbiAgICAgICAgICAgIGFjdGlvbigncGxheScpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRNdXRlZCh0cnVlKTtcbiAgICAgICAgICAgIHZpZC5jdXJyZW50LnBsYXkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQbGF5aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIGFjdGlvbigncGxheScpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbigncGF1c2UnKTtcbiAgICAgICAgICAgICAgICBhY3Rpb24oJ3Jlc2V0Jyk7XG4gICAgICAgICAgICAgICAgc2V0UGxheWluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWaWRlb1BsYXkgPSAoKSA9PiB7XG4gICAgICAgIG1lc3NhZ2VIYW5kbGVyKCdVUERBVEVfVklERU9fRFVSQVRJT04nLCB7IGR1cmF0aW9uOiB2aWQuY3VycmVudC5kdXJhdGlvbiB9KTtcblxuICAgICAgICB2aWQuY3VycmVudC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQbGF5aW5nKHRydWUpO1xuICAgICAgICAgICAgYWN0aW9uKCdwbGF5Jyk7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBsYXlpbmcoZmFsc2UpO1xuICAgICAgICAgICAgYWN0aW9uKCdwYXVzZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gPFdpdGhIZWFkZXIgc3Rvcnk9e3N0b3J5fSBnbG9iYWxIZWFkZXI9e2NvbmZpZy5oZWFkZXJ9PlxuICAgICAgICA8V2l0aFNlZU1vcmUgc3Rvcnk9e3N0b3J5fSBhY3Rpb249e2FjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudmlkZW9Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHsoIXBheWluZyAmJiBsb2FkZWQpICYmIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVmlkZW9QbGF5fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxQbGF5IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICByZWY9e3ZpZH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbXB1dGVkU3R5bGVzfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3N0b3J5LnVybH1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRlZERhdGE9e3ZpZGVvTG9hZGVkfVxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICAgICAgICAgICAgICBvbldhaXRpbmc9e29uV2FpdGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25QbGF5aW5nPXtvblBsYXlpbmd9XG4gICAgICAgICAgICAgICAgICAgIG11dGVkPXttdXRlZH1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgICAgICAgd2Via2l0LXBsYXlzaW5saW5lPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7IWxvYWRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVyIHx8IDxTcGlubmVyIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV2l0aFNlZU1vcmU+XG4gICAgPC9XaXRoSGVhZGVyPlxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgc3RvcnlDb250ZW50OiB7XG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiXG4gICAgfSxcbiAgICB2aWRlb0NvbnRhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdGVyOiBUZXN0ZXIgPSAoc3RvcnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246IHN0b3J5LnR5cGUgPT09ICd2aWRlbycsXG4gICAgICAgIHByaW9yaXR5OiAyXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyZXIsXG4gICAgdGVzdGVyXG59XG4iLCJpbXBvcnQgaW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQgdmlkZW8gZnJvbSAnLi9WaWRlbyc7XG5pbXBvcnQgZGVmYXVsdFJlbmRlcmVyIGZyb20gJy4vRGVmYXVsdCc7XG5pbXBvcnQgYXV0b3BsYXlDb250ZW50IGZyb20gJy4vQXV0b1BsYXlDb250ZW50JztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVycyA9IFtpbWFnZSwgdmlkZW8sIGF1dG9wbGF5Q29udGVudCwgZGVmYXVsdFJlbmRlcmVyXTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdG9yeSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5jb25zdCB3aXRoSGVhZGVyOiBSZWFjdC5GQzx7IHN0b3J5OiBTdG9yeSwgZ2xvYmFsSGVhZGVyOiBGdW5jdGlvbiB9PiA9ICh7IHN0b3J5LCBnbG9iYWxIZWFkZXIsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gPD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7c3RvcnkuaGVhZGVyICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgbGVmdDogMTIsIHRvcDogMjAsIHpJbmRleDogMTkgfX0+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBzdG9yeSA9PT0gXCJvYmplY3RcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsSGVhZGVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsSGVhZGVyKHN0b3J5LmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e3N0b3J5LmhlYWRlci5oZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJoZWFkaW5nPXtzdG9yeS5oZWFkZXIuc3ViaGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUltYWdlPXtzdG9yeS5oZWFkZXIucHJvZmlsZUltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50VHlwZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY3Rpb24sIFNlZU1vcmVQcm9wcywgU3RvcnkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBTZWVNb3JlIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvU2VlTW9yZVwiO1xuXG5jb25zdCB3aXRoU2VlTW9yZTogUmVhY3QuRkM8e1xuICAgIHN0b3J5OiBTdG9yeSxcbiAgICBhY3Rpb246IEFjdGlvbixcbiAgICBjdXN0b21Db2xsYXBzZWQ/OiBTZWVNb3JlUHJvcHNbXCJjdXN0b21Db2xsYXBzZWRcIl1cbn0+ID0gKHsgc3RvcnksIGFjdGlvbiwgY3VzdG9tQ29sbGFwc2VkLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3Nob3dNb3JlLCBzZXRTaG93TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlTW9yZSA9IChzaG93KSA9PiB7XG4gICAgICAgIGFjdGlvbihzaG93ID8gJ3BhdXNlJyA6ICdwbGF5Jyk7XG4gICAgICAgIHNldFNob3dNb3JlKHNob3cpO1xuICAgIH1cbiAgICBjb25zdCBDb2xsYXBzZWRDb21wb25lbnQgPSBTZWVNb3JlO1xuICAgIHJldHVybiA8PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtzdG9yeS5zZWVNb3JlICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHNob3dNb3JlID8gJ3Vuc2V0JyA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNob3dNb3JlID8gJzEwMCUnIDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29sbGFwc2VkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNb3JlPXt0b2dnbGVNb3JlfVxuICAgICAgICAgICAgICAgICAgICBzaG93Q29udGVudD17c2hvd01vcmV9XG4gICAgICAgICAgICAgICAgICAgIHNlZU1vcmVDb250ZW50PXtzdG9yeS5zZWVNb3JlfVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Db2xsYXBzZWQ9e2N1c3RvbUNvbGxhcHNlZCB8fCBzdG9yeS5zZWVNb3JlQ29sbGFwc2VkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlZU1vcmU7IiwiaW1wb3J0IHsgUmVuZGVyZXIsIFN0b3J5LCBUZXN0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVuZGVyZXIgPSAoc3Rvcnk6IFN0b3J5LCByZW5kZXJlcnM6IHsgcmVuZGVyZXI6IFJlbmRlcmVyLCB0ZXN0ZXI6IFRlc3RlciB9W10pOiBSZW5kZXJlciA9PiB7XG4gICAgbGV0IHByb2JhYmxlID0gcmVuZGVyZXJzLm1hcChyID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICB0ZXN0ZXJSZXN1bHQ6IHIudGVzdGVyKHN0b3J5KVxuICAgICAgICB9XG4gICAgfSkuZmlsdGVyKHIgPT4gci50ZXN0ZXJSZXN1bHQuY29uZGl0aW9uKTtcbiAgICBwcm9iYWJsZS5zb3J0KChhLCBiKSA9PiBiLnRlc3RlclJlc3VsdC5wcmlvcml0eSAtIGEudGVzdGVyUmVzdWx0LnByaW9yaXR5KTtcbiAgICByZXR1cm4gcHJvYmFibGVbMF0ucmVuZGVyZXI7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==