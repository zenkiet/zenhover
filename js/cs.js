/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content_scripts/cs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/css-selector-generator/build/index.js":
/*!************************************************************!*\
  !*** ./node_modules/css-selector-generator/build/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,r){ true?module.exports=r():undefined}(self,(function(){return(()=>{var t={3426:(t,r,e)=>{var n=e(7529);function o(t,r,e){Array.isArray(t)?t.push(r):t[e]=r}t.exports=function(t){var r,e,i,a=[];if(Array.isArray(t))e=[],r=t.length-1;else{if("object"!=typeof t||null===t)throw new TypeError("Expecting an Array or an Object, but `"+(null===t?"null":typeof t)+"` provided.");e={},i=Object.keys(t),r=i.length-1}return function e(u,c){var s,f,l,h;for(f=i?i[c]:c,Array.isArray(t[f])||(void 0===t[f]?t[f]=[]:t[f]=[t[f]]),s=0;s<t[f].length;s++)o((h=u,l=Array.isArray(h)?[].concat(h):n(h)),t[f][s],f),c>=r?a.push(l):e(l,c+1)}(e,0),a}},1926:(t,r,e)=>{e(2526),e(2443),e(1817),e(2401),e(8722),e(2165),e(9007),e(6066),e(3510),e(1840),e(6982),e(2159),e(6649),e(9341),e(543),e(9170),e(1038),e(9753),e(6572),e(2222),e(545),e(6541),e(3290),e(7327),e(9826),e(4553),e(4944),e(6535),e(9554),e(6699),e(2772),e(9600),e(4986),e(1249),e(5827),e(6644),e(5069),e(7042),e(5212),e(2707),e(561),e(8706),e(3792),e(9244),e(6992),e(4812),e(8309),e(4855),e(5837),e(9601),e(8011),e(9070),e(3321),e(9720),e(3371),e(8559),e(5003),e(9337),e(6210),e(489),e(3304),e(1825),e(8410),e(2200),e(7941),e(7227),e(514),e(8304),e(6833),e(1539),e(9595),e(5500),e(4869),e(3952),e(4953),e(8992),e(9841),e(7852),e(2023),e(4723),e(6373),e(6528),e(3112),e(2481),e(5306),e(4765),e(3123),e(6755),e(3210),e(5674),e(8702),e(8783),e(5218),e(4475),e(7929),e(915),e(9253),e(2125),e(8830),e(8734),e(9254),e(7268),e(7397),e(86),e(623),e(8757),e(4603),e(4916),e(2087),e(8386),e(7601),e(9714),e(1058),e(4678),e(9653),e(3299),e(5192),e(3161),e(4048),e(8285),e(4363),e(5994),e(1874),e(9494),e(6977),e(5147),e(9752),e(2376),e(3181),e(3484),e(2388),e(8621),e(403),e(4755),e(5438),e(332),e(658),e(197),e(4914),e(2420),e(160),e(970),e(2703),e(3689),e(3843),e(5735),e(8733),e(3710),e(6078),e(8862),e(3706),e(8674),e(7922),e(4668),e(7727),e(1532),e(189),e(4129),e(8478),e(8264),e(6938),e(9575),e(6716),e(7145),e(2472),e(9743),e(5109),e(8255),e(5125),e(9135),e(4197),e(6495),e(8145),e(5206),e(2990),e(8927),e(3105),e(5035),e(4345),e(7174),e(2846),e(4731),e(7209),e(6319),e(8867),e(7789),e(3739),e(9368),e(4483),e(2056),e(3462),e(678),e(7462),e(3824),e(5021),e(2974),e(5016),e(224),e(2419),e(9596),e(2586),e(4819),e(5683),e(9361),e(1037),e(5898),e(7556),e(4361),e(3593),e(9532),e(1299);var n=e(857);t.exports=n},3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},1223:(t,r,e)=>{var n=e(5112),o=e(30),i=e(3070),a=n("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},1530:(t,r,e)=>{"use strict";var n=e(8710).charAt;t.exports=function(t,r,e){return r+(e?n(t,r).length:1)}},5787:t=>{t.exports=function(t,r,e){if(!(t instanceof r))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},9670:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},4019:t=>{t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:(t,r,e)=>{"use strict";var n,o=e(4019),i=e(9781),a=e(7854),u=e(111),c=e(6656),s=e(648),f=e(8880),l=e(1320),h=e(3070).f,p=e(9518),v=e(7674),g=e(5112),d=e(9711),y=a.Int8Array,m=y&&y.prototype,b=a.Uint8ClampedArray,x=b&&b.prototype,w=y&&p(y),S=m&&p(m),A=Object.prototype,E=A.isPrototypeOf,O=g("toStringTag"),T=d("TYPED_ARRAY_TAG"),j=o&&!!v&&"Opera"!==s(a.opera),R=!1,I={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},L=function(t){if(!u(t))return!1;var r=s(t);return c(I,r)||c(M,r)};for(n in I)a[n]||(j=!1);if((!j||"function"!=typeof w||w===Function.prototype)&&(w=function(){throw TypeError("Incorrect invocation")},j))for(n in I)a[n]&&v(a[n],w);if((!j||!S||S===A)&&(S=w.prototype,j))for(n in I)a[n]&&v(a[n].prototype,S);if(j&&p(x)!==S&&v(x,S),i&&!c(S,O))for(n in R=!0,h(S,O,{get:function(){return u(this)?this[T]:void 0}}),I)a[n]&&f(a[n],T,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:j,TYPED_ARRAY_TAG:R&&T,aTypedArray:function(t){if(L(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(v){if(E.call(w,t))return t}else for(var r in I)if(c(I,n)){var e=a[r];if(e&&(t===e||E.call(e,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e){if(i){if(e)for(var n in I){var o=a[n];o&&c(o.prototype,t)&&delete o.prototype[t]}S[t]&&!e||l(S,t,e?r:j&&m[t]||r)}},exportTypedArrayStaticMethod:function(t,r,e){var n,o;if(i){if(v){if(e)for(n in I)(o=a[n])&&c(o,t)&&delete o[t];if(w[t]&&!e)return;try{return l(w,t,e?r:j&&y[t]||r)}catch(t){}}for(n in I)!(o=a[n])||o[t]&&!e||l(o,t,r)}},isView:function(t){if(!u(t))return!1;var r=s(t);return"DataView"===r||c(I,r)||c(M,r)},isTypedArray:L,TypedArray:w,TypedArrayPrototype:S}},3331:(t,r,e)=>{"use strict";var n=e(7854),o=e(9781),i=e(4019),a=e(8880),u=e(2248),c=e(7293),s=e(5787),f=e(9958),l=e(7466),h=e(7067),p=e(1179),v=e(9518),g=e(7674),d=e(8006).f,y=e(3070).f,m=e(1285),b=e(8003),x=e(9909),w=x.get,S=x.set,A="ArrayBuffer",E="DataView",O="Wrong index",T=n.ArrayBuffer,j=T,R=n.DataView,I=R&&R.prototype,M=Object.prototype,L=n.RangeError,k=p.pack,P=p.unpack,N=function(t){return[255&t]},_=function(t){return[255&t,t>>8&255]},U=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},F=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},C=function(t){return k(t,23,4)},D=function(t){return k(t,52,8)},B=function(t,r){y(t.prototype,r,{get:function(){return w(this)[r]}})},z=function(t,r,e,n){var o=h(e),i=w(t);if(o+r>i.byteLength)throw L(O);var a=w(i.buffer).bytes,u=o+i.byteOffset,c=a.slice(u,u+r);return n?c:c.reverse()},q=function(t,r,e,n,o,i){var a=h(e),u=w(t);if(a+r>u.byteLength)throw L(O);for(var c=w(u.buffer).bytes,s=a+u.byteOffset,f=n(+o),l=0;l<r;l++)c[s+l]=f[i?l:r-l-1]};if(i){if(!c((function(){T(1)}))||!c((function(){new T(-1)}))||c((function(){return new T,new T(1.5),new T(NaN),T.name!=A}))){for(var W,G=(j=function(t){return s(this,j),new T(h(t))}).prototype=T.prototype,V=d(T),$=0;V.length>$;)(W=V[$++])in j||a(j,W,T[W]);G.constructor=j}g&&v(I)!==M&&g(I,M);var Y=new R(new j(2)),J=I.setInt8;Y.setInt8(0,2147483648),Y.setInt8(1,2147483649),!Y.getInt8(0)&&Y.getInt8(1)||u(I,{setInt8:function(t,r){J.call(this,t,r<<24>>24)},setUint8:function(t,r){J.call(this,t,r<<24>>24)}},{unsafe:!0})}else j=function(t){s(this,j,A);var r=h(t);S(this,{bytes:m.call(new Array(r),0),byteLength:r}),o||(this.byteLength=r)},R=function(t,r,e){s(this,R,E),s(t,j,E);var n=w(t).byteLength,i=f(r);if(i<0||i>n)throw L("Wrong offset");if(i+(e=void 0===e?n-i:l(e))>n)throw L("Wrong length");S(this,{buffer:t,byteLength:e,byteOffset:i}),o||(this.buffer=t,this.byteLength=e,this.byteOffset=i)},o&&(B(j,"byteLength"),B(R,"buffer"),B(R,"byteLength"),B(R,"byteOffset")),u(R.prototype,{getInt8:function(t){return z(this,1,t)[0]<<24>>24},getUint8:function(t){return z(this,1,t)[0]},getInt16:function(t){var r=z(this,2,t,arguments.length>1?arguments[1]:void 0);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t){var r=z(this,2,t,arguments.length>1?arguments[1]:void 0);return r[1]<<8|r[0]},getInt32:function(t){return F(z(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return F(z(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return P(z(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return P(z(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,r){q(this,1,t,N,r)},setUint8:function(t,r){q(this,1,t,N,r)},setInt16:function(t,r){q(this,2,t,_,r,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,r){q(this,2,t,_,r,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,r){q(this,4,t,U,r,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,r){q(this,4,t,U,r,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,r){q(this,4,t,C,r,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,r){q(this,8,t,D,r,arguments.length>2?arguments[2]:void 0)}});b(j,A),b(R,E),t.exports={ArrayBuffer:j,DataView:R}},1048:(t,r,e)=>{"use strict";var n=e(7908),o=e(1400),i=e(7466),a=Math.min;t.exports=[].copyWithin||function(t,r){var e=n(this),u=i(e.length),c=o(t,u),s=o(r,u),f=arguments.length>2?arguments[2]:void 0,l=a((void 0===f?u:o(f,u))-s,u-c),h=1;for(s<c&&c<s+l&&(h=-1,s+=l-1,c+=l-1);l-- >0;)s in e?e[c]=e[s]:delete e[c],c+=h,s+=h;return e}},1285:(t,r,e)=>{"use strict";var n=e(7908),o=e(1400),i=e(7466);t.exports=function(t){for(var r=n(this),e=i(r.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,e),c=a>2?arguments[2]:void 0,s=void 0===c?e:o(c,e);s>u;)r[u++]=t;return r}},8533:(t,r,e)=>{"use strict";var n=e(2092).forEach,o=e(2133)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},8457:(t,r,e)=>{"use strict";var n=e(9974),o=e(7908),i=e(3411),a=e(7659),u=e(7466),c=e(6135),s=e(1246);t.exports=function(t){var r,e,f,l,h,p,v=o(t),g="function"==typeof this?this:Array,d=arguments.length,y=d>1?arguments[1]:void 0,m=void 0!==y,b=s(v),x=0;if(m&&(y=n(y,d>2?arguments[2]:void 0,2)),null==b||g==Array&&a(b))for(e=new g(r=u(v.length));r>x;x++)p=m?y(v[x],x):v[x],c(e,x,p);else for(h=(l=b.call(v)).next,e=new g;!(f=h.call(l)).done;x++)p=m?i(l,y,[f.value,x],!0):f.value,c(e,x,p);return e.length=x,e}},1318:(t,r,e)=>{var n=e(5656),o=e(7466),i=e(1400),a=function(t){return function(r,e,a){var u,c=n(r),s=o(c.length),f=i(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(8361),i=e(7908),a=e(7466),u=e(5417),c=[].push,s=function(t){var r=1==t,e=2==t,s=3==t,f=4==t,l=6==t,h=7==t,p=5==t||l;return function(v,g,d,y){for(var m,b,x=i(v),w=o(x),S=n(g,d,3),A=a(w.length),E=0,O=y||u,T=r?O(v,A):e||h?O(v,0):void 0;A>E;E++)if((p||E in w)&&(b=S(m=w[E],E,x),t))if(r)T[E]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:c.call(T,m)}else switch(t){case 4:return!1;case 7:c.call(T,m)}return l?-1:s||f?f:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},6583:(t,r,e)=>{"use strict";var n=e(5656),o=e(9958),i=e(7466),a=e(2133),u=Math.min,c=[].lastIndexOf,s=!!c&&1/[1].lastIndexOf(1,-0)<0,f=a("lastIndexOf"),l=s||!f;t.exports=l?function(t){if(s)return c.apply(this,arguments)||0;var r=n(this),e=i(r.length),a=e-1;for(arguments.length>1&&(a=u(a,o(arguments[1]))),a<0&&(a=e+a);a>=0;a--)if(a in r&&r[a]===t)return a||0;return-1}:c},1194:(t,r,e)=>{var n=e(7293),o=e(5112),i=e(7392),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},2133:(t,r,e)=>{"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},3671:(t,r,e)=>{var n=e(3099),o=e(7908),i=e(8361),a=e(7466),u=function(t){return function(r,e,u,c){n(e);var s=o(r),f=i(s),l=a(s.length),h=t?l-1:0,p=t?-1:1;if(u<2)for(;;){if(h in f){c=f[h],h+=p;break}if(h+=p,t?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:l>h;h+=p)h in f&&(c=e(c,f[h],h,s));return c}};t.exports={left:u(!1),right:u(!0)}},5417:(t,r,e)=>{var n=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t,r){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?n(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},3411:(t,r,e)=>{var n=e(9670),o=e(9212);t.exports=function(t,r,e,i){try{return i?r(n(e)[0],e[1]):r(e)}catch(r){throw o(t),r}}},7072:(t,r,e)=>{var n=e(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},648:(t,r,e)=>{var n=e(1694),o=e(4326),i=e(5112)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?e:a?o(r):"Object"==(n=o(r))&&"function"==typeof r.callee?"Arguments":n}},5631:(t,r,e)=>{"use strict";var n=e(3070).f,o=e(30),i=e(2248),a=e(9974),u=e(5787),c=e(408),s=e(654),f=e(6340),l=e(9781),h=e(2423).fastKey,p=e(9909),v=p.set,g=p.getterFor;t.exports={getConstructor:function(t,r,e,s){var f=t((function(t,n){u(t,f,r),v(t,{type:r,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=n&&c(n,t[s],{that:t,AS_ENTRIES:e})})),p=g(r),d=function(t,r,e){var n,o,i=p(t),a=y(t,r);return a?a.value=e:(i.last=a={index:o=h(r,!0),key:r,value:e,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=a),n&&(n.next=a),l?i.size++:t.size++,"F"!==o&&(i.index[o]=a)),t},y=function(t,r){var e,n=p(t),o=h(r);if("F"!==o)return n.index[o];for(e=n.first;e;e=e.next)if(e.key==r)return e};return i(f.prototype,{clear:function(){for(var t=p(this),r=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete r[e.index],e=e.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var r=this,e=p(r),n=y(r,t);if(n){var o=n.next,i=n.previous;delete e.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),e.first==n&&(e.first=o),e.last==n&&(e.last=i),l?e.size--:r.size--}return!!n},forEach:function(t){for(var r,e=p(this),n=a(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.next:e.first;)for(n(r.value,r.key,this);r&&r.removed;)r=r.previous},has:function(t){return!!y(this,t)}}),i(f.prototype,e?{get:function(t){var r=y(this,t);return r&&r.value},set:function(t,r){return d(this,0===t?0:t,r)}}:{add:function(t){return d(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return p(this).size}}),f},setStrong:function(t,r,e){var n=r+" Iterator",o=g(r),i=g(n);s(t,r,(function(t,r){v(this,{type:n,target:t,state:o(t),kind:r,last:void 0})}),(function(){for(var t=i(this),r=t.kind,e=t.last;e&&e.removed;)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==r?{value:e.key,done:!1}:"values"==r?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),f(r)}}},9320:(t,r,e)=>{"use strict";var n=e(2248),o=e(2423).getWeakData,i=e(9670),a=e(111),u=e(5787),c=e(408),s=e(2092),f=e(6656),l=e(9909),h=l.set,p=l.getterFor,v=s.find,g=s.findIndex,d=0,y=function(t){return t.frozen||(t.frozen=new m)},m=function(){this.entries=[]},b=function(t,r){return v(t.entries,(function(t){return t[0]===r}))};m.prototype={get:function(t){var r=b(this,t);if(r)return r[1]},has:function(t){return!!b(this,t)},set:function(t,r){var e=b(this,t);e?e[1]=r:this.entries.push([t,r])},delete:function(t){var r=g(this.entries,(function(r){return r[0]===t}));return~r&&this.entries.splice(r,1),!!~r}},t.exports={getConstructor:function(t,r,e,s){var l=t((function(t,n){u(t,l,r),h(t,{type:r,id:d++,frozen:void 0}),null!=n&&c(n,t[s],{that:t,AS_ENTRIES:e})})),v=p(r),g=function(t,r,e){var n=v(t),a=o(i(r),!0);return!0===a?y(n).set(r,e):a[n.id]=e,t};return n(l.prototype,{delete:function(t){var r=v(this);if(!a(t))return!1;var e=o(t);return!0===e?y(r).delete(t):e&&f(e,r.id)&&delete e[r.id]},has:function(t){var r=v(this);if(!a(t))return!1;var e=o(t);return!0===e?y(r).has(t):e&&f(e,r.id)}}),n(l.prototype,e?{get:function(t){var r=v(this);if(a(t)){var e=o(t);return!0===e?y(r).get(t):e?e[r.id]:void 0}},set:function(t,r){return g(this,t,r)}}:{add:function(t){return g(this,t,!0)}}),l}}},7710:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(4705),a=e(1320),u=e(2423),c=e(408),s=e(5787),f=e(111),l=e(7293),h=e(7072),p=e(8003),v=e(9587);t.exports=function(t,r,e){var g=-1!==t.indexOf("Map"),d=-1!==t.indexOf("Weak"),y=g?"set":"add",m=o[t],b=m&&m.prototype,x=m,w={},S=function(t){var r=b[t];a(b,t,"add"==t?function(t){return r.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(d&&!f(t))&&r.call(this,0===t?0:t)}:"get"==t?function(t){return d&&!f(t)?void 0:r.call(this,0===t?0:t)}:"has"==t?function(t){return!(d&&!f(t))&&r.call(this,0===t?0:t)}:function(t,e){return r.call(this,0===t?0:t,e),this})};if(i(t,"function"!=typeof m||!(d||b.forEach&&!l((function(){(new m).entries().next()})))))x=e.getConstructor(r,t,g,y),u.REQUIRED=!0;else if(i(t,!0)){var A=new x,E=A[y](d?{}:-0,1)!=A,O=l((function(){A.has(1)})),T=h((function(t){new m(t)})),j=!d&&l((function(){for(var t=new m,r=5;r--;)t[y](r,r);return!t.has(-0)}));T||((x=r((function(r,e){s(r,x,t);var n=v(new m,r,x);return null!=e&&c(e,n[y],{that:n,AS_ENTRIES:g}),n}))).prototype=b,b.constructor=x),(O||j)&&(S("delete"),S("has"),g&&S("get")),(j||E)&&S(y),d&&b.clear&&delete b.clear}return w[t]=x,n({global:!0,forced:x!=m},w),p(x,t),d||e.setStrong(x,t,g),x}},9920:(t,r,e)=>{var n=e(6656),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,r){for(var e=o(r),u=a.f,c=i.f,s=0;s<e.length;s++){var f=e[s];n(t,f)||u(t,f,c(r,f))}}},4964:(t,r,e)=>{var n=e(5112)("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[n]=!1,"/./"[t](r)}catch(t){}}return!1}},8544:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4230:(t,r,e)=>{var n=e(4488),o=/"/g;t.exports=function(t,r,e,i){var a=String(n(t)),u="<"+r;return""!==e&&(u+=" "+e+'="'+String(i).replace(o,"&quot;")+'"'),u+">"+a+"</"+r+">"}},4994:(t,r,e)=>{"use strict";var n=e(3383).IteratorPrototype,o=e(30),i=e(9114),a=e(8003),u=e(7497),c=function(){return this};t.exports=function(t,r,e){var s=r+" Iterator";return t.prototype=o(n,{next:i(1,e)}),a(t,s,!1,!0),u[s]=c,t}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:(t,r,e)=>{"use strict";var n=e(7593),o=e(3070),i=e(9114);t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},5573:(t,r,e)=>{"use strict";var n=e(7293),o=e(6650).start,i=Math.abs,a=Date.prototype,u=a.getTime,c=a.toISOString;t.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!n((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(u.call(this)))throw RangeError("Invalid time value");var t=this,r=t.getUTCFullYear(),e=t.getUTCMilliseconds(),n=r<0?"-":r>9999?"+":"";return n+o(i(r),n?6:4,0)+"-"+o(t.getUTCMonth()+1,2,0)+"-"+o(t.getUTCDate(),2,0)+"T"+o(t.getUTCHours(),2,0)+":"+o(t.getUTCMinutes(),2,0)+":"+o(t.getUTCSeconds(),2,0)+"."+o(e,3,0)+"Z"}:c},8709:(t,r,e)=>{"use strict";var n=e(9670),o=e(7593);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return o(n(this),"number"!==t)}},654:(t,r,e)=>{"use strict";var n=e(2109),o=e(4994),i=e(9518),a=e(7674),u=e(8003),c=e(8880),s=e(1320),f=e(5112),l=e(1913),h=e(7497),p=e(3383),v=p.IteratorPrototype,g=p.BUGGY_SAFARI_ITERATORS,d=f("iterator"),y="keys",m="values",b="entries",x=function(){return this};t.exports=function(t,r,e,f,p,w,S){o(e,r,f);var A,E,O,T=function(t){if(t===p&&L)return L;if(!g&&t in I)return I[t];switch(t){case y:case m:case b:return function(){return new e(this,t)}}return function(){return new e(this)}},j=r+" Iterator",R=!1,I=t.prototype,M=I[d]||I["@@iterator"]||p&&I[p],L=!g&&M||T(p),k="Array"==r&&I.entries||M;if(k&&(A=i(k.call(new t)),v!==Object.prototype&&A.next&&(l||i(A)===v||(a?a(A,v):"function"!=typeof A[d]&&c(A,d,x)),u(A,j,!0,!0),l&&(h[j]=x))),p==m&&M&&M.name!==m&&(R=!0,L=function(){return M.call(this)}),l&&!S||I[d]===L||c(I,d,L),h[r]=L,p)if(E={values:T(m),keys:w?L:T(y),entries:T(b)},S)for(O in E)(g||R||!(O in I))&&s(I,O,E[O]);else n({target:r,proto:!0,forced:g||R},E);return E}},7235:(t,r,e)=>{var n=e(857),o=e(6656),i=e(6061),a=e(3070).f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8334:(t,r,e)=>{var n=e(8113);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},5268:(t,r,e)=>{var n=e(4326),o=e(7854);t.exports="process"==n(o.process)},1036:(t,r,e)=>{var n=e(8113);t.exports=/web0s(?!.*chrome)/i.test(n)},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),a=e(8113),u=i.process,c=u&&u.versions,s=c&&c.v8;s?o=(n=s.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),a=e(1320),u=e(3505),c=e(9920),s=e(4705);t.exports=function(t,r){var e,f,l,h,p,v=t.target,g=t.global,d=t.stat;if(e=g?n:d?n[v]||u(v,{}):(n[v]||{}).prototype)for(f in r){if(h=r[f],l=t.noTargetGet?(p=o(e,f))&&p.value:e[f],!s(g?f:v+(d?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;c(h,l)}(t.sham||l&&l.sham)&&i(h,"sham",!0),a(e,f,h,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:(t,r,e)=>{"use strict";e(4916);var n=e(1320),o=e(7293),i=e(5112),a=e(2261),u=e(8880),c=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),l=i("replace"),h=!!/./[l]&&""===/./[l]("a","$0"),p=!o((function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,r,e,l){var v=i(t),g=!o((function(){var r={};return r[v]=function(){return 7},7!=""[t](r)})),d=g&&!o((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[c]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return r=!0,null},e[v](""),!r}));if(!g||!d||"replace"===t&&(!s||!f||h)||"split"===t&&!p){var y=/./[v],m=e(v,""[t],(function(t,r,e,n,o){return r.exec===a?g&&!o?{done:!0,value:y.call(r,e,n)}:{done:!0,value:t.call(e,r,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=m[0],x=m[1];n(String.prototype,t,b),n(RegExp.prototype,v,2==r?function(t,r){return x.call(t,this,r)}:function(t){return x.call(t,this)})}l&&u(RegExp.prototype[v],"sham",!0)}},6790:(t,r,e)=>{"use strict";var n=e(3157),o=e(7466),i=e(9974),a=function(t,r,e,u,c,s,f,l){for(var h,p=c,v=0,g=!!f&&i(f,l,3);v<u;){if(v in e){if(h=g?g(e[v],v,r):e[v],s>0&&n(h))p=a(t,r,h,o(h.length),p,s-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[p]=h}p++}v++}return p};t.exports=a},6677:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},9974:(t,r,e)=>{var n=e(3099);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},7065:(t,r,e)=>{"use strict";var n=e(3099),o=e(111),i=[].slice,a={},u=function(t,r,e){if(!(r in a)){for(var n=[],o=0;o<r;o++)n[o]="a["+o+"]";a[r]=Function("C,a","return new C("+n.join(",")+")")}return a[r](t,e)};t.exports=Function.bind||function(t){var r=n(this),e=i.call(arguments,1),a=function(){var n=e.concat(i.call(arguments));return this instanceof a?u(r,n.length,n):r.apply(t,n)};return o(r.prototype)&&(a.prototype=r.prototype),a}},5005:(t,r,e)=>{var n=e(857),o=e(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},1246:(t,r,e)=>{var n=e(648),o=e(7497),i=e(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},8554:(t,r,e)=>{var n=e(9670),o=e(1246);t.exports=function(t){var r=o(t);if("function"!=typeof r)throw TypeError(String(t)+" is not iterable");return n(r.call(t))}},647:(t,r,e)=>{var n=e(7908),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,e,c,s,f){var l=e+t.length,h=c.length,p=u;return void 0!==s&&(s=n(s),p=a),i.call(f,p,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(l);case"<":a=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>h){var f=o(u/10);return 0===f?n:f<=h?void 0===c[f-1]?i.charAt(1):c[f-1]+i.charAt(1):n}a=c[u-1]}return void 0===a?"":a}))}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:t=>{var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},3501:t=>{t.exports={}},842:(t,r,e)=>{var n=e(7854);t.exports=function(t,r){var e=n.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,r))}},490:(t,r,e)=>{var n=e(5005);t.exports=n("document","documentElement")},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},1179:t=>{var r=Math.abs,e=Math.pow,n=Math.floor,o=Math.log,i=Math.LN2;t.exports={pack:function(t,a,u){var c,s,f,l=new Array(u),h=8*u-a-1,p=(1<<h)-1,v=p>>1,g=23===a?e(2,-24)-e(2,-77):0,d=t<0||0===t&&1/t<0?1:0,y=0;for((t=r(t))!=t||t===1/0?(s=t!=t?1:0,c=p):(c=n(o(t)/i),t*(f=e(2,-c))<1&&(c--,f*=2),(t+=c+v>=1?g/f:g*e(2,1-v))*f>=2&&(c++,f/=2),c+v>=p?(s=0,c=p):c+v>=1?(s=(t*f-1)*e(2,a),c+=v):(s=t*e(2,v-1)*e(2,a),c=0));a>=8;l[y++]=255&s,s/=256,a-=8);for(c=c<<a|s,h+=a;h>0;l[y++]=255&c,c/=256,h-=8);return l[--y]|=128*d,l},unpack:function(t,r){var n,o=t.length,i=8*o-r-1,a=(1<<i)-1,u=a>>1,c=i-7,s=o-1,f=t[s--],l=127&f;for(f>>=7;c>0;l=256*l+t[s],s--,c-=8);for(n=l&(1<<-c)-1,l>>=-c,c+=r;c>0;n=256*n+t[s],s--,c-=8);if(0===l)l=1-u;else{if(l===a)return n?NaN:f?-1/0:1/0;n+=e(2,r),l-=u}return(f?-1:1)*n*e(2,l-r)}}},8361:(t,r,e)=>{var n=e(7293),o=e(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},9587:(t,r,e)=>{var n=e(111),o=e(7674);t.exports=function(t,r,e){var i,a;return o&&"function"==typeof(i=r.constructor)&&i!==e&&n(a=i.prototype)&&a!==e.prototype&&o(t,a),t}},2788:(t,r,e)=>{var n=e(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},2423:(t,r,e)=>{var n=e(3501),o=e(111),i=e(6656),a=e(3070).f,u=e(9711),c=e(6677),s=u("meta"),f=0,l=Object.isExtensible||function(){return!0},h=function(t){a(t,s,{value:{objectID:"O"+ ++f,weakData:{}}})},p=t.exports={REQUIRED:!1,fastKey:function(t,r){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,s)){if(!l(t))return"F";if(!r)return"E";h(t)}return t[s].objectID},getWeakData:function(t,r){if(!i(t,s)){if(!l(t))return!0;if(!r)return!1;h(t)}return t[s].weakData},onFreeze:function(t){return c&&p.REQUIRED&&l(t)&&!i(t,s)&&h(t),t}};n[s]=!0},9909:(t,r,e)=>{var n,o,i,a=e(8536),u=e(7854),c=e(111),s=e(8880),f=e(6656),l=e(5465),h=e(6200),p=e(3501),v=u.WeakMap;if(a){var g=l.state||(l.state=new v),d=g.get,y=g.has,m=g.set;n=function(t,r){return r.facade=t,m.call(g,t,r),r},o=function(t){return d.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var b=h("state");p[b]=!0,n=function(t,r){return r.facade=t,s(t,b,r),r},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!c(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7659:(t,r,e)=>{var n=e(5112),o=e(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:(t,r,e)=>{var n=e(7293),o=/#|\.prototype\./,i=function(t,r){var e=u[a(t)];return e==s||e!=c&&("function"==typeof r?n(r):!!r)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},8730:(t,r,e)=>{var n=e(111),o=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&o(t)===t}},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},7850:(t,r,e)=>{var n=e(111),o=e(4326),i=e(5112)("match");t.exports=function(t){var r;return n(t)&&(void 0!==(r=t[i])?!!r:"RegExp"==o(t))}},408:(t,r,e)=>{var n=e(9670),o=e(7659),i=e(7466),a=e(9974),u=e(1246),c=e(9212),s=function(t,r){this.stopped=t,this.result=r};t.exports=function(t,r,e){var f,l,h,p,v,g,d,y=e&&e.that,m=!(!e||!e.AS_ENTRIES),b=!(!e||!e.IS_ITERATOR),x=!(!e||!e.INTERRUPTED),w=a(r,y,1+m+x),S=function(t){return f&&c(f),new s(!0,t)},A=function(t){return m?(n(t),x?w(t[0],t[1],S):w(t[0],t[1])):x?w(t,S):w(t)};if(b)f=t;else{if("function"!=typeof(l=u(t)))throw TypeError("Target is not iterable");if(o(l)){for(h=0,p=i(t.length);p>h;h++)if((v=A(t[h]))&&v instanceof s)return v;return new s(!1)}f=l.call(t)}for(g=f.next;!(d=g.call(f)).done;){try{v=A(d.value)}catch(t){throw c(f),t}if("object"==typeof v&&v&&v instanceof s)return v}return new s(!1)}},9212:(t,r,e)=>{var n=e(9670);t.exports=function(t){var r=t.return;if(void 0!==r)return n(r.call(t)).value}},3383:(t,r,e)=>{"use strict";var n,o,i,a=e(7293),u=e(9518),c=e(8880),s=e(6656),f=e(5112),l=e(1913),h=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(n=o):p=!0);var v=null==n||a((function(){var t={};return n[h].call(t)!==t}));v&&(n={}),l&&!v||s(n,h)||c(n,h,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},7497:t=>{t.exports={}},6736:t=>{var r=Math.expm1,e=Math.exp;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:e(t)-1}:r},6130:(t,r,e)=>{var n=e(4310),o=Math.abs,i=Math.pow,a=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),s=i(2,-126);t.exports=Math.fround||function(t){var r,e,i=o(t),f=n(t);return i<s?f*(i/s/u+1/a-1/a)*s*u:(e=(r=(1+u/a)*i)-(r-i))>c||e!=e?f*(1/0):f*e}},6513:t=>{var r=Math.log;t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:r(1+t)}},4310:t=>{t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},5948:(t,r,e)=>{var n,o,i,a,u,c,s,f,l=e(7854),h=e(1236).f,p=e(261).set,v=e(8334),g=e(1036),d=e(5268),y=l.MutationObserver||l.WebKitMutationObserver,m=l.document,b=l.process,x=l.Promise,w=h(l,"queueMicrotask"),S=w&&w.value;S||(n=function(){var t,r;for(d&&(t=b.domain)&&t.exit();o;){r=o.fn,o=o.next;try{r()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},v||d||g||!y||!m?x&&x.resolve?(s=x.resolve(void 0),f=s.then,a=function(){f.call(s,n)}):a=d?function(){b.nextTick(n)}:function(){p.call(l,n)}:(u=!0,c=m.createTextNode(""),new y(n).observe(c,{characterData:!0}),a=function(){c.data=u=!u})),t.exports=S||function(t){var r={fn:t,next:void 0};i&&(i.next=r),o||(o=r,a()),i=r}},3366:(t,r,e)=>{var n=e(7854);t.exports=n.Promise},133:(t,r,e)=>{var n=e(5268),o=e(7392),i=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(n?38===o:o>37&&o<41)}))},590:(t,r,e)=>{var n=e(7293),o=e(5112),i=e(1913),a=o("iterator");t.exports=!n((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),r=t.searchParams,e="";return t.pathname="c%20d",r.forEach((function(t,n){r.delete("b"),e+=n+t})),i&&!t.toJSON||!r.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==e||"x"!==new URL("http://x",void 0).host}))},8536:(t,r,e)=>{var n=e(7854),o=e(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},8523:(t,r,e)=>{"use strict";var n=e(3099),o=function(t){var r,e;this.promise=new t((function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n})),this.resolve=n(r),this.reject=n(e)};t.exports.f=function(t){return new o(t)}},3929:(t,r,e)=>{var n=e(7850);t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},7023:(t,r,e)=>{var n=e(7854).isFinite;t.exports=Number.isFinite||function(t){return"number"==typeof t&&n(t)}},2814:(t,r,e)=>{var n=e(7854),o=e(3111).trim,i=e(1361),a=n.parseFloat,u=1/a(i+"-0")!=-1/0;t.exports=u?function(t){var r=o(String(t)),e=a(r);return 0===e&&"-"==r.charAt(0)?-0:e}:a},3009:(t,r,e)=>{var n=e(7854),o=e(3111).trim,i=e(1361),a=n.parseInt,u=/^[+-]?0[Xx]/,c=8!==a(i+"08")||22!==a(i+"0x16");t.exports=c?function(t,r){var e=o(String(t));return a(e,r>>>0||(u.test(e)?16:10))}:a},1574:(t,r,e)=>{"use strict";var n=e(9781),o=e(7293),i=e(1956),a=e(5181),u=e(5296),c=e(7908),s=e(8361),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(n&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},r={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){r[t]=t})),7!=f({},t)[e]||i(f({},r)).join("")!=o}))?function(t,r){for(var e=c(t),o=arguments.length,f=1,l=a.f,h=u.f;o>f;)for(var p,v=s(arguments[f++]),g=l?i(v).concat(l(v)):i(v),d=g.length,y=0;d>y;)p=g[y++],n&&!h.call(v,p)||(e[p]=v[p]);return e}:f},30:(t,r,e)=>{var n,o=e(9670),i=e(6048),a=e(748),u=e(3501),c=e(490),s=e(317),f=e(6200)("IE_PROTO"),l=function(){},h=function(t){return"<script>"+t+"<\/script>"},p=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;p=n?function(t){t.write(h("")),t.close();var r=t.parentWindow.Object;return t=null,r}(n):((r=s("iframe")).style.display="none",c.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F);for(var e=a.length;e--;)delete p.prototype[a[e]];return p()};u[f]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[f]=t):e=p(),void 0===r?e:i(e,r)}},6048:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9670),a=e(1956);t.exports=n?Object.defineProperties:function(t,r){i(t);for(var e,n=a(r),u=n.length,c=0;u>c;)o.f(t,e=n[c++],r[e]);return t}},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(9670),a=e(7593),u=Object.defineProperty;r.f=n?u:function(t,r,e){if(i(t),r=a(r,!0),i(e),o)try{return u(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(5296),i=e(9114),a=e(5656),u=e(7593),c=e(6656),s=e(4664),f=Object.getOwnPropertyDescriptor;r.f=n?f:function(t,r){if(t=a(t),r=u(r,!0),s)try{return f(t,r)}catch(t){}if(c(t,r))return i(!o.f.call(t,r),t[r])}},1156:(t,r,e)=>{var n=e(5656),o=e(8006).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(n(t))}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},9518:(t,r,e)=>{var n=e(6656),o=e(7908),i=e(6200),a=e(8544),u=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},6324:(t,r,e)=>{var n=e(6656),o=e(5656),i=e(1318).indexOf,a=e(3501);t.exports=function(t,r){var e,u=o(t),c=0,s=[];for(e in u)!n(a,e)&&n(u,e)&&s.push(e);for(;r.length>c;)n(u,e=r[c++])&&(~i(s,e)||s.push(e));return s}},1956:(t,r,e)=>{var n=e(6324),o=e(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},9026:(t,r,e)=>{"use strict";var n=e(1913),o=e(7854),i=e(7293);t.exports=n||!i((function(){var t=Math.random();__defineSetter__.call(null,t,(function(){})),delete o[t]}))},7674:(t,r,e)=>{var n=e(9670),o=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(t){}return function(e,i){return n(e),o(i),r?t.call(e,i):e.__proto__=i,e}}():void 0)},4699:(t,r,e)=>{var n=e(9781),o=e(1956),i=e(5656),a=e(5296).f,u=function(t){return function(r){for(var e,u=i(r),c=o(u),s=c.length,f=0,l=[];s>f;)e=c[f++],n&&!a.call(u,e)||l.push(t?[e,u[e]]:u[e]);return l}};t.exports={entries:u(!0),values:u(!1)}},288:(t,r,e)=>{"use strict";var n=e(1694),o=e(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},3887:(t,r,e)=>{var n=e(5005),o=e(8006),i=e(5181),a=e(9670);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(a(t)),e=i.f;return e?r.concat(e(t)):r}},857:(t,r,e)=>{var n=e(7854);t.exports=n},2534:t=>{t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:(t,r,e)=>{var n=e(9670),o=e(111),i=e(8523);t.exports=function(t,r){if(n(t),o(r)&&r.constructor===t)return r;var e=i.f(t);return(0,e.resolve)(r),e.promise}},2248:(t,r,e)=>{var n=e(1320);t.exports=function(t,r,e){for(var o in r)n(t,o,r[o],e);return t}},1320:(t,r,e)=>{var n=e(7854),o=e(8880),i=e(6656),a=e(3505),u=e(2788),c=e(9909),s=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,r,e,u){var c,s=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(c=f(e)).source||(c.source=l.join("string"==typeof r?r:""))),t!==n?(s?!p&&t[r]&&(h=!0):delete t[r],h?t[r]=e:o(t,r,e)):h?t[r]=e:a(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},7651:(t,r,e)=>{var n=e(4326),o=e(2261);t.exports=function(t,r){var e=t.exec;if("function"==typeof e){var i=e.call(t,r);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,r)}},2261:(t,r,e)=>{"use strict";var n,o,i=e(7066),a=e(2999),u=RegExp.prototype.exec,c=String.prototype.replace,s=u,f=(n=/a/,o=/b*/g,u.call(n,"a"),u.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,h=void 0!==/()??/.exec("")[1];(f||h||l)&&(s=function(t){var r,e,n,o,a=this,s=l&&a.sticky,p=i.call(a),v=a.source,g=0,d=t;return s&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),d=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(v="(?: "+v+")",d=" "+d,g++),e=new RegExp("^(?:"+v+")",p)),h&&(e=new RegExp("^"+v+"$(?!\\s)",p)),f&&(r=a.lastIndex),n=u.call(s?e:a,d),s?n?(n.input=n.input.slice(g),n[0]=n[0].slice(g),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:f&&n&&(a.lastIndex=a.global?n.index+n[0].length:r),h&&n&&n.length>1&&c.call(n[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=s},7066:(t,r,e)=>{"use strict";var n=e(9670);t.exports=function(){var t=n(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},2999:(t,r,e)=>{"use strict";var n=e(7293);function o(t,r){return RegExp(t,r)}r.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),r.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},1150:t=>{t.exports=Object.is||function(t,r){return t===r?0!==t||1/t==1/r:t!=t&&r!=r}},3505:(t,r,e)=>{var n=e(7854),o=e(8880);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},6340:(t,r,e)=>{"use strict";var n=e(5005),o=e(3070),i=e(5112),a=e(9781),u=i("species");t.exports=function(t){var r=n(t),e=o.f;a&&r&&!r[u]&&e(r,u,{configurable:!0,get:function(){return this}})}},8003:(t,r,e)=>{var n=e(3070).f,o=e(6656),i=e(5112)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.9.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:(t,r,e)=>{var n=e(9670),o=e(3099),i=e(5112)("species");t.exports=function(t,r){var e,a=n(t).constructor;return void 0===a||null==(e=n(a)[i])?r:o(e)}},3429:(t,r,e)=>{var n=e(7293);t.exports=function(t){return n((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},8710:(t,r,e)=>{var n=e(9958),o=e(4488),i=function(t){return function(r,e){var i,a,u=String(o(r)),c=n(e),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},7061:(t,r,e)=>{var n=e(8113);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},6650:(t,r,e)=>{var n=e(7466),o=e(8415),i=e(4488),a=Math.ceil,u=function(t){return function(r,e,u){var c,s,f=String(i(r)),l=f.length,h=void 0===u?" ":String(u),p=n(e);return p<=l||""==h?f:(c=p-l,(s=o.call(h,a(c/h.length))).length>c&&(s=s.slice(0,c)),t?f+s:s+f)}};t.exports={start:u(!1),end:u(!0)}},3197:t=>{"use strict";var r=2147483647,e=/[^\0-\u007E]/,n=/[.\u3002\uFF0E\uFF61]/g,o="Overflow: input needs wider integers to process",i=Math.floor,a=String.fromCharCode,u=function(t){return t+22+75*(t<26)},c=function(t,r,e){var n=0;for(t=e?i(t/700):t>>1,t+=i(t/r);t>455;n+=36)t=i(t/35);return i(n+36*t/(t+38))},s=function(t){var e,n,s=[],f=(t=function(t){for(var r=[],e=0,n=t.length;e<n;){var o=t.charCodeAt(e++);if(o>=55296&&o<=56319&&e<n){var i=t.charCodeAt(e++);56320==(64512&i)?r.push(((1023&o)<<10)+(1023&i)+65536):(r.push(o),e--)}else r.push(o)}return r}(t)).length,l=128,h=0,p=72;for(e=0;e<t.length;e++)(n=t[e])<128&&s.push(a(n));var v=s.length,g=v;for(v&&s.push("-");g<f;){var d=r;for(e=0;e<t.length;e++)(n=t[e])>=l&&n<d&&(d=n);var y=g+1;if(d-l>i((r-h)/y))throw RangeError(o);for(h+=(d-l)*y,l=d,e=0;e<t.length;e++){if((n=t[e])<l&&++h>r)throw RangeError(o);if(n==l){for(var m=h,b=36;;b+=36){var x=b<=p?1:b>=p+26?26:b-p;if(m<x)break;var w=m-x,S=36-x;s.push(a(u(x+w%S))),m=i(w/S)}s.push(a(u(m))),p=c(h,y,g==v),h=0,++g}}++h,++l}return s.join("")};t.exports=function(t){var r,o,i=[],a=t.toLowerCase().replace(n,".").split(".");for(r=0;r<a.length;r++)o=a[r],i.push(e.test(o)?"xn--"+s(o):o);return i.join(".")}},8415:(t,r,e)=>{"use strict";var n=e(9958),o=e(4488);t.exports="".repeat||function(t){var r=String(o(this)),e="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(r+=r))1&i&&(e+=r);return e}},6091:(t,r,e)=>{var n=e(7293),o=e(1361);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},3111:(t,r,e)=>{var n=e(4488),o="["+e(1361)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(r){var e=String(n(r));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},261:(t,r,e)=>{var n,o,i,a=e(7854),u=e(7293),c=e(9974),s=e(490),f=e(317),l=e(8334),h=e(5268),p=a.location,v=a.setImmediate,g=a.clearImmediate,d=a.process,y=a.MessageChannel,m=a.Dispatch,b=0,x={},w=function(t){if(x.hasOwnProperty(t)){var r=x[t];delete x[t],r()}},S=function(t){return function(){w(t)}},A=function(t){w(t.data)},E=function(t){a.postMessage(t+"",p.protocol+"//"+p.host)};v&&g||(v=function(t){for(var r=[],e=1;arguments.length>e;)r.push(arguments[e++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,r)},n(b),b},g=function(t){delete x[t]},h?n=function(t){d.nextTick(S(t))}:m&&m.now?n=function(t){m.now(S(t))}:y&&!l?(i=(o=new y).port2,o.port1.onmessage=A,n=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&p&&"file:"!==p.protocol&&!u(E)?(n=E,a.addEventListener("message",A,!1)):n="onreadystatechange"in f("script")?function(t){s.appendChild(f("script")).onreadystatechange=function(){s.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:v,clear:g}},863:(t,r,e)=>{var n=e(4326);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},1400:(t,r,e)=>{var n=e(9958),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},7067:(t,r,e)=>{var n=e(9958),o=e(7466);t.exports=function(t){if(void 0===t)return 0;var r=n(t),e=o(r);if(r!==e)throw RangeError("Wrong length or index");return e}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},7466:(t,r,e)=>{var n=e(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488);t.exports=function(t){return Object(n(t))}},4590:(t,r,e)=>{var n=e(3002);t.exports=function(t,r){var e=n(t);if(e%r)throw RangeError("Wrong offset");return e}},3002:(t,r,e)=>{var n=e(9958);t.exports=function(t){var r=n(t);if(r<0)throw RangeError("The argument can't be less than 0");return r}},7593:(t,r,e)=>{var n=e(111);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},9843:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(9781),a=e(3832),u=e(260),c=e(3331),s=e(5787),f=e(9114),l=e(8880),h=e(7466),p=e(7067),v=e(4590),g=e(7593),d=e(6656),y=e(648),m=e(111),b=e(30),x=e(7674),w=e(8006).f,S=e(7321),A=e(2092).forEach,E=e(6340),O=e(3070),T=e(1236),j=e(9909),R=e(9587),I=j.get,M=j.set,L=O.f,k=T.f,P=Math.round,N=o.RangeError,_=c.ArrayBuffer,U=c.DataView,F=u.NATIVE_ARRAY_BUFFER_VIEWS,C=u.TYPED_ARRAY_TAG,D=u.TypedArray,B=u.TypedArrayPrototype,z=u.aTypedArrayConstructor,q=u.isTypedArray,W="BYTES_PER_ELEMENT",G="Wrong length",V=function(t,r){for(var e=0,n=r.length,o=new(z(t))(n);n>e;)o[e]=r[e++];return o},$=function(t,r){L(t,r,{get:function(){return I(this)[r]}})},Y=function(t){var r;return t instanceof _||"ArrayBuffer"==(r=y(t))||"SharedArrayBuffer"==r},J=function(t,r){return q(t)&&"symbol"!=typeof r&&r in t&&String(+r)==String(r)},X=function(t,r){return J(t,r=g(r,!0))?f(2,t[r]):k(t,r)},K=function(t,r,e){return!(J(t,r=g(r,!0))&&m(e)&&d(e,"value"))||d(e,"get")||d(e,"set")||e.configurable||d(e,"writable")&&!e.writable||d(e,"enumerable")&&!e.enumerable?L(t,r,e):(t[r]=e.value,t)};i?(F||(T.f=X,O.f=K,$(B,"buffer"),$(B,"byteOffset"),$(B,"byteLength"),$(B,"length")),n({target:"Object",stat:!0,forced:!F},{getOwnPropertyDescriptor:X,defineProperty:K}),t.exports=function(t,r,e){var i=t.match(/\d+$/)[0]/8,u=t+(e?"Clamped":"")+"Array",c="get"+t,f="set"+t,g=o[u],d=g,y=d&&d.prototype,O={},T=function(t,r){L(t,r,{get:function(){return function(t,r){var e=I(t);return e.view[c](r*i+e.byteOffset,!0)}(this,r)},set:function(t){return function(t,r,n){var o=I(t);e&&(n=(n=P(n))<0?0:n>255?255:255&n),o.view[f](r*i+o.byteOffset,n,!0)}(this,r,t)},enumerable:!0})};F?a&&(d=r((function(t,r,e,n){return s(t,d,u),R(m(r)?Y(r)?void 0!==n?new g(r,v(e,i),n):void 0!==e?new g(r,v(e,i)):new g(r):q(r)?V(d,r):S.call(d,r):new g(p(r)),t,d)})),x&&x(d,D),A(w(g),(function(t){t in d||l(d,t,g[t])})),d.prototype=y):(d=r((function(t,r,e,n){s(t,d,u);var o,a,c,f=0,l=0;if(m(r)){if(!Y(r))return q(r)?V(d,r):S.call(d,r);o=r,l=v(e,i);var g=r.byteLength;if(void 0===n){if(g%i)throw N(G);if((a=g-l)<0)throw N(G)}else if((a=h(n)*i)+l>g)throw N(G);c=a/i}else c=p(r),o=new _(a=c*i);for(M(t,{buffer:o,byteOffset:l,byteLength:a,length:c,view:new U(o)});f<c;)T(t,f++)})),x&&x(d,D),y=d.prototype=b(B)),y.constructor!==d&&l(y,"constructor",d),C&&l(y,C,u),O[u]=d,n({global:!0,forced:d!=g,sham:!F},O),W in d||l(d,W,i),W in y||l(y,W,i),E(u)}):t.exports=function(){}},3832:(t,r,e)=>{var n=e(7854),o=e(7293),i=e(7072),a=e(260).NATIVE_ARRAY_BUFFER_VIEWS,u=n.ArrayBuffer,c=n.Int8Array;t.exports=!a||!o((function(){c(1)}))||!o((function(){new c(-1)}))||!i((function(t){new c,new c(null),new c(1.5),new c(t)}),!0)||o((function(){return 1!==new c(new u(2),1,void 0).length}))},3074:(t,r,e)=>{var n=e(260).aTypedArrayConstructor,o=e(6707);t.exports=function(t,r){for(var e=o(t,t.constructor),i=0,a=r.length,u=new(n(e))(a);a>i;)u[i]=r[i++];return u}},7321:(t,r,e)=>{var n=e(7908),o=e(7466),i=e(1246),a=e(7659),u=e(9974),c=e(260).aTypedArrayConstructor;t.exports=function(t){var r,e,s,f,l,h,p=n(t),v=arguments.length,g=v>1?arguments[1]:void 0,d=void 0!==g,y=i(p);if(null!=y&&!a(y))for(h=(l=y.call(p)).next,p=[];!(f=h.call(l)).done;)p.push(f.value);for(d&&v>2&&(g=u(g,arguments[2],2)),e=o(p.length),s=new(c(this))(e),r=0;e>r;r++)s[r]=d?g(p[r],r):p[r];return s}},9711:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},6061:(t,r,e)=>{var n=e(5112);r.f=n},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(6656),a=e(9711),u=e(133),c=e(3307),s=o("wks"),f=n.Symbol,l=c?f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)&&(u||"string"==typeof s[t])||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},1361:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9170:(t,r,e)=>{"use strict";var n=e(2109),o=e(9518),i=e(7674),a=e(30),u=e(8880),c=e(9114),s=e(408),f=function(t,r){var e=this;if(!(e instanceof f))return new f(t,r);i&&(e=i(new Error(void 0),o(e))),void 0!==r&&u(e,"message",String(r));var n=[];return s(t,n.push,{that:n}),u(e,"errors",n),e};f.prototype=a(Error.prototype,{constructor:c(5,f),message:c(5,""),name:c(5,"AggregateError")}),n({global:!0},{AggregateError:f})},8264:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(3331),a=e(6340),u=i.ArrayBuffer;n({global:!0,forced:o.ArrayBuffer!==u},{ArrayBuffer:u}),a("ArrayBuffer")},6938:(t,r,e)=>{var n=e(2109),o=e(260);n({target:"ArrayBuffer",stat:!0,forced:!o.NATIVE_ARRAY_BUFFER_VIEWS},{isView:o.isView})},9575:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(3331),a=e(9670),u=e(1400),c=e(7466),s=e(6707),f=i.ArrayBuffer,l=i.DataView,h=f.prototype.slice;n({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:o((function(){return!new f(2).slice(1,void 0).byteLength}))},{slice:function(t,r){if(void 0!==h&&void 0===r)return h.call(a(this),t);for(var e=a(this).byteLength,n=u(t,e),o=u(void 0===r?e:r,e),i=new(s(this,f))(c(o-n)),p=new l(this),v=new l(i),g=0;n<o;)v.setUint8(g++,p.getUint8(n++));return i}})},2222:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(3157),a=e(111),u=e(7908),c=e(7466),s=e(6135),f=e(5417),l=e(1194),h=e(5112),p=e(7392),v=h("isConcatSpreadable"),g=9007199254740991,d="Maximum allowed index exceeded",y=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=l("concat"),b=function(t){if(!a(t))return!1;var r=t[v];return void 0!==r?!!r:i(t)};n({target:"Array",proto:!0,forced:!y||!m},{concat:function(t){var r,e,n,o,i,a=u(this),l=f(a,0),h=0;for(r=-1,n=arguments.length;r<n;r++)if(b(i=-1===r?a:arguments[r])){if(h+(o=c(i.length))>g)throw TypeError(d);for(e=0;e<o;e++,h++)e in i&&s(l,h,i[e])}else{if(h>=g)throw TypeError(d);s(l,h++,i)}return l.length=h,l}})},545:(t,r,e)=>{var n=e(2109),o=e(1048),i=e(1223);n({target:"Array",proto:!0},{copyWithin:o}),i("copyWithin")},6541:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).every;n({target:"Array",proto:!0,forced:!e(2133)("every")},{every:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},3290:(t,r,e)=>{var n=e(2109),o=e(1285),i=e(1223);n({target:"Array",proto:!0},{fill:o}),i("fill")},7327:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).filter;n({target:"Array",proto:!0,forced:!e(1194)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},4553:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).findIndex,i=e(1223),a="findIndex",u=!0;a in[]&&Array(1).findIndex((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},9826:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).find,i=e(1223),a="find",u=!0;a in[]&&Array(1).find((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},6535:(t,r,e)=>{"use strict";var n=e(2109),o=e(6790),i=e(7908),a=e(7466),u=e(3099),c=e(5417);n({target:"Array",proto:!0},{flatMap:function(t){var r,e=i(this),n=a(e.length);return u(t),(r=c(e,0)).length=o(r,e,e,n,0,1,t,arguments.length>1?arguments[1]:void 0),r}})},4944:(t,r,e)=>{"use strict";var n=e(2109),o=e(6790),i=e(7908),a=e(7466),u=e(9958),c=e(5417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,r=i(this),e=a(r.length),n=c(r,0);return n.length=o(n,r,r,e,0,void 0===t?1:u(t)),n}})},9554:(t,r,e)=>{"use strict";var n=e(2109),o=e(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},1038:(t,r,e)=>{var n=e(2109),o=e(8457);n({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:o})},6699:(t,r,e)=>{"use strict";var n=e(2109),o=e(1318).includes,i=e(1223);n({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},2772:(t,r,e)=>{"use strict";var n=e(2109),o=e(1318).indexOf,i=e(2133),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,c=i("indexOf");n({target:"Array",proto:!0,forced:u||!c},{indexOf:function(t){return u?a.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},9753:(t,r,e)=>{e(2109)({target:"Array",stat:!0},{isArray:e(3157)})},6992:(t,r,e)=>{"use strict";var n=e(5656),o=e(1223),i=e(7497),a=e(9909),u=e(654),c="Array Iterator",s=a.set,f=a.getterFor(c);t.exports=u(Array,"Array",(function(t,r){s(this,{type:c,target:n(t),index:0,kind:r})}),(function(){var t=f(this),r=t.target,e=t.kind,n=t.index++;return!r||n>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:n,done:!1}:"values"==e?{value:r[n],done:!1}:{value:[n,r[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},9600:(t,r,e)=>{"use strict";var n=e(2109),o=e(8361),i=e(5656),a=e(2133),u=[].join,c=o!=Object,s=a("join",",");n({target:"Array",proto:!0,forced:c||!s},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},4986:(t,r,e)=>{var n=e(2109),o=e(6583);n({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},1249:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).map;n({target:"Array",proto:!0,forced:!e(1194)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},6572:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(6135);n({target:"Array",stat:!0,forced:o((function(){function t(){}return!(Array.of.call(t)instanceof t)}))},{of:function(){for(var t=0,r=arguments.length,e=new("function"==typeof this?this:Array)(r);r>t;)i(e,t,arguments[t++]);return e.length=r,e}})},6644:(t,r,e)=>{"use strict";var n=e(2109),o=e(3671).right,i=e(2133),a=e(7392),u=e(5268);n({target:"Array",proto:!0,forced:!i("reduceRight")||!u&&a>79&&a<83},{reduceRight:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5827:(t,r,e)=>{"use strict";var n=e(2109),o=e(3671).left,i=e(2133),a=e(7392),u=e(5268);n({target:"Array",proto:!0,forced:!i("reduce")||!u&&a>79&&a<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5069:(t,r,e)=>{"use strict";var n=e(2109),o=e(3157),i=[].reverse,a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},7042:(t,r,e)=>{"use strict";var n=e(2109),o=e(111),i=e(3157),a=e(1400),u=e(7466),c=e(5656),s=e(6135),f=e(5112),l=e(1194)("slice"),h=f("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!l},{slice:function(t,r){var e,n,f,l=c(this),g=u(l.length),d=a(t,g),y=a(void 0===r?g:r,g);if(i(l)&&("function"!=typeof(e=l.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[h])&&(e=void 0):e=void 0,e===Array||void 0===e))return p.call(l,d,y);for(n=new(void 0===e?Array:e)(v(y-d,0)),f=0;d<y;d++,f++)d in l&&s(n,f,l[d]);return n.length=f,n}})},5212:(t,r,e)=>{"use strict";var n=e(2109),o=e(2092).some;n({target:"Array",proto:!0,forced:!e(2133)("some")},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},2707:(t,r,e)=>{"use strict";var n=e(2109),o=e(3099),i=e(7908),a=e(7293),u=e(2133),c=[],s=c.sort,f=a((function(){c.sort(void 0)})),l=a((function(){c.sort(null)})),h=u("sort");n({target:"Array",proto:!0,forced:f||!l||!h},{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),o(t))}})},8706:(t,r,e)=>{e(6340)("Array")},561:(t,r,e)=>{"use strict";var n=e(2109),o=e(1400),i=e(9958),a=e(7466),u=e(7908),c=e(5417),s=e(6135),f=e(1194)("splice"),l=Math.max,h=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f},{splice:function(t,r){var e,n,f,g,d,y,m=u(this),b=a(m.length),x=o(t,b),w=arguments.length;if(0===w?e=n=0:1===w?(e=0,n=b-x):(e=w-2,n=h(l(i(r),0),b-x)),b+e-n>p)throw TypeError(v);for(f=c(m,n),g=0;g<n;g++)(d=x+g)in m&&s(f,g,m[d]);if(f.length=n,e<n){for(g=x;g<b-n;g++)y=g+e,(d=g+n)in m?m[y]=m[d]:delete m[y];for(g=b;g>b-n+e;g--)delete m[g-1]}else if(e>n)for(g=b-n;g>x;g--)y=g+e-1,(d=g+n-1)in m?m[y]=m[d]:delete m[y];for(g=0;g<e;g++)m[g+x]=arguments[g+2];return m.length=b-n+e,f}})},9244:(t,r,e)=>{e(1223)("flatMap")},3792:(t,r,e)=>{e(1223)("flat")},6716:(t,r,e)=>{var n=e(2109),o=e(3331);n({global:!0,forced:!e(4019)},{DataView:o.DataView})},3843:(t,r,e)=>{e(2109)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},8733:(t,r,e)=>{var n=e(2109),o=e(5573);n({target:"Date",proto:!0,forced:Date.prototype.toISOString!==o},{toISOString:o})},5735:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(7908),a=e(7593);n({target:"Date",proto:!0,forced:o((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}))},{toJSON:function(t){var r=i(this),e=a(r);return"number"!=typeof e||isFinite(e)?r.toISOString():null}})},6078:(t,r,e)=>{var n=e(8880),o=e(8709),i=e(5112)("toPrimitive"),a=Date.prototype;i in a||n(a,i,o)},3710:(t,r,e)=>{var n=e(1320),o=Date.prototype,i="Invalid Date",a=o.toString,u=o.getTime;new Date(NaN)+""!=i&&n(o,"toString",(function(){var t=u.call(this);return t==t?a.call(this):i}))},4812:(t,r,e)=>{e(2109)({target:"Function",proto:!0},{bind:e(7065)})},4855:(t,r,e)=>{"use strict";var n=e(111),o=e(3070),i=e(9518),a=e(5112)("hasInstance"),u=Function.prototype;a in u||o.f(u,a,{value:function(t){if("function"!=typeof this||!n(t))return!1;if(!n(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},8309:(t,r,e)=>{var n=e(9781),o=e(3070).f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},5837:(t,r,e)=>{e(2109)({global:!0},{globalThis:e(7854)})},8862:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(7293),a=o("JSON","stringify"),u=/[\uD800-\uDFFF]/g,c=/^[\uD800-\uDBFF]$/,s=/^[\uDC00-\uDFFF]$/,f=function(t,r,e){var n=e.charAt(r-1),o=e.charAt(r+1);return c.test(t)&&!s.test(o)||s.test(t)&&!c.test(n)?"\\u"+t.charCodeAt(0).toString(16):t},l=i((function(){return'"\\udf06\\ud834"'!==a("\udf06\ud834")||'"\\udead"'!==a("\udead")}));a&&n({target:"JSON",stat:!0,forced:l},{stringify:function(t,r,e){var n=a.apply(null,arguments);return"string"==typeof n?n.replace(u,f):n}})},3706:(t,r,e)=>{var n=e(7854);e(8003)(n.JSON,"JSON",!0)},1532:(t,r,e)=>{"use strict";var n=e(7710),o=e(5631);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},9752:(t,r,e)=>{var n=e(2109),o=e(6513),i=Math.acosh,a=Math.log,u=Math.sqrt,c=Math.LN2;n({target:"Math",stat:!0,forced:!i||710!=Math.floor(i(Number.MAX_VALUE))||i(1/0)!=1/0},{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?a(t)+c:o(t-1+u(t-1)*u(t+1))}})},2376:(t,r,e)=>{var n=e(2109),o=Math.asinh,i=Math.log,a=Math.sqrt;n({target:"Math",stat:!0,forced:!(o&&1/o(0)>0)},{asinh:function t(r){return isFinite(r=+r)&&0!=r?r<0?-t(-r):i(r+a(r*r+1)):r}})},3181:(t,r,e)=>{var n=e(2109),o=Math.atanh,i=Math.log;n({target:"Math",stat:!0,forced:!(o&&1/o(-0)<0)},{atanh:function(t){return 0==(t=+t)?t:i((1+t)/(1-t))/2}})},3484:(t,r,e)=>{var n=e(2109),o=e(4310),i=Math.abs,a=Math.pow;n({target:"Math",stat:!0},{cbrt:function(t){return o(t=+t)*a(i(t),1/3)}})},2388:(t,r,e)=>{var n=e(2109),o=Math.floor,i=Math.log,a=Math.LOG2E;n({target:"Math",stat:!0},{clz32:function(t){return(t>>>=0)?31-o(i(t+.5)*a):32}})},8621:(t,r,e)=>{var n=e(2109),o=e(6736),i=Math.cosh,a=Math.abs,u=Math.E;n({target:"Math",stat:!0,forced:!i||i(710)===1/0},{cosh:function(t){var r=o(a(t)-1)+1;return(r+1/(r*u*u))*(u/2)}})},403:(t,r,e)=>{var n=e(2109),o=e(6736);n({target:"Math",stat:!0,forced:o!=Math.expm1},{expm1:o})},4755:(t,r,e)=>{e(2109)({target:"Math",stat:!0},{fround:e(6130)})},5438:(t,r,e)=>{var n=e(2109),o=Math.hypot,i=Math.abs,a=Math.sqrt;n({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,r){for(var e,n,o=0,u=0,c=arguments.length,s=0;u<c;)s<(e=i(arguments[u++]))?(o=o*(n=s/e)*n+1,s=e):o+=e>0?(n=e/s)*n:e;return s===1/0?1/0:s*a(o)}})},332:(t,r,e)=>{var n=e(2109),o=e(7293),i=Math.imul;n({target:"Math",stat:!0,forced:o((function(){return-5!=i(4294967295,5)||2!=i.length}))},{imul:function(t,r){var e=65535,n=+t,o=+r,i=e&n,a=e&o;return 0|i*a+((e&n>>>16)*a+i*(e&o>>>16)<<16>>>0)}})},658:(t,r,e)=>{var n=e(2109),o=Math.log,i=Math.LOG10E;n({target:"Math",stat:!0},{log10:function(t){return o(t)*i}})},197:(t,r,e)=>{e(2109)({target:"Math",stat:!0},{log1p:e(6513)})},4914:(t,r,e)=>{var n=e(2109),o=Math.log,i=Math.LN2;n({target:"Math",stat:!0},{log2:function(t){return o(t)/i}})},2420:(t,r,e)=>{e(2109)({target:"Math",stat:!0},{sign:e(4310)})},160:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(6736),a=Math.abs,u=Math.exp,c=Math.E;n({target:"Math",stat:!0,forced:o((function(){return-2e-17!=Math.sinh(-2e-17)}))},{sinh:function(t){return a(t=+t)<1?(i(t)-i(-t))/2:(u(t-1)-u(-t-1))*(c/2)}})},970:(t,r,e)=>{var n=e(2109),o=e(6736),i=Math.exp;n({target:"Math",stat:!0},{tanh:function(t){var r=o(t=+t),e=o(-t);return r==1/0?1:e==1/0?-1:(r-e)/(i(t)+i(-t))}})},2703:(t,r,e)=>{e(8003)(Math,"Math",!0)},3689:(t,r,e)=>{var n=e(2109),o=Math.ceil,i=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?i:o)(t)}})},9653:(t,r,e)=>{"use strict";var n=e(9781),o=e(7854),i=e(4705),a=e(1320),u=e(6656),c=e(4326),s=e(9587),f=e(7593),l=e(7293),h=e(30),p=e(8006).f,v=e(1236).f,g=e(3070).f,d=e(3111).trim,y="Number",m=o.Number,b=m.prototype,x=c(h(b))==y,w=function(t){var r,e,n,o,i,a,u,c,s=f(t,!1);if("string"==typeof s&&s.length>2)if(43===(r=(s=d(s)).charCodeAt(0))||45===r){if(88===(e=s.charCodeAt(2))||120===e)return NaN}else if(48===r){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(a=(i=s.slice(2)).length,u=0;u<a;u++)if((c=i.charCodeAt(u))<48||c>o)return NaN;return parseInt(i,n)}return+s};if(i(y,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var S,A=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof A&&(x?l((function(){b.valueOf.call(e)})):c(e)!=y)?s(new m(w(r)),e,A):w(r)},E=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;E.length>O;O++)u(m,S=E[O])&&!u(A,S)&&g(A,S,v(m,S));A.prototype=b,b.constructor=A,a(o,y,A)}},3299:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},5192:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{isFinite:e(7023)})},3161:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{isInteger:e(8730)})},4048:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},8285:(t,r,e)=>{var n=e(2109),o=e(8730),i=Math.abs;n({target:"Number",stat:!0},{isSafeInteger:function(t){return o(t)&&i(t)<=9007199254740991}})},4363:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},5994:(t,r,e)=>{e(2109)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},1874:(t,r,e)=>{var n=e(2109),o=e(2814);n({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},9494:(t,r,e)=>{var n=e(2109),o=e(3009);n({target:"Number",stat:!0,forced:Number.parseInt!=o},{parseInt:o})},6977:(t,r,e)=>{"use strict";var n=e(2109),o=e(9958),i=e(863),a=e(8415),u=e(7293),c=1..toFixed,s=Math.floor,f=function(t,r,e){return 0===r?e:r%2==1?f(t,r-1,e*t):f(t*t,r/2,e)},l=function(t,r,e){for(var n=-1,o=e;++n<6;)o+=r*t[n],t[n]=o%1e7,o=s(o/1e7)},h=function(t,r){for(var e=6,n=0;--e>=0;)n+=t[e],t[e]=s(n/r),n=n%r*1e7},p=function(t){for(var r=6,e="";--r>=0;)if(""!==e||0===r||0!==t[r]){var n=String(t[r]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};n({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){c.call({})}))},{toFixed:function(t){var r,e,n,u,c=i(this),s=o(t),v=[0,0,0,0,0,0],g="",d="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(g="-",c=-c),c>1e-21)if(e=(r=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r}(c*f(2,69,1))-69)<0?c*f(2,-r,1):c/f(2,r,1),e*=4503599627370496,(r=52-r)>0){for(l(v,0,e),n=s;n>=7;)l(v,1e7,0),n-=7;for(l(v,f(10,n,1),0),n=r-1;n>=23;)h(v,1<<23),n-=23;h(v,1<<n),l(v,1,1),h(v,2),d=p(v)}else l(v,0,e),l(v,1<<-r,0),d=p(v)+a.call("0",s);return s>0?g+((u=d.length)<=s?"0."+a.call("0",s-u)+d:d.slice(0,u-s)+"."+d.slice(u-s)):g+d}})},5147:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(863),a=1..toPrecision;n({target:"Number",proto:!0,forced:o((function(){return"1"!==a.call(1,void 0)}))||!o((function(){a.call({})}))},{toPrecision:function(t){return void 0===t?a.call(i(this)):a.call(i(this),t)}})},9601:(t,r,e)=>{var n=e(2109),o=e(1574);n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},8011:(t,r,e)=>{e(2109)({target:"Object",stat:!0,sham:!e(9781)},{create:e(30)})},9595:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(9026),a=e(7908),u=e(3099),c=e(3070);o&&n({target:"Object",proto:!0,forced:i},{__defineGetter__:function(t,r){c.f(a(this),t,{get:u(r),enumerable:!0,configurable:!0})}})},3321:(t,r,e)=>{var n=e(2109),o=e(9781);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:e(6048)})},9070:(t,r,e)=>{var n=e(2109),o=e(9781);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(3070).f})},5500:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(9026),a=e(7908),u=e(3099),c=e(3070);o&&n({target:"Object",proto:!0,forced:i},{__defineSetter__:function(t,r){c.f(a(this),t,{set:u(r),enumerable:!0,configurable:!0})}})},9720:(t,r,e)=>{var n=e(2109),o=e(4699).entries;n({target:"Object",stat:!0},{entries:function(t){return o(t)}})},3371:(t,r,e)=>{var n=e(2109),o=e(6677),i=e(7293),a=e(111),u=e(2423).onFreeze,c=Object.freeze;n({target:"Object",stat:!0,forced:i((function(){c(1)})),sham:!o},{freeze:function(t){return c&&a(t)?c(u(t)):t}})},8559:(t,r,e)=>{var n=e(2109),o=e(408),i=e(6135);n({target:"Object",stat:!0},{fromEntries:function(t){var r={};return o(t,(function(t,e){i(r,t,e)}),{AS_ENTRIES:!0}),r}})},5003:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(5656),a=e(1236).f,u=e(9781),c=o((function(){a(1)}));n({target:"Object",stat:!0,forced:!u||c,sham:!u},{getOwnPropertyDescriptor:function(t,r){return a(i(t),r)}})},9337:(t,r,e)=>{var n=e(2109),o=e(9781),i=e(3887),a=e(5656),u=e(1236),c=e(6135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var r,e,n=a(t),o=u.f,s=i(n),f={},l=0;s.length>l;)void 0!==(e=o(n,r=s[l++]))&&c(f,r,e);return f}})},6210:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(1156).f;n({target:"Object",stat:!0,forced:o((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:i})},489:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(7908),a=e(9518),u=e(8544);n({target:"Object",stat:!0,forced:o((function(){a(1)})),sham:!u},{getPrototypeOf:function(t){return a(i(t))}})},1825:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(111),a=Object.isExtensible;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isExtensible:function(t){return!!i(t)&&(!a||a(t))}})},8410:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(111),a=Object.isFrozen;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isFrozen:function(t){return!i(t)||!!a&&a(t)}})},2200:(t,r,e)=>{var n=e(2109),o=e(7293),i=e(111),a=Object.isSealed;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isSealed:function(t){return!i(t)||!!a&&a(t)}})},3304:(t,r,e)=>{e(2109)({target:"Object",stat:!0},{is:e(1150)})},7941:(t,r,e)=>{var n=e(2109),o=e(7908),i=e(1956);n({target:"Object",stat:!0,forced:e(7293)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},4869:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(9026),a=e(7908),u=e(7593),c=e(9518),s=e(1236).f;o&&n({target:"Object",proto:!0,forced:i},{__lookupGetter__:function(t){var r,e=a(this),n=u(t,!0);do{if(r=s(e,n))return r.get}while(e=c(e))}})},3952:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(9026),a=e(7908),u=e(7593),c=e(9518),s=e(1236).f;o&&n({target:"Object",proto:!0,forced:i},{__lookupSetter__:function(t){var r,e=a(this),n=u(t,!0);do{if(r=s(e,n))return r.set}while(e=c(e))}})},7227:(t,r,e)=>{var n=e(2109),o=e(111),i=e(2423).onFreeze,a=e(6677),u=e(7293),c=Object.preventExtensions;n({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{preventExtensions:function(t){return c&&o(t)?c(i(t)):t}})},514:(t,r,e)=>{var n=e(2109),o=e(111),i=e(2423).onFreeze,a=e(6677),u=e(7293),c=Object.seal;n({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{seal:function(t){return c&&o(t)?c(i(t)):t}})},8304:(t,r,e)=>{e(2109)({target:"Object",stat:!0},{setPrototypeOf:e(7674)})},1539:(t,r,e)=>{var n=e(1694),o=e(1320),i=e(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},6833:(t,r,e)=>{var n=e(2109),o=e(4699).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},4678:(t,r,e)=>{var n=e(2109),o=e(2814);n({global:!0,forced:parseFloat!=o},{parseFloat:o})},1058:(t,r,e)=>{var n=e(2109),o=e(3009);n({global:!0,forced:parseInt!=o},{parseInt:o})},7922:(t,r,e)=>{"use strict";var n=e(2109),o=e(3099),i=e(8523),a=e(2534),u=e(408);n({target:"Promise",stat:!0},{allSettled:function(t){var r=this,e=i.f(r),n=e.resolve,c=e.reject,s=a((function(){var e=o(r.resolve),i=[],a=0,c=1;u(t,(function(t){var o=a++,u=!1;i.push(void 0),c++,e.call(r,t).then((function(t){u||(u=!0,i[o]={status:"fulfilled",value:t},--c||n(i))}),(function(t){u||(u=!0,i[o]={status:"rejected",reason:t},--c||n(i))}))})),--c||n(i)}));return s.error&&c(s.value),e.promise}})},4668:(t,r,e)=>{"use strict";var n=e(2109),o=e(3099),i=e(5005),a=e(8523),u=e(2534),c=e(408),s="No one promise resolved";n({target:"Promise",stat:!0},{any:function(t){var r=this,e=a.f(r),n=e.resolve,f=e.reject,l=u((function(){var e=o(r.resolve),a=[],u=0,l=1,h=!1;c(t,(function(t){var o=u++,c=!1;a.push(void 0),l++,e.call(r,t).then((function(t){c||h||(h=!0,n(t))}),(function(t){c||h||(c=!0,a[o]=t,--l||f(new(i("AggregateError"))(a,s)))}))})),--l||f(new(i("AggregateError"))(a,s))}));return l.error&&f(l.value),e.promise}})},7727:(t,r,e)=>{"use strict";var n=e(2109),o=e(1913),i=e(3366),a=e(7293),u=e(5005),c=e(6707),s=e(9478),f=e(1320);n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var r=c(this,u("Promise")),e="function"==typeof t;return this.then(e?function(e){return s(r,t()).then((function(){return e}))}:t,e?function(e){return s(r,t()).then((function(){throw e}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||f(i.prototype,"finally",u("Promise").prototype.finally)},8674:(t,r,e)=>{"use strict";var n,o,i,a,u=e(2109),c=e(1913),s=e(7854),f=e(5005),l=e(3366),h=e(1320),p=e(2248),v=e(8003),g=e(6340),d=e(111),y=e(3099),m=e(5787),b=e(2788),x=e(408),w=e(7072),S=e(6707),A=e(261).set,E=e(5948),O=e(9478),T=e(842),j=e(8523),R=e(2534),I=e(9909),M=e(4705),L=e(5112),k=e(5268),P=e(7392),N=L("species"),_="Promise",U=I.get,F=I.set,C=I.getterFor(_),D=l,B=s.TypeError,z=s.document,q=s.process,W=f("fetch"),G=j.f,V=G,$=!!(z&&z.createEvent&&s.dispatchEvent),Y="function"==typeof PromiseRejectionEvent,J="unhandledrejection",X=M(_,(function(){if(b(D)===String(D)){if(66===P)return!0;if(!k&&!Y)return!0}if(c&&!D.prototype.finally)return!0;if(P>=51&&/native code/.test(D))return!1;var t=D.resolve(1),r=function(t){t((function(){}),(function(){}))};return(t.constructor={})[N]=r,!(t.then((function(){}))instanceof r)})),K=X||!w((function(t){D.all(t).catch((function(){}))})),H=function(t){var r;return!(!d(t)||"function"!=typeof(r=t.then))&&r},Q=function(t,r){if(!t.notified){t.notified=!0;var e=t.reactions;E((function(){for(var n=t.value,o=1==t.state,i=0;e.length>i;){var a,u,c,s=e[i++],f=o?s.ok:s.fail,l=s.resolve,h=s.reject,p=s.domain;try{f?(o||(2===t.rejection&&et(t),t.rejection=1),!0===f?a=n:(p&&p.enter(),a=f(n),p&&(p.exit(),c=!0)),a===s.promise?h(B("Promise-chain cycle")):(u=H(a))?u.call(a,l,h):l(a)):h(n)}catch(t){p&&!c&&p.exit(),h(t)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&tt(t)}))}},Z=function(t,r,e){var n,o;$?((n=z.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),s.dispatchEvent(n)):n={promise:r,reason:e},!Y&&(o=s["on"+t])?o(n):t===J&&T("Unhandled promise rejection",e)},tt=function(t){A.call(s,(function(){var r,e=t.facade,n=t.value;if(rt(t)&&(r=R((function(){k?q.emit("unhandledRejection",n,e):Z(J,e,n)})),t.rejection=k||rt(t)?2:1,r.error))throw r.value}))},rt=function(t){return 1!==t.rejection&&!t.parent},et=function(t){A.call(s,(function(){var r=t.facade;k?q.emit("rejectionHandled",r):Z("rejectionhandled",r,t.value)}))},nt=function(t,r,e){return function(n){t(r,n,e)}},ot=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,Q(t,!0))},it=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw B("Promise can't be resolved itself");var n=H(r);n?E((function(){var e={done:!1};try{n.call(r,nt(it,e,t),nt(ot,e,t))}catch(r){ot(e,r,t)}})):(t.value=r,t.state=1,Q(t,!1))}catch(r){ot({done:!1},r,t)}}};X&&(D=function(t){m(this,D,_),y(t),n.call(this);var r=U(this);try{t(nt(it,r),nt(ot,r))}catch(t){ot(r,t)}},(n=function(t){F(this,{type:_,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=p(D.prototype,{then:function(t,r){var e=C(this),n=G(S(this,D));return n.ok="function"!=typeof t||t,n.fail="function"==typeof r&&r,n.domain=k?q.domain:void 0,e.parent=!0,e.reactions.push(n),0!=e.state&&Q(e,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,r=U(t);this.promise=t,this.resolve=nt(it,r),this.reject=nt(ot,r)},j.f=G=function(t){return t===D||t===i?new o(t):V(t)},c||"function"!=typeof l||(a=l.prototype.then,h(l.prototype,"then",(function(t,r){var e=this;return new D((function(t,r){a.call(e,t,r)})).then(t,r)}),{unsafe:!0}),"function"==typeof W&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(D,W.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:X},{Promise:D}),v(D,_,!1,!0),g(_),i=f(_),u({target:_,stat:!0,forced:X},{reject:function(t){var r=G(this);return r.reject.call(void 0,t),r.promise}}),u({target:_,stat:!0,forced:c||X},{resolve:function(t){return O(c&&this===i?D:this,t)}}),u({target:_,stat:!0,forced:K},{all:function(t){var r=this,e=G(r),n=e.resolve,o=e.reject,i=R((function(){var e=y(r.resolve),i=[],a=0,u=1;x(t,(function(t){var c=a++,s=!1;i.push(void 0),u++,e.call(r,t).then((function(t){s||(s=!0,i[c]=t,--u||n(i))}),o)})),--u||n(i)}));return i.error&&o(i.value),e.promise},race:function(t){var r=this,e=G(r),n=e.reject,o=R((function(){var o=y(r.resolve);x(t,(function(t){o.call(r,t).then(e.resolve,n)}))}));return o.error&&n(o.value),e.promise}})},224:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(3099),a=e(9670),u=e(7293),c=o("Reflect","apply"),s=Function.apply;n({target:"Reflect",stat:!0,forced:!u((function(){c((function(){}))}))},{apply:function(t,r,e){return i(t),a(e),c?c(t,r,e):s.call(t,r,e)}})},2419:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(3099),a=e(9670),u=e(111),c=e(30),s=e(7065),f=e(7293),l=o("Reflect","construct"),h=f((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),p=!f((function(){l((function(){}))})),v=h||p;n({target:"Reflect",stat:!0,forced:v,sham:v},{construct:function(t,r){i(t),a(r);var e=arguments.length<3?t:i(arguments[2]);if(p&&!h)return l(t,r,e);if(t==e){switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}var n=[null];return n.push.apply(n,r),new(s.apply(t,n))}var o=e.prototype,f=c(u(o)?o:Object.prototype),v=Function.apply.call(t,f,r);return u(v)?v:f}})},9596:(t,r,e)=>{var n=e(2109),o=e(9781),i=e(9670),a=e(7593),u=e(3070);n({target:"Reflect",stat:!0,forced:e(7293)((function(){Reflect.defineProperty(u.f({},1,{value:1}),1,{value:2})})),sham:!o},{defineProperty:function(t,r,e){i(t);var n=a(r,!0);i(e);try{return u.f(t,n,e),!0}catch(t){return!1}}})},2586:(t,r,e)=>{var n=e(2109),o=e(9670),i=e(1236).f;n({target:"Reflect",stat:!0},{deleteProperty:function(t,r){var e=i(o(t),r);return!(e&&!e.configurable)&&delete t[r]}})},5683:(t,r,e)=>{var n=e(2109),o=e(9781),i=e(9670),a=e(1236);n({target:"Reflect",stat:!0,sham:!o},{getOwnPropertyDescriptor:function(t,r){return a.f(i(t),r)}})},9361:(t,r,e)=>{var n=e(2109),o=e(9670),i=e(9518);n({target:"Reflect",stat:!0,sham:!e(8544)},{getPrototypeOf:function(t){return i(o(t))}})},4819:(t,r,e)=>{var n=e(2109),o=e(111),i=e(9670),a=e(6656),u=e(1236),c=e(9518);n({target:"Reflect",stat:!0},{get:function t(r,e){var n,s,f=arguments.length<3?r:arguments[2];return i(r)===f?r[e]:(n=u.f(r,e))?a(n,"value")?n.value:void 0===n.get?void 0:n.get.call(f):o(s=c(r))?t(s,e,f):void 0}})},1037:(t,r,e)=>{e(2109)({target:"Reflect",stat:!0},{has:function(t,r){return r in t}})},5898:(t,r,e)=>{var n=e(2109),o=e(9670),i=Object.isExtensible;n({target:"Reflect",stat:!0},{isExtensible:function(t){return o(t),!i||i(t)}})},7556:(t,r,e)=>{e(2109)({target:"Reflect",stat:!0},{ownKeys:e(3887)})},4361:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(9670);n({target:"Reflect",stat:!0,sham:!e(6677)},{preventExtensions:function(t){i(t);try{var r=o("Object","preventExtensions");return r&&r(t),!0}catch(t){return!1}}})},9532:(t,r,e)=>{var n=e(2109),o=e(9670),i=e(6077),a=e(7674);a&&n({target:"Reflect",stat:!0},{setPrototypeOf:function(t,r){o(t),i(r);try{return a(t,r),!0}catch(t){return!1}}})},3593:(t,r,e)=>{var n=e(2109),o=e(9670),i=e(111),a=e(6656),u=e(7293),c=e(3070),s=e(1236),f=e(9518),l=e(9114);n({target:"Reflect",stat:!0,forced:u((function(){var t=function(){},r=c.f(new t,"a",{configurable:!0});return!1!==Reflect.set(t.prototype,"a",1,r)}))},{set:function t(r,e,n){var u,h,p=arguments.length<4?r:arguments[3],v=s.f(o(r),e);if(!v){if(i(h=f(r)))return t(h,e,n,p);v=l(0)}if(a(v,"value")){if(!1===v.writable||!i(p))return!1;if(u=s.f(p,e)){if(u.get||u.set||!1===u.writable)return!1;u.value=n,c.f(p,e,u)}else c.f(p,e,l(0,n));return!0}return void 0!==v.set&&(v.set.call(p,n),!0)}})},1299:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(8003);n({global:!0},{Reflect:{}}),i(o.Reflect,"Reflect",!0)},4603:(t,r,e)=>{var n=e(9781),o=e(7854),i=e(4705),a=e(9587),u=e(3070).f,c=e(8006).f,s=e(7850),f=e(7066),l=e(2999),h=e(1320),p=e(7293),v=e(9909).set,g=e(6340),d=e(5112)("match"),y=o.RegExp,m=y.prototype,b=/a/g,x=/a/g,w=new y(b)!==b,S=l.UNSUPPORTED_Y;if(n&&i("RegExp",!w||S||p((function(){return x[d]=!1,y(b)!=b||y(x)==x||"/a/i"!=y(b,"i")})))){for(var A=function(t,r){var e,n=this instanceof A,o=s(t),i=void 0===r;if(!n&&o&&t.constructor===A&&i)return t;w?o&&!i&&(t=t.source):t instanceof A&&(i&&(r=f.call(t)),t=t.source),S&&(e=!!r&&r.indexOf("y")>-1)&&(r=r.replace(/y/g,""));var u=a(w?new y(t,r):y(t,r),n?this:m,A);return S&&e&&v(u,{sticky:e}),u},E=function(t){t in A||u(A,t,{configurable:!0,get:function(){return y[t]},set:function(r){y[t]=r}})},O=c(y),T=0;O.length>T;)E(O[T++]);m.constructor=A,A.prototype=m,h(o,"RegExp",A)}g("RegExp")},4916:(t,r,e)=>{"use strict";var n=e(2109),o=e(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},2087:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(7066),a=e(2999).UNSUPPORTED_Y;n&&("g"!=/./g.flags||a)&&o.f(RegExp.prototype,"flags",{configurable:!0,get:i})},8386:(t,r,e)=>{var n=e(9781),o=e(2999).UNSUPPORTED_Y,i=e(3070).f,a=e(9909).get,u=RegExp.prototype;n&&o&&i(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==u){if(this instanceof RegExp)return!!a(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}})},7601:(t,r,e)=>{"use strict";e(4916);var n,o,i=e(2109),a=e(111),u=(n=!1,(o=/[ac]/).exec=function(){return n=!0,/./.exec.apply(this,arguments)},!0===o.test("abc")&&n),c=/./.test;i({target:"RegExp",proto:!0,forced:!u},{test:function(t){if("function"!=typeof this.exec)return c.call(this,t);var r=this.exec(t);if(null!==r&&!a(r))throw new Error("RegExp exec method returned something other than an Object or null");return!!r}})},9714:(t,r,e)=>{"use strict";var n=e(1320),o=e(9670),i=e(7293),a=e(7066),u="toString",c=RegExp.prototype,s=c.toString,f=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=u;(f||l)&&n(RegExp.prototype,u,(function(){var t=o(this),r=String(t.source),e=t.flags;return"/"+r+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in c)?a.call(t):e)}),{unsafe:!0})},189:(t,r,e)=>{"use strict";var n=e(7710),o=e(5631);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},5218:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("anchor")},{anchor:function(t){return o(this,"a","name",t)}})},4475:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("big")},{big:function(){return o(this,"big","","")}})},7929:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("blink")},{blink:function(){return o(this,"blink","","")}})},915:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("bold")},{bold:function(){return o(this,"b","","")}})},9841:(t,r,e)=>{"use strict";var n=e(2109),o=e(8710).codeAt;n({target:"String",proto:!0},{codePointAt:function(t){return o(this,t)}})},7852:(t,r,e)=>{"use strict";var n,o=e(2109),i=e(1236).f,a=e(7466),u=e(3929),c=e(4488),s=e(4964),f=e(1913),l="".endsWith,h=Math.min,p=s("endsWith");o({target:"String",proto:!0,forced:!(!f&&!p&&(n=i(String.prototype,"endsWith"),n&&!n.writable)||p)},{endsWith:function(t){var r=String(c(this));u(t);var e=arguments.length>1?arguments[1]:void 0,n=a(r.length),o=void 0===e?n:h(a(e),n),i=String(t);return l?l.call(r,i,o):r.slice(o-i.length,o)===i}})},9253:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("fixed")},{fixed:function(){return o(this,"tt","","")}})},2125:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("fontcolor")},{fontcolor:function(t){return o(this,"font","color",t)}})},8830:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("fontsize")},{fontsize:function(t){return o(this,"font","size",t)}})},4953:(t,r,e)=>{var n=e(2109),o=e(1400),i=String.fromCharCode,a=String.fromCodePoint;n({target:"String",stat:!0,forced:!!a&&1!=a.length},{fromCodePoint:function(t){for(var r,e=[],n=arguments.length,a=0;n>a;){if(r=+arguments[a++],o(r,1114111)!==r)throw RangeError(r+" is not a valid code point");e.push(r<65536?i(r):i(55296+((r-=65536)>>10),r%1024+56320))}return e.join("")}})},2023:(t,r,e)=>{"use strict";var n=e(2109),o=e(3929),i=e(4488);n({target:"String",proto:!0,forced:!e(4964)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},8734:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("italics")},{italics:function(){return o(this,"i","","")}})},8783:(t,r,e)=>{"use strict";var n=e(8710).charAt,o=e(9909),i=e(654),a="String Iterator",u=o.set,c=o.getterFor(a);i(String,"String",(function(t){u(this,{type:a,string:String(t),index:0})}),(function(){var t,r=c(this),e=r.string,o=r.index;return o>=e.length?{value:void 0,done:!0}:(t=n(e,o),r.index+=t.length,{value:t,done:!1})}))},9254:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("link")},{link:function(t){return o(this,"a","href",t)}})},6373:(t,r,e)=>{"use strict";var n=e(2109),o=e(4994),i=e(4488),a=e(7466),u=e(3099),c=e(9670),s=e(4326),f=e(7850),l=e(7066),h=e(8880),p=e(7293),v=e(5112),g=e(6707),d=e(1530),y=e(9909),m=e(1913),b=v("matchAll"),x="RegExp String Iterator",w=y.set,S=y.getterFor(x),A=RegExp.prototype,E=A.exec,O="".matchAll,T=!!O&&!p((function(){"a".matchAll(/./)})),j=o((function(t,r,e,n){w(this,{type:x,regexp:t,string:r,global:e,unicode:n,done:!1})}),"RegExp String",(function(){var t=S(this);if(t.done)return{value:void 0,done:!0};var r=t.regexp,e=t.string,n=function(t,r){var e,n=t.exec;if("function"==typeof n){if("object"!=typeof(e=n.call(t,r)))throw TypeError("Incorrect exec result");return e}return E.call(t,r)}(r,e);return null===n?{value:void 0,done:t.done=!0}:t.global?(""==String(n[0])&&(r.lastIndex=d(e,a(r.lastIndex),t.unicode)),{value:n,done:!1}):(t.done=!0,{value:n,done:!1})})),R=function(t){var r,e,n,o,i,u,s=c(this),f=String(t);return r=g(s,RegExp),void 0===(e=s.flags)&&s instanceof RegExp&&!("flags"in A)&&(e=l.call(s)),n=void 0===e?"":String(e),o=new r(r===RegExp?s.source:s,n),i=!!~n.indexOf("g"),u=!!~n.indexOf("u"),o.lastIndex=a(s.lastIndex),new j(o,f,i,u)};n({target:"String",proto:!0,forced:T},{matchAll:function(t){var r,e,n,o=i(this);if(null!=t){if(f(t)&&!~String(i("flags"in A?t.flags:l.call(t))).indexOf("g"))throw TypeError("`.matchAll` does not allow non-global regexes");if(T)return O.apply(o,arguments);if(void 0===(e=t[b])&&m&&"RegExp"==s(t)&&(e=R),null!=e)return u(e).call(t,o)}else if(T)return O.apply(o,arguments);return r=String(o),n=new RegExp(t,"g"),m?R.call(n,r):n[b](r)}}),m||b in A||h(A,b,R)},4723:(t,r,e)=>{"use strict";var n=e(7007),o=e(9670),i=e(7466),a=e(4488),u=e(1530),c=e(7651);n("match",1,(function(t,r,e){return[function(r){var e=a(this),n=null==r?void 0:r[t];return void 0!==n?n.call(r,e):new RegExp(r)[t](String(e))},function(t){var n=e(r,t,this);if(n.done)return n.value;var a=o(t),s=String(this);if(!a.global)return c(a,s);var f=a.unicode;a.lastIndex=0;for(var l,h=[],p=0;null!==(l=c(a,s));){var v=String(l[0]);h[p]=v,""===v&&(a.lastIndex=u(s,i(a.lastIndex),f)),p++}return 0===p?null:h}]}))},6528:(t,r,e)=>{"use strict";var n=e(2109),o=e(6650).end;n({target:"String",proto:!0,forced:e(7061)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},3112:(t,r,e)=>{"use strict";var n=e(2109),o=e(6650).start;n({target:"String",proto:!0,forced:e(7061)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},8992:(t,r,e)=>{var n=e(2109),o=e(5656),i=e(7466);n({target:"String",stat:!0},{raw:function(t){for(var r=o(t.raw),e=i(r.length),n=arguments.length,a=[],u=0;e>u;)a.push(String(r[u++])),u<n&&a.push(String(arguments[u]));return a.join("")}})},2481:(t,r,e)=>{e(2109)({target:"String",proto:!0},{repeat:e(8415)})},8757:(t,r,e)=>{"use strict";var n=e(2109),o=e(4488),i=e(7850),a=e(7066),u=e(647),c=e(5112),s=e(1913),f=c("replace"),l=RegExp.prototype,h=Math.max,p=function(t,r,e){return e>t.length?-1:""===r?e:t.indexOf(r,e)};n({target:"String",proto:!0},{replaceAll:function(t,r){var e,n,c,v,g,d,y,m,b=o(this),x=0,w=0,S="";if(null!=t){if((e=i(t))&&!~String(o("flags"in l?t.flags:a.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(n=t[f]))return n.call(t,b,r);if(s&&e)return String(b).replace(t,r)}for(c=String(b),v=String(t),(g="function"==typeof r)||(r=String(r)),d=v.length,y=h(1,d),x=p(c,v,0);-1!==x;)m=g?String(r(v,x,c)):u(v,c,x,[],void 0,r),S+=c.slice(w,x)+m,w=x+d,x=p(c,v,x+y);return w<c.length&&(S+=c.slice(w)),S}})},5306:(t,r,e)=>{"use strict";var n=e(7007),o=e(9670),i=e(7466),a=e(9958),u=e(4488),c=e(1530),s=e(647),f=e(7651),l=Math.max,h=Math.min;n("replace",2,(function(t,r,e,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(e,n){var o=u(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,n){if(!p&&v||"string"==typeof n&&-1===n.indexOf(g)){var u=e(r,t,this,n);if(u.done)return u.value}var d=o(t),y=String(this),m="function"==typeof n;m||(n=String(n));var b=d.global;if(b){var x=d.unicode;d.lastIndex=0}for(var w=[];;){var S=f(d,y);if(null===S)break;if(w.push(S),!b)break;""===String(S[0])&&(d.lastIndex=c(y,i(d.lastIndex),x))}for(var A,E="",O=0,T=0;T<w.length;T++){S=w[T];for(var j=String(S[0]),R=l(h(a(S.index),y.length),0),I=[],M=1;M<S.length;M++)I.push(void 0===(A=S[M])?A:String(A));var L=S.groups;if(m){var k=[j].concat(I,R,y);void 0!==L&&k.push(L);var P=String(n.apply(void 0,k))}else P=s(j,y,R,I,L,n);R>=O&&(E+=y.slice(O,R)+P,O=R+j.length)}return E+y.slice(O)}]}))},4765:(t,r,e)=>{"use strict";var n=e(7007),o=e(9670),i=e(4488),a=e(1150),u=e(7651);n("search",1,(function(t,r,e){return[function(r){var e=i(this),n=null==r?void 0:r[t];return void 0!==n?n.call(r,e):new RegExp(r)[t](String(e))},function(t){var n=e(r,t,this);if(n.done)return n.value;var i=o(t),c=String(this),s=i.lastIndex;a(s,0)||(i.lastIndex=0);var f=u(i,c);return a(i.lastIndex,s)||(i.lastIndex=s),null===f?-1:f.index}]}))},7268:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("small")},{small:function(){return o(this,"small","","")}})},3123:(t,r,e)=>{"use strict";var n=e(7007),o=e(7850),i=e(9670),a=e(4488),u=e(6707),c=e(1530),s=e(7466),f=e(7651),l=e(2261),h=e(7293),p=[].push,v=Math.min,g=4294967295,d=!h((function(){return!RegExp(g,"y")}));n("split",2,(function(t,r,e){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n=String(a(this)),i=void 0===e?g:e>>>0;if(0===i)return[];if(void 0===t)return[n];if(!o(t))return r.call(n,t,i);for(var u,c,s,f=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,d=new RegExp(t.source,h+"g");(u=l.call(d,n))&&!((c=d.lastIndex)>v&&(f.push(n.slice(v,u.index)),u.length>1&&u.index<n.length&&p.apply(f,u.slice(1)),s=u[0].length,v=c,f.length>=i));)d.lastIndex===u.index&&d.lastIndex++;return v===n.length?!s&&d.test("")||f.push(""):f.push(n.slice(v)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,e){var o=a(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,e):n.call(String(o),r,e)},function(t,o){var a=e(n,t,this,o,n!==r);if(a.done)return a.value;var l=i(t),h=String(this),p=u(l,RegExp),y=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(d?"y":"g"),b=new p(d?l:"^(?:"+l.source+")",m),x=void 0===o?g:o>>>0;if(0===x)return[];if(0===h.length)return null===f(b,h)?[h]:[];for(var w=0,S=0,A=[];S<h.length;){b.lastIndex=d?S:0;var E,O=f(b,d?h:h.slice(S));if(null===O||(E=v(s(b.lastIndex+(d?0:S)),h.length))===w)S=c(h,S,y);else{if(A.push(h.slice(w,S)),A.length===x)return A;for(var T=1;T<=O.length-1;T++)if(A.push(O[T]),A.length===x)return A;S=w=E}}return A.push(h.slice(w)),A}]}),!d)},6755:(t,r,e)=>{"use strict";var n,o=e(2109),i=e(1236).f,a=e(7466),u=e(3929),c=e(4488),s=e(4964),f=e(1913),l="".startsWith,h=Math.min,p=s("startsWith");o({target:"String",proto:!0,forced:!(!f&&!p&&(n=i(String.prototype,"startsWith"),n&&!n.writable)||p)},{startsWith:function(t){var r=String(c(this));u(t);var e=a(h(arguments.length>1?arguments[1]:void 0,r.length)),n=String(t);return l?l.call(r,n,e):r.slice(e,e+n.length)===n}})},7397:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("strike")},{strike:function(){return o(this,"strike","","")}})},86:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("sub")},{sub:function(){return o(this,"sub","","")}})},623:(t,r,e)=>{"use strict";var n=e(2109),o=e(4230);n({target:"String",proto:!0,forced:e(3429)("sup")},{sup:function(){return o(this,"sup","","")}})},8702:(t,r,e)=>{"use strict";var n=e(2109),o=e(3111).end,i=e(6091)("trimEnd"),a=i?function(){return o(this)}:"".trimEnd;n({target:"String",proto:!0,forced:i},{trimEnd:a,trimRight:a})},5674:(t,r,e)=>{"use strict";var n=e(2109),o=e(3111).start,i=e(6091)("trimStart"),a=i?function(){return o(this)}:"".trimStart;n({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},3210:(t,r,e)=>{"use strict";var n=e(2109),o=e(3111).trim;n({target:"String",proto:!0,forced:e(6091)("trim")},{trim:function(){return o(this)}})},2443:(t,r,e)=>{e(7235)("asyncIterator")},1817:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(7854),a=e(6656),u=e(111),c=e(3070).f,s=e(9920),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof h?new f(t):void 0===t?f():f(t);return""===t&&(l[r]=!0),r};s(h,f);var p=h.prototype=f.prototype;p.constructor=h;var v=p.toString,g="Symbol(test)"==String(f("test")),d=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,r=v.call(t);if(a(l,t))return"";var e=g?r.slice(7,-1):r.replace(d,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:h})}},2401:(t,r,e)=>{e(7235)("hasInstance")},8722:(t,r,e)=>{e(7235)("isConcatSpreadable")},2165:(t,r,e)=>{e(7235)("iterator")},2526:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(5005),a=e(1913),u=e(9781),c=e(133),s=e(3307),f=e(7293),l=e(6656),h=e(3157),p=e(111),v=e(9670),g=e(7908),d=e(5656),y=e(7593),m=e(9114),b=e(30),x=e(1956),w=e(8006),S=e(1156),A=e(5181),E=e(1236),O=e(3070),T=e(5296),j=e(8880),R=e(1320),I=e(2309),M=e(6200),L=e(3501),k=e(9711),P=e(5112),N=e(6061),_=e(7235),U=e(8003),F=e(9909),C=e(2092).forEach,D=M("hidden"),B="Symbol",z=P("toPrimitive"),q=F.set,W=F.getterFor(B),G=Object.prototype,V=o.Symbol,$=i("JSON","stringify"),Y=E.f,J=O.f,X=S.f,K=T.f,H=I("symbols"),Q=I("op-symbols"),Z=I("string-to-symbol-registry"),tt=I("symbol-to-string-registry"),rt=I("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,ot=u&&f((function(){return 7!=b(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=Y(G,r);n&&delete G[r],J(t,r,e),n&&t!==G&&J(G,r,n)}:J,it=function(t,r){var e=H[t]=b(V.prototype);return q(e,{type:B,tag:t,description:r}),u||(e.description=r),e},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ut=function(t,r,e){t===G&&ut(Q,r,e),v(t);var n=y(r,!0);return v(e),l(H,n)?(e.enumerable?(l(t,D)&&t[D][n]&&(t[D][n]=!1),e=b(e,{enumerable:m(0,!1)})):(l(t,D)||J(t,D,m(1,{})),t[D][n]=!0),ot(t,n,e)):J(t,n,e)},ct=function(t,r){v(t);var e=d(r),n=x(e).concat(ht(e));return C(n,(function(r){u&&!st.call(e,r)||ut(t,r,e[r])})),t},st=function(t){var r=y(t,!0),e=K.call(this,r);return!(this===G&&l(H,r)&&!l(Q,r))&&(!(e||!l(this,r)||!l(H,r)||l(this,D)&&this[D][r])||e)},ft=function(t,r){var e=d(t),n=y(r,!0);if(e!==G||!l(H,n)||l(Q,n)){var o=Y(e,n);return!o||!l(H,n)||l(e,D)&&e[D][n]||(o.enumerable=!0),o}},lt=function(t){var r=X(d(t)),e=[];return C(r,(function(t){l(H,t)||l(L,t)||e.push(t)})),e},ht=function(t){var r=t===G,e=X(r?Q:d(t)),n=[];return C(e,(function(t){!l(H,t)||r&&!l(G,t)||n.push(H[t])})),n};c||(R((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=k(t),e=function(t){this===G&&e.call(Q,t),l(this,D)&&l(this[D],r)&&(this[D][r]=!1),ot(this,r,m(1,t))};return u&&nt&&ot(G,r,{configurable:!0,set:e}),it(r,t)}).prototype,"toString",(function(){return W(this).tag})),R(V,"withoutSetter",(function(t){return it(k(t),t)})),T.f=st,O.f=ut,E.f=ft,w.f=S.f=lt,A.f=ht,N.f=function(t){return it(P(t),t)},u&&(J(V.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),a||R(G,"propertyIsEnumerable",st,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),C(x(rt),(function(t){_(t)})),n({target:B,stat:!0,forced:!c},{for:function(t){var r=String(t);if(l(Z,r))return Z[r];var e=V(r);return Z[r]=e,tt[e]=r,e},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!u},{create:function(t,r){return void 0===r?b(t):ct(b(t),r)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(g(t))}}),$&&n({target:"JSON",stat:!0,forced:!c||f((function(){var t=V();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))},{stringify:function(t,r,e){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=r,(p(r)||void 0!==t)&&!at(t))return h(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!at(r))return r}),o[1]=r,$.apply(null,o)}}),V.prototype[z]||j(V.prototype,z,V.prototype.valueOf),U(V,B),L[D]=!0},6066:(t,r,e)=>{e(7235)("matchAll")},9007:(t,r,e)=>{e(7235)("match")},3510:(t,r,e)=>{e(7235)("replace")},1840:(t,r,e)=>{e(7235)("search")},6982:(t,r,e)=>{e(7235)("species")},2159:(t,r,e)=>{e(7235)("split")},6649:(t,r,e)=>{e(7235)("toPrimitive")},9341:(t,r,e)=>{e(7235)("toStringTag")},543:(t,r,e)=>{e(7235)("unscopables")},2990:(t,r,e)=>{"use strict";var n=e(260),o=e(1048),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("copyWithin",(function(t,r){return o.call(i(this),t,r,arguments.length>2?arguments[2]:void 0)}))},8927:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).every,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("every",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3105:(t,r,e)=>{"use strict";var n=e(260),o=e(1285),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("fill",(function(t){return o.apply(i(this),arguments)}))},5035:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).filter,i=e(3074),a=n.aTypedArray;(0,n.exportTypedArrayMethod)("filter",(function(t){var r=o(a(this),t,arguments.length>1?arguments[1]:void 0);return i(this,r)}))},7174:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).findIndex,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("findIndex",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},4345:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).find,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("find",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},4197:(t,r,e)=>{e(9843)("Float32",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},6495:(t,r,e)=>{e(9843)("Float64",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},2846:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).forEach,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("forEach",(function(t){o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},8145:(t,r,e)=>{"use strict";var n=e(3832);(0,e(260).exportTypedArrayStaticMethod)("from",e(7321),n)},4731:(t,r,e)=>{"use strict";var n=e(260),o=e(1318).includes,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("includes",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},7209:(t,r,e)=>{"use strict";var n=e(260),o=e(1318).indexOf,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("indexOf",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},5109:(t,r,e)=>{e(9843)("Int16",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},5125:(t,r,e)=>{e(9843)("Int32",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},7145:(t,r,e)=>{e(9843)("Int8",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},6319:(t,r,e)=>{"use strict";var n=e(7854),o=e(260),i=e(6992),a=e(5112)("iterator"),u=n.Uint8Array,c=i.values,s=i.keys,f=i.entries,l=o.aTypedArray,h=o.exportTypedArrayMethod,p=u&&u.prototype[a],v=!!p&&("values"==p.name||null==p.name),g=function(){return c.call(l(this))};h("entries",(function(){return f.call(l(this))})),h("keys",(function(){return s.call(l(this))})),h("values",g,!v),h(a,g,!v)},8867:(t,r,e)=>{"use strict";var n=e(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].join;i("join",(function(t){return a.apply(o(this),arguments)}))},7789:(t,r,e)=>{"use strict";var n=e(260),o=e(6583),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("lastIndexOf",(function(t){return o.apply(i(this),arguments)}))},3739:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).map,i=e(6707),a=n.aTypedArray,u=n.aTypedArrayConstructor;(0,n.exportTypedArrayMethod)("map",(function(t){return o(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,r){return new(u(i(t,t.constructor)))(r)}))}))},5206:(t,r,e)=>{"use strict";var n=e(260),o=e(3832),i=n.aTypedArrayConstructor;(0,n.exportTypedArrayStaticMethod)("of",(function(){for(var t=0,r=arguments.length,e=new(i(this))(r);r>t;)e[t]=arguments[t++];return e}),o)},4483:(t,r,e)=>{"use strict";var n=e(260),o=e(3671).right,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("reduceRight",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},9368:(t,r,e)=>{"use strict";var n=e(260),o=e(3671).left,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("reduce",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2056:(t,r,e)=>{"use strict";var n=e(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=Math.floor;i("reverse",(function(){for(var t,r=this,e=o(r).length,n=a(e/2),i=0;i<n;)t=r[i],r[i++]=r[--e],r[e]=t;return r}))},3462:(t,r,e)=>{"use strict";var n=e(260),o=e(7466),i=e(4590),a=e(7908),u=e(7293),c=n.aTypedArray;(0,n.exportTypedArrayMethod)("set",(function(t){c(this);var r=i(arguments.length>1?arguments[1]:void 0,1),e=this.length,n=a(t),u=o(n.length),s=0;if(u+r>e)throw RangeError("Wrong length");for(;s<u;)this[r+s]=n[s++]}),u((function(){new Int8Array(1).set({})})))},678:(t,r,e)=>{"use strict";var n=e(260),o=e(6707),i=e(7293),a=n.aTypedArray,u=n.aTypedArrayConstructor,c=n.exportTypedArrayMethod,s=[].slice;c("slice",(function(t,r){for(var e=s.call(a(this),t,r),n=o(this,this.constructor),i=0,c=e.length,f=new(u(n))(c);c>i;)f[i]=e[i++];return f}),i((function(){new Int8Array(1).slice()})))},7462:(t,r,e)=>{"use strict";var n=e(260),o=e(2092).some,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("some",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3824:(t,r,e)=>{"use strict";var n=e(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].sort;i("sort",(function(t){return a.call(o(this),t)}))},5021:(t,r,e)=>{"use strict";var n=e(260),o=e(7466),i=e(1400),a=e(6707),u=n.aTypedArray;(0,n.exportTypedArrayMethod)("subarray",(function(t,r){var e=u(this),n=e.length,c=i(t,n);return new(a(e,e.constructor))(e.buffer,e.byteOffset+c*e.BYTES_PER_ELEMENT,o((void 0===r?n:i(r,n))-c))}))},2974:(t,r,e)=>{"use strict";var n=e(7854),o=e(260),i=e(7293),a=n.Int8Array,u=o.aTypedArray,c=o.exportTypedArrayMethod,s=[].toLocaleString,f=[].slice,l=!!a&&i((function(){s.call(new a(1))}));c("toLocaleString",(function(){return s.apply(l?f.call(u(this)):u(this),arguments)}),i((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!i((function(){a.prototype.toLocaleString.call([1,2])})))},5016:(t,r,e)=>{"use strict";var n=e(260).exportTypedArrayMethod,o=e(7293),i=e(7854).Uint8Array,a=i&&i.prototype||{},u=[].toString,c=[].join;o((function(){u.call({})}))&&(u=function(){return c.call(this)});var s=a.toString!=u;n("toString",u,s)},8255:(t,r,e)=>{e(9843)("Uint16",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},9135:(t,r,e)=>{e(9843)("Uint32",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},2472:(t,r,e)=>{e(9843)("Uint8",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},9743:(t,r,e)=>{e(9843)("Uint8",(function(t){return function(r,e,n){return t(this,r,e,n)}}),!0)},4129:(t,r,e)=>{"use strict";var n,o=e(7854),i=e(2248),a=e(2423),u=e(7710),c=e(9320),s=e(111),f=e(9909).enforce,l=e(8536),h=!o.ActiveXObject&&"ActiveXObject"in o,p=Object.isExtensible,v=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},g=t.exports=u("WeakMap",v,c);if(l&&h){n=c.getConstructor(v,"WeakMap",!0),a.REQUIRED=!0;var d=g.prototype,y=d.delete,m=d.has,b=d.get,x=d.set;i(d,{delete:function(t){if(s(t)&&!p(t)){var r=f(this);return r.frozen||(r.frozen=new n),y.call(this,t)||r.frozen.delete(t)}return y.call(this,t)},has:function(t){if(s(t)&&!p(t)){var r=f(this);return r.frozen||(r.frozen=new n),m.call(this,t)||r.frozen.has(t)}return m.call(this,t)},get:function(t){if(s(t)&&!p(t)){var r=f(this);return r.frozen||(r.frozen=new n),m.call(this,t)?b.call(this,t):r.frozen.get(t)}return b.call(this,t)},set:function(t,r){if(s(t)&&!p(t)){var e=f(this);e.frozen||(e.frozen=new n),m.call(this,t)?x.call(this,t,r):e.frozen.set(t,r)}else x.call(this,t,r);return this}})}},8478:(t,r,e)=>{"use strict";e(7710)("WeakSet",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),e(9320))},4747:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8533),a=e(8880);for(var u in o){var c=n[u],s=c&&c.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},3948:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(6992),a=e(8880),u=e(5112),c=u("iterator"),s=u("toStringTag"),f=i.values;for(var l in o){var h=n[l],p=h&&h.prototype;if(p){if(p[c]!==f)try{a(p,c,f)}catch(t){p[c]=f}if(p[s]||a(p,s,l),o[l])for(var v in i)if(p[v]!==i[v])try{a(p,v,i[v])}catch(t){p[v]=i[v]}}}},4633:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(261);n({global:!0,bind:!0,enumerable:!0,forced:!o.setImmediate||!o.clearImmediate},{setImmediate:i.set,clearImmediate:i.clear})},5844:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(5948),a=e(5268),u=o.process;n({global:!0,enumerable:!0,noTargetGet:!0},{queueMicrotask:function(t){var r=a&&u.domain;i(r?r.bind(t):t)}})},2564:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(8113),a=[].slice,u=function(t){return function(r,e){var n=arguments.length>2,o=n?a.call(arguments,2):void 0;return t(n?function(){("function"==typeof r?r:Function(r)).apply(this,o)}:r,e)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})},1637:(t,r,e)=>{"use strict";e(6992);var n=e(2109),o=e(5005),i=e(590),a=e(1320),u=e(2248),c=e(8003),s=e(4994),f=e(9909),l=e(5787),h=e(6656),p=e(9974),v=e(648),g=e(9670),d=e(111),y=e(30),m=e(9114),b=e(8554),x=e(1246),w=e(5112),S=o("fetch"),A=o("Headers"),E=w("iterator"),O="URLSearchParams",T="URLSearchParamsIterator",j=f.set,R=f.getterFor(O),I=f.getterFor(T),M=/\+/g,L=Array(4),k=function(t){return L[t-1]||(L[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},P=function(t){try{return decodeURIComponent(t)}catch(r){return t}},N=function(t){var r=t.replace(M," "),e=4;try{return decodeURIComponent(r)}catch(t){for(;e;)r=r.replace(k(e--),P);return r}},_=/[!'()~]|%20/g,U={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},F=function(t){return U[t]},C=function(t){return encodeURIComponent(t).replace(_,F)},D=function(t,r){if(r)for(var e,n,o=r.split("&"),i=0;i<o.length;)(e=o[i++]).length&&(n=e.split("="),t.push({key:N(n.shift()),value:N(n.join("="))}))},B=function(t){this.entries.length=0,D(this.entries,t)},z=function(t,r){if(t<r)throw TypeError("Not enough arguments")},q=s((function(t,r){j(this,{type:T,iterator:b(R(t).entries),kind:r})}),"Iterator",(function(){var t=I(this),r=t.kind,e=t.iterator.next(),n=e.value;return e.done||(e.value="keys"===r?n.key:"values"===r?n.value:[n.key,n.value]),e})),W=function(){l(this,W,O);var t,r,e,n,o,i,a,u,c,s=arguments.length>0?arguments[0]:void 0,f=this,p=[];if(j(f,{type:O,entries:p,updateURL:function(){},updateSearchParams:B}),void 0!==s)if(d(s))if("function"==typeof(t=x(s)))for(e=(r=t.call(s)).next;!(n=e.call(r)).done;){if((a=(i=(o=b(g(n.value))).next).call(o)).done||(u=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");p.push({key:a.value+"",value:u.value+""})}else for(c in s)h(s,c)&&p.push({key:c,value:s[c]+""});else D(p,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},G=W.prototype;u(G,{append:function(t,r){z(arguments.length,2);var e=R(this);e.entries.push({key:t+"",value:r+""}),e.updateURL()},delete:function(t){z(arguments.length,1);for(var r=R(this),e=r.entries,n=t+"",o=0;o<e.length;)e[o].key===n?e.splice(o,1):o++;r.updateURL()},get:function(t){z(arguments.length,1);for(var r=R(this).entries,e=t+"",n=0;n<r.length;n++)if(r[n].key===e)return r[n].value;return null},getAll:function(t){z(arguments.length,1);for(var r=R(this).entries,e=t+"",n=[],o=0;o<r.length;o++)r[o].key===e&&n.push(r[o].value);return n},has:function(t){z(arguments.length,1);for(var r=R(this).entries,e=t+"",n=0;n<r.length;)if(r[n++].key===e)return!0;return!1},set:function(t,r){z(arguments.length,1);for(var e,n=R(this),o=n.entries,i=!1,a=t+"",u=r+"",c=0;c<o.length;c++)(e=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,e.value=u));i||o.push({key:a,value:u}),n.updateURL()},sort:function(){var t,r,e,n=R(this),o=n.entries,i=o.slice();for(o.length=0,e=0;e<i.length;e++){for(t=i[e],r=0;r<e;r++)if(o[r].key>t.key){o.splice(r,0,t);break}r===e&&o.push(t)}n.updateURL()},forEach:function(t){for(var r,e=R(this).entries,n=p(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<e.length;)n((r=e[o++]).value,r.key,this)},keys:function(){return new q(this,"keys")},values:function(){return new q(this,"values")},entries:function(){return new q(this,"entries")}},{enumerable:!0}),a(G,E,G.entries),a(G,"toString",(function(){for(var t,r=R(this).entries,e=[],n=0;n<r.length;)t=r[n++],e.push(C(t.key)+"="+C(t.value));return e.join("&")}),{enumerable:!0}),c(W,O),n({global:!0,forced:!i},{URLSearchParams:W}),i||"function"!=typeof S||"function"!=typeof A||n({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var r,e,n,o=[t];return arguments.length>1&&(d(r=arguments[1])&&(e=r.body,v(e)===O&&((n=r.headers?new A(r.headers):new A).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),r=y(r,{body:m(0,String(e)),headers:m(0,n)}))),o.push(r)),S.apply(this,o)}}),t.exports={URLSearchParams:W,getState:R}},285:(t,r,e)=>{"use strict";e(8783);var n,o=e(2109),i=e(9781),a=e(590),u=e(7854),c=e(6048),s=e(1320),f=e(5787),l=e(6656),h=e(1574),p=e(8457),v=e(8710).codeAt,g=e(3197),d=e(8003),y=e(1637),m=e(9909),b=u.URL,x=y.URLSearchParams,w=y.getState,S=m.set,A=m.getterFor("URL"),E=Math.floor,O=Math.pow,T="Invalid scheme",j="Invalid host",R="Invalid port",I=/[A-Za-z]/,M=/[\d+-.A-Za-z]/,L=/\d/,k=/^(0x|0X)/,P=/^[0-7]+$/,N=/^\d+$/,_=/^[\dA-Fa-f]+$/,U=/[\u0000\t\u000A\u000D #%/:?@[\\]]/,F=/[\u0000\t\u000A\u000D #/:?@[\\]]/,C=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,D=/[\t\u000A\u000D]/g,B=function(t,r){var e,n,o;if("["==r.charAt(0)){if("]"!=r.charAt(r.length-1))return j;if(!(e=q(r.slice(1,-1))))return j;t.host=e}else if(K(t)){if(r=g(r),U.test(r))return j;if(null===(e=z(r)))return j;t.host=e}else{if(F.test(r))return j;for(e="",n=p(r),o=0;o<n.length;o++)e+=J(n[o],G);t.host=e}},z=function(t){var r,e,n,o,i,a,u,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),(r=c.length)>4)return t;for(e=[],n=0;n<r;n++){if(""==(o=c[n]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=k.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?N:8==i?P:_).test(o))return t;a=parseInt(o,i)}e.push(a)}for(n=0;n<r;n++)if(a=e[n],n==r-1){if(a>=O(256,5-r))return null}else if(a>255)return null;for(u=e.pop(),n=0;n<e.length;n++)u+=e[n]*O(256,3-n);return u},q=function(t){var r,e,n,o,i,a,u,c=[0,0,0,0,0,0,0,0],s=0,f=null,l=0,h=function(){return t.charAt(l)};if(":"==h()){if(":"!=t.charAt(1))return;l+=2,f=++s}for(;h();){if(8==s)return;if(":"!=h()){for(r=e=0;e<4&&_.test(h());)r=16*r+parseInt(h(),16),l++,e++;if("."==h()){if(0==e)return;if(l-=e,s>6)return;for(n=0;h();){if(o=null,n>0){if(!("."==h()&&n<4))return;l++}if(!L.test(h()))return;for(;L.test(h());){if(i=parseInt(h(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;l++}c[s]=256*c[s]+o,2!=++n&&4!=n||s++}if(4!=n)return;break}if(":"==h()){if(l++,!h())return}else if(h())return;c[s++]=r}else{if(null!==f)return;l++,f=++s}}if(null!==f)for(a=s-f,s=7;0!=s&&a>0;)u=c[s],c[s--]=c[f+a-1],c[f+--a]=u;else if(8!=s)return;return c},W=function(t){var r,e,n,o;if("number"==typeof t){for(r=[],e=0;e<4;e++)r.unshift(t%256),t=E(t/256);return r.join(".")}if("object"==typeof t){for(r="",n=function(t){for(var r=null,e=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>e&&(r=n,e=o),n=null,o=0):(null===n&&(n=i),++o);return o>e&&(r=n,e=o),r}(t),e=0;e<8;e++)o&&0===t[e]||(o&&(o=!1),n===e?(r+=e?":":"::",o=!0):(r+=t[e].toString(16),e<7&&(r+=":")));return"["+r+"]"}return t},G={},V=h({},G,{" ":1,'"':1,"<":1,">":1,"`":1}),$=h({},V,{"#":1,"?":1,"{":1,"}":1}),Y=h({},$,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),J=function(t,r){var e=v(t,0);return e>32&&e<127&&!l(r,t)?t:encodeURIComponent(t)},X={ftp:21,file:null,http:80,https:443,ws:80,wss:443},K=function(t){return l(X,t.scheme)},H=function(t){return""!=t.username||""!=t.password},Q=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},Z=function(t,r){var e;return 2==t.length&&I.test(t.charAt(0))&&(":"==(e=t.charAt(1))||!r&&"|"==e)},tt=function(t){var r;return t.length>1&&Z(t.slice(0,2))&&(2==t.length||"/"===(r=t.charAt(2))||"\\"===r||"?"===r||"#"===r)},rt=function(t){var r=t.path,e=r.length;!e||"file"==t.scheme&&1==e&&Z(r[0],!0)||r.pop()},et=function(t){return"."===t||"%2e"===t.toLowerCase()},nt={},ot={},it={},at={},ut={},ct={},st={},ft={},lt={},ht={},pt={},vt={},gt={},dt={},yt={},mt={},bt={},xt={},wt={},St={},At={},Et=function(t,r,e,o){var i,a,u,c,s,f=e||nt,h=0,v="",g=!1,d=!1,y=!1;for(e||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,r=r.replace(C,"")),r=r.replace(D,""),i=p(r);h<=i.length;){switch(a=i[h],f){case nt:if(!a||!I.test(a)){if(e)return T;f=it;continue}v+=a.toLowerCase(),f=ot;break;case ot:if(a&&(M.test(a)||"+"==a||"-"==a||"."==a))v+=a.toLowerCase();else{if(":"!=a){if(e)return T;v="",f=it,h=0;continue}if(e&&(K(t)!=l(X,v)||"file"==v&&(H(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=v,e)return void(K(t)&&X[t.scheme]==t.port&&(t.port=null));v="","file"==t.scheme?f=dt:K(t)&&o&&o.scheme==t.scheme?f=at:K(t)?f=ft:"/"==i[h+1]?(f=ut,h++):(t.cannotBeABaseURL=!0,t.path.push(""),f=wt)}break;case it:if(!o||o.cannotBeABaseURL&&"#"!=a)return T;if(o.cannotBeABaseURL&&"#"==a){t.scheme=o.scheme,t.path=o.path.slice(),t.query=o.query,t.fragment="",t.cannotBeABaseURL=!0,f=At;break}f="file"==o.scheme?dt:ct;continue;case at:if("/"!=a||"/"!=i[h+1]){f=ct;continue}f=lt,h++;break;case ut:if("/"==a){f=ht;break}f=xt;continue;case ct:if(t.scheme=o.scheme,a==n)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query;else if("/"==a||"\\"==a&&K(t))f=st;else if("?"==a)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query="",f=St;else{if("#"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.path.pop(),f=xt;continue}t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query,t.fragment="",f=At}break;case st:if(!K(t)||"/"!=a&&"\\"!=a){if("/"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,f=xt;continue}f=ht}else f=lt;break;case ft:if(f=lt,"/"!=a||"/"!=v.charAt(h+1))continue;h++;break;case lt:if("/"!=a&&"\\"!=a){f=ht;continue}break;case ht:if("@"==a){g&&(v="%40"+v),g=!0,u=p(v);for(var m=0;m<u.length;m++){var b=u[m];if(":"!=b||y){var x=J(b,Y);y?t.password+=x:t.username+=x}else y=!0}v=""}else if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)){if(g&&""==v)return"Invalid authority";h-=p(v).length+1,v="",f=pt}else v+=a;break;case pt:case vt:if(e&&"file"==t.scheme){f=mt;continue}if(":"!=a||d){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)){if(K(t)&&""==v)return j;if(e&&""==v&&(H(t)||null!==t.port))return;if(c=B(t,v))return c;if(v="",f=bt,e)return;continue}"["==a?d=!0:"]"==a&&(d=!1),v+=a}else{if(""==v)return j;if(c=B(t,v))return c;if(v="",f=gt,e==vt)return}break;case gt:if(!L.test(a)){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)||e){if(""!=v){var w=parseInt(v,10);if(w>65535)return R;t.port=K(t)&&w===X[t.scheme]?null:w,v=""}if(e)return;f=bt;continue}return R}v+=a;break;case dt:if(t.scheme="file","/"==a||"\\"==a)f=yt;else{if(!o||"file"!=o.scheme){f=xt;continue}if(a==n)t.host=o.host,t.path=o.path.slice(),t.query=o.query;else if("?"==a)t.host=o.host,t.path=o.path.slice(),t.query="",f=St;else{if("#"!=a){tt(i.slice(h).join(""))||(t.host=o.host,t.path=o.path.slice(),rt(t)),f=xt;continue}t.host=o.host,t.path=o.path.slice(),t.query=o.query,t.fragment="",f=At}}break;case yt:if("/"==a||"\\"==a){f=mt;break}o&&"file"==o.scheme&&!tt(i.slice(h).join(""))&&(Z(o.path[0],!0)?t.path.push(o.path[0]):t.host=o.host),f=xt;continue;case mt:if(a==n||"/"==a||"\\"==a||"?"==a||"#"==a){if(!e&&Z(v))f=xt;else if(""==v){if(t.host="",e)return;f=bt}else{if(c=B(t,v))return c;if("localhost"==t.host&&(t.host=""),e)return;v="",f=bt}continue}v+=a;break;case bt:if(K(t)){if(f=xt,"/"!=a&&"\\"!=a)continue}else if(e||"?"!=a)if(e||"#"!=a){if(a!=n&&(f=xt,"/"!=a))continue}else t.fragment="",f=At;else t.query="",f=St;break;case xt:if(a==n||"/"==a||"\\"==a&&K(t)||!e&&("?"==a||"#"==a)){if(".."===(s=(s=v).toLowerCase())||"%2e."===s||".%2e"===s||"%2e%2e"===s?(rt(t),"/"==a||"\\"==a&&K(t)||t.path.push("")):et(v)?"/"==a||"\\"==a&&K(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&Z(v)&&(t.host&&(t.host=""),v=v.charAt(0)+":"),t.path.push(v)),v="","file"==t.scheme&&(a==n||"?"==a||"#"==a))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==a?(t.query="",f=St):"#"==a&&(t.fragment="",f=At)}else v+=J(a,$);break;case wt:"?"==a?(t.query="",f=St):"#"==a?(t.fragment="",f=At):a!=n&&(t.path[0]+=J(a,G));break;case St:e||"#"!=a?a!=n&&("'"==a&&K(t)?t.query+="%27":t.query+="#"==a?"%23":J(a,G)):(t.fragment="",f=At);break;case At:a!=n&&(t.fragment+=J(a,V))}h++}},Ot=function(t){var r,e,n=f(this,Ot,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(t),u=S(n,{type:"URL"});if(void 0!==o)if(o instanceof Ot)r=A(o);else if(e=Et(r={},String(o)))throw TypeError(e);if(e=Et(u,a,null,r))throw TypeError(e);var c=u.searchParams=new x,s=w(c);s.updateSearchParams(u.query),s.updateURL=function(){u.query=String(c)||null},i||(n.href=jt.call(n),n.origin=Rt.call(n),n.protocol=It.call(n),n.username=Mt.call(n),n.password=Lt.call(n),n.host=kt.call(n),n.hostname=Pt.call(n),n.port=Nt.call(n),n.pathname=_t.call(n),n.search=Ut.call(n),n.searchParams=Ft.call(n),n.hash=Ct.call(n))},Tt=Ot.prototype,jt=function(){var t=A(this),r=t.scheme,e=t.username,n=t.password,o=t.host,i=t.port,a=t.path,u=t.query,c=t.fragment,s=r+":";return null!==o?(s+="//",H(t)&&(s+=e+(n?":"+n:"")+"@"),s+=W(o),null!==i&&(s+=":"+i)):"file"==r&&(s+="//"),s+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(s+="?"+u),null!==c&&(s+="#"+c),s},Rt=function(){var t=A(this),r=t.scheme,e=t.port;if("blob"==r)try{return new URL(r.path[0]).origin}catch(t){return"null"}return"file"!=r&&K(t)?r+"://"+W(t.host)+(null!==e?":"+e:""):"null"},It=function(){return A(this).scheme+":"},Mt=function(){return A(this).username},Lt=function(){return A(this).password},kt=function(){var t=A(this),r=t.host,e=t.port;return null===r?"":null===e?W(r):W(r)+":"+e},Pt=function(){var t=A(this).host;return null===t?"":W(t)},Nt=function(){var t=A(this).port;return null===t?"":String(t)},_t=function(){var t=A(this),r=t.path;return t.cannotBeABaseURL?r[0]:r.length?"/"+r.join("/"):""},Ut=function(){var t=A(this).query;return t?"?"+t:""},Ft=function(){return A(this).searchParams},Ct=function(){var t=A(this).fragment;return t?"#"+t:""},Dt=function(t,r){return{get:t,set:r,configurable:!0,enumerable:!0}};if(i&&c(Tt,{href:Dt(jt,(function(t){var r=A(this),e=String(t),n=Et(r,e);if(n)throw TypeError(n);w(r.searchParams).updateSearchParams(r.query)})),origin:Dt(Rt),protocol:Dt(It,(function(t){var r=A(this);Et(r,String(t)+":",nt)})),username:Dt(Mt,(function(t){var r=A(this),e=p(String(t));if(!Q(r)){r.username="";for(var n=0;n<e.length;n++)r.username+=J(e[n],Y)}})),password:Dt(Lt,(function(t){var r=A(this),e=p(String(t));if(!Q(r)){r.password="";for(var n=0;n<e.length;n++)r.password+=J(e[n],Y)}})),host:Dt(kt,(function(t){var r=A(this);r.cannotBeABaseURL||Et(r,String(t),pt)})),hostname:Dt(Pt,(function(t){var r=A(this);r.cannotBeABaseURL||Et(r,String(t),vt)})),port:Dt(Nt,(function(t){var r=A(this);Q(r)||(""==(t=String(t))?r.port=null:Et(r,t,gt))})),pathname:Dt(_t,(function(t){var r=A(this);r.cannotBeABaseURL||(r.path=[],Et(r,t+"",bt))})),search:Dt(Ut,(function(t){var r=A(this);""==(t=String(t))?r.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),r.query="",Et(r,t,St)),w(r.searchParams).updateSearchParams(r.query)})),searchParams:Dt(Ft),hash:Dt(Ct,(function(t){var r=A(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),r.fragment="",Et(r,t,At)):r.fragment=null}))}),s(Tt,"toJSON",(function(){return jt.call(this)}),{enumerable:!0}),s(Tt,"toString",(function(){return jt.call(this)}),{enumerable:!0}),b){var Bt=b.createObjectURL,zt=b.revokeObjectURL;Bt&&s(Ot,"createObjectURL",(function(t){return Bt.apply(b,arguments)})),zt&&s(Ot,"revokeObjectURL",(function(t){return zt.apply(b,arguments)}))}d(Ot,"URL"),o({global:!0,forced:!a,sham:!i},{URL:Ot})},3753:(t,r,e)=>{"use strict";e(2109)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},8594:(t,r,e)=>{e(1926),e(6337);var n=e(857);t.exports=n},6337:(t,r,e)=>{e(4747),e(3948),e(4633),e(5844),e(2564),e(285),e(3753),e(1637);var n=e(857);t.exports=n},5666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return M()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=O(a,e);if(u){if(u===g)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var c=f(t,r,e);if("normal"===c.type){if(n=e.done?v:h,c.arg===g)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=v,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",g={};function d(){}function y(){}function m(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(I([])));w&&w!==e&&n.call(w,i)&&(b=w);var S=m.prototype=d.prototype=Object.create(b);function A(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:M}}function M(){return{value:r,done:!0}}return y.prototype=S.constructor=m,m.constructor=y,y.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},A(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(S),c(S,u,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},7529:t=>{t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var o in n)r.call(n,o)&&(t[o]=n[o])}return t};var r=Object.prototype.hasOwnProperty}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";e.r(n),e.d(n,{default:()=>Y,getCssSelector:()=>$}),e(8594),e(5666);var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function r(r){return null!=r&&"object"===(void 0===r?"undefined":t(r))&&1===r.nodeType&&"object"===t(r.style)&&"object"===t(r.ownerDocument)}var o=regeneratorRuntime.mark(c);function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n=e.querySelectorAll(r);return 1===n.length&&n[0]===t}function c(t){var e,n,i=arguments;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e=i.length>1&&void 0!==i[1]?i[1]:s(t),n=t;case 2:if(!r(n)||n===e){o.next=8;break}return o.next=5,n;case 5:n=n.parentElement,o.next=2;break;case 8:case"end":return o.stop()}}),o)}function s(t){return t.ownerDocument.querySelector(":root")}function f(t){var e=t.parentNode;if(e)for(var n=0,o=e.childNodes,i=0;i<o.length;i++)if(r(o[i])&&(n+=1,o[i]===t))return[":nth-child(".concat(n,")")];return[]}function l(t){return Object.assign({},h,{root:t.ownerDocument.querySelector(":root")})}var h={selectors:["id","class","tag","attribute"],includeTag:!1,whitelist:[],blacklist:[],combineWithinSelector:!0,combineBetweenSelectors:!0},p=new RegExp(["^$","\\s","^\\d"].join("|")),v=new RegExp(["^$","^\\d"].join("|")),g=["nthoftype","tag","id","class","attribute","nthchild"];function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function y(t){var r,e=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s(t);return i(c(t,r))}(t).map((function(t){return f(t)[0]})).reverse();return[":root"].concat((r=e,function(t){if(Array.isArray(t))return d(t)}(r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||function(t,r){if(t){if("string"==typeof t)return d(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).join(" > ")}function m(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({},l(t),r)}var b=e(3426),x=e.n(b);function w(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[[]];return t.forEach((function(t){r.forEach((function(e){r.push(e.concat(t))}))})),r.shift(),r.sort((function(t,r){return t.length-r.length}))}function A(t){return t.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".+")}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===t.length)return new RegExp(".^");var r=t.map((function(t){return"string"==typeof t?A(t):t.source})).join("|");return new RegExp(r)}function O(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var T=E(["class","id","ng-*"]);function j(t){var r=t.nodeName,e=t.nodeValue;return"[".concat(r,"='").concat(F(e),"']")}function R(t){var r=t.nodeName;return!T.test(r)}function I(t){return[F(t.tagName.toLowerCase())]}var M=regeneratorRuntime.mark(W);function L(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=P(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}function k(t){return function(t){if(Array.isArray(t))return N(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||P(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,r){if(t){if("string"==typeof t)return N(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?N(t,r):void 0}}function N(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var _=":".charCodeAt(0).toString(16).toUpperCase(),U=/[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split("").map((function(t){return":"===t?"\\".concat(_," "):U.test(t)?"\\".concat(t):escape(t).replace(/%/g,"\\")})).join("")}var C={tag:I,id:function(t){var r=t.getAttribute("id")||"",e="#".concat(F(r));return!p.test(r)&&u(t,e,t.ownerDocument)?[e]:[]},class:function(t){return(t.getAttribute("class")||"").trim().split(/\s+/).filter((function(t){return!v.test(t)})).map((function(t){return".".concat(F(t))}))},attribute:function(t){return(r=t.attributes,function(t){if(Array.isArray(t))return O(t)}(r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||function(t,r){if(t){if("string"==typeof t)return O(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(t,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter(R).map(j);var r},nthchild:f,nthoftype:function(t){var r=I(t)[0],e=t.parentElement;if(e)for(var n=e.querySelectorAll(r),o=0;o<n.length;o++)if(n[o]===t)return["".concat(r,":nth-of-type(").concat(o+1,")")];return[]}};function D(t,r,e){var n,o,i,a=(n=function(t,r){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.selectors,n=r.combineBetweenSelectors,o=r.includeTag,i=n?S(e):e.map((function(t){return[t]}));return o?i.map(B):i}(t,r).map((function(r){return e=t,n={},r.forEach((function(t){var r=e[t];r.length>0&&(n[t]=r)})),x()(n).map(q);var e,n})).filter((function(t){return""!==t}))}(function(t,r){var e=r.blacklist,n=r.whitelist,o=r.combineWithinSelector,i=E(e),a=E(n);return function(t){var r=t.selectors,e=t.includeTag,n=[].concat(r);return e&&!n.includes("tag")&&n.push("tag"),n}(r).reduce((function(r,e){var n=function(){var t=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).sort((function(r,e){var n=t.test(r),o=t.test(e);return n&&!o?-1:!n&&o?1:0}))}(function(){var t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return r.test(e)||!t.test(e)}))}(function(t,r){return(C[r]||function(){return[]})(t)}(t,e),i,a),a);return r[e]=o?S(n):n.map((function(t){return[t]})),r}),{})}(t,e),e),(o=[]).concat.apply(o,function(t){if(Array.isArray(t))return w(t)}(i=n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(i)||function(t,r){if(t){if("string"==typeof t)return w(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(t,r):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));return k(new Set(a))}function B(t){return t.includes("tag")||t.includes("nthoftype")?k(t):[].concat(k(t),["tag"])}function z(t,r){return r[t]?r[t].join(""):""}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=k(g);return t.tag&&t.nthoftype&&r.splice(r.indexOf("tag"),1),r.map((function(r){return z(r,t)})).join("")}function W(t,r,e){var n,o,i,a,u,c,s;return regeneratorRuntime.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:n=D(t,0,e),o=L(n),f.prev=2,o.s();case 4:if((i=o.n()).done){f.next=10;break}return a=i.value,f.next=8," "+a;case 8:f.next=4;break;case 10:f.next=15;break;case 12:f.prev=12,f.t0=f.catch(2),o.e(f.t0);case 15:return f.prev=15,o.f(),f.finish(15);case 18:if(r!==t.parentNode){f.next=36;break}u=L(n),f.prev=20,u.s();case 22:if((c=u.n()).done){f.next=28;break}return s=c.value,f.next=26," > "+s;case 26:f.next=22;break;case 28:f.next=33;break;case 30:f.prev=30,f.t1=f.catch(20),u.e(f.t1);case 33:return f.prev=33,u.f(),f.finish(33);case 36:case"end":return f.stop()}}),M,null,[[2,12,15,18],[20,30,33,36]])}function G(t,r){var e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3?arguments[3]:void 0,i=W(t,o.root,o),a=L(i);try{for(a.s();!(e=a.n()).done;){var c=e.value,s=(n+c).trim();if(u(t,s,o.root))return s}}catch(t){a.e(t)}finally{a.f()}return null}function V(t,r){var e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3?arguments[3]:void 0,i=L(c(t,r));try{for(i.s();!(e=i.n()).done;){var a=e.value,u=G(a,r,n,o);if(u)return{foundElement:a,selector:u}}}catch(t){i.e(t)}finally{i.f()}return null}function $(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=m(t,r),n="",o=e.root;function i(){return V(t,o,n,e)}for(var a=i();a;){var u=a,c=u.foundElement,s=u.selector;if(c===t)return s;o=c,n=s,a=i()}return y(t)}const Y=$})(),n})()}));

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

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


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

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/window/window.js":
/*!*****************************************!*\
  !*** ./src/components/window/window.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/svg */ "./src/utils/svg.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/element */ "./src/utils/element.js");




function Window(opts)
{
    this.parent = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create('<hv-window></hv-window>');
	this.shadow = this.parent.attachShadow({ mode: 'open' });
	this.win = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="window" style="visibility: hidden;"></div>`);

	this.onClose = () => {};

	const header = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="header" style="background: ${opts.color};"></div>`);
	header.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<h1>${opts.name}</h1>`));

	const close = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x);
	close.addEventListener("click", (e) => 
	{
		e.stopImmediatePropagation();
		this.onClose();
		this.parent.remove();
	});
	header.appendChild(close);

	const body = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create("<div class='body scroll'></div>");

	this.win.appendChild(header);
	this.win.appendChild(body);
	this.shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/global.css')}" rel="stylesheet" type="text/css"> `));
	this.shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/components/window.css')}" rel="stylesheet" type="text/css">`));
	const link = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${opts.css}" rel="stylesheet" type="text/css">`);
	this.shadow.appendChild(link);
	
	link.addEventListener('load', () => 
	{
		this.win.style.visibility = "visible";
	});
	
	this.shadow.appendChild(this.win);
}

/* harmony default export */ __webpack_exports__["default"] = (Window);

/***/ }),

/***/ "./src/content_scripts/allowed.js":
/*!****************************************!*\
  !*** ./src/content_scripts/allowed.js ***!
  \****************************************/
/*! exports provided: isAllowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllowed", function() { return isAllowed; });


const ignore = [
	"https://www.google.com/recaptcha"
];

function isAllowed()
{
	let status = true;

	const href = window.location.href;
	for (const url of ignore)
	{
		if (href.startsWith(url))
		{
			status = false;
			break;
		}
	}

	return status;
}



/***/ }),

/***/ "./src/content_scripts/assets/assets.js":
/*!**********************************************!*\
  !*** ./src/content_scripts/assets/assets.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/msg */ "./src/utils/msg.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/element */ "./src/utils/element.js");




function get()
{
	const images = [...getBackgroundImages()];
	const svgs = [];
	const videos = [];

	const imgNodes = document.querySelectorAll('img');
	const svgNodes = document.querySelectorAll('svg');
	const videoNodes = document.querySelectorAll('video');

	for (const img of imgNodes)
	{
		if (img.src && images.indexOf(img.src) === -1) images.push(img.src);
	}

	const innerSvg = [];
	for (const svg of svgNodes)
	{
		const html = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].getHtml(svg);
		if (innerSvg.indexOf(svg.innerHTML) === -1) 
		{
			innerSvg.push(svg.innerHTML);
			svgs.push(html);	
		} 
	}

	for (const video of videoNodes)
	{
		let src = "";
		if (video.src)
		{
			src = video.src;
		}
		else
		{
			const source = video.querySelector("source");
			if (source) src = source.src;
		}

		if (src && videos.indexOf(src) === -1) videos.push(src); 
	}

	_utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("assets.set", { images, svgs, videos });
}

function getBackgroundImages()
{
	const result = [];

	const elements = document.querySelectorAll("body, body *");
	for (const element of elements)
	{
		const backgroundImage = window.getComputedStyle(element).getPropertyValue("background-image");
		if (backgroundImage && backgroundImage.includes("http")) 
		{
			const arr = backgroundImage.split("url(");
			arr.shift();

			for (const chunk of arr)
			{
				const url = chunk.split(")")[0].replaceAll("\"", "").replaceAll("'", "");
				result.push(url);
			}
		}
	}
	
	return [...new Set(result)];
}

/* harmony default export */ __webpack_exports__["default"] = ({
	get
});

/***/ }),

/***/ "./src/content_scripts/color_eyedropper/colorEyedropper.js":
/*!*****************************************************************!*\
  !*** ./src/content_scripts/color_eyedropper/colorEyedropper.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/msg */ "./src/utils/msg.js");
/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/parser */ "./src/utils/parser.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event */ "./src/content_scripts/event.js");
/* harmony import */ var _ui_dropperWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/dropperWindow */ "./src/content_scripts/color_eyedropper/ui/dropperWindow.js");
/* harmony import */ var _ui_imageCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/imageCanvas */ "./src/content_scripts/color_eyedropper/ui/imageCanvas.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings */ "./src/content_scripts/settings.js");
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/modal */ "./src/utils/modal.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/utility */ "./src/utils/utility.js");










let dropperWindow = null;
let imageCanvas = null;
let imageCanvasCtx = null;
let dropperCanvas = null;
let dropperCanvasCtx = null;
let rText = null;
let gText = null;
let bText = null;
let hexText = null;
let colorDiv = null;

let scrollTimer = null;
const windowOffset = 15;
const state = {
	enabled: false,
	hide: false,
	screenshot: null,
	currentColor: {},
	dockedWindows: []
};

function setupDropperWindow()
{
	dropperWindow = Object(_ui_dropperWindow__WEBPACK_IMPORTED_MODULE_3__["createDropperWindow"])(false);
	dropperWindow.style.visibility = "hidden";
	
	dropperCanvas = dropperWindow.querySelector('canvas');
	dropperCanvasCtx = dropperCanvas.getContext('2d');
	rText = dropperWindow.querySelector("#r");
	gText = dropperWindow.querySelector("#g");
	bText = dropperWindow.querySelector("#b");
	hexText = dropperWindow.querySelector("#hex");
	colorDiv = dropperWindow.querySelector("#color");
}

function setupImageCanvas()
{
	imageCanvas = Object(_ui_imageCanvas__WEBPACK_IMPORTED_MODULE_4__["createImageCanvas"])();
	imageCanvasCtx = imageCanvas.getContext('2d');
	imageCanvas.style.visibility = "hidden";

	imageCanvas.addEventListener('click', () => 
	{
		dockWindow();
	});
}

function loop()
{
	if (!state.enabled) return; 

	const { mx, my } = Object(_event__WEBPACK_IMPORTED_MODULE_2__["getMousePosition"])();

	if (!state.hide) dropperWindow.style.visibility = "visible";
	else dropperWindow.style.visibility = "hidden";

	const windowWidth = window.innerWidth - windowOffset;
	const windowHeight = window.innerHeight - windowOffset;
	let x = mx - window.scrollX + windowOffset;
	let y = my - window.scrollY + windowOffset;

	const box = dropperWindow.getBoundingClientRect();
	const width = box.width;
	const height = box.height;
	if (x +  width > windowWidth)
	{
		x = mx - (width + windowOffset);
	}

	if (y + height > windowHeight &&
		y - height > 0)
	{
		y = my - window.scrollY - height - windowOffset;
	} 

	dropperWindow.style.left = `${x}px`;
	dropperWindow.style.top = `${y}px`;
	
    // Draw image on dropper canvas
	let level = 5;
    if (_settings__WEBPACK_IMPORTED_MODULE_5__["default"].get().color_eyedropper) level = _settings__WEBPACK_IMPORTED_MODULE_5__["default"].get().color_eyedropper.zoom; 

    const imageWidth = imageCanvas.width * level;
    const imageHeight = imageCanvas.height * level;

    const startX = -(mx - window.scrollX) * level + dropperCanvas.width/2; 
    const startY = -(my - window.scrollY) * level + dropperCanvas.height/2;

    dropperCanvasCtx.clearRect(0, 0, dropperCanvas.width, dropperCanvas.height);
	dropperCanvasCtx.drawImage(state.screenshot, 
					startX, 
					startY, 
					imageWidth, 
					imageHeight);

	// Calculate color
	state.currentColor = Object(_utils_parser__WEBPACK_IMPORTED_MODULE_1__["getColor"])(dropperCanvasCtx.getImageData(dropperCanvas.width/2, dropperCanvas.height/2, 1, 1).data);
	rText.innerHTML = `<span>R</span> ${state.currentColor.r}`;
	gText.innerHTML = `<span>G</span> ${state.currentColor.g}`;
	bText.innerHTML = `<span>B</span> ${state.currentColor.b}`;
	hexText.innerHTML = `<span>#</span> ${state.currentColor.hex.substring(1, state.currentColor.hex.length).toUpperCase()}`;
	colorDiv.style.background = state.currentColor.hex;

	dropperCanvasCtx.beginPath();
	dropperCanvasCtx.moveTo(dropperCanvas.width/2, 0);
	dropperCanvasCtx.lineTo(dropperCanvas.width/2, dropperCanvas.height);
	dropperCanvasCtx.strokeStyle = "red";
	dropperCanvasCtx.stroke();
	dropperCanvasCtx.closePath();

	dropperCanvasCtx.beginPath();
	dropperCanvasCtx.moveTo(0, dropperCanvas.height/2);
	dropperCanvasCtx.lineTo(dropperCanvas.width, dropperCanvas.height/2);
	dropperCanvasCtx.strokeStyle = "red";
	dropperCanvasCtx.stroke();
	dropperCanvasCtx.closePath();

	for (const win of state.dockedWindows)
	{
		if (win.moving && win.moving.allowed)
		{
			const x = mx - win.moving.x;
	        const y = my - win.moving.y;
	        win.style.left = `${x}px`;
	        win.style.top = `${y}px`;
		}
	}

	requestAnimationFrame(loop);
}

function dockWindow()
{
	const dockedWindow = Object(_ui_dropperWindow__WEBPACK_IMPORTED_MODULE_3__["createDropperWindow"])(true);
	dockedWindow.color = {...state.currentColor};
	const box = dropperWindow.getBoundingClientRect();
	dockedWindow.getRootNode().host.style.left = `${box.left + window.scrollX}px`;
	dockedWindow.getRootNode().host.style.top = `${box.top + window.scrollY}px`;

	const drag = dockedWindow.querySelector("#drag");
	drag.addEventListener('mousedown', (e) => 
	{
		drag.style.cursor = "grabbing";
		const styles = window.getComputedStyle(dockedWindow);
		const px = parseInt(styles.getPropertyValue('left').split('px')[0]);
        const py = parseInt(styles.getPropertyValue('top').split('px')[0]);

        const { mx, my } = Object(_event__WEBPACK_IMPORTED_MODULE_2__["getMousePosition"])();

        dockedWindow.moving = {
            allowed: true,
            x: mx - px,
            y: my - py
        };
	});

	drag.addEventListener('mouseup', (e) => 
	{
		dockedWindow.moving = { allowed: false };
		drag.style.cursor = "grab";
	});

	drag.querySelector("svg").addEventListener('click', () => 
	{
		state.hide = false;
		dockedWindow.getRootNode().host.remove();
		state.dockedWindows.splice(dockedWindow.id, 1);
	});

	dockedWindow.id = state.dockedWindows.length;
	dockedWindow.querySelector('#r').innerHTML = `<span>R</span> ${dockedWindow.color.r}`;
	dockedWindow.querySelector('#g').innerHTML = `<span>G</span> ${dockedWindow.color.g}`;
	dockedWindow.querySelector('#b').innerHTML = `<span>B</span> ${dockedWindow.color.b}`;
	dockedWindow.querySelector('#copy_rgb').addEventListener('click', () => 
	{
		Object(_utils_utility__WEBPACK_IMPORTED_MODULE_7__["copyText"])(`${dockedWindow.color.r}, ${dockedWindow.color.g}, ${dockedWindow.color.b}`);
		_utils_modal__WEBPACK_IMPORTED_MODULE_6__["default"].show("Copied!");
	});

	const hex = dockedWindow.color.hex.substring(1, dockedWindow.color.hex.length).toUpperCase();
	dockedWindow.querySelector('#hex').innerHTML = `<span>#</span> ${hex}`;
	dockedWindow.querySelector('#copy_hex').addEventListener('click', () => 
	{
		Object(_utils_utility__WEBPACK_IMPORTED_MODULE_7__["copyText"])(`${dockedWindow.color.hex}`);
		_utils_modal__WEBPACK_IMPORTED_MODULE_6__["default"].show("Copied!");
	});

	dockedWindow.querySelector('#color').style.background = dockedWindow.color.hex;

	_utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("colorEyedropper.addToRecents", { color: state.currentColor });

	dockedWindow.addEventListener('mouseover', () => state.hide = true);
	dockedWindow.addEventListener('mouseout', () => state.hide = false);

	state.dockedWindows.push(dockedWindow);
	
	state.hide = true;
	setTimeout(() => state.hide = false, 200);
}

function prepare()
{
	state.enabled = false;
	dropperWindow.style.visibility = "hidden";
	imageCanvas.style.visibility = "hidden";

	for (const win of state.dockedWindows) win.style.visibility = "hidden";
	
	imageCanvas.style.cursor = "progress";
}

function setScreenshot(dataURI)
{
	const img = new Image();
	img.onload = () =>
	{
		for (const win of state.dockedWindows) win.style.visibility = "visible";

		state.screenshot = img;
		state.enabled = true;
		imageCanvas.style.cursor = "crosshair";

		imageCanvas.style.visibility = "visible";
		dropperWindow.style.visibility = "visible";

		imageCanvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
		imageCanvasCtx.drawImage(state.screenshot, 
						0, 
						0, 
						imageCanvas.width, 
						imageCanvas.height);

		requestAnimationFrame(loop);
	}

	img.src = dataURI;
}

function handleScroll()
{
	if (scrollTimer !== null) 
	{
        clearTimeout(scrollTimer);        
    }

    prepare();
    scrollTimer = setTimeout(() => 
    {
    	_utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("colorEyedropper.takeScreenshot", {}, null);
    }, 500);
}

function handleResize()
{
	imageCanvas.width = window.innerWidth;
	imageCanvas.height = window.innerHeight;
	prepare();

	setTimeout(() => 
    {
    	_utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("colorEyedropper.takeScreenshot", {}, null);
    }, 500);
}

function enable()
{
	setupImageCanvas();
	setupDropperWindow();

	window.addEventListener("resize", handleResize);
	window.addEventListener("scroll", handleScroll);

	_utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("colorEyedropper.takeScreenshot", {}, null);
}

function disable()
{
	if (!state.enabled) return;

	state.enabled = false;

	dropperWindow.getRootNode().host.remove();
	dropperWindow = null;

	imageCanvas.getRootNode().host.remove();
	imageCanvas = null;
	imageCanvasCtx = null;

	for (const win of state.dockedWindows) win.getRootNode().host.remove();
	state.dockedWindows = [];

	window.removeEventListener("resize", handleResize);
	window.removeEventListener("scroll", handleScroll);
}

function onKeyDown(e)
{
	if (state.enabled)
	{
		if (e.key === "Escape" || e.key === "Esc") exit();
	}
}

function exit()
{
	disable();
	_utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage('colorEyedropper.disable', {});
}

/* harmony default export */ __webpack_exports__["default"] = ({
	enable,
	disable,
	setScreenshot,
	onKeyDown
});

/***/ }),

/***/ "./src/content_scripts/color_eyedropper/ui/dropperWindow.js":
/*!******************************************************************!*\
  !*** ./src/content_scripts/color_eyedropper/ui/dropperWindow.js ***!
  \******************************************************************/
/*! exports provided: createDropperWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDropperWindow", function() { return createDropperWindow; });
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/svg */ "./src/utils/svg.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");




function createDropperWindow(isDocked)
{	
	const hvDropperWindow = document.createElement('hv-dropper-window');
	const shadow = hvDropperWindow.attachShadow({ mode: 'open' });

	const dropperWindow = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="dropper-window" dir="ltr"></div>`);
	let content = '<canvas width="200" height="180"></canvas>';
	let copyRgb = '', copyHex = '';
	let info = `
		<div class="help">
        	${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].info}
        	Press ESC to exit.
        </div>
	`;
	if (isDocked)
	{
		dropperWindow.style.width = "220px";
		hvDropperWindow.style.position = "absolute";
		dropperWindow.style.position = "absolute";
		dropperWindow.style.zIndex = "50000000";
		content = `
			<div id='drag'>
				${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}
			</div>
		`;

		copyRgb = `
			<li id="copy_rgb" class="copy">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].copy}
            </li>
		`;

		copyHex = `
			<li id="copy_hex" class="copy">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].copy}
            </li>
		`;

		info = "";
	}

	content += `
		<div class="container">
	         <ul>
	            <li id="r">
	                <span>R</span> 255
	            </li>
	            <li id="g">
	                <span>G</span> 255
	            </li>
	            <li id="b">
	                <span>B</span> 255
	            </li>
	            ${copyRgb}
	        </ul>
	        <div class="hex">
	            <div id="color"></div>
	            <ul>
	                <li id="hex">
	                    <span>#</span> FFFFFF
	                </li>
	                ${copyHex}
	            </ul>
	        </div>

	        ${info}
	    </div>
	`;

	dropperWindow.innerHTML = content;

	shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/global.css')}" rel="stylesheet" type="text/css"> `));
	shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/color_eyedropper/dropperWindow.css')}" rel="stylesheet" type="text/css"> `));
	shadow.appendChild(dropperWindow);
	document.body.appendChild(hvDropperWindow);

	return dropperWindow;
}



/***/ }),

/***/ "./src/content_scripts/color_eyedropper/ui/imageCanvas.js":
/*!****************************************************************!*\
  !*** ./src/content_scripts/color_eyedropper/ui/imageCanvas.js ***!
  \****************************************************************/
/*! exports provided: createImageCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageCanvas", function() { return createImageCanvas; });


function createImageCanvas()
{
	const hvImageCanvas = document.createElement('hv-image-canvas');
	const shadow = hvImageCanvas.attachShadow({ mode: 'open' });

	const canvas = document.createElement('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.background = "#000";
	canvas.style.position = "fixed";
	canvas.style.zIndex = "10000";
	canvas.style.top = "0";
	canvas.style.left = "0";

	shadow.appendChild(canvas);
	document.body.appendChild(hvImageCanvas);

	return canvas;
}



/***/ }),

/***/ "./src/content_scripts/cs.js":
/*!***********************************!*\
  !*** ./src/content_scripts/cs.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/msg */ "./src/utils/msg.js");
/* harmony import */ var _allowed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allowed */ "./src/content_scripts/allowed.js");
/* harmony import */ var _utils_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/globalStyles */ "./src/utils/globalStyles.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "./src/content_scripts/event.js");
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/modal */ "./src/utils/modal.js");
/* harmony import */ var _inspect_inspect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspect/inspect */ "./src/content_scripts/inspect/inspect.js");
/* harmony import */ var _color_eyedropper_colorEyedropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color_eyedropper/colorEyedropper */ "./src/content_scripts/color_eyedropper/colorEyedropper.js");
/* harmony import */ var _assets_assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/assets */ "./src/content_scripts/assets/assets.js");
/* harmony import */ var _debug_debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debug/debug */ "./src/content_scripts/debug/debug.js");
/* harmony import */ var _screenshot_screenshot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screenshot/screenshot */ "./src/content_scripts/screenshot/screenshot.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings */ "./src/content_scripts/settings.js");













const state = {
	href: document.location.href,
	initialized: false
};

if (Object(_allowed__WEBPACK_IMPORTED_MODULE_1__["isAllowed"])()) enable();

function enable()
{
	chrome.runtime.onMessage.addListener((message, sender, sendMessage) => 
	{
		if (message.action === "initialize")
		{
			if (state.initialized || (window !== window.parent && message.settings && !message.settings.inspector.inject_iframes)) return;

			state.initialized = true;
			_settings__WEBPACK_IMPORTED_MODULE_10__["default"].set(message.settings);
			_inspect_inspect__WEBPACK_IMPORTED_MODULE_5__["default"].initialize();
			_utils_modal__WEBPACK_IMPORTED_MODULE_4__["default"].createCopyModal();

			initialize();
		}
	});

	// set tab status in background script
	_utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("manager.setEnabled", { is_frame: window !== window.parent }, null);
}

function initialize()
{
	// Add mouse move event
	document.querySelector("html").addEventListener('mousemove', (e) => 
	{
		Object(_event__WEBPACK_IMPORTED_MODULE_3__["setMousePosition"])(e.pageX, e.pageY);
		_inspect_inspect__WEBPACK_IMPORTED_MODULE_5__["default"].update(e.target);
	});

	document.addEventListener("keydown", (e) => 
	{	
		_inspect_inspect__WEBPACK_IMPORTED_MODULE_5__["default"].onKeyDown(e);
		_color_eyedropper_colorEyedropper__WEBPACK_IMPORTED_MODULE_6__["default"].onKeyDown(e);
	});

	const bodyList = document.querySelector("body");
	const observer = new MutationObserver((mutations) => 
	{
	    mutations.forEach((mutation) => 
	    {
	        if (state.href !== document.location.href) 
	        {
	            state.href = document.location.href;
	            _inspect_inspect__WEBPACK_IMPORTED_MODULE_5__["default"].refresh();
	        }
	    });
	});

	var config = {
	    childList: true,
	    subtree: true
	};

	observer.observe(bodyList, config);

	if (window === window.parent)
	{
		window.addEventListener("unload", function(e) 
		{ 
			_utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("manager.disable", {});
		});
	}

	chrome.runtime.onMessage.addListener((message, sender, sendMessage) =>
	{
		switch (message.action)
		{
			case "inspect.enable": 
			{
				_inspect_inspect__WEBPACK_IMPORTED_MODULE_5__["default"].enable();
			} break;

			case "inspect.disable": 
			{
				_inspect_inspect__WEBPACK_IMPORTED_MODULE_5__["default"].disable();
			} break;

			case "inspect.addStyles": 
			{
				_inspect_inspect__WEBPACK_IMPORTED_MODULE_5__["default"].addStyles(message.text);
			} break;

			case "colorEyedropper.enable": 
			{
				if (window === window.top) _color_eyedropper_colorEyedropper__WEBPACK_IMPORTED_MODULE_6__["default"].enable();
			} break;

			case "colorEyedropper.disable": 
			{
				if (window === window.top) _color_eyedropper_colorEyedropper__WEBPACK_IMPORTED_MODULE_6__["default"].disable();
			} break;

			case "colorEyedropper.setScreenshot":
			{
				if (window === window.top) _color_eyedropper_colorEyedropper__WEBPACK_IMPORTED_MODULE_6__["default"].setScreenshot(message.dataURI);
			} break;

			case "assets.get":
			{
				if (window === window.top) _assets_assets__WEBPACK_IMPORTED_MODULE_7__["default"].get();
			} break;

			case "debug.getMetaTags":
			{
				if (window === window.top) _debug_debug__WEBPACK_IMPORTED_MODULE_8__["default"].getMetaTags();
			} break;

			case "debug.getLinks":
			{
				if (window === window.top) _debug_debug__WEBPACK_IMPORTED_MODULE_8__["default"].getLinks();
			} break;

			case "debug.getTextNodes":
			{
				if (window === window.top) _debug_debug__WEBPACK_IMPORTED_MODULE_8__["default"].getTextNodes();
			} break;

			case "debug.showSpellMistakes":
			{
				if (window === window.top) _debug_debug__WEBPACK_IMPORTED_MODULE_8__["default"].showSpellMistakes(message.mistakes);
			} break;

			case "screenshot.prepare": 
			{
				if (window === window.top) _screenshot_screenshot__WEBPACK_IMPORTED_MODULE_9__["default"].prepare();
			} break;

			case "screenshot.prepareFullPage": 
			{
				if (window === window.top) _screenshot_screenshot__WEBPACK_IMPORTED_MODULE_9__["default"].prepareFullPage();
			} break;

			case "screenshot.proceedCapture": 
			{
				if (window === window.top) _screenshot_screenshot__WEBPACK_IMPORTED_MODULE_9__["default"].proceedCapture();
			} break;

			case "screenshot.reset": 
			{
				if (window === window.top) _screenshot_screenshot__WEBPACK_IMPORTED_MODULE_9__["default"].reset();
			} break;

			case "settings.set":
			{
				_settings__WEBPACK_IMPORTED_MODULE_10__["default"].set(message.settings);
			} break;
		}
	});

	// inject fonts
	document.querySelector("head").appendChild(Object(_utils_globalStyles__WEBPACK_IMPORTED_MODULE_2__["getFontsLink"])());
}


/***/ }),

/***/ "./src/content_scripts/debug/debug.js":
/*!********************************************!*\
  !*** ./src/content_scripts/debug/debug.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/msg */ "./src/utils/msg.js");
/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/parser */ "./src/utils/parser.js");
/* harmony import */ var _spellcheck_spellcheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spellcheck/spellcheck */ "./src/content_scripts/debug/spellcheck/spellcheck.js");




  
function getMetaTags()
{
    const result = [];
    const tags = document.querySelectorAll("meta");
    for (const tag of tags)
    {
        const attribs = _utils_parser__WEBPACK_IMPORTED_MODULE_1__["default"].getHtmlAttribs(tag);
        result.push(attribs);
    }

    _utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("debug.setMetaTags", {tags: result});
}

function getLinks()
{
    const result = [];
    const tags = document.querySelectorAll("a");
    for (const tag of tags) 
    {
        const link = tag.href.trim();
        if (link && link.startsWith("http")) result.push(tag.href);
    }

    _utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("debug.setLinks", {links: result});
}

/* harmony default export */ __webpack_exports__["default"] = ({
    getMetaTags,
    getTextNodes: _spellcheck_spellcheck__WEBPACK_IMPORTED_MODULE_2__["default"].getTextNodes,
    showSpellMistakes: _spellcheck_spellcheck__WEBPACK_IMPORTED_MODULE_2__["default"].show,
    getLinks
});

/***/ }),

/***/ "./src/content_scripts/debug/spellcheck/spellcheck.js":
/*!************************************************************!*\
  !*** ./src/content_scripts/debug/spellcheck/spellcheck.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/msg */ "./src/utils/msg.js");
/* harmony import */ var _components_window_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/window/window */ "./src/components/window/window.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../event */ "./src/content_scripts/event.js");






const avoid = [ 
    'LABEL', 
    'SCRIPT', 
    'BUTTON', 
    'STYLE', 
    'NOSCRIPT', 
    'A', 
    'CODE', 
    'PRE', 
    'INPUT', 
    'TEXTAREA'
];
const rejectScriptTextFilter = {
    acceptNode: (node) => 
    {
        if (!allParents(node)) { return NodeFilter.FILTER_ACCEPT; }
    }
};

let mistakeWindow = null;
const state = {
    loop: false,
    textNodes: {},
    mistakes: {}
};

const allParents = (node) => 
{
    let a = node;
    let count = 0;
    let isEditable = false;

    while (!isEditable && a !== null && count < 5) 
    {
        try {
            isEditable = !!(
                    a.getAttribute('contenteditable') === 'true' 
                    || a.getAttribute('data-text') === 'true'
                    || avoid.includes(a.nodeName)
                );

        } catch (_) {}
        a = a.parentNode;
        count++;
    }

    return isEditable;
}

const createWalker = () => document.createTreeWalker(
    document.body, 
    NodeFilter.SHOW_TEXT, 
    rejectScriptTextFilter
);

function getTextNodes()
{
    const result = {};

    let n, walk = createWalker(), count = 0;
    while (n = walk.nextNode()) {
        const text = n.textContent.trim();
        if (text) 
        {
            state.textNodes[`${count}`] = n;
            count ++;
        }
    };

    for (const [property, value] of Object.entries(state.textNodes))
    {
        result[property] = value.textContent.trim();
    }

    _utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage("debug.setTextNodes", {nodes: result});
}

function loop()
{
    if (state.loop && mistakeWindow)
    {
        const { mx, my } = Object(_event__WEBPACK_IMPORTED_MODULE_3__["getMousePosition"])();
        if (mistakeWindow.moving && mistakeWindow.moving.allowed)
        {
            const x = (mx - window.scrollX) - mistakeWindow.moving.x;
            const y = (my - window.scrollY) - mistakeWindow.moving.y;
            mistakeWindow.win.style.left = `${x}px`;
            mistakeWindow.win.style.top = `${y}px`;
        }

        requestAnimationFrame(loop);
    }
}

function hightlightMistake(node, match) 
{
    var font = document.createElement("font");
    font.style.background = 'red';
    font.style.color = 'white';
    font.textContent = match;
    node.parentNode.insertBefore(font, node.nextSibling); 

    return font;
};

function renderMistakes() 
{
    const body = mistakeWindow.win.querySelector(".body");
    
    const ul = _utils_element__WEBPACK_IMPORTED_MODULE_2__["default"].create("<ul></ul>");

    for (const [n, data] of Object.entries(state.mistakes))
    {
        let node = state.textNodes[n];
        for (const word of data.words)
        {
            const index = node.data.indexOf(word);
            const nextNode = node.splitText(index + word.length);
            
            const hlElement = hightlightMistake(node, word);
            node.data = node.data.replace(word, "");
            
            const selector = node.parentElement.tagName.toLowerCase() + _utils_element__WEBPACK_IMPORTED_MODULE_2__["default"].getSelector(node.parentElement);

            const li = _utils_element__WEBPACK_IMPORTED_MODULE_2__["default"].create(`
                <li>
                    <h4>${word}</h4>
                    <p>${selector}</p>
                </li>
            `);
            li.addEventListener("click", () => 
            {
                hlElement.scrollIntoView({
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center'
                });
            });
            ul.appendChild(li);

            state.mistakes[n].li.push(li);
            state.mistakes[n].highlights.push(hlElement);
            state.mistakes[n].nodes.push(node);

            node = nextNode;
        }
    }

    body.appendChild(ul);
}

function close() 
{
    state.loop = false;
    mistakeWindow = null;

    for (const [n, data] of Object.entries(state.mistakes))
    {
        for (let i = 0; i < data.nodes.length; i++)
        {
            const node = data.nodes[i];
            const hl = data.highlights[i];
            node.textContent += hl.textContent;
            hl.remove();
        }
    }
}

function show(result)
{
    state.loop = true;
    
    for (const [n, mistakes] of Object.entries(result))
    {
        state.mistakes[n] = {
            words: mistakes,
            li: [],
            highlights: [],
            nodes: []
        };
    }

    mistakeWindow = new _components_window_window__WEBPACK_IMPORTED_MODULE_1__["default"]({
        color: "#880e4f", 
        name: "Spell Check",
        css: chrome.extension.getURL('css/debug/spellcheck.css')});
    mistakeWindow.onClose = close;

    const header = mistakeWindow.win.querySelector(".header");
    header.addEventListener('mousedown', (e) => 
	{
		header.style.cursor = "grabbing";
		const styles = window.getComputedStyle(mistakeWindow.win);
		const px = parseInt(styles.getPropertyValue('left').split('px')[0]);
        const py = parseInt(styles.getPropertyValue('top').split('px')[0]);

        const { mx, my } = Object(_event__WEBPACK_IMPORTED_MODULE_3__["getMousePosition"])();
        mistakeWindow.moving = {
            allowed: true,
            x: mx - window.scrollX - px,
            y: my - window.scrollY - py
        };
	});

	header.addEventListener('mouseup', (e) => 
	{
		mistakeWindow.moving = { allowed: false };
		header.style.cursor = "grab";
	});

    renderMistakes();

    document.body.appendChild(mistakeWindow.parent);
    requestAnimationFrame(loop);
}

/* harmony default export */ __webpack_exports__["default"] = ({
    getTextNodes,
    show
});

/***/ }),

/***/ "./src/content_scripts/event.js":
/*!**************************************!*\
  !*** ./src/content_scripts/event.js ***!
  \**************************************/
/*! exports provided: setMousePosition, getMousePosition, subscribe, trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMousePosition", function() { return setMousePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMousePosition", function() { return getMousePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });


const state = {
	mx: 0,
	my: 0,
	focused: null,
};

function setMousePosition(x, y)
{
	state.mx = x;
	state.my = y;
}

function getMousePosition()
{
	return { mx: state.mx, my: state.my };
}

function subscribe(input)
{
	input.addEventListener("focus", () => 
	{
		state.focused = input;
	});

	input.addEventListener("blur", () => 
	{
		state.focused = null;
	});
}

function trigger(event)
{
	if (state.focused)
	{
		state.focused += String.fromCharCode(event.keyCode);
	}
}



/***/ }),

/***/ "./src/content_scripts/inspect/inspect.js":
/*!************************************************!*\
  !*** ./src/content_scripts/inspect/inspect.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_msg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/msg */ "./src/utils/msg.js");
/* harmony import */ var _utils_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/globalStyles */ "./src/utils/globalStyles.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event */ "./src/content_scripts/event.js");
/* harmony import */ var _ui_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/toolbar */ "./src/content_scripts/inspect/ui/toolbar.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target */ "./src/content_scripts/inspect/target.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/element */ "./src/utils/element.js");
/* harmony import */ var _mark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mark */ "./src/content_scripts/inspect/mark.js");
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/svg */ "./src/utils/svg.js");
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/tools */ "./src/content_scripts/inspect/tools/tools.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../settings */ "./src/content_scripts/settings.js");
/* harmony import */ var _postMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./postMessage */ "./src/content_scripts/inspect/postMessage.js");














let toolbar = null;
const state = {
	enabled: false,
	paused: false,
	hidden: false,
	target: new _target__WEBPACK_IMPORTED_MODULE_5__["default"](),
	selections: [],
	shortcuts: true
};

async function initialize()
{
	if (!window.hvStyleIframe) 
    {
    	window.hvStyleIframe = document.createElement('iframe');
    	document.body.appendChild(window.hvStyleIframe);
    	window.hvStyleIframe.style.display = "none";
    }
    else
    {
    	window.hvStyleIframe.contentDocument.body.innerHTML = "";
    }

	const links = document.querySelectorAll("link");
	for (const link of links)
	{
		if ((
				link.href.endsWith(".css") || 
				link.type.includes("css") || 
				link.rel === "stylesheet"
			) && 
			!isSheetPresent(link.href) && 
			!(
				link.href.startsWith("chrome-extension") && 
				link.href.startsWith("moz-extension")
			))
		{
			try 
			{
				const text = await Object(_utils_globalStyles__WEBPACK_IMPORTED_MODULE_2__["loadStyleSheet"])(link.href);

				const arr = link.href.split("/");
				arr.splice(arr.length - 1, 1);
				const source = arr.join("/");

				const styleTag = window.hvStyleIframe.contentDocument.createElement("style");
				styleTag.innerHTML = `${text} .hvStyleSheetSource { content: "${source}/" }`;
				window.hvStyleIframe.contentDocument.body.appendChild(styleTag);
			}	
			catch (err)
			{
				if (err.message.toLowerCase().includes("network error"))
					_utils_msg__WEBPACK_IMPORTED_MODULE_1__["default"].sendMessage("inspect.loadStyles", {url: link.href});
			}
		}
	}

	for (const sheet of window.hvStyleIframe.contentDocument.styleSheets)
	{
		const rules = sheet.rules || sheet.cssRules;
		if (!rules.length) continue;
		 
		const source = rules[rules.length - 1].style.content.replaceAll("\"", ""); 
		for (const rule of rules) 
		{
			if (rule instanceof CSSImportRule) 
			{
				const href = rule.href;
				if (href.endsWith(".css") || href.includes(".css"))
				{
					let url = rule.href;
					if (!url.startsWith("http") && !url.startsWith("www")) 
						url = url__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(source, rule.href);
					
					if (isSheetPresent(href))
					{
						const text = await Object(_utils_globalStyles__WEBPACK_IMPORTED_MODULE_2__["loadStyleSheet"])(url);
						const styleTag = window.hvStyleIframe.contentDocument.createElement("style");
						styleTag.innerHTML = text;
						window.hvStyleIframe.contentDocument.body.appendChild(styleTag);
					}
				}
			}
		}
	}

	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.customCSS.restore();
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.customJS.restore();
}

function isSheetPresent(href)
{
	let present = false;
	for (const internalSheet of document.styleSheets)
	{
		try 
		{
			const rules = internalSheet.rules || internalSheet.cssRules;
			if (internalSheet.href === href)
			{
				present = true; 
				break;
			}
		}
		catch (err)
		{
			continue;
		}	
	}

	return present;
}

function createTooltip(title, shortcut, description)
{
	const tooltip = _utils_element__WEBPACK_IMPORTED_MODULE_6__["default"].create(`
		<div class="tooltip">
			<div class="tooltip-title">
				<h4>${title}</h4>
				<span>${shortcut}</span>
			</div>
			<span class="tooltip-description">${description}</span>
		</span>
	`);

	return tooltip;
}

function setupToolbar()
{
	toolbar = Object(_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["createToolbar"])();
	toolbar.moving = { allowed: false };

	const playBtn = toolbar.querySelector("#play");
	playBtn.appendChild(createTooltip("Playback", "P", "Play or pause inspector."));
	playBtn.addEventListener('click', () => togglePlayback(null, playBtn));

	const dragSpace = toolbar.querySelector('#space');
	dragSpace.addEventListener('mousedown', (e) => 
	{
		dragSpace.style.cursor = "grabbing";
		const styles = window.getComputedStyle(toolbar);
		const px = parseInt(styles.getPropertyValue('left').split('px')[0]);
        const py = parseInt(styles.getPropertyValue('top').split('px')[0]);

        const { mx, my } = Object(_event__WEBPACK_IMPORTED_MODULE_3__["getMousePosition"])();
        
        toolbar.moving = {
            allowed: true,
            x: mx - window.scrollX - px,
            y: my - window.scrollY - py
        };
	});

	dragSpace.addEventListener('mouseup', (e) => 
	{
		toolbar.moving = { allowed: false };
		dragSpace.style.cursor = "grab";
	});

	const guidelinesBtn = toolbar.querySelector('#guidelines');
	guidelinesBtn.appendChild(createTooltip("Guidelines", "G", "Check alignment of an element."));
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].secondary.guidelines.initialize(guidelinesBtn);
	guidelinesBtn.addEventListener('click', () => 
	{
		toggleGuidelines();
	});

	const gridsBtn = toolbar.querySelector('#grids');
	gridsBtn.appendChild(createTooltip("Grids", "H", "Adds outline to every element."));
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].secondary.grids.initialize(gridsBtn);
	gridsBtn.addEventListener('click', () => 
	{
		toggleGrid();
	});

	const fontsBtn = toolbar.querySelector('#fonts');
	fontsBtn.appendChild(createTooltip("Fonts", "F", "Know what font each tag is using."));
	const fontsWindow = toolbar.querySelector('#fonts_window');
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.fonts.initialize(fontsBtn, fontsWindow);
	fontsBtn.addEventListener('click', () => 
	{
		toggleFonts();
	});
	fontsWindow.querySelector("#fonts_close").addEventListener('click', () => 
	{
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("fonts");
	});

	const editBtn = toolbar.querySelector('#edit');
	editBtn.appendChild(createTooltip("Edit", "E", "Edit content of an element."));
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.edit.initialize(editBtn);
	editBtn.addEventListener('click', () => 
	{
		toggleEdit();
	});

	const paletteBtn = toolbar.querySelector('#palette');
	const paletteWindow = toolbar.querySelector('#palette_window');
	paletteBtn.appendChild(createTooltip("Color Palette", "P", "Inspect color pallete of whole site in a visual way."));
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.palette.initialize(paletteBtn, paletteWindow);
	paletteBtn.addEventListener('click', () => 
	{
		togglePalette();
	});
	paletteWindow.querySelector("#palette_close").addEventListener('click', () => 
	{
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("palette");
	});

	const trashBtn = toolbar.querySelector('#trash');
	const trashWindow = toolbar.querySelector('#trash_window');
	trashBtn.appendChild(createTooltip("Trash", "T", "Hide or Remove an element."));
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.initialize(trashBtn, trashWindow);
	trashBtn.addEventListener('click', () => 
	{
		toggleTrash();
	});
	trashWindow.querySelector("#trash_close").addEventListener('click', () => 
	{
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("trash");
	});

	const searchBtn = toolbar.querySelector('#search');
	const searchWindow = toolbar.querySelector('#search_window');
	searchBtn.appendChild(createTooltip("Search", "S", "Find element through tag name, id or classes."));
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.search.initialize(searchBtn, searchWindow);
	searchBtn.addEventListener('click', () => 
	{
		toggleSearch();
	});
	searchWindow.querySelector("#search_close").addEventListener('click', () => 
	{
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("search");
	});

	const customCSSBtn = toolbar.querySelector('#custom_css');
	const customCSSWindow = toolbar.querySelector('#custom_css_window');
	customCSSBtn.appendChild(createTooltip("Custom CSS", ",", "Add custom CSS to whole page."));
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.customCSS.initialize(customCSSBtn, customCSSWindow);
	customCSSBtn.addEventListener('click', () => toggleCustomCSS());
	customCSSWindow.querySelector("#custom_css_close").addEventListener('click', () => 
	{
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("customCSS");
	});

	const customJSBtn = toolbar.querySelector('#custom_js');
	const customJSWindow = toolbar.querySelector('#custom_js_window');
	customJSBtn.appendChild(createTooltip("Custom JS", ";", "Add custom JS to whole page."));
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.customJS.initialize(customJSBtn, customJSWindow);
	customJSBtn.addEventListener('click', () => toggleCustomJS());
	customJSWindow.querySelector("#custom_js_close").addEventListener('click', () => 
	{
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("customJS");
	});

	toolbar.querySelector('#close').addEventListener('click', () => 
	{
		exit();
	});
}

function togglePlayback(e, btn)
{
	if (e)
	{
		if (!state.enabled || !state.shortcuts) return;
		e.preventDefault();
	}

	if (!btn) btn = toolbar.querySelector("#play");
	state.paused = !state.paused;
	if (state.paused)
	{
		btn.innerHTML = _utils_svg__WEBPACK_IMPORTED_MODULE_8__["default"].play;
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.style.setVisibility(false);

		if (state.target.mark)
		{
			state.target.mark.remove();
			state.target = new _target__WEBPACK_IMPORTED_MODULE_5__["default"]();
		}
	}
	else btn.innerHTML = _utils_svg__WEBPACK_IMPORTED_MODULE_8__["default"].pause;

	Object(_postMessage__WEBPACK_IMPORTED_MODULE_11__["default"])({ action: "hv.inspect.togglePlayback", status: state.paused });
}

function toggleGuidelines()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].secondary.guidelines.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("guidelines");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("guidelines");
	Object(_postMessage__WEBPACK_IMPORTED_MODULE_11__["default"])({ action: "hv.inspect.toggleGuidelines", status: _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].secondary.guidelines.isEnabled() });
}

function toggleGrid()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].secondary.grids.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("grids");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("grids");
	Object(_postMessage__WEBPACK_IMPORTED_MODULE_11__["default"])({ action: "hv.inspect.toggleGrid", status: _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].secondary.grids.isEnabled() });
}

function toggleEdit()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.edit.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("edit");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("edit");

	Object(_postMessage__WEBPACK_IMPORTED_MODULE_11__["default"])({ action: "hv.inspect.toggleEdit", status: _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.edit.isEnabled() });
}

function toggleFonts()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.fonts.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("fonts");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("fonts");
}

function togglePalette()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.palette.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("palette");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("palette");
}

function toggleTrash()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("trash");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("trash");

	Object(_postMessage__WEBPACK_IMPORTED_MODULE_11__["default"])({ action: "hv.inspect.toggleTrash", status: _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.isEnabled() });
}

function toggleSearch()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.search.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("search");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("search");

	Object(_postMessage__WEBPACK_IMPORTED_MODULE_11__["default"])({ action: "hv.inspect.toggleSearch", status: _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.search.isEnabled() });
}

function toggleCustomCSS()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.customCSS.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("customCSS");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("customCSS");
}

function toggleCustomJS()
{
	if (_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.customJS.isEnabled()) _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].disable("customJS");
	else _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].enable("customJS");
}

function dockWindow(e)
{
	if (state.enabled && !state.paused && _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.style.isEnabled())
	{
		e.preventDefault();
		e.stopImmediatePropagation();

		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.style.dockWindow();
	}
}

function traverse(e, direction)
{
	if (state.enabled && !state.paused)
	{
		e.preventDefault();
		e.stopImmediatePropagation();

		const element = state.target.element;
		if (!element) return;
		switch (direction)
		{
			case "up": move(element.parentElement); break;
			case "down": move(element.firstElementChild); break;
			case "left": move(element.previousElementSibling); break;
			case "right": move(element.nextElementSibling); break;
		}
	}
}

function move(element)
{
	if (element)
	{
		if (state.target.mark) state.target.mark.remove();

		const newTarget = new _target__WEBPACK_IMPORTED_MODULE_5__["default"]();
		newTarget.mark = Object(_mark__WEBPACK_IMPORTED_MODULE_7__["default"])(element, false);
		newTarget.element = element;

		state.target = newTarget;
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].setTarget(state.target);
	}
}

function loop()
{
	if (!state.enabled) return; 

	const { mx, my } = Object(_event__WEBPACK_IMPORTED_MODULE_3__["getMousePosition"])();

	if (toolbar && toolbar.moving.allowed)
	{
		const x = (mx - window.scrollX) - toolbar.moving.x;
        const y = (my - window.scrollY) - toolbar.moving.y;
        toolbar.style.left = `${x}px`;
        toolbar.style.top = `${y}px`;
	}

	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.style.loop();

	requestAnimationFrame(loop);
}

function update(element)
{
	if (!state.enabled || state.paused) 
	{
		return;
	}
	else if (element.tagName.toLowerCase().startsWith("hv-"))
	{
		state.hidden = true;
		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.style.setVisibility(false);

		if (state.target.mark) state.target.mark.remove();
		state.target = new _target__WEBPACK_IMPORTED_MODULE_5__["default"]();
	}
	else if (element !== state.target.element)
	{
		state.hidden = false;
		if (state.target.mark) state.target.mark.remove();

		const newTarget = new _target__WEBPACK_IMPORTED_MODULE_5__["default"]();
		newTarget.mark = Object(_mark__WEBPACK_IMPORTED_MODULE_7__["default"])(element, false, "", false);
		newTarget.element = element;

		state.target = newTarget;

		_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].setTarget(state.target);
	}
}

function onClick(e)
{
	if (!state.enabled || state.paused || state.hidden || e.shiftKey) return;

	e.preventDefault();
	e.stopImmediatePropagation();

	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].onClick();
} 

function enable()
{
	state.enabled = true;
	document.body.addEventListener('click', onClick, true);
	window.addEventListener("message", listenForMessage);

	setupToolbar();
	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].initialize();

	if (!window.hvGoogleFont)
	{ 
		window.hvGoogleFont = {
			fonts: {},
			link: document.createElement('link')
		};
		window.hvGoogleFont.link.rel = "stylesheet";
		window.hvGoogleFont.link.href = "";
		document.querySelector("head").appendChild(window.hvGoogleFont.link);
	}

	requestAnimationFrame(loop);
}

function refresh()
{
	if (state.enabled)
	{
		disable();
		enable();
	}
}

function disable()
{
	if (!state.enabled) return;

	state.enabled = false;
	state.paused = false;
	state.hidden = false;
	document.body.removeEventListener('click', onClick, true);
	window.removeEventListener("message", listenForMessage);

	_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].destroy();

	toolbar.getRootNode().host.remove();
	toolbar = null;

	if (state.target.mark) state.target.mark.remove();
	state.target = new _target__WEBPACK_IMPORTED_MODULE_5__["default"]();
}

function onKeyDown(e)
{
	if (state.enabled && _settings__WEBPACK_IMPORTED_MODULE_10__["default"].get().shortcuts)
	{
		const tag = e.target.tagName.toLowerCase();
		if (e.key === "Escape" || e.key === "Esc") exit();
		else if (tag.startsWith("hv-") || _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.edit.isElementFocused()) e.stopImmediatePropagation();	
		else if (e.key === ' ' || e.key === 'Spacebar') dockWindow(e);
	    else if (e.key === 'ArrowLeft' || e.code === 37) traverse(e, "left");
	    else if (e.key === 'ArrowUp' || e.code === 38) traverse(e, "up");
	    else if (e.key === 'ArrowRight' || e.code === 39) traverse(e, "right");
	    else if (e.key === 'ArrowDown' || e.code === 40) traverse(e, "down");
		else if (tag !== "input" && tag !== "textarea" && !e.target.getAttribute("contenteditable"))
		{
			if (e.key === "i" || e.key === "I") togglePlayback(e, null);
			else if (e.key === "g" || e.key === "G") toggleGuidelines();
			else if (e.key === "h" || e.key === "H") toggleGrid();
			else if (e.key === "f" || e.key === "F") toggleFonts();
			else if (e.key === "p" || e.key === "P") togglePalette();
			else if (e.key === "e" || e.key === "E") toggleEdit();
			else if (e.key === "t" || e.key === "T") toggleTrash();
			else if (e.key === "s" || e.key === "S") toggleSearch();
			else if (e.key === ",") toggleCustomCSS();
			else if (e.key === ";") toggleCustomJS();
		}
	}
}

function exit()
{
	disable();
	Object(_postMessage__WEBPACK_IMPORTED_MODULE_11__["default"])({ action: "hv.inspect.exit" });
	
	if (window === window.parent) _utils_msg__WEBPACK_IMPORTED_MODULE_1__["default"].sendMessage('inspect.disable', {});
}

function addStyles(text)
{
	const styleTag = window.hvStyleIframe.contentDocument.createElement("style");
	styleTag.innerHTML = `${text}`;
	window.hvStyleIframe.contentDocument.body.appendChild(styleTag);
}

function listenForMessage(event)
{
	const action = event.data.action;
	switch (action)
	{
		case "hv.inspect.exit": 
		{
			if (state.enabled) exit();
		} break;

		case "hv.inspect.togglePlayback":
		{
			if (event.data.status !== state.paused) togglePlayback(null, null);
		} break;

		case "hv.inspect.toggleGuidelines":
		{
			if (event.data.status !== _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].secondary.guidelines.isEnabled()) toggleGuidelines();
		} break;

		case "hv.inspect.toggleGrid":
		{
			if (event.data.status !== _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].secondary.grids.isEnabled()) toggleGrid();
		} break;

		case "hv.inspect.toggleEdit":
		{
			if (event.data.status !== _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.edit.isEnabled()) toggleEdit();
		} break;

		case "hv.inspect.toggleTrash":
		{
			if (event.data.status !== _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.isEnabled()) toggleTrash();
		} break;

		case "hv.inspect.toggleSearch":
		{
			if (event.data.status !== _tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.search.isEnabled()) toggleSearch();
		} break;

		case "hv.inspect.search.find":
		{
			_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.search.findElements(event.data.selector);
		} break;

		case "hv.inspect.search.reset":
		{
			_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.search.reset();
		} break;

		case "hv.trash.setMode":
		{
			_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.setMode(event.data.mode)
		} break;

		case "hv.trash.addToElements":
		{
			_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.addToElements(
				null, 
				_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.getMode(), 
				{ 
					tag_name: event.data.tag_name, 
					selector: event.data.selector, 
					unique_selector: event.data.unique_selector,
					display: event.data.display, 
					href: event.data.href
				}
			);
		} break;

		case "hv.trash.hideElement":
		{
			_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.hideElement(
				event.data.unique_selector, 
				event.data.mode,
				event.data.href
			);
		} break;

		case "hv.trash.showElement":
		{
			_tools_tools__WEBPACK_IMPORTED_MODULE_9__["default"].primary.trash.showElement(
				event.data.unique_selector, 
				event.data.mode, 
				event.data.display, 
				event.data.href
			);
		} break;
	}
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	update,
	enable,
	disable,
	refresh,
	onKeyDown,
	addStyles
});


/***/ }),

/***/ "./src/content_scripts/inspect/mark.js":
/*!*********************************************!*\
  !*** ./src/content_scripts/inspect/mark.js ***!
  \*********************************************/
/*! exports provided: default, adjustPosition, changeMarkColor, addAnimationToMark, removeAnimationFromMark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustPosition", function() { return adjustPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMarkColor", function() { return changeMarkColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAnimationToMark", function() { return addAnimationToMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAnimationFromMark", function() { return removeAnimationFromMark; });
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/element */ "./src/utils/element.js");



function mark(target, fixCheck, borderColor, noTag)
{
	const box = target.getBoundingClientRect();
	const hvHover = document.createElement('hv-hover');
	const shadow = hvHover.attachShadow({ mode: 'open' });
	const outline = document.createElement('div');
	outline.id = "outline";

	let position = "absolute";
	let left = box.left + window.scrollX;
	let top = box.top + window.scrollY;
	if (fixCheck && _utils_element__WEBPACK_IMPORTED_MODULE_0__["default"].isFixed(target))
	{
		position = "fixed";
		left = box.left;
		top = box.top;
	}

	hvHover.style.position = position;
	hvHover.style.zIndex = "50000000";
	hvHover.style.left = `${left}px`;
	hvHover.style.top = `${top}px`;
	hvHover.style.pointerEvents = `none`;
	if (box.width === 0 && box.height === 0) hvHover.style.display = "none";
	if (!borderColor) borderColor = "red";	

	const style = _utils_element__WEBPACK_IMPORTED_MODULE_0__["default"].create(`
		<style>
			.bounce {
				animation: bounce .6s;
			}

			@keyframes bounce {
				0% { transform: scale(1.2); opacity: 1 }
				50% { transform: scale(1.75); opacity: .7; }
				60% { transform: scale(0.75); opacity: 1 }
				80% { transform: scale(1.1) }
				100% { transform: scale(1) }
			}
		</style>
	`);

	const width = box.width - 2;
	const height = box.height - 2;
	outline.style.border = `1px solid ${borderColor}`;
	outline.style.position = 'absolute';
	outline.style.zIndex = "1";
	outline.style.width = `${width}px`;
	outline.style.height = `${height}px`;
	outline.innerHTML = `
		<div style="position: absolute; top: -2px; left: -2px; width: 4px; height: 4px; border-radius: 50%; background: ${borderColor};"></div>
		<div style="position: absolute; top: ${height - 2}px; left: -2px; width: 4px; height: 4px; border-radius: 50%; background: ${borderColor};"></div>
		<div style="position: absolute; top: -2px; left: ${width - 2}px; width: 4px; height: 4px; border-radius: 50%; background: ${borderColor};"></div>
		<div style="position: absolute; top: ${height - 2}px; left: ${width - 2}px; width: 4px; height: 4px; border-radius: 50%; background: ${borderColor};"></div>
	`;
	shadow.appendChild(style);
	shadow.appendChild(outline);

	if (!noTag)
	{
		const tag = document.createElement('div');
		tag.id = "tag";
		tag.innerHTML = target.tagName.toUpperCase();
		tag.style.position = "absolute";
		tag.style.zIndex = "10";
		tag.style.top = "-20px";
		tag.style.left = "2px";
		tag.style.height = "20px";
		tag.style.display = "flex";
		tag.style.alignItems = "center";
		tag.style.justifyContent = "center";
		tag.style.font = "normal 10px Arial";
		tag.style.color = "white";
		tag.style.background = borderColor;
		tag.style.borderTopRightRadius = "0.2rem";
		tag.style.borderTopLeftRadius = "0.2rem";
		tag.style.padding = "0.5rem";
		tag.style.boxSizing = "border-box";
		shadow.appendChild(tag);
	}

	document.body.appendChild(hvHover);

	return hvHover;
}

function changeMarkColor(mark, color)
{
	const tag = mark.shadowRoot.querySelector("#tag");
	const outline = mark.shadowRoot.querySelector("#outline");
	const divs = outline.querySelectorAll("div");
	
	if (tag) tag.style.background = color; 
	outline.style.borderColor = color;
	for (const div of divs) div.style.background = color;
}

function addAnimationToMark(mark)
{	
	const outline = mark.shadowRoot.querySelector("#outline");
	const tag = mark.shadowRoot.querySelector("#tag");
	outline.classList.add("bounce");
	tag.classList.add("bounce");
}

function removeAnimationFromMark(mark)
{
	const outline = mark.shadowRoot.querySelector("#outline");
	const tag = mark.shadowRoot.querySelector("#tag");
	outline.classList.remove("bounce");
	tag.classList.remove("bounce");
}

function adjustPosition(element, mark)
{
	if (_utils_element__WEBPACK_IMPORTED_MODULE_0__["default"].isSticky(element))
	{
		const box = element.getBoundingClientRect();
		mark.style.left = `${box.left + window.scrollX}px`;
		mark.style.top = `${box.top + window.scrollY}px`;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (mark);


/***/ }),

/***/ "./src/content_scripts/inspect/postMessage.js":
/*!****************************************************!*\
  !*** ./src/content_scripts/inspect/postMessage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function postMessage(message)
{
	if (window === window.parent)
	{
		const iframes = document.getElementsByTagName("iframe");
		for (const iframe of iframes) 
		{
			iframe.contentWindow.postMessage(message, "*");
		}
	}
	else
	{
		window.parent.postMessage(message, "*");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (postMessage);

/***/ }),

/***/ "./src/content_scripts/inspect/style/codeEditor.js":
/*!*********************************************************!*\
  !*** ./src/content_scripts/inspect/style/codeEditor.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_selector_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-selector-generator */ "./node_modules/css-selector-generator/build/index.js");
/* harmony import */ var css_selector_generator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_selector_generator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");
/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/parser */ "./src/utils/parser.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utility */ "./src/utils/utility.js");
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/modal */ "./src/utils/modal.js");
/* harmony import */ var _utils_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/fonts */ "./src/utils/fonts.js");








function reRender(codeDiv, element, editable)
{
	render(codeDiv, element.hv_css, element, editable);
}

function render(codeDiv, css, element, editable)
{
	codeDiv.innerHTML = "";
	if (element) element.hv_css = css;

	// Render styles
	for (const block of css.styles)
	{
		block.is_media = false;
		renderRules(block, codeDiv, element, editable);
	}

	// Render Animation
	for (const [name, frames] of Object.entries(css.animations))
	{
		const animationDiv = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="code-wrapper animation"></div>`);
		const animationH3 = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<h3>@keyframe ${name}</h3>`);
		const animationCodeDiv = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="code-section"></div>`);
		for (const [frame, rules] of Object.entries(frames))
		{
			const block = {
				selector: frame,
				type: "animation",
				animation_name: name,
				is_media: false,
				rules
			};

			renderRules(block, animationCodeDiv, element, editable);
		}

		animationDiv.appendChild(animationH3);
		animationDiv.appendChild(animationCodeDiv);
		codeDiv.appendChild(animationDiv);
	}

	// Render Media Queries
	for (const [condition, query] of Object.entries(css.media_queries))
	{
		const queryDiv = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="code-wrapper media-query"></div>`);
		const queryH3 = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<h3>${condition}</h3>`);
		const queryCodeDiv = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="code-section"></div>`);
		for (const block of query)
		{
			block.is_media = true;
			block.condition = condition;
			renderRules(block, queryCodeDiv, element, editable);
		}

		queryDiv.appendChild(queryH3);
		queryDiv.appendChild(queryCodeDiv);
		codeDiv.appendChild(queryDiv);
	}

	const colorBtns = codeDiv.querySelectorAll("#color-btn");
	for (const colorBtn of colorBtns)
	{
		const color = colorBtn.getAttribute("value");
		colorBtn.addEventListener("click", () => 
		{
			Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["copyText"])(color);
			_utils_modal__WEBPACK_IMPORTED_MODULE_4__["default"].show("Copied!");
		});
	}
}

function renderRules(block, container, element, editable)
{
	const selectorDiv = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="selectors">${block.selector}</div>`);
	const codeUl = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<ul class="code"></ul>`);
	codeUl.css = block;
	if (editable)
	{
		codeUl.setAttribute("contenteditable", "true");
		codeUl.setAttribute("spellcheck", "false");
	}

	for (const [property, value] of Object.entries(block.rules))
	{
		const ruleLi = document.createElement('li');
		ruleLi.classList.add('rule');
		const parsed = _utils_parser__WEBPACK_IMPORTED_MODULE_2__["default"].syntaxHighlight(property, value);
		ruleLi.innerHTML = `
			<span class="property">${property}</span>: <span class="value">${parsed}</span>;
		`;
		codeUl.appendChild(ruleLi);
	}

	let changed = false;
	codeUl.onkeyup = (e) => 
	{
		const status = change(e, element, codeUl);
		if (!changed) changed = status;	
	}

	codeUl.onpaste = (e) => 
	{
		e.preventDefault();
		const text = (e.originalEvent || e).clipboardData.getData('text/plain');
		document.execCommand("insertHTML", false, text);
		const status = change(e, element, codeUl);
		if (!changed) changed = status;	
	} 

	codeUl.onblur = () => 
	{
		if (changed)
		{
			const codeDiv = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].findParentWithId("code", codeUl, 5);
			reRender(codeDiv, element, editable);
			changed = false;
		}
	}

	container.appendChild(selectorDiv);
	container.appendChild(codeUl);
}

function change(e, element, codeUl)
{
	let changed = false;
	const rules = _utils_parser__WEBPACK_IMPORTED_MODULE_2__["default"].cssToJson(e.target.textContent);

	if (!Object(_utils_utility__WEBPACK_IMPORTED_MODULE_3__["deepEqual"])(e.target.css.rules, rules)) 
	{
		const header = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].findParentWithId("scroll", codeUl, 5);
		header.showReset();

		changed = true;
		e.target.css.rules = rules;

		if (!element.hv_style)
		{
			element.hv_style = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<style></style>`);
			document.body.appendChild(element.hv_style);
		}

		writeCSS(e.target, element);
		detectAndAddGoogleFont(element);
	}	

	return changed;
}

function detectAndAddGoogleFont(element)
{
	const styles = window.getComputedStyle(element);
	const fontFamily = styles.getPropertyValue('font-family');
	const fontName = fontFamily.split(",")[0].replaceAll("\"", "").replaceAll("\'", "");
	const fontWeight = styles.getPropertyValue('font-weight');

	if (_utils_fonts__WEBPACK_IMPORTED_MODULE_5__["default"].find(fontName))
	{
		if (!window.hvGoogleFont.fonts[fontName])
		{
			window.hvGoogleFont.fonts[fontName] = [fontWeight];
		}
		else if (window.hvGoogleFont.fonts[fontName].indexOf(fontWeight) === -1)
		{
			window.hvGoogleFont.fonts[fontName].push(fontWeight);
		}
	}

	const arr = [];
	for (const [fontName, weights] of Object.entries(window.hvGoogleFont.fonts))
	{
		const fString = `family=${fontName.split(" ").join("+")}:wght@${weights.join(";")}`;
		arr.push(fString);
	}

	if (arr.length)
	{
		const url = `https://fonts.googleapis.com/css2?${arr.join("&")}&display=swap`;
		window.hvGoogleFont.link.href = url;
	}
} 

function writeCSS(codeUl, element)
{
	let result = "";
	const uniqueSelector = css_selector_generator__WEBPACK_IMPORTED_MODULE_0___default()(element, { root: document.body });

	for (const block of element.hv_css.styles)
	{
		if (codeUl.css.type !== "animation" 
			&& !codeUl.css.is_media 
			&& block.selector === codeUl.css.selector) block.rules = codeUl.css.rules;

		let selector = uniqueSelector;
		if (block.type === 'pseudo') selector += block.selector; 
		result += `${selector} {\n`;
		result += _utils_parser__WEBPACK_IMPORTED_MODULE_2__["default"].jsonToCss(block.rules);
		result += "}\n";
	}

	for (const name of Object.keys(element.hv_css.animations))
	{
		result += `@keyframes ${name} {\n`

		const frames = element.hv_css.animations[name];
		for (const frame of Object.keys(frames))
		{
			if (codeUl.css.type === "animation" 
				&& !codeUl.css.is_media 
				&& frame === codeUl.css.selector) frames[frame] = codeUl.css.rules; 
			result += `${frame} {\n`;
			result += _utils_parser__WEBPACK_IMPORTED_MODULE_2__["default"].jsonToCss(frames[frame]);
			result += "}\n";
		}

		result += "}\n";
	}

	for (const condition of Object.keys(element.hv_css.media_queries))
	{
		const query = element.hv_css.media_queries[condition];
		result += `${condition} {\n`
		for (const block of query)
		{
			if (codeUl.css.is_media && block.selector === codeUl.css.selector) block.rules = codeUl.css.rules;
			let selector = uniqueSelector;
			if (block.type === 'pseudo') selector += block.selector; 
			result += `${selector} {\n`;
			result += _utils_parser__WEBPACK_IMPORTED_MODULE_2__["default"].jsonToCss(block.rules);
			result += "}\n";
		}

		result += "}\n";
	}

	element.hv_style.innerHTML = result;
}

/* harmony default export */ __webpack_exports__["default"] = ({ render });

/***/ }),

/***/ "./src/content_scripts/inspect/style/rules.js":
/*!****************************************************!*\
  !*** ./src/content_scripts/inspect/style/rules.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/parser */ "./src/utils/parser.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings */ "./src/content_scripts/settings.js");




const pseudoClasses = "any-link|link|defined|empty|enabled|first-child|first-of-type|host|last-child|last-of-type|only-child|optional|required|root";
const interactivePseudoClasses = "hover|focus-visible|focus-within|focus|checked|visited|active|blank|default|disabled|fullscreen|in-range|invalidate|out-of-range|placeholder-shown|valid|intderterminate";
const pseudoClassFunction = "dir|has|host-context|host|is|lang|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|where";
const pseudoElements = "after|backdrop|before|cue|cue-region|first-letter|first-line|grammar-error|marker|placeholder|selection|spelling-error";

const state = {
	animations: {}
}

function getSheets()
{
	let sheets = [...document.styleSheets];
	if (window.hvStyleIframe.contentDocument) sheets = [...sheets, ...window.hvStyleIframe.contentDocument.styleSheets];

	return sheets;
}

function getComputedStyles(element)
{
	const rules = [];
	if (!window.hvElementIframe) 
    {
    	window.hvElementIframe = document.createElement('iframe');
    	document.body.appendChild(window.hvElementIframe);
    	window.hvElementIframe.style.display = "none";
    }

    const iframeDocument = window.hvElementIframe.contentDocument;
    const targetElement = iframeDocument.createElement(element.tagName);
    targetElement.innerHTML = element.innerHTML;
    iframeDocument.body.appendChild(targetElement);

	const computedStyles = window.getComputedStyle(element);
	const defaultStyles = window.getComputedStyle(targetElement);

	for (let property of _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].properties)
	{
		const defaultValue = defaultStyles.getPropertyValue(property);
		const computedValue = computedStyles.getPropertyValue(property);

		if (defaultValue !== computedValue)
		{
			rules[property] = computedValue;
		}
	}
	targetElement.remove();

	return rules;
}

function style(element)
{
	const style = element.getAttribute("style");
	if (style) return _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].cssToJson(style);
	else return {};
}

function getSeperatedSelectors(selectorText, deliminator)
{
	const result = [];

	if (selectorText)
	{
		const arr = selectorText.split(deliminator);
		let isFunction = false;
		for (let i = 0; i < arr.length; i++)
		{
		    const chunk = arr[i].replaceAll("\n");
		    const open = chunk.includes("(");
		    const close = chunk.includes(")");
		    if (open && !close)
		    {
		        isFunction = true;
		        result.push(chunk);
		    }
		    else if (isFunction)
		    {
		        result[result.length - 1] += `${deliminator}${chunk}`;
		        if (close) isFunction = false;
		    }
		    else
		    {
		        result.push(chunk);
		    }
		}
	}

	return result;
}

function merge(matchResult, rules, result)
{
	switch (matchResult.type)
	{
		case "normal":
		{
			result.normal = {...result.normal, ...rules};
		} break;

		case "pseudoClass":
		{
			const matched = matchResult.matched;
			if (!result.pseudo_class[matched]) result.pseudo_class[matched] = {};
			result.pseudo_class[matched] = {...result.pseudo_class[matched], ...rules};
		} break;

		case "pseudoElement":
		{
			const matched = matchResult.matched;
			if (!result.pseudo_element[matched]) result.pseudo_element[matched] = {};
			result.pseudo_element[matched] = {...result.pseudo_element[matched], ...rules};
		} break;
	}
}

function getPseudo(selector)
{
	const chunk = selector.split(" ");
	const sels = getSeperatedSelectors(selector, " ");

	selector =  sels[sels.length - 1]; 
	const matches = [
		selector.match(new RegExp(`\:(${pseudoClasses})`, "gi")),
		selector.match(new RegExp(`\:(${pseudoClassFunction})\\((.*)\\)`, "g")),
		selector.match(new RegExp(`\:(${interactivePseudoClasses})`, "gi"))
	];

	let pseudos = []
	for (const match of matches) if (match) pseudos = [...pseudos, ...match];
	pseudos = pseudos.filter(item => item);

	for (let i = 0; i < pseudos.length; i++)
	{
		console.log(selector.indexOf(pseudos[i]));
	}
}

function isMatch(element, selector)
{
	let result = false;

	let match = false;
	try { match = element.matches(selector) } catch (err) { }

	if (match)
	{
		//getPseudo(selector);
		const matchPseudoClass = selector.match(new RegExp(`\:(${pseudoClasses})$`, "gi"));
		const matchInteractivePseudoClass = selector.match(new RegExp(`\:(${interactivePseudoClasses})`, "gi"));
		const matchPseudoFunction = selector.match(new RegExp(`\:(${pseudoClassFunction})\\((.*)\\)$`, "g"));

		if (matchInteractivePseudoClass && _settings__WEBPACK_IMPORTED_MODULE_1__["default"].get().inspector.view.pseudo) result = { type: "pseudoClass", matched: matchInteractivePseudoClass[0] };
		else if (matchPseudoFunction && _settings__WEBPACK_IMPORTED_MODULE_1__["default"].get().inspector.view.pseudo) result = { type: "pseudoClass", matched: matchPseudoFunction[0] };
		else if (matchPseudoClass && _settings__WEBPACK_IMPORTED_MODULE_1__["default"].get().inspector.view.pseudo) result = { type: "pseudoClass", matched: matchPseudoClass[0] };
		else result = { type: "normal" };
	}
	else if (_settings__WEBPACK_IMPORTED_MODULE_1__["default"].get().inspector.view.pseudo)
	{
		const matchPseudoClass = selector.match(new RegExp(`\:(${pseudoClasses})$`, "gi"));
		const matchPseudoFunction = selector.match(new RegExp(`\:(${pseudoClassFunction})\\((.*)\\)`, "g"));
		const matchInteractivePseudoClass = selector.match(new RegExp(`\:(${interactivePseudoClasses})$`, "gi"));
		const matchPseudoElement = selector.match(new RegExp(`(\:|\:\:)(${pseudoElements})$`, "gi"));
		if (matchInteractivePseudoClass)
		{	
			const filteredSelector = selector.replace(new RegExp(`\:(${interactivePseudoClasses})$`, "gi"), ""); 
			try { match = element.matches(filteredSelector) } catch (err) { }
			if (match) result = { type: "pseudoClass", matched: matchInteractivePseudoClass[0] };
		}
		else if (matchPseudoElement)
		{
			const filteredSelector = selector.replace(new RegExp(`(\:|\:\:)(${pseudoElements})$`, "gi"), ""); 
			try { match = element.matches(filteredSelector) } catch (err) { }
			if (match) result = { type: "pseudoElement", matched: matchPseudoElement[0] };
		}
	}

	return result;
}

function mergeMediaStyle(condition, mediaStyle, result)
{
	if (result[condition])
	{
		result[condition].normal = { ...result[condition].normal, ...mediaStyle.normal };
		for (const [pClass, rules] of Object.entries(mediaStyle.pseudo_class) )
		{
			if (result[condition].pseudo_class[pClass])
			{
				result[condition].pseudo_class[pClass] = {...result[condition].pseudo_class[pClass], ...rules};
			}
			else
			{
				result[condition].pseudo_class[pClass] = rules;
			}
		}

		for (const [pElement, rules] of Object.entries(mediaStyle.pseudo_element) )
		{
			if (result[condition].pseudo_element[pElement])
			{
				result[condition].pseudo_element[pElement] = {...result[condition].pseudo_element[pElement], ...rules};
			}
			else
			{
				result[condition].pseudo_element[pElement] = rules;
			}
		}
	}
	else
	{
		result[condition] = mediaStyle;
	}	
}

function mediaQuery(css, element)
{
	const result = [];
	const mediaRules = css.rules || css.cssRules;
	for (const rule of mediaRules)
	{
		const selectors = getSeperatedSelectors(rule.selectorText, ",");
		for (const selector of selectors)
		{
			const matchResult = isMatch(element, selector);
			if (matchResult) 
			{
				const rules = _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].cssToJson(rule.style.cssText);
				result.push({
					selector, 
					selector_text: rule.selectorText,
					rules,
					match_result: matchResult
				});
			}
		}
	}

	return result;
}

function getAnimationNames(rules)
{
	const names = [];
	for (const [property, value] of Object.entries(rules))
	{
		if (property === "animation")
		{
			const arr = value.split(",");
			for (const chunk of arr)
			{
				const animInfo = chunk.trim().split(" ");
				names.push(animInfo[0]);
			}
		}
		else if (property === "animation-name")
		{
			const arr = value.split(",");
			for (const chunk of arr)
			{
				names.push(chunk.trim());
			}
		}
	}

	return names;
}

function animations(element, normal, mediaQueries)
{
	const result = {};

	let names = [];

	const animNames = window.getComputedStyle(element).getPropertyValue("animation-name");
	if (animNames) names = animNames.split(",").map(item => item.trim());

	for (const [pClass, rules] of Object.entries(normal.pseudo_class))
	{
		names = [...names, ...getAnimationNames(rules)];
	}

	for (const [_, style] of Object.entries(mediaQueries))
	{
		names = [...names, ...getAnimationNames(style.normal)];
		for (const [pClass, rules] of Object.entries(style.pseudo_class))
		{
			names = [...names, ...getAnimationNames(rules)];
		}
	}

	names = [...new Set(names)];

	for (const name of names)
	{
		if (state.animations[name])
		{
			result[name] = state.animations[name];
		}
	}

	return result;
}

function computed(element)
{
	const css = {
		styles: [],
		media_queries: {},
		animations: {}
	};

	const mediaQueries = {};
	const styles = {
		normal: {},
		pseudo_class: {},
		pseudo_element: {}
	}

	let conflicts = [];

	const sheets = getSheets();
	for (const sheet of sheets)
	{
		let rules = [];
		try 
		{
			rules = sheet.rules || sheet.cssRules;
		}
		catch (err)
		{
			continue;
		}

		for (const rule of rules) 
		{
			if ((rule instanceof CSSMediaRule || rule.constructor.name === "CSSMediaRule") && _settings__WEBPACK_IMPORTED_MODULE_1__["default"].get().inspector.view.media)
			{
				const mediaStyle = {
					normal: {},
					pseudo_class: {},
					pseudo_element: {}
				};

				const matchedMedia = mediaQuery(rule, element);
				for (const media of matchedMedia)
				{
					merge(media.match_result, media.rules, mediaStyle);
				}

				if (Object.keys(mediaStyle.normal).length || 
					Object.keys(mediaStyle.pseudo_class).length ||
					Object.keys(mediaStyle.pseudo_element).length)
				{
					const condition = rule.cssText.split("{")[0].trim();
					mergeMediaStyle(condition, mediaStyle, mediaQueries);
				}

			}
			else if ((rule instanceof CSSKeyframesRule || rule.constructor.name === "CSSKeyframesRule") && _settings__WEBPACK_IMPORTED_MODULE_1__["default"].get().inspector.view.animations)
			{
				const name = rule.name;
				const cssRules = rule.rules || rule.cssRules;
				const frames = {};
				for (const frame of cssRules)
				{
					const rawRules = _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].cssToJson(frame.style.cssText)
					frames[frame.keyText] = _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(rawRules, element, true);
				}

				state.animations[name] = frames;
			}
			else if (rule instanceof CSSStyleRule || rule.constructor.name === "CSSStyleRule")
			{
				const selectors = getSeperatedSelectors(rule.selectorText, ",");
				for (const selector of selectors)
				{
					const matchResult = isMatch(element, selector);
					if (matchResult) 
					{
						const rules = _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].cssToJson(rule.style.cssText);

						// Get conflicted properties between already found rules and new rules
						if (matchResult.type === "normal")
						{
							conflicts = [...Object.keys(styles.normal).filter(k => k in rules), ...conflicts];
							conflicts = [...new Set(conflicts)];
						}

						merge(matchResult, rules, styles);
					}
				}
			}
		}
	}

	const computedStyles = getComputedStyles(element);
	
	// Remove styles from computedStyles which are effected by hover pseudo classes.
	for (const [_, rules] of Object.entries(styles.pseudo_class))
	{
		for (const [property, _] of Object.entries(rules))
		{
			if (computedStyles[property]) delete computedStyles[property];
		}
	}

	// Resolve conflicted properties found in the rules.
	for (const property of conflicts)
	{
		if (computedStyles[property]) styles.normal[property] = computedStyles[property]
	}

	styles.normal = _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].filterCSS({...computedStyles, ...styles.normal, ...style(element)});
	css.animations = animations(element, styles, css.media_queries);
	css.styles.push({
		selector: "",
		type: "normal",
		rules: _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(styles.normal, element, true)
	});

	for (const [pClass, rules] of Object.entries(styles.pseudo_class))
	{
		css.styles.push({
			selector: pClass,
			type: "pseudo",
			rules: _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(rules, element, true)
		});
	}

	for (const [pElement, rules] of Object.entries(styles.pseudo_element))
	{
		css.styles.push({
			selector: pElement,
			type: "pseudo",
			rules: _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(rules, element, true)
		});
	}

	for (const [condition, query] of Object.entries(mediaQueries))
	{
		css.media_queries[condition] = [];

		if (Object.keys(query.normal).length)
		{
			css.media_queries[condition].push({
				selector: "",
				type: "normal",
				rules: _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(query.normal, element, true)
			});
		}

		for (const [pClass, rules] of Object.entries(query.pseudo_class))
		{
			css.media_queries[condition].push({
				selector: pClass,
				type: "pseudo",
				rules: _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(rules, element, true)
			});
		}

		for (const [pElement, rules] of Object.entries(query.pseudo_element))
		{
			css.media_queries[condition].push({
				selector: pElement,
				type: "pseudo",
				rules: _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(rules, element, true)
			});
		}
	}

	return css;
}

function selector(element)
{
	const css = {
		styles: [],
		media_queries: {},
		animations: {}
	};

	const mediaQueries = {};
	const styles = {
		normal: {},
		pseudo_class: {},
		pseudo_element: {}
	}

	const sheets = getSheets();
	for (const sheet of sheets)
	{
		let rules = [];
		try 
		{
			rules = sheet.rules || sheet.cssRules;
		}
		catch (err)
		{
			continue;
		}

		for (const rule of rules) 
		{
			if ((rule instanceof CSSMediaRule || rule.constructor.name === "CSSMediaRule") && _settings__WEBPACK_IMPORTED_MODULE_1__["default"].get().inspector.view.media)
			{
				const mediaStyle = {
					normal: {},
					pseudo_class: {},
					pseudo_element: {}
				};
				
				const matchedMedia = mediaQuery(rule, element);
				if (matchedMedia.length)
				{
					const condition = rule.cssText.split("{")[0].trim();
					if (!css.media_queries[condition]) css.media_queries[condition] = []; 
					for (const media of matchedMedia)
					{
						css.media_queries[condition].push({
							selector: media.selector_text,
							type: "normal",
							rules: _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(media.rules, element, false)
						});
					}

					for (const media of matchedMedia)
					{
						merge(media.match_result, media.rules, mediaStyle);
					}

					if (Object.keys(mediaStyle.normal).length || 
					Object.keys(mediaStyle.pseudo_class).length ||
					Object.keys(mediaStyle.pseudo_element).length)
					{
						const condition = rule.cssText.split("{")[0].trim();
						mergeMediaStyle(condition, mediaStyle, mediaQueries);
					}
				}
			}
			else if (rule instanceof CSSStyleRule || rule.constructor.name === "CSSStyleRule")
			{
				let result = false;
				const selectors = getSeperatedSelectors(rule.selectorText, ",");
				for (const selector of selectors)
				{
					result = isMatch(element, selector);
					if (result) break;
				}

				if (result)
				{
					const rules = _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].cssToJson(rule.style.cssText);
					merge(result, rules, styles);
					css.styles.push({
						selector: rule.selectorText,
						type: "normal",
						rules: _utils_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseRules(rules, element, false)
					});
				}
			}
		}
	}

	css.animations = animations(element, styles, mediaQueries);
	return css;
}

/* harmony default export */ __webpack_exports__["default"] = ({ computed, selector });

/***/ }),

/***/ "./src/content_scripts/inspect/target.js":
/*!***********************************************!*\
  !*** ./src/content_scripts/inspect/target.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function Target()
{
	this.element = null;
	this.mark = null;
}

/* harmony default export */ __webpack_exports__["default"] = (Target);

/***/ }),

/***/ "./src/content_scripts/inspect/tools/customCSS.js":
/*!********************************************************!*\
  !*** ./src/content_scripts/inspect/tools/customCSS.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/store */ "./src/utils/store.js");



__webpack_require__(/*! ../../../vendors/codemirror/mode/css/css.js */ "./src/vendors/codemirror/mode/css/css.js");
const CodeMirror = __webpack_require__(/*! ../../../vendors/codemirror/lib/codemirror.js */ "./src/vendors/codemirror/lib/codemirror.js");

const KEY = "custom_css";
let toolbarBtn = null;
let win = null;
let editor = null;
let style = null;
const state = {
	enabled: false,
	css: ""
};

function initialize(btn, w)
{
	toolbarBtn = btn;
	win = w;

	const codeArea = win.querySelector("#custom_css_code");
	editor = CodeMirror.fromTextArea(codeArea, {
		mode: "css",
		indentUnit: 4,
		lineWrapping: true
	});

	editor.on('change', onChange);
	if (state.css) editor.setValue(state.css);
	else editor.setValue("/* Type CSS here... */");

	editor.on("mousedown", () => 
    {
        editor.refresh();
    });

	// reset 
	win.querySelector("#custom_css_reset").addEventListener("click", reset);
}

function onChange(cm)
{
	if (!style)
	{
		style = _utils_element__WEBPACK_IMPORTED_MODULE_0__["default"].create("<style></style>");
		document.body.appendChild(style);
	}

	const css = cm.getValue();
	style.innerHTML = css;
	
	setTimeout(() => 
    {
		editor.refresh();
		storeCSS(css);
    });
}

async function storeCSS(css)
{
	try
	{
		let data = await _utils_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(KEY);
		if (!data) data = {};

		data[window.location.href] = css;
		const newData = {};
		newData[KEY] = data;
		await _utils_store__WEBPACK_IMPORTED_MODULE_1__["default"].set(newData);
	}
	catch (err)
	{
		console.log(err);
	}
} 

async function restore()
{
	try
	{
		let data = await _utils_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(KEY);
		if (data)
		{
			const css = data[window.location.href];
			if (css)
			{
				state.css = css;
				style = _utils_element__WEBPACK_IMPORTED_MODULE_0__["default"].create(`<style>${state.css}</style>`);
				document.body.appendChild(style);
			}
		}
	}
	catch (err)
	{
		console.log(err);
	}
}

function reset()
{
	if (style)
	{
		state.css = "";
		storeCSS("");
		editor.setValue("/* Type CSS here... */");
		style.innerHTML = "";
	}
}

function enable()
{
	state.enabled = true;
	toolbarBtn.classList.add('active');

	win.style.display = "block";
}

function disable()
{
	state.enabled = false;
	toolbarBtn.classList.remove('active');
	
	win.style.display = "none";
}

function destroy()
{
	disable();
}

function isEnabled()
{
	return state.enabled;
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
    isEnabled,
	destroy,
	restore
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/customJS.js":
/*!*******************************************************!*\
  !*** ./src/content_scripts/inspect/tools/customJS.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_msg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/msg */ "./src/utils/msg.js");



__webpack_require__(/*! ../../../vendors/codemirror/mode/javascript/javascript.js */ "./src/vendors/codemirror/mode/javascript/javascript.js");
const CodeMirror = __webpack_require__(/*! ../../../vendors/codemirror/lib/codemirror.js */ "./src/vendors/codemirror/lib/codemirror.js");

const KEY = "custom_js";
let toolbarBtn = null;
let win = null;
let editor = null;
const state = {
	enabled: false,
	js: ""
};

function initialize(btn, w)
{
	toolbarBtn = btn;
	win = w;

	const codeArea = win.querySelector("#custom_js_code");
	editor = CodeMirror.fromTextArea(codeArea, {
		mode: "javascript",
		indentUnit: 4,
		lineWrapping: true
	});

	editor.on('change', onChange);
	if (state.js) editor.setValue(state.js);
	else editor.setValue("/* Type Javascript here... */");

    editor.on("mousedown", () => 
    {
        editor.refresh();
    });

	// reset 
	win.querySelector("#custom_js_reset").addEventListener("click", reset);

	// run
	win.querySelector("#custom_js_run").addEventListener("click", run);
}

function onChange(cm)
{
	const js = cm.getValue();
	state.js = js;
    setTimeout(() => 
    {
        editor.refresh();
        storeJS(js);
    });
}

async function storeJS(js)
{
	try
	{
		let data = await _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(KEY);
		if (!data) data = {};

		data[window.location.href] = js;
		const newData = {};
		newData[KEY] = data;
		await _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"].set(newData);
	}
	catch (err)
	{
		console.log(err);
	}
} 

async function restore()
{
	try
	{
		let data = await _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(KEY);
		if (data)
		{
			const js = data[window.location.href];
			if (js)
			{
				state.js = js;
				run();
			}
		}
	}
	catch (err)
	{
		console.log(err);
	}
}

function run()
{
	_utils_msg__WEBPACK_IMPORTED_MODULE_1__["default"].sendMessage("inspect.injectCustomJavascript", {code: state.js});
}

function reset()
{
	storeJS("");
	editor.setValue("/* Type Javascript here... */");
}

function enable()
{
	state.enabled = true;
	toolbarBtn.classList.add('active');

	win.style.display = "block";
}

function disable()
{
	state.enabled = false;
	toolbarBtn.classList.remove('active');
	
	win.style.display = "none";
}

function destroy()
{
	disable();
}

function isEnabled()
{
	return state.enabled;
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
    isEnabled,
	destroy,
	restore
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/edit.js":
/*!***************************************************!*\
  !*** ./src/content_scripts/inspect/tools/edit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const state = {
	enabled: false,
	toolbarBtn: null,
	outline: null,
	target: null,
	element: null
};

function initialize(btn)
{
	state.toolbarBtn = btn;
}

function enable()
{
	state.enabled = true;
	state.toolbarBtn.classList.add('active');
}

function disable()
{
	state.enabled = false;
	state.toolbarBtn.classList.remove('active');

	if (state.element)
	{
		state.element.style.outline = state.outline;
		state.element.removeAttribute('contenteditable');
		state.element.removeAttribute('spellcheck');
		state.element = null;
	}
}

function destroy()
{
	disable();
}

function isEnabled()
{
	return state.enabled;
}

function isElementFocused()
{
	return (state.element !== null);
}

function setTarget(target)
{
	state.target = target;
	if (state.target.element === state.element)
	{
		state.target.mark.remove();
	}
}

function onClick()
{
	if (state.element)
	{
		state.element.style.outline = state.outline;
		state.element.removeAttribute('contenteditable');
		state.element.removeAttribute('spellcheck');
	}

	state.element = state.target.element;
	state.target.mark.remove();

	state.outline = window.getComputedStyle(state.element).getPropertyValue('outline');
	state.element.style.outline = "2px solid rgb(77, 144, 254)";
	state.element.setAttribute('contenteditable', 'true');
	state.element.setAttribute('spellcheck', 'true');
	state.element.focus();
}	


/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
	isEnabled,
	destroy,
	setTarget,
	onClick,
	isElementFocused
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/fonts.js":
/*!****************************************************!*\
  !*** ./src/content_scripts/inspect/tools/fonts.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");



const state = {
	enabled: false,
	toolbar_btn: null,
	win: null,
	content: null,
	reset_btn: null,
	fonts: {}
};

const ignore = [
	"SCRIPT",
	"NOSCRIPT",
	"IMG",
	"VIDEO",
	"HTML",
	"HEAD",
	"TITLE",
	"META",
	"LINK",
	"SOURCE",
	"IFRAME",
	"SVG",
	"CIRCLE",
	"PATH",
	"POLYLINE",
	"LINE",
	"HR",
	"BR",
	"STYLE",
	"POLYGON",
	"RECT"
];

function initialize(btn, win)
{
	state.toolbar_btn = btn;
	state.win = win;
	state.content = state.win.querySelector('#content');
	state.reset_btn = win.querySelector("#fonts_reset");
	state.reset_btn.addEventListener('click', () => 
	{
		reset();
		state.content.innerHTML = "";
		findFonts();
	});
}

function enable()
{
	state.enabled = true;
	state.toolbar_btn.classList.add('active');
	state.win.style.display = "block";

	if (Object.keys(state.fonts).length === 0) findFonts();
}

function disable()
{
	state.enabled = false;
	state.toolbar_btn.classList.remove('active');
	state.win.style.display = "none";
}

function reset()
{
	state.fonts = {};
}

function destroy()
{
	reset();
	disable();
}

function isEnabled()
{
	return state.enabled;
}

function findFonts()
{
	const elements = document.querySelectorAll("*");
	for (const element of elements)
	{
		const computedStyles = window.getComputedStyle(element);
		const tagName = element.tagName.toUpperCase();

		if (ignore.indexOf(tagName) === -1 && !tagName.startsWith("HV-"))
		{
			const fontFamily = computedStyles.getPropertyValue("font-family");
			const fonts = fontFamily.split(",").map(item => 
			{
				const font = item.trim();
				return item.replaceAll("\"", "").replaceAll("\'", "");
			});

			if (state.fonts[tagName])
			{
				for (const font of fonts)
				{
					if (state.fonts[tagName].indexOf(font) === -1) state.fonts[tagName].push(font);
				}
			}
			else
			{
				state.fonts[tagName] = fonts;
			}
		} 
	}

	render();
}

function render()
{
	for (const [tag, fonts] of Object.entries(state.fonts))
	{
		const li = _utils_element__WEBPACK_IMPORTED_MODULE_0__["default"].create(`
			<li>
				<h4>${tag}</h4>
				<p>${fonts.join(", ")}</p>
			</li>
		`);

		state.content.appendChild(li);
	}	
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
	isEnabled,
	destroy
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/grids.js":
/*!****************************************************!*\
  !*** ./src/content_scripts/inspect/tools/grids.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const state = {
	enabled: false,
	toolbarBtn: null
};

function initialize(btn)
{
	state.toolbarBtn = btn;
}

function isEnabled() { return state.enabled }

function enable()
{
	state.enabled = true;
	state.toolbarBtn.classList.add('active');

	const elements = document.querySelectorAll("*");
	for (const element of elements)
	{
		element.style.outline = "1px dashed rgba(255, 0, 0, 0.8)";
	}
}

function disable()
{
	state.enabled = false;
	state.toolbarBtn.classList.remove('active');

	const elements = document.querySelectorAll("*");
	for (const element of elements)
	{
		element.style.outline = "none";
	}
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
	isEnabled
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/guidelines.js":
/*!*********************************************************!*\
  !*** ./src/content_scripts/inspect/tools/guidelines.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const state = {
	enabled: false,
	toolbarBtn: null,
	hvGuidelines: null,
	shadow: null,
	vertical: null,
	horizontal: null
};

function initialize(btn)
{
	state.toolbarBtn = btn;
}

function setTarget(target)
{
	if (!state.enabled) return;

	const box = target.element.getBoundingClientRect();
	state.vertical.style.left = `${box.left}px`;
	state.vertical.style.width = `${box.width - 2}px`;
	state.vertical.style.height = `${window.innerHeight - 2}px`;
	
	state.horizontal.style.top = `${box.top}px`;
	state.horizontal.style.width = `${window.innerWidth - 2}px`;
	state.horizontal.style.height = `${box.height - 2}px`;
}

function enable()
{
	state.enabled = true;
	state.toolbarBtn.classList.add('active');

	state.hvGuidelines = document.createElement('hv-guidelines');
	state.shadow = state.hvGuidelines.attachShadow({ mode: 'closed' });
	state.hvGuidelines.style.pointerEvents = 'none';
	state.hvGuidelines.style.position = 'fixed';
	state.hvGuidelines.style.zIndex = `50000000`;
	
	state.vertical = document.createElement('div');
	state.vertical.style.position = `fixed`;
	state.vertical.style.zIndex = `50000000`;
	state.vertical.style.top = `0px`;
	state.vertical.style.borderRight = `1px dashed #f44336`;
	state.vertical.style.borderLeft = `1px dashed #f44336`;

	state.horizontal = document.createElement('div');
	state.horizontal.style.position = `fixed`;
	state.horizontal.style.zIndex = `50000000`;
	state.horizontal.style.left = `0px`;
	state.horizontal.style.borderTop = `1px dashed #f44336`;
	state.horizontal.style.borderBottom = `1px dashed #f44336`;

	state.shadow.appendChild(state.vertical);
	state.shadow.appendChild(state.horizontal);
	document.body.appendChild(state.hvGuidelines);
}

function disable()
{
	state.enabled = false;
	state.toolbarBtn.classList.remove('active');

	state.hvGuidelines.remove();
	state.hvGuidelines = null;
	state.shadow = null;
	state.vertical = null;
	state.horizontal = null;
}

function isEnabled()
{
	return state.enabled;
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	isEnabled,
	disable,
	setTarget
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/palette.js":
/*!******************************************************!*\
  !*** ./src/content_scripts/inspect/tools/palette.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");
/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/parser */ "./src/utils/parser.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/colors */ "./src/utils/colors.js");
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/svg */ "./src/utils/svg.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utility */ "./src/utils/utility.js");
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/modal */ "./src/utils/modal.js");








const state = {
	enabled: false,
	toolbar_btn: null,
	win: null,
	content: null,
	reset_btn: null,
	colors: []
};

function initialize(btn, win)
{
	state.toolbar_btn = btn;
	state.win = win;
	state.content = state.win.querySelector('#content');
	state.reset_btn = win.querySelector("#palette_reset");
	state.reset_btn.addEventListener('click', () => 
	{
		reset();
		state.content.innerHTML = "";
		findColors();
	});
}

function enable()
{
	state.enabled = true;
	state.toolbar_btn.classList.add('active');
	state.win.style.display = "block";

	if (Object.keys(state.colors).length === 0) findColors();
}

function disable()
{
	state.enabled = false;
	state.toolbar_btn.classList.remove('active');
	state.win.style.display = "none";
}

function reset()
{
	state.colors = [];
}

function destroy()
{
	reset();
	disable();
}

function isEnabled()
{
	return state.enabled;
}

function findColors()
{
	setTimeout(() => 
	{
		const sheets = [...window.hvStyleIframe.contentDocument.styleSheets, ...document.styleSheets];
		let colorString = "", extracted = [], nameColors = [];
		for (const sheet of sheets)
		{
			let rules = [];
			try 
			{
				rules = sheet.rules || sheet.cssRules;
			}
			catch (err)
			{
				continue;
			}

			for (const rule of rules) 
			{
				if (rule instanceof CSSMediaRule)
				{
					const mediaRules = rule.rules || rule.cssRules;
					for (const r of mediaRules)
					{
						if (r.style)
						{
							const style = _utils_parser__WEBPACK_IMPORTED_MODULE_1__["default"].cssToJson(r.style.cssText);
							const { string, colors } = Object(_utils_parser__WEBPACK_IMPORTED_MODULE_1__["checkForColors"])(style);
							nameColors = [...nameColors, ...colors];
							colorString += string;
						}
					}
				}
				else if (rule instanceof CSSKeyframesRule)
				{
					const cssRules = rule.rules || rule.cssRules;
					for (const frame of cssRules)
					{
						const style = _utils_parser__WEBPACK_IMPORTED_MODULE_1__["default"].cssToJson(frame.style.cssText);
						const { string, colors } = Object(_utils_parser__WEBPACK_IMPORTED_MODULE_1__["checkForColors"])(style);
						nameColors = [...nameColors, ...colors];
						colorString += string;
					}
				}
				else if (rule instanceof CSSStyleRule)
				{
					const style = _utils_parser__WEBPACK_IMPORTED_MODULE_1__["default"].cssToJson(rule.style.cssText);
					const { string, colors } = Object(_utils_parser__WEBPACK_IMPORTED_MODULE_1__["checkForColors"])(style);
					nameColors = [...nameColors, ...colors];
					colorString += string;
				}
			}
		}

		for (const color of nameColors)
		{
			const hex = _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].convertNameToHex(color);
			if (hex)
			{
				const rgb = Object(_utils_parser__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"])(hex);
				extracted.push({
					...rgb,
					hex: `${hex}`
				});
			}
		}

		const hex = colorString.match(/\b[0-9A-F]{6}\b/gi);
		if (hex)
		{
			hex.map(item =>
			{
				const color = {
					...Object(_utils_parser__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"])(item),
					hex: `#${item}`
				}
				extracted.push(color);
			});
		}

		const rgbas = Object(_utils_parser__WEBPACK_IMPORTED_MODULE_1__["stringToRGB"])(colorString);
		for (const rgba of rgbas)
		{
			extracted.push(rgba);
		}

		const seen = {};
		for (const color of extracted)
		{
			const json = JSON.stringify(color);
			if (!seen[json])
			{
				seen[json] = 1;
				state.colors.push(color);
			} 
		}

		render();
	}, 0);
}

function render()
{
	for (const color of state.colors)
	{
		let textColor = "#fff", colorValue = "";
		const li = _utils_element__WEBPACK_IMPORTED_MODULE_0__["default"].create(`<li></li>`);

		if (color.hex) colorValue = color.hex;
		else colorValue = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

		const hsp = Math.sqrt(0.299 * (color.r * color.r) + 0.587 * (color.g * color.g) + 0.114 * (color.b * color.b));
		if (hsp >= 127.5 && color.a === undefined) textColor = "#000";

		const div = _utils_element__WEBPACK_IMPORTED_MODULE_0__["default"].create(`
			<div style="background-color: ${colorValue}; color: ${textColor}">
				<h4 style="color: ${textColor}">${colorValue}</h4>
				${_utils_svg__WEBPACK_IMPORTED_MODULE_3__["default"].copy}
			</div>
		`);

		div.addEventListener("click", () => 
		{
			Object(_utils_utility__WEBPACK_IMPORTED_MODULE_4__["copyText"])(colorValue);
			_utils_modal__WEBPACK_IMPORTED_MODULE_5__["default"].show("Copied!");
		});

		li.appendChild(div);
		state.content.appendChild(li);
	}
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
	isEnabled,
	destroy
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/search.js":
/*!*****************************************************!*\
  !*** ./src/content_scripts/inspect/tools/search.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../target */ "./src/content_scripts/inspect/target.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");
/* harmony import */ var _mark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mark */ "./src/content_scripts/inspect/mark.js");
/* harmony import */ var _postMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postMessage */ "./src/content_scripts/inspect/postMessage.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/content_scripts/inspect/tools/style.js");







const PINK = "#e91e63";
const state = {
	enabled: false,
	toolbar_btn: null,
	win: null,
	elements_ul: null,
	reset_btn: null,
	input: null,
	message: null,
	targets: [],
	scroll_timer: null
};

function initialize(btn, win)
{
	state.toolbar_btn = btn;
	state.win = win;
	state.elements_ul = state.win.querySelector("#elements");

	state.input = win.querySelector("input");
	state.message = win.querySelector("#message");

	state.input.addEventListener("input", (e) => 
	{
		const selector = e.target.value.trim(); 
		findElements(selector);
		if (window === window.parent) Object(_postMessage__WEBPACK_IMPORTED_MODULE_3__["default"])({ action: "hv.inspect.search.find", selector: selector });
 	});

	state.reset_btn = win.querySelector("#search_reset");
	state.reset_btn.style.display = "none";
	state.reset_btn.addEventListener('click', () => 
	{
		reset();
		if (window === window.parent) Object(_postMessage__WEBPACK_IMPORTED_MODULE_3__["default"])({ action: "hv.inspect.search.reset" });
	});
}

function enable()
{
	state.enabled = true;
	state.toolbar_btn.classList.add('active');
	state.win.style.display = "block";

	state.input.focus();

	addEventListener('scroll', scrollHandler);
}

function disable()
{
	state.enabled = false;
	state.toolbar_btn.classList.remove('active');
	state.win.style.display = "none";

	removeEventListener('scroll', scrollHandler);
}

function destroy()
{
	disable();
	reset();
}

function isEnabled()
{
	return state.enabled;
}

function scrollHandler()
{
	if (state.scroll_timer !== null) clearTimeout(state.scroll_timer);        

    state.scroll_timer = setTimeout(() => 
    {
    	for (const t of state.targets) Object(_mark__WEBPACK_IMPORTED_MODULE_2__["adjustPosition"])(t.target.element, t.target.mark);
    }, 100);
}

function findElements(selector)
{
	if (selector === "") 
	{ 
		state.reset_btn.style.display = "none";
		state.message.style.display = "none"; 
		return; 
	}

	state.message.style.display = "block";

	for (const t of state.targets) 
	{
		t.target.mark.remove();
		t.li.remove();
	}
	state.targets = [];

	try 
	{
		const elements = document.querySelectorAll(selector);
		state.message.innerHTML = `${elements.length} elements found`;

		if (elements.length)
		{
			state.reset_btn.style.display = "flex";
			state.message.style.color = "#1e88e5";
			for (const element of elements)
			{
				const styles = window.getComputedStyle(element);
				const display = styles.getPropertyValue("display");
				const visibility = styles.getPropertyValue("visibility");
				if (visibility !== "hidden" && display !== "none")
				{
					const target = new _target__WEBPACK_IMPORTED_MODULE_0__["default"]();
					target.element = element;
					target.mark = Object(_mark__WEBPACK_IMPORTED_MODULE_2__["default"])(element, true, "#e91e63");

					const li = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`
						<li>
							<div>
								<h4>${element.tagName}</h4>
								<p>${_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].getUniqueSelector(element)}</p>
							</div>
						</li>
					`);
					li.addEventListener("mouseover", () => 
					{
						Object(_mark__WEBPACK_IMPORTED_MODULE_2__["changeMarkColor"])(target.mark, "red");
						Object(_mark__WEBPACK_IMPORTED_MODULE_2__["addAnimationToMark"])(target.mark);
					});
					li.addEventListener("mouseout", () => 
					{
						Object(_mark__WEBPACK_IMPORTED_MODULE_2__["changeMarkColor"])(target.mark, PINK);
						Object(_mark__WEBPACK_IMPORTED_MODULE_2__["removeAnimationFromMark"])(target.mark);
					});

					const button = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create("<button>Show styles</button>");
					button.addEventListener('click', () => 
					{
						_style__WEBPACK_IMPORTED_MODULE_4__["default"].setTargetAndCreateWindow(target);
					});
					li.appendChild(button);
					state.elements_ul.appendChild(li);

					state.targets.push({
						li,
						target
					});
				}
			}

			scroll(elements[0]);
		}
		else
		{
			state.reset_btn.style.display = "none";
			state.message.style.color = "#e53935";
		}
	}
	catch (err)
	{
		state.reset_btn.style.display = "none";
		state.message.style.color = "#e53935";
	}
}

function reset()
{
	for (const t of state.targets) 
	{
		t.target.mark.remove();
		t.li.remove();
	}
	state.targets = [];
	state.reset_btn.style.display = "none";
	state.input.value = "";
	state.message.style.display = "none"; 
}

function scroll(element)
{
	const box = element.getBoundingClientRect();
	window.scrollTo(0, box.top - 100);
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
	isEnabled,
	destroy,
	findElements,
	reset
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/style.js":
/*!****************************************************!*\
  !*** ./src/content_scripts/inspect/tools/style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_selector_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-selector-generator */ "./node_modules/css-selector-generator/build/index.js");
/* harmony import */ var css_selector_generator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_selector_generator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../event */ "./src/content_scripts/event.js");
/* harmony import */ var _ui_inspectWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/inspectWindow */ "./src/content_scripts/inspect/ui/inspectWindow.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");
/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/parser */ "./src/utils/parser.js");
/* harmony import */ var _style_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/rules */ "./src/content_scripts/inspect/style/rules.js");
/* harmony import */ var _style_codeEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/codeEditor */ "./src/content_scripts/inspect/style/codeEditor.js");
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/svg */ "./src/utils/svg.js");
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/modal */ "./src/utils/modal.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../settings */ "./src/content_scripts/settings.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/utility */ "./src/utils/utility.js");













const windowOffset = 15;
const Modes = { Computed: "Computed", Selector: "Selector" };
const state = {
	current_mode: Modes.Computed,
	enabled: false,
	inspectWindow: null,
	hidden: false,
	current_target: {
		element: null,
		css: [],
		colors: [],
		fonts: [],
		attribs: []
	},
	calculating: false,
	docked_windows: [],
};	

function initialize() {}

function enable()
{
	state.enabled = true;
	state.inspectWindow = Object(_ui_inspectWindow__WEBPACK_IMPORTED_MODULE_2__["createInspectWindow"])(false);
	setVisibility(false);

	for (const win of state.docked_windows) win.style.display = "block";
}

function disable()
{
	state.enabled = false;
	state.current_target = {
		element: null,
		css: [],
		colors: [],
		fonts: [],
		attribs: {}
	}

	if (state.inspectWindow)
	{
		state.inspectWindow.getRootNode().host.remove();
		state.inspectWindow = null;
	}
}

function destroy()
{
	disable();
	for (const win of state.docked_windows) win.getRootNode().host.remove();
	state.docked_windows = [];
}

function isEnabled()
{
	return state.enabled;
}

function setMode(newMode)
{	
	if (state.current_mode === newMode) return;
	state.current_mode = newMode;
}

function getMode()
{
	return state.current_mode;
}

function loop()
{
	const { mx, my } = Object(_event__WEBPACK_IMPORTED_MODULE_1__["getMousePosition"])();
	
	if (state.inspectWindow && state.current_target.element)
	{
		const windowWidth = window.innerWidth - windowOffset;
        const windowHeight = window.innerHeight - windowOffset;
        let x = mx - window.scrollX + windowOffset;
        let y = my - window.scrollY + windowOffset;

        const box = state.inspectWindow.getBoundingClientRect();
        const width = box.width;
        const height = box.height;
        if (x +  width > windowWidth)
        {
            x = mx - (width + windowOffset);
        }

        if (y + height > windowHeight &&
	    	y - height > 0)
	    {
	    	y = my - window.scrollY - height - windowOffset;
	    } 

        state.inspectWindow.style.left = `${x}px`;
        state.inspectWindow.style.top = `${y}px`;
	}
	else { }

	for (const win of state.docked_windows)
	{
		if (win.moving && win.moving.allowed)
		{
			const x = mx - win.moving.x;
	        const y = my - win.moving.y;
	        win.style.left = `${x}px`;
	        win.style.top = `${y}px`;
		}
	}
}

function calculateSelectorStyle(element)
{
	const css = [];

	/*
		Check for adopted style sheets attached to element's shadow dom.
	*/
	if (element.shadowRoot) 
	{
		for (const sheet of element.shadowRoot.adoptedStyleSheets)
		{
			for (const rule of sheet.rules)
			{
				const selector = rule.selectorText;
				const rawRules = _utils_parser__WEBPACK_IMPORTED_MODULE_4__["default"].cssToJson(rule.style.cssText);
				const rules = _utils_parser__WEBPACK_IMPORTED_MODULE_4__["default"].parseRules(rawRules);
				css.push({
					selector,
		    		editable: false,
		    		type: "normal",
		    		rules
		    	});
			}
		}
	}

	return css;
}

function renderVisualEditor(css, scroll, element)
{
	const visualEditor = VisualEditor.create(element);

	scroll.appendChild(visualEditor);
}

function renderEditor(css, scroll, element)
{
	const codeDiv = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create(`<div id="code"></div>`);
	_style_codeEditor__WEBPACK_IMPORTED_MODULE_6__["default"].render(codeDiv, css.computed, element, true);

	if (element)
	{
		const tabs = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create('<ul class="tabs"></ul>');
		const computedTab = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create(`<li active="true">${_utils_svg__WEBPACK_IMPORTED_MODULE_7__["default"].code}</li>`);
		const selectorTab = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create(`<li>${_utils_svg__WEBPACK_IMPORTED_MODULE_7__["default"].alignLeft}</li>`);

		computedTab.onclick = () => 
		{
			scroll.mode = "computed";  
			computedTab.setAttribute("active", "true");
			selectorTab.setAttribute("active", "false");
			_style_codeEditor__WEBPACK_IMPORTED_MODULE_6__["default"].render(codeDiv, css.computed, element, true);
		}

		selectorTab.onclick = () => 
		{
			scroll.mode = "selector";  
			computedTab.setAttribute("active", "false");
			selectorTab.setAttribute("active", "true");

			if (!scroll.parent_window.target.selector)
			{
				css.selector = _style_rules__WEBPACK_IMPORTED_MODULE_5__["default"].selector(element);
				scroll.parent_window.target.selector = css.selector;
			}

			_style_codeEditor__WEBPACK_IMPORTED_MODULE_6__["default"].render(codeDiv, css.selector, element, false);
		}

		tabs.appendChild(computedTab);
		tabs.appendChild(selectorTab);
		scroll.appendChild(tabs);
	}

	scroll.append(codeDiv);
}

function onAttribChange(name, value, element)
{
	element.setAttribute(name, value);
}

function renderMetaInfo(colors, fonts, attribs, scroll, element)
{
	if (fonts.length || colors.length) scroll.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create("<div class='divider'></div>"));
	if (colors.length)
	{
		const colorsDiv = document.createElement('div');
		colorsDiv.id = "colors";
		colorsDiv.classList.add('info');
		colorsDiv.innerHTML = `${_utils_svg__WEBPACK_IMPORTED_MODULE_7__["default"].colorPalette}`;
		const ul = document.createElement('ul');
		for (let color of colors)
		{
			const li = document.createElement('li');
			li.style.background = color;
			li.addEventListener('click', () => 
			{
				Object(_utils_utility__WEBPACK_IMPORTED_MODULE_10__["copyText"])(color);
				_utils_modal__WEBPACK_IMPORTED_MODULE_8__["default"].show("Copied!");	
			});

			ul.appendChild(li);
		}
		colorsDiv.appendChild(ul);
		scroll.appendChild(colorsDiv);
	}

	if (fonts.length)
	{
		const fontsDiv = document.createElement('div');
		fontsDiv.id = "fonts";
		fontsDiv.classList.add('info');
		fontsDiv.innerHTML = `${_utils_svg__WEBPACK_IMPORTED_MODULE_7__["default"].font}`;
		const ul = document.createElement('ul');
		for (let font of fonts)
		{
			const li = document.createElement('li');
			if (font.url) li.innerHTML = `<li><a href="${font.url}" target="__blank">${font.name}</a></li>`;
			else li.innerHTML = `<li>${font.name}</li>`;
			ul.appendChild(li);
		}
		fontsDiv.appendChild(ul);
		scroll.appendChild(fontsDiv);
	}
	
	if (attribs.length && _settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.view.html_attribs)
	{
		scroll.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create("<div class='divider'></div>"));
		const ul = document.createElement('ul');
		ul.id = "attribs";
		for (let attrib of attribs)
		{
			const li = document.createElement('li');
			li.innerHTML = `
				<span class="name">${attrib.name}</span>
			`;

			if (element)
			{
				const attribInput = document.createElement('input');
				attribInput.setAttribute('type', 'text');
				attribInput.setAttribute('value', attrib.value);
				attribInput.setAttribute('spellcheck', 'false');
				attribInput.addEventListener('input', (e) => 
	        	{
	        		onAttribChange(attrib.name, e.target.value, element);
	        	});

				li.appendChild(attribInput);
			}
			else
			{
				li.innerHTML += `<span class="value">${attrib.value}</span>`;
			}

			ul.appendChild(li);
		}
		scroll.appendChild(ul);
	}

	scroll.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].create("<div class='divider'></div>"));
}

function setTarget(target, callback)
{
	if (!state.enabled || !state.inspectWindow || state.calculating) return;

	state.calculating = true;
	setVisibility(true);

	state.current_target.element = target.element;

	const tagName = state.current_target.element.tagName.toUpperCase();
	const selector = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getSelector(state.current_target.element);
	state.inspectWindow.querySelector('#tagname').innerHTML = `${tagName}<selector>${selector}</selector>`;

	const box = state.current_target.element.getBoundingClientRect();
	state.inspectWindow.querySelector('#width').innerHTML = `${Math.ceil(box.width)}px`;
	state.inspectWindow.querySelector('#height').innerHTML = `${Math.ceil(box.height)}px`;

	const scroll = state.inspectWindow.querySelector("#scroll");
	scroll.innerHTML = '';

	const attribs = _utils_parser__WEBPACK_IMPORTED_MODULE_4__["default"].getHtmlAttribs(state.current_target.element);
	state.current_target.attribs = attribs;

	if (tagName === "IMG" || tagName === "VIDEO")
	{
		const src = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getSource(state.current_target.element);
    	if (src)
    	{
	    	(async () => 
	    	{
	    		try
	    		{
	    			const fileImg = await fetch(Object(_utils_utility__WEBPACK_IMPORTED_MODULE_10__["getAssetUrl"])(src)).then(r => r.blob());
		    		if (!state.inspectWindow) return;
					const mediaSizeLi = state.inspectWindow.querySelector('#media_size');
					mediaSizeLi.style.display = "flex";

					let size = (fileImg.size / 1024).toFixed(1);
					if (size > 1024) 
					{
						size = (size / 1024).toFixed(1);
						mediaSizeLi.querySelector("span").innerHTML = `${size}mb`;
					}
					else 
					{
						mediaSizeLi.querySelector("span").innerHTML = `${size}kb`;
					}
	    		}
	    		catch (err) {}
	    	})();
    	}
	}
	else
	{
		state.inspectWindow.querySelector('#media_size').style.display = "none";
	}
	
	setTimeout(() => 
	{
		requestAnimationFrame(() => 
		{
			if (state.current_target.element)
			{
				state.current_target.css = _style_rules__WEBPACK_IMPORTED_MODULE_5__["default"].computed(state.current_target.element);
				
				const { colors, fonts } = _utils_parser__WEBPACK_IMPORTED_MODULE_4__["default"].getFontsAndColors(state.current_target.css, state.current_target.element);
				state.current_target.colors = colors;
				state.current_target.fonts = fonts;
	
				renderMetaInfo(colors, fonts, attribs, scroll);
				renderEditor({computed: state.current_target.css}, scroll, null);
			}

			state.calculating = false;
			if (callback) callback();
		});
	}, 0);
}

function dockWindow()
{
	const dockedWindow = Object(_ui_inspectWindow__WEBPACK_IMPORTED_MODULE_2__["createInspectWindow"])(true);
	const scroll = dockedWindow.querySelector("#scroll");
	scroll.parent_window = dockedWindow;
	scroll.editor = { visual: false };
	
	dockedWindow.target = { 
		element: state.current_target.element,
		colors: JSON.parse(JSON.stringify(state.current_target.colors)),
		fonts: JSON.parse(JSON.stringify(state.current_target.fonts)),
		attribs: JSON.parse(JSON.stringify(state.current_target.attribs)),
		computed: JSON.parse(JSON.stringify(state.current_target.css)),
	};

	const inspectBox = state.inspectWindow.getBoundingClientRect();
	dockedWindow.getRootNode().host.style.left = `${inspectBox.left + window.scrollX}px`;
	dockedWindow.getRootNode().host.style.top = `${inspectBox.top + window.scrollY}px`;

	const tagName = state.current_target.element.tagName.toUpperCase();
	const selector = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getSelector(state.current_target.element);
	dockedWindow.querySelector('#tagname').innerHTML = `${tagName}<selector>${selector}</selector>`;

	const box = state.current_target.element.getBoundingClientRect();
	dockedWindow.querySelector('#width').innerHTML = `${Math.ceil(box.width)}px`;
	dockedWindow.querySelector('#height').innerHTML = `${Math.ceil(box.height)}px`;

	const header = dockedWindow.querySelector("#header");
	header.addEventListener('mousedown', (e) => 
	{
		header.style.cursor = "grabbing";
		const styles = window.getComputedStyle(dockedWindow);
		const px = parseInt(styles.getPropertyValue('left').split('px')[0]);
        const py = parseInt(styles.getPropertyValue('top').split('px')[0]);

        const { mx, my } = Object(_event__WEBPACK_IMPORTED_MODULE_1__["getMousePosition"])();

        dockedWindow.moving = {
            allowed: true,
            x: mx - px,
            y: my - py
        };
	});

	header.addEventListener('mouseup', (e) => 
	{
		dockedWindow.moving = { allowed: false };
		header.style.cursor = "grab";
	});

	// Codepen
	const codepenValue = dockedWindow.querySelector("#codepen_value");
	const codepenOpen = dockedWindow.querySelector("#codepen_open");
	header.querySelector('#codepen').addEventListener('click', (e) => 
	{
		const { html, css } = exportToCodepen(dockedWindow.target.element);
		const value = { title: "New Pen", html, css, js: "// Created with Hoverify https://tryhoverify.com " };
		codepenValue.value = JSON.stringify(value);

		codepenOpen.click();
	});

	// Figure if css is changed or not;
	if (!dockedWindow.target.element.hv_style) header.querySelector('#reset').style.display = "none";
	scroll.showReset = () => header.querySelector('#reset').style.display = "block";
	header.querySelector('#reset').addEventListener('click', (e) => 
	{
		header.querySelector('#reset').style.display = "none";
		dockedWindow.target.element.hv_style.remove();
		dockedWindow.target.element.hv_style = null;

		scroll.innerHTML = "";
		renderMetaInfo(
			dockedWindow.target.colors,
			dockedWindow.target.fonts,
			dockedWindow.target.attribs,
			scroll,
			dockedWindow.target.element
		);

		setTimeout(() => 
		{
			const computed = _style_rules__WEBPACK_IMPORTED_MODULE_5__["default"].computed(dockedWindow.target.element);
			renderEditor( { computed }, scroll, dockedWindow.target.element);
		}, 0);
	});

	/*
		Copy dropdown
	*/
	const copyDropdown = header.querySelector('#copy .dropdown');
	header.querySelector('#copy').addEventListener('click', (e) => 
	{
		if (copyDropdown.style.display === "block") copyDropdown.style.display = "none";
		else copyDropdown.style.display = "block";
	});

	copyDropdown.querySelector("#copy_code").addEventListener("click", () => 
	{
		copyCode(dockedWindow.target.element, dockedWindow.target.element.hv_css);
	});

	copyDropdown.querySelector("#copy_changes").addEventListener("click", () => 
	{
		copyChanges(dockedWindow.target.element, dockedWindow.target.computed);
	});

	copyDropdown.querySelector("#copy_selector").addEventListener("click", () => 
	{
		const element = dockedWindow.target.element;
		Object(_utils_utility__WEBPACK_IMPORTED_MODULE_10__["copyText"])(element.tagName.toLowerCase() + "" + _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getSelector(element));
		_utils_modal__WEBPACK_IMPORTED_MODULE_8__["default"].show("Copied!");
	});

	copyDropdown.querySelector("#copy_unique_selector").addEventListener("click", () => 
	{
		const element = dockedWindow.target.element;
		Object(_utils_utility__WEBPACK_IMPORTED_MODULE_10__["copyText"])(_utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getUniqueSelector(element));
		_utils_modal__WEBPACK_IMPORTED_MODULE_8__["default"].show("Copied!");
	});

	header.querySelector('#close').addEventListener('click', (e) => 
	{
		state.docked_windows.splice(dockedWindow.id, 1);
		dockedWindow.getRootNode().host.remove();
	});

	if (tagName === "IMG" || tagName === "VIDEO")
    {
    	const filename = `FILE_${(new Date()).getTime()}`;
    	const src = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getSource(dockedWindow.target.element);
    	if (src)
    	{
	    	const downloadBtn = header.querySelector('#download');
	    	downloadBtn.style.display = 'block';
	    	const downloadLink = downloadBtn.querySelector('a');
	    	downloadLink.setAttribute("href", src);
			downloadLink.setAttribute("download", filename);
			downloadLink.setAttribute("target", "_blank");
			downloadLink.setAttribute("rel", "noopener noreferrer");

			(async () => 
	    	{
	    		try
	    		{
					const fileImg = await fetch(Object(_utils_utility__WEBPACK_IMPORTED_MODULE_10__["getAssetUrl"])(src)).then(r => r.blob());
					const mediaSizeLi = header.querySelector('#media_size');
					mediaSizeLi.style.display = "flex";

					let size = (fileImg.size / 1024).toFixed(1);
					if (size > 1024) 
					{
						size = (size / 1024).toFixed(1);
						mediaSizeLi.querySelector("span").innerHTML = `${size}mb`;
					}
					else 
					{
						mediaSizeLi.querySelector("span").innerHTML = `${size}kb`;
					}
	    		}
	    		catch (err)
	    		{}
	    	})();
    	}
    }

	renderMetaInfo(
		dockedWindow.target.colors,
		dockedWindow.target.fonts,
		dockedWindow.target.attribs,
		scroll,
		dockedWindow.target.element
	);

	renderEditor(
		{
			computed: JSON.parse(JSON.stringify(dockedWindow.target.computed))
		}, 
		scroll, 
		dockedWindow.target.element
	);

	dockedWindow.id = state.docked_windows.length;
	state.docked_windows.push(dockedWindow);
}

function copyCode(element, css)
{
	let html = "";
	if (_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.inner_html)
	{
		html = `${_utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getHtml(element)}\n\n`;
	}
	else if (_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.outer_html)
	{
		html = `${_utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getOuterHtml(element)}\n\n`;
	}

	let cssText = "";

	let selector = element.tagName.toLowerCase();
	selector += _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getSelector(element);
	for (const block of css.styles)
	{
		if (block.type === "pseudo" && !_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.pseudo) continue;

		let sel = selector;
		if (block.type === "pseudo") sel += block.selector;

		cssText += `${sel} { \n`;
		for (const [property, value] of Object.entries(block.rules))
		{
			cssText += `\t${property}: ${value};\n`;
		}
		cssText += `}\n`;
	}

	if (_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.animations)
	{
		for (const [animation, frames] of Object.entries(css.animations))
		{
			cssText += `@keyframes ${animation} { \n`;
			for (const [frame, rules] of Object.entries(frames))
			{
				cssText += `\t${frame} { \n`;
				for (const [property, value] of Object.entries(rules))
				{
					cssText += `\t\t${property}: ${value};\n`;
				}
				cssText += `\t}\n`;
			}
			cssText += "}\n";
		}
	}

	if (_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.media)
	{
		for (const [condition, query] of Object.entries(css.media_queries))
		{
			cssText += `${condition} { \n`;
			for (const block of query)
			{
				if (block.type === "pseudo" && !_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.pseudo) continue;

				let sel = selector;
				if (block.type === "pseudo") sel += block.selector;

				cssText += `\t${selector} { \n`;
				for (const [property, value] of Object.entries(block.rules))
				{
					cssText += `\t\t${property}: ${value};\n`;
				}
				cssText += `\t}\n`;
			}
			cssText += `}\n`;
		}
	}

	Object(_utils_utility__WEBPACK_IMPORTED_MODULE_10__["copyText"])(html + cssText);
	_utils_modal__WEBPACK_IMPORTED_MODULE_8__["default"].show("Copied!");
}

function copyChanges(element, oldCSS)
{
	const newCSS = element.hv_css;
	const changes = { styles: {}, animations: {}, media_queries: {} };
	let cssText = "";

	let selector = element.tagName.toLowerCase();
	selector += _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getSelector(element);
	for (let i = 0; i < newCSS.styles.length; i++)
	{
		const block = newCSS.styles[i];
		if (block.type === "pseudo" && !_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.pseudo) continue;

		let sel = selector;
		if (block.type === "pseudo") sel += block.selector;
		for (const [property, value] of Object.entries(block.rules))
		{
			if (oldCSS.styles[i].rules[property] !== value)
			{
				if (!changes.styles[sel]) changes.styles[sel] = {};
				changes.styles[sel][property] = value;
			}
		}
	}

	if (_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.animations)
	{
		for (const [animation, frames] of Object.entries(newCSS.animations))
		{
			for (const [frame, rules] of Object.entries(frames))
			{
				for (const [property, value] of Object.entries(rules))
				{
					if (oldCSS.animations[animation][frame][property] !== value)
					{
						if (!changes.animations[animation]) changes.animations[animation] = {};
						if (!changes.animations[animation][frame]) changes.animations[animation][frame] = {};
						changes.animations[animation][frame][property] = value;
					}
				}
			}
		}
	}

	if (_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.media)
	{
		for (const [condition, query] of Object.entries(newCSS.media_queries))
		{
			for (let i = 0; i < query.length; i++)
			{
				const block = query[i];
				if (block.type === "pseudo" && !_settings__WEBPACK_IMPORTED_MODULE_9__["default"].get().inspector.copy.pseudo) continue;
				
				let sel = selector;
				if (block.type === "pseudo") sel += block.selector;
				for (const [property, value] of Object.entries(block.rules))
				{
					if (oldCSS.media_queries[condition][i].rules[property] !== value)
					{
						if (!changes.media_queries[condition]) changes.media_queries[condition] = {};
						if (!changes.media_queries[condition][sel]) changes.media_queries[condition][sel] = {};
						changes.media_queries[condition][sel][property] = value;
					}
				}
			}
		}
	}

	for (const [selector, block] of Object.entries(changes.styles))
	{
		cssText += `${selector} { \n`;
		for (const [property, value] of Object.entries(block))
		{
			cssText += `\t${property}: ${value};\n`;
		}
		cssText += `}\n`;
	}

	for (const [animation, frames] of Object.entries(changes.animations))
	{
		cssText += `@keyframes ${animation} { \n`;
		for (const [frame, rules] of Object.entries(frames))
		{
			cssText += `\t${frame} { \n`;
			for (const [property, value] of Object.entries(rules))
			{
				cssText += `\t\t${property}: ${value};\n`;
			}
			cssText += `\t}\n`;
		}
		cssText += `}\n`;
	}

	for (const [condition, queries] of Object.entries(changes.media_queries))
	{
		cssText += `${condition} { \n`;
		for (const [selector, block] of Object.entries(queries))
		{
			cssText += `\t${selector} { \n`;
			for (const [property, value] of Object.entries(block))
			{
				cssText += `\t\t${property}: ${value};\n`;
			}
			cssText += `\t}\n`;
		}
		cssText += `}\n`;
	}

	Object(_utils_utility__WEBPACK_IMPORTED_MODULE_10__["copyText"])(cssText);
	_utils_modal__WEBPACK_IMPORTED_MODULE_8__["default"].show("Copied!");
}

function exportToCodepen(element)
{	
	const code = {
		style: {},
		media_queries: {},
		animations: {}
	};

	const calculate = (element) => 
	{
		const css = _style_rules__WEBPACK_IMPORTED_MODULE_5__["default"].computed(element);

		let selector = element.tagName.toLowerCase();
		selector += _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getSelector(element);

		for (const block of css.styles)
		{
			let sel = selector;
			if (block.type === "pseudo") sel += block.selector;

			if (code.style[sel] && code.style[sel] === block.rules)
			{
				continue;
			}
			else if (code.style[sel] && code.style[sel] !== block.rules)
			{
				let uniqueSelector = css_selector_generator__WEBPACK_IMPORTED_MODULE_0___default()(element, { root: document.body });
				if (block.type === "pseudo") uniqueSelector += block.selector;
				code.style[uniqueSelector] = block.rules;
			}
			else
			{
				code.style[sel] = block.rules; 
			}
		}

		for (const [condition, query] of Object.entries(css.media_queries))
		{
			if (!code.media_queries[condition]) code.media_queries[condition] = {};
			for (const block of query)
			{
				let sel = selector;
				if (block.type === "pseudo") sel += block.selector;

				if (code.media_queries[condition][sel] && code.media_queries[condition][sel] === block.rules)
				{
					continue;
				}
				else if (code.media_queries[condition][sel] && code.media_queries[condition][sel] !== block.rules)
				{
					let uniqueSelector = css_selector_generator__WEBPACK_IMPORTED_MODULE_0___default()(element, { root: document.body });
					if (block.type === "pseudo") uniqueSelector += block.selector;
					code.media_queries[condition][uniqueSelector] = block.rules;
				}
				else
				{
					code.media_queries[condition][sel] = block.rules; 
				}
			}
		}

		for (const [name, frames] of Object.entries(css.animations))
		{
			code.animations[name] = frames;
		}
	}

	const traverse = (element) => 
	{
		calculate(element);
		for (const child of element.children)
		{
			traverse(child);
		}
	}	

	traverse(element);

	let cssText = `body\n{\n\tbackground: #eee; /* For visibility of elements. */\n}\n\n`;

	for (const [selector, rules] of Object.entries(code.style))
	{
		cssText += `${selector} { \n`;
		for (const [property, value] of Object.entries(rules))
		{
			cssText += `\t${property}: ${value};\n`;
		}
		cssText += `}\n\n`;
	}

	for (const [animation, frames] of Object.entries(code.animations))
	{
		cssText += `@keyframes ${animation} { \n`;
		for (const [frame, rules] of Object.entries(frames))
		{
			cssText += `\t${frame} { \n`;
			for (const [property, value] of Object.entries(rules))
			{
				cssText += `\t\t${property}: ${value};\n`;
			}
			cssText += `\t}\n\n`;
		}
		cssText += "}\n\n";
	}

	for (const [condition, query] of Object.entries(code.media_queries))
	{
		cssText += `${condition} { \n`;
		for (const [selector, rules] of Object.entries(query))
		{
			cssText += `\t${selector} { \n`;
			for (const [property, value] of Object.entries(rules))
			{
				cssText += `\t\t${property}: ${value};\n`;
			}
			cssText += `\t}\n\n`;
		}
		cssText += "}\n\n";
	}

	const html = _utils_element__WEBPACK_IMPORTED_MODULE_3__["default"].getHtml(element);
	return { html, css: cssText };
}

function setVisibility(status)
{
	if (!state.enabled || !state.inspectWindow || status !== state.hidden) return;

	if (status)
	{
		state.inspectWindow.style.visibility = "visible";
		state.hidden = false;
	}
	else
	{
		state.inspectWindow.style.visibility = "hidden";
		state.hidden = true;
	}
}

function setTargetAndCreateWindow(target)
{
	state.enabled = true;
	state.inspectWindow = Object(_ui_inspectWindow__WEBPACK_IMPORTED_MODULE_2__["createInspectWindow"])(false);
	
	setTarget(target, () => 
	{
		const box = target.element.getBoundingClientRect();
		const x = box.left + box.width / 2;
		const y = box.top + box.height / 2;
		state.inspectWindow.style.left = `${x}px`;
		state.inspectWindow.style.top = `${y}px`;
		dockWindow();

		state.enabled = false;
		state.inspectWindow.remove();
		state.inspectWindow = null;
	});
}

function onClick()
{
	dockWindow();
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
	destroy,
	isEnabled,
	Modes,
	setMode,
	getMode,
	setTarget,
	onClick,
	loop,
	setVisibility,
	calculateSelectorStyle,
	dockWindow,
	setTargetAndCreateWindow
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/tools.js":
/*!****************************************************!*\
  !*** ./src/content_scripts/inspect/tools/tools.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/content_scripts/inspect/tools/style.js");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts */ "./src/content_scripts/inspect/tools/fonts.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/content_scripts/inspect/tools/edit.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./palette */ "./src/content_scripts/inspect/tools/palette.js");
/* harmony import */ var _trash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trash */ "./src/content_scripts/inspect/tools/trash.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ "./src/content_scripts/inspect/tools/search.js");
/* harmony import */ var _guidelines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guidelines */ "./src/content_scripts/inspect/tools/guidelines.js");
/* harmony import */ var _grids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grids */ "./src/content_scripts/inspect/tools/grids.js");
/* harmony import */ var _customCSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customCSS */ "./src/content_scripts/inspect/tools/customCSS.js");
/* harmony import */ var _customJS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customJS */ "./src/content_scripts/inspect/tools/customJS.js");












const primary = {
	style: _style__WEBPACK_IMPORTED_MODULE_0__["default"], 
	edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
	trash: _trash__WEBPACK_IMPORTED_MODULE_4__["default"],
	search: _search__WEBPACK_IMPORTED_MODULE_5__["default"],
	fonts: _fonts__WEBPACK_IMPORTED_MODULE_1__["default"],
	palette: _palette__WEBPACK_IMPORTED_MODULE_3__["default"],
	customCSS: _customCSS__WEBPACK_IMPORTED_MODULE_8__["default"],
	customJS: _customJS__WEBPACK_IMPORTED_MODULE_9__["default"]
};

const secondary = {
	guidelines: _guidelines__WEBPACK_IMPORTED_MODULE_6__["default"],
	grids: _grids__WEBPACK_IMPORTED_MODULE_7__["default"]
}

function initialize()
{
	primary.style.initialize();
	primary.style.enable();
}

function enable(toolName)
{
	if (primary[toolName])
	{
		const keys = Object.keys(primary);
		for (const key of keys)
		{
			const tool = primary[key];
			if (key === toolName)
			{
				if (!tool.isEnabled()) tool.enable();
			}
			else
			{
				tool.disable();
			}
		}
	}
	else
	{
		const tool = secondary[toolName];
		if (tool) tool.enable();
	}
}	

function disable(toolName)
{
	if (primary[toolName])
	{
		const tool = primary[toolName];
		if (tool.isEnabled()) tool.disable();
		primary.style.enable();
	}
	else
	{
		const tool = secondary[toolName];
		if (tool) tool.disable();
	}
}

function destroy()
{
	for (const key in primary)
	{
		primary[key].destroy();
	}

	for (const key in secondary)
	{
		const tool = secondary[key];
		if (tool.isEnabled()) tool.disable();
	}
}

function setTarget(target)
{
	for (const key in primary)
	{
		const tool = primary[key];
		if (tool.isEnabled() && tool.setTarget)
		{
			tool.setTarget(target);
		}
	}

	for (const key in secondary)
	{
		const tool = secondary[key];
		if (tool.isEnabled() && tool.setTarget)
		{
			tool.setTarget(target);
		}
	}
}

function onClick()
{
	for (const key in primary)
	{
		const tool = primary[key];
		if (tool.isEnabled() && tool.onClick)
		{
			tool.onClick();
		}
	}
}

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	destroy,
	primary,
	secondary,
	enable,
	disable,
	setTarget,
	onClick
});

/***/ }),

/***/ "./src/content_scripts/inspect/tools/trash.js":
/*!****************************************************!*\
  !*** ./src/content_scripts/inspect/tools/trash.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/svg */ "./src/utils/svg.js");
/* harmony import */ var _postMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postMessage */ "./src/content_scripts/inspect/postMessage.js");






const KEY = "trash";
const LOCATION = window.location.href;
const Modes = {
	hide: "Hide Element",
	remove: "Remove Element"
};
const state = {
	restated: false,
	enabled: false,
	toolbar_btn: null,
	win: null,
	modes: null,
	content: null,
	hide_btn: null,
	remove_btn: null,
	reset_btn: null,
	target: null,
	current_mode: Modes.hide,
	elements: [],
	minimized: false
};

function initialize(btn, win)
{
	state.toolbar_btn = btn;
	state.win = win;
	state.content = state.win.querySelector('#content');
	state.modes = state.win.querySelector('#modes');

	state.hide_btn = state.win.querySelector('#hide');
	state.hide_btn.addEventListener('click', () => 
	{
		setMode(Modes.hide);
	});

	state.remove_btn = state.win.querySelector('#remove');
	state.remove_btn.addEventListener('click', () => 
	{
		setMode(Modes.remove);
	});

	const minMaxBtn = state.win.querySelector("#trash_minimize");
	minMaxBtn.addEventListener('click', () => 
	{
		state.minimized = !state.minimized;
		if (!state.minimized)
		{
			state.content.style.display = "block";
			state.modes.style.display = "flex";
			minMaxBtn.innerHTML = _utils_svg__WEBPACK_IMPORTED_MODULE_2__["default"].minus;
		}
		else
		{
			state.content.style.display = "none";
			state.modes.style.display = "none";
			minMaxBtn.innerHTML = _utils_svg__WEBPACK_IMPORTED_MODULE_2__["default"].maximize;
		}
	});

	state.reset_btn = state.win.querySelector("#trash_reset");
	state.reset_btn.style.display = "none";
	state.reset_btn.addEventListener('click', () => 
	{
		reset();
	});

	if (state.elements.length) state.reset_btn.style.display = "flex";
	for (let i = 0; i < state.elements.length; i++)
	{
		const target = state.elements[i];
		let selector = "", tagName = "";
		if (target.iframe)
		{
			selector = target.iframe.selector;
			tagName = target.iframe.tag_name;
		}
		else
		{
			selector = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].getSelector(target.element);
			tagName = target.element.tagName.toLowerCase();
		}

		const li = createUi(tagName, selector, target.mode, target.iframe);
		const removeBtn = li.querySelector("svg");
		removeBtn.addEventListener('click', () => removeFromElements(target.index, true));
		target.li = li;

		if (i === 0)
		{
			state.content.appendChild(target.li);
		}
		else
		{
			const firstChild = state.elements[i-1].li;
			state.content.insertBefore(target.li, firstChild);
		}
	}
}

function enable()
{
	state.enabled = true;
	state.toolbar_btn.classList.add('active');
	state.win.style.display = "block";
}

function disable()
{
	state.enabled = false;
	state.toolbar_btn.classList.remove('active');
	state.win.style.display = "none";
}

function destroy()
{
	state.minimized = false;
	disable();
}

function isEnabled()
{
	return state.enabled;
}

function setTarget(target)
{
	state.target = target;
	if (state.target.element === state.element)
	{
		state.target.mark.remove();
	}
}

function onClick()
{
	const element = state.target.element;
	if (element.tagName.toLowerCase() !== "body" && element.tagName.toLowerCase() !== "html")
	{
		state.target.mark.remove();
		addToElements(element, state.current_mode, null);
	}
}	

function createUi(tagName, selector, mode, isFrame)
{
	const li = document.createElement('li');
	li.innerHTML = `
		<div class="tag-info">
            <h4>${tagName}</h4>
            <p>${selector}</p>
            <span>${(mode === Modes.hide ? "Hidden" : "Removed") + (isFrame ? " | IFrame" : "") }</span>
        </div>
        ${_utils_svg__WEBPACK_IMPORTED_MODULE_2__["default"].minusSquare}
	`;

	return li;
}

function addToElements(element, mode, iframe)
{
	state.reset_btn.style.display = "flex";

	let tagName = "", selector = "", uniqueSelector = "";
	const target = { 
		element, 
		mode: mode,
		index: state.elements.length
	};

	if (iframe)
	{
		tagName = iframe.tag_name;
		selector = iframe.selector;
		uniqueSelector = iframe.unique_selector;
		target.iframe = iframe;
	}
	else
	{
		tagName = element.tagName.toLowerCase();
		selector = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].getSelector(element);
		uniqueSelector = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].getUniqueSelector(element);

		if (mode === Modes.hide)
		{
			element.style.visibility = "hidden";
		}
		else
		{
			target.display = window.getComputedStyle(element).getPropertyValue('display');
			element.style.display = "none";
		}

		if (window !== window.parent)
		{
			Object(_postMessage__WEBPACK_IMPORTED_MODULE_3__["default"])({ 
				action: "hv.trash.addToElements",
				tag_name: tagName, 
				selector: selector, 
				unique_selector: uniqueSelector, 
				href: window.location.href,
				display: target.display
			});
			return;
		}
	}

	const li = createUi(tagName, selector, mode, iframe);
	const removeBtn = li.querySelector("svg");
	removeBtn.addEventListener('click', () => removeFromElements(target.index, true));
	target.li = li;

	const firstChild = state.elements.length ? state.elements[state.elements.length - 1].li : null;
	state.content.insertBefore(target.li, firstChild);

	state.elements.push(target);
}

function hideElement(uniqueSelector, mode, href)
{
	if (window !== window.parent && window.location.href === href)
	{
		const element = document.body.querySelector(uniqueSelector);
		if (element)
		{
			const tagName = element.tagName.toLowerCase();
			const selector = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].getSelector(element);
			let display = "";
			if (mode === Modes.hide)
			{
				element.style.visibility = "hidden";
			}
			else
			{
				display = window.getComputedStyle(element).getPropertyValue('display');
				element.style.display = "none";
			}
		}
	}
}

function removeFromElements(index, doRemoveFromState)
{
	for (let i=0; i < state.elements.length; i++)
	{
		const target = state.elements[i]; 
		if (target.index === index) 
		{
			let uniqueSelector = "";
			if (target.iframe)
			{
				uniqueSelector = target.iframe.unique_selector;
				Object(_postMessage__WEBPACK_IMPORTED_MODULE_3__["default"])({ 
					action: "hv.trash.showElement",
					unique_selector: uniqueSelector,
					mode: target.mode, 
					display: target.iframe.display, 
					href: target.iframe.href 
				});
			}
			else
			{
				uniqueSelector = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].getUniqueSelector(target.element);
				if (target.mode === Modes.hide) target.element.style.visibility = "visible";
				else target.element.style.display = target.display;
			}

			target.li.remove();
			state.elements.splice(i, 1);
		}
	}

	if (state.elements.length === 0) state.reset_btn.style.display = "none";
}

function showElement(uniqueSelector, mode, display, href)
{
	if (window !== window.parent && window.location.href === href)
	{
		const element = document.body.querySelector(uniqueSelector);
		if (element)
		{
			if (mode === Modes.hide) element.style.visibility = "visible";
			else element.style.display = display;
		}
	}
}

function getMode() { return state.current_mode; }

function setMode(mode)
{
	if (state.current_mode === mode) return;

	state.current_mode = mode;
	if (mode === Modes.hide)
	{
		state.hide_btn.classList.add("active");
		state.remove_btn.classList.remove("active");
	}
	else
	{
		state.hide_btn.classList.remove("active");
		state.remove_btn.classList.add("active");
	}

	if (window === window.parent) Object(_postMessage__WEBPACK_IMPORTED_MODULE_3__["default"])({ action: "hv.trash.setMode", mode });
}

async function reset()
{
	const indexes = state.elements.map(item => item.index);
	for (const index of indexes)
	{
		removeFromElements(index, false);
	}

	let elState = {};
	try 
	{
		const savedState = await _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(KEY);
		if (savedState) elState = savedState;
	}
	catch (err) {}

	elState[LOCATION] = [];
	
	const data = {};
	data[KEY] = elState;
	await _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"].set(data);
	const savedState = await _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(KEY);

	state.elements = [];
	state.reset_btn.style.display = "none";
}

// async function addToState(selector, mode, iframe)
// {
// 	if (!settings.get().inspector.trash_persist_changes) return; 

// 	let elState = {};
// 	try 
// 	{
// 		const savedState = await store.get(KEY);
// 		if (savedState) elState = savedState;
// 	}
// 	catch (err) {}

// 	if (!elState[LOCATION]) elState[LOCATION] = [];
// 	elState[LOCATION].push({ selector, mode, iframe });

// 	const data = {};
// 	data[KEY] = elState;
// 	await store.set(data);
// }

// async function removeFromState(selector)
// {
// 	let elState = {};
// 	try 
// 	{
// 		const savedState = await store.get(KEY);
// 		if (savedState) elState = savedState;
// 	}
// 	catch (err) {}

// 	if (elState[LOCATION])
// 	{
// 		for (let i=0; i < elState[LOCATION].length; i++)
// 		{
// 			if (elState[LOCATION][i].selector === selector)
// 			{
// 				elState[LOCATION].splice(i, 1);
// 				break;
// 			}
// 		}

// 		const data = {};
// 		data[KEY] = elState;
// 		await store.set(data);
// 		const savedState = await store.get(KEY);
// 	}
// }

// async function restate()
// {
// 	if (!settings.get().inspector.trash_persist_changes || window !== window.parent || state.restated) return; 
// 	state.restated = true;

// 	const result = await store.get(KEY);
// 	const savedElements = result[LOCATION];
// 	const hideElements = async () =>
// 	{
// 		if (result && savedElements)
// 		{
// 			for (let i = 0; i < savedElements.length; i++)
// 			{
// 				const el = savedElements[i];
// 				const target = { 
// 					element: null, 
// 					mode: el.mode,
// 					index: state.elements.length
// 				};

// 				if (el.iframe)
// 				{
// 					target.iframe = el.iframe;
// 					postMessage({ 
// 						action: "hv.trash.hideElement",
// 						unique_selector: el.selector,
// 						mode: target.mode, 
// 						display: target.iframe.display, 
// 						href: target.iframe.href 
// 					});
// 					if (!el.done) state.elements.push(target);
// 					el.done = true;
// 				}
// 				else
// 				{
// 					target.element = document.querySelector(el.selector);
// 					if (target.element && !el.done)
// 					{
// 						if (target.mode === Modes.hide)
// 						{
// 							target.element.style.visibility = "hidden";
// 						}
// 						else
// 						{
// 							target.display = window.getComputedStyle(target.element).getPropertyValue('display');
// 							target.element.style.display = "none";
// 						}

// 						el.done = true;
// 						state.elements.push(target);
// 					} 
// 				}
// 			}
// 		}
// 	}

// 	hideElements();
// 	setTimeout(async () => 
// 	{
// 		hideElements();
// 	}, 2000);
// }

/* harmony default export */ __webpack_exports__["default"] = ({
	initialize,
	enable,
	disable,
	isEnabled,
	destroy,
	setTarget,
	onClick,
	addToElements,
	showElement,
	hideElement,
	getMode,
	setMode
});

/***/ }),

/***/ "./src/content_scripts/inspect/ui/inspectWindow.js":
/*!*********************************************************!*\
  !*** ./src/content_scripts/inspect/ui/inspectWindow.js ***!
  \*********************************************************/
/*! exports provided: createInspectWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInspectWindow", function() { return createInspectWindow; });
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/svg */ "./src/utils/svg.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");




function createInspectWindow(isDocked)
{	
	const hvInspectWindow = document.createElement('hv-inspect-window');
	const shadow = hvInspectWindow.attachShadow({ mode: 'open' });

	const inspectWindow = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="inspect-window" dir="ltr"></div>`);
	
	let actions = '';
	let help = '';
	if (isDocked)
	{
		hvInspectWindow.style.position = "absolute";
		inspectWindow.style.position = "absolute";
		actions = `<ul id="actions">
				<li class="action" id="download"><a href="">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].download}</a></li>
				<li class="action" id="reset">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].rotate}</li>
				<li class="action" id="codepen">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].codepen}</li>
				<li class="action" id="copy">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].copy} </li>
				<li class="action" id="close">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}</li>
			</ul>
		`;
	}
	else
	{
		inspectWindow.style.pointerEvents = "none";
		help = `
			<div class="help">
				${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].info}
				Left click or press space to dock window.
			</div>
		`;
	}

	inspectWindow.innerHTML = `
		<div id="header">
			<div id="meta">
		        <h1 id='tagname'></h1>
		        <ul id="dimensions">
		        	<li>
		        		${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].arrowHorizontal}	            
		            	<span id="width"></span>
		        	</li>
		        	<li>
			        	${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].arrowVertical}
			            <span id="height" style="margin-left: 0px;"></span>
		        	</li>	
					<li id="media_size" style="margin-left: 4px;">
		            	${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].downloadCloud}
		            	<span></span>
					</li>
		        </ul>
			</div>
	        <div class="space"></div>
	        ${actions}
	    </div>

	    <div id="scroll">
        </div>

        <form action="https://codepen.io/pen/define" method="POST" target="_blank">
			<input id="codepen_value" type="hidden" name="data">
			<input id="codepen_open" type="submit">
		</form>
		${help}
	`;

	if (isDocked)
	{
		const copyDropdown = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<div class="dropdown" style="width: 160px;"></div>`);
		copyDropdown.innerHTML = `
			<ul>
				<li id="copy_code">Copy code</li>
				<li id="copy_changes">Copy changes</li>
				<li id="copy_selector">Copy selector</li>
				<li id="copy_unique_selector">Copy unique selector</li>
			</ul>
		`;
		inspectWindow.querySelector("#copy").appendChild(copyDropdown);
	}
	
	shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/global.css')}" rel="stylesheet" type="text/css">`));
	shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/inspect/inspectWindow.css')}" rel="stylesheet" type="text/css">`));
	shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/inspect/visualEditor.css')}" rel="stylesheet" type="text/css">`));
	shadow.appendChild(inspectWindow);
	document.body.appendChild(hvInspectWindow);

	return inspectWindow;
}



/***/ }),

/***/ "./src/content_scripts/inspect/ui/toolbar.js":
/*!***************************************************!*\
  !*** ./src/content_scripts/inspect/ui/toolbar.js ***!
  \***************************************************/
/*! exports provided: createToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToolbar", function() { return createToolbar; });
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/svg */ "./src/utils/svg.js");
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/element */ "./src/utils/element.js");




function createToolbar()
{
	const hvToolbar = document.createElement('hv-toolbar');
	const shadow = hvToolbar.attachShadow({ mode: 'open' });
    hvToolbar.style.position = "fixed";
    hvToolbar.style.zIndex = "500000000";

    const ul = _utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`
        <ul class="toolbar no-select" dir="ltr">
            <li id='play' class='tool hbr-top-left hbr-bottom-left'>     
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].pause}
            </li>
            
            <li id='guidelines' class="tool">     
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].hash}
            </li>
            <li id='grids' class="tool">     
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].grid}
            </li>
            <li id='fonts' class="tool">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].bold}
            </li>
            <li id='edit' class="tool">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].edit}
            </li>
            <li id='palette' class="tool">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].drop}
            </li>
            <li id='trash' class="tool">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].trash}
            </li>
            <li id='search' class="tool">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].search}
            </li>
            <li id='custom_css' class="tool">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].layout}
            </li>
            <li id='custom_js' class="tool">
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].code}
            </li>
            <li id="space" class='space'></li>
            <li id='close' class='tool hbr-top-right hbr-bottom-right' >     
                ${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}
            </li>

            <li class="window-container">
                <div id="trash_window" class="window">
                    <ul class="header">
                        <li class="title">Hide/Remove Elements</li>
                        <li id="trash_reset">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].rotate}</li>
                        <li id="trash_minimize">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].minus}</li>
                        <li id="trash_close">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}</li>
                    </ul>
                    <ul id="modes">
                        <li id="hide" class="active">Hide</li>
                        <li id="remove">Remove</li>
                    </ul>
                    <ul id="content">
                    </ul>
                </div>
            </li>

            <li class="window-container">
                <div id="search_window" class="window">
                    <ul class="header">
                        <li class="title">Search</li>
                        <li id="search_reset">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].rotate}</li>
                        <li id="search_close">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}</li>
                    </ul>
                    <div class="content">
                        <input type="text" placeholder="Search by #id, .class, tag" spellcheck="false"/>

                        <span id="message">No element found</span>
                    </div>
                    <ul id="elements"></ul>
                </div>
            </li>

            <li class="window-container">
                <div id="fonts_window" class="window">
                    <ul class="header">
                        <li class="title">Fonts</li>
                        <li id="fonts_reset">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].rotate}</li>
                        <li id="fonts_close">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}</li>
                    </ul>
                    <ul id="content">
                    </ul>
                </div>
            </li>

            <li class="window-container">
                <div id="palette_window" class="window">
                    <ul class="header">
                        <li class="title">Color Palette</li>
                        <li id="palette_reset">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].rotate}</li>
                        <li id="palette_close">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}</li>
                    </ul>
                    <ul id="content">
                    </ul>
                </div>
            </li>

            <li class="window-container">
                <div id="custom_css_window" class="window code_window">
                    <ul class="header">
                        <li class="title">Custom CSS</li>
                        <li id="custom_css_reset">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].rotate}</li>
                        <li id="custom_css_close">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}</li>
                    </ul>
                    <div id="content">
                        <textarea class="code" id="custom_css_code"></textarea>
                    </div>
                </div>
            </li>

            <li class="window-container">
                <div id="custom_js_window" class="window code_window">
                    <ul class="header">
                        <li class="title">Custom Javascript</li>
                        <li id="custom_js_run">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].play}</li>
                        <li id="custom_js_reset">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].rotate}</li>
                        <li id="custom_js_close">${_utils_svg__WEBPACK_IMPORTED_MODULE_0__["default"].x}</li>
                        </ul>
                    <div id="content">
                        <textarea class="code" id="custom_js_code"></textarea>
                    </div>
                </div>
            </li>
        </ul>
    `);

    shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/global.css')}" rel="stylesheet" type="text/css">`));
	shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/inspect/toolbar.css')}" rel="stylesheet" type="text/css"> `));
    shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('vendors/codemirror/lib/codemirror.css')}" rel="stylesheet" type="text/css"> `));
    shadow.appendChild(_utils_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/codemirror-theme.css')}" rel="stylesheet" type="text/css"> `));
	shadow.appendChild(ul);
	if (window === window.parent) document.body.appendChild(hvToolbar);

	return ul;
}



/***/ }),

/***/ "./src/content_scripts/screenshot/screenshot.js":
/*!******************************************************!*\
  !*** ./src/content_scripts/screenshot/screenshot.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/msg */ "./src/utils/msg.js");
/* harmony import */ var _utils_globalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/globalStyles */ "./src/utils/globalStyles.js");




const CAPTURE_DELAY = 300;
const CLEAN_UP_DELAY = 2000;
const SCROLL_PAD = 200;
const state = {
	original_x: 0,
	original_y: 0,
	arrangements: [],
	num_arrangements: 0,
	clean_up_timeout: null,
	stickies: [],
	fixed: [],
    style: null
};

function prepare()
{
	document.querySelector("head").appendChild(_utils_globalStyles__WEBPACK_IMPORTED_MODULE_1__["hideScrollbarLink"]);
    state.style = document.createElement('style');
    state.style.innerHTML = `
        html { 
            scroll-behavior: auto !important; 
        } 
        * { 
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            transition: none !important;
            animation-duration: 0s !important;
        }
    `;
    document.body.appendChild(state.style);
}

function reset()
{
	_utils_globalStyles__WEBPACK_IMPORTED_MODULE_1__["hideScrollbarLink"].remove();
    state.style.remove();
    state.style = null;
}

function prepareFullPage()
{
	prepare();

	for (const element of document.querySelectorAll("body *"))
	{
		const position = window.getComputedStyle(element).getPropertyValue("position");
		if (position.includes("sticky"))
		{
			let style = element.getAttribute("style");
			if (!style) style = "";
			state.stickies.push({ element, style });
			element.setAttribute("style", `position: relative !important; inset: auto !important; top: 0px; ${style}`);
		}

        element.scrollTop = 0;
	}

	state.original_x = window.scrollX;
	state.original_y = window.scrollY;
    state.arrangements = [];
    state.num_arrangements = 0;
	state.page_height = Math.max(
        document.body.scrollHeight || 0, 
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0, 
        document.documentElement.offsetHeight || 0,
        document.body.clientHeight || 0, 
        document.documentElement.clientHeight || 0
    );
    state.page_width = Math.max(
        document.body.scrollWidth || 0, 
        document.documentElement.scrollWidth || 0,
        document.body.offsetWidth || 0, 
        document.documentElement.offsetWidth || 0,
        document.body.clientWidth || 0, 
        document.documentElement.clientWidth || 0
    );

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    const yDelta = windowHeight - (windowHeight > SCROLL_PAD ? SCROLL_PAD : 0);
    let yPos = 0;
    while (yPos < state.page_height) 
    {
    	if (state.page_height - yPos < windowHeight)
		{
			state.arrangements.push([0, state.page_height - windowHeight]);
			break;
		}

		state.arrangements.push([0, yPos]);
        yPos += yDelta;
    }

    state.num_arrangements = state.arrangements.length;

    processArrangements();
}

function cleanUp() 
{
    reset();
    window.scrollTo(state.original_x, state.original_y);

    for (const sticky of state.stickies) { sticky.element.setAttribute("style", sticky.style); }
	state.stickies = [];

	for (const fix of state.fixed) { fix.element.setAttribute("style", fix.style); }
	state.fixed = [];
} 

function processArrangements()
{
	if (!state.arrangements.length) 
	{
        cleanUp();
        return;
    }

    const next = state.arrangements.shift();
	const x = next[0], y = next[1];
    window.scrollTo(x, y);

    var data = {
        x: window.scrollX,
        y: window.scrollY,
        complete: (state.num_arrangements - state.arrangements.length) / state.num_arrangements,
        window_width: window.innerWidth,
        total_width: state.page_width,
        total_height: state.page_height,
        pixel_ratio: window.devicePixelRatio
    };

    window.setTimeout(() => 
    {
        // Hide elements with position fixed;
        if (state.arrangements.length !== state.num_arrangements - 1)
        {
            for (const element of document.querySelectorAll("body *"))
            {
                const styles = window.getComputedStyle(element);
                if (styles.getPropertyValue("position").includes("fixed"))
                {
                    const boundingBox = element.getBoundingClientRect();
                    if (window.innerHeight - boundingBox.top > SCROLL_PAD)
                    {
                        let style = element.getAttribute("style");
                        if (style) style = style.trim();
                        if (style)
                        {
                            if (!style.endsWith(";")) style = style+";" 
                        }
                        else style = style = "";
                        state.fixed.push({ element, style });
                        element.setAttribute("style", `${style} position: absolute !important;`);
                    }
                }
            }
        }

        capture(data);
    }, CAPTURE_DELAY / 2);
}

function capture(data)
{
    window.setTimeout(() => 
    {
        state.clean_up_timeout = window.setTimeout(cleanUp, CLEAN_UP_DELAY);
        _utils_msg__WEBPACK_IMPORTED_MODULE_0__["default"].sendMessage('screenshot.captureFragment', { data });
    }, CAPTURE_DELAY);
}

function proceedCapture()
{
	window.clearTimeout(state.clean_up_timeout);
    processArrangements();
}

/* harmony default export */ __webpack_exports__["default"] = ({
	prepare,
	reset,
	prepareFullPage,
	proceedCapture
});

/***/ }),

/***/ "./src/content_scripts/settings.js":
/*!*****************************************!*\
  !*** ./src/content_scripts/settings.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


let settings = {};

function set(newSettings)
{
	settings = newSettings;
}

function get()
{
	return settings;
}

/* harmony default export */ __webpack_exports__["default"] = ({
	set, get
});

/***/ }),

/***/ "./src/utils/colors.js":
/*!*****************************!*\
  !*** ./src/utils/colors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var colors = {
    "aliceblue":"#f0f8ff",
    "antiquewhite":"#faebd7",
    "aqua":"#00ffff",
    "aquamarine":"#7fffd4",
    "azure":"#f0ffff",
    "beige":"#f5f5dc",
    "bisque":"#ffe4c4",
    "black":"#000000",
    "blanchedalmond":"#ffebcd",
    "blue":"#0000ff",
    "blueviolet":"#8a2be2",
    "brown":"#a52a2a",
    "burlywood":"#deb887",
    "cadetblue":"#5f9ea0",
    "chartreuse":"#7fff00",
    "chocolate":"#d2691e",
    "coral":"#ff7f50",
    "cornflowerblue":"#6495ed",
    "cornsilk":"#fff8dc",
    "crimson":"#dc143c",
    "cyan":"#00ffff",
    "darkblue":"#00008b",
    "darkcyan":"#008b8b",
    "darkgoldenrod":"#b8860b",
    "darkgray":"#a9a9a9",
    "darkgreen":"#006400",
    "darkkhaki":"#bdb76b",
    "darkmagenta":"#8b008b",
    "darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00",
    "darkorchid":"#9932cc",
    "darkred":"#8b0000",
    "darksalmon":"#e9967a",
    "darkseagreen":"#8fbc8f",
    "darkslateblue":"#483d8b",
    "darkslategray":"#2f4f4f",
    "darkturquoise":"#00ced1",
    "darkviolet":"#9400d3",
    "deeppink":"#ff1493",
    "deepskyblue":"#00bfff",
    "dimgray":"#696969",
    "dodgerblue":"#1e90ff",
    "firebrick":"#b22222",
    "floralwhite":"#fffaf0",
    "forestgreen":"#228b22",
    "fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc",
    "ghostwhite":"#f8f8ff",
    "gold":"#ffd700",
    "goldenrod":"#daa520",
    "gray":"#808080",
    "green":"#008000",
    "greenyellow":"#adff2f",
    "honeydew":"#f0fff0",
    "hotpink":"#ff69b4",
    "indianred ":"#cd5c5c",
    "indigo":"#4b0082",
    "ivory":"#fffff0",
    "khaki":"#f0e68c",
    "lavender":"#e6e6fa",
    "lavenderblush":"#fff0f5",
    "lawngreen":"#7cfc00",
    "lemonchiffon":"#fffacd",
    "lightblue":"#add8e6",
    "lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4", "teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

function findIn(value)
{
	let status = null;
	for (const [name, hex] of Object.entries(colors))
	{
		if (value.includes(name))
		{
			status = name;
			break;
		}
	}

	return status;
}

function convertNameToHex(name)
{
	if (!name) return null;
	const colorName = name.toLowerCase();
	return colors[colorName];
}

/* harmony default export */ __webpack_exports__["default"] = ({ 
	all: colors,
	findIn,
	convertNameToHex
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

/***/ }),

/***/ "./src/utils/fonts.js":
/*!****************************!*\
  !*** ./src/utils/fonts.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const googleFonts = [
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Noto Sans JP",
    "Source Sans Pro",
    "Roboto Condensed",
    "Oswald",
    "Raleway",
    "Roboto Mono",
    "Poppins",
    "Noto Sans",
    "Roboto Slab",
    "Merriweather",
    "PT Sans",
    "Ubuntu",
    "Playfair Display",
    "Muli",
    "Open Sans Condensed",
    "Lora",
    "PT Serif",
    "Nunito",
    "Work Sans",
    "Rubik",
    "Titillium Web",
    "Noto Serif",
    "Quicksand",
    "Fira Sans",
    "Mukta",
    "Nunito Sans",
    "Nanum Gothic",
    "Noto Sans KR",
    "Heebo",
    "PT Sans Narrow",
    "Noto Sans TC",
    "Arimo",
    "Slabo 27px",
    "Barlow",
    "Oxygen",
    "Dosis",
    "Inconsolata",
    "Josefin Sans",
    "Crimson Text",
    "Libre Baskerville",
    "Libre Franklin",
    "Bitter",
    "Karla",
    "Cabin",
    "Anton",
    "Source Code Pro",
    "Hind",
    "Fjalla One",
    "Dancing Script",
    "Lobster",
    "Abel",
    "Hind Siliguri",
    "Indie Flower",
    "Pacifico",
    "Varela Round",
    "Merriweather Sans",
    "Arvo",
    "Exo 2",
    "Amiri",
    "Source Serif Pro",
    "Righteous",
    "Shadows Into Light",
    "Cairo",
    "Overpass",
    "Kanit",
    "Barlow Condensed",
    "IBM Plex Sans",
    "Comfortaa",
    "Questrial",
    "Catamaran",
    "Prompt",
    "Yanone Kaffeesatz",
    "Acme",
    "Asap",
    "Amatic SC",
    "Abril Fatface",
    "Archivo Narrow",
    "EB Garamond",
    "Bree Serif",
    "Martel",
    "Hind Madurai",
    "Noto Sans SC",
    "Zilla Slab",
    "Play",
    "Exo",
    "Maven Pro",
    "Cormorant Garamond",
    "Teko",
    "Domine",
    "Rajdhani",
    "Signika",
    "Patua One",
    "Fira Sans Condensed",
    "Fredoka One",
    "Permanent Marker",
    "Caveat",
    "PT Sans Caption",
    "IBM Plex Serif",
    "Assistant",
    "Ubuntu Condensed",
    "Crete Round",
    "Vollkorn",
    "ABeeZee",
    "Tajawal",
    "Satisfy",
    "Patrick Hand",
    "Monda",
    "Francois One",
    "Noticia Text",
    "Alegreya",
    "Cinzel",
    "Barlow Semi Condensed",
    "Alegreya Sans",
    "Courgette",
    "Alfa Slab One",
    "Rokkitt",
    "Cuprum",
    "Passion One",
    "Tinos",
    "Kalam",
    "Great Vibes",
    "Kaushan Script",
    "Cardo",
    "Luckiest Guy",
    "Lobster Two",
    "Frank Ruhl Libre",
    "Didact Gothic",
    "Noto Serif JP",
    "Pathway Gothic One",
    "News Cycle",
    "Archivo",
    "Russo One",
    "Nanum Myeongjo",
    "Concert One",
    "Archivo Black",
    "Sacramento",
    "Volkhov",
    "Bebas Neue",
    "Quattrocento Sans",
    "Gloria Hallelujah",
    "Special Elite",
    "Hind Vadodara",
    "Parisienne",
    "DM Sans",
    "Istok Web",
    "Ropa Sans",
    "Old Standard TT",
    "Cantarell",
    "Playfair Display SC",
    "Montserrat Alternates",
    "Yantramanav",
    "Taviraj",
    "Advent Pro",
    "Prata",
    "Changa",
    "M PLUS 1p",
    "Fira Sans Extra Condensed",
    "Orbitron",
    "Vidaloka",
    "Lilita One",
    "Economica",
    "Cookie",
    "Poiret One",
    "Philosopher",
    "Hind Guntur",
    "Chivo",
    "Baloo 2",
    "Sriracha",
    "Sarabun",
    "Josefin Slab",
    "PT Mono",
    "Quattrocento",
    "Neuton",
    "Squada One",
    "Lemonada",
    "Bangers",
    "BenchNine",
    "Handlee",
    "Inter",
    "Staatliches",
    "Lalezar",
    "Sawarabi Mincho",
    "Sanchez",
    "Asap Condensed",
    "Sigmar One",
    "Ultra",
    "Markazi Text",
    "Ruda",
    "Damion",
    "Press Start 2P",
    "Hammersmith One",
    "Gudea",
    "Alice",
    "M PLUS Rounded 1c",
    "Monoton",
    "Gentium Basic",
    "Arapey",
    "Marck Script",
    "Neucha",
    "Unica One",
    "Paytone One",
    "Architects Daughter",
    "Yellowtail",
    "Pontano Sans",
    "Homemade Apple",
    "Enriqueta",
    "Audiowide",
    "Bad Script",
    "Mitr",
    "Spectral",
    "Cabin Condensed",
    "Jaldi",
    "Pragati Narrow",
    "Kreon",
    "Basic",
    "Adamina",
    "Khand",
    "Electrolize",
    "Actor",
    "Merienda",
    "Amaranth",
    "Tangerine",
    "Gochi Hand",
    "DM Serif Text",
    "Candal",
    "Black Han Sans",
    "Gentium Book Basic",
    "Rock Salt",
    "Coda",
    "Cormorant",
    "Julius Sans One",
    "Oleo Script",
    "Karma",
    "Nanum Gothic Coding",
    "Ramabhadra",
    "Allura",
    "Gothic A1",
    "Abhaya Libre",
    "El Messiri",
    "Varela",
    "Viga",
    "Coda Caption",
    "Carter One",
    "Signika Negative",
    "Sarala",
    "Saira",
    "Playball",
    "Rambla",
    "Lusitana",
    "Shadows Into Light Two",
    "Saira Condensed",
    "Sawarabi Gothic",
    "Fugaz One",
    "Yrsa",
    "Unna",
    "Cantata One",
    "Sorts Mill Goudy",
    "Yeseva One",
    "Chewy",
    "Jura",
    "Average",
    "Armata",
    "Quantico",
    "Allan",
    "Chakra Petch",
    "Pangolin",
    "Merienda One",
    "Encode Sans",
    "Cedarville Cursive",
    "Covered By Your Grace",
    "Bowlby One SC",
    "Sintony",
    "Fauna One",
    "Alex Brush",
    "Ubuntu Mono",
    "Pridi",
    "Pinyon Script",
    "Spinnaker",
    "Khula",
    "IBM Plex Mono",
    "ZCOOL XiaoWei",
    "Scada",
    "Glegoo",
    "Aclonica",
    "Alef",
    "Mr Dafoe",
    "Lateef",
    "Marcellus",
    "Palanquin",
    "PT Serif Caption",
    "Arsenal",
    "Kelly Slab",
    "Noto Sans HK",
    "Nothing You Could Do",
    "Spartan",
    "Nanum Pen Script",
    "Black Ops One",
    "Fondamento",
    "Caveat Brush",
    "Bai Jamjuree",
    "Cousine",
    "Overlock",
    "Antic Slab",
    "Knewave",
    "Alegreya Sans SC",
    "Rubik Mono One",
    "Share",
    "Boogaloo",
    "Galada",
    "Miriam Libre",
    "Forum",
    "Montserrat Subrayada",
    "Reem Kufi",
    "Fira Mono",
    "Scheherazade",
    "Capriola",
    "Rufina",
    "Anonymous Pro",
    "Gelasio",
    "Rancho",
    "Fredericka the Great",
    "Marcellus SC",
    "Bevan",
    "Martel Sans",
    "Overpass Mono",
    "Tenor Sans",
    "Encode Sans Condensed",
    "Michroma",
    "Mali",
    "Noto Serif SC",
    "Space Mono",
    "VT323",
    "Do Hyeon",
    "Cabin Sketch",
    "Shrikhand",
    "Annie Use Your Telescope",
    "Reenie Beanie",
    "Berkshire Swash",
    "Itim",
    "Gruppo",
    "Modak",
    "Saira Semi Condensed",
    "Aldrich",
    "Antic",
    "Cinzel Decorative",
    "Arima Madurai",
    "Share Tech Mono",
    "Hanuman",
    "Coustard",
    "Arbutus Slab",
    "Just Another Hand",
    "Italianno",
    "DM Serif Display",
    "Krub",
    "Leckerli One",
    "Saira Extra Condensed",
    "Yesteryear",
    "Six Caps",
    "Marmelad",
    "Racing Sans One",
    "Days One",
    "Niconne",
    "Halant",
    "Mada",
    "Mukta Malar",
    "Allerta",
    "Londrina Solid",
    "Suez One",
    "Pattaya",
    "Kosugi Maru",
    "Rasa",
    "Bungee",
    "Molengo",
    "Bentham",
    "Coming Soon",
    "Syncopate",
    "Allerta Stencil",
    "Biryani",
    "Norican",
    "Cambo",
    "Eczar",
    "Trirong",
    "Mallanna",
    "Aleo",
    "Mrs Saint Delafield",
    "Caudex",
    "Nobile",
    "Noto Serif TC",
    "Slabo 13px",
    "Changa One",
    "Magra",
    "Grand Hotel",
    "Judson",
    "Average Sans",
    "Telex",
    "Kameron",
    "Copse",
    "Contrail One",
    "Rochester",
    "Geo",
    "IM Fell Double Pica",
    "Kadwa",
    "Alegreya SC",
    "Sunflower",
    "Bungee Inline",
    "Arizonia",
    "Aladin",
    "Cutive Mono",
    "Buenard",
    "Lustria",
    "Oranienbaum",
    "Red Hat Display",
    "Raleway Dots",
    "Suranna",
    "Jockey One",
    "IBM Plex Sans Condensed",
    "Bubblegum Sans",
    "Graduate",
    "Titan One",
    "Lexend Deca",
    "Bowlby One",
    "Amethysta",
    "Petit Formal Script",
    "Rozha One",
    "Nanum Brush Script",
    "Love Ya Like A Sister",
    "Delius",
    "Maitree",
    "Baloo Chettan 2",
    "Carrois Gothic",
    "Cambay",
    "Marvel",
    "Ovo",
    "Public Sans",
    "Schoolbell",
    "Ceviche One",
    "Rye",
    "Sofia",
    "Gurajada",
    "Radley",
    "Carme",
    "Lemon",
    "Amiko",
    "Secular One",
    "Freckle Face",
    "Nixie One",
    "Rakkas",
    "Trocchi",
    "Herr Von Muellerhoff",
    "Gilda Display",
    "Voltaire",
    "Oxygen Mono",
    "Palanquin Dark",
    "Averia Serif Libre",
    "Chonburi",
    "Duru Sans",
    "Mukta Vaani",
    "Frijole",
    "Kristi",
    "Rosario",
    "Almarai",
    "Sansita",
    "Belgrano",
    "GFS Didot",
    "Krona One",
    "Federo",
    "Mr De Haviland",
    "Noto Serif KR",
    "Calligraffitti",
    "Emilys Candy",
    "Metrophobic",
    "Faustina",
    "Cutive",
    "Mountains of Christmas",
    "Mate",
    "Seaweed Script",
    "Belleza",
    "Libre Caslon Text",
    "Cormorant Infant",
    "McLaren",
    "Goudy Bookletter 1911",
    "Sue Ellen Francisco",
    "Poly",
    "Pompiere",
    "Megrim",
    "IM Fell English",
    "Chelsea Market",
    "Harmattan",
    "Vast Shadow",
    "Literata",
    "Unkempt",
    "UnifrakturMaguntia",
    "Antic Didone",
    "Athiti",
    "Fresca",
    "Wallpoet",
    "Lekton",
    "Red Hat Text",
    "Gabriela",
    "Proza Libre",
    "Baumans",
    "Jua",
    "Montez",
    "Mirza",
    "Amita",
    "Fanwood Text",
    "Inder",
    "IM Fell DW Pica",
    "Rammetto One",
    "Alike",
    "Corben",
    "Quando",
    "Sniglet",
    "Anaheim",
    "Gravitas One",
    "Niramit",
    "Andada",
    "Vesper Libre",
    "Convergence",
    "Sedgwick Ave",
    "Share Tech",
    "Gugi",
    "Doppio One",
    "Cantora One",
    "Alike Angular",
    "Timmana",
    "Oleo Script Swash Caps",
    "Esteban",
    "Homenaje",
    "Cormorant SC",
    "K2D",
    "La Belle Aurore",
    "Faster One",
    "Patrick Hand SC",
    "Crafty Girls",
    "Numans",
    "Kurale",
    "Limelight",
    "Stardos Stencil",
    "Expletus Sans",
    "Voces",
    "Brawler",
    "Podkova",
    "Rouge Script",
    "Livvic",
    "Battambang",
    "Bungee Shade",
    "Give You Glory",
    "NTR",
    "Mako",
    "Fjord One",
    "Qwigley",
    "Strait",
    "Happy Monkey",
    "Mouse Memoirs",
    "Alata",
    "Mandali",
    "Short Stack",
    "Waiting for the Sunrise",
    "Balthazar",
    "Shojumaru",
    "Encode Sans Expanded",
    "Skranji",
    "Spirax",
    "Katibeh",
    "Dawning of a New Day",
    "Sail",
    "Charm",
    "Oregano",
    "Wendy One",
    "Denk One",
    "IM Fell French Canon SC",
    "Artifika",
    "Meddon",
    "Clicker Script",
    "Cormorant Upright",
    "Ledger",
    "Ibarra Real Nova",
    "Kosugi",
    "Holtwood One SC",
    "Aref Ruqaa",
    "Andika",
    "Iceland",
    "Laila",
    "Bellefair",
    "Finger Paint",
    "BioRhyme",
    "Fontdiner Swanky",
    "Puritan",
    "Zeyada",
    "Imprima",
    "Spicy Rice",
    "Delius Swash Caps",
    "Averia Sans Libre",
    "Sen",
    "B612 Mono",
    "Eater",
    "Farro",
    "Shanti",
    "Walter Turncoat",
    "Comic Neue",
    "The Girl Next Door",
    "Creepster",
    "Aguafina Script",
    "Carrois Gothic SC",
    "Chango",
    "Tauri",
    "Nova Square",
    "Trade Winds",
    "Euphoria Script",
    "Life Savers",
    "Kite One",
    "Loved by the King",
    "Padauk",
    "Ruluko",
    "Baloo Bhaina 2",
    "Tienne",
    "Headland One",
    "Sonsie One",
    "Cherry Swash",
    "Encode Sans Semi Expanded",
    "Spectral SC",
    "Pavanam",
    "Dokdo",
    "Over the Rainbow",
    "Dekko",
    "Sarpanch",
    "Slackey",
    "Bilbo Swash Caps",
    "Codystar",
    "Encode Sans Semi Condensed",
    "Wire One",
    "Salsa",
    "Princess Sofia",
    "Atma",
    "Gafata",
    "David Libre",
    "Ranchers",
    "Metamorphous",
    "Orienta",
    "Manjari",
    "Kotta One",
    "Port Lligat Sans",
    "Nosifer",
    "Medula One",
    "Germania One",
    "Darker Grotesque",
    "Elsie",
    "Ma Shan Zheng",
    "Bilbo",
    "Zilla Slab Highlight",
    "Bubbler One",
    "Rationale",
    "Farsan",
    "Sree Krushnadevaraya",
    "Englebert",
    "Lily Script One",
    "Sirin Stencil",
    "Just Me Again Down Here",
    "Girassol",
    "Yatra One",
    "Vollkorn SC",
    "Vibur",
    "Fascinate Inline",
    "Peralta",
    "Nova Mono",
    "Manuale",
    "Averia Gruesa Libre",
    "Kranky",
    "Prosto One",
    "Grenze",
    "Saira Stencil One",
    "Amarante",
    "Ribeye Marrow",
    "Vampiro One",
    "Port Lligat Slab",
    "Cherry Cream Soda",
    "Ewert",
    "Libre Barcode 39",
    "Ruslan Display",
    "Srisakdi",
    "Arya",
    "Flamenco",
    "Crimson Pro",
    "Trochut",
    "Jacques Francois Shadow",
    "Scope One",
    "Unlock",
    "Baskervville",
    "Asul",
    "Sumana",
    "Ribeye",
    "Khmer",
    "Manrope",
    "Averia Libre",
    "Hepta Slab",
    "Dynalight",
    "IM Fell English SC",
    "B612",
    "Chau Philomene One",
    "Mukta Mahee",
    "Donegal One",
    "Macondo Swash Caps",
    "Mate SC",
    "Gaegu",
    "Meera Inimai",
    "Notable",
    "Sarina",
    "ZCOOL QingKe HuangYou",
    "Asar",
    "Jomolhari",
    "Crushed",
    "Chicle",
    "Habibi",
    "Ranga",
    "League Script",
    "Rosarivo",
    "Akronim",
    "Koulen",
    "Inknut Antiqua",
    "Gamja Flower",
    "Barrio",
    "Big Shoulders Text",
    "Be Vietnam",
    "Engagement",
    "Italiana",
    "Barriecito",
    "Alatsi",
    "Big Shoulders Display",
    "Coiny",
    "Thasadith",
    "Petrona",
    "Paprika",
    "Baloo Tamma 2",
    "Milonga",
    "Tillana",
    "Simonetta",
    "Sura",
    "Chathura",
    "Almendra",
    "IM Fell French Canon",
    "Diplomata",
    "Monsieur La Doulaise",
    "Ramaraja",
    "Nova Round",
    "Miniver",
    "Mystery Quest",
    "Marko One",
    "Sancreek",
    "Lovers Quarrel",
    "Fenix",
    "Overlock SC",
    "Quintessential",
    "Blinker",
    "Mogra",
    "Tulpen One",
    "Diplomata SC",
    "Kumar One",
    "Maiden Orange",
    "Henny Penny",
    "Mansalva",
    "Stalemate",
    "Prociono",
    "Lakki Reddy",
    "Condiment",
    "Stint Ultra Condensed",
    "Stint Ultra Expanded",
    "Poller One",
    "Jost",
    "Dorsa",
    "Baloo Paaji 2",
    "Pirata One",
    "Delius Unicase",
    "UnifrakturCook",
    "Angkor",
    "Cagliostro",
    "Yeon Sung",
    "Hanalei Fill",
    "Kavoon",
    "New Rocker",
    "Hi Melody",
    "Kodchasan",
    "Stoke",
    "Swanky and Moo Moo",
    "Snippet",
    "Londrina Outline",
    "Vibes",
    "Text Me One",
    "Bayon",
    "Uncial Antiqua",
    "Cormorant Unicase",
    "Moul",
    "Rum Raisin",
    "Buda",
    "Flavors",
    "Oxanium",
    "Baloo Thambi 2",
    "Offside",
    "Fira Code",
    "IM Fell Great Primer",
    "Margarine",
    "Stylish",
    "Gupter",
    "Redressed",
    "Calistoga",
    "Eagle Lake",
    "Julee",
    "Libre Barcode 39 Extended Text",
    "Junge",
    "Bigshot One",
    "Mina",
    "Montaga",
    "Nokora",
    "Autour One",
    "Charmonman",
    "Della Respira",
    "Glass Antiqua",
    "Griffy",
    "Metal Mania",
    "Rhodium Libre",
    "IM Fell DW Pica SC",
    "Chilanka",
    "Elsie Swash Caps",
    "Content",
    "Nova Slim",
    "Sedgwick Ave Display",
    "East Sea Dokdo",
    "Wellfleet",
    "Underdog",
    "Revalia",
    "Mrs Sheppards",
    "Song Myung",
    "Chela One",
    "KoHo",
    "Galdeano",
    "Nova Flat",
    "Trykker",
    "Linden Hill",
    "Jim Nightshade",
    "Odor Mean Chey",
    "Joti One",
    "Gorditas",
    "Croissant One",
    "Risque",
    "Bokor",
    "Bahiana",
    "Inika",
    "Baloo Da 2",
    "Jomhuria",
    "Smythe",
    "Major Mono Display",
    "Odibee Sans",
    "Poor Story",
    "Peddana",
    "Fahkwang",
    "Ruthie",
    "Snowburst One",
    "MedievalSharp",
    "Smokum",
    "Monofett",
    "Kantumruy",
    "Arbutus",
    "Iceberg",
    "Oldenburg",
    "Modern Antiqua",
    "Meie Script",
    "Caesar Dressing",
    "Felipa",
    "Sahitya",
    "Plaster",
    "Irish Grover",
    "Libre Barcode 128",
    "Devonshire",
    "Bellota Text",
    "Londrina Shadow",
    "Inria Serif",
    "Keania One",
    "Purple Purse",
    "Libre Barcode 39 Extended",
    "Tomorrow",
    "Original Surfer",
    "Siemreap",
    "Cute Font",
    "Asset",
    "Jacques Francois",
    "Nova Cut",
    "Ravi Prakash",
    "Almendra SC",
    "Galindo",
    "Metal",
    "Libre Caslon Display",
    "Goblin One",
    "GFS Neohellenic",
    "Lancelot",
    "Gidugu",
    "Kirang Haerang",
    "Atomic Age",
    "Lexend Exa",
    "Piedra",
    "Bungee Outline",
    "Kavivanar",
    "Dangrek",
    "IM Fell Great Primer SC",
    "Dr Sugiyama",
    "Liu Jian Mao Cao",
    "Butcherman",
    "Freehand",
    "Courier Prime",
    "Emblema One",
    "Black And White Picture",
    "Gotu",
    "Romanesco",
    "Ruge Boogie",
    "Kulim Park",
    "Caladea",
    "Kumar One Outline",
    "Bungee Hairline",
    "Sunshiney",
    "IM Fell Double Pica SC",
    "Libre Barcode 39 Text",
    "Miss Fajardose",
    "Jolly Lodger",
    "Bonbon",
    "Dhurjati",
    "Almendra Display",
    "Molle",
    "Astloch",
    "Taprom",
    "Preahvihear",
    "Lacquer",
    "Macondo",
    "Libre Barcode 128 Text",
    "Sofadi One",
    "Hanalei",
    "Butterfly Kids",
    "Tenali Ramakrishna",
    "Supermercado One",
    "Sevillana",
    "Seymour One",
    "Fruktur",
    "Erica One",
    "Federant",
    "Mr Bedfort",
    "Beth Ellen",
    "Nova Script",
    "Suwannaphum",
    "ZCOOL KuaiLe",
    "Miltonian Tattoo",
    "Miltonian",
    "Bigelow Rules",
    "Nova Oval",
    "Bellota",
    "Combo",
    "Geostar Fill",
    "Aubrey",
    "Londrina Sketch",
    "Fascinate",
    "Sulphur Point",
    "Solway",
    "Stalinist One",
    "Long Cang",
    "Geostar",
    "Passero One",
    "Kdam Thmor",
    "Gayathri",
    "Inria Sans",
    "Moulpali",
    "Single Day",
    "Lexend Giga",
    "Kenia",
    "Suravaram",
    "Zhi Mang Xing",
    "Chenla",
    "Fasthand",
    "BioRhyme Expanded",
    "Baloo Bhai 2",
    "Warnes",
    "Lexend Tera",
    "Turret Road",
    "Lexend Mega",
    "Viaoda Libre",
    "Bahianita",
    "Lexend Zetta",
    "Baloo Tammudu 2",
    "Lexend Peta",
    "Balsamiq Sans",
    "DM Mono"
];

function capitalize(font)
{
	const arr = font.split(" ");
	for (let i in arr)
	{
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join(" ");
}

function find(font) 
{
	return googleFonts.indexOf(capitalize(font)) !== -1;
}

function getGoogleFontsLink(f)
{
	const font = capitalize(f);
	return "https://fonts.google.com/specimen/" + font.split(" ").join("+");
}

/* harmony default export */ __webpack_exports__["default"] = ({
	find,
	getGoogleFontsLink
});

/***/ }),

/***/ "./src/utils/globalStyles.js":
/*!***********************************!*\
  !*** ./src/utils/globalStyles.js ***!
  \***********************************/
/*! exports provided: globalStylesLink, getFontsLink, hideScrollbarLink, createStylesheet, loadStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStylesLink", function() { return globalStylesLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontsLink", function() { return getFontsLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideScrollbarLink", function() { return hideScrollbarLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStylesheet", function() { return createStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStyleSheet", function() { return loadStyleSheet; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);



const globalStylesLink = document.createElement('link');
globalStylesLink.setAttribute('rel', 'stylesheet');
globalStylesLink.setAttribute('type', 'text/css');
globalStylesLink.setAttribute('href', chrome.extension.getURL('css/global.css'));

function getFontsLink()
{
	const fontsLink = document.createElement('link');
	fontsLink.setAttribute('rel', 'stylesheet');
	fontsLink.setAttribute('type', 'text/css');
	fontsLink.setAttribute('href', chrome.extension.getURL('css/fonts.css'));
	return fontsLink;
}

const hideScrollbarLink = document.createElement('link');
hideScrollbarLink.setAttribute('rel', 'stylesheet');
hideScrollbarLink.setAttribute('type', 'text/css');
hideScrollbarLink.setAttribute('href', chrome.extension.getURL('css/hide_scrollbar.css'));

function createStylesheet(styles)
{
	return globalStyles + '\n\n' + styles;
}

async function loadStyleSheet(url)
{
	try 
	{
		const { data } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
		return data;
	}
	catch (err)
	{
		throw err;
	}
}



/***/ }),

/***/ "./src/utils/modal.js":
/*!****************************!*\
  !*** ./src/utils/modal.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg */ "./src/utils/svg.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./src/utils/element.js");




let modal = null;
let timer = null;

function createCopyModal()
{
    const hvCopyModal = document.createElement('hv-copy-modal');
    const shadow = hvCopyModal.attachShadow({ mode:'open' });

    modal = document.createElement('div');
    modal.innerHTML = `${_svg__WEBPACK_IMPORTED_MODULE_0__["default"].clipboard} <span>Copied</span>`;

    const style = document.createElement('style');
    style.innerHTML = `
        div {
            position: fixed;
            z-index: 5000000000;
            right: 16px;
            bottom: -100%;
            padding: 1rem;
            display: flex;
            align-items: center;
            font-size: 24px;
            color: #43a047;
            background: rgb(25, 25, 31);
            border-radius: 0.2rem;
            font-weight: 700;
            transform: scale(0);
            transition: bottom 0.5s ease-in-out, transform 0.5s ease-in-out;
        }

        div svg {
            margin-right: 1rem;
        }

        div.active {
            bottom: 16px;
            transform: scale(1);
        }
    `;

    shadow.appendChild(_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/global.css')}" rel="stylesheet" type="text/css">`));
    shadow.appendChild(style);
    shadow.appendChild(modal);
    document.body.appendChild(hvCopyModal);
}

function createToast()
{
    const hvCopyModal = document.createElement('hv-copy-modal');
    const shadow = hvCopyModal.attachShadow({ mode:'open' });

    modal = document.createElement('div');
    modal.innerHTML = `${_svg__WEBPACK_IMPORTED_MODULE_0__["default"].clipboard} <span>copied</span>`;

    const style = document.createElement('style');
    style.innerHTML = `
        div {
            position: fixed;
            z-index: 500000000;
            top: 100%;
            left: 100%;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            font-size: 20px;
            color: white;
            background: rgb(25, 25, 31);
            border-radius: 0.2rem;
            font-weight: 700;
            transform: scale(0) translate(-50%, -50%);
            transform-origin: top left;
            opacity: 0;
            transition: transform 0.2s ease-in-out;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }

        div svg {
            width: 20px;
            height: 20px;
            margin-right: 0.5rem;
        }

        div.active {
            left: 50%;
            top: 50%;
            opacity: 1;
            transform: scale(1) translate(-50%, -50%);
        }
    `;

    shadow.appendChild(_element__WEBPACK_IMPORTED_MODULE_1__["default"].create(`<link href="${chrome.extension.getURL('css/global.css')}" rel="stylesheet" type="text/css">`));
    shadow.appendChild(style);
    shadow.appendChild(modal);
    document.body.appendChild(hvCopyModal);
}

function show(message, icon, bgColor)
{
    if (timer) 
    {
        modal.classList.remove('active');
        clearTimeout(timer);
        timer = null;
    }

    if (icon)
    {
        modal.innerHTML = `${icon} <span>${message}</span>`;
    }
    else
    {
        modal.querySelector('span').innerHTML = message;
    }

    if (bgColor) modal.style.background = bgColor;
    modal.classList.add('active');

    timer = setTimeout(() => modal.classList.remove('active'), 2000);
}

/* harmony default export */ __webpack_exports__["default"] = ({
    createCopyModal,
    createToast,
    show
});

/***/ }),

/***/ "./src/utils/msg.js":
/*!**************************!*\
  !*** ./src/utils/msg.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const sendMessage = (action, message, tabId) =>
{
	if (!message) message = {};
	message.action = action;

	if (tabId) chrome.tabs.sendMessage(tabId, message);
	else chrome.runtime.sendMessage(message);
}

/* harmony default export */ __webpack_exports__["default"] = ({ sendMessage });

/***/ }),

/***/ "./src/utils/parser.js":
/*!*****************************!*\
  !*** ./src/utils/parser.js ***!
  \*****************************/
/*! exports provided: default, getColor, rgbToHex, hexToRgb, stringToRGB, checkForColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToRGB", function() { return stringToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForColors", function() { return checkForColors; });
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts */ "./src/utils/fonts.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./src/utils/colors.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./src/utils/svg.js");





const properties = [
	// Fonts
	'color',
	'font-family', 
	'font-size', 
	'font-style', 
	'font-variant', 
	'font-weight', 
	'letter-spacing', 
	'line-height',
	'text-align', 
	'text-indent', 
	'text-transform',
	'vertical-align', 
	'white-space', 
	'word-spacing',

	// Background
	'background-attachment', 
	'background-color', 
	'background-image',
	'background-position',
	'background-repeat',

	// Box
	'border-top',
	'border-right',
	'border-bottom', 
	'border-left',

	// Positioning
	'position', 
	'top', 
	'bottom', 
	'right', 
	'left', 
	'float', 
	'display', 
	'clear', 
	'z-index',

	// List style
	'list-style',

	// Table
	'border-collapse',
	'border-spacing',
	'caption-side',
	'empty-cells',
	'table-layout',

	// Misc
	'overflow', 
	'cursor', 
	'visibility',

	// Effects
	'transition',
	'animation',
	'outline-offset',
	'box-sizing',
	'resize',
	'text-shadow',
	'text-overflow',
	'word-wrap',
	'box-shadow',
	'border-top-left-radius',
	'border-top-right-radius',
	'border-bottom-left-radius',
	'border-bottom-right-radius'
];

const colorProps = [
	"background",
	"background-color",
	"background-image",
	"border",
	"border-right",
	"border-left",
	"border-top",
	"border-bottom",
	"color",
	"box-shadow",
	"text-shadow",
	"fill"
];

const units = "cm|mm|s|ms|in|px|pt|pc|em|ex|ch|rem|vm|vh|vmin|vmax|%";

function stringToRGB(str)
{
	const used = [];
	const result = [];

	const rgbas = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/gi);
	if (rgbas)
	{
		for (const rgba of rgbas)
		{
			const match = rgba.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/);
			if (match && used.indexOf(match[0]) === -1)
			{
				const color = {
					match: match[0],
					r: parseInt(match[1]),
					g: parseInt(match[2]),
					b: parseInt(match[3])
				};

				if (match[4]) color.a = parseFloat(match[4]);
				else color.hex = rgbToHex(color.r, color.g, color.b);

				result.push(color);
				used.push(color.match);
			}
		}
	}

	return result;
}	

function hexToRgb(hex) 
{
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, (m, r, g, b) => 
	{
		return r + r + g + g + b + b;
	});

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

function rgbToHex(r, g, b) 
{
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getColor(data) 
{
	const r = parseInt(data[0]);
	const g = parseInt(data[1]);
	const b = parseInt(data[2]);

    return { 
    	r, 
    	g, 
    	b, 
    	hex: rgbToHex(r, g, b) 
    };
}

function cssToJson(cssText)
{
	const json = {};
	if (cssText)
	{
		cssText = cssText.replaceAll("\n", "");
		const cssArr = cssText.split(";");
		for (let i in cssArr) 
		{
			const rule = cssArr[i].trim();
			let ruleArr = rule.split(":");
			if (ruleArr.length >= 2)
			{
				const prop = ruleArr.shift().trim().toLowerCase();
				const value = ruleArr.join(":").split(",").map(item => item.trim());
	        	json[prop] = value.join(", ");
			}
		}
	}

	return json;
}

function jsonToCss(rules)
{
	let result = "";
	for (const [property, value] of Object.entries(rules))
	{
		result += `${property}: ${value};\n`;
	}

	return result;
} 

function filterCSS(properties)
{
	const filteredProps = {};
	
	const font = {}

	const padding = {
		all: "",
		left: "",
		top: "",
		right: "",
		bottom: ""
	};

	const border = {
		all: "",
		left: "",
		top: "",
		right: "",
		bottom: ""
	};

	const borderRadius = {
		all: "",
		"bottom-left": "",
		"bottom-right": "",
		"top-left": "",
		"top-right": ""
	};

	let background = {};

	for (const property in properties)
	{
		let value = properties[property].replace(/!important/gs, '').trim();
		if (property.startsWith("border") && !property.endsWith("radius"))
		{
			const arr = property.split("-");
			
			if (value.includes("none")) continue;
			else if (value.includes("0px")) value = "0px";
			
			if (arr.length === 2)
			{
				const direction = arr[1];
				border[direction] = value;
				continue;
			}
			else border.all = value;
		}
		else if (property.startsWith("border") && property.endsWith("radius"))
		{
			const arr = property.split("-");
			if (arr.length > 2)
			{
				const direction = `${arr[1]}-${arr[2]}`;
				borderRadius[direction] = value;
				continue;
			}
			else borderRadius.all = value;
		}
		else if (property === "outline" && value.includes("0px"))
		{
			continue;
		}
		else if (property.startsWith("background"))
		{
			if (property === "background") background.all = value;
			else
			{
				background[property] = value;
				continue;
			}
		}
		else if (property === "animation")
		{
			const arr = value.split(" ");
			const first = parseInt(value.substring(0, 1));
			if (arr.length === 8 && (value.startsWith(".") || !isNaN(first)))
			{
				arr.unshift(arr[arr.length - 1]);
				arr.splice(arr.length - 1, 1);
			}

			value = arr.join(" ");
		}
		else if (property.startsWith("font"))
		{
			font[property] = value;
		}

		filteredProps[property] = value;
	}

	// Resolve border
	if (border.left && border.left === border.right && 
		border.right === border.bottom &&
		border.bottom === border.top && 
		!border.left.includes("none")) filteredProps['border'] = border.all;
	else
	{
		for (let [borderProp, value] of Object.entries(border))
		{
			if (value && borderProp !== "all") filteredProps[`border-${borderProp}`] = value; 
		}
	}

	// Resolve border radius
	if (borderRadius["border-left"] && 
		borderRadius["bottom-left"] === borderRadius["bottom-right"] && 
		borderRadius["bottom-right"] === borderRadius["top-left"] &&
		borderRadius["top-left"] === borderRadius["top-right"] && 
		!borderRadius["bottom-left"].includes("none")) 
	{
		filteredProps['border-radius'] = borderRadius.all;
	}
	else 
	{
		for (let [borderProp, value] of Object.entries(borderRadius))
		{
			if (value && borderProp !== "all") filteredProps[`border-${borderProp}-radius`] = value; 
		}
	}

	// Resolve background
	if (!background.all)
	{
		for (let [backProp, value] of Object.entries(background))
		{
			if (value && backProp !== "all") filteredProps[backProp] = value; 
		}
	}

	// Resolve font
	if (font["font"])
	{
		const arr = font["font"].split(" ");
		if (arr.length === 3)
		{
			if (font["font-weight"]) delete filteredProps["font-weight"];
			if (font["font-size"]) delete filteredProps["font-size"];
			if (font["font-family"]) delete filteredProps["font-family"];
		}
		else if (arr.length === 2)
		{
			if (font["font-size"]) delete filteredProps["font-size"];
			if (font["font-family"]) delete filteredProps["font-family"];
		}
		else
		{
			for (const [fontProp, _] of Object.entries(font))
			{
				if (fontProp !== "font") delete filteredProps[fontProp]
			}
		}
	}

	return filteredProps;
}

function syntaxHighlight(property, value)
{
	// Hightlight colors.
	if (colorProps.indexOf(property) !== -1)
	{
		for (let [name, hex] of Object.entries(_colors__WEBPACK_IMPORTED_MODULE_1__["default"].all))
		{
			const regex = new RegExp(`\\b${name}\\b`, "gi");
			let result = value.match(regex);
			if (result)
			{
				result = [...new Set(result)];
				for (const color of result)
				{
					value = value.replaceAll(
						color, 
						`<div contenteditable="false" class="color">
							<button id="color-btn" value="${color}" style="background-color: ${color}"></button>
						</div> 
						<span class="color-span">${color}</span>`
					);
				}
			}
		}

		const hexRegex = /\b[0-9A-F]{3,6}\b/gi;
		let result = value.match(hexRegex);
		if (result)
		{
			result = [...new Set(result)];
			for (const color of result)
			{
			    value = value.replaceAll(
			    	`#${color}`, 
			    	`<div contenteditable="false" class="color">
			    		<button id="color-btn" value="#${color}" style="background-color: #${color}"></button>
		    		</div> 
		    		<span class="color-span">#${color}</span>`
		    	);
			}
		}

		const rgbas = stringToRGB(value);
		for (const rgba of rgbas)
		{
			value = value.replaceAll(
		    	rgba.match, 
		    	`<div contenteditable="false" class="color">
		    		<button id="color-btn" value="${rgba.match}" style="background-color: ${rgba.match}"></button>
	    		</div> 
	    		<span class="color-span">${rgba.match}</span>`
	    	);
		}
	}

	// Hightlight background url
	if (property === "background" || property === "background-image")
	{
		const urlRegex = /url\((.*?)\)/gi;
		let result = value.match(urlRegex);

		if (result)
		{	
			result = [...new Set(result)];
			for (const url of result)
			{
				const link = url.replace("url(", "").replace(")", "").replaceAll("\"", "").replaceAll("\'", "");
				value = value.replaceAll(
					url,
					`
						${url}
						<div contenteditable="false" class="url">
							<a href="${link}" target="__blank">${_svg__WEBPACK_IMPORTED_MODULE_2__["default"].externalLink}</a>
						</div>
					`
				);
			}
		}
	}

	// Hightlight units.
	const unitRegex = /[+-]?\d+(\.\d+)?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vm|vh|vmin|vmax|%)/g;
	const unitMatch = value.match(unitRegex);
	const unitReplaced = [];
	if (unitMatch)
	{
		/* 
			Sort unitMatch according to length of element.
			This done so that values which have similar units like- 12px and 2px, does not mess up highlighting.
		*/ 
		const matches = unitMatch.sort((a, b) =>  b.length - a.length);
		for (const unit of matches)
		{
			if (unitReplaced.indexOf(unit) !== -1) continue;
			unitReplaced.push(unit);
			value = value.replaceAll(
				unit,
				`<div class="unit">${unit}</div>`
			);
		}
	}

	return value;
}

function parseRules(rules, element, evaluateVar)
{
	const parsedRules = {};

	if (element)
	{
		const computedStyles = window.getComputedStyle(element);
		Object.keys(rules).sort().forEach((property) => 
		{
			let value = rules[property];
			
			if (evaluateVar && value.includes("var(")) value = computedStyles.getPropertyValue(property);
			if (colorProps.indexOf(property) !== -1)
			{
				const arr = value.split("rgb");
				for (const chunk of arr)
				{
					if (chunk.startsWith("("))
					{
						const rgb = chunk.split(")")[0].match(/\d+/g);
						const hex = getColor(rgb).hex;
						value = value.replace(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`, hex);
						value = value.replace(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`, hex);
					}
				}
			}
	
			parsedRules[property] = value;
		});
	}

	return parsedRules;
}

function checkForColors(rules)
{
	let string = "";
	const colors = [];

	for (const [property, value] of Object.entries(rules))
	{
		if (value.includes("#") || value.includes("rgb")) string += ` ${value}`;
		const found = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].findIn(value);
		if (found) colors.push(found);
	}

	return { string, colors };
}

function getFontsAndColors(css, element)
{
	let colors = [];
	let colorString = ''; 
	const computedStyle = window.getComputedStyle(element);

	// Extract colors from css.
	for (const block of css.styles)
	{
		const extractedColors = checkForColors(block.rules);
		colors = [...colors, ...extractedColors.colors];
		colorString += extractedColors.string;
	}

	// Extract colors from media queries.
	for (const [_, query] of Object.entries(css.media_queries))
	{
		for (const block of query)
		{
			const extractedColors = checkForColors(block.rules);
			colors = [...colors, ...extractedColors.colors];
			colorString += extractedColors.string;
		}
	}

	// Extract colors from animations.
	for (const [_, anims] of Object.entries(css.animations))
	{
		for (const [_, rules] of Object.entries(anims))
		{
			const animColors = checkForColors(rules);
			colors = [...colors, ...animColors.colors];
			colorString += animColors.string;
		}
	}

	const hex = colorString.match(/\b[0-9A-F]{6}\b/gi);
	if (hex)
	{
		hex.map(item =>
		{
			colors.push(`#${item}`);
		});
	}

	const rgbas = stringToRGB(colorString);
	for (const rgba of rgbas)
	{
		if (rgba.a || rgba.a === 0) colors.push(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
		else colors.push(rgba.hex);
	}
	
	const fontFamilies = [];
	const fontFamily = computedStyle.getPropertyValue('font-family');
	const arr = fontFamily.split(",");
	for (let i = 0; i < arr.length; i++)
	{
		const font = {
			name: arr[i].trim().replace(/["']/gi, "")
		};

		if (_fonts__WEBPACK_IMPORTED_MODULE_0__["default"].find(font.name))
		{
			font.url = _fonts__WEBPACK_IMPORTED_MODULE_0__["default"].getGoogleFontsLink(font.name);
		}

		if (i === 0 || font.url)
		{
			fontFamilies.push(font);
		}
	}

	for (let i = 0; i < colors.length; i++)
	{
		const hex = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].convertNameToHex(colors[i]);
		if (hex) colors[i] = hex;
	}

	return { colors: [...new Set(colors)], fonts: fontFamilies };
}

function getHtmlAttribs(element)
{
	const result = [];
	const attributes = element.attributes;
	for (let attrib of attributes)
	{
		if (attrib.name !== "style")
		{
			result.push({
				name: attrib.name,
				value: attrib.value
			});
		}
	}
	
	return result;
}

/* harmony default export */ __webpack_exports__["default"] = ({
	properties,
	filterCSS,
	cssToJson,
	getFontsAndColors,
	getHtmlAttribs,
	parseRules,
	syntaxHighlight,
	jsonToCss
});



/***/ }),

/***/ "./src/utils/polyfill.js":
/*!*******************************!*\
  !*** ./src/utils/polyfill.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const setLocalStorage = (data) => new Promise((resolve, reject) => 
{
	chrome.storage.local.set(data, () =>
	{
		chrome.runtime.lastError ? reject(Error(chrome.runtime.lastError.message)) : resolve();
    });
});

const getLocalStorage = (keys) => new Promise((resolve, reject) =>
{
    chrome.storage.local.get(keys, (result) =>
    {
        chrome.runtime.lastError ? reject(Error(chrome.runtime.lastError.message)) : resolve(result);
    });
});

const executeScript = (tabId, options) => new Promise((resolve, reject) => 
{
	chrome.tabs.executeScript(tabId, options,
	_ =>
	{
		let e = chrome.runtime.lastError;
		if (e !== undefined)
		{
			reject(e);
		}
		else
		{
			resolve();
		}
	});
});

const captureVisibleArea = () => new Promise((resolve, reject) => 
{
	chrome.tabs.captureVisibleTab(null, {format: "png"}, (dataURI) => 
	{
		resolve(dataURI);
	});
});

/* harmony default export */ __webpack_exports__["default"] = ({ 
	setLocalStorage, 
	getLocalStorage, 
	executeScript,
	captureVisibleArea
});

/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./src/utils/polyfill.js");



const set = async (info) =>
{
	try
	{
		const res = await _polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].setLocalStorage(info);
	}	
	catch (err)
	{
		console.log(err);
		return err;
	}
}

const get = async (key) => 
{
	try
	{
		const result = await _polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].getLocalStorage(key);
		return result[key];
	}
	catch (err)
	{
		return err;
	}
}

/* harmony default export */ __webpack_exports__["default"] = ({ set, get });

/***/ }),

/***/ "./src/utils/svg.js":
/*!**************************!*\
  !*** ./src/utils/svg.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const play = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather '
	+ 'feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';

const pause = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" '
	+ 'width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';

const eye = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path '
	+ 'd="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';

const chevronDown = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" '
	+ 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
	+ '<polyline points="6 9 12 15 18 9"></polyline></svg>';

const chevronLeft = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 '
	+ '12 15 6"></polyline></svg>';

const chevronRight = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline '
	+ 'points="9 18 15 12 9 6"></polyline></svg>';

const hash = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
	+ '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line '
	+ 'x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>';

const grid = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" '
	+ 'width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" '
	+ 'height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>';

const x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather '
	+ 'feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

const arrowHorizontal = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
		<path d="M62.6,28.3l-7.5-8.8c-1.1-1.1-2.7-1.3-3.7-0.3s-1.3,2.7-0.3,3.7l5.3,6.4H7.3l5.3-6.4c1.1-1.1,0.8-2.9-0.3-3.7
		c-1.1-1.1-2.9-0.8-3.7,0.3l-7.5,8.8c-1.6,2.1-1.6,5.1,0,7.2l7.5,8.8c0.3,0.8,1.1,1.1,1.9,1.1c0.5,0,1.3-0.3,1.6-0.5
		c1.1-1.1,1.3-2.7,0.3-3.7l-5.3-6.4h49.1l-5.3,6.4c-1.1,1.1-0.8,2.9,0.3,3.7c0.5,0.5,1.1,0.5,1.6,0.5c0.8,0,1.6-0.3,2.1-1.1l7.5-8.8
		C64.5,33.7,64.5,30.5,62.6,28.3z"/>
	</svg>`;

const arrowVertical = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
		<path d="M40.9,51.2l-6.4,5.3V7.7l6.4,5.3c0.3,0.3,1.1,0.5,1.6,0.5c0.8,0,1.6-0.3,2.1-1.1c1.1-1.1,0.8-2.9-0.3-3.7l-8.8-7.5
		c-2.1-1.6-5.1-1.6-7.2,0l-8.8,7.5c-1.1,1.1-1.3,2.7-0.3,3.7s2.7,1.3,3.7,0.3l6.4-5.3v48.8L23.1,51c-1.1-1.1-2.9-0.8-3.7,0.3
		c-0.8,1.1-0.8,2.9,0.3,3.7l8.8,7.5c0.8,1.1,2.1,1.6,3.5,1.6c1.4,0,2.7-0.5,3.7-1.3l8.8-7.5c1.1-1.1,1.3-2.7,0.3-3.7
		C43.6,50.4,42,50.4,40.9,51.2z"/>
	</svg>`;

const colorPalette = '<svg viewBox="0 0 512 512"><path fill="currentColor" '
    + 'd="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 '
    + '41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 '
    + '64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-'
    + '32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 '
    + '0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-'
    + '14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 '
    + '0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>';

const font = '<svg viewBox="0 0 448 512"><path fill="currentColor" ' 
    + 'd="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30'
    + '.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 '
    + '0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-'
    + '16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176'
    + '.85 272L224 142.51 271.15 272z"></path></svg>';

const copy = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" '
	+ ' width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 '
	+ '2 2v1"></path></svg>';

const rotate = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" '
	+ 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path '
	+ 'd="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>';

const clipboard = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 '
	+ '2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>';

const download = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path '
	+ 'd="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline>'
	+ '<line x1="12" y1="15" x2="12" y2="3"></line></svg>';

const downloadCloud = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round" class="css-i6dzq1"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path '
	+ 'd="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>';

const edit = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
	+ 'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 '
	+ '2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>';

const trash = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
	+ '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 '
	+ '2 0 0 1 2 2v2"></path></svg>';

const minus = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" '
	+ 'y2="12"></line></svg>';

const minusSquare = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" '
	+ 'width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>';

const maximize = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 '
	+ '9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" '
	+ 'y1="21" x2="10" y2="14"></line></svg>';

const search = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" '
	+ 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" '
	+ 'cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';

const save = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
	+ 'stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>'
	+ '<polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>';

const check = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
	+ 'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

const codepen = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" '
	+ 'y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" '
	+ 'y1="2" x2="12" y2="8.5"></line></svg>';

const info = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line>'
	+ '<line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';

const command = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round" class="css-i6dzq1"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 '
	+ '3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>';

const servers = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" '
	+ 'height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>';

const externalLink = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 '
	+ '9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

const justify = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" '
	+ 'y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>';

const eyeOff = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 '
	+ '0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';

const add = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';

const phone = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ ' stroke-linejoin="round" class="css-i6dzq1"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" '
	+ 'x2="12.01" y2="18"></line></svg>';

const sliders = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" '
	+ 'x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" '
	+ 'x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" '
	+ 'x2="23" y2="16"></line></svg>';

const cpu = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" '
	+ ' height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" '
	+ 'y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" '
	+ 'y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>';

const alignLeft = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" '
	+ 'x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>';

const code = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" '
	+ 'stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';

const bold = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>';

const drop = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>';

const bookmark = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>';

const file = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>';

const layout = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>';

/* harmony default export */ __webpack_exports__["default"] = ({ 
	play,
	pause,
	eye,
	chevronDown,
	chevronRight,
	chevronLeft,
	hash,
	grid,
	x,
	arrowVertical,
	arrowHorizontal,
	colorPalette,
	font,
	copy,
	rotate,
	clipboard,
	download,
	downloadCloud,
	edit,
	trash,
	minus,
	minusSquare,
	maximize,
	search,
	save,
	check,
	codepen,
	info,
	command,
	servers,
	externalLink,
	justify,
	eyeOff,
	add,
	phone,
	sliders,
	cpu,
	alignLeft,
	code,
	bold,
	drop,
	bookmark,
	file,
	layout
});


/***/ }),

/***/ "./src/utils/utility.js":
/*!******************************!*\
  !*** ./src/utils/utility.js ***!
  \******************************/
/*! exports provided: copyText, deepEqual, qs, randomString, getAssetUrl, endsWith, Watcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyText", function() { return copyText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qs", function() { return qs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomString", function() { return randomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetUrl", function() { return getAssetUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watcher", function() { return Watcher; });


function copyText(text)
{
    if (navigator.clipboard)
    {
        (async () => 
        {
            try
            {
                await navigator.clipboard.writeText(text);
                return true;
            }
            catch (err)
            {
                throw err;
            }
        })();
    }
    else
    {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.innerHTML = text;
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        return true;
    }
}

function deepEqual(x, y)
{
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
        ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))
    ) : (x === y);
}

function qs(str)
{
    let a = str.split("?")[1];
    if (a)
    {
        a = a.split("&");
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p = a[i].split('=', 2);
            if (p.length == 1)
                b[p[0]] = "";
            else
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }

        return b;
    }
}

function randomString(length)
{
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) 
    {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function getAssetUrl(src)
{
    let url = src;
    if (src.includes(window.location.host))
    {
        const arr = src.split(window.location.host);
        if (!arr[0].endsWith("//") && !arr[0].endsWith("www.")) url = `https://cors-anywhere.herokuapp.com/${src}`;
    }
    else
    {
        url = `https://cors-anywhere.herokuapp.com/${src}`;
    }

    return url;
}

function endsWith(string, arr)
{
    let result = null;
    if (string)
    {
        for (const pos of arr)
        {
            if (string.endsWith(pos))
            {
                result = pos;
                break;
            }
        }
    }

    return result;
}

function Watcher(element, data, callback)
{
    this.data = data;
    this.element = element;
    this.callback = callback;
    element.value = data;
    element.addEventListener("change", this, false);
}

Watcher.prototype.handleEvent = function (event) 
{
    switch (event.type) 
    {
        case "change":
            this.change(this.element.value);
    }
};

Watcher.prototype.change = function (value) 
{
    this.data = value;
    this.callback();
};



/***/ }),

/***/ "./src/vendors/codemirror/lib/codemirror.js":
/*!**************************************************!*\
  !*** ./src/vendors/codemirror/lib/codemirror.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// This is CodeMirror (https://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  // Kludges for bugs and behavior differences that can't be feature
  // detected are enabled based on userAgent etc sniffing.
  var userAgent = navigator.userAgent;
  var platform = navigator.platform;

  var gecko = /gecko\/\d/i.test(userAgent);
  var ie_upto10 = /MSIE \d/.test(userAgent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
  var edge = /Edge\/(\d+)/.exec(userAgent);
  var ie = ie_upto10 || ie_11up || edge;
  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
  var webkit = !edge && /WebKit\//.test(userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
  var chrome = !edge && /Chrome\//.test(userAgent);
  var presto = /Opera\//.test(userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
  var phantom = /PhantomJS/.test(userAgent);

  var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
  var android = /Android/.test(userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
  var mac = ios || /Mac/.test(platform);
  var chromeOS = /\bCrOS\b/.test(userAgent);
  var windows = /win/i.test(platform);

  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
  if (presto_version) { presto_version = Number(presto_version[1]); }
  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
  var captureRightClick = gecko || (ie && ie_version >= 9);

  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

  var rmClass = function(node, cls) {
    var current = node.className;
    var match = classTest(cls).exec(current);
    if (match) {
      var after = current.slice(match.index + match[0].length);
      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
    }
  };

  function removeChildren(e) {
    for (var count = e.childNodes.length; count > 0; --count)
      { e.removeChild(e.firstChild); }
    return e
  }

  function removeChildrenAndAdd(parent, e) {
    return removeChildren(parent).appendChild(e)
  }

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) { e.className = className; }
    if (style) { e.style.cssText = style; }
    if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
    else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
    return e
  }
  // wrapper for elt, which removes the elt from the accessibility tree
  function eltP(tag, content, className, style) {
    var e = elt(tag, content, className, style);
    e.setAttribute("role", "presentation");
    return e
  }

  var range;
  if (document.createRange) { range = function(node, start, end, endNode) {
    var r = document.createRange();
    r.setEnd(endNode || node, end);
    r.setStart(node, start);
    return r
  }; }
  else { range = function(node, start, end) {
    var r = document.body.createTextRange();
    try { r.moveToElementText(node.parentNode); }
    catch(e) { return r }
    r.collapse(true);
    r.moveEnd("character", end);
    r.moveStart("character", start);
    return r
  }; }

  function contains(parent, child) {
    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
      { child = child.parentNode; }
    if (parent.contains)
      { return parent.contains(child) }
    do {
      if (child.nodeType == 11) { child = child.host; }
      if (child == parent) { return true }
    } while (child = child.parentNode)
  }

  function activeElt() {
    // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
    // IE < 10 will throw when accessed while the page is loading or in an iframe.
    // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
    var activeElement;
    try {
      activeElement = document.activeElement;
    } catch(e) {
      activeElement = document.body || null;
    }
    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
      { activeElement = activeElement.shadowRoot.activeElement; }
    return activeElement
  }

  function addClass(node, cls) {
    var current = node.className;
    if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
  }
  function joinClasses(a, b) {
    var as = a.split(" ");
    for (var i = 0; i < as.length; i++)
      { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
    return b
  }

  var selectInput = function(node) { node.select(); };
  if (ios) // Mobile Safari apparently has a bug where select() is broken.
    { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
  else if (ie) // Suppress mysterious IE10 errors
    { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

  function bind(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){return f.apply(null, args)}
  }

  function copyObj(obj, target, overwrite) {
    if (!target) { target = {}; }
    for (var prop in obj)
      { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
        { target[prop] = obj[prop]; } }
    return target
  }

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize, startIndex, startValue) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) { end = string.length; }
    }
    for (var i = startIndex || 0, n = startValue || 0;;) {
      var nextTab = string.indexOf("\t", i);
      if (nextTab < 0 || nextTab >= end)
        { return n + (end - i) }
      n += nextTab - i;
      n += tabSize - (n % tabSize);
      i = nextTab + 1;
    }
  }

  var Delayed = function() {
    this.id = null;
    this.f = null;
    this.time = 0;
    this.handler = bind(this.onTimeout, this);
  };
  Delayed.prototype.onTimeout = function (self) {
    self.id = 0;
    if (self.time <= +new Date) {
      self.f();
    } else {
      setTimeout(self.handler, self.time - +new Date);
    }
  };
  Delayed.prototype.set = function (ms, f) {
    this.f = f;
    var time = +new Date + ms;
    if (!this.id || time < this.time) {
      clearTimeout(this.id);
      this.id = setTimeout(this.handler, ms);
      this.time = time;
    }
  };

  function indexOf(array, elt) {
    for (var i = 0; i < array.length; ++i)
      { if (array[i] == elt) { return i } }
    return -1
  }

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerGap = 50;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = {toString: function(){return "CodeMirror.Pass"}};

  // Reused option objects for setSelection & friends
  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

  // The inverse of countColumn -- find the offset that corresponds to
  // a particular column.
  function findColumn(string, goal, tabSize) {
    for (var pos = 0, col = 0;;) {
      var nextTab = string.indexOf("\t", pos);
      if (nextTab == -1) { nextTab = string.length; }
      var skipped = nextTab - pos;
      if (nextTab == string.length || col + skipped >= goal)
        { return pos + Math.min(skipped, goal - col) }
      col += nextTab - pos;
      col += tabSize - (col % tabSize);
      pos = nextTab + 1;
      if (col >= goal) { return pos }
    }
  }

  var spaceStrs = [""];
  function spaceStr(n) {
    while (spaceStrs.length <= n)
      { spaceStrs.push(lst(spaceStrs) + " "); }
    return spaceStrs[n]
  }

  function lst(arr) { return arr[arr.length-1] }

  function map(array, f) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
    return out
  }

  function insertSorted(array, value, score) {
    var pos = 0, priority = score(value);
    while (pos < array.length && score(array[pos]) <= priority) { pos++; }
    array.splice(pos, 0, value);
  }

  function nothing() {}

  function createObj(base, props) {
    var inst;
    if (Object.create) {
      inst = Object.create(base);
    } else {
      nothing.prototype = base;
      inst = new nothing();
    }
    if (props) { copyObj(props, inst); }
    return inst
  }

  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function isWordCharBasic(ch) {
    return /\w/.test(ch) || ch > "\x80" &&
      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
  }
  function isWordChar(ch, helper) {
    if (!helper) { return isWordCharBasic(ch) }
    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
    return helper.test(ch)
  }

  function isEmpty(obj) {
    for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
    return true
  }

  // Extending unicode characters. A series of a non-extending char +
  // any number of extending chars is treated as a single unit as far
  // as editing and measuring is concerned. This is not fully correct,
  // since some scripts/fonts/browsers also treat other configurations
  // of code points as a group.
  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

  // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
  function skipExtendingChars(str, pos, dir) {
    while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
    return pos
  }

  // Returns the value from the range [`from`; `to`] that satisfies
  // `pred` and is closest to `from`. Assumes that at least `to`
  // satisfies `pred`. Supports `from` being greater than `to`.
  function findFirst(pred, from, to) {
    // At any point we are certain `to` satisfies `pred`, don't know
    // whether `from` does.
    var dir = from > to ? -1 : 1;
    for (;;) {
      if (from == to) { return from }
      var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
      if (mid == from) { return pred(mid) ? from : to }
      if (pred(mid)) { to = mid; }
      else { from = mid + dir; }
    }
  }

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
    if (!order) { return f(from, to, "ltr", 0) }
    var found = false;
    for (var i = 0; i < order.length; ++i) {
      var part = order[i];
      if (part.from < to && part.to > from || from == to && part.to == from) {
        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
        found = true;
      }
    }
    if (!found) { f(from, to, "ltr"); }
  }

  var bidiOther = null;
  function getBidiPartAt(order, ch, sticky) {
    var found;
    bidiOther = null;
    for (var i = 0; i < order.length; ++i) {
      var cur = order[i];
      if (cur.from < ch && cur.to > ch) { return i }
      if (cur.to == ch) {
        if (cur.from != cur.to && sticky == "before") { found = i; }
        else { bidiOther = i; }
      }
      if (cur.from == ch) {
        if (cur.from != cur.to && sticky != "before") { found = i; }
        else { bidiOther = i; }
      }
    }
    return found != null ? found : bidiOther
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
    // Character types for codepoints 0 to 0xff
    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
    // Character types for codepoints 0x600 to 0x6f9
    var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
    function charType(code) {
      if (code <= 0xf7) { return lowTypes.charAt(code) }
      else if (0x590 <= code && code <= 0x5f4) { return "R" }
      else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
      else if (0x6ee <= code && code <= 0x8ac) { return "r" }
      else if (0x2000 <= code && code <= 0x200b) { return "w" }
      else if (code == 0x200c) { return "b" }
      else { return "L" }
    }

    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

    function BidiSpan(level, from, to) {
      this.level = level;
      this.from = from; this.to = to;
    }

    return function(str, direction) {
      var outerType = direction == "ltr" ? "L" : "R";

      if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
      var len = str.length, types = [];
      for (var i = 0; i < len; ++i)
        { types.push(charType(str.charCodeAt(i))); }

      // W1. Examine each non-spacing mark (NSM) in the level run, and
      // change the type of the NSM to the type of the previous
      // character. If the NSM is at the start of the level run, it will
      // get the type of sor.
      for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
        var type = types[i$1];
        if (type == "m") { types[i$1] = prev; }
        else { prev = type; }
      }

      // W2. Search backwards from each instance of a European number
      // until the first strong type (R, L, AL, or sor) is found. If an
      // AL is found, change the type of the European number to Arabic
      // number.
      // W3. Change all ALs to R.
      for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
        var type$1 = types[i$2];
        if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
        else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
      }

      // W4. A single European separator between two European numbers
      // changes to a European number. A single common separator between
      // two numbers of the same type changes to that type.
      for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
        var type$2 = types[i$3];
        if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
        else if (type$2 == "," && prev$1 == types[i$3+1] &&
                 (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
        prev$1 = type$2;
      }

      // W5. A sequence of European terminators adjacent to European
      // numbers changes to all European numbers.
      // W6. Otherwise, separators and terminators change to Other
      // Neutral.
      for (var i$4 = 0; i$4 < len; ++i$4) {
        var type$3 = types[i$4];
        if (type$3 == ",") { types[i$4] = "N"; }
        else if (type$3 == "%") {
          var end = (void 0);
          for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
          var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
          for (var j = i$4; j < end; ++j) { types[j] = replace; }
          i$4 = end - 1;
        }
      }

      // W7. Search backwards from each instance of a European number
      // until the first strong type (R, L, or sor) is found. If an L is
      // found, then change the type of the European number to L.
      for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
        var type$4 = types[i$5];
        if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
        else if (isStrong.test(type$4)) { cur$1 = type$4; }
      }

      // N1. A sequence of neutrals takes the direction of the
      // surrounding strong text if the text on both sides has the same
      // direction. European and Arabic numbers act as if they were R in
      // terms of their influence on neutrals. Start-of-level-run (sor)
      // and end-of-level-run (eor) are used at level run boundaries.
      // N2. Any remaining neutrals take the embedding direction.
      for (var i$6 = 0; i$6 < len; ++i$6) {
        if (isNeutral.test(types[i$6])) {
          var end$1 = (void 0);
          for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
          var before = (i$6 ? types[i$6-1] : outerType) == "L";
          var after = (end$1 < len ? types[end$1] : outerType) == "L";
          var replace$1 = before == after ? (before ? "L" : "R") : outerType;
          for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
          i$6 = end$1 - 1;
        }
      }

      // Here we depart from the documented algorithm, in order to avoid
      // building up an actual levels array. Since there are only three
      // levels (0, 1, 2) in an implementation that doesn't take
      // explicit embedding into account, we can build up the order on
      // the fly, without following the level-based algorithm.
      var order = [], m;
      for (var i$7 = 0; i$7 < len;) {
        if (countsAsLeft.test(types[i$7])) {
          var start = i$7;
          for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
          order.push(new BidiSpan(0, start, i$7));
        } else {
          var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
          for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
          for (var j$2 = pos; j$2 < i$7;) {
            if (countsAsNum.test(types[j$2])) {
              if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); at += isRTL; }
              var nstart = j$2;
              for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
              order.splice(at, 0, new BidiSpan(2, nstart, j$2));
              at += isRTL;
              pos = j$2;
            } else { ++j$2; }
          }
          if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
        }
      }
      if (direction == "ltr") {
        if (order[0].level == 1 && (m = str.match(/^\s+/))) {
          order[0].from = m[0].length;
          order.unshift(new BidiSpan(0, 0, m[0].length));
        }
        if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
          lst(order).to -= m[0].length;
          order.push(new BidiSpan(0, len - m[0].length, len));
        }
      }

      return direction == "rtl" ? order.reverse() : order
    }
  })();

  // Get the bidi ordering for the given line (and cache it). Returns
  // false for lines that are fully left-to-right, and an array of
  // BidiSpan objects otherwise.
  function getOrder(line, direction) {
    var order = line.order;
    if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
    return order
  }

  // EVENT HANDLING

  // Lightweight event framework. on/off also work on DOM nodes,
  // registering native DOM handlers.

  var noHandlers = [];

  var on = function(emitter, type, f) {
    if (emitter.addEventListener) {
      emitter.addEventListener(type, f, false);
    } else if (emitter.attachEvent) {
      emitter.attachEvent("on" + type, f);
    } else {
      var map = emitter._handlers || (emitter._handlers = {});
      map[type] = (map[type] || noHandlers).concat(f);
    }
  };

  function getHandlers(emitter, type) {
    return emitter._handlers && emitter._handlers[type] || noHandlers
  }

  function off(emitter, type, f) {
    if (emitter.removeEventListener) {
      emitter.removeEventListener(type, f, false);
    } else if (emitter.detachEvent) {
      emitter.detachEvent("on" + type, f);
    } else {
      var map = emitter._handlers, arr = map && map[type];
      if (arr) {
        var index = indexOf(arr, f);
        if (index > -1)
          { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
      }
    }
  }

  function signal(emitter, type /*, values...*/) {
    var handlers = getHandlers(emitter, type);
    if (!handlers.length) { return }
    var args = Array.prototype.slice.call(arguments, 2);
    for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
  }

  // The DOM events that CodeMirror handles can be overridden by
  // registering a (non-DOM) handler on the editor for the event name,
  // and preventDefault-ing the event in that handler.
  function signalDOMEvent(cm, e, override) {
    if (typeof e == "string")
      { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
    signal(cm, override || e.type, cm, e);
    return e_defaultPrevented(e) || e.codemirrorIgnore
  }

  function signalCursorActivity(cm) {
    var arr = cm._handlers && cm._handlers.cursorActivity;
    if (!arr) { return }
    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
    for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
      { set.push(arr[i]); } }
  }

  function hasHandler(emitter, type) {
    return getHandlers(emitter, type).length > 0
  }

  // Add on and off methods to a constructor's prototype, to make
  // registering events on such objects more convenient.
  function eventMixin(ctor) {
    ctor.prototype.on = function(type, f) {on(this, type, f);};
    ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // Due to the fact that we still support jurassic IE versions, some
  // compatibility wrappers are needed.

  function e_preventDefault(e) {
    if (e.preventDefault) { e.preventDefault(); }
    else { e.returnValue = false; }
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) { e.stopPropagation(); }
    else { e.cancelBubble = true; }
  }
  function e_defaultPrevented(e) {
    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

  function e_target(e) {return e.target || e.srcElement}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) { b = 1; }
      else if (e.button & 2) { b = 3; }
      else if (e.button & 4) { b = 2; }
    }
    if (mac && e.ctrlKey && b == 1) { b = 3; }
    return b
  }

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie && ie_version < 9) { return false }
    var div = elt('div');
    return "draggable" in div || "dragDrop" in div
  }();

  var zwspSupported;
  function zeroWidthElement(measure) {
    if (zwspSupported == null) {
      var test = elt("span", "\u200b");
      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
      if (measure.firstChild.offsetHeight != 0)
        { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
    }
    var node = zwspSupported ? elt("span", "\u200b") :
      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
    node.setAttribute("cm-text", "");
    return node
  }

  // Feature-detect IE's crummy client rect reporting for bidi text
  var badBidiRects;
  function hasBadBidiRects(measure) {
    if (badBidiRects != null) { return badBidiRects }
    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
    var r0 = range(txt, 0, 1).getBoundingClientRect();
    var r1 = range(txt, 1, 2).getBoundingClientRect();
    removeChildren(measure);
    if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
    return badBidiRects = (r1.right - r0.right < 3)
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) { nl = string.length; }
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result
  } : function (string) { return string.split(/\r\n?|\n/); };

  var hasSelection = window.getSelection ? function (te) {
    try { return te.selectionStart != te.selectionEnd }
    catch(e) { return false }
  } : function (te) {
    var range;
    try {range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) { return false }
    return range.compareEndPoints("StartToEnd", range) != 0
  };

  var hasCopyEvent = (function () {
    var e = elt("div");
    if ("oncopy" in e) { return true }
    e.setAttribute("oncopy", "return;");
    return typeof e.oncopy == "function"
  })();

  var badZoomedRects = null;
  function hasBadZoomedRects(measure) {
    if (badZoomedRects != null) { return badZoomedRects }
    var node = removeChildrenAndAdd(measure, elt("span", "x"));
    var normal = node.getBoundingClientRect();
    var fromRange = range(node, 0, 1).getBoundingClientRect();
    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
  }

  // Known modes, by name and by MIME
  var modes = {}, mimeModes = {};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  function defineMode(name, mode) {
    if (arguments.length > 2)
      { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
    modes[name] = mode;
  }

  function defineMIME(mime, spec) {
    mimeModes[mime] = spec;
  }

  // Given a MIME type, a {name, ...options} config object, or a name
  // string, return a mode config object.
  function resolveMode(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
      spec = mimeModes[spec];
    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
      var found = mimeModes[spec.name];
      if (typeof found == "string") { found = {name: found}; }
      spec = createObj(found, spec);
      spec.name = found.name;
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
      return resolveMode("application/xml")
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
      return resolveMode("application/json")
    }
    if (typeof spec == "string") { return {name: spec} }
    else { return spec || {name: "null"} }
  }

  // Given a mode spec (anything that resolveMode accepts), find and
  // initialize an actual mode object.
  function getMode(options, spec) {
    spec = resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) { return getMode(options, "text/plain") }
    var modeObj = mfactory(options, spec);
    if (modeExtensions.hasOwnProperty(spec.name)) {
      var exts = modeExtensions[spec.name];
      for (var prop in exts) {
        if (!exts.hasOwnProperty(prop)) { continue }
        if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
        modeObj[prop] = exts[prop];
      }
    }
    modeObj.name = spec.name;
    if (spec.helperType) { modeObj.helperType = spec.helperType; }
    if (spec.modeProps) { for (var prop$1 in spec.modeProps)
      { modeObj[prop$1] = spec.modeProps[prop$1]; } }

    return modeObj
  }

  // This can be used to attach properties to mode objects from
  // outside the actual mode definition.
  var modeExtensions = {};
  function extendMode(mode, properties) {
    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
    copyObj(properties, exts);
  }

  function copyState(mode, state) {
    if (state === true) { return state }
    if (mode.copyState) { return mode.copyState(state) }
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) { val = val.concat([]); }
      nstate[n] = val;
    }
    return nstate
  }

  // Given a mode and a state (for that mode), find the inner mode and
  // state at the position that the state refers to.
  function innerMode(mode, state) {
    var info;
    while (mode.innerMode) {
      info = mode.innerMode(state);
      if (!info || info.mode == mode) { break }
      state = info.state;
      mode = info.mode;
    }
    return info || {mode: mode, state: state}
  }

  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true
  }

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  var StringStream = function(string, tabSize, lineOracle) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
    this.lineStart = 0;
    this.lineOracle = lineOracle;
  };

  StringStream.prototype.eol = function () {return this.pos >= this.string.length};
  StringStream.prototype.sol = function () {return this.pos == this.lineStart};
  StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
  StringStream.prototype.next = function () {
    if (this.pos < this.string.length)
      { return this.string.charAt(this.pos++) }
  };
  StringStream.prototype.eat = function (match) {
    var ch = this.string.charAt(this.pos);
    var ok;
    if (typeof match == "string") { ok = ch == match; }
    else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
    if (ok) {++this.pos; return ch}
  };
  StringStream.prototype.eatWhile = function (match) {
    var start = this.pos;
    while (this.eat(match)){}
    return this.pos > start
  };
  StringStream.prototype.eatSpace = function () {
    var start = this.pos;
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this.pos; }
    return this.pos > start
  };
  StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
  StringStream.prototype.skipTo = function (ch) {
    var found = this.string.indexOf(ch, this.pos);
    if (found > -1) {this.pos = found; return true}
  };
  StringStream.prototype.backUp = function (n) {this.pos -= n;};
  StringStream.prototype.column = function () {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
      this.lastColumnPos = this.start;
    }
    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.indentation = function () {
    return countColumn(this.string, null, this.tabSize) -
      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
      var substr = this.string.substr(this.pos, pattern.length);
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) { this.pos += pattern.length; }
        return true
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern);
      if (match && match.index > 0) { return null }
      if (match && consume !== false) { this.pos += match[0].length; }
      return match
    }
  };
  StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
  StringStream.prototype.hideFirstChars = function (n, inner) {
    this.lineStart += n;
    try { return inner() }
    finally { this.lineStart -= n; }
  };
  StringStream.prototype.lookAhead = function (n) {
    var oracle = this.lineOracle;
    return oracle && oracle.lookAhead(n)
  };
  StringStream.prototype.baseToken = function () {
    var oracle = this.lineOracle;
    return oracle && oracle.baseToken(this.pos)
  };

  // Find the line object corresponding to the given line number.
  function getLine(doc, n) {
    n -= doc.first;
    if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
    var chunk = doc;
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break }
        n -= sz;
      }
    }
    return chunk.lines[n]
  }

  // Get the part of a document between two positions, as an array of
  // strings.
  function getBetween(doc, start, end) {
    var out = [], n = start.line;
    doc.iter(start.line, end.line + 1, function (line) {
      var text = line.text;
      if (n == end.line) { text = text.slice(0, end.ch); }
      if (n == start.line) { text = text.slice(start.ch); }
      out.push(text);
      ++n;
    });
    return out
  }
  // Get the lines between from and to, as array of strings.
  function getLines(doc, from, to) {
    var out = [];
    doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
    return out
  }

  // Update the height of a line, propagating the height change
  // upwards to parent nodes.
  function updateLineHeight(line, height) {
    var diff = height - line.height;
    if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
  }

  // Given a line object, find its line number by walking up through
  // its parent links.
  function lineNo(line) {
    if (line.parent == null) { return null }
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0;; ++i) {
        if (chunk.children[i] == cur) { break }
        no += chunk.children[i].chunkSize();
      }
    }
    return no + cur.first
  }

  // Find the line at the given vertical position, using the height
  // information in the document tree.
  function lineAtHeight(chunk, h) {
    var n = chunk.first;
    outer: do {
      for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
        var child = chunk.children[i$1], ch = child.height;
        if (h < ch) { chunk = child; continue outer }
        h -= ch;
        n += child.chunkSize();
      }
      return n
    } while (!chunk.lines)
    var i = 0;
    for (; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) { break }
      h -= lh;
    }
    return n + i
  }

  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

  function lineNumberFor(options, i) {
    return String(options.lineNumberFormatter(i + options.firstLineNumber))
  }

  // A Pos instance represents a position within the text.
  function Pos(line, ch, sticky) {
    if ( sticky === void 0 ) sticky = null;

    if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
    this.line = line;
    this.ch = ch;
    this.sticky = sticky;
  }

  // Compare two positions, return 0 if they are the same, a negative
  // number when a is less, and a positive number otherwise.
  function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

  function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

  function copyPos(x) {return Pos(x.line, x.ch)}
  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
  function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

  // Most of the external API clips given positions to make sure they
  // actually exist within the document.
  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
  function clipPos(doc, pos) {
    if (pos.line < doc.first) { return Pos(doc.first, 0) }
    var last = doc.first + doc.size - 1;
    if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
    return clipToLen(pos, getLine(doc, pos.line).text.length)
  }
  function clipToLen(pos, linelen) {
    var ch = pos.ch;
    if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
    else if (ch < 0) { return Pos(pos.line, 0) }
    else { return pos }
  }
  function clipPosArray(doc, array) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
    return out
  }

  var SavedContext = function(state, lookAhead) {
    this.state = state;
    this.lookAhead = lookAhead;
  };

  var Context = function(doc, state, line, lookAhead) {
    this.state = state;
    this.doc = doc;
    this.line = line;
    this.maxLookAhead = lookAhead || 0;
    this.baseTokens = null;
    this.baseTokenPos = 1;
  };

  Context.prototype.lookAhead = function (n) {
    var line = this.doc.getLine(this.line + n);
    if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
    return line
  };

  Context.prototype.baseToken = function (n) {
    if (!this.baseTokens) { return null }
    while (this.baseTokens[this.baseTokenPos] <= n)
      { this.baseTokenPos += 2; }
    var type = this.baseTokens[this.baseTokenPos + 1];
    return {type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n}
  };

  Context.prototype.nextLine = function () {
    this.line++;
    if (this.maxLookAhead > 0) { this.maxLookAhead--; }
  };

  Context.fromSaved = function (doc, saved, line) {
    if (saved instanceof SavedContext)
      { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
    else
      { return new Context(doc, copyState(doc.mode, saved), line) }
  };

  Context.prototype.save = function (copy) {
    var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
    return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
  };


  // Compute a style array (an array starting with a mode generation
  // -- for invalidation -- followed by pairs of end positions and
  // style strings), which is used to highlight the tokens on the
  // line.
  function highlightLine(cm, line, context, forceToEnd) {
    // A styles array always starts with a number identifying the
    // mode/overlays that it is based on (for easy invalidation).
    var st = [cm.state.modeGen], lineClasses = {};
    // Compute the base array of styles
    runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
            lineClasses, forceToEnd);
    var state = context.state;

    // Run overlays, adjust style array.
    var loop = function ( o ) {
      context.baseTokens = st;
      var overlay = cm.state.overlays[o], i = 1, at = 0;
      context.state = true;
      runMode(cm, line.text, overlay.mode, context, function (end, style) {
        var start = i;
        // Ensure there's a token end at the current position, and that i points at it
        while (at < end) {
          var i_end = st[i];
          if (i_end > end)
            { st.splice(i, 1, end, st[i+1], i_end); }
          i += 2;
          at = Math.min(end, i_end);
        }
        if (!style) { return }
        if (overlay.opaque) {
          st.splice(start, i - start, end, "overlay " + style);
          i = start + 2;
        } else {
          for (; start < i; start += 2) {
            var cur = st[start+1];
            st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
          }
        }
      }, lineClasses);
      context.state = state;
      context.baseTokens = null;
      context.baseTokenPos = 1;
    };

    for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
  }

  function getLineStyles(cm, line, updateFrontier) {
    if (!line.styles || line.styles[0] != cm.state.modeGen) {
      var context = getContextBefore(cm, lineNo(line));
      var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
      var result = highlightLine(cm, line, context);
      if (resetState) { context.state = resetState; }
      line.stateAfter = context.save(!resetState);
      line.styles = result.styles;
      if (result.classes) { line.styleClasses = result.classes; }
      else if (line.styleClasses) { line.styleClasses = null; }
      if (updateFrontier === cm.doc.highlightFrontier)
        { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
    }
    return line.styles
  }

  function getContextBefore(cm, n, precise) {
    var doc = cm.doc, display = cm.display;
    if (!doc.mode.startState) { return new Context(doc, true, n) }
    var start = findStartLine(cm, n, precise);
    var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
    var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

    doc.iter(start, n, function (line) {
      processLine(cm, line.text, context);
      var pos = context.line;
      line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
      context.nextLine();
    });
    if (precise) { doc.modeFrontier = context.line; }
    return context
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array. Used for lines that
  // aren't currently visible.
  function processLine(cm, text, context, startAt) {
    var mode = cm.doc.mode;
    var stream = new StringStream(text, cm.options.tabSize, context);
    stream.start = stream.pos = startAt || 0;
    if (text == "") { callBlankLine(mode, context.state); }
    while (!stream.eol()) {
      readToken(mode, stream, context.state);
      stream.start = stream.pos;
    }
  }

  function callBlankLine(mode, state) {
    if (mode.blankLine) { return mode.blankLine(state) }
    if (!mode.innerMode) { return }
    var inner = innerMode(mode, state);
    if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
  }

  function readToken(mode, stream, state, inner) {
    for (var i = 0; i < 10; i++) {
      if (inner) { inner[0] = innerMode(mode, state).mode; }
      var style = mode.token(stream, state);
      if (stream.pos > stream.start) { return style }
    }
    throw new Error("Mode " + mode.name + " failed to advance stream.")
  }

  var Token = function(stream, type, state) {
    this.start = stream.start; this.end = stream.pos;
    this.string = stream.current();
    this.type = type || null;
    this.state = state;
  };

  // Utility for getTokenAt and getLineTokens
  function takeToken(cm, pos, precise, asArray) {
    var doc = cm.doc, mode = doc.mode, style;
    pos = clipPos(doc, pos);
    var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
    var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
    if (asArray) { tokens = []; }
    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
      stream.start = stream.pos;
      style = readToken(mode, stream, context.state);
      if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
    }
    return asArray ? tokens : new Token(stream, style, context.state)
  }

  function extractLineClasses(type, output) {
    if (type) { for (;;) {
      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
      if (!lineClass) { break }
      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
      var prop = lineClass[1] ? "bgClass" : "textClass";
      if (output[prop] == null)
        { output[prop] = lineClass[2]; }
      else if (!(new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)")).test(output[prop]))
        { output[prop] += " " + lineClass[2]; }
    } }
    return type
  }

  // Run the given mode's parser over a line, calling f for each token.
  function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
    var flattenSpans = mode.flattenSpans;
    if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
    var curStart = 0, curStyle = null;
    var stream = new StringStream(text, cm.options.tabSize, context), style;
    var inner = cm.options.addModeClass && [null];
    if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
    while (!stream.eol()) {
      if (stream.pos > cm.options.maxHighlightLength) {
        flattenSpans = false;
        if (forceToEnd) { processLine(cm, text, context, stream.pos); }
        stream.pos = text.length;
        style = null;
      } else {
        style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
      }
      if (inner) {
        var mName = inner[0].name;
        if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
      }
      if (!flattenSpans || curStyle != style) {
        while (curStart < stream.start) {
          curStart = Math.min(stream.start, curStart + 5000);
          f(curStart, curStyle);
        }
        curStyle = style;
      }
      stream.start = stream.pos;
    }
    while (curStart < stream.pos) {
      // Webkit seems to refuse to render text nodes longer than 57444
      // characters, and returns inaccurate measurements in nodes
      // starting around 5000 chars.
      var pos = Math.min(stream.pos, curStart + 5000);
      f(pos, curStyle);
      curStart = pos;
    }
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
    var minindent, minline, doc = cm.doc;
    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
    for (var search = n; search > lim; --search) {
      if (search <= doc.first) { return doc.first }
      var line = getLine(doc, search - 1), after = line.stateAfter;
      if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
        { return search }
      var indented = countColumn(line.text, null, cm.options.tabSize);
      if (minline == null || minindent > indented) {
        minline = search - 1;
        minindent = indented;
      }
    }
    return minline
  }

  function retreatFrontier(doc, n) {
    doc.modeFrontier = Math.min(doc.modeFrontier, n);
    if (doc.highlightFrontier < n - 10) { return }
    var start = doc.first;
    for (var line = n - 1; line > start; line--) {
      var saved = getLine(doc, line).stateAfter;
      // change is on 3
      // state on line 1 looked ahead 2 -- so saw 3
      // test 1 + 2 < 3 should cover this
      if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
        start = line + 1;
        break
      }
    }
    doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
  }

  // Optimize some code when these features are not used.
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  function seeReadOnlySpans() {
    sawReadOnlySpans = true;
  }

  function seeCollapsedSpans() {
    sawCollapsedSpans = true;
  }

  // TEXTMARKER SPANS

  function MarkedSpan(marker, from, to) {
    this.marker = marker;
    this.from = from; this.to = to;
  }

  // Search an array of spans for a span matching the given marker.
  function getMarkedSpanFor(spans, marker) {
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.marker == marker) { return span }
    } }
  }

  // Remove a span from an array, returning undefined if no spans are
  // left (we don't store arrays for lines without spans).
  function removeMarkedSpan(spans, span) {
    var r;
    for (var i = 0; i < spans.length; ++i)
      { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
    return r
  }

  // Add a span to a line.
  function addMarkedSpan(line, span, op) {
    var inThisOp = op && window.WeakSet && (op.markedSpans || (op.markedSpans = new WeakSet));
    if (inThisOp && inThisOp.has(line.markedSpans)) {
      line.markedSpans.push(span);
    } else {
      line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
      if (inThisOp) { inThisOp.add(line.markedSpans); }
    }
    span.marker.attachLine(line);
  }

  // Used for the algorithm that adjusts markers for a change in the
  // document. These functions cut an array of spans at a given
  // character position, returning an array of remaining chunks (or
  // undefined if nothing remains).
  function markedSpansBefore(old, startCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
      }
    } }
    return nw
  }
  function markedSpansAfter(old, endCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                              span.to == null ? null : span.to - endCh));
      }
    } }
    return nw
  }

  // Given a change object, compute the new set of marker spans that
  // cover the line in which the change took place. Removes spans
  // entirely within the change, reconnects spans belonging to the
  // same marker that appear on both sides of the change, and cuts off
  // spans partially within the change. Returns an array of span
  // arrays with one element for each line in (after) the change.
  function stretchSpansOverChange(doc, change) {
    if (change.full) { return null }
    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
    if (!oldFirst && !oldLast) { return null }

    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
    // Get the spans that 'stick out' on both sides
    var first = markedSpansBefore(oldFirst, startCh, isInsert);
    var last = markedSpansAfter(oldLast, endCh, isInsert);

    // Next, merge those two ends
    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
    if (first) {
      // Fix up .to properties of first
      for (var i = 0; i < first.length; ++i) {
        var span = first[i];
        if (span.to == null) {
          var found = getMarkedSpanFor(last, span.marker);
          if (!found) { span.to = startCh; }
          else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
        }
      }
    }
    if (last) {
      // Fix up .from in last (or move them into first in case of sameLine)
      for (var i$1 = 0; i$1 < last.length; ++i$1) {
        var span$1 = last[i$1];
        if (span$1.to != null) { span$1.to += offset; }
        if (span$1.from == null) {
          var found$1 = getMarkedSpanFor(first, span$1.marker);
          if (!found$1) {
            span$1.from = offset;
            if (sameLine) { (first || (first = [])).push(span$1); }
          }
        } else {
          span$1.from += offset;
          if (sameLine) { (first || (first = [])).push(span$1); }
        }
      }
    }
    // Make sure we didn't create any zero-length spans
    if (first) { first = clearEmptySpans(first); }
    if (last && last != first) { last = clearEmptySpans(last); }

    var newMarkers = [first];
    if (!sameLine) {
      // Fill gap with whole-line-spans
      var gap = change.text.length - 2, gapMarkers;
      if (gap > 0 && first)
        { for (var i$2 = 0; i$2 < first.length; ++i$2)
          { if (first[i$2].to == null)
            { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
      for (var i$3 = 0; i$3 < gap; ++i$3)
        { newMarkers.push(gapMarkers); }
      newMarkers.push(last);
    }
    return newMarkers
  }

  // Remove spans that are empty and don't have a clearWhenEmpty
  // option of false.
  function clearEmptySpans(spans) {
    for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
        { spans.splice(i--, 1); }
    }
    if (!spans.length) { return null }
    return spans
  }

  // Used to 'clip' out readOnly ranges when making a change.
  function removeReadOnlyRanges(doc, from, to) {
    var markers = null;
    doc.iter(from.line, to.line + 1, function (line) {
      if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;
        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
          { (markers || (markers = [])).push(mark); }
      } }
    });
    if (!markers) { return null }
    var parts = [{from: from, to: to}];
    for (var i = 0; i < markers.length; ++i) {
      var mk = markers[i], m = mk.find(0);
      for (var j = 0; j < parts.length; ++j) {
        var p = parts[j];
        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
          { newParts.push({from: p.from, to: m.from}); }
        if (dto > 0 || !mk.inclusiveRight && !dto)
          { newParts.push({from: m.to, to: p.to}); }
        parts.splice.apply(parts, newParts);
        j += newParts.length - 3;
      }
    }
    return parts
  }

  // Connect or disconnect spans from a line.
  function detachMarkedSpans(line) {
    var spans = line.markedSpans;
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.detachLine(line); }
    line.markedSpans = null;
  }
  function attachMarkedSpans(line, spans) {
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.attachLine(line); }
    line.markedSpans = spans;
  }

  // Helpers used when computing which overlapping collapsed span
  // counts as the larger one.
  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

  // Returns a number indicating which of two overlapping collapsed
  // spans is larger (and thus includes the other). Falls back to
  // comparing ids when the spans cover exactly the same range.
  function compareCollapsedMarkers(a, b) {
    var lenDiff = a.lines.length - b.lines.length;
    if (lenDiff != 0) { return lenDiff }
    var aPos = a.find(), bPos = b.find();
    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
    if (fromCmp) { return -fromCmp }
    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
    if (toCmp) { return toCmp }
    return b.id - a.id
  }

  // Find out whether a line ends or starts in a collapsed span. If
  // so, return the marker for that span.
  function collapsedSpanAtSide(line, start) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
        { found = sp.marker; }
    } }
    return found
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

  function collapsedSpanAround(line, ch) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
    } }
    return found
  }

  // Test whether there exists a collapsed span that partially
  // overlaps (covers the start or end, but not both) of a new span.
  // Such overlap is not allowed.
  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
    var line = getLine(doc, lineNo);
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      var found = sp.marker.find(0);
      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
          fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
        { return true }
    } }
  }

  // A visual line is a line as drawn on the screen. Folding, for
  // example, can cause multiple logical lines to appear on the same
  // visual line. This finds the start of the visual line that the
  // given line is part of (usually that is the line itself).
  function visualLine(line) {
    var merged;
    while (merged = collapsedSpanAtStart(line))
      { line = merged.find(-1, true).line; }
    return line
  }

  function visualLineEnd(line) {
    var merged;
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return line
  }

  // Returns an array of logical lines that continue the visual line
  // started by the argument, or undefined if there are no such lines.
  function visualLineContinued(line) {
    var merged, lines;
    while (merged = collapsedSpanAtEnd(line)) {
      line = merged.find(1, true).line
      ;(lines || (lines = [])).push(line);
    }
    return lines
  }

  // Get the line number of the start of the visual line that the
  // given line number is part of.
  function visualLineNo(doc, lineN) {
    var line = getLine(doc, lineN), vis = visualLine(line);
    if (line == vis) { return lineN }
    return lineNo(vis)
  }

  // Get the line number of the start of the next visual line after
  // the given line.
  function visualLineEndNo(doc, lineN) {
    if (lineN > doc.lastLine()) { return lineN }
    var line = getLine(doc, lineN), merged;
    if (!lineIsHidden(doc, line)) { return lineN }
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return lineNo(line) + 1
  }

  // Compute whether a line is hidden. Lines count as hidden when they
  // are part of a visual line that starts with another line, or when
  // they are entirely covered by collapsed, non-widget span.
  function lineIsHidden(doc, line) {
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      if (sp.from == null) { return true }
      if (sp.marker.widgetNode) { continue }
      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
        { return true }
    } }
  }
  function lineIsHiddenInner(doc, line, span) {
    if (span.to == null) {
      var end = span.marker.find(1, true);
      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
    }
    if (span.marker.inclusiveRight && span.to == line.text.length)
      { return true }
    for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
      sp = line.markedSpans[i];
      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
          (sp.to == null || sp.to != span.from) &&
          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
          lineIsHiddenInner(doc, line, sp)) { return true }
    }
  }

  // Find the height above the given line.
  function heightAtLine(lineObj) {
    lineObj = visualLine(lineObj);

    var h = 0, chunk = lineObj.parent;
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i];
      if (line == lineObj) { break }
      else { h += line.height; }
    }
    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
      for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
        var cur = p.children[i$1];
        if (cur == chunk) { break }
        else { h += cur.height; }
      }
    }
    return h
  }

  // Compute the character length of a line, taking into account
  // collapsed ranges (see markText) that might hide parts, and join
  // other lines onto it.
  function lineLength(line) {
    if (line.height == 0) { return 0 }
    var len = line.text.length, merged, cur = line;
    while (merged = collapsedSpanAtStart(cur)) {
      var found = merged.find(0, true);
      cur = found.from.line;
      len += found.from.ch - found.to.ch;
    }
    cur = line;
    while (merged = collapsedSpanAtEnd(cur)) {
      var found$1 = merged.find(0, true);
      len -= cur.text.length - found$1.from.ch;
      cur = found$1.to.line;
      len += cur.text.length - found$1.to.ch;
    }
    return len
  }

  // Find the longest line in the document.
  function findMaxLine(cm) {
    var d = cm.display, doc = cm.doc;
    d.maxLine = getLine(doc, doc.first);
    d.maxLineLength = lineLength(d.maxLine);
    d.maxLineChanged = true;
    doc.iter(function (line) {
      var len = lineLength(line);
      if (len > d.maxLineLength) {
        d.maxLineLength = len;
        d.maxLine = line;
      }
    });
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = function(text, markedSpans, estimateHeight) {
    this.text = text;
    attachMarkedSpans(this, markedSpans);
    this.height = estimateHeight ? estimateHeight(this) : 1;
  };

  Line.prototype.lineNo = function () { return lineNo(this) };
  eventMixin(Line);

  // Change the content (text, markers) of a line. Automatically
  // invalidates cached information and tries to re-estimate the
  // line's height.
  function updateLine(line, text, markedSpans, estimateHeight) {
    line.text = text;
    if (line.stateAfter) { line.stateAfter = null; }
    if (line.styles) { line.styles = null; }
    if (line.order != null) { line.order = null; }
    detachMarkedSpans(line);
    attachMarkedSpans(line, markedSpans);
    var estHeight = estimateHeight ? estimateHeight(line) : 1;
    if (estHeight != line.height) { updateLineHeight(line, estHeight); }
  }

  // Detach a line from the document tree and its markers.
  function cleanUpLine(line) {
    line.parent = null;
    detachMarkedSpans(line);
  }

  // Convert a style as returned by a mode (either null, or a string
  // containing one or more styles) to a CSS style. This is cached,
  // and also looks for line-wide styles.
  var styleToClassCache = {}, styleToClassCacheWithMode = {};
  function interpretTokenStyle(style, options) {
    if (!style || /^\s*$/.test(style)) { return null }
    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
    return cache[style] ||
      (cache[style] = style.replace(/\S+/g, "cm-$&"))
  }

  // Render the DOM representation of the text of a line. Also builds
  // up a 'line map', which points at the DOM nodes that represent
  // specific stretches of text, and is used by the measuring code.
  // The returned object contains the DOM node, this map, and
  // information about line-wide styles that were set by the mode.
  function buildLineContent(cm, lineView) {
    // The padding-right forces the element to have a 'border', which
    // is needed on Webkit to be able to get line-level bounding
    // rectangles for it (in measureChar).
    var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
    var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
                   col: 0, pos: 0, cm: cm,
                   trailingSpace: false,
                   splitSpaces: cm.getOption("lineWrapping")};
    lineView.measure = {};

    // Iterate over the logical lines that make up this visual line.
    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
      var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
      builder.pos = 0;
      builder.addToken = buildToken;
      // Optionally wire in some hacks into the token-rendering
      // algorithm, to deal with browser quirks.
      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
        { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
      builder.map = [];
      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
      if (line.styleClasses) {
        if (line.styleClasses.bgClass)
          { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
        if (line.styleClasses.textClass)
          { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
      }

      // Ensure at least a single node is present, for measuring.
      if (builder.map.length == 0)
        { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

      // Store the map and a cache object for the current logical line
      if (i == 0) {
        lineView.measure.map = builder.map;
        lineView.measure.cache = {};
      } else {
  (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
        ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
      }
    }

    // See issue #2901
    if (webkit) {
      var last = builder.content.lastChild;
      if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
        { builder.content.className = "cm-tab-wrap-hack"; }
    }

    signal(cm, "renderLine", cm, lineView.line, builder.pre);
    if (builder.pre.className)
      { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

    return builder
  }

  function defaultSpecialCharPlaceholder(ch) {
    var token = elt("span", "\u2022", "cm-invalidchar");
    token.title = "\\u" + ch.charCodeAt(0).toString(16);
    token.setAttribute("aria-label", token.title);
    return token
  }

  // Build up the DOM representation for a single token, and add it to
  // the line map. Takes care to render special characters separately.
  function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
    if (!text) { return }
    var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
    var special = builder.cm.state.specialChars, mustWrap = false;
    var content;
    if (!special.test(text)) {
      builder.col += text.length;
      content = document.createTextNode(displayText);
      builder.map.push(builder.pos, builder.pos + text.length, content);
      if (ie && ie_version < 9) { mustWrap = true; }
      builder.pos += text.length;
    } else {
      content = document.createDocumentFragment();
      var pos = 0;
      while (true) {
        special.lastIndex = pos;
        var m = special.exec(text);
        var skipped = m ? m.index - pos : text.length - pos;
        if (skipped) {
          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
          else { content.appendChild(txt); }
          builder.map.push(builder.pos, builder.pos + skipped, txt);
          builder.col += skipped;
          builder.pos += skipped;
        }
        if (!m) { break }
        pos += skipped + 1;
        var txt$1 = (void 0);
        if (m[0] == "\t") {
          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
          txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
          txt$1.setAttribute("role", "presentation");
          txt$1.setAttribute("cm-text", "\t");
          builder.col += tabWidth;
        } else if (m[0] == "\r" || m[0] == "\n") {
          txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
          txt$1.setAttribute("cm-text", m[0]);
          builder.col += 1;
        } else {
          txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
          txt$1.setAttribute("cm-text", m[0]);
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
          else { content.appendChild(txt$1); }
          builder.col += 1;
        }
        builder.map.push(builder.pos, builder.pos + 1, txt$1);
        builder.pos++;
      }
    }
    builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
    if (style || startStyle || endStyle || mustWrap || css || attributes) {
      var fullStyle = style || "";
      if (startStyle) { fullStyle += startStyle; }
      if (endStyle) { fullStyle += endStyle; }
      var token = elt("span", [content], fullStyle, css);
      if (attributes) {
        for (var attr in attributes) { if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
          { token.setAttribute(attr, attributes[attr]); } }
      }
      return builder.content.appendChild(token)
    }
    builder.content.appendChild(content);
  }

  // Change some spaces to NBSP to prevent the browser from collapsing
  // trailing spaces at the end of a line when rendering text (issue #1362).
  function splitSpaces(text, trailingBefore) {
    if (text.length > 1 && !/  /.test(text)) { return text }
    var spaceBefore = trailingBefore, result = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
        { ch = "\u00a0"; }
      result += ch;
      spaceBefore = ch == " ";
    }
    return result
  }

  // Work around nonsense dimensions being reported for stretches of
  // right-to-left text.
  function buildTokenBadBidi(inner, order) {
    return function (builder, text, style, startStyle, endStyle, css, attributes) {
      style = style ? style + " cm-force-border" : "cm-force-border";
      var start = builder.pos, end = start + text.length;
      for (;;) {
        // Find the part that overlaps with the start of this text
        var part = (void 0);
        for (var i = 0; i < order.length; i++) {
          part = order[i];
          if (part.to > start && part.from <= start) { break }
        }
        if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, css, attributes) }
        inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
        startStyle = null;
        text = text.slice(part.to - start);
        start = part.to;
      }
    }
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
    var widget = !ignoreWidget && marker.widgetNode;
    if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
      if (!widget)
        { widget = builder.content.appendChild(document.createElement("span")); }
      widget.setAttribute("cm-marker", marker.id);
    }
    if (widget) {
      builder.cm.display.input.setUneditable(widget);
      builder.content.appendChild(widget);
    }
    builder.pos += size;
    builder.trailingSpace = false;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
    var spans = line.markedSpans, allText = line.text, at = 0;
    if (!spans) {
      for (var i$1 = 1; i$1 < styles.length; i$1+=2)
        { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
      return
    }

    var len = allText.length, pos = 0, i = 1, text = "", style, css;
    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
    for (;;) {
      if (nextChange == pos) { // Update current marker set
        spanStyle = spanEndStyle = spanStartStyle = css = "";
        attributes = null;
        collapsed = null; nextChange = Infinity;
        var foundBookmarks = [], endStyles = (void 0);
        for (var j = 0; j < spans.length; ++j) {
          var sp = spans[j], m = sp.marker;
          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
            foundBookmarks.push(m);
          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
              nextChange = sp.to;
              spanEndStyle = "";
            }
            if (m.className) { spanStyle += " " + m.className; }
            if (m.css) { css = (css ? css + ";" : "") + m.css; }
            if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
            if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
            // support for the old title property
            // https://github.com/codemirror/CodeMirror/pull/5673
            if (m.title) { (attributes || (attributes = {})).title = m.title; }
            if (m.attributes) {
              for (var attr in m.attributes)
                { (attributes || (attributes = {}))[attr] = m.attributes[attr]; }
            }
            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
              { collapsed = sp; }
          } else if (sp.from > pos && nextChange > sp.from) {
            nextChange = sp.from;
          }
        }
        if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
          { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

        if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
          { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
        if (collapsed && (collapsed.from || 0) == pos) {
          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                             collapsed.marker, collapsed.from == null);
          if (collapsed.to == null) { return }
          if (collapsed.to == pos) { collapsed = false; }
        }
      }
      if (pos >= len) { break }

      var upto = Math.min(len, nextChange);
      while (true) {
        if (text) {
          var end = pos + text.length;
          if (!collapsed) {
            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
          }
          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
          pos = end;
          spanStartStyle = "";
        }
        text = allText.slice(at, at = styles[i++]);
        style = interpretTokenStyle(styles[i++], builder.cm.options);
      }
    }
  }


  // These objects are used to represent the visible (currently drawn)
  // part of the document. A LineView may correspond to multiple
  // logical lines, if those are connected by collapsed ranges.
  function LineView(doc, line, lineN) {
    // The starting line
    this.line = line;
    // Continuing lines, if any
    this.rest = visualLineContinued(line);
    // Number of logical lines in this visual line
    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
    this.node = this.text = null;
    this.hidden = lineIsHidden(doc, line);
  }

  // Create a range of LineView objects for the given lines.
  function buildViewArray(cm, from, to) {
    var array = [], nextPos;
    for (var pos = from; pos < to; pos = nextPos) {
      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
      nextPos = pos + view.size;
      array.push(view);
    }
    return array
  }

  var operationGroup = null;

  function pushOperation(op) {
    if (operationGroup) {
      operationGroup.ops.push(op);
    } else {
      op.ownsGroup = operationGroup = {
        ops: [op],
        delayedCallbacks: []
      };
    }
  }

  function fireCallbacksForOps(group) {
    // Calls delayed callbacks and cursorActivity handlers until no
    // new ones appear
    var callbacks = group.delayedCallbacks, i = 0;
    do {
      for (; i < callbacks.length; i++)
        { callbacks[i].call(null); }
      for (var j = 0; j < group.ops.length; j++) {
        var op = group.ops[j];
        if (op.cursorActivityHandlers)
          { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
            { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
      }
    } while (i < callbacks.length)
  }

  function finishOperation(op, endCb) {
    var group = op.ownsGroup;
    if (!group) { return }

    try { fireCallbacksForOps(group); }
    finally {
      operationGroup = null;
      endCb(group);
    }
  }

  var orphanDelayedCallbacks = null;

  // Often, we want to signal events at a point where we are in the
  // middle of some work, but don't want the handler to start calling
  // other methods on the editor, which might be in an inconsistent
  // state or simply not expect any other events to happen.
  // signalLater looks whether there are any handlers, and schedules
  // them to be executed when the last operation ends, or, if no
  // operation is active, when a timeout fires.
  function signalLater(emitter, type /*, values...*/) {
    var arr = getHandlers(emitter, type);
    if (!arr.length) { return }
    var args = Array.prototype.slice.call(arguments, 2), list;
    if (operationGroup) {
      list = operationGroup.delayedCallbacks;
    } else if (orphanDelayedCallbacks) {
      list = orphanDelayedCallbacks;
    } else {
      list = orphanDelayedCallbacks = [];
      setTimeout(fireOrphanDelayed, 0);
    }
    var loop = function ( i ) {
      list.push(function () { return arr[i].apply(null, args); });
    };

    for (var i = 0; i < arr.length; ++i)
      loop( i );
  }

  function fireOrphanDelayed() {
    var delayed = orphanDelayedCallbacks;
    orphanDelayedCallbacks = null;
    for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
  }

  // When an aspect of a line changes, a string is added to
  // lineView.changes. This updates the relevant part of the line's
  // DOM structure.
  function updateLineForChanges(cm, lineView, lineN, dims) {
    for (var j = 0; j < lineView.changes.length; j++) {
      var type = lineView.changes[j];
      if (type == "text") { updateLineText(cm, lineView); }
      else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
      else if (type == "class") { updateLineClasses(cm, lineView); }
      else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
    }
    lineView.changes = null;
  }

  // Lines with gutter elements, widgets or a background class need to
  // be wrapped, and have the extra elements added to the wrapper div
  function ensureLineWrapped(lineView) {
    if (lineView.node == lineView.text) {
      lineView.node = elt("div", null, null, "position: relative");
      if (lineView.text.parentNode)
        { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
      lineView.node.appendChild(lineView.text);
      if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
    }
    return lineView.node
  }

  function updateLineBackground(cm, lineView) {
    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
    if (cls) { cls += " CodeMirror-linebackground"; }
    if (lineView.background) {
      if (cls) { lineView.background.className = cls; }
      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
    } else if (cls) {
      var wrap = ensureLineWrapped(lineView);
      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
      cm.display.input.setUneditable(lineView.background);
    }
  }

  // Wrapper around buildLineContent which will reuse the structure
  // in display.externalMeasured when possible.
  function getLineContent(cm, lineView) {
    var ext = cm.display.externalMeasured;
    if (ext && ext.line == lineView.line) {
      cm.display.externalMeasured = null;
      lineView.measure = ext.measure;
      return ext.built
    }
    return buildLineContent(cm, lineView)
  }

  // Redraw the line's text. Interacts with the background and text
  // classes because the mode may output tokens that influence these
  // classes.
  function updateLineText(cm, lineView) {
    var cls = lineView.text.className;
    var built = getLineContent(cm, lineView);
    if (lineView.text == lineView.node) { lineView.node = built.pre; }
    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
    lineView.text = built.pre;
    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
      lineView.bgClass = built.bgClass;
      lineView.textClass = built.textClass;
      updateLineClasses(cm, lineView);
    } else if (cls) {
      lineView.text.className = cls;
    }
  }

  function updateLineClasses(cm, lineView) {
    updateLineBackground(cm, lineView);
    if (lineView.line.wrapClass)
      { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
    else if (lineView.node != lineView.text)
      { lineView.node.className = ""; }
    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
    lineView.text.className = textClass || "";
  }

  function updateLineGutter(cm, lineView, lineN, dims) {
    if (lineView.gutter) {
      lineView.node.removeChild(lineView.gutter);
      lineView.gutter = null;
    }
    if (lineView.gutterBackground) {
      lineView.node.removeChild(lineView.gutterBackground);
      lineView.gutterBackground = null;
    }
    if (lineView.line.gutterClass) {
      var wrap = ensureLineWrapped(lineView);
      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                      ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
      cm.display.input.setUneditable(lineView.gutterBackground);
      wrap.insertBefore(lineView.gutterBackground, lineView.text);
    }
    var markers = lineView.line.gutterMarkers;
    if (cm.options.lineNumbers || markers) {
      var wrap$1 = ensureLineWrapped(lineView);
      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
      gutterWrap.setAttribute("aria-hidden", "true");
      cm.display.input.setUneditable(gutterWrap);
      wrap$1.insertBefore(gutterWrap, lineView.text);
      if (lineView.line.gutterClass)
        { gutterWrap.className += " " + lineView.line.gutterClass; }
      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
        { lineView.lineNumber = gutterWrap.appendChild(
          elt("div", lineNumberFor(cm.options, lineN),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
      if (markers) { for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
        var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
        if (found)
          { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                     ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
      } }
    }
  }

  function updateLineWidgets(cm, lineView, dims) {
    if (lineView.alignable) { lineView.alignable = null; }
    var isWidget = classTest("CodeMirror-linewidget");
    for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
      next = node.nextSibling;
      if (isWidget.test(node.className)) { lineView.node.removeChild(node); }
    }
    insertLineWidgets(cm, lineView, dims);
  }

  // Build a line's DOM representation from scratch
  function buildLineElement(cm, lineView, lineN, dims) {
    var built = getLineContent(cm, lineView);
    lineView.text = lineView.node = built.pre;
    if (built.bgClass) { lineView.bgClass = built.bgClass; }
    if (built.textClass) { lineView.textClass = built.textClass; }

    updateLineClasses(cm, lineView);
    updateLineGutter(cm, lineView, lineN, dims);
    insertLineWidgets(cm, lineView, dims);
    return lineView.node
  }

  // A lineView may contain multiple logical lines (when merged by
  // collapsed spans). The widgets for all of them need to be drawn.
  function insertLineWidgets(cm, lineView, dims) {
    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
  }

  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
    if (!line.widgets) { return }
    var wrap = ensureLineWrapped(lineView);
    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
      if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
      positionLineWidget(widget, node, lineView, dims);
      cm.display.input.setUneditable(node);
      if (allowAbove && widget.above)
        { wrap.insertBefore(node, lineView.gutter || lineView.text); }
      else
        { wrap.appendChild(node); }
      signalLater(widget, "redraw");
    }
  }

  function positionLineWidget(widget, node, lineView, dims) {
    if (widget.noHScroll) {
  (lineView.alignable || (lineView.alignable = [])).push(node);
      var width = dims.wrapperWidth;
      node.style.left = dims.fixedPos + "px";
      if (!widget.coverGutter) {
        width -= dims.gutterTotalWidth;
        node.style.paddingLeft = dims.gutterTotalWidth + "px";
      }
      node.style.width = width + "px";
    }
    if (widget.coverGutter) {
      node.style.zIndex = 5;
      node.style.position = "relative";
      if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
    }
  }

  function widgetHeight(widget) {
    if (widget.height != null) { return widget.height }
    var cm = widget.doc.cm;
    if (!cm) { return 0 }
    if (!contains(document.body, widget.node)) {
      var parentStyle = "position: relative;";
      if (widget.coverGutter)
        { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
      if (widget.noHScroll)
        { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
    }
    return widget.height = widget.node.parentNode.offsetHeight
  }

  // Return true when the given mouse event happened in a widget
  function eventInWidget(display, e) {
    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
          (n.parentNode == display.sizer && n != display.mover))
        { return true }
    }
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
  function paddingH(display) {
    if (display.cachedPaddingH) { return display.cachedPaddingH }
    var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
    if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
    return data
  }

  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
  function displayWidth(cm) {
    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
  }
  function displayHeight(cm) {
    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
  }

  // Ensure the lineView.wrapping.heights array is populated. This is
  // an array of bottom offsets for the lines that make up a drawn
  // line. When lineWrapping is on, there might be more than one
  // height.
  function ensureLineHeights(cm, lineView, rect) {
    var wrapping = cm.options.lineWrapping;
    var curWidth = wrapping && displayWidth(cm);
    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
      var heights = lineView.measure.heights = [];
      if (wrapping) {
        lineView.measure.width = curWidth;
        var rects = lineView.text.firstChild.getClientRects();
        for (var i = 0; i < rects.length - 1; i++) {
          var cur = rects[i], next = rects[i + 1];
          if (Math.abs(cur.bottom - next.bottom) > 2)
            { heights.push((cur.bottom + next.top) / 2 - rect.top); }
        }
      }
      heights.push(rect.bottom - rect.top);
    }
  }

  // Find a line map (mapping character offsets to text nodes) and a
  // measurement cache for the given line number. (A line view might
  // contain multiple lines when collapsed ranges are present.)
  function mapFromLineView(lineView, line, lineN) {
    if (lineView.line == line)
      { return {map: lineView.measure.map, cache: lineView.measure.cache} }
    for (var i = 0; i < lineView.rest.length; i++)
      { if (lineView.rest[i] == line)
        { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
    for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
      { if (lineNo(lineView.rest[i$1]) > lineN)
        { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
  }

  // Render a line into the hidden node display.externalMeasured. Used
  // when measurement is needed for a line that's not in the viewport.
  function updateExternalMeasurement(cm, line) {
    line = visualLine(line);
    var lineN = lineNo(line);
    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
    view.lineN = lineN;
    var built = view.built = buildLineContent(cm, view);
    view.text = built.pre;
    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
    return view
  }

  // Get a {top, bottom, left, right} box (in line-local coordinates)
  // for a given character.
  function measureChar(cm, line, ch, bias) {
    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
  }

  // Find a line view that corresponds to the given line number.
  function findViewForLine(cm, lineN) {
    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
      { return cm.display.view[findViewIndex(cm, lineN)] }
    var ext = cm.display.externalMeasured;
    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
      { return ext }
  }

  // Measurement can be split in two steps, the set-up work that
  // applies to the whole line, and the measurement of the actual
  // character. Functions like coordsChar, that need to do a lot of
  // measurements in a row, can thus ensure that the set-up work is
  // only done once.
  function prepareMeasureForLine(cm, line) {
    var lineN = lineNo(line);
    var view = findViewForLine(cm, lineN);
    if (view && !view.text) {
      view = null;
    } else if (view && view.changes) {
      updateLineForChanges(cm, view, lineN, getDimensions(cm));
      cm.curOp.forceUpdate = true;
    }
    if (!view)
      { view = updateExternalMeasurement(cm, line); }

    var info = mapFromLineView(view, line, lineN);
    return {
      line: line, view: view, rect: null,
      map: info.map, cache: info.cache, before: info.before,
      hasHeights: false
    }
  }

  // Given a prepared measurement object, measures the position of an
  // actual character (or fetches it from the cache).
  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
    if (prepared.before) { ch = -1; }
    var key = ch + (bias || ""), found;
    if (prepared.cache.hasOwnProperty(key)) {
      found = prepared.cache[key];
    } else {
      if (!prepared.rect)
        { prepared.rect = prepared.view.text.getBoundingClientRect(); }
      if (!prepared.hasHeights) {
        ensureLineHeights(cm, prepared.view, prepared.rect);
        prepared.hasHeights = true;
      }
      found = measureCharInner(cm, prepared, ch, bias);
      if (!found.bogus) { prepared.cache[key] = found; }
    }
    return {left: found.left, right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom}
  }

  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

  function nodeAndOffsetInLineMap(map, ch, bias) {
    var node, start, end, collapse, mStart, mEnd;
    // First, search the line map for the text node corresponding to,
    // or closest to, the target character.
    for (var i = 0; i < map.length; i += 3) {
      mStart = map[i];
      mEnd = map[i + 1];
      if (ch < mStart) {
        start = 0; end = 1;
        collapse = "left";
      } else if (ch < mEnd) {
        start = ch - mStart;
        end = start + 1;
      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
        end = mEnd - mStart;
        start = end - 1;
        if (ch >= mEnd) { collapse = "right"; }
      }
      if (start != null) {
        node = map[i + 2];
        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
          { collapse = bias; }
        if (bias == "left" && start == 0)
          { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
            node = map[(i -= 3) + 2];
            collapse = "left";
          } }
        if (bias == "right" && start == mEnd - mStart)
          { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
            node = map[(i += 3) + 2];
            collapse = "right";
          } }
        break
      }
    }
    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
  }

  function getUsefulRect(rects, bias) {
    var rect = nullRect;
    if (bias == "left") { for (var i = 0; i < rects.length; i++) {
      if ((rect = rects[i]).left != rect.right) { break }
    } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
      if ((rect = rects[i$1]).left != rect.right) { break }
    } }
    return rect
  }

  function measureCharInner(cm, prepared, ch, bias) {
    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

    var rect;
    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
      for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
          { rect = node.parentNode.getBoundingClientRect(); }
        else
          { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
        if (rect.left || rect.right || start == 0) { break }
        end = start;
        start = start - 1;
        collapse = "right";
      }
      if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
    } else { // If it is a widget, simply get the box for the whole widget.
      if (start > 0) { collapse = bias = "right"; }
      var rects;
      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
        { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
      else
        { rect = node.getBoundingClientRect(); }
    }
    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
      var rSpan = node.parentNode.getClientRects()[0];
      if (rSpan)
        { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
      else
        { rect = nullRect; }
    }

    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
    var mid = (rtop + rbot) / 2;
    var heights = prepared.view.measure.heights;
    var i = 0;
    for (; i < heights.length - 1; i++)
      { if (mid < heights[i]) { break } }
    var top = i ? heights[i - 1] : 0, bot = heights[i];
    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                  top: top, bottom: bot};
    if (!rect.left && !rect.right) { result.bogus = true; }
    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

    return result
  }

  // Work around problem with bounding client rects on ranges being
  // returned incorrectly when zoomed on IE10 and below.
  function maybeUpdateRectForZooming(measure, rect) {
    if (!window.screen || screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
      { return rect }
    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
    return {left: rect.left * scaleX, right: rect.right * scaleX,
            top: rect.top * scaleY, bottom: rect.bottom * scaleY}
  }

  function clearLineMeasurementCacheFor(lineView) {
    if (lineView.measure) {
      lineView.measure.cache = {};
      lineView.measure.heights = null;
      if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
        { lineView.measure.caches[i] = {}; } }
    }
  }

  function clearLineMeasurementCache(cm) {
    cm.display.externalMeasure = null;
    removeChildren(cm.display.lineMeasure);
    for (var i = 0; i < cm.display.view.length; i++)
      { clearLineMeasurementCacheFor(cm.display.view[i]); }
  }

  function clearCaches(cm) {
    clearLineMeasurementCache(cm);
    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
    if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
    cm.display.lineNumChars = null;
  }

  function pageScrollX() {
    // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
    // which causes page_Offset and bounding client rects to use
    // different reference viewports and invalidate our calculations.
    if (chrome && android) { return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) }
    return window.pageXOffset || (document.documentElement || document.body).scrollLeft
  }
  function pageScrollY() {
    if (chrome && android) { return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) }
    return window.pageYOffset || (document.documentElement || document.body).scrollTop
  }

  function widgetTopHeight(lineObj) {
    var height = 0;
    if (lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above)
      { height += widgetHeight(lineObj.widgets[i]); } } }
    return height
  }

  // Converts a {top, bottom, left, right} box from line-local
  // coordinates into another coordinate system. Context may be one of
  // "line", "div" (display.lineDiv), "local"./null (editor), "window",
  // or "page".
  function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
    if (!includeWidgets) {
      var height = widgetTopHeight(lineObj);
      rect.top += height; rect.bottom += height;
    }
    if (context == "line") { return rect }
    if (!context) { context = "local"; }
    var yOff = heightAtLine(lineObj);
    if (context == "local") { yOff += paddingTop(cm.display); }
    else { yOff -= cm.display.viewOffset; }
    if (context == "page" || context == "window") {
      var lOff = cm.display.lineSpace.getBoundingClientRect();
      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
      rect.left += xOff; rect.right += xOff;
    }
    rect.top += yOff; rect.bottom += yOff;
    return rect
  }

  // Coverts a box from "div" coords to another coordinate system.
  // Context may be "window", "page", "div", or "local"./null.
  function fromCoordSystem(cm, coords, context) {
    if (context == "div") { return coords }
    var left = coords.left, top = coords.top;
    // First move into "page" coordinate system
    if (context == "page") {
      left -= pageScrollX();
      top -= pageScrollY();
    } else if (context == "local" || !context) {
      var localBox = cm.display.sizer.getBoundingClientRect();
      left += localBox.left;
      top += localBox.top;
    }

    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
  }

  function charCoords(cm, pos, context, lineObj, bias) {
    if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
  }

  // Returns a box for a given cursor position, which may have an
  // 'other' property containing the position of the secondary cursor
  // on a bidi boundary.
  // A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
  // and after `char - 1` in writing order of `char - 1`
  // A cursor Pos(line, char, "after") is on the same visual line as `char`
  // and before `char` in writing order of `char`
  // Examples (upper-case letters are RTL, lower-case are LTR):
  //     Pos(0, 1, ...)
  //     before   after
  // ab     a|b     a|b
  // aB     a|B     aB|
  // Ab     |Ab     A|b
  // AB     B|A     B|A
  // Every position after the last character on a line is considered to stick
  // to the last character on the line.
  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
    lineObj = lineObj || getLine(cm.doc, pos.line);
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    function get(ch, right) {
      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
      if (right) { m.left = m.right; } else { m.right = m.left; }
      return intoCoordSystem(cm, lineObj, m, context)
    }
    var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
    if (ch >= lineObj.text.length) {
      ch = lineObj.text.length;
      sticky = "before";
    } else if (ch <= 0) {
      ch = 0;
      sticky = "after";
    }
    if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

    function getBidi(ch, partPos, invert) {
      var part = order[partPos], right = part.level == 1;
      return get(invert ? ch - 1 : ch, right != invert)
    }
    var partPos = getBidiPartAt(order, ch, sticky);
    var other = bidiOther;
    var val = getBidi(ch, partPos, sticky == "before");
    if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
    return val
  }

  // Used to cheaply estimate the coordinates for a position. Used for
  // intermediate scroll updates.
  function estimateCoords(cm, pos) {
    var left = 0;
    pos = clipPos(cm.doc, pos);
    if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
    var lineObj = getLine(cm.doc, pos.line);
    var top = heightAtLine(lineObj) + paddingTop(cm.display);
    return {left: left, right: left, top: top, bottom: top + lineObj.height}
  }

  // Positions returned by coordsChar contain some extra information.
  // xRel is the relative x position of the input coordinates compared
  // to the found position (so xRel > 0 means the coordinates are to
  // the right of the character position, for example). When outside
  // is true, that means the coordinates lie outside the line's
  // vertical range.
  function PosWithInfo(line, ch, sticky, outside, xRel) {
    var pos = Pos(line, ch, sticky);
    pos.xRel = xRel;
    if (outside) { pos.outside = outside; }
    return pos
  }

  // Compute the character position closest to the given coordinates.
  // Input must be lineSpace-local ("div" coordinate system).
  function coordsChar(cm, x, y) {
    var doc = cm.doc;
    y += cm.display.viewOffset;
    if (y < 0) { return PosWithInfo(doc.first, 0, null, -1, -1) }
    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
    if (lineN > last)
      { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1) }
    if (x < 0) { x = 0; }

    var lineObj = getLine(doc, lineN);
    for (;;) {
      var found = coordsCharInner(cm, lineObj, lineN, x, y);
      var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
      if (!collapsed) { return found }
      var rangeEnd = collapsed.find(1);
      if (rangeEnd.line == lineN) { return rangeEnd }
      lineObj = getLine(doc, lineN = rangeEnd.line);
    }
  }

  function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
    y -= widgetTopHeight(lineObj);
    var end = lineObj.text.length;
    var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
    end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
    return {begin: begin, end: end}
  }

  function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
    return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
  }

  // Returns true if the given side of a box is after the given
  // coordinates, in top-to-bottom, left-to-right order.
  function boxIsAfter(box, x, y, left) {
    return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
  }

  function coordsCharInner(cm, lineObj, lineNo, x, y) {
    // Move y into line-local coordinate space
    y -= heightAtLine(lineObj);
    var preparedMeasure = prepareMeasureForLine(cm, lineObj);
    // When directly calling `measureCharPrepared`, we have to adjust
    // for the widgets at this line.
    var widgetHeight = widgetTopHeight(lineObj);
    var begin = 0, end = lineObj.text.length, ltr = true;

    var order = getOrder(lineObj, cm.doc.direction);
    // If the line isn't plain left-to-right text, first figure out
    // which bidi section the coordinates fall into.
    if (order) {
      var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                   (cm, lineObj, lineNo, preparedMeasure, order, x, y);
      ltr = part.level != 1;
      // The awkward -1 offsets are needed because findFirst (called
      // on these below) will treat its first bound as inclusive,
      // second as exclusive, but we want to actually address the
      // characters in the part's range
      begin = ltr ? part.from : part.to - 1;
      end = ltr ? part.to : part.from - 1;
    }

    // A binary search to find the first character whose bounding box
    // starts after the coordinates. If we run across any whose box wrap
    // the coordinates, store that.
    var chAround = null, boxAround = null;
    var ch = findFirst(function (ch) {
      var box = measureCharPrepared(cm, preparedMeasure, ch);
      box.top += widgetHeight; box.bottom += widgetHeight;
      if (!boxIsAfter(box, x, y, false)) { return false }
      if (box.top <= y && box.left <= x) {
        chAround = ch;
        boxAround = box;
      }
      return true
    }, begin, end);

    var baseX, sticky, outside = false;
    // If a box around the coordinates was found, use that
    if (boxAround) {
      // Distinguish coordinates nearer to the left or right side of the box
      var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
      ch = chAround + (atStart ? 0 : 1);
      sticky = atStart ? "after" : "before";
      baseX = atLeft ? boxAround.left : boxAround.right;
    } else {
      // (Adjust for extended bound, if necessary.)
      if (!ltr && (ch == end || ch == begin)) { ch++; }
      // To determine which side to associate with, get the box to the
      // left of the character and compare it's vertical position to the
      // coordinates
      sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
        (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight <= y) == ltr ?
        "after" : "before";
      // Now get accurate coordinates for this place, in order to get a
      // base X position
      var coords = cursorCoords(cm, Pos(lineNo, ch, sticky), "line", lineObj, preparedMeasure);
      baseX = coords.left;
      outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
    }

    ch = skipExtendingChars(lineObj.text, ch, 1);
    return PosWithInfo(lineNo, ch, sticky, outside, x - baseX)
  }

  function coordsBidiPart(cm, lineObj, lineNo, preparedMeasure, order, x, y) {
    // Bidi parts are sorted left-to-right, and in a non-line-wrapping
    // situation, we can take this ordering to correspond to the visual
    // ordering. This finds the first part whose end is after the given
    // coordinates.
    var index = findFirst(function (i) {
      var part = order[i], ltr = part.level != 1;
      return boxIsAfter(cursorCoords(cm, Pos(lineNo, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                     "line", lineObj, preparedMeasure), x, y, true)
    }, 0, order.length - 1);
    var part = order[index];
    // If this isn't the first part, the part's start is also after
    // the coordinates, and the coordinates aren't on the same line as
    // that start, move one part back.
    if (index > 0) {
      var ltr = part.level != 1;
      var start = cursorCoords(cm, Pos(lineNo, ltr ? part.from : part.to, ltr ? "after" : "before"),
                               "line", lineObj, preparedMeasure);
      if (boxIsAfter(start, x, y, true) && start.top > y)
        { part = order[index - 1]; }
    }
    return part
  }

  function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
    // In a wrapped line, rtl text on wrapping boundaries can do things
    // that don't correspond to the ordering in our `order` array at
    // all, so a binary search doesn't work, and we want to return a
    // part that only spans one line so that the binary search in
    // coordsCharInner is safe. As such, we first find the extent of the
    // wrapped line, and then do a flat search in which we discard any
    // spans that aren't on the line.
    var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
    var begin = ref.begin;
    var end = ref.end;
    if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
    var part = null, closestDist = null;
    for (var i = 0; i < order.length; i++) {
      var p = order[i];
      if (p.from >= end || p.to <= begin) { continue }
      var ltr = p.level != 1;
      var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
      // Weigh against spans ending before this, so that they are only
      // picked if nothing ends after
      var dist = endX < x ? x - endX + 1e9 : endX - x;
      if (!part || closestDist > dist) {
        part = p;
        closestDist = dist;
      }
    }
    if (!part) { part = order[order.length - 1]; }
    // Clip the part to the wrapped line.
    if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
    if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
    return part
  }

  var measureText;
  // Compute the default text height.
  function textHeight(display) {
    if (display.cachedTextHeight != null) { return display.cachedTextHeight }
    if (measureText == null) {
      measureText = elt("pre", null, "CodeMirror-line-like");
      // Measure a bunch of lines, for browsers that compute
      // fractional heights.
      for (var i = 0; i < 49; ++i) {
        measureText.appendChild(document.createTextNode("x"));
        measureText.appendChild(elt("br"));
      }
      measureText.appendChild(document.createTextNode("x"));
    }
    removeChildrenAndAdd(display.measure, measureText);
    var height = measureText.offsetHeight / 50;
    if (height > 3) { display.cachedTextHeight = height; }
    removeChildren(display.measure);
    return height || 1
  }

  // Compute the default character width.
  function charWidth(display) {
    if (display.cachedCharWidth != null) { return display.cachedCharWidth }
    var anchor = elt("span", "xxxxxxxxxx");
    var pre = elt("pre", [anchor], "CodeMirror-line-like");
    removeChildrenAndAdd(display.measure, pre);
    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
    if (width > 2) { display.cachedCharWidth = width; }
    return width || 10
  }

  // Do a bulk-read of the DOM positions and sizes needed to draw the
  // view, so that we don't interleave reading and writing to the DOM.
  function getDimensions(cm) {
    var d = cm.display, left = {}, width = {};
    var gutterLeft = d.gutters.clientLeft;
    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
      var id = cm.display.gutterSpecs[i].className;
      left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
      width[id] = n.clientWidth;
    }
    return {fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth}
  }

  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
  // but using getBoundingClientRect to get a sub-pixel-accurate
  // result.
  function compensateForHScroll(display) {
    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
  }

  // Returns a function that estimates the height of a line, to use as
  // first approximation until the line becomes visible (and is thus
  // properly measurable).
  function estimateHeight(cm) {
    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
    return function (line) {
      if (lineIsHidden(cm.doc, line)) { return 0 }

      var widgetsHeight = 0;
      if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
        if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
      } }

      if (wrapping)
        { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
      else
        { return widgetsHeight + th }
    }
  }

  function estimateLineHeights(cm) {
    var doc = cm.doc, est = estimateHeight(cm);
    doc.iter(function (line) {
      var estHeight = est(line);
      if (estHeight != line.height) { updateLineHeight(line, estHeight); }
    });
  }

  // Given a mouse event, find the corresponding position. If liberal
  // is false, it checks whether a gutter or scrollbar was clicked,
  // and returns null if it was. forRect is used by rectangular
  // selections, and tries to estimate a character position even for
  // coordinates beyond the right of the text.
  function posFromMouse(cm, e, liberal, forRect) {
    var display = cm.display;
    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

    var x, y, space = display.lineSpace.getBoundingClientRect();
    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
    try { x = e.clientX - space.left; y = e.clientY - space.top; }
    catch (e$1) { return null }
    var coords = coordsChar(cm, x, y), line;
    if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
    }
    return coords
  }

  // Find the view element corresponding to a given line. Return null
  // when the line isn't visible.
  function findViewIndex(cm, n) {
    if (n >= cm.display.viewTo) { return null }
    n -= cm.display.viewFrom;
    if (n < 0) { return null }
    var view = cm.display.view;
    for (var i = 0; i < view.length; i++) {
      n -= view[i].size;
      if (n < 0) { return i }
    }
  }

  // Updates the display.view data structure for a given change to the
  // document. From and to are in pre-change coordinates. Lendiff is
  // the amount of lines added or subtracted by the change. This is
  // used for changes that span multiple lines, or change the way
  // lines are divided into visual lines. regLineChange (below)
  // registers single-line changes.
  function regChange(cm, from, to, lendiff) {
    if (from == null) { from = cm.doc.first; }
    if (to == null) { to = cm.doc.first + cm.doc.size; }
    if (!lendiff) { lendiff = 0; }

    var display = cm.display;
    if (lendiff && to < display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers > from))
      { display.updateLineNumbers = from; }

    cm.curOp.viewChanged = true;

    if (from >= display.viewTo) { // Change after
      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
        { resetView(cm); }
    } else if (to <= display.viewFrom) { // Change before
      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
        resetView(cm);
      } else {
        display.viewFrom += lendiff;
        display.viewTo += lendiff;
      }
    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
      resetView(cm);
    } else if (from <= display.viewFrom) { // Top overlap
      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cut) {
        display.view = display.view.slice(cut.index);
        display.viewFrom = cut.lineN;
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    } else if (to >= display.viewTo) { // Bottom overlap
      var cut$1 = viewCuttingPoint(cm, from, from, -1);
      if (cut$1) {
        display.view = display.view.slice(0, cut$1.index);
        display.viewTo = cut$1.lineN;
      } else {
        resetView(cm);
      }
    } else { // Gap in the middle
      var cutTop = viewCuttingPoint(cm, from, from, -1);
      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cutTop && cutBot) {
        display.view = display.view.slice(0, cutTop.index)
          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
          .concat(display.view.slice(cutBot.index));
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    }

    var ext = display.externalMeasured;
    if (ext) {
      if (to < ext.lineN)
        { ext.lineN += lendiff; }
      else if (from < ext.lineN + ext.size)
        { display.externalMeasured = null; }
    }
  }

  // Register a change to a single line. Type must be one of "text",
  // "gutter", "class", "widget"
  function regLineChange(cm, line, type) {
    cm.curOp.viewChanged = true;
    var display = cm.display, ext = cm.display.externalMeasured;
    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
      { display.externalMeasured = null; }

    if (line < display.viewFrom || line >= display.viewTo) { return }
    var lineView = display.view[findViewIndex(cm, line)];
    if (lineView.node == null) { return }
    var arr = lineView.changes || (lineView.changes = []);
    if (indexOf(arr, type) == -1) { arr.push(type); }
  }

  // Clear the view.
  function resetView(cm) {
    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
    cm.display.view = [];
    cm.display.viewOffset = 0;
  }

  function viewCuttingPoint(cm, oldN, newN, dir) {
    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
      { return {index: index, lineN: newN} }
    var n = cm.display.viewFrom;
    for (var i = 0; i < index; i++)
      { n += view[i].size; }
    if (n != oldN) {
      if (dir > 0) {
        if (index == view.length - 1) { return null }
        diff = (n + view[index].size) - oldN;
        index++;
      } else {
        diff = n - oldN;
      }
      oldN += diff; newN += diff;
    }
    while (visualLineNo(cm.doc, newN) != newN) {
      if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
      index += dir;
    }
    return {index: index, lineN: newN}
  }

  // Force the view to cover a given range, adding empty view element
  // or clipping off existing ones as needed.
  function adjustView(cm, from, to) {
    var display = cm.display, view = display.view;
    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
      display.view = buildViewArray(cm, from, to);
      display.viewFrom = from;
    } else {
      if (display.viewFrom > from)
        { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
      else if (display.viewFrom < from)
        { display.view = display.view.slice(findViewIndex(cm, from)); }
      display.viewFrom = from;
      if (display.viewTo < to)
        { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
      else if (display.viewTo > to)
        { display.view = display.view.slice(0, findViewIndex(cm, to)); }
    }
    display.viewTo = to;
  }

  // Count the number of lines in the view whose DOM representation is
  // out of date (or nonexistent).
  function countDirtyView(cm) {
    var view = cm.display.view, dirty = 0;
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
    }
    return dirty
  }

  function updateSelection(cm) {
    cm.display.input.showSelection(cm.display.input.prepareSelection());
  }

  function prepareSelection(cm, primary) {
    if ( primary === void 0 ) primary = true;

    var doc = cm.doc, result = {};
    var curFragment = result.cursors = document.createDocumentFragment();
    var selFragment = result.selection = document.createDocumentFragment();

    for (var i = 0; i < doc.sel.ranges.length; i++) {
      if (!primary && i == doc.sel.primIndex) { continue }
      var range = doc.sel.ranges[i];
      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
      var collapsed = range.empty();
      if (collapsed || cm.options.showCursorWhenSelecting)
        { drawSelectionCursor(cm, range.head, curFragment); }
      if (!collapsed)
        { drawSelectionRange(cm, range, selFragment); }
    }
    return result
  }

  // Draws a cursor for the given range
  function drawSelectionCursor(cm, head, output) {
    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
    cursor.style.left = pos.left + "px";
    cursor.style.top = pos.top + "px";
    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

    if (pos.other) {
      // Secondary cursor, shown when on a 'jump' in bi-directional text
      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
      otherCursor.style.display = "";
      otherCursor.style.left = pos.other.left + "px";
      otherCursor.style.top = pos.other.top + "px";
      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
    }
  }

  function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

  // Draws the given range as a highlighted selection
  function drawSelectionRange(cm, range, output) {
    var display = cm.display, doc = cm.doc;
    var fragment = document.createDocumentFragment();
    var padding = paddingH(cm.display), leftSide = padding.left;
    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
    var docLTR = doc.direction == "ltr";

    function add(left, top, width, bottom) {
      if (top < 0) { top = 0; }
      top = Math.round(top);
      bottom = Math.round(bottom);
      fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
    }

    function drawForLine(line, fromArg, toArg) {
      var lineObj = getLine(doc, line);
      var lineLen = lineObj.text.length;
      var start, end;
      function coords(ch, bias) {
        return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
      }

      function wrapX(pos, dir, side) {
        var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
        var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
        var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
        return coords(ch, prop)[prop]
      }

      var order = getOrder(lineObj, doc.direction);
      iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
        var ltr = dir == "ltr";
        var fromPos = coords(from, ltr ? "left" : "right");
        var toPos = coords(to - 1, ltr ? "right" : "left");

        var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
        var first = i == 0, last = !order || i == order.length - 1;
        if (toPos.top - fromPos.top <= 3) { // Single line
          var openLeft = (docLTR ? openStart : openEnd) && first;
          var openRight = (docLTR ? openEnd : openStart) && last;
          var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
          var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
          add(left, fromPos.top, right - left, fromPos.bottom);
        } else { // Multiple lines
          var topLeft, topRight, botLeft, botRight;
          if (ltr) {
            topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
            topRight = docLTR ? rightSide : wrapX(from, dir, "before");
            botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
            botRight = docLTR && openEnd && last ? rightSide : toPos.right;
          } else {
            topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
            topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
            botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
            botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
          }
          add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
          if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
          add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
        }

        if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
        if (cmpCoords(toPos, start) < 0) { start = toPos; }
        if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
        if (cmpCoords(toPos, end) < 0) { end = toPos; }
      });
      return {start: start, end: end}
    }

    var sFrom = range.from(), sTo = range.to();
    if (sFrom.line == sTo.line) {
      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
    } else {
      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
      var singleVLine = visualLine(fromLine) == visualLine(toLine);
      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
      if (singleVLine) {
        if (leftEnd.top < rightStart.top - 2) {
          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
        } else {
          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
        }
      }
      if (leftEnd.bottom < rightStart.top)
        { add(leftSide, leftEnd.bottom, null, rightStart.top); }
    }

    output.appendChild(fragment);
  }

  // Cursor-blinking
  function restartBlink(cm) {
    if (!cm.state.focused) { return }
    var display = cm.display;
    clearInterval(display.blinker);
    var on = true;
    display.cursorDiv.style.visibility = "";
    if (cm.options.cursorBlinkRate > 0)
      { display.blinker = setInterval(function () {
        if (!cm.hasFocus()) { onBlur(cm); }
        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
      }, cm.options.cursorBlinkRate); }
    else if (cm.options.cursorBlinkRate < 0)
      { display.cursorDiv.style.visibility = "hidden"; }
  }

  function ensureFocus(cm) {
    if (!cm.hasFocus()) {
      cm.display.input.focus();
      if (!cm.state.focused) { onFocus(cm); }
    }
  }

  function delayBlurEvent(cm) {
    cm.state.delayingBlurEvent = true;
    setTimeout(function () { if (cm.state.delayingBlurEvent) {
      cm.state.delayingBlurEvent = false;
      if (cm.state.focused) { onBlur(cm); }
    } }, 100);
  }

  function onFocus(cm, e) {
    if (cm.state.delayingBlurEvent && !cm.state.draggingText) { cm.state.delayingBlurEvent = false; }

    if (cm.options.readOnly == "nocursor") { return }
    if (!cm.state.focused) {
      signal(cm, "focus", cm, e);
      cm.state.focused = true;
      addClass(cm.display.wrapper, "CodeMirror-focused");
      // This test prevents this from firing when a context
      // menu is closed (since the input reset would kill the
      // select-all detection hack)
      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
        cm.display.input.reset();
        if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
      }
      cm.display.input.receivedFocus();
    }
    restartBlink(cm);
  }
  function onBlur(cm, e) {
    if (cm.state.delayingBlurEvent) { return }

    if (cm.state.focused) {
      signal(cm, "blur", cm, e);
      cm.state.focused = false;
      rmClass(cm.display.wrapper, "CodeMirror-focused");
    }
    clearInterval(cm.display.blinker);
    setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
  }

  // Read the actual heights of the rendered lines, and update their
  // stored heights to match.
  function updateHeightsInViewport(cm) {
    var display = cm.display;
    var prevBottom = display.lineDiv.offsetTop;
    for (var i = 0; i < display.view.length; i++) {
      var cur = display.view[i], wrapping = cm.options.lineWrapping;
      var height = (void 0), width = 0;
      if (cur.hidden) { continue }
      if (ie && ie_version < 8) {
        var bot = cur.node.offsetTop + cur.node.offsetHeight;
        height = bot - prevBottom;
        prevBottom = bot;
      } else {
        var box = cur.node.getBoundingClientRect();
        height = box.bottom - box.top;
        // Check that lines don't extend past the right of the current
        // editor width
        if (!wrapping && cur.text.firstChild)
          { width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1; }
      }
      var diff = cur.line.height - height;
      if (diff > .005 || diff < -.005) {
        updateLineHeight(cur.line, height);
        updateWidgetHeight(cur.line);
        if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
          { updateWidgetHeight(cur.rest[j]); } }
      }
      if (width > cm.display.sizerWidth) {
        var chWidth = Math.ceil(width / charWidth(cm.display));
        if (chWidth > cm.display.maxLineLength) {
          cm.display.maxLineLength = chWidth;
          cm.display.maxLine = cur.line;
          cm.display.maxLineChanged = true;
        }
      }
    }
  }

  // Read and store the height of line widgets associated with the
  // given line.
  function updateWidgetHeight(line) {
    if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
      var w = line.widgets[i], parent = w.node.parentNode;
      if (parent) { w.height = parent.offsetHeight; }
    } }
  }

  // Compute the lines that are visible in a given viewport (defaults
  // the the current scroll position). viewport may contain top,
  // height, and ensure (see op.scrollToPos) properties.
  function visibleLines(display, doc, viewport) {
    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
    top = Math.floor(top - paddingTop(display));
    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
    // forces those lines into the viewport (if possible).
    if (viewport && viewport.ensure) {
      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
      if (ensureFrom < from) {
        from = ensureFrom;
        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
        to = ensureTo;
      }
    }
    return {from: from, to: Math.max(to, from + 1)}
  }

  // SCROLLING THINGS INTO VIEW

  // If an editor sits on the top or bottom of the window, partially
  // scrolled out of view, this ensures that the cursor is visible.
  function maybeScrollWindow(cm, rect) {
    if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
    if (rect.top + box.top < 0) { doScroll = true; }
    else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false; }
    if (doScroll != null && !phantom) {
      var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
      cm.display.lineSpace.appendChild(scrollNode);
      scrollNode.scrollIntoView(doScroll);
      cm.display.lineSpace.removeChild(scrollNode);
    }
  }

  // Scroll a given position into view (immediately), verifying that
  // it actually became visible (as line heights are accurately
  // measured, the position of something may 'drift' during drawing).
  function scrollPosIntoView(cm, pos, end, margin) {
    if (margin == null) { margin = 0; }
    var rect;
    if (!cm.options.lineWrapping && pos == end) {
      // Set pos and end to the cursor positions around the character pos sticks to
      // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
      // If pos == Pos(_, 0, "before"), pos and end are unchanged
      end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
      pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
    }
    for (var limit = 0; limit < 5; limit++) {
      var changed = false;
      var coords = cursorCoords(cm, pos);
      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
      rect = {left: Math.min(coords.left, endCoords.left),
              top: Math.min(coords.top, endCoords.top) - margin,
              right: Math.max(coords.left, endCoords.left),
              bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
      var scrollPos = calculateScrollPos(cm, rect);
      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
      if (scrollPos.scrollTop != null) {
        updateScrollTop(cm, scrollPos.scrollTop);
        if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
      }
      if (!changed) { break }
    }
    return rect
  }

  // Scroll a given set of coordinates into view (immediately).
  function scrollIntoView(cm, rect) {
    var scrollPos = calculateScrollPos(cm, rect);
    if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
    if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
  }

  // Calculate a new scroll position needed to scroll the given
  // rectangle into view. Returns an object with scrollTop and
  // scrollLeft properties. When these are undefined, the
  // vertical/horizontal position does not need to be adjusted.
  function calculateScrollPos(cm, rect) {
    var display = cm.display, snapMargin = textHeight(cm.display);
    if (rect.top < 0) { rect.top = 0; }
    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
    var screen = displayHeight(cm), result = {};
    if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
    var docBottom = cm.doc.height + paddingVert(display);
    var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
    if (rect.top < screentop) {
      result.scrollTop = atTop ? 0 : rect.top;
    } else if (rect.bottom > screentop + screen) {
      var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
      if (newTop != screentop) { result.scrollTop = newTop; }
    }

    var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
    var screenw = displayWidth(cm) - display.gutters.offsetWidth;
    var tooWide = rect.right - rect.left > screenw;
    if (tooWide) { rect.right = rect.left + screenw; }
    if (rect.left < 10)
      { result.scrollLeft = 0; }
    else if (rect.left < screenleft)
      { result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10)); }
    else if (rect.right > screenw + screenleft - 3)
      { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
    return result
  }

  // Store a relative adjustment to the scroll position in the current
  // operation (to be applied when the operation finishes).
  function addToScrollTop(cm, top) {
    if (top == null) { return }
    resolveScrollToPos(cm);
    cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
  }

  // Make sure that at the end of the operation the current cursor is
  // shown.
  function ensureCursorVisible(cm) {
    resolveScrollToPos(cm);
    var cur = cm.getCursor();
    cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
  }

  function scrollToCoords(cm, x, y) {
    if (x != null || y != null) { resolveScrollToPos(cm); }
    if (x != null) { cm.curOp.scrollLeft = x; }
    if (y != null) { cm.curOp.scrollTop = y; }
  }

  function scrollToRange(cm, range) {
    resolveScrollToPos(cm);
    cm.curOp.scrollToPos = range;
  }

  // When an operation has its scrollToPos property set, and another
  // scroll action is applied before the end of the operation, this
  // 'simulates' scrolling that position into view in a cheap way, so
  // that the effect of intermediate scroll commands is not ignored.
  function resolveScrollToPos(cm) {
    var range = cm.curOp.scrollToPos;
    if (range) {
      cm.curOp.scrollToPos = null;
      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
      scrollToCoordsRange(cm, from, to, range.margin);
    }
  }

  function scrollToCoordsRange(cm, from, to, margin) {
    var sPos = calculateScrollPos(cm, {
      left: Math.min(from.left, to.left),
      top: Math.min(from.top, to.top) - margin,
      right: Math.max(from.right, to.right),
      bottom: Math.max(from.bottom, to.bottom) + margin
    });
    scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
  }

  // Sync the scrollable area and scrollbars, ensure the viewport
  // covers the visible area.
  function updateScrollTop(cm, val) {
    if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
    if (!gecko) { updateDisplaySimple(cm, {top: val}); }
    setScrollTop(cm, val, true);
    if (gecko) { updateDisplaySimple(cm); }
    startWorker(cm, 100);
  }

  function setScrollTop(cm, val, forceScroll) {
    val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
    if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
    cm.doc.scrollTop = val;
    cm.display.scrollbars.setScrollTop(val);
    if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
  }

  // Sync scroller and scrollbar, ensure the gutter elements are
  // aligned.
  function setScrollLeft(cm, val, isScroller, forceScroll) {
    val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
    if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
    cm.doc.scrollLeft = val;
    alignHorizontally(cm);
    if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
    cm.display.scrollbars.setScrollLeft(val);
  }

  // SCROLLBARS

  // Prepare DOM reads needed to update the scrollbars. Done in one
  // shot to minimize update/measure roundtrips.
  function measureForScrollbars(cm) {
    var d = cm.display, gutterW = d.gutters.offsetWidth;
    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
    return {
      clientHeight: d.scroller.clientHeight,
      viewHeight: d.wrapper.clientHeight,
      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
      viewWidth: d.wrapper.clientWidth,
      barLeft: cm.options.fixedGutter ? gutterW : 0,
      docHeight: docH,
      scrollHeight: docH + scrollGap(cm) + d.barHeight,
      nativeBarWidth: d.nativeBarWidth,
      gutterWidth: gutterW
    }
  }

  var NativeScrollbars = function(place, scroll, cm) {
    this.cm = cm;
    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
    vert.tabIndex = horiz.tabIndex = -1;
    place(vert); place(horiz);

    on(vert, "scroll", function () {
      if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
    });
    on(horiz, "scroll", function () {
      if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
    });

    this.checkedZeroWidth = false;
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
  };

  NativeScrollbars.prototype.update = function (measure) {
    var needsH = measure.scrollWidth > measure.clientWidth + 1;
    var needsV = measure.scrollHeight > measure.clientHeight + 1;
    var sWidth = measure.nativeBarWidth;

    if (needsV) {
      this.vert.style.display = "block";
      this.vert.style.bottom = needsH ? sWidth + "px" : "0";
      var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
      // A bug in IE8 can cause this value to be negative, so guard it.
      this.vert.firstChild.style.height =
        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
    } else {
      this.vert.style.display = "";
      this.vert.firstChild.style.height = "0";
    }

    if (needsH) {
      this.horiz.style.display = "block";
      this.horiz.style.right = needsV ? sWidth + "px" : "0";
      this.horiz.style.left = measure.barLeft + "px";
      var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
      this.horiz.firstChild.style.width =
        Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
    } else {
      this.horiz.style.display = "";
      this.horiz.firstChild.style.width = "0";
    }

    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
      if (sWidth == 0) { this.zeroWidthHack(); }
      this.checkedZeroWidth = true;
    }

    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
  };

  NativeScrollbars.prototype.setScrollLeft = function (pos) {
    if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
    if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
  };

  NativeScrollbars.prototype.setScrollTop = function (pos) {
    if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
    if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
  };

  NativeScrollbars.prototype.zeroWidthHack = function () {
    var w = mac && !mac_geMountainLion ? "12px" : "18px";
    this.horiz.style.height = this.vert.style.width = w;
    this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
    this.disableHoriz = new Delayed;
    this.disableVert = new Delayed;
  };

  NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
    bar.style.pointerEvents = "auto";
    function maybeDisable() {
      // To find out whether the scrollbar is still visible, we
      // check whether the element under the pixel in the bottom
      // right corner of the scrollbar box is the scrollbar box
      // itself (when the bar is still visible) or its filler child
      // (when the bar is hidden). If it is still visible, we keep
      // it enabled, if it's hidden, we disable pointer events.
      var box = bar.getBoundingClientRect();
      var elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
          : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
      if (elt != bar) { bar.style.pointerEvents = "none"; }
      else { delay.set(1000, maybeDisable); }
    }
    delay.set(1000, maybeDisable);
  };

  NativeScrollbars.prototype.clear = function () {
    var parent = this.horiz.parentNode;
    parent.removeChild(this.horiz);
    parent.removeChild(this.vert);
  };

  var NullScrollbars = function () {};

  NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
  NullScrollbars.prototype.setScrollLeft = function () {};
  NullScrollbars.prototype.setScrollTop = function () {};
  NullScrollbars.prototype.clear = function () {};

  function updateScrollbars(cm, measure) {
    if (!measure) { measure = measureForScrollbars(cm); }
    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
    updateScrollbarsInner(cm, measure);
    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
        { updateHeightsInViewport(cm); }
      updateScrollbarsInner(cm, measureForScrollbars(cm));
      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
    }
  }

  // Re-synchronize the fake scrollbars with the actual size of the
  // content.
  function updateScrollbarsInner(cm, measure) {
    var d = cm.display;
    var sizes = d.scrollbars.update(measure);

    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

    if (sizes.right && sizes.bottom) {
      d.scrollbarFiller.style.display = "block";
      d.scrollbarFiller.style.height = sizes.bottom + "px";
      d.scrollbarFiller.style.width = sizes.right + "px";
    } else { d.scrollbarFiller.style.display = ""; }
    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
      d.gutterFiller.style.display = "block";
      d.gutterFiller.style.height = sizes.bottom + "px";
      d.gutterFiller.style.width = measure.gutterWidth + "px";
    } else { d.gutterFiller.style.display = ""; }
  }

  var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

  function initScrollbars(cm) {
    if (cm.display.scrollbars) {
      cm.display.scrollbars.clear();
      if (cm.display.scrollbars.addClass)
        { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
    }

    cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
      // Prevent clicks in the scrollbars from killing focus
      on(node, "mousedown", function () {
        if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
      });
      node.setAttribute("cm-not-content", "true");
    }, function (pos, axis) {
      if (axis == "horizontal") { setScrollLeft(cm, pos); }
      else { updateScrollTop(cm, pos); }
    }, cm);
    if (cm.display.scrollbars.addClass)
      { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
  }

  // Operations are used to wrap a series of changes to the editor
  // state in such a way that each change won't have to update the
  // cursor and display (which would be awkward, slow, and
  // error-prone). Instead, display updates are batched and then all
  // combined and executed at once.

  var nextOpId = 0;
  // Start a new operation.
  function startOperation(cm) {
    cm.curOp = {
      cm: cm,
      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
      startHeight: cm.doc.height, // Used to detect need to update scrollbar
      forceUpdate: false,      // Used to force a redraw
      updateInput: 0,       // Whether to reset the input textarea
      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
      changeObjs: null,        // Accumulated changes, for firing change events
      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
      selectionChanged: false, // Whether the selection needs to be redrawn
      updateMaxLine: false,    // Set when the widest line needs to be determined anew
      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
      scrollToPos: null,       // Used to scroll to a specific position
      focus: false,
      id: ++nextOpId,          // Unique ID
      markArrays: null         // Used by addMarkedSpan
    };
    pushOperation(cm.curOp);
  }

  // Finish an operation, updating the display and signalling delayed events
  function endOperation(cm) {
    var op = cm.curOp;
    if (op) { finishOperation(op, function (group) {
      for (var i = 0; i < group.ops.length; i++)
        { group.ops[i].cm.curOp = null; }
      endOperations(group);
    }); }
  }

  // The DOM updates done when an operation finishes are batched so
  // that the minimum number of relayouts are required.
  function endOperations(group) {
    var ops = group.ops;
    for (var i = 0; i < ops.length; i++) // Read DOM
      { endOperation_R1(ops[i]); }
    for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
      { endOperation_W1(ops[i$1]); }
    for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
      { endOperation_R2(ops[i$2]); }
    for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
      { endOperation_W2(ops[i$3]); }
    for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
      { endOperation_finish(ops[i$4]); }
  }

  function endOperation_R1(op) {
    var cm = op.cm, display = cm.display;
    maybeClipScrollbars(cm);
    if (op.updateMaxLine) { findMaxLine(cm); }

    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                         op.scrollToPos.to.line >= display.viewTo) ||
      display.maxLineChanged && cm.options.lineWrapping;
    op.update = op.mustUpdate &&
      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
  }

  function endOperation_W1(op) {
    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
  }

  function endOperation_R2(op) {
    var cm = op.cm, display = cm.display;
    if (op.updatedDisplay) { updateHeightsInViewport(cm); }

    op.barMeasure = measureForScrollbars(cm);

    // If the max line changed since it was last measured, measure it,
    // and ensure the document's width matches it.
    // updateDisplay_W2 will use these properties to do the actual resizing
    if (display.maxLineChanged && !cm.options.lineWrapping) {
      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
      cm.display.sizerWidth = op.adjustWidthTo;
      op.barMeasure.scrollWidth =
        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
    }

    if (op.updatedDisplay || op.selectionChanged)
      { op.preparedSelection = display.input.prepareSelection(); }
  }

  function endOperation_W2(op) {
    var cm = op.cm;

    if (op.adjustWidthTo != null) {
      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
      if (op.maxScrollLeft < cm.doc.scrollLeft)
        { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
      cm.display.maxLineChanged = false;
    }

    var takeFocus = op.focus && op.focus == activeElt();
    if (op.preparedSelection)
      { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
    if (op.updatedDisplay || op.startHeight != cm.doc.height)
      { updateScrollbars(cm, op.barMeasure); }
    if (op.updatedDisplay)
      { setDocumentHeight(cm, op.barMeasure); }

    if (op.selectionChanged) { restartBlink(cm); }

    if (cm.state.focused && op.updateInput)
      { cm.display.input.reset(op.typing); }
    if (takeFocus) { ensureFocus(op.cm); }
  }

  function endOperation_finish(op) {
    var cm = op.cm, display = cm.display, doc = cm.doc;

    if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

    // Abort mouse wheel delta measurement, when scrolling explicitly
    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
      { display.wheelStartX = display.wheelStartY = null; }

    // Propagate the scroll position to the actual DOM scroller
    if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

    if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
    // If we need to scroll a specific position into view, do so.
    if (op.scrollToPos) {
      var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
      maybeScrollWindow(cm, rect);
    }

    // Fire events for markers that are hidden/unidden by editing or
    // undoing
    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
    if (hidden) { for (var i = 0; i < hidden.length; ++i)
      { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
    if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
      { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

    if (display.wrapper.offsetHeight)
      { doc.scrollTop = cm.display.scroller.scrollTop; }

    // Fire change events, and delayed event handlers
    if (op.changeObjs)
      { signal(cm, "changes", cm, op.changeObjs); }
    if (op.update)
      { op.update.finish(); }
  }

  // Run the given function in an operation
  function runInOp(cm, f) {
    if (cm.curOp) { return f() }
    startOperation(cm);
    try { return f() }
    finally { endOperation(cm); }
  }
  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm, f) {
    return function() {
      if (cm.curOp) { return f.apply(cm, arguments) }
      startOperation(cm);
      try { return f.apply(cm, arguments) }
      finally { endOperation(cm); }
    }
  }
  // Used to add methods to editor and doc instances, wrapping them in
  // operations.
  function methodOp(f) {
    return function() {
      if (this.curOp) { return f.apply(this, arguments) }
      startOperation(this);
      try { return f.apply(this, arguments) }
      finally { endOperation(this); }
    }
  }
  function docMethodOp(f) {
    return function() {
      var cm = this.cm;
      if (!cm || cm.curOp) { return f.apply(this, arguments) }
      startOperation(cm);
      try { return f.apply(this, arguments) }
      finally { endOperation(cm); }
    }
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
    if (cm.doc.highlightFrontier < cm.display.viewTo)
      { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
  }

  function highlightWorker(cm) {
    var doc = cm.doc;
    if (doc.highlightFrontier >= cm.display.viewTo) { return }
    var end = +new Date + cm.options.workTime;
    var context = getContextBefore(cm, doc.highlightFrontier);
    var changedLines = [];

    doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
      if (context.line >= cm.display.viewFrom) { // Visible
        var oldStyles = line.styles;
        var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
        var highlighted = highlightLine(cm, line, context, true);
        if (resetState) { context.state = resetState; }
        line.styles = highlighted.styles;
        var oldCls = line.styleClasses, newCls = highlighted.classes;
        if (newCls) { line.styleClasses = newCls; }
        else if (oldCls) { line.styleClasses = null; }
        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
        for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
        if (ischange) { changedLines.push(context.line); }
        line.stateAfter = context.save();
        context.nextLine();
      } else {
        if (line.text.length <= cm.options.maxHighlightLength)
          { processLine(cm, line.text, context); }
        line.stateAfter = context.line % 5 == 0 ? context.save() : null;
        context.nextLine();
      }
      if (+new Date > end) {
        startWorker(cm, cm.options.workDelay);
        return true
      }
    });
    doc.highlightFrontier = context.line;
    doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
    if (changedLines.length) { runInOp(cm, function () {
      for (var i = 0; i < changedLines.length; i++)
        { regLineChange(cm, changedLines[i], "text"); }
    }); }
  }

  // DISPLAY DRAWING

  var DisplayUpdate = function(cm, viewport, force) {
    var display = cm.display;

    this.viewport = viewport;
    // Store some values that we'll need later (but don't want to force a relayout for)
    this.visible = visibleLines(display, cm.doc, viewport);
    this.editorIsHidden = !display.wrapper.offsetWidth;
    this.wrapperHeight = display.wrapper.clientHeight;
    this.wrapperWidth = display.wrapper.clientWidth;
    this.oldDisplayWidth = displayWidth(cm);
    this.force = force;
    this.dims = getDimensions(cm);
    this.events = [];
  };

  DisplayUpdate.prototype.signal = function (emitter, type) {
    if (hasHandler(emitter, type))
      { this.events.push(arguments); }
  };
  DisplayUpdate.prototype.finish = function () {
    for (var i = 0; i < this.events.length; i++)
      { signal.apply(null, this.events[i]); }
  };

  function maybeClipScrollbars(cm) {
    var display = cm.display;
    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
      display.heightForcer.style.height = scrollGap(cm) + "px";
      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
      display.scrollbarsClipped = true;
    }
  }

  function selectionSnapshot(cm) {
    if (cm.hasFocus()) { return null }
    var active = activeElt();
    if (!active || !contains(cm.display.lineDiv, active)) { return null }
    var result = {activeElt: active};
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
        result.anchorNode = sel.anchorNode;
        result.anchorOffset = sel.anchorOffset;
        result.focusNode = sel.focusNode;
        result.focusOffset = sel.focusOffset;
      }
    }
    return result
  }

  function restoreSelection(snapshot) {
    if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) { return }
    snapshot.activeElt.focus();
    if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) &&
        snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
      var sel = window.getSelection(), range = document.createRange();
      range.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
      sel.extend(snapshot.focusNode, snapshot.focusOffset);
    }
  }

  // Does the actual updating of the line display. Bails out
  // (returning false) when there is nothing to be done and forced is
  // false.
  function updateDisplayIfNeeded(cm, update) {
    var display = cm.display, doc = cm.doc;

    if (update.editorIsHidden) {
      resetView(cm);
      return false
    }

    // Bail out if the visible area is already rendered and nothing changed.
    if (!update.force &&
        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
        display.renderedView == display.view && countDirtyView(cm) == 0)
      { return false }

    if (maybeUpdateLineNumberWidth(cm)) {
      resetView(cm);
      update.dims = getDimensions(cm);
    }

    // Compute a suitable new viewport (from & to)
    var end = doc.first + doc.size;
    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
    if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
    if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
    if (sawCollapsedSpans) {
      from = visualLineNo(cm.doc, from);
      to = visualLineEndNo(cm.doc, to);
    }

    var different = from != display.viewFrom || to != display.viewTo ||
      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
    adjustView(cm, from, to);

    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
    // Position the mover div to align with the current scroll position
    cm.display.mover.style.top = display.viewOffset + "px";

    var toUpdate = countDirtyView(cm);
    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
      { return false }

    // For big changes, we hide the enclosing element during the
    // update, since that speeds up the operations on most browsers.
    var selSnapshot = selectionSnapshot(cm);
    if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
    patchDisplay(cm, display.updateLineNumbers, update.dims);
    if (toUpdate > 4) { display.lineDiv.style.display = ""; }
    display.renderedView = display.view;
    // There might have been a widget with a focused element that got
    // hidden or updated, if so re-focus it.
    restoreSelection(selSnapshot);

    // Prevent selection and cursors from interfering with the scroll
    // width and height.
    removeChildren(display.cursorDiv);
    removeChildren(display.selectionDiv);
    display.gutters.style.height = display.sizer.style.minHeight = 0;

    if (different) {
      display.lastWrapHeight = update.wrapperHeight;
      display.lastWrapWidth = update.wrapperWidth;
      startWorker(cm, 400);
    }

    display.updateLineNumbers = null;

    return true
  }

  function postUpdateDisplay(cm, update) {
    var viewport = update.viewport;

    for (var first = true;; first = false) {
      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
        // Clip forced viewport to actual scrollable area.
        if (viewport && viewport.top != null)
          { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
        // Updated line heights might result in the drawn area not
        // actually covering the viewport. Keep looping until it does.
        update.visible = visibleLines(cm.display, cm.doc, viewport);
        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
          { break }
      } else if (first) {
        update.visible = visibleLines(cm.display, cm.doc, viewport);
      }
      if (!updateDisplayIfNeeded(cm, update)) { break }
      updateHeightsInViewport(cm);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.force = false;
    }

    update.signal(cm, "update", cm);
    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
    }
  }

  function updateDisplaySimple(cm, viewport) {
    var update = new DisplayUpdate(cm, viewport);
    if (updateDisplayIfNeeded(cm, update)) {
      updateHeightsInViewport(cm);
      postUpdateDisplay(cm, update);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.finish();
    }
  }

  // Sync the actual display DOM structure with display.view, removing
  // nodes for lines that are no longer in view, and creating the ones
  // that are not there yet, and updating the ones that are out of
  // date.
  function patchDisplay(cm, updateNumbersFrom, dims) {
    var display = cm.display, lineNumbers = cm.options.lineNumbers;
    var container = display.lineDiv, cur = container.firstChild;

    function rm(node) {
      var next = node.nextSibling;
      // Works around a throw-scroll bug in OS X Webkit
      if (webkit && mac && cm.display.currentWheelTarget == node)
        { node.style.display = "none"; }
      else
        { node.parentNode.removeChild(node); }
      return next
    }

    var view = display.view, lineN = display.viewFrom;
    // Loop over the elements in the view, syncing cur (the DOM nodes
    // in display.lineDiv) with the view as we go.
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (lineView.hidden) ; else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
        var node = buildLineElement(cm, lineView, lineN, dims);
        container.insertBefore(node, cur);
      } else { // Already drawn
        while (cur != lineView.node) { cur = rm(cur); }
        var updateNumber = lineNumbers && updateNumbersFrom != null &&
          updateNumbersFrom <= lineN && lineView.lineNumber;
        if (lineView.changes) {
          if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
          updateLineForChanges(cm, lineView, lineN, dims);
        }
        if (updateNumber) {
          removeChildren(lineView.lineNumber);
          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
        }
        cur = lineView.node.nextSibling;
      }
      lineN += lineView.size;
    }
    while (cur) { cur = rm(cur); }
  }

  function updateGutterSpace(display) {
    var width = display.gutters.offsetWidth;
    display.sizer.style.marginLeft = width + "px";
    // Send an event to consumers responding to changes in gutter width.
    signalLater(display, "gutterChanged", display);
  }

  function setDocumentHeight(cm, measure) {
    cm.display.sizer.style.minHeight = measure.docHeight + "px";
    cm.display.heightForcer.style.top = measure.docHeight + "px";
    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
  }

  // Re-align line numbers and gutter marks to compensate for
  // horizontal scrolling.
  function alignHorizontally(cm) {
    var display = cm.display, view = display.view;
    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
    var gutterW = display.gutters.offsetWidth, left = comp + "px";
    for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
      if (cm.options.fixedGutter) {
        if (view[i].gutter)
          { view[i].gutter.style.left = left; }
        if (view[i].gutterBackground)
          { view[i].gutterBackground.style.left = left; }
      }
      var align = view[i].alignable;
      if (align) { for (var j = 0; j < align.length; j++)
        { align[j].style.left = left; } }
    } }
    if (cm.options.fixedGutter)
      { display.gutters.style.left = (comp + gutterW) + "px"; }
  }

  // Used to ensure that the line number gutter is still the right
  // size for the current document size. Returns true when an update
  // is needed.
  function maybeUpdateLineNumberWidth(cm) {
    if (!cm.options.lineNumbers) { return false }
    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
    if (last.length != display.lineNumChars) {
      var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
      display.lineGutter.style.width = "";
      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
      display.lineNumWidth = display.lineNumInnerWidth + padding;
      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
      display.lineGutter.style.width = display.lineNumWidth + "px";
      updateGutterSpace(cm.display);
      return true
    }
    return false
  }

  function getGutters(gutters, lineNumbers) {
    var result = [], sawLineNumbers = false;
    for (var i = 0; i < gutters.length; i++) {
      var name = gutters[i], style = null;
      if (typeof name != "string") { style = name.style; name = name.className; }
      if (name == "CodeMirror-linenumbers") {
        if (!lineNumbers) { continue }
        else { sawLineNumbers = true; }
      }
      result.push({className: name, style: style});
    }
    if (lineNumbers && !sawLineNumbers) { result.push({className: "CodeMirror-linenumbers", style: null}); }
    return result
  }

  // Rebuild the gutter elements, ensure the margin to the left of the
  // code matches their width.
  function renderGutters(display) {
    var gutters = display.gutters, specs = display.gutterSpecs;
    removeChildren(gutters);
    display.lineGutter = null;
    for (var i = 0; i < specs.length; ++i) {
      var ref = specs[i];
      var className = ref.className;
      var style = ref.style;
      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
      if (style) { gElt.style.cssText = style; }
      if (className == "CodeMirror-linenumbers") {
        display.lineGutter = gElt;
        gElt.style.width = (display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = specs.length ? "" : "none";
    updateGutterSpace(display);
  }

  function updateGutters(cm) {
    renderGutters(cm.display);
    regChange(cm);
    alignHorizontally(cm);
  }

  // The display handles the DOM integration, both for input reading
  // and content drawing. It holds references to DOM nodes and
  // display-related state.

  function Display(place, doc, input, options) {
    var d = this;
    this.input = input;

    // Covers bottom-right square when both scrollbars are present.
    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
    d.scrollbarFiller.setAttribute("cm-not-content", "true");
    // Covers bottom of gutter when coverGutterNextToScrollbar is on
    // and h scrollbar is present.
    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
    d.gutterFiller.setAttribute("cm-not-content", "true");
    // Will contain the actual code, positioned to cover the viewport.
    d.lineDiv = eltP("div", null, "CodeMirror-code");
    // Elements are added to these to represent selection and cursors.
    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
    // A visibility: hidden element used to find the size of things.
    d.measure = elt("div", null, "CodeMirror-measure");
    // When lines outside of the viewport are measured, they are drawn in this.
    d.lineMeasure = elt("div", null, "CodeMirror-measure");
    // Wraps everything that needs to exist inside the vertically-padded coordinate system
    d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                      null, "position: relative; outline: none");
    var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
    // Moved around its parent to cover visible view.
    d.mover = elt("div", [lines], null, "position: relative");
    // Set to the height of the document, allowing scrolling.
    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
    d.sizerWidth = null;
    // Behavior of elts with overflow: auto and padding is
    // inconsistent across browsers. This is used to ensure the
    // scrollable area is big enough.
    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
    // Will contain the gutters, if any.
    d.gutters = elt("div", null, "CodeMirror-gutters");
    d.lineGutter = null;
    // Actual scrollable element.
    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
    d.scroller.setAttribute("tabIndex", "-1");
    // The element in which the editor lives.
    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
    if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }

    if (place) {
      if (place.appendChild) { place.appendChild(d.wrapper); }
      else { place(d.wrapper); }
    }

    // Current rendered range (may be bigger than the view window).
    d.viewFrom = d.viewTo = doc.first;
    d.reportedViewFrom = d.reportedViewTo = doc.first;
    // Information about the rendered lines.
    d.view = [];
    d.renderedView = null;
    // Holds info about a single rendered line when it was rendered
    // for measurement, while not in view.
    d.externalMeasured = null;
    // Empty space (in pixels) above the view
    d.viewOffset = 0;
    d.lastWrapHeight = d.lastWrapWidth = 0;
    d.updateLineNumbers = null;

    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
    d.scrollbarsClipped = false;

    // Used to only resize the line number gutter when necessary (when
    // the amount of lines crosses a boundary that makes its width change)
    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
    // Set to true when a non-horizontal-scrolling line widget is
    // added. As an optimization, line widget aligning is skipped when
    // this is false.
    d.alignWidgets = false;

    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    d.maxLine = null;
    d.maxLineLength = 0;
    d.maxLineChanged = false;

    // Used for measuring wheel scrolling granularity
    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

    // True when shift is held down.
    d.shift = false;

    // Used to track whether anything happened since the context menu
    // was opened.
    d.selForContextMenu = null;

    d.activeTouch = null;

    d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
    renderGutters(d);

    input.init(d);
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) { wheelPixelsPerUnit = -.53; }
  else if (gecko) { wheelPixelsPerUnit = 15; }
  else if (chrome) { wheelPixelsPerUnit = -.7; }
  else if (safari) { wheelPixelsPerUnit = -1/3; }

  function wheelEventDelta(e) {
    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
    else if (dy == null) { dy = e.wheelDelta; }
    return {x: dx, y: dy}
  }
  function wheelEventPixels(e) {
    var delta = wheelEventDelta(e);
    delta.x *= wheelPixelsPerUnit;
    delta.y *= wheelPixelsPerUnit;
    return delta
  }

  function onScrollWheel(cm, e) {
    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

    var display = cm.display, scroll = display.scroller;
    // Quit if there's nothing to scroll here
    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
    if (!(dx && canScrollX || dy && canScrollY)) { return }

    // Webkit browsers on OS X abort momentum scrolls when the target
    // of the scroll event is removed from the scrollable element.
    // This hack (see related code in patchDisplay) makes sure the
    // element is kept around.
    if (dy && mac && webkit) {
      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
        for (var i = 0; i < view.length; i++) {
          if (view[i].node == cur) {
            cm.display.currentWheelTarget = cur;
            break outer
          }
        }
      }
    }

    // On some browsers, horizontal scrolling will cause redraws to
    // happen before the gutter has been realigned, causing it to
    // wriggle around in a most unseemly way. When we have an
    // estimated pixels/delta value, we just handle horizontal
    // scrolling entirely here. It'll be slightly off from native, but
    // better than glitching out.
    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
      if (dy && canScrollY)
        { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit)); }
      setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit));
      // Only prevent default scrolling if vertical scrolling is
      // actually possible. Otherwise, it causes vertical scroll
      // jitter on OSX trackpads when deltaX is small and deltaY
      // is large (issue #3579)
      if (!dy || (dy && canScrollY))
        { e_preventDefault(e); }
      display.wheelStartX = null; // Abort measurement, if in progress
      return
    }

    // 'Project' the visible viewport to cover the area that is being
    // scrolled into view (if we know enough to estimate it).
    if (dy && wheelPixelsPerUnit != null) {
      var pixels = dy * wheelPixelsPerUnit;
      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
      if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
      else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
      updateDisplaySimple(cm, {top: top, bottom: bot});
    }

    if (wheelSamples < 20) {
      if (display.wheelStartX == null) {
        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
        display.wheelDX = dx; display.wheelDY = dy;
        setTimeout(function () {
          if (display.wheelStartX == null) { return }
          var movedX = scroll.scrollLeft - display.wheelStartX;
          var movedY = scroll.scrollTop - display.wheelStartY;
          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
            (movedX && display.wheelDX && movedX / display.wheelDX);
          display.wheelStartX = display.wheelStartY = null;
          if (!sample) { return }
          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
          ++wheelSamples;
        }, 200);
      } else {
        display.wheelDX += dx; display.wheelDY += dy;
      }
    }
  }

  // Selection objects are immutable. A new one is created every time
  // the selection changes. A selection is one or more non-overlapping
  // (and non-touching) ranges, sorted, and an integer that indicates
  // which one is the primary selection (the one that's scrolled into
  // view, that getCursor returns, etc).
  var Selection = function(ranges, primIndex) {
    this.ranges = ranges;
    this.primIndex = primIndex;
  };

  Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

  Selection.prototype.equals = function (other) {
    if (other == this) { return true }
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
    for (var i = 0; i < this.ranges.length; i++) {
      var here = this.ranges[i], there = other.ranges[i];
      if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
    }
    return true
  };

  Selection.prototype.deepCopy = function () {
    var out = [];
    for (var i = 0; i < this.ranges.length; i++)
      { out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head)); }
    return new Selection(out, this.primIndex)
  };

  Selection.prototype.somethingSelected = function () {
    for (var i = 0; i < this.ranges.length; i++)
      { if (!this.ranges[i].empty()) { return true } }
    return false
  };

  Selection.prototype.contains = function (pos, end) {
    if (!end) { end = pos; }
    for (var i = 0; i < this.ranges.length; i++) {
      var range = this.ranges[i];
      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
        { return i }
    }
    return -1
  };

  var Range = function(anchor, head) {
    this.anchor = anchor; this.head = head;
  };

  Range.prototype.from = function () { return minPos(this.anchor, this.head) };
  Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
  Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

  // Take an unsorted, potentially overlapping set of ranges, and
  // build a selection out of it. 'Consumes' ranges array (modifying
  // it).
  function normalizeSelection(cm, ranges, primIndex) {
    var mayTouch = cm && cm.options.selectionsMayTouch;
    var prim = ranges[primIndex];
    ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
    primIndex = indexOf(ranges, prim);
    for (var i = 1; i < ranges.length; i++) {
      var cur = ranges[i], prev = ranges[i - 1];
      var diff = cmp(prev.to(), cur.from());
      if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
        if (i <= primIndex) { --primIndex; }
        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
      }
    }
    return new Selection(ranges, primIndex)
  }

  function simpleSelection(anchor, head) {
    return new Selection([new Range(anchor, head || anchor)], 0)
  }

  // Compute the position of the end of a change (its 'to' property
  // refers to the pre-change end).
  function changeEnd(change) {
    if (!change.text) { return change.to }
    return Pos(change.from.line + change.text.length - 1,
               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
  }

  // Adjust a position to refer to the post-change position of the
  // same text, or the end of the change if the change covers it.
  function adjustForChange(pos, change) {
    if (cmp(pos, change.from) < 0) { return pos }
    if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
    if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
    return Pos(line, ch)
  }

  function computeSelAfterChange(doc, change) {
    var out = [];
    for (var i = 0; i < doc.sel.ranges.length; i++) {
      var range = doc.sel.ranges[i];
      out.push(new Range(adjustForChange(range.anchor, change),
                         adjustForChange(range.head, change)));
    }
    return normalizeSelection(doc.cm, out, doc.sel.primIndex)
  }

  function offsetPos(pos, old, nw) {
    if (pos.line == old.line)
      { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
    else
      { return Pos(nw.line + (pos.line - old.line), pos.ch) }
  }

  // Used by replaceSelections to allow moving the selection to the
  // start or around the replaced test. Hint may be "start" or "around".
  function computeReplacedSel(doc, changes, hint) {
    var out = [];
    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var from = offsetPos(change.from, oldPrev, newPrev);
      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
      oldPrev = change.to;
      newPrev = to;
      if (hint == "around") {
        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
        out[i] = new Range(inv ? to : from, inv ? from : to);
      } else {
        out[i] = new Range(from, from);
      }
    }
    return new Selection(out, doc.sel.primIndex)
  }

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
    cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
    resetModeState(cm);
  }

  function resetModeState(cm) {
    cm.doc.iter(function (line) {
      if (line.stateAfter) { line.stateAfter = null; }
      if (line.styles) { line.styles = null; }
    });
    cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
    startWorker(cm, 100);
    cm.state.modeGen++;
    if (cm.curOp) { regChange(cm); }
  }

  // DOCUMENT DATA STRUCTURE

  // By default, updates that start and end at the beginning of a line
  // are treated specially, in order to make the association of line
  // widgets and marker elements with the text behave more intuitive.
  function isWholeLineUpdate(doc, change) {
    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
      (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
  }

  // Perform a change on the document data structure.
  function updateDoc(doc, change, markedSpans, estimateHeight) {
    function spansFor(n) {return markedSpans ? markedSpans[n] : null}
    function update(line, text, spans) {
      updateLine(line, text, spans, estimateHeight);
      signalLater(line, "change", line, change);
    }
    function linesFor(start, end) {
      var result = [];
      for (var i = start; i < end; ++i)
        { result.push(new Line(text[i], spansFor(i), estimateHeight)); }
      return result
    }

    var from = change.from, to = change.to, text = change.text;
    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

    // Adjust the line structure
    if (change.full) {
      doc.insert(0, linesFor(0, text.length));
      doc.remove(text.length, doc.size - text.length);
    } else if (isWholeLineUpdate(doc, change)) {
      // This is a whole-line replace. Treated specially to make
      // sure line objects move the way they are supposed to.
      var added = linesFor(0, text.length - 1);
      update(lastLine, lastLine.text, lastSpans);
      if (nlines) { doc.remove(from.line, nlines); }
      if (added.length) { doc.insert(from.line, added); }
    } else if (firstLine == lastLine) {
      if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
      } else {
        var added$1 = linesFor(1, text.length - 1);
        added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        doc.insert(from.line + 1, added$1);
      }
    } else if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
      doc.remove(from.line + 1, nlines);
    } else {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
      var added$2 = linesFor(1, text.length - 1);
      if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
      doc.insert(from.line + 1, added$2);
    }

    signalLater(doc, "change", doc, change);
  }

  // Call f for all linked documents.
  function linkedDocs(doc, f, sharedHistOnly) {
    function propagate(doc, skip, sharedHist) {
      if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];
        if (rel.doc == skip) { continue }
        var shared = sharedHist && rel.sharedHist;
        if (sharedHistOnly && !shared) { continue }
        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      } }
    }
    propagate(doc, null, true);
  }

  // Attach a document to an editor.
  function attachDoc(cm, doc) {
    if (doc.cm) { throw new Error("This document is already in use.") }
    cm.doc = doc;
    doc.cm = cm;
    estimateLineHeights(cm);
    loadMode(cm);
    setDirectionClass(cm);
    cm.options.direction = doc.direction;
    if (!cm.options.lineWrapping) { findMaxLine(cm); }
    cm.options.mode = doc.modeOption;
    regChange(cm);
  }

  function setDirectionClass(cm) {
  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
  }

  function directionChanged(cm) {
    runInOp(cm, function () {
      setDirectionClass(cm);
      regChange(cm);
    });
  }

  function History(prev) {
    // Arrays of change events and selections. Doing something adds an
    // event to done and clears undo. Undoing moves events from done
    // to undone, redoing moves them in the other direction.
    this.done = []; this.undone = [];
    this.undoDepth = prev ? prev.undoDepth : Infinity;
    // Used to track when changes can be merged into a single undo
    // event
    this.lastModTime = this.lastSelTime = 0;
    this.lastOp = this.lastSelOp = null;
    this.lastOrigin = this.lastSelOrigin = null;
    // Used by the isClean() method
    this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
  }

  // Create a history change event from an updateDoc-style change
  // object.
  function historyChangeFromChange(doc, change) {
    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
    linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
    return histChange
  }

  // Pop all selection events off the end of a history array. Stop at
  // a change event.
  function clearSelectionEvents(array) {
    while (array.length) {
      var last = lst(array);
      if (last.ranges) { array.pop(); }
      else { break }
    }
  }

  // Find the top change event in the history. Pop off selection
  // events that are in the way.
  function lastChangeEvent(hist, force) {
    if (force) {
      clearSelectionEvents(hist.done);
      return lst(hist.done)
    } else if (hist.done.length && !lst(hist.done).ranges) {
      return lst(hist.done)
    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
      hist.done.pop();
      return lst(hist.done)
    }
  }

  // Register a change in the history. Merges changes that are within
  // a single operation, or are close together with an origin that
  // allows merging (starting with "+") into a single event.
  function addChangeToHistory(doc, change, selAfter, opId) {
    var hist = doc.history;
    hist.undone.length = 0;
    var time = +new Date, cur;
    var last;

    if ((hist.lastOp == opId ||
         hist.lastOrigin == change.origin && change.origin &&
         ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
          change.origin.charAt(0) == "*")) &&
        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
      // Merge this change into the last event
      last = lst(cur.changes);
      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
        // Optimized case for simple insertion -- don't want to add
        // new changesets for every character typed
        last.to = changeEnd(change);
      } else {
        // Add new sub-event
        cur.changes.push(historyChangeFromChange(doc, change));
      }
    } else {
      // Can not be merged, start a new event.
      var before = lst(hist.done);
      if (!before || !before.ranges)
        { pushSelectionToHistory(doc.sel, hist.done); }
      cur = {changes: [historyChangeFromChange(doc, change)],
             generation: hist.generation};
      hist.done.push(cur);
      while (hist.done.length > hist.undoDepth) {
        hist.done.shift();
        if (!hist.done[0].ranges) { hist.done.shift(); }
      }
    }
    hist.done.push(selAfter);
    hist.generation = ++hist.maxGeneration;
    hist.lastModTime = hist.lastSelTime = time;
    hist.lastOp = hist.lastSelOp = opId;
    hist.lastOrigin = hist.lastSelOrigin = change.origin;

    if (!last) { signal(doc, "historyAdded"); }
  }

  function selectionEventCanBeMerged(doc, origin, prev, sel) {
    var ch = origin.charAt(0);
    return ch == "*" ||
      ch == "+" &&
      prev.ranges.length == sel.ranges.length &&
      prev.somethingSelected() == sel.somethingSelected() &&
      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
  }

  // Called whenever the selection changes, sets the new selection as
  // the pending selection in the history, and pushes the old pending
  // selection into the 'done' array when it was significantly
  // different (in number of selected ranges, emptiness, or time).
  function addSelectionToHistory(doc, sel, opId, options) {
    var hist = doc.history, origin = options && options.origin;

    // A new event is started when the previous origin does not match
    // the current, or the origins don't allow matching. Origins
    // starting with * are always merged, those starting with + are
    // merged when similar and close together in time.
    if (opId == hist.lastSelOp ||
        (origin && hist.lastSelOrigin == origin &&
         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
      { hist.done[hist.done.length - 1] = sel; }
    else
      { pushSelectionToHistory(sel, hist.done); }

    hist.lastSelTime = +new Date;
    hist.lastSelOrigin = origin;
    hist.lastSelOp = opId;
    if (options && options.clearRedo !== false)
      { clearSelectionEvents(hist.undone); }
  }

  function pushSelectionToHistory(sel, dest) {
    var top = lst(dest);
    if (!(top && top.ranges && top.equals(sel)))
      { dest.push(sel); }
  }

  // Used to store marked span information in the history.
  function attachLocalSpans(doc, change, from, to) {
    var existing = change["spans_" + doc.id], n = 0;
    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
      if (line.markedSpans)
        { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
      ++n;
    });
  }

  // When un/re-doing restores text containing marked spans, those
  // that have been explicitly cleared should not be restored.
  function removeClearedSpans(spans) {
    if (!spans) { return null }
    var out;
    for (var i = 0; i < spans.length; ++i) {
      if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
      else if (out) { out.push(spans[i]); }
    }
    return !out ? spans : out.length ? out : null
  }

  // Retrieve and filter the old marked spans stored in a change event.
  function getOldSpans(doc, change) {
    var found = change["spans_" + doc.id];
    if (!found) { return null }
    var nw = [];
    for (var i = 0; i < change.text.length; ++i)
      { nw.push(removeClearedSpans(found[i])); }
    return nw
  }

  // Used for un/re-doing changes from the history. Combines the
  // result of computing the existing spans with the set of spans that
  // existed in the history (so that deleting around a span and then
  // undoing brings back the span).
  function mergeOldSpans(doc, change) {
    var old = getOldSpans(doc, change);
    var stretched = stretchSpansOverChange(doc, change);
    if (!old) { return stretched }
    if (!stretched) { return old }

    for (var i = 0; i < old.length; ++i) {
      var oldCur = old[i], stretchCur = stretched[i];
      if (oldCur && stretchCur) {
        spans: for (var j = 0; j < stretchCur.length; ++j) {
          var span = stretchCur[j];
          for (var k = 0; k < oldCur.length; ++k)
            { if (oldCur[k].marker == span.marker) { continue spans } }
          oldCur.push(span);
        }
      } else if (stretchCur) {
        old[i] = stretchCur;
      }
    }
    return old
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup, instantiateSel) {
    var copy = [];
    for (var i = 0; i < events.length; ++i) {
      var event = events[i];
      if (event.ranges) {
        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
        continue
      }
      var changes = event.changes, newChanges = [];
      copy.push({changes: newChanges});
      for (var j = 0; j < changes.length; ++j) {
        var change = changes[j], m = (void 0);
        newChanges.push({from: change.from, to: change.to, text: change.text});
        if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
          if (indexOf(newGroup, Number(m[1])) > -1) {
            lst(newChanges)[prop] = change[prop];
            delete change[prop];
          }
        } } }
      }
    }
    return copy
  }

  // The 'scroll' parameter given to many of these indicated whether
  // the new cursor position should be scrolled into view after
  // modifying the selection.

  // If shift is held or the extend flag is set, extends a range to
  // include a given position (and optionally a second position).
  // Otherwise, simply returns the range between the given positions.
  // Used for cursor motion and such.
  function extendRange(range, head, other, extend) {
    if (extend) {
      var anchor = range.anchor;
      if (other) {
        var posBefore = cmp(head, anchor) < 0;
        if (posBefore != (cmp(other, anchor) < 0)) {
          anchor = head;
          head = other;
        } else if (posBefore != (cmp(head, other) < 0)) {
          head = other;
        }
      }
      return new Range(anchor, head)
    } else {
      return new Range(other || head, head)
    }
  }

  // Extend the primary selection range, discard the rest.
  function extendSelection(doc, head, other, options, extend) {
    if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
    setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
  }

  // Extend all selections (pos is an array of selections with length
  // equal the number of selections)
  function extendSelections(doc, heads, options) {
    var out = [];
    var extend = doc.cm && (doc.cm.display.shift || doc.extend);
    for (var i = 0; i < doc.sel.ranges.length; i++)
      { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
    var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
    setSelection(doc, newSel, options);
  }

  // Updates a single range in the selection.
  function replaceOneSelection(doc, i, range, options) {
    var ranges = doc.sel.ranges.slice(0);
    ranges[i] = range;
    setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
  }

  // Reset the selection to a single range.
  function setSimpleSelection(doc, anchor, head, options) {
    setSelection(doc, simpleSelection(anchor, head), options);
  }

  // Give beforeSelectionChange handlers a change to influence a
  // selection update.
  function filterSelectionChange(doc, sel, options) {
    var obj = {
      ranges: sel.ranges,
      update: function(ranges) {
        this.ranges = [];
        for (var i = 0; i < ranges.length; i++)
          { this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                     clipPos(doc, ranges[i].head)); }
      },
      origin: options && options.origin
    };
    signal(doc, "beforeSelectionChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
    if (obj.ranges != sel.ranges) { return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1) }
    else { return sel }
  }

  function setSelectionReplaceHistory(doc, sel, options) {
    var done = doc.history.done, last = lst(done);
    if (last && last.ranges) {
      done[done.length - 1] = sel;
      setSelectionNoUndo(doc, sel, options);
    } else {
      setSelection(doc, sel, options);
    }
  }

  // Set a new selection.
  function setSelection(doc, sel, options) {
    setSelectionNoUndo(doc, sel, options);
    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
  }

  function setSelectionNoUndo(doc, sel, options) {
    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
      { sel = filterSelectionChange(doc, sel, options); }

    var bias = options && options.bias ||
      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

    if (!(options && options.scroll === false) && doc.cm && doc.cm.getOption("readOnly") != "nocursor")
      { ensureCursorVisible(doc.cm); }
  }

  function setSelectionInner(doc, sel) {
    if (sel.equals(doc.sel)) { return }

    doc.sel = sel;

    if (doc.cm) {
      doc.cm.curOp.updateInput = 1;
      doc.cm.curOp.selectionChanged = true;
      signalCursorActivity(doc.cm);
    }
    signalLater(doc, "cursorActivity", doc);
  }

  // Verify that the selection does not partially select any atomic
  // marked ranges.
  function reCheckSelection(doc) {
    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
  }

  // Return a selection that does not partially select any atomic
  // ranges.
  function skipAtomicInSelection(doc, sel, bias, mayClear) {
    var out;
    for (var i = 0; i < sel.ranges.length; i++) {
      var range = sel.ranges[i];
      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
      if (out || newAnchor != range.anchor || newHead != range.head) {
        if (!out) { out = sel.ranges.slice(0, i); }
        out[i] = new Range(newAnchor, newHead);
      }
    }
    return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel
  }

  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
    var line = getLine(doc, pos.line);
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var sp = line.markedSpans[i], m = sp.marker;

      // Determine if we should prevent the cursor being placed to the left/right of an atomic marker
      // Historically this was determined using the inclusiveLeft/Right option, but the new way to control it
      // is with selectLeft/Right
      var preventCursorLeft = ("selectLeft" in m) ? !m.selectLeft : m.inclusiveLeft;
      var preventCursorRight = ("selectRight" in m) ? !m.selectRight : m.inclusiveRight;

      if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
          (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
        if (mayClear) {
          signal(m, "beforeCursorEnter");
          if (m.explicitlyCleared) {
            if (!line.markedSpans) { break }
            else {--i; continue}
          }
        }
        if (!m.atomic) { continue }

        if (oldPos) {
          var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
          if (dir < 0 ? preventCursorRight : preventCursorLeft)
            { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
            { return skipAtomicInner(doc, near, pos, dir, mayClear) }
        }

        var far = m.find(dir < 0 ? -1 : 1);
        if (dir < 0 ? preventCursorLeft : preventCursorRight)
          { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
      }
    } }
    return pos
  }

  // Ensure a given position is not inside an atomic range.
  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
    var dir = bias || 1;
    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
    if (!found) {
      doc.cantEdit = true;
      return Pos(doc.first, 0)
    }
    return found
  }

  function movePos(doc, pos, dir, line) {
    if (dir < 0 && pos.ch == 0) {
      if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
      else { return null }
    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
      if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
      else { return null }
    } else {
      return new Pos(pos.line, pos.ch + dir)
    }
  }

  function selectAll(cm) {
    cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
  }

  // UPDATING

  // Allow "beforeChange" event handlers to influence a change
  function filterChange(doc, change, update) {
    var obj = {
      canceled: false,
      from: change.from,
      to: change.to,
      text: change.text,
      origin: change.origin,
      cancel: function () { return obj.canceled = true; }
    };
    if (update) { obj.update = function (from, to, text, origin) {
      if (from) { obj.from = clipPos(doc, from); }
      if (to) { obj.to = clipPos(doc, to); }
      if (text) { obj.text = text; }
      if (origin !== undefined) { obj.origin = origin; }
    }; }
    signal(doc, "beforeChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }

    if (obj.canceled) {
      if (doc.cm) { doc.cm.curOp.updateInput = 2; }
      return null
    }
    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
  }

  // Apply a change to a document, and add it to the document's
  // history, and propagating it to all linked documents.
  function makeChange(doc, change, ignoreReadOnly) {
    if (doc.cm) {
      if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
      if (doc.cm.state.suppressEdits) { return }
    }

    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
      change = filterChange(doc, change, true);
      if (!change) { return }
    }

    // Possibly split or suppress the update based on the presence
    // of read-only spans in its range.
    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
    if (split) {
      for (var i = split.length - 1; i >= 0; --i)
        { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin}); }
    } else {
      makeChangeInner(doc, change);
    }
  }

  function makeChangeInner(doc, change) {
    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
    var selAfter = computeSelAfterChange(doc, change);
    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
    var rebased = [];

    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
    });
  }

  // Revert a change stored in a document's history.
  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
    var suppress = doc.cm && doc.cm.state.suppressEdits;
    if (suppress && !allowSelectionOnly) { return }

    var hist = doc.history, event, selAfter = doc.sel;
    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

    // Verify that there is a useable event (so that ctrl-z won't
    // needlessly clear selection events)
    var i = 0;
    for (; i < source.length; i++) {
      event = source[i];
      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
        { break }
    }
    if (i == source.length) { return }
    hist.lastOrigin = hist.lastSelOrigin = null;

    for (;;) {
      event = source.pop();
      if (event.ranges) {
        pushSelectionToHistory(event, dest);
        if (allowSelectionOnly && !event.equals(doc.sel)) {
          setSelection(doc, event, {clearRedo: false});
          return
        }
        selAfter = event;
      } else if (suppress) {
        source.push(event);
        return
      } else { break }
    }

    // Build up a reverse change object to add to the opposite history
    // stack (redo when undoing, and vice versa).
    var antiChanges = [];
    pushSelectionToHistory(selAfter, dest);
    dest.push({changes: antiChanges, generation: hist.generation});
    hist.generation = event.generation || ++hist.maxGeneration;

    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

    var loop = function ( i ) {
      var change = event.changes[i];
      change.origin = type;
      if (filter && !filterChange(doc, change, false)) {
        source.length = 0;
        return {}
      }

      antiChanges.push(historyChangeFromChange(doc, change));

      var after = i ? computeSelAfterChange(doc, change) : lst(source);
      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
      if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
      var rebased = [];

      // Propagate to the linked documents
      linkedDocs(doc, function (doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
      });
    };

    for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
      var returned = loop( i$1 );

      if ( returned ) return returned.v;
    }
  }

  // Sub-views need their line numbers shifted when text is added
  // above or below them in the parent document.
  function shiftDoc(doc, distance) {
    if (distance == 0) { return }
    doc.first += distance;
    doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
      Pos(range.anchor.line + distance, range.anchor.ch),
      Pos(range.head.line + distance, range.head.ch)
    ); }), doc.sel.primIndex);
    if (doc.cm) {
      regChange(doc.cm, doc.first, doc.first - distance, distance);
      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
        { regLineChange(doc.cm, l, "gutter"); }
    }
  }

  // More lower-level change function, handling only a single document
  // (not linked ones).
  function makeChangeSingleDoc(doc, change, selAfter, spans) {
    if (doc.cm && !doc.cm.curOp)
      { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

    if (change.to.line < doc.first) {
      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
      return
    }
    if (change.from.line > doc.lastLine()) { return }

    // Clip the change to the size of this doc
    if (change.from.line < doc.first) {
      var shift = change.text.length - 1 - (doc.first - change.from.line);
      shiftDoc(doc, shift);
      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin};
    }
    var last = doc.lastLine();
    if (change.to.line > last) {
      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin};
    }

    change.removed = getBetween(doc, change.from, change.to);

    if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
    if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
    else { updateDoc(doc, change, spans); }
    setSelectionNoUndo(doc, selAfter, sel_dontScroll);

    if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0)))
      { doc.cantEdit = false; }
  }

  // Handle the interaction of a change to a document with the editor
  // that this document is part of.
  function makeChangeSingleDocInEditor(cm, change, spans) {
    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

    var recomputeMaxLength = false, checkWidthStart = from.line;
    if (!cm.options.lineWrapping) {
      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
      doc.iter(checkWidthStart, to.line + 1, function (line) {
        if (line == display.maxLine) {
          recomputeMaxLength = true;
          return true
        }
      });
    }

    if (doc.sel.contains(change.from, change.to) > -1)
      { signalCursorActivity(cm); }

    updateDoc(doc, change, spans, estimateHeight(cm));

    if (!cm.options.lineWrapping) {
      doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
        var len = lineLength(line);
        if (len > display.maxLineLength) {
          display.maxLine = line;
          display.maxLineLength = len;
          display.maxLineChanged = true;
          recomputeMaxLength = false;
        }
      });
      if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
    }

    retreatFrontier(doc, from.line);
    startWorker(cm, 400);

    var lendiff = change.text.length - (to.line - from.line) - 1;
    // Remember that these lines changed, for updating the display
    if (change.full)
      { regChange(cm); }
    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
      { regLineChange(cm, from.line, "text"); }
    else
      { regChange(cm, from.line, to.line + 1, lendiff); }

    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
    if (changeHandler || changesHandler) {
      var obj = {
        from: from, to: to,
        text: change.text,
        removed: change.removed,
        origin: change.origin
      };
      if (changeHandler) { signalLater(cm, "change", cm, obj); }
      if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
    }
    cm.display.selForContextMenu = null;
  }

  function replaceRange(doc, code, from, to, origin) {
    var assign;

    if (!to) { to = from; }
    if (cmp(to, from) < 0) { (assign = [to, from], from = assign[0], to = assign[1]); }
    if (typeof code == "string") { code = doc.splitLines(code); }
    makeChange(doc, {from: from, to: to, text: code, origin: origin});
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSelSingle(pos, from, to, diff) {
    if (to < pos.line) {
      pos.line += diff;
    } else if (from < pos.line) {
      pos.line = from;
      pos.ch = 0;
    }
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
    for (var i = 0; i < array.length; ++i) {
      var sub = array[i], ok = true;
      if (sub.ranges) {
        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
        for (var j = 0; j < sub.ranges.length; j++) {
          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
        }
        continue
      }
      for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
        var cur = sub.changes[j$1];
        if (to < cur.from.line) {
          cur.from = Pos(cur.from.line + diff, cur.from.ch);
          cur.to = Pos(cur.to.line + diff, cur.to.ch);
        } else if (from <= cur.to.line) {
          ok = false;
          break
        }
      }
      if (!ok) {
        array.splice(0, i + 1);
        i = 0;
      }
    }
  }

  function rebaseHist(hist, change) {
    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
    rebaseHistArray(hist.done, from, to, diff);
    rebaseHistArray(hist.undone, from, to, diff);
  }

  // Utility for applying a change to a line by handle or number,
  // returning the number and optionally registering the line as
  // changed.
  function changeLine(doc, handle, changeType, op) {
    var no = handle, line = handle;
    if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
    else { no = lineNo(handle); }
    if (no == null) { return null }
    if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
    return line
  }

  // The document is represented as a BTree consisting of leaves, with
  // chunk of lines in them, and branches, with up to ten leaves or
  // other branch nodes below them. The top node is always a branch
  // node, and is the document object itself (meaning it has
  // additional methods and properties).
  //
  // All nodes have parent links. The tree is used both to go from
  // line numbers to line objects, and to go from objects to numbers.
  // It also indexes by height, and is used to convert between height
  // and line object, and to find the total height of the document.
  //
  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    var height = 0;
    for (var i = 0; i < lines.length; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }

  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length },

    // Remove the n lines at offset 'at'.
    removeInner: function(at, n) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        cleanUpLine(line);
        signalLater(line, "delete");
      }
      this.lines.splice(at, n);
    },

    // Helper used to collapse a small branch into a single leaf.
    collapse: function(lines) {
      lines.push.apply(lines, this.lines);
    },

    // Insert the given array of lines at offset 'at', count them as
    // having the given height.
    insertInner: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0; i < lines.length; ++i) { lines[i].parent = this; }
    },

    // Used to iterate over a part of the tree.
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        { if (op(this.lines[at])) { return true } }
    }
  };

  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0; i < children.length; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }

  BranchChunk.prototype = {
    chunkSize: function() { return this.size },

    removeInner: function(at, n) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.removeInner(at, rm);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
      // If the result is smaller than 25 lines, ensure that it is a
      // single leaf node.
      if (this.size - n < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },

    collapse: function(lines) {
      for (var i = 0; i < this.children.length; ++i) { this.children[i].collapse(lines); }
    },

    insertInner: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertInner(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
            // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
            var remaining = child.lines.length % 25 + 25;
            for (var pos = remaining; pos < child.lines.length;) {
              var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
              child.height -= leaf.height;
              this.children.splice(++i, 0, leaf);
              leaf.parent = this;
            }
            child.lines = child.lines.slice(0, remaining);
            this.maybeSpill();
          }
          break
        }
        at -= sz;
      }
    },

    // When a node has grown, check whether it should be split.
    maybeSpill: function() {
      if (this.children.length <= 10) { return }
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
       } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10)
      me.parent.maybeSpill();
    },

    iterN: function(at, n, op) {
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) { return true }
          if ((n -= used) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
    }
  };

  // Line widgets are block elements displayed above or below a line.

  var LineWidget = function(doc, node, options) {
    if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
      { this[opt] = options[opt]; } } }
    this.doc = doc;
    this.node = node;
  };

  LineWidget.prototype.clear = function () {
    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
    if (no == null || !ws) { return }
    for (var i = 0; i < ws.length; ++i) { if (ws[i] == this) { ws.splice(i--, 1); } }
    if (!ws.length) { line.widgets = null; }
    var height = widgetHeight(this);
    updateLineHeight(line, Math.max(0, line.height - height));
    if (cm) {
      runInOp(cm, function () {
        adjustScrollWhenAboveVisible(cm, line, -height);
        regLineChange(cm, no, "widget");
      });
      signalLater(cm, "lineWidgetCleared", cm, this, no);
    }
  };

  LineWidget.prototype.changed = function () {
      var this$1 = this;

    var oldH = this.height, cm = this.doc.cm, line = this.line;
    this.height = null;
    var diff = widgetHeight(this) - oldH;
    if (!diff) { return }
    if (!lineIsHidden(this.doc, line)) { updateLineHeight(line, line.height + diff); }
    if (cm) {
      runInOp(cm, function () {
        cm.curOp.forceUpdate = true;
        adjustScrollWhenAboveVisible(cm, line, diff);
        signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
      });
    }
  };
  eventMixin(LineWidget);

  function adjustScrollWhenAboveVisible(cm, line, diff) {
    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
      { addToScrollTop(cm, diff); }
  }

  function addLineWidget(doc, handle, node, options) {
    var widget = new LineWidget(doc, node, options);
    var cm = doc.cm;
    if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
    changeLine(doc, handle, "widget", function (line) {
      var widgets = line.widgets || (line.widgets = []);
      if (widget.insertAt == null) { widgets.push(widget); }
      else { widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget); }
      widget.line = line;
      if (cm && !lineIsHidden(doc, line)) {
        var aboveVisible = heightAtLine(line) < doc.scrollTop;
        updateLineHeight(line, line.height + widgetHeight(widget));
        if (aboveVisible) { addToScrollTop(cm, widget.height); }
        cm.curOp.forceUpdate = true;
      }
      return true
    });
    if (cm) { signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle)); }
    return widget
  }

  // TEXTMARKERS

  // Created with markText and setBookmark methods. A TextMarker is a
  // handle that can be used to clear or find a marked position in the
  // document. Line objects hold arrays (markedSpans) containing
  // {from, to, marker} object pointing to such marker objects, and
  // indicating that such a marker is present on that line. Multiple
  // lines may point to the same marker when it spans across lines.
  // The spans will have null for their from/to properties when the
  // marker continues beyond the start/end of the line. Markers have
  // links back to the lines they currently touch.

  // Collapsed markers have unique ids, in order to be able to order
  // them, which is needed for uniquely determining an outer marker
  // when they overlap (they may nest, but not partially overlap).
  var nextMarkerId = 0;

  var TextMarker = function(doc, type) {
    this.lines = [];
    this.type = type;
    this.doc = doc;
    this.id = ++nextMarkerId;
  };

  // Clear the marker.
  TextMarker.prototype.clear = function () {
    if (this.explicitlyCleared) { return }
    var cm = this.doc.cm, withOp = cm && !cm.curOp;
    if (withOp) { startOperation(cm); }
    if (hasHandler(this, "clear")) {
      var found = this.find();
      if (found) { signalLater(this, "clear", found.from, found.to); }
    }
    var min = null, max = null;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (cm && !this.collapsed) { regLineChange(cm, lineNo(line), "text"); }
      else if (cm) {
        if (span.to != null) { max = lineNo(line); }
        if (span.from != null) { min = lineNo(line); }
      }
      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
        { updateLineHeight(line, textHeight(cm.display)); }
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
      var visual = visualLine(this.lines[i$1]), len = lineLength(visual);
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    } }

    if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (cm) { reCheckSelection(cm.doc); }
    }
    if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
    if (withOp) { endOperation(cm); }
    if (this.parent) { this.parent.clear(); }
  };

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  TextMarker.prototype.find = function (side, lineObj) {
    if (side == null && this.type == "bookmark") { side = 1; }
    var from, to;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.from != null) {
        from = Pos(lineObj ? line : lineNo(line), span.from);
        if (side == -1) { return from }
      }
      if (span.to != null) {
        to = Pos(lineObj ? line : lineNo(line), span.to);
        if (side == 1) { return to }
      }
    }
    return from && {from: from, to: to}
  };

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  TextMarker.prototype.changed = function () {
      var this$1 = this;

    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
    if (!pos || !cm) { return }
    runInOp(cm, function () {
      var line = pos.line, lineN = lineNo(pos.line);
      var view = findViewForLine(cm, lineN);
      if (view) {
        clearLineMeasurementCacheFor(view);
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
      }
      cm.curOp.updateMaxLine = true;
      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
        var oldHeight = widget.height;
        widget.height = null;
        var dHeight = widgetHeight(widget) - oldHeight;
        if (dHeight)
          { updateLineHeight(line, line.height + dHeight); }
      }
      signalLater(cm, "markerChanged", cm, this$1);
    });
  };

  TextMarker.prototype.attachLine = function (line) {
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
        { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
    }
    this.lines.push(line);
  };

  TextMarker.prototype.detachLine = function (line) {
    this.lines.splice(indexOf(this.lines, line), 1);
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp
      ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
    }
  };
  eventMixin(TextMarker);

  // Create a marker, wire it up to the right lines, and
  function markText(doc, from, to, options, type) {
    // Shared markers (across linked documents) are handled separately
    // (markTextShared will call out to this again, once per
    // document).
    if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
    // Ensure we are in an operation.
    if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

    var marker = new TextMarker(doc, type), diff = cmp(from, to);
    if (options) { copyObj(options, marker, false); }
    // Don't connect empty markers unless clearWhenEmpty is false
    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
      { return marker }
    if (marker.replacedWith) {
      // Showing up as a widget implies collapsed (widget replaces text)
      marker.collapsed = true;
      marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
      if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
      if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
    }
    if (marker.collapsed) {
      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
        { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
      seeCollapsedSpans();
    }

    if (marker.addToHistory)
      { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }

    var curLine = from.line, cm = doc.cm, updateMaxLine;
    doc.iter(curLine, to.line + 1, function (line) {
      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
        { updateMaxLine = true; }
      if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
      addMarkedSpan(line, new MarkedSpan(marker,
                                         curLine == from.line ? from.ch : null,
                                         curLine == to.line ? to.ch : null), doc.cm && doc.cm.curOp);
      ++curLine;
    });
    // lineIsHidden depends on the presence of the spans, so needs a second pass
    if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
      if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
    }); }

    if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }

    if (marker.readOnly) {
      seeReadOnlySpans();
      if (doc.history.done.length || doc.history.undone.length)
        { doc.clearHistory(); }
    }
    if (marker.collapsed) {
      marker.id = ++nextMarkerId;
      marker.atomic = true;
    }
    if (cm) {
      // Sync editor state
      if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
      if (marker.collapsed)
        { regChange(cm, from.line, to.line + 1); }
      else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
               marker.attributes || marker.title)
        { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
      if (marker.atomic) { reCheckSelection(cm.doc); }
      signalLater(cm, "markerAdded", cm, marker);
    }
    return marker
  }

  // SHARED TEXTMARKERS

  // A shared marker spans multiple linked documents. It is
  // implemented as a meta-marker-object controlling multiple normal
  // markers.
  var SharedTextMarker = function(markers, primary) {
    this.markers = markers;
    this.primary = primary;
    for (var i = 0; i < markers.length; ++i)
      { markers[i].parent = this; }
  };

  SharedTextMarker.prototype.clear = function () {
    if (this.explicitlyCleared) { return }
    this.explicitlyCleared = true;
    for (var i = 0; i < this.markers.length; ++i)
      { this.markers[i].clear(); }
    signalLater(this, "clear");
  };

  SharedTextMarker.prototype.find = function (side, lineObj) {
    return this.primary.find(side, lineObj)
  };
  eventMixin(SharedTextMarker);

  function markTextShared(doc, from, to, options, type) {
    options = copyObj(options);
    options.shared = false;
    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
    var widget = options.widgetNode;
    linkedDocs(doc, function (doc) {
      if (widget) { options.widgetNode = widget.cloneNode(true); }
      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
      for (var i = 0; i < doc.linked.length; ++i)
        { if (doc.linked[i].isParent) { return } }
      primary = lst(markers);
    });
    return new SharedTextMarker(markers, primary)
  }

  function findSharedMarkers(doc) {
    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
  }

  function copySharedMarkers(doc, markers) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i], pos = marker.find();
      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
      if (cmp(mFrom, mTo)) {
        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
        marker.markers.push(subMark);
        subMark.parent = marker;
      }
    }
  }

  function detachSharedMarkers(markers) {
    var loop = function ( i ) {
      var marker = markers[i], linked = [marker.primary.doc];
      linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
      for (var j = 0; j < marker.markers.length; j++) {
        var subMarker = marker.markers[j];
        if (indexOf(linked, subMarker.doc) == -1) {
          subMarker.parent = null;
          marker.markers.splice(j--, 1);
        }
      }
    };

    for (var i = 0; i < markers.length; i++) loop( i );
  }

  var nextDocId = 0;
  var Doc = function(text, mode, firstLine, lineSep, direction) {
    if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
    if (firstLine == null) { firstLine = 0; }

    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
    this.first = firstLine;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.cleanGeneration = 1;
    this.modeFrontier = this.highlightFrontier = firstLine;
    var start = Pos(firstLine, 0);
    this.sel = simpleSelection(start);
    this.history = new History(null);
    this.id = ++nextDocId;
    this.modeOption = mode;
    this.lineSep = lineSep;
    this.direction = (direction == "rtl") ? "rtl" : "ltr";
    this.extend = false;

    if (typeof text == "string") { text = this.splitLines(text); }
    updateDoc(this, {from: start, to: start, text: text});
    setSelection(this, simpleSelection(start), sel_dontScroll);
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
    constructor: Doc,
    // Iterate over the document. Supports two forms -- with only one
    // argument, it calls that for each line in the document. With
    // three, it iterates over the range given by the first two (with
    // the second being non-inclusive).
    iter: function(from, to, op) {
      if (op) { this.iterN(from - this.first, to - from, op); }
      else { this.iterN(this.first, this.first + this.size, from); }
    },

    // Non-public interface for adding and removing lines.
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
      this.insertInner(at - this.first, lines, height);
    },
    remove: function(at, n) { this.removeInner(at - this.first, n); },

    // From here, the methods are part of the public interface. Most
    // are also available from CodeMirror (editor) instances.

    getValue: function(lineSep) {
      var lines = getLines(this, this.first, this.first + this.size);
      if (lineSep === false) { return lines }
      return lines.join(lineSep || this.lineSeparator())
    },
    setValue: docMethodOp(function(code) {
      var top = Pos(this.first, 0), last = this.first + this.size - 1;
      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                        text: this.splitLines(code), origin: "setValue", full: true}, true);
      if (this.cm) { scrollToCoords(this.cm, 0, 0); }
      setSelection(this, simpleSelection(top), sel_dontScroll);
    }),
    replaceRange: function(code, from, to, origin) {
      from = clipPos(this, from);
      to = to ? clipPos(this, to) : from;
      replaceRange(this, code, from, to, origin);
    },
    getRange: function(from, to, lineSep) {
      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
      if (lineSep === false) { return lines }
      return lines.join(lineSep || this.lineSeparator())
    },

    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

    getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
    getLineNumber: function(line) {return lineNo(line)},

    getLineHandleVisualStart: function(line) {
      if (typeof line == "number") { line = getLine(this, line); }
      return visualLine(line)
    },

    lineCount: function() {return this.size},
    firstLine: function() {return this.first},
    lastLine: function() {return this.first + this.size - 1},

    clipPos: function(pos) {return clipPos(this, pos)},

    getCursor: function(start) {
      var range = this.sel.primary(), pos;
      if (start == null || start == "head") { pos = range.head; }
      else if (start == "anchor") { pos = range.anchor; }
      else if (start == "end" || start == "to" || start === false) { pos = range.to(); }
      else { pos = range.from(); }
      return pos
    },
    listSelections: function() { return this.sel.ranges },
    somethingSelected: function() {return this.sel.somethingSelected()},

    setCursor: docMethodOp(function(line, ch, options) {
      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
    }),
    setSelection: docMethodOp(function(anchor, head, options) {
      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
    }),
    extendSelection: docMethodOp(function(head, other, options) {
      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
    }),
    extendSelections: docMethodOp(function(heads, options) {
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    extendSelectionsBy: docMethodOp(function(f, options) {
      var heads = map(this.sel.ranges, f);
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    setSelections: docMethodOp(function(ranges, primary, options) {
      if (!ranges.length) { return }
      var out = [];
      for (var i = 0; i < ranges.length; i++)
        { out[i] = new Range(clipPos(this, ranges[i].anchor),
                           clipPos(this, ranges[i].head || ranges[i].anchor)); }
      if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
      setSelection(this, normalizeSelection(this.cm, out, primary), options);
    }),
    addSelection: docMethodOp(function(anchor, head, options) {
      var ranges = this.sel.ranges.slice(0);
      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
      setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
    }),

    getSelection: function(lineSep) {
      var ranges = this.sel.ranges, lines;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        lines = lines ? lines.concat(sel) : sel;
      }
      if (lineSep === false) { return lines }
      else { return lines.join(lineSep || this.lineSeparator()) }
    },
    getSelections: function(lineSep) {
      var parts = [], ranges = this.sel.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        if (lineSep !== false) { sel = sel.join(lineSep || this.lineSeparator()); }
        parts[i] = sel;
      }
      return parts
    },
    replaceSelection: function(code, collapse, origin) {
      var dup = [];
      for (var i = 0; i < this.sel.ranges.length; i++)
        { dup[i] = code; }
      this.replaceSelections(dup, collapse, origin || "+input");
    },
    replaceSelections: docMethodOp(function(code, collapse, origin) {
      var changes = [], sel = this.sel;
      for (var i = 0; i < sel.ranges.length; i++) {
        var range = sel.ranges[i];
        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
      }
      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
      for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
        { makeChange(this, changes[i$1]); }
      if (newSel) { setSelectionReplaceHistory(this, newSel); }
      else if (this.cm) { ensureCursorVisible(this.cm); }
    }),
    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

    setExtending: function(val) {this.extend = val;},
    getExtending: function() {return this.extend},

    historySize: function() {
      var hist = this.history, done = 0, undone = 0;
      for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
      for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
      return {undo: done, redo: undone}
    },
    clearHistory: function() {
      var this$1 = this;

      this.history = new History(this.history);
      linkedDocs(this, function (doc) { return doc.history = this$1.history; }, true);
    },

    markClean: function() {
      this.cleanGeneration = this.changeGeneration(true);
    },
    changeGeneration: function(forceSplit) {
      if (forceSplit)
        { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
      return this.history.generation
    },
    isClean: function (gen) {
      return this.history.generation == (gen || this.cleanGeneration)
    },

    getHistory: function() {
      return {done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)}
    },
    setHistory: function(histData) {
      var hist = this.history = new History(this.history);
      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
    },

    setGutterMarker: docMethodOp(function(line, gutterID, value) {
      return changeLine(this, line, "gutter", function (line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {});
        markers[gutterID] = value;
        if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
        return true
      })
    }),

    clearGutter: docMethodOp(function(gutterID) {
      var this$1 = this;

      this.iter(function (line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          changeLine(this$1, line, "gutter", function () {
            line.gutterMarkers[gutterID] = null;
            if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
            return true
          });
        }
      });
    }),

    lineInfo: function(line) {
      var n;
      if (typeof line == "number") {
        if (!isLine(this, line)) { return null }
        n = line;
        line = getLine(this, line);
        if (!line) { return null }
      } else {
        n = lineNo(line);
        if (n == null) { return null }
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets}
    },

    addLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        if (!line[prop]) { line[prop] = cls; }
        else if (classTest(cls).test(line[prop])) { return false }
        else { line[prop] += " " + cls; }
        return true
      })
    }),
    removeLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        var cur = line[prop];
        if (!cur) { return false }
        else if (cls == null) { line[prop] = null; }
        else {
          var found = cur.match(classTest(cls));
          if (!found) { return false }
          var end = found.index + found[0].length;
          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
        }
        return true
      })
    }),

    addLineWidget: docMethodOp(function(handle, node, options) {
      return addLineWidget(this, handle, node, options)
    }),
    removeLineWidget: function(widget) { widget.clear(); },

    markText: function(from, to, options) {
      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
    },
    setBookmark: function(pos, options) {
      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                      insertLeft: options && options.insertLeft,
                      clearWhenEmpty: false, shared: options && options.shared,
                      handleMouseEvents: options && options.handleMouseEvents};
      pos = clipPos(this, pos);
      return markText(this, pos, pos, realOpts, "bookmark")
    },
    findMarksAt: function(pos) {
      pos = clipPos(this, pos);
      var markers = [], spans = getLine(this, pos.line).markedSpans;
      if (spans) { for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if ((span.from == null || span.from <= pos.ch) &&
            (span.to == null || span.to >= pos.ch))
          { markers.push(span.marker.parent || span.marker); }
      } }
      return markers
    },
    findMarks: function(from, to, filter) {
      from = clipPos(this, from); to = clipPos(this, to);
      var found = [], lineNo = from.line;
      this.iter(from.line, to.line + 1, function (line) {
        var spans = line.markedSpans;
        if (spans) { for (var i = 0; i < spans.length; i++) {
          var span = spans[i];
          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
                span.from == null && lineNo != from.line ||
                span.from != null && lineNo == to.line && span.from >= to.ch) &&
              (!filter || filter(span.marker)))
            { found.push(span.marker.parent || span.marker); }
        } }
        ++lineNo;
      });
      return found
    },
    getAllMarks: function() {
      var markers = [];
      this.iter(function (line) {
        var sps = line.markedSpans;
        if (sps) { for (var i = 0; i < sps.length; ++i)
          { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
      });
      return markers
    },

    posFromIndex: function(off) {
      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
      this.iter(function (line) {
        var sz = line.text.length + sepSize;
        if (sz > off) { ch = off; return true }
        off -= sz;
        ++lineNo;
      });
      return clipPos(this, Pos(lineNo, ch))
    },
    indexFromPos: function (coords) {
      coords = clipPos(this, coords);
      var index = coords.ch;
      if (coords.line < this.first || coords.ch < 0) { return 0 }
      var sepSize = this.lineSeparator().length;
      this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
        index += line.text.length + sepSize;
      });
      return index
    },

    copy: function(copyHistory) {
      var doc = new Doc(getLines(this, this.first, this.first + this.size),
                        this.modeOption, this.first, this.lineSep, this.direction);
      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
      doc.sel = this.sel;
      doc.extend = false;
      if (copyHistory) {
        doc.history.undoDepth = this.history.undoDepth;
        doc.setHistory(this.getHistory());
      }
      return doc
    },

    linkedDoc: function(options) {
      if (!options) { options = {}; }
      var from = this.first, to = this.first + this.size;
      if (options.from != null && options.from > from) { from = options.from; }
      if (options.to != null && options.to < to) { to = options.to; }
      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
      if (options.sharedHist) { copy.history = this.history
      ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
      copySharedMarkers(copy, findSharedMarkers(this));
      return copy
    },
    unlinkDoc: function(other) {
      if (other instanceof CodeMirror) { other = other.doc; }
      if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
        var link = this.linked[i];
        if (link.doc != other) { continue }
        this.linked.splice(i, 1);
        other.unlinkDoc(this);
        detachSharedMarkers(findSharedMarkers(this));
        break
      } }
      // If the histories were shared, split them again
      if (other.history == this.history) {
        var splitIds = [other.id];
        linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
        other.history = new History(null);
        other.history.done = copyHistoryArray(this.history.done, splitIds);
        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
      }
    },
    iterLinkedDocs: function(f) {linkedDocs(this, f);},

    getMode: function() {return this.mode},
    getEditor: function() {return this.cm},

    splitLines: function(str) {
      if (this.lineSep) { return str.split(this.lineSep) }
      return splitLinesAuto(str)
    },
    lineSeparator: function() { return this.lineSep || "\n" },

    setDirection: docMethodOp(function (dir) {
      if (dir != "rtl") { dir = "ltr"; }
      if (dir == this.direction) { return }
      this.direction = dir;
      this.iter(function (line) { return line.order = null; });
      if (this.cm) { directionChanged(this.cm); }
    })
  });

  // Public alias.
  Doc.prototype.eachLine = Doc.prototype.iter;

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
    var cm = this;
    clearDragCursor(cm);
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
      { return }
    e_preventDefault(e);
    if (ie) { lastDrop = +new Date; }
    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
    if (!pos || cm.isReadOnly()) { return }
    // Might be a file drop, in which case we simply extract the text
    // and insert it.
    if (files && files.length && window.FileReader && window.File) {
      var n = files.length, text = Array(n), read = 0;
      var markAsReadAndPasteIfAllFilesAreRead = function () {
        if (++read == n) {
          operation(cm, function () {
            pos = clipPos(cm.doc, pos);
            var change = {from: pos, to: pos,
                          text: cm.doc.splitLines(
                              text.filter(function (t) { return t != null; }).join(cm.doc.lineSeparator())),
                          origin: "paste"};
            makeChange(cm.doc, change);
            setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
          })();
        }
      };
      var readTextFromFile = function (file, i) {
        if (cm.options.allowDropFileTypes &&
            indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
          markAsReadAndPasteIfAllFilesAreRead();
          return
        }
        var reader = new FileReader;
        reader.onerror = function () { return markAsReadAndPasteIfAllFilesAreRead(); };
        reader.onload = function () {
          var content = reader.result;
          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
            markAsReadAndPasteIfAllFilesAreRead();
            return
          }
          text[i] = content;
          markAsReadAndPasteIfAllFilesAreRead();
        };
        reader.readAsText(file);
      };
      for (var i = 0; i < files.length; i++) { readTextFromFile(files[i], i); }
    } else { // Normal drop
      // Don't do a replace if the drop happened inside of the selected text.
      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
        cm.state.draggingText(e);
        // Ensure the editor is re-focused
        setTimeout(function () { return cm.display.input.focus(); }, 20);
        return
      }
      try {
        var text$1 = e.dataTransfer.getData("Text");
        if (text$1) {
          var selected;
          if (cm.state.draggingText && !cm.state.draggingText.copy)
            { selected = cm.listSelections(); }
          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
          if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
            { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
          cm.replaceSelection(text$1, "around", "paste");
          cm.display.input.focus();
        }
      }
      catch(e$1){}
    }
  }

  function onDragStart(cm, e) {
    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

    e.dataTransfer.setData("Text", cm.getSelection());
    e.dataTransfer.effectAllowed = "copyMove";

    // Use dummy image instead of default browsers image.
    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
    if (e.dataTransfer.setDragImage && !safari) {
      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      if (presto) {
        img.width = img.height = 1;
        cm.display.wrapper.appendChild(img);
        // Force a relayout, or Opera won't use our image for some obscure reason
        img._top = img.offsetTop;
      }
      e.dataTransfer.setDragImage(img, 0, 0);
      if (presto) { img.parentNode.removeChild(img); }
    }
  }

  function onDragOver(cm, e) {
    var pos = posFromMouse(cm, e);
    if (!pos) { return }
    var frag = document.createDocumentFragment();
    drawSelectionCursor(cm, pos, frag);
    if (!cm.display.dragCursor) {
      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
    }
    removeChildrenAndAdd(cm.display.dragCursor, frag);
  }

  function clearDragCursor(cm) {
    if (cm.display.dragCursor) {
      cm.display.lineSpace.removeChild(cm.display.dragCursor);
      cm.display.dragCursor = null;
    }
  }

  // These must be handled carefully, because naively registering a
  // handler for each editor will cause the editors to never be
  // garbage collected.

  function forEachCodeMirror(f) {
    if (!document.getElementsByClassName) { return }
    var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
    for (var i = 0; i < byClass.length; i++) {
      var cm = byClass[i].CodeMirror;
      if (cm) { editors.push(cm); }
    }
    if (editors.length) { editors[0].operation(function () {
      for (var i = 0; i < editors.length; i++) { f(editors[i]); }
    }); }
  }

  var globalsRegistered = false;
  function ensureGlobalHandlers() {
    if (globalsRegistered) { return }
    registerGlobalHandlers();
    globalsRegistered = true;
  }
  function registerGlobalHandlers() {
    // When the window resizes, we need to refresh active editors.
    var resizeTimer;
    on(window, "resize", function () {
      if (resizeTimer == null) { resizeTimer = setTimeout(function () {
        resizeTimer = null;
        forEachCodeMirror(onResize);
      }, 100); }
    });
    // When the window loses focus, we want to show the editor as blurred
    on(window, "blur", function () { return forEachCodeMirror(onBlur); });
  }
  // Called when the window resizes
  function onResize(cm) {
    var d = cm.display;
    // Might be a text scaling operation, clear size caches.
    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
    d.scrollbarsClipped = false;
    cm.setSize();
  }

  var keyNames = {
    3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock",
    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
    221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
  };

  // Number keys
  for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
  // Alphabetic keys
  for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
  // Function keys
  for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }

  var keyMap = {};

  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
    "Esc": "singleSelection"
  };
  // Note that the save and find-related commands aren't defined by
  // default. User code or addons can define them. Unknown commands
  // are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
    "fallthrough": "basic"
  };
  // Very basic readline/emacs-style bindings, which are standard on Mac.
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp",
    "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine",
    "Ctrl-T": "transposeChars", "Ctrl-O": "openLine"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
    "fallthrough": ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

  // KEYMAP DISPATCH

  function normalizeKeyName(name) {
    var parts = name.split(/-(?!$)/);
    name = parts[parts.length - 1];
    var alt, ctrl, shift, cmd;
    for (var i = 0; i < parts.length - 1; i++) {
      var mod = parts[i];
      if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
      else if (/^a(lt)?$/i.test(mod)) { alt = true; }
      else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
      else if (/^s(hift)?$/i.test(mod)) { shift = true; }
      else { throw new Error("Unrecognized modifier name: " + mod) }
    }
    if (alt) { name = "Alt-" + name; }
    if (ctrl) { name = "Ctrl-" + name; }
    if (cmd) { name = "Cmd-" + name; }
    if (shift) { name = "Shift-" + name; }
    return name
  }

  // This is a kludge to keep keymaps mostly working as raw objects
  // (backwards compatibility) while at the same time support features
  // like normalization and multi-stroke key bindings. It compiles a
  // new normalized keymap, and then updates the old object to reflect
  // this.
  function normalizeKeyMap(keymap) {
    var copy = {};
    for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
      var value = keymap[keyname];
      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
      if (value == "...") { delete keymap[keyname]; continue }

      var keys = map(keyname.split(" "), normalizeKeyName);
      for (var i = 0; i < keys.length; i++) {
        var val = (void 0), name = (void 0);
        if (i == keys.length - 1) {
          name = keys.join(" ");
          val = value;
        } else {
          name = keys.slice(0, i + 1).join(" ");
          val = "...";
        }
        var prev = copy[name];
        if (!prev) { copy[name] = val; }
        else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
      }
      delete keymap[keyname];
    } }
    for (var prop in copy) { keymap[prop] = copy[prop]; }
    return keymap
  }

  function lookupKey(key, map, handle, context) {
    map = getKeyMap(map);
    var found = map.call ? map.call(key, context) : map[key];
    if (found === false) { return "nothing" }
    if (found === "...") { return "multi" }
    if (found != null && handle(found)) { return "handled" }

    if (map.fallthrough) {
      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
        { return lookupKey(key, map.fallthrough, handle, context) }
      for (var i = 0; i < map.fallthrough.length; i++) {
        var result = lookupKey(key, map.fallthrough[i], handle, context);
        if (result) { return result }
      }
    }
  }

  // Modifier key presses don't count as 'real' key presses for the
  // purpose of keymap fallthrough.
  function isModifierKey(value) {
    var name = typeof value == "string" ? value : keyNames[value.keyCode];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
  }

  function addModifierNames(name, event, noShift) {
    var base = name;
    if (event.altKey && base != "Alt") { name = "Alt-" + name; }
    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") { name = "Cmd-" + name; }
    if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
    return name
  }

  // Look up the name of a key as indicated by an event object.
  function keyName(event, noShift) {
    if (presto && event.keyCode == 34 && event["char"]) { return false }
    var name = keyNames[event.keyCode];
    if (name == null || event.altGraphKey) { return false }
    // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
    // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
    if (event.keyCode == 3 && event.code) { name = event.code; }
    return addModifierNames(name, event, noShift)
  }

  function getKeyMap(val) {
    return typeof val == "string" ? keyMap[val] : val
  }

  // Helper for deleting text near the selection(s), used to implement
  // backspace, delete, and similar functionality.
  function deleteNearSelection(cm, compute) {
    var ranges = cm.doc.sel.ranges, kill = [];
    // Build up a set of ranges to kill first, merging overlapping
    // ranges.
    for (var i = 0; i < ranges.length; i++) {
      var toKill = compute(ranges[i]);
      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
        var replaced = kill.pop();
        if (cmp(replaced.from, toKill.from) < 0) {
          toKill.from = replaced.from;
          break
        }
      }
      kill.push(toKill);
    }
    // Next, remove those actual ranges.
    runInOp(cm, function () {
      for (var i = kill.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
      ensureCursorVisible(cm);
    });
  }

  function moveCharLogically(line, ch, dir) {
    var target = skipExtendingChars(line.text, ch + dir, dir);
    return target < 0 || target > line.text.length ? null : target
  }

  function moveLogically(line, start, dir) {
    var ch = moveCharLogically(line, start.ch, dir);
    return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
  }

  function endOfLine(visually, cm, lineObj, lineNo, dir) {
    if (visually) {
      if (cm.doc.direction == "rtl") { dir = -dir; }
      var order = getOrder(lineObj, cm.doc.direction);
      if (order) {
        var part = dir < 0 ? lst(order) : order[0];
        var moveInStorageOrder = (dir < 0) == (part.level == 1);
        var sticky = moveInStorageOrder ? "after" : "before";
        var ch;
        // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
        // it could be that the last bidi part is not on the last visual line,
        // since visual lines contain content order-consecutive chunks.
        // Thus, in rtl, we are looking for the first (content-order) character
        // in the rtl chunk that is on the last line (that is, the same line
        // as the last (content-order) character).
        if (part.level > 0 || cm.doc.direction == "rtl") {
          var prep = prepareMeasureForLine(cm, lineObj);
          ch = dir < 0 ? lineObj.text.length - 1 : 0;
          var targetTop = measureCharPrepared(cm, prep, ch).top;
          ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
          if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
        } else { ch = dir < 0 ? part.to : part.from; }
        return new Pos(lineNo, ch, sticky)
      }
    }
    return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
  }

  function moveVisually(cm, line, start, dir) {
    var bidi = getOrder(line, cm.doc.direction);
    if (!bidi) { return moveLogically(line, start, dir) }
    if (start.ch >= line.text.length) {
      start.ch = line.text.length;
      start.sticky = "before";
    } else if (start.ch <= 0) {
      start.ch = 0;
      start.sticky = "after";
    }
    var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
    if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
      // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
      // nothing interesting happens.
      return moveLogically(line, start, dir)
    }

    var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
    var prep;
    var getWrappedLineExtent = function (ch) {
      if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
      prep = prep || prepareMeasureForLine(cm, line);
      return wrappedLineExtentChar(cm, line, prep, ch)
    };
    var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

    if (cm.doc.direction == "rtl" || part.level == 1) {
      var moveInStorageOrder = (part.level == 1) == (dir < 0);
      var ch = mv(start, moveInStorageOrder ? 1 : -1);
      if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
        // Case 2: We move within an rtl part or in an rtl editor on the same visual line
        var sticky = moveInStorageOrder ? "before" : "after";
        return new Pos(start.line, ch, sticky)
      }
    }

    // Case 3: Could not move within this bidi part in this visual line, so leave
    // the current bidi part

    var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
      var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
        ? new Pos(start.line, mv(ch, 1), "before")
        : new Pos(start.line, ch, "after"); };

      for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
        var part = bidi[partPos];
        var moveInStorageOrder = (dir > 0) == (part.level != 1);
        var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
        if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
        ch = moveInStorageOrder ? part.from : mv(part.to, -1);
        if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
      }
    };

    // Case 3a: Look for other bidi parts on the same visual line
    var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
    if (res) { return res }

    // Case 3b: Look for other bidi parts on the next visual line
    var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
    if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
      res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
      if (res) { return res }
    }

    // Case 4: Nowhere to move
    return null
  }

  // Commands are parameter-less actions that can be performed on an
  // editor, mostly used for keybindings.
  var commands = {
    selectAll: selectAll,
    singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
    killLine: function (cm) { return deleteNearSelection(cm, function (range) {
      if (range.empty()) {
        var len = getLine(cm.doc, range.head.line).text.length;
        if (range.head.ch == len && range.head.line < cm.lastLine())
          { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
        else
          { return {from: range.head, to: Pos(range.head.line, len)} }
      } else {
        return {from: range.from(), to: range.to()}
      }
    }); },
    deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0),
      to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
    }); }); },
    delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0), to: range.from()
    }); }); },
    delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var leftPos = cm.coordsChar({left: 0, top: top}, "div");
      return {from: leftPos, to: range.from()}
    }); },
    delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
      return {from: range.from(), to: rightPos }
    }); },
    undo: function (cm) { return cm.undo(); },
    redo: function (cm) { return cm.redo(); },
    undoSelection: function (cm) { return cm.undoSelection(); },
    redoSelection: function (cm) { return cm.redoSelection(); },
    goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
    goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
    goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
      {origin: "+move", bias: 1}
    ); },
    goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
      {origin: "+move", bias: 1}
    ); },
    goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
      {origin: "+move", bias: -1}
    ); },
    goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    }, sel_move); },
    goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: 0, top: top}, "div")
    }, sel_move); },
    goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      var pos = cm.coordsChar({left: 0, top: top}, "div");
      if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
      return pos
    }, sel_move); },
    goLineUp: function (cm) { return cm.moveV(-1, "line"); },
    goLineDown: function (cm) { return cm.moveV(1, "line"); },
    goPageUp: function (cm) { return cm.moveV(-1, "page"); },
    goPageDown: function (cm) { return cm.moveV(1, "page"); },
    goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
    goCharRight: function (cm) { return cm.moveH(1, "char"); },
    goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
    goColumnRight: function (cm) { return cm.moveH(1, "column"); },
    goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
    goGroupRight: function (cm) { return cm.moveH(1, "group"); },
    goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
    goWordRight: function (cm) { return cm.moveH(1, "word"); },
    delCharBefore: function (cm) { return cm.deleteH(-1, "codepoint"); },
    delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
    delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
    delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
    delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
    delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
    indentAuto: function (cm) { return cm.indentSelection("smart"); },
    indentMore: function (cm) { return cm.indentSelection("add"); },
    indentLess: function (cm) { return cm.indentSelection("subtract"); },
    insertTab: function (cm) { return cm.replaceSelection("\t"); },
    insertSoftTab: function (cm) {
      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
      for (var i = 0; i < ranges.length; i++) {
        var pos = ranges[i].from();
        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
        spaces.push(spaceStr(tabSize - col % tabSize));
      }
      cm.replaceSelections(spaces);
    },
    defaultTab: function (cm) {
      if (cm.somethingSelected()) { cm.indentSelection("add"); }
      else { cm.execCommand("insertTab"); }
    },
    // Swap the two chars left and right of each selection's head.
    // Move cursor behind the two swapped characters afterwards.
    //
    // Doesn't consider line feeds a character.
    // Doesn't scan more than one line above to find a character.
    // Doesn't do anything on an empty line.
    // Doesn't do anything with non-empty selections.
    transposeChars: function (cm) { return runInOp(cm, function () {
      var ranges = cm.listSelections(), newSel = [];
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty()) { continue }
        var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
        if (line) {
          if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
          if (cur.ch > 0) {
            cur = new Pos(cur.line, cur.ch + 1);
            cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                            Pos(cur.line, cur.ch - 2), cur, "+transpose");
          } else if (cur.line > cm.doc.first) {
            var prev = getLine(cm.doc, cur.line - 1).text;
            if (prev) {
              cur = new Pos(cur.line, 1);
              cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                              prev.charAt(prev.length - 1),
                              Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
            }
          }
        }
        newSel.push(new Range(cur, cur));
      }
      cm.setSelections(newSel);
    }); },
    newlineAndIndent: function (cm) { return runInOp(cm, function () {
      var sels = cm.listSelections();
      for (var i = sels.length - 1; i >= 0; i--)
        { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
      sels = cm.listSelections();
      for (var i$1 = 0; i$1 < sels.length; i$1++)
        { cm.indentLine(sels[i$1].from().line, null, true); }
      ensureCursorVisible(cm);
    }); },
    openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
    toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
  };


  function lineStart(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLine(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, visual, lineN, 1)
  }
  function lineEnd(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLineEnd(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, line, lineN, -1)
  }
  function lineStartSmart(cm, pos) {
    var start = lineStart(cm, pos.line);
    var line = getLine(cm.doc, start.line);
    var order = getOrder(line, cm.doc.direction);
    if (!order || order[0].level == 0) {
      var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
      return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
    }
    return start
  }

  // Run a handler that was bound to a key.
  function doHandleBinding(cm, bound, dropShift) {
    if (typeof bound == "string") {
      bound = commands[bound];
      if (!bound) { return false }
    }
    // Ensure previous input has been read, so that the handler sees a
    // consistent view of the document
    cm.display.input.ensurePolled();
    var prevShift = cm.display.shift, done = false;
    try {
      if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
      if (dropShift) { cm.display.shift = false; }
      done = bound(cm) != Pass;
    } finally {
      cm.display.shift = prevShift;
      cm.state.suppressEdits = false;
    }
    return done
  }

  function lookupKeyForEditor(cm, name, handle) {
    for (var i = 0; i < cm.state.keyMaps.length; i++) {
      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
      if (result) { return result }
    }
    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
      || lookupKey(name, cm.options.keyMap, handle, cm)
  }

  // Note that, despite the name, this function is also used to check
  // for bound mouse clicks.

  var stopSeq = new Delayed;

  function dispatchKey(cm, name, e, handle) {
    var seq = cm.state.keySeq;
    if (seq) {
      if (isModifierKey(name)) { return "handled" }
      if (/\'$/.test(name))
        { cm.state.keySeq = null; }
      else
        { stopSeq.set(50, function () {
          if (cm.state.keySeq == seq) {
            cm.state.keySeq = null;
            cm.display.input.reset();
          }
        }); }
      if (dispatchKeyInner(cm, seq + " " + name, e, handle)) { return true }
    }
    return dispatchKeyInner(cm, name, e, handle)
  }

  function dispatchKeyInner(cm, name, e, handle) {
    var result = lookupKeyForEditor(cm, name, handle);

    if (result == "multi")
      { cm.state.keySeq = name; }
    if (result == "handled")
      { signalLater(cm, "keyHandled", cm, name, e); }

    if (result == "handled" || result == "multi") {
      e_preventDefault(e);
      restartBlink(cm);
    }

    return !!result
  }

  // Handle a key from the keydown event.
  function handleKeyBinding(cm, e) {
    var name = keyName(e, true);
    if (!name) { return false }

    if (e.shiftKey && !cm.state.keySeq) {
      // First try to resolve full name (including 'Shift-'). Failing
      // that, see if there is a cursor-motion command (starting with
      // 'go') bound to the keyname without 'Shift-'.
      return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
          || dispatchKey(cm, name, e, function (b) {
               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                 { return doHandleBinding(cm, b) }
             })
    } else {
      return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
    }
  }

  // Handle a key from the keypress event
  function handleCharBinding(cm, e, ch) {
    return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
    var cm = this;
    if (e.target && e.target != cm.display.input.getField()) { return }
    cm.curOp.focus = activeElt();
    if (signalDOMEvent(cm, e)) { return }
    // IE does strange things with escape.
    if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
    var code = e.keyCode;
    cm.display.shift = code == 16 || e.shiftKey;
    var handled = handleKeyBinding(cm, e);
    if (presto) {
      lastStoppedKey = handled ? code : null;
      // Opera has no cut event... we try to at least catch the key combo
      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
        { cm.replaceSelection("", null, "cut"); }
    }
    if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand)
      { document.execCommand("cut"); }

    // Turn mouse into crosshair when Alt is held on Mac.
    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
      { showCrossHair(cm); }
  }

  function showCrossHair(cm) {
    var lineDiv = cm.display.lineDiv;
    addClass(lineDiv, "CodeMirror-crosshair");

    function up(e) {
      if (e.keyCode == 18 || !e.altKey) {
        rmClass(lineDiv, "CodeMirror-crosshair");
        off(document, "keyup", up);
        off(document, "mouseover", up);
      }
    }
    on(document, "keyup", up);
    on(document, "mouseover", up);
  }

  function onKeyUp(e) {
    if (e.keyCode == 16) { this.doc.sel.shift = false; }
    signalDOMEvent(this, e);
  }

  function onKeyPress(e) {
    var cm = this;
    if (e.target && e.target != cm.display.input.getField()) { return }
    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
    var keyCode = e.keyCode, charCode = e.charCode;
    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
    // Some browsers fire keypress events for backspace
    if (ch == "\x08") { return }
    if (handleCharBinding(cm, e, ch)) { return }
    cm.display.input.onKeyPress(e);
  }

  var DOUBLECLICK_DELAY = 400;

  var PastClick = function(time, pos, button) {
    this.time = time;
    this.pos = pos;
    this.button = button;
  };

  PastClick.prototype.compare = function (time, pos, button) {
    return this.time + DOUBLECLICK_DELAY > time &&
      cmp(pos, this.pos) == 0 && button == this.button
  };

  var lastClick, lastDoubleClick;
  function clickRepeat(pos, button) {
    var now = +new Date;
    if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
      lastClick = lastDoubleClick = null;
      return "triple"
    } else if (lastClick && lastClick.compare(now, pos, button)) {
      lastDoubleClick = new PastClick(now, pos, button);
      lastClick = null;
      return "double"
    } else {
      lastClick = new PastClick(now, pos, button);
      lastDoubleClick = null;
      return "single"
    }
  }

  // A mouse down can be a single click, double click, triple click,
  // start of selection drag, start of text drag, new cursor
  // (ctrl-click), rectangle drag (alt-drag), or xwin
  // middle-click-paste. Or it might be a click on something we should
  // not interfere with, such as a scrollbar or widget.
  function onMouseDown(e) {
    var cm = this, display = cm.display;
    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
    display.input.ensurePolled();
    display.shift = e.shiftKey;

    if (eventInWidget(display, e)) {
      if (!webkit) {
        // Briefly turn off draggability, to allow widgets to do
        // normal dragging things.
        display.scroller.draggable = false;
        setTimeout(function () { return display.scroller.draggable = true; }, 100);
      }
      return
    }
    if (clickInGutter(cm, e)) { return }
    var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
    window.focus();

    // #3261: make sure, that we're not starting a second selection
    if (button == 1 && cm.state.selectingText)
      { cm.state.selectingText(e); }

    if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }

    if (button == 1) {
      if (pos) { leftButtonDown(cm, pos, repeat, e); }
      else if (e_target(e) == display.scroller) { e_preventDefault(e); }
    } else if (button == 2) {
      if (pos) { extendSelection(cm.doc, pos); }
      setTimeout(function () { return display.input.focus(); }, 20);
    } else if (button == 3) {
      if (captureRightClick) { cm.display.input.onContextMenu(e); }
      else { delayBlurEvent(cm); }
    }
  }

  function handleMappedButton(cm, button, pos, repeat, event) {
    var name = "Click";
    if (repeat == "double") { name = "Double" + name; }
    else if (repeat == "triple") { name = "Triple" + name; }
    name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;

    return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
      if (typeof bound == "string") { bound = commands[bound]; }
      if (!bound) { return false }
      var done = false;
      try {
        if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
        done = bound(cm, pos) != Pass;
      } finally {
        cm.state.suppressEdits = false;
      }
      return done
    })
  }

  function configureMouse(cm, repeat, event) {
    var option = cm.getOption("configureMouse");
    var value = option ? option(cm, repeat, event) : {};
    if (value.unit == null) {
      var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
      value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
    }
    if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
    if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
    if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
    return value
  }

  function leftButtonDown(cm, pos, repeat, event) {
    if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
    else { cm.curOp.focus = activeElt(); }

    var behavior = configureMouse(cm, repeat, event);

    var sel = cm.doc.sel, contained;
    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
        repeat == "single" && (contained = sel.contains(pos)) > -1 &&
        (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
        (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
      { leftButtonStartDrag(cm, event, pos, behavior); }
    else
      { leftButtonSelect(cm, event, pos, behavior); }
  }

  // Start a text drag. When it ends, see if any dragging actually
  // happen, and treat as a click if it didn't.
  function leftButtonStartDrag(cm, event, pos, behavior) {
    var display = cm.display, moved = false;
    var dragEnd = operation(cm, function (e) {
      if (webkit) { display.scroller.draggable = false; }
      cm.state.draggingText = false;
      if (cm.state.delayingBlurEvent) {
        if (cm.hasFocus()) { cm.state.delayingBlurEvent = false; }
        else { delayBlurEvent(cm); }
      }
      off(display.wrapper.ownerDocument, "mouseup", dragEnd);
      off(display.wrapper.ownerDocument, "mousemove", mouseMove);
      off(display.scroller, "dragstart", dragStart);
      off(display.scroller, "drop", dragEnd);
      if (!moved) {
        e_preventDefault(e);
        if (!behavior.addNew)
          { extendSelection(cm.doc, pos, null, null, behavior.extend); }
        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
        if ((webkit && !safari) || ie && ie_version == 9)
          { setTimeout(function () {display.wrapper.ownerDocument.body.focus({preventScroll: true}); display.input.focus();}, 20); }
        else
          { display.input.focus(); }
      }
    });
    var mouseMove = function(e2) {
      moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
    };
    var dragStart = function () { return moved = true; };
    // Let the drag handler handle this.
    if (webkit) { display.scroller.draggable = true; }
    cm.state.draggingText = dragEnd;
    dragEnd.copy = !behavior.moveOnDrag;
    on(display.wrapper.ownerDocument, "mouseup", dragEnd);
    on(display.wrapper.ownerDocument, "mousemove", mouseMove);
    on(display.scroller, "dragstart", dragStart);
    on(display.scroller, "drop", dragEnd);

    cm.state.delayingBlurEvent = true;
    setTimeout(function () { return display.input.focus(); }, 20);
    // IE's approach to draggable
    if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
  }

  function rangeForUnit(cm, pos, unit) {
    if (unit == "char") { return new Range(pos, pos) }
    if (unit == "word") { return cm.findWordAt(pos) }
    if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
    var result = unit(cm, pos);
    return new Range(result.from, result.to)
  }

  // Normal selection, as opposed to text dragging.
  function leftButtonSelect(cm, event, start, behavior) {
    if (ie) { delayBlurEvent(cm); }
    var display = cm.display, doc = cm.doc;
    e_preventDefault(event);

    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
    if (behavior.addNew && !behavior.extend) {
      ourIndex = doc.sel.contains(start);
      if (ourIndex > -1)
        { ourRange = ranges[ourIndex]; }
      else
        { ourRange = new Range(start, start); }
    } else {
      ourRange = doc.sel.primary();
      ourIndex = doc.sel.primIndex;
    }

    if (behavior.unit == "rectangle") {
      if (!behavior.addNew) { ourRange = new Range(start, start); }
      start = posFromMouse(cm, event, true, true);
      ourIndex = -1;
    } else {
      var range = rangeForUnit(cm, start, behavior.unit);
      if (behavior.extend)
        { ourRange = extendRange(ourRange, range.anchor, range.head, behavior.extend); }
      else
        { ourRange = range; }
    }

    if (!behavior.addNew) {
      ourIndex = 0;
      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
      startSel = doc.sel;
    } else if (ourIndex == -1) {
      ourIndex = ranges.length;
      setSelection(doc, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
                   {scroll: false, origin: "*mouse"});
    } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
      setSelection(doc, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                   {scroll: false, origin: "*mouse"});
      startSel = doc.sel;
    } else {
      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
    }

    var lastPos = start;
    function extendTo(pos) {
      if (cmp(lastPos, pos) == 0) { return }
      lastPos = pos;

      if (behavior.unit == "rectangle") {
        var ranges = [], tabSize = cm.options.tabSize;
        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
             line <= end; line++) {
          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
          if (left == right)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
          else if (text.length > leftPos)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
        }
        if (!ranges.length) { ranges.push(new Range(start, start)); }
        setSelection(doc, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                     {origin: "*mouse", scroll: false});
        cm.scrollIntoView(pos);
      } else {
        var oldRange = ourRange;
        var range = rangeForUnit(cm, pos, behavior.unit);
        var anchor = oldRange.anchor, head;
        if (cmp(range.anchor, anchor) > 0) {
          head = range.head;
          anchor = minPos(oldRange.from(), range.anchor);
        } else {
          head = range.anchor;
          anchor = maxPos(oldRange.to(), range.head);
        }
        var ranges$1 = startSel.ranges.slice(0);
        ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc, anchor), head));
        setSelection(doc, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
      }
    }

    var editorSize = display.wrapper.getBoundingClientRect();
    // Used to ensure timeout re-tries don't fire when another extend
    // happened in the meantime (clearTimeout isn't reliable -- at
    // least on Chrome, the timeouts still happen even when cleared,
    // if the clear happens after their scheduled firing time).
    var counter = 0;

    function extend(e) {
      var curCount = ++counter;
      var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
      if (!cur) { return }
      if (cmp(cur, lastPos) != 0) {
        cm.curOp.focus = activeElt();
        extendTo(cur);
        var visible = visibleLines(display, doc);
        if (cur.line >= visible.to || cur.line < visible.from)
          { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
      } else {
        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
        if (outside) { setTimeout(operation(cm, function () {
          if (counter != curCount) { return }
          display.scroller.scrollTop += outside;
          extend(e);
        }), 50); }
      }
    }

    function done(e) {
      cm.state.selectingText = false;
      counter = Infinity;
      // If e is null or undefined we interpret this as someone trying
      // to explicitly cancel the selection rather than the user
      // letting go of the mouse button.
      if (e) {
        e_preventDefault(e);
        display.input.focus();
      }
      off(display.wrapper.ownerDocument, "mousemove", move);
      off(display.wrapper.ownerDocument, "mouseup", up);
      doc.history.lastSelOrigin = null;
    }

    var move = operation(cm, function (e) {
      if (e.buttons === 0 || !e_button(e)) { done(e); }
      else { extend(e); }
    });
    var up = operation(cm, done);
    cm.state.selectingText = up;
    on(display.wrapper.ownerDocument, "mousemove", move);
    on(display.wrapper.ownerDocument, "mouseup", up);
  }

  // Used when mouse-selecting to adjust the anchor to the proper side
  // of a bidi jump depending on the visual position of the head.
  function bidiSimplify(cm, range) {
    var anchor = range.anchor;
    var head = range.head;
    var anchorLine = getLine(cm.doc, anchor.line);
    if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) { return range }
    var order = getOrder(anchorLine);
    if (!order) { return range }
    var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
    if (part.from != anchor.ch && part.to != anchor.ch) { return range }
    var boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1);
    if (boundary == 0 || boundary == order.length) { return range }

    // Compute the relative visual position of the head compared to the
    // anchor (<0 is to the left, >0 to the right)
    var leftSide;
    if (head.line != anchor.line) {
      leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
    } else {
      var headIndex = getBidiPartAt(order, head.ch, head.sticky);
      var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
      if (headIndex == boundary - 1 || headIndex == boundary)
        { leftSide = dir < 0; }
      else
        { leftSide = dir > 0; }
    }

    var usePart = order[boundary + (leftSide ? -1 : 0)];
    var from = leftSide == (usePart.level == 1);
    var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
    return anchor.ch == ch && anchor.sticky == sticky ? range : new Range(new Pos(anchor.line, ch, sticky), head)
  }


  // Determines whether an event happened in the gutter, and fires the
  // handlers for the corresponding event.
  function gutterEvent(cm, e, type, prevent) {
    var mX, mY;
    if (e.touches) {
      mX = e.touches[0].clientX;
      mY = e.touches[0].clientY;
    } else {
      try { mX = e.clientX; mY = e.clientY; }
      catch(e$1) { return false }
    }
    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
    if (prevent) { e_preventDefault(e); }

    var display = cm.display;
    var lineBox = display.lineDiv.getBoundingClientRect();

    if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
    mY -= lineBox.top - display.viewOffset;

    for (var i = 0; i < cm.display.gutterSpecs.length; ++i) {
      var g = display.gutters.childNodes[i];
      if (g && g.getBoundingClientRect().right >= mX) {
        var line = lineAtHeight(cm.doc, mY);
        var gutter = cm.display.gutterSpecs[i];
        signal(cm, type, cm, line, gutter.className, e);
        return e_defaultPrevented(e)
      }
    }
  }

  function clickInGutter(cm, e) {
    return gutterEvent(cm, e, "gutterClick", true)
  }

  // CONTEXT MENU HANDLING

  // To make the context menu work, we need to briefly unhide the
  // textarea (making it as unobtrusive as possible) to let the
  // right-click take effect on it.
  function onContextMenu(cm, e) {
    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
    if (signalDOMEvent(cm, e, "contextmenu")) { return }
    if (!captureRightClick) { cm.display.input.onContextMenu(e); }
  }

  function contextMenuInGutter(cm, e) {
    if (!hasHandler(cm, "gutterContextMenu")) { return false }
    return gutterEvent(cm, e, "gutterContextMenu", false)
  }

  function themeChanged(cm) {
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    clearCaches(cm);
  }

  var Init = {toString: function(){return "CodeMirror.Init"}};

  var defaults = {};
  var optionHandlers = {};

  function defineOptions(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    function option(name, deflt, handle, notOnInit) {
      CodeMirror.defaults[name] = deflt;
      if (handle) { optionHandlers[name] =
        notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
    }

    CodeMirror.defineOption = option;

    // Passed to option handlers when there is no old value.
    CodeMirror.Init = Init;

    // These two are, on init, called from the constructor because they
    // have to be initialized before the editor can start at all.
    option("value", "", function (cm, val) { return cm.setValue(val); }, true);
    option("mode", null, function (cm, val) {
      cm.doc.modeOption = val;
      loadMode(cm);
    }, true);

    option("indentUnit", 2, loadMode, true);
    option("indentWithTabs", false);
    option("smartIndent", true);
    option("tabSize", 4, function (cm) {
      resetModeState(cm);
      clearCaches(cm);
      regChange(cm);
    }, true);

    option("lineSeparator", null, function (cm, val) {
      cm.doc.lineSep = val;
      if (!val) { return }
      var newBreaks = [], lineNo = cm.doc.first;
      cm.doc.iter(function (line) {
        for (var pos = 0;;) {
          var found = line.text.indexOf(val, pos);
          if (found == -1) { break }
          pos = found + val.length;
          newBreaks.push(Pos(lineNo, found));
        }
        lineNo++;
      });
      for (var i = newBreaks.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
    });
    option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (cm, val, old) {
      cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
      if (old != Init) { cm.refresh(); }
    });
    option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
    option("electricChars", true);
    option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
      throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
    }, true);
    option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
    option("autocorrect", false, function (cm, val) { return cm.getInputField().autocorrect = val; }, true);
    option("autocapitalize", false, function (cm, val) { return cm.getInputField().autocapitalize = val; }, true);
    option("rtlMoveVisually", !windows);
    option("wholeLineUpdateBefore", true);

    option("theme", "default", function (cm) {
      themeChanged(cm);
      updateGutters(cm);
    }, true);
    option("keyMap", "default", function (cm, val, old) {
      var next = getKeyMap(val);
      var prev = old != Init && getKeyMap(old);
      if (prev && prev.detach) { prev.detach(cm, next); }
      if (next.attach) { next.attach(cm, prev || null); }
    });
    option("extraKeys", null);
    option("configureMouse", null);

    option("lineWrapping", false, wrappingChanged, true);
    option("gutters", [], function (cm, val) {
      cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
      updateGutters(cm);
    }, true);
    option("fixedGutter", true, function (cm, val) {
      cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
      cm.refresh();
    }, true);
    option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
    option("scrollbarStyle", "native", function (cm) {
      initScrollbars(cm);
      updateScrollbars(cm);
      cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
      cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
    }, true);
    option("lineNumbers", false, function (cm, val) {
      cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
      updateGutters(cm);
    }, true);
    option("firstLineNumber", 1, updateGutters, true);
    option("lineNumberFormatter", function (integer) { return integer; }, updateGutters, true);
    option("showCursorWhenSelecting", false, updateSelection, true);

    option("resetSelectionOnContextMenu", true);
    option("lineWiseCopyCut", true);
    option("pasteLinesPerSelection", true);
    option("selectionsMayTouch", false);

    option("readOnly", false, function (cm, val) {
      if (val == "nocursor") {
        onBlur(cm);
        cm.display.input.blur();
      }
      cm.display.input.readOnlyChanged(val);
    });

    option("screenReaderLabel", null, function (cm, val) {
      val = (val === '') ? null : val;
      cm.display.input.screenReaderLabelChanged(val);
    });

    option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
    option("dragDrop", true, dragDropChanged);
    option("allowDropFileTypes", null);

    option("cursorBlinkRate", 530);
    option("cursorScrollMargin", 0);
    option("cursorHeight", 1, updateSelection, true);
    option("singleCursorHeightPerLine", true, updateSelection, true);
    option("workTime", 100);
    option("workDelay", 100);
    option("flattenSpans", true, resetModeState, true);
    option("addModeClass", false, resetModeState, true);
    option("pollInterval", 100);
    option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
    option("historyEventDelay", 1250);
    option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
    option("maxHighlightLength", 10000, resetModeState, true);
    option("moveInputWithCursor", true, function (cm, val) {
      if (!val) { cm.display.input.resetPosition(); }
    });

    option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
    option("autofocus", null);
    option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
    option("phrases", null);
  }

  function dragDropChanged(cm, value, old) {
    var wasOn = old && old != Init;
    if (!value != !wasOn) {
      var funcs = cm.display.dragFunctions;
      var toggle = value ? on : off;
      toggle(cm.display.scroller, "dragstart", funcs.start);
      toggle(cm.display.scroller, "dragenter", funcs.enter);
      toggle(cm.display.scroller, "dragover", funcs.over);
      toggle(cm.display.scroller, "dragleave", funcs.leave);
      toggle(cm.display.scroller, "drop", funcs.drop);
    }
  }

  function wrappingChanged(cm) {
    if (cm.options.lineWrapping) {
      addClass(cm.display.wrapper, "CodeMirror-wrap");
      cm.display.sizer.style.minWidth = "";
      cm.display.sizerWidth = null;
    } else {
      rmClass(cm.display.wrapper, "CodeMirror-wrap");
      findMaxLine(cm);
    }
    estimateLineHeights(cm);
    regChange(cm);
    clearCaches(cm);
    setTimeout(function () { return updateScrollbars(cm); }, 100);
  }

  // A CodeMirror instance represents an editor. This is the object
  // that user code is usually dealing with.

  function CodeMirror(place, options) {
    var this$1 = this;

    if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

    this.options = options = options ? copyObj(options) : {};
    // Determine effective options based on given values and defaults.
    copyObj(defaults, options, false);

    var doc = options.value;
    if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
    else if (options.mode) { doc.modeOption = options.mode; }
    this.doc = doc;

    var input = new CodeMirror.inputStyles[options.inputStyle](this);
    var display = this.display = new Display(place, doc, input, options);
    display.wrapper.CodeMirror = this;
    themeChanged(this);
    if (options.lineWrapping)
      { this.display.wrapper.className += " CodeMirror-wrap"; }
    initScrollbars(this);

    this.state = {
      keyMaps: [],  // stores maps added by addKeyMap
      overlays: [], // highlighting overlays, as added by addOverlay
      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
      overwrite: false,
      delayingBlurEvent: false,
      focused: false,
      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
      pasteIncoming: -1, cutIncoming: -1, // help recognize paste/cut edits in input.poll
      selectingText: false,
      draggingText: false,
      highlight: new Delayed(), // stores highlight worker timeout
      keySeq: null,  // Unfinished key sequence
      specialChars: null
    };

    if (options.autofocus && !mobile) { display.input.focus(); }

    // Override magic textarea content restore that IE sometimes does
    // on our hidden textarea on reload
    if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20); }

    registerEventHandlers(this);
    ensureGlobalHandlers();

    startOperation(this);
    this.curOp.forceUpdate = true;
    attachDoc(this, doc);

    if ((options.autofocus && !mobile) || this.hasFocus())
      { setTimeout(function () {
        if (this$1.hasFocus() && !this$1.state.focused) { onFocus(this$1); }
      }, 20); }
    else
      { onBlur(this); }

    for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
      { optionHandlers[opt](this, options[opt], Init); } }
    maybeUpdateLineNumberWidth(this);
    if (options.finishInit) { options.finishInit(this); }
    for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this); }
    endOperation(this);
    // Suppress optimizelegibility in Webkit, since it breaks text
    // measuring on line wrapping boundaries.
    if (webkit && options.lineWrapping &&
        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
      { display.lineDiv.style.textRendering = "auto"; }
  }

  // The default configuration options.
  CodeMirror.defaults = defaults;
  // Functions to run when options are changed.
  CodeMirror.optionHandlers = optionHandlers;

  // Attach the necessary event handlers when initializing the editor
  function registerEventHandlers(cm) {
    var d = cm.display;
    on(d.scroller, "mousedown", operation(cm, onMouseDown));
    // Older IE's will not fire a second mousedown for a double click
    if (ie && ie_version < 11)
      { on(d.scroller, "dblclick", operation(cm, function (e) {
        if (signalDOMEvent(cm, e)) { return }
        var pos = posFromMouse(cm, e);
        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
        e_preventDefault(e);
        var word = cm.findWordAt(pos);
        extendSelection(cm.doc, word.anchor, word.head);
      })); }
    else
      { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
    // Some browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for these browsers.
    on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); });
    on(d.input.getField(), "contextmenu", function (e) {
      if (!d.scroller.contains(e.target)) { onContextMenu(cm, e); }
    });

    // Used to suppress mouse event handling when a touch happens
    var touchFinished, prevTouch = {end: 0};
    function finishTouch() {
      if (d.activeTouch) {
        touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
        prevTouch = d.activeTouch;
        prevTouch.end = +new Date;
      }
    }
    function isMouseLikeTouchEvent(e) {
      if (e.touches.length != 1) { return false }
      var touch = e.touches[0];
      return touch.radiusX <= 1 && touch.radiusY <= 1
    }
    function farAway(touch, other) {
      if (other.left == null) { return true }
      var dx = other.left - touch.left, dy = other.top - touch.top;
      return dx * dx + dy * dy > 20 * 20
    }
    on(d.scroller, "touchstart", function (e) {
      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
        d.input.ensurePolled();
        clearTimeout(touchFinished);
        var now = +new Date;
        d.activeTouch = {start: now, moved: false,
                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
        if (e.touches.length == 1) {
          d.activeTouch.left = e.touches[0].pageX;
          d.activeTouch.top = e.touches[0].pageY;
        }
      }
    });
    on(d.scroller, "touchmove", function () {
      if (d.activeTouch) { d.activeTouch.moved = true; }
    });
    on(d.scroller, "touchend", function (e) {
      var touch = d.activeTouch;
      if (touch && !eventInWidget(d, e) && touch.left != null &&
          !touch.moved && new Date - touch.start < 300) {
        var pos = cm.coordsChar(d.activeTouch, "page"), range;
        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
          { range = new Range(pos, pos); }
        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
          { range = cm.findWordAt(pos); }
        else // Triple tap
          { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
        cm.setSelection(range.anchor, range.head);
        cm.focus();
        e_preventDefault(e);
      }
      finishTouch();
    });
    on(d.scroller, "touchcancel", finishTouch);

    // Sync scrolling between fake scrollbars and real scrollable
    // area, ensure viewport is updated when scrolling.
    on(d.scroller, "scroll", function () {
      if (d.scroller.clientHeight) {
        updateScrollTop(cm, d.scroller.scrollTop);
        setScrollLeft(cm, d.scroller.scrollLeft, true);
        signal(cm, "scroll", cm);
      }
    });

    // Listen to wheel events in order to try and update the viewport on time.
    on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
    on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });

    // Prevent wrapper from ever scrolling
    on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

    d.dragFunctions = {
      enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
      over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
      start: function (e) { return onDragStart(cm, e); },
      drop: operation(cm, onDrop),
      leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
    };

    var inp = d.input.getField();
    on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
    on(inp, "keydown", operation(cm, onKeyDown));
    on(inp, "keypress", operation(cm, onKeyPress));
    on(inp, "focus", function (e) { return onFocus(cm, e); });
    on(inp, "blur", function (e) { return onBlur(cm, e); });
  }

  var initHooks = [];
  CodeMirror.defineInitHook = function (f) { return initHooks.push(f); };

  // Indent the given line. The how parameter can be "smart",
  // "add"/null, "subtract", or "prev". When aggressive is false
  // (typically set to true for forced single-line indents), empty
  // lines are not indented, and places where the mode returns Pass
  // are left alone.
  function indentLine(cm, n, how, aggressive) {
    var doc = cm.doc, state;
    if (how == null) { how = "add"; }
    if (how == "smart") {
      // Fall back to "prev" when the mode doesn't have an indentation
      // method.
      if (!doc.mode.indent) { how = "prev"; }
      else { state = getContextBefore(cm, n).state; }
    }

    var tabSize = cm.options.tabSize;
    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
    if (line.stateAfter) { line.stateAfter = null; }
    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
    if (!aggressive && !/\S/.test(line.text)) {
      indentation = 0;
      how = "not";
    } else if (how == "smart") {
      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      if (indentation == Pass || indentation > 150) {
        if (!aggressive) { return }
        how = "prev";
      }
    }
    if (how == "prev") {
      if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
      else { indentation = 0; }
    } else if (how == "add") {
      indentation = curSpace + cm.options.indentUnit;
    } else if (how == "subtract") {
      indentation = curSpace - cm.options.indentUnit;
    } else if (typeof how == "number") {
      indentation = curSpace + how;
    }
    indentation = Math.max(0, indentation);

    var indentString = "", pos = 0;
    if (cm.options.indentWithTabs)
      { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
    if (pos < indentation) { indentString += spaceStr(indentation - pos); }

    if (indentString != curSpaceString) {
      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
      line.stateAfter = null;
      return true
    } else {
      // Ensure that, if the cursor was in the whitespace at the start
      // of the line, it is moved to the end of that space.
      for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
        var range = doc.sel.ranges[i$1];
        if (range.head.line == n && range.head.ch < curSpaceString.length) {
          var pos$1 = Pos(n, curSpaceString.length);
          replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
          break
        }
      }
    }
  }

  // This will be set to a {lineWise: bool, text: [string]} object, so
  // that, when pasting, we know what kind of selections the copied
  // text was made out of.
  var lastCopied = null;

  function setLastCopied(newLastCopied) {
    lastCopied = newLastCopied;
  }

  function applyTextInput(cm, inserted, deleted, sel, origin) {
    var doc = cm.doc;
    cm.display.shift = false;
    if (!sel) { sel = doc.sel; }

    var recent = +new Date - 200;
    var paste = origin == "paste" || cm.state.pasteIncoming > recent;
    var textLines = splitLinesAuto(inserted), multiPaste = null;
    // When pasting N lines into N selections, insert one line per selection
    if (paste && sel.ranges.length > 1) {
      if (lastCopied && lastCopied.text.join("\n") == inserted) {
        if (sel.ranges.length % lastCopied.text.length == 0) {
          multiPaste = [];
          for (var i = 0; i < lastCopied.text.length; i++)
            { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
        }
      } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
        multiPaste = map(textLines, function (l) { return [l]; });
      }
    }

    var updateInput = cm.curOp.updateInput;
    // Normal behavior is to insert the new text into every selection
    for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
      var range = sel.ranges[i$1];
      var from = range.from(), to = range.to();
      if (range.empty()) {
        if (deleted && deleted > 0) // Handle deletion
          { from = Pos(from.line, from.ch - deleted); }
        else if (cm.state.overwrite && !paste) // Handle overwrite
          { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
        else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n"))
          { from = to = Pos(from.line, 0); }
      }
      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                         origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")};
      makeChange(cm.doc, changeEvent);
      signalLater(cm, "inputRead", cm, changeEvent);
    }
    if (inserted && !paste)
      { triggerElectric(cm, inserted); }

    ensureCursorVisible(cm);
    if (cm.curOp.updateInput < 2) { cm.curOp.updateInput = updateInput; }
    cm.curOp.typing = true;
    cm.state.pasteIncoming = cm.state.cutIncoming = -1;
  }

  function handlePaste(e, cm) {
    var pasted = e.clipboardData && e.clipboardData.getData("Text");
    if (pasted) {
      e.preventDefault();
      if (!cm.isReadOnly() && !cm.options.disableInput)
        { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
      return true
    }
  }

  function triggerElectric(cm, inserted) {
    // When an 'electric' character is inserted, immediately trigger a reindent
    if (!cm.options.electricChars || !cm.options.smartIndent) { return }
    var sel = cm.doc.sel;

    for (var i = sel.ranges.length - 1; i >= 0; i--) {
      var range = sel.ranges[i];
      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
      var mode = cm.getModeAt(range.head);
      var indented = false;
      if (mode.electricChars) {
        for (var j = 0; j < mode.electricChars.length; j++)
          { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
            indented = indentLine(cm, range.head.line, "smart");
            break
          } }
      } else if (mode.electricInput) {
        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
          { indented = indentLine(cm, range.head.line, "smart"); }
      }
      if (indented) { signalLater(cm, "electricInput", cm, range.head.line); }
    }
  }

  function copyableRanges(cm) {
    var text = [], ranges = [];
    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
      var line = cm.doc.sel.ranges[i].head.line;
      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
      ranges.push(lineRange);
      text.push(cm.getRange(lineRange.anchor, lineRange.head));
    }
    return {text: text, ranges: ranges}
  }

  function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
    field.setAttribute("autocorrect", autocorrect ? "" : "off");
    field.setAttribute("autocapitalize", autocapitalize ? "" : "off");
    field.setAttribute("spellcheck", !!spellcheck);
  }

  function hiddenTextarea() {
    var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    // The textarea is kept positioned near the cursor to prevent the
    // fact that it'll be scrolled into view on input from scrolling
    // our fake cursor out of view. On webkit, when wrap=off, paste is
    // very slow. So make the area wide instead.
    if (webkit) { te.style.width = "1000px"; }
    else { te.setAttribute("wrap", "off"); }
    // If border: 0; -- iOS fails to open keyboard (issue #1287)
    if (ios) { te.style.border = "1px solid black"; }
    disableBrowserMagic(te);
    return div
  }

  // The publicly visible API. Note that methodOp(f) means
  // 'wrap f in an operation, performed on its `this` parameter'.

  // This is not the complete set of editor methods. Most of the
  // methods defined on the Doc type are also injected into
  // CodeMirror.prototype, for backwards compatibility and
  // convenience.

  function addEditorMethods(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    var helpers = CodeMirror.helpers = {};

    CodeMirror.prototype = {
      constructor: CodeMirror,
      focus: function(){window.focus(); this.display.input.focus();},

      setOption: function(option, value) {
        var options = this.options, old = options[option];
        if (options[option] == value && option != "mode") { return }
        options[option] = value;
        if (optionHandlers.hasOwnProperty(option))
          { operation(this, optionHandlers[option])(this, value, old); }
        signal(this, "optionChange", this, option);
      },

      getOption: function(option) {return this.options[option]},
      getDoc: function() {return this.doc},

      addKeyMap: function(map, bottom) {
        this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
      },
      removeKeyMap: function(map) {
        var maps = this.state.keyMaps;
        for (var i = 0; i < maps.length; ++i)
          { if (maps[i] == map || maps[i].name == map) {
            maps.splice(i, 1);
            return true
          } }
      },

      addOverlay: methodOp(function(spec, options) {
        var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
        if (mode.startState) { throw new Error("Overlays may not be stateful.") }
        insertSorted(this.state.overlays,
                     {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                      priority: (options && options.priority) || 0},
                     function (overlay) { return overlay.priority; });
        this.state.modeGen++;
        regChange(this);
      }),
      removeOverlay: methodOp(function(spec) {
        var overlays = this.state.overlays;
        for (var i = 0; i < overlays.length; ++i) {
          var cur = overlays[i].modeSpec;
          if (cur == spec || typeof spec == "string" && cur.name == spec) {
            overlays.splice(i, 1);
            this.state.modeGen++;
            regChange(this);
            return
          }
        }
      }),

      indentLine: methodOp(function(n, dir, aggressive) {
        if (typeof dir != "string" && typeof dir != "number") {
          if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
          else { dir = dir ? "add" : "subtract"; }
        }
        if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
      }),
      indentSelection: methodOp(function(how) {
        var ranges = this.doc.sel.ranges, end = -1;
        for (var i = 0; i < ranges.length; i++) {
          var range = ranges[i];
          if (!range.empty()) {
            var from = range.from(), to = range.to();
            var start = Math.max(end, from.line);
            end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
            for (var j = start; j < end; ++j)
              { indentLine(this, j, how); }
            var newRanges = this.doc.sel.ranges;
            if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
              { replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
          } else if (range.head.line > end) {
            indentLine(this, range.head.line, how, true);
            end = range.head.line;
            if (i == this.doc.sel.primIndex) { ensureCursorVisible(this); }
          }
        }
      }),

      // Fetch the parser token for a given character. Useful for hacks
      // that want to inspect the mode state (say, for completion).
      getTokenAt: function(pos, precise) {
        return takeToken(this, pos, precise)
      },

      getLineTokens: function(line, precise) {
        return takeToken(this, Pos(line), precise, true)
      },

      getTokenTypeAt: function(pos) {
        pos = clipPos(this.doc, pos);
        var styles = getLineStyles(this, getLine(this.doc, pos.line));
        var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
        var type;
        if (ch == 0) { type = styles[2]; }
        else { for (;;) {
          var mid = (before + after) >> 1;
          if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
          else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
          else { type = styles[mid * 2 + 2]; break }
        } }
        var cut = type ? type.indexOf("overlay ") : -1;
        return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
      },

      getModeAt: function(pos) {
        var mode = this.doc.mode;
        if (!mode.innerMode) { return mode }
        return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
      },

      getHelper: function(pos, type) {
        return this.getHelpers(pos, type)[0]
      },

      getHelpers: function(pos, type) {
        var found = [];
        if (!helpers.hasOwnProperty(type)) { return found }
        var help = helpers[type], mode = this.getModeAt(pos);
        if (typeof mode[type] == "string") {
          if (help[mode[type]]) { found.push(help[mode[type]]); }
        } else if (mode[type]) {
          for (var i = 0; i < mode[type].length; i++) {
            var val = help[mode[type][i]];
            if (val) { found.push(val); }
          }
        } else if (mode.helperType && help[mode.helperType]) {
          found.push(help[mode.helperType]);
        } else if (help[mode.name]) {
          found.push(help[mode.name]);
        }
        for (var i$1 = 0; i$1 < help._global.length; i$1++) {
          var cur = help._global[i$1];
          if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
            { found.push(cur.val); }
        }
        return found
      },

      getStateAfter: function(line, precise) {
        var doc = this.doc;
        line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
        return getContextBefore(this, line + 1, precise).state
      },

      cursorCoords: function(start, mode) {
        var pos, range = this.doc.sel.primary();
        if (start == null) { pos = range.head; }
        else if (typeof start == "object") { pos = clipPos(this.doc, start); }
        else { pos = start ? range.from() : range.to(); }
        return cursorCoords(this, pos, mode || "page")
      },

      charCoords: function(pos, mode) {
        return charCoords(this, clipPos(this.doc, pos), mode || "page")
      },

      coordsChar: function(coords, mode) {
        coords = fromCoordSystem(this, coords, mode || "page");
        return coordsChar(this, coords.left, coords.top)
      },

      lineAtHeight: function(height, mode) {
        height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
        return lineAtHeight(this.doc, height + this.display.viewOffset)
      },
      heightAtLine: function(line, mode, includeWidgets) {
        var end = false, lineObj;
        if (typeof line == "number") {
          var last = this.doc.first + this.doc.size - 1;
          if (line < this.doc.first) { line = this.doc.first; }
          else if (line > last) { line = last; end = true; }
          lineObj = getLine(this.doc, line);
        } else {
          lineObj = line;
        }
        return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
          (end ? this.doc.height - heightAtLine(lineObj) : 0)
      },

      defaultTextHeight: function() { return textHeight(this.display) },
      defaultCharWidth: function() { return charWidth(this.display) },

      getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

      addWidget: function(pos, node, scroll, vert, horiz) {
        var display = this.display;
        pos = cursorCoords(this, clipPos(this.doc, pos));
        var top = pos.bottom, left = pos.left;
        node.style.position = "absolute";
        node.setAttribute("cm-ignore-events", "true");
        this.display.input.setUneditable(node);
        display.sizer.appendChild(node);
        if (vert == "over") {
          top = pos.top;
        } else if (vert == "above" || vert == "near") {
          var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
          hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
          // Default to positioning above (if specified and possible); otherwise default to positioning below
          if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
            { top = pos.top - node.offsetHeight; }
          else if (pos.bottom + node.offsetHeight <= vspace)
            { top = pos.bottom; }
          if (left + node.offsetWidth > hspace)
            { left = hspace - node.offsetWidth; }
        }
        node.style.top = top + "px";
        node.style.left = node.style.right = "";
        if (horiz == "right") {
          left = display.sizer.clientWidth - node.offsetWidth;
          node.style.right = "0px";
        } else {
          if (horiz == "left") { left = 0; }
          else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
          node.style.left = left + "px";
        }
        if (scroll)
          { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
      },

      triggerOnKeyDown: methodOp(onKeyDown),
      triggerOnKeyPress: methodOp(onKeyPress),
      triggerOnKeyUp: onKeyUp,
      triggerOnMouseDown: methodOp(onMouseDown),

      execCommand: function(cmd) {
        if (commands.hasOwnProperty(cmd))
          { return commands[cmd].call(null, this) }
      },

      triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

      findPosH: function(from, amount, unit, visually) {
        var dir = 1;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          cur = findPosH(this.doc, cur, dir, unit, visually);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveH: methodOp(function(dir, unit) {
        var this$1 = this;

        this.extendSelectionsBy(function (range) {
          if (this$1.display.shift || this$1.doc.extend || range.empty())
            { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
          else
            { return dir < 0 ? range.from() : range.to() }
        }, sel_move);
      }),

      deleteH: methodOp(function(dir, unit) {
        var sel = this.doc.sel, doc = this.doc;
        if (sel.somethingSelected())
          { doc.replaceSelection("", null, "+delete"); }
        else
          { deleteNearSelection(this, function (range) {
            var other = findPosH(doc, range.head, dir, unit, false);
            return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
          }); }
      }),

      findPosV: function(from, amount, unit, goalColumn) {
        var dir = 1, x = goalColumn;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          var coords = cursorCoords(this, cur, "div");
          if (x == null) { x = coords.left; }
          else { coords.left = x; }
          cur = findPosV(this, coords, dir, unit);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveV: methodOp(function(dir, unit) {
        var this$1 = this;

        var doc = this.doc, goals = [];
        var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
        doc.extendSelectionsBy(function (range) {
          if (collapse)
            { return dir < 0 ? range.from() : range.to() }
          var headPos = cursorCoords(this$1, range.head, "div");
          if (range.goalColumn != null) { headPos.left = range.goalColumn; }
          goals.push(headPos.left);
          var pos = findPosV(this$1, headPos, dir, unit);
          if (unit == "page" && range == doc.sel.primary())
            { addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top); }
          return pos
        }, sel_move);
        if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
          { doc.sel.ranges[i].goalColumn = goals[i]; } }
      }),

      // Find the word at the given position (as returned by coordsChar).
      findWordAt: function(pos) {
        var doc = this.doc, line = getLine(doc, pos.line).text;
        var start = pos.ch, end = pos.ch;
        if (line) {
          var helper = this.getHelper(pos, "wordChars");
          if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
          var startChar = line.charAt(start);
          var check = isWordChar(startChar, helper)
            ? function (ch) { return isWordChar(ch, helper); }
            : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
            : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
          while (start > 0 && check(line.charAt(start - 1))) { --start; }
          while (end < line.length && check(line.charAt(end))) { ++end; }
        }
        return new Range(Pos(pos.line, start), Pos(pos.line, end))
      },

      toggleOverwrite: function(value) {
        if (value != null && value == this.state.overwrite) { return }
        if (this.state.overwrite = !this.state.overwrite)
          { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
        else
          { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }

        signal(this, "overwriteToggle", this, this.state.overwrite);
      },
      hasFocus: function() { return this.display.input.getField() == activeElt() },
      isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

      scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
      getScrollInfo: function() {
        var scroller = this.display.scroller;
        return {left: scroller.scrollLeft, top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
      },

      scrollIntoView: methodOp(function(range, margin) {
        if (range == null) {
          range = {from: this.doc.sel.primary().head, to: null};
          if (margin == null) { margin = this.options.cursorScrollMargin; }
        } else if (typeof range == "number") {
          range = {from: Pos(range, 0), to: null};
        } else if (range.from == null) {
          range = {from: range, to: null};
        }
        if (!range.to) { range.to = range.from; }
        range.margin = margin || 0;

        if (range.from.line != null) {
          scrollToRange(this, range);
        } else {
          scrollToCoordsRange(this, range.from, range.to, range.margin);
        }
      }),

      setSize: methodOp(function(width, height) {
        var this$1 = this;

        var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
        if (width != null) { this.display.wrapper.style.width = interpret(width); }
        if (height != null) { this.display.wrapper.style.height = interpret(height); }
        if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
        var lineNo = this.display.viewFrom;
        this.doc.iter(lineNo, this.display.viewTo, function (line) {
          if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
            { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
          ++lineNo;
        });
        this.curOp.forceUpdate = true;
        signal(this, "refresh", this);
      }),

      operation: function(f){return runInOp(this, f)},
      startOperation: function(){return startOperation(this)},
      endOperation: function(){return endOperation(this)},

      refresh: methodOp(function() {
        var oldHeight = this.display.cachedTextHeight;
        regChange(this);
        this.curOp.forceUpdate = true;
        clearCaches(this);
        scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
        updateGutterSpace(this.display);
        if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5 || this.options.lineWrapping)
          { estimateLineHeights(this); }
        signal(this, "refresh", this);
      }),

      swapDoc: methodOp(function(doc) {
        var old = this.doc;
        old.cm = null;
        // Cancel the current text selection if any (#5821)
        if (this.state.selectingText) { this.state.selectingText(); }
        attachDoc(this, doc);
        clearCaches(this);
        this.display.input.reset();
        scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
        this.curOp.forceScroll = true;
        signalLater(this, "swapDoc", this, old);
        return old
      }),

      phrase: function(phraseText) {
        var phrases = this.options.phrases;
        return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
      },

      getInputField: function(){return this.display.input.getField()},
      getWrapperElement: function(){return this.display.wrapper},
      getScrollerElement: function(){return this.display.scroller},
      getGutterElement: function(){return this.display.gutters}
    };
    eventMixin(CodeMirror);

    CodeMirror.registerHelper = function(type, name, value) {
      if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
      helpers[type][name] = value;
    };
    CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
      CodeMirror.registerHelper(type, name, value);
      helpers[type]._global.push({pred: predicate, val: value});
    };
  }

  // Used for horizontal relative motion. Dir is -1 or 1 (left or
  // right), unit can be "codepoint", "char", "column" (like char, but
  // doesn't cross line boundaries), "word" (across next word), or
  // "group" (to the start of next group of word or
  // non-word-non-whitespace chars). The visually param controls
  // whether, in right-to-left text, direction 1 means to move towards
  // the next index in the string, or towards the character to the right
  // of the current position. The resulting position will have a
  // hitSide=true property if it reached the end of the document.
  function findPosH(doc, pos, dir, unit, visually) {
    var oldPos = pos;
    var origDir = dir;
    var lineObj = getLine(doc, pos.line);
    var lineDir = visually && doc.direction == "rtl" ? -dir : dir;
    function findNextLine() {
      var l = pos.line + lineDir;
      if (l < doc.first || l >= doc.first + doc.size) { return false }
      pos = new Pos(l, pos.ch, pos.sticky);
      return lineObj = getLine(doc, l)
    }
    function moveOnce(boundToLine) {
      var next;
      if (unit == "codepoint") {
        var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));
        if (isNaN(ch)) {
          next = null;
        } else {
          var astral = dir > 0 ? ch >= 0xD800 && ch < 0xDC00 : ch >= 0xDC00 && ch < 0xDFFF;
          next = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
        }
      } else if (visually) {
        next = moveVisually(doc.cm, lineObj, pos, dir);
      } else {
        next = moveLogically(lineObj, pos, dir);
      }
      if (next == null) {
        if (!boundToLine && findNextLine())
          { pos = endOfLine(visually, doc.cm, lineObj, pos.line, lineDir); }
        else
          { return false }
      } else {
        pos = next;
      }
      return true
    }

    if (unit == "char" || unit == "codepoint") {
      moveOnce();
    } else if (unit == "column") {
      moveOnce(true);
    } else if (unit == "word" || unit == "group") {
      var sawType = null, group = unit == "group";
      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
      for (var first = true;; first = false) {
        if (dir < 0 && !moveOnce(!first)) { break }
        var cur = lineObj.text.charAt(pos.ch) || "\n";
        var type = isWordChar(cur, helper) ? "w"
          : group && cur == "\n" ? "n"
          : !group || /\s/.test(cur) ? null
          : "p";
        if (group && !first && !type) { type = "s"; }
        if (sawType && sawType != type) {
          if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
          break
        }

        if (type) { sawType = type; }
        if (dir > 0 && !moveOnce(!first)) { break }
      }
    }
    var result = skipAtomic(doc, pos, oldPos, origDir, true);
    if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
    return result
  }

  // For relative vertical movement. Dir may be -1 or 1. Unit can be
  // "page" or "line". The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosV(cm, pos, dir, unit) {
    var doc = cm.doc, x = pos.left, y;
    if (unit == "page") {
      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
      y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;

    } else if (unit == "line") {
      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
    }
    var target;
    for (;;) {
      target = coordsChar(cm, x, y);
      if (!target.outside) { break }
      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
      y += dir * 5;
    }
    return target
  }

  // CONTENTEDITABLE INPUT STYLE

  var ContentEditableInput = function(cm) {
    this.cm = cm;
    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
    this.polling = new Delayed();
    this.composing = null;
    this.gracePeriod = false;
    this.readDOMTimeout = null;
  };

  ContentEditableInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = input.cm;
    var div = input.div = display.lineDiv;
    div.contentEditable = true;
    disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);

    function belongsToInput(e) {
      for (var t = e.target; t; t = t.parentNode) {
        if (t == div) { return true }
        if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) { break }
      }
      return false
    }

    on(div, "paste", function (e) {
      if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
      if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1.updateFromDOM(); }), 20); }
    });

    on(div, "compositionstart", function (e) {
      this$1.composing = {data: e.data, done: false};
    });
    on(div, "compositionupdate", function (e) {
      if (!this$1.composing) { this$1.composing = {data: e.data, done: false}; }
    });
    on(div, "compositionend", function (e) {
      if (this$1.composing) {
        if (e.data != this$1.composing.data) { this$1.readFromDOMSoon(); }
        this$1.composing.done = true;
      }
    });

    on(div, "touchstart", function () { return input.forceCompositionEnd(); });

    on(div, "input", function () {
      if (!this$1.composing) { this$1.readFromDOMSoon(); }
    });

    function onCopyCut(e) {
      if (!belongsToInput(e) || signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
        if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.operation(function () {
            cm.setSelections(ranges.ranges, 0, sel_dontScroll);
            cm.replaceSelection("", null, "cut");
          });
        }
      }
      if (e.clipboardData) {
        e.clipboardData.clearData();
        var content = lastCopied.text.join("\n");
        // iOS exposes the clipboard API, but seems to discard content inserted into it
        e.clipboardData.setData("Text", content);
        if (e.clipboardData.getData("Text") == content) {
          e.preventDefault();
          return
        }
      }
      // Old-fashioned briefly-focus-a-textarea hack
      var kludge = hiddenTextarea(), te = kludge.firstChild;
      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
      te.value = lastCopied.text.join("\n");
      var hadFocus = activeElt();
      selectInput(te);
      setTimeout(function () {
        cm.display.lineSpace.removeChild(kludge);
        hadFocus.focus();
        if (hadFocus == div) { input.showPrimarySelection(); }
      }, 50);
    }
    on(div, "copy", onCopyCut);
    on(div, "cut", onCopyCut);
  };

  ContentEditableInput.prototype.screenReaderLabelChanged = function (label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.div.setAttribute('aria-label', label);
    } else {
      this.div.removeAttribute('aria-label');
    }
  };

  ContentEditableInput.prototype.prepareSelection = function () {
    var result = prepareSelection(this.cm, false);
    result.focus = activeElt() == this.div;
    return result
  };

  ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
    if (!info || !this.cm.display.view.length) { return }
    if (info.focus || takeFocus) { this.showPrimarySelection(); }
    this.showMultipleSelections(info);
  };

  ContentEditableInput.prototype.getSelection = function () {
    return this.cm.display.wrapper.ownerDocument.getSelection()
  };

  ContentEditableInput.prototype.showPrimarySelection = function () {
    var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
    var from = prim.from(), to = prim.to();

    if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
      sel.removeAllRanges();
      return
    }

    var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
        cmp(minPos(curAnchor, curFocus), from) == 0 &&
        cmp(maxPos(curAnchor, curFocus), to) == 0)
      { return }

    var view = cm.display.view;
    var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
        {node: view[0].measure.map[2], offset: 0};
    var end = to.line < cm.display.viewTo && posToDOM(cm, to);
    if (!end) {
      var measure = view[view.length - 1].measure;
      var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
      end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
    }

    if (!start || !end) {
      sel.removeAllRanges();
      return
    }

    var old = sel.rangeCount && sel.getRangeAt(0), rng;
    try { rng = range(start.node, start.offset, end.offset, end.node); }
    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
    if (rng) {
      if (!gecko && cm.state.focused) {
        sel.collapse(start.node, start.offset);
        if (!rng.collapsed) {
          sel.removeAllRanges();
          sel.addRange(rng);
        }
      } else {
        sel.removeAllRanges();
        sel.addRange(rng);
      }
      if (old && sel.anchorNode == null) { sel.addRange(old); }
      else if (gecko) { this.startGracePeriod(); }
    }
    this.rememberSelection();
  };

  ContentEditableInput.prototype.startGracePeriod = function () {
      var this$1 = this;

    clearTimeout(this.gracePeriod);
    this.gracePeriod = setTimeout(function () {
      this$1.gracePeriod = false;
      if (this$1.selectionChanged())
        { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }); }
    }, 20);
  };

  ContentEditableInput.prototype.showMultipleSelections = function (info) {
    removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
    removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
  };

  ContentEditableInput.prototype.rememberSelection = function () {
    var sel = this.getSelection();
    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
  };

  ContentEditableInput.prototype.selectionInEditor = function () {
    var sel = this.getSelection();
    if (!sel.rangeCount) { return false }
    var node = sel.getRangeAt(0).commonAncestorContainer;
    return contains(this.div, node)
  };

  ContentEditableInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor") {
      if (!this.selectionInEditor() || activeElt() != this.div)
        { this.showSelection(this.prepareSelection(), true); }
      this.div.focus();
    }
  };
  ContentEditableInput.prototype.blur = function () { this.div.blur(); };
  ContentEditableInput.prototype.getField = function () { return this.div };

  ContentEditableInput.prototype.supportsTouch = function () { return true };

  ContentEditableInput.prototype.receivedFocus = function () {
    var input = this;
    if (this.selectionInEditor())
      { this.pollSelection(); }
    else
      { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }

    function poll() {
      if (input.cm.state.focused) {
        input.pollSelection();
        input.polling.set(input.cm.options.pollInterval, poll);
      }
    }
    this.polling.set(this.cm.options.pollInterval, poll);
  };

  ContentEditableInput.prototype.selectionChanged = function () {
    var sel = this.getSelection();
    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
  };

  ContentEditableInput.prototype.pollSelection = function () {
    if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
    var sel = this.getSelection(), cm = this.cm;
    // On Android Chrome (version 56, at least), backspacing into an
    // uneditable block element will put the cursor in that element,
    // and then, because it's not editable, hide the virtual keyboard.
    // Because Android doesn't allow us to actually detect backspace
    // presses in a sane way, this code checks for when that happens
    // and simulates a backspace press in this case.
    if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
      this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
      this.blur();
      this.focus();
      return
    }
    if (this.composing) { return }
    this.rememberSelection();
    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var head = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (anchor && head) { runInOp(cm, function () {
      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
    }); }
  };

  ContentEditableInput.prototype.pollContent = function () {
    if (this.readDOMTimeout != null) {
      clearTimeout(this.readDOMTimeout);
      this.readDOMTimeout = null;
    }

    var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
    var from = sel.from(), to = sel.to();
    if (from.ch == 0 && from.line > cm.firstLine())
      { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
    if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
      { to = Pos(to.line + 1, 0); }
    if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

    var fromIndex, fromLine, fromNode;
    if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
      fromLine = lineNo(display.view[0].line);
      fromNode = display.view[0].node;
    } else {
      fromLine = lineNo(display.view[fromIndex].line);
      fromNode = display.view[fromIndex - 1].node.nextSibling;
    }
    var toIndex = findViewIndex(cm, to.line);
    var toLine, toNode;
    if (toIndex == display.view.length - 1) {
      toLine = display.viewTo - 1;
      toNode = display.lineDiv.lastChild;
    } else {
      toLine = lineNo(display.view[toIndex + 1].line) - 1;
      toNode = display.view[toIndex + 1].node.previousSibling;
    }

    if (!fromNode) { return false }
    var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
    var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
    while (newText.length > 1 && oldText.length > 1) {
      if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
      else { break }
    }

    var cutFront = 0, cutEnd = 0;
    var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
      { ++cutFront; }
    var newBot = lst(newText), oldBot = lst(oldText);
    var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                             oldBot.length - (oldText.length == 1 ? cutFront : 0));
    while (cutEnd < maxCutEnd &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
      { ++cutEnd; }
    // Try to move start of change to start of selection if ambiguous
    if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
      while (cutFront && cutFront > from.ch &&
             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
        cutFront--;
        cutEnd++;
      }
    }

    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
    newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");

    var chFrom = Pos(fromLine, cutFront);
    var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
    if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
      replaceRange(cm.doc, newText, chFrom, chTo, "+input");
      return true
    }
  };

  ContentEditableInput.prototype.ensurePolled = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.reset = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.forceCompositionEnd = function () {
    if (!this.composing) { return }
    clearTimeout(this.readDOMTimeout);
    this.composing = null;
    this.updateFromDOM();
    this.div.blur();
    this.div.focus();
  };
  ContentEditableInput.prototype.readFromDOMSoon = function () {
      var this$1 = this;

    if (this.readDOMTimeout != null) { return }
    this.readDOMTimeout = setTimeout(function () {
      this$1.readDOMTimeout = null;
      if (this$1.composing) {
        if (this$1.composing.done) { this$1.composing = null; }
        else { return }
      }
      this$1.updateFromDOM();
    }, 80);
  };

  ContentEditableInput.prototype.updateFromDOM = function () {
      var this$1 = this;

    if (this.cm.isReadOnly() || !this.pollContent())
      { runInOp(this.cm, function () { return regChange(this$1.cm); }); }
  };

  ContentEditableInput.prototype.setUneditable = function (node) {
    node.contentEditable = "false";
  };

  ContentEditableInput.prototype.onKeyPress = function (e) {
    if (e.charCode == 0 || this.composing) { return }
    e.preventDefault();
    if (!this.cm.isReadOnly())
      { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
  };

  ContentEditableInput.prototype.readOnlyChanged = function (val) {
    this.div.contentEditable = String(val != "nocursor");
  };

  ContentEditableInput.prototype.onContextMenu = function () {};
  ContentEditableInput.prototype.resetPosition = function () {};

  ContentEditableInput.prototype.needsContentAttribute = true;

  function posToDOM(cm, pos) {
    var view = findViewForLine(cm, pos.line);
    if (!view || view.hidden) { return null }
    var line = getLine(cm.doc, pos.line);
    var info = mapFromLineView(view, line, pos.line);

    var order = getOrder(line, cm.doc.direction), side = "left";
    if (order) {
      var partPos = getBidiPartAt(order, pos.ch);
      side = partPos % 2 ? "right" : "left";
    }
    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
    result.offset = result.collapse == "right" ? result.end : result.start;
    return result
  }

  function isInGutter(node) {
    for (var scan = node; scan; scan = scan.parentNode)
      { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
    return false
  }

  function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

  function domTextBetween(cm, from, to, fromLine, toLine) {
    var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
    function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
    function close() {
      if (closing) {
        text += lineSep;
        if (extraLinebreak) { text += lineSep; }
        closing = extraLinebreak = false;
      }
    }
    function addText(str) {
      if (str) {
        close();
        text += str;
      }
    }
    function walk(node) {
      if (node.nodeType == 1) {
        var cmText = node.getAttribute("cm-text");
        if (cmText) {
          addText(cmText);
          return
        }
        var markerID = node.getAttribute("cm-marker"), range;
        if (markerID) {
          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
          if (found.length && (range = found[0].find(0)))
            { addText(getBetween(cm.doc, range.from, range.to).join(lineSep)); }
          return
        }
        if (node.getAttribute("contenteditable") == "false") { return }
        var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
        if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) { return }

        if (isBlock) { close(); }
        for (var i = 0; i < node.childNodes.length; i++)
          { walk(node.childNodes[i]); }

        if (/^(pre|p)$/i.test(node.nodeName)) { extraLinebreak = true; }
        if (isBlock) { closing = true; }
      } else if (node.nodeType == 3) {
        addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
      }
    }
    for (;;) {
      walk(from);
      if (from == to) { break }
      from = from.nextSibling;
      extraLinebreak = false;
    }
    return text
  }

  function domToPos(cm, node, offset) {
    var lineNode;
    if (node == cm.display.lineDiv) {
      lineNode = cm.display.lineDiv.childNodes[offset];
      if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
      node = null; offset = 0;
    } else {
      for (lineNode = node;; lineNode = lineNode.parentNode) {
        if (!lineNode || lineNode == cm.display.lineDiv) { return null }
        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
      }
    }
    for (var i = 0; i < cm.display.view.length; i++) {
      var lineView = cm.display.view[i];
      if (lineView.node == lineNode)
        { return locateNodeInLineView(lineView, node, offset) }
    }
  }

  function locateNodeInLineView(lineView, node, offset) {
    var wrapper = lineView.text.firstChild, bad = false;
    if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
    if (node == wrapper) {
      bad = true;
      node = wrapper.childNodes[offset];
      offset = 0;
      if (!node) {
        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
        return badPos(Pos(lineNo(line), line.text.length), bad)
      }
    }

    var textNode = node.nodeType == 3 ? node : null, topNode = node;
    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
      textNode = node.firstChild;
      if (offset) { offset = textNode.nodeValue.length; }
    }
    while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
    var measure = lineView.measure, maps = measure.maps;

    function find(textNode, topNode, offset) {
      for (var i = -1; i < (maps ? maps.length : 0); i++) {
        var map = i < 0 ? measure.map : maps[i];
        for (var j = 0; j < map.length; j += 3) {
          var curNode = map[j + 2];
          if (curNode == textNode || curNode == topNode) {
            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
            var ch = map[j] + offset;
            if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)]; }
            return Pos(line, ch)
          }
        }
      }
    }
    var found = find(textNode, topNode, offset);
    if (found) { return badPos(found, bad) }

    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
      found = find(after, after.firstChild, 0);
      if (found)
        { return badPos(Pos(found.line, found.ch - dist), bad) }
      else
        { dist += after.textContent.length; }
    }
    for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
      found = find(before, before.firstChild, -1);
      if (found)
        { return badPos(Pos(found.line, found.ch + dist$1), bad) }
      else
        { dist$1 += before.textContent.length; }
    }
  }

  // TEXTAREA INPUT STYLE

  var TextareaInput = function(cm) {
    this.cm = cm;
    // See input.poll and input.reset
    this.prevInput = "";

    // Flag that indicates whether we expect input to appear real soon
    // now (after some event like 'keypress' or 'input') and are
    // polling intensively.
    this.pollingFast = false;
    // Self-resetting timeout for the poller
    this.polling = new Delayed();
    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
    this.hasSelection = false;
    this.composing = null;
  };

  TextareaInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = this.cm;
    this.createField(display);
    var te = this.textarea;

    display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

    // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
    if (ios) { te.style.width = "0px"; }

    on(te, "input", function () {
      if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null; }
      input.poll();
    });

    on(te, "paste", function (e) {
      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

      cm.state.pasteIncoming = +new Date;
      input.fastPoll();
    });

    function prepareCopyCut(e) {
      if (signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.setSelections(ranges.ranges, null, sel_dontScroll);
        } else {
          input.prevInput = "";
          te.value = ranges.text.join("\n");
          selectInput(te);
        }
      }
      if (e.type == "cut") { cm.state.cutIncoming = +new Date; }
    }
    on(te, "cut", prepareCopyCut);
    on(te, "copy", prepareCopyCut);

    on(display.scroller, "paste", function (e) {
      if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
      if (!te.dispatchEvent) {
        cm.state.pasteIncoming = +new Date;
        input.focus();
        return
      }

      // Pass the `paste` event to the textarea so it's handled by its event listener.
      var event = new Event("paste");
      event.clipboardData = e.clipboardData;
      te.dispatchEvent(event);
    });

    // Prevent normal selection in the editor (we handle our own)
    on(display.lineSpace, "selectstart", function (e) {
      if (!eventInWidget(display, e)) { e_preventDefault(e); }
    });

    on(te, "compositionstart", function () {
      var start = cm.getCursor("from");
      if (input.composing) { input.composing.range.clear(); }
      input.composing = {
        start: start,
        range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
      };
    });
    on(te, "compositionend", function () {
      if (input.composing) {
        input.poll();
        input.composing.range.clear();
        input.composing = null;
      }
    });
  };

  TextareaInput.prototype.createField = function (_display) {
    // Wraps and hides input textarea
    this.wrapper = hiddenTextarea();
    // The semihidden textarea that is focused when the editor is
    // focused, and receives input.
    this.textarea = this.wrapper.firstChild;
  };

  TextareaInput.prototype.screenReaderLabelChanged = function (label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.textarea.setAttribute('aria-label', label);
    } else {
      this.textarea.removeAttribute('aria-label');
    }
  };

  TextareaInput.prototype.prepareSelection = function () {
    // Redraw the selection and/or cursor
    var cm = this.cm, display = cm.display, doc = cm.doc;
    var result = prepareSelection(cm);

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                          headPos.top + lineOff.top - wrapOff.top));
      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                           headPos.left + lineOff.left - wrapOff.left));
    }

    return result
  };

  TextareaInput.prototype.showSelection = function (drawn) {
    var cm = this.cm, display = cm.display;
    removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
    removeChildrenAndAdd(display.selectionDiv, drawn.selection);
    if (drawn.teTop != null) {
      this.wrapper.style.top = drawn.teTop + "px";
      this.wrapper.style.left = drawn.teLeft + "px";
    }
  };

  // Reset the input to correspond to the selection (or to be empty,
  // when not typing and nothing is selected)
  TextareaInput.prototype.reset = function (typing) {
    if (this.contextMenuPending || this.composing) { return }
    var cm = this.cm;
    if (cm.somethingSelected()) {
      this.prevInput = "";
      var content = cm.getSelection();
      this.textarea.value = content;
      if (cm.state.focused) { selectInput(this.textarea); }
      if (ie && ie_version >= 9) { this.hasSelection = content; }
    } else if (!typing) {
      this.prevInput = this.textarea.value = "";
      if (ie && ie_version >= 9) { this.hasSelection = null; }
    }
  };

  TextareaInput.prototype.getField = function () { return this.textarea };

  TextareaInput.prototype.supportsTouch = function () { return false };

  TextareaInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
      try { this.textarea.focus(); }
      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
    }
  };

  TextareaInput.prototype.blur = function () { this.textarea.blur(); };

  TextareaInput.prototype.resetPosition = function () {
    this.wrapper.style.top = this.wrapper.style.left = 0;
  };

  TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };

  // Poll for input changes, using the normal rate of polling. This
  // runs as long as the editor is focused.
  TextareaInput.prototype.slowPoll = function () {
      var this$1 = this;

    if (this.pollingFast) { return }
    this.polling.set(this.cm.options.pollInterval, function () {
      this$1.poll();
      if (this$1.cm.state.focused) { this$1.slowPoll(); }
    });
  };

  // When an event has just come in that is likely to add or change
  // something in the input textarea, we poll faster, to ensure that
  // the change appears on the screen quickly.
  TextareaInput.prototype.fastPoll = function () {
    var missed = false, input = this;
    input.pollingFast = true;
    function p() {
      var changed = input.poll();
      if (!changed && !missed) {missed = true; input.polling.set(60, p);}
      else {input.pollingFast = false; input.slowPoll();}
    }
    input.polling.set(20, p);
  };

  // Read input from the textarea, and update the document to match.
  // When something is selected, it is present in the textarea, and
  // selected (unless it is huge, in which case a placeholder is
  // used). When nothing is selected, the cursor sits after previously
  // seen text (can be empty), which is stored in prevInput (we must
  // not reset the textarea when typing, because that breaks IME).
  TextareaInput.prototype.poll = function () {
      var this$1 = this;

    var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
    // Since this is called a *lot*, try to bail out as cheaply as
    // possible when it is clear that nothing happened. hasSelection
    // will be the case when there is a lot of text in the textarea,
    // in which case reading its value would be expensive.
    if (this.contextMenuPending || !cm.state.focused ||
        (hasSelection(input) && !prevInput && !this.composing) ||
        cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
      { return false }

    var text = input.value;
    // If nothing changed, bail.
    if (text == prevInput && !cm.somethingSelected()) { return false }
    // Work around nonsensical selection resetting in IE9/10, and
    // inexplicable appearance of private area unicode characters on
    // some key combos in Mac (#2689).
    if (ie && ie_version >= 9 && this.hasSelection === text ||
        mac && /[\uf700-\uf7ff]/.test(text)) {
      cm.display.input.reset();
      return false
    }

    if (cm.doc.sel == cm.display.selForContextMenu) {
      var first = text.charCodeAt(0);
      if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
      if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
    }
    // Find the part of the input that is actually new
    var same = 0, l = Math.min(prevInput.length, text.length);
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }

    runInOp(cm, function () {
      applyTextInput(cm, text.slice(same), prevInput.length - same,
                     null, this$1.composing ? "*compose" : null);

      // Don't leave long text in the textarea, since it makes further polling slow
      if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = ""; }
      else { this$1.prevInput = text; }

      if (this$1.composing) {
        this$1.composing.range.clear();
        this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                           {className: "CodeMirror-composing"});
      }
    });
    return true
  };

  TextareaInput.prototype.ensurePolled = function () {
    if (this.pollingFast && this.poll()) { this.pollingFast = false; }
  };

  TextareaInput.prototype.onKeyPress = function () {
    if (ie && ie_version >= 9) { this.hasSelection = null; }
    this.fastPoll();
  };

  TextareaInput.prototype.onContextMenu = function (e) {
    var input = this, cm = input.cm, display = cm.display, te = input.textarea;
    if (input.contextMenuPending) { input.contextMenuPending(); }
    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
    if (!pos || presto) { return } // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    var reset = cm.options.resetSelectionOnContextMenu;
    if (reset && cm.doc.sel.contains(pos) == -1)
      { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }

    var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
    var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
    input.wrapper.style.cssText = "position: static";
    te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
    var oldScrollY;
    if (webkit) { oldScrollY = window.scrollY; } // Work around Chrome issue (#2712)
    display.input.focus();
    if (webkit) { window.scrollTo(null, oldScrollY); }
    display.input.reset();
    // Adds "Select all" to context menu in FF
    if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
    input.contextMenuPending = rehide;
    display.selForContextMenu = cm.doc.sel;
    clearTimeout(display.detectingSelectAll);

    // Select-all will be greyed out if there's nothing to select, so
    // this adds a zero-width space so that we can later check whether
    // it got selected.
    function prepareSelectAllHack() {
      if (te.selectionStart != null) {
        var selected = cm.somethingSelected();
        var extval = "\u200b" + (selected ? te.value : "");
        te.value = "\u21da"; // Used to catch context-menu undo
        te.value = extval;
        input.prevInput = selected ? "" : "\u200b";
        te.selectionStart = 1; te.selectionEnd = extval.length;
        // Re-set this, in case some other handler touched the
        // selection in the meantime.
        display.selForContextMenu = cm.doc.sel;
      }
    }
    function rehide() {
      if (input.contextMenuPending != rehide) { return }
      input.contextMenuPending = false;
      input.wrapper.style.cssText = oldWrapperCSS;
      te.style.cssText = oldCSS;
      if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }

      // Try to detect the user choosing select-all
      if (te.selectionStart != null) {
        if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
        var i = 0, poll = function () {
          if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
              te.selectionEnd > 0 && input.prevInput == "\u200b") {
            operation(cm, selectAll)(cm);
          } else if (i++ < 10) {
            display.detectingSelectAll = setTimeout(poll, 500);
          } else {
            display.selForContextMenu = null;
            display.input.reset();
          }
        };
        display.detectingSelectAll = setTimeout(poll, 200);
      }
    }

    if (ie && ie_version >= 9) { prepareSelectAllHack(); }
    if (captureRightClick) {
      e_stop(e);
      var mouseup = function () {
        off(window, "mouseup", mouseup);
        setTimeout(rehide, 20);
      };
      on(window, "mouseup", mouseup);
    } else {
      setTimeout(rehide, 50);
    }
  };

  TextareaInput.prototype.readOnlyChanged = function (val) {
    if (!val) { this.reset(); }
    this.textarea.disabled = val == "nocursor";
    this.textarea.readOnly = !!val;
  };

  TextareaInput.prototype.setUneditable = function () {};

  TextareaInput.prototype.needsContentAttribute = false;

  function fromTextArea(textarea, options) {
    options = options ? copyObj(options) : {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabIndex)
      { options.tabindex = textarea.tabIndex; }
    if (!options.placeholder && textarea.placeholder)
      { options.placeholder = textarea.placeholder; }
    // Set autofocus to true if this textarea is focused, or if it has
    // autofocus and no other element is focused.
    if (options.autofocus == null) {
      var hasFocus = activeElt();
      options.autofocus = hasFocus == textarea ||
        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
    }

    function save() {textarea.value = cm.getValue();}

    var realSubmit;
    if (textarea.form) {
      on(textarea.form, "submit", save);
      // Deplorable hack to make the submit method do the right thing.
      if (!options.leaveSubmitMethodAlone) {
        var form = textarea.form;
        realSubmit = form.submit;
        try {
          var wrappedSubmit = form.submit = function () {
            save();
            form.submit = realSubmit;
            form.submit();
            form.submit = wrappedSubmit;
          };
        } catch(e) {}
      }
    }

    options.finishInit = function (cm) {
      cm.save = save;
      cm.getTextArea = function () { return textarea; };
      cm.toTextArea = function () {
        cm.toTextArea = isNaN; // Prevent this from being ran twice
        save();
        textarea.parentNode.removeChild(cm.getWrapperElement());
        textarea.style.display = "";
        if (textarea.form) {
          off(textarea.form, "submit", save);
          if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function")
            { textarea.form.submit = realSubmit; }
        }
      };
    };

    textarea.style.display = "none";
    var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
      options);
    return cm
  }

  function addLegacyProps(CodeMirror) {
    CodeMirror.off = off;
    CodeMirror.on = on;
    CodeMirror.wheelEventPixels = wheelEventPixels;
    CodeMirror.Doc = Doc;
    CodeMirror.splitLines = splitLinesAuto;
    CodeMirror.countColumn = countColumn;
    CodeMirror.findColumn = findColumn;
    CodeMirror.isWordChar = isWordCharBasic;
    CodeMirror.Pass = Pass;
    CodeMirror.signal = signal;
    CodeMirror.Line = Line;
    CodeMirror.changeEnd = changeEnd;
    CodeMirror.scrollbarModel = scrollbarModel;
    CodeMirror.Pos = Pos;
    CodeMirror.cmpPos = cmp;
    CodeMirror.modes = modes;
    CodeMirror.mimeModes = mimeModes;
    CodeMirror.resolveMode = resolveMode;
    CodeMirror.getMode = getMode;
    CodeMirror.modeExtensions = modeExtensions;
    CodeMirror.extendMode = extendMode;
    CodeMirror.copyState = copyState;
    CodeMirror.startState = startState;
    CodeMirror.innerMode = innerMode;
    CodeMirror.commands = commands;
    CodeMirror.keyMap = keyMap;
    CodeMirror.keyName = keyName;
    CodeMirror.isModifierKey = isModifierKey;
    CodeMirror.lookupKey = lookupKey;
    CodeMirror.normalizeKeyMap = normalizeKeyMap;
    CodeMirror.StringStream = StringStream;
    CodeMirror.SharedTextMarker = SharedTextMarker;
    CodeMirror.TextMarker = TextMarker;
    CodeMirror.LineWidget = LineWidget;
    CodeMirror.e_preventDefault = e_preventDefault;
    CodeMirror.e_stopPropagation = e_stopPropagation;
    CodeMirror.e_stop = e_stop;
    CodeMirror.addClass = addClass;
    CodeMirror.contains = contains;
    CodeMirror.rmClass = rmClass;
    CodeMirror.keyNames = keyNames;
  }

  // EDITOR CONSTRUCTOR

  defineOptions(CodeMirror);

  addEditorMethods(CodeMirror);

  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
  for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
    { CodeMirror.prototype[prop] = (function(method) {
      return function() {return method.apply(this.doc, arguments)}
    })(Doc.prototype[prop]); } }

  eventMixin(Doc);
  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  CodeMirror.defineMode = function(name/*, mode, …*/) {
    if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name; }
    defineMode.apply(this, arguments);
  };

  CodeMirror.defineMIME = defineMIME;

  // Minimal default mode.
  CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
  CodeMirror.defineMIME("text/plain", "null");

  // EXTENSIONS

  CodeMirror.defineExtension = function (name, func) {
    CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function (name, func) {
    Doc.prototype[name] = func;
  };

  CodeMirror.fromTextArea = fromTextArea;

  addLegacyProps(CodeMirror);

  CodeMirror.version = "5.61.1";

  return CodeMirror;

})));


/***/ }),

/***/ "./src/vendors/codemirror/mode/css/css.js":
/*!************************************************!*\
  !*** ./src/vendors/codemirror/mode/css/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/vendors/codemirror/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("css", function(config, parserConfig) {
  var inline = parserConfig.inline
  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      documentTypes = parserConfig.documentTypes || {},
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      counterDescriptors = parserConfig.counterDescriptors || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      allowNested = parserConfig.allowNested,
      lineComment = parserConfig.lineComment,
      supportsAtComponent = parserConfig.supportsAtComponent === true,
      highlightNonStandardPropertyKeywords = config.highlightNonStandardPropertyKeywords !== false;

  var type, override;
  function ret(style, tp) { type = tp; return style; }

  // Tokenizers

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == "@") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("def", stream.current());
    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
      return ret(null, "compare");
    } else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    } else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    } else if (ch === "-") {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
      } else if (stream.match(/^-[\w\\\-]*/)) {
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ret("variable-2", "variable-definition");
        return ret("variable-2", "variable");
      } else if (stream.match(/^\w+-/)) {
        return ret("meta", "meta");
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret("qualifier", "qualifier");
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if (stream.match(/^[\w-.]+(?=\()/)) {
      if (/^(url(-prefix)?|domain|regexp)$/i.test(stream.current())) {
        state.tokenize = tokenParenthesized;
      }
      return ret("variable callee", "variable");
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret("property", "word");
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ")") stream.backUp(1);
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
      return ret("string", "string");
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('
    if (!stream.match(/^\s*[\"\')]/, false))
      state.tokenize = tokenString(")");
    else
      state.tokenize = null;
    return ret(null, "(");
  }

  // Context management

  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type, indent) {
    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
    return type;
  }

  function popContext(state) {
    if (state.context.prev)
      state.context = state.context.prev;
    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }
  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--)
      state.context = state.context.prev;
    return pass(type, stream, state);
  }

  // Parser

  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();
    if (valueKeywords.hasOwnProperty(word))
      override = "atom";
    else if (colorKeywords.hasOwnProperty(word))
      override = "keyword";
    else
      override = "variable";
  }

  var states = {};

  states.top = function(type, stream, state) {
    if (type == "{") {
      return pushContext(state, stream, "block");
    } else if (type == "}" && state.context.prev) {
      return popContext(state);
    } else if (supportsAtComponent && /@component/i.test(type)) {
      return pushContext(state, stream, "atComponentBlock");
    } else if (/^@(-moz-)?document$/i.test(type)) {
      return pushContext(state, stream, "documentTypes");
    } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type)) {
      return pushContext(state, stream, "atBlock");
    } else if (/^@(font-face|counter-style)/i.test(type)) {
      state.stateArg = type;
      return "restricted_atBlock_before";
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type)) {
      return "keyframes";
    } else if (type && type.charAt(0) == "@") {
      return pushContext(state, stream, "at");
    } else if (type == "hash") {
      override = "builtin";
    } else if (type == "word") {
      override = "tag";
    } else if (type == "variable-definition") {
      return "maybeprop";
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    } else if (type == ":") {
      return "pseudo";
    } else if (allowNested && type == "(") {
      return pushContext(state, stream, "parens");
    }
    return state.context.type;
  };

  states.block = function(type, stream, state) {
    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (propertyKeywords.hasOwnProperty(word)) {
        override = "property";
        return "maybeprop";
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = highlightNonStandardPropertyKeywords ? "string-2" : "property";
        return "maybeprop";
      } else if (allowNested) {
        override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
        return "block";
      } else {
        override += " error";
        return "maybeprop";
      }
    } else if (type == "meta") {
      return "block";
    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
      override = "error";
      return "block";
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function(type, stream, state) {
    if (type == ":") return pushContext(state, stream, "prop");
    return pass(type, stream, state);
  };

  states.prop = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
    if (type == "}" || type == "{") return popAndPass(type, stream, state);
    if (type == "(") return pushContext(state, stream, "parens");

    if (type == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
      override += " error";
    } else if (type == "word") {
      wordAsValue(stream);
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    }
    return "prop";
  };

  states.propBlock = function(type, _stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") { override = "property"; return "maybeprop"; }
    return state.context.type;
  };

  states.parens = function(type, stream, state) {
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == ")") return popContext(state);
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == "interpolation") return pushContext(state, stream, "interpolation");
    if (type == "word") wordAsValue(stream);
    return "parens";
  };

  states.pseudo = function(type, stream, state) {
    if (type == "meta") return "pseudo";

    if (type == "word") {
      override = "variable-3";
      return state.context.type;
    }
    return pass(type, stream, state);
  };

  states.documentTypes = function(type, stream, state) {
    if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
      override = "tag";
      return state.context.type;
    } else {
      return states.atBlock(type, stream, state);
    }
  };

  states.atBlock = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "atBlock_parens");
    if (type == "}" || type == ";") return popAndPass(type, stream, state);
    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

    if (type == "interpolation") return pushContext(state, stream, "interpolation");

    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (word == "only" || word == "not" || word == "and" || word == "or")
        override = "keyword";
      else if (mediaTypes.hasOwnProperty(word))
        override = "attribute";
      else if (mediaFeatures.hasOwnProperty(word))
        override = "property";
      else if (mediaValueKeywords.hasOwnProperty(word))
        override = "keyword";
      else if (propertyKeywords.hasOwnProperty(word))
        override = "property";
      else if (nonStandardPropertyKeywords.hasOwnProperty(word))
        override = highlightNonStandardPropertyKeywords ? "string-2" : "property";
      else if (valueKeywords.hasOwnProperty(word))
        override = "atom";
      else if (colorKeywords.hasOwnProperty(word))
        override = "keyword";
      else
        override = "error";
    }
    return state.context.type;
  };

  states.atComponentBlock = function(type, stream, state) {
    if (type == "}")
      return popAndPass(type, stream, state);
    if (type == "{")
      return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
    if (type == "word")
      override = "error";
    return state.context.type;
  };

  states.atBlock_parens = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
    return states.atBlock(type, stream, state);
  };

  states.restricted_atBlock_before = function(type, stream, state) {
    if (type == "{")
      return pushContext(state, stream, "restricted_atBlock");
    if (type == "word" && state.stateArg == "@counter-style") {
      override = "variable";
      return "restricted_atBlock_before";
    }
    return pass(type, stream, state);
  };

  states.restricted_atBlock = function(type, stream, state) {
    if (type == "}") {
      state.stateArg = null;
      return popContext(state);
    }
    if (type == "word") {
      if ((state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase())) ||
          (state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
        override = "error";
      else
        override = "property";
      return "maybeprop";
    }
    return "restricted_atBlock";
  };

  states.keyframes = function(type, stream, state) {
    if (type == "word") { override = "variable"; return "keyframes"; }
    if (type == "{") return pushContext(state, stream, "top");
    return pass(type, stream, state);
  };

  states.at = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") override = "tag";
    else if (type == "hash") override = "builtin";
    return "at";
  };

  states.interpolation = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "{" || type == ";") return popAndPass(type, stream, state);
    if (type == "word") override = "variable";
    else if (type != "variable" && type != "(" && type != ")") override = "error";
    return "interpolation";
  };

  return {
    startState: function(base) {
      return {tokenize: null,
              state: inline ? "block" : "top",
              stateArg: null,
              context: new Context(inline ? "block" : "top", base || 0, null)};
    },

    token: function(stream, state) {
      if (!state.tokenize && stream.eatSpace()) return null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style && typeof style == "object") {
        type = style[1];
        style = style[0];
      }
      override = style;
      if (type != "comment")
        state.state = states[state.state](type, stream, state);
      return override;
    },

    indent: function(state, textAfter) {
      var cx = state.context, ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;
      if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
      if (cx.prev) {
        if (ch == "}" && (cx.type == "block" || cx.type == "top" ||
                          cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
          // Resume indentation from parent context.
          cx = cx.prev;
          indent = cx.indent;
        } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") ||
            ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
          // Dedent relative to current context.
          indent = Math.max(0, cx.indent - indentUnit);
        }
      }
      return indent;
    },

    electricChars: "}",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: lineComment,
    fold: "brace"
  };
});

  function keySet(array) {
    var keys = {};
    for (var i = 0; i < array.length; ++i) {
      keys[array[i].toLowerCase()] = true;
    }
    return keys;
  }

  var documentTypes_ = [
    "domain", "regexp", "url", "url-prefix"
  ], documentTypes = keySet(documentTypes_);

  var mediaTypes_ = [
    "all", "aural", "braille", "handheld", "print", "projection", "screen",
    "tty", "tv", "embossed"
  ], mediaTypes = keySet(mediaTypes_);

  var mediaFeatures_ = [
    "width", "min-width", "max-width", "height", "min-height", "max-height",
    "device-width", "min-device-width", "max-device-width", "device-height",
    "min-device-height", "max-device-height", "aspect-ratio",
    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
    "max-color", "color-index", "min-color-index", "max-color-index",
    "monochrome", "min-monochrome", "max-monochrome", "resolution",
    "min-resolution", "max-resolution", "scan", "grid", "orientation",
    "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio",
    "pointer", "any-pointer", "hover", "any-hover", "prefers-color-scheme"
  ], mediaFeatures = keySet(mediaFeatures_);

  var mediaValueKeywords_ = [
    "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover",
    "interlace", "progressive",
    "dark", "light"
  ], mediaValueKeywords = keySet(mediaValueKeywords_);

  var propertyKeywords_ = [
    "align-content", "align-items", "align-self", "alignment-adjust",
    "alignment-baseline", "all", "anchor-point", "animation", "animation-delay",
    "animation-direction", "animation-duration", "animation-fill-mode",
    "animation-iteration-count", "animation-name", "animation-play-state",
    "animation-timing-function", "appearance", "azimuth", "backdrop-filter",
    "backface-visibility", "background", "background-attachment",
    "background-blend-mode", "background-clip", "background-color",
    "background-image", "background-origin", "background-position",
    "background-position-x", "background-position-y", "background-repeat",
    "background-size", "baseline-shift", "binding", "bleed", "block-size",
    "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target",
    "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius",
    "border-bottom-right-radius", "border-bottom-style", "border-bottom-width",
    "border-collapse", "border-color", "border-image", "border-image-outset",
    "border-image-repeat", "border-image-slice", "border-image-source",
    "border-image-width", "border-left", "border-left-color", "border-left-style",
    "border-left-width", "border-radius", "border-right", "border-right-color",
    "border-right-style", "border-right-width", "border-spacing", "border-style",
    "border-top", "border-top-color", "border-top-left-radius",
    "border-top-right-radius", "border-top-style", "border-top-width",
    "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing",
    "break-after", "break-before", "break-inside", "caption-side", "caret-color",
    "clear", "clip", "color", "color-profile", "column-count", "column-fill",
    "column-gap", "column-rule", "column-rule-color", "column-rule-style",
    "column-rule-width", "column-span", "column-width", "columns", "contain",
    "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after",
    "cue-before", "cursor", "direction", "display", "dominant-baseline",
    "drop-initial-after-adjust", "drop-initial-after-align",
    "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size",
    "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position",
    "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow",
    "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into",
    "font", "font-family", "font-feature-settings", "font-kerning",
    "font-language-override", "font-optical-sizing", "font-size",
    "font-size-adjust", "font-stretch", "font-style", "font-synthesis",
    "font-variant", "font-variant-alternates", "font-variant-caps",
    "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric",
    "font-variant-position", "font-variation-settings", "font-weight", "gap",
    "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows",
    "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start",
    "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start",
    "grid-template", "grid-template-areas", "grid-template-columns",
    "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon",
    "image-orientation", "image-rendering", "image-resolution", "inline-box-align",
    "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline",
    "inset-inline-end", "inset-inline-start", "isolation", "justify-content",
    "justify-items", "justify-self", "left", "letter-spacing", "line-break",
    "line-height", "line-height-step", "line-stacking", "line-stacking-ruby",
    "line-stacking-shift", "line-stacking-strategy", "list-style",
    "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top", "marks",
    "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed",
    "marquee-style", "mask-clip", "mask-composite", "mask-image", "mask-mode",
    "mask-origin", "mask-position", "mask-repeat", "mask-size","mask-type",
    "max-block-size", "max-height", "max-inline-size",
    "max-width", "min-block-size", "min-height", "min-inline-size", "min-width",
    "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right",
    "nav-up", "object-fit", "object-position", "offset", "offset-anchor",
    "offset-distance", "offset-path", "offset-position", "offset-rotate",
    "opacity", "order", "orphans", "outline", "outline-color", "outline-offset",
    "outline-style", "outline-width", "overflow", "overflow-style",
    "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom",
    "padding-left", "padding-right", "padding-top", "page", "page-break-after",
    "page-break-before", "page-break-inside", "page-policy", "pause",
    "pause-after", "pause-before", "perspective", "perspective-origin", "pitch",
    "pitch-range", "place-content", "place-items", "place-self", "play-during",
    "position", "presentation-level", "punctuation-trim", "quotes",
    "region-break-after", "region-break-before", "region-break-inside",
    "region-fragment", "rendering-intent", "resize", "rest", "rest-after",
    "rest-before", "richness", "right", "rotate", "rotation", "rotation-point",
    "row-gap", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span",
    "scale", "scroll-behavior", "scroll-margin", "scroll-margin-block",
    "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom",
    "scroll-margin-inline", "scroll-margin-inline-end",
    "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right",
    "scroll-margin-top", "scroll-padding", "scroll-padding-block",
    "scroll-padding-block-end", "scroll-padding-block-start",
    "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end",
    "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right",
    "scroll-padding-top", "scroll-snap-align", "scroll-snap-type",
    "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside",
    "size", "speak", "speak-as", "speak-header", "speak-numeral",
    "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size",
    "table-layout", "target", "target-name", "target-new", "target-position",
    "text-align", "text-align-last", "text-combine-upright", "text-decoration",
    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
    "text-decoration-skip-ink", "text-decoration-style", "text-emphasis",
    "text-emphasis-color", "text-emphasis-position", "text-emphasis-style",
    "text-height", "text-indent", "text-justify", "text-orientation",
    "text-outline", "text-overflow", "text-rendering", "text-shadow",
    "text-size-adjust", "text-space-collapse", "text-transform",
    "text-underline-position", "text-wrap", "top", "touch-action", "transform", "transform-origin",
    "transform-style", "transition", "transition-delay", "transition-duration",
    "transition-property", "transition-timing-function", "translate",
    "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance",
    "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate",
    "voice-stress", "voice-volume", "volume", "white-space", "widows", "width",
    "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index",
    // SVG-specific
    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
    "color-interpolation", "color-interpolation-filters",
    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
    "marker", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stroke",
    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
    "glyph-orientation-vertical", "text-anchor", "writing-mode",
  ], propertyKeywords = keySet(propertyKeywords_);

  var nonStandardPropertyKeywords_ = [
    "border-block", "border-block-color", "border-block-end",
    "border-block-end-color", "border-block-end-style", "border-block-end-width",
    "border-block-start", "border-block-start-color", "border-block-start-style",
    "border-block-start-width", "border-block-style", "border-block-width",
    "border-inline", "border-inline-color", "border-inline-end",
    "border-inline-end-color", "border-inline-end-style",
    "border-inline-end-width", "border-inline-start", "border-inline-start-color",
    "border-inline-start-style", "border-inline-start-width",
    "border-inline-style", "border-inline-width", "margin-block",
    "margin-block-end", "margin-block-start", "margin-inline", "margin-inline-end",
    "margin-inline-start", "padding-block", "padding-block-end",
    "padding-block-start", "padding-inline", "padding-inline-end",
    "padding-inline-start", "scroll-snap-stop", "scrollbar-3d-light-color",
    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
    "scrollbar-track-color", "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration", "shape-inside", "zoom"
  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);

  var fontProperties_ = [
    "font-display", "font-family", "src", "unicode-range", "font-variant",
     "font-feature-settings", "font-stretch", "font-weight", "font-style"
  ], fontProperties = keySet(fontProperties_);

  var counterDescriptors_ = [
    "additive-symbols", "fallback", "negative", "pad", "prefix", "range",
    "speak-as", "suffix", "symbols", "system"
  ], counterDescriptors = keySet(counterDescriptors_);

  var colorKeywords_ = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
    "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ], colorKeywords = keySet(colorKeywords_);

  var valueKeywords_ = [
    "above", "absolute", "activeborder", "additive", "activecaption", "afar",
    "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate",
    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
    "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page",
    "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "binary",
    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
    "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel",
    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian",
    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
    "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch",
    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
    "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse",
    "compact", "condensed", "contain", "content", "contents",
    "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop",
    "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal",
    "decimal-leading-zero", "default", "default-button", "dense", "destination-atop",
    "destination-in", "destination-out", "destination-over", "devanagari", "difference",
    "disc", "discard", "disclosure-closed", "disclosure-open", "document",
    "dot-dash", "dot-dot-dash",
    "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig",
    "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed",
    "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes",
    "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove",
    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew",
    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore",
    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
    "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert",
    "italic", "japanese-formal", "japanese-informal", "justify", "kannada",
    "katakana", "katakana-iroha", "keep-all", "khmer",
    "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal",
    "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten",
    "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem",
    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
    "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "manipulation", "match", "matrix", "matrix3d",
    "media-controls-background", "media-current-time-display",
    "media-fullscreen-button", "media-mute-button", "media-play-button",
    "media-return-to-realtime-button", "media-rewind-button",
    "media-seek-back-button", "media-seek-forward-button", "media-slider",
    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
    "menu", "menulist", "menulist-button", "menulist-text",
    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
    "mix", "mongolian", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "myanmar", "n-resize",
    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
    "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote",
    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
    "painted", "page", "paused", "persian", "perspective", "pinch-zoom", "plus-darker", "plus-lighter",
    "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d",
    "progress", "push-button", "radial-gradient", "radio", "read-only",
    "read-write", "read-write-plaintext-only", "rectangle", "region",
    "relative", "repeat", "repeating-linear-gradient",
    "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse",
    "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY",
    "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running",
    "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen",
    "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield",
    "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end",
    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
    "simp-chinese-formal", "simp-chinese-informal", "single",
    "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal",
    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
    "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali",
    "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square",
    "square-button", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub",
    "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table",
    "table-caption", "table-cell", "table-column", "table-column-group",
    "table-footer-group", "table-header-group", "table-row", "table-row-group",
    "tamil",
    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
    "trad-chinese-formal", "trad-chinese-informal", "transform",
    "translate", "translate3d", "translateX", "translateY", "translateZ",
    "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up",
    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
    "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted",
    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
    "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor",
    "xx-large", "xx-small"
  ], valueKeywords = keySet(valueKeywords_);

  var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_)
    .concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_)
    .concat(valueKeywords_);
  CodeMirror.registerHelper("hintWords", "css", allWords);

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ["comment", "comment"];
  }

  CodeMirror.defineMIME("text/css", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css"
  });

  CodeMirror.defineMIME("text/x-scss", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function(stream) {
        if (stream.match(/^\s*\{/, false))
          return [null, null]
        return false;
      },
      "$": function(stream) {
        stream.match(/^[\w-]+/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "#": function(stream) {
        if (!stream.eat("{")) return false;
        return [null, "interpolation"];
      }
    },
    name: "css",
    helperType: "scss"
  });

  CodeMirror.defineMIME("text/x-less", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function(stream) {
        if (stream.eat("{")) return [null, "interpolation"];
        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false)) return false;
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "&": function() {
        return ["atom", "atom"];
      }
    },
    name: "css",
    helperType: "less"
  });

  CodeMirror.defineMIME("text/x-gss", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    supportsAtComponent: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css",
    helperType: "gss"
  });

});


/***/ }),

/***/ "./src/vendors/codemirror/mode/javascript/javascript.js":
/*!**************************************************************!*\
  !*** ./src/vendors/codemirror/mode/javascript/javascript.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/vendors/codemirror/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var trackScope = parserConfig.trackScope !== false
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    return {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eat("=");
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#" && stream.peek() == "!") {
      stream.skipToEnd();
      return ret("meta", "meta");
    } else if (ch == "#" && stream.eatWhile(wordRE)) {
      return ret("variable", "property")
    } else if (ch == "<" && stream.match("!--") ||
               (ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start)))) {
      stream.skipToEnd()
      return ret("comment", "comment")
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
        if (stream.eat("=")) {
          if (ch == "!" || ch == "=") stream.eat("=")
        } else if (/[<>*+\-|&?]/.test(ch)) {
          stream.eat(ch)
          if (ch == ">") stream.eat(ch)
        }
      }
      if (ch == "?" && stream.eat(".")) return ret(".")
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current()
      if (state.lastType != ".") {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word]
          return ret(kw.type, kw.style, word)
        }
        if (word == "async" && stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
          return ret("async", "keyword", word)
      }
      return ret("variable", "variable", word)
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/`]/.test(ch)) {
        for (;; --pos) {
          if (pos == 0) return
          var next = stream.string.charAt(pos - 1)
          if (next == ch && stream.string.charAt(pos - 2) != "\\") { pos--; break }
        }
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true,
                     "regexp": true, "this": true, "import": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    if (!trackScope) return false
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function inList(name, list) {
    for (var v = list; v; v = v.next) if (v.name == name) return true
    return false;
  }
  function register(varname) {
    var state = cx.state;
    cx.marked = "def";
    if (!trackScope) return
    if (state.context) {
      if (state.lexical.info == "var" && state.context && state.context.block) {
        // FIXME function decls are also not block scoped
        var newContext = registerVarScoped(varname, state.context)
        if (newContext != null) {
          state.context = newContext
          return
        }
      } else if (!inList(varname, state.localVars)) {
        state.localVars = new Var(varname, state.localVars)
        return
      }
    }
    // Fall through means this is global
    if (parserConfig.globalVars && !inList(varname, state.globalVars))
      state.globalVars = new Var(varname, state.globalVars)
  }
  function registerVarScoped(varname, context) {
    if (!context) {
      return null
    } else if (context.block) {
      var inner = registerVarScoped(varname, context.prev)
      if (!inner) return null
      if (inner == context.prev) return context
      return new Context(inner, context.vars, true)
    } else if (inList(varname, context.vars)) {
      return context
    } else {
      return new Context(context.prev, new Var(varname, context.vars), false)
    }
  }

  function isModifier(name) {
    return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly"
  }

  // Combinators

  function Context(prev, vars, block) { this.prev = prev; this.vars = vars; this.block = block }
  function Var(name, next) { this.name = name; this.next = next }

  var defaultVars = new Var("this", new Var("arguments", null))
  function pushcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, false)
    cx.state.localVars = defaultVars
  }
  function pushblockcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, true)
    cx.state.localVars = null
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars
    cx.state.context = cx.state.context.prev
  }
  popcontext.lex = true
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";" || type == "}" || type == ")" || type == "]") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
    if (type == "debugger") return cont(expect(";"));
    if (type == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), pushblockcontext, forspec, statement, popcontext, poplex);
    if (type == "class" || (isTS && value == "interface")) {
      cx.marked = "keyword"
      return cont(pushlex("form", type == "class" ? type : value), className, poplex)
    }
    if (type == "variable") {
      if (isTS && value == "declare") {
        cx.marked = "keyword"
        return cont(statement)
      } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
        cx.marked = "keyword"
        if (value == "enum") return cont(enumdef);
        else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
        else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
      } else if (isTS && value == "namespace") {
        cx.marked = "keyword"
        return cont(pushlex("form"), expression, statement, poplex)
      } else if (isTS && value == "abstract") {
        cx.marked = "keyword"
        return cont(statement)
      } else {
        return cont(pushlex("stat"), maybelabel);
      }
    }
    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext,
                                      block, poplex, poplex, popcontext);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "async") return cont(statement)
    if (value == "@") return cont(expression, statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function maybeCatchBinding(type) {
    if (type == "(") return cont(funarg, expect(")"))
  }
  function expression(type, value) {
    return expressionInner(type, value, false);
  }
  function expressionNoComma(type, value) {
    return expressionInner(type, value, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), maybeexpression, expect(")"), poplex)
  }
  function expressionInner(type, value, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class" || (isTS && value == "interface")) { cx.marked = "keyword"; return cont(pushlex("form"), classExpression, poplex); }
    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(maybeexpression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
      if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
        return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
    if (type == "regexp") {
      cx.state.lastType = cx.marked = "operator"
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1)
      return cont(expr)
    }
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
        cx.state.fatArrowAt = cx.stream.pos + m[0].length
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (isTS && isModifier(value)) {
      cx.marked = "keyword"
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, maybetype, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expressionNoComma, afterprop);
    } else if (value == "*") {
      cx.marked = "keyword";
      return cont(objprop);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      if (sep && sep.indexOf(";") > -1) return pass(what)
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function maybetypeOrIn(type, value) {
    if (isTS && (type == ":" || value == "in")) return cont(typeexpr)
  }
  function mayberettype(type) {
    if (isTS && type == ":") {
      if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr)
      else return cont(typeexpr)
    }
  }
  function isKW(_, value) {
    if (value == "is") {
      cx.marked = "keyword"
      return cont()
    }
  }
  function typeexpr(type, value) {
    if (value == "keyof" || value == "typeof" || value == "infer" || value == "readonly") {
      cx.marked = "keyword"
      return cont(value == "typeof" ? expressionNoComma : typeexpr)
    }
    if (type == "variable" || value == "void") {
      cx.marked = "type"
      return cont(afterType)
    }
    if (value == "|" || value == "&") return cont(typeexpr)
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
    if (type == "{") return cont(pushlex("}"), typeprops, poplex, afterType)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType)
    if (type == "<") return cont(commasep(typeexpr, ">"), typeexpr)
    if (type == "quasi") { return pass(quasiType, afterType); }
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprops(type) {
    if (type.match(/[\}\)\]]/)) return cont()
    if (type == "," || type == ";") return cont(typeprops)
    return pass(typeprop, typeprops)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?" || type == "number" || type == "string") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    } else if (type == "[") {
      return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop)
    } else if (type == "(") {
      return pass(functiondecl, typeprop)
    } else if (!type.match(/[;\}\)\],]/)) {
      return cont()
    }
  }
  function quasiType(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasiType);
    return cont(typeexpr, continueQuasiType);
  }
  function continueQuasiType(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasiType);
    }
  }
  function typearg(type, value) {
    if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg)
    if (type == ":") return cont(typeexpr)
    if (type == "spread") return cont(typearg)
    return pass(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == "." || value == "&") return cont(typeexpr)
    if (type == "[") return cont(typeexpr, expect("]"), afterType)
    if (value == "extends" || value == "implements") { cx.marked = "keyword"; return cont(typeexpr) }
    if (value == "?") return cont(typeexpr, expect(":"), typeexpr)
  }
  function maybeTypeArgs(_, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
  }
  function typeparam() {
    return pass(typeexpr, maybeTypeDefault)
  }
  function maybeTypeDefault(_, value) {
    if (value == "=") return cont(typeexpr)
  }
  function vardef(_, value) {
    if (value == "enum") {cx.marked = "keyword"; return cont(enumdef)}
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(pattern) }
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(eltpattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    if (type == "[") return cont(expression, expect(']'), expect(':'), proppattern);
    return cont(expect(":"), pattern, maybeAssign);
  }
  function eltpattern() {
    return pass(pattern, maybeAssign)
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type, value) {
    if (value == "await") return cont(forspec);
    if (type == "(") return cont(pushlex(")"), forspec1, poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, forspec2);
    if (type == "variable") return cont(forspec2);
    return pass(forspec2)
  }
  function forspec2(type, value) {
    if (type == ")") return cont()
    if (type == ";") return cont(forspec2)
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression, forspec2) }
    return pass(expression, forspec2)
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef)
  }
  function functiondecl(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondecl);}
    if (type == "variable") {register(value); return cont(functiondecl);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl)
  }
  function typename(type, value) {
    if (type == "keyword" || type == "variable") {
      cx.marked = "type"
      return cont(typename)
    } else if (value == "<") {
      return cont(pushlex(">"), commasep(typeparam, ">"), poplex)
    }
  }
  function funarg(type, value) {
    if (value == "@") cont(expression, funarg)
    if (type == "spread") return cont(funarg);
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(funarg); }
    if (isTS && type == "this") return cont(maybetype, maybeAssign)
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter)
    if (value == "extends" || value == "implements" || (isTS && type == ",")) {
      if (value == "implements") cx.marked = "keyword";
      return cont(isTS ? typeexpr : expression, classNameAfter);
    }
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "async" ||
        (type == "variable" &&
         (value == "static" || value == "get" || value == "set" || (isTS && isModifier(value))) &&
         cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      return cont(classfield, classBody);
    }
    if (type == "number" || type == "string") return cont(classfield, classBody);
    if (type == "[")
      return cont(expression, maybetype, expect("]"), classfield, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (isTS && type == "(") return pass(functiondecl, classBody)
    if (type == ";" || type == ",") return cont(classBody);
    if (type == "}") return cont();
    if (value == "@") return cont(expression, classBody)
  }
  function classfield(type, value) {
    if (value == "!") return cont(classfield)
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    if (value == "=") return cont(expressionNoComma)
    var context = cx.state.lexical.prev, isInterface = context && context.info == "interface"
    return pass(isInterface ? functiondecl : functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    if (type == "(") return pass(expression);
    if (type == ".") return pass(maybeoperatorComma);
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }
  function enumdef() {
    return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex)
  }
  function enummember() {
    return pass(pattern, maybeAssign);
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase &&
      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && new Context(null, null, false),
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment || state.tokenize == tokenQuasi) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse && c != popcontext) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    blockCommentContinue: jsonMode ? null : " * ",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,

    skipExpression: function(state) {
      parseJS(state, "atom", "atom", "true", new CodeMirror.StringStream("", 2, null))
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", { name: "javascript", json: true });
CodeMirror.defineMIME("application/x-json", { name: "javascript", json: true });
CodeMirror.defineMIME("application/manifest+json", { name: "javascript", json: true })
CodeMirror.defineMIME("application/ld+json", { name: "javascript", jsonld: true });
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});


/***/ })

/******/ });