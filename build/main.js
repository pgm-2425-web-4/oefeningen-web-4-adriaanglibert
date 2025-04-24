/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/animations/flip.js":
/*!****************************************!*\
  !*** ./src/scripts/animations/flip.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initFlipAnimation() {
  var $flipItems = document.querySelectorAll("[data-animation='flip']");
  $flipItems.forEach(function ($flipItem) {
    var html = $flipItem.innerHTML.split('</svg>');
    var svg = html[0];
    var text = html[1];
    $flipItem.innerHTML = "".concat(svg, " <div>\n            <span>").concat(text, "</span>\n            <span>").concat(text, "</span>\n        </div>");
    var $flipParent = $flipItem.querySelector('div');
    var $flipChildren = $flipParent.querySelectorAll('span');
    var $flipChild = $flipParent.querySelector('span:nth-child(2)');
    $flipParent.style.position = 'relative';
    $flipParent.style.overflow = 'hidden';
    Object.assign($flipChild.style, {
      position: 'absolute',
      inset: 0
    });
    var animations = [];
    $flipChildren.forEach(function ($flipChild, i) {
      $flipChild.style.display = 'block';
      var animation = $flipChild.animate([{
        translate: "0 ".concat(i === 0 ? '0' : '-100%')
      }, {
        translate: "0 ".concat(i === 0 ? '100%' : '0')
      }], {
        duration: 200,
        iterations: 1,
        fill: "forwards"
      });
      animation.pause();
      animations.push(animation);
    });
    function playAnimation() {
      animations.forEach(function (animation) {
        animation.play();
      });
    }
    function reverseAnimation() {
      animations.forEach(function (animation) {
        return animation.reverse();
      });
    }
    $flipItem.addEventListener('mouseenter', function () {
      playAnimation();
    });
    $flipItem.addEventListener('mouseleave', function () {
      reverseAnimation();
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFlipAnimation);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_flip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/flip */ "./src/scripts/animations/flip.js");

document.addEventListener('DOMContentLoaded', function () {
  (0,_animations_flip__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

// const $box = document.getElementById('box');
// const $playButton = document.getElementById('play');

// const boxAnimation = $box.animate([
//     { opacity: 0, scale: 0, backgroundColor: '#000' },
//     { opacity: 1, scale: 1, backgroundColor: "red" }
// ], {
//     duration: 200,
//     iterations: 5
// });

// boxAnimation.pause();

// $playButton.addEventListener('click', () => {
//     boxAnimation.play();
// })

// function staggerItems($elements) {
//     const keyframes = [
//         { translate: '0 0' },
//         { translate: '300px 0' },
//     ];

//     [...$elements].forEach(($element, i) => {
//         $element.animate(keyframes, {
//             iterations: 1,
//             duration: 400,
//             delay: i * 100,
//             easing: "cubic-bezier(0.42, 0, 0.58, 1)",
//             fill: "forwards"
//         })
//     });
// }

// function initTriggers() {
//     const $triggers = document.querySelectorAll("[animation-target]");

//     $triggers.forEach($trigger => {
//         $trigger.addEventListener('click', () => {
//             const target = $trigger.getAttribute("animation-target");

//             const $staggerParent = document.querySelector(`[animation-name='${target}']`);

//             if (!$staggerParent || $staggerParent.getAttribute("data-animation='stagger-items'")) {
//                 alert('Er is geen element gevonden dat geanimeerd moet worden');
//                 return;
//             }

//             staggerItems($staggerParent.children);
//         })
//     });
// }

// initTriggers();

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/main": 0,
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkoefeningen_web_4_adriaanglibert"] = self["webpackChunkoefeningen_web_4_adriaanglibert"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/scripts/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/styles/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;