/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + "." + "69ed10cb6bdb58b8a96b" + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/capture/capture.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-selector-generator/build/index.js":
/*!************************************************************!*\
  !*** ./node_modules/css-selector-generator/build/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,r){ true?module.exports=r():undefined}(self,(function(){return(()=>{var t={3426:(t,r,e)=>{var n=e(7529);function o(t,r,e){Array.isArray(t)?t.push(r):t[e]=r}t.exports=function(t){var r,e,i,a=[];if(Array.isArray(t))e=[],r=t.length-1;else{if("object"!=typeof t||null===t)throw new TypeError("Expecting an Array or an Object, but `"+(null===t?"null":typeof t)+"` provided.");e={},i=Object.keys(t),r=i.length-1}return function e(u,c){var s,f,l,h;for(f=i?i[c]:c,Array.isArray(t[f])||(void 0===t[f]?t[f]=[]:t[f]=[t[f]]),s=0;s<t[f].length;s++)o((h=u,l=Array.isArray(h)?[].concat(h):n(h)),t[f][s],f),c>=r?a.push(l):e(l,c+1)}(e,0),a}},1926:(t,r,e)=>{e(2526),e(2443),e(1817),e(2401),e(8722),e(2165),e(9007),e(6066),e(3510),e(1840),e(6982),e(2159),e(6649),e(9341),e(543),e(9170),e(1038),e(9753),e(6572),e(2222),e(545),e(6541),e(3290),e(7327),e(9826),e(4553),e(4944),e(6535),e(9554),e(6699),e(2772),e(9600),e(4986),e(1249),e(5827),e(6644),e(5069),e(7042),e(5212),e(2707),e(561),e(8706),e(3792),e(9244),e(6992),e(4812),e(8309),e(4855),e(5837),e(9601),e(8011),e(9070),e(3321),e(9720),e(3371),e(8559),e(5003),e(9337),e(6210),e(489),e(3304),e(1825),e(8410),e(2200),e(7941),e(7227),e(514),e(8304),e(6833),e(1539),e(9595),e(5500),e(4869),e(3952),e(4953),e(8992),e(9841),e(7852),e(2023),e(4723),e(6373),e(6528),e(3112),e(2481),e(5306),e(4765),e(3123),e(6755),e(3210),e(5674),e(8702),e(8783),e(5218),e(4475),e(7929),e(915),e(9253),e(2125),e(8830),e(8734),e(9254),e(7268),e(7397),e(86),e(623),e(8757),e(4603),e(4916),e(2087),e(8386),e(7601),e(9714),e(1058),e(4678),e(9653),e(3299),e(5192),e(3161),e(4048),e(8285),e(4363),e(5994),e(1874),e(9494),e(6977),e(5147),e(9752),e(2376),e(3181),e(3484),e(2388),e(8621),e(403),e(4755),e(5438),e(332),e(658),e(197),e(4914),e(2420),e(160),e(970),e(2703),e(3689),e(3843),e(5735),e(8733),e(3710),e(6078),e(8862),e(3706),e(8674),e(7922),e(4668),e(7727),e(1532),e(189),e(4129),e(8478),e(8264),e(6938),e(9575),e(6716),e(7145),e(2472),e(9743),e(5109),e(8255),e(5125),e(9135),e(4197),e(6495),e(8145),e(5206),e(2990),e(8927),e(3105),e(5035),e(4345),e(7174),e(2846),e(4731),e(7209),e(6319),e(8867),e(7789),e(3739),e(9368),e(4483),e(2056),e(3462),e(678),e(7462),e(3824),e(5021),e(2974),e(5016),e(224),e(2419),e(9596),e(2586),e(4819),e(5683),e(9361),e(1037),e(5898),e(7556),e(4361),e(3593),e(9532),e(1299);var n=e(857);t.exports=n},3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},1223:(t,r,e)=>{var n=e(5112),o=e(30),i=e(3070),a=n("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},1530:(t,r,e)=>{"use strict";var n=e(8710).charAt;t.exports=function(t,r,e){return r+(e?n(t,r).length:1)}},5787:t=>{t.exports=function(t,r,e){if(!(t instanceof r))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},9670:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},4019:t=>{t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:(t,r,e)=>{"use strict";var n,o=e(4019),i=e(9781),a=e(7854),u=e(111),c=e(6656),s=e(648),f=e(8880),l=e(1320),h=e(3070).f,p=e(9518),v=e(7674),g=e(5112),d=e(9711),y=a.Int8Array,m=y&&y.prototype,b=a.Uint8ClampedArray,x=b&&b.prototype,w=y&&p(y),S=m&&p(m),A=Object.prototype,E=A.isPrototypeOf,O=g("toStringTag"),T=d("TYPED_ARRAY_TAG"),j=o&&!!v&&"Opera"!==s(a.opera),R=!1,I={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},L=function(t){if(!u(t))return!1;var r=s(t);return c(I,r)||c(M,r)};for(n in I)a[n]||(j=!1);if((!j||"function"!=typeof w||w===Function.prototype)&&(w=function(){throw TypeError("Incorrect invocation")},j))for(n in I)a[n]&&v(a[n],w);if((!j||!S||S===A)&&(S=w.prototype,j))for(n in I)a[n]&&v(a[n].prototype,S);if(j&&p(x)!==S&&v(x,S),i&&!c(S,O))for(n in R=!0,h(S,O,{get:function(){return u(this)?this[T]:void 0}}),I)a[n]&&f(a[n],T,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:j,TYPED_ARRAY_TAG:R&&T,aTypedArray:function(t){if(L(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(v){if(E.call(w,t))return t}else for(var r in I)if(c(I,n)){var e=a[r];if(e&&(t===e||E.call(e,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e){if(i){if(e)for(var n in I){var o=a[n];o&&c(o.prototype,t)&&delete o.prototype[t]}S[t]&&!e||l(S,t,e?r:j&&m[t]||r)}},exportTypedArrayStaticMethod:function(t,r,e){var n,o;if(i){if(v){if(e)for(n in I)(o=a[n])&&c(o,t)&&delete o[t];if(w[t]&&!e)return;try{return l(w,t,e?r:j&&y[t]||r)}catch(t){}}for(n in I)!(o=a[n])||o[t]&&!e||l(o,t,r)}},isView:function(t){if(!u(t))return!1;var r=s(t);return"DataView"===r||c(I,r)||c(M,r)},isTypedArray:L,TypedArray:w,TypedArrayPrototype:S}},3331:(t,r,e)=>{"use strict";var n=e(7854),o=e(9781),i=e(4019),a=e(8880),u=e(2248),c=e(7293),s=e(5787),f=e(9958),l=e(7466),h=e(7067),p=e(1179),v=e(9518),g=e(7674),d=e(8006).f,y=e(3070).f,m=e(1285),b=e(8003),x=e(9909),w=x.get,S=x.set,A="ArrayBuffer",E="DataView",O="Wrong index",T=n.ArrayBuffer,j=T,R=n.DataView,I=R&&R.prototype,M=Object.prototype,L=n.RangeError,k=p.pack,P=p.unpack,N=function(t){return[255&t]},_=function(t){return[255&t,t>>8&255]},U=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},F=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},C=function(t){return k(t,23,4)},D=function(t){return k(t,52,8)},B=function(t,r){y(t.prototype,r,{get:function(){return w(this)[r]}})},z=function(t,r,e,n){var o=h(e),i=w(t);if(o+r>i.byteLength)throw L(O);var a=w(i.buffer).bytes,u=o+i.byteOffset,c=a.slice(u,u+r);return n?c:c.reverse()},q=function(t,r,e,n,o,i){var a=h(e),u=w(t);if(a+r>u.byteLength)throw L(O);for(var c=w(u.buffer).bytes,s=a+u.byteOffset,f=n(+o),l=0;l<r;l++)c[s+l]=f[i?l:r-l-1]};if(i){if(!c((function(){T(1)}))||!c((function(){new T(-1)}))||c((function(){return new T,new T(1.5),new T(NaN),T.name!=A}))){for(var W,G=(j=function(t){return s(this,j),new T(h(t))}).prototype=T.prototype,V=d(T),$=0;V.length>$;)(W=V[$++])in j||a(j,W,T[W]);G.constructor=j}g&&v(I)!==M&&g(I,M);var Y=new R(new j(2)),J=I.setInt8;Y.setInt8(0,2147483648),Y.setInt8(1,2147483649),!Y.getInt8(0)&&Y.getInt8(1)||u(I,{setInt8:function(t,r){J.call(this,t,r<<24>>24)},setUint8:function(t,r){J.call(this,t,r<<24>>24)}},{unsafe:!0})}else j=function(t){s(this,j,A);var r=h(t);S(this,{bytes:m.call(new Array(r),0),byteLength:r}),o||(this.byteLength=r)},R=function(t,r,e){s(this,R,E),s(t,j,E);var n=w(t).byteLength,i=f(r);if(i<0||i>n)throw L("Wrong offset");if(i+(e=void 0===e?n-i:l(e))>n)throw L("Wrong length");S(this,{buffer:t,byteLength:e,byteOffset:i}),o||(this.buffer=t,this.byteLength=e,this.byteOffset=i)},o&&(B(j,"byteLength"),B(R,"buffer"),B(R,"byteLength"),B(R,"byteOffset")),u(R.prototype,{getInt8:function(t){return z(this,1,t)[0]<<24>>24},getUint8:function(t){return z(this,1,t)[0]},getInt16:function(t){var r=z(this,2,t,arguments.length>1?arguments[1]:void 0);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t){var r=z(this,2,t,arguments.length>1?arguments[1]:void 0);return r[1]<<8|r[0]},getInt32:function(t){return F(z(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return F(z(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return P(z(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return P(z(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,r){q(this,1,t,N,r)},setUint8:function(t,r){q(this,1,t,N,r)},setInt16:function(t,r){q(this,2,t,_,r,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,r){q(this,2,t,_,r,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,r){q(this,4,t,U,r,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,r){q(this,4,t,U,r,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,r){q(this,4,t,C,r,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,r){q(this,8,t,D,r,arguments.length>2?arguments[2]:void 0)}});b(j,A),b(R,E),t.exports={ArrayBuffer:j,DataView:R}},1048:(t,r,e)=>{"use strict";var n=e(7908),o=e(1400),i=e(7466),a=Math.min;t.exports=[].copyWithin||function(t,r){var e=n(this),u=i(e.length),c=o(t,u),s=o(r,u),f=arguments.length>2?arguments[2]:void 0,l=a((void 0===f?u:o(f,u))-s,u-c),h=1;for(s<c&&c<s+l&&(h=-1,s+=l-1,c+=l-1);l-- >0;)s in e?e[c]=e[s]:delete e[c],c+=h,s+=h;return e}},1285:(t,r,e)=>{"use strict";var n=e(7908),o=e(1400),i=e(7466);t.exports=function(t){for(var r=n(this),e=i(r.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,e),c=a>2?arguments[2]:void 0,s=void 0===c?e:o(c,e);s>u;)r[u++]=t;return r}},8533:(t,r,e)=>{"use strict";var n=e(2092).forEach,o=e(2133)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},8457:(t,r,e)=>{"use strict";var n=e(9974),o=e(7908),i=e(3411),a=e(7659),u=e(7466),c=e(6135),s=e(1246);t.exports=function(t){var r,e,f,l,h,p,v=o(t),g="function"==typeof this?this:Array,d=arguments.length,y=d>1?arguments[1]:void 0,m=void 0!==y,b=s(v),x=0;if(m&&(y=n(y,d>2?arguments[2]:void 0,2)),null==b||g==Array&&a(b))for(e=new g(r=u(v.length));r>x;x++)p=m?y(v[x],x):v[x],c(e,x,p);else for(h=(l=b.call(v)).next,e=new g;!(f=h.call(l)).done;x++)p=m?i(l,y,[f.value,x],!0):f.value,c(e,x,p);return e.length=x,e}},1318:(t,r,e)=>{var n=e(5656),o=e(7466),i=e(1400),a=function(t){return function(r,e,a){var u,c=n(r),s=o(c.length),f=i(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(8361),i=e(7908),a=e(7466),u=e(5417),c=[].push,s=function(t){var r=1==t,e=2==t,s=3==t,f=4==t,l=6==t,h=7==t,p=5==t||l;return function(v,g,d,y){for(var m,b,x=i(v),w=o(x),S=n(g,d,3),A=a(w.length),E=0,O=y||u,T=r?O(v,A):e||h?O(v,0):void 0;A>E;E++)if((p||E in w)&&(b=S(m=w[E],E,x),t))if(r)T[E]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:c.call(T,m)}else switch(t){case 4:return!1;case 7:c.call(T,m)}return l?-1:s||f?f:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},6583:(t,r,e)=>{"use strict";var n=e(5656),o=e(9958),i=e(7466),a=e(2133),u=Math.min,c=[].lastIndexOf,s=!!c&&1/[1].lastIndexOf(1,-0)<0,f=a("lastIndexOf"),l=s||!f;t.exports=l?function(t){if(s)return c.apply(this,arguments)||0;var r=n(this),e=i(r.length),a=e-1;for(arguments.length>1&&(a=u(a,o(arguments[1]))),a<0&&(a=e+a);a>=0;a--)if(a in r&&r[a]===t)return a||0;return-1}:c},1194:(t,r,e)=>{var n=e(7293),o=e(5112),i=e(7392),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},2133:(t,r,e)=>{"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},3671:(t,r,e)=>{var n=e(3099),o=e(7908),i=e(8361),a=e(7466),u=function(t){return function(r,e,u,c){n(e);var s=o(r),f=i(s),l=a(s.length),h=t?l-1:0,p=t?-1:1;if(u<2)for(;;){if(h in f){c=f[h],h+=p;break}if(h+=p,t?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:l>h;h+=p)h in f&&(c=e(c,f[h],h,s));return c}};t.exports={left:u(!1),right:u(!0)}},5417:(t,r,e)=>{var n=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t,r){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?n(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},3411:(t,r,e)=>{var n=e(9670),o=e(9212);t.exports=function(t,r,e,i){try{return i?r(n(e)[0],e[1]):r(e)}catch(r){throw o(t),r}}},7072:(t,r,e)=>{var n=e(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},648:(t,r,e)=>{var n=e(1694),o=e(4326),i=e(5112)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?e:a?o(r):"Object"==(n=o(r))&&"function"==typeof r.callee?"Arguments":n}},5631:(t,r,e)=>{"use strict";var n=e(3070).f,o=e(30),i=e(2248),a=e(9974),u=e(5787),c=e(408),s=e(654),f=e(6340),l=e(9781),h=e(2423).fastKey,p=e(9909),v=p.set,g=p.getterFor;t.exports={getConstructor:function(t,r,e,s){var f=t((function(t,n){u(t,f,r),v(t,{type:r,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=n&&c(n,t[s],{that:t,AS_ENTRIES:e})})),p=g(r),d=function(t,r,e){var n,o,i=p(t),a=y(t,r);return a?a.value=e:(i.last=a={index:o=h(r,!0),key:r,value:e,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=a),n&&(n.next=a),l?i.size++:t.size++,"F"!==o&&(i.index[o]=a)),t},y=function(t,r){var e,n=p(t),o=h(r);if("F"!==o)return n.index[o];for(e=n.first;e;e=e.next)if(e.key==r)return e};return i(f.prototype,{clear:function(){for(var t=p(this),r=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete r[e.index],e=e.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var r=this,e=p(r),n=y(r,t);if(n){var o=n.next,i=n.previous;delete e.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),e.first==n&&(e.first=o),e.last==n&&(e.last=i),l?e.size--:r.size--}return!!n},forEach:function(t){for(var r,e=p(this),n=a(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.next:e.first;)for(n(r.value,r.key,this);r&&r.removed;)r=r.previous},has:function(t){return!!y(this,t)}}),i(f.prototype,e?{get:function(t){var r=y(this,t);return r&&r.value},set:function(t,r){return d(this,0===t?0:t,r)}}:{add:function(t){return d(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return p(this).size}}),f},setStrong:function(t,r,e){var n=r+" Iterator",o=g(r),i=g(n);s(t,r,(function(t,r){v(this,{type:n,target:t,state:o(t),kind:r,last:void 0})}),(function(){for(var t=i(this),r=t.kind,e=t.last;e&&e.removed;)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==r?{value:e.key,done:!1}:"values"==r?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),f(r)}}},9320:(t,r,e)=>{"use strict";var n=e(2248),o=e(2423).getWeakData,i=e(9670),a=e(111),u=e(5787),c=e(408),s=e(2092),f=e(6656),l=e(9909),h=l.set,p=l.getterFor,v=s.find,g=s.findIndex,d=0,y=function(t){return t.frozen||(t.frozen=new m)},m=function(){this.entries=[]},b=function(t,r){return v(t.entries,(function(t){return t[0]===r}))};m.prototype={get:function(t){var r=b(this,t);if(r)return r[1]},has:function(t){return!!b(this,t)},set:function(t,r){var e=b(this,t);e?e[1]=r:this.entries.push([t,r])},delete:function(t){var r=g(this.entries,(function(r){return r[0]===t}));return~r&&this.entries.splice(r,1),!!~r}},t.exports={getConstructor:function(t,r,e,s){var l=t((function(t,n){u(t,l,r),h(t,{type:r,id:d++,frozen:void 0}),null!=n&&c(n,t[s],{that:t,AS_ENTRIES:e})})),v=p(r),g=function(t,r,e){var n=v(t),a=o(i(r),!0);return!0===a?y(n).set(r,e):a[n.id]=e,t};return n(l.prototype,{delete:function(t){var r=v(this);if(!a(t))return!1;var e=o(t);return!0===e?y(r).delete(t):e&&f(e,r.id)&&delete e[r.id]},has:function(t){var r=v(this);if(!a(t))return!1;var e=o(t);return!0===e?y(r).has(t):e&&f(e,r.id)}}),n(l.prototype,e?{get:function(t){var r=v(this);if(a(t)){var e=o(t);return!0===e?y(r).get(t):e?e[r.id]:void 0}},set:function(t,r){return g(this,t,r)}}:{add:function(t){return g(this,t,!0)}}),l}}},7710:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(4705),a=e(1320),u=e(2423),c=e(408),s=e(5787),f=e(111),l=e(7293),h=e(7072),p=e(8003),v=e(9587);t.exports=function(t,r,e){var g=-1!==t.indexOf("Map"),d=-1!==t.indexOf("Weak"),y=g?"set":"add",m=o[t],b=m&&m.prototype,x=m,w={},S=function(t){var r=b[t];a(b,t,"add"==t?function(t){return r.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(d&&!f(t))&&r.call(this,0===t?0:t)}:"get"==t?function(t){return d&&!f(t)?void 0:r.call(this,0===t?0:t)}:"has"==t?function(t){return!(d&&!f(t))&&r.call(this,0===t?0:t)}:function(t,e){return r.call(this,0===t?0:t,e),this})};if(i(t,"function"!=typeof m||!(d||b.forEach&&!l((function(){(new m).entries().next()})))))x=e.getConstructor(r,t,g,y),u.REQUIRED=!0;else if(i(t,!0)){var A=new x,E=A[y](d?{}:-0,1)!=A,O=l((function(){A.has(1)})),T=h((function(t){new m(t)})),j=!d&&l((function(){for(var t=new m,r=5;r--;)t[y](r,r);return!t.has(-0)}));T||((x=r((function(r,e){s(r,x,t);var n=v(new m,r,x);return null!=e&&c(e,n[y],{that:n,AS_ENTRIES:g}),n}))).prototype=b,b.constructor=x),(O||j)&&(S("delete"),S("has"),g&&S("get")),(j||E)&&S(y),d&&b.clear&&delete b.clear}return w[t]=x,n({global:!0,forced:x!=m},w),p(x,t),d||e.setStrong(x,t,g),x}},9920:(t,r,e)=>{var n=e(6656),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,r){for(var e=o(r),u=a.f,c=i.f,s=0;s<e.length;s++){var f=e[s];n(t,f)||u(t,f,c(r,f))}}},4964:(t,r,e)=>{var n=e(5112)("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[n]=!1,"/./"[t](r)}catch(t){}}return!1}},8544:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4230:(t,r,e)=>{var n=e(4488),o=/"/g;t.exports=function(t,r,e,i){var a=String(n(t)),u="<"+r;return""!==e&&(u+=" "+e+'="'+String(i).replace(o,"&quot;")+'"'),u+">"+a+"</"+r+">"}},4994:(t,r,e)=>{"use strict";var n=e(3383).IteratorPrototype,o=e(30),i=e(9114),a=e(8003),u=e(7497),c=function(){return this};t.exports=function(t,r,e){var s=r+" Iterator";return t.prototype=o(n,{next:i(1,e)}),a(t,s,!1,!0),u[s]=c,t}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:(t,r,e)=>{"use strict";var n=e(7593),o=e(3070),i=e(9114);t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},5573:(t,r,e)=>{"use strict";var n=e(7293),o=e(6650).start,i=Math.abs,a=Date.prototype,u=a.getTime,c=a.toISOString;t.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!n((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(u.call(this)))throw RangeError("Invalid time value");var t=this,r=t.getUTCFullYear(),e=t.getUTCMilliseconds(),n=r<0?"-":r>9999?"+":"";return n+o(i(r),n?6:4,0)+"-"+o(t.getUTCMonth()+1,2,0)+"-"+o(t.getUTCDate(),2,0)+"T"+o(t.getUTCHours(),2,0)+":"+o(t.getUTCMinutes(),2,0)+":"+o(t.getUTCSeconds(),2,0)+"."+o(e,3,0)+"Z"}:c},8709:(t,r,e)=>{"use strict";var n=e(9670),o=e(7593);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return o(n(this),"number"!==t)}},654:(t,r,e)=>{"use strict";var n=e(2109),o=e(4994),i=e(9518),a=e(7674),u=e(8003),c=e(8880),s=e(1320),f=e(5112),l=e(1913),h=e(7497),p=e(3383),v=p.IteratorPrototype,g=p.BUGGY_SAFARI_ITERATORS,d=f("iterator"),y="keys",m="values",b="entries",x=function(){return this};t.exports=function(t,r,e,f,p,w,S){o(e,r,f);var A,E,O,T=function(t){if(t===p&&L)return L;if(!g&&t in I)return I[t];switch(t){case y:case m:case b:return function(){return new e(this,t)}}return function(){return new e(this)}},j=r+" Iterator",R=!1,I=t.prototype,M=I[d]||I["@@iterator"]||p&&I[p],L=!g&&M||T(p),k="Array"==r&&I.entries||M;if(k&&(A=i(k.call(new t)),v!==Object.prototype&&A.next&&(l||i(A)===v||(a?a(A,v):"function"!=typeof A[d]&&c(A,d,x)),u(A,j,!0,!0),l&&(h[j]=x))),p==m&&M&&M.name!==m&&(R=!0,L=function(){return M.call(this)}),l&&!S||I[d]===L||c(I,d,L),h[r]=L,p)if(E={values:T(m),keys:w?L:T(y),entries:T(b)},S)for(O in E)(g||R||!(O in I))&&s(I,O,E[O]);else n({target:r,proto:!0,forced:g||R},E);return E}},7235:(t,r,e)=>{var n=e(857),o=e(6656),i=e(6061),a=e(3070).f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8334:(t,r,e)=>{var n=e(8113);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},5268:(t,r,e)=>{var n=e(4326),o=e(7854);t.exports="process"==n(o.process)},1036:(t,r,e)=>{var n=e(8113);t.exports=/web0s(?!.*chrome)/i.test(n)},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),a=e(8113),u=i.process,c=u&&u.versions,s=c&&c.v8;s?o=(n=s.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),a=e(1320),u=e(3505),c=e(9920),s=e(4705);t.exports=function(t,r){var e,f,l,h,p,v=t.target,g=t.global,d=t.stat;if(e=g?n:d?n[v]||u(v,{}):(n[v]||{}).prototype)for(f in r){if(h=r[f],l=t.noTargetGet?(p=o(e,f))&&p.value:e[f],!s(g?f:v+(d?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;c(h,l)}(t.sham||l&&l.sham)&&i(h,"sham",!0),a(e,f,h,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:(t,r,e)=>{"use strict";e(4916);var n=e(1320),o=e(7293),i=e(5112),a=e(2261),u=e(8880),c=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),l=i("replace"),h=!!/./[l]&&""===/./[l]("a","$0"),p=!o((function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,r,e,l){var v=i(t),g=!o((function(){var r={};return r[v]=function(){return 7},7!=""[t](r)})),d=g&&!o((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[c]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return r=!0,null},e[v](""),!r}));if(!g||!d||"replace"===t&&(!s||!f||h)||"split"===t&&!p){var y=/./[v],m=e(v,""[t],(function(t,r,e,n,o){return r.exec===a?g&&!o?{done:!0,value:y.call(r,e,n)}:{done:!0,value:t.call(e,r,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=m[0],x=m[1];n(String.prototype,t,b),n(RegExp.prototype,v,2==r?function(t,r){return x.call(t,this,r)}:function(t){return x.call(t,this)})}l&&u(RegExp.prototype[v],"sham",!0)}},6790:(t,r,e)=>{"use strict";var n=e(3157),o=e(7466),i=e(9974),a=function(t,r,e,u,c,s,f,l){for(var h,p=c,v=0,g=!!f&&i(f,l,3);v<u;){if(v in e){if(h=g?g(e[v],v,r):e[v],s>0&&n(h))p=a(t,r,h,o(h.length),p,s-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[p]=h}p++}v++}return p};t.exports=a},6677:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},9974:(t,r,e)=>{var n=e(3099);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},7065:(t,r,e)=>{"use strict";var n=e(3099),o=e(111),i=[].slice,a={},u=function(t,r,e){if(!(r in a)){for(var n=[],o=0;o<r;o++)n[o]="a["+o+"]";a[r]=Function("C,a","return new C("+n.join(",")+")")}return a[r](t,e)};t.exports=Function.bind||function(t){var r=n(this),e=i.call(arguments,1),a=function(){var n=e.concat(i.call(arguments));return this instanceof a?u(r,n.length,n):r.apply(t,n)};return o(r.prototype)&&(a.prototype=r.prototype),a}},5005:(t,r,e)=>{var n=e(857),o=e(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},1246:(t,r,e)=>{var n=e(648),o=e(7497),i=e(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},8554:(t,r,e)=>{var n=e(9670),o=e(1246);t.exports=function(t){var r=o(t);if("function"!=typeof r)throw TypeError(String(t)+" is not iterable");return n(r.call(t))}},647:(t,r,e)=>{var n=e(7908),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,e,c,s,f){var l=e+t.length,h=c.length,p=u;return void 0!==s&&(s=n(s),p=a),i.call(f,p,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(l);case"<":a=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>h){var f=o(u/10);return 0===f?n:f<=h?void 0===c[f-1]?i.charAt(1):c[f-1]+i.charAt(1):n}a=c[u-1]}return void 0===a?"":a}))}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:t=>{var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},3501:t=>{t.exports={}},842:(t,r,e)=>{var n=e(7854);t.exports=function(t,r){var e=n.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,r))}},490:(t,r,e)=>{var n=e(5005);t.exports=n("document","documentElement")},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},1179:t=>{var r=Math.abs,e=Math.pow,n=Math.floor,o=Math.log,i=Math.LN2;t.exports={pack:function(t,a,u){var c,s,f,l=new Array(u),h=8*u-a-1,p=(1<<h)-1,v=p>>1,g=23===a?e(2,-24)-e(2,-77):0,d=t<0||0===t&&1/t<0?1:0,y=0;for((t=r(t))!=t||t===1/0?(s=t!=t?1:0,c=p):(c=n(o(t)/i),t*(f=e(2,-c))<1&&(c--,f*=2),(t+=c+v>=1?g/f:g*e(2,1-v))*f>=2&&(c++,f/=2),c+v>=p?(s=0,c=p):c+v>=1?(s=(t*f-1)*e(2,a),c+=v):(s=t*e(2,v-1)*e(2,a),c=0));a>=8;l[y++]=255&s,s/=256,a-=8);for(c=c<<a|s,h+=a;h>0;l[y++]=255&c,c/=256,h-=8);return l[--y]|=128*d,l},unpack:function(t,r){var n,o=t.length,i=8*o-r-1,a=(1<<i)-1,u=a>>1,c=i-7,s=o-1,f=t[s--],l=127&f;for(f>>=7;c>0;l=256*l+t[s],s--,c-=8);for(n=l&(1<<-c)-1,l>>=-c,c+=r;c>0;n=256*n+t[s],s--,c-=8);if(0===l)l=1-u;else{if(l===a)return n?NaN:f?-1/0:1/0;n+=e(2,r),l-=u}return(f?-1:1)*n*e(2,l-r)}}},8361:(t,r,e)=>{var n=e(7293),o=e(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},9587:(t,r,e)=>{var n=e(111),o=e(7674);t.exports=function(t,r,e){var i,a;return o&&"function"==typeof(i=r.constructor)&&i!==e&&n(a=i.prototype)&&a!==e.prototype&&o(t,a),t}},2788:(t,r,e)=>{var n=e(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},2423:(t,r,e)=>{var n=e(3501),o=e(111),i=e(6656),a=e(3070).f,u=e(9711),c=e(6677),s=u("meta"),f=0,l=Object.isExtensible||function(){return!0},h=function(t){a(t,s,{value:{objectID:"O"+ ++f,weakData:{}}})},p=t.exports={REQUIRED:!1,fastKey:function(t,r){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,s)){if(!l(t))return"F";if(!r)return"E";h(t)}return t[s].objectID},getWeakData:function(t,r){if(!i(t,s)){if(!l(t))return!0;if(!r)return!1;h(t)}return t[s].weakData},onFreeze:function(t){return c&&p.REQUIRED&&l(t)&&!i(t,s)&&h(t),t}};n[s]=!0},9909:(t,r,e)=>{var n,o,i,a=e(8536),u=e(7854),c=e(111),s=e(8880),f=e(6656),l=e(5465),h=e(6200),p=e(3501),v=u.WeakMap;if(a){var g=l.state||(l.state=new v),d=g.get,y=g.has,m=g.set;n=function(t,r){return r.facade=t,m.call(g,t,r),r},o=function(t){return d.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var b=h("state");p[b]=!0,n=function(t,r){return r.facade=t,s(t,b,r),r},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!c(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7659:(t,r,e)=>{var n=e(5112),o=e(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:(t,r,e)=>{var n=e(7293),o=/#|\.prototype\./,i=function(t,r){var e=u[a(t)];return e==s||e!=c&&("function"==typeof r?n(r):!!r)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},8730:(t,r,e)=>{var n=e(111),o=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&o(t)===t}},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},7850:(t,r,e)=>{var n=e(111),o=e(4326),i=e(5112)("match");t.exports=function(t){var r;return n(t)&&(void 0!==(r=t[i])?!!r:"RegExp"==o(t))}},408:(t,r,e)=>{var n=e(9670),o=e(7659),i=e(7466),a=e(9974),u=e(1246),c=e(9212),s=function(t,r){this.stopped=t,this.result=r};t.exports=function(t,r,e){var f,l,h,p,v,g,d,y=e&&e.that,m=!(!e||!e.AS_ENTRIES),b=!(!e||!e.IS_ITERATOR),x=!(!e||!e.INTERRUPTED),w=a(r,y,1+m+x),S=function(t){return f&&c(f),new s(!0,t)},A=function(t){return m?(n(t),x?w(t[0],t[1],S):w(t[0],t[1])):x?w(t,S):w(t)};if(b)f=t;else{if("function"!=typeof(l=u(t)))throw TypeError("Target is not iterable");if(o(l)){for(h=0,p=i(t.length);p>h;h++)if((v=A(t[h]))&&v instanceof s)return v;return new s(!1)}f=l.call(t)}for(g=f.next;!(d=g.call(f)).done;){try{v=A(d.value)}catch(t){throw c(f),t}if("object"==typeof v&&v&&v instanceof s)return v}return new s(!1)}},9212:(t,r,e)=>{var n=e(9670);t.exports=function(t){var r=t.return;if(void 0!==r)return n(r.call(t)).value}},3383:(t,r,e)=>{"use strict";var n,o,i,a=e(7293),u=e(9518),c=e(8880),s=e(6656),f=e(5112),l=e(1913),h=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(n=o):p=!0);var v=null==n||a((function(){var t={};return n[h].call(t)!==t}));v&&(n={}),l&&!v||s(n,h)||c(n,h,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},7497:t=>{t.exports={}},6736:t=>{var r=Math.expm1,e=Math.exp;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:e(t)-1}:r},6130:(t,r,e)=>{var n=e(4310),o=Math.abs,i=Math.pow,a=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),s=i(2,-126);t.exports=Math.fround||function(t){var r,e,i=o(t),f=n(t);return i<s?f*(i/s/u+1/a-1/a)*s*u:(e=(r=(1+u/a)*i)-(r-i))>c||e!=e?f*(1/0):f*e}},6513:t=>{var r=Math.log;t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:r(1+t)}},4310:t=>{t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},5948:(t,r,e)=>{var n,o,i,a,u,c,s,f,l=e(7854),h=e(1236).f,p=e(261).set,v=e(8334),g=e(1036),d=e(5268),y=l.MutationObserver||l.WebKitMutationObserver,m=l.document,b=l.process,x=l.Promise,w=h(l,"queueMicrotask"),S=w&&w.value;S||(n=function(){var t,r;for(d&&(t=b.domain)&&t.exit();o;){r=o.fn,o=o.next;try{r()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},v||d||g||!y||!m?x&&x.resolve?(s=x.resolve(void 0),f=s.then,a=function(){f.call(s,n)}):a=d?function(){b.nextTick(n)}:function(){p.call(l,n)}:(u=!0,c=m.createTextNode(""),new y(n).observe(c,{characterData:!0}),a=function(){c.data=u=!u})),t.exports=S||function(t){var r={fn:t,next:void 0};i&&(i.next=r),o||(o=r,a()),i=r}},3366:(t,r,e)=>{var n=e(7854);t.exports=n.Promise},133:(t,r,e)=>{var n=e(5268),o=e(7392),i=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(n?38===o:o>37&&o<41)}))},590:(t,r,e)=>{var n=e(7293),o=e(5112),i=e(1913),a=o("iterator");t.exports=!n((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),r=t.searchParams,e="";return t.pathname="c%20d",r.forEach((function(t,n){r.delete("b"),e+=n+t})),i&&!t.toJSON||!r.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==e||"x"!==new URL("http://x",void 0).host}))},8536:(t,r,e)=>{var n=e(7854),o=e(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},8523:(t,r,e)=>{"use strict";var n=e(3099),o=function(t){var r,e;this.promise=new t((function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n})),this.resolve=n(r),this.reject=n(e)};t.exports.f=function(t){return new o(t)}},3929:(t,r,e)=>{var n=e(7850);t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},7023:(t,r,e)=>{var n=e(7854).isFinite;t.exports=Number.isFinite||function(t){return"number"==typeof t&&n(t)}},2814:(t,r,e)=>{var n=e(7854),o=e(3111).trim,i=e(1361),a=n.parseFloat,u=1/a(i+"-0")!=-1/0;t.exports=u?function(t){var r=o(String(t)),e=a(r);return 0===e&&"-"==r.charAt(0)?-0:e}:a},3009:(t,r,e)=>{var n=e(7854),o=e(3111).trim,i=e(1361),a=n.parseInt,u=/^[+-]?0[Xx]/,c=8!==a(i+"08")||22!==a(i+"0x16");t.exports=c?function(t,r){var e=o(String(t));return a(e,r>>>0||(u.test(e)?16:10))}:a},1574:(t,r,e)=>{"use strict";var n=e(9781),o=e(7293),i=e(1956),a=e(5181),u=e(5296),c=e(7908),s=e(8361),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(n&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},r={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){r[t]=t})),7!=f({},t)[e]||i(f({},r)).join("")!=o}))?function(t,r){for(var e=c(t),o=arguments.length,f=1,l=a.f,h=u.f;o>f;)for(var p,v=s(arguments[f++]),g=l?i(v).concat(l(v)):i(v),d=g.length,y=0;d>y;)p=g[y++],n&&!h.call(v,p)||(e[p]=v[p]);return e}:f},30:(t,r,e)=>{var n,o=e(9670),i=e(6048),a=e(748),u=e(3501),c=e(490),s=e(317),f=e(6200)("IE_PROTO"),l=function(){},h=function(t){return"<script>"+t+"<\/script>"},p=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;p=n?function(t){t.write(h("")),t.close();var r=t.parentWindow.Object;return t=null,r}(n):((r=s("iframe")).style.display="none",c.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F);for(var e=a.length;e--;)delete p.prototype[a[e]];return p()};u[f]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[f]=t):e=p(),void 0===r?e:i(e,r)}},6048:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9670),a=e(1956);t.exports=n?Object.defineProperties:function(t,r){i(t);for(var e,n=a(r),u=n.length,c=0;u>c;)o.f(t,e=n[c++],r[e]);return t}},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(9670),a=e(7593),u=Object.defineProperty;r.f=n?u:function(t,r,e){if(i(t),r=a(r,!0),i(e),o)try{return u(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(5296),i=e(9114),a=e(5656),u=e(7593),c=e(6656),s=e(4664),f=Object.getOwnPropertyDescriptor;r.f=n?f:function(t,r){if(t=a(t),r=u(r,!0),s)try{return f(t,r)}catch(t){}if(c(t,r))return i(!o.f.call(t,r),t[r])}},1156:(t,r,e)=>{var n=e(5656),o=e(8006).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(n(t))}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},9518:(t,r,e)=>{var n=e(6656),o=e(7908),i=e(6200),a=e(8544),u=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},6324:(t,r,e)=>{var n=e(6656),o=e(5656),i=e(1318).indexOf,a=e(3501);t.exports=function(t,r){var e,u=o(t),c=0,s=[];for(e in u)!n(a,e)&&n(u,e)&&s.push(e);for(;r.length>c;)n(u,e=r[c++])&&(~i(s,e)||s.push(e));return s}},1956:(t,r,e)=>{var n=e(6324),o=e(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},9026:(t,r,e)=>{"use strict";var n=e(1913),o=e(7854),i=e(7293);t.exports=n||!i((function(){var t=Math.random();__defineSetter__.call(null,t,(function(){})),delete o[t]}))},7674:(t,r,e)=>{var n=e(9670),o=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(t){}return function(e,i){return n(e),o(i),r?t.call(e,i):e.__proto__=i,e}}():void 0)},4699:(t,r,e)=>{var n=e(9781),o=e(1956),i=e(5656),a=e(5296).f,u=function(t){return function(r){for(var e,u=i(r),c=o(u),s=c.length,f=0,l=[];s>f;)e=c[f++],n&&!a.call(u,e)||l.push(t?[e,u[e]]:u[e]);return l}};t.exports={entries:u(!0),values:u(!1)}},288:(t,r,e)=>{"use strict";var n=e(1694),o=e(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},3887:(t,r,e)=>{var n=e(5005),o=e(8006),i=e(5181),a=e(9670);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(a(t)),e=i.f;return e?r.concat(e(t)):r}},857:(t,r,e)=>{var n=e(7854);t.exports=n},2534:t=>{t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:(t,r,e)=>{var n=e(9670),o=e(111),i=e(8523);t.exports=function(t,r){if(n(t),o(r)&&r.constructor===t)return r;var e=i.f(t);return(0,e.resolve)(r),e.promise}},2248:(t,r,e)=>{var n=e(1320);t.exports=function(t,r,e){for(var o in r)n(t,o,r[o],e);return t}},1320:(t,r,e)=>{var n=e(7854),o=e(8880),i=e(6656),a=e(3505),u=e(2788),c=e(9909),s=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,r,e,u){var c,s=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(c=f(e)).source||(c.source=l.join("string"==typeof r?r:""))),t!==n?(s?!p&&t[r]&&(h=!0):delete t[r],h?t[r]=e:o(t,r,e)):h?t[r]=e:a(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},7651:(t,r,e)=>{var n=e(4326),o=e(2261);t.exports=function(t,r){var e=t.exec;if("function"==typeof e){var i=e.call(t,r);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,r)}},2261:(t,r,e)=>{"use strict";var n,o,i=e(7066),a=e(2999),u=RegExp.prototype.exec,c=String.prototype.replace,s=u,f=(n=/a/,o=/b*/g,u.call(n,"a"),u.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,h=void 0!==/()??/.exec("")[1];(f||h||l)&&(s=function(t){var r,e,n,o,a=this,s=l&&a.sticky,p=i.call(a),v=a.source,g=0,d=t;return s&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),d=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(v="(?: "+v+")",d=" "+d,g++),e=new RegExp("^(?:"+v+")",p)),h&&(e=new RegExp("^"+v+"$(?!\\s)",p)),f&&(r=a.lastIndex),n=u.call(s?e:a,d),s?n?(n.input=n.input.slice(g),n[0]=n[0].slice(g),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:f&&n&&(a.lastIndex=a.global?n.index+n[0].length:r),h&&n&&n.length>1&&c.call(n[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=s},7066:(t,r,e)=>{"use strict";var n=e(9670);t.exports=function(){var t=n(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},2999:(t,r,e)=>{"use strict";var n=e(7293);function o(t,r){return RegExp(t,r)}r.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),r.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},1150:t=>{t.exports=Object.is||function(t,r){return t===r?0!==t||1/t==1/r:t!=t&&r!=r}},3505:(t,r,e)=>{var n=e(7854),o=e(8880);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},6340:(t,r,e)=>{"use strict";var n=e(5005),o=e(3070),i=e(5112),a=e(9781),u=i("species");t.exports=function(t){var r=n(t),e=o.f;a&&r&&!r[u]&&e(r,u,{configurable:!0,get:function(){return this}})}},8003:(t,r,e)=>{var n=e(3070).f,o=e(6656),i=e(5112)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.9.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:(t,r,e)=>{var n=e(9670),o=e(3099),i=e(5112)("species");t.exports=function(t,r){var e,a=n(t).constructor;return void 0===a||null==(e=n(a)[i])?r:o(e)}},3429:(t,r,e)=>{var n=e(7293);t.exports=function(t){return n((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},8710:(t,r,e)=>{var n=e(9958),o=e(4488),i=function(t){return function(r,e){var i,a,u=String(o(r)),c=n(e),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},7061:(t,r,e)=>{var n=e(8113);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},6650:(t,r,e)=>{var n=e(7466),o=e(8415),i=e(4488),a=Math.ceil,u=function(t){return function(r,e,u){var c,s,f=String(i(r)),l=f.length,h=void 0===u?" ":String(u),p=n(e);return p<=l||""==h?f:(c=p-l,(s=o.call(h,a(c/h.length))).length>c&&(s=s.slice(0,c)),t?f+s:s+f)}};t.exports={start:u(!1),end:u(!0)}},3197:t=>{"use strict";var r=2147483647,e=/[^\0-\u007E]/,n=/[.\u3002\uFF0E\uFF61]/g,o="Overflow: input needs wider integers to process",i=Math.floor,a=String.fromCharCode,u=function(t){return t+22+75*(t<26)},c=function(t,r,e){var n=0;for(t=e?i(t/700):t>>1,t+=i(t/r);t>455;n+=36)t=i(t/35);return i(n+36*t/(t+38))},s=function(t){var e,n,s=[],f=(t=function(t){for(var r=[],e=0,n=t.length;e<n;){var o=t.charCodeAt(e++);if(o>=55296&&o<=56319&&e<n){var i=t.charCodeAt(e++);56320==(64512&i)?r.push(((1023&o)<<10)+(1023&i)+65536):(r.push(o),e--)}else r.push(o)}return r}(t)).length,l=128,h=0,p=72;for(e=0;e<t.length;e++)(n=t[e])<128&&s.push(a(n));var v=s.length,g=v;for(v&&s.push("-");g<f;){var d=r;for(e=0;e<t.length;e++)(n=t[e])>=l&&n<d&&(d=n);var y=g+1;if(d-l>i((r-h)/y))throw RangeError(o);for(h+=(d-l)*y,l=d,e=0;e<t.length;e++){if((n=t[e])<l&&++h>r)throw RangeError(o);if(n==l){for(var m=h,b=36;;b+=36){var x=b<=p?1:b>=p+26?26:b-p;if(m<x)break;var w=m-x,S=36-x;s.push(a(u(x+w%S))),m=i(w/S)}s.push(a(u(m))),p=c(h,y,g==v),h=0,++g}}++h,++l}return s.join("")};t.exports=function(t){var r,o,i=[],a=t.toLowerCase().replace(n,".").split(".");for(r=0;r<a.length;r++)o=a[r],i.push(e.test(o)?"xn--"+s(o):o);return i.join(".")}},8415:(t,r,e)=>{"use strict";var n=e(9958),o=e(4488);t.exports="".repeat||function(t){var r=String(o(this)),e="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(r+=r))1&i&&(e+=r);return e}},6091:(t,r,e)=>{var n=e(7293),o=e(1361);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},3111:(t,r,e)=>{var n=e(4488),o="["+e(1361)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(r){var e=String(n(r));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},261:(t,r,e)=>{var n,o,i,a=e(7854),u=e(7293),c=e(9974),s=e(490),f=e(317),l=e(8334),h=e(5268),p=a.location,v=a.setImmediate,g=a.clearImmediate,d=a.process,y=a.MessageChannel,m=a.Dispatch,b=0,x={},w=function(t){if(x.hasOwnProperty(t)){var r=x[t];delete x[t],r()}},S=function(t){return function(){w(t)}},A=function(t){w(t.data)},E=function(t){a.postMessage(t+"",p.protocol+"//"+p.host)};v&&g||(v=function(t){for(var r=[],e=1;arguments.length>e;)r.push(arguments[e++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,r)},n(b),b},g=function(t){delete x[t]},h?n=function(t){d.nextTick(S(t))}:m&&m.now?n=function(t){m.now(S(t))}:y&&!l?(i=(o=new y).port2,o.port1.onmessage=A,n=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&p&&"file:"!==p.protocol&&!u(E)?(n=E,a.addEventListener("message",A,!1)):n="onreadystatechange"in f("script")?function(t){s.appendChild(f("script")).onreadystatechange=function(){s.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:v,clear:g}},863:(t,r,e)=>{var n=e(4326);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},1400:(t,r,e)=>{var n=e(9958),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},7067:(t,r,e)=>{var n=e(9958),o=e(7466);t.exports=function(t){if(void 0===t)return 0;var r=n(t),e=o(r);if(r!==e)throw RangeError("Wrong length or index");return e}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},7466:(t,r,e)=>{var n=e(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488);t.exports=function(t){return Object(n(t))}},4590:(t,r,e)=>{var n=e(3002);t.exports=function(t,r){var e=n(t);if(e%r)throw RangeError("Wrong offset");return e}},3002:(t,r,e)=>{var n=e(9958);t.exports=function(t){var r=n(t);if(r<0)throw RangeError("The argument can't be less than 0");return r}},7593:(t,r,e)=>{var n=e(111);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},9843:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(9781),a=e(3832),u=e(260),c=e(3331),s=e(5787),f=e(9114),l=e(8880),h=e(7466),p=e(7067),v=e(4590),g=e(7593),d=e(6656),y=e(648),m=e(111),b=e(30),x=e(7674),w=e(8006).f,S=e(7321),A=e(2092).forEach,E=e(6340),O=e(3070),T=e(1236),j=e(9909),R=e(9587),I=j.get,M=j.set,L=O.f,k=T.f,P=Math.round,N=o.RangeError,_=c.ArrayBuffer,U=c.DataView,F=u.NATIVE_ARRAY_BUFFER_VIEWS,C=u.TYPED_ARRAY_TAG,D=u.TypedArray,B=u.TypedArrayPrototype,z=u.aTypedArrayConstructor,q=u.isTypedArray,W="BYTES_PER_ELEMENT",G="Wrong length",V=function(t,r){for(var e=0,n=r.length,o=new(z(t))(n);n>e;)o[e]=r[e++];return o},$=function(t,r){L(t,r,{get:function(){return I(this)[r]}})},Y=function(t){var r;return t instanceof _||"ArrayBuffer"==(r=y(t))||"SharedArrayBuffer"==r},J=function(t,r){return q(t)&&"symbol"!=typeof r&&r in t&&String(+r)==String(r)},X=function(t,r){return J(t,r=g(r,!0))?f(2,t[r]):k(t,r)},K=function(t,r,e){return!(J(t,r=g(r,!0))&&m(e)&&d(e,"value"))||d(e,"get")||d(e,"set")||e.configurable||d(e,"writable")&&!e.writable||d(e,"enumerable")&&!e.enumerable?L(t,r,e):(t[r]=e.value,t)};i?(F||(T.f=X,O.f=K,$(B,"buffer"),$(B,"byteOffset"),$(B,"byteLength"),$(B,"length")),n({target:"Object",stat:!0,forced:!F},{getOwnPropertyDescriptor:X,defineProperty:K}),t.exports=function(t,r,e){var i=t.match(/\d+$/)[0]/8,u=t+(e?"Clamped":"")+"Array",c="get"+t,f="set"+t,g=o[u],d=g,y=d&&d.prototype,O={},T=function(t,r){L(t,r,{get:function(){return function(t,r){var e=I(t);return e.view[c](r*i+e.byteOffset,!0)}(this,r)},set:function(t){return function(t,r,n){var o=I(t);e&&(n=(n=P(n))<0?0:n>255?255:255&n),o.view[f](r*i+o.byteOffset,n,!0)}(this,r,t)},enumerable:!0})};F?a&&(d=r((function(t,r,e,n){return s(t,d,u),R(m(r)?Y(r)?void 0!==n?new g(r,v(e,i),n):void 0!==e?new g(r,v(e,i)):new g(r):q(r)?V(d,r):S.call(d,r):new g(p(r)),t,d)})),x&&x(d,D),A(w(g),(function(t){t in d||l(d,t,g[t])})),d.prototype=y):(d=r((function(t,r,e,n){s(t,d,u);var o,a,c,f=0,l=0;if(m(r)){if(!Y(r))return q(r)?V(d,r):S.call(d,r);o=r,l=v(e,i);var g=r.byteLength;if(void 0===n){if(g%i)throw N(G);if((a=g-l)<0)throw N(G)}else if((a=h(n)*i)+l>g)throw N(G);c=a/i}else c=p(r),o=new _(a=c*i);for(M(t,{buffer:o,byteOffset:l,byteLength:a,length:c,view:new U(o)});f<c;)T(t,f++)})),x&&x(d,D),y=d.prototype=b(B)),y.constructor!==d&&l(y,"constructor",d),C&&l(y,C,u),O[u]=d,n({global:!0,forced:d!=g,sham:!F},O),W in d||l(d,W,i),W in y||l(y,W,i),E(u)}):t.exports=function(){}},3832:(t,r,e)=>{var n=e(7854),o=e(7293),i=e(7072),a=e(260).NATIVE_ARRAY_BUFFER_VIEWS,u=n.ArrayBuffer,c=n.Int8Array;t.exports=!a||!o((function(){c(1)}))||!o((function(){new c(-1)}))||!i((function(t){new c,new c(null),new c(1.5),new c(t)}),!0)||o((function(){return 1!==new c(new u(2),1,void 0).length}))},3074:(t,r,e)=>{var n=e(260).aTypedArrayConstructor,o=e(6707);t.exports=function(t,r){for(var e=o(t,t.constructor),i=0,a=r.length,u=new(n(e))(a);a>i;)u[i]=r[i++];return u}},7321:(t,r,e)=>{var n=e(7908),o=e(7466),i=e(1246),a=e(7659),u=e(9974),c=e(260).aTypedArrayConstructor;t.exports=function(t){var r,e,s,f,l,h,p=n(t),v=arguments.length,g=v>1?arguments[1]:void 0,d=void 0!==g,y=i(p);if(null!=y&&!a(y))for(h=(l=y.call(p)).next,p=[];!(f=h.call(l)).done;)p.push(f.value);for(d&&v>2&&(g=u(g,arguments[2],2)),e=o(p.length),s=new(c(this))(e),r=0;e>r;r++)s[r]=d?g(p[r],r):p[r];return s}},9711:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},6061:(t,r,e)=>{var n=e(5112);r.f=n},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(6656),a=e(9711),u=e(133),c=e(3307),s=o("wks"),f=n.Symbol,l=c?f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)&&(u||"string"==typeof s[t])||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},1361:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9170:(t,r,e)=>{"use strict";var n=e(2109),o=e(9518),i=e(7674),a=e(30),u=e(8880),c=e(9114),s=e(408),f=function(t,r){var e=this;if(!(e instanceof f))return new f(t,r);i&&(e=i(new Error(void 0),o(e))),void 0!==r&&u(e,"message",String(r));var n=[];return s(t,n.push,{that:n}),u(e,"errors",n),e};f.prototype=a(Error.prototype,{constructor:c(5,f),message:c(5,""),name:c(5,"AggregateError")}),n({global:!0},{AggregateError:f})},8264:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(3331),a=e(6340),u=i.ArrayBuffer;n({global:!0,forced:o.ArrayBuffer!==u},{ArrayBuffer:u}),a("ArrayBuffer")},6938:(t,r,e)=>{var n=e(2109),o=e(260);n({target:"ArrayBuffer",stat:!0,forced:!o.NATIVE_ARRAY_BUFFER_VIEWS},{isView:o.isView})},9575:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(3331),a=e(9670),u=e(1400),c=e(7466),s=e(6707),f=i.ArrayBuffer,l=i.DataView,h=f.prototype.slice;n({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:o((function(){return!new f(2).slice(1,void 0).byteLength}))},{slice:function(t,r){if(void 0!==h&&void 0===r)return h.call(a(this),t);for(var e=a(this).byteLength,n=u(t,e),o=u(void 0===r?e:r,e),i=new(s(this,f))(c(o-n)),p=new l(this),v=new l(i),g=0;n<o;)v.setUint8(g++,p.getUint8(n++));return i}})},2222:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(3157),a=e(111),u=e(7908),c=e(7466),s=e(6135),f=e(5417),l=e(1194),h=e(5112),p=e(7392),v=h("isConcatSpreadable"),g=9007199254740991,d="Maximum allowed index exceeded",y=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=l("concat"),b=function(t){if(!a(t))return!1;var r=t[v];return void 0!==r?!!r:i(t)};n({target:"Array",proto:!0,forced:!y||!m},{concat:function(t){var r,e,n,o,i,a=u(this),l=f(a,0),h=0;for(r=-1,n=arguments.length;r<n;r++)if(b(i=-1===r?a:arguments[r])){if(h+(o=c(i.length))>g)throw TypeError(d);for(e=0;e<o;e++,h++)e in i&&s(l,h,i[e])}else{if(h>=g)throw TypeError(d);s(l,h++,i)}return l.length=h,l}})},545:(t,r,e)=>{var n=e(2109),o=e(1048),i=e(1223);n({target:"Array",proto:!0},{copyWithin:o}),i("copyWithin")},6541:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).every;n({target:"Array",proto:!0,forced:!e(2133)("every")},{every:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},3290:(t,r,e)=>{var n=e(2109),o=e(1285),i=e(1223);n({target:"Array",proto:!0},{fill:o}),i("fill")},7327:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).filter;n({target:"Array",proto:!0,forced:!e(1194)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},4553:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).findIndex,i=e(1223),a="findIndex",u=!0;a in[]&&Array(1).findIndex((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},9826:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).find,i=e(1223),a="find",u=!0;a in[]&&Array(1).find((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},6535:(t,r,e)=>{"use strict";var n=e(2109),o=e(6790),i=e(7908),a=e(7466),u=e(3099),c=e(5417);n({target:"Array",proto:!0},{flatMap:function(t){var r,e=i(this),n=a(e.length);return u(t),(r=c(e,0)).length=o(r,e,e,n,0,1,t,arguments.length>1?arguments[1]:void 0),r}})},4944:(t,r,e)=>{"use strict";var n=e(2109),o=e(6790),i=e(7908),a=e(7466),u=e(9958),c=e(5417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,r=i(this),e=a(r.length),n=c(r,0);return n.length=o(n,r,r,e,0,void 0===t?1:u(t)),n}})},9554:(t,r,e)=>{"use strict";var n=e(2109),o=e(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},1038:(t,r,e)=>{var n=e(2109),o=e(8457);n({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:o})},6699:(t,r,e)=>{"use strict";var n=e(2109),o=e(1318).includes,i=e(1223);n({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},2772:(t,r,e)=>{"use strict";var n=e(2109),o=e(1318).indexOf,i=e(2133),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,c=i("indexOf");n({target:"Array",proto:!0,forced:u||!c},{indexOf:function(t){return u?a.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},9753:(t,r,e)=>{e(2109)({target:"Array",stat:!0},{isArray:e(3157)})},6992:(t,r,e)=>{"use strict";var n=e(5656),o=e(1223),i=e(7497),a=e(9909),u=e(654),c="Array Iterator",s=a.set,f=a.getterFor(c);t.exports=u(Array,"Array",(function(t,r){s(this,{type:c,target:n(t),index:0,kind:r})}),(function(){var t=f(this),r=t.target,e=t.kind,n=t.index++;return!r||n>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:n,done:!1}:"values"==e?{value:r[n],done:!1}:{value:[n,r[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},9600:(t,r,e)=>{"use strict";var n=e(2109),o=e(8361),i=e(5656),a=e(2133),u=[].join,c=o!=Object,s=a("join",",");n({target:"Array",proto:!0,forced:c||!s},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},4986:(t,r,e)=>{var n=e(2109),o=e(6583);n({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},1249:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).map;n({target:"Array",proto:!0,forced:!e(1194)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},6572:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(6135);n({target:"Array",stat:!0,forced:o((function(){function t(){}return!(Array.of.call(t)instanceof t)}))},{of:function(){for(var t=0,r=arguments.length,e=new("function"==typeof this?this:Array)(r);r>t;)i(e,t,arguments[t++]);return e.length=r,e}})},6644:(t,r,e)=>{"use strict";var n=e(2109),o=e(3671).right,i=e(2133),a=e(7392),u=e(5268);n({target:"Array",proto:!0,forced:!i("reduceRight")||!u&&a>79&&a<83},{reduceRight:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5827:(t,r,e)=>{"use strict";var n=e(2109),o=e(3671).left,i=e(2133),a=e(7392),u=e(5268);n({target:"Array",proto:!0,forced:!i("reduce")||!u&&a>79&&a<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5069:(t,r,e)=>{"use strict";var n=e(2109),o=e(3157),i=[].reverse,a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},7042:(t,r,e)=>{"use strict";var n=e(2109),o=e(111),i=e(3157),a=e(1400),u=e(7466),c=e(5656),s=e(6135),f=e(5112),l=e(1194)("slice"),h=f("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!l},{slice:function(t,r){var e,n,f,l=c(this),g=u(l.length),d=a(t,g),y=a(void 0===r?g:r,g);if(i(l)&&("function"!=typeof(e=l.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[h])&&(e=void 0):e=void 0,e===Array||void 0===e))return p.call(l,d,y);for(n=new(void 0===e?Array:e)(v(y-d,0)),f=0;d<y;d++,f++)d in l&&s(n,f,l[d]);return n.length=f,n}})},5212:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).some;n({target:"Array",proto:!0,forced:!e(2133)("some")},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},2707:(t,r,e)=>{"use strict";var n=e(2109),o=e(3099),i=e(7908),a=e(7293),u=e(2133),c=[],s=c.sort,f=a((function(){c.sort(void 0)})),l=a((function(){c.sort(null)})),h=u("sort");n({target:"Array",proto:!0,forced:f||!l||!h},{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),o(t))}})},8706:(t,r,e)=>{e(6340)("Array")},561:(t,r,e)=>{"use strict";var n=e(2109),o=e(1400),i=e(9958),a=e(7466),u=e(7908),c=e(5417),s=e(6135),f=e(1194)("splice"),l=Math.max,h=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f},{splice:function(t,r){var e,n,f,g,d,y,m=u(this),b=a(m.length),x=o(t,b),w=arguments.length;if(0===w?e=n=0:1===w?(e=0,n=b-x):(e=w-2,n=h(l(i(r),0),b-x)),b+e-n>p)throw TypeError(v);for(f=c(m,n),g=0;g<n;g++)(d=x+g)in m&&s(f,g,m[d]);if(f.length=n,e<n){for(g=x;g<b-n;g++)y=g+e,(d=g+n)in m?m[y]=m[d]:delete m[y];for(g=b;g>b-n+e;g--)delete m[g-1]}else if(e>n)for(g=b-n;g>x;g--)y=g+e-1,(d=g+n-1)in m?m[y]=m[d]:delete m[y];for(g=0;g<e;g++)m[g+x]=arguments[g+2];return m.length=b-n+e,f}})},9244:(t,r,e)=>{e(1223)("flatMap")},3792:(t,r,e)=>{e(1223)("flat")},6716:(t,r,e)=>{var n=e(2109),o=e(3331);n({global:!0,forced:!e(4019)},{DataView:o.DataView})},3843:(t,r,e)=>{e(2109)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},8733:(t,r,e)=>{var n=e(2109),o=e(5573);n({target:"Date",proto:!0,forced:Date.prototype.toISOString!==o},{toISOString:o})},5735:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(7908),a=e(7593);n({target:"Date",proto:!0,forced:o((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}))},{toJSON:function(t){var r=i(this),e=a(r);return"number"!=typeof e||isFinite(e)?r.toISOString():null}})},6078:(t,r,e)=>{var n=e(8880),o=e(8709),i=e(5112)("toPrimitive"),a=Date.prototype;i in a||n(a,i,o)},3710:(t,r,e)=>{var n=e(1320),o=Date.prototype,i="Invalid Date",a=o.toString,u=o.getTime;new Date(NaN)+""!=i&&n(o,"toString",(function(){var t=u.call(this);return t==t?a.call(this):i}))},4812:(t,r,e)=>{e(2109)({target:"Function",proto:!0},{bind:e(7065)})},4855:(t,r,e)=>{"use strict";var n=e(111),o=e(3070),i=e(9518),a=e(5112)("hasInstance"),u=Function.prototype;a in u||o.f(u,a,{value:function(t){if("function"!=typeof this||!n(t))return!1;if(!n(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},8309:(t,r,e)=>{var n=e(9781),o=e(3070).f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},5837:(t,r,e)=>{e(2109)({global:!0},{globalThis:e(7854)})},8862:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(7293),a=o("JSON","stringify"),u=/[\uD800-\uDFFF]/g,c=/^[\uD800-\uDBFF]$/,s=/^[\uDC00-\uDFFF]$/,f=function(t,r,e){var n=e.charAt(r-1),o=e.charAt(r+1);return c.test(t)&&!s.test(o)||s.test(t)&&!c.test(n)?"\\u"+t.charCodeAt(0).toString(16):t},l=i((function(){return'"\\udf06\\ud834"'!==a("\udf06\ud834")||'"\\udead"'!==a("\udead")}));a&&n({target:"JSON",stat:!0,forced:l},{stringify:function(t,r,e){var n=a.apply(null,arguments);return"string"==typeof n?n.replace(u,f):n}})},3706:(t,r,e)=>{var n=e(7854);e(8003)(n.JSON,"JSON",!0)},1532:(t,r,e)=>{"use strict";var n=e(7710),o=e(5631);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},9752:(t,r,e)=>{var n=e(2109),o=e(6513),i=Math.acosh,a=Math.log,u=Math.sqrt,c=Math.LN2;n({target:"Math",stat:!0,forced:!i||710!=Math.floor(i(Number.MAX_VALUE))||i(1/0)!=1/0},{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?a(t)+c:o(t-1+u(t-1)*u(t+1))}})},2376:(t,r,e)=>{var n=e(2109),o=Math.asinh,i=Math.log,a=Math.sqrt;n({target:"Math",stat:!0,forced:!(o&&1/o(0)>0)},{asinh:function t(r){return isFinite(r=+r)&&0!=r?r<0?-t(-r):i(r+a(r*r+1)):r}})},3181:(t,r,e)=>{var n=e(2109),o=Math.atanh,i=Math.log;n({target:"Math",stat:!0,forced:!(o&&1/o(-0)<0)},{atanh:function(t){return 0==(t=+t)?t:i((1+t)/(1-t))/2}})},3484:(t,r,e)=>{var n=e(2109),o=e(4310),i=Math.abs,a=Math.pow;n({target:"Math",stat:!0},{cbrt:function(t){return o(t=+t)*a(i(t),1/3)}})},2388:(t,r,e)=>{var n=e(2109),o=Math.floor,i=Math.log,a=Math.LOG2E;n({target:"Math",stat:!0},{clz32:function(t){return(t>>>=0)?31-o(i(t+.5)*a):32}})},8621:(t,r,e)=>{var n=e(2109),o=e(6736),i=Math.cosh,a=Math.abs,u=Math.E;n({target:"Math",stat:!0,forced:!i||i(710)===1/0},{cosh:function(t){var r=o(a(t)-1)+1;return(r+1/(r*u*u))*(u/2)}})},403:(t,r,e)=>{var n=e(2109),o=e(6736);n({target:"Math",stat:!0,forced:o!=Math.expm1},{expm1:o})},4755:(t,r,e)=>{e(2109)({target:"Math",stat:!0},{fround:e(6130)})},5438:(t,r,e)=>{var n=e(2109),o=Math.hypot,i=Math.abs,a=Math.sqrt;n({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,r){for(var e,n,o=0,u=0,c=arguments.length,s=0;u<c;)s<(e=i(arguments[u++]))?(o=o*(n=s/e)*n+1,s=e):o+=e>0?(n=e/s)*n:e;return s===1/0?1/0:s*a(o)}})},332:(t,r,e)=>{var n=e(2109),o=e(7293),i=Math.imul;n({target:"Math",stat:!0,forced:o((function(){return-5!=i(4294967295,5)||2!=i.length}))},{imul:function(t,r){var e=65535,n=+t,o=+r,i=e&n,a=e&o;return 0|i*a+((e&n>>>16)*a+i*(e&o>>>16)<<16>>>0)}})},658:(t,r,e)=>{var n=e(2109),o=Math.log,i=Math.LOG10E;n({target:"Math",stat:!0},{log10:function(t){return o(t)*i}})},197:(t,r,e)=>{e(2109)({target:"Math",stat:!0},{log1p:e(6513)})},4914:(t,r,e)=>{var n=e(2109),o=Math.log,i=Math.LN2;n({target:"Math",stat:!0},{log2:function(t){return o(t)/i}})},2420:(t,r,e)=>{e(2109)({target:"Math",stat:!0},{sign:e(4310)})},160:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(6736),a=Math.abs,u=Math.exp,c=Math.E;n({target:"Math",stat:!0,forced:o((function(){return-2e-17!=Math.sinh(-2e-17)}))},{sinh:function(t){return a(t=+t)<1?(i(t)-i(-t))/2:(u(t-1)-u(-t-1))*(c/2)}})},970:(t,r,e)=>{var n=e(2109),o=e(6736),i=Math.exp;n({target:"Math",stat:!0},{tanh:function(t){var r=o(t=+t),e=o(-t);return r==1/0?1:e==1/0?-1:(r-e)/(i(t)+i(-t))}})},2703:(t,r,e)=>{e(8003)(Math,"Math",!0)},3689:(t,r,e)=>{var n=e(2109),o=Math.ceil,i=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?i:o)(t)}})},9653:(t,r,e)=>{"use strict";var n=e(9781),o=e(7854),i=e(4705),a=e(1320),u=e(6656),c=e(4326),s=e(9587),f=e(7593),l=e(7293),h=e(30),p=e(8006).f,v=e(1236).f,g=e(3070).f,d=e(3111).trim,y="Number",m=o.Number,b=m.prototype,x=c(h(b))==y,w=function(t){var r,e,n,o,i,a,u,c,s=f(t,!1);if("string"==typeof s&&s.length>2)if(43===(r=(s=d(s)).charCodeAt(0))||45===r){if(88===(e=s.charCodeAt(2))||120===e)return NaN}else if(48===r){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(a=(i=s.slice(2)).length,u=0;u<a;u++)if((c=i.charCodeAt(u))<48||c>o)return NaN;return parseInt(i,n)}return+s};if(i(y,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var S,A=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof A&&(x?l((function(){b.valueOf.call(e)})):c(e)!=y)?s(new m(w(r)),e,A):w(r)},E=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;E.length>O;O++)u(m,S=E[O])&&!u(A,S)&&g(A,S,v(m,S));A.prototype=b,b.constructor=A,a(o,y,A)}},3299:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},5192:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{isFinite:e(7023)})},3161:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{isInteger:e(8730)})},4048:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},8285:(t,r,e)=>{var n=e(2109),o=e(8730),i=Math.abs;n({target:"Number",stat:!0},{isSafeInteger:function(t){return o(t)&&i(t)<=9007199254740991}})},4363:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},5994:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},1874:(t,r,e)=>{var n=e(2109),o=e(2814);n({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},9494:(t,r,e)=>{var n=e(2109),o=e(3009);n({target:"Number",stat:!0,forced:Number.parseInt!=o},{parseInt:o})},6977:(t,r,e)=>{"use strict";var n=e(2109),o=e(9958),i=e(863),a=e(8415),u=e(7293),c=1..toFixed,s=Math.floor,f=function(t,r,e){return 0===r?e:r%2==1?f(t,r-1,e*t):f(t*t,r/2,e)},l=function(t,r,e){for(var n=-1,o=e;++n<6;)o+=r*t[n],t[n]=o%1e7,o=s(o/1e7)},h=function(t,r){for(var e=6,n=0;--e>=0;)n+=t[e],t[e]=s(n/r),n=n%r*1e7},p=function(t){for(var r=6,e="";--r>=0;)if(""!==e||0===r||0!==t[r]){var n=String(t[r]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};n({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){c.call({})}))},{toFixed:function(t){var r,e,n,u,c=i(this),s=o(t),v=[0,0,0,0,0,0],g="",d="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(g="-",c=-c),c>1e-21)if(e=(r=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r}(c*f(2,69,1))-69)<0?c*f(2,-r,1):c/f(2,r,1),e*=4503599627370496,(r=52-r)>0){for(l(v,0,e),n=s;n>=7;)l(v,1e7,0),n-=7;for(l(v,f(10,n,1),0),n=r-1;n>=23;)h(v,1<<23),n-=23;h(v,1<<n),l(v,1,1),h(v,2),d=p(v)}else l(v,0,e),l(v,1<<-r,0),d=p(v)+a.call("0",s);return s>0?g+((u=d.length)<=s?"0."+a.call("0",s-u)+d:d.slice(0,u-s)+"."+d.slice(u-s)):g+d}})},5147:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(863),a=1..toPrecision;n({target:"Number",proto:!0,forced:o((function(){return"1"!==a.call(1,void 0)}))||!o((function(){a.call({})}))},{toPrecision:function(t){return void 0===t?a.call(i(this)):a.call(i(this),t)}})},9601:(t,r,e)=>{var n=e(2109),o=e(1574);n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},8011:(t,r,e)=>{e(2109)({target:"Object",stat:!0,sham:!e(9781)},{create:e(30)})},9595:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(9026),a=e(7908),u=e(3099),c=e(3070);o&&n({target:"Object",proto:!0,forced:i},{__defineGetter__:function(t,r){c.f(a(this),t,{get:u(r),enumerable:!0,configurable:!0})}})},3321:(t,r,e)=>{var n=e(2109),o=e(9781);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:e(6048)})},9070:(t,r,e)=>{var n=e(2109),o=e(9781);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(3070).f})},5500:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(9026),a=e(7908),u=e(3099),c=e(3070);o&&n({target:"Object",proto:!0,forced:i},{__defineSetter__:function(t,r){c.f(a(this),t,{set:u(r),enumerable:!0,configurable:!0})}})},9720:(t,r,e)=>{var n=e(2109),o=e(4699).entries;n({target:"Object",stat:!0},{entries:function(t){return o(t)}})},3371:(t,r,e)=>{var n=e(2109),o=e(6677),i=e(7293),a=e(111),u=e(2423).onFreeze,c=Object.freeze;n({target:"Object",stat:!0,forced:i((function(){c(1)})),sham:!o},{freeze:function(t){return c&&a(t)?c(u(t)):t}})},8559:(t,r,e)=>{var n=e(2109),o=e(408),i=e(6135);n({target:"Object",stat:!0},{fromEntries:function(t){var r={};return o(t,(function(t,e){i(r,t,e)}),{AS_ENTRIES:!0}),r}})},5003:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(5656),a=e(1236).f,u=e(9781),c=o((function(){a(1)}));n({target:"Object",stat:!0,forced:!u||c,sham:!u},{getOwnPropertyDescriptor:function(t,r){return a(i(t),r)}})},9337:(t,r,e)=>{var n=e(2109),o=e(9781),i=e(3887),a=e(5656),u=e(1236),c=e(6135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var r,e,n=a(t),o=u.f,s=i(n),f={},l=0;s.length>l;)void 0!==(e=o(n,r=s[l++]))&&c(f,r,e);return f}})},6210:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(1156).f;n({target:"Object",stat:!0,forced:o((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:i})},489:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(7908),a=e(9518),u=e(8544);n({target:"Object",stat:!0,forced:o((function(){a(1)})),sham:!u},{getPrototypeOf:function(t){return a(i(t))}})},1825:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(111),a=Object.isExtensible;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isExtensible:function(t){return!!i(t)&&(!a||a(t))}})},8410:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(111),a=Object.isFrozen;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isFrozen:function(t){return!i(t)||!!a&&a(t)}})},2200:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(111),a=Object.isSealed;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isSealed:function(t){return!i(t)||!!a&&a(t)}})},3304:(t,r,e)=>{e(2109)({target:"Object",stat:!0},{is:e(1150)})},7941:(t,r,e)=>{var n=e(2109),o=e(7908),i=e(1956);n({target:"Object",stat:!0,forced:e(7293)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},4869:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(9026),a=e(7908),u=e(7593),c=e(9518),s=e(1236).f;o&&n({target:"Object",proto:!0,forced:i},{__lookupGetter__:function(t){var r,e=a(this),n=u(t,!0);do{if(r=s(e,n))return r.get}while(e=c(e))}})},3952:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(9026),a=e(7908),u=e(7593),c=e(9518),s=e(1236).f;o&&n({target:"Object",proto:!0,forced:i},{__lookupSetter__:function(t){var r,e=a(this),n=u(t,!0);do{if(r=s(e,n))return r.set}while(e=c(e))}})},7227:(t,r,e)=>{var n=e(2109),o=e(111),i=e(2423).onFreeze,a=e(6677),u=e(7293),c=Object.preventExtensions;n({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{preventExtensions:function(t){return c&&o(t)?c(i(t)):t}})},514:(t,r,e)=>{var n=e(2109),o=e(111),i=e(2423).onFreeze,a=e(6677),u=e(7293),c=Object.seal;n({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{seal:function(t){return c&&o(t)?c(i(t)):t}})},8304:(t,r,e)=>{e(2109)({target:"Object",stat:!0},{setPrototypeOf:e(7674)})},1539:(t,r,e)=>{var n=e(1694),o=e(1320),i=e(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},6833:(t,r,e)=>{var n=e(2109),o=e(4699).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},4678:(t,r,e)=>{var n=e(2109),o=e(2814);n({global:!0,forced:parseFloat!=o},{parseFloat:o})},1058:(t,r,e)=>{var n=e(2109),o=e(3009);n({global:!0,forced:parseInt!=o},{parseInt:o})},7922:(t,r,e)=>{"use strict";var n=e(2109),o=e(3099),i=e(8523),a=e(2534),u=e(408);n({target:"Promise",stat:!0},{allSettled:function(t){var r=this,e=i.f(r),n=e.resolve,c=e.reject,s=a((function(){var e=o(r.resolve),i=[],a=0,c=1;u(t,(function(t){var o=a++,u=!1;i.push(void 0),c++,e.call(r,t).then((function(t){u||(u=!0,i[o]={status:"fulfilled",value:t},--c||n(i))}),(function(t){u||(u=!0,i[o]={status:"rejected",reason:t},--c||n(i))}))})),--c||n(i)}));return s.error&&c(s.value),e.promise}})},4668:(t,r,e)=>{"use strict";var n=e(2109),o=e(3099),i=e(5005),a=e(8523),u=e(2534),c=e(408),s="No one promise resolved";n({target:"Promise",stat:!0},{any:function(t){var r=this,e=a.f(r),n=e.resolve,f=e.reject,l=u((function(){var e=o(r.resolve),a=[],u=0,l=1,h=!1;c(t,(function(t){var o=u++,c=!1;a.push(void 0),l++,e.call(r,t).then((function(t){c||h||(h=!0,n(t))}),(function(t){c||h||(c=!0,a[o]=t,--l||f(new(i("AggregateError"))(a,s)))}))})),--l||f(new(i("AggregateError"))(a,s))}));return l.error&&f(l.value),e.promise}})},7727:(t,r,e)=>{"use strict";var n=e(2109),o=e(1913),i=e(3366),a=e(7293),u=e(5005),c=e(6707),s=e(9478),f=e(1320);n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var r=c(this,u("Promise")),e="function"==typeof t;return this.then(e?function(e){return s(r,t()).then((function(){return e}))}:t,e?function(e){return s(r,t()).then((function(){throw e}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||f(i.prototype,"finally",u("Promise").prototype.finally)},8674:(t,r,e)=>{"use strict";var n,o,i,a,u=e(2109),c=e(1913),s=e(7854),f=e(5005),l=e(3366),h=e(1320),p=e(2248),v=e(8003),g=e(6340),d=e(111),y=e(3099),m=e(5787),b=e(2788),x=e(408),w=e(7072),S=e(6707),A=e(261).set,E=e(5948),O=e(9478),T=e(842),j=e(8523),R=e(2534),I=e(9909),M=e(4705),L=e(5112),k=e(5268),P=e(7392),N=L("species"),_="Promise",U=I.get,F=I.set,C=I.getterFor(_),D=l,B=s.TypeError,z=s.document,q=s.process,W=f("fetch"),G=j.f,V=G,$=!!(z&&z.createEvent&&s.dispatchEvent),Y="function"==typeof PromiseRejectionEvent,J="unhandledrejection",X=M(_,(function(){if(b(D)===String(D)){if(66===P)return!0;if(!k&&!Y)return!0}if(c&&!D.prototype.finally)return!0;if(P>=51&&/native code/.test(D))return!1;var t=D.resolve(1),r=function(t){t((function(){}),(function(){}))};return(t.constructor={})[N]=r,!(t.then((function(){}))instanceof r)})),K=X||!w((function(t){D.all(t).catch((function(){}))})),H=function(t){var r;return!(!d(t)||"function"!=typeof(r=t.then))&&r},Q=function(t,r){if(!t.notified){t.notified=!0;var e=t.reactions;E((function(){for(var n=t.value,o=1==t.state,i=0;e.length>i;){var a,u,c,s=e[i++],f=o?s.ok:s.fail,l=s.resolve,h=s.reject,p=s.domain;try{f?(o||(2===t.rejection&&et(t),t.rejection=1),!0===f?a=n:(p&&p.enter(),a=f(n),p&&(p.exit(),c=!0)),a===s.promise?h(B("Promise-chain cycle")):(u=H(a))?u.call(a,l,h):l(a)):h(n)}catch(t){p&&!c&&p.exit(),h(t)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&tt(t)}))}},Z=function(t,r,e){var n,o;$?((n=z.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),s.dispatchEvent(n)):n={promise:r,reason:e},!Y&&(o=s["on"+t])?o(n):t===J&&T("Unhandled promise rejection",e)},tt=function(t){A.call(s,(function(){var r,e=t.facade,n=t.value;if(rt(t)&&(r=R((function(){k?q.emit("unhandledRejection",n,e):Z(J,e,n)})),t.rejection=k||rt(t)?2:1,r.error))throw r.value}))},rt=function(t){return 1!==t.rejection&&!t.parent},et=function(t){A.call(s,(function(){var r=t.facade;k?q.emit("rejectionHandled",r):Z("rejectionhandled",r,t.value)}))},nt=function(t,r,e){return function(n){t(r,n,e)}},ot=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,Q(t,!0))},it=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw B("Promise can't be resolved itself");var n=H(r);n?E((function(){var e={done:!1};try{n.call(r,nt(it,e,t),nt(ot,e,t))}catch(r){ot(e,r,t)}})):(t.value=r,t.state=1,Q(t,!1))}catch(r){ot({done:!1},r,t)}}};X&&(D=function(t){m(this,D,_),y(t),n.call(this);var r=U(this);try{t(nt(it,r),nt(ot,r))}catch(t){ot(r,t)}},(n=function(t){F(this,{type:_,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=p(D.prototype,{then:function(t,r){var e=C(this),n=G(S(this,D));return n.ok="function"!=typeof t||t,n.fail="function"==typeof r&&r,n.domain=k?q.domain:void 0,e.parent=!0,e.reactions.push(n),0!=e.state&&Q(e,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,r=U(t);this.promise=t,this.resolve=nt(it,r),this.reject=nt(ot,r)},j.f=G=function(t){return t===D||t===i?new o(t):V(t)},c||"function"!=typeof l||(a=l.prototype.then,h(l.prototype,"then",(function(t,r){var e=this;return new D((function(t,r){a.call(e,t,r)})).then(t,r)}),{unsafe:!0}),"function"==typeof W&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(D,W.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:X},{Promise:D}),v(D,_,!1,!0),g(_),i=f(_),u({target:_,stat:!0,forced:X},{reject:function(t){var r=G(this);return r.reject.call(void 0,t),r.promise}}),u({target:_,stat:!0,forced:c||X},{resolve:function(t){return O(c&&this===i?D:this,t)}}),u({target:_,stat:!0,forced:K},{all:function(t){var r=this,e=G(r),n=e.resolve,o=e.reject,i=R((function(){var e=y(r.resolve),i=[],a=0,u=1;x(t,(function(t){var c=a++,s=!1;i.push(void 0),u++,e.call(r,t).then((function(t){s||(s=!0,i[c]=t,--u||n(i))}),o)})),--u||n(i)}));return i.error&&o(i.value),e.promise},race:function(t){var r=this,e=G(r),n=e.reject,o=R((function(){var o=y(r.resolve);x(t,(function(t){o.call(r,t).then(e.resolve,n)}))}));return o.error&&n(o.value),e.promise}})},224:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(3099),a=e(9670),u=e(7293),c=o("Reflect","apply"),s=Function.apply;n({target:"Reflect",stat:!0,forced:!u((function(){c((function(){}))}))},{apply:function(t,r,e){return i(t),a(e),c?c(t,r,e):s.call(t,r,e)}})},2419:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(3099),a=e(9670),u=e(111),c=e(30),s=e(7065),f=e(7293),l=o("Reflect","construct"),h=f((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),p=!f((function(){l((function(){}))})),v=h||p;n({target:"Reflect",stat:!0,forced:v,sham:v},{construct:function(t,r){i(t),a(r);var e=arguments.length<3?t:i(arguments[2]);if(p&&!h)return l(t,r,e);if(t==e){switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}var n=[null];return n.push.apply(n,r),new(s.apply(t,n))}var o=e.prototype,f=c(u(o)?o:Object.prototype),v=Function.apply.call(t,f,r);return u(v)?v:f}})},9596:(t,r,e)=>{var n=e(2109),o=e(9781),i=e(9670),a=e(7593),u=e(3070);n({target:"Reflect",stat:!0,forced:e(7293)((function(){Reflect.defineProperty(u.f({},1,{value:1}),1,{value:2})})),sham:!o},{defineProperty:function(t,r,e){i(t);var n=a(r,!0);i(e);try{return u.f(t,n,e),!0}catch(t){return!1}}})},2586:(t,r,e)=>{var n=e(2109),o=e(9670),i=e(1236).f;n({target:"Reflect",stat:!0},{deleteProperty:function(t,r){var e=i(o(t),r);return!(e&&!e.configurable)&&delete t[r]}})},5683:(t,r,e)=>{var n=e(2109),o=e(9781),i=e(9670),a=e(1236);n({target:"Reflect",stat:!0,sham:!o},{getOwnPropertyDescriptor:function(t,r){return a.f(i(t),r)}})},9361:(t,r,e)=>{var n=e(2109),o=e(9670),i=e(9518);n({target:"Reflect",stat:!0,sham:!e(8544)},{getPrototypeOf:function(t){return i(o(t))}})},4819:(t,r,e)=>{var n=e(2109),o=e(111),i=e(9670),a=e(6656),u=e(1236),c=e(9518);n({target:"Reflect",stat:!0},{get:function t(r,e){var n,s,f=arguments.length<3?r:arguments[2];return i(r)===f?r[e]:(n=u.f(r,e))?a(n,"value")?n.value:void 0===n.get?void 0:n.get.call(f):o(s=c(r))?t(s,e,f):void 0}})},1037:(t,r,e)=>{e(2109)({target:"Reflect",stat:!0},{has:function(t,r){return r in t}})},5898:(t,r,e)=>{var n=e(2109),o=e(9670),i=Object.isExtensible;n({target:"Reflect",stat:!0},{isExtensible:function(t){return o(t),!i||i(t)}})},7556:(t,r,e)=>{e(2109)({target:"Reflect",stat:!0},{ownKeys:e(3887)})},4361:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(9670);n({target:"Reflect",stat:!0,sham:!e(6677)},{preventExtensions:function(t){i(t);try{var r=o("Object","preventExtensions");return r&&r(t),!0}catch(t){return!1}}})},9532:(t,r,e)=>{var n=e(2109),o=e(9670),i=e(6077),a=e(7674);a&&n({target:"Reflect",stat:!0},{setPrototypeOf:function(t,r){o(t),i(r);try{return a(t,r),!0}catch(t){return!1}}})},3593:(t,r,e)=>{var n=e(2109),o=e(9670),i=e(111),a=e(6656),u=e(7293),c=e(3070),s=e(1236),f=e(9518),l=e(9114);n({target:"Reflect",stat:!0,forced:u((function(){var t=function(){},r=c.f(new t,"a",{configurable:!0});return!1!==Reflect.set(t.prototype,"a",1,r)}))},{set:function t(r,e,n){var u,h,p=arguments.length<4?r:arguments[3],v=s.f(o(r),e);if(!v){if(i(h=f(r)))return t(h,e,n,p);v=l(0)}if(a(v,"value")){if(!1===v.writable||!i(p))return!1;if(u=s.f(p,e)){if(u.get||u.set||!1===u.writable)return!1;u.value=n,c.f(p,e,u)}else c.f(p,e,l(0,n));return!0}return void 0!==v.set&&(v.set.call(p,n),!0)}})},1299:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(8003);n({global:!0},{Reflect:{}}),i(o.Reflect,"Reflect",!0)},4603:(t,r,e)=>{var n=e(9781),o=e(7854),i=e(4705),a=e(9587),u=e(3070).f,c=e(8006).f,s=e(7850),f=e(7066),l=e(2999),h=e(1320),p=e(7293),v=e(9909).set,g=e(6340),d=e(5112)("match"),y=o.RegExp,m=y.prototype,b=/a/g,x=/a/g,w=new y(b)!==b,S=l.UNSUPPORTED_Y;if(n&&i("RegExp",!w||S||p((function(){return x[d]=!1,y(b)!=b||y(x)==x||"/a/i"!=y(b,"i")})))){for(var A=function(t,r){var e,n=this instanceof A,o=s(t),i=void 0===r;if(!n&&o&&t.constructor===A&&i)return t;w?o&&!i&&(t=t.source):t instanceof A&&(i&&(r=f.call(t)),t=t.source),S&&(e=!!r&&r.indexOf("y")>-1)&&(r=r.replace(/y/g,""));var u=a(w?new y(t,r):y(t,r),n?this:m,A);return S&&e&&v(u,{sticky:e}),u},E=function(t){t in A||u(A,t,{configurable:!0,get:function(){return y[t]},set:function(r){y[t]=r}})},O=c(y),T=0;O.length>T;)E(O[T++]);m.constructor=A,A.prototype=m,h(o,"RegExp",A)}g("RegExp")},4916:(t,r,e)=>{"use strict";var n=e(2109),o=e(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},2087:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(7066),a=e(2999).UNSUPPORTED_Y;n&&("g"!=/./g.flags||a)&&o.f(RegExp.prototype,"flags",{configurable:!0,get:i})},8386:(t,r,e)=>{var n=e(9781),o=e(2999).UNSUPPORTED_Y,i=e(3070).f,a=e(9909).get,u=RegExp.prototype;n&&o&&i(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==u){if(this instanceof RegExp)return!!a(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}})},7601:(t,r,e)=>{"use strict";e(4916);var n,o,i=e(2109),a=e(111),u=(n=!1,(o=/[ac]/).exec=function(){return n=!0,/./.exec.apply(this,arguments)},!0===o.test("abc")&&n),c=/./.test;i({target:"RegExp",proto:!0,forced:!u},{test:function(t){if("function"!=typeof this.exec)return c.call(this,t);var r=this.exec(t);if(null!==r&&!a(r))throw new Error("RegExp exec method returned something other than an Object or null");return!!r}})},9714:(t,r,e)=>{"use strict";var n=e(1320),o=e(9670),i=e(7293),a=e(7066),u="toString",c=RegExp.prototype,s=c.toString,f=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=u;(f||l)&&n(RegExp.prototype,u,(function(){var t=o(this),r=String(t.source),e=t.flags;return"/"+r+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in c)?a.call(t):e)}),{unsafe:!0})},189:(t,r,e)=>{"use strict";var n=e(7710),o=e(5631);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},5218:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("anchor")},{anchor:function(t){return o(this,"a","name",t)}})},4475:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("big")},{big:function(){return o(this,"big","","")}})},7929:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("blink")},{blink:function(){return o(this,"blink","","")}})},915:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("bold")},{bold:function(){return o(this,"b","","")}})},9841:(t,r,e)=>{"use strict";var n=e(2109),o=e(8710).codeAt;n({target:"String",proto:!0},{codePointAt:function(t){return o(this,t)}})},7852:(t,r,e)=>{"use strict";var n,o=e(2109),i=e(1236).f,a=e(7466),u=e(3929),c=e(4488),s=e(4964),f=e(1913),l="".endsWith,h=Math.min,p=s("endsWith");o({target:"String",proto:!0,forced:!(!f&&!p&&(n=i(String.prototype,"endsWith"),n&&!n.writable)||p)},{endsWith:function(t){var r=String(c(this));u(t);var e=arguments.length>1?arguments[1]:void 0,n=a(r.length),o=void 0===e?n:h(a(e),n),i=String(t);return l?l.call(r,i,o):r.slice(o-i.length,o)===i}})},9253:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("fixed")},{fixed:function(){return o(this,"tt","","")}})},2125:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("fontcolor")},{fontcolor:function(t){return o(this,"font","color",t)}})},8830:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("fontsize")},{fontsize:function(t){return o(this,"font","size",t)}})},4953:(t,r,e)=>{var n=e(2109),o=e(1400),i=String.fromCharCode,a=String.fromCodePoint;n({target:"String",stat:!0,forced:!!a&&1!=a.length},{fromCodePoint:function(t){for(var r,e=[],n=arguments.length,a=0;n>a;){if(r=+arguments[a++],o(r,1114111)!==r)throw RangeError(r+" is not a valid code point");e.push(r<65536?i(r):i(55296+((r-=65536)>>10),r%1024+56320))}return e.join("")}})},2023:(t,r,e)=>{"use strict";var n=e(2109),o=e(3929),i=e(4488);n({target:"String",proto:!0,forced:!e(4964)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},8734:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("italics")},{italics:function(){return o(this,"i","","")}})},8783:(t,r,e)=>{"use strict";var n=e(8710).charAt,o=e(9909),i=e(654),a="String Iterator",u=o.set,c=o.getterFor(a);i(String,"String",(function(t){u(this,{type:a,string:String(t),index:0})}),(function(){var t,r=c(this),e=r.string,o=r.index;return o>=e.length?{value:void 0,done:!0}:(t=n(e,o),r.index+=t.length,{value:t,done:!1})}))},9254:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("link")},{link:function(t){return o(this,"a","href",t)}})},6373:(t,r,e)=>{"use strict";var n=e(2109),o=e(4994),i=e(4488),a=e(7466),u=e(3099),c=e(9670),s=e(4326),f=e(7850),l=e(7066),h=e(8880),p=e(7293),v=e(5112),g=e(6707),d=e(1530),y=e(9909),m=e(1913),b=v("matchAll"),x="RegExp String Iterator",w=y.set,S=y.getterFor(x),A=RegExp.prototype,E=A.exec,O="".matchAll,T=!!O&&!p((function(){"a".matchAll(/./)})),j=o((function(t,r,e,n){w(this,{type:x,regexp:t,string:r,global:e,unicode:n,done:!1})}),"RegExp String",(function(){var t=S(this);if(t.done)return{value:void 0,done:!0};var r=t.regexp,e=t.string,n=function(t,r){var e,n=t.exec;if("function"==typeof n){if("object"!=typeof(e=n.call(t,r)))throw TypeError("Incorrect exec result");return e}return E.call(t,r)}(r,e);return null===n?{value:void 0,done:t.done=!0}:t.global?(""==String(n[0])&&(r.lastIndex=d(e,a(r.lastIndex),t.unicode)),{value:n,done:!1}):(t.done=!0,{value:n,done:!1})})),R=function(t){var r,e,n,o,i,u,s=c(this),f=String(t);return r=g(s,RegExp),void 0===(e=s.flags)&&s instanceof RegExp&&!("flags"in A)&&(e=l.call(s)),n=void 0===e?"":String(e),o=new r(r===RegExp?s.source:s,n),i=!!~n.indexOf("g"),u=!!~n.indexOf("u"),o.lastIndex=a(s.lastIndex),new j(o,f,i,u)};n({target:"String",proto:!0,forced:T},{matchAll:function(t){var r,e,n,o=i(this);if(null!=t){if(f(t)&&!~String(i("flags"in A?t.flags:l.call(t))).indexOf("g"))throw TypeError("`.matchAll` does not allow non-global regexes");if(T)return O.apply(o,arguments);if(void 0===(e=t[b])&&m&&"RegExp"==s(t)&&(e=R),null!=e)return u(e).call(t,o)}else if(T)return O.apply(o,arguments);return r=String(o),n=new RegExp(t,"g"),m?R.call(n,r):n[b](r)}}),m||b in A||h(A,b,R)},4723:(t,r,e)=>{"use strict";var n=e(7007),o=e(9670),i=e(7466),a=e(4488),u=e(1530),c=e(7651);n("match",1,(function(t,r,e){return[function(r){var e=a(this),n=null==r?void 0:r[t];return void 0!==n?n.call(r,e):new RegExp(r)[t](String(e))},function(t){var n=e(r,t,this);if(n.done)return n.value;var a=o(t),s=String(this);if(!a.global)return c(a,s);var f=a.unicode;a.lastIndex=0;for(var l,h=[],p=0;null!==(l=c(a,s));){var v=String(l[0]);h[p]=v,""===v&&(a.lastIndex=u(s,i(a.lastIndex),f)),p++}return 0===p?null:h}]}))},6528:(t,r,e)=>{"use strict";var n=e(2109),o=e(6650).end;n({target:"String",proto:!0,forced:e(7061)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},3112:(t,r,e)=>{"use strict";var n=e(2109),o=e(6650).start;n({target:"String",proto:!0,forced:e(7061)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},8992:(t,r,e)=>{var n=e(2109),o=e(5656),i=e(7466);n({target:"String",stat:!0},{raw:function(t){for(var r=o(t.raw),e=i(r.length),n=arguments.length,a=[],u=0;e>u;)a.push(String(r[u++])),u<n&&a.push(String(arguments[u]));return a.join("")}})},2481:(t,r,e)=>{e(2109)({target:"String",proto:!0},{repeat:e(8415)})},8757:(t,r,e)=>{"use strict";var n=e(2109),o=e(4488),i=e(7850),a=e(7066),u=e(647),c=e(5112),s=e(1913),f=c("replace"),l=RegExp.prototype,h=Math.max,p=function(t,r,e){return e>t.length?-1:""===r?e:t.indexOf(r,e)};n({target:"String",proto:!0},{replaceAll:function(t,r){var e,n,c,v,g,d,y,m,b=o(this),x=0,w=0,S="";if(null!=t){if((e=i(t))&&!~String(o("flags"in l?t.flags:a.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(n=t[f]))return n.call(t,b,r);if(s&&e)return String(b).replace(t,r)}for(c=String(b),v=String(t),(g="function"==typeof r)||(r=String(r)),d=v.length,y=h(1,d),x=p(c,v,0);-1!==x;)m=g?String(r(v,x,c)):u(v,c,x,[],void 0,r),S+=c.slice(w,x)+m,w=x+d,x=p(c,v,x+y);return w<c.length&&(S+=c.slice(w)),S}})},5306:(t,r,e)=>{"use strict";var n=e(7007),o=e(9670),i=e(7466),a=e(9958),u=e(4488),c=e(1530),s=e(647),f=e(7651),l=Math.max,h=Math.min;n("replace",2,(function(t,r,e,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(e,n){var o=u(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,n){if(!p&&v||"string"==typeof n&&-1===n.indexOf(g)){var u=e(r,t,this,n);if(u.done)return u.value}var d=o(t),y=String(this),m="function"==typeof n;m||(n=String(n));var b=d.global;if(b){var x=d.unicode;d.lastIndex=0}for(var w=[];;){var S=f(d,y);if(null===S)break;if(w.push(S),!b)break;""===String(S[0])&&(d.lastIndex=c(y,i(d.lastIndex),x))}for(var A,E="",O=0,T=0;T<w.length;T++){S=w[T];for(var j=String(S[0]),R=l(h(a(S.index),y.length),0),I=[],M=1;M<S.length;M++)I.push(void 0===(A=S[M])?A:String(A));var L=S.groups;if(m){var k=[j].concat(I,R,y);void 0!==L&&k.push(L);var P=String(n.apply(void 0,k))}else P=s(j,y,R,I,L,n);R>=O&&(E+=y.slice(O,R)+P,O=R+j.length)}return E+y.slice(O)}]}))},4765:(t,r,e)=>{"use strict";var n=e(7007),o=e(9670),i=e(4488),a=e(1150),u=e(7651);n("search",1,(function(t,r,e){return[function(r){var e=i(this),n=null==r?void 0:r[t];return void 0!==n?n.call(r,e):new RegExp(r)[t](String(e))},function(t){var n=e(r,t,this);if(n.done)return n.value;var i=o(t),c=String(this),s=i.lastIndex;a(s,0)||(i.lastIndex=0);var f=u(i,c);return a(i.lastIndex,s)||(i.lastIndex=s),null===f?-1:f.index}]}))},7268:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("small")},{small:function(){return o(this,"small","","")}})},3123:(t,r,e)=>{"use strict";var n=e(7007),o=e(7850),i=e(9670),a=e(4488),u=e(6707),c=e(1530),s=e(7466),f=e(7651),l=e(2261),h=e(7293),p=[].push,v=Math.min,g=4294967295,d=!h((function(){return!RegExp(g,"y")}));n("split",2,(function(t,r,e){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n=String(a(this)),i=void 0===e?g:e>>>0;if(0===i)return[];if(void 0===t)return[n];if(!o(t))return r.call(n,t,i);for(var u,c,s,f=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,d=new RegExp(t.source,h+"g");(u=l.call(d,n))&&!((c=d.lastIndex)>v&&(f.push(n.slice(v,u.index)),u.length>1&&u.index<n.length&&p.apply(f,u.slice(1)),s=u[0].length,v=c,f.length>=i));)d.lastIndex===u.index&&d.lastIndex++;return v===n.length?!s&&d.test("")||f.push(""):f.push(n.slice(v)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,e){var o=a(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,e):n.call(String(o),r,e)},function(t,o){var a=e(n,t,this,o,n!==r);if(a.done)return a.value;var l=i(t),h=String(this),p=u(l,RegExp),y=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(d?"y":"g"),b=new p(d?l:"^(?:"+l.source+")",m),x=void 0===o?g:o>>>0;if(0===x)return[];if(0===h.length)return null===f(b,h)?[h]:[];for(var w=0,S=0,A=[];S<h.length;){b.lastIndex=d?S:0;var E,O=f(b,d?h:h.slice(S));if(null===O||(E=v(s(b.lastIndex+(d?0:S)),h.length))===w)S=c(h,S,y);else{if(A.push(h.slice(w,S)),A.length===x)return A;for(var T=1;T<=O.length-1;T++)if(A.push(O[T]),A.length===x)return A;S=w=E}}return A.push(h.slice(w)),A}]}),!d)},6755:(t,r,e)=>{"use strict";var n,o=e(2109),i=e(1236).f,a=e(7466),u=e(3929),c=e(4488),s=e(4964),f=e(1913),l="".startsWith,h=Math.min,p=s("startsWith");o({target:"String",proto:!0,forced:!(!f&&!p&&(n=i(String.prototype,"startsWith"),n&&!n.writable)||p)},{startsWith:function(t){var r=String(c(this));u(t);var e=a(h(arguments.length>1?arguments[1]:void 0,r.length)),n=String(t);return l?l.call(r,n,e):r.slice(e,e+n.length)===n}})},7397:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("strike")},{strike:function(){return o(this,"strike","","")}})},86:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("sub")},{sub:function(){return o(this,"sub","","")}})},623:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("sup")},{sup:function(){return o(this,"sup","","")}})},8702:(t,r,e)=>{"use strict";var n=e(2109),o=e(3111).end,i=e(6091)("trimEnd"),a=i?function(){return o(this)}:"".trimEnd;n({target:"String",proto:!0,forced:i},{trimEnd:a,trimRight:a})},5674:(t,r,e)=>{"use strict";var n=e(2109),o=e(3111).start,i=e(6091)("trimStart"),a=i?function(){return o(this)}:"".trimStart;n({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},3210:(t,r,e)=>{"use strict";var n=e(2109),o=e(3111).trim;n({target:"String",proto:!0,forced:e(6091)("trim")},{trim:function(){return o(this)}})},2443:(t,r,e)=>{e(7235)("asyncIterator")},1817:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(7854),a=e(6656),u=e(111),c=e(3070).f,s=e(9920),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof h?new f(t):void 0===t?f():f(t);return""===t&&(l[r]=!0),r};s(h,f);var p=h.prototype=f.prototype;p.constructor=h;var v=p.toString,g="Symbol(test)"==String(f("test")),d=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,r=v.call(t);if(a(l,t))return"";var e=g?r.slice(7,-1):r.replace(d,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:h})}},2401:(t,r,e)=>{e(7235)("hasInstance")},8722:(t,r,e)=>{e(7235)("isConcatSpreadable")},2165:(t,r,e)=>{e(7235)("iterator")},2526:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(5005),a=e(1913),u=e(9781),c=e(133),s=e(3307),f=e(7293),l=e(6656),h=e(3157),p=e(111),v=e(9670),g=e(7908),d=e(5656),y=e(7593),m=e(9114),b=e(30),x=e(1956),w=e(8006),S=e(1156),A=e(5181),E=e(1236),O=e(3070),T=e(5296),j=e(8880),R=e(1320),I=e(2309),M=e(6200),L=e(3501),k=e(9711),P=e(5112),N=e(6061),_=e(7235),U=e(8003),F=e(9909),C=e(2092).forEach,D=M("hidden"),B="Symbol",z=P("toPrimitive"),q=F.set,W=F.getterFor(B),G=Object.prototype,V=o.Symbol,$=i("JSON","stringify"),Y=E.f,J=O.f,X=S.f,K=T.f,H=I("symbols"),Q=I("op-symbols"),Z=I("string-to-symbol-registry"),tt=I("symbol-to-string-registry"),rt=I("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,ot=u&&f((function(){return 7!=b(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=Y(G,r);n&&delete G[r],J(t,r,e),n&&t!==G&&J(G,r,n)}:J,it=function(t,r){var e=H[t]=b(V.prototype);return q(e,{type:B,tag:t,description:r}),u||(e.description=r),e},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ut=function(t,r,e){t===G&&ut(Q,r,e),v(t);var n=y(r,!0);return v(e),l(H,n)?(e.enumerable?(l(t,D)&&t[D][n]&&(t[D][n]=!1),e=b(e,{enumerable:m(0,!1)})):(l(t,D)||J(t,D,m(1,{})),t[D][n]=!0),ot(t,n,e)):J(t,n,e)},ct=function(t,r){v(t);var e=d(r),n=x(e).concat(ht(e));return C(n,(function(r){u&&!st.call(e,r)||ut(t,r,e[r])})),t},st=function(t){var r=y(t,!0),e=K.call(this,r);return!(this===G&&l(H,r)&&!l(Q,r))&&(!(e||!l(this,r)||!l(H,r)||l(this,D)&&this[D][r])||e)},ft=function(t,r){var e=d(t),n=y(r,!0);if(e!==G||!l(H,n)||l(Q,n)){var o=Y(e,n);return!o||!l(H,n)||l(e,D)&&e[D][n]||(o.enumerable=!0),o}},lt=function(t){var r=X(d(t)),e=[];return C(r,(function(t){l(H,t)||l(L,t)||e.push(t)})),e},ht=function(t){var r=t===G,e=X(r?Q:d(t)),n=[];return C(e,(function(t){!l(H,t)||r&&!l(G,t)||n.push(H[t])})),n};c||(R((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=k(t),e=function(t){this===G&&e.call(Q,t),l(this,D)&&l(this[D],r)&&(this[D][r]=!1),ot(this,r,m(1,t))};return u&&nt&&ot(G,r,{configurable:!0,set:e}),it(r,t)}).prototype,"toString",(function(){return W(this).tag})),R(V,"withoutSetter",(function(t){return it(k(t),t)})),T.f=st,O.f=ut,E.f=ft,w.f=S.f=lt,A.f=ht,N.f=function(t){return it(P(t),t)},u&&(J(V.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),a||R(G,"propertyIsEnumerable",st,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),C(x(rt),(function(t){_(t)})),n({target:B,stat:!0,forced:!c},{for:function(t){var r=String(t);if(l(Z,r))return Z[r];var e=V(r);return Z[r]=e,tt[e]=r,e},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!u},{create:function(t,r){return void 0===r?b(t):ct(b(t),r)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(g(t))}}),$&&n({target:"JSON",stat:!0,forced:!c||f((function(){var t=V();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))},{stringify:function(t,r,e){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=r,(p(r)||void 0!==t)&&!at(t))return h(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!at(r))return r}),o[1]=r,$.apply(null,o)}}),V.prototype[z]||j(V.prototype,z,V.prototype.valueOf),U(V,B),L[D]=!0},6066:(t,r,e)=>{e(7235)("matchAll")},9007:(t,r,e)=>{e(7235)("match")},3510:(t,r,e)=>{e(7235)("replace")},1840:(t,r,e)=>{e(7235)("search")},6982:(t,r,e)=>{e(7235)("species")},2159:(t,r,e)=>{e(7235)("split")},6649:(t,r,e)=>{e(7235)("toPrimitive")},9341:(t,r,e)=>{e(7235)("toStringTag")},543:(t,r,e)=>{e(7235)("unscopables")},2990:(t,r,e)=>{"use strict";var n=e(260),o=e(1048),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("copyWithin",(function(t,r){return o.call(i(this),t,r,arguments.length>2?arguments[2]:void 0)}))},8927:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).every,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("every",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3105:(t,r,e)=>{"use strict";var n=e(260),o=e(1285),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("fill",(function(t){return o.apply(i(this),arguments)}))},5035:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).filter,i=e(3074),a=n.aTypedArray;(0,n.exportTypedArrayMethod)("filter",(function(t){var r=o(a(this),t,arguments.length>1?arguments[1]:void 0);return i(this,r)}))},7174:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).findIndex,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("findIndex",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},4345:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).find,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("find",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},4197:(t,r,e)=>{e(9843)("Float32",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},6495:(t,r,e)=>{e(9843)("Float64",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},2846:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).forEach,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("forEach",(function(t){o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},8145:(t,r,e)=>{"use strict";var n=e(3832);(0,e(260).exportTypedArrayStaticMethod)("from",e(7321),n)},4731:(t,r,e)=>{"use strict";var n=e(260),o=e(1318).includes,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("includes",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},7209:(t,r,e)=>{"use strict";var n=e(260),o=e(1318).indexOf,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("indexOf",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},5109:(t,r,e)=>{e(9843)("Int16",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},5125:(t,r,e)=>{e(9843)("Int32",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},7145:(t,r,e)=>{e(9843)("Int8",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},6319:(t,r,e)=>{"use strict";var n=e(7854),o=e(260),i=e(6992),a=e(5112)("iterator"),u=n.Uint8Array,c=i.values,s=i.keys,f=i.entries,l=o.aTypedArray,h=o.exportTypedArrayMethod,p=u&&u.prototype[a],v=!!p&&("values"==p.name||null==p.name),g=function(){return c.call(l(this))};h("entries",(function(){return f.call(l(this))})),h("keys",(function(){return s.call(l(this))})),h("values",g,!v),h(a,g,!v)},8867:(t,r,e)=>{"use strict";var n=e(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].join;i("join",(function(t){return a.apply(o(this),arguments)}))},7789:(t,r,e)=>{"use strict";var n=e(260),o=e(6583),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("lastIndexOf",(function(t){return o.apply(i(this),arguments)}))},3739:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).map,i=e(6707),a=n.aTypedArray,u=n.aTypedArrayConstructor;(0,n.exportTypedArrayMethod)("map",(function(t){return o(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,r){return new(u(i(t,t.constructor)))(r)}))}))},5206:(t,r,e)=>{"use strict";var n=e(260),o=e(3832),i=n.aTypedArrayConstructor;(0,n.exportTypedArrayStaticMethod)("of",(function(){for(var t=0,r=arguments.length,e=new(i(this))(r);r>t;)e[t]=arguments[t++];return e}),o)},4483:(t,r,e)=>{"use strict";var n=e(260),o=e(3671).right,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("reduceRight",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},9368:(t,r,e)=>{"use strict";var n=e(260),o=e(3671).left,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("reduce",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2056:(t,r,e)=>{"use strict";var n=e(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=Math.floor;i("reverse",(function(){for(var t,r=this,e=o(r).length,n=a(e/2),i=0;i<n;)t=r[i],r[i++]=r[--e],r[e]=t;return r}))},3462:(t,r,e)=>{"use strict";var n=e(260),o=e(7466),i=e(4590),a=e(7908),u=e(7293),c=n.aTypedArray;(0,n.exportTypedArrayMethod)("set",(function(t){c(this);var r=i(arguments.length>1?arguments[1]:void 0,1),e=this.length,n=a(t),u=o(n.length),s=0;if(u+r>e)throw RangeError("Wrong length");for(;s<u;)this[r+s]=n[s++]}),u((function(){new Int8Array(1).set({})})))},678:(t,r,e)=>{"use strict";var n=e(260),o=e(6707),i=e(7293),a=n.aTypedArray,u=n.aTypedArrayConstructor,c=n.exportTypedArrayMethod,s=[].slice;c("slice",(function(t,r){for(var e=s.call(a(this),t,r),n=o(this,this.constructor),i=0,c=e.length,f=new(u(n))(c);c>i;)f[i]=e[i++];return f}),i((function(){new Int8Array(1).slice()})))},7462:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).some,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("some",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3824:(t,r,e)=>{"use strict";var n=e(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].sort;i("sort",(function(t){return a.call(o(this),t)}))},5021:(t,r,e)=>{"use strict";var n=e(260),o=e(7466),i=e(1400),a=e(6707),u=n.aTypedArray;(0,n.exportTypedArrayMethod)("subarray",(function(t,r){var e=u(this),n=e.length,c=i(t,n);return new(a(e,e.constructor))(e.buffer,e.byteOffset+c*e.BYTES_PER_ELEMENT,o((void 0===r?n:i(r,n))-c))}))},2974:(t,r,e)=>{"use strict";var n=e(7854),o=e(260),i=e(7293),a=n.Int8Array,u=o.aTypedArray,c=o.exportTypedArrayMethod,s=[].toLocaleString,f=[].slice,l=!!a&&i((function(){s.call(new a(1))}));c("toLocaleString",(function(){return s.apply(l?f.call(u(this)):u(this),arguments)}),i((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!i((function(){a.prototype.toLocaleString.call([1,2])})))},5016:(t,r,e)=>{"use strict";var n=e(260).exportTypedArrayMethod,o=e(7293),i=e(7854).Uint8Array,a=i&&i.prototype||{},u=[].toString,c=[].join;o((function(){u.call({})}))&&(u=function(){return c.call(this)});var s=a.toString!=u;n("toString",u,s)},8255:(t,r,e)=>{e(9843)("Uint16",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},9135:(t,r,e)=>{e(9843)("Uint32",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},2472:(t,r,e)=>{e(9843)("Uint8",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},9743:(t,r,e)=>{e(9843)("Uint8",(function(t){return function(r,e,n){return t(this,r,e,n)}}),!0)},4129:(t,r,e)=>{"use strict";var n,o=e(7854),i=e(2248),a=e(2423),u=e(7710),c=e(9320),s=e(111),f=e(9909).enforce,l=e(8536),h=!o.ActiveXObject&&"ActiveXObject"in o,p=Object.isExtensible,v=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},g=t.exports=u("WeakMap",v,c);if(l&&h){n=c.getConstructor(v,"WeakMap",!0),a.REQUIRED=!0;var d=g.prototype,y=d.delete,m=d.has,b=d.get,x=d.set;i(d,{delete:function(t){if(s(t)&&!p(t)){var r=f(this);return r.frozen||(r.frozen=new n),y.call(this,t)||r.frozen.delete(t)}return y.call(this,t)},has:function(t){if(s(t)&&!p(t)){var r=f(this);return r.frozen||(r.frozen=new n),m.call(this,t)||r.frozen.has(t)}return m.call(this,t)},get:function(t){if(s(t)&&!p(t)){var r=f(this);return r.frozen||(r.frozen=new n),m.call(this,t)?b.call(this,t):r.frozen.get(t)}return b.call(this,t)},set:function(t,r){if(s(t)&&!p(t)){var e=f(this);e.frozen||(e.frozen=new n),m.call(this,t)?x.call(this,t,r):e.frozen.set(t,r)}else x.call(this,t,r);return this}})}},8478:(t,r,e)=>{"use strict";e(7710)("WeakSet",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),e(9320))},4747:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8533),a=e(8880);for(var u in o){var c=n[u],s=c&&c.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},3948:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(6992),a=e(8880),u=e(5112),c=u("iterator"),s=u("toStringTag"),f=i.values;for(var l in o){var h=n[l],p=h&&h.prototype;if(p){if(p[c]!==f)try{a(p,c,f)}catch(t){p[c]=f}if(p[s]||a(p,s,l),o[l])for(var v in i)if(p[v]!==i[v])try{a(p,v,i[v])}catch(t){p[v]=i[v]}}}},4633:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(261);n({global:!0,bind:!0,enumerable:!0,forced:!o.setImmediate||!o.clearImmediate},{setImmediate:i.set,clearImmediate:i.clear})},5844:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(5948),a=e(5268),u=o.process;n({global:!0,enumerable:!0,noTargetGet:!0},{queueMicrotask:function(t){var r=a&&u.domain;i(r?r.bind(t):t)}})},2564:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(8113),a=[].slice,u=function(t){return function(r,e){var n=arguments.length>2,o=n?a.call(arguments,2):void 0;return t(n?function(){("function"==typeof r?r:Function(r)).apply(this,o)}:r,e)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})},1637:(t,r,e)=>{"use strict";e(6992);var n=e(2109),o=e(5005),i=e(590),a=e(1320),u=e(2248),c=e(8003),s=e(4994),f=e(9909),l=e(5787),h=e(6656),p=e(9974),v=e(648),g=e(9670),d=e(111),y=e(30),m=e(9114),b=e(8554),x=e(1246),w=e(5112),S=o("fetch"),A=o("Headers"),E=w("iterator"),O="URLSearchParams",T="URLSearchParamsIterator",j=f.set,R=f.getterFor(O),I=f.getterFor(T),M=/\+/g,L=Array(4),k=function(t){return L[t-1]||(L[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},P=function(t){try{return decodeURIComponent(t)}catch(r){return t}},N=function(t){var r=t.replace(M," "),e=4;try{return decodeURIComponent(r)}catch(t){for(;e;)r=r.replace(k(e--),P);return r}},_=/[!'()~]|%20/g,U={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},F=function(t){return U[t]},C=function(t){return encodeURIComponent(t).replace(_,F)},D=function(t,r){if(r)for(var e,n,o=r.split("&"),i=0;i<o.length;)(e=o[i++]).length&&(n=e.split("="),t.push({key:N(n.shift()),value:N(n.join("="))}))},B=function(t){this.entries.length=0,D(this.entries,t)},z=function(t,r){if(t<r)throw TypeError("Not enough arguments")},q=s((function(t,r){j(this,{type:T,iterator:b(R(t).entries),kind:r})}),"Iterator",(function(){var t=I(this),r=t.kind,e=t.iterator.next(),n=e.value;return e.done||(e.value="keys"===r?n.key:"values"===r?n.value:[n.key,n.value]),e})),W=function(){l(this,W,O);var t,r,e,n,o,i,a,u,c,s=arguments.length>0?arguments[0]:void 0,f=this,p=[];if(j(f,{type:O,entries:p,updateURL:function(){},updateSearchParams:B}),void 0!==s)if(d(s))if("function"==typeof(t=x(s)))for(e=(r=t.call(s)).next;!(n=e.call(r)).done;){if((a=(i=(o=b(g(n.value))).next).call(o)).done||(u=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");p.push({key:a.value+"",value:u.value+""})}else for(c in s)h(s,c)&&p.push({key:c,value:s[c]+""});else D(p,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},G=W.prototype;u(G,{append:function(t,r){z(arguments.length,2);var e=R(this);e.entries.push({key:t+"",value:r+""}),e.updateURL()},delete:function(t){z(arguments.length,1);for(var r=R(this),e=r.entries,n=t+"",o=0;o<e.length;)e[o].key===n?e.splice(o,1):o++;r.updateURL()},get:function(t){z(arguments.length,1);for(var r=R(this).entries,e=t+"",n=0;n<r.length;n++)if(r[n].key===e)return r[n].value;return null},getAll:function(t){z(arguments.length,1);for(var r=R(this).entries,e=t+"",n=[],o=0;o<r.length;o++)r[o].key===e&&n.push(r[o].value);return n},has:function(t){z(arguments.length,1);for(var r=R(this).entries,e=t+"",n=0;n<r.length;)if(r[n++].key===e)return!0;return!1},set:function(t,r){z(arguments.length,1);for(var e,n=R(this),o=n.entries,i=!1,a=t+"",u=r+"",c=0;c<o.length;c++)(e=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,e.value=u));i||o.push({key:a,value:u}),n.updateURL()},sort:function(){var t,r,e,n=R(this),o=n.entries,i=o.slice();for(o.length=0,e=0;e<i.length;e++){for(t=i[e],r=0;r<e;r++)if(o[r].key>t.key){o.splice(r,0,t);break}r===e&&o.push(t)}n.updateURL()},forEach:function(t){for(var r,e=R(this).entries,n=p(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<e.length;)n((r=e[o++]).value,r.key,this)},keys:function(){return new q(this,"keys")},values:function(){return new q(this,"values")},entries:function(){return new q(this,"entries")}},{enumerable:!0}),a(G,E,G.entries),a(G,"toString",(function(){for(var t,r=R(this).entries,e=[],n=0;n<r.length;)t=r[n++],e.push(C(t.key)+"="+C(t.value));return e.join("&")}),{enumerable:!0}),c(W,O),n({global:!0,forced:!i},{URLSearchParams:W}),i||"function"!=typeof S||"function"!=typeof A||n({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var r,e,n,o=[t];return arguments.length>1&&(d(r=arguments[1])&&(e=r.body,v(e)===O&&((n=r.headers?new A(r.headers):new A).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),r=y(r,{body:m(0,String(e)),headers:m(0,n)}))),o.push(r)),S.apply(this,o)}}),t.exports={URLSearchParams:W,getState:R}},285:(t,r,e)=>{"use strict";e(8783);var n,o=e(2109),i=e(9781),a=e(590),u=e(7854),c=e(6048),s=e(1320),f=e(5787),l=e(6656),h=e(1574),p=e(8457),v=e(8710).codeAt,g=e(3197),d=e(8003),y=e(1637),m=e(9909),b=u.URL,x=y.URLSearchParams,w=y.getState,S=m.set,A=m.getterFor("URL"),E=Math.floor,O=Math.pow,T="Invalid scheme",j="Invalid host",R="Invalid port",I=/[A-Za-z]/,M=/[\d+-.A-Za-z]/,L=/\d/,k=/^(0x|0X)/,P=/^[0-7]+$/,N=/^\d+$/,_=/^[\dA-Fa-f]+$/,U=/[\u0000\t\u000A\u000D #%/:?@[\\]]/,F=/[\u0000\t\u000A\u000D #/:?@[\\]]/,C=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,D=/[\t\u000A\u000D]/g,B=function(t,r){var e,n,o;if("["==r.charAt(0)){if("]"!=r.charAt(r.length-1))return j;if(!(e=q(r.slice(1,-1))))return j;t.host=e}else if(K(t)){if(r=g(r),U.test(r))return j;if(null===(e=z(r)))return j;t.host=e}else{if(F.test(r))return j;for(e="",n=p(r),o=0;o<n.length;o++)e+=J(n[o],G);t.host=e}},z=function(t){var r,e,n,o,i,a,u,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),(r=c.length)>4)return t;for(e=[],n=0;n<r;n++){if(""==(o=c[n]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=k.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?N:8==i?P:_).test(o))return t;a=parseInt(o,i)}e.push(a)}for(n=0;n<r;n++)if(a=e[n],n==r-1){if(a>=O(256,5-r))return null}else if(a>255)return null;for(u=e.pop(),n=0;n<e.length;n++)u+=e[n]*O(256,3-n);return u},q=function(t){var r,e,n,o,i,a,u,c=[0,0,0,0,0,0,0,0],s=0,f=null,l=0,h=function(){return t.charAt(l)};if(":"==h()){if(":"!=t.charAt(1))return;l+=2,f=++s}for(;h();){if(8==s)return;if(":"!=h()){for(r=e=0;e<4&&_.test(h());)r=16*r+parseInt(h(),16),l++,e++;if("."==h()){if(0==e)return;if(l-=e,s>6)return;for(n=0;h();){if(o=null,n>0){if(!("."==h()&&n<4))return;l++}if(!L.test(h()))return;for(;L.test(h());){if(i=parseInt(h(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;l++}c[s]=256*c[s]+o,2!=++n&&4!=n||s++}if(4!=n)return;break}if(":"==h()){if(l++,!h())return}else if(h())return;c[s++]=r}else{if(null!==f)return;l++,f=++s}}if(null!==f)for(a=s-f,s=7;0!=s&&a>0;)u=c[s],c[s--]=c[f+a-1],c[f+--a]=u;else if(8!=s)return;return c},W=function(t){var r,e,n,o;if("number"==typeof t){for(r=[],e=0;e<4;e++)r.unshift(t%256),t=E(t/256);return r.join(".")}if("object"==typeof t){for(r="",n=function(t){for(var r=null,e=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>e&&(r=n,e=o),n=null,o=0):(null===n&&(n=i),++o);return o>e&&(r=n,e=o),r}(t),e=0;e<8;e++)o&&0===t[e]||(o&&(o=!1),n===e?(r+=e?":":"::",o=!0):(r+=t[e].toString(16),e<7&&(r+=":")));return"["+r+"]"}return t},G={},V=h({},G,{" ":1,'"':1,"<":1,">":1,"`":1}),$=h({},V,{"#":1,"?":1,"{":1,"}":1}),Y=h({},$,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),J=function(t,r){var e=v(t,0);return e>32&&e<127&&!l(r,t)?t:encodeURIComponent(t)},X={ftp:21,file:null,http:80,https:443,ws:80,wss:443},K=function(t){return l(X,t.scheme)},H=function(t){return""!=t.username||""!=t.password},Q=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},Z=function(t,r){var e;return 2==t.length&&I.test(t.charAt(0))&&(":"==(e=t.charAt(1))||!r&&"|"==e)},tt=function(t){var r;return t.length>1&&Z(t.slice(0,2))&&(2==t.length||"/"===(r=t.charAt(2))||"\\"===r||"?"===r||"#"===r)},rt=function(t){var r=t.path,e=r.length;!e||"file"==t.scheme&&1==e&&Z(r[0],!0)||r.pop()},et=function(t){return"."===t||"%2e"===t.toLowerCase()},nt={},ot={},it={},at={},ut={},ct={},st={},ft={},lt={},ht={},pt={},vt={},gt={},dt={},yt={},mt={},bt={},xt={},wt={},St={},At={},Et=function(t,r,e,o){var i,a,u,c,s,f=e||nt,h=0,v="",g=!1,d=!1,y=!1;for(e||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,r=r.replace(C,"")),r=r.replace(D,""),i=p(r);h<=i.length;){switch(a=i[h],f){case nt:if(!a||!I.test(a)){if(e)return T;f=it;continue}v+=a.toLowerCase(),f=ot;break;case ot:if(a&&(M.test(a)||"+"==a||"-"==a||"."==a))v+=a.toLowerCase();else{if(":"!=a){if(e)return T;v="",f=it,h=0;continue}if(e&&(K(t)!=l(X,v)||"file"==v&&(H(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=v,e)return void(K(t)&&X[t.scheme]==t.port&&(t.port=null));v="","file"==t.scheme?f=dt:K(t)&&o&&o.scheme==t.scheme?f=at:K(t)?f=ft:"/"==i[h+1]?(f=ut,h++):(t.cannotBeABaseURL=!0,t.path.push(""),f=wt)}break;case it:if(!o||o.cannotBeABaseURL&&"#"!=a)return T;if(o.cannotBeABaseURL&&"#"==a){t.scheme=o.scheme,t.path=o.path.slice(),t.query=o.query,t.fragment="",t.cannotBeABaseURL=!0,f=At;break}f="file"==o.scheme?dt:ct;continue;case at:if("/"!=a||"/"!=i[h+1]){f=ct;continue}f=lt,h++;break;case ut:if("/"==a){f=ht;break}f=xt;continue;case ct:if(t.scheme=o.scheme,a==n)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query;else if("/"==a||"\\"==a&&K(t))f=st;else if("?"==a)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query="",f=St;else{if("#"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.path.pop(),f=xt;continue}t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query,t.fragment="",f=At}break;case st:if(!K(t)||"/"!=a&&"\\"!=a){if("/"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,f=xt;continue}f=ht}else f=lt;break;case ft:if(f=lt,"/"!=a||"/"!=v.charAt(h+1))continue;h++;break;case lt:if("/"!=a&&"\\"!=a){f=ht;continue}break;case ht:if("@"==a){g&&(v="%40"+v),g=!0,u=p(v);for(var m=0;m<u.length;m++){var b=u[m];if(":"!=b||y){var x=J(b,Y);y?t.password+=x:t.username+=x}else y=!0}v=""}else if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)){if(g&&""==v)return"Invalid authority";h-=p(v).length+1,v="",f=pt}else v+=a;break;case pt:case vt:if(e&&"file"==t.scheme){f=mt;continue}if(":"!=a||d){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)){if(K(t)&&""==v)return j;if(e&&""==v&&(H(t)||null!==t.port))return;if(c=B(t,v))return c;if(v="",f=bt,e)return;continue}"["==a?d=!0:"]"==a&&(d=!1),v+=a}else{if(""==v)return j;if(c=B(t,v))return c;if(v="",f=gt,e==vt)return}break;case gt:if(!L.test(a)){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)||e){if(""!=v){var w=parseInt(v,10);if(w>65535)return R;t.port=K(t)&&w===X[t.scheme]?null:w,v=""}if(e)return;f=bt;continue}return R}v+=a;break;case dt:if(t.scheme="file","/"==a||"\\"==a)f=yt;else{if(!o||"file"!=o.scheme){f=xt;continue}if(a==n)t.host=o.host,t.path=o.path.slice(),t.query=o.query;else if("?"==a)t.host=o.host,t.path=o.path.slice(),t.query="",f=St;else{if("#"!=a){tt(i.slice(h).join(""))||(t.host=o.host,t.path=o.path.slice(),rt(t)),f=xt;continue}t.host=o.host,t.path=o.path.slice(),t.query=o.query,t.fragment="",f=At}}break;case yt:if("/"==a||"\\"==a){f=mt;break}o&&"file"==o.scheme&&!tt(i.slice(h).join(""))&&(Z(o.path[0],!0)?t.path.push(o.path[0]):t.host=o.host),f=xt;continue;case mt:if(a==n||"/"==a||"\\"==a||"?"==a||"#"==a){if(!e&&Z(v))f=xt;else if(""==v){if(t.host="",e)return;f=bt}else{if(c=B(t,v))return c;if("localhost"==t.host&&(t.host=""),e)return;v="",f=bt}continue}v+=a;break;case bt:if(K(t)){if(f=xt,"/"!=a&&"\\"!=a)continue}else if(e||"?"!=a)if(e||"#"!=a){if(a!=n&&(f=xt,"/"!=a))continue}else t.fragment="",f=At;else t.query="",f=St;break;case xt:if(a==n||"/"==a||"\\"==a&&K(t)||!e&&("?"==a||"#"==a)){if(".."===(s=(s=v).toLowerCase())||"%2e."===s||".%2e"===s||"%2e%2e"===s?(rt(t),"/"==a||"\\"==a&&K(t)||t.path.push("")):et(v)?"/"==a||"\\"==a&&K(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&Z(v)&&(t.host&&(t.host=""),v=v.charAt(0)+":"),t.path.push(v)),v="","file"==t.scheme&&(a==n||"?"==a||"#"==a))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==a?(t.query="",f=St):"#"==a&&(t.fragment="",f=At)}else v+=J(a,$);break;case wt:"?"==a?(t.query="",f=St):"#"==a?(t.fragment="",f=At):a!=n&&(t.path[0]+=J(a,G));break;case St:e||"#"!=a?a!=n&&("'"==a&&K(t)?t.query+="%27":t.query+="#"==a?"%23":J(a,G)):(t.fragment="",f=At);break;case At:a!=n&&(t.fragment+=J(a,V))}h++}},Ot=function(t){var r,e,n=f(this,Ot,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(t),u=S(n,{type:"URL"});if(void 0!==o)if(o instanceof Ot)r=A(o);else if(e=Et(r={},String(o)))throw TypeError(e);if(e=Et(u,a,null,r))throw TypeError(e);var c=u.searchParams=new x,s=w(c);s.updateSearchParams(u.query),s.updateURL=function(){u.query=String(c)||null},i||(n.href=jt.call(n),n.origin=Rt.call(n),n.protocol=It.call(n),n.username=Mt.call(n),n.password=Lt.call(n),n.host=kt.call(n),n.hostname=Pt.call(n),n.port=Nt.call(n),n.pathname=_t.call(n),n.search=Ut.call(n),n.searchParams=Ft.call(n),n.hash=Ct.call(n))},Tt=Ot.prototype,jt=function(){var t=A(this),r=t.scheme,e=t.username,n=t.password,o=t.host,i=t.port,a=t.path,u=t.query,c=t.fragment,s=r+":";return null!==o?(s+="//",H(t)&&(s+=e+(n?":"+n:"")+"@"),s+=W(o),null!==i&&(s+=":"+i)):"file"==r&&(s+="//"),s+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(s+="?"+u),null!==c&&(s+="#"+c),s},Rt=function(){var t=A(this),r=t.scheme,e=t.port;if("blob"==r)try{return new URL(r.path[0]).origin}catch(t){return"null"}return"file"!=r&&K(t)?r+"://"+W(t.host)+(null!==e?":"+e:""):"null"},It=function(){return A(this).scheme+":"},Mt=function(){return A(this).username},Lt=function(){return A(this).password},kt=function(){var t=A(this),r=t.host,e=t.port;return null===r?"":null===e?W(r):W(r)+":"+e},Pt=function(){var t=A(this).host;return null===t?"":W(t)},Nt=function(){var t=A(this).port;return null===t?"":String(t)},_t=function(){var t=A(this),r=t.path;return t.cannotBeABaseURL?r[0]:r.length?"/"+r.join("/"):""},Ut=function(){var t=A(this).query;return t?"?"+t:""},Ft=function(){return A(this).searchParams},Ct=function(){var t=A(this).fragment;return t?"#"+t:""},Dt=function(t,r){return{get:t,set:r,configurable:!0,enumerable:!0}};if(i&&c(Tt,{href:Dt(jt,(function(t){var r=A(this),e=String(t),n=Et(r,e);if(n)throw TypeError(n);w(r.searchParams).updateSearchParams(r.query)})),origin:Dt(Rt),protocol:Dt(It,(function(t){var r=A(this);Et(r,String(t)+":",nt)})),username:Dt(Mt,(function(t){var r=A(this),e=p(String(t));if(!Q(r)){r.username="";for(var n=0;n<e.length;n++)r.username+=J(e[n],Y)}})),password:Dt(Lt,(function(t){var r=A(this),e=p(String(t));if(!Q(r)){r.password="";for(var n=0;n<e.length;n++)r.password+=J(e[n],Y)}})),host:Dt(kt,(function(t){var r=A(this);r.cannotBeABaseURL||Et(r,String(t),pt)})),hostname:Dt(Pt,(function(t){var r=A(this);r.cannotBeABaseURL||Et(r,String(t),vt)})),port:Dt(Nt,(function(t){var r=A(this);Q(r)||(""==(t=String(t))?r.port=null:Et(r,t,gt))})),pathname:Dt(_t,(function(t){var r=A(this);r.cannotBeABaseURL||(r.path=[],Et(r,t+"",bt))})),search:Dt(Ut,(function(t){var r=A(this);""==(t=String(t))?r.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),r.query="",Et(r,t,St)),w(r.searchParams).updateSearchParams(r.query)})),searchParams:Dt(Ft),hash:Dt(Ct,(function(t){var r=A(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),r.fragment="",Et(r,t,At)):r.fragment=null}))}),s(Tt,"toJSON",(function(){return jt.call(this)}),{enumerable:!0}),s(Tt,"toString",(function(){return jt.call(this)}),{enumerable:!0}),b){var Bt=b.createObjectURL,zt=b.revokeObjectURL;Bt&&s(Ot,"createObjectURL",(function(t){return Bt.apply(b,arguments)})),zt&&s(Ot,"revokeObjectURL",(function(t){return zt.apply(b,arguments)}))}d(Ot,"URL"),o({global:!0,forced:!a,sham:!i},{URL:Ot})},3753:(t,r,e)=>{"use strict";e(2109)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},8594:(t,r,e)=>{e(1926),e(6337);var n=e(857);t.exports=n},6337:(t,r,e)=>{e(4747),e(3948),e(4633),e(5844),e(2564),e(285),e(3753),e(1637);var n=e(857);t.exports=n},5666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return M()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=O(a,e);if(u){if(u===g)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var c=f(t,r,e);if("normal"===c.type){if(n=e.done?v:h,c.arg===g)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=v,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",g={};function d(){}function y(){}function m(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(I([])));w&&w!==e&&n.call(w,i)&&(b=w);var S=m.prototype=d.prototype=Object.create(b);function A(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:M}}function M(){return{value:r,done:!0}}return y.prototype=S.constructor=m,m.constructor=y,y.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},A(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(S),c(S,u,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},7529:t=>{t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var o in n)r.call(n,o)&&(t[o]=n[o])}return t};var r=Object.prototype.hasOwnProperty}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";e.r(n),e.d(n,{default:()=>Y,getCssSelector:()=>$}),e(8594),e(5666);var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function r(r){return null!=r&&"object"===(void 0===r?"undefined":t(r))&&1===r.nodeType&&"object"===t(r.style)&&"object"===t(r.ownerDocument)}var o=regeneratorRuntime.mark(c);function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n=e.querySelectorAll(r);return 1===n.length&&n[0]===t}function c(t){var e,n,i=arguments;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e=i.length>1&&void 0!==i[1]?i[1]:s(t),n=t;case 2:if(!r(n)||n===e){o.next=8;break}return o.next=5,n;case 5:n=n.parentElement,o.next=2;break;case 8:case"end":return o.stop()}}),o)}function s(t){return t.ownerDocument.querySelector(":root")}function f(t){var e=t.parentNode;if(e)for(var n=0,o=e.childNodes,i=0;i<o.length;i++)if(r(o[i])&&(n+=1,o[i]===t))return[":nth-child(".concat(n,")")];return[]}function l(t){return Object.assign({},h,{root:t.ownerDocument.querySelector(":root")})}var h={selectors:["id","class","tag","attribute"],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0},p=new RegExp(["^$","\\s","^\\d"].join("|")),v=new RegExp(["^$","^\\d"].join("|")),g=["nthoftype","tag","id","class","attribute","nthchild"];function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function y(t){var r,e=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s(t);return i(c(t,r))}(t).map((function(t){return f(t)[0]})).reverse();return[":root"].concat((r=e,function(t){if(Array.isArray(t))return d(t)}(r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||function(t,r){if(t){if("string"==typeof t)return d(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).join(" > ")}function m(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({},l(t),r)}var b=e(3426),x=e.n(b);function w(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[[]];return t.forEach((function(t){r.forEach((function(e){r.push(e.concat(t))}))})),r.shift(),r.sort((function(t,r){return t.length-r.length}))}function A(t){return t.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".+")}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===t.length)return new RegExp(".^");var r=t.map((function(t){return"string"==typeof t?A(t):t.source})).join("|");return new RegExp(r)}function O(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var T=E(["class","id","ng-*"]);function j(t){var r=t.nodeName,e=t.nodeValue;return"[".concat(r,"='").concat(F(e),"']")}function R(t){var r=t.nodeName;return!T.test(r)}function I(t){return[F(t.tagName.toLowerCase())]}var M=regeneratorRuntime.mark(W);function L(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=P(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}function k(t){return function(t){if(Array.isArray(t))return N(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||P(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,r){if(t){if("string"==typeof t)return N(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?N(t,r):void 0}}function N(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var _=":".charCodeAt(0).toString(16).toUpperCase(),U=/[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split("").map((function(t){return":"===t?"\\".concat(_," "):U.test(t)?"\\".concat(t):escape(t).replace(/%/g,"\\")})).join("")}var C={tag:I,id:function(t){var r=t.getAttribute("id")||"",e="#".concat(F(r));return!p.test(r)&&u(t,e,t.ownerDocument)?[e]:[]},class:function(t){return(t.getAttribute("class")||"").trim().split(/\s+/).filter((function(t){return!v.test(t)})).map((function(t){return".".concat(F(t))}))},attribute:function(t){return(r=t.attributes,function(t){if(Array.isArray(t))return O(t)}(r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||function(t,r){if(t){if("string"==typeof t)return O(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(t,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter(R).map(j);var r},nthchild:f,nthoftype:function(t){var r=I(t)[0],e=t.parentElement;if(e)for(var n=e.querySelectorAll(r),o=0;o<n.length;o++)if(n[o]===t)return["".concat(r,":nth-of-type(").concat(o+1,")")];return[]}};function D(t,r,e){var n,o,i,a=(n=function(t,r){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.selectors,n=r.combineBetweenSelectors,o=r.includeTag,i=n?S(e):e.map((function(t){return[t]}));return o?i.map(B):i}(t,r).map((function(r){return e=t,n={},r.forEach((function(t){var r=e[t];r.length>0&&(n[t]=r)})),x()(n).map(q);var e,n})).filter((function(t){return""!==t}))}(function(t,r){var e=r.blacklist,n=r.whitelist,o=r.combineWithinSelector,i=E(e),a=E(n);return function(t){var r=t.selectors,e=t.includeTag,n=[].concat(r);return e&&!n.includes("tag")&&n.push("tag"),n}(r).reduce((function(r,e){var n=function(){var t=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).sort((function(r,e){var n=t.test(r),o=t.test(e);return n&&!o?-1:!n&&o?1:0}))}(function(){var t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return r.test(e)||!t.test(e)}))}(function(t,r){return(C[r]||function(){return[]})(t)}(t,e),i,a),a);return r[e]=o?S(n):n.map((function(t){return[t]})),r}),{})}(t,e),e),(o=[]).concat.apply(o,function(t){if(Array.isArray(t))return w(t)}(i=n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(i)||function(t,r){if(t){if("string"==typeof t)return w(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(t,r):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));return k(new Set(a))}function B(t){return t.includes("tag")||t.includes("nthoftype")?k(t):[].concat(k(t),["tag"])}function z(t,r){return r[t]?r[t].join(""):""}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=k(g);return t.tag&&t.nthoftype&&r.splice(r.indexOf("tag"),1),r.map((function(r){return z(r,t)})).join("")}function W(t,r,e){var n,o,i,a,u,c,s;return regeneratorRuntime.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:n=D(t,0,e),o=L(n),f.prev=2,o.s();case 4:if((i=o.n()).done){f.next=10;break}return a=i.value,f.next=8," "+a;case 8:f.next=4;break;case 10:f.next=15;break;case 12:f.prev=12,f.t0=f.catch(2),o.e(f.t0);case 15:return f.prev=15,o.f(),f.finish(15);case 18:if(r!==t.parentNode){f.next=36;break}u=L(n),f.prev=20,u.s();case 22:if((c=u.n()).done){f.next=28;break}return s=c.value,f.next=26," > "+s;case 26:f.next=22;break;case 28:f.next=33;break;case 30:f.prev=30,f.t1=f.catch(20),u.e(f.t1);case 33:return f.prev=33,u.f(),f.finish(33);case 36:case"end":return f.stop()}}),M,null,[[2,12,15,18],[20,30,33,36]])}function G(t,r){var e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3?arguments[3]:void 0,i=W(t,o.root,o),a=L(i);try{for(a.s();!(e=a.n()).done;){var c=e.value,s=(n+c).trim();if(u(t,s,o.root))return s}}catch(t){a.e(t)}finally{a.f()}return null}function V(t,r){var e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3?arguments[3]:void 0,i=L(c(t,r));try{for(i.s();!(e=i.n()).done;){var a=e.value,u=G(a,r,n,o);if(u)return{foundElement:a,selector:u}}}catch(t){i.e(t)}finally{i.f()}return null}function $(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=m(t,r),n="",o=e.root;function i(){return V(t,o,n,e)}for(var a=i();a;){var u=a,c=u.foundElement,s=u.selector;if(c===t)return s;o=c,n=s,a=i()}return y(t)}const Y=$})(),n})()}));

/***/ }),

/***/ "./node_modules/fflate/esm/browser.js":
/*!********************************************!*\
  !*** ./node_modules/fflate/esm/browser.js ***!
  \********************************************/
/*! exports provided: Deflate, AsyncDeflate, deflate, deflateSync, Inflate, AsyncInflate, inflate, inflateSync, Gzip, AsyncGzip, gzip, gzipSync, Gunzip, AsyncGunzip, gunzip, gunzipSync, Zlib, AsyncZlib, zlib, zlibSync, Unzlib, AsyncUnzlib, unzlib, unzlibSync, compress, AsyncCompress, compressSync, Compress, Decompress, AsyncDecompress, decompress, decompressSync, strToU8, strFromU8, zip, zipSync, unzip, unzipSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deflate", function() { return Deflate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncDeflate", function() { return AsyncDeflate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deflate", function() { return deflate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deflateSync", function() { return deflateSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inflate", function() { return Inflate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncInflate", function() { return AsyncInflate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inflate", function() { return inflate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inflateSync", function() { return inflateSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gzip", function() { return Gzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncGzip", function() { return AsyncGzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gzip", function() { return gzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gzipSync", function() { return gzipSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gunzip", function() { return Gunzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncGunzip", function() { return AsyncGunzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gunzip", function() { return gunzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gunzipSync", function() { return gunzipSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zlib", function() { return Zlib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncZlib", function() { return AsyncZlib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zlib", function() { return zlib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zlibSync", function() { return zlibSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unzlib", function() { return Unzlib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncUnzlib", function() { return AsyncUnzlib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzlib", function() { return unzlib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzlibSync", function() { return unzlibSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compress", function() { return gzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCompress", function() { return AsyncGzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressSync", function() { return gzipSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compress", function() { return Gzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decompress", function() { return Decompress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncDecompress", function() { return AsyncDecompress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decompress", function() { return decompress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decompressSync", function() { return decompressSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strToU8", function() { return strToU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strFromU8", function() { return strFromU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipSync", function() { return zipSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return unzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzipSync", function() { return unzipSync; });
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// https://tools.ietf.org/html/rfc1951
// You may also wish to take a look at the guide I made about this program:
// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
// Much of the following code is similar to that of UZIP.js:
// https://github.com/photopea/UZIP.js
// Many optimizations have been made, so the bundle size is ultimately smaller but performance is similar.
// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
// is better for memory in most engines (I *think*).
var ch2 = {};
var wk = (function (c, id, msg, transfer, cb) {
    var u = ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([c], { type: 'text/javascript' })));
    var w = new Worker(u);
    w.onerror = function (e) { return cb(e.error, null); };
    w.onmessage = function (e) { return cb(null, e.data); };
    w.postMessage(msg, transfer);
    return w;
});

// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
// code length index map
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
// get base, reverse index map from extra bits
var freb = function (eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
        b[i] = start += 1 << eb[i - 1];
    }
    // numbers here are at max 18 bits
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
        for (var j = b[i]; j < b[i + 1]; ++j) {
            r[j] = ((j - b[i]) << 5) | i;
        }
    }
    return [b, r];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
    // reverse table algorithm from SO
    var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
    x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
    x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
    rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = (function (cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for (; i < s; ++i)
        ++l[cd[i] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for (i = 0; i < mb; ++i) {
        le[i] = (le[i - 1] + l[i - 1]) << 1;
    }
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for (i = 0; i < s; ++i) {
            // ignore 0 lengths
            if (cd[i]) {
                // num encoding both symbol and bits read
                var sv = (i << 4) | cd[i];
                // free bits
                var r_1 = mb - cd[i];
                // start value
                var v = le[cd[i] - 1]++ << r_1;
                // m is end value
                for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                    // every 16 bit value starting with the code yields the same result
                    co[rev[v] >>> rvb] = sv;
                }
            }
        }
    }
    else {
        co = new u16(s);
        for (i = 0; i < s; ++i)
            co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
    }
    return co;
});
// fixed length tree
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
    flt[i] = 8;
for (var i = 144; i < 256; ++i)
    flt[i] = 9;
for (var i = 256; i < 280; ++i)
    flt[i] = 7;
for (var i = 280; i < 288; ++i)
    flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
// find max of array
var max = function (a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
        if (a[i] > m)
            m = a[i];
    }
    return m;
};
// read d, starting at bit p and mask with m
var bits = function (d, p, m) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8)) >>> (p & 7)) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function (d, p) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >>> (p & 7));
};
// get end of byte
var shft = function (p) { return ((p / 8) >> 0) + (p & 7 && 1); };
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function (v, s, e) {
    if (s == null || s < 0)
        s = 0;
    if (e == null || e > v.length)
        e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var inflt = function (dat, buf, st) {
    // source length
    var sl = dat.length;
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st)
        st = {};
    // Assumes roughly 33% compression ratio average
    if (!buf)
        buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function (l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
                if (t > sl) {
                    if (noSt)
                        throw 'unexpected EOF';
                    break;
                }
                // ensure size
                if (noBuf)
                    cbuf(bt + l);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l, st.p = pos = t * 8;
                continue;
            }
            else if (type == 1)
                lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for (var i = 0; i < hcLen; ++i) {
                    // use index map to get real code
                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
                }
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                if (!noSt && pos + tl * (clb + 7) > tbts)
                    break;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for (var i = 0; i < tl;) {
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) {
                        ldt[i++] = s;
                    }
                    else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16)
                            n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17)
                            n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18)
                            n = 11 + bits(dat, pos, 127), pos += 7;
                        while (n--)
                            ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            }
            else
                throw 'invalid block type';
            if (pos > tbts)
                throw 'unexpected EOF';
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf)
            cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var mxa = lbt + dbt + 18;
        while (noSt || pos + mxa < tbts) {
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts)
                throw 'unexpected EOF';
            if (!c)
                throw 'invalid length/literal';
            if (sym < 256)
                buf[bt++] = sym;
            else if (sym == 256) {
                lm = null;
                break;
            }
            else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = fleb[i];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d)
                    throw 'invalid distance';
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
                }
                if (pos > tbts)
                    throw 'unexpected EOF';
                if (noBuf)
                    cbuf(bt + 131072);
                var end = bt + add;
                for (; bt < end; bt += 4) {
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = pos, st.b = bt;
        if (lm)
            final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function (d, mb) {
    // Need extra info to make a tree
    var t = [];
    for (var i = 0; i < d.length; ++i) {
        if (d[i])
            t.push({ s: i, f: d[i] });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s)
        return [new u8(0), 0];
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [v, 1];
    }
    t.sort(function (a, b) { return a.f - b.f; });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({ s: -1, f: 25001 });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while (i1 != s - 1) {
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
    }
    var maxSym = t2[0].s;
    for (var i = 1; i < s; ++i) {
        if (t2[i].s > maxSym)
            maxSym = t2[i].s;
    }
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
        for (; i < s; ++i) {
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << (mbt - tr[i2_1]));
                tr[i2_1] = mb;
            }
            else
                break;
        }
        dt >>>= lft;
        while (dt > 0) {
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb)
                dt -= 1 << (mb - tr[i2_2]++ - 1);
            else
                ++i;
        }
        for (; i >= 0 && dt; --i) {
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [new u8(tr), mbt];
};
// get the max length and assign length codes
var ln = function (n, l, d) {
    return n.s == -1
        ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
        : (l[n.s] = d);
};
// length codes generation
var lc = function (c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while (s && !c[--s])
        ;
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function (v) { cl[cli++] = v; };
    for (var i = 1; i <= s; ++i) {
        if (c[i] == cln && i != s)
            ++cls;
        else {
            if (!cln && cls > 2) {
                for (; cls > 138; cls -= 138)
                    w(32754);
                if (cls > 2) {
                    w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                    cls = 0;
                }
            }
            else if (cls > 3) {
                w(cln), --cls;
                for (; cls > 6; cls -= 6)
                    w(8304);
                if (cls > 2)
                    w(((cls - 3) << 5) | 8208), cls = 0;
            }
            while (cls--)
                w(cln);
            cls = 1;
            cln = c[i];
        }
    }
    return [cl.subarray(0, cli), s];
};
// calculate the length of output from tree, code lengths
var clen = function (cf, cl) {
    var l = 0;
    for (var i = 0; i < cl.length; ++i)
        l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function (out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i = 0; i < s; ++i)
        out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
    var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for (var i = 0; i < lclt.length; ++i)
        lcfreq[lclt[i] & 31]++;
    for (var i = 0; i < lcdt.length; ++i)
        lcfreq[lcdt[i] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
    var flen = (bl + 5) << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen)
        return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for (var i = 0; i < nlcc; ++i)
            wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
            var clct = lcts[it];
            for (var i = 0; i < clct.length; ++i) {
                var len = clct[i] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15)
                    wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
            }
        }
    }
    else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i = 0; i < li; ++i) {
        if (syms[i] > 255) {
            var len = (syms[i] >>> 18) & 31;
            wbits16(out, p, lm[len + 257]), p += ll[len + 257];
            if (len > 7)
                wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];
            var dst = syms[i] & 31;
            wbits16(out, p, dm[dst]), p += dl[dst];
            if (dst > 3)
                wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];
        }
        else {
            wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
        }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
// empty
var et = /*#__PURE__*/ new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function (dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) {
        for (var i = 0; i <= s; i += 65535) {
            // end
            var e = i + 65535;
            if (e < s) {
                // write full block
                pos = wfblk(w, pos, dat.subarray(i, e));
            }
            else {
                // write final block
                w[i] = lst;
                pos = wfblk(w, pos, dat.subarray(i, s));
            }
        }
    }
    else {
        var opt = deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new u16(32768), head = new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new u32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
        for (; i < s; ++i) {
            // hash value
            var hv = hsh(i);
            // index mod 32768
            var imod = i & 32767;
            // previous index with this value
            var pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for (var j = 0; j < 286; ++j)
                        lf[j] = 0;
                    for (var j = 0; j < 30; ++j)
                        df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while (dif <= maxd && --ch_1 && imod != pimod) {
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                ;
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn)
                                    break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for (var j = 0; j < mmd; ++j) {
                                    var ti = (i - dif + j + 32768) & 32767;
                                    var pti = prev[ti];
                                    var cd = (ti - pti + 32768) & 32767;
                                    if (cd > md)
                                        md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += (imod - pimod + 32768) & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                }
                else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst)
            pos = wfblk(w, pos, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// CRC32 table
var crct = /*#__PURE__*/ (function () {
    var t = new u32(256);
    for (var i = 0; i < 256; ++i) {
        var c = i, k = 9;
        while (--k)
            c = ((c & 1) && 0xEDB88320) ^ (c >>> 1);
        t[i] = c;
    }
    return t;
})();
// CRC32
var crc = function () {
    var c = 0xFFFFFFFF;
    return {
        p: function (d) {
            // closures have awful performance
            var cr = c;
            for (var i = 0; i < d.length; ++i)
                cr = crct[(cr & 255) ^ d[i]] ^ (cr >>> 8);
            c = cr;
        },
        d: function () { return c ^ 0xFFFFFFFF; }
    };
};
// Alder32
var adler = function () {
    var a = 1, b = 0;
    return {
        p: function (d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for (var i = 0; i != l;) {
                var e = Math.min(i + 5552, l);
                for (; i < e; ++i)
                    n += d[i], m += n;
                n %= 65521, m %= 65521;
            }
            a = n, b = m;
        },
        d: function () { return ((a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8)) + ((a & 255) << 23) * 2; }
    };
};
;
// deflate with opts
var dopt = function (dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
};
// Walmart object spread
var mrg = function (a, b) {
    var o = {};
    for (var k in a)
        o[k] = a[k];
    for (var k in b)
        o[k] = b[k];
    return o;
};
// worker clone
// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
// This took me three weeks to figure out how to do.
var wcln = function (fn, fnStr, td) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/ /g, '').split(',');
    for (var i = 0; i < dt.length; ++i) {
        var v = dt[i], k = ks[i];
        if (typeof v == 'function') {
            fnStr += ';' + k + '=';
            var st_1 = v.toString();
            if (v.prototype) {
                // for global objects
                if (st_1.indexOf('[native code]') != -1) {
                    var spInd = st_1.indexOf(' ', 8) + 1;
                    fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
                }
                else {
                    fnStr += st_1;
                    for (var t in v.prototype)
                        fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
                }
            }
            else
                fnStr += st_1;
        }
        else
            td[k] = v;
    }
    return [fnStr, td];
};
var ch = [];
// clone bufs
var cbfs = function (v) {
    var tl = [];
    for (var k in v) {
        if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32)
            tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    }
    return tl;
};
// use a worker to execute code
var wrkr = function (fns, init, id, cb) {
    var _a;
    if (!ch[id]) {
        var fnStr = '', td_1 = {}, m = fns.length - 1;
        for (var i = 0; i < m; ++i)
            _a = wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];
        ch[id] = wcln(fns[m], fnStr, td_1);
    }
    var td = mrg({}, ch[id][1]);
    return wk(ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
};
// base async inflate fn
var bInflt = function () { return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, hMap, max, bits, bits16, shft, slc, inflt, inflateSync, pbf, gu8]; };
var bDflt = function () { return [u8, u16, u32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf]; };
// gzip extra
var gze = function () { return [gzh, gzhl, wbytes, crc, crct]; };
// gunzip extra
var guze = function () { return [gzs, gzl]; };
// zlib extra
var zle = function () { return [zlh, wbytes, adler]; };
// unzlib extra
var zule = function () { return [zlv]; };
// post buf
var pbf = function (msg) { return postMessage(msg, [msg.buffer]); };
// get u8
var gu8 = function (o) { return o && o.size && new u8(o.size); };
// async helper
var cbify = function (dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function (err, dat) {
        w.terminate();
        cb(err, dat);
    });
    if (!opts.consume)
        dat = new u8(dat);
    w.postMessage([dat, opts], [dat.buffer]);
    return function () { w.terminate(); };
};
// auto stream
var astrm = function (strm) {
    strm.ondata = function (dat, final) { return postMessage([dat, final], [dat.buffer]); };
    return function (ev) { return strm.push(ev.data[0], ev.data[1]); };
};
// async stream attach
var astrmify = function (fns, strm, opts, init, id) {
    var t;
    var w = wrkr(fns, init, id, function (err, dat) {
        if (err)
            w.terminate(), strm.ondata.call(strm, err);
        else {
            if (dat[1])
                w.terminate();
            strm.ondata.call(strm, err, dat[0], dat[1]);
        }
    });
    w.postMessage(opts);
    strm.push = function (d, f) {
        if (t)
            throw 'stream finished';
        if (!strm.ondata)
            throw 'no stream handler';
        w.postMessage([d, t = f], [d.buffer]);
    };
    strm.terminate = function () { w.terminate(); };
};
// read 2 bytes
var b2 = function (d, b) { return d[b] | (d[b + 1] << 8); };
// read 4 bytes
var b4 = function (d, b) { return (d[b] | (d[b + 1] << 8) | (d[b + 2] << 16)) + (d[b + 3] << 23) * 2; };
// write bytes
var wbytes = function (d, b, v) {
    for (; v; ++b)
        d[b] = v, v >>>= 8;
};
// gzip header
var gzh = function (c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
    if (o.mtime != 0)
        wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
    if (fn) {
        c[3] = 8;
        for (var i = 0; i <= fn.length; ++i)
            c[i + 10] = fn.charCodeAt(i);
    }
};
// gzip footer: -8 to -4 = CRC, -4 to -0 is length
// gzip start
var gzs = function (d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8)
        throw 'invalid gzip data';
    var flg = d[3];
    var st = 10;
    if (flg & 4)
        st += d[10] | (d[11] << 8) + 2;
    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
        ;
    return st + (flg & 2);
};
// gzip length
var gzl = function (d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16) + (2 * (d[l - 1] << 23));
};
// gzip header length
var gzhl = function (o) { return 10 + ((o.filename && (o.filename.length + 1)) || 0); };
// zlib header
var zlh = function (c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);
};
// zlib valid
var zlv = function (d) {
    if ((d[0] & 15) != 8 || (d[0] >>> 4) > 7 || ((d[0] << 8 | d[1]) % 31))
        throw 'invalid zlib data';
    if (d[1] & 32)
        throw 'invalid zlib data: preset dictionaries not supported';
};
function AsyncCmpStrm(opts, cb) {
    if (!cb && typeof opts == 'function')
        cb = opts, opts = {};
    this.ondata = cb;
    return opts;
}
// zlib footer: -4 to -0 is Adler32
/**
 * Streaming DEFLATE compression
 */
var Deflate = /*#__PURE__*/ (function () {
    function Deflate(opts, cb) {
        if (!cb && typeof opts == 'function')
            cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
    }
    Deflate.prototype.p = function (c, f) {
        this.ondata(dopt(c, this.o, 0, 0, !f), f);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Deflate.prototype.push = function (chunk, final) {
        if (this.d)
            throw 'stream finished';
        if (!this.ondata)
            throw 'no stream handler';
        this.d = final;
        this.p(chunk, final || false);
    };
    return Deflate;
}());

/**
 * Asynchronous streaming DEFLATE compression
 */
var AsyncDeflate = /*#__PURE__*/ (function () {
    function AsyncDeflate(opts, cb) {
        astrmify([
            bDflt,
            function () { return [astrm, Deflate]; }
        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
            var strm = new Deflate(ev.data);
            onmessage = astrm(strm);
        }, 6);
    }
    return AsyncDeflate;
}());

function deflate(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bDflt,
    ], function (ev) { return pbf(deflateSync(ev.data[0], ev.data[1])); }, 0, cb);
}
/**
 * Compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param opts The compression options
 * @returns The deflated version of the data
 */
function deflateSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    return dopt(data, opts, 0, 0);
}
/**
 * Streaming DEFLATE decompression
 */
var Inflate = /*#__PURE__*/ (function () {
    /**
     * Creates an inflation stream
     * @param cb The callback to call whenever data is inflated
     */
    function Inflate(cb) {
        this.s = {};
        this.p = new u8(0);
        this.ondata = cb;
    }
    Inflate.prototype.e = function (c) {
        if (this.d)
            throw 'stream finished';
        if (!this.ondata)
            throw 'no stream handler';
        var l = this.p.length;
        var n = new u8(l + c.length);
        n.set(this.p), n.set(c, l), this.p = n;
    };
    Inflate.prototype.c = function (final) {
        this.d = this.s.i = final || false;
        var bts = this.s.b;
        var dt = inflt(this.p, this.o, this.s);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, (this.s.p / 8) >> 0), this.s.p &= 7;
    };
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the final chunk
     */
    Inflate.prototype.push = function (chunk, final) {
        this.e(chunk), this.c(final);
    };
    return Inflate;
}());

/**
 * Asynchronous streaming DEFLATE decompression
 */
var AsyncInflate = /*#__PURE__*/ (function () {
    /**
     * Creates an asynchronous inflation stream
     * @param cb The callback to call whenever data is deflated
     */
    function AsyncInflate(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            function () { return [astrm, Inflate]; }
        ], this, 0, function () {
            var strm = new Inflate();
            onmessage = astrm(strm);
        }, 7);
    }
    return AsyncInflate;
}());

function inflate(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bInflt
    ], function (ev) { return pbf(inflateSync(ev.data[0], gu8(ev.data[1]))); }, 1, cb);
}
/**
 * Expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function inflateSync(data, out) {
    return inflt(data, out);
}
// before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.
/**
 * Streaming GZIP compression
 */
var Gzip = /*#__PURE__*/ (function () {
    function Gzip(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Gzip.prototype.push = function (chunk, final) {
        Deflate.prototype.push.call(this, chunk, final);
    };
    Gzip.prototype.p = function (c, f) {
        this.c.p(c);
        this.l += c.length;
        var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);
        if (this.v)
            gzh(raw, this.o), this.v = 0;
        if (f)
            wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f);
    };
    return Gzip;
}());

/**
 * Asynchronous streaming GZIP compression
 */
var AsyncGzip = /*#__PURE__*/ (function () {
    function AsyncGzip(opts, cb) {
        astrmify([
            bDflt,
            gze,
            function () { return [astrm, Deflate, Gzip]; }
        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
            var strm = new Gzip(ev.data);
            onmessage = astrm(strm);
        }, 8);
    }
    return AsyncGzip;
}());

function gzip(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bDflt,
        gze,
        function () { return [gzipSync]; }
    ], function (ev) { return pbf(gzipSync(ev.data[0], ev.data[1])); }, 2, cb);
}
/**
 * Compresses data with GZIP
 * @param data The data to compress
 * @param opts The compression options
 * @returns The gzipped version of the data
 */
function gzipSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var c = crc(), l = data.length;
    c.p(data);
    var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
}
/**
 * Streaming GZIP decompression
 */
var Gunzip = /*#__PURE__*/ (function () {
    /**
     * Creates a GUNZIP stream
     * @param cb The callback to call whenever data is inflated
     */
    function Gunzip(cb) {
        this.v = 1;
        Inflate.call(this, cb);
    }
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Gunzip.prototype.push = function (chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            var s = gzs(this.p);
            if (s >= this.p.length && !final)
                return;
            this.p = this.p.subarray(s), this.v = 0;
        }
        if (final) {
            if (this.p.length < 8)
                throw 'invalid gzip stream';
            this.p = this.p.subarray(0, -8);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Gunzip;
}());

/**
 * Asynchronous streaming GZIP decompression
 */
var AsyncGunzip = /*#__PURE__*/ (function () {
    /**
     * Creates an asynchronous GUNZIP stream
     * @param cb The callback to call whenever data is deflated
     */
    function AsyncGunzip(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            guze,
            function () { return [astrm, Inflate, Gunzip]; }
        ], this, 0, function () {
            var strm = new Gunzip();
            onmessage = astrm(strm);
        }, 9);
    }
    return AsyncGunzip;
}());

function gunzip(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bInflt,
        guze,
        function () { return [gunzipSync]; }
    ], function (ev) { return pbf(gunzipSync(ev.data[0])); }, 3, cb);
}
/**
 * Expands GZIP data
 * @param data The data to decompress
 * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.
 * @returns The decompressed version of the data
 */
function gunzipSync(data, out) {
    return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
}
/**
 * Streaming Zlib compression
 */
var Zlib = /*#__PURE__*/ (function () {
    function Zlib(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be zlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Zlib.prototype.push = function (chunk, final) {
        Deflate.prototype.push.call(this, chunk, final);
    };
    Zlib.prototype.p = function (c, f) {
        this.c.p(c);
        var raw = dopt(c, this.o, this.v && 2, f && 4, !f);
        if (this.v)
            zlh(raw, this.o), this.v = 0;
        if (f)
            wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f);
    };
    return Zlib;
}());

/**
 * Asynchronous streaming Zlib compression
 */
var AsyncZlib = /*#__PURE__*/ (function () {
    function AsyncZlib(opts, cb) {
        astrmify([
            bDflt,
            zle,
            function () { return [astrm, Deflate, Zlib]; }
        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
            var strm = new Zlib(ev.data);
            onmessage = astrm(strm);
        }, 10);
    }
    return AsyncZlib;
}());

function zlib(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bDflt,
        zle,
        function () { return [zlibSync]; }
    ], function (ev) { return pbf(zlibSync(ev.data[0], ev.data[1])); }, 4, cb);
}
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */
function zlibSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Streaming Zlib decompression
 */
var Unzlib = /*#__PURE__*/ (function () {
    /**
     * Creates a Zlib decompression stream
     * @param cb The callback to call whenever data is inflated
     */
    function Unzlib(cb) {
        this.v = 1;
        Inflate.call(this, cb);
    }
    /**
     * Pushes a chunk to be unzlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Unzlib.prototype.push = function (chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            if (this.p.length < 2 && !final)
                return;
            this.p = this.p.subarray(2), this.v = 0;
        }
        if (final) {
            if (this.p.length < 4)
                throw 'invalid zlib stream';
            this.p = this.p.subarray(0, -4);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Unzlib;
}());

/**
 * Asynchronous streaming Zlib decompression
 */
var AsyncUnzlib = /*#__PURE__*/ (function () {
    /**
     * Creates an asynchronous Zlib decompression stream
     * @param cb The callback to call whenever data is deflated
     */
    function AsyncUnzlib(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            zule,
            function () { return [astrm, Inflate, Unzlib]; }
        ], this, 0, function () {
            var strm = new Unzlib();
            onmessage = astrm(strm);
        }, 11);
    }
    return AsyncUnzlib;
}());

function unzlib(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bInflt,
        zule,
        function () { return [unzlibSync]; }
    ], function (ev) { return pbf(unzlibSync(ev.data[0], gu8(ev.data[1]))); }, 5, cb);
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
}
// Default algorithm for compression (used because having a known output size allows faster decompression)

// Default algorithm for compression (used because having a known output size allows faster decompression)

/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */
var Decompress = /*#__PURE__*/ (function () {
    /**
     * Creates a decompression stream
     * @param cb The callback to call whenever data is decompressed
     */
    function Decompress(cb) {
        this.G = Gunzip;
        this.I = Inflate;
        this.Z = Unzlib;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Decompress.prototype.push = function (chunk, final) {
        if (!this.ondata)
            throw 'no stream handler';
        if (!this.s) {
            if (this.p && this.p.length) {
                var n = new u8(this.p.length + chunk.length);
                n.set(this.p), n.set(chunk, this.p.length);
            }
            else
                this.p = chunk;
            if (this.p.length > 2) {
                var _this_1 = this;
                var cb = function () { _this_1.ondata.apply(_this_1, arguments); };
                this.s = (this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8)
                    ? new this.G(cb)
                    : ((this.p[0] & 15) != 8 || (this.p[0] >> 4) > 7 || ((this.p[0] << 8 | this.p[1]) % 31))
                        ? new this.I(cb)
                        : new this.Z(cb);
                this.s.push(this.p, final);
                this.p = null;
            }
        }
        else
            this.s.push(chunk, final);
    };
    return Decompress;
}());

/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */
var AsyncDecompress = /*#__PURE__*/ (function () {
    /**
   * Creates an asynchronous decompression stream
   * @param cb The callback to call whenever data is decompressed
   */
    function AsyncDecompress(cb) {
        this.G = AsyncGunzip;
        this.I = AsyncInflate;
        this.Z = AsyncUnzlib;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    AsyncDecompress.prototype.push = function (chunk, final) {
        Decompress.prototype.push.call(this, chunk, final);
    };
    return AsyncDecompress;
}());

function decompress(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return (data[0] == 31 && data[1] == 139 && data[2] == 8)
        ? gunzip(data, opts, cb)
        : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))
            ? inflate(data, opts, cb)
            : unzlib(data, opts, cb);
}
/**
 * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function decompressSync(data, out) {
    return (data[0] == 31 && data[1] == 139 && data[2] == 8)
        ? gunzipSync(data, out)
        : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))
            ? inflateSync(data, out)
            : unzlibSync(data, out);
}
// flatten a directory structure
var fltn = function (d, p, t, o) {
    for (var k in d) {
        var val = d[k], n = p + k;
        if (val instanceof u8)
            t[n] = [val, o];
        else if (Array.isArray(val))
            t[n] = [val[0], mrg(o, val[1])];
        else
            fltn(val, n + '/', t, o);
    }
};
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
function strToU8(str, latin1) {
    var l = str.length;
    if (!latin1 && typeof TextEncoder != 'undefined')
        return new TextEncoder().encode(str);
    var ar = new u8(str.length + (str.length >>> 1));
    var ai = 0;
    var w = function (v) { ar[ai++] = v; };
    for (var i = 0; i < l; ++i) {
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + ((l - i) << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1)
            w(c);
        else if (c < 2048)
            w(192 | (c >>> 6)), w(128 | (c & 63));
        else if (c > 55295 && c < 57344)
            c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                w(240 | (c >>> 18)), w(128 | ((c >>> 12) & 63)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
        else
            w(224 | (c >>> 12)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
    }
    return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */
function strFromU8(dat, latin1) {
    var r = '';
    if (!latin1 && typeof TextDecoder != 'undefined')
        return new TextDecoder().decode(dat);
    for (var i = 0; i < dat.length;) {
        var c = dat[i++];
        if (c < 128 || latin1)
            r += String.fromCharCode(c);
        else if (c < 224)
            r += String.fromCharCode((c & 31) << 6 | (dat[i++] & 63));
        else if (c < 240)
            r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63));
        else
            c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63)) - 65536,
                r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
    }
    return r;
}
;
// skip local zip header
var slzh = function (d, b) { return b + 30 + b2(d, b + 26) + b2(d, b + 28); };
// read zip header
var zh = function (d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
    var _a = z ? z64e(d, es) : [b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)], sc = _a[0], su = _a[1], off = _a[2];
    return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
};
// read zip64 extra field
var z64e = function (d, b) {
    for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
        ;
    return [b4(d, b + 12), b4(d, b + 4), b4(d, b + 20)];
};
// write zip header
var wzh = function (d, b, c, cmp, su, fn, u, o, ce, t) {
    var fl = fn.length, l = cmp.length;
    wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;
    if (ce != null)
        d[b] = 20, b += 2;
    d[b] = 20, b += 2; // spec compliance? what's that?
    d[b++] = (t == 8 && (o.level == 1 ? 6 : o.level < 6 ? 4 : o.level == 9 ? 2 : 0)), d[b++] = u && 8;
    d[b] = t, b += 2;
    var dt = new Date(o.mtime || Date.now()), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119)
        throw 'date not in range 1980-2099';
    wbytes(d, b, ((y << 24) * 2) | ((dt.getMonth() + 1) << 21) | (dt.getDate() << 16) | (dt.getHours() << 11) | (dt.getMinutes() << 5) | (dt.getSeconds() >>> 1));
    b += 4;
    wbytes(d, b, c);
    wbytes(d, b + 4, l);
    wbytes(d, b + 8, su);
    wbytes(d, b + 12, fl), b += 16; // skip extra field, comment
    if (ce != null)
        wbytes(d, b += 10, ce), b += 4;
    d.set(fn, b);
    b += fl;
    if (ce == null)
        d.set(cmp, b);
};
// write zip footer (end of central directory)
var wzf = function (o, b, c, d, e) {
    wbytes(o, b, 0x6054B50); // skip disk
    wbytes(o, b + 8, c);
    wbytes(o, b + 10, c);
    wbytes(o, b + 12, d);
    wbytes(o, b + 16, e);
};
function zip(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    var r = {};
    fltn(data, '', r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function () {
        for (var i = 0; i < term.length; ++i)
            term[i]();
    };
    var cbf = function () {
        var out = new u8(tot + 22), oe = o, cdl = tot - o;
        tot = 0;
        for (var i = 0; i < slft; ++i) {
            var f = files[i];
            try {
                wzh(out, tot, f.c, f.d, f.m, f.n, f.u, f.p, null, f.t);
                wzh(out, o, f.c, f.d, f.m, f.n, f.u, f.p, tot, f.t), o += 46 + f.n.length, tot += 30 + f.n.length + f.d.length;
            }
            catch (e) {
                return cb(e, null);
            }
        }
        wzf(out, o, files.length, cdl, oe);
        cb(null, out);
    };
    if (!lft)
        cbf();
    var _loop_1 = function (i) {
        var fn = k[i];
        var _a = r[fn], file = _a[0], p = _a[1];
        var c = crc(), m = file.length;
        c.p(file);
        var n = strToU8(fn), s = n.length;
        var t = p.level == 0 ? 0 : 8;
        var cbl = function (e, d) {
            if (e) {
                tAll();
                cb(e, null);
            }
            else {
                var l = d.length;
                files[i] = {
                    t: t,
                    d: d,
                    m: m,
                    c: c.d(),
                    u: fn.length != l,
                    n: n,
                    p: p
                };
                o += 30 + s + l;
                tot += 76 + 2 * s + l;
                if (!--lft)
                    cbf();
            }
        };
        if (n.length > 65535)
            cbl('filename too long', null);
        if (!t)
            cbl(null, file);
        else if (m < 160000) {
            try {
                cbl(null, deflateSync(file, p));
            }
            catch (e) {
                cbl(e, null);
            }
        }
        else
            term.push(deflate(file, p, cbl));
    };
    // Cannot use lft because it can decrease
    for (var i = 0; i < slft; ++i) {
        _loop_1(i);
    }
    return tAll;
}
/**
 * Synchronously creates a ZIP file. Prefer using `zip` for better performance
 * with more than one file.
 * @param data The directory structure for the ZIP archive
 * @param opts The main options, merged with per-file options
 * @returns The generated ZIP archive
 */
function zipSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var r = {};
    var files = [];
    fltn(data, '', r, opts);
    var o = 0;
    var tot = 0;
    for (var fn in r) {
        var _a = r[fn], file = _a[0], p = _a[1];
        var t = p.level == 0 ? 0 : 8;
        var n = strToU8(fn), s = n.length;
        if (n.length > 65535)
            throw 'filename too long';
        var d = t ? deflateSync(file, p) : file, l = d.length;
        var c = crc();
        c.p(file);
        files.push({
            t: t,
            d: d,
            m: file.length,
            c: c.d(),
            u: fn.length != s,
            n: n,
            o: o,
            p: p
        });
        o += 30 + s + l;
        tot += 76 + 2 * s + l;
    }
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    for (var i = 0; i < files.length; ++i) {
        var f = files[i];
        wzh(out, f.o, f.c, f.d, f.m, f.n, f.u, f.p, null, f.t);
        wzh(out, o, f.c, f.d, f.m, f.n, f.u, f.p, f.o, f.t), o += 46 + f.n.length;
    }
    wzf(out, o, files.length, cdl, oe);
    return out;
}
/**
 * Asynchronously decompresses a ZIP archive
 * @param data The raw compressed ZIP file
 * @param cb The callback to call with the decompressed files
 * @returns A function that can be used to immediately terminate the unzipping
 */
function unzip(data, cb) {
    if (typeof cb != 'function')
        throw 'no callback';
    var term = [];
    var tAll = function () {
        for (var i = 0; i < term.length; ++i)
            term[i]();
    };
    var files = {};
    var e = data.length - 22;
    for (; b4(data, e) != 0x6054B50; --e) {
        if (!e || data.length - e > 65558) {
            cb('invalid zip file', null);
            return;
        }
    }
    ;
    var lft = b2(data, e + 8);
    if (!lft)
        cb(null, {});
    var c = lft;
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 0x6064B50)
            throw 'invalid zip file';
        c = lft = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    var _loop_2 = function (i) {
        var _a = zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        var cbl = function (e, d) {
            if (e) {
                tAll();
                cb(e, null);
            }
            else {
                files[fn] = d;
                if (!--lft)
                    cb(null, files);
            }
        };
        if (!c_1)
            cbl(null, slc(data, b, b + sc));
        else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (sc < 320000) {
                try {
                    cbl(null, inflateSync(infl, new u8(su)));
                }
                catch (e) {
                    cbl(e, null);
                }
            }
            else
                term.push(inflate(infl, { size: su }, cbl));
        }
        else
            cbl('unknown compression type ' + c_1, null);
    };
    for (var i = 0; i < c; ++i) {
        _loop_2(i);
    }
    return tAll;
}
/**
 * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
 * performance with more than one file.
 * @param data The raw compressed ZIP file
 * @returns The decompressed files
 */
function unzipSync(data) {
    var files = {};
    var e = data.length - 22;
    for (; b4(data, e) != 0x6054B50; --e) {
        if (!e || data.length - e > 65558)
            throw 'invalid zip file';
    }
    ;
    var c = b2(data, e + 8);
    if (!c)
        return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 0x6064B50)
            throw 'invalid zip file';
        c = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    for (var i = 0; i < c; ++i) {
        var _a = zh(data, o, z), c_2 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        if (!c_2)
            files[fn] = slc(data, b, b + sc);
        else if (c_2 == 8)
            files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));
        else
            throw 'unknown compression type ' + c_2;
    }
    return files;
}


/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/jspdf/dist/jspdf.es.min.js":
/*!*************************************************!*\
  !*** ./node_modules/jspdf/dist/jspdf.es.min.js ***!
  \*************************************************/
/*! exports provided: default, AcroForm, AcroFormAppearance, AcroFormButton, AcroFormCheckBox, AcroFormChoiceField, AcroFormComboBox, AcroFormEditBox, AcroFormListBox, AcroFormPasswordField, AcroFormPushButton, AcroFormRadioButton, AcroFormTextField, GState, ShadingPattern, TilingPattern, jsPDF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroForm", function() { return Lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormAppearance", function() { return wt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormButton", function() { return dt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormCheckBox", function() { return vt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormChoiceField", function() { return ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormComboBox", function() { return ht; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormEditBox", function() { return ft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormListBox", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormPasswordField", function() { return yt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormPushButton", function() { return pt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormRadioButton", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcroFormTextField", function() { return bt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GState", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadingPattern", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilingPattern", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsPDF", function() { return O; });
/* harmony import */ var fflate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fflate */ "./node_modules/fflate/esm/browser.js");
/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 2.3.1 Built on 2021-03-08T15:44:11.674Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2020 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2020 yWorks GmbH, http://www.yworks.com
 *               2015-2020 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, willow-systems.com
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */

var r=function(){return"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this}();function n(){r.console&&"function"==typeof r.console.log&&r.console.log.apply(r.console,arguments)}var i={log:n,warn:function(t){r.console&&("function"==typeof r.console.warn?r.console.warn.apply(r.console,arguments):n.call(null,arguments))},error:function(t){r.console&&("function"==typeof r.console.error?r.console.error.apply(r.console,arguments):n(t))}};
/**
 * @license
 * FileSaver.js
 * A saveAs() FileSaver implementation.
 *
 * By Eli Grey, http://eligrey.com
 *
 * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
 * source  : http://purl.eligrey.com/github/FileSaver.js
 */function a(t,e,r){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,r)},n.onerror=function(){i.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&e.status<=299}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var u,c,l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"undefined"!=typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype?function(t,e,n){var i=r.URL||r.webkitURL,u=document.createElement("a");e=e||t.name||"download",u.download=e,u.rel="noopener","string"==typeof t?(u.href=t,u.origin!==location.origin?o(u.href)?a(t,e,n):s(u,u.target="_blank"):s(u)):(u.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(u.href)}),4e4),setTimeout((function(){s(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,e,r){if(e=e||t.name||"download","string"==typeof t)if(o(t))a(t,e,r);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout((function(){s(n)}))}else navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(i.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,r),e)}:function(t,e,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,n);var o="application/octet-stream"===t.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&s)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},c.readAsDataURL(t)}else{var l=r.URL||r.webkitURL,h=l.createObjectURL(t);i?i.location=h:location.href=h,i=null,setTimeout((function(){l.revokeObjectURL(h)}),4e4)}});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function h(t){var e;t=t||"",this.ok=!1,"#"==t.charAt(0)&&(t=t.substr(1,6));t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[t=(t=t.replace(/ /g,"")).toLowerCase()]||t;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],n=0;n<r.length;n++){var i=r[n].re,a=r[n].process,o=i.exec(t);o&&(e=a(o),this.r=e[0],this.g=e[1],this.b=e[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),r=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==r.length&&(r="0"+r),"#"+t+e+r}}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function f(t,e){var r=t[0],n=t[1],i=t[2],a=t[3];r=p(r,n,i,a,e[0],7,-680876936),a=p(a,r,n,i,e[1],12,-389564586),i=p(i,a,r,n,e[2],17,606105819),n=p(n,i,a,r,e[3],22,-1044525330),r=p(r,n,i,a,e[4],7,-176418897),a=p(a,r,n,i,e[5],12,1200080426),i=p(i,a,r,n,e[6],17,-1473231341),n=p(n,i,a,r,e[7],22,-45705983),r=p(r,n,i,a,e[8],7,1770035416),a=p(a,r,n,i,e[9],12,-1958414417),i=p(i,a,r,n,e[10],17,-42063),n=p(n,i,a,r,e[11],22,-1990404162),r=p(r,n,i,a,e[12],7,1804603682),a=p(a,r,n,i,e[13],12,-40341101),i=p(i,a,r,n,e[14],17,-1502002290),r=g(r,n=p(n,i,a,r,e[15],22,1236535329),i,a,e[1],5,-165796510),a=g(a,r,n,i,e[6],9,-1069501632),i=g(i,a,r,n,e[11],14,643717713),n=g(n,i,a,r,e[0],20,-373897302),r=g(r,n,i,a,e[5],5,-701558691),a=g(a,r,n,i,e[10],9,38016083),i=g(i,a,r,n,e[15],14,-660478335),n=g(n,i,a,r,e[4],20,-405537848),r=g(r,n,i,a,e[9],5,568446438),a=g(a,r,n,i,e[14],9,-1019803690),i=g(i,a,r,n,e[3],14,-187363961),n=g(n,i,a,r,e[8],20,1163531501),r=g(r,n,i,a,e[13],5,-1444681467),a=g(a,r,n,i,e[2],9,-51403784),i=g(i,a,r,n,e[7],14,1735328473),r=m(r,n=g(n,i,a,r,e[12],20,-1926607734),i,a,e[5],4,-378558),a=m(a,r,n,i,e[8],11,-2022574463),i=m(i,a,r,n,e[11],16,1839030562),n=m(n,i,a,r,e[14],23,-35309556),r=m(r,n,i,a,e[1],4,-1530992060),a=m(a,r,n,i,e[4],11,1272893353),i=m(i,a,r,n,e[7],16,-155497632),n=m(n,i,a,r,e[10],23,-1094730640),r=m(r,n,i,a,e[13],4,681279174),a=m(a,r,n,i,e[0],11,-358537222),i=m(i,a,r,n,e[3],16,-722521979),n=m(n,i,a,r,e[6],23,76029189),r=m(r,n,i,a,e[9],4,-640364487),a=m(a,r,n,i,e[12],11,-421815835),i=m(i,a,r,n,e[15],16,530742520),r=v(r,n=m(n,i,a,r,e[2],23,-995338651),i,a,e[0],6,-198630844),a=v(a,r,n,i,e[7],10,1126891415),i=v(i,a,r,n,e[14],15,-1416354905),n=v(n,i,a,r,e[5],21,-57434055),r=v(r,n,i,a,e[12],6,1700485571),a=v(a,r,n,i,e[3],10,-1894986606),i=v(i,a,r,n,e[10],15,-1051523),n=v(n,i,a,r,e[1],21,-2054922799),r=v(r,n,i,a,e[8],6,1873313359),a=v(a,r,n,i,e[15],10,-30611744),i=v(i,a,r,n,e[6],15,-1560198380),n=v(n,i,a,r,e[13],21,1309151649),r=v(r,n,i,a,e[4],6,-145523070),a=v(a,r,n,i,e[11],10,-1120210379),i=v(i,a,r,n,e[2],15,718787259),n=v(n,i,a,r,e[9],21,-343485551),t[0]=x(r,t[0]),t[1]=x(n,t[1]),t[2]=x(i,t[2]),t[3]=x(a,t[3])}function d(t,e,r,n,i,a){return e=x(x(e,t),x(n,a)),x(e<<i|e>>>32-i,r)}function p(t,e,r,n,i,a,o){return d(e&r|~e&n,t,e,i,a,o)}function g(t,e,r,n,i,a,o){return d(e&n|r&~n,t,e,i,a,o)}function m(t,e,r,n,i,a,o){return d(e^r^n,t,e,i,a,o)}function v(t,e,r,n,i,a,o){return d(r^(e|~n),t,e,i,a,o)}function b(t){var e,r=t.length,n=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=t.length;e+=64)f(n,y(t.substring(e-64,e)));t=t.substring(e-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<t.length;e++)i[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(f(n,i),e=0;e<16;e++)i[e]=0;return i[14]=8*r,f(n,i),n}function y(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return r}u=r.atob.bind(r),c=r.btoa.bind(r);var w="0123456789abcdef".split("");function N(t){for(var e="",r=0;r<4;r++)e+=w[t>>8*r+4&15]+w[t>>8*r&15];return e}function L(t){return String.fromCharCode((255&t)>>0,(65280&t)>>8,(16711680&t)>>16,(4278190080&t)>>24)}function A(t){return b(t).map(L).join("")}function x(t,e){return t+e&4294967295}if("5d41402abc4b2a76b9719d911017c592"!=function(t){for(var e=0;e<t.length;e++)t[e]=N(t[e]);return t.join("")}(b("hello"))){function x(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function S(t,e){var r,n,i,a;if(t!==r){for(var o=(i=t,a=1+(256/t.length>>0),new Array(a+1).join(i)),s=[],u=0;u<256;u++)s[u]=u;var c=0;for(u=0;u<256;u++){var l=s[u];c=(c+l+o.charCodeAt(u))%256,s[u]=s[c],s[c]=l}r=t,n=s}else s=n;var h=e.length,f=0,d=0,p="";for(u=0;u<h;u++)d=(d+(l=s[f=(f+1)%256]))%256,s[f]=s[d],s[d]=l,o=s[(s[f]+s[d])%256],p+=String.fromCharCode(e.charCodeAt(u)^o);return p}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var _={print:4,modify:8,copy:16,"annot-forms":32};function P(t,e,r,n){this.v=1,this.r=2;let i=192;t.forEach((function(t){if(void 0!==_.perm)throw new Error("Invalid permission: "+t);i+=_[t]})),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";let a=(e+this.padding).substr(0,32),o=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(a,o),this.P=-(1+(255^i)),this.encryptionKey=A(a+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=S(this.encryptionKey,this.padding)}function k(t){if("object"!=typeof t)throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var e={};this.subscribe=function(t,r,n){if(n=n||!1,"string"!=typeof t||"function"!=typeof r||"boolean"!=typeof n)throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");e.hasOwnProperty(t)||(e[t]={});var i=Math.random().toString(35);return e[t][i]=[r,!!n],i},this.unsubscribe=function(t){for(var r in e)if(e[r][t])return delete e[r][t],0===Object.keys(e[r]).length&&delete e[r],!0;return!1},this.publish=function(n){if(e.hasOwnProperty(n)){var a=Array.prototype.slice.call(arguments,1),o=[];for(var s in e[n]){var u=e[n][s];try{u[0].apply(t,a)}catch(t){r.console&&i.error("jsPDF PubSub Error",t.message,t)}u[1]&&o.push(s)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return e}}function I(t){if(!(this instanceof I))return new I(t);var e="opacity,stroke-opacity".split(",");for(var r in t)t.hasOwnProperty(r)&&e.indexOf(r)>=0&&(this[r]=t[r]);this.id="",this.objectNumber=-1}function F(t,e){this.gState=t,this.matrix=e,this.id="",this.objectNumber=-1}function C(t,e,r,n,i){if(!(this instanceof C))return new C(t,e,r,n,i);this.type="axial"===t?2:3,this.coords=e,this.colors=r,F.call(this,n,i)}function j(t,e,r,n,i){if(!(this instanceof j))return new j(t,e,r,n,i);this.boundingBox=t,this.xStep=e,this.yStep=r,this.stream="",this.cloneIndex=0,F.call(this,n,i)}function O(t){var e,n="string"==typeof arguments[0]?arguments[0]:"p",a=arguments[1],o=arguments[2],s=arguments[3],u=[],f=1,d=16,p="S",g=null;"object"==typeof(t=t||{})&&(n=t.orientation,a=t.unit||a,o=t.format||o,s=t.compress||t.compressPdf||s,null!==(g=t.encryption||null)&&(g.userPassword=g.userPassword||"",g.ownerPassword=g.ownerPassword||"",g.userPermissions=g.userPermissions||[]),f="number"==typeof t.userUnit?Math.abs(t.userUnit):1,void 0!==t.precision&&(e=t.precision),void 0!==t.floatPrecision&&(d=t.floatPrecision),p=t.defaultPathOperation||"S"),u=t.filters||(!0===s?["FlateEncode"]:u),a=a||"mm",n=(""+(n||"P")).toLowerCase();var m=t.putOnlyUsedFonts||!1,v={},b={internal:{},__private__:{}};b.__private__.PubSub=k;var y="1.3",w=b.__private__.getPdfVersion=function(){return y};b.__private__.setPdfVersion=function(t){y=t};var N={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};b.__private__.getPageFormats=function(){return N};var L=b.__private__.getPageFormat=function(t){return N[t]};o=o||"a4";var A={COMPAT:"compat",ADVANCED:"advanced"},x=A.COMPAT;function S(){this.saveGraphicsState(),ct(new Ht(xt,0,0,-xt,0,Er()*xt).toString()+" cm"),this.setFontSize(this.getFontSize()/xt),p="n",x=A.ADVANCED}function _(){this.restoreGraphicsState(),p="S",x=A.COMPAT}var F=function(t,e){if("bold"==t&&"normal"==e||"bold"==t&&400==e||"normal"==t&&"italic"==e||"bold"==t&&"italic"==e)throw new Error("Invalid Combination of fontweight and fontstyle");return e&&t!==e&&(t=400==e?"italic"==t?"italic":"normal":700==e&&"italic"!==t?"bold":t+""+e),t};b.advancedAPI=function(t){var e=x===A.COMPAT;return e&&S.call(this),"function"!=typeof t||(t(this),e&&_.call(this)),this},b.compatAPI=function(t){var e=x===A.ADVANCED;return e&&_.call(this),"function"!=typeof t||(t(this),e&&S.call(this)),this},b.isAdvancedAPI=function(){return x===A.ADVANCED};var B,M=function(t){if(x!==A.ADVANCED)throw new Error(t+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},E=b.roundToPrecision=b.__private__.roundToPrecision=function(t,r){var n=e||r;if(isNaN(t)||isNaN(n))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return t.toFixed(n).replace(/0+$/,"")};B=b.hpf=b.__private__.hpf="number"==typeof d?function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return E(t,d)}:"smart"===d?function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return E(t,t>-1&&t<1?16:5)}:function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return E(t,16)};var q=b.f2=b.__private__.f2=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return E(t,2)},R=b.__private__.f3=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f3");return E(t,3)},T=b.scale=b.__private__.scale=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.scale");return x===A.COMPAT?t*xt:x===A.ADVANCED?t:void 0},D=function(t){return x===A.COMPAT?Er()-t:x===A.ADVANCED?t:void 0},U=function(t){return T(D(t))};b.__private__.setPrecision=b.setPrecision=function(t){"number"==typeof parseInt(t,10)&&(e=parseInt(t,10))};var z,H="00000000000000000000000000000000",V=b.__private__.getFileId=function(){return H},W=b.__private__.setFileId=function(t){return H=void 0!==t&&/^[a-fA-F0-9]{32}$/.test(t)?t.toUpperCase():H.split("").map((function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))})).join(""),null!==g&&(We=new P(g.userPermissions,g.userPassword,g.ownerPassword,H)),H};b.setFileId=function(t){return W(t),this},b.getFileId=function(){return V()};var G=b.__private__.convertDateToPDFDate=function(t){var e=t.getTimezoneOffset(),r=e<0?"+":"-",n=Math.floor(Math.abs(e/60)),i=Math.abs(e%60),a=[r,Z(n),"'",Z(i),"'"].join("");return["D:",t.getFullYear(),Z(t.getMonth()+1),Z(t.getDate()),Z(t.getHours()),Z(t.getMinutes()),Z(t.getSeconds()),a].join("")},Y=b.__private__.convertPDFDateToDate=function(t){var e=parseInt(t.substr(2,4),10),r=parseInt(t.substr(6,2),10)-1,n=parseInt(t.substr(8,2),10),i=parseInt(t.substr(10,2),10),a=parseInt(t.substr(12,2),10),o=parseInt(t.substr(14,2),10);return new Date(e,r,n,i,a,o,0)},J=b.__private__.setCreationDate=function(t){var e;if(void 0===t&&(t=new Date),t instanceof Date)e=G(t);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t))throw new Error("Invalid argument passed to jsPDF.setCreationDate");e=t}return z=e},X=b.__private__.getCreationDate=function(t){var e=z;return"jsDate"===t&&(e=Y(z)),e};b.setCreationDate=function(t){return J(t),this},b.getCreationDate=function(t){return X(t)};var K,Z=b.__private__.padd2=function(t){return("0"+parseInt(t)).slice(-2)},$=b.__private__.padd2Hex=function(t){return("00"+(t=t.toString())).substr(t.length)},Q=0,tt=[],et=[],rt=0,nt=[],it=[],at=!1,ot=et,st=function(){Q=0,rt=0,et=[],tt=[],nt=[],Zt=Jt(),$t=Jt()};b.__private__.setCustomOutputDestination=function(t){at=!0,ot=t};var ut=function(t){at||(ot=t)};b.__private__.resetCustomOutputDestination=function(){at=!1,ot=et};var ct=b.__private__.out=function(t){return t=t.toString(),rt+=t.length+1,ot.push(t),ot},lt=b.__private__.write=function(t){return ct(1===arguments.length?t.toString():Array.prototype.join.call(arguments," "))},ht=b.__private__.getArrayBuffer=function(t){for(var e=t.length,r=new ArrayBuffer(e),n=new Uint8Array(r);e--;)n[e]=t.charCodeAt(e);return r},ft=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];b.__private__.getStandardFonts=function(){return ft};var dt=t.fontSize||16;b.__private__.setFontSize=b.setFontSize=function(t){return dt=x===A.ADVANCED?t/xt:t,this};var pt,gt=b.__private__.getFontSize=b.getFontSize=function(){return x===A.COMPAT?dt:dt*xt},mt=t.R2L||!1;b.__private__.setR2L=b.setR2L=function(t){return mt=t,this},b.__private__.getR2L=b.getR2L=function(){return mt};var vt,bt=b.__private__.setZoomMode=function(t){var e=[void 0,null,"fullwidth","fullheight","fullpage","original"];if(/^\d*\.?\d*%$/.test(t))pt=t;else if(isNaN(t)){if(-1===e.indexOf(t))throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+t+'" is not recognized.');pt=t}else pt=parseInt(t,10)};b.__private__.getZoomMode=function(){return pt};var yt,wt=b.__private__.setPageMode=function(t){if(-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(t))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+t+'" is not recognized.');vt=t};b.__private__.getPageMode=function(){return vt};var Nt=b.__private__.setLayoutMode=function(t){if(-1==[void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(t))throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+t+'" is not recognized.');yt=t};b.__private__.getLayoutMode=function(){return yt},b.__private__.setDisplayMode=b.setDisplayMode=function(t,e,r){return bt(t),Nt(e),wt(r),this};var Lt={title:"",subject:"",author:"",keywords:"",creator:""};b.__private__.getDocumentProperty=function(t){if(-1===Object.keys(Lt).indexOf(t))throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return Lt[t]},b.__private__.getDocumentProperties=function(){return Lt},b.__private__.setDocumentProperties=b.setProperties=b.setDocumentProperties=function(t){for(var e in Lt)Lt.hasOwnProperty(e)&&t[e]&&(Lt[e]=t[e]);return this},b.__private__.setDocumentProperty=function(t,e){if(-1===Object.keys(Lt).indexOf(t))throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return Lt[t]=e};var At,xt,St,_t,Pt,kt={},It={},Ft=[],Ct={},jt={},Ot={},Bt={},Mt=null,Et=0,qt=[],Rt=new k(b),Tt=t.hotfixes||[],Dt={},Ut={},zt=[],Ht=function(t,e,r,n,i,a){if(!(this instanceof Ht))return new Ht(t,e,r,n,i,a);isNaN(t)&&(t=1),isNaN(e)&&(e=0),isNaN(r)&&(r=0),isNaN(n)&&(n=1),isNaN(i)&&(i=0),isNaN(a)&&(a=0),this._matrix=[t,e,r,n,i,a]};Object.defineProperty(Ht.prototype,"sx",{get:function(){return this._matrix[0]},set:function(t){this._matrix[0]=t}}),Object.defineProperty(Ht.prototype,"shy",{get:function(){return this._matrix[1]},set:function(t){this._matrix[1]=t}}),Object.defineProperty(Ht.prototype,"shx",{get:function(){return this._matrix[2]},set:function(t){this._matrix[2]=t}}),Object.defineProperty(Ht.prototype,"sy",{get:function(){return this._matrix[3]},set:function(t){this._matrix[3]=t}}),Object.defineProperty(Ht.prototype,"tx",{get:function(){return this._matrix[4]},set:function(t){this._matrix[4]=t}}),Object.defineProperty(Ht.prototype,"ty",{get:function(){return this._matrix[5]},set:function(t){this._matrix[5]=t}}),Object.defineProperty(Ht.prototype,"a",{get:function(){return this._matrix[0]},set:function(t){this._matrix[0]=t}}),Object.defineProperty(Ht.prototype,"b",{get:function(){return this._matrix[1]},set:function(t){this._matrix[1]=t}}),Object.defineProperty(Ht.prototype,"c",{get:function(){return this._matrix[2]},set:function(t){this._matrix[2]=t}}),Object.defineProperty(Ht.prototype,"d",{get:function(){return this._matrix[3]},set:function(t){this._matrix[3]=t}}),Object.defineProperty(Ht.prototype,"e",{get:function(){return this._matrix[4]},set:function(t){this._matrix[4]=t}}),Object.defineProperty(Ht.prototype,"f",{get:function(){return this._matrix[5]},set:function(t){this._matrix[5]=t}}),Object.defineProperty(Ht.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Ht.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Ht.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Ht.prototype,"isIdentity",{get:function(){return 1===this.sx&&(0===this.shy&&(0===this.shx&&(1===this.sy&&(0===this.tx&&0===this.ty))))}}),Ht.prototype.join=function(t){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(B).join(t)},Ht.prototype.multiply=function(t){var e=t.sx*this.sx+t.shy*this.shx,r=t.sx*this.shy+t.shy*this.sy,n=t.shx*this.sx+t.sy*this.shx,i=t.shx*this.shy+t.sy*this.sy,a=t.tx*this.sx+t.ty*this.shx+this.tx,o=t.tx*this.shy+t.ty*this.sy+this.ty;return new Ht(e,r,n,i,a,o)},Ht.prototype.decompose=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty,o=Math.sqrt(t*t+e*e),s=(t/=o)*r+(e/=o)*n;r-=t*s,n-=e*s;var u=Math.sqrt(r*r+n*n);return s/=u,t*(n/=u)<e*(r/=u)&&(t=-t,e=-e,s=-s,o=-o),{scale:new Ht(o,0,0,u,0,0),translate:new Ht(1,0,0,1,i,a),rotate:new Ht(t,e,-e,t,0,0),skew:new Ht(1,0,s,1,0,0)}},Ht.prototype.toString=function(t){return this.join(" ")},Ht.prototype.inversed=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty,o=1/(t*n-e*r),s=n*o,u=-e*o,c=-r*o,l=t*o;return new Ht(s,u,c,l,-s*i-c*a,-u*i-l*a)},Ht.prototype.applyToPoint=function(t){var e=t.x*this.sx+t.y*this.shx+this.tx,r=t.x*this.shy+t.y*this.sy+this.ty;return new kr(e,r)},Ht.prototype.applyToRectangle=function(t){var e=this.applyToPoint(t),r=this.applyToPoint(new kr(t.x+t.w,t.y+t.h));return new Ir(e.x,e.y,r.x-e.x,r.y-e.y)},Ht.prototype.clone=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty;return new Ht(t,e,r,n,i,a)},b.Matrix=Ht;var Vt=b.matrixMult=function(t,e){return e.multiply(t)},Wt=new Ht(1,0,0,1,0,0);b.unitMatrix=b.identityMatrix=Wt;var Gt=function(t,e){if(!jt[t]){var r=(e instanceof C?"Sh":"P")+(Object.keys(Ct).length+1).toString(10);e.id=r,jt[t]=r,Ct[r]=e,Rt.publish("addPattern",e)}};b.ShadingPattern=C,b.TilingPattern=j,b.addShadingPattern=function(t,e){return M("addShadingPattern()"),Gt(t,e),this},b.beginTilingPattern=function(t){M("beginTilingPattern()"),Cr(t.boundingBox[0],t.boundingBox[1],t.boundingBox[2]-t.boundingBox[0],t.boundingBox[3]-t.boundingBox[1],t.matrix)},b.endTilingPattern=function(t,e){M("endTilingPattern()"),e.stream=it[K].join("\n"),Gt(t,e),Rt.publish("endTilingPattern",e),zt.pop().restore()};var Yt=b.__private__.newObject=function(){var t=Jt();return Xt(t,!0),t},Jt=b.__private__.newObjectDeferred=function(){return Q++,tt[Q]=function(){return rt},Q},Xt=function(t,e){return e="boolean"==typeof e&&e,tt[t]=rt,e&&ct(t+" 0 obj"),t},Kt=b.__private__.newAdditionalObject=function(){var t={objId:Jt(),content:""};return nt.push(t),t},Zt=Jt(),$t=Jt(),Qt=b.__private__.decodeColorString=function(t){var e=t.split(" ");if(2!==e.length||"g"!==e[1]&&"G"!==e[1]){if(5===e.length&&("k"===e[4]||"K"===e[4])){e=[(1-e[0])*(1-e[3]),(1-e[1])*(1-e[3]),(1-e[2])*(1-e[3]),"r"]}}else{var r=parseFloat(e[0]);e=[r,r,r,"r"]}for(var n="#",i=0;i<3;i++)n+=("0"+Math.floor(255*parseFloat(e[i])).toString(16)).slice(-2);return n},te=b.__private__.encodeColorString=function(t){var e;"string"==typeof t&&(t={ch1:t});var r=t.ch1,n=t.ch2,i=t.ch3,a=t.ch4,o="draw"===t.pdfColorType?["G","RG","K"]:["g","rg","k"];if("string"==typeof r&&"#"!==r.charAt(0)){var s=new h(r);if(s.ok)r=s.toHex();else if(!/^\d*\.?\d*$/.test(r))throw new Error('Invalid color "'+r+'" passed to jsPDF.encodeColorString.')}if("string"==typeof r&&/^#[0-9A-Fa-f]{3}$/.test(r)&&(r="#"+r[1]+r[1]+r[2]+r[2]+r[3]+r[3]),"string"==typeof r&&/^#[0-9A-Fa-f]{6}$/.test(r)){var u=parseInt(r.substr(1),16);r=u>>16&255,n=u>>8&255,i=255&u}if(void 0===n||void 0===a&&r===n&&n===i)if("string"==typeof r)e=r+" "+o[0];else switch(t.precision){case 2:e=q(r/255)+" "+o[0];break;case 3:default:e=R(r/255)+" "+o[0]}else if(void 0===a||"object"==typeof a){if(a&&!isNaN(a.a)&&0===a.a)return e=["1.","1.","1.",o[1]].join(" ");if("string"==typeof r)e=[r,n,i,o[1]].join(" ");else switch(t.precision){case 2:e=[q(r/255),q(n/255),q(i/255),o[1]].join(" ");break;default:case 3:e=[R(r/255),R(n/255),R(i/255),o[1]].join(" ")}}else if("string"==typeof r)e=[r,n,i,a,o[2]].join(" ");else switch(t.precision){case 2:e=[q(r),q(n),q(i),q(a),o[2]].join(" ");break;case 3:default:e=[R(r),R(n),R(i),R(a),o[2]].join(" ")}return e},ee=b.__private__.getFilters=function(){return u},re=b.__private__.putStream=function(t){var e=(t=t||{}).data||"",r=t.filters||ee(),n=t.alreadyAppliedFilters||[],i=t.addLength1||!1,a=e.length,o=t.objectId,s=function(t){return t};if(null!==g&&void 0===o)throw new Error("ObjectId must be passed to putStream for file encryption");null!==g&&(s=We.encryptor(o,0));var u={};!0===r&&(r=["FlateEncode"]);var c=t.additionalKeyValues||[],l=(u=void 0!==O.API.processDataByFilters?O.API.processDataByFilters(e,r):{data:e,reverseChain:[]}).reverseChain+(Array.isArray(n)?n.join(" "):n.toString());if(0!==u.data.length&&(c.push({key:"Length",value:u.data.length}),!0===i&&c.push({key:"Length1",value:a})),0!=l.length)if(l.split("/").length-1==1)c.push({key:"Filter",value:l});else{c.push({key:"Filter",value:"["+l+"]"});for(var h=0;h<c.length;h+=1)if("DecodeParms"===c[h].key){for(var f=[],d=0;d<u.reverseChain.split("/").length-1;d+=1)f.push("null");f.push(c[h].value),c[h].value="["+f.join(" ")+"]"}}ct("<<");for(var p=0;p<c.length;p++)ct("/"+c[p].key+" "+c[p].value);ct(">>"),0!==u.data.length&&(ct("stream"),ct(s(u.data)),ct("endstream"))},ne=b.__private__.putPage=function(t){var e=t.number,r=t.data,n=t.objId,i=t.contentsObjId;Xt(n,!0),ct("<</Type /Page"),ct("/Parent "+t.rootDictionaryObjId+" 0 R"),ct("/Resources "+t.resourceDictionaryObjId+" 0 R"),ct("/MediaBox ["+parseFloat(B(t.mediaBox.bottomLeftX))+" "+parseFloat(B(t.mediaBox.bottomLeftY))+" "+B(t.mediaBox.topRightX)+" "+B(t.mediaBox.topRightY)+"]"),null!==t.cropBox&&ct("/CropBox ["+B(t.cropBox.bottomLeftX)+" "+B(t.cropBox.bottomLeftY)+" "+B(t.cropBox.topRightX)+" "+B(t.cropBox.topRightY)+"]"),null!==t.bleedBox&&ct("/BleedBox ["+B(t.bleedBox.bottomLeftX)+" "+B(t.bleedBox.bottomLeftY)+" "+B(t.bleedBox.topRightX)+" "+B(t.bleedBox.topRightY)+"]"),null!==t.trimBox&&ct("/TrimBox ["+B(t.trimBox.bottomLeftX)+" "+B(t.trimBox.bottomLeftY)+" "+B(t.trimBox.topRightX)+" "+B(t.trimBox.topRightY)+"]"),null!==t.artBox&&ct("/ArtBox ["+B(t.artBox.bottomLeftX)+" "+B(t.artBox.bottomLeftY)+" "+B(t.artBox.topRightX)+" "+B(t.artBox.topRightY)+"]"),"number"==typeof t.userUnit&&1!==t.userUnit&&ct("/UserUnit "+t.userUnit),Rt.publish("putPage",{objId:n,pageContext:qt[e],pageNumber:e,page:r}),ct("/Contents "+i+" 0 R"),ct(">>"),ct("endobj");var a=r.join("\n");return x===A.ADVANCED&&(a+="\nQ"),Xt(i,!0),re({data:a,filters:ee(),objectId:i}),ct("endobj"),n},ie=b.__private__.putPages=function(){var t,e,r=[];for(t=1;t<=Et;t++)qt[t].objId=Jt(),qt[t].contentsObjId=Jt();for(t=1;t<=Et;t++)r.push(ne({number:t,data:it[t],objId:qt[t].objId,contentsObjId:qt[t].contentsObjId,mediaBox:qt[t].mediaBox,cropBox:qt[t].cropBox,bleedBox:qt[t].bleedBox,trimBox:qt[t].trimBox,artBox:qt[t].artBox,userUnit:qt[t].userUnit,rootDictionaryObjId:Zt,resourceDictionaryObjId:$t}));Xt(Zt,!0),ct("<</Type /Pages");var n="/Kids [";for(e=0;e<Et;e++)n+=r[e]+" 0 R ";ct(n+"]"),ct("/Count "+Et),ct(">>"),ct("endobj"),Rt.publish("postPutPages")},ae=function(t){var e=function(t,e){return-1!==t.indexOf(" ")?"("+Ie(t,e)+")":Ie(t,e)};Rt.publish("putFont",{font:t,out:ct,newObject:Yt,putStream:re,pdfEscapeWithNeededParanthesis:e}),!0!==t.isAlreadyPutted&&(t.objectNumber=Yt(),ct("<<"),ct("/Type /Font"),ct("/BaseFont /"+e(t.postScriptName)),ct("/Subtype /Type1"),"string"==typeof t.encoding&&ct("/Encoding /"+t.encoding),ct("/FirstChar 32"),ct("/LastChar 255"),ct(">>"),ct("endobj"))},oe=function(){for(var t in kt)kt.hasOwnProperty(t)&&(!1===m||!0===m&&v.hasOwnProperty(t))&&ae(kt[t])},se=function(t){t.objectNumber=Yt();var e=[];e.push({key:"Type",value:"/XObject"}),e.push({key:"Subtype",value:"/Form"}),e.push({key:"BBox",value:"["+[B(t.x),B(t.y),B(t.x+t.width),B(t.y+t.height)].join(" ")+"]"}),e.push({key:"Matrix",value:"["+t.matrix.toString()+"]"});var r=t.pages[1].join("\n");re({data:r,additionalKeyValues:e,objectId:t.objectNumber}),ct("endobj")},ue=function(){for(var t in Dt)Dt.hasOwnProperty(t)&&se(Dt[t])},ce=function(t,e){var r,n=[],i=1/(e-1);for(r=0;r<1;r+=i)n.push(r);if(n.push(1),0!=t[0].offset){var a={offset:0,color:t[0].color};t.unshift(a)}if(1!=t[t.length-1].offset){var o={offset:1,color:t[t.length-1].color};t.push(o)}for(var s="",u=0,c=0;c<n.length;c++){for(r=n[c];r>t[u+1].offset;)u++;var l=t[u].offset,h=(r-l)/(t[u+1].offset-l),f=t[u].color,d=t[u+1].color;s+=$(Math.round((1-h)*f[0]+h*d[0]).toString(16))+$(Math.round((1-h)*f[1]+h*d[1]).toString(16))+$(Math.round((1-h)*f[2]+h*d[2]).toString(16))}return s.trim()},le=function(t,e){e||(e=21);var r=Yt(),n=ce(t.colors,e),i=[];i.push({key:"FunctionType",value:"0"}),i.push({key:"Domain",value:"[0.0 1.0]"}),i.push({key:"Size",value:"["+e+"]"}),i.push({key:"BitsPerSample",value:"8"}),i.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),i.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),re({data:n,additionalKeyValues:i,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:r}),ct("endobj"),t.objectNumber=Yt(),ct("<< /ShadingType "+t.type),ct("/ColorSpace /DeviceRGB");var a="/Coords ["+B(parseFloat(t.coords[0]))+" "+B(parseFloat(t.coords[1]))+" ";2===t.type?a+=B(parseFloat(t.coords[2]))+" "+B(parseFloat(t.coords[3])):a+=B(parseFloat(t.coords[2]))+" "+B(parseFloat(t.coords[3]))+" "+B(parseFloat(t.coords[4]))+" "+B(parseFloat(t.coords[5])),ct(a+="]"),t.matrix&&ct("/Matrix ["+t.matrix.toString()+"]"),ct("/Function "+r+" 0 R"),ct("/Extend [true true]"),ct(">>"),ct("endobj")},he=function(t,e){var r=Jt(),n=Yt();e.push({resourcesOid:r,objectOid:n}),t.objectNumber=n;var i=[];i.push({key:"Type",value:"/Pattern"}),i.push({key:"PatternType",value:"1"}),i.push({key:"PaintType",value:"1"}),i.push({key:"TilingType",value:"1"}),i.push({key:"BBox",value:"["+t.boundingBox.map(B).join(" ")+"]"}),i.push({key:"XStep",value:B(t.xStep)}),i.push({key:"YStep",value:B(t.yStep)}),i.push({key:"Resources",value:r+" 0 R"}),t.matrix&&i.push({key:"Matrix",value:"["+t.matrix.toString()+"]"}),re({data:t.stream,additionalKeyValues:i,objectId:t.objectNumber}),ct("endobj")},fe=function(t){var e;for(e in Ct)Ct.hasOwnProperty(e)&&(Ct[e]instanceof C?le(Ct[e]):Ct[e]instanceof j&&he(Ct[e],t))},de=function(t){for(var e in t.objectNumber=Yt(),ct("<<"),t)switch(e){case"opacity":ct("/ca "+q(t[e]));break;case"stroke-opacity":ct("/CA "+q(t[e]))}ct(">>"),ct("endobj")},pe=function(){var t;for(t in Ot)Ot.hasOwnProperty(t)&&de(Ot[t])},ge=function(){for(var t in ct("/XObject <<"),Dt)Dt.hasOwnProperty(t)&&Dt[t].objectNumber>=0&&ct("/"+t+" "+Dt[t].objectNumber+" 0 R");Rt.publish("putXobjectDict"),ct(">>")},me=function(){We.oid=Yt(),ct("<<"),ct("/Filter /Standard"),ct("/V "+We.v),ct("/R "+We.r),ct("/U <"+We.toHexString(We.U)+">"),ct("/O <"+We.toHexString(We.O)+">"),ct("/P "+We.P),ct(">>"),ct("endobj")},ve=function(){for(var t in ct("/Font <<"),kt)kt.hasOwnProperty(t)&&(!1===m||!0===m&&v.hasOwnProperty(t))&&ct("/"+t+" "+kt[t].objectNumber+" 0 R");ct(">>")},be=function(){if(Object.keys(Ct).length>0){for(var t in ct("/Shading <<"),Ct)Ct.hasOwnProperty(t)&&Ct[t]instanceof C&&Ct[t].objectNumber>=0&&ct("/"+t+" "+Ct[t].objectNumber+" 0 R");Rt.publish("putShadingPatternDict"),ct(">>")}},ye=function(t){if(Object.keys(Ct).length>0){for(var e in ct("/Pattern <<"),Ct)Ct.hasOwnProperty(e)&&Ct[e]instanceof b.TilingPattern&&Ct[e].objectNumber>=0&&Ct[e].objectNumber<t&&ct("/"+e+" "+Ct[e].objectNumber+" 0 R");Rt.publish("putTilingPatternDict"),ct(">>")}},we=function(){if(Object.keys(Ot).length>0){var t;for(t in ct("/ExtGState <<"),Ot)Ot.hasOwnProperty(t)&&Ot[t].objectNumber>=0&&ct("/"+t+" "+Ot[t].objectNumber+" 0 R");Rt.publish("putGStateDict"),ct(">>")}},Ne=function(t){Xt(t.resourcesOid,!0),ct("<<"),ct("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),ve(),be(),ye(t.objectOid),we(),ge(),ct(">>"),ct("endobj")},Le=function(){var t=[];oe(),pe(),ue(),fe(t),Rt.publish("putResources"),t.forEach(Ne),Ne({resourcesOid:$t,objectOid:Number.MAX_SAFE_INTEGER}),Rt.publish("postPutResources")},Ae=function(){Rt.publish("putAdditionalObjects");for(var t=0;t<nt.length;t++){var e=nt[t];Xt(e.objId,!0),ct(e.content),ct("endobj")}Rt.publish("postPutAdditionalObjects")},xe=function(t){It[t.fontName]=It[t.fontName]||{},It[t.fontName][t.fontStyle]=t.id},Se=function(t,e,r,n,i){var a={id:"F"+(Object.keys(kt).length+1).toString(10),postScriptName:t,fontName:e,fontStyle:r,encoding:n,isStandardFont:i||!1,metadata:{}};return Rt.publish("addFont",{font:a,instance:this}),kt[a.id]=a,xe(a),a.id},_e=function(t){for(var e=0,r=ft.length;e<r;e++){var n=Se.call(this,t[e][0],t[e][1],t[e][2],ft[e][3],!0);!1===m&&(v[n]=!0);var i=t[e][0].split("-");xe({id:n,fontName:i[0],fontStyle:i[1]||""})}Rt.publish("addFonts",{fonts:kt,dictionary:It})},Pe=function(t){return t.foo=function(){try{return t.apply(this,arguments)}catch(t){var e=t.stack||"";~e.indexOf(" at ")&&(e=e.split(" at ")[1]);var n="Error in function "+e.split("\n")[0].split("<")[0]+": "+t.message;if(!r.console)throw new Error(n);r.console.error(n,t),r.alert&&alert(n)}},t.foo.bar=t,t.foo},ke=function(t,e){var r,n,i,a,o,s,u,c,l;if(i=(e=e||{}).sourceEncoding||"Unicode",o=e.outputEncoding,(e.autoencode||o)&&kt[At].metadata&&kt[At].metadata[i]&&kt[At].metadata[i].encoding&&(a=kt[At].metadata[i].encoding,!o&&kt[At].encoding&&(o=kt[At].encoding),!o&&a.codePages&&(o=a.codePages[0]),"string"==typeof o&&(o=a[o]),o)){for(u=!1,s=[],r=0,n=t.length;r<n;r++)(c=o[t.charCodeAt(r)])?s.push(String.fromCharCode(c)):s.push(t[r]),s[r].charCodeAt(0)>>8&&(u=!0);t=s.join("")}for(r=t.length;void 0===u&&0!==r;)t.charCodeAt(r-1)>>8&&(u=!0),r--;if(!u)return t;for(s=e.noBOM?[]:[254,255],r=0,n=t.length;r<n;r++){if((l=(c=t.charCodeAt(r))>>8)>>8)throw new Error("Character at position "+r+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(l),s.push(c-(l<<8))}return String.fromCharCode.apply(void 0,s)},Ie=b.__private__.pdfEscape=b.pdfEscape=function(t,e){return ke(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Fe=b.__private__.beginPage=function(t){it[++Et]=[],qt[Et]={objId:0,contentsObjId:0,userUnit:Number(f),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(t[0]),topRightY:Number(t[1])}},Oe(Et),ut(it[K])},Ce=function(t,e){var r,a,s;switch(n=e||n,"string"==typeof t&&(r=L(t.toLowerCase()),Array.isArray(r)&&(a=r[0],s=r[1])),Array.isArray(t)&&(a=t[0]*xt,s=t[1]*xt),isNaN(a)&&(a=o[0],s=o[1]),(a>14400||s>14400)&&(i.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),a=Math.min(14400,a),s=Math.min(14400,s)),o=[a,s],n.substr(0,1)){case"l":s>a&&(o=[s,a]);break;case"p":a>s&&(o=[s,a])}Fe(o),hr(lr),ct(yr),0!==Sr&&ct(Sr+" J"),0!==_r&&ct(_r+" j"),Rt.publish("addPage",{pageNumber:Et})},je=function(t){t>0&&t<=Et&&(it.splice(t,1),qt.splice(t,1),Et--,K>Et&&(K=Et),this.setPage(K))},Oe=function(t){t>0&&t<=Et&&(K=t)},Be=b.__private__.getNumberOfPages=b.getNumberOfPages=function(){return it.length-1},Me=function(t,e,r){var n,a=void 0;return r=r||{},t=void 0!==t?t:kt[At].fontName,e=void 0!==e?e:kt[At].fontStyle,n=t.toLowerCase(),void 0!==It[n]&&void 0!==It[n][e]?a=It[n][e]:void 0!==It[t]&&void 0!==It[t][e]?a=It[t][e]:!1===r.disableWarning&&i.warn("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts."),a||r.noFallback||null==(a=It.times[e])&&(a=It.times.normal),a},Ee=b.__private__.putInfo=function(){var t=Yt(),e=function(t){return t};for(var r in null!==g&&(e=We.encryptor(t,0)),ct("<<"),ct("/Producer ("+Ie(e("jsPDF "+O.version))+")"),Lt)Lt.hasOwnProperty(r)&&Lt[r]&&ct("/"+r.substr(0,1).toUpperCase()+r.substr(1)+" ("+Ie(e(Lt[r]))+")");ct("/CreationDate ("+Ie(e(z))+")"),ct(">>"),ct("endobj")},qe=b.__private__.putCatalog=function(t){var e=(t=t||{}).rootDictionaryObjId||Zt;switch(Yt(),ct("<<"),ct("/Type /Catalog"),ct("/Pages "+e+" 0 R"),pt||(pt="fullwidth"),pt){case"fullwidth":ct("/OpenAction [3 0 R /FitH null]");break;case"fullheight":ct("/OpenAction [3 0 R /FitV null]");break;case"fullpage":ct("/OpenAction [3 0 R /Fit]");break;case"original":ct("/OpenAction [3 0 R /XYZ null null 1]");break;default:var r=""+pt;"%"===r.substr(r.length-1)&&(pt=parseInt(pt)/100),"number"==typeof pt&&ct("/OpenAction [3 0 R /XYZ null null "+q(pt)+"]")}switch(yt||(yt="continuous"),yt){case"continuous":ct("/PageLayout /OneColumn");break;case"single":ct("/PageLayout /SinglePage");break;case"two":case"twoleft":ct("/PageLayout /TwoColumnLeft");break;case"tworight":ct("/PageLayout /TwoColumnRight")}vt&&ct("/PageMode /"+vt),Rt.publish("putCatalog"),ct(">>"),ct("endobj")},Re=b.__private__.putTrailer=function(){ct("trailer"),ct("<<"),ct("/Size "+(Q+1)),ct("/Root "+Q+" 0 R"),ct("/Info "+(Q-1)+" 0 R"),null!==g&&ct("/Encrypt "+We.oid+" 0 R"),ct("/ID [ <"+H+"> <"+H+"> ]"),ct(">>")},Te=b.__private__.putHeader=function(){ct("%PDF-"+y),ct("%ºß¬à")},De=b.__private__.putXRef=function(){var t="0000000000";ct("xref"),ct("0 "+(Q+1)),ct("0000000000 65535 f ");for(var e=1;e<=Q;e++){"function"==typeof tt[e]?ct((t+tt[e]()).slice(-10)+" 00000 n "):void 0!==tt[e]?ct((t+tt[e]).slice(-10)+" 00000 n "):ct("0000000000 00000 n ")}},Ue=b.__private__.buildDocument=function(){st(),ut(et),Rt.publish("buildDocument"),Te(),ie(),Ae(),Le(),null!==g&&me(),Ee(),qe();var t=rt;return De(),Re(),ct("startxref"),ct(""+t),ct("%%EOF"),ut(it[K]),et.join("\n")},ze=b.__private__.getBlob=function(t){return new Blob([ht(t)],{type:"application/pdf"})},He=b.output=b.__private__.output=Pe((function(t,e){switch("string"==typeof(e=e||{})?e={filename:e}:e.filename=e.filename||"generated.pdf",t){case void 0:return Ue();case"save":b.save(e.filename);break;case"arraybuffer":return ht(Ue());case"blob":return ze(Ue());case"bloburi":case"bloburl":if(void 0!==r.URL&&"function"==typeof r.URL.createObjectURL)return r.URL&&r.URL.createObjectURL(ze(Ue()))||void 0;i.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var n="",a=Ue();try{n=c(a)}catch(t){n=c(unescape(encodeURIComponent(a)))}return"data:application/pdf;filename="+e.filename+";base64,"+n;case"pdfobjectnewwindow":if("[object Window]"===Object.prototype.toString.call(r)){var o='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+(e.pdfObjectUrl||"https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js")+'"><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(e)+");<\/script></body></html>",s=r.open();return null!==s&&s.document.write(o),s}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if("[object Window]"===Object.prototype.toString.call(r)){var u='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(e.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+e.filename+'" width="500px" height="400px" /></body></html>',l=r.open();if(null!==l){l.document.write(u);var h=this;l.document.documentElement.querySelector("#pdfViewer").onload=function(){l.document.title=e.filename,l.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(h.output("bloburl"))}}return l}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if("[object Window]"!==Object.prototype.toString.call(r))throw new Error("The option dataurlnewwindow just works in a browser-environment.");var f='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",e)+'"></iframe></body></html>',d=r.open();if(null!==d&&(d.document.write(f),d.document.title=e.filename),d||"undefined"==typeof safari)return d;break;case"datauri":case"dataurl":return r.document.location.href=this.output("datauristring",e);default:return null}})),Ve=function(t){return!0===Array.isArray(Tt)&&Tt.indexOf(t)>-1};switch(a){case"pt":xt=1;break;case"mm":xt=72/25.4;break;case"cm":xt=72/2.54;break;case"in":xt=72;break;case"px":xt=1==Ve("px_scaling")?.75:96/72;break;case"pc":case"em":xt=12;break;case"ex":xt=6;break;default:throw new Error("Invalid unit: "+a)}var We=null;J(),W();var Ge=function(t){return null!==g?We.encryptor(t,0):function(t){return t}},Ye=b.__private__.getPageInfo=b.getPageInfo=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:qt[t].objId,pageNumber:t,pageContext:qt[t]}},Je=b.__private__.getPageInfoByObjId=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var e in qt)if(qt[e].objId===t)break;return Ye(e)},Xe=b.__private__.getCurrentPageInfo=b.getCurrentPageInfo=function(){return{objId:qt[K].objId,pageNumber:K,pageContext:qt[K]}};b.addPage=function(){return Ce.apply(this,arguments),this},b.setPage=function(){return Oe.apply(this,arguments),ut.call(this,it[K]),this},b.insertPage=function(t){return this.addPage(),this.movePage(K,t),this},b.movePage=function(t,e){var r,n;if(t>e){r=it[t],n=qt[t];for(var i=t;i>e;i--)it[i]=it[i-1],qt[i]=qt[i-1];it[e]=r,qt[e]=n,this.setPage(e)}else if(t<e){r=it[t],n=qt[t];for(var a=t;a<e;a++)it[a]=it[a+1],qt[a]=qt[a+1];it[e]=r,qt[e]=n,this.setPage(e)}return this},b.deletePage=function(){return je.apply(this,arguments),this},b.__private__.text=b.text=function(t,e,r,n,i){var a,o,s,u,c,l,h,f,d=(n=n||{}).scope||this;if("number"==typeof t&&"number"==typeof e&&("string"==typeof r||Array.isArray(r))){var p=r;r=e,e=t,t=p}if(arguments[3]instanceof Ht==!1?(s=arguments[4],u=arguments[5],"object"==typeof(h=arguments[3])&&null!==h||("string"==typeof s&&(u=s,s=null),"string"==typeof h&&(u=h,h=null),"number"==typeof h&&(s=h,h=null),n={flags:h,angle:s,align:u})):(M("The transform parameter of text() with a Matrix value"),f=i),isNaN(e)||isNaN(r)||null==t)throw new Error("Invalid arguments passed to jsPDF.text");if(0===t.length)return d;var g="",m=!1,b="number"==typeof n.lineHeightFactor?n.lineHeightFactor:cr,y=d.internal.scaleFactor;function w(t){return t=t.split("\t").join(Array(n.TabLen||9).join(" ")),Ie(t,h)}function N(t){for(var e,r=t.concat(),n=[],i=r.length;i--;)"string"==typeof(e=r.shift())?n.push(e):Array.isArray(t)&&(1===e.length||void 0===e[1]&&void 0===e[2])?n.push(e[0]):n.push([e[0],e[1],e[2]]);return n}function L(t,e){var r;if("string"==typeof t)r=e(t)[0];else if(Array.isArray(t)){for(var n,i,a=t.concat(),o=[],s=a.length;s--;)"string"==typeof(n=a.shift())?o.push(e(n)[0]):Array.isArray(n)&&"string"==typeof n[0]&&(i=e(n[0],n[1],n[2]),o.push([i[0],i[1],i[2]]));r=o}return r}var S=!1,_=!0;if("string"==typeof t)S=!0;else if(Array.isArray(t)){var P=t.concat();o=[];for(var k,I=P.length;I--;)("string"!=typeof(k=P.shift())||Array.isArray(k)&&"string"!=typeof k[0])&&(_=!1);S=_}if(!1===S)throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');"string"==typeof t&&(t=t.match(/[\r?\n]/)?t.split(/\r\n|\r|\n/g):[t]);var F=dt/d.internal.scaleFactor,C=F*(cr-1);switch(n.baseline){case"bottom":r-=C;break;case"top":r+=F-C;break;case"hanging":r+=F-2*C;break;case"middle":r+=F/2-C}if((l=n.maxWidth||0)>0&&("string"==typeof t?t=d.splitTextToSize(t,l):"[object Array]"===Object.prototype.toString.call(t)&&(t=t.reduce((function(t,e){return t.concat(d.splitTextToSize(e,l))}),[]))),a={text:t,x:e,y:r,options:n,mutex:{pdfEscape:Ie,activeFontKey:At,fonts:kt,activeFontSize:dt}},Rt.publish("preProcessText",a),t=a.text,s=(n=a.options).angle,f instanceof Ht==!1&&s&&"number"==typeof s){s*=Math.PI/180,0===n.rotationDirection&&(s=-s),x===A.ADVANCED&&(s=-s);var j=Math.cos(s),O=Math.sin(s);f=new Ht(j,O,-O,j,0,0)}else s&&s instanceof Ht&&(f=s);x!==A.ADVANCED||f||(f=Wt),void 0!==(c=n.charSpace||Ar)&&(g+=B(T(c))+" Tc\n",this.setCharSpace(this.getCharSpace()||0));n.lang;var E=-1,q=void 0!==n.renderingMode?n.renderingMode:n.stroke,R=d.internal.getCurrentPageInfo().pageContext;switch(q){case 0:case!1:case"fill":E=0;break;case 1:case!0:case"stroke":E=1;break;case 2:case"fillThenStroke":E=2;break;case 3:case"invisible":E=3;break;case 4:case"fillAndAddForClipping":E=4;break;case 5:case"strokeAndAddPathForClipping":E=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":E=6;break;case 7:case"addToPathForClipping":E=7}var D=void 0!==R.usedRenderingMode?R.usedRenderingMode:-1;-1!==E?g+=E+" Tr\n":-1!==D&&(g+="0 Tr\n"),-1!==E&&(R.usedRenderingMode=E),u=n.align||"left";var U,z=dt*b,H=d.internal.pageSize.getWidth(),V=kt[At];c=n.charSpace||Ar,l=n.maxWidth||0,h=Object.assign({autoencode:!0,noBOM:!0},n.flags);var W=[];if("[object Array]"===Object.prototype.toString.call(t)){var G;o=N(t),"left"!==u&&(U=o.map((function(t){return d.getStringUnitWidth(t,{font:V,charSpace:c,fontSize:dt,doKerning:!1})*dt/y})));var Y,J=0;if("right"===u){e-=U[0],t=[],I=o.length;for(var X=0;X<I;X++)0===X?(Y=gr(e),G=mr(r)):(Y=T(J-U[X]),G=-z),t.push([o[X],Y,G]),J=U[X]}else if("center"===u){e-=U[0]/2,t=[],I=o.length;for(var K=0;K<I;K++)0===K?(Y=gr(e),G=mr(r)):(Y=T((J-U[K])/2),G=-z),t.push([o[K],Y,G]),J=U[K]}else if("left"===u){t=[],I=o.length;for(var Z=0;Z<I;Z++)t.push(o[Z])}else{if("justify"!==u)throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');t=[],I=o.length,l=0!==l?l:H;for(var $=0;$<I;$++)G=0===$?mr(r):-z,Y=0===$?gr(e):0,$<I-1&&W.push(B(T((l-U[$])/(o[$].split(" ").length-1)))),t.push([o[$],Y,G])}}var Q="boolean"==typeof n.R2L?n.R2L:mt;!0===Q&&(t=L(t,(function(t,e,r){return[t.split("").reverse().join(""),e,r]}))),a={text:t,x:e,y:r,options:n,mutex:{pdfEscape:Ie,activeFontKey:At,fonts:kt,activeFontSize:dt}},Rt.publish("postProcessText",a),t=a.text,m=a.mutex.isHex||!1;var tt=kt[At].encoding;"WinAnsiEncoding"!==tt&&"StandardEncoding"!==tt||(t=L(t,(function(t,e,r){return[w(t),e,r]}))),o=N(t),t=[];for(var et,rt,nt,it=0,at=1,ot=Array.isArray(o[0])?at:it,st="",ut=function(t,e,r){var i="";return r instanceof Ht?(r="number"==typeof n.angle?Vt(r,new Ht(1,0,0,1,t,e)):Vt(new Ht(1,0,0,1,t,e),r),x===A.ADVANCED&&(r=Vt(new Ht(1,0,0,-1,0,0),r)),i=r.join(" ")+" Tm\n"):i=B(t)+" "+B(e)+" Td\n",i},lt=0;lt<o.length;lt++){switch(st="",ot){case at:nt=(m?"<":"(")+o[lt][0]+(m?">":")"),et=parseFloat(o[lt][1]),rt=parseFloat(o[lt][2]);break;case it:nt=(m?"<":"(")+o[lt]+(m?">":")"),et=gr(e),rt=mr(r)}void 0!==W&&void 0!==W[lt]&&(st=W[lt]+" Tw\n"),0===lt?t.push(st+ut(et,rt,f)+nt):ot===it?t.push(st+nt):ot===at&&t.push(st+ut(et,rt,f)+nt)}t=ot===it?t.join(" Tj\nT* "):t.join(" Tj\n"),t+=" Tj\n";var ht="BT\n/";return ht+=At+" "+dt+" Tf\n",ht+=B(dt*b)+" TL\n",ht+=Nr+"\n",ht+=g,ht+=t,ct(ht+="ET"),v[At]=!0,d};var Ke=b.__private__.clip=b.clip=function(t){return ct("evenodd"===t?"W*":"W"),this};b.clipEvenOdd=function(){return Ke("evenodd")},b.__private__.discardPath=b.discardPath=function(){return ct("n"),this};var Ze=b.__private__.isValidStyle=function(t){var e=!1;return-1!==[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(t)&&(e=!0),e};b.__private__.setDefaultPathOperation=b.setDefaultPathOperation=function(t){return Ze(t)&&(p=t),this};var $e=b.__private__.getStyle=b.getStyle=function(t){var e=p;switch(t){case"D":case"S":e="S";break;case"F":e="f";break;case"FD":case"DF":e="B";break;case"f":case"f*":case"B":case"B*":e=t}return e},Qe=b.close=function(){return ct("h"),this};b.stroke=function(){return ct("S"),this},b.fill=function(t){return tr("f",t),this},b.fillEvenOdd=function(t){return tr("f*",t),this},b.fillStroke=function(t){return tr("B",t),this},b.fillStrokeEvenOdd=function(t){return tr("B*",t),this};var tr=function(t,e){"object"==typeof e?nr(e,t):ct(t)},er=function(t){null===t||x===A.ADVANCED&&void 0===t||(t=$e(t),ct(t))};function rr(t,e,r,n,i){var a=new j(e||this.boundingBox,r||this.xStep,n||this.yStep,this.gState,i||this.matrix);a.stream=this.stream;var o=t+"$$"+this.cloneIndex+++"$$";return Gt(o,a),a}var nr=function(t,e){var r=jt[t.key],n=Ct[r];if(n instanceof C)ct("q"),ct(ir(e)),n.gState&&b.setGState(n.gState),ct(t.matrix.toString()+" cm"),ct("/"+r+" sh"),ct("Q");else if(n instanceof j){var i=new Ht(1,0,0,-1,0,Er());t.matrix&&(i=i.multiply(t.matrix||Wt),r=rr.call(n,t.key,t.boundingBox,t.xStep,t.yStep,i).id),ct("q"),ct("/Pattern cs"),ct("/"+r+" scn"),n.gState&&b.setGState(n.gState),ct(e),ct("Q")}},ir=function(t){switch(t){case"f":case"F":return"W n";case"f*":return"W* n";case"B":return"W S";case"B*":return"W* S";case"S":return"W S";case"n":return"W n"}},ar=b.moveTo=function(t,e){return ct(B(T(t))+" "+B(U(e))+" m"),this},or=b.lineTo=function(t,e){return ct(B(T(t))+" "+B(U(e))+" l"),this},sr=b.curveTo=function(t,e,r,n,i,a){return ct([B(T(t)),B(U(e)),B(T(r)),B(U(n)),B(T(i)),B(U(a)),"c"].join(" ")),this};b.__private__.line=b.line=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Ze(i))throw new Error("Invalid arguments passed to jsPDF.line");return x===A.COMPAT?this.lines([[r-t,n-e]],t,e,[1,1],i||"S"):this.lines([[r-t,n-e]],t,e,[1,1]).stroke()},b.__private__.lines=b.lines=function(t,e,r,n,i,a){var o,s,u,c,l,h,f,d,p,g,m,v;if("number"==typeof t&&(v=r,r=e,e=t,t=v),n=n||[1,1],a=a||!1,isNaN(e)||isNaN(r)||!Array.isArray(t)||!Array.isArray(n)||!Ze(i)||"boolean"!=typeof a)throw new Error("Invalid arguments passed to jsPDF.lines");for(ar(e,r),o=n[0],s=n[1],c=t.length,g=e,m=r,u=0;u<c;u++)2===(l=t[u]).length?(g=l[0]*o+g,m=l[1]*s+m,or(g,m)):(h=l[0]*o+g,f=l[1]*s+m,d=l[2]*o+g,p=l[3]*s+m,g=l[4]*o+g,m=l[5]*s+m,sr(h,f,d,p,g,m));return a&&Qe(),er(i),this},b.path=function(t){for(var e=0;e<t.length;e++){var r=t[e],n=r.c;switch(r.op){case"m":ar(n[0],n[1]);break;case"l":or(n[0],n[1]);break;case"c":sr.apply(this,n);break;case"h":Qe()}}return this},b.__private__.rect=b.rect=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Ze(i))throw new Error("Invalid arguments passed to jsPDF.rect");return x===A.COMPAT&&(n=-n),ct([B(T(t)),B(U(e)),B(T(r)),B(T(n)),"re"].join(" ")),er(i),this},b.__private__.triangle=b.triangle=function(t,e,r,n,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a)||!Ze(o))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[r-t,n-e],[i-r,a-n],[t-i,e-a]],t,e,[1,1],o,!0),this},b.__private__.roundedRect=b.roundedRect=function(t,e,r,n,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a)||!Ze(o))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var s=4/3*(Math.SQRT2-1);return i=Math.min(i,.5*r),a=Math.min(a,.5*n),this.lines([[r-2*i,0],[i*s,0,i,a-a*s,i,a],[0,n-2*a],[0,a*s,-i*s,a,-i,a],[2*i-r,0],[-i*s,0,-i,-a*s,-i,-a],[0,2*a-n],[0,-a*s,i*s,-a,i,-a]],t+i,e,[1,1],o,!0),this},b.__private__.ellipse=b.ellipse=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Ze(i))throw new Error("Invalid arguments passed to jsPDF.ellipse");var a=4/3*(Math.SQRT2-1)*r,o=4/3*(Math.SQRT2-1)*n;return ar(t+r,e),sr(t+r,e-o,t+a,e-n,t,e-n),sr(t-a,e-n,t-r,e-o,t-r,e),sr(t-r,e+o,t-a,e+n,t,e+n),sr(t+a,e+n,t+r,e+o,t+r,e),er(i),this},b.__private__.circle=b.circle=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||!Ze(n))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(t,e,r,r,n)},b.setFont=function(t,e,r){return r&&(e=F(e,r)),At=Me(t,e,{disableWarning:!1}),this};var ur=b.__private__.getFont=b.getFont=function(){return kt[Me.apply(b,arguments)]};b.__private__.getFontList=b.getFontList=function(){var t,e,r={};for(t in It)if(It.hasOwnProperty(t))for(e in r[t]=[],It[t])It[t].hasOwnProperty(e)&&r[t].push(e);return r},b.addFont=function(t,e,r,n,i){var a=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&-1!==a.indexOf(arguments[3])?i=arguments[3]:arguments[3]&&-1==a.indexOf(arguments[3])&&(r=F(r,n)),i=i||"Identity-H",Se.call(this,t,e,r,i)};var cr,lr=t.lineWidth||.200025,hr=b.__private__.setLineWidth=b.setLineWidth=function(t){return ct(B(T(t))+" w"),this};b.__private__.setLineDash=O.API.setLineDash=O.API.setLineDashPattern=function(t,e){if(t=t||[],e=e||0,isNaN(e)||!Array.isArray(t))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return t=t.map((function(t){return B(T(t))})).join(" "),e=B(T(e)),ct("["+t+"] "+e+" d"),this};var fr=b.__private__.getLineHeight=b.getLineHeight=function(){return dt*cr};b.__private__.getLineHeight=b.getLineHeight=function(){return dt*cr};var dr=b.__private__.setLineHeightFactor=b.setLineHeightFactor=function(t){return"number"==typeof(t=t||1.15)&&(cr=t),this},pr=b.__private__.getLineHeightFactor=b.getLineHeightFactor=function(){return cr};dr(t.lineHeight);var gr=b.__private__.getHorizontalCoordinate=function(t){return T(t)},mr=b.__private__.getVerticalCoordinate=function(t){return x===A.ADVANCED?t:qt[K].mediaBox.topRightY-qt[K].mediaBox.bottomLeftY-T(t)},vr=b.__private__.getHorizontalCoordinateString=b.getHorizontalCoordinateString=function(t){return B(gr(t))},br=b.__private__.getVerticalCoordinateString=b.getVerticalCoordinateString=function(t){return B(mr(t))},yr=t.strokeColor||"0 G";b.__private__.getStrokeColor=b.getDrawColor=function(){return Qt(yr)},b.__private__.setStrokeColor=b.setDrawColor=function(t,e,r,n){return yr=te({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"draw",precision:2}),ct(yr),this};var wr=t.fillColor||"0 g";b.__private__.getFillColor=b.getFillColor=function(){return Qt(wr)},b.__private__.setFillColor=b.setFillColor=function(t,e,r,n){return wr=te({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"fill",precision:2}),ct(wr),this};var Nr=t.textColor||"0 g",Lr=b.__private__.getTextColor=b.getTextColor=function(){return Qt(Nr)};b.__private__.setTextColor=b.setTextColor=function(t,e,r,n){return Nr=te({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"text",precision:3}),this};var Ar=t.charSpace,xr=b.__private__.getCharSpace=b.getCharSpace=function(){return parseFloat(Ar||0)};b.__private__.setCharSpace=b.setCharSpace=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Ar=t,this};var Sr=0;b.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},b.__private__.setLineCap=b.setLineCap=function(t){var e=b.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Sr=e,ct(e+" J"),this};var _r=0;b.__private__.setLineJoin=b.setLineJoin=function(t){var e=b.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return _r=e,ct(e+" j"),this},b.__private__.setLineMiterLimit=b.__private__.setMiterLimit=b.setLineMiterLimit=b.setMiterLimit=function(t){if(t=t||0,isNaN(t))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return ct(B(T(t))+" M"),this},b.GState=I,b.setGState=function(t){(t="string"==typeof t?Ot[Bt[t]]:Pr(null,t)).equals(Mt)||(ct("/"+t.id+" gs"),Mt=t)};var Pr=function(t,e){if(!t||!Bt[t]){var r=!1;for(var n in Ot)if(Ot.hasOwnProperty(n)&&Ot[n].equals(e)){r=!0;break}if(r)e=Ot[n];else{var i="GS"+(Object.keys(Ot).length+1).toString(10);Ot[i]=e,e.id=i}return t&&(Bt[t]=e.id),Rt.publish("addGState",e),e}};b.addGState=function(t,e){return Pr(t,e),this},b.saveGraphicsState=function(){return ct("q"),Ft.push({key:At,size:dt,color:Nr}),this},b.restoreGraphicsState=function(){ct("Q");var t=Ft.pop();return At=t.key,dt=t.size,Nr=t.color,Mt=null,this},b.setCurrentTransformationMatrix=function(t){return ct(t.toString()+" cm"),this},b.comment=function(t){return ct("#"+t),this};var kr=function(t,e){var r=t||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return r},set:function(t){isNaN(t)||(r=parseFloat(t))}});var n=e||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return n},set:function(t){isNaN(t)||(n=parseFloat(t))}});var i="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return i},set:function(t){i=t.toString()}}),this},Ir=function(t,e,r,n){kr.call(this,t,e),this.type="rect";var i=r||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return i},set:function(t){isNaN(t)||(i=parseFloat(t))}});var a=n||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return a},set:function(t){isNaN(t)||(a=parseFloat(t))}}),this},Fr=function(){this.page=Et,this.currentPage=K,this.pages=it.slice(0),this.pagesContext=qt.slice(0),this.x=St,this.y=_t,this.matrix=Pt,this.width=Br(K),this.height=Er(K),this.outputDestination=ot,this.id="",this.objectNumber=-1};Fr.prototype.restore=function(){Et=this.page,K=this.currentPage,qt=this.pagesContext,it=this.pages,St=this.x,_t=this.y,Pt=this.matrix,Mr(K,this.width),qr(K,this.height),ot=this.outputDestination};var Cr=function(t,e,r,n,i){zt.push(new Fr),Et=K=0,it=[],St=t,_t=e,Pt=i,Fe([r,n])},jr=function(t){if(!Ut[t]){var e=new Fr,r="Xo"+(Object.keys(Dt).length+1).toString(10);e.id=r,Ut[t]=r,Dt[r]=e,Rt.publish("addFormObject",e),zt.pop().restore()}};for(var Or in b.beginFormObject=function(t,e,r,n,i){return Cr(t,e,r,n,i),this},b.endFormObject=function(t){return jr(t),this},b.doFormObject=function(t,e){var r=Dt[Ut[t]];return ct("q"),ct(e.toString()+" cm"),ct("/"+r.id+" Do"),ct("Q"),this},b.getFormObject=function(t){var e=Dt[Ut[t]];return{x:e.x,y:e.y,width:e.width,height:e.height,matrix:e.matrix}},b.save=function(t,e){return t=t||"generated.pdf",(e=e||{}).returnPromise=e.returnPromise||!1,!1===e.returnPromise?(l(ze(Ue()),t),"function"==typeof l.unload&&r.setTimeout&&setTimeout(l.unload,911),this):new Promise((function(e,n){try{var i=l(ze(Ue()),t);"function"==typeof l.unload&&r.setTimeout&&setTimeout(l.unload,911),e(i)}catch(t){n(t.message)}}))},O.API)O.API.hasOwnProperty(Or)&&("events"===Or&&O.API.events.length?function(t,e){var r,n,i;for(i=e.length-1;-1!==i;i--)r=e[i][0],n=e[i][1],t.subscribe.apply(t,[r].concat("function"==typeof n?[n]:n))}(Rt,O.API.events):b[Or]=O.API[Or]);var Br=b.getPageWidth=function(t){return(qt[t=t||K].mediaBox.topRightX-qt[t].mediaBox.bottomLeftX)/xt},Mr=b.setPageWidth=function(t,e){qt[t].mediaBox.topRightX=e*xt+qt[t].mediaBox.bottomLeftX},Er=b.getPageHeight=function(t){return(qt[t=t||K].mediaBox.topRightY-qt[t].mediaBox.bottomLeftY)/xt},qr=b.setPageHeight=function(t,e){qt[t].mediaBox.topRightY=e*xt+qt[t].mediaBox.bottomLeftY};return b.internal={pdfEscape:Ie,getStyle:$e,getFont:ur,getFontSize:gt,getCharSpace:xr,getTextColor:Lr,getLineHeight:fr,getLineHeightFactor:pr,write:lt,getHorizontalCoordinate:gr,getVerticalCoordinate:mr,getCoordinateString:vr,getVerticalCoordinateString:br,collections:{},newObject:Yt,newAdditionalObject:Kt,newObjectDeferred:Jt,newObjectDeferredBegin:Xt,getFilters:ee,putStream:re,events:Rt,scaleFactor:xt,pageSize:{getWidth:function(){return Br(K)},setWidth:function(t){Mr(K,t)},getHeight:function(){return Er(K)},setHeight:function(t){qr(K,t)}},encryptionOptions:g,encryption:We,getEncryptor:Ge,output:He,getNumberOfPages:Be,pages:it,out:ct,f2:q,f3:R,getPageInfo:Ye,getPageInfoByObjId:Je,getCurrentPageInfo:Xe,getPDFVersion:w,Point:kr,Rectangle:Ir,Matrix:Ht,hasHotfix:Ve},Object.defineProperty(b.internal.pageSize,"width",{get:function(){return Br(K)},set:function(t){Mr(K,t)},enumerable:!0,configurable:!0}),Object.defineProperty(b.internal.pageSize,"height",{get:function(){return Er(K)},set:function(t){qr(K,t)},enumerable:!0,configurable:!0}),_e.call(b,ft),At="F1",Ce(o,n),Rt.publish("initialized"),b}P.prototype.lsbFirstWord=function(t){return String.fromCharCode(t>>0&255,t>>8&255,t>>16&255,t>>24&255)},P.prototype.toHexString=function(t){return t.split("").map((function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)})).join("")},P.prototype.hexToBytes=function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(String.fromCharCode(parseInt(t.substr(r,2),16)));return e.join("")},P.prototype.processOwnerPassword=function(t,e){return S(A(e).substr(0,5),t)},P.prototype.encryptor=function(t,e){let r=A(this.encryptionKey+String.fromCharCode(255&t,t>>8&255,t>>16&255,255&e,e>>8&255)).substr(0,10);return function(t){return S(r,t)}},I.prototype.equals=function(t){var e,r="id,objectNumber,equals";if(!t||typeof t!=typeof this)return!1;var n=0;for(e in this)if(!(r.indexOf(e)>=0)){if(this.hasOwnProperty(e)&&!t.hasOwnProperty(e))return!1;if(this[e]!==t[e])return!1;n++}for(e in t)t.hasOwnProperty(e)&&r.indexOf(e)<0&&n--;return 0===n},O.API={events:[]},O.version="2.3.1";var B=O.API,M=1,E=function(t){return t.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},q=function(t){return t.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},R=function(t){return t.toFixed(2)},T=function(t){return t.toFixed(5)};B.__acroform__={};var D=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},U=function(t){return t*M},z=function(t){var e=new ot,r=wt.internal.getHeight(t)||0,n=wt.internal.getWidth(t)||0;return e.BBox=[0,0,Number(R(n)),Number(R(r))],e},H=B.__acroform__.setBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return t|=1<<e},V=B.__acroform__.clearBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return t&=~(1<<e)},W=B.__acroform__.getBit=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return 0==(t&1<<e)?0:1},G=B.__acroform__.getBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return W(t,e-1)},Y=B.__acroform__.setBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return H(t,e-1)},J=B.__acroform__.clearBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return V(t,e-1)},X=B.__acroform__.calculateCoordinates=function(t,e){var r=e.internal.getHorizontalCoordinate,n=e.internal.getVerticalCoordinate,i=t[0],a=t[1],o=t[2],s=t[3],u={};return u.lowerLeft_X=r(i)||0,u.lowerLeft_Y=n(a+s)||0,u.upperRight_X=r(i+o)||0,u.upperRight_Y=n(a)||0,[Number(R(u.lowerLeft_X)),Number(R(u.lowerLeft_Y)),Number(R(u.upperRight_X)),Number(R(u.upperRight_Y))]},K=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e=[],r=t._V||t.DV,n=Z(t,r),i=t.scope.internal.getFont(t.fontName,t.fontStyle).id;e.push("/Tx BMC"),e.push("q"),e.push("BT"),e.push(t.scope.__private__.encodeColorString(t.color)),e.push("/"+i+" "+R(n.fontSize)+" Tf"),e.push("1 0 0 1 0 0 Tm"),e.push(n.text),e.push("ET"),e.push("Q"),e.push("EMC");var a=z(t);return a.scope=t.scope,a.stream=e.join("\n"),a}},Z=function(t,e){var r=0===t.fontSize?t.maxFontSize:t.fontSize,n={text:"",fontSize:""},i=(e=")"==(e="("==e.substr(0,1)?e.substr(1):e).substr(e.length-1)?e.substr(0,e.length-1):e).split(" "),a=r,o=wt.internal.getHeight(t)||0;o=o<0?-o:o;var s=wt.internal.getWidth(t)||0;s=s<0?-s:s;var u=function(e,r,n){if(e+1<i.length){var a=r+" "+i[e+1];return $(a,t,n).width<=s-4}return!1};a++;t:for(;a>0;){e="",a--;var c,l,h=$("3",t,a).height,f=t.multiline?o-a:(o-h)/2,d=f+=2,p=0,g=0;if(a<=0){e="(...) Tj\n",e+="% Width of Text: "+$(e,t,a=12).width+", FieldWidth:"+s+"\n";break}var m="",v=0;for(var b in i)if(i.hasOwnProperty(b)){m=" "==(m+=i[b]+" ").substr(m.length-1)?m.substr(0,m.length-1):m;var y=parseInt(b),w=u(y,m,a),N=b>=i.length-1;if(w&&!N){m+=" ";continue}if(w||N){if(N)g=y;else if(t.multiline&&(h+2)*(v+2)+2>o)continue t}else{if(!t.multiline)continue t;if((h+2)*(v+2)+2>o)continue t;g=y}for(var L="",A=p;A<=g;A++)L+=i[A]+" ";switch(L=" "==L.substr(L.length-1)?L.substr(0,L.length-1):L,l=$(L,t,a).width,t.textAlign){case"right":c=s-l-2;break;case"center":c=(s-l)/2;break;case"left":default:c=2}e+=R(c)+" "+R(d)+" Td\n",e+="("+E(L)+") Tj\n",e+=-R(c)+" 0 Td\n",d=-(a+2),l=0,p=g+1,v++,m=""}else;break}return n.text=e,n.fontSize=a,n},$=function(t,e,r){var n=e.scope.internal.getFont(e.fontName,e.fontStyle),i=e.scope.getStringUnitWidth(t,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:e.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:i}},Q={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},tt=function(t,e){var r={type:"reference",object:t};void 0===e.internal.getPageInfo(t.page).pageContext.annotations.find((function(t){return t.type===r.type&&t.object===r.object}))&&e.internal.getPageInfo(t.page).pageContext.annotations.push(r)},et=function(t,e){for(var r in t)if(t.hasOwnProperty(r)){var n=r,i=t[r];e.internal.newObjectDeferredBegin(i.objId,!0),"object"==typeof i&&"function"==typeof i.putStream&&i.putStream(),delete t[n]}},rt=function(t,e){if(e.scope=t,void 0!==t.internal&&(void 0===t.internal.acroformPlugin||!1===t.internal.acroformPlugin.isInitialized)){if(ut.FieldNum=0,t.internal.acroformPlugin=JSON.parse(JSON.stringify(Q)),t.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");M=t.internal.scaleFactor,t.internal.acroformPlugin.acroFormDictionaryRoot=new st,t.internal.acroformPlugin.acroFormDictionaryRoot.scope=t,t.internal.acroformPlugin.acroFormDictionaryRoot._eventID=t.internal.events.subscribe("postPutResources",(function(){!function(t){t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID,t.internal.acroformPlugin.printedOut=!0}(t)})),t.internal.events.subscribe("buildDocument",(function(){!function(t){t.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var e=t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];n.objId=void 0,n.hasAnnotation&&tt(n,t)}}(t)})),t.internal.events.subscribe("putCatalog",(function(){!function(t){if(void 0===t.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("putCatalogCallback: Root missing.");t.internal.write("/AcroForm "+t.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")}(t)})),t.internal.events.subscribe("postPutPages",(function(e){!function(t,e){var r=!t;for(var n in t||(e.internal.newObjectDeferredBegin(e.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),e.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),t=t||e.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(t.hasOwnProperty(n)){var i=t[n],a=[],o=i.Rect;if(i.Rect&&(i.Rect=X(i.Rect,e)),e.internal.newObjectDeferredBegin(i.objId,!0),i.DA=wt.createDefaultAppearanceStream(i),"object"==typeof i&&"function"==typeof i.getKeyValueListForStream&&(a=i.getKeyValueListForStream()),i.Rect=o,i.hasAppearanceStream&&!i.appearanceStreamContent){var s=K(i);a.push({key:"AP",value:"<</N "+s+">>"}),e.internal.acroformPlugin.xForms.push(s)}if(i.appearanceStreamContent){var u="";for(var c in i.appearanceStreamContent)if(i.appearanceStreamContent.hasOwnProperty(c)){var l=i.appearanceStreamContent[c];if(u+="/"+c+" ",u+="<<",Object.keys(l).length>=1||Array.isArray(l)){for(var n in l)if(l.hasOwnProperty(n)){var h=l[n];"function"==typeof h&&(h=h.call(e,i)),u+="/"+n+" "+h+" ",e.internal.acroformPlugin.xForms.indexOf(h)>=0||e.internal.acroformPlugin.xForms.push(h)}}else"function"==typeof(h=l)&&(h=h.call(e,i)),u+="/"+n+" "+h,e.internal.acroformPlugin.xForms.indexOf(h)>=0||e.internal.acroformPlugin.xForms.push(h);u+=">>"}a.push({key:"AP",value:"<<\n"+u+">>"})}e.internal.putStream({additionalKeyValues:a,objectId:i.objId}),e.internal.out("endobj")}r&&et(e.internal.acroformPlugin.xForms,e)}(e,t)})),t.internal.acroformPlugin.isInitialized=!0}},nt=B.__acroform__.arrayToPdfArray=function(t,e,r){var n=function(t){return t};if(Array.isArray(t)){for(var i="[",a=0;a<t.length;a++)switch(0!==a&&(i+=" "),typeof t[a]){case"boolean":case"number":case"object":i+=t[a].toString();break;case"string":"/"!==t[a].substr(0,1)?(void 0!==e&&r&&(n=r.internal.getEncryptor(e)),i+="("+E(n(t[a].toString()))+")"):i+=t[a].toString()}return i+="]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")};var it=function(t,e,r){var n=function(t){return t};return void 0!==e&&r&&(n=r.internal.getEncryptor(e)),(t=t||"").toString(),t="("+E(n(t))+")"},at=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(void 0===this._objId){if(void 0===this.scope)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(t){this._objId=t}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};at.prototype.toString=function(){return this.objId+" 0 R"},at.prototype.putStream=function(){var t=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:t,objectId:this.objId}),this.scope.internal.out("endobj")},at.prototype.getKeyValueListForStream=function(){var t=[],e=Object.getOwnPropertyNames(this).filter((function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"scope"!=t&&"objId"!=t&&"_"!=t.substring(0,1)}));for(var r in e)if(!1===Object.getOwnPropertyDescriptor(this,e[r]).configurable){var n=e[r],i=this[n];i&&(Array.isArray(i)?t.push({key:n,value:nt(i,this.objId,this.scope)}):i instanceof at?(i.scope=this.scope,t.push({key:n,value:i.objId+" 0 R"})):"function"!=typeof i&&t.push({key:n,value:i}))}return t};var ot=function(){at.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var t,e=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(e){t=e.trim()},get:function(){return t||null}})};D(ot,at);var st=function(){at.call(this);var t,e=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return e.length>0?e:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return e}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(t){var e=function(t){return t};return this.scope&&(e=this.scope.internal.getEncryptor(this.objId)),"("+E(e(t))+")"}},set:function(e){t=e}})};D(st,at);var ut=function(){at.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){if(isNaN(e))throw new Error('Invalid value "'+e+'" for attribute F supplied.');t=e}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(t,3))},set:function(e){!0===Boolean(e)?this.F=Y(t,3):this.F=J(t,3)}});var e=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute Ff supplied.');e=t}});var r=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(0!==r.length)return r},set:function(t){r=void 0!==t?t:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[0])?0:r[0]},set:function(t){r[0]=t}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[1])?0:r[1]},set:function(t){r[1]=t}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[2])?0:r[2]},set:function(t){r[2]=t}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[3])?0:r[3]},set:function(t){r[3]=t}});var n="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return n},set:function(t){switch(t){case"/Btn":case"/Tx":case"/Ch":case"/Sig":n=t;break;default:throw new Error('Invalid value "'+t+'" for attribute FT supplied.')}}});var i=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!i||i.length<1){if(this instanceof mt)return;i="FieldObject"+ut.FieldNum++}var t=function(t){return t};return this.scope&&(t=this.scope.internal.getEncryptor(this.objId)),"("+E(t(i))+")"},set:function(t){i=t.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return i},set:function(t){i=t}});var a="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return a},set:function(t){a=t}});var o="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return o},set:function(t){o=t}});var s=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return s},set:function(t){s=t}});var u=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return void 0===u?50/M:u},set:function(t){u=t}});var c="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return c},set:function(t){c=t}});var l="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!l||this instanceof mt||this instanceof bt))return it(l,this.objId,this.scope)},set:function(t){t=t.toString(),l=t}});var h=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(h)return this instanceof dt==!1?it(h,this.objId,this.scope):h},set:function(t){t=t.toString(),h=this instanceof dt==!1?"("===t.substr(0,1)?q(t.substr(1,t.length-2)):q(t):t}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof dt==!0?q(h.substr(1,h.length-1)):h},set:function(t){t=t.toString(),h=this instanceof dt==!0?"/"+t:t}});var f=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(f)return f},set:function(t){this.V=t}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(f)return this instanceof dt==!1?it(f,this.objId,this.scope):f},set:function(t){t=t.toString(),f=this instanceof dt==!1?"("===t.substr(0,1)?q(t.substr(1,t.length-2)):q(t):t}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof dt==!0?q(f.substr(1,f.length-1)):f},set:function(t){t=t.toString(),f=this instanceof dt==!0?"/"+t:t}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var d,p=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return p},set:function(t){t=Boolean(t),p=t}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(d)return d},set:function(t){d=t}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,1))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,1):this.Ff=J(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,2))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,2):this.Ff=J(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,3))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,3):this.Ff=J(this.Ff,3)}});var g=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(null!==g)return g},set:function(t){if(-1===[0,1,2].indexOf(t))throw new Error('Invalid value "'+t+'" for attribute Q supplied.');g=t}}),Object.defineProperty(this,"textAlign",{get:function(){var t;switch(g){case 0:default:t="left";break;case 1:t="center";break;case 2:t="right"}return t},configurable:!0,enumerable:!0,set:function(t){switch(t){case"right":case 2:g=2;break;case"center":case 1:g=1;break;case"left":case 0:default:g=0}}})};D(ut,at);var ct=function(){ut.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var t=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){t=e}});var e=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return nt(e,this.objId,this.scope)},set:function(t){var r,n;n=[],"string"==typeof(r=t)&&(n=function(t,e,r){r||(r=1);for(var n,i=[];n=e.exec(t);)i.push(n[r]);return i}(r,/\((.*?)\)/g)),e=n}}),this.getOptions=function(){return e},this.setOptions=function(t){e=t,this.sort&&e.sort()},this.addOption=function(t){t=(t=t||"").toString(),e.push(t),this.sort&&e.sort()},this.removeOption=function(t,r){for(r=r||!1,t=(t=t||"").toString();-1!==e.indexOf(t)&&(e.splice(e.indexOf(t),1),!1!==r););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,18))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,18):this.Ff=J(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,19))},set:function(t){!0===this.combo&&(!0===Boolean(t)?this.Ff=Y(this.Ff,19):this.Ff=J(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,20))},set:function(t){!0===Boolean(t)?(this.Ff=Y(this.Ff,20),e.sort()):this.Ff=J(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,22))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,22):this.Ff=J(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,23):this.Ff=J(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,27))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,27):this.Ff=J(this.Ff,27)}}),this.hasAppearanceStream=!1};D(ct,ut);var lt=function(){ct.call(this),this.fontName="helvetica",this.combo=!1};D(lt,ct);var ht=function(){lt.call(this),this.combo=!0};D(ht,lt);var ft=function(){ht.call(this),this.edit=!0};D(ft,ht);var dt=function(){ut.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,15))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,15):this.Ff=J(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,16))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,16):this.Ff=J(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,17))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,17):this.Ff=J(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,26):this.Ff=J(this.Ff,26)}});var t,e={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t=function(t){return t};if(this.scope&&(t=this.scope.internal.getEncryptor(this.objId)),0!==Object.keys(e).length){var r,n=[];for(r in n.push("<<"),e)n.push("/"+r+" ("+E(t(e[r]))+")");return n.push(">>"),n.join("\n")}},set:function(t){"object"==typeof t&&(e=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return e.CA||""},set:function(t){"string"==typeof t&&(e.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return t.substr(1,t.length-1)},set:function(e){t="/"+e}})};D(dt,ut);var pt=function(){dt.call(this),this.pushButton=!0};D(pt,dt);var gt=function(){dt.call(this),this.radio=!0,this.pushButton=!1;var t=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=void 0!==e?e:[]}})};D(gt,dt);var mt=function(){var t,e;ut.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return e},set:function(t){e=t}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t=function(t){return t};this.scope&&(t=this.scope.internal.getEncryptor(this.objId));var e,r=[];for(e in r.push("<<"),n)r.push("/"+e+" ("+E(t(n[e]))+")");return r.push(">>"),r.join("\n")},set:function(t){"object"==typeof t&&(n=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(t){"string"==typeof t&&(n.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(t){r=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(t){r="/"+t}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=wt.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};D(mt,ut),gt.prototype.setAppearance=function(t){if(!("createAppearanceStream"in t)||!("getCA"in t))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var e in this.Kids)if(this.Kids.hasOwnProperty(e)){var r=this.Kids[e];r.appearanceStreamContent=t.createAppearanceStream(r.optionName),r.caption=t.getCA()}},gt.prototype.createOption=function(t){var e=new mt;return e.Parent=this,e.optionName=t,this.Kids.push(e),Nt.call(this.scope,e),e};var vt=function(){dt.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=wt.CheckBox.createAppearanceStream()};D(vt,dt);var bt=function(){ut.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,13))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,13):this.Ff=J(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,21))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,21):this.Ff=J(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,23):this.Ff=J(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,24))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,24):this.Ff=J(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,25))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,25):this.Ff=J(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,26):this.Ff=J(this.Ff,26)}});var t=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){Number.isInteger(e)&&(t=e)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};D(bt,ut);var yt=function(){bt.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return Boolean(G(this.Ff,14))},set:function(t){!0===Boolean(t)?this.Ff=Y(this.Ff,14):this.Ff=J(this.Ff,14)}}),this.password=!0};D(yt,bt);var wt={CheckBox:{createAppearanceStream:function(){return{N:{On:wt.CheckBox.YesNormal},D:{On:wt.CheckBox.YesPushDown,Off:wt.CheckBox.OffPushDown}}},YesPushDown:function(t){var e=z(t);e.scope=t.scope;var r=[],n=t.scope.internal.getFont(t.fontName,t.fontStyle).id,i=t.scope.__private__.encodeColorString(t.color),a=Z(t,t.caption);return r.push("0.749023 g"),r.push("0 0 "+R(wt.internal.getWidth(t))+" "+R(wt.internal.getHeight(t))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+R(a.fontSize)+" Tf "+i),r.push("BT"),r.push(a.text),r.push("ET"),r.push("Q"),r.push("EMC"),e.stream=r.join("\n"),e},YesNormal:function(t){var e=z(t);e.scope=t.scope;var r=t.scope.internal.getFont(t.fontName,t.fontStyle).id,n=t.scope.__private__.encodeColorString(t.color),i=[],a=wt.internal.getHeight(t),o=wt.internal.getWidth(t),s=Z(t,t.caption);return i.push("1 g"),i.push("0 0 "+R(o)+" "+R(a)+" re"),i.push("f"),i.push("q"),i.push("0 0 1 rg"),i.push("0 0 "+R(o-1)+" "+R(a-1)+" re"),i.push("W"),i.push("n"),i.push("0 g"),i.push("BT"),i.push("/"+r+" "+R(s.fontSize)+" Tf "+n),i.push(s.text),i.push("ET"),i.push("Q"),e.stream=i.join("\n"),e},OffPushDown:function(t){var e=z(t);e.scope=t.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+R(wt.internal.getWidth(t))+" "+R(wt.internal.getHeight(t))+" re"),r.push("f"),e.stream=r.join("\n"),e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:wt.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=wt.RadioButton.Circle.YesNormal,e.D[t]=wt.RadioButton.Circle.YesPushDown,e},getCA:function(){return"l"},YesNormal:function(t){var e=z(t);e.scope=t.scope;var r=[],n=wt.internal.getWidth(t)<=wt.internal.getHeight(t)?wt.internal.getWidth(t)/4:wt.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=wt.internal.Bezier_C,a=Number((n*i).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+T(wt.internal.getWidth(t)/2)+" "+T(wt.internal.getHeight(t)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+a+" "+a+" "+n+" 0 "+n+" c"),r.push("-"+a+" "+n+" -"+n+" "+a+" -"+n+" 0 c"),r.push("-"+n+" -"+a+" -"+a+" -"+n+" 0 -"+n+" c"),r.push(a+" -"+n+" "+n+" -"+a+" "+n+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e},YesPushDown:function(t){var e=z(t);e.scope=t.scope;var r=[],n=wt.internal.getWidth(t)<=wt.internal.getHeight(t)?wt.internal.getWidth(t)/4:wt.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=Number((2*n).toFixed(5)),a=Number((i*wt.internal.Bezier_C).toFixed(5)),o=Number((n*wt.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+T(wt.internal.getWidth(t)/2)+" "+T(wt.internal.getHeight(t)/2)+" cm"),r.push(i+" 0 m"),r.push(i+" "+a+" "+a+" "+i+" 0 "+i+" c"),r.push("-"+a+" "+i+" -"+i+" "+a+" -"+i+" 0 c"),r.push("-"+i+" -"+a+" -"+a+" -"+i+" 0 -"+i+" c"),r.push(a+" -"+i+" "+i+" -"+a+" "+i+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+T(wt.internal.getWidth(t)/2)+" "+T(wt.internal.getHeight(t)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+o+" "+o+" "+n+" 0 "+n+" c"),r.push("-"+o+" "+n+" -"+n+" "+o+" -"+n+" 0 c"),r.push("-"+n+" -"+o+" -"+o+" -"+n+" 0 -"+n+" c"),r.push(o+" -"+n+" "+n+" -"+o+" "+n+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e},OffPushDown:function(t){var e=z(t);e.scope=t.scope;var r=[],n=wt.internal.getWidth(t)<=wt.internal.getHeight(t)?wt.internal.getWidth(t)/4:wt.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=Number((2*n).toFixed(5)),a=Number((i*wt.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+T(wt.internal.getWidth(t)/2)+" "+T(wt.internal.getHeight(t)/2)+" cm"),r.push(i+" 0 m"),r.push(i+" "+a+" "+a+" "+i+" 0 "+i+" c"),r.push("-"+a+" "+i+" -"+i+" "+a+" -"+i+" 0 c"),r.push("-"+i+" -"+a+" -"+a+" -"+i+" 0 -"+i+" c"),r.push(a+" -"+i+" "+i+" -"+a+" "+i+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:wt.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=wt.RadioButton.Cross.YesNormal,e.D[t]=wt.RadioButton.Cross.YesPushDown,e},getCA:function(){return"8"},YesNormal:function(t){var e=z(t);e.scope=t.scope;var r=[],n=wt.internal.calculateCross(t);return r.push("q"),r.push("1 1 "+R(wt.internal.getWidth(t)-2)+" "+R(wt.internal.getHeight(t)-2)+" re"),r.push("W"),r.push("n"),r.push(R(n.x1.x)+" "+R(n.x1.y)+" m"),r.push(R(n.x2.x)+" "+R(n.x2.y)+" l"),r.push(R(n.x4.x)+" "+R(n.x4.y)+" m"),r.push(R(n.x3.x)+" "+R(n.x3.y)+" l"),r.push("s"),r.push("Q"),e.stream=r.join("\n"),e},YesPushDown:function(t){var e=z(t);e.scope=t.scope;var r=wt.internal.calculateCross(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+R(wt.internal.getWidth(t))+" "+R(wt.internal.getHeight(t))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+R(wt.internal.getWidth(t)-2)+" "+R(wt.internal.getHeight(t)-2)+" re"),n.push("W"),n.push("n"),n.push(R(r.x1.x)+" "+R(r.x1.y)+" m"),n.push(R(r.x2.x)+" "+R(r.x2.y)+" l"),n.push(R(r.x4.x)+" "+R(r.x4.y)+" m"),n.push(R(r.x3.x)+" "+R(r.x3.y)+" l"),n.push("s"),n.push("Q"),e.stream=n.join("\n"),e},OffPushDown:function(t){var e=z(t);e.scope=t.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+R(wt.internal.getWidth(t))+" "+R(wt.internal.getHeight(t))+" re"),r.push("f"),e.stream=r.join("\n"),e}}},createDefaultAppearanceStream:function(t){var e=t.scope.internal.getFont(t.fontName,t.fontStyle).id,r=t.scope.__private__.encodeColorString(t.color);return"/"+e+" "+t.fontSize+" Tf "+r}};wt.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=wt.internal.getWidth(t),r=wt.internal.getHeight(t),n=Math.min(e,r);return{x1:{x:(e-n)/2,y:(r-n)/2+n},x2:{x:(e-n)/2+n,y:(r-n)/2},x3:{x:(e-n)/2,y:(r-n)/2},x4:{x:(e-n)/2+n,y:(r-n)/2+n}}}},wt.internal.getWidth=function(t){var e=0;return"object"==typeof t&&(e=U(t.Rect[2])),e},wt.internal.getHeight=function(t){var e=0;return"object"==typeof t&&(e=U(t.Rect[3])),e};var Nt=B.addField=function(t){if(rt(this,t),!(t instanceof ut))throw new Error("Invalid argument passed to jsPDF.addField.");var e;return(e=t).scope.internal.acroformPlugin.printedOut&&(e.scope.internal.acroformPlugin.printedOut=!1,e.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),t.page=t.scope.internal.getCurrentPageInfo().pageNumber,this};B.AcroFormChoiceField=ct,B.AcroFormListBox=lt,B.AcroFormComboBox=ht,B.AcroFormEditBox=ft,B.AcroFormButton=dt,B.AcroFormPushButton=pt,B.AcroFormRadioButton=gt,B.AcroFormCheckBox=vt,B.AcroFormTextField=bt,B.AcroFormPasswordField=yt,B.AcroFormAppearance=wt,B.AcroForm={ChoiceField:ct,ListBox:lt,ComboBox:ht,EditBox:ft,Button:dt,PushButton:pt,RadioButton:gt,CheckBox:vt,TextField:bt,PasswordField:yt,Appearance:wt},O.AcroForm={ChoiceField:ct,ListBox:lt,ComboBox:ht,EditBox:ft,Button:dt,PushButton:pt,RadioButton:gt,CheckBox:vt,TextField:bt,PasswordField:yt,Appearance:wt};var Lt=O.AcroForm;
/** @license
 * jsPDF addImage plugin
 * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
 *               2013 Chris Dowling, https://github.com/gingerchris
 *               2013 Trinh Ho, https://github.com/ineedfat
 *               2013 Edwin Alejandro Perez, https://github.com/eaparango
 *               2013 Norah Smith, https://github.com/burnburnrocket
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */function At(t){return t.reduce((function(t,e,r){return t[e]=r,t}),{})}!function(t){t.__addimage__={};var e="UNKNOWN",r={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},n=t.__addimage__.getImageFileTypeByImageData=function(t,n){var i,a;n=n||e;var o,s,u,c=e;if(x(t))for(u in r)for(o=r[u],i=0;i<o.length;i+=1){for(s=!0,a=0;a<o[i].length;a+=1)if(void 0!==o[i][a]&&o[i][a]!==t[a]){s=!1;break}if(!0===s){c=u;break}}else for(u in r)for(o=r[u],i=0;i<o.length;i+=1){for(s=!0,a=0;a<o[i].length;a+=1)if(void 0!==o[i][a]&&o[i][a]!==t.charCodeAt(a)){s=!1;break}if(!0===s){c=u;break}}return c===e&&n!==e&&(c=n),c},i=function(t){for(var e=this.internal.write,r=this.internal.putStream,n=(0,this.internal.getFilters)();-1!==n.indexOf("FlateEncode");)n.splice(n.indexOf("FlateEncode"),1);t.objectId=this.internal.newObject();var a=[];if(a.push({key:"Type",value:"/XObject"}),a.push({key:"Subtype",value:"/Image"}),a.push({key:"Width",value:t.width}),a.push({key:"Height",value:t.height}),t.colorSpace===b.INDEXED?a.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(t.palette.length/3-1)+" "+("sMask"in t&&void 0!==t.sMask?t.objectId+2:t.objectId+1)+" 0 R]"}):(a.push({key:"ColorSpace",value:"/"+t.colorSpace}),t.colorSpace===b.DEVICE_CMYK&&a.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),a.push({key:"BitsPerComponent",value:t.bitsPerComponent}),"decodeParameters"in t&&void 0!==t.decodeParameters&&a.push({key:"DecodeParms",value:"<<"+t.decodeParameters+">>"}),"transparency"in t&&Array.isArray(t.transparency)){for(var o="",s=0,u=t.transparency.length;s<u;s++)o+=t.transparency[s]+" "+t.transparency[s]+" ";a.push({key:"Mask",value:"["+o+"]"})}void 0!==t.sMask&&a.push({key:"SMask",value:t.objectId+1+" 0 R"});var c=void 0!==t.filter?["/"+t.filter]:void 0;if(r({data:t.data,additionalKeyValues:a,alreadyAppliedFilters:c,objectId:t.objectId}),e("endobj"),"sMask"in t&&void 0!==t.sMask){var l="/Predictor "+t.predictor+" /Colors 1 /BitsPerComponent "+t.bitsPerComponent+" /Columns "+t.width,h={width:t.width,height:t.height,colorSpace:"DeviceGray",bitsPerComponent:t.bitsPerComponent,decodeParameters:l,data:t.sMask};"filter"in t&&(h.filter=t.filter),i.call(this,h)}if(t.colorSpace===b.INDEXED){var f=this.internal.newObject();r({data:_(new Uint8Array(t.palette)),objectId:f}),e("endobj")}},a=function(){var t=this.internal.collections.addImage_images;for(var e in t)i.call(this,t[e])},o=function(){var t,e=this.internal.collections.addImage_images,r=this.internal.write;for(var n in e)r("/I"+(t=e[n]).index,t.objectId,"0","R")},s=function(){this.internal.collections.addImage_images||(this.internal.collections.addImage_images={},this.internal.events.subscribe("putResources",a),this.internal.events.subscribe("putXobjectDict",o))},l=function(){var t=this.internal.collections.addImage_images;return s.call(this),t},h=function(){return Object.keys(this.internal.collections.addImage_images).length},f=function(e){return"function"==typeof t["process"+e.toUpperCase()]},d=function(t){return"object"==typeof t&&1===t.nodeType},p=function(e,r){if("IMG"===e.nodeName&&e.hasAttribute("src")){var n=""+e.getAttribute("src");if(0===n.indexOf("data:image/"))return u(unescape(n).split("base64,").pop());var i=t.loadFile(n,!0);if(void 0!==i)return i}if("CANVAS"===e.nodeName){var a;switch(r){case"PNG":a="image/png";break;case"WEBP":a="image/webp";break;case"JPEG":case"JPG":default:a="image/jpeg"}return u(e.toDataURL(a,1).split("base64,").pop())}},g=function(t){var e=this.internal.collections.addImage_images;if(e)for(var r in e)if(t===e[r].alias)return e[r]},m=function(t,e,r){return t||e||(t=-96,e=-96),t<0&&(t=-1*r.width*72/t/this.internal.scaleFactor),e<0&&(e=-1*r.height*72/e/this.internal.scaleFactor),0===t&&(t=e*r.width/r.height),0===e&&(e=t*r.height/r.width),[t,e]},v=function(t,e,r,n,i,a){var o=m.call(this,r,n,i),s=this.internal.getCoordinateString,u=this.internal.getVerticalCoordinateString,c=l.call(this);if(r=o[0],n=o[1],c[i.index]=i,a){a*=Math.PI/180;var h=Math.cos(a),f=Math.sin(a),d=function(t){return t.toFixed(4)},p=[d(h),d(f),d(-1*f),d(h),0,0,"cm"]}this.internal.write("q"),a?(this.internal.write([1,"0","0",1,s(t),u(e+n),"cm"].join(" ")),this.internal.write(p.join(" ")),this.internal.write([s(r),"0","0",s(n),"0","0","cm"].join(" "))):this.internal.write([s(r),"0","0",s(n),s(t),u(e+n),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+i.index+" Do"),this.internal.write("Q")},b=t.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};t.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var y=t.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},w=t.__addimage__.sHashCode=function(t){var e,r,n=0;if("string"==typeof t)for(r=t.length,e=0;e<r;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;else if(x(t))for(r=t.byteLength/2,e=0;e<r;e++)n=(n<<5)-n+t[e],n|=0;return n},N=t.__addimage__.validateStringAsBase64=function(t){(t=t||"").toString().trim();var e=!0;return 0===t.length&&(e=!1),t.length%4!=0&&(e=!1),!1===/^[A-Za-z0-9+/]+$/.test(t.substr(0,t.length-2))&&(e=!1),!1===/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2))&&(e=!1),e},L=t.__addimage__.extractImageFromDataUrl=function(t){var e=(t=t||"").split("base64,"),r=null;if(2===e.length){var n=/^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(e[0]);Array.isArray(n)&&(r={mimeType:n[1],charset:n[2],data:e[1]})}return r},A=t.__addimage__.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array};t.__addimage__.isArrayBuffer=function(t){return A()&&t instanceof ArrayBuffer};var x=t.__addimage__.isArrayBufferView=function(t){return A()&&"undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)},S=t.__addimage__.binaryStringToUint8Array=function(t){for(var e=t.length,r=new Uint8Array(e),n=0;n<e;n++)r[n]=t.charCodeAt(n);return r},_=t.__addimage__.arrayBufferToBinaryString=function(t){try{return u(c(String.fromCharCode.apply(null,t)))}catch(e){if("undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.reduce)return new Uint8Array(t).reduce((function(t,e){return t.push(String.fromCharCode(e)),t}),[]).join("")}};t.addImage=function(){var t,r,n,i,a,o,u,c,l;if("number"==typeof arguments[1]?(r=e,n=arguments[1],i=arguments[2],a=arguments[3],o=arguments[4],u=arguments[5],c=arguments[6],l=arguments[7]):(r=arguments[1],n=arguments[2],i=arguments[3],a=arguments[4],o=arguments[5],u=arguments[6],c=arguments[7],l=arguments[8]),"object"==typeof(t=arguments[0])&&!d(t)&&"imageData"in t){var h=t;t=h.imageData,r=h.format||r||e,n=h.x||n||0,i=h.y||i||0,a=h.w||h.width||a,o=h.h||h.height||o,u=h.alias||u,c=h.compression||c,l=h.rotation||h.angle||l}var f=this.internal.getFilters();if(void 0===c&&-1!==f.indexOf("FlateEncode")&&(c="SLOW"),isNaN(n)||isNaN(i))throw new Error("Invalid coordinates passed to jsPDF.addImage");s.call(this);var p=P.call(this,t,r,u,c);return v.call(this,n,i,a,o,p,l),this};var P=function(r,i,a,o){var s,u,c;if("string"==typeof r&&n(r)===e){r=unescape(r);var l=k(r,!1);(""!==l||void 0!==(l=t.loadFile(r,!0)))&&(r=l)}if(d(r)&&(r=p(r,i)),i=n(r,i),!f(i))throw new Error("addImage does not support files of type '"+i+"', please ensure that a plugin for '"+i+"' support is added.");if((null==(c=a)||0===c.length)&&(a=function(t){return"string"==typeof t||x(t)?w(t):null}(r)),(s=g.call(this,a))||(A()&&(r instanceof Uint8Array||(u=r,r=S(r))),s=this["process"+i.toUpperCase()](r,h.call(this),a,function(e){return e&&"string"==typeof e&&(e=e.toUpperCase()),e in t.image_compression?e:y.NONE}(o),u)),!s)throw new Error("An unknown error occurred whilst processing the image.");return s},k=t.__addimage__.convertBase64ToBinaryString=function(t,e){var r;e="boolean"!=typeof e||e;var n,i="";if("string"==typeof t){n=null!==(r=L(t))?r.data:t;try{i=u(n)}catch(t){if(e)throw N(n)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+t.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return i};t.getImageProperties=function(r){var i,a,o="";if(d(r)&&(r=p(r)),"string"==typeof r&&n(r)===e&&(""===(o=k(r,!1))&&(o=t.loadFile(r)||""),r=o),a=n(r),!f(a))throw new Error("addImage does not support files of type '"+a+"', please ensure that a plugin for '"+a+"' support is added.");if(!A()||r instanceof Uint8Array||(r=S(r)),!(i=this["process"+a.toUpperCase()](r)))throw new Error("An unknown error occurred whilst processing the image");return i.fileType=a,i}}(O.API),
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(t){if(void 0!==t&&""!=t)return!0};O.API.events.push(["addPage",function(t){this.internal.getPageInfo(t.pageNumber).pageContext.annotations=[]}]),t.events.push(["putPage",function(t){for(var r,n,i,a=this.internal.getCoordinateString,o=this.internal.getVerticalCoordinateString,s=this.internal.getPageInfoByObjId(t.objId),u=t.pageContext.annotations,c=!1,l=0;l<u.length&&!c;l++)switch((r=u[l]).type){case"link":(e(r.options.url)||e(r.options.pageNumber))&&(c=!0);break;case"reference":case"text":case"freetext":c=!0}if(0!=c){this.internal.write("/Annots [");for(var h=0;h<u.length;h++){r=u[h];var f=this.internal.pdfEscape,d=this.internal.getEncryptor(t.objId);switch(r.type){case"reference":this.internal.write(" "+r.object.objId+" 0 R ");break;case"text":var p=this.internal.newAdditionalObject(),g=this.internal.newAdditionalObject(),m=this.internal.getEncryptor(p.objId),v=r.title||"Note";i="<</Type /Annot /Subtype /Text "+(n="/Rect ["+a(r.bounds.x)+" "+o(r.bounds.y+r.bounds.h)+" "+a(r.bounds.x+r.bounds.w)+" "+o(r.bounds.y)+"] ")+"/Contents ("+f(m(r.contents))+")",i+=" /Popup "+g.objId+" 0 R",i+=" /P "+s.objId+" 0 R",i+=" /T ("+f(m(v))+") >>",p.content=i;var b=p.objId+" 0 R";i="<</Type /Annot /Subtype /Popup "+(n="/Rect ["+a(r.bounds.x+30)+" "+o(r.bounds.y+r.bounds.h)+" "+a(r.bounds.x+r.bounds.w+30)+" "+o(r.bounds.y)+"] ")+" /Parent "+b,r.open&&(i+=" /Open true"),i+=" >>",g.content=i,this.internal.write(p.objId,"0 R",g.objId,"0 R");break;case"freetext":n="/Rect ["+a(r.bounds.x)+" "+o(r.bounds.y)+" "+a(r.bounds.x+r.bounds.w)+" "+o(r.bounds.y+r.bounds.h)+"] ";var y=r.color||"#000000";i="<</Type /Annot /Subtype /FreeText "+n+"/Contents ("+f(d(r.contents))+")",i+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+y+")",i+=" /Border [0 0 0]",i+=" >>",this.internal.write(i);break;case"link":if(r.options.name){var w=this.annotations._nameMap[r.options.name];r.options.pageNumber=w.page,r.options.top=w.y}else r.options.top||(r.options.top=0);if(n="/Rect ["+r.finalBounds.x+" "+r.finalBounds.y+" "+r.finalBounds.w+" "+r.finalBounds.h+"] ",i="",r.options.url)i="<</Type /Annot /Subtype /Link "+n+"/Border [0 0 0] /A <</S /URI /URI ("+f(d(r.options.url))+") >>";else if(r.options.pageNumber){switch(i="<</Type /Annot /Subtype /Link "+n+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(r.options.pageNumber).objId+" 0 R",r.options.magFactor=r.options.magFactor||"XYZ",r.options.magFactor){case"Fit":i+=" /Fit]";break;case"FitH":i+=" /FitH "+r.options.top+"]";break;case"FitV":r.options.left=r.options.left||0,i+=" /FitV "+r.options.left+"]";break;case"XYZ":default:var N=o(r.options.top);r.options.left=r.options.left||0,void 0===r.options.zoom&&(r.options.zoom=0),i+=" /XYZ "+r.options.left+" "+N+" "+r.options.zoom+"]"}}""!=i&&(i+=" >>",this.internal.write(i))}}this.internal.write("]")}}]),t.createAnnotation=function(t){var e=this.internal.getCurrentPageInfo();switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":e.pageContext.annotations.push(t)}},t.link=function(t,e,r,n,i){var a=this.internal.getCurrentPageInfo(),o=this.internal.getCoordinateString,s=this.internal.getVerticalCoordinateString;a.pageContext.annotations.push({finalBounds:{x:o(t),y:s(e),w:o(t+r),h:s(e+n)},options:i,type:"link"})},t.textWithLink=function(t,e,r,n){var i=this.getTextWidth(t),a=this.internal.getLineHeight()/this.internal.scaleFactor;return this.text(t,e,r,n),r+=.2*a,"center"===n.align&&(e-=i/2),"right"===n.align&&(e-=i),this.link(e,r-a,i,a,n),i},t.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor}}(O.API),
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},i=[1570,1571,1573,1575];t.__arabicParser__={};var a=t.__arabicParser__.isInArabicSubstitutionA=function(t){return void 0!==e[t.charCodeAt(0)]},o=t.__arabicParser__.isArabicLetter=function(t){return"string"==typeof t&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)},s=t.__arabicParser__.isArabicEndLetter=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length<=2},u=t.__arabicParser__.isArabicAlfLetter=function(t){return o(t)&&i.indexOf(t.charCodeAt(0))>=0};t.__arabicParser__.arabicLetterHasIsolatedForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=1};var c=t.__arabicParser__.arabicLetterHasFinalForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=2};t.__arabicParser__.arabicLetterHasInitialForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=3};var l=t.__arabicParser__.arabicLetterHasMedialForm=function(t){return o(t)&&a(t)&&4==e[t.charCodeAt(0)].length},h=t.__arabicParser__.resolveLigatures=function(t){var e=0,n=r,i="",a=0;for(e=0;e<t.length;e+=1)void 0!==n[t.charCodeAt(e)]?(a++,"number"==typeof(n=n[t.charCodeAt(e)])&&(i+=String.fromCharCode(n),n=r,a=0),e===t.length-1&&(n=r,i+=t.charAt(e-(a-1)),e-=a-1,a=0)):(n=r,i+=t.charAt(e-a),e-=a,a=0);return i};t.__arabicParser__.isArabicDiacritic=function(t){return void 0!==t&&void 0!==n[t.charCodeAt(0)]};var f=t.__arabicParser__.getCorrectForm=function(t,e,r){return o(t)?!1===a(t)?-1:!c(t)||!o(e)&&!o(r)||!o(r)&&s(e)||s(t)&&!o(e)||s(t)&&u(e)||s(t)&&s(e)?0:l(t)&&o(e)&&!s(e)&&o(r)&&c(r)?3:s(t)||!o(r)?1:2:-1},d=function(t){var r=0,n=0,i=0,a="",s="",u="",c=(t=t||"").split("\\s+"),l=[];for(r=0;r<c.length;r+=1){for(l.push(""),n=0;n<c[r].length;n+=1)a=c[r][n],s=c[r][n-1],u=c[r][n+1],o(a)?(i=f(a,s,u),l[r]+=-1!==i?String.fromCharCode(e[a.charCodeAt(0)][i]):a):l[r]+=a;l[r]=h(l[r])}return l.join(" ")},p=t.__arabicParser__.processArabic=t.processArabic=function(){var t,e="string"==typeof arguments[0]?arguments[0]:arguments[0].text,r=[];if(Array.isArray(e)){var n=0;for(r=[],n=0;n<e.length;n+=1)Array.isArray(e[n])?r.push([d(e[n][0]),e[n][1],e[n][2]]):r.push([d(e[n])]);t=r}else t=d(e);return"string"==typeof arguments[0]?t:(arguments[0].text=t,arguments[0])};t.events.push(["preProcessText",p])}(O.API),O.API.autoPrint=function(t){var e;switch((t=t||{}).variant=t.variant||"non-conform",t.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",(function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){this.internal.out("/OpenAction "+e+" 0 R")}))}return this},
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(){var t=void 0;Object.defineProperty(this,"pdf",{get:function(){return t},set:function(e){t=e}});var e=150;Object.defineProperty(this,"width",{get:function(){return e},set:function(t){e=isNaN(t)||!1===Number.isInteger(t)||t<0?150:t,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=e+1)}});var r=300;Object.defineProperty(this,"height",{get:function(){return r},set:function(t){r=isNaN(t)||!1===Number.isInteger(t)||t<0?300:t,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=r+1)}});var n=[];Object.defineProperty(this,"childNodes",{get:function(){return n},set:function(t){n=t}});var i={};Object.defineProperty(this,"style",{get:function(){return i},set:function(t){i=t}}),Object.defineProperty(this,"parentNode",{})};e.prototype.getContext=function(t,e){var r;if("2d"!==(t=t||"2d"))return null;for(r in e)this.pdf.context2d.hasOwnProperty(r)&&(this.pdf.context2d[r]=e[r]);return this.pdf.context2d._canvas=this,this.pdf.context2d},e.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},t.events.push(["initialized",function(){this.canvas=new e,this.canvas.pdf=this}])}(O.API),
/**
 * @license
 * ====================================================================
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Hall, james@parall.ax
 *               2014 Diego Casorran, https://github.com/diegocr
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){var e={left:0,top:0,bottom:0,right:0},r=!1,n=function(){void 0===this.internal.__cell__&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},e),this.internal.__cell__.margins.width=this.getPageWidth(),i.call(this))},i=function(){this.internal.__cell__.lastCell=new a,this.internal.__cell__.pages=1},a=function(){var t=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return t},set:function(e){t=e}});var e=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return e},set:function(t){e=t}});var r=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return r},set:function(t){r=t}});var n=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return n},set:function(t){n=t}});var i=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return i},set:function(t){i=t}});var a=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return a},set:function(t){a=t}});var o=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return o},set:function(t){o=t}}),this};a.prototype.clone=function(){return new a(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},a.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},t.setHeaderFunction=function(t){return n.call(this),this.internal.__cell__.headerFunction="function"==typeof t?t:void 0,this},t.getTextDimensions=function(t,e){n.call(this);var r=(e=e||{}).fontSize||this.getFontSize(),i=e.font||this.getFont(),a=e.scaleFactor||this.internal.scaleFactor,o=0,s=0,u=0,c=this;if(!Array.isArray(t)&&"string"!=typeof t){if("number"!=typeof t)throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");t=String(t)}const l=e.maxWidth;l>0?"string"==typeof t?t=this.splitTextToSize(t,l):"[object Array]"===Object.prototype.toString.call(t)&&(t=t.reduce((function(t,e){return t.concat(c.splitTextToSize(e,l))}),[])):t=Array.isArray(t)?t:[t];for(var h=0;h<t.length;h++)o<(u=this.getStringUnitWidth(t[h],{font:i})*r)&&(o=u);return 0!==o&&(s=t.length),{w:o/=a,h:Math.max((s*r*this.getLineHeightFactor()-r*(this.getLineHeightFactor()-1))/a,0)}},t.cellAddPage=function(){n.call(this),this.addPage();var t=this.internal.__cell__.margins||e;return this.internal.__cell__.lastCell=new a(t.left,t.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var o=t.cell=function(){var t;t=arguments[0]instanceof a?arguments[0]:new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var i=this.internal.__cell__.lastCell,o=this.internal.__cell__.padding,s=this.internal.__cell__.margins||e,u=this.internal.__cell__.tableHeaderRow,c=this.internal.__cell__.printHeaders;return void 0!==i.lineNumber&&(i.lineNumber===t.lineNumber?(t.x=(i.x||0)+(i.width||0),t.y=i.y||0):i.y+i.height+t.height+s.bottom>this.getPageHeight()?(this.cellAddPage(),t.y=s.top,c&&u&&(this.printHeaderRow(t.lineNumber,!0),t.y+=u[0].height)):t.y=i.y+i.height||t.y),void 0!==t.text[0]&&(this.rect(t.x,t.y,t.width,t.height,!0===r?"FD":void 0),"right"===t.align?this.text(t.text,t.x+t.width-o,t.y+o,{align:"right",baseline:"top"}):"center"===t.align?this.text(t.text,t.x+t.width/2,t.y+o,{align:"center",baseline:"top",maxWidth:t.width-o-o}):this.text(t.text,t.x+o,t.y+o,{align:"left",baseline:"top",maxWidth:t.width-o-o})),this.internal.__cell__.lastCell=t,this};t.table=function(t,r,u,c,l){if(n.call(this),!u)throw new Error("No data for PDF table.");var h,f,d,p,g=[],m=[],v=[],b={},y={},w=[],N=[],L=(l=l||{}).autoSize||!1,A=!1!==l.printHeaders,x=l.css&&void 0!==l.css["font-size"]?16*l.css["font-size"]:l.fontSize||12,S=l.margins||Object.assign({width:this.getPageWidth()},e),_="number"==typeof l.padding?l.padding:3,P=l.headerBackgroundColor||"#c8c8c8";if(i.call(this),this.internal.__cell__.printHeaders=A,this.internal.__cell__.margins=S,this.internal.__cell__.table_font_size=x,this.internal.__cell__.padding=_,this.internal.__cell__.headerBackgroundColor=P,this.setFontSize(x),null==c)m=g=Object.keys(u[0]),v=g.map((function(){return"left"}));else if(Array.isArray(c)&&"object"==typeof c[0])for(g=c.map((function(t){return t.name})),m=c.map((function(t){return t.prompt||t.name||""})),v=c.map((function(t){return t.align||"left"})),h=0;h<c.length;h+=1)y[c[h].name]=c[h].width*(19.049976/25.4);else Array.isArray(c)&&"string"==typeof c[0]&&(m=g=c,v=g.map((function(){return"left"})));if(L||Array.isArray(c)&&"string"==typeof c[0])for(h=0;h<g.length;h+=1){for(b[p=g[h]]=u.map((function(t){return t[p]})),this.setFont(void 0,"bold"),w.push(this.getTextDimensions(m[h],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),f=b[p],this.setFont(void 0,"normal"),d=0;d<f.length;d+=1)w.push(this.getTextDimensions(f[d],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);y[p]=Math.max.apply(null,w)+_+_,w=[]}if(A){var k={};for(h=0;h<g.length;h+=1)k[g[h]]={},k[g[h]].text=m[h],k[g[h]].align=v[h];var I=s.call(this,k,y);N=g.map((function(e){return new a(t,r,y[e],I,k[e].text,void 0,k[e].align)})),this.setTableHeaderRow(N),this.printHeaderRow(1,!1)}var F=c.reduce((function(t,e){return t[e.name]=e.align,t}),{});for(h=0;h<u.length;h+=1){var C=s.call(this,u[h],y);for(d=0;d<g.length;d+=1)o.call(this,new a(t,r,y[g[d]],C,u[h][g[d]],h+2,F[g[d]]))}return this.internal.__cell__.table_x=t,this.internal.__cell__.table_y=r,this};var s=function(t,e){var r=this.internal.__cell__.padding,n=this.internal.__cell__.table_font_size,i=this.internal.scaleFactor;return Object.keys(t).map((function(n){var i=t[n];return this.splitTextToSize(i.hasOwnProperty("text")?i.text:i,e[n]-r-r)}),this).map((function(t){return this.getLineHeightFactor()*t.length*n/i+r+r}),this).reduce((function(t,e){return Math.max(t,e)}),0)};t.setTableHeaderRow=function(t){n.call(this),this.internal.__cell__.tableHeaderRow=t},t.printHeaderRow=function(t,e){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var i;if(r=!0,"function"==typeof this.internal.__cell__.headerFunction){var s=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new a(s[0],s[1],s[2],s[3],void 0,-1)}this.setFont(void 0,"bold");for(var u=[],c=0;c<this.internal.__cell__.tableHeaderRow.length;c+=1)i=this.internal.__cell__.tableHeaderRow[c].clone(),e&&(i.y=this.internal.__cell__.margins.top||0,u.push(i)),i.lineNumber=t,this.setFillColor(this.internal.__cell__.headerBackgroundColor),o.call(this,i);u.length>0&&this.setTableHeaderRow(u),this.setFont(void 0,"normal"),r=!1}}(O.API);var xt={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},St=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],_t=At(St),Pt=[100,200,300,400,500,600,700,800,900],kt=At(Pt);function It(t){var e=t.family.replace(/"|'/g,"").toLowerCase(),r=function(t){return xt[t=t||"normal"]?t:"normal"}(t.style),n=function(t){if(!t)return 400;if("number"==typeof t)return t>=100&&t<=900&&t%100==0?t:400;if(/^\d00$/.test(t))return parseInt(t);switch(t){case"bold":return 700;case"normal":default:return 400}}(t.weight),i=function(t){return"number"==typeof _t[t=t||"normal"]?t:"normal"}(t.stretch);return{family:e,style:r,weight:n,stretch:i,src:t.src||[],ref:t.ref||{name:e,style:[i,r,n].join(" ")}}}function Ft(t,e,r,n){var i;for(i=r;i>=0&&i<e.length;i+=n)if(t[e[i]])return t[e[i]];for(i=r;i>=0&&i<e.length;i-=n)if(t[e[i]])return t[e[i]]}var Ct={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},jt={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Ot(t){return[t.stretch,t.style,t.weight,t.family].join(" ")}function Bt(t,e,r){for(var n=(r=r||{}).defaultFontFamily||"times",i=Object.assign({},Ct,r.genericFontFamilies||{}),a=null,o=null,s=0;s<e.length;++s)if(i[(a=It(e[s])).family]&&(a.family=i[a.family]),t.hasOwnProperty(a.family)){o=t[a.family];break}if(!(o=o||t[n]))throw new Error("Could not find a font-family for the rule '"+Ot(a)+"' and default family '"+n+"'.");if(o=function(t,e){if(e[t])return e[t];var r=_t[t],n=r<=_t.normal?-1:1,i=Ft(e,St,r,n);if(!i)throw new Error("Could not find a matching font-stretch value for "+t);return i}(a.stretch,o),o=function(t,e){if(e[t])return e[t];for(var r=xt[t],n=0;n<r.length;++n)if(e[r[n]])return e[r[n]];throw new Error("Could not find a matching font-style for "+t)}(a.style,o),!(o=function(t,e){if(e[t])return e[t];if(400===t&&e[500])return e[500];if(500===t&&e[400])return e[400];var r=kt[t],n=Ft(e,Pt,r,t<400?-1:1);if(!n)throw new Error("Could not find a matching font-weight for value "+t);return n}(a.weight,o)))throw new Error("Failed to resolve a font for the rule '"+Ot(a)+"'.");return o}function Mt(t){return t.trimLeft()}function Et(t,e){for(var r=0;r<t.length;){if(t.charAt(r)===e)return[t.substring(0,r),t.substring(r+1)];r+=1}return null}function qt(t){var e=t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return null===e?null:[e[0],t.substring(e[0].length)]}var Rt,Tt,Dt,Ut=["times"];!function(t){var e,r,n,a,o,s,u,c,l,f=function(t){return t=t||{},this.isStrokeTransparent=t.isStrokeTransparent||!1,this.strokeOpacity=t.strokeOpacity||1,this.strokeStyle=t.strokeStyle||"#000000",this.fillStyle=t.fillStyle||"#000000",this.isFillTransparent=t.isFillTransparent||!1,this.fillOpacity=t.fillOpacity||1,this.font=t.font||"10px sans-serif",this.textBaseline=t.textBaseline||"alphabetic",this.textAlign=t.textAlign||"left",this.lineWidth=t.lineWidth||1,this.lineJoin=t.lineJoin||"miter",this.lineCap=t.lineCap||"butt",this.path=t.path||[],this.transform=void 0!==t.transform?t.transform.clone():new c,this.globalCompositeOperation=t.globalCompositeOperation||"normal",this.globalAlpha=t.globalAlpha||1,this.clip_path=t.clip_path||[],this.currentPoint=t.currentPoint||new s,this.miterLimit=t.miterLimit||10,this.lastPoint=t.lastPoint||new s,this.ignoreClearRect="boolean"!=typeof t.ignoreClearRect||t.ignoreClearRect,this};t.events.push(["initialized",function(){this.context2d=new d(this),e=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,a=this.internal.getHorizontalCoordinate,o=this.internal.getVerticalCoordinate,s=this.internal.Point,u=this.internal.Rectangle,c=this.internal.Matrix,l=new f}]);var d=function(t){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var e=t;Object.defineProperty(this,"pdf",{get:function(){return e}});var r=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return r},set:function(t){r=Boolean(t)}});var n=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return n},set:function(t){n=Boolean(t)}});var i=0;Object.defineProperty(this,"posX",{get:function(){return i},set:function(t){isNaN(t)||(i=t)}});var a=0;Object.defineProperty(this,"posY",{get:function(){return a},set:function(t){isNaN(t)||(a=t)}});var o=!1;Object.defineProperty(this,"autoPaging",{get:function(){return o},set:function(t){o=Boolean(t)}});var s=0;Object.defineProperty(this,"lastBreak",{get:function(){return s},set:function(t){s=t}});var u=[];Object.defineProperty(this,"pageBreaks",{get:function(){return u},set:function(t){u=t}}),Object.defineProperty(this,"ctx",{get:function(){return l},set:function(t){t instanceof f&&(l=t)}}),Object.defineProperty(this,"path",{get:function(){return l.path},set:function(t){l.path=t}});var c=[];Object.defineProperty(this,"ctxStack",{get:function(){return c},set:function(t){c=t}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(t){var e;e=p(t),this.ctx.fillStyle=e.style,this.ctx.isFillTransparent=0===e.a,this.ctx.fillOpacity=e.a,this.pdf.setFillColor(e.r,e.g,e.b,{a:e.a}),this.pdf.setTextColor(e.r,e.g,e.b,{a:e.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(t){var e=p(t);this.ctx.strokeStyle=e.style,this.ctx.isStrokeTransparent=0===e.a,this.ctx.strokeOpacity=e.a,0===e.a?this.pdf.setDrawColor(255,255,255):(e.a,this.pdf.setDrawColor(e.r,e.g,e.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(t){-1!==["butt","round","square"].indexOf(t)&&(this.ctx.lineCap=t,this.pdf.setLineCap(t))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(t){isNaN(t)||(this.ctx.lineWidth=t,this.pdf.setLineWidth(t))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(t){-1!==["bevel","round","miter"].indexOf(t)&&(this.ctx.lineJoin=t,this.pdf.setLineJoin(t))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(t){isNaN(t)||(this.ctx.miterLimit=t,this.pdf.setMiterLimit(t))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(t){this.ctx.textBaseline=t}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(t){-1!==["right","end","center","left","start"].indexOf(t)&&(this.ctx.textAlign=t)}});var h=null;function d(t,e){if(null===h){var r=function(t){var e=[];return Object.keys(t).forEach((function(r){t[r].forEach((function(t){var n=null;switch(t){case"bold":n={family:r,weight:"bold"};break;case"italic":n={family:r,style:"italic"};break;case"bolditalic":n={family:r,weight:"bold",style:"italic"};break;case"":case"normal":n={family:r}}null!==n&&(n.ref={name:r,style:t},e.push(n))}))})),e}(t.getFontList());h=function(t){for(var e={},r=0;r<t.length;++r){var n=It(t[r]),i=n.family,a=n.stretch,o=n.style,s=n.weight;e[i]=e[i]||{},e[i][a]=e[i][a]||{},e[i][a][o]=e[i][a][o]||{},e[i][a][o][s]=n}return e}(r.concat(e))}return h}var g=null;Object.defineProperty(this,"fontFaces",{get:function(){return g},set:function(t){h=null,g=t}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(t){var e;if(this.ctx.font=t,null!==(e=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))){var r=e[1],n=(e[2],e[3]),i=e[4],a=(e[5],e[6]),o=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];i="px"===o?Math.floor(parseFloat(i)*this.pdf.internal.scaleFactor):"em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(i)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(i);var s=function(t){var e,r,n=[],i=t.trim();if(""===i)return Ut;if(i in jt)return[jt[i]];for(;""!==i;){switch(r=null,e=(i=Mt(i)).charAt(0)){case'"':case"'":r=Et(i.substring(1),e);break;default:r=qt(i)}if(null===r)return Ut;if(n.push(r[0]),""!==(i=Mt(r[1]))&&","!==i.charAt(0))return Ut;i=i.replace(/^,/,"")}return n}(a);if(this.fontFaces){var u=Bt(d(this.pdf,this.fontFaces),s.map((function(t){return{family:t,stretch:"normal",weight:n,style:r}})));this.pdf.setFont(u.ref.name,u.ref.style)}else{var c="";("bold"===n||parseInt(n,10)>=700||"bold"===r)&&(c="bold"),"italic"===r&&(c+="italic"),0===c.length&&(c="normal");for(var l="",h={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},f=0;f<s.length;f++){if(void 0!==this.pdf.internal.getFont(s[f],c,{noFallback:!0,disableWarning:!0})){l=s[f];break}if("bolditalic"===c&&void 0!==this.pdf.internal.getFont(s[f],"bold",{noFallback:!0,disableWarning:!0}))l=s[f],c="bold";else if(void 0!==this.pdf.internal.getFont(s[f],"normal",{noFallback:!0,disableWarning:!0})){l=s[f],c="normal";break}}if(""===l)for(var p=0;p<s.length;p++)if(h[s[p]]){l=h[s[p]];break}l=""===l?"Times":l,this.pdf.setFont(l,c)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(t){this.ctx.globalCompositeOperation=t}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(t){this.ctx.globalAlpha=t}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(t){this.ctx.ignoreClearRect=Boolean(t)}})};d.prototype.fill=function(){N.call(this,"fill",!1)},d.prototype.stroke=function(){N.call(this,"stroke",!1)},d.prototype.beginPath=function(){this.path=[{type:"begin"}]},d.prototype.moveTo=function(t,e){if(isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var r=this.ctx.transform.applyToPoint(new s(t,e));this.path.push({type:"mt",x:r.x,y:r.y}),this.ctx.lastPoint=new s(t,e)},d.prototype.closePath=function(){var t=new s(0,0),e=0;for(e=this.path.length-1;-1!==e;e--)if("begin"===this.path[e].type&&"object"==typeof this.path[e+1]&&"number"==typeof this.path[e+1].x){t=new s(this.path[e+1].x,this.path[e+1].y),this.path.push({type:"lt",x:t.x,y:t.y});break}"object"==typeof this.path[e+2]&&"number"==typeof this.path[e+2].x&&this.path.push(JSON.parse(JSON.stringify(this.path[e+2]))),this.path.push({type:"close"}),this.ctx.lastPoint=new s(t.x,t.y)},d.prototype.lineTo=function(t,e){if(isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var r=this.ctx.transform.applyToPoint(new s(t,e));this.path.push({type:"lt",x:r.x,y:r.y}),this.ctx.lastPoint=new s(r.x,r.y)},d.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),N.call(this,null,!0)},d.prototype.quadraticCurveTo=function(t,e,r,n){if(isNaN(r)||isNaN(n)||isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var a=this.ctx.transform.applyToPoint(new s(r,n)),o=this.ctx.transform.applyToPoint(new s(t,e));this.path.push({type:"qct",x1:o.x,y1:o.y,x:a.x,y:a.y}),this.ctx.lastPoint=new s(a.x,a.y)},d.prototype.bezierCurveTo=function(t,e,r,n,a,o){if(isNaN(a)||isNaN(o)||isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var u=this.ctx.transform.applyToPoint(new s(a,o)),c=this.ctx.transform.applyToPoint(new s(t,e)),l=this.ctx.transform.applyToPoint(new s(r,n));this.path.push({type:"bct",x1:c.x,y1:c.y,x2:l.x,y2:l.y,x:u.x,y:u.y}),this.ctx.lastPoint=new s(u.x,u.y)},d.prototype.arc=function(t,e,r,n,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(a))throw i.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(o=Boolean(o),!this.ctx.transform.isIdentity){var u=this.ctx.transform.applyToPoint(new s(t,e));t=u.x,e=u.y;var c=this.ctx.transform.applyToPoint(new s(0,r)),l=this.ctx.transform.applyToPoint(new s(0,0));r=Math.sqrt(Math.pow(c.x-l.x,2)+Math.pow(c.y-l.y,2))}Math.abs(a-n)>=2*Math.PI&&(n=0,a=2*Math.PI),this.path.push({type:"arc",x:t,y:e,radius:r,startAngle:n,endAngle:a,counterclockwise:o})},d.prototype.arcTo=function(t,e,r,n,i){throw new Error("arcTo not implemented.")},d.prototype.rect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(t,e),this.lineTo(t+r,e),this.lineTo(t+r,e+n),this.lineTo(t,e+n),this.lineTo(t,e),this.lineTo(t+r,e),this.lineTo(t,e)},d.prototype.fillRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!g.call(this)){var a={};"butt"!==this.lineCap&&(a.lineCap=this.lineCap,this.lineCap="butt"),"miter"!==this.lineJoin&&(a.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(t,e,r,n),this.fill(),a.hasOwnProperty("lineCap")&&(this.lineCap=a.lineCap),a.hasOwnProperty("lineJoin")&&(this.lineJoin=a.lineJoin)}},d.prototype.strokeRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");m.call(this)||(this.beginPath(),this.rect(t,e,r,n),this.stroke())},d.prototype.clearRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(t,e,r,n))},d.prototype.save=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,r=0;r<this.pdf.internal.getNumberOfPages();r++)this.pdf.setPage(r+1),this.pdf.internal.out("q");if(this.pdf.setPage(e),t){this.ctx.fontSize=this.pdf.internal.getFontSize();var n=new f(this.ctx);this.ctxStack.push(this.ctx),this.ctx=n}},d.prototype.restore=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,r=0;r<this.pdf.internal.getNumberOfPages();r++)this.pdf.setPage(r+1),this.pdf.internal.out("Q");this.pdf.setPage(e),t&&0!==this.ctxStack.length&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin)},d.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var p=function(t){var e,r,n,i;if(!0===t.isCanvasGradient&&(t=t.getColor()),!t)return{r:0,g:0,b:0,a:0,style:t};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t))e=0,r=0,n=0,i=0;else{var a=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);if(null!==a)e=parseInt(a[1]),r=parseInt(a[2]),n=parseInt(a[3]),i=1;else if(null!==(a=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t)))e=parseInt(a[1]),r=parseInt(a[2]),n=parseInt(a[3]),i=parseFloat(a[4]);else{if(i=1,"string"==typeof t&&"#"!==t.charAt(0)){var o=new h(t);t=o.ok?o.toHex():"#000000"}4===t.length?(e=t.substring(1,2),e+=e,r=t.substring(2,3),r+=r,n=t.substring(3,4),n+=n):(e=t.substring(1,3),r=t.substring(3,5),n=t.substring(5,7)),e=parseInt(e,16),r=parseInt(r,16),n=parseInt(n,16)}}return{r:e,g:r,b:n,a:i,style:t}},g=function(){return this.ctx.isFillTransparent||0==this.globalAlpha},m=function(){return Boolean(this.ctx.isStrokeTransparent||0==this.globalAlpha)};d.prototype.fillText=function(t,e,r,n){if(isNaN(e)||isNaN(r)||"string"!=typeof t)throw i.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(n=isNaN(n)?void 0:n,!g.call(this)){r=A.call(this,r);var a=B(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;k.call(this,{text:t,x:e,y:r,scale:o,angle:a,align:this.textAlign,maxWidth:n})}},d.prototype.strokeText=function(t,e,r,n){if(isNaN(e)||isNaN(r)||"string"!=typeof t)throw i.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!m.call(this)){n=isNaN(n)?void 0:n,r=A.call(this,r);var a=B(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;k.call(this,{text:t,x:e,y:r,scale:o,renderingMode:"stroke",angle:a,align:this.textAlign,maxWidth:n})}},d.prototype.measureText=function(t){if("string"!=typeof t)throw i.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var e=this.pdf,r=this.pdf.internal.scaleFactor,n=e.internal.getFontSize(),a=e.getStringUnitWidth(t)*n/e.internal.scaleFactor,o=function(t){var e=(t=t||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return e}}),this};return new o({width:a*=Math.round(96*r/72*1e4)/1e4})},d.prototype.scale=function(t,e){if(isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var r=new c(t,0,0,e,0,0);this.ctx.transform=this.ctx.transform.multiply(r)},d.prototype.rotate=function(t){if(isNaN(t))throw i.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var e=new c(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0);this.ctx.transform=this.ctx.transform.multiply(e)},d.prototype.translate=function(t,e){if(isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var r=new c(1,0,0,1,t,e);this.ctx.transform=this.ctx.transform.multiply(r)},d.prototype.transform=function(t,e,r,n,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(a)||isNaN(o))throw i.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var s=new c(t,e,r,n,a,o);this.ctx.transform=this.ctx.transform.multiply(s)},d.prototype.setTransform=function(t,e,r,n,i,a){t=isNaN(t)?1:t,e=isNaN(e)?0:e,r=isNaN(r)?0:r,n=isNaN(n)?1:n,i=isNaN(i)?0:i,a=isNaN(a)?0:a,this.ctx.transform=new c(t,e,r,n,i,a)},d.prototype.drawImage=function(t,e,r,n,i,a,o,s,l){var h=this.pdf.getImageProperties(t),f=1,d=1,p=1,g=1;void 0!==n&&void 0!==s&&(p=s/n,g=l/i,f=h.width/n*s/n,d=h.height/i*l/i),void 0===a&&(a=e,o=r,e=0,r=0),void 0!==n&&void 0===s&&(s=n,l=i),void 0===n&&void 0===s&&(s=h.width,l=h.height);for(var m,b=this.ctx.transform.decompose(),N=B(b.rotate.shx),A=new c,x=(A=(A=(A=A.multiply(b.translate)).multiply(b.skew)).multiply(b.scale)).applyToRectangle(new u(a-e*p,o-r*g,n*f,i*d)),S=v.call(this,x),_=[],P=0;P<S.length;P+=1)-1===_.indexOf(S[P])&&_.push(S[P]);if(w(_),this.autoPaging)for(var k=_[0],I=_[_.length-1],F=k;F<I+1;F++){if(this.pdf.setPage(F),0!==this.ctx.clip_path.length){var C=this.path;m=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=y(m,this.posX,-1*this.pdf.internal.pageSize.height*(F-1)+this.posY),L.call(this,"fill",!0),this.path=C}var j=JSON.parse(JSON.stringify(x));j=y([j],this.posX,-1*this.pdf.internal.pageSize.height*(F-1)+this.posY)[0],this.pdf.addImage(t,"JPEG",j.x,j.y,j.w,j.h,null,null,N)}else this.pdf.addImage(t,"JPEG",x.x,x.y,x.w,x.h,null,null,N)};var v=function(t,e,r){var n=[];switch(e=e||this.pdf.internal.pageSize.width,r=r||this.pdf.internal.pageSize.height,t.type){default:case"mt":case"lt":n.push(Math.floor((t.y+this.posY)/r)+1);break;case"arc":n.push(Math.floor((t.y+this.posY-t.radius)/r)+1),n.push(Math.floor((t.y+this.posY+t.radius)/r)+1);break;case"qct":var i=M(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x,t.y);n.push(Math.floor(i.y/r)+1),n.push(Math.floor((i.y+i.h)/r)+1);break;case"bct":var a=E(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x2,t.y2,t.x,t.y);n.push(Math.floor(a.y/r)+1),n.push(Math.floor((a.y+a.h)/r)+1);break;case"rect":n.push(Math.floor((t.y+this.posY)/r)+1),n.push(Math.floor((t.y+t.h+this.posY)/r)+1)}for(var o=0;o<n.length;o+=1)for(;this.pdf.internal.getNumberOfPages()<n[o];)b.call(this);return n},b=function(){var t=this.fillStyle,e=this.strokeStyle,r=this.font,n=this.lineCap,i=this.lineWidth,a=this.lineJoin;this.pdf.addPage(),this.fillStyle=t,this.strokeStyle=e,this.font=r,this.lineCap=n,this.lineWidth=i,this.lineJoin=a},y=function(t,e,r){for(var n=0;n<t.length;n++)switch(t[n].type){case"bct":t[n].x2+=e,t[n].y2+=r;case"qct":t[n].x1+=e,t[n].y1+=r;case"mt":case"lt":case"arc":default:t[n].x+=e,t[n].y+=r}return t},w=function(t){return t.sort((function(t,e){return t-e}))},N=function(t,e){for(var r,n,i=this.fillStyle,a=this.strokeStyle,o=this.lineCap,s=this.lineWidth,u=s*this.ctx.transform.scaleX,c=this.lineJoin,l=JSON.parse(JSON.stringify(this.path)),h=JSON.parse(JSON.stringify(this.path)),f=[],d=0;d<h.length;d++)if(void 0!==h[d].x)for(var p=v.call(this,h[d]),g=0;g<p.length;g+=1)-1===f.indexOf(p[g])&&f.push(p[g]);for(var m=0;m<f.length;m++)for(;this.pdf.internal.getNumberOfPages()<f[m];)b.call(this);if(w(f),this.autoPaging)for(var N=f[0],A=f[f.length-1],x=N;x<A+1;x++){if(this.pdf.setPage(x),this.fillStyle=i,this.strokeStyle=a,this.lineCap=o,this.lineWidth=u,this.lineJoin=c,0!==this.ctx.clip_path.length){var S=this.path;r=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=y(r,this.posX,-1*this.pdf.internal.pageSize.height*(x-1)+this.posY),L.call(this,t,!0),this.path=S}n=JSON.parse(JSON.stringify(l)),this.path=y(n,this.posX,-1*this.pdf.internal.pageSize.height*(x-1)+this.posY),!1!==e&&0!==x||L.call(this,t,e),this.lineWidth=s}else this.lineWidth=u,L.call(this,t,e),this.lineWidth=s;this.path=l},L=function(t,e){if(("stroke"!==t||e||!m.call(this))&&("stroke"===t||e||!g.call(this))){for(var r,n,i=[],a=this.path,o=0;o<a.length;o++){var s=a[o];switch(s.type){case"begin":i.push({begin:!0});break;case"close":i.push({close:!0});break;case"mt":i.push({start:s,deltas:[],abs:[]});break;case"lt":var u=i.length;if(!isNaN(a[o-1].x)&&(r=[s.x-a[o-1].x,s.y-a[o-1].y],u>0))for(;u>=0;u--)if(!0!==i[u-1].close&&!0!==i[u-1].begin){i[u-1].deltas.push(r),i[u-1].abs.push(s);break}break;case"bct":r=[s.x1-a[o-1].x,s.y1-a[o-1].y,s.x2-a[o-1].x,s.y2-a[o-1].y,s.x-a[o-1].x,s.y-a[o-1].y],i[i.length-1].deltas.push(r);break;case"qct":var c=a[o-1].x+2/3*(s.x1-a[o-1].x),l=a[o-1].y+2/3*(s.y1-a[o-1].y),h=s.x+2/3*(s.x1-s.x),f=s.y+2/3*(s.y1-s.y),d=s.x,p=s.y;r=[c-a[o-1].x,l-a[o-1].y,h-a[o-1].x,f-a[o-1].y,d-a[o-1].x,p-a[o-1].y],i[i.length-1].deltas.push(r);break;case"arc":i.push({deltas:[],abs:[],arc:!0}),Array.isArray(i[i.length-1].abs)&&i[i.length-1].abs.push(s)}}n=e?null:"stroke"===t?"stroke":"fill";for(var v=0;v<i.length;v++){if(i[v].arc){for(var b=i[v].abs,y=0;y<b.length;y++){var w=b[y];"arc"===w.type?x.call(this,w.x,w.y,w.radius,w.startAngle,w.endAngle,w.counterclockwise,void 0,e):I.call(this,w.x,w.y)}S.call(this,n),this.pdf.internal.out("h")}if(!i[v].arc&&!0!==i[v].close&&!0!==i[v].begin){var N=i[v].start.x,L=i[v].start.y;F.call(this,i[v].deltas,N,L)}}n&&S.call(this,n),e&&_.call(this)}},A=function(t){var e=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,r=e*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return t-r;case"top":return t+e-r;case"hanging":return t+e-2*r;case"middle":return t+e/2-r;case"ideographic":return t;case"alphabetic":default:return t}};d.prototype.createLinearGradient=function(){var t=function(){};return t.colorStops=[],t.addColorStop=function(t,e){this.colorStops.push([t,e])},t.getColor=function(){return 0===this.colorStops.length?"#000000":this.colorStops[0][1]},t.isCanvasGradient=!0,t},d.prototype.createPattern=function(){return this.createLinearGradient()},d.prototype.createRadialGradient=function(){return this.createLinearGradient()};var x=function(t,e,r,n,i,a,o,s){for(var u=j.call(this,r,n,i,a),c=0;c<u.length;c++){var l=u[c];0===c&&P.call(this,l.x1+t,l.y1+e),C.call(this,t,e,l.x2,l.y2,l.x3,l.y3,l.x4,l.y4)}s?_.call(this):S.call(this,o)},S=function(t){switch(t){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},_=function(){this.pdf.clip(),this.pdf.discardPath()},P=function(t,e){this.pdf.internal.out(r(t)+" "+n(e)+" m")},k=function(t){var e;switch(t.align){case"right":case"end":e="right";break;case"center":e="center";break;case"left":case"start":default:e="left"}var r=this.ctx.transform.applyToPoint(new s(t.x,t.y)),n=this.ctx.transform.decompose(),i=new c;i=(i=(i=i.multiply(n.translate)).multiply(n.skew)).multiply(n.scale);for(var a,o,l,h=this.pdf.getTextDimensions(t.text),f=this.ctx.transform.applyToRectangle(new u(t.x,t.y,h.w,h.h)),d=i.applyToRectangle(new u(t.x,t.y-h.h,h.w,h.h)),p=v.call(this,d),g=[],m=0;m<p.length;m+=1)-1===g.indexOf(p[m])&&g.push(p[m]);if(w(g),!0===this.autoPaging)for(var b=g[0],N=g[g.length-1],A=b;A<N+1;A++){if(this.pdf.setPage(A),0!==this.ctx.clip_path.length){var x=this.path;a=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=y(a,this.posX,-1*this.pdf.internal.pageSize.height*(A-1)+this.posY),L.call(this,"fill",!0),this.path=x}var S=JSON.parse(JSON.stringify(f));S=y([S],this.posX,-1*this.pdf.internal.pageSize.height*(A-1)+this.posY)[0],t.scale>=.01&&(o=this.pdf.internal.getFontSize(),this.pdf.setFontSize(o*t.scale),l=this.lineWidth,this.lineWidth=l*t.scale),this.pdf.text(t.text,S.x,S.y,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),t.scale>=.01&&(this.pdf.setFontSize(o),this.lineWidth=l)}else t.scale>=.01&&(o=this.pdf.internal.getFontSize(),this.pdf.setFontSize(o*t.scale),l=this.lineWidth,this.lineWidth=l*t.scale),this.pdf.text(t.text,r.x+this.posX,r.y+this.posY,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),t.scale>=.01&&(this.pdf.setFontSize(o),this.lineWidth=l)},I=function(t,e,i,a){i=i||0,a=a||0,this.pdf.internal.out(r(t+i)+" "+n(e+a)+" l")},F=function(t,e,r){return this.pdf.lines(t,e,r,null,null)},C=function(t,r,n,i,s,u,c,l){this.pdf.internal.out([e(a(n+t)),e(o(i+r)),e(a(s+t)),e(o(u+r)),e(a(c+t)),e(o(l+r)),"c"].join(" "))},j=function(t,e,r,n){for(var i=2*Math.PI,a=Math.PI/2;e>r;)e-=i;var o=Math.abs(r-e);o<i&&n&&(o=i-o);for(var s=[],u=n?-1:1,c=e;o>1e-5;){var l=c+u*Math.min(o,a);s.push(O.call(this,t,c,l)),o-=Math.abs(l-c),c=l}return s},O=function(t,e,r){var n=(r-e)/2,i=t*Math.cos(n),a=t*Math.sin(n),o=i,s=-a,u=o*o+s*s,c=u+o*i+s*a,l=4/3*(Math.sqrt(2*u*c)-c)/(o*a-s*i),h=o-l*s,f=s+l*o,d=h,p=-f,g=n+e,m=Math.cos(g),v=Math.sin(g);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:h*m-f*v,y2:h*v+f*m,x3:d*m-p*v,y3:d*v+p*m,x4:t*Math.cos(r),y4:t*Math.sin(r)}},B=function(t){return 180*t/Math.PI},M=function(t,e,r,n,i,a){var o=t+.5*(r-t),s=e+.5*(n-e),c=i+.5*(r-i),l=a+.5*(n-a),h=Math.min(t,i,o,c),f=Math.max(t,i,o,c),d=Math.min(e,a,s,l),p=Math.max(e,a,s,l);return new u(h,d,f-h,p-d)},E=function(t,e,r,n,i,a,o,s){var c,l,h,f,d,p,g,m,v,b,y,w,N,L,A=r-t,x=n-e,S=i-r,_=a-n,P=o-i,k=s-a;for(l=0;l<41;l++)v=(g=(h=t+(c=l/40)*A)+c*((d=r+c*S)-h))+c*(d+c*(i+c*P-d)-g),b=(m=(f=e+c*x)+c*((p=n+c*_)-f))+c*(p+c*(a+c*k-p)-m),0==l?(y=v,w=b,N=v,L=b):(y=Math.min(y,v),w=Math.min(w,b),N=Math.max(N,v),L=Math.max(L,b));return new u(Math.round(y),Math.round(w),Math.round(N-y),Math.round(L-w))}}(O.API),
/**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(e){var r=function(t){var e,r,n,i,a,o,s,u,c,l;for(/[^\x00-\xFF]/.test(t),r=[],n=0,i=(t+=e="\0\0\0\0".slice(t.length%4||4)).length;i>n;n+=4)0!==(a=(t.charCodeAt(n)<<24)+(t.charCodeAt(n+1)<<16)+(t.charCodeAt(n+2)<<8)+t.charCodeAt(n+3))?(o=(a=((a=((a=((a=(a-(l=a%85))/85)-(c=a%85))/85)-(u=a%85))/85)-(s=a%85))/85)%85,r.push(o+33,s+33,u+33,c+33,l+33)):r.push(122);return function(t,e){for(var r=e;r>0;r--)t.pop()}(r,e.length),String.fromCharCode.apply(String,r)+"~>"},n=function(t){var e,r,n,i,a,o=String,s="length",u=255,c="charCodeAt",l="slice",h="replace";for(t[l](-2),t=t[l](0,-2)[h](/\s/g,"")[h]("z","!!!!!"),n=[],i=0,a=(t+=e="uuuuu"[l](t[s]%5||5))[s];a>i;i+=5)r=52200625*(t[c](i)-33)+614125*(t[c](i+1)-33)+7225*(t[c](i+2)-33)+85*(t[c](i+3)-33)+(t[c](i+4)-33),n.push(u&r>>24,u&r>>16,u&r>>8,u&r);return function(t,e){for(var r=e;r>0;r--)t.pop()}(n,e[s]),o.fromCharCode.apply(o,n)},i=function(t){var e=new RegExp(/^([0-9A-Fa-f]{2})+$/);if(-1!==(t=t.replace(/\s/g,"")).indexOf(">")&&(t=t.substr(0,t.indexOf(">"))),t.length%2&&(t+="0"),!1===e.test(t))return"";for(var r="",n=0;n<t.length;n+=2)r+=String.fromCharCode("0x"+(t[n]+t[n+1]));return r},a=function(e){for(var r=new Uint8Array(e.length),n=e.length;n--;)r[n]=e.charCodeAt(n);return e=(r=Object(fflate__WEBPACK_IMPORTED_MODULE_0__["zlibSync"])(r)).reduce((function(t,e){return t+String.fromCharCode(e)}),"")};e.processDataByFilters=function(t,e){var o=0,s=t||"",u=[];for("string"==typeof(e=e||[])&&(e=[e]),o=0;o<e.length;o+=1)switch(e[o]){case"ASCII85Decode":case"/ASCII85Decode":s=n(s),u.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":s=r(s),u.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":s=i(s),u.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":s=s.split("").map((function(t){return("0"+t.charCodeAt().toString(16)).slice(-2)})).join("")+">",u.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":s=a(s),u.push("/FlateDecode");break;default:throw new Error('The filter: "'+e[o]+'" is not implemented')}return{data:s,reverseChain:u.reverse().join(" ")}}}(O.API),
/**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.loadFile=function(t,e,r){return function(t,e,r){e=!1!==e,r="function"==typeof r?r:function(){};var n=void 0;try{n=function(t,e,r){var n=new XMLHttpRequest,i=0,a=function(t){var e=t.length,r=[],n=String.fromCharCode;for(i=0;i<e;i+=1)r.push(n(255&t.charCodeAt(i)));return r.join("")};if(n.open("GET",t,!e),n.overrideMimeType("text/plain; charset=x-user-defined"),!1===e&&(n.onload=function(){200===n.status?r(a(this.responseText)):r(void 0)}),n.send(null),e&&200===n.status)return a(n.responseText)}(t,e,r)}catch(t){}return n}(t,e,r)},t.loadImageFile=t.loadFile}(O.API),
/**
 * @license
 * Copyright (c) 2018 Erik Koopmans
 * Released under the MIT License.
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){function e(){return(r.html2canvas?Promise.resolve(r.html2canvas):__webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js", 7))).catch((function(t){return Promise.reject(new Error("Could not load html2canvas: "+t))})).then((function(t){return t.default?t.default:t}))}function n(){return(r.DOMPurify?Promise.resolve(r.DOMPurify):__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! dompurify */ "./node_modules/dompurify/dist/purify.js", 7))).catch((function(t){return Promise.reject(new Error("Could not load dompurify: "+t))})).then((function(t){return t.default?t.default:t}))}var i=function(t){var e=typeof t;return"undefined"===e?"undefined":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?"function":t&&t.constructor===Array?"array":t&&1===t.nodeType?"element":"object"===e?"object":"unknown"},a=function(t,e){var r=document.createElement(t);for(var n in e.className&&(r.className=e.className),e.innerHTML&&e.dompurify&&(r.innerHTML=e.dompurify.sanitize(e.innerHTML)),e.style)r.style[n]=e.style[n];return r},o=function(t,e){for(var r=3===t.nodeType?document.createTextNode(t.nodeValue):t.cloneNode(!1),n=t.firstChild;n;n=n.nextSibling)!0!==e&&1===n.nodeType&&"SCRIPT"===n.nodeName||r.appendChild(o(n,e));return 1===t.nodeType&&("CANVAS"===t.nodeName?(r.width=t.width,r.height=t.height,r.getContext("2d").drawImage(t,0,0)):"TEXTAREA"!==t.nodeName&&"SELECT"!==t.nodeName||(r.value=t.value),r.addEventListener("load",(function(){r.scrollTop=t.scrollTop,r.scrollLeft=t.scrollLeft}),!0)),r},s=function t(e){var r=Object.assign(t.convert(Promise.resolve()),JSON.parse(JSON.stringify(t.template))),n=t.convert(Promise.resolve(),r);return n=(n=n.setProgress(1,t,1,[t])).set(e)};(s.prototype=Object.create(Promise.prototype)).constructor=s,s.convert=function(t,e){return t.__proto__=e||s.prototype,t},s.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},s.prototype.from=function(t,e){return this.then((function(){switch(e=e||function(t){switch(i(t)){case"string":return"string";case"element":return"canvas"===t.nodeName.toLowerCase()?"canvas":"element";default:return"unknown"}}(t)){case"string":return this.then(n).then((function(e){return this.set({src:a("div",{innerHTML:t,dompurify:e})})}));case"element":return this.set({src:t});case"canvas":return this.set({canvas:t});case"img":return this.set({img:t});default:return this.error("Unknown source type.")}}))},s.prototype.to=function(t){switch(t){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},s.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then((function(){var t={position:"relative",display:"inline-block",width:Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},e=o(this.prop.src,this.opt.html2canvas.javascriptEnabled);"BODY"===e.tagName&&(t.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=a("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=a("div",{className:"html2pdf__container",style:t}),this.prop.container.appendChild(e),this.prop.container.firstChild.appendChild(a("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"}))},s.prototype.toCanvas=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(e).then((function(t){var e=Object.assign({},this.opt.html2canvas);return delete e.onrendered,t(this.prop.container,e)})).then((function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)}))},s.prototype.toContext2d=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(e).then((function(t){var e=this.opt.jsPDF,r=this.opt.fontFaces,n=Object.assign({async:!0,allowTaint:!0,scale:1,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete n.onrendered,e.context2d.autoPaging=!0,e.context2d.posX=this.opt.x,e.context2d.posY=this.opt.y,e.context2d.fontFaces=r,r)for(var i=0;i<r.length;++i){var a=r[i],o=a.src.find((function(t){return"truetype"===t.format}));o&&e.addFont(o.url,a.ref.name,a.ref.style)}return n.windowHeight=n.windowHeight||0,n.windowHeight=0==n.windowHeight?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):n.windowHeight,t(this.prop.container,n)})).then((function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)}))},s.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then((function(){var t=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=t}))},s.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then((function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF}))},s.prototype.output=function(t,e,r){return"img"===(r=r||"pdf").toLowerCase()||"image"===r.toLowerCase()?this.outputImg(t,e):this.outputPdf(t,e)},s.prototype.outputPdf=function(t,e){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){return this.prop.pdf.output(t,e)}))},s.prototype.outputImg=function(t){return this.thenList([function(){return this.prop.img||this.toImg()}]).then((function(){switch(t){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+t+'" is not supported.'}}))},s.prototype.save=function(t){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(t?{filename:t}:null).then((function(){this.prop.pdf.save(this.opt.filename)}))},s.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){this.prop.callback(this.prop.pdf)}))},s.prototype.set=function(t){if("object"!==i(t))return this;var e=Object.keys(t||{}).map((function(e){if(e in s.template.prop)return function(){this.prop[e]=t[e]};switch(e){case"margin":return this.setMargin.bind(this,t.margin);case"jsPDF":return function(){return this.opt.jsPDF=t.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,t.pageSize);default:return function(){this.opt[e]=t[e]}}}),this);return this.then((function(){return this.thenList(e)}))},s.prototype.get=function(t,e){return this.then((function(){var r=t in s.template.prop?this.prop[t]:this.opt[t];return e?e(r):r}))},s.prototype.setMargin=function(t){return this.then((function(){switch(i(t)){case"number":t=[t,t,t,t];case"array":if(2===t.length&&(t=[t[0],t[1],t[0],t[1]]),4===t.length)break;default:return this.error("Invalid margin array.")}this.opt.margin=t})).then(this.setPageSize)},s.prototype.setPageSize=function(t){function e(t,e){return Math.floor(t*e/72*96)}return this.then((function(){(t=t||O.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(t.inner={width:t.width-this.opt.margin[1]-this.opt.margin[3],height:t.height-this.opt.margin[0]-this.opt.margin[2]},t.inner.px={width:e(t.inner.width,t.k),height:e(t.inner.height,t.k)},t.inner.ratio=t.inner.height/t.inner.width),this.prop.pageSize=t}))},s.prototype.setProgress=function(t,e,r,n){return null!=t&&(this.progress.val=t),null!=e&&(this.progress.state=e),null!=r&&(this.progress.n=r),null!=n&&(this.progress.stack=n),this.progress.ratio=this.progress.val/this.progress.state,this},s.prototype.updateProgress=function(t,e,r,n){return this.setProgress(t?this.progress.val+t:null,e||null,r?this.progress.n+r:null,n?this.progress.stack.concat(n):null)},s.prototype.then=function(t,e){var r=this;return this.thenCore(t,e,(function(t,e){return r.updateProgress(null,null,1,[t]),Promise.prototype.then.call(this,(function(e){return r.updateProgress(null,t),e})).then(t,e).then((function(t){return r.updateProgress(1),t}))}))},s.prototype.thenCore=function(t,e,r){r=r||Promise.prototype.then;t&&(t=t.bind(this)),e&&(e=e.bind(this));var n=-1!==Promise.toString().indexOf("[native code]")&&"Promise"===Promise.name?this:s.convert(Object.assign({},this),Promise.prototype),i=r.call(n,t,e);return s.convert(i,this.__proto__)},s.prototype.thenExternal=function(t,e){return Promise.prototype.then.call(this,t,e)},s.prototype.thenList=function(t){var e=this;return t.forEach((function(t){e=e.thenCore(t)})),e},s.prototype.catch=function(t){t&&(t=t.bind(this));var e=Promise.prototype.catch.call(this,t);return s.convert(e,this)},s.prototype.catchExternal=function(t){return Promise.prototype.catch.call(this,t)},s.prototype.error=function(t){return this.then((function(){throw new Error(t)}))},s.prototype.using=s.prototype.set,s.prototype.saveAs=s.prototype.save,s.prototype.export=s.prototype.output,s.prototype.run=s.prototype.then,O.getPageSize=function(t,e,r){if("object"==typeof t){var n=t;t=n.orientation,e=n.unit||e,r=n.format||r}e=e||"mm",r=r||"a4",t=(""+(t||"P")).toLowerCase();var i,a=(""+r).toLowerCase(),o={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(e){case"pt":i=1;break;case"mm":i=72/25.4;break;case"cm":i=72/2.54;break;case"in":i=72;break;case"px":i=.75;break;case"pc":case"em":i=12;break;case"ex":i=6;break;default:throw"Invalid unit: "+e}var s,u=0,c=0;if(o.hasOwnProperty(a))u=o[a][1]/i,c=o[a][0]/i;else try{u=r[1],c=r[0]}catch(t){throw new Error("Invalid format: "+r)}if("p"===t||"portrait"===t)t="p",c>u&&(s=c,c=u,u=s);else{if("l"!==t&&"landscape"!==t)throw"Invalid orientation: "+t;t="l",u>c&&(s=c,c=u,u=s)}return{width:c,height:u,unit:e,k:i,orientation:t}},t.html=function(t,e){(e=e||{}).callback=e.callback||function(){},e.html2canvas=e.html2canvas||{},e.html2canvas.canvas=e.html2canvas.canvas||this.canvas,e.jsPDF=e.jsPDF||this,e.fontFaces=e.fontFaces?e.fontFaces.map(It):null;var r=new s(e);return e.worker?r:r.from(t).doCallback()}}(O.API),O.API.addJS=function(t){return Dt=t,this.internal.events.subscribe("postPutResources",(function(){Rt=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(Rt+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),Tt=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+Dt+")"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){void 0!==Rt&&void 0!==Tt&&this.internal.out("/Names <</JavaScript "+Rt+" 0 R>>")})),this},
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e;t.events.push(["postPutResources",function(){var t=this,r=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var n=t.outline.render().split(/\r\n/),i=0;i<n.length;i++){var a=n[i],o=r.exec(a);if(null!=o){var s=o[1];t.internal.newObjectDeferredBegin(s,!1)}t.internal.write(a)}if(this.outline.createNamedDestinations){var u=this.internal.pages.length,c=[];for(i=0;i<u;i++){var l=t.internal.newObject();c.push(l);var h=t.internal.getPageInfo(i+1);t.internal.write("<< /D["+h.objId+" 0 R /XYZ null null null]>> endobj")}var f=t.internal.newObject();t.internal.write("<< /Names [ ");for(i=0;i<c.length;i++)t.internal.write("(page_"+(i+1)+")"+c[i]+" 0 R");t.internal.write(" ] >>","endobj"),e=t.internal.newObject(),t.internal.write("<< /Dests "+f+" 0 R"),t.internal.write(">>","endobj")}}]),t.events.push(["putCatalog",function(){this.outline.root.children.length>0&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+e+" 0 R"))}]),t.events.push(["initialized",function(){var t=this;t.outline={createNamedDestinations:!1,root:{children:[]}},t.outline.add=function(t,e,r){var n={title:e,options:r,children:[]};return null==t&&(t=this.root),t.children.push(n),n},t.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=t,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},t.outline.genIds_r=function(e){e.id=t.internal.newObjectDeferred();for(var r=0;r<e.children.length;r++)this.genIds_r(e.children[r])},t.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),t.children.length>0&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},t.outline.renderItems=function(e){for(var r=this.ctx.pdf.internal.getVerticalCoordinateString,n=0;n<e.children.length;n++){var i=e.children[n];this.objStart(i),this.line("/Title "+this.makeString(i.title)),this.line("/Parent "+this.makeRef(e)),n>0&&this.line("/Prev "+this.makeRef(e.children[n-1])),n<e.children.length-1&&this.line("/Next "+this.makeRef(e.children[n+1])),i.children.length>0&&(this.line("/First "+this.makeRef(i.children[0])),this.line("/Last "+this.makeRef(i.children[i.children.length-1])));var a=this.count=this.count_r({count:0},i);if(a>0&&this.line("/Count "+a),i.options&&i.options.pageNumber){var o=t.internal.getPageInfo(i.options.pageNumber);this.line("/Dest ["+o.objId+" 0 R /XYZ 0 "+r(0)+" 0]")}this.objEnd()}for(var s=0;s<e.children.length;s++)this.renderItems(e.children[s])},t.outline.line=function(t){this.ctx.val+=t+"\r\n"},t.outline.makeRef=function(t){return t.id+" 0 R"},t.outline.makeString=function(e){return"("+t.internal.pdfEscape(e)+")"},t.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},t.outline.objEnd=function(){this.ctx.val+=">> \r\nendobj\r\n"},t.outline.count_r=function(t,e){for(var r=0;r<e.children.length;r++)t.count++,this.count_r(t,e.children[r]);return t.count}}])}(O.API),
/**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=[192,193,194,195,196,197,198,199];t.processJPEG=function(t,r,n,i,a,o){var s,u=this.decode.DCT_DECODE,c=null;if("string"==typeof t||this.__addimage__.isArrayBuffer(t)||this.__addimage__.isArrayBufferView(t)){switch(t=a||t,t=this.__addimage__.isArrayBuffer(t)?new Uint8Array(t):t,(s=function(t){for(var r,n=256*t.charCodeAt(4)+t.charCodeAt(5),i=t.length,a={width:0,height:0,numcomponents:1},o=4;o<i;o+=2){if(o+=n,-1!==e.indexOf(t.charCodeAt(o+1))){r=256*t.charCodeAt(o+5)+t.charCodeAt(o+6),a={width:256*t.charCodeAt(o+7)+t.charCodeAt(o+8),height:r,numcomponents:t.charCodeAt(o+9)};break}n=256*t.charCodeAt(o+2)+t.charCodeAt(o+3)}return a}(t=this.__addimage__.isArrayBufferView(t)?this.__addimage__.arrayBufferToBinaryString(t):t)).numcomponents){case 1:o=this.color_spaces.DEVICE_GRAY;break;case 4:o=this.color_spaces.DEVICE_CMYK;break;case 3:o=this.color_spaces.DEVICE_RGB}c={data:t,width:s.width,height:s.height,colorSpace:o,bitsPerComponent:8,filter:u,index:r,alias:n}}return c}}(O.API);var zt,Ht,Vt,Wt,Gt,Yt=function(){var t,n,i;function a(t){var e,r,n,i,a,o,s,u,c,l,h,f,d,p;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},o=null;;){switch(e=this.readUInt32(),c=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":o&&this.animation.frames.push(o),this.pos+=4,o={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},a=this.readUInt16(),i=this.readUInt16()||100,o.delay=1e3*a/i,o.disposeOp=this.data[this.pos++],o.blendOp=this.data[this.pos++],o.data=[];break;case"IDAT":case"fdAT":for("fdAT"===c&&(this.pos+=4,e-=4),t=(null!=o?o.data:void 0)||this.imgData,f=0;0<=e?f<e:f>e;0<=e?++f:--f)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(n=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>n)throw new Error("More transparent colors than palette size");if((l=n-this.transparency.indexed.length)>0)for(d=0;0<=l?d<l:d>l;0<=l?++d:--d)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":s=(h=this.read(e)).indexOf(0),u=String.fromCharCode.apply(String,h.slice(0,s)),this.text[u]=String.fromCharCode.apply(String,h.slice(s+1));break;case"IEND":return o&&this.animation.frames.push(o),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(p=this.colorType)||6===p,r=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*r,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}a.prototype.read=function(t){var e,r;for(r=[],e=0;0<=t?e<t:e>t;0<=t?++e:--e)r.push(this.data[this.pos++]);return r},a.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},a.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},a.prototype.decodePixels=function(t){var r=this.pixelBitlength/8,n=new Uint8Array(this.width*this.height*r),i=0,a=this;if(null==t&&(t=this.imgData),0===t.length)return new Uint8Array(0);function o(e,o,s,u){var c,l,h,f,d,p,g,m,v,b,y,w,N,L,A,x,S,_,P,k,I,F=Math.ceil((a.width-e)/s),C=Math.ceil((a.height-o)/u),j=a.width==F&&a.height==C;for(L=r*F,w=j?n:new Uint8Array(L*C),p=t.length,N=0,l=0;N<C&&i<p;){switch(t[i++]){case 0:for(f=S=0;S<L;f=S+=1)w[l++]=t[i++];break;case 1:for(f=_=0;_<L;f=_+=1)c=t[i++],d=f<r?0:w[l-r],w[l++]=(c+d)%256;break;case 2:for(f=P=0;P<L;f=P+=1)c=t[i++],h=(f-f%r)/r,A=N&&w[(N-1)*L+h*r+f%r],w[l++]=(A+c)%256;break;case 3:for(f=k=0;k<L;f=k+=1)c=t[i++],h=(f-f%r)/r,d=f<r?0:w[l-r],A=N&&w[(N-1)*L+h*r+f%r],w[l++]=(c+Math.floor((d+A)/2))%256;break;case 4:for(f=I=0;I<L;f=I+=1)c=t[i++],h=(f-f%r)/r,d=f<r?0:w[l-r],0===N?A=x=0:(A=w[(N-1)*L+h*r+f%r],x=h&&w[(N-1)*L+(h-1)*r+f%r]),g=d+A-x,m=Math.abs(g-d),b=Math.abs(g-A),y=Math.abs(g-x),v=m<=b&&m<=y?d:b<=y?A:x,w[l++]=(c+v)%256;break;default:throw new Error("Invalid filter algorithm: "+t[i-1])}if(!j){var O=((o+N*u)*a.width+e)*r,B=N*L;for(f=0;f<F;f+=1){for(var M=0;M<r;M+=1)n[O++]=w[B++];O+=(s-1)*r}}N++}}return t=Object(fflate__WEBPACK_IMPORTED_MODULE_0__["unzlibSync"])(t),1==a.interlaceMethod?(o(0,0,8,8),o(4,0,8,8),o(0,4,4,8),o(2,0,4,4),o(0,2,2,4),o(1,0,2,2),o(0,1,1,2)):o(0,0,1,1),n},a.prototype.decodePalette=function(){var t,e,r,n,i,a,o,s,u;for(r=this.palette,a=this.transparency.indexed||[],i=new Uint8Array((a.length||0)+r.length),n=0,t=0,e=o=0,s=r.length;o<s;e=o+=3)i[n++]=r[e],i[n++]=r[e+1],i[n++]=r[e+2],i[n++]=null!=(u=a[t++])?u:255;return i},a.prototype.copyToImageData=function(t,e){var r,n,i,a,o,s,u,c,l,h,f;if(n=this.colors,l=null,r=this.hasAlphaChannel,this.palette.length&&(l=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),n=4,r=!0),c=(i=t.data||t).length,o=l||e,a=s=0,1===n)for(;a<c;)u=l?4*e[a/4]:s,h=o[u++],i[a++]=h,i[a++]=h,i[a++]=h,i[a++]=r?o[u++]:255,s=u;else for(;a<c;)u=l?4*e[a/4]:s,i[a++]=o[u++],i[a++]=o[u++],i[a++]=o[u++],i[a++]=r?o[u++]:255,s=u},a.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};var o=function(){if("[object Window]"===Object.prototype.toString.call(r)){try{n=r.document.createElement("canvas"),i=n.getContext("2d")}catch(t){return!1}return!0}return!1};return o(),t=function(t){var e;if(!0===o())return i.width=t.width,i.height=t.height,i.clearRect(0,0,t.width,t.height),i.putImageData(t,0,0),(e=new Image).src=n.toDataURL(),e;throw new Error("This method requires a Browser with Canvas-capability.")},a.prototype.decodeFrames=function(e){var r,n,i,a,o,s,u,c;if(this.animation){for(c=[],n=o=0,s=(u=this.animation.frames).length;o<s;n=++o)r=u[n],i=e.createImageData(r.width,r.height),a=this.decodePixels(new Uint8Array(r.data)),this.copyToImageData(i,a),r.imageData=i,c.push(r.image=t(i));return c}},a.prototype.renderFrame=function(t,e){var r,n,i;return r=(n=this.animation.frames)[e],i=n[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=i?i.disposeOp:void 0)?t.clearRect(i.xOffset,i.yOffset,i.width,i.height):2===(null!=i?i.disposeOp:void 0)&&t.putImageData(i.imageData,i.xOffset,i.yOffset),0===r.blendOp&&t.clearRect(r.xOffset,r.yOffset,r.width,r.height),t.drawImage(r.image,r.xOffset,r.yOffset)},a.prototype.animate=function(t){var e,r,n,i,a,o,s=this;return r=0,o=this.animation,i=o.numFrames,n=o.frames,a=o.numPlays,(e=function(){var o,u;if(o=r++%i,u=n[o],s.renderFrame(t,o),i>1&&r/i<a)return s.animation._timeout=setTimeout(e,u.delay)})()},a.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},a.prototype.render=function(t){var e,r;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(r=e.createImageData(this.width,this.height),this.copyToImageData(r,this.decodePixels()),e.putImageData(r,0,0))},a}();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
/**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */
function Jt(t){var e=0;if(71!==t[e++]||73!==t[e++]||70!==t[e++]||56!==t[e++]||56!=(t[e++]+1&253)||97!==t[e++])throw new Error("Invalid GIF 87a/89a header.");var r=t[e++]|t[e++]<<8,n=t[e++]|t[e++]<<8,i=t[e++],a=i>>7,o=1<<(7&i)+1;t[e++];t[e++];var s=null,u=null;a&&(s=e,u=o,e+=3*o);var c=!0,l=[],h=0,f=null,d=0,p=null;for(this.width=r,this.height=n;c&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(11!==t[e]||78==t[e+1]&&69==t[e+2]&&84==t[e+3]&&83==t[e+4]&&67==t[e+5]&&65==t[e+6]&&80==t[e+7]&&69==t[e+8]&&50==t[e+9]&&46==t[e+10]&&48==t[e+11]&&3==t[e+12]&&1==t[e+13]&&0==t[e+16])e+=14,p=t[e++]|t[e++]<<8,e++;else for(e+=12;;){if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}break;case 249:if(4!==t[e++]||0!==t[e+4])throw new Error("Invalid graphics extension block.");var g=t[e++];h=t[e++]|t[e++]<<8,f=t[e++],0==(1&g)&&(f=null),d=g>>2&7,e++;break;case 254:for(;;){if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var m=t[e++]|t[e++]<<8,v=t[e++]|t[e++]<<8,b=t[e++]|t[e++]<<8,y=t[e++]|t[e++]<<8,w=t[e++],N=w>>6&1,L=1<<(7&w)+1,A=s,x=u,S=!1;if(w>>7){S=!0;A=e,x=L,e+=3*L}var _=e;for(e++;;){var P;if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}l.push({x:m,y:v,width:b,height:y,has_local_palette:S,palette_offset:A,palette_size:x,data_offset:_,data_length:e-_,transparent_index:f,interlaced:!!N,delay:h,disposal:d});break;case 59:c=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return l.length},this.loopCount=function(){return p},this.frameInfo=function(t){if(t<0||t>=l.length)throw new Error("Frame index out of range.");return l[t]},this.decodeAndBlitFrameBGRA=function(e,n){var i=this.frameInfo(e),a=i.width*i.height,o=new Uint8Array(a);Xt(t,i.data_offset,o,a);var s=i.palette_offset,u=i.transparent_index;null===u&&(u=256);var c=i.width,l=r-c,h=c,f=4*(i.y*r+i.x),d=4*((i.y+i.height)*r+i.x),p=f,g=4*l;!0===i.interlaced&&(g+=4*r*7);for(var m=8,v=0,b=o.length;v<b;++v){var y=o[v];if(0===h&&(h=c,(p+=g)>=d&&(g=4*l+4*r*(m-1),p=f+(c+l)*(m<<1),m>>=1)),y===u)p+=4;else{var w=t[s+3*y],N=t[s+3*y+1],L=t[s+3*y+2];n[p++]=L,n[p++]=N,n[p++]=w,n[p++]=255}--h}},this.decodeAndBlitFrameRGBA=function(e,n){var i=this.frameInfo(e),a=i.width*i.height,o=new Uint8Array(a);Xt(t,i.data_offset,o,a);var s=i.palette_offset,u=i.transparent_index;null===u&&(u=256);var c=i.width,l=r-c,h=c,f=4*(i.y*r+i.x),d=4*((i.y+i.height)*r+i.x),p=f,g=4*l;!0===i.interlaced&&(g+=4*r*7);for(var m=8,v=0,b=o.length;v<b;++v){var y=o[v];if(0===h&&(h=c,(p+=g)>=d&&(g=4*l+4*r*(m-1),p=f+(c+l)*(m<<1),m>>=1)),y===u)p+=4;else{var w=t[s+3*y],N=t[s+3*y+1],L=t[s+3*y+2];n[p++]=w,n[p++]=N,n[p++]=L,n[p++]=255}--h}}}function Xt(t,e,r,n){for(var a=t[e++],o=1<<a,s=o+1,u=s+1,c=a+1,l=(1<<c)-1,h=0,f=0,d=0,p=t[e++],g=new Int32Array(4096),m=null;;){for(;h<16&&0!==p;)f|=t[e++]<<h,h+=8,1===p?p=t[e++]:--p;if(h<c)break;var v=f&l;if(f>>=c,h-=c,v!==o){if(v===s)break;for(var b=v<u?v:m,y=0,w=b;w>o;)w=g[w]>>8,++y;var N=w;if(d+y+(b!==v?1:0)>n)return void i.log("Warning, gif stream longer than expected.");r[d++]=N;var L=d+=y;for(b!==v&&(r[d++]=N),w=b;y--;)w=g[w],r[--L]=255&w,w>>=8;null!==m&&u<4096&&(g[u++]=m<<8|N,u>=l+1&&c<12&&(++c,l=l<<1|1)),m=v}else u=s+1,l=(1<<(c=a+1))-1,m=null}return d!==n&&i.log("Warning, gif stream shorter than expected."),r}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function Kt(t){var e,r,n,i,a,o=Math.floor,s=new Array(64),u=new Array(64),c=new Array(64),l=new Array(64),h=new Array(65535),f=new Array(65535),d=new Array(64),p=new Array(64),g=[],m=0,v=7,b=new Array(64),y=new Array(64),w=new Array(64),N=new Array(256),L=new Array(2048),A=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],x=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],S=[0,1,2,3,4,5,6,7,8,9,10,11],_=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],P=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],k=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],I=[0,1,2,3,4,5,6,7,8,9,10,11],F=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],C=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function j(t,e){for(var r=0,n=0,i=new Array,a=1;a<=16;a++){for(var o=1;o<=t[a];o++)i[e[n]]=[],i[e[n]][0]=r,i[e[n]][1]=a,n++,r++;r*=2}return i}function O(t){for(var e=t[0],r=t[1]-1;r>=0;)e&1<<r&&(m|=1<<v),r--,--v<0&&(255==m?(B(255),B(0)):B(m),v=7,m=0)}function B(t){g.push(t)}function M(t){B(t>>8&255),B(255&t)}function E(t,e,r,n,i){for(var a,o=i[0],s=i[240],u=function(t,e){var r,n,i,a,o,s,u,c,l,h,f=0;for(l=0;l<8;++l){r=t[f],n=t[f+1],i=t[f+2],a=t[f+3],o=t[f+4],s=t[f+5],u=t[f+6];var p=r+(c=t[f+7]),g=r-c,m=n+u,v=n-u,b=i+s,y=i-s,w=a+o,N=a-o,L=p+w,A=p-w,x=m+b,S=m-b;t[f]=L+x,t[f+4]=L-x;var _=.707106781*(S+A);t[f+2]=A+_,t[f+6]=A-_;var P=.382683433*((L=N+y)-(S=v+g)),k=.5411961*L+P,I=1.306562965*S+P,F=.707106781*(x=y+v),C=g+F,j=g-F;t[f+5]=j+k,t[f+3]=j-k,t[f+1]=C+I,t[f+7]=C-I,f+=8}for(f=0,l=0;l<8;++l){r=t[f],n=t[f+8],i=t[f+16],a=t[f+24],o=t[f+32],s=t[f+40],u=t[f+48];var O=r+(c=t[f+56]),B=r-c,M=n+u,E=n-u,q=i+s,R=i-s,T=a+o,D=a-o,U=O+T,z=O-T,H=M+q,V=M-q;t[f]=U+H,t[f+32]=U-H;var W=.707106781*(V+z);t[f+16]=z+W,t[f+48]=z-W;var G=.382683433*((U=D+R)-(V=E+B)),Y=.5411961*U+G,J=1.306562965*V+G,X=.707106781*(H=R+E),K=B+X,Z=B-X;t[f+40]=Z+Y,t[f+24]=Z-Y,t[f+8]=K+J,t[f+56]=K-J,f++}for(l=0;l<64;++l)h=t[l]*e[l],d[l]=h>0?h+.5|0:h-.5|0;return d}(t,e),c=0;c<64;++c)p[A[c]]=u[c];var l=p[0]-r;r=p[0],0==l?O(n[0]):(O(n[f[a=32767+l]]),O(h[a]));for(var g=63;g>0&&0==p[g];)g--;if(0==g)return O(o),r;for(var m,v=1;v<=g;){for(var b=v;0==p[v]&&v<=g;)++v;var y=v-b;if(y>=16){m=y>>4;for(var w=1;w<=m;++w)O(s);y&=15}a=32767+p[v],O(i[(y<<4)+f[a]]),O(h[a]),v++}return 63!=g&&O(o),r}function q(t){(t=Math.min(Math.max(t,1),100),a!=t)&&(!function(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],r=0;r<64;r++){var n=o((e[r]*t+50)/100);n=Math.min(Math.max(n,1),255),s[A[r]]=n}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],a=0;a<64;a++){var h=o((i[a]*t+50)/100);h=Math.min(Math.max(h,1),255),u[A[a]]=h}for(var f=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],d=0,p=0;p<8;p++)for(var g=0;g<8;g++)c[d]=1/(s[A[d]]*f[p]*f[g]*8),l[d]=1/(u[A[d]]*f[p]*f[g]*8),d++}(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),a=t)}this.encode=function(t,a){a&&q(a),g=new Array,m=0,v=7,M(65496),M(65504),M(16),B(74),B(70),B(73),B(70),B(0),B(1),B(1),B(0),M(1),M(1),B(0),B(0),function(){M(65499),M(132),B(0);for(var t=0;t<64;t++)B(s[t]);B(1);for(var e=0;e<64;e++)B(u[e])}(),function(t,e){M(65472),M(17),B(8),M(e),M(t),B(3),B(1),B(17),B(0),B(2),B(17),B(1),B(3),B(17),B(1)}(t.width,t.height),function(){M(65476),M(418),B(0);for(var t=0;t<16;t++)B(x[t+1]);for(var e=0;e<=11;e++)B(S[e]);B(16);for(var r=0;r<16;r++)B(_[r+1]);for(var n=0;n<=161;n++)B(P[n]);B(1);for(var i=0;i<16;i++)B(k[i+1]);for(var a=0;a<=11;a++)B(I[a]);B(17);for(var o=0;o<16;o++)B(F[o+1]);for(var s=0;s<=161;s++)B(C[s])}(),M(65498),M(12),B(3),B(1),B(0),B(2),B(17),B(3),B(17),B(0),B(63),B(0);var o=0,h=0,f=0;m=0,v=7,this.encode.displayName="_encode_";for(var d,p,N,A,j,R,T,D,U,z=t.data,H=t.width,V=t.height,W=4*H,G=0;G<V;){for(d=0;d<W;){for(j=W*G+d,T=-1,D=0,U=0;U<64;U++)R=j+(D=U>>3)*W+(T=4*(7&U)),G+D>=V&&(R-=W*(G+1+D-V)),d+T>=W&&(R-=d+T-W+4),p=z[R++],N=z[R++],A=z[R++],b[U]=(L[p]+L[N+256>>0]+L[A+512>>0]>>16)-128,y[U]=(L[p+768>>0]+L[N+1024>>0]+L[A+1280>>0]>>16)-128,w[U]=(L[p+1280>>0]+L[N+1536>>0]+L[A+1792>>0]>>16)-128;o=E(b,c,o,e,n),h=E(y,l,h,r,i),f=E(w,l,f,r,i),d+=32}G+=8}if(v>=0){var Y=[];Y[1]=v+1,Y[0]=(1<<v+1)-1,O(Y)}return M(65497),new Uint8Array(g)},t=t||50,function(){for(var t=String.fromCharCode,e=0;e<256;e++)N[e]=t(e)}(),e=j(x,S),r=j(k,I),n=j(_,P),i=j(F,C),function(){for(var t=1,e=2,r=1;r<=15;r++){for(var n=t;n<e;n++)f[32767+n]=r,h[32767+n]=[],h[32767+n][1]=r,h[32767+n][0]=n;for(var i=-(e-1);i<=-t;i++)f[32767+i]=r,h[32767+i]=[],h[32767+i][1]=r,h[32767+i][0]=e-1+i;t<<=1,e<<=1}}(),function(){for(var t=0;t<256;t++)L[t]=19595*t,L[t+256>>0]=38470*t,L[t+512>>0]=7471*t+32768,L[t+768>>0]=-11059*t,L[t+1024>>0]=-21709*t,L[t+1280>>0]=32768*t+8421375,L[t+1536>>0]=-27439*t,L[t+1792>>0]=-5329*t}(),q(t)}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function Zt(t,e){if(this.pos=0,this.buffer=t,this.datav=new DataView(t.buffer),this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,-1===["BM","BA","CI","CP","IC","PT"].indexOf(this.flag))throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function $t(t){function e(t){if(!t)throw Error("assert :P")}function r(t,e,r){for(var n=0;4>n;n++)if(t[e+n]!=r.charCodeAt(n))return!0;return!1}function n(t,e,r,n,i){for(var a=0;a<i;a++)t[e+a]=r[n+a]}function i(t,e,r,n){for(var i=0;i<n;i++)t[e+i]=r}function a(t){return new Int32Array(t)}function o(t,e){for(var r=[],n=0;n<t;n++)r.push(new e);return r}function s(t,e){var r=[];return function t(r,n,i){for(var a=i[n],o=0;o<a&&(r.push(i.length>n+1?[]:new e),!(i.length<n+1));o++)t(r[o],n+1,i)}(r,0,t),r}function u(t,e){for(var r="",n=0;n<4;n++)r+=String.fromCharCode(t[e++]);return r}function c(t,e){return(t[e+0]<<0|t[e+1]<<8|t[e+2]<<16)>>>0}function l(t,e){return(t[e+0]<<0|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0}new($t=function(){var t=this;function u(t,e){for(var r=1<<e-1>>>0;t&r;)r>>>=1;return r?(t&r-1)+r:t}function c(t,r,n,i,a){e(!(i%n));do{t[r+(i-=n)]=a}while(0<i)}function l(t,r,n,i,o){if(e(2328>=o),512>=o)var s=a(512);else if(null==(s=a(o)))return 0;return function(t,r,n,i,o,s){var l,f,d=r,p=1<<n,g=a(16),m=a(16);for(e(0!=o),e(null!=i),e(null!=t),e(0<n),f=0;f<o;++f){if(15<i[f])return 0;++g[i[f]]}if(g[0]==o)return 0;for(m[1]=0,l=1;15>l;++l){if(g[l]>1<<l)return 0;m[l+1]=m[l]+g[l]}for(f=0;f<o;++f)l=i[f],0<i[f]&&(s[m[l]++]=f);if(1==m[15])return(i=new h).g=0,i.value=s[0],c(t,d,1,p,i),p;var v,b=-1,y=p-1,w=0,N=1,L=1,A=1<<n;for(f=0,l=1,o=2;l<=n;++l,o<<=1){if(N+=L<<=1,0>(L-=g[l]))return 0;for(;0<g[l];--g[l])(i=new h).g=l,i.value=s[f++],c(t,d+w,o,A,i),w=u(w,l)}for(l=n+1,o=2;15>=l;++l,o<<=1){if(N+=L<<=1,0>(L-=g[l]))return 0;for(;0<g[l];--g[l]){if(i=new h,(w&y)!=b){for(d+=A,v=1<<(b=l)-n;15>b&&!(0>=(v-=g[b]));)++b,v<<=1;p+=A=1<<(v=b-n),t[r+(b=w&y)].g=v+n,t[r+b].value=d-r-b}i.g=l-n,i.value=s[f++],c(t,d+(w>>n),o,A,i),w=u(w,l)}}return N!=2*m[15]-1?0:p}(t,r,n,i,o,s)}function h(){this.value=this.g=0}function f(){this.value=this.g=0}function d(){this.G=o(5,h),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=o(Rr,f)}function p(t,r,n,i){e(null!=t),e(null!=r),e(2147483648>i),t.Ca=254,t.I=0,t.b=-8,t.Ka=0,t.oa=r,t.pa=n,t.Jd=r,t.Yc=n+i,t.Zc=4<=i?n+i-4+1:n,_(t)}function g(t,e){for(var r=0;0<e--;)r|=k(t,128)<<e;return r}function m(t,e){var r=g(t,e);return P(t)?-r:r}function v(t,r,n,i){var a,o=0;for(e(null!=t),e(null!=r),e(4294967288>i),t.Sb=i,t.Ra=0,t.u=0,t.h=0,4<i&&(i=4),a=0;a<i;++a)o+=r[n+a]<<8*a;t.Ra=o,t.bb=i,t.oa=r,t.pa=n}function b(t){for(;8<=t.u&&t.bb<t.Sb;)t.Ra>>>=8,t.Ra+=t.oa[t.pa+t.bb]<<Ur-8>>>0,++t.bb,t.u-=8;A(t)&&(t.h=1,t.u=0)}function y(t,r){if(e(0<=r),!t.h&&r<=Dr){var n=L(t)&Tr[r];return t.u+=r,b(t),n}return t.h=1,t.u=0}function w(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function N(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function L(t){return t.Ra>>>(t.u&Ur-1)>>>0}function A(t){return e(t.bb<=t.Sb),t.h||t.bb==t.Sb&&t.u>Ur}function x(t,e){t.u=e,t.h=A(t)}function S(t){t.u>=zr&&(e(t.u>=zr),b(t))}function _(t){e(null!=t&&null!=t.oa),t.pa<t.Zc?(t.I=(t.oa[t.pa++]|t.I<<8)>>>0,t.b+=8):(e(null!=t&&null!=t.oa),t.pa<t.Yc?(t.b+=8,t.I=t.oa[t.pa++]|t.I<<8):t.Ka?t.b=0:(t.I<<=8,t.b+=8,t.Ka=1))}function P(t){return g(t,1)}function k(t,e){var r=t.Ca;0>t.b&&_(t);var n=t.b,i=r*e>>>8,a=(t.I>>>n>i)+0;for(a?(r-=i,t.I-=i+1<<n>>>0):r=i+1,n=r,i=0;256<=n;)i+=8,n>>=8;return n=7^i+Hr[n],t.b-=n,t.Ca=(r<<n)-1,a}function I(t,e,r){t[e+0]=r>>24&255,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=r>>0&255}function F(t,e){return t[e+0]<<0|t[e+1]<<8}function C(t,e){return F(t,e)|t[e+2]<<16}function j(t,e){return F(t,e)|F(t,e+2)<<16}function O(t,r){var n=1<<r;return e(null!=t),e(0<r),t.X=a(n),null==t.X?0:(t.Mb=32-r,t.Xa=r,1)}function B(t,r){e(null!=t),e(null!=r),e(t.Xa==r.Xa),n(r.X,0,t.X,0,1<<r.Xa)}function M(){this.X=[],this.Xa=this.Mb=0}function E(t,r,n,i){e(null!=n),e(null!=i);var a=n[0],o=i[0];return 0==a&&(a=(t*o+r/2)/r),0==o&&(o=(r*a+t/2)/t),0>=a||0>=o?0:(n[0]=a,i[0]=o,1)}function q(t,e){return t+(1<<e)-1>>>e}function R(t,e){return((4278255360&t)+(4278255360&e)>>>0&4278255360)+((16711935&t)+(16711935&e)>>>0&16711935)>>>0}function T(e,r){t[r]=function(r,n,i,a,o,s,u){var c;for(c=0;c<o;++c){var l=t[e](s[u+c-1],i,a+c);s[u+c]=R(r[n+c],l)}}}function D(){this.ud=this.hd=this.jd=0}function U(t,e){return((4278124286&(t^e))>>>1)+(t&e)>>>0}function z(t){return 0<=t&&256>t?t:0>t?0:255<t?255:void 0}function H(t,e){return z(t+(t-e+.5>>1))}function V(t,e,r){return Math.abs(e-r)-Math.abs(t-r)}function W(t,e,r,n,i,a,o){for(n=a[o-1],r=0;r<i;++r)a[o+r]=n=R(t[e+r],n)}function G(t,e,r,n,i){var a;for(a=0;a<r;++a){var o=t[e+a],s=o>>8&255,u=16711935&(u=(u=16711935&o)+((s<<16)+s));n[i+a]=(4278255360&o)+u>>>0}}function Y(t,e){e.jd=t>>0&255,e.hd=t>>8&255,e.ud=t>>16&255}function J(t,e,r,n,i,a){var o;for(o=0;o<n;++o){var s=e[r+o],u=s>>>8,c=s,l=255&(l=(l=s>>>16)+((t.jd<<24>>24)*(u<<24>>24)>>>5));c=255&(c=(c=c+((t.hd<<24>>24)*(u<<24>>24)>>>5))+((t.ud<<24>>24)*(l<<24>>24)>>>5));i[a+o]=(4278255360&s)+(l<<16)+c}}function X(e,r,n,i,a){t[r]=function(t,e,r,n,o,s,u,c,l){for(n=u;n<c;++n)for(u=0;u<l;++u)o[s++]=a(r[i(t[e++])])},t[e]=function(e,r,o,s,u,c,l){var h=8>>e.b,f=e.Ea,d=e.K[0],p=e.w;if(8>h)for(e=(1<<e.b)-1,p=(1<<h)-1;r<o;++r){var g,m=0;for(g=0;g<f;++g)g&e||(m=i(s[u++])),c[l++]=a(d[m&p]),m>>=h}else t["VP8LMapColor"+n](s,u,d,p,c,l,r,o,f)}}function K(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=a>>0&255}}function Z(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=a>>0&255,n[i++]=a>>24&255}}function $(t,e,r,n,i){for(r=e+r;e<r;){var a=(o=t[e++])>>16&240|o>>12&15,o=o>>0&240|o>>28&15;n[i++]=a,n[i++]=o}}function Q(t,e,r,n,i){for(r=e+r;e<r;){var a=(o=t[e++])>>16&248|o>>13&7,o=o>>5&224|o>>3&31;n[i++]=a,n[i++]=o}}function tt(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>0&255,n[i++]=a>>8&255,n[i++]=a>>16&255}}function et(t,e,r,i,a,o){if(0==o)for(r=e+r;e<r;)I(i,((o=t[e++])[0]>>24|o[1]>>8&65280|o[2]<<8&16711680|o[3]<<24)>>>0),a+=32;else n(i,a,t,e,r)}function rt(e,r){t[r][0]=t[e+"0"],t[r][1]=t[e+"1"],t[r][2]=t[e+"2"],t[r][3]=t[e+"3"],t[r][4]=t[e+"4"],t[r][5]=t[e+"5"],t[r][6]=t[e+"6"],t[r][7]=t[e+"7"],t[r][8]=t[e+"8"],t[r][9]=t[e+"9"],t[r][10]=t[e+"10"],t[r][11]=t[e+"11"],t[r][12]=t[e+"12"],t[r][13]=t[e+"13"],t[r][14]=t[e+"0"],t[r][15]=t[e+"0"]}function nt(t){return t==Hn||t==Vn||t==Wn||t==Gn}function it(){this.eb=[],this.size=this.A=this.fb=0}function at(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function ot(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new it,this.f.kb=new at,this.sd=null}function st(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function ut(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function ct(t){return alert("todo:WebPSamplerProcessPlane"),t.T}function lt(t,e){var r=t.T,i=e.ba.f.RGBA,a=i.eb,o=i.fb+t.ka*i.A,s=vi[e.ba.S],u=t.y,c=t.O,l=t.f,h=t.N,f=t.ea,d=t.W,p=e.cc,g=e.dc,m=e.Mc,v=e.Nc,b=t.ka,y=t.ka+t.T,w=t.U,N=w+1>>1;for(0==b?s(u,c,null,null,l,h,f,d,l,h,f,d,a,o,null,null,w):(s(e.ec,e.fc,u,c,p,g,m,v,l,h,f,d,a,o-i.A,a,o,w),++r);b+2<y;b+=2)p=l,g=h,m=f,v=d,h+=t.Rc,d+=t.Rc,o+=2*i.A,s(u,(c+=2*t.fa)-t.fa,u,c,p,g,m,v,l,h,f,d,a,o-i.A,a,o,w);return c+=t.fa,t.j+y<t.o?(n(e.ec,e.fc,u,c,w),n(e.cc,e.dc,l,h,N),n(e.Mc,e.Nc,f,d,N),r--):1&y||s(u,c,null,null,l,h,f,d,l,h,f,d,a,o+i.A,null,null,w),r}function ht(t,r,n){var i=t.F,a=[t.J];if(null!=i){var o=t.U,s=r.ba.S,u=s==Dn||s==Wn;r=r.ba.f.RGBA;var c=[0],l=t.ka;c[0]=t.T,t.Kb&&(0==l?--c[0]:(--l,a[0]-=t.width),t.j+t.ka+t.T==t.o&&(c[0]=t.o-t.j-l));var h=r.eb;l=r.fb+l*r.A;t=Sn(i,a[0],t.width,o,c,h,l+(u?0:3),r.A),e(n==c),t&&nt(s)&&An(h,l,u,o,c,r.A)}return 0}function ft(t){var e=t.ma,r=e.ba.S,n=11>r,i=r==qn||r==Tn||r==Dn||r==Un||12==r||nt(r);if(e.memory=null,e.Ib=null,e.Jb=null,e.Nd=null,!Mr(e.Oa,t,i?11:12))return 0;if(i&&nt(r)&&br(),t.da)alert("todo:use_scaling");else{if(n){if(e.Ib=ct,t.Kb){if(r=t.U+1>>1,e.memory=a(t.U+2*r),null==e.memory)return 0;e.ec=e.memory,e.fc=0,e.cc=e.ec,e.dc=e.fc+t.U,e.Mc=e.cc,e.Nc=e.dc+r,e.Ib=lt,br()}}else alert("todo:EmitYUV");i&&(e.Jb=ht,n&&mr())}if(n&&!Ci){for(t=0;256>t;++t)ji[t]=89858*(t-128)+_i>>Si,Mi[t]=-22014*(t-128)+_i,Bi[t]=-45773*(t-128),Oi[t]=113618*(t-128)+_i>>Si;for(t=Pi;t<ki;++t)e=76283*(t-16)+_i>>Si,Ei[t-Pi]=Wt(e,255),qi[t-Pi]=Wt(e+8>>4,15);Ci=1}return 1}function dt(t){var r=t.ma,n=t.U,i=t.T;return e(!(1&t.ka)),0>=n||0>=i?0:(n=r.Ib(t,r),null!=r.Jb&&r.Jb(t,r,n),r.Dc+=n,1)}function pt(t){t.ma.memory=null}function gt(t,e,r,n){return 47!=y(t,8)?0:(e[0]=y(t,14)+1,r[0]=y(t,14)+1,n[0]=y(t,1),0!=y(t,3)?0:!t.h)}function mt(t,e){if(4>t)return t+1;var r=t-2>>1;return(2+(1&t)<<r)+y(e,r)+1}function vt(t,e){return 120<e?e-120:1<=(r=((r=$n[e-1])>>4)*t+(8-(15&r)))?r:1;var r}function bt(t,e,r){var n=L(r),i=t[e+=255&n].g-8;return 0<i&&(x(r,r.u+8),n=L(r),e+=t[e].value,e+=n&(1<<i)-1),x(r,r.u+t[e].g),t[e].value}function yt(t,r,n){return n.g+=t.g,n.value+=t.value<<r>>>0,e(8>=n.g),t.g}function wt(t,r,n){var i=t.xc;return e((r=0==i?0:t.vc[t.md*(n>>i)+(r>>i)])<t.Wb),t.Ya[r]}function Nt(t,r,i,a){var o=t.ab,s=t.c*r,u=t.C;r=u+r;var c=i,l=a;for(a=t.Ta,i=t.Ua;0<o--;){var h=t.gc[o],f=u,d=r,p=c,g=l,m=(l=a,c=i,h.Ea);switch(e(f<d),e(d<=h.nc),h.hc){case 2:Gr(p,g,(d-f)*m,l,c);break;case 0:var v=f,b=d,y=l,w=c,N=(_=h).Ea;0==v&&(Vr(p,g,null,null,1,y,w),W(p,g+1,0,0,N-1,y,w+1),g+=N,w+=N,++v);for(var L=1<<_.b,A=L-1,x=q(N,_.b),S=_.K,_=_.w+(v>>_.b)*x;v<b;){var P=S,k=_,I=1;for(Wr(p,g,y,w-N,1,y,w);I<N;){var F=(I&~A)+L;F>N&&(F=N),(0,Zr[P[k++]>>8&15])(p,g+ +I,y,w+I-N,F-I,y,w+I),I=F}g+=N,w+=N,++v&A||(_+=x)}d!=h.nc&&n(l,c-m,l,c+(d-f-1)*m,m);break;case 1:for(m=p,b=g,N=(p=h.Ea)-(w=p&~(y=(g=1<<h.b)-1)),v=q(p,h.b),L=h.K,h=h.w+(f>>h.b)*v;f<d;){for(A=L,x=h,S=new D,_=b+w,P=b+p;b<_;)Y(A[x++],S),$r(S,m,b,g,l,c),b+=g,c+=g;b<P&&(Y(A[x++],S),$r(S,m,b,N,l,c),b+=N,c+=N),++f&y||(h+=v)}break;case 3:if(p==l&&g==c&&0<h.b){for(b=l,p=m=c+(d-f)*m-(w=(d-f)*q(h.Ea,h.b)),g=l,y=c,v=[],w=(N=w)-1;0<=w;--w)v[w]=g[y+w];for(w=N-1;0<=w;--w)b[p+w]=v[w];Yr(h,f,d,l,m,l,c)}else Yr(h,f,d,p,g,l,c)}c=a,l=i}l!=i&&n(a,i,c,l,s)}function Lt(t,r){var n=t.V,i=t.Ba+t.c*t.C,a=r-t.C;if(e(r<=t.l.o),e(16>=a),0<a){var o=t.l,s=t.Ta,u=t.Ua,c=o.width;if(Nt(t,a,n,i),a=u=[u],e((n=t.C)<(i=r)),e(o.v<o.va),i>o.o&&(i=o.o),n<o.j){var l=o.j-n;n=o.j;a[0]+=l*c}if(n>=i?n=0:(a[0]+=4*o.v,o.ka=n-o.j,o.U=o.va-o.v,o.T=i-n,n=1),n){if(u=u[0],11>(n=t.ca).S){var h=n.f.RGBA,f=(i=n.S,a=o.U,o=o.T,l=h.eb,h.A),d=o;for(h=h.fb+t.Ma*h.A;0<d--;){var p=s,g=u,m=a,v=l,b=h;switch(i){case En:Qr(p,g,m,v,b);break;case qn:tn(p,g,m,v,b);break;case Hn:tn(p,g,m,v,b),An(v,b,0,m,1,0);break;case Rn:nn(p,g,m,v,b);break;case Tn:et(p,g,m,v,b,1);break;case Vn:et(p,g,m,v,b,1),An(v,b,0,m,1,0);break;case Dn:et(p,g,m,v,b,0);break;case Wn:et(p,g,m,v,b,0),An(v,b,1,m,1,0);break;case Un:en(p,g,m,v,b);break;case Gn:en(p,g,m,v,b),xn(v,b,m,1,0);break;case zn:rn(p,g,m,v,b);break;default:e(0)}u+=c,h+=f}t.Ma+=o}else alert("todo:EmitRescaledRowsYUVA");e(t.Ma<=n.height)}}t.C=r,e(t.C<=t.i)}function At(t){var e;if(0<t.ua)return 0;for(e=0;e<t.Wb;++e){var r=t.Ya[e].G,n=t.Ya[e].H;if(0<r[1][n[1]+0].g||0<r[2][n[2]+0].g||0<r[3][n[3]+0].g)return 0}return 1}function xt(t,r,n,i,a,o){if(0!=t.Z){var s=t.qd,u=t.rd;for(e(null!=mi[t.Z]);r<n;++r)mi[t.Z](s,u,i,a,i,a,o),s=i,u=a,a+=o;t.qd=s,t.rd=u}}function St(t,r){var n=t.l.ma,i=0==n.Z||1==n.Z?t.l.j:t.C;i=t.C<i?i:t.C;if(e(r<=t.l.o),r>i){var a=t.l.width,o=n.ca,s=n.tb+a*i,u=t.V,c=t.Ba+t.c*i,l=t.gc;e(1==t.ab),e(3==l[0].hc),Xr(l[0],i,r,u,c,o,s),xt(n,i,r,o,s,a)}t.C=t.Ma=r}function _t(t,r,n,i,a,o,s){var u=t.$/i,c=t.$%i,l=t.m,h=t.s,f=n+t.$,d=f;a=n+i*a;var p=n+i*o,g=280+h.ua,m=t.Pb?u:16777216,v=0<h.ua?h.Wa:null,b=h.wc,y=f<p?wt(h,c,u):null;e(t.C<o),e(p<=a);var w=!1;t:for(;;){for(;w||f<p;){var N=0;if(u>=m){var _=f-n;e((m=t).Pb),m.wd=m.m,m.xd=_,0<m.s.ua&&B(m.s.Wa,m.s.vb),m=u+ti}if(c&b||(y=wt(h,c,u)),e(null!=y),y.Qb&&(r[f]=y.qb,w=!0),!w)if(S(l),y.jc){N=l,_=r;var P=f,k=y.pd[L(N)&Rr-1];e(y.jc),256>k.g?(x(N,N.u+k.g),_[P]=k.value,N=0):(x(N,N.u+k.g-256),e(256<=k.value),N=k.value),0==N&&(w=!0)}else N=bt(y.G[0],y.H[0],l);if(l.h)break;if(w||256>N){if(!w)if(y.nd)r[f]=(y.qb|N<<8)>>>0;else{if(S(l),w=bt(y.G[1],y.H[1],l),S(l),_=bt(y.G[2],y.H[2],l),P=bt(y.G[3],y.H[3],l),l.h)break;r[f]=(P<<24|w<<16|N<<8|_)>>>0}if(w=!1,++f,++c>=i&&(c=0,++u,null!=s&&u<=o&&!(u%16)&&s(t,u),null!=v))for(;d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N}else if(280>N){if(N=mt(N-256,l),_=bt(y.G[4],y.H[4],l),S(l),_=vt(i,_=mt(_,l)),l.h)break;if(f-n<_||a-f<N)break t;for(P=0;P<N;++P)r[f+P]=r[f+P-_];for(f+=N,c+=N;c>=i;)c-=i,++u,null!=s&&u<=o&&!(u%16)&&s(t,u);if(e(f<=a),c&b&&(y=wt(h,c,u)),null!=v)for(;d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N}else{if(!(N<g))break t;for(w=N-280,e(null!=v);d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N;N=f,e(!(w>>>(_=v).Xa)),r[N]=_.X[w],w=!0}w||e(l.h==A(l))}if(t.Pb&&l.h&&f<a)e(t.m.h),t.a=5,t.m=t.wd,t.$=t.xd,0<t.s.ua&&B(t.s.vb,t.s.Wa);else{if(l.h)break t;null!=s&&s(t,u>o?o:u),t.a=0,t.$=f-n}return 1}return t.a=3,0}function Pt(t){e(null!=t),t.vc=null,t.yc=null,t.Ya=null;var r=t.Wa;null!=r&&(r.X=null),t.vb=null,e(null!=t)}function kt(){var e=new or;return null==e?null:(e.a=0,e.xb=gi,rt("Predictor","VP8LPredictors"),rt("Predictor","VP8LPredictors_C"),rt("PredictorAdd","VP8LPredictorsAdd"),rt("PredictorAdd","VP8LPredictorsAdd_C"),Gr=G,$r=J,Qr=K,tn=Z,en=$,rn=Q,nn=tt,t.VP8LMapColor32b=Jr,t.VP8LMapColor8b=Kr,e)}function It(t,r,n,s,u){var c=1,f=[t],p=[r],g=s.m,m=s.s,v=null,b=0;t:for(;;){if(n)for(;c&&y(g,1);){var w=f,N=p,A=s,_=1,P=A.m,k=A.gc[A.ab],I=y(P,2);if(A.Oc&1<<I)c=0;else{switch(A.Oc|=1<<I,k.hc=I,k.Ea=w[0],k.nc=N[0],k.K=[null],++A.ab,e(4>=A.ab),I){case 0:case 1:k.b=y(P,3)+2,_=It(q(k.Ea,k.b),q(k.nc,k.b),0,A,k.K),k.K=k.K[0];break;case 3:var F,C=y(P,8)+1,j=16<C?0:4<C?1:2<C?2:3;if(w[0]=q(k.Ea,j),k.b=j,F=_=It(C,1,0,A,k.K)){var B,M=C,E=k,T=1<<(8>>E.b),D=a(T);if(null==D)F=0;else{var U=E.K[0],z=E.w;for(D[0]=E.K[0][0],B=1;B<1*M;++B)D[B]=R(U[z+B],D[B-1]);for(;B<4*T;++B)D[B]=0;E.K[0]=null,E.K[0]=D,F=1}}_=F;break;case 2:break;default:e(0)}c=_}}if(f=f[0],p=p[0],c&&y(g,1)&&!(c=1<=(b=y(g,4))&&11>=b)){s.a=3;break t}var H;if(H=c)e:{var V,W,G,Y=s,J=f,X=p,K=b,Z=n,$=Y.m,Q=Y.s,tt=[null],et=1,rt=0,nt=Qn[K];r:for(;;){if(Z&&y($,1)){var it=y($,3)+2,at=q(J,it),ot=q(X,it),st=at*ot;if(!It(at,ot,0,Y,tt))break r;for(tt=tt[0],Q.xc=it,V=0;V<st;++V){var ut=tt[V]>>8&65535;tt[V]=ut,ut>=et&&(et=ut+1)}}if($.h)break r;for(W=0;5>W;++W){var ct=Xn[W];!W&&0<K&&(ct+=1<<K),rt<ct&&(rt=ct)}var lt=o(et*nt,h),ht=et,ft=o(ht,d);if(null==ft)var dt=null;else e(65536>=ht),dt=ft;var pt=a(rt);if(null==dt||null==pt||null==lt){Y.a=1;break r}var gt=lt;for(V=G=0;V<et;++V){var mt=dt[V],vt=mt.G,bt=mt.H,wt=0,Nt=1,Lt=0;for(W=0;5>W;++W){ct=Xn[W],vt[W]=gt,bt[W]=G,!W&&0<K&&(ct+=1<<K);n:{var At,xt=ct,St=Y,kt=pt,Ft=gt,Ct=G,jt=0,Ot=St.m,Bt=y(Ot,1);if(i(kt,0,0,xt),Bt){var Mt=y(Ot,1)+1,Et=y(Ot,1),qt=y(Ot,0==Et?1:8);kt[qt]=1,2==Mt&&(kt[qt=y(Ot,8)]=1);var Rt=1}else{var Tt=a(19),Dt=y(Ot,4)+4;if(19<Dt){St.a=3;var Ut=0;break n}for(At=0;At<Dt;++At)Tt[Zn[At]]=y(Ot,3);var zt=void 0,Ht=void 0,Vt=St,Wt=Tt,Gt=xt,Yt=kt,Jt=0,Xt=Vt.m,Kt=8,Zt=o(128,h);i:for(;l(Zt,0,7,Wt,19);){if(y(Xt,1)){var $t=2+2*y(Xt,3);if((zt=2+y(Xt,$t))>Gt)break i}else zt=Gt;for(Ht=0;Ht<Gt&&zt--;){S(Xt);var Qt=Zt[0+(127&L(Xt))];x(Xt,Xt.u+Qt.g);var te=Qt.value;if(16>te)Yt[Ht++]=te,0!=te&&(Kt=te);else{var ee=16==te,re=te-16,ne=Jn[re],ie=y(Xt,Yn[re])+ne;if(Ht+ie>Gt)break i;for(var ae=ee?Kt:0;0<ie--;)Yt[Ht++]=ae}}Jt=1;break i}Jt||(Vt.a=3),Rt=Jt}(Rt=Rt&&!Ot.h)&&(jt=l(Ft,Ct,8,kt,xt)),Rt&&0!=jt?Ut=jt:(St.a=3,Ut=0)}if(0==Ut)break r;if(Nt&&1==Kn[W]&&(Nt=0==gt[G].g),wt+=gt[G].g,G+=Ut,3>=W){var oe,se=pt[0];for(oe=1;oe<ct;++oe)pt[oe]>se&&(se=pt[oe]);Lt+=se}}if(mt.nd=Nt,mt.Qb=0,Nt&&(mt.qb=(vt[3][bt[3]+0].value<<24|vt[1][bt[1]+0].value<<16|vt[2][bt[2]+0].value)>>>0,0==wt&&256>vt[0][bt[0]+0].value&&(mt.Qb=1,mt.qb+=vt[0][bt[0]+0].value<<8)),mt.jc=!mt.Qb&&6>Lt,mt.jc){var ue,ce=mt;for(ue=0;ue<Rr;++ue){var le=ue,he=ce.pd[le],fe=ce.G[0][ce.H[0]+le];256<=fe.value?(he.g=fe.g+256,he.value=fe.value):(he.g=0,he.value=0,le>>=yt(fe,8,he),le>>=yt(ce.G[1][ce.H[1]+le],16,he),le>>=yt(ce.G[2][ce.H[2]+le],0,he),yt(ce.G[3][ce.H[3]+le],24,he))}}}Q.vc=tt,Q.Wb=et,Q.Ya=dt,Q.yc=lt,H=1;break e}H=0}if(!(c=H)){s.a=3;break t}if(0<b){if(m.ua=1<<b,!O(m.Wa,b)){s.a=1,c=0;break t}}else m.ua=0;var de=s,pe=f,ge=p,me=de.s,ve=me.xc;if(de.c=pe,de.i=ge,me.md=q(pe,ve),me.wc=0==ve?-1:(1<<ve)-1,n){s.xb=pi;break t}if(null==(v=a(f*p))){s.a=1,c=0;break t}c=(c=_t(s,v,0,f,p,p,null))&&!g.h;break t}return c?(null!=u?u[0]=v:(e(null==v),e(n)),s.$=0,n||Pt(m)):Pt(m),c}function Ft(t,r){var n=t.c*t.i,i=n+r+16*r;return e(t.c<=r),t.V=a(i),null==t.V?(t.Ta=null,t.Ua=0,t.a=1,0):(t.Ta=t.V,t.Ua=t.Ba+n+r,1)}function Ct(t,r){var n=t.C,i=r-n,a=t.V,o=t.Ba+t.c*n;for(e(r<=t.l.o);0<i;){var s=16<i?16:i,u=t.l.ma,c=t.l.width,l=c*s,h=u.ca,f=u.tb+c*n,d=t.Ta,p=t.Ua;Nt(t,s,a,o),_n(d,p,h,f,l),xt(u,n,n+s,h,f,c),i-=s,a+=s*t.c,n+=s}e(n==r),t.C=t.Ma=r}function jt(){this.ub=this.yd=this.td=this.Rb=0}function Ot(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function Bt(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function Mt(){this.Yb=function(){var t=[];return function t(e,r,n){for(var i=n[r],a=0;a<i&&(e.push(n.length>r+1?[]:0),!(n.length<r+1));a++)t(e[a],r+1,n)}(t,0,[3,11]),t}()}function Et(){this.jb=a(3),this.Wc=s([4,8],Mt),this.Xc=s([4,17],Mt)}function qt(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function Rt(){this.ld=this.La=this.dd=this.tc=0}function Tt(){this.Na=this.la=0}function Dt(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Ut(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function zt(){this.uc=this.M=this.Nb=0,this.wa=Array(new Rt),this.Y=0,this.ya=Array(new Ut),this.aa=0,this.l=new Gt}function Ht(){this.y=a(16),this.f=a(8),this.ea=a(8)}function Vt(){this.cb=this.a=0,this.sc="",this.m=new w,this.Od=new jt,this.Kc=new Ot,this.ed=new qt,this.Qa=new Bt,this.Ic=this.$c=this.Aa=0,this.D=new zt,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=o(8,w),this.ia=0,this.pb=o(4,Dt),this.Pa=new Et,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Ht),this.Hd=0,this.rb=Array(new Tt),this.sb=0,this.wa=Array(new Rt),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Ut),this.L=this.aa=0,this.gd=s([4,2],Rt),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Wt(t,e){return 0>t?0:t>e?e:t}function Gt(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function Yt(){var t=new Vt;return null!=t&&(t.a=0,t.sc="OK",t.cb=0,t.Xb=0,ni||(ni=Zt)),t}function Jt(t,e,r){return 0==t.a&&(t.a=e,t.sc=r,t.cb=0),0}function Xt(t,e,r){return 3<=r&&157==t[e+0]&&1==t[e+1]&&42==t[e+2]}function Kt(t,r){if(null==t)return 0;if(t.a=0,t.sc="OK",null==r)return Jt(t,2,"null VP8Io passed to VP8GetHeaders()");var n=r.data,a=r.w,o=r.ha;if(4>o)return Jt(t,7,"Truncated header.");var s=n[a+0]|n[a+1]<<8|n[a+2]<<16,u=t.Od;if(u.Rb=!(1&s),u.td=s>>1&7,u.yd=s>>4&1,u.ub=s>>5,3<u.td)return Jt(t,3,"Incorrect keyframe parameters.");if(!u.yd)return Jt(t,4,"Frame not displayable.");a+=3,o-=3;var c=t.Kc;if(u.Rb){if(7>o)return Jt(t,7,"cannot parse picture header");if(!Xt(n,a,o))return Jt(t,3,"Bad code word");c.c=16383&(n[a+4]<<8|n[a+3]),c.Td=n[a+4]>>6,c.i=16383&(n[a+6]<<8|n[a+5]),c.Ud=n[a+6]>>6,a+=7,o-=7,t.za=c.c+15>>4,t.Ub=c.i+15>>4,r.width=c.c,r.height=c.i,r.Da=0,r.j=0,r.v=0,r.va=r.width,r.o=r.height,r.da=0,r.ib=r.width,r.hb=r.height,r.U=r.width,r.T=r.height,i((s=t.Pa).jb,0,255,s.jb.length),e(null!=(s=t.Qa)),s.Cb=0,s.Bb=0,s.Fb=1,i(s.Zb,0,0,s.Zb.length),i(s.Lb,0,0,s.Lb)}if(u.ub>o)return Jt(t,7,"bad partition length");p(s=t.m,n,a,u.ub),a+=u.ub,o-=u.ub,u.Rb&&(c.Ld=P(s),c.Kd=P(s)),c=t.Qa;var l,h=t.Pa;if(e(null!=s),e(null!=c),c.Cb=P(s),c.Cb){if(c.Bb=P(s),P(s)){for(c.Fb=P(s),l=0;4>l;++l)c.Zb[l]=P(s)?m(s,7):0;for(l=0;4>l;++l)c.Lb[l]=P(s)?m(s,6):0}if(c.Bb)for(l=0;3>l;++l)h.jb[l]=P(s)?g(s,8):255}else c.Bb=0;if(s.Ka)return Jt(t,3,"cannot parse segment header");if((c=t.ed).zd=P(s),c.Tb=g(s,6),c.wb=g(s,3),c.Pc=P(s),c.Pc&&P(s)){for(h=0;4>h;++h)P(s)&&(c.vd[h]=m(s,6));for(h=0;4>h;++h)P(s)&&(c.od[h]=m(s,6))}if(t.L=0==c.Tb?0:c.zd?1:2,s.Ka)return Jt(t,3,"cannot parse filter header");var f=o;if(o=l=a,a=l+f,c=f,t.Xb=(1<<g(t.m,2))-1,f<3*(h=t.Xb))n=7;else{for(l+=3*h,c-=3*h,f=0;f<h;++f){var d=n[o+0]|n[o+1]<<8|n[o+2]<<16;d>c&&(d=c),p(t.Jc[+f],n,l,d),l+=d,c-=d,o+=3}p(t.Jc[+h],n,l,c),n=l<a?0:5}if(0!=n)return Jt(t,n,"cannot parse partitions");for(n=g(l=t.m,7),o=P(l)?m(l,4):0,a=P(l)?m(l,4):0,c=P(l)?m(l,4):0,h=P(l)?m(l,4):0,l=P(l)?m(l,4):0,f=t.Qa,d=0;4>d;++d){if(f.Cb){var v=f.Zb[d];f.Fb||(v+=n)}else{if(0<d){t.pb[d]=t.pb[0];continue}v=n}var b=t.pb[d];b.Sc[0]=ei[Wt(v+o,127)],b.Sc[1]=ri[Wt(v+0,127)],b.Eb[0]=2*ei[Wt(v+a,127)],b.Eb[1]=101581*ri[Wt(v+c,127)]>>16,8>b.Eb[1]&&(b.Eb[1]=8),b.Qc[0]=ei[Wt(v+h,117)],b.Qc[1]=ri[Wt(v+l,127)],b.lc=v+l}if(!u.Rb)return Jt(t,4,"Not a key frame.");for(P(s),u=t.Pa,n=0;4>n;++n){for(o=0;8>o;++o)for(a=0;3>a;++a)for(c=0;11>c;++c)h=k(s,ci[n][o][a][c])?g(s,8):si[n][o][a][c],u.Wc[n][o].Yb[a][c]=h;for(o=0;17>o;++o)u.Xc[n][o]=u.Wc[n][li[o]]}return t.kc=P(s),t.kc&&(t.Bd=g(s,8)),t.cb=1}function Zt(t,e,r,n,i,a,o){var s=e[i].Yb[r];for(r=0;16>i;++i){if(!k(t,s[r+0]))return i;for(;!k(t,s[r+1]);)if(s=e[++i].Yb[0],r=0,16==i)return 16;var u=e[i+1].Yb;if(k(t,s[r+2])){var c=t,l=0;if(k(c,(f=s)[(h=r)+3]))if(k(c,f[h+6])){for(s=0,h=2*(l=k(c,f[h+8]))+(f=k(c,f[h+9+l])),l=0,f=ii[h];f[s];++s)l+=l+k(c,f[s]);l+=3+(8<<h)}else k(c,f[h+7])?(l=7+2*k(c,165),l+=k(c,145)):l=5+k(c,159);else l=k(c,f[h+4])?3+k(c,f[h+5]):2;s=u[2]}else l=1,s=u[1];u=o+ai[i],0>(c=t).b&&_(c);var h,f=c.b,d=(h=c.Ca>>1)-(c.I>>f)>>31;--c.b,c.Ca+=d,c.Ca|=1,c.I-=(h+1&d)<<f,a[u]=((l^d)-d)*n[(0<i)+0]}return 16}function $t(t){var e=t.rb[t.sb-1];e.la=0,e.Na=0,i(t.zc,0,0,t.zc.length),t.ja=0}function Qt(t,r){if(null==t)return 0;if(null==r)return Jt(t,2,"NULL VP8Io parameter in VP8Decode().");if(!t.cb&&!Kt(t,r))return 0;if(e(t.cb),null==r.ac||r.ac(r)){r.ob&&(t.L=0);var s=Ti[t.L];if(2==t.L?(t.yb=0,t.zb=0):(t.yb=r.v-s>>4,t.zb=r.j-s>>4,0>t.yb&&(t.yb=0),0>t.zb&&(t.zb=0)),t.Va=r.o+15+s>>4,t.Hb=r.va+15+s>>4,t.Hb>t.za&&(t.Hb=t.za),t.Va>t.Ub&&(t.Va=t.Ub),0<t.L){var u=t.ed;for(s=0;4>s;++s){var c;if(t.Qa.Cb){var l=t.Qa.Lb[s];t.Qa.Fb||(l+=u.Tb)}else l=u.Tb;for(c=0;1>=c;++c){var h=t.gd[s][c],f=l;if(u.Pc&&(f+=u.vd[0],c&&(f+=u.od[0])),0<(f=0>f?0:63<f?63:f)){var d=f;0<u.wb&&((d=4<u.wb?d>>2:d>>1)>9-u.wb&&(d=9-u.wb)),1>d&&(d=1),h.dd=d,h.tc=2*f+d,h.ld=40<=f?2:15<=f?1:0}else h.tc=0;h.La=c}}}s=0}else Jt(t,6,"Frame setup failed"),s=t.a;if(s=0==s){if(s){t.$c=0,0<t.Aa||(t.Ic=Ui);t:{s=t.Ic;u=4*(d=t.za);var p=32*d,g=d+1,m=0<t.L?d*(0<t.Aa?2:1):0,v=(2==t.Aa?2:1)*d;if((h=u+832+(c=3*(16*s+Ti[t.L])/2*p)+(l=null!=t.Fa&&0<t.Fa.length?t.Kc.c*t.Kc.i:0))!=h)s=0;else{if(h>t.Vb){if(t.Vb=0,t.Ec=a(h),t.Fc=0,null==t.Ec){s=Jt(t,1,"no memory during frame initialization.");break t}t.Vb=h}h=t.Ec,f=t.Fc,t.Ac=h,t.Bc=f,f+=u,t.Gd=o(p,Ht),t.Hd=0,t.rb=o(g+1,Tt),t.sb=1,t.wa=m?o(m,Rt):null,t.Y=0,t.D.Nb=0,t.D.wa=t.wa,t.D.Y=t.Y,0<t.Aa&&(t.D.Y+=d),e(!0),t.oc=h,t.pc=f,f+=832,t.ya=o(v,Ut),t.aa=0,t.D.ya=t.ya,t.D.aa=t.aa,2==t.Aa&&(t.D.aa+=d),t.R=16*d,t.B=8*d,d=(p=Ti[t.L])*t.R,p=p/2*t.B,t.sa=h,t.ta=f+d,t.qa=t.sa,t.ra=t.ta+16*s*t.R+p,t.Ha=t.qa,t.Ia=t.ra+8*s*t.B+p,t.$c=0,f+=c,t.mb=l?h:null,t.nb=l?f:null,e(f+l<=t.Fc+t.Vb),$t(t),i(t.Ac,t.Bc,0,u),s=1}}if(s){if(r.ka=0,r.y=t.sa,r.O=t.ta,r.f=t.qa,r.N=t.ra,r.ea=t.Ha,r.Vd=t.Ia,r.fa=t.R,r.Rc=t.B,r.F=null,r.J=0,!Cn){for(s=-255;255>=s;++s)Pn[255+s]=0>s?-s:s;for(s=-1020;1020>=s;++s)kn[1020+s]=-128>s?-128:127<s?127:s;for(s=-112;112>=s;++s)In[112+s]=-16>s?-16:15<s?15:s;for(s=-255;510>=s;++s)Fn[255+s]=0>s?0:255<s?255:s;Cn=1}an=ce,on=ae,un=oe,cn=se,ln=ue,sn=ie,hn=Je,fn=Xe,dn=$e,pn=Qe,gn=Ke,mn=Ze,vn=tr,bn=er,yn=ze,wn=He,Nn=Ve,Ln=We,fi[0]=xe,fi[1]=he,fi[2]=Le,fi[3]=Ae,fi[4]=Se,fi[5]=Pe,fi[6]=_e,fi[7]=ke,fi[8]=Fe,fi[9]=Ie,hi[0]=ve,hi[1]=de,hi[2]=pe,hi[3]=ge,hi[4]=be,hi[5]=ye,hi[6]=we,di[0]=Be,di[1]=fe,di[2]=Ce,di[3]=je,di[4]=Ee,di[5]=Me,di[6]=qe,s=1}else s=0}s&&(s=function(t,r){for(t.M=0;t.M<t.Va;++t.M){var o,s=t.Jc[t.M&t.Xb],u=t.m,c=t;for(o=0;o<c.za;++o){var l=u,h=c,f=h.Ac,d=h.Bc+4*o,p=h.zc,g=h.ya[h.aa+o];if(h.Qa.Bb?g.$b=k(l,h.Pa.jb[0])?2+k(l,h.Pa.jb[2]):k(l,h.Pa.jb[1]):g.$b=0,h.kc&&(g.Ad=k(l,h.Bd)),g.Za=!k(l,145)+0,g.Za){var m=g.Ob,v=0;for(h=0;4>h;++h){var b,y=p[0+h];for(b=0;4>b;++b){y=ui[f[d+b]][y];for(var w=oi[k(l,y[0])];0<w;)w=oi[2*w+k(l,y[w])];y=-w,f[d+b]=y}n(m,v,f,d,4),v+=4,p[0+h]=y}}else y=k(l,156)?k(l,128)?1:3:k(l,163)?2:0,g.Ob[0]=y,i(f,d,y,4),i(p,0,y,4);g.Dd=k(l,142)?k(l,114)?k(l,183)?1:3:2:0}if(c.m.Ka)return Jt(t,7,"Premature end-of-partition0 encountered.");for(;t.ja<t.za;++t.ja){if(c=s,l=(u=t).rb[u.sb-1],f=u.rb[u.sb+u.ja],o=u.ya[u.aa+u.ja],d=u.kc?o.Ad:0)l.la=f.la=0,o.Za||(l.Na=f.Na=0),o.Hc=0,o.Gc=0,o.ia=0;else{var N,L;l=f,f=c,d=u.Pa.Xc,p=u.ya[u.aa+u.ja],g=u.pb[p.$b];if(h=p.ad,m=0,v=u.rb[u.sb-1],y=b=0,i(h,m,0,384),p.Za)var A=0,x=d[3];else{w=a(16);var S=l.Na+v.Na;if(S=ni(f,d[1],S,g.Eb,0,w,0),l.Na=v.Na=(0<S)+0,1<S)an(w,0,h,m);else{var _=w[0]+3>>3;for(w=0;256>w;w+=16)h[m+w]=_}A=1,x=d[0]}var P=15&l.la,I=15&v.la;for(w=0;4>w;++w){var F=1&I;for(_=L=0;4>_;++_)P=P>>1|(F=(S=ni(f,x,S=F+(1&P),g.Sc,A,h,m))>A)<<7,L=L<<2|(3<S?3:1<S?2:0!=h[m+0]),m+=16;P>>=4,I=I>>1|F<<7,b=(b<<8|L)>>>0}for(x=P,A=I>>4,N=0;4>N;N+=2){for(L=0,P=l.la>>4+N,I=v.la>>4+N,w=0;2>w;++w){for(F=1&I,_=0;2>_;++_)S=F+(1&P),P=P>>1|(F=0<(S=ni(f,d[2],S,g.Qc,0,h,m)))<<3,L=L<<2|(3<S?3:1<S?2:0!=h[m+0]),m+=16;P>>=2,I=I>>1|F<<5}y|=L<<4*N,x|=P<<4<<N,A|=(240&I)<<N}l.la=x,v.la=A,p.Hc=b,p.Gc=y,p.ia=43690&y?0:g.ia,d=!(b|y)}if(0<u.L&&(u.wa[u.Y+u.ja]=u.gd[o.$b][o.Za],u.wa[u.Y+u.ja].La|=!d),c.Ka)return Jt(t,7,"Premature end-of-file encountered.")}if($t(t),u=r,c=1,o=(s=t).D,l=0<s.L&&s.M>=s.zb&&s.M<=s.Va,0==s.Aa)t:{if(o.M=s.M,o.uc=l,Or(s,o),c=1,o=(L=s.D).Nb,l=(y=Ti[s.L])*s.R,f=y/2*s.B,w=16*o*s.R,_=8*o*s.B,d=s.sa,p=s.ta-l+w,g=s.qa,h=s.ra-f+_,m=s.Ha,v=s.Ia-f+_,I=0==(P=L.M),b=P>=s.Va-1,2==s.Aa&&Or(s,L),L.uc)for(F=(S=s).D.M,e(S.D.uc),L=S.yb;L<S.Hb;++L){A=L,x=F;var C=(j=(U=S).D).Nb;N=U.R;var j=j.wa[j.Y+A],O=U.sa,B=U.ta+16*C*N+16*A,M=j.dd,E=j.tc;if(0!=E)if(e(3<=E),1==U.L)0<A&&wn(O,B,N,E+4),j.La&&Ln(O,B,N,E),0<x&&yn(O,B,N,E+4),j.La&&Nn(O,B,N,E);else{var q=U.B,R=U.qa,T=U.ra+8*C*q+8*A,D=U.Ha,U=U.Ia+8*C*q+8*A;C=j.ld;0<A&&(fn(O,B,N,E+4,M,C),pn(R,T,D,U,q,E+4,M,C)),j.La&&(mn(O,B,N,E,M,C),bn(R,T,D,U,q,E,M,C)),0<x&&(hn(O,B,N,E+4,M,C),dn(R,T,D,U,q,E+4,M,C)),j.La&&(gn(O,B,N,E,M,C),vn(R,T,D,U,q,E,M,C))}}if(s.ia&&alert("todo:DitherRow"),null!=u.put){if(L=16*P,P=16*(P+1),I?(u.y=s.sa,u.O=s.ta+w,u.f=s.qa,u.N=s.ra+_,u.ea=s.Ha,u.W=s.Ia+_):(L-=y,u.y=d,u.O=p,u.f=g,u.N=h,u.ea=m,u.W=v),b||(P-=y),P>u.o&&(P=u.o),u.F=null,u.J=null,null!=s.Fa&&0<s.Fa.length&&L<P&&(u.J=hr(s,u,L,P-L),u.F=s.mb,null==u.F&&0==u.F.length)){c=Jt(s,3,"Could not decode alpha data.");break t}L<u.j&&(y=u.j-L,L=u.j,e(!(1&y)),u.O+=s.R*y,u.N+=s.B*(y>>1),u.W+=s.B*(y>>1),null!=u.F&&(u.J+=u.width*y)),L<P&&(u.O+=u.v,u.N+=u.v>>1,u.W+=u.v>>1,null!=u.F&&(u.J+=u.v),u.ka=L-u.j,u.U=u.va-u.v,u.T=P-L,c=u.put(u))}o+1!=s.Ic||b||(n(s.sa,s.ta-l,d,p+16*s.R,l),n(s.qa,s.ra-f,g,h+8*s.B,f),n(s.Ha,s.Ia-f,m,v+8*s.B,f))}if(!c)return Jt(t,6,"Output aborted.")}return 1}(t,r)),null!=r.bc&&r.bc(r),s&=1}return s?(t.cb=0,s):0}function te(t,e,r,n,i){i=t[e+r+32*n]+(i>>3),t[e+r+32*n]=-256&i?0>i?0:255:i}function ee(t,e,r,n,i,a){te(t,e,0,r,n+i),te(t,e,1,r,n+a),te(t,e,2,r,n-a),te(t,e,3,r,n-i)}function re(t){return(20091*t>>16)+t}function ne(t,e,r,n){var i,o=0,s=a(16);for(i=0;4>i;++i){var u=t[e+0]+t[e+8],c=t[e+0]-t[e+8],l=(35468*t[e+4]>>16)-re(t[e+12]),h=re(t[e+4])+(35468*t[e+12]>>16);s[o+0]=u+h,s[o+1]=c+l,s[o+2]=c-l,s[o+3]=u-h,o+=4,e++}for(i=o=0;4>i;++i)u=(t=s[o+0]+4)+s[o+8],c=t-s[o+8],l=(35468*s[o+4]>>16)-re(s[o+12]),te(r,n,0,0,u+(h=re(s[o+4])+(35468*s[o+12]>>16))),te(r,n,1,0,c+l),te(r,n,2,0,c-l),te(r,n,3,0,u-h),o++,n+=32}function ie(t,e,r,n){var i=t[e+0]+4,a=35468*t[e+4]>>16,o=re(t[e+4]),s=35468*t[e+1]>>16;ee(r,n,0,i+o,t=re(t[e+1]),s),ee(r,n,1,i+a,t,s),ee(r,n,2,i-a,t,s),ee(r,n,3,i-o,t,s)}function ae(t,e,r,n,i){ne(t,e,r,n),i&&ne(t,e+16,r,n+4)}function oe(t,e,r,n){on(t,e+0,r,n,1),on(t,e+32,r,n+128,1)}function se(t,e,r,n){var i;for(t=t[e+0]+4,i=0;4>i;++i)for(e=0;4>e;++e)te(r,n,e,i,t)}function ue(t,e,r,n){t[e+0]&&cn(t,e+0,r,n),t[e+16]&&cn(t,e+16,r,n+4),t[e+32]&&cn(t,e+32,r,n+128),t[e+48]&&cn(t,e+48,r,n+128+4)}function ce(t,e,r,n){var i,o=a(16);for(i=0;4>i;++i){var s=t[e+0+i]+t[e+12+i],u=t[e+4+i]+t[e+8+i],c=t[e+4+i]-t[e+8+i],l=t[e+0+i]-t[e+12+i];o[0+i]=s+u,o[8+i]=s-u,o[4+i]=l+c,o[12+i]=l-c}for(i=0;4>i;++i)s=(t=o[0+4*i]+3)+o[3+4*i],u=o[1+4*i]+o[2+4*i],c=o[1+4*i]-o[2+4*i],l=t-o[3+4*i],r[n+0]=s+u>>3,r[n+16]=l+c>>3,r[n+32]=s-u>>3,r[n+48]=l-c>>3,n+=64}function le(t,e,r){var n,i=e-32,a=Bn,o=255-t[i-1];for(n=0;n<r;++n){var s,u=a,c=o+t[e-1];for(s=0;s<r;++s)t[e+s]=u[c+t[i+s]];e+=32}}function he(t,e){le(t,e,4)}function fe(t,e){le(t,e,8)}function de(t,e){le(t,e,16)}function pe(t,e){var r;for(r=0;16>r;++r)n(t,e+32*r,t,e-32,16)}function ge(t,e){var r;for(r=16;0<r;--r)i(t,e,t[e-1],16),e+=32}function me(t,e,r){var n;for(n=0;16>n;++n)i(e,r+32*n,t,16)}function ve(t,e){var r,n=16;for(r=0;16>r;++r)n+=t[e-1+32*r]+t[e+r-32];me(n>>5,t,e)}function be(t,e){var r,n=8;for(r=0;16>r;++r)n+=t[e-1+32*r];me(n>>4,t,e)}function ye(t,e){var r,n=8;for(r=0;16>r;++r)n+=t[e+r-32];me(n>>4,t,e)}function we(t,e){me(128,t,e)}function Ne(t,e,r){return t+2*e+r+2>>2}function Le(t,e){var r,i=e-32;i=new Uint8Array([Ne(t[i-1],t[i+0],t[i+1]),Ne(t[i+0],t[i+1],t[i+2]),Ne(t[i+1],t[i+2],t[i+3]),Ne(t[i+2],t[i+3],t[i+4])]);for(r=0;4>r;++r)n(t,e+32*r,i,0,i.length)}function Ae(t,e){var r=t[e-1],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96];I(t,e+0,16843009*Ne(t[e-1-32],r,n)),I(t,e+32,16843009*Ne(r,n,i)),I(t,e+64,16843009*Ne(n,i,a)),I(t,e+96,16843009*Ne(i,a,a))}function xe(t,e){var r,n=4;for(r=0;4>r;++r)n+=t[e+r-32]+t[e-1+32*r];for(n>>=3,r=0;4>r;++r)i(t,e+32*r,n,4)}function Se(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1-32],o=t[e+0-32],s=t[e+1-32],u=t[e+2-32],c=t[e+3-32];t[e+0+96]=Ne(n,i,t[e-1+96]),t[e+1+96]=t[e+0+64]=Ne(r,n,i),t[e+2+96]=t[e+1+64]=t[e+0+32]=Ne(a,r,n),t[e+3+96]=t[e+2+64]=t[e+1+32]=t[e+0+0]=Ne(o,a,r),t[e+3+64]=t[e+2+32]=t[e+1+0]=Ne(s,o,a),t[e+3+32]=t[e+2+0]=Ne(u,s,o),t[e+3+0]=Ne(c,u,s)}function _e(t,e){var r=t[e+1-32],n=t[e+2-32],i=t[e+3-32],a=t[e+4-32],o=t[e+5-32],s=t[e+6-32],u=t[e+7-32];t[e+0+0]=Ne(t[e+0-32],r,n),t[e+1+0]=t[e+0+32]=Ne(r,n,i),t[e+2+0]=t[e+1+32]=t[e+0+64]=Ne(n,i,a),t[e+3+0]=t[e+2+32]=t[e+1+64]=t[e+0+96]=Ne(i,a,o),t[e+3+32]=t[e+2+64]=t[e+1+96]=Ne(a,o,s),t[e+3+64]=t[e+2+96]=Ne(o,s,u),t[e+3+96]=Ne(s,u,u)}function Pe(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1-32],o=t[e+0-32],s=t[e+1-32],u=t[e+2-32],c=t[e+3-32];t[e+0+0]=t[e+1+64]=a+o+1>>1,t[e+1+0]=t[e+2+64]=o+s+1>>1,t[e+2+0]=t[e+3+64]=s+u+1>>1,t[e+3+0]=u+c+1>>1,t[e+0+96]=Ne(i,n,r),t[e+0+64]=Ne(n,r,a),t[e+0+32]=t[e+1+96]=Ne(r,a,o),t[e+1+32]=t[e+2+96]=Ne(a,o,s),t[e+2+32]=t[e+3+96]=Ne(o,s,u),t[e+3+32]=Ne(s,u,c)}function ke(t,e){var r=t[e+0-32],n=t[e+1-32],i=t[e+2-32],a=t[e+3-32],o=t[e+4-32],s=t[e+5-32],u=t[e+6-32],c=t[e+7-32];t[e+0+0]=r+n+1>>1,t[e+1+0]=t[e+0+64]=n+i+1>>1,t[e+2+0]=t[e+1+64]=i+a+1>>1,t[e+3+0]=t[e+2+64]=a+o+1>>1,t[e+0+32]=Ne(r,n,i),t[e+1+32]=t[e+0+96]=Ne(n,i,a),t[e+2+32]=t[e+1+96]=Ne(i,a,o),t[e+3+32]=t[e+2+96]=Ne(a,o,s),t[e+3+64]=Ne(o,s,u),t[e+3+96]=Ne(s,u,c)}function Ie(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96];t[e+0+0]=r+n+1>>1,t[e+2+0]=t[e+0+32]=n+i+1>>1,t[e+2+32]=t[e+0+64]=i+a+1>>1,t[e+1+0]=Ne(r,n,i),t[e+3+0]=t[e+1+32]=Ne(n,i,a),t[e+3+32]=t[e+1+64]=Ne(i,a,a),t[e+3+64]=t[e+2+64]=t[e+0+96]=t[e+1+96]=t[e+2+96]=t[e+3+96]=a}function Fe(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96],o=t[e-1-32],s=t[e+0-32],u=t[e+1-32],c=t[e+2-32];t[e+0+0]=t[e+2+32]=r+o+1>>1,t[e+0+32]=t[e+2+64]=n+r+1>>1,t[e+0+64]=t[e+2+96]=i+n+1>>1,t[e+0+96]=a+i+1>>1,t[e+3+0]=Ne(s,u,c),t[e+2+0]=Ne(o,s,u),t[e+1+0]=t[e+3+32]=Ne(r,o,s),t[e+1+32]=t[e+3+64]=Ne(n,r,o),t[e+1+64]=t[e+3+96]=Ne(i,n,r),t[e+1+96]=Ne(a,i,n)}function Ce(t,e){var r;for(r=0;8>r;++r)n(t,e+32*r,t,e-32,8)}function je(t,e){var r;for(r=0;8>r;++r)i(t,e,t[e-1],8),e+=32}function Oe(t,e,r){var n;for(n=0;8>n;++n)i(e,r+32*n,t,8)}function Be(t,e){var r,n=8;for(r=0;8>r;++r)n+=t[e+r-32]+t[e-1+32*r];Oe(n>>4,t,e)}function Me(t,e){var r,n=4;for(r=0;8>r;++r)n+=t[e+r-32];Oe(n>>3,t,e)}function Ee(t,e){var r,n=4;for(r=0;8>r;++r)n+=t[e-1+32*r];Oe(n>>3,t,e)}function qe(t,e){Oe(128,t,e)}function Re(t,e,r){var n=t[e-r],i=t[e+0],a=3*(i-n)+jn[1020+t[e-2*r]-t[e+r]],o=On[112+(a+4>>3)];t[e-r]=Bn[255+n+On[112+(a+3>>3)]],t[e+0]=Bn[255+i-o]}function Te(t,e,r,n){var i=t[e+0],a=t[e+r];return Mn[255+t[e-2*r]-t[e-r]]>n||Mn[255+a-i]>n}function De(t,e,r,n){return 4*Mn[255+t[e-r]-t[e+0]]+Mn[255+t[e-2*r]-t[e+r]]<=n}function Ue(t,e,r,n,i){var a=t[e-3*r],o=t[e-2*r],s=t[e-r],u=t[e+0],c=t[e+r],l=t[e+2*r],h=t[e+3*r];return 4*Mn[255+s-u]+Mn[255+o-c]>n?0:Mn[255+t[e-4*r]-a]<=i&&Mn[255+a-o]<=i&&Mn[255+o-s]<=i&&Mn[255+h-l]<=i&&Mn[255+l-c]<=i&&Mn[255+c-u]<=i}function ze(t,e,r,n){var i=2*n+1;for(n=0;16>n;++n)De(t,e+n,r,i)&&Re(t,e+n,r)}function He(t,e,r,n){var i=2*n+1;for(n=0;16>n;++n)De(t,e+n*r,1,i)&&Re(t,e+n*r,1)}function Ve(t,e,r,n){var i;for(i=3;0<i;--i)ze(t,e+=4*r,r,n)}function We(t,e,r,n){var i;for(i=3;0<i;--i)He(t,e+=4,r,n)}function Ge(t,e,r,n,i,a,o,s){for(a=2*a+1;0<i--;){if(Ue(t,e,r,a,o))if(Te(t,e,r,s))Re(t,e,r);else{var u=t,c=e,l=r,h=u[c-2*l],f=u[c-l],d=u[c+0],p=u[c+l],g=u[c+2*l],m=27*(b=jn[1020+3*(d-f)+jn[1020+h-p]])+63>>7,v=18*b+63>>7,b=9*b+63>>7;u[c-3*l]=Bn[255+u[c-3*l]+b],u[c-2*l]=Bn[255+h+v],u[c-l]=Bn[255+f+m],u[c+0]=Bn[255+d-m],u[c+l]=Bn[255+p-v],u[c+2*l]=Bn[255+g-b]}e+=n}}function Ye(t,e,r,n,i,a,o,s){for(a=2*a+1;0<i--;){if(Ue(t,e,r,a,o))if(Te(t,e,r,s))Re(t,e,r);else{var u=t,c=e,l=r,h=u[c-l],f=u[c+0],d=u[c+l],p=On[112+((g=3*(f-h))+4>>3)],g=On[112+(g+3>>3)],m=p+1>>1;u[c-2*l]=Bn[255+u[c-2*l]+m],u[c-l]=Bn[255+h+g],u[c+0]=Bn[255+f-p],u[c+l]=Bn[255+d-m]}e+=n}}function Je(t,e,r,n,i,a){Ge(t,e,r,1,16,n,i,a)}function Xe(t,e,r,n,i,a){Ge(t,e,1,r,16,n,i,a)}function Ke(t,e,r,n,i,a){var o;for(o=3;0<o;--o)Ye(t,e+=4*r,r,1,16,n,i,a)}function Ze(t,e,r,n,i,a){var o;for(o=3;0<o;--o)Ye(t,e+=4,1,r,16,n,i,a)}function $e(t,e,r,n,i,a,o,s){Ge(t,e,i,1,8,a,o,s),Ge(r,n,i,1,8,a,o,s)}function Qe(t,e,r,n,i,a,o,s){Ge(t,e,1,i,8,a,o,s),Ge(r,n,1,i,8,a,o,s)}function tr(t,e,r,n,i,a,o,s){Ye(t,e+4*i,i,1,8,a,o,s),Ye(r,n+4*i,i,1,8,a,o,s)}function er(t,e,r,n,i,a,o,s){Ye(t,e+4,1,i,8,a,o,s),Ye(r,n+4,1,i,8,a,o,s)}function rr(){this.ba=new ot,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new ut,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function nr(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function ir(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function ar(){this.ua=0,this.Wa=new M,this.vb=new M,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new d,this.yc=new h}function or(){this.xb=this.a=0,this.l=new Gt,this.ca=new ot,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new N,this.Pb=0,this.wd=new N,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new ar,this.ab=0,this.gc=o(4,ir),this.Oc=0}function sr(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Gt,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function ur(t,e,r,n,i,a,o){for(t=null==t?0:t[e+0],e=0;e<o;++e)i[a+e]=t+r[n+e]&255,t=i[a+e]}function cr(t,e,r,n,i,a,o){var s;if(null==t)ur(null,null,r,n,i,a,o);else for(s=0;s<o;++s)i[a+s]=t[e+s]+r[n+s]&255}function lr(t,e,r,n,i,a,o){if(null==t)ur(null,null,r,n,i,a,o);else{var s,u=t[e+0],c=u,l=u;for(s=0;s<o;++s)c=l+(u=t[e+s])-c,l=r[n+s]+(-256&c?0>c?0:255:c)&255,c=u,i[a+s]=l}}function hr(t,r,i,o){var s=r.width,u=r.o;if(e(null!=t&&null!=r),0>i||0>=o||i+o>u)return null;if(!t.Cc){if(null==t.ga){var c;if(t.ga=new sr,(c=null==t.ga)||(c=r.width*r.o,e(0==t.Gb.length),t.Gb=a(c),t.Uc=0,null==t.Gb?c=0:(t.mb=t.Gb,t.nb=t.Uc,t.rc=null,c=1),c=!c),!c){c=t.ga;var l=t.Fa,h=t.P,f=t.qc,d=t.mb,p=t.nb,g=h+1,m=f-1,b=c.l;if(e(null!=l&&null!=d&&null!=r),mi[0]=null,mi[1]=ur,mi[2]=cr,mi[3]=lr,c.ca=d,c.tb=p,c.c=r.width,c.i=r.height,e(0<c.c&&0<c.i),1>=f)r=0;else if(c.$a=l[h+0]>>0&3,c.Z=l[h+0]>>2&3,c.Lc=l[h+0]>>4&3,h=l[h+0]>>6&3,0>c.$a||1<c.$a||4<=c.Z||1<c.Lc||h)r=0;else if(b.put=dt,b.ac=ft,b.bc=pt,b.ma=c,b.width=r.width,b.height=r.height,b.Da=r.Da,b.v=r.v,b.va=r.va,b.j=r.j,b.o=r.o,c.$a)t:{e(1==c.$a),r=kt();e:for(;;){if(null==r){r=0;break t}if(e(null!=c),c.mc=r,r.c=c.c,r.i=c.i,r.l=c.l,r.l.ma=c,r.l.width=c.c,r.l.height=c.i,r.a=0,v(r.m,l,g,m),!It(c.c,c.i,1,r,null))break e;if(1==r.ab&&3==r.gc[0].hc&&At(r.s)?(c.ic=1,l=r.c*r.i,r.Ta=null,r.Ua=0,r.V=a(l),r.Ba=0,null==r.V?(r.a=1,r=0):r=1):(c.ic=0,r=Ft(r,c.c)),!r)break e;r=1;break t}c.mc=null,r=0}else r=m>=c.c*c.i;c=!r}if(c)return null;1!=t.ga.Lc?t.Ga=0:o=u-i}e(null!=t.ga),e(i+o<=u);t:{if(r=(l=t.ga).c,u=l.l.o,0==l.$a){if(g=t.rc,m=t.Vc,b=t.Fa,h=t.P+1+i*r,f=t.mb,d=t.nb+i*r,e(h<=t.P+t.qc),0!=l.Z)for(e(null!=mi[l.Z]),c=0;c<o;++c)mi[l.Z](g,m,b,h,f,d,r),g=f,m=d,d+=r,h+=r;else for(c=0;c<o;++c)n(f,d,b,h,r),g=f,m=d,d+=r,h+=r;t.rc=g,t.Vc=m}else{if(e(null!=l.mc),r=i+o,e(null!=(c=l.mc)),e(r<=c.i),c.C>=r)r=1;else if(l.ic||mr(),l.ic){l=c.V,g=c.Ba,m=c.c;var y=c.i,w=(b=1,h=c.$/m,f=c.$%m,d=c.m,p=c.s,c.$),N=m*y,L=m*r,x=p.wc,_=w<L?wt(p,f,h):null;e(w<=N),e(r<=y),e(At(p));e:for(;;){for(;!d.h&&w<L;){if(f&x||(_=wt(p,f,h)),e(null!=_),S(d),256>(y=bt(_.G[0],_.H[0],d)))l[g+w]=y,++w,++f>=m&&(f=0,++h<=r&&!(h%16)&&St(c,h));else{if(!(280>y)){b=0;break e}y=mt(y-256,d);var P,k=bt(_.G[4],_.H[4],d);if(S(d),!(w>=(k=vt(m,k=mt(k,d)))&&N-w>=y)){b=0;break e}for(P=0;P<y;++P)l[g+w+P]=l[g+w+P-k];for(w+=y,f+=y;f>=m;)f-=m,++h<=r&&!(h%16)&&St(c,h);w<L&&f&x&&(_=wt(p,f,h))}e(d.h==A(d))}St(c,h>r?r:h);break e}!b||d.h&&w<N?(b=0,c.a=d.h?5:3):c.$=w,r=b}else r=_t(c,c.V,c.Ba,c.c,c.i,r,Ct);if(!r){o=0;break t}}i+o>=u&&(t.Cc=1),o=1}if(!o)return null;if(t.Cc&&(null!=(o=t.ga)&&(o.mc=null),t.ga=null,0<t.Ga))return alert("todo:WebPDequantizeLevels"),null}return t.nb+i*s}function fr(t,e,r,n,i,a){for(;0<i--;){var o,s=t,u=e+(r?1:0),c=t,l=e+(r?0:3);for(o=0;o<n;++o){var h=c[l+4*o];255!=h&&(h*=32897,s[u+4*o+0]=s[u+4*o+0]*h>>23,s[u+4*o+1]=s[u+4*o+1]*h>>23,s[u+4*o+2]=s[u+4*o+2]*h>>23)}e+=a}}function dr(t,e,r,n,i){for(;0<n--;){var a;for(a=0;a<r;++a){var o=t[e+2*a+0],s=15&(c=t[e+2*a+1]),u=4369*s,c=(240&c|c>>4)*u>>16;t[e+2*a+0]=(240&o|o>>4)*u>>16&240|(15&o|o<<4)*u>>16>>4&15,t[e+2*a+1]=240&c|s}e+=i}}function pr(t,e,r,n,i,a,o,s){var u,c,l=255;for(c=0;c<i;++c){for(u=0;u<n;++u){var h=t[e+u];a[o+4*u]=h,l&=h}e+=r,o+=s}return 255!=l}function gr(t,e,r,n,i){var a;for(a=0;a<i;++a)r[n+a]=t[e+a]>>8}function mr(){An=fr,xn=dr,Sn=pr,_n=gr}function vr(r,n,i){t[r]=function(t,r,a,o,s,u,c,l,h,f,d,p,g,m,v,b,y){var w,N=y-1>>1,L=s[u+0]|c[l+0]<<16,A=h[f+0]|d[p+0]<<16;e(null!=t);var x=3*L+A+131074>>2;for(n(t[r+0],255&x,x>>16,g,m),null!=a&&(x=3*A+L+131074>>2,n(a[o+0],255&x,x>>16,v,b)),w=1;w<=N;++w){var S=s[u+w]|c[l+w]<<16,_=h[f+w]|d[p+w]<<16,P=L+S+A+_+524296,k=P+2*(S+A)>>3;x=k+L>>1,L=(P=P+2*(L+_)>>3)+S>>1,n(t[r+2*w-1],255&x,x>>16,g,m+(2*w-1)*i),n(t[r+2*w-0],255&L,L>>16,g,m+(2*w-0)*i),null!=a&&(x=P+A>>1,L=k+_>>1,n(a[o+2*w-1],255&x,x>>16,v,b+(2*w-1)*i),n(a[o+2*w+0],255&L,L>>16,v,b+(2*w+0)*i)),L=S,A=_}1&y||(x=3*L+A+131074>>2,n(t[r+y-1],255&x,x>>16,g,m+(y-1)*i),null!=a&&(x=3*A+L+131074>>2,n(a[o+y-1],255&x,x>>16,v,b+(y-1)*i)))}}function br(){vi[En]=bi,vi[qn]=wi,vi[Rn]=yi,vi[Tn]=Ni,vi[Dn]=Li,vi[Un]=Ai,vi[zn]=xi,vi[Hn]=wi,vi[Vn]=Ni,vi[Wn]=Li,vi[Gn]=Ai}function yr(t){return t&~Fi?0>t?0:255:t>>Ii}function wr(t,e){return yr((19077*t>>8)+(26149*e>>8)-14234)}function Nr(t,e,r){return yr((19077*t>>8)-(6419*e>>8)-(13320*r>>8)+8708)}function Lr(t,e){return yr((19077*t>>8)+(33050*e>>8)-17685)}function Ar(t,e,r,n,i){n[i+0]=wr(t,r),n[i+1]=Nr(t,e,r),n[i+2]=Lr(t,e)}function xr(t,e,r,n,i){n[i+0]=Lr(t,e),n[i+1]=Nr(t,e,r),n[i+2]=wr(t,r)}function Sr(t,e,r,n,i){var a=Nr(t,e,r);e=a<<3&224|Lr(t,e)>>3,n[i+0]=248&wr(t,r)|a>>5,n[i+1]=e}function _r(t,e,r,n,i){var a=240&Lr(t,e)|15;n[i+0]=240&wr(t,r)|Nr(t,e,r)>>4,n[i+1]=a}function Pr(t,e,r,n,i){n[i+0]=255,Ar(t,e,r,n,i+1)}function kr(t,e,r,n,i){xr(t,e,r,n,i),n[i+3]=255}function Ir(t,e,r,n,i){Ar(t,e,r,n,i),n[i+3]=255}function Wt(t,e){return 0>t?0:t>e?e:t}function Fr(e,r,n){t[e]=function(t,e,i,a,o,s,u,c,l){for(var h=c+(-2&l)*n;c!=h;)r(t[e+0],i[a+0],o[s+0],u,c),r(t[e+1],i[a+0],o[s+0],u,c+n),e+=2,++a,++s,c+=2*n;1&l&&r(t[e+0],i[a+0],o[s+0],u,c)}}function Cr(t,e,r){return 0==r?0==t?0==e?6:5:0==e?4:0:r}function jr(t,e,r,n,i){switch(t>>>30){case 3:on(e,r,n,i,0);break;case 2:sn(e,r,n,i);break;case 1:cn(e,r,n,i)}}function Or(t,e){var r,a,o=e.M,s=e.Nb,u=t.oc,c=t.pc+40,l=t.oc,h=t.pc+584,f=t.oc,d=t.pc+600;for(r=0;16>r;++r)u[c+32*r-1]=129;for(r=0;8>r;++r)l[h+32*r-1]=129,f[d+32*r-1]=129;for(0<o?u[c-1-32]=l[h-1-32]=f[d-1-32]=129:(i(u,c-32-1,127,21),i(l,h-32-1,127,9),i(f,d-32-1,127,9)),a=0;a<t.za;++a){var p=e.ya[e.aa+a];if(0<a){for(r=-1;16>r;++r)n(u,c+32*r-4,u,c+32*r+12,4);for(r=-1;8>r;++r)n(l,h+32*r-4,l,h+32*r+4,4),n(f,d+32*r-4,f,d+32*r+4,4)}var g=t.Gd,m=t.Hd+a,v=p.ad,b=p.Hc;if(0<o&&(n(u,c-32,g[m].y,0,16),n(l,h-32,g[m].f,0,8),n(f,d-32,g[m].ea,0,8)),p.Za){var y=u,w=c-32+16;for(0<o&&(a>=t.za-1?i(y,w,g[m].y[15],4):n(y,w,g[m+1].y,0,4)),r=0;4>r;r++)y[w+128+r]=y[w+256+r]=y[w+384+r]=y[w+0+r];for(r=0;16>r;++r,b<<=2)y=u,w=c+Ri[r],fi[p.Ob[r]](y,w),jr(b,v,16*+r,y,w)}else if(y=Cr(a,o,p.Ob[0]),hi[y](u,c),0!=b)for(r=0;16>r;++r,b<<=2)jr(b,v,16*+r,u,c+Ri[r]);for(r=p.Gc,y=Cr(a,o,p.Dd),di[y](l,h),di[y](f,d),b=v,y=l,w=h,255&(p=r>>0)&&(170&p?un(b,256,y,w):ln(b,256,y,w)),p=f,b=d,255&(r>>=8)&&(170&r?un(v,320,p,b):ln(v,320,p,b)),o<t.Ub-1&&(n(g[m].y,0,u,c+480,16),n(g[m].f,0,l,h+224,8),n(g[m].ea,0,f,d+224,8)),r=8*s*t.B,g=t.sa,m=t.ta+16*a+16*s*t.R,v=t.qa,p=t.ra+8*a+r,b=t.Ha,y=t.Ia+8*a+r,r=0;16>r;++r)n(g,m+r*t.R,u,c+32*r,16);for(r=0;8>r;++r)n(v,p+r*t.B,l,h+32*r,8),n(b,y+r*t.B,f,d+32*r,8)}}function Br(t,n,i,a,o,s,u,c,l){var h=[0],f=[0],d=0,p=null!=l?l.kd:0,g=null!=l?l:new nr;if(null==t||12>i)return 7;g.data=t,g.w=n,g.ha=i,n=[n],i=[i],g.gb=[g.gb];t:{var m=n,b=i,y=g.gb;if(e(null!=t),e(null!=b),e(null!=y),y[0]=0,12<=b[0]&&!r(t,m[0],"RIFF")){if(r(t,m[0]+8,"WEBP")){y=3;break t}var w=j(t,m[0]+4);if(12>w||4294967286<w){y=3;break t}if(p&&w>b[0]-8){y=7;break t}y[0]=w,m[0]+=12,b[0]-=12}y=0}if(0!=y)return y;for(w=0<g.gb[0],i=i[0];;){t:{var L=t;b=n,y=i;var A=h,x=f,S=m=[0];if((k=d=[d])[0]=0,8>y[0])y=7;else{if(!r(L,b[0],"VP8X")){if(10!=j(L,b[0]+4)){y=3;break t}if(18>y[0]){y=7;break t}var _=j(L,b[0]+8),P=1+C(L,b[0]+12);if(2147483648<=P*(L=1+C(L,b[0]+15))){y=3;break t}null!=S&&(S[0]=_),null!=A&&(A[0]=P),null!=x&&(x[0]=L),b[0]+=18,y[0]-=18,k[0]=1}y=0}}if(d=d[0],m=m[0],0!=y)return y;if(b=!!(2&m),!w&&d)return 3;if(null!=s&&(s[0]=!!(16&m)),null!=u&&(u[0]=b),null!=c&&(c[0]=0),u=h[0],m=f[0],d&&b&&null==l){y=0;break}if(4>i){y=7;break}if(w&&d||!w&&!d&&!r(t,n[0],"ALPH")){i=[i],g.na=[g.na],g.P=[g.P],g.Sa=[g.Sa];t:{_=t,y=n,w=i;var k=g.gb;A=g.na,x=g.P,S=g.Sa;P=22,e(null!=_),e(null!=w),L=y[0];var I=w[0];for(e(null!=A),e(null!=S),A[0]=null,x[0]=null,S[0]=0;;){if(y[0]=L,w[0]=I,8>I){y=7;break t}var F=j(_,L+4);if(4294967286<F){y=3;break t}var O=8+F+1&-2;if(P+=O,0<k&&P>k){y=3;break t}if(!r(_,L,"VP8 ")||!r(_,L,"VP8L")){y=0;break t}if(I[0]<O){y=7;break t}r(_,L,"ALPH")||(A[0]=_,x[0]=L+8,S[0]=F),L+=O,I-=O}}if(i=i[0],g.na=g.na[0],g.P=g.P[0],g.Sa=g.Sa[0],0!=y)break}i=[i],g.Ja=[g.Ja],g.xa=[g.xa];t:if(k=t,y=n,w=i,A=g.gb[0],x=g.Ja,S=g.xa,_=y[0],L=!r(k,_,"VP8 "),P=!r(k,_,"VP8L"),e(null!=k),e(null!=w),e(null!=x),e(null!=S),8>w[0])y=7;else{if(L||P){if(k=j(k,_+4),12<=A&&k>A-12){y=3;break t}if(p&&k>w[0]-8){y=7;break t}x[0]=k,y[0]+=8,w[0]-=8,S[0]=P}else S[0]=5<=w[0]&&47==k[_+0]&&!(k[_+4]>>5),x[0]=w[0];y=0}if(i=i[0],g.Ja=g.Ja[0],g.xa=g.xa[0],n=n[0],0!=y)break;if(4294967286<g.Ja)return 3;if(null==c||b||(c[0]=g.xa?2:1),u=[u],m=[m],g.xa){if(5>i){y=7;break}c=u,p=m,b=s,null==t||5>i?t=0:5<=i&&47==t[n+0]&&!(t[n+4]>>5)?(w=[0],k=[0],A=[0],v(x=new N,t,n,i),gt(x,w,k,A)?(null!=c&&(c[0]=w[0]),null!=p&&(p[0]=k[0]),null!=b&&(b[0]=A[0]),t=1):t=0):t=0}else{if(10>i){y=7;break}c=m,null==t||10>i||!Xt(t,n+3,i-3)?t=0:(p=t[n+0]|t[n+1]<<8|t[n+2]<<16,b=16383&(t[n+7]<<8|t[n+6]),t=16383&(t[n+9]<<8|t[n+8]),1&p||3<(p>>1&7)||!(p>>4&1)||p>>5>=g.Ja||!b||!t?t=0:(u&&(u[0]=b),c&&(c[0]=t),t=1))}if(!t)return 3;if(u=u[0],m=m[0],d&&(h[0]!=u||f[0]!=m))return 3;null!=l&&(l[0]=g,l.offset=n-l.w,e(4294967286>n-l.w),e(l.offset==l.ha-i));break}return 0==y||7==y&&d&&null==l?(null!=s&&(s[0]|=null!=g.na&&0<g.na.length),null!=a&&(a[0]=u),null!=o&&(o[0]=m),0):y}function Mr(t,e,r){var n=e.width,i=e.height,a=0,o=0,s=n,u=i;if(e.Da=null!=t&&0<t.Da,e.Da&&(s=t.cd,u=t.bd,a=t.v,o=t.j,11>r||(a&=-2,o&=-2),0>a||0>o||0>=s||0>=u||a+s>n||o+u>i))return 0;if(e.v=a,e.j=o,e.va=a+s,e.o=o+u,e.U=s,e.T=u,e.da=null!=t&&0<t.da,e.da){if(!E(s,u,r=[t.ib],a=[t.hb]))return 0;e.ib=r[0],e.hb=a[0]}return e.ob=null!=t&&t.ob,e.Kb=null==t||!t.Sd,e.da&&(e.ob=e.ib<3*n/4&&e.hb<3*i/4,e.Kb=0),1}function Er(t){if(null==t)return 2;if(11>t.S){var e=t.f.RGBA;e.fb+=(t.height-1)*e.A,e.A=-e.A}else e=t.f.kb,t=t.height,e.O+=(t-1)*e.fa,e.fa=-e.fa,e.N+=(t-1>>1)*e.Ab,e.Ab=-e.Ab,e.W+=(t-1>>1)*e.Db,e.Db=-e.Db,null!=e.F&&(e.J+=(t-1)*e.lb,e.lb=-e.lb);return 0}function qr(t,e,r,n){if(null==n||0>=t||0>=e)return 2;if(null!=r){if(r.Da){var i=r.cd,o=r.bd,s=-2&r.v,u=-2&r.j;if(0>s||0>u||0>=i||0>=o||s+i>t||u+o>e)return 2;t=i,e=o}if(r.da){if(!E(t,e,i=[r.ib],o=[r.hb]))return 2;t=i[0],e=o[0]}}n.width=t,n.height=e;t:{var c=n.width,l=n.height;if(t=n.S,0>=c||0>=l||!(t>=En&&13>t))t=2;else{if(0>=n.Rd&&null==n.sd){s=o=i=e=0;var h=(u=c*zi[t])*l;if(11>t||(o=(l+1)/2*(e=(c+1)/2),12==t&&(s=(i=c)*l)),null==(l=a(h+2*o+s))){t=1;break t}n.sd=l,11>t?((c=n.f.RGBA).eb=l,c.fb=0,c.A=u,c.size=h):((c=n.f.kb).y=l,c.O=0,c.fa=u,c.Fd=h,c.f=l,c.N=0+h,c.Ab=e,c.Cd=o,c.ea=l,c.W=0+h+o,c.Db=e,c.Ed=o,12==t&&(c.F=l,c.J=0+h+2*o),c.Tc=s,c.lb=i)}if(e=1,i=n.S,o=n.width,s=n.height,i>=En&&13>i)if(11>i)t=n.f.RGBA,e&=(u=Math.abs(t.A))*(s-1)+o<=t.size,e&=u>=o*zi[i],e&=null!=t.eb;else{t=n.f.kb,u=(o+1)/2,h=(s+1)/2,c=Math.abs(t.fa);l=Math.abs(t.Ab);var f=Math.abs(t.Db),d=Math.abs(t.lb),p=d*(s-1)+o;e&=c*(s-1)+o<=t.Fd,e&=l*(h-1)+u<=t.Cd,e=(e&=f*(h-1)+u<=t.Ed)&c>=o&l>=u&f>=u,e&=null!=t.y,e&=null!=t.f,e&=null!=t.ea,12==i&&(e&=d>=o,e&=p<=t.Tc,e&=null!=t.F)}else e=0;t=e?0:2}}return 0!=t||null!=r&&r.fd&&(t=Er(n)),t}var Rr=64,Tr=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Dr=24,Ur=32,zr=8,Hr=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];T("Predictor0","PredictorAdd0"),t.Predictor0=function(){return 4278190080},t.Predictor1=function(t){return t},t.Predictor2=function(t,e,r){return e[r+0]},t.Predictor3=function(t,e,r){return e[r+1]},t.Predictor4=function(t,e,r){return e[r-1]},t.Predictor5=function(t,e,r){return U(U(t,e[r+1]),e[r+0])},t.Predictor6=function(t,e,r){return U(t,e[r-1])},t.Predictor7=function(t,e,r){return U(t,e[r+0])},t.Predictor8=function(t,e,r){return U(e[r-1],e[r+0])},t.Predictor9=function(t,e,r){return U(e[r+0],e[r+1])},t.Predictor10=function(t,e,r){return U(U(t,e[r-1]),U(e[r+0],e[r+1]))},t.Predictor11=function(t,e,r){var n=e[r+0];return 0>=V(n>>24&255,t>>24&255,(e=e[r-1])>>24&255)+V(n>>16&255,t>>16&255,e>>16&255)+V(n>>8&255,t>>8&255,e>>8&255)+V(255&n,255&t,255&e)?n:t},t.Predictor12=function(t,e,r){var n=e[r+0];return(z((t>>24&255)+(n>>24&255)-((e=e[r-1])>>24&255))<<24|z((t>>16&255)+(n>>16&255)-(e>>16&255))<<16|z((t>>8&255)+(n>>8&255)-(e>>8&255))<<8|z((255&t)+(255&n)-(255&e)))>>>0},t.Predictor13=function(t,e,r){var n=e[r-1];return(H((t=U(t,e[r+0]))>>24&255,n>>24&255)<<24|H(t>>16&255,n>>16&255)<<16|H(t>>8&255,n>>8&255)<<8|H(t>>0&255,n>>0&255))>>>0};var Vr=t.PredictorAdd0;t.PredictorAdd1=W,T("Predictor2","PredictorAdd2"),T("Predictor3","PredictorAdd3"),T("Predictor4","PredictorAdd4"),T("Predictor5","PredictorAdd5"),T("Predictor6","PredictorAdd6"),T("Predictor7","PredictorAdd7"),T("Predictor8","PredictorAdd8"),T("Predictor9","PredictorAdd9"),T("Predictor10","PredictorAdd10"),T("Predictor11","PredictorAdd11"),T("Predictor12","PredictorAdd12"),T("Predictor13","PredictorAdd13");var Wr=t.PredictorAdd2;X("ColorIndexInverseTransform","MapARGB","32b",(function(t){return t>>8&255}),(function(t){return t})),X("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",(function(t){return t}),(function(t){return t>>8&255}));var Gr,Yr=t.ColorIndexInverseTransform,Jr=t.MapARGB,Xr=t.VP8LColorIndexInverseTransformAlpha,Kr=t.MapAlpha,Zr=t.VP8LPredictorsAdd=[];Zr.length=16,(t.VP8LPredictors=[]).length=16,(t.VP8LPredictorsAdd_C=[]).length=16,(t.VP8LPredictors_C=[]).length=16;var $r,Qr,tn,en,rn,nn,an,on,sn,un,cn,ln,hn,fn,dn,pn,gn,mn,vn,bn,yn,wn,Nn,Ln,An,xn,Sn,_n,Pn=a(511),kn=a(2041),In=a(225),Fn=a(767),Cn=0,jn=kn,On=In,Bn=Fn,Mn=Pn,En=0,qn=1,Rn=2,Tn=3,Dn=4,Un=5,zn=6,Hn=7,Vn=8,Wn=9,Gn=10,Yn=[2,3,7],Jn=[3,3,11],Xn=[280,256,256,256,40],Kn=[0,1,1,1,0],Zn=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],$n=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],Qn=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],ti=8,ei=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],ri=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],ni=null,ii=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],ai=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],oi=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],si=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],ui=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],ci=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],li=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],hi=[],fi=[],di=[],pi=1,gi=2,mi=[],vi=[];vr("UpsampleRgbLinePair",Ar,3),vr("UpsampleBgrLinePair",xr,3),vr("UpsampleRgbaLinePair",Ir,4),vr("UpsampleBgraLinePair",kr,4),vr("UpsampleArgbLinePair",Pr,4),vr("UpsampleRgba4444LinePair",_r,2),vr("UpsampleRgb565LinePair",Sr,2);var bi=t.UpsampleRgbLinePair,yi=t.UpsampleBgrLinePair,wi=t.UpsampleRgbaLinePair,Ni=t.UpsampleBgraLinePair,Li=t.UpsampleArgbLinePair,Ai=t.UpsampleRgba4444LinePair,xi=t.UpsampleRgb565LinePair,Si=16,_i=1<<Si-1,Pi=-227,ki=482,Ii=6,Fi=(256<<Ii)-1,Ci=0,ji=a(256),Oi=a(256),Bi=a(256),Mi=a(256),Ei=a(ki-Pi),qi=a(ki-Pi);Fr("YuvToRgbRow",Ar,3),Fr("YuvToBgrRow",xr,3),Fr("YuvToRgbaRow",Ir,4),Fr("YuvToBgraRow",kr,4),Fr("YuvToArgbRow",Pr,4),Fr("YuvToRgba4444Row",_r,2),Fr("YuvToRgb565Row",Sr,2);var Ri=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Ti=[0,2,8],Di=[8,7,6,4,4,2,2,2,1,1,1,1],Ui=1;this.WebPDecodeRGBA=function(t,r,n,i,a){var o=qn,s=new rr,u=new ot;s.ba=u,u.S=o,u.width=[u.width],u.height=[u.height];var c=u.width,l=u.height,h=new st;if(null==h||null==t)var f=2;else e(null!=h),f=Br(t,r,n,h.width,h.height,h.Pd,h.Qd,h.format,null);if(0!=f?c=0:(null!=c&&(c[0]=h.width[0]),null!=l&&(l[0]=h.height[0]),c=1),c){u.width=u.width[0],u.height=u.height[0],null!=i&&(i[0]=u.width),null!=a&&(a[0]=u.height);t:{if(i=new Gt,(a=new nr).data=t,a.w=r,a.ha=n,a.kd=1,r=[0],e(null!=a),(0==(t=Br(a.data,a.w,a.ha,null,null,null,r,null,a))||7==t)&&r[0]&&(t=4),0==(r=t)){if(e(null!=s),i.data=a.data,i.w=a.w+a.offset,i.ha=a.ha-a.offset,i.put=dt,i.ac=ft,i.bc=pt,i.ma=s,a.xa){if(null==(t=kt())){s=1;break t}if(function(t,r){var n=[0],i=[0],a=[0];e:for(;;){if(null==t)return 0;if(null==r)return t.a=2,0;if(t.l=r,t.a=0,v(t.m,r.data,r.w,r.ha),!gt(t.m,n,i,a)){t.a=3;break e}if(t.xb=gi,r.width=n[0],r.height=i[0],!It(n[0],i[0],1,t,null))break e;return 1}return e(0!=t.a),0}(t,i)){if(i=0==(r=qr(i.width,i.height,s.Oa,s.ba))){e:{i=t;r:for(;;){if(null==i){i=0;break e}if(e(null!=i.s.yc),e(null!=i.s.Ya),e(0<i.s.Wb),e(null!=(n=i.l)),e(null!=(a=n.ma)),0!=i.xb){if(i.ca=a.ba,i.tb=a.tb,e(null!=i.ca),!Mr(a.Oa,n,Tn)){i.a=2;break r}if(!Ft(i,n.width))break r;if(n.da)break r;if((n.da||nt(i.ca.S))&&mr(),11>i.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),null!=i.ca.f.kb.F&&mr()),i.Pb&&0<i.s.ua&&null==i.s.vb.X&&!O(i.s.vb,i.s.Wa.Xa)){i.a=1;break r}i.xb=0}if(!_t(i,i.V,i.Ba,i.c,i.i,n.o,Lt))break r;a.Dc=i.Ma,i=1;break e}e(0!=i.a),i=0}i=!i}i&&(r=t.a)}else r=t.a}else{if(null==(t=new Yt)){s=1;break t}if(t.Fa=a.na,t.P=a.P,t.qc=a.Sa,Kt(t,i)){if(0==(r=qr(i.width,i.height,s.Oa,s.ba))){if(t.Aa=0,n=s.Oa,e(null!=(a=t)),null!=n){if(0<(c=0>(c=n.Md)?0:100<c?255:255*c/100)){for(l=h=0;4>l;++l)12>(f=a.pb[l]).lc&&(f.ia=c*Di[0>f.lc?0:f.lc]>>3),h|=f.ia;h&&(alert("todo:VP8InitRandom"),a.ia=1)}a.Ga=n.Id,100<a.Ga?a.Ga=100:0>a.Ga&&(a.Ga=0)}Qt(t,i)||(r=t.a)}}else r=t.a}0==r&&null!=s.Oa&&s.Oa.fd&&(r=Er(s.ba))}s=r}o=0!=s?null:11>o?u.f.RGBA.eb:u.f.kb.y}else o=null;return o};var zi=[3,4,3,4,4,2,2,4,4,4,2,1,1]});var h=[0],f=[0],d=[],p=new $t,g=t,m=function(t,e){var r={},n=0,i=!1,a=0,o=0;if(r.frames=[],!
/** @license
   * Copyright (c) 2017 Dominik Homberger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://webpjs.appspot.com
WebPRiffParser dominikhlbg@gmail.com
*/
function(t,e,r,n){for(var i=0;i<n;i++)if(t[e+i]!=r.charCodeAt(i))return!0;return!1}(t,e,"RIFF",4)){var s,h;l(t,e+=4);for(e+=8;e<t.length;){var f=u(t,e),d=l(t,e+=4);e+=4;var p=d+(1&d);switch(f){case"VP8 ":case"VP8L":void 0===r.frames[n]&&(r.frames[n]={});(v=r.frames[n]).src_off=i?o:e-8,v.src_size=a+d+8,n++,i&&(i=!1,a=0,o=0);break;case"VP8X":(v=r.header={}).feature_flags=t[e];var g=e+4;v.canvas_width=1+c(t,g);g+=3;v.canvas_height=1+c(t,g);g+=3;break;case"ALPH":i=!0,a=p+8,o=e-8;break;case"ANIM":(v=r.header).bgcolor=l(t,e);g=e+4;v.loop_count=(s=t)[(h=g)+0]<<0|s[h+1]<<8;g+=2;break;case"ANMF":var m,v;(v=r.frames[n]={}).offset_x=2*c(t,e),e+=3,v.offset_y=2*c(t,e),e+=3,v.width=1+c(t,e),e+=3,v.height=1+c(t,e),e+=3,v.duration=c(t,e),e+=3,m=t[e++],v.dispose=1&m,v.blend=m>>1&1}"ANMF"!=f&&(e+=p)}return r}}(g,0);m.response=g,m.rgbaoutput=!0,m.dataurl=!1;var v=m.header?m.header:null,b=m.frames?m.frames:null;if(v){v.loop_counter=v.loop_count,h=[v.canvas_height],f=[v.canvas_width];for(var y=0;y<b.length&&0!=b[y].blend;y++);}var w=b[0],N=p.WebPDecodeRGBA(g,w.src_off,w.src_size,f,h);w.rgba=N,w.imgwidth=f[0],w.imgheight=h[0];for(var L=0;L<f[0]*h[0]*4;L++)d[L]=N[L];return this.width=f,this.height=h,this.data=d,this}!function(e){var r=function(){return"function"==typeof fflate__WEBPACK_IMPORTED_MODULE_0__["zlibSync"]},n=function(r,n,a,l){var h=4,f=s;switch(l){case e.image_compression.FAST:h=1,f=o;break;case e.image_compression.MEDIUM:h=6,f=u;break;case e.image_compression.SLOW:h=9,f=c}r=i(r,n,a,f);var d=Object(fflate__WEBPACK_IMPORTED_MODULE_0__["zlibSync"])(r,{level:h});return e.__addimage__.arrayBufferToBinaryString(d)},i=function(t,e,r,n){for(var i,a,o,s=t.length/e,u=new Uint8Array(t.length+s),c=h(),l=0;l<s;l+=1){if(o=l*e,i=t.subarray(o,o+e),n)u.set(n(i,r,a),o+l);else{for(var d,p=c.length,g=[];d<p;d+=1)g[d]=c[d](i,r,a);var m=f(g.concat());u.set(g[m],o+l)}a=i}return u},a=function(t){var e=Array.apply([],t);return e.unshift(0),e},o=function(t,e){var r,n=[],i=t.length;n[0]=1;for(var a=0;a<i;a+=1)r=t[a-e]||0,n[a+1]=t[a]-r+256&255;return n},s=function(t,e,r){var n,i=[],a=t.length;i[0]=2;for(var o=0;o<a;o+=1)n=r&&r[o]||0,i[o+1]=t[o]-n+256&255;return i},u=function(t,e,r){var n,i,a=[],o=t.length;a[0]=3;for(var s=0;s<o;s+=1)n=t[s-e]||0,i=r&&r[s]||0,a[s+1]=t[s]+256-(n+i>>>1)&255;return a},c=function(t,e,r){var n,i,a,o,s=[],u=t.length;s[0]=4;for(var c=0;c<u;c+=1)n=t[c-e]||0,i=r&&r[c]||0,a=r&&r[c-e]||0,o=l(n,i,a),s[c+1]=t[c]-o+256&255;return s},l=function(t,e,r){if(t===e&&e===r)return t;var n=Math.abs(e-r),i=Math.abs(t-r),a=Math.abs(t+e-r-r);return n<=i&&n<=a?t:i<=a?e:r},h=function(){return[a,o,s,u,c]},f=function(t){var e=t.map((function(t){return t.reduce((function(t,e){return t+Math.abs(e)}),0)}));return e.indexOf(Math.min.apply(null,e))};e.processPNG=function(t,i,a,o){var s,u,c,l,h,f,d,p,g,m,v,b,y,w,N,L=this.decode.FLATE_DECODE,A="";if(this.__addimage__.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.__addimage__.isArrayBufferView(t)){if(t=(c=new Yt(t)).imgData,u=c.bits,s=c.colorSpace,h=c.colors,-1!==[4,6].indexOf(c.colorType)){if(8===c.bits){g=(p=32==c.pixelBitlength?new Uint32Array(c.decodePixels().buffer):16==c.pixelBitlength?new Uint16Array(c.decodePixels().buffer):new Uint8Array(c.decodePixels().buffer)).length,v=new Uint8Array(g*c.colors),m=new Uint8Array(g);var x,S=c.pixelBitlength-c.bits;for(w=0,N=0;w<g;w++){for(y=p[w],x=0;x<S;)v[N++]=y>>>x&255,x+=c.bits;m[w]=y>>>x&255}}if(16===c.bits){g=(p=new Uint32Array(c.decodePixels().buffer)).length,v=new Uint8Array(g*(32/c.pixelBitlength)*c.colors),m=new Uint8Array(g*(32/c.pixelBitlength)),b=c.colors>1,w=0,N=0;for(var _=0;w<g;)y=p[w++],v[N++]=y>>>0&255,b&&(v[N++]=y>>>16&255,y=p[w++],v[N++]=y>>>0&255),m[_++]=y>>>16&255;u=8}o!==e.image_compression.NONE&&r()?(t=n(v,c.width*c.colors,c.colors,o),d=n(m,c.width,1,o)):(t=v,d=m,L=void 0)}if(3===c.colorType&&(s=this.color_spaces.INDEXED,f=c.palette,c.transparency.indexed)){var P=c.transparency.indexed,k=0;for(w=0,g=P.length;w<g;++w)k+=P[w];if((k/=255)===g-1&&-1!==P.indexOf(0))l=[P.indexOf(0)];else if(k!==g){for(p=c.decodePixels(),m=new Uint8Array(p.length),w=0,g=p.length;w<g;w++)m[w]=P[p[w]];d=n(m,c.width,1)}}var I=function(t){var r;switch(t){case e.image_compression.FAST:r=11;break;case e.image_compression.MEDIUM:r=13;break;case e.image_compression.SLOW:r=14;break;default:r=12}return r}(o);return L===this.decode.FLATE_DECODE&&(A="/Predictor "+I+" "),A+="/Colors "+h+" /BitsPerComponent "+u+" /Columns "+c.width,(this.__addimage__.isArrayBuffer(t)||this.__addimage__.isArrayBufferView(t))&&(t=this.__addimage__.arrayBufferToBinaryString(t)),(d&&this.__addimage__.isArrayBuffer(d)||this.__addimage__.isArrayBufferView(d))&&(d=this.__addimage__.arrayBufferToBinaryString(d)),{alias:a,data:t,index:i,filter:L,decodeParameters:A,transparency:l,palette:f,sMask:d,predictor:I,width:c.width,height:c.height,bitsPerComponent:u,colorSpace:s}}}}(O.API),function(t){t.processGIF89A=function(e,r,n,i){var a=new Jt(e),o=a.width,s=a.height,u=[];a.decodeAndBlitFrameRGBA(0,u);var c={data:u,width:o,height:s},l=new Kt(100).encode(c,100);return t.processJPEG.call(this,l,r,n,i)},t.processGIF87A=t.processGIF89A}(O.API),Zt.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[e]={red:i,green:n,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},Zt.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new Uint8Array(e),this[t]()}catch(t){i.log("bit decode error:"+t)}},Zt.prototype.bit1=function(){var t,e=Math.ceil(this.width/8),r=e%4;for(t=this.height-1;t>=0;t--){for(var n=this.bottom_up?t:this.height-1-t,i=0;i<e;i++)for(var a=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+8*i*4,s=0;s<8&&8*i+s<this.width;s++){var u=this.palette[a>>7-s&1];this.data[o+4*s]=u.blue,this.data[o+4*s+1]=u.green,this.data[o+4*s+2]=u.red,this.data[o+4*s+3]=255}0!==r&&(this.pos+=4-r)}},Zt.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),e=t%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,i=0;i<t;i++){var a=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+2*i*4,s=a>>4,u=15&a,c=this.palette[s];if(this.data[o]=c.blue,this.data[o+1]=c.green,this.data[o+2]=c.red,this.data[o+3]=255,2*i+1>=this.width)break;c=this.palette[u],this.data[o+4]=c.blue,this.data[o+4+1]=c.green,this.data[o+4+2]=c.red,this.data[o+4+3]=255}0!==e&&(this.pos+=4-e)}},Zt.prototype.bit8=function(){for(var t=this.width%4,e=this.height-1;e>=0;e--){for(var r=this.bottom_up?e:this.height-1-e,n=0;n<this.width;n++){var i=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+4*n;if(i<this.palette.length){var o=this.palette[i];this.data[a]=o.red,this.data[a+1]=o.green,this.data[a+2]=o.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}0!==t&&(this.pos+=4-t)}},Zt.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,i=0;i<this.width;i++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var o=(a&e)/e*255|0,s=(a>>5&e)/e*255|0,u=(a>>10&e)/e*255|0,c=a>>15?255:0,l=n*this.width*4+4*i;this.data[l]=u,this.data[l+1]=s,this.data[l+2]=o,this.data[l+3]=c}this.pos+=t}},Zt.prototype.bit16=function(){for(var t=this.width%3,e=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var i=this.bottom_up?n:this.height-1-n,a=0;a<this.width;a++){var o=this.datav.getUint16(this.pos,!0);this.pos+=2;var s=(o&e)/e*255|0,u=(o>>5&r)/r*255|0,c=(o>>11)/e*255|0,l=i*this.width*4+4*a;this.data[l]=c,this.data[l+1]=u,this.data[l+2]=s,this.data[l+3]=255}this.pos+=t}},Zt.prototype.bit24=function(){for(var t=this.height-1;t>=0;t--){for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),o=e*this.width*4+4*r;this.data[o]=a,this.data[o+1]=i,this.data[o+2]=n,this.data[o+3]=255}this.pos+=this.width%4}},Zt.prototype.bit32=function(){for(var t=this.height-1;t>=0;t--)for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),s=e*this.width*4+4*r;this.data[s]=a,this.data[s+1]=i,this.data[s+2]=n,this.data[s+3]=o}},Zt.prototype.getData=function(){return this.data},
/**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.processBMP=function(e,r,n,i){var a=new Zt(e,!1),o=a.width,s=a.height,u={data:a.getData(),width:o,height:s},c=new Kt(100).encode(u,100);return t.processJPEG.call(this,c,r,n,i)}}(O.API),$t.prototype.getData=function(){return this.data},
/**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.processWEBP=function(e,r,n,i){var a=new $t(e,!1),o=a.width,s=a.height,u={data:a.getData(),width:o,height:s},c=new Kt(100).encode(u,100);return t.processJPEG.call(this,c,r,n,i)}}(O.API),O.API.setLanguage=function(t){return void 0===this.internal.languageSettings&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),void 0!=={af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"FYRO Macedonian",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[t]&&(this.internal.languageSettings.languageCode=t,!1===this.internal.languageSettings.isSubscribed&&(this.internal.events.subscribe("putCatalog",(function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")})),this.internal.languageSettings.isSubscribed=!0)),this},
/** @license
 * MIT license.
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Diego Casorran, https://github.com/diegocr
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
zt=O.API,Ht=zt.getCharWidthsArray=function(t,e){var r,n,i=(e=e||{}).font||this.internal.getFont(),a=e.fontSize||this.internal.getFontSize(),o=e.charSpace||this.internal.getCharSpace(),s=e.widths?e.widths:i.metadata.Unicode.widths,u=s.fof?s.fof:1,c=e.kerning?e.kerning:i.metadata.Unicode.kerning,l=c.fof?c.fof:1,h=!1!==e.doKerning,f=0,d=t.length,p=0,g=s[0]||u,m=[];for(r=0;r<d;r++)n=t.charCodeAt(r),"function"==typeof i.metadata.widthOfString?m.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(n))+o*(1e3/a)||0)/1e3):(f=h&&"object"==typeof c[n]&&!isNaN(parseInt(c[n][p],10))?c[n][p]/l:0,m.push((s[n]||g)/u+f)),p=n;return m},Vt=zt.getStringUnitWidth=function(t,e){var r=(e=e||{}).fontSize||this.internal.getFontSize(),n=e.font||this.internal.getFont(),i=e.charSpace||this.internal.getCharSpace();return zt.processArabic&&(t=zt.processArabic(t)),"function"==typeof n.metadata.widthOfString?n.metadata.widthOfString(t,r,i)/r:Ht.apply(this,arguments).reduce((function(t,e){return t+e}),0)},Wt=function(t,e,r,n){for(var i=[],a=0,o=t.length,s=0;a!==o&&s+e[a]<r;)s+=e[a],a++;i.push(t.slice(0,a));var u=a;for(s=0;a!==o;)s+e[a]>n&&(i.push(t.slice(u,a)),s=0,u=a),s+=e[a],a++;return u!==a&&i.push(t.slice(u,a)),i},Gt=function(t,e,r){r||(r={});var n,i,a,o,s,u,c,l=[],h=[l],f=r.textIndent||0,d=0,p=0,g=t.split(" "),m=Ht.apply(this,[" ",r])[0];if(u=-1===r.lineIndent?g[0].length+2:r.lineIndent||0){var v=Array(u).join(" "),b=[];g.map((function(t){(t=t.split(/\s*\n/)).length>1?b=b.concat(t.map((function(t,e){return(e&&t.length?"\n":"")+t}))):b.push(t[0])})),g=b,u=Vt.apply(this,[v,r])}for(a=0,o=g.length;a<o;a++){var y=0;if(n=g[a],u&&"\n"==n[0]&&(n=n.substr(1),y=1),f+d+(p=(i=Ht.apply(this,[n,r])).reduce((function(t,e){return t+e}),0))>e||y){if(p>e){for(s=Wt.apply(this,[n,i,e-(f+d),e]),l.push(s.shift()),l=[s.pop()];s.length;)h.push([s.shift()]);p=i.slice(n.length-(l[0]?l[0].length:0)).reduce((function(t,e){return t+e}),0)}else l=[n];h.push(l),f=p+u,d=m}else l.push(n),f+=d+p,d=m}return c=u?function(t,e){return(e?v:"")+t.join(" ")}:function(t){return t.join(" ")},h.map(c)},zt.splitTextToSize=function(t,e,r){var n,i=(r=r||{}).fontSize||this.internal.getFontSize(),a=function(t){if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var e=this.internal.getFont(t.fontName,t.fontStyle);return e.metadata.Unicode?{widths:e.metadata.Unicode.widths||{0:1},kerning:e.metadata.Unicode.kerning||{}}:{font:e.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}.call(this,r);n=Array.isArray(t)?t:String(t).split(/\r?\n/);var o=1*this.internal.scaleFactor*e/i;a.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/i:0,a.lineIndent=r.lineIndent;var s,u,c=[];for(s=0,u=n.length;s<u;s++)c=c.concat(Gt.apply(this,[n[s],o,a]));return c},
/** @license
 jsPDF standard_fonts_metrics plugin
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 * MIT license.
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){t.__fontmetrics__=t.__fontmetrics__||{};for(var e="klmnopqrstuvwxyz",r={},n={},i=0;i<e.length;i++)r[e[i]]="0123456789abcdef"[i],n["0123456789abcdef"[i]]=e[i];var a=function(t){return"0x"+parseInt(t,10).toString(16)},o=t.__fontmetrics__.compress=function(t){var e,r,i,s,u=["{"];for(var c in t){if(e=t[c],isNaN(parseInt(c,10))?r="'"+c+"'":(c=parseInt(c,10),r=(r=a(c).slice(2)).slice(0,-1)+n[r.slice(-1)]),"number"==typeof e)e<0?(i=a(e).slice(3),s="-"):(i=a(e).slice(2),s=""),i=s+i.slice(0,-1)+n[i.slice(-1)];else{if("object"!=typeof e)throw new Error("Don't know what to do with value type "+typeof e+".");i=o(e)}u.push(r+i)}return u.push("}"),u.join("")},s=t.__fontmetrics__.uncompress=function(t){if("string"!=typeof t)throw new Error("Invalid argument passed to uncompress.");for(var e,n,i,a,o={},s=1,u=o,c=[],l="",h="",f=t.length-1,d=1;d<f;d+=1)"'"==(a=t[d])?e?(i=e.join(""),e=void 0):e=[]:e?e.push(a):"{"==a?(c.push([u,i]),u={},i=void 0):"}"==a?((n=c.pop())[0][n[1]]=u,i=void 0,u=n[0]):"-"==a?s=-1:void 0===i?r.hasOwnProperty(a)?(l+=r[a],i=parseInt(l,16)*s,s=1,l=""):l+=a:r.hasOwnProperty(a)?(h+=r[a],u[i]=parseInt(h,16)*s,s=1,i=void 0,h=""):h+=a;return o},u={codePages:["WinAnsiEncoding"],WinAnsiEncoding:s("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},c={Unicode:{Courier:u,"Courier-Bold":u,"Courier-BoldOblique":u,"Courier-Oblique":u,Helvetica:u,"Helvetica-Bold":u,"Helvetica-BoldOblique":u,"Helvetica-Oblique":u,"Times-Roman":u,"Times-Bold":u,"Times-BoldItalic":u,"Times-Italic":u}},l={Unicode:{"Courier-Oblique":s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":s("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":s("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:s("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:s("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":s("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":s("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};t.events.push(["addFont",function(t){var e=t.font,r=l.Unicode[e.postScriptName];r&&(e.metadata.Unicode={},e.metadata.Unicode.widths=r.widths,e.metadata.Unicode.kerning=r.kerning);var n=c.Unicode[e.postScriptName];n&&(e.metadata.Unicode.encoding=n,e.encoding=n.codePages[0])}])}(O.API),
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(t){for(var e=t.length,r=new Uint8Array(e),n=0;n<e;n++)r[n]=t.charCodeAt(n);return r};t.API.events.push(["addFont",function(r){var n=void 0,i=r.font,a=r.instance;if(!i.isStandardFont){if(void 0===a)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");if("string"!=typeof(n=!1===a.existsFileInVFS(i.postScriptName)?a.loadFile(i.postScriptName):a.getFileFromVFS(i.postScriptName)))throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");!function(r,n){n=/^\x00\x01\x00\x00/.test(n)?e(n):e(u(n)),r.metadata=t.API.TTFFont.open(n),r.metadata.Unicode=r.metadata.Unicode||{encoding:{},kerning:{},widths:[]},r.metadata.glyIdsUsed=[0]}(i,n)}}])}(O),
/** @license
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){function e(){return(r.canvg?Promise.resolve(r.canvg):__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! canvg */ "./node_modules/canvg/lib/index.es.js"))).catch((function(t){return Promise.reject(new Error("Could not load canvg: "+t))})).then((function(t){return t.default?t.default:t}))}O.API.addSvgAsImage=function(t,r,n,a,o,s,u,c){if(isNaN(r)||isNaN(n))throw i.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(a)||isNaN(o))throw i.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var l=document.createElement("canvas");l.width=a,l.height=o;var h=l.getContext("2d");h.fillStyle="#fff",h.fillRect(0,0,l.width,l.height);var f={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},d=this;return e().then((function(e){return e.fromString(h,t,f)}),(function(){return Promise.reject(new Error("Could not load canvg."))})).then((function(t){return t.render(f)})).then((function(){d.addImage(l.toDataURL("image/jpeg",1),r,n,a,o,u,c)}))}}(),O.API.putTotalPages=function(t){var e,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(e=new RegExp(t,"g"),r=this.internal.getNumberOfPages()):(e=new RegExp(this.pdfEscape16(t,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var i=0;i<this.internal.pages[n].length;i++)this.internal.pages[n][i]=this.internal.pages[n][i].replace(e,r);return this},O.API.viewerPreferences=function(t,e){var r;t=t||{},e=e||!1;var n,i,a,o={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},s=Object.keys(o),u=[],c=0,l=0,h=0;function f(t,e){var r,n=!1;for(r=0;r<t.length;r+=1)t[r]===e&&(n=!0);return n}if(void 0===this.internal.viewerpreferences&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(o)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,"reset"===t||!0===e){var d=s.length;for(h=0;h<d;h+=1)r[s[h]].value=r[s[h]].defaultValue,r[s[h]].explicitSet=!1}if("object"==typeof t)for(i in t)if(a=t[i],f(s,i)&&void 0!==a){if("boolean"===r[i].type&&"boolean"==typeof a)r[i].value=a;else if("name"===r[i].type&&f(r[i].valueSet,a))r[i].value=a;else if("integer"===r[i].type&&Number.isInteger(a))r[i].value=a;else if("array"===r[i].type){for(c=0;c<a.length;c+=1)if(n=!0,1===a[c].length&&"number"==typeof a[c][0])u.push(String(a[c]-1));else if(a[c].length>1){for(l=0;l<a[c].length;l+=1)"number"!=typeof a[c][l]&&(n=!1);!0===n&&u.push([a[c][0]-1,a[c][1]-1].join(" "))}r[i].value="["+u.join(" ")+"]"}else r[i].value=r[i].defaultValue;r[i].explicitSet=!0}return!1===this.internal.viewerpreferences.isSubscribed&&(this.internal.events.subscribe("putCatalog",(function(){var t,e=[];for(t in r)!0===r[t].explicitSet&&("name"===r[t].type?e.push("/"+t+" /"+r[t].value):e.push("/"+t+" "+r[t].value));0!==e.length&&this.internal.write("/ViewerPreferences\n<<\n"+e.join("\n")+"\n>>")})),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},
/** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){var e=function(){var t='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',e=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),r=unescape(encodeURIComponent(t)),n=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),i=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),a=unescape(encodeURIComponent("</x:xmpmeta>")),o=r.length+n.length+i.length+e.length+a.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+o+" >>"),this.internal.write("stream"),this.internal.write(e+r+n+i+a),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};t.addMetadata=function(t,n){return void 0===this.internal.__metadata__&&(this.internal.__metadata__={metadata:t,namespaceuri:n||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",e)),this}}(O.API),function(t){var e=t.API,r=e.pdfEscape16=function(t,e){for(var r,n=e.metadata.Unicode.widths,i=["","0","00","000","0000"],a=[""],o=0,s=t.length;o<s;++o){if(r=e.metadata.characterToGlyph(t.charCodeAt(o)),e.metadata.glyIdsUsed.push(r),e.metadata.toUnicode[r]=t.charCodeAt(o),-1==n.indexOf(r)&&(n.push(r),n.push([parseInt(e.metadata.widthOfGlyph(r),10)])),"0"==r)return a.join("");r=r.toString(16),a.push(i[4-r.length],r)}return a.join("")},n=function(t){var e,r,n,i,a,o,s;for(a="/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",n=[],o=0,s=(r=Object.keys(t).sort((function(t,e){return t-e}))).length;o<s;o++)e=r[o],n.length>=100&&(a+="\n"+n.length+" beginbfchar\n"+n.join("\n")+"\nendbfchar",n=[]),void 0!==t[e]&&null!==t[e]&&"function"==typeof t[e].toString&&(i=("0000"+t[e].toString(16)).slice(-4),e=("0000"+(+e).toString(16)).slice(-4),n.push("<"+e+"><"+i+">"));return n.length&&(a+="\n"+n.length+" beginbfchar\n"+n.join("\n")+"\nendbfchar\n"),a+="endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"};e.events.push(["putFont",function(e){!function(e){var r=e.font,i=e.out,a=e.newObject,o=e.putStream,s=e.pdfEscapeWithNeededParanthesis;if(r.metadata instanceof t.API.TTFFont&&"Identity-H"===r.encoding){for(var u=r.metadata.Unicode.widths,c=r.metadata.subset.encode(r.metadata.glyIdsUsed,1),l="",h=0;h<c.length;h++)l+=String.fromCharCode(c[h]);var f=a();o({data:l,addLength1:!0,objectId:f}),i("endobj");var d=a();o({data:n(r.metadata.toUnicode),addLength1:!0,objectId:d}),i("endobj");var p=a();i("<<"),i("/Type /FontDescriptor"),i("/FontName /"+s(r.fontName)),i("/FontFile2 "+f+" 0 R"),i("/FontBBox "+t.API.PDFObject.convert(r.metadata.bbox)),i("/Flags "+r.metadata.flags),i("/StemV "+r.metadata.stemV),i("/ItalicAngle "+r.metadata.italicAngle),i("/Ascent "+r.metadata.ascender),i("/Descent "+r.metadata.decender),i("/CapHeight "+r.metadata.capHeight),i(">>"),i("endobj");var g=a();i("<<"),i("/Type /Font"),i("/BaseFont /"+s(r.fontName)),i("/FontDescriptor "+p+" 0 R"),i("/W "+t.API.PDFObject.convert(u)),i("/CIDToGIDMap /Identity"),i("/DW 1000"),i("/Subtype /CIDFontType2"),i("/CIDSystemInfo"),i("<<"),i("/Supplement 0"),i("/Registry (Adobe)"),i("/Ordering ("+r.encoding+")"),i(">>"),i(">>"),i("endobj"),r.objectNumber=a(),i("<<"),i("/Type /Font"),i("/Subtype /Type0"),i("/ToUnicode "+d+" 0 R"),i("/BaseFont /"+s(r.fontName)),i("/Encoding /"+r.encoding),i("/DescendantFonts ["+g+" 0 R]"),i(">>"),i("endobj"),r.isAlreadyPutted=!0}}(e)}]);e.events.push(["putFont",function(e){!function(e){var r=e.font,i=e.out,a=e.newObject,o=e.putStream,s=e.pdfEscapeWithNeededParanthesis;if(r.metadata instanceof t.API.TTFFont&&"WinAnsiEncoding"===r.encoding){for(var u=r.metadata.rawData,c="",l=0;l<u.length;l++)c+=String.fromCharCode(u[l]);var h=a();o({data:c,addLength1:!0,objectId:h}),i("endobj");var f=a();o({data:n(r.metadata.toUnicode),addLength1:!0,objectId:f}),i("endobj");var d=a();i("<<"),i("/Descent "+r.metadata.decender),i("/CapHeight "+r.metadata.capHeight),i("/StemV "+r.metadata.stemV),i("/Type /FontDescriptor"),i("/FontFile2 "+h+" 0 R"),i("/Flags 96"),i("/FontBBox "+t.API.PDFObject.convert(r.metadata.bbox)),i("/FontName /"+s(r.fontName)),i("/ItalicAngle "+r.metadata.italicAngle),i("/Ascent "+r.metadata.ascender),i(">>"),i("endobj"),r.objectNumber=a();for(var p=0;p<r.metadata.hmtx.widths.length;p++)r.metadata.hmtx.widths[p]=parseInt(r.metadata.hmtx.widths[p]*(1e3/r.metadata.head.unitsPerEm));i("<</Subtype/TrueType/Type/Font/ToUnicode "+f+" 0 R/BaseFont/"+s(r.fontName)+"/FontDescriptor "+d+" 0 R/Encoding/"+r.encoding+" /FirstChar 29 /LastChar 255 /Widths "+t.API.PDFObject.convert(r.metadata.hmtx.widths)+">>"),i("endobj"),r.isAlreadyPutted=!0}}(e)}]);var i=function(t){var e,n=t.text||"",i=t.x,a=t.y,o=t.options||{},s=t.mutex||{},u=s.pdfEscape,c=s.activeFontKey,l=s.fonts,h=c,f="",d=0,p="",g=l[h].encoding;if("Identity-H"!==l[h].encoding)return{text:n,x:i,y:a,options:o,mutex:s};for(p=n,h=c,Array.isArray(n)&&(p=n[0]),d=0;d<p.length;d+=1)l[h].metadata.hasOwnProperty("cmap")&&(e=l[h].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]),e||p[d].charCodeAt(0)<256&&l[h].metadata.hasOwnProperty("Unicode")?f+=p[d]:f+="";var m="";return parseInt(h.slice(1))<14||"WinAnsiEncoding"===g?m=u(f,h).split("").map((function(t){return t.charCodeAt(0).toString(16)})).join(""):"Identity-H"===g&&(m=r(f,l[h])),s.isHex=!0,{text:m,x:i,y:a,options:o,mutex:s}};e.events.push(["postProcessText",function(t){var e=t.text||"",r=[],n={text:e,x:t.x,y:t.y,options:t.options,mutex:t.mutex};if(Array.isArray(e)){var a=0;for(a=0;a<e.length;a+=1)Array.isArray(e[a])&&3===e[a].length?r.push([i(Object.assign({},n,{text:e[a][0]})).text,e[a][1],e[a][2]]):r.push(i(Object.assign({},n,{text:e[a]})).text);t.text=r}else t.text=i(Object.assign({},n,{text:e})).text}])}(O),
/**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(){return void 0===this.internal.vFS&&(this.internal.vFS={}),!0};t.existsFileInVFS=function(t){return e.call(this),void 0!==this.internal.vFS[t]},t.addFileToVFS=function(t,r){return e.call(this),this.internal.vFS[t]=r,this},t.getFileFromVFS=function(t){return e.call(this),void 0!==this.internal.vFS[t]?this.internal.vFS[t]:null}}(O.API),
/**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(t){t.__bidiEngine__=t.prototype.__bidiEngine__=function(t){var r,n,i,a,o,s,u,c=e,l=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],h=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],f={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},d={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},p=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],g=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),m=!1,v=0;this.__bidiEngine__={};var b=function(t){var e=t.charCodeAt(),r=e>>8,n=d[r];return void 0!==n?c[256*n+(255&e)]:252===r||253===r?"AL":g.test(r)?"L":8===r?"R":"N"},y=function(t){for(var e,r=0;r<t.length;r++){if("L"===(e=b(t.charAt(r))))return!1;if("R"===e)return!0}return!1},w=function(t,e,o,s){var u,c,l,h,f=e[s];switch(f){case"L":case"R":m=!1;break;case"N":case"AN":break;case"EN":m&&(f="AN");break;case"AL":m=!0,f="R";break;case"WS":f="N";break;case"CS":s<1||s+1>=e.length||"EN"!==(u=o[s-1])&&"AN"!==u||"EN"!==(c=e[s+1])&&"AN"!==c?f="N":m&&(c="AN"),f=c===u?c:"N";break;case"ES":f="EN"===(u=s>0?o[s-1]:"B")&&s+1<e.length&&"EN"===e[s+1]?"EN":"N";break;case"ET":if(s>0&&"EN"===o[s-1]){f="EN";break}if(m){f="N";break}for(l=s+1,h=e.length;l<h&&"ET"===e[l];)l++;f=l<h&&"EN"===e[l]?"EN":"N";break;case"NSM":if(i&&!a){for(h=e.length,l=s+1;l<h&&"NSM"===e[l];)l++;if(l<h){var d=t[s],p=d>=1425&&d<=2303||64286===d;if(u=e[l],p&&("R"===u||"AL"===u)){f="R";break}}}f=s<1||"B"===(u=e[s-1])?"N":o[s-1];break;case"B":m=!1,r=!0,f=v;break;case"S":n=!0,f="N";break;case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":m=!1;break;case"BN":f="N"}return f},N=function(t,e,r){var n=t.split("");return r&&L(n,r,{hiLevel:v}),n.reverse(),e&&e.reverse(),n.join("")},L=function(t,e,i){var a,o,s,u,c,d=-1,p=t.length,g=0,y=[],N=v?h:l,L=[];for(m=!1,r=!1,n=!1,o=0;o<p;o++)L[o]=b(t[o]);for(s=0;s<p;s++){if(c=g,y[s]=w(t,L,y,s),a=240&(g=N[c][f[y[s]]]),g&=15,e[s]=u=N[g][5],a>0)if(16===a){for(o=d;o<s;o++)e[o]=1;d=-1}else d=-1;if(N[g][6])-1===d&&(d=s);else if(d>-1){for(o=d;o<s;o++)e[o]=u;d=-1}"B"===L[s]&&(e[s]=0),i.hiLevel|=u}n&&function(t,e,r){for(var n=0;n<r;n++)if("S"===t[n]){e[n]=v;for(var i=n-1;i>=0&&"WS"===t[i];i--)e[i]=v}}(L,e,p)},A=function(t,e,n,i,a){if(!(a.hiLevel<t)){if(1===t&&1===v&&!r)return e.reverse(),void(n&&n.reverse());for(var o,s,u,c,l=e.length,h=0;h<l;){if(i[h]>=t){for(u=h+1;u<l&&i[u]>=t;)u++;for(c=h,s=u-1;c<s;c++,s--)o=e[c],e[c]=e[s],e[s]=o,n&&(o=n[c],n[c]=n[s],n[s]=o);h=u}h++}}},x=function(t,e,r){var n=t.split(""),i={hiLevel:v};return r||(r=[]),L(n,r,i),function(t,e,r){if(0!==r.hiLevel&&u)for(var n,i=0;i<t.length;i++)1===e[i]&&(n=p.indexOf(t[i]))>=0&&(t[i]=p[n+1])}(n,r,i),A(2,n,e,r,i),A(1,n,e,r,i),n.join("")};return this.__bidiEngine__.doBidiReorder=function(t,e,r){if(function(t,e){if(e)for(var r=0;r<t.length;r++)e[r]=r;void 0===a&&(a=y(t)),void 0===s&&(s=y(t))}(t,e),i||!o||s)if(i&&o&&a^s)v=a?1:0,t=N(t,e,r);else if(!i&&o&&s)v=a?1:0,t=x(t,e,r),t=N(t,e);else if(!i||a||o||s){if(i&&!o&&a^s)t=N(t,e),a?(v=0,t=x(t,e,r)):(v=1,t=x(t,e,r),t=N(t,e));else if(i&&a&&!o&&s)v=1,t=x(t,e,r),t=N(t,e);else if(!i&&!o&&a^s){var n=u;a?(v=1,t=x(t,e,r),v=0,u=!1,t=x(t,e,r),u=n):(v=0,t=x(t,e,r),t=N(t,e),v=1,u=!1,t=x(t,e,r),u=n,t=N(t,e))}}else v=0,t=x(t,e,r);else v=a?1:0,t=x(t,e,r);return t},this.__bidiEngine__.setOptions=function(t){t&&(i=t.isInputVisual,o=t.isOutputVisual,a=t.isInputRtl,s=t.isOutputRtl,u=t.isSymmetricSwapping)},this.__bidiEngine__.setOptions(t),this.__bidiEngine__};var e=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new t.__bidiEngine__({isInputVisual:!0});t.API.events.push(["postProcessText",function(t){var e=t.text,n=(t.x,t.y,t.options||{}),i=(t.mutex,n.lang,[]);if(n.isInputVisual="boolean"!=typeof n.isInputVisual||n.isInputVisual,r.setOptions(n),"[object Array]"===Object.prototype.toString.call(e)){var a=0;for(i=[],a=0;a<e.length;a+=1)"[object Array]"===Object.prototype.toString.call(e[a])?i.push([r.doBidiReorder(e[a][0]),e[a][1],e[a][2]]):i.push([r.doBidiReorder(e[a])]);t.text=i}else t.text=r.doBidiReorder(e);r.setOptions({isInputVisual:!0})}])}(O),O.API.TTFFont=function(){function t(t){var e;if(this.rawData=t,e=this.contents=new te(t),this.contents.pos=4,"ttcf"===e.readString(4))throw new Error("TTCF not supported.");e.pos=0,this.parse(),this.subset=new ye(this),this.registerTTF()}return t.open=function(e){return new t(e)},t.prototype.parse=function(){return this.directory=new ee(this.contents),this.head=new ie(this),this.name=new he(this),this.cmap=new oe(this),this.toUnicode={},this.hhea=new se(this),this.maxp=new fe(this),this.hmtx=new de(this),this.post=new ce(this),this.os2=new ue(this),this.loca=new be(this),this.glyf=new ge(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},t.prototype.registerTTF=function(){var t,e,r,n,i;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=function(){var e,r,n,i;for(i=[],e=0,r=(n=this.bbox).length;e<r;e++)t=n[e],i.push(Math.round(t*this.scaleFactor));return i}.call(this),this.stemV=0,this.post.exists?(r=255&(n=this.post.italic_angle),0!=(32768&(e=n>>16))&&(e=-(1+(65535^e))),this.italicAngle=+(e+"."+r)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=1===(i=this.familyClass)||2===i||3===i||4===i||5===i||7===i,this.isScript=10===this.familyClass,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),0!==this.italicAngle&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},t.prototype.characterToGlyph=function(t){var e;return(null!=(e=this.cmap.unicode)?e.codeMap[t]:void 0)||0},t.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},t.prototype.widthOfString=function(t,e,r){var n,i,a,o;for(a=0,i=0,o=(t=""+t).length;0<=o?i<o:i>o;i=0<=o?++i:--i)n=t.charCodeAt(i),a+=this.widthOfGlyph(this.characterToGlyph(n))+r*(1e3/e)||0;return a*(e/1e3)},t.prototype.lineHeight=function(t,e){var r;return null==e&&(e=!1),r=e?this.lineGap:0,(this.ascender+r-this.decender)/1e3*t},t}();var Qt,te=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},t.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},t.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,r;for(r=[],e=0;0<=t?e<t:e>t;e=0<=t?++e:--e)r[e]=String.fromCharCode(this.readByte());return r.join("")},t.prototype.writeString=function(t){var e,r,n;for(n=[],e=0,r=t.length;0<=r?e<r:e>r;e=0<=r?++e:--e)n.push(this.writeByte(t.charCodeAt(e)));return n},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,r,n,i,a,o,s;return t=this.readByte(),e=this.readByte(),r=this.readByte(),n=this.readByte(),i=this.readByte(),a=this.readByte(),o=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^r)+4294967296*(255^n)+16777216*(255^i)+65536*(255^a)+256*(255^o)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*r+4294967296*n+16777216*i+65536*a+256*o+s},t.prototype.writeLongLong=function(t){var e,r;return e=Math.floor(t/4294967296),r=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.read=function(t){var e,r;for(e=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)e.push(this.readByte());return e},t.prototype.write=function(t){var e,r,n,i;for(i=[],r=0,n=t.length;r<n;r++)e=t[r],i.push(this.writeByte(e));return i},t}(),ee=function(){var t;function e(t){var e,r,n;for(this.scalarType=t.readInt(),this.tableCount=t.readShort(),this.searchRange=t.readShort(),this.entrySelector=t.readShort(),this.rangeShift=t.readShort(),this.tables={},r=0,n=this.tableCount;0<=n?r<n:r>n;r=0<=n?++r:--r)e={tag:t.readString(4),checksum:t.readInt(),offset:t.readInt(),length:t.readInt()},this.tables[e.tag]=e}return e.prototype.encode=function(e){var r,n,i,a,o,s,u,c,l,h,f,d,p;for(p in f=Object.keys(e).length,s=Math.log(2),l=16*Math.floor(Math.log(f)/s),a=Math.floor(l/s),c=16*f-l,(n=new te).writeInt(this.scalarType),n.writeShort(f),n.writeShort(l),n.writeShort(a),n.writeShort(c),i=16*f,u=n.pos+i,o=null,d=[],e)for(h=e[p],n.writeString(p),n.writeInt(t(h)),n.writeInt(u),n.writeInt(h.length),d=d.concat(h),"head"===p&&(o=u),u+=h.length;u%4;)d.push(0),u++;return n.write(d),r=2981146554-t(n.data),n.pos=o+8,n.writeUInt32(r),n.data},t=function(t){var e,r,n,i;for(t=pe.call(t);t.length%4;)t.push(0);for(n=new te(t),r=0,e=0,i=t.length;e<i;e=e+=4)r+=n.readUInt32();return 4294967295&r},e}(),re={}.hasOwnProperty,ne=function(t,e){for(var r in e)re.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};Qt=function(){function t(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}();var ie=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var e;return(e=new te).writeInt(this.version),e.writeInt(this.revision),e.writeInt(this.checkSumAdjustment),e.writeInt(this.magicNumber),e.writeShort(this.flags),e.writeShort(this.unitsPerEm),e.writeLongLong(this.created),e.writeLongLong(this.modified),e.writeShort(this.xMin),e.writeShort(this.yMin),e.writeShort(this.xMax),e.writeShort(this.yMax),e.writeShort(this.macStyle),e.writeShort(this.lowestRecPPEM),e.writeShort(this.fontDirectionHint),e.writeShort(t),e.writeShort(this.glyphDataFormat),e.data},e}(),ae=function(){function t(t,e){var r,n,i,a,o,s,u,c,l,h,f,d,p,g,m,v,b;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=e+t.readInt(),l=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=3===this.platformID&&1===this.encodingID&&4===this.format||0===this.platformID&&4===this.format,this.codeMap={},this.format){case 0:for(s=0;s<256;++s)this.codeMap[s]=t.readByte();break;case 4:for(f=t.readUInt16(),h=f/2,t.pos+=6,i=function(){var e,r;for(r=[],s=e=0;0<=h?e<h:e>h;s=0<=h?++e:--e)r.push(t.readUInt16());return r}(),t.pos+=2,p=function(){var e,r;for(r=[],s=e=0;0<=h?e<h:e>h;s=0<=h?++e:--e)r.push(t.readUInt16());return r}(),u=function(){var e,r;for(r=[],s=e=0;0<=h?e<h:e>h;s=0<=h?++e:--e)r.push(t.readUInt16());return r}(),c=function(){var e,r;for(r=[],s=e=0;0<=h?e<h:e>h;s=0<=h?++e:--e)r.push(t.readUInt16());return r}(),n=(this.length-t.pos+this.offset)/2,o=function(){var e,r;for(r=[],s=e=0;0<=n?e<n:e>n;s=0<=n?++e:--e)r.push(t.readUInt16());return r}(),s=m=0,b=i.length;m<b;s=++m)for(g=i[s],r=v=d=p[s];d<=g?v<=g:v>=g;r=d<=g?++v:--v)0===c[s]?a=r+u[s]:0!==(a=o[c[s]/2+(r-d)-(h-s)]||0)&&(a+=u[s]),this.codeMap[r]=65535&a}t.pos=l}return t.encode=function(t,e){var r,n,i,a,o,s,u,c,l,h,f,d,p,g,m,v,b,y,w,N,L,A,x,S,_,P,k,I,F,C,j,O,B,M,E,q,R,T,D,U,z,H,V,W,G,Y;switch(I=new te,a=Object.keys(t).sort((function(t,e){return t-e})),e){case"macroman":for(p=0,g=function(){var t=[];for(d=0;d<256;++d)t.push(0);return t}(),v={0:0},i={},F=0,B=a.length;F<B;F++)null==v[V=t[n=a[F]]]&&(v[V]=++p),i[n]={old:t[n],new:v[t[n]]},g[n]=v[t[n]];return I.writeUInt16(1),I.writeUInt16(0),I.writeUInt32(12),I.writeUInt16(0),I.writeUInt16(262),I.writeUInt16(0),I.write(g),{charMap:i,subtable:I.data,maxGlyphID:p+1};case"unicode":for(P=[],l=[],b=0,v={},r={},m=u=null,C=0,M=a.length;C<M;C++)null==v[w=t[n=a[C]]]&&(v[w]=++b),r[n]={old:w,new:v[w]},o=v[w]-n,null!=m&&o===u||(m&&l.push(m),P.push(n),u=o),m=n;for(m&&l.push(m),l.push(65535),P.push(65535),S=2*(x=P.length),A=2*Math.pow(Math.log(x)/Math.LN2,2),h=Math.log(A/2)/Math.LN2,L=2*x-A,s=[],N=[],f=[],d=j=0,E=P.length;j<E;d=++j){if(_=P[d],c=l[d],65535===_){s.push(0),N.push(0);break}if(_-(k=r[_].new)>=32768)for(s.push(0),N.push(2*(f.length+x-d)),n=O=_;_<=c?O<=c:O>=c;n=_<=c?++O:--O)f.push(r[n].new);else s.push(k-_),N.push(0)}for(I.writeUInt16(3),I.writeUInt16(1),I.writeUInt32(12),I.writeUInt16(4),I.writeUInt16(16+8*x+2*f.length),I.writeUInt16(0),I.writeUInt16(S),I.writeUInt16(A),I.writeUInt16(h),I.writeUInt16(L),z=0,q=l.length;z<q;z++)n=l[z],I.writeUInt16(n);for(I.writeUInt16(0),H=0,R=P.length;H<R;H++)n=P[H],I.writeUInt16(n);for(W=0,T=s.length;W<T;W++)o=s[W],I.writeUInt16(o);for(G=0,D=N.length;G<D;G++)y=N[G],I.writeUInt16(y);for(Y=0,U=f.length;Y<U;Y++)p=f[Y],I.writeUInt16(p);return{charMap:r,subtable:I.data,maxGlyphID:b+1}}},t}(),oe=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="cmap",e.prototype.parse=function(t){var e,r,n;for(t.pos=this.offset,this.version=t.readUInt16(),n=t.readUInt16(),this.tables=[],this.unicode=null,r=0;0<=n?r<n:r>n;r=0<=n?++r:--r)e=new ae(t,this.offset),this.tables.push(e),e.isUnicode&&null==this.unicode&&(this.unicode=e);return!0},e.encode=function(t,e){var r,n;return null==e&&(e="macroman"),r=ae.encode(t,e),(n=new te).writeUInt16(0),n.writeUInt16(1),r.table=n.data.concat(r.subtable),r},e}(),se=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),ue=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var e,r;for(r=[],e=0;e<10;++e)r.push(t.readByte());return r}(),this.charRange=function(){var e,r;for(r=[],e=0;e<4;++e)r.push(t.readInt());return r}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var e,r;for(r=[],e=0;e<2;e=++e)r.push(t.readInt());return r}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),ce=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="post",e.prototype.parse=function(t){var e,r,n;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:break;case 131072:var i;for(r=t.readUInt16(),this.glyphNameIndex=[],i=0;0<=r?i<r:i>r;i=0<=r?++i:--i)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],n=[];t.pos<this.offset+this.length;)e=t.readByte(),n.push(this.names.push(t.readString(e)));return n;case 151552:return r=t.readUInt16(),this.offsets=t.read(r);case 196608:break;case 262144:return this.map=function(){var e,r,n;for(n=[],i=e=0,r=this.file.maxp.numGlyphs;0<=r?e<r:e>r;i=0<=r?++e:--e)n.push(t.readUInt32());return n}.call(this)}},e}(),le=function(t,e){this.raw=t,this.length=t.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID},he=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="name",e.prototype.parse=function(t){var e,r,n,i,a,o,s,u,c,l,h;for(t.pos=this.offset,t.readShort(),e=t.readShort(),o=t.readShort(),r=[],i=0;0<=e?i<e:i>e;i=0<=e?++i:--i)r.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+o+t.readShort()});for(s={},i=c=0,l=r.length;c<l;i=++c)n=r[i],t.pos=n.offset,u=t.readString(n.length),a=new le(u,n),null==s[h=n.nameID]&&(s[h]=[]),s[n.nameID].push(a);this.strings=s,this.copyright=s[0],this.fontFamily=s[1],this.fontSubfamily=s[2],this.uniqueSubfamily=s[3],this.fontName=s[4],this.version=s[5];try{this.postscriptName=s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch(t){this.postscriptName=s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=s[7],this.manufacturer=s[8],this.designer=s[9],this.description=s[10],this.vendorUrl=s[11],this.designerUrl=s[12],this.license=s[13],this.licenseUrl=s[14],this.preferredFamily=s[15],this.preferredSubfamily=s[17],this.compatibleFull=s[18],this.sampleText=s[19]},e}(),fe=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),de=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="hmtx",e.prototype.parse=function(t){var e,r,n,i,a,o,s;for(t.pos=this.offset,this.metrics=[],e=0,o=this.file.hhea.numberOfMetrics;0<=o?e<o:e>o;e=0<=o?++e:--e)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(n=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var r,i;for(i=[],e=r=0;0<=n?r<n:r>n;e=0<=n?++r:--r)i.push(t.readInt16());return i}(),this.widths=function(){var t,e,r,n;for(n=[],t=0,e=(r=this.metrics).length;t<e;t++)i=r[t],n.push(i.advance);return n}.call(this),r=this.widths[this.widths.length-1],s=[],e=a=0;0<=n?a<n:a>n;e=0<=n?++a:--a)s.push(this.widths.push(r));return s},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),pe=[].slice,ge=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var e,r,n,i,a,o,s,u,c,l;return t in this.cache?this.cache[t]:(i=this.file.loca,e=this.file.contents,r=i.indexOf(t),0===(n=i.lengthOf(t))?this.cache[t]=null:(e.pos=this.offset+r,a=(o=new te(e.read(n))).readShort(),u=o.readShort(),l=o.readShort(),s=o.readShort(),c=o.readShort(),this.cache[t]=-1===a?new ve(o,u,l,s,c):new me(o,a,u,l,s,c),this.cache[t]))},e.prototype.encode=function(t,e,r){var n,i,a,o,s;for(a=[],i=[],o=0,s=e.length;o<s;o++)n=t[e[o]],i.push(a.length),n&&(a=a.concat(n.encode(r)));return i.push(a.length),{table:a,offsets:i}},e}(),me=function(){function t(t,e,r,n,i,a){this.raw=t,this.numberOfContours=e,this.xMin=r,this.yMin=n,this.xMax=i,this.yMax=a,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),ve=function(){function t(t,e,r,n,i){var a,o;for(this.raw=t,this.xMin=e,this.yMin=r,this.xMax=n,this.yMax=i,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],a=this.raw;o=a.readShort(),this.glyphOffsets.push(a.pos),this.glyphIDs.push(a.readUInt16()),32&o;)a.pos+=1&o?4:2,128&o?a.pos+=8:64&o?a.pos+=4:8&o&&(a.pos+=2)}return 1,8,32,64,128,t.prototype.encode=function(){var t,e,r;for(e=new te(pe.call(this.raw.data)),t=0,r=this.glyphIDs.length;t<r;++t)e.pos=this.glyphOffsets[t];return e.data},t}(),be=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return ne(e,Qt),e.prototype.tag="loca",e.prototype.parse=function(t){var e,r;return t.pos=this.offset,e=this.file.head.indexToLocFormat,this.offsets=0===e?function(){var e,n;for(n=[],r=0,e=this.length;r<e;r+=2)n.push(2*t.readUInt16());return n}.call(this):function(){var e,n;for(n=[],r=0,e=this.length;r<e;r+=4)n.push(t.readUInt32());return n}.call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,e){for(var r=new Uint32Array(this.offsets.length),n=0,i=0,a=0;a<r.length;++a)if(r[a]=n,i<e.length&&e[i]==a){++i,r[a]=n;var o=this.offsets[a],s=this.offsets[a+1]-o;s>0&&(n+=s)}for(var u=new Array(4*r.length),c=0;c<r.length;++c)u[4*c+3]=255&r[c],u[4*c+2]=(65280&r[c])>>8,u[4*c+1]=(16711680&r[c])>>16,u[4*c]=(4278190080&r[c])>>24;return u},e}(),ye=function(){function t(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return t.prototype.generateCmap=function(){var t,e,r,n,i;for(e in n=this.font.cmap.tables[0].codeMap,t={},i=this.subset)r=i[e],t[e]=n[r];return t},t.prototype.glyphsFor=function(t){var e,r,n,i,a,o,s;for(n={},a=0,o=t.length;a<o;a++)n[i=t[a]]=this.font.glyf.glyphFor(i);for(i in e=[],n)(null!=(r=n[i])?r.compound:void 0)&&e.push.apply(e,r.glyphIDs);if(e.length>0)for(i in s=this.glyphsFor(e))r=s[i],n[i]=r;return n},t.prototype.encode=function(t,e){var r,n,i,a,o,s,u,c,l,h,f,d,p,g,m;for(n in r=oe.encode(this.generateCmap(),"unicode"),a=this.glyphsFor(t),f={0:0},m=r.charMap)f[(s=m[n]).old]=s.new;for(d in h=r.maxGlyphID,a)d in f||(f[d]=h++);return c=function(t){var e,r;for(e in r={},t)r[t[e]]=e;return r}(f),l=Object.keys(c).sort((function(t,e){return t-e})),p=function(){var t,e,r;for(r=[],t=0,e=l.length;t<e;t++)o=l[t],r.push(c[o]);return r}(),i=this.font.glyf.encode(a,p,f),u=this.font.loca.encode(i.offsets,p),g={cmap:this.font.cmap.raw(),glyf:i.table,loca:u,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(e)},this.font.os2.exists&&(g["OS/2"]=this.font.os2.raw()),this.font.directory.encode(g)},t}();O.API.PDFObject=function(){var t;function e(){}return t=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},e.convert=function(r){var n,i,a,o;if(Array.isArray(r))return"["+function(){var t,i,a;for(a=[],t=0,i=r.length;t<i;t++)n=r[t],a.push(e.convert(n));return a}().join(" ")+"]";if("string"==typeof r)return"/"+r;if(null!=r?r.isString:void 0)return"("+r+")";if(r instanceof Date)return"(D:"+t(r.getUTCFullYear(),4)+t(r.getUTCMonth(),2)+t(r.getUTCDate(),2)+t(r.getUTCHours(),2)+t(r.getUTCMinutes(),2)+t(r.getUTCSeconds(),2)+"Z)";if("[object Object]"==={}.toString.call(r)){for(i in a=["<<"],r)o=r[i],a.push("/"+i+" "+e.convert(o));return a.push(">>"),a.join("\n")}return""+r},e}();/* harmony default export */ __webpack_exports__["default"] = (O);
//# sourceMappingURL=jspdf.es.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer, setImmediate) {var require;var require;/*!

JSZip v3.6.0 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

!function(e){if(true)module.exports=e();else {}}(function(){return function s(a,o,u){function h(r,e){if(!o[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return require(r,!0);if(f)return f(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return h(t||e)},i,i.exports,s,a,o,u)}return o[r].exports}for(var f="function"==typeof require&&require,e=0;e<u.length;e++)h(u[e]);return h}({1:[function(l,t,n){(function(r){!function(e){"object"==typeof n&&void 0!==t?t.exports=e():("undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:this).JSZip=e()}(function(){return function s(a,o,u){function h(t,e){if(!o[t]){if(!a[t]){var r="function"==typeof l&&l;if(!e&&r)return r(t,!0);if(f)return f(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[t]={exports:{}};a[t][0].call(i.exports,function(e){return h(a[t][1][e]||e)},i,i.exports,s,a,o,u)}return o[t].exports}for(var f="function"==typeof l&&l,e=0;e<u.length;e++)h(u[e]);return h}({1:[function(l,t,n){(function(r){!function(e){"object"==typeof n&&void 0!==t?t.exports=e():("undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:this).JSZip=e()}(function(){return function s(a,o,u){function h(t,e){if(!o[t]){if(!a[t]){var r="function"==typeof l&&l;if(!e&&r)return r(t,!0);if(f)return f(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[t]={exports:{}};a[t][0].call(i.exports,function(e){return h(a[t][1][e]||e)},i,i.exports,s,a,o,u)}return o[t].exports}for(var f="function"==typeof l&&l,e=0;e<u.length;e++)h(u[e]);return h}({1:[function(l,t,n){(function(r){!function(e){"object"==typeof n&&void 0!==t?t.exports=e():("undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:this).JSZip=e()}(function(){return function s(a,o,u){function h(t,e){if(!o[t]){if(!a[t]){var r="function"==typeof l&&l;if(!e&&r)return r(t,!0);if(f)return f(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[t]={exports:{}};a[t][0].call(i.exports,function(e){return h(a[t][1][e]||e)},i,i.exports,s,a,o,u)}return o[t].exports}for(var f="function"==typeof l&&l,e=0;e<u.length;e++)h(u[e]);return h}({1:[function(l,t,n){(function(r){!function(e){"object"==typeof n&&void 0!==t?t.exports=e():("undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:this).JSZip=e()}(function(){return function s(a,o,u){function h(t,e){if(!o[t]){if(!a[t]){var r="function"==typeof l&&l;if(!e&&r)return r(t,!0);if(f)return f(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[t]={exports:{}};a[t][0].call(i.exports,function(e){return h(a[t][1][e]||e)},i,i.exports,s,a,o,u)}return o[t].exports}for(var f="function"==typeof l&&l,e=0;e<u.length;e++)h(u[e]);return h}({1:[function(l,t,n){(function(r){!function(e){"object"==typeof n&&void 0!==t?t.exports=e():("undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:this).JSZip=e()}(function(){return function s(a,o,u){function h(t,e){if(!o[t]){if(!a[t]){var r="function"==typeof l&&l;if(!e&&r)return r(t,!0);if(f)return f(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[t]={exports:{}};a[t][0].call(i.exports,function(e){return h(a[t][1][e]||e)},i,i.exports,s,a,o,u)}return o[t].exports}for(var f="function"==typeof l&&l,e=0;e<u.length;e++)h(u[e]);return h}({1:[function(e,t,r){"use strict";var c=e("./utils"),l=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,u=[],h=0,f=e.length,l=f,d="string"!==c.getTypeOf(e);h<e.length;)l=f-h,n=d?(t=e[h++],r=h<f?e[h++]:0,h<f?e[h++]:0):(t=e.charCodeAt(h++),r=h<f?e.charCodeAt(h++):0,h<f?e.charCodeAt(h++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<l?(15&r)<<2|n>>6:64,o=2<l?63&n:64,u.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return u.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,u=0;if("data:"===e.substr(0,"data:".length))throw new Error("Invalid base64 input, it looks like a data url.");var h,f=3*(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(h=l.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),h[u++]=t,64!==s&&(h[u++]=r),64!==a&&(h[u++]=n);return h}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(e){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils"),a=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r){var n=a,i=0+r;e^=-1;for(var s=0;s<i;s++)e=e>>>8^n[255&(e^t[s])];return-1^e}(0|t,e,e.length):function(e,t,r){var n=a,i=0+r;e^=-1;for(var s=0;s<i;s++)e=e>>>8^n[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function u(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(u,a),u.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},u.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new u("Deflate",e)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function I(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function i(e,t,r,n,i,s){var a,o,u=e.file,h=e.compression,f=s!==B.utf8encode,l=O.transformTo("string",s(u.name)),d=O.transformTo("string",B.utf8encode(u.name)),c=u.comment,p=O.transformTo("string",s(c)),m=O.transformTo("string",B.utf8encode(c)),_=d.length!==u.name.length,g=m.length!==c.length,v="",b="",w="",y=u.dir,k=u.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),f||!_&&!g||(S|=2048);var z,E=0,C=0;y&&(E|=16),"UNIX"===i?(C=798,E|=((z=u.unixPermissions)||(z=y?16893:33204),(65535&z)<<16)):(C=20,E|=63&(u.dosPermissions||0)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v+="up"+I((b=I(1,1)+I(T(l),4)+d).length,2)+b),g&&(v+="uc"+I((w=I(1,1)+I(T(p),4)+m).length,2)+w);var A="";return A+="\n\0",A+=I(S,2),A+=h.magic,A+=I(a,2),A+=I(o,2),A+=I(x.crc32,4),A+=I(x.compressedSize,4),A+=I(x.uncompressedSize,4),A+=I(l.length,2),A+=I(v.length,2),{fileRecord:R.LOCAL_FILE_HEADER+A+l+v,dirRecord:R.CENTRAL_FILE_HEADER+I(C,2)+A+I(p.length,2)+"\0\0\0\0"+I(E,4)+I(n,4)+l+v+p}}var O=e("../utils"),s=e("../stream/GenericWorker"),B=e("../utf8"),T=e("../crc32"),R=e("../signature");function n(e,t,r,n){s.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}O.inherits(n,s),n.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,s.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},n.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},n.prototype.closedSource=function(e){this.accumulate=!1;var t,r=this.streamFiles&&!e.file.dir,n=i(e,r,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),r)this.push({data:(t=e,R.DATA_DESCRIPTOR+I(t.crc32,4)+I(t.compressedSize,4)+I(t.uncompressedSize,4)),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},n.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r,n,i,s,a,o,u=this.bytesWritten-e,h=(r=this.dirRecords.length,n=u,i=e,s=this.zipComment,a=this.encodeFileName,o=O.transformTo("string",a(s)),R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+I(r,2)+I(r,2)+I(n,4)+I(i,4)+I(o.length,2)+o);this.push({data:h,meta:{percent:100}})},n.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},n.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},n.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},n.prototype.error=function(e){var t=this._sources;if(!s.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},n.prototype.lock=function(){s.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=n},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var h=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),u=0;try{e.forEach(function(e,t){u++;var r=function(e,t){var r=e||t,n=h[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=u}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files={},this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.5.0",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var n=e("./utils"),i=e("./external"),o=e("./utf8"),u=e("./zipEntries"),s=e("./stream/Crc32Probe"),h=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new s);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,s){var a=this;return s=n.extend(s||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),h.isNode&&h.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",e,!0,s.optimizedBinaryString,s.base64).then(function(e){var t=new u(s);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(s.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n];a.file(i.fileNameStr,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:s.createFolders})}return t.zipComment.length&&(a.comment=t.zipComment),a})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=f.getTypeOf(t),s=f.extend(r||{},d);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(n=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""}(e))&&g.call(this,n,!0);var a,o="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!o),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string"),a=t instanceof c||t instanceof l?t:m.isNode&&m.isStream(t)?new _(e,t):f.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var u=new p(e,a,s);this.files[e]=u}function h(e){return"/"!==e.slice(-1)&&(e+="/"),e}var i=e("./utf8"),f=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),d=e("./defaults"),c=e("./compressedObject"),p=e("./zipObject"),o=e("./generate"),m=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),g=function(e,t){return t=void 0!==t?t:d.createFolders,e=h(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function u(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)this.files.hasOwnProperty(t)&&(n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n))},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(u(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(u(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=g.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(e){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=f.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");f.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(e){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(e){},lastIndexOfSignature:function(e){},readAndCheckSignature:function(e){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),u=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new u(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),f=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function u(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}u.prototype={accumulate:function(e){return o=this,u=e,new a.Promise(function(t,r){var n=[],i=o._internalType,s=o._outputType,a=o._mimeType;o.on("data",function(e,t){n.push(e),u&&u(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return f.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()});var o,u},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),u=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),h=new Array(256),i=0;i<256;i++)h[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function f(){n.call(this,"utf-8 encode")}h[254]=h[254]=1,s.utf8encode=function(e){return u.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=u.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return u.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=h[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(u.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(u.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(u.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+h[e[r]]>t?r:t}(t),i=t;n!==t.length&&(u.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(f,n),f.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,o){"use strict";var u=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),n=e("set-immediate-shim"),f=e("./external");function i(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}o.newBlob=function(t,r){o.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var s={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return u.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return u.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function a(e){var t=65536,r=o.getTypeOf(e),n=!0;if("uint8array"===r?n=s.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=s.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return s.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return s.stringifyByChar(e)}function d(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}o.applyFromCharCode=a;var c={};c.string={string:i,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:a,array:i,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return a(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:i,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:a,array:function(e){return d(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:i,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:a,array:function(e){return d(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:i},o.transformTo=function(e,t){if(t=t||"",!e)return t;o.checkSupport(e);var r=o.getTypeOf(t);return c[r][e](t)},o.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":u.nodebuffer&&r.isBuffer(e)?"nodebuffer":u.uint8array&&e instanceof Uint8Array?"uint8array":u.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(e){if(!u[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},o.delay=function(e,t,r){n(function(){e.apply(r||null,t||[])})},o.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},o.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])arguments[e].hasOwnProperty(t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},o.prepareContent=function(n,e,i,s,a){return f.Promise.resolve(e).then(function(n){return u.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new f.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t,r=o.getTypeOf(e);return r?("arraybuffer"===r?e=o.transformTo("uint8array",e):"string"===r&&(a?e=h.decode(e):i&&!0!==s&&(e=l(t=e,u.uint8array?new Uint8Array(t.length):new Array(t.length)))),e):f.Promise.reject(new Error("Can't read the data of '"+n+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=(e("./utf8"),e("./support"));function u(e){this.files=[],this.loadOptions=e}u.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),u=e("./compressions"),h=e("./support");function f(e,t){this.options=e,this.loadOptions=t}f.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in u)if(u.hasOwnProperty(t)&&u[t].magic===e)return u[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(e){if(this.extraFields[1]){var t=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=t.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=t.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=t.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=t.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),u=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new u("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof u?this._data:new i(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},l=0;l<h.length;l++)n.prototype[h[l]]=f;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,f,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(h),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){h(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(h,0)};else{var o=new t.MessageChannel;o.port1.onmessage=h,r=function(){o.port2.postMessage(0)}}var u=[];function h(){var e,t;n=!0;for(var r=u.length;r;){for(t=u,u=[],e=-1;++e<r;)t[e]();r=u.length}n=!1}f.exports=function(e){1!==u.push(e)||n||r()}}).call(this,void 0!==r?r:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function h(){}var f={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==h&&c(this,e)}function u(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function l(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return f.reject(t,e)}e===t?f.reject(t,new TypeError("Cannot resolve promise with itself")):f.resolve(t,e)})}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function c(t,e){var r=!1;function n(e){r||(r=!0,f.reject(t,e))}function i(e){r||(r=!0,f.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(h);return this.state!==n?l(r,this.state===a?e:t,this.outcome):this.queue.push(new u(r,e,t)),r},u.prototype.callFulfilled=function(e){f.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){f.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},f.resolve=function(e,t){var r=p(d,t);if("error"===r.status)return f.reject(e,r.value);var n=r.value;if(n)c(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},f.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){return e instanceof this?e:f.resolve(new this(h),e)},o.reject=function(e){var t=new this(h);return f.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);for(var s=new Array(n),a=0,t=-1,o=new this(h);++t<n;)u(e[t],t);return o;function u(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,f.resolve(o,s))},function(e){i||(i=!0,f.reject(o,e))})}},o.race=function(e){if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var t=e.length,r=!1;if(!t)return this.resolve([]);for(var n,i=-1,s=new this(h);++i<t;)n=e[i],this.resolve(n).then(function(e){r||(r=!0,f.resolve(s,e))},function(e){r||(r=!0,f.reject(s,e))});return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),u=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),h=Object.prototype.toString,f=0,l=-1,d=0,c=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:l,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==f)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?u.string2buf(t.dictionary):"[object ArrayBuffer]"===h.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==f)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=u.string2buf(e):"[object ArrayBuffer]"===h.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==f)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(u.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===f):2!==n||(this.onEnd(f),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===f&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var d=e("./zlib/inflate"),c=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=d.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,d.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,u=this.strm,h=this.options.chunkSize,f=this.options.dictionary,l=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?u.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?u.input=new Uint8Array(e):u.input=e,u.next_in=0,u.avail_in=u.input.length;do{if(0===u.avail_out&&(u.output=new c.Buf8(h),u.next_out=0,u.avail_out=h),(r=d.inflate(u,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&f&&(o="string"==typeof f?p.string2buf(f):"[object ArrayBuffer]"===_.call(f)?new Uint8Array(f):f,r=d.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===l&&(r=m.Z_OK,l=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);u.next_out&&(0!==u.avail_out&&r!==m.Z_STREAM_END&&(0!==u.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(u.output,u.next_out),s=u.next_out-i,a=p.buf2string(u.output,i),u.next_out=s,u.avail_out=h-s,s&&c.arraySet(u.output,u.output,i,s,0),this.onData(a)):this.onData(c.shrinkBuf(u.output,u.next_out)))),0===u.avail_in&&0===u.avail_out&&(l=!0)}while((0<u.avail_in||0===u.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=d.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(u.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var u=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var h=new u.Buf8(256),n=0;n<256;n++)h[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function f(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,u.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}h[254]=h[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new u.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return f(e,e.length)},r.binstring2buf=function(e){for(var t=new u.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=h[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return f(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+h[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var u,d=e("../utils/common"),h=e("./trees"),c=e("./adler32"),p=e("./crc32"),n=e("./messages"),f=0,l=0,m=-2,i=2,_=8,s=286,a=30,o=19,g=2*s+1,v=15,b=3,w=258,y=w+b+1,k=42,x=113;function S(e,t){return e.msg=n[t],t}function z(e){return(e<<1)-(4<e?9:0)}function E(e){for(var t=e.length;0<=--t;)e[t]=0}function C(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(d.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function A(e,t){h._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,C(e.strm)}function I(e,t){e.pending_buf[e.pending++]=t}function O(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function B(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,u=e.strstart>e.w_size-y?e.strstart-(e.w_size-y):0,h=e.window,f=e.w_mask,l=e.prev,d=e.strstart+w,c=h[s+a-1],p=h[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(h[(r=t)+a]===p&&h[r+a-1]===c&&h[r]===h[s]&&h[++r]===h[s+1]){s+=2,r++;do{}while(h[++s]===h[++r]&&h[++s]===h[++r]&&h[++s]===h[++r]&&h[++s]===h[++r]&&h[++s]===h[++r]&&h[++s]===h[++r]&&h[++s]===h[++r]&&h[++s]===h[++r]&&s<d);if(n=w-(d-s),s=d-w,a<n){if(e.match_start=t,o<=(a=n))break;c=h[s+a-1],p=h[s+a]}}}while((t=l[t&f])>u&&0!=--i);return a<=e.lookahead?a:e.lookahead}function T(e){var t,r,n,i,s,a,o,u,h,f,l=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=l+(l-y)){for(d.arraySet(e.window,e.window,l,l,0),e.match_start-=l,e.strstart-=l,e.block_start-=l,t=r=e.hash_size;n=e.head[--t],e.head[t]=l<=n?n-l:0,--r;);for(t=r=l;n=e.prev[--t],e.prev[t]=l<=n?n-l:0,--r;);i+=l}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,u=e.strstart+e.lookahead,f=void 0,(h=i)<(f=a.avail_in)&&(f=h),r=0===f?0:(a.avail_in-=f,d.arraySet(o,a.input,a.next_in,f,u),1===a.state.wrap?a.adler=c(a.adler,o,f,u):2===a.state.wrap&&(a.adler=p(a.adler,o,f,u)),a.next_in+=f,a.total_in+=f,f),e.lookahead+=r,e.lookahead+e.insert>=b)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+b-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<b)););}while(e.lookahead<y&&0!==e.strm.avail_in)}function R(e,t){for(var r,n;;){if(e.lookahead<y){if(T(e),e.lookahead<y&&t===f)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=b&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+b-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-y&&(e.match_length=B(e,r)),e.match_length>=b)if(n=h._tr_tally(e,e.strstart-e.match_start,e.match_length-b),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=b){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+b-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=h._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(A(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<b-1?e.strstart:b-1,4===t?(A(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(A(e,!1),0===e.strm.avail_out)?1:2}function D(e,t){for(var r,n,i;;){if(e.lookahead<y){if(T(e),e.lookahead<y&&t===f)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=b&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+b-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=b-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-y&&(e.match_length=B(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===b&&4096<e.strstart-e.match_start)&&(e.match_length=b-1)),e.prev_length>=b&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-b,n=h._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-b),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+b-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=b-1,e.strstart++,n&&(A(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((n=h._tr_tally(e,0,e.window[e.strstart-1]))&&A(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=h._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<b-1?e.strstart:b-1,4===t?(A(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(A(e,!1),0===e.strm.avail_out)?1:2}function F(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function N(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*g),this.dyn_dtree=new d.Buf16(2*(2*a+1)),this.bl_tree=new d.Buf16(2*(2*o+1)),E(this.dyn_ltree),E(this.dyn_dtree),E(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(v+1),this.heap=new d.Buf16(2*s+1),E(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*s+1),E(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function U(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?k:x,e.adler=2===t.wrap?0:1,t.last_flush=f,h._tr_init(t),l):S(e,m)}function P(e){var t,r=U(e);return r===l&&((t=e.state).window_size=2*t.w_size,E(t.head),t.max_lazy_match=u[t.level].max_lazy,t.good_match=u[t.level].good_length,t.nice_match=u[t.level].nice_length,t.max_chain_length=u[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=b-1,t.match_available=0,t.ins_h=0),r}function L(e,t,r,n,i,s){if(!e)return m;var a=1;if(-1===t&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||9<i||r!==_||n<8||15<n||t<0||9<t||s<0||4<s)return S(e,m);8===n&&(n=9);var o=new N;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+b-1)/b),o.window=new d.Buf8(2*o.w_size),o.head=new d.Buf16(o.hash_size),o.prev=new d.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new d.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,P(e)}u=[new F(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(T(e),0===e.lookahead&&t===f)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,A(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-y&&(A(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(A(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(A(e,!1),e.strm.avail_out),1)}),new F(4,4,8,4,R),new F(4,5,16,8,R),new F(4,6,32,32,R),new F(4,4,16,16,D),new F(8,16,32,32,D),new F(8,16,128,128,D),new F(8,32,128,256,D),new F(32,128,258,1024,D),new F(32,258,258,4096,D)],r.deflateInit=function(e,t){return L(e,t,_,15,8,0)},r.deflateInit2=L,r.deflateReset=P,r.deflateResetKeep=U,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?m:(e.state.gzhead=t,l):m},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?S(e,m):m;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&4!==t)return S(e,0===e.avail_out?-5:m);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===k)if(2===n.wrap)e.adler=0,I(n,31),I(n,139),I(n,8),n.gzhead?(I(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),I(n,255&n.gzhead.time),I(n,n.gzhead.time>>8&255),I(n,n.gzhead.time>>16&255),I(n,n.gzhead.time>>24&255),I(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),I(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(I(n,255&n.gzhead.extra.length),I(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(I(n,0),I(n,0),I(n,0),I(n,0),I(n,0),I(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),I(n,3),n.status=x);else{var a=_+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=x,O(n,a),0!==n.strstart&&(O(n,e.adler>>>16),O(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),C(e),i=n.pending,n.pending!==n.pending_buf_size));)I(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),C(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,I(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),C(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,I(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&C(e),n.pending+2<=n.pending_buf_size&&(I(n,255&e.adler),I(n,e.adler>>8&255),e.adler=0,n.status=x)):n.status=x),0!==n.pending){if(C(e),0===e.avail_out)return n.last_flush=-1,l}else if(0===e.avail_in&&z(t)<=z(r)&&4!==t)return S(e,-5);if(666===n.status&&0!==e.avail_in)return S(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==f&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(T(e),0===e.lookahead)){if(t===f)return 1;break}if(e.match_length=0,r=h._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(A(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(A(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(A(e,!1),0===e.strm.avail_out)?1:2}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=w){if(T(e),e.lookahead<=w&&t===f)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=b&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+w;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=w-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=b?(r=h._tr_tally(e,1,e.match_length-b),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=h._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(A(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(A(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(A(e,!1),0===e.strm.avail_out)?1:2}(n,t):u[n.level].func(n,t);if(3!==o&&4!==o||(n.status=666),1===o||3===o)return 0===e.avail_out&&(n.last_flush=-1),l;if(2===o&&(1===t?h._tr_align(n):5!==t&&(h._tr_stored_block(n,0,0,!1),3===t&&(E(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),C(e),0===e.avail_out))return n.last_flush=-1,l}return 4!==t?l:n.wrap<=0?1:(2===n.wrap?(I(n,255&e.adler),I(n,e.adler>>8&255),I(n,e.adler>>16&255),I(n,e.adler>>24&255),I(n,255&e.total_in),I(n,e.total_in>>8&255),I(n,e.total_in>>16&255),I(n,e.total_in>>24&255)):(O(n,e.adler>>>16),O(n,65535&e.adler)),C(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?l:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==k&&69!==t&&73!==t&&91!==t&&103!==t&&t!==x&&666!==t?S(e,m):(e.state=null,t===x?S(e,-3):l):m},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,u,h,f=t.length;if(!e||!e.state)return m;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==k||r.lookahead)return m;for(1===s&&(e.adler=c(e.adler,t,f,0)),r.wrap=0,f>=r.w_size&&(0===s&&(E(r.head),r.strstart=0,r.block_start=0,r.insert=0),h=new d.Buf8(r.w_size),d.arraySet(h,t,f-r.w_size,r.w_size,0),t=h,f=r.w_size),a=e.avail_in,o=e.next_in,u=e.input,e.avail_in=f,e.next_in=0,e.input=t,T(r);r.lookahead>=b;){for(n=r.strstart,i=r.lookahead-(b-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+b-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=b-1,T(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=b-1,r.match_available=0,e.next_in=o,e.input=u,e.avail_in=a,r.wrap=s,l},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,u,h,f,l,d,c,p,m,_,g,v,b,w,y,k,x,S,z,E;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,E=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),u=r.dmax,h=r.wsize,f=r.whave,l=r.wnext,d=r.window,c=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,v=(1<<r.distbits)-1;e:do{p<15&&(c+=z[n++]<<p,p+=8,c+=z[n++]<<p,p+=8),b=m[c&g];t:for(;;){if(c>>>=w=b>>>24,p-=w,0==(w=b>>>16&255))E[s++]=65535&b;else{if(!(16&w)){if(0==(64&w)){b=m[(65535&b)+(c&(1<<w)-1)];continue t}if(32&w){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}y=65535&b,(w&=15)&&(p<w&&(c+=z[n++]<<p,p+=8),y+=c&(1<<w)-1,c>>>=w,p-=w),p<15&&(c+=z[n++]<<p,p+=8,c+=z[n++]<<p,p+=8),b=_[c&v];r:for(;;){if(c>>>=w=b>>>24,p-=w,!(16&(w=b>>>16&255))){if(0==(64&w)){b=_[(65535&b)+(c&(1<<w)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&b,p<(w&=15)&&(c+=z[n++]<<p,(p+=8)<w&&(c+=z[n++]<<p,p+=8)),u<(k+=c&(1<<w)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(c>>>=w,p-=w,(w=s-a)<k){if(f<(w=k-w)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=d,(x=0)===l){if(x+=h-w,w<y){for(y-=w;E[s++]=d[x++],--w;);x=s-k,S=E}}else if(l<w){if(x+=h+l-w,(w-=l)<y){for(y-=w;E[s++]=d[x++],--w;);if(x=0,l<y){for(y-=w=l;E[s++]=d[x++],--w;);x=s-k,S=E}}}else if(x+=l-w,w<y){for(y-=w;E[s++]=d[x++],--w;);x=s-k,S=E}for(;2<y;)E[s++]=S[x++],E[s++]=S[x++],E[s++]=S[x++],y-=3;y&&(E[s++]=S[x++],1<y&&(E[s++]=S[x++]))}else{for(x=s-k;E[s++]=E[x++],E[s++]=E[x++],E[s++]=E[x++],2<(y-=3););y&&(E[s++]=E[x++],1<y&&(E[s++]=E[x++]))}break}}break}}while(n<i&&s<o);n-=y=p>>3,c&=(1<<(p-=y<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=c,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),T=e("./inffast"),R=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function u(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function h(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=u(e,t))!==N&&(e.state=null),r):U}var f,l,d=!0;function j(e){if(d){var t;for(f=new I.Buf32(512),l=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(R(D,e.lens,0,288,f,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;R(F,e.lens,0,32,l,0,e.work,{bits:5}),d=!1}e.lencode=f,e.lenbits=9,e.distcode=l,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=u,r.inflateResetKeep=a,r.inflateInit=function(e){return h(e,15)},r.inflateInit2=h,r.inflate=function(e,t){var r,n,i,s,a,o,u,h,f,l,d,c,p,m,_,g,v,b,w,y,k,x,S,z,E=0,C=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,u=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,h=r.hold,f=r.bits,l=o,d=u,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;f<16;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(2&r.wrap&&35615===h){C[r.check=0]=255&h,C[1]=h>>>8&255,r.check=B(r.check,C,2,0),f=h=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&h)<<8)+(h>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&h)){e.msg="unknown compression method",r.mode=30;break}if(f-=4,k=8+(15&(h>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&h?10:12,f=h=0;break;case 2:for(;f<16;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(r.flags=h,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=h>>8&1),512&r.flags&&(C[0]=255&h,C[1]=h>>>8&255,r.check=B(r.check,C,2,0)),f=h=0,r.mode=3;case 3:for(;f<32;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}r.head&&(r.head.time=h),512&r.flags&&(C[0]=255&h,C[1]=h>>>8&255,C[2]=h>>>16&255,C[3]=h>>>24&255,r.check=B(r.check,C,4,0)),f=h=0,r.mode=4;case 4:for(;f<16;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}r.head&&(r.head.xflags=255&h,r.head.os=h>>8),512&r.flags&&(C[0]=255&h,C[1]=h>>>8&255,r.check=B(r.check,C,2,0)),f=h=0,r.mode=5;case 5:if(1024&r.flags){for(;f<16;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}r.length=h,r.head&&(r.head.extra_len=h),512&r.flags&&(C[0]=255&h,C[1]=h>>>8&255,r.check=B(r.check,C,2,0)),f=h=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(c=r.length)&&(c=o),c&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,c,k)),512&r.flags&&(r.check=B(r.check,n,c,s)),o-=c,s+=c,r.length-=c),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(c=0;k=n[s+c++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,n,c,s)),o-=c,s+=c,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(c=0;k=n[s+c++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,n,c,s)),o-=c,s+=c,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;f<16;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(h!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}f=h=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;f<32;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}e.adler=r.check=L(h),f=h=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=u,e.next_in=s,e.avail_in=o,r.hold=h,r.bits=f,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){h>>>=7&f,f-=7&f,r.mode=27;break}for(;f<3;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}switch(r.last=1&h,f-=1,3&(h>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;h>>>=2,f-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}h>>>=2,f-=2;break;case 14:for(h>>>=7&f,f-=7&f;f<32;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if((65535&h)!=(h>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&h,f=h=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(c=r.length){if(o<c&&(c=o),u<c&&(c=u),0===c)break e;I.arraySet(i,n,s,c,a),o-=c,s+=c,u-=c,a+=c,r.length-=c;break}r.mode=12;break;case 17:for(;f<14;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(r.nlen=257+(31&h),h>>>=5,f-=5,r.ndist=1+(31&h),h>>>=5,f-=5,r.ncode=4+(15&h),h>>>=4,f-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;f<3;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}r.lens[A[r.have++]]=7&h,h>>>=3,f-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=R(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(E=r.lencode[h&(1<<r.lenbits)-1])>>>16&255,v=65535&E,!((_=E>>>24)<=f);){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(v<16)h>>>=_,f-=_,r.lens[r.have++]=v;else{if(16===v){for(z=_+2;f<z;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(h>>>=_,f-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],c=3+(3&h),h>>>=2,f-=2}else if(17===v){for(z=_+3;f<z;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}f-=_,k=0,c=3+(7&(h>>>=_)),h>>>=3,f-=3}else{for(z=_+7;f<z;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}f-=_,k=0,c=11+(127&(h>>>=_)),h>>>=7,f-=7}if(r.have+c>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;c--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=R(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=R(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=u){e.next_out=a,e.avail_out=u,e.next_in=s,e.avail_in=o,r.hold=h,r.bits=f,T(e,d),a=e.next_out,i=e.output,u=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,h=r.hold,f=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(E=r.lencode[h&(1<<r.lenbits)-1])>>>16&255,v=65535&E,!((_=E>>>24)<=f);){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(g&&0==(240&g)){for(b=_,w=g,y=v;g=(E=r.lencode[y+((h&(1<<b+w)-1)>>b)])>>>16&255,v=65535&E,!(b+(_=E>>>24)<=f);){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}h>>>=b,f-=b,r.back+=b}if(h>>>=_,f-=_,r.back+=_,r.length=v,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;f<z;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}r.length+=h&(1<<r.extra)-1,h>>>=r.extra,f-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(E=r.distcode[h&(1<<r.distbits)-1])>>>16&255,v=65535&E,!((_=E>>>24)<=f);){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(0==(240&g)){for(b=_,w=g,y=v;g=(E=r.distcode[y+((h&(1<<b+w)-1)>>b)])>>>16&255,v=65535&E,!(b+(_=E>>>24)<=f);){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}h>>>=b,f-=b,r.back+=b}if(h>>>=_,f-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=v,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;f<z;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}r.offset+=h&(1<<r.extra)-1,h>>>=r.extra,f-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===u)break e;if(c=d-u,r.offset>c){if((c=r.offset-c)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=c>r.wnext?(c-=r.wnext,r.wsize-c):r.wnext-c,c>r.length&&(c=r.length),m=r.window}else m=i,p=a-r.offset,c=r.length;for(u<c&&(c=u),u-=c,r.length-=c;i[a++]=m[p++],--c;);0===r.length&&(r.mode=21);break;case 26:if(0===u)break e;i[a++]=r.length,u--,r.mode=21;break;case 27:if(r.wrap){for(;f<32;){if(0===o)break e;o--,h|=n[s++]<<f,f+=8}if(d-=u,e.total_out+=d,r.total+=d,d&&(e.adler=r.check=r.flags?B(r.check,i,d,a-d):O(r.check,i,d,a-d)),d=u,(r.flags?h:L(h))!==r.check){e.msg="incorrect data check",r.mode=30;break}f=h=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;f<32;){if(0===o)break e;o--,h+=n[s++]<<f,f+=8}if(h!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}f=h=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=u,e.next_in=s,e.avail_in=o,r.hold=h,r.bits=f,(r.wsize||d!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,d-e.avail_out)?(r.mode=31,-4):(l-=e.avail_in,d-=e.avail_out,e.total_in+=l,e.total_out+=d,r.total+=d,r.wrap&&d&&(e.adler=r.check=r.flags?B(r.check,i,d,e.next_out-d):O(r.check,i,d,e.next_out-d)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==l&&0===d||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var u,h,f,l,d,c,p,m,_,g=o.bits,v=0,b=0,w=0,y=0,k=0,x=0,S=0,z=0,E=0,C=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),T=null,R=0;for(v=0;v<=15;v++)O[v]=0;for(b=0;b<n;b++)O[t[r+b]]++;for(k=g,y=15;1<=y&&0===O[y];y--);if(y<k&&(k=y),0===y)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(w=1;w<y&&0===O[w];w++);for(k<w&&(k=w),v=z=1;v<=15;v++)if(z<<=1,(z-=O[v])<0)return-1;if(0<z&&(0===e||1!==y))return-1;for(B[1]=0,v=1;v<15;v++)B[v+1]=B[v]+O[v];for(b=0;b<n;b++)0!==t[r+b]&&(a[B[t[r+b]]++]=b);if(c=0===e?(A=T=a,19):1===e?(A=F,I-=257,T=N,R-=257,256):(A=U,T=P,-1),v=w,d=s,S=b=C=0,f=-1,l=(E=1<<(x=k))-1,1===e&&852<E||2===e&&592<E)return 1;for(;;){for(p=v-S,_=a[b]<c?(m=0,a[b]):a[b]>c?(m=T[R+a[b]],A[I+a[b]]):(m=96,0),u=1<<v-S,w=h=1<<x;i[d+(C>>S)+(h-=u)]=p<<24|m<<16|_|0,0!==h;);for(u=1<<v-1;C&u;)u>>=1;if(0!==u?(C&=u-1,C+=u):C=0,b++,0==--O[v]){if(v===y)break;v=t[r+a[b]]}if(k<v&&(C&l)!==f){for(0===S&&(S=k),d+=w,z=1<<(x=v-S);x+S<y&&!((z-=O[x+S])<=0);)x++,z<<=1;if(E+=1<<x,1===e&&852<E||2===e&&592<E)return 1;i[f=C&l]=k<<24|x<<16|d-s|0}}return 0!==C&&(i[d+C]=v-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var o=e("../utils/common");function n(e){for(var t=e.length;0<=--t;)e[t]=0}var _=15,i=16,u=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],h=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],f=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],l=new Array(576);n(l);var d=new Array(60);n(d);var c=new Array(512);n(c);var p=new Array(256);n(p);var m=new Array(29);n(m);var g,v,b,w=new Array(30);function y(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function s(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function k(e){return e<256?c[e]:c[256+(e>>>7)]}function x(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function S(e,t,r){e.bi_valid>i-r?(e.bi_buf|=t<<e.bi_valid&65535,x(e,e.bi_buf),e.bi_buf=t>>i-e.bi_valid,e.bi_valid+=r-i):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function z(e,t,r){S(e,r[2*t],r[2*t+1])}function E(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function C(e,t,r){var n,i,s=new Array(_+1),a=0;for(n=1;n<=_;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=E(s[o]++,o))}}function A(e){var t;for(t=0;t<286;t++)e.dyn_ltree[2*t]=0;for(t=0;t<30;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function I(e){8<e.bi_valid?x(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function O(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function B(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&O(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!O(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function T(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?z(e,i,t):(z(e,(s=p[i])+256+1,t),0!==(a=u[s])&&S(e,i-=m[s],a),z(e,s=k(--n),r),0!==(a=h[s])&&S(e,n-=w[s],a)),o<e.last_lit;);z(e,256,t)}function R(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,u=t.stat_desc.elems,h=-1;for(e.heap_len=0,e.heap_max=573,r=0;r<u;r++)0!==s[2*r]?(e.heap[++e.heap_len]=h=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=h<2?++h:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=h,r=e.heap_len>>1;1<=r;r--)B(e,s,r);for(i=u;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],B(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,B(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,u=t.dyn_tree,h=t.max_code,f=t.stat_desc.static_tree,l=t.stat_desc.has_stree,d=t.stat_desc.extra_bits,c=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=_;s++)e.bl_count[s]=0;for(u[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<573;r++)p<(s=u[2*u[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),u[2*n+1]=s,h<n||(e.bl_count[s]++,a=0,c<=n&&(a=d[n-c]),o=u[2*n],e.opt_len+=o*(s+a),l&&(e.static_len+=o*(f[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)h<(i=e.heap[--r])||(u[2*i+1]!==s&&(e.opt_len+=(s-u[2*i+1])*u[2*i],u[2*i+1]=s),n--)}}(e,t),C(s,h,e.bl_count)}function D(e,t,r){var n,i,s=-1,a=t[1],o=0,u=7,h=4;for(0===a&&(u=138,h=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<u&&i===a||(o<h?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[32]++):o<=10?e.bl_tree[34]++:e.bl_tree[36]++,s=i,h=(o=0)===a?(u=138,3):i===a?(u=6,3):(u=7,4))}function F(e,t,r){var n,i,s=-1,a=t[1],o=0,u=7,h=4;for(0===a&&(u=138,h=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<u&&i===a)){if(o<h)for(;z(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(z(e,i,e.bl_tree),o--),z(e,16,e.bl_tree),S(e,o-3,2)):o<=10?(z(e,17,e.bl_tree),S(e,o-3,3)):(z(e,18,e.bl_tree),S(e,o-11,7));s=i,h=(o=0)===a?(u=138,3):i===a?(u=6,3):(u=7,4)}}n(w);var N=!1;function U(e,t,r,n){var i,s,a;S(e,0+(n?1:0),3),s=t,a=r,I(i=e),x(i,a),x(i,~a),o.arraySet(i.pending_buf,i.window,s,a,i.pending),i.pending+=a}r._tr_init=function(e){N||(function(){var e,t,r,n,i,s=new Array(_+1);for(n=r=0;n<28;n++)for(m[n]=r,e=0;e<1<<u[n];e++)p[r++]=n;for(p[r-1]=n,n=i=0;n<16;n++)for(w[n]=i,e=0;e<1<<h[n];e++)c[i++]=n;for(i>>=7;n<30;n++)for(w[n]=i<<7,e=0;e<1<<h[n]-7;e++)c[256+i++]=n;for(t=0;t<=_;t++)s[t]=0;for(e=0;e<=143;)l[2*e+1]=8,e++,s[8]++;for(;e<=255;)l[2*e+1]=9,e++,s[9]++;for(;e<=279;)l[2*e+1]=7,e++,s[7]++;for(;e<=287;)l[2*e+1]=8,e++,s[8]++;for(C(l,287,s),e=0;e<30;e++)d[2*e+1]=5,d[2*e]=E(e,5);g=new y(l,u,257,286,_),v=new y(d,h,0,30,_),b=new y(new Array(0),a,0,19,7)}(),N=!0),e.l_desc=new s(e.dyn_ltree,g),e.d_desc=new s(e.dyn_dtree,v),e.bl_desc=new s(e.bl_tree,b),e.bi_buf=0,e.bi_valid=0,A(e)},r._tr_stored_block=U,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<256;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),R(e,e.l_desc),R(e,e.d_desc),a=function(e){var t;for(D(e,e.dyn_ltree,e.l_desc.max_code),D(e,e.dyn_dtree,e.d_desc.max_code),R(e,e.bl_desc),t=18;3<=t&&0===e.bl_tree[2*f[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?U(e,t,r,n):4===e.strategy||s===i?(S(e,2+(n?1:0),3),T(e,l,d)):(S(e,4+(n?1:0),3),function(e,t,r,n){var i;for(S(e,t-257,5),S(e,r-1,5),S(e,n-4,4),i=0;i<n;i++)S(e,e.bl_tree[2*f[i]+1],3);F(e,e.dyn_ltree,t-1),F(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),T(e,e.dyn_ltree,e.dyn_dtree)),A(e),n&&I(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(p[r]+256+1)]++,e.dyn_dtree[2*k(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){var t;S(e,2,3),z(e,256,l),16===(t=e).bi_valid?(x(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){"use strict";t.exports="function"==typeof setImmediate?setImmediate:function(){var e=[].slice.apply(arguments);e.splice(1,0,0),setTimeout.apply(null,e)}},{}]},{},[10])(10)})}).call(this,void 0!==r?r:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)})}).call(this,void 0!==r?r:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)})}).call(this,void 0!==r?r:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)})}).call(this,void 0!==r?r:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/capture/capture.js":
/*!********************************!*\
  !*** ./src/capture/capture.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/element */ "./src/utils/element.js");






const container = document.querySelector(".container");
const saveZip = document.getElementById("save_zip");
const savePdf = document.getElementById("save_pdf");
const state = {
	urls: []
}

const params = decodeURI(window.location.href.split('?')[1])
.split('&')
.map(param => param.split('='))
.reduce((values, [ key, value ]) => 
{
	values[key] = value
	return values
}, 
{});

if (params.u)
{
	const decodedData = window.atob(params.u);
	if (decodedData)
	{
		state.urls = JSON.parse(decodedData);
	}
}

for (let i in state.urls)
{
	const url = state.urls[i];
	const urlArr = url.split('/');
	const fileName = urlArr[urlArr.length - 1].split(".")[0];

	createScreenshot(url, fileName)
}

function getJPEG(url, callback) 
{
    var img = new Image();
    img.onError = () => console.log('Cannot load image: "'+url+'"');
    img.onload = () => callback(img);
    img.src = url;
}

function createScreenshot(url, fileName)
{
	const screenshot = document.createElement('div');
	screenshot.classList.add("screenshot");

	const img = document.createElement('img');
	img.src = url; 

	const options = document.createElement('div');
	options.classList.add("options");
	options.innerHTML = `
		<h3>${fileName}</h3>
		<div class="space"></div>
		<a href='${url}' download='${fileName}.png'>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
					<polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>
				</svg>
				<span>Save PNG</span>
			</button>
		</a>
	`;

	const saveJPG = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create(`
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
				<polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>
			</svg>
			<span>Save JPEG</span>
		</button>
	`);
	saveJPG.addEventListener("click", () => 
	{
		getJPEG(url, (image) => 
		{
			const canvas = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create(`
				<canvas 
					style="display: none" 
					width="${image.width}" 
					height="${image.height}"></canvas>
			`);
			const context = canvas.getContext("2d");
			context.drawImage(image, image.x, image.y);
			const imgDatajpeg = canvas.toDataURL("image/jpeg");
			Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(imgDatajpeg, `${fileName}.jpeg`);
		});
	});

	options.appendChild(saveJPG);

	screenshot.appendChild(img);
	screenshot.appendChild(options);
	container.appendChild(screenshot);
}

savePdf.addEventListener("click", () => 
{
	let doc = null;
	let totalImages = state.urls.length;

	const dummyPdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__["jsPDF"]();
	const width = dummyPdf.internal.pageSize.getWidth();

	const addToPdf = (image) => 
	{
		const height = (image.height * width) / image.width;
		if (!doc) doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["jsPDF"]({format: [width, height]});  
		else doc.addPage([width, height]);
		
		doc.addImage(image, 'JPEG', 0, 0, width, height, 'image');
		
		totalImages--;
		if (totalImages === 0) doc.save("screenshots.pdf");
	}

	for (let i = 0; i < state.urls.length; i++)
	{
		getJPEG(state.urls[0], addToPdf);
	}
});

saveZip.addEventListener("click", () => 
{
	const zip = new jszip__WEBPACK_IMPORTED_MODULE_0___default.a();

	let doneImages = 0;
	for (let i = 0; i < state.urls.length; i++)
	{
		const url = state.urls[i];
		const urlArr = url.split('/');
		const fileName = urlArr[urlArr.length - 1];
		JSZipUtils.getBinaryContent(url, function (err, data) 
		{
			if (err) console.log(err);
			
			zip.file(`${fileName}`, data, { binary: true });
			doneImages++;

			if (doneImages === state.urls.length) 
			{
				zip.generateAsync({ type: 'blob' }).then((content) => 
				{
					Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(content, "screenshots.zip");
				});
			}
		});
	}
});

/***/ }),

/***/ "./src/utils/element.js":
/*!******************************!*\
  !*** ./src/utils/element.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_selector_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-selector-generator */ "./node_modules/css-selector-generator/build/index.js");
/* harmony import */ var css_selector_generator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_selector_generator__WEBPACK_IMPORTED_MODULE_0__);



function create(text)
{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = text;
    return wrapper.firstElementChild;
}

function getHtml(target)
{
    const wrapper = document.createElement('div');
    wrapper.appendChild(target.cloneNode(true));
    return wrapper.innerHTML;
}

function getOuterHtml(target)
{
    const node = target.cloneNode(true);
    node.innerHTML = "";
    return node.outerHTML;
}

function isFixed(elem)
{
    do 
    {
        if (window.getComputedStyle(elem).position == 'fixed') return true;
    } 
    while (elem = elem.offsetParent);
    return false;
}

function isSticky(elem)
{
    do 
    {
        if (window.getComputedStyle(elem).position == 'sticky') return true;
    } 
    while (elem = elem.offsetParent);
    return false;
}

function findParentWithId(id, child, maxIterations)
{
    let parent = null;

    let iterations = 0;
    let element = child;
    do 
    {
        if (iterations >= maxIterations) break;
        if (element.id === id)
        { 
            parent = element;
            break;
        }

        iterations += 1;
    } 
    while (element = element.parentNode);

    return parent;
}

function getSelector(element)
{
    let selector = "";
    if (element.id) selector += `#${element.id}`;
    const classes = element.getAttribute("class");
    if (classes) selector += `.${classes.split(" ").map(item => item.trim()).filter(item => item !== "").join(".")}`;

    return selector;
}

function getUniqueSelector(element)
{
    return css_selector_generator__WEBPACK_IMPORTED_MODULE_0___default()(element, {root: document.body, blacklist: [/(^\[|\]$)/]});
}

function getSource(element)
{    
    let src = "";
    const tagName = element.tagName.toUpperCase();
    if (tagName === "IMG" || tagName === "VIDEO")
    {
        if (tagName === "IMG") src = element.src;
        else
        {
            const source = element.querySelector('source');
            if (element.src) src = element.src;
            else if (source) src = source.src;
        }
    }
    
    return src;
}

/* harmony default export */ __webpack_exports__["default"] = ({
	getSelector,
    create,
    getHtml,
    getOuterHtml,
    isFixed,
    isSticky,
    findParentWithId,
    getSource,
    getUniqueSelector
});

/***/ })

/******/ });