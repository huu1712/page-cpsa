module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/accessory","2":"components/banner","3":"components/featured-product","4":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/alepay-logo.c7357c7.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3f727497", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a8993daa", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Footer/Footer.vue?vue&type=template&id=23d47c0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"main--footer"}},[_vm._ssrNode("<footer id=\"footer\" data-v-23d47c0c><div id=\"footer--top\" data-v-23d47c0c><div class=\"footer--top__container\" data-v-23d47c0c><div class=\"footer--top__col-1\" data-v-23d47c0c><ul class=\"footer--col-1__list\" data-v-23d47c0c><li data-v-23d47c0c><h4 data-v-23d47c0c>Tìm cửa hàng</h4></li> <li data-v-23d47c0c>Tìm cửa hàng gần nhất</li> <li data-v-23d47c0c>Mua hàng từ xa</li> <li data-v-23d47c0c>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</li></ul> <div class=\"footer--col-1__text\" data-v-23d47c0c><h4 data-v-23d47c0c>Phương thức thanh toán</h4></div> <ul class=\"footer--col-1__list link\" data-v-23d47c0c><li data-v-23d47c0c><img"+(_vm._ssrAttr("src",__webpack_require__(3)))+" alt data-v-23d47c0c></li> <li data-v-23d47c0c><img"+(_vm._ssrAttr("src",__webpack_require__(3)))+" alt data-v-23d47c0c></li> <li data-v-23d47c0c><img"+(_vm._ssrAttr("src",__webpack_require__(3)))+" alt data-v-23d47c0c></li> <li data-v-23d47c0c><img"+(_vm._ssrAttr("src",__webpack_require__(3)))+" alt data-v-23d47c0c></li> <li data-v-23d47c0c><img"+(_vm._ssrAttr("src",__webpack_require__(3)))+" alt data-v-23d47c0c></li></ul></div> <div class=\"footer--top__col-1\" data-v-23d47c0c><ul class=\"footer--col-1__list\" data-v-23d47c0c><li data-v-23d47c0c>Gọi mua hàng<strong data-v-23d47c0c> 1800.2097</strong>(8h00 - 22h00)</li> <li data-v-23d47c0c>Gọi mua hàng<strong data-v-23d47c0c> 1800.2097</strong>(8h00 - 22h00)</li> <li data-v-23d47c0c>Gọi mua hàng<strong data-v-23d47c0c> 1800.2097</strong>(8h00 - 22h00)</li></ul> <div class=\"box--warranty\" data-v-23d47c0c><a href data-v-23d47c0c><div class=\"box--warranty__left\" data-v-23d47c0c><p data-v-23d47c0c><strong data-v-23d47c0c>Đối tác dịch vụ bảo hành</strong>Điện Thoại - Máy tính</p></div> <div class=\"box--warranty__right\" data-v-23d47c0c><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 266.667 50\" data-v-23d47c0c><defs data-v-23d47c0c><pattern id=\"pattern\" preserveAspectRatio=\"xMidYMid slice\" width=\"100%\" height=\"100%\" viewBox=\"0 0 688 214\" data-v-23d47c0c><image width=\"688\" height=\"214\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArAAAADWCAYAAAApdrHYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAINxJREFUeNrs3X9oZNd99/HvVSRPZK0G7QjRpERg86wtIkzpOjgDJU5MvSC6CUYllVwoG7LIVrpWCd3okep/VkLaf5YVqkLoRk9kD0stCrHUYNUkm4rKxs2aNpMQOxh3bK0feIrVxHbGuivfkXZWO7Nznj92RpG0M9Kc+2Pm3pn3CwbMenTnzLnn3vu5Z849x1BKCQAAABAUDVQBAAAACLAAAAAAARYAAAAgwAIAAIAACwAAABBgAQAAAAIsAAAACLAAAAAAARYAAAAgwAIAAIAACwAAABBgAQAAAAIsAAAACLAAAAAAARYAAAAgwAIAAIAACwAAABBgAQAAAAIsAAAACLAAAAAAARYAAAAgwAIAAIAACwAAABBgAQAAAAIsAAAACLAAAAAAARYAAAAgwAIAAIAACwAAABBgAQAAAAIsAAAACLAAAAAAARYAAAAgwAIAAIAACwAAABBgAQAAAAIsAAAACLAAAAAAARYAAAAgwAIAAIAACwAAABBgAQAAAAIsAAAACLAAAAAAARYAAADQ0UgVOJcc7FdND9wnDUeOSNMDn5eG1vBd78l+8D9y+4PfSPbDj+T2B0npmFsw/PpdRERCxx/aW/58uUXEt2UHAAD1wVBKUQuazPEhFTr+sIS+8CVp7OyyvZ1MIi43f/UfcuvXb0n79GWjGt+j6dgxuefBbglFe7T+NmeZknnnl7L9Rly233ybUAsAAAiwfgytzY8+Js0n+jzZfs4yJf3qS3LjyrKnYXBjalS1fPXr0tQd9aT8N6++XpUwDgAACLDIs2Yn1b1fe9JRT6uuTCIuqRdfkMjEJVeCYHKwX917skdaegcqUv7s2qrc+PGLEj4zRpAFAAAE2EoG1yN/9TfSEI5UrQzZtVX55LsXbPdoJgf7VXhgQHt4gFtylimb//QPBFkAAECA9VJysF8dPXe+oj2uh9mOL0so2qMVAreWYqpSPa7lBNmN6XOu9SgDAAACLLWQl5qfUa2nzvqybDnLFOsHF6Rt5OKBIXB9+LQ6Oj5d1Z5jN4M4AAAAAbaETCKu3H6wyQvplUVpPtFnlPh/yquHzNwM4tcnhnnQCwAA2Fb3CxmsD59WOcsMRHgVEWk+0Sfrw6dVsQDu9/AqItIQjkj79GVJzc9w5wQAAGyp6x5Yc3xIRSYuBa3Md40lDUrv8X5bSzFp6R2gJxYAABBgCa/BcdCQCAAAgGLqcggB4dU/mk/0SXplkeEEAACgbHXXA5sc7FcdcwuEV59hOAEAACDAlpCzTOXHKabqObwWWLOTLHoAAAAOVVdDCDKJOOHVx8JnxiQ52M9wAgAAcKC66YG1ZidV+MwY4dXncpYpDeEIvbAAAIAAKyKB+aL1Gl4LmJkAAAAcpC6GEGzHlwmvAdJ8oo+hBAAAoKSa74EN0pRZhNffy66tSmNnF72wAADgLjXfAxt+6tuE1wBq7OwSc3yIXlgAAFBfAdYcH1KNnV2EV24+AAAAATYYWp/8BuE1wOiFBQAAdRdg/R4CCa+Hazn5BJUAAADqI8Cm5md83XNHeC1PKNpDJQAAgPoIsM2PnSS81oiNqVGGEQAAgB21PI2WL79YLYXXTCIuudSG572kmURcmrqjTKkFAABEpEZ7YP3aY1dL4dWanZTUiy9U5Cd+eqYBAEDNB9jQ8UfqLrxmEnHZmBqV5GC/mONDsrUUk+zaquvfY2spJiJiZD/8SCq5QMT68GmGEQAAABERaazJAPvFx+smvGbXVuX6+XPSMbdgtJXY3sbUqAodf0RCX3xcGsIRW5+Rfu2KtJ46a7T0DsjG1GjFVzdrOnY/RysAABCR2h0D65sv5WV4Tc3PSOups9pjQ9eHT6umY/eLcaRV7nmw+67/n0tZknnvHcn3su7ZfnplUTWf6Kt4PW7HlyUU7WEcLAAAqL0AmxzsVx1zCzUdXnOWKdcnhqV9+rJR4vu7HvQ2pkZV+FvP2urBdQMPcgEAgIKaGwPb0Nri2/Cas0zH4TWTiEtDOGLsD68bU6MqZ5mF8K5ylqm2lmLKjbGj2fffVW0jF6sWXkV4kAsAAPxezfXAWrOTKnxmzJfh1WkALDVkYDu+rA6bDSCTiMuta2/L7Q9+I9tvvi0iIrt7apOD/UpEpOmB+6Tpfz0gN3/xC2m/8JwhIrL+7NPq6PiMNDQfqXp75ZAFAAAE2ACE15xlysb0ubu2uz58Wh0dn/akZzSX3pTrE2f9FmIJsAAAgADrpmIPGmXXVlVjZ5ftbZYa+5man1Gtp856+n38FmKTg/3ixfhej29oVMvJJ8p+fzkPqqXmZ1Sxh++cbBNVOV+UffK9dS2h9cCml9sGbZJ2E7z9tXXl5bs6wYKukSbgnlC0RzamRlXbyMWdRtLY2WXYDbGlhgxkEnHPw6uISEPzETk6PiPrzz6t2i88Z7RfeM7w0XCCYBxgn/kDrcUeynkI754HuyuygAS8P18EcduoTX56ABru76/tN+I1VwcNNAN3tY1cFHN8aM9dUWNnl7EdXy57G9m1VUkO9t8VXpOD/cqNB8HshlgRkfYLzxnXJ85KLr3JzgYAAATYmgmxw+fvWjkqFO0xNqZGJWeZJf8uZ5lizU5KY2eXsb8XzpqdVB1zC1WZCcAvITZowwcAAAABtizZDz+qfqWGI9I+ffmunti2kYtGQzhimONDkl5ZlO348s7LHB+ShnDECJ8ZKzpkoNozK9ATCwAACLAeuf1B0jdliUxcktT8jCry70bziT4jFO3ZeRUbXG3NTlZ8yAAhFgAAEGArzG8/M7eeOivZtVVVmGe1HMnBfpVdW1XhM2NVXTzATyE2k4hztAIAgNoMsH7U2NklHXMLkknE1f5hBbuZ40Mqk4irjrkFcTL1Vi2G2Oxv36chAQCA2g2wOk/8V1JTd1QiE5dERFQmEVfb8WW1HV9WmURciYiKTFwKzJKplQ6xmffe4WgFAAAiUqPzwN66lvD9PIhBCarlhliv54ktLH+LOxNS68zpV+0HAAH4X8fcgmHNTpY91C374UfMNxyg/VWL19DaDLC/fkvkFA28lkIsU2j9Xq2tpgLAH4rNggP2l2/zRy1+qfbpyxyEVQqxIu4PJ/DrkBAAAECAdVV6ZZG9WyMhNv2zV6ryndaHT6vU/IzKrzdd9JVJxNXWUuzAh/NqUTl1k7NMtR1fVtbspNq/sIdfmONDamspprJrq0W/Q3ZtVaVXFutu/4qIpOZndsbnF3sV9m01y7gxNarSK4sHtsPt+LLaWoqpjalR3+xDa3ZSbceXS7a7nGWq9Mqir8oM+I2hVG0eH+vDp1X79GX2cIXl0ptyfeKstF94zhARcWk4QUV71LeWYqr5T/9cewqznGVK+tWXpKV3wNh9odIZg5oc7D90uERqfkbd82B32dsMRXuMatdNoX62/uUf71oi2Yl8cNGuh42pURX+1rPa32NrKbZn/5YbBIvtL53xgznLlMw7v7y7PFdeLjWkRGnU4U7dJAf7VXhgQHts43Z8WaxYrCJDfazZSXXv1560PVNLdm1VNn8Yk7aRixU9r5jjQyr81LdtlTu9sijNJ/oMu23/1rVEWcedW9vU2Y6Tc9TG1Khq/vLj5bfTN+JFf3Y3x4dUy8knPC1vtffXAeeK4FJK1ezr9ifrCpV3+0ZKffx3T6nCfvj4755St2+kbG3rxr8tqEq1F+uFv3fn+3+yrq5fHFFKKfnk+xNaf/u7p/sO/b43f/6vukXyTd0U5Lfnxn7Trod8m3Jl/5bzsrG/ypZvX47qJV8+WR97xnF5Nl963rPj9ZPvTyg3z+m3P1k/qP5ce338nW+qzPvverG/tffxQa/8uceVberup4+/801b+0G3Xkt9jhfnaTeOSTf3VyXaeqVfNT0P7OY//QNdolXg5nCCGz+9UpEyZ9dWVeups+58/3BE2kYuytZSLPA/byQH+1XOMl2rmwI7C3y4IZOIq+YTfezfIj1Q+Sn+HGnpHZD8sAPX26DbC7s0hCMSPjPmaTtMryyq9unLrs3rHT4zFoh2l371Ja333/PHf2Trc3TqNWeZPB9Ta1mjlr9c+MyYkbNM9nJAQ2x2bdXzE445PqRylqm8WDiipXdAjvzV3wR2H25MjaqOuQXPVoMrLPBRqfGlW0sxV5dlbukdqIkQ+6k/vE/cCK8FTd1R1+rFmp30tA3ubodujzd142apVLsrtkS5n+gOs2l+7KSttuFlqAYBturohQ1uiLWe/56n5Sv0Onl5cfTbUsA6Ya9t5GJFPisycakiQbCld8CTbQb9QRuvbt6c1svWUkxVcg5jN3vVM4m48nKub7d/EfFCdm3V0zbY/JUe3TZJ7ysBNljohQ1miM0k4p4POG8bPs8OKiI1P6O8CHu1GgTD33qWRuNyvWwtxSreBgvt0GmI9Tq8BsWNH7+o9X7d41+njnXCNAiwvrIxfY49HbAQu/HdaU/LlLNMFdTeUS+Z40OqWr07bSMXxa/TbR3YvsMRqfZ0UrVUL9bsZFXCqxs3U+mVRcJr4QZGc5L9lq9+3bOwqxumQYD1jcjEJYPJ8IMTYlPzM55Ox5NeWSS8lj5Wqvr5R8enA1lv937tSRpPEbpjwJOD/coPSx+3jVwU3Qe7zPEhT8a8BlkmUf6S1zrBP3T8EU/DNAiwvhKK9jCUIAAhNru26uo8ocUukFxkSl5sqt6L2BCOaM8h6QdejCOtiWM+HNEKgkfP+WdYj25ZGJJ0t62f/Ejr/eU+0KlzDtcJ0SDA+tb1ieGKfVZ2bfXO5N6zk7K1FGM51DJDbGNnl6d3yuGBAXZCERtTo9o/feYsU1LzM5Ic7Be5s9jEntf68GnZWorZudkM5FCCUhffULTHSA72y/6X5s2FFNtGEHqWQscfKut91uyk8tONQGNnV9lDIKzZSX7VKRbqNReLaH70MddCrt0QjQCp5YUMKjEhu+7E++tjzygWWCi+2IE5NeLpRMu6Ez8Xm1w6P9l70f3qxoT11VrIQLdN6i4wceu/fq61/fz73V7IYEfm/XeL7sv1sWeUblkdTBTu6sTmbtVLsUUa1seesT0Zf7ltxcl5sdSx6fS4zJepKmV387xS6YUMdr9sLBxy4Pbyi2W4ev5jIYNgvuouwNo8AMo60ek0ai/KEPQQ69f9nnn/3bL37e+e7nO06k41AqzuCkx2V1vSDYZl1rknq0XZaStehsxKBNhybhrshPtyyp4PzZ4dm797us92x0GpcGn3+Nl9zSh3BaqPv/NN5TQkVyvA6tbPYXWiUw/l3jwRYFmJKzBaegcMOz9tHvRTakM4YhR78Cg52F90lRe3yxDk4QTJgb+oyM/FzX/659p/k0nEpbGzyyj3obKOuQWjsbPLCNK4q9Ynv6E1NMbufIpN3VGtv7v3ZI/r37Xc8rf0Dhj1NPVOzjLL2j9N3VHtZwk+9Yf3HfqeI3854Omx2TG3YDSEI7aOy8OOj3J+9i51zSh3oZb26cu2y19tkYlLWm3m049+qeT/Wx8+rTVUI331NX5mr+UMUa9f3K0AWTgR7T/IsmurSkRUx9yCdMwtiIio/fMLtvQO1P3sCOnlF6Uj9s+ej+NLDvZrj1HLJOLaoWv3hT4oFxudsa9OF5fQOebs3HC4Wf70a1fq5ji0fnCh7PfqLg5TzrhW3bGv2bVVW8emnQB+2PGh+1BosWuGl+X3xXleYxWsg457nSVnc5bp+VziIMAGNsQWOxFtLcVKrn3d0jsgOcvcE2JD0Z66PcC2lmIVWx2l6YH7bF0snHym13PZukH3gQinFwSd/e3FQzE65b959T/r5ljUedjG7QfH7CwlfP28/bm97TzMW+qhQt2ptnRvFoqeVwI4r/nNq6+LG8e9zpKzLB1b+xrrvQLyIVZ74uxS4fWw7TSEI5JdW1W7n7bPB7m6Dq9bSzF1z4MPOQ6NpQNsl53yOfrMjrkFYzu+rELRHt/uh9Dxh7Xe78YUVzr1sTE1qnSfZC4lu7aq1dOX/2maBQq8vrk8dky3DTqaJ7p9+rKhu1pW07H7Xbkxzq6titP2HJm4ZOSvIYHZx+3Tl7XKnJqfUcWmU9T5zjevvl5319V600AV6PfE2g2vuw/C3b0OOnentRpeW3oHpKk7Kqn5GU8CQ+NnP+dZj8FBNhd+6O87WM16CUV7HL90fOozn3Xtu97+7X9zsivCzlAXN4fH3PNgt97548rLjj8z9eILeu3+4eJht+HIEa3tuDUsZfOHwXt+Que7F+tp1VnVLbu2KuWOLwYBtm5CrNPwuvN5J5/Yc3da7+G1oPXUWV/MAerWPvH7vi3nAZtq0g030JdLbVTkb9zixrhGt8ZGlgq2pW+M3RmWknkveDdjOgvUFOtpbf5K+Te/9TR+nQCLskKsW+G1Xh0WXgu8WE7Uzz/jVxMrSKHa6unYdGuJbC+X2vaSzsweG1OjezoydIZ8eLmaIwiwgQuxhNfKhFeRO+OEvRpKUA5WTQP8iWMz2HSGPrR89eslw+xBWDq2fjRSBSVD7E7A8iK85lLW/rvNPT8LhY4/JM1f6RHd5T2DHl533UFXrbz01gL+xLEZbPkH2MoKo7uvfaHjj5R/vfnJj6StBq6bOBw9sAeHWM96XjcXFu86sDvmFnZe4TNjRlN31EgO9gf6jtJOeN39XrfKwV054E/1dGzamXarnvd34WFnnbl23Zq1BATYwIdYL8KrzjQwHXMLRlN3NJCrdjkJr/n6d60sug+duPUgmR8eSDusLfrZ/l8qUHuqcWzamXu2mFvXElrvtzMftZflrwadGSCaH31M67tW6nzm1n6EMwwh0AtkjsNrJhEvunjBxtSoCh1/RBpaw3LrWkJu/fqtPU+w51ftUkH5Cc1peN33d47vqLMf/I+ENN5/0HKGOu79s5O+3k86ATGTiFd8cYagPqwCfx+bu2eBKSsYvREvOnxBbab0PnfXuM5Klt9P8jNAlBVKm0/0SW6z/HPU1pWXKzLMRHf6tORgv8qvyAkCbHDD6/6J+vMTtUvbyMWdfwtFe0ROieQn2zZ2/buRs0zlxQpFfgyvIu4tJ3r7g9/oXSBc6v3VXWay0jLvvSPNJ8rsdeiOEijhQRtcreixaSdMZD/8qHjZ/+//09pOU3e08PlGJcvvN+mVxbLPjTr7u1JLxxpHWvX2Oz223txIUAXVC69bSzG1O7gWO9ll11b33KnqrkMe5PAqcmdGAjd+Ltt+8207+0w53Oe+/5lPd1lQvw+JQPDYGbPo5Nhq+1v9pWRLBSM78zwfPXfeWX3ZKL/vAuzV1zy59thV6gallE9/4U/0OjK+/DgHugfoga1ieC1nu42dXXt+Rs8HDuXTunI1vO4c/I8+5ngbdpYFbeqO2h7CEKQp1vIPKpYXeAf+2tFn6TzEQm9v/dBd5tfusZleWVS6v4ocVjbdsjd2dt3165qX5fejyMQl139NdLJ07O0Pklrv1+lJZ/iAh5RSvEq8Nl96Xjl1679+rlza7s7f57fpK/nv5Grdlfr+dl83/m3B1gff/Pm/an2+k/3zu6f7Dv2sfHlcqzvrhb/X2tgn35/Q3h/rY894Uhde7scKbD+o2656G7RTdrvH5fWLI8qLshe7Nnh1XimnnvLHm9fHkyfXiNufrDsqi+5319l/mfff9cX+snPe9vuLIQQlWLOTVe15Pajn6ta1t31VV171vO7mxk/XN35qb3nBULRHcpapDltcIT/tlwra3L26q9aEz4xprUu+MTWqIhOXtMqkM1MHgs/uyknlHJup+RmVs0zbx+VhQxzslj1fHnXYdIFOy+9XN664N2PA1r/8oxu/0Gnvv+zaqip1bTLHh1TOMhWrHXqHAHvARdov4dXPKhFeRUSajt3veBvt05cNnaUM9xwo4UhhcQUlImo7vrzzKvxbkPet7vix8Jkxya6tqoPGJ68Pn1bb8eUDx3mXvIGMxQT1xe4Yxv3HZiYRV/kxskpEVOups2L3p+rU/EzZN1x25c8bKmeZe84r+ecfHJXfzzrmFmyfj926idgtZ5naf9PY2SXt05dl9zWh0PYiE5dqcr/5CWNgiyjMDOCn8Lr7DrHxs5+rq/AqIhJ62J3eB+v574lub2DR8tTYikAtvQPaY9IaO7sKdamya6ty+7f/vad+8id2W+2K3tf6Y6cNFr3ZdamnMmeZZQcjKxaTDofnhIZwpO5WGku/dkVaTznrodQdg1yyLK++5GiGC1aJqzx6YIs1RI1l6yoRXvffpYaiPUZysF/Wh09Lan5G3LqL9Wt4FRFp+vwjrmwnMnHJYD314q5P2H+6ubGzS0LRnp2Xk9Dgxry/CCbrBxcCeTx0zC0EcrGZanOj5/TGj190pSw3r77ODiHA1kCltIZ9E15FRDZ/GCt6wmyfvmy0njprNHZ2Geb4kK2fQIIQXgu9E67doNyZT5eGvk/79GWj3J9MvbL+v/+aHVHH2kYu+iIIbi3FtKfIyvcgsxNtXDed0J0K8KDzXzU6g0CAddX2G3FbB6EX4XVrKVbWPImRiUtGQzhieL2ueDXCa4Gb64g76W2sZa2nzlYtQJjjQwwdgLT0Dnh+HjtIemXR9q8A3IDZuKb85EdVC793XRfOn2OHEGADHmA1J733MrzuP5EmB/uVNTu589r/N03dUc96AaoZXt3WPn3ZMMeHaOwlAkSlQ6w5PlSxVXTgf03d0aqE2PwKUbbbYcfcAucVTXYWsihIvfiCq2VhKAgBNvA65hbKHidZyfC6HV9WHXMLEj4ztvOSItOweNG7WEvhtSAyccnzi01Qx9tWMsQSXlEqxFYyTGwtxRyFV84rlf8+Xpw3vPoFoJq/KhBg60wo2nNoI65keM0k4qrUwzEtvQOyO8S6PZanFsPr7hPg+vBpT8YPZxJxCUV7AhvMWnoHjI2pUc/GVufbqEF4xWFt0Es5yxRzfMjVhwcjE5eM5GA/55VyrzFXXtb+m/TKoqc3T24GzvTKoqT/nYeHCbA+6AHIWaZYs5MVDa+HTQ2z/3PdejKzlsPr7sDfEI64OjvBdnxZ7CwV6TdtIxddrxuRO/NrNnZ2EVxRVhsUEU9mD9laiklDOOLJTVTH3ILREI4YbgatYp0mtdKRoB0Kr77m+fXfjTaXScRd6dkHAdZWD4CIGMnBfim8GsIRY/+Tj26s3GU3vO4uw06AetP5al31EF53K0xP5uSklbNM2ZgarbkekkLdOL0Y528IDTemz0F9KbRBp8MKcpa50w4rMWVb84k+V84rxTpNaonOfs1ZZkWGHYWiPYY5PmR7qsrU/ExN77NqM5RS1II7lNOD10l4FbnT61cITsnBftUxt1BT4TU52F/Rp9Q3pkZV85cfl6bPP3LgNF7ZtVXZ/tXrsv3mG3UzlnNjalSFjj8ioS8+fmjdZFbfkvTV1xjnCleZ40MqdPxhuefBhw5dvGA7viy3riXk1q/f0p4ey6vzymHzJecsU7Z/8QrHjk+sD59Wn370SxL6wpcOXDghk4jLzV/9h3CTToANyp2jo3DnRngt3O0VDhonAdZOeM0k4pJLbXi6GkmlA2yRz7/rYGHaJ+oG/m2HQWiDHDuc80CArRo7YdPt8Jrvkdi5U7e7HK5OeM1ZpmxMn7urdyA52K/CAwNehFlODgAAgADrEluV6GZ4za8HvWdbhZ95m0/0uR5ey3mYwBwfUpGJSwRYAABAgPUbO6HTzfCas0xpCEcODHfplUV1UJB1O7zuDtF2eoKdfCYAAKhtzELgglvX9J74r3R4FbnzJGyppzx1x7xufHe67PK1jVx0ZU5a3ToGAAAEWBxAZyqWSoTXwjKzG1Ojan8590/lohteM4m49kB16/nvOa7jzHurNDQAACAiDCFwTTnjPb0Or8XCZ4mQq+yEV5G9Mx1octrQGD4AAABEhB5Y1xy0JGlhEupKh1cRkYZwRHKWuSc8plcWbc/zqjZTFa9bN5fFBQAAwUcPrAfWh0+rpmP33wlfH35UdBLqSoTX3XZPsbWfzjy21uyk7F+FrEy2G5qDXl8AAFCDGqkC9x220ovd6aXshlcRkcbP/IE4Da8iIs1f0Z/b1el0WoRXAACwG0MIqqD50ccqGl5FRHKbm47Dq4iInV7jlpNP2K6rTCJOgwEAAATYqld6a7ii4VXkznRWTsPrrlBZ9nAAc3xIOVmRK/XiCzQYAABAgA0SN8KrOT4kboVXkTu9sFtLMVXG5zoaOpBdWy05bhcAABBgUUHpn71S0fC6OwQ6Da8FLb0Dkl1bVevDp4sG2a2lmONlZN2YPxYAANQeZiGokpxlqoZwJJDhtVhZM+/88s4dUWubrXGy+2XXVqWxs4veVwAAQIANQogtFt78Gl69khzs117xCwAAEGBRAdbspAo9/Psey/TPXnH8wFXQw2t6ZVGaT/QRXgEAAAE2iHQfhAp6eGXoAAAAOAwPcflc65PfqJvwKiJy/fw5djoAADgQPbD+V9YOqoXwetBytwAAAATYgDhstoJaCa9bSzFp6R0gvAIAgEMxhMDn0q++RHgFAADYhR7YAMgk4qrY3KqEVwAAQICFb6XmZ9Snv/An8qnPPSDbv3hFbvz0irRPXw50eE3Nz0jrqbOEVwAAQICtRxtTo6pt5GJgyssDWwAAgAALSQ72q6PnzktjZ5dvy8g8rwAAwCke4qohHXMLRmNnl5Gan/Fl+VLzM4RXAADgGD2wNSo52K/a/nZYij38VWnb8WUJRXsIrgAAgACLw5njQyr81LerMqwgk4iLFfs/ex42AwAAIMCiLOvDp9W9f3ZSmk/0ef5Z6ZVF2VxYlI65BYIrAAAgwMK5jalR1fzlxyUU7XE1tKavvsbMAgAAgAALbyUH+1Xo+EPS9MDnpaE1XFao3Y4vSy5lSea9d2T7zbfpaQUAAARY+CfcFv6bkAoAAAiwAAAAgA3MAwsAAAACLAAAAECABQAAAAiwAAAAIMACAAAABFgAAACAAAsAAAACLAAAAECABQAAAAiwAAAAIMACAAAABFgAAACAAAsAAAACLAAAAECABQAAAAiwAAAAIMACAAAABFgAAACAAAsAAAACLAAAAECABQAAAAiwAAAAIMACAAAABFgAAACAAAsAAAACLAAAAECABQAAAAiwAAAAIMACAAAABFgAAACAAAsAAAACLAAAAECABQAAAAiwAAAAIMACAAAABFgAAACAAAsAAAACLAAAAECABQAAAAiwAAAAIMACAAAABFgAAACAAAsAAAACLAAAAECABQAAAAiwAAAAIMACAAAAvvD/BwAIwbMNlwR0FAAAAABJRU5ErkJggg==\" data-v-23d47c0c></image></pattern></defs> <rect id=\"logo-DTV_cn1\" width=\"266.667\" height=\"50\" fill=\"url(#pattern)\" data-v-23d47c0c></rect></svg></div></a> <a href data-v-23d47c0c><div class=\"box--warranty__left\" data-v-23d47c0c><p data-v-23d47c0c><strong data-v-23d47c0c>Trung tâm bảo hành ủy quyền Apple</strong></p></div> <div class=\"box--warranty__right\" data-v-23d47c0c><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 266.667 50\" data-v-23d47c0c><defs data-v-23d47c0c><pattern id=\"pattern\" preserveAspectRatio=\"xMidYMid slice\" width=\"100%\" height=\"100%\" viewBox=\"0 0 688 214\" data-v-23d47c0c><image width=\"688\" height=\"214\" xlink:href=\"data:image/png;base64,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\" data-v-23d47c0c></image></pattern></defs> <rect id=\"logo-DTV_cn1\" width=\"266.667\" height=\"50\" fill=\"url(#pattern)\" data-v-23d47c0c></rect></svg></div></a></div></div> <div class=\"footer--top__col-1\" data-v-23d47c0c><ul class=\"footer--col-1__list\" data-v-23d47c0c><li data-v-23d47c0c>Mua hàng và thanh toán Online</li> <li data-v-23d47c0c>Mua hàng trả góp Online</li> <li data-v-23d47c0c>Tra thông tin đơn hàng</li> <li data-v-23d47c0c>Tra điểm Smember</li> <li data-v-23d47c0c>Tra thông tin bảo hành</li> <li data-v-23d47c0c>Tra cứu hoá đơn điện tử</li> <li data-v-23d47c0c>Trung tâm bảo hành chính hãng</li> <li data-v-23d47c0c>Quy định về việc sao lưu dữ liệu</li> <li data-v-23d47c0c>Dịch vụ bảo hành điện thoại</li></ul></div> <div class=\"footer--top__col-1\" data-v-23d47c0c><ul class=\"footer--col-1__list\" data-v-23d47c0c><li data-v-23d47c0c>Quy chế hoạt động</li> <li data-v-23d47c0c>Chính sách Bảo hành</li> <li data-v-23d47c0c>Liên hệ hợp tác kinh doanh</li> <li data-v-23d47c0c>Khách hàng doanh nghiệp (B2B)</li> <li data-v-23d47c0c>Ưu đãi thanh toán</li> <li data-v-23d47c0c>Tuyển dụng</li></ul></div></div></div> <div id=\"footer--bottom\" data-v-23d47c0c></div></footer>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/Footer/Footer.vue?vue&type=template&id=23d47c0c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Footer/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: "Footer"
});
// CONCATENATED MODULE: ./layouts/Footer/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/Footer/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23d47c0c",
  "5a28dd4a"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Header/Header.vue?vue&type=template&id=1006e204&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"container"}},[_vm._ssrNode("<header id=\"header\" class=\"header\" data-v-1006e204><div class=\"cps--container\" data-v-1006e204><ul class=\"header--list\" data-v-1006e204><li class=\"header--list__link\" data-v-1006e204><a href data-v-1006e204><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"269.231\" height=\"50\" viewBox=\"0 0 269.231 50\" data-v-1006e204><defs data-v-1006e204><pattern id=\"patternLogo\" preserveAspectRatio=\"xMidYMid slice\" width=\"100%\" height=\"100%\" viewBox=\"0 0 530 95\" data-v-1006e204><image width=\"530\" height=\"95\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII=\" data-v-1006e204></image></pattern></defs> <rect id=\"header__logo--bg\" width=\"269.231\" height=\"50\" fill=\"url(#patternLogo)\" data-v-1006e204></rect></svg></a></li> <li class=\"header--list__link\" data-v-1006e204><a href class=\"header--item category\" data-v-1006e204><div class=\"category--icon\" data-v-1006e204><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26.99 26.99\" data-v-1006e204><defs data-v-1006e204><style data-v-1006e204>.cls-1 {\n                    fill: none;\n                    stroke: #fff;\n                    stroke-linecap: round;\n                    stroke-linejoin: round;\n                    stroke-width: 1.8px;\n                  }</style></defs> <g id=\"Layer_2\" data-name=\"Layer 2\" data-v-1006e204><g id=\"Layer_1-2\" data-name=\"Layer 1\" data-v-1006e204><line x1=\"7.06\" y1=\"7.52\" x2=\"19.92\" y2=\"7.52\" class=\"cls-1\" data-v-1006e204></line> <line x1=\"7.06\" y1=\"13.49\" x2=\"19.92\" y2=\"13.49\" class=\"cls-1\" data-v-1006e204></line> <line x1=\"7.06\" y1=\"19.47\" x2=\"11.95\" y2=\"19.47\" class=\"cls-1\" data-v-1006e204></line> <rect x=\"0.9\" y=\"0.9\" width=\"25.19\" height=\"25.19\" rx=\"4.71\" class=\"cls-1\" data-v-1006e204></rect></g></g></svg></div> <div class=\"category--content\" data-v-1006e204><p data-v-1006e204>Danh mục</p></div></a></li> <li class=\"header--list__link\" data-v-1006e204><a href class=\"header--item location--box\" data-v-1006e204><div class=\"location--icon\" data-v-1006e204><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 23.22 30.36\" width=\"25\" height=\"25\" data-v-1006e204><defs data-v-1006e204></defs> <g id=\"Layer_2\" data-name=\"Layer 2\" data-v-1006e204><g id=\"Layer_1-2\" data-name=\"Layer 1\" data-v-1006e204><path d=\"M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z\" class=\"cls-1\" data-v-1006e204></path> <path d=\"M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z\" class=\"cls-1\" data-v-1006e204></path></g></g></svg></div> <div class=\"location--content\" data-v-1006e204><p data-v-1006e204>Xem giá tại</p> <p data-v-1006e204><span data-v-1006e204>Miền nam</span> <svg fill=\"#FFFFFF\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" width=\"10\" height=\"10\" data-v-1006e204><path d=\"M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z\" data-v-1006e204></path></svg></p></div></a></li> <li class=\"header--list__link search\" data-v-1006e204><form class=\"search--form\" data-v-1006e204><div class=\"group--search\" data-v-1006e204><div class=\"button--search\" data-v-1006e204><button type=\"submit\" data-v-1006e204><div data-v-1006e204><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"search\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-search\" data-v-1006e204><path fill=\"currentColor\" d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\" data-v-1006e204></path></svg></div></button></div> <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" data-v-1006e204></div></form></li> <li class=\"header--list__link\" data-v-1006e204><a href class=\"header--item phone--box\" data-v-1006e204><div class=\"phone--icon\" data-v-1006e204><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30.83 30.94\" width=\"24\" height=\"24\" data-v-1006e204><defs data-v-1006e204><style data-v-1006e204>.cls-1 {\n                    fill: none;\n                    stroke: #fff;\n                    stroke-linecap: round;\n                    stroke-linejoin: round;\n                    stroke-width: 1.8px;\n                  }</style></defs> <g id=\"Layer_2\" data-name=\"Layer 2\" data-v-1006e204><g id=\"Layer_1-2\" data-name=\"Layer 1\" data-v-1006e204><path d=\"M6.78,20.27a31,31,0,0,0,10.29,8.06A15.91,15.91,0,0,0,22.82,30h.41a4.77,4.77,0,0,0,3.7-1.59,0,0,0,0,0,0,0,14.62,14.62,0,0,1,1.17-1.2c.28-.28.57-.56.85-.85A2.91,2.91,0,0,0,29,22L25.33,18.4a2.94,2.94,0,0,0-2.13-1,3.07,3.07,0,0,0-2.15,1l-2.16,2.17c-.2-.12-.4-.22-.6-.32a6.74,6.74,0,0,1-.66-.36,22.82,22.82,0,0,1-5.47-5A13.11,13.11,0,0,1,10.32,12c.56-.52,1.09-1.05,1.61-1.58l.55-.56a3.07,3.07,0,0,0,1-2.17,3.08,3.08,0,0,0-1-2.18l-1.8-1.8L10.07,3c-.4-.41-.82-.83-1.23-1.21A3,3,0,0,0,6.72.9a3.07,3.07,0,0,0-2.15.94L2.31,4.09a4.64,4.64,0,0,0-1.38,3,11.09,11.09,0,0,0,.84,4.83,28.11,28.11,0,0,0,5,8.37Z\" class=\"cls-1\" data-v-1006e204></path></g></g></svg></div> <div class=\"phone--content\" data-v-1006e204><p data-v-1006e204>\n                Gọi mua hàng\n                <br data-v-1006e204>\n                1800 2097\n              </p></div></a></li> <li class=\"header--list__link\" data-v-1006e204><a href class=\"header--item phone--box\" data-v-1006e204><div class=\"phone--icon\" data-v-1006e204><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 23.22 30.36\" width=\"25\" height=\"25\" data-v-1006e204><defs data-v-1006e204><style data-v-1006e204>.cls-1 {\n                    fill: none;\n                    stroke: #fff;\n                    stroke-linecap: round;\n                    stroke-linejoin: round;\n                    stroke-width: 1.8px;\n                  }</style></defs> <g id=\"Layer_2\" data-name=\"Layer 2\" data-v-1006e204><g id=\"Layer_1-2\" data-name=\"Layer 1\" data-v-1006e204><path d=\"M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z\" class=\"cls-1\" data-v-1006e204></path> <path d=\"M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z\" class=\"cls-1\" data-v-1006e204></path></g></g></svg></div> <div class=\"phone--content\" data-v-1006e204><p data-v-1006e204>\n                Cửa hàng\n                <br data-v-1006e204>\n                gần bạn\n              </p></div></a></li> <li class=\"header--list__link\" data-v-1006e204><a href class=\"header--item phone--box\" data-v-1006e204><div class=\"phone--icon bill\" data-v-1006e204><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 44.22 25.85\" height=\"24\" data-v-1006e204><defs data-v-1006e204><style data-v-1006e204>.cls-1, .cls-2, .cls-3 {\n                    fill: none;\n                    stroke: #fff;\n                    stroke-linecap: round;\n                    stroke-linejoin: round;\n                  }\n\n                  .cls-1 {\n                    stroke-width: 1.66px;\n                  }\n\n                  .cls-2 {\n                    stroke-width: 1.66px;\n                  }\n\n                  .cls-3 {\n                    stroke-width: 1.8px;\n                  }</style></defs> <g id=\"Layer_2\" data-name=\"Layer 2\" data-v-1006e204><g id=\"Layer_1-2\" data-name=\"Layer 1\" data-v-1006e204><circle cx=\"7.66\" cy=\"22.02\" r=\"3\" class=\"cls-1\" data-v-1006e204></circle> <circle cx=\"24.79\" cy=\"22.02\" r=\"3\" class=\"cls-2\" data-v-1006e204></circle> <path d=\"M28.61,22h4.13a1.44,1.44,0,0,0,1.44-1.44v-6\" class=\"cls-3\" data-v-1006e204></path> <path d=\"M27.12.9H14.82a1.44,1.44,0,0,0-1.44,1.44V20.58A1.44,1.44,0,0,0,14.82,22h6.29\" class=\"cls-3\" data-v-1006e204></path> <path d=\"M10.27,5.92H6.75A2.65,2.65,0,0,0,4.54,7.11L1.33,12A2.64,2.64,0,0,0,.9,13.47v6.46A2.1,2.1,0,0,0,3,22h.75\" class=\"cls-3\" data-v-1006e204></path> <path d=\"M34.18,3.47V2.34A1.44,1.44,0,0,0,32.74.9H25.08\" class=\"cls-3\" data-v-1006e204></path> <line x1=\"43.32\" y1=\"6.97\" x2=\"32.57\" y2=\"6.97\" class=\"cls-3\" data-v-1006e204></line> <line x1=\"40.5\" y1=\"11.05\" x2=\"32.57\" y2=\"11.05\" class=\"cls-3\" data-v-1006e204></line> <line x1=\"42.09\" y1=\"16.33\" x2=\"38.07\" y2=\"16.33\" class=\"cls-3\" data-v-1006e204></line></g></g></svg></div> <div class=\"phone--content\" data-v-1006e204><p data-v-1006e204>\n                Tra cứu\n                <br data-v-1006e204>\n                đơn hàng\n              </p></div></a></li> <li class=\"header--list__link\" data-v-1006e204><a href class=\"header--item phone--box\" data-v-1006e204><div class=\"phone--icon\" data-v-1006e204><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28.95 35.07\" width=\"25\" height=\"25\" data-v-1006e204><defs data-v-1006e204><style data-v-1006e204>.cls-1 {\n                    fill: none;\n                    stroke: #fff;\n                    stroke-linecap: round;\n                    stroke-linejoin: round;\n                    stroke-width: 1.8px;\n                  }</style></defs> <g id=\"Layer_2\" data-name=\"Layer 2\" data-v-1006e204><g id=\"Layer_1-2\" data-name=\"Layer 1\" data-v-1006e204><path d=\"M10,10.54V5.35A4.44,4.44,0,0,1,14.47.9h0a4.45,4.45,0,0,1,4.45,4.45v5.19\" class=\"cls-1\" data-v-1006e204></path> <path d=\"M23.47,34.17h-18A4.58,4.58,0,0,1,.91,29.24L2.5,8.78A1.44,1.44,0,0,1,3.94,7.46H25a1.43,1.43,0,0,1,1.43,1.32L28,29.24A4.57,4.57,0,0,1,23.47,34.17Z\" class=\"cls-1\" data-v-1006e204></path></g></g></svg></div> <div class=\"phone--content\" data-v-1006e204><p data-v-1006e204>\n                Giỏ  \n                <br data-v-1006e204>\n                hàng\n              </p></div></a></li> <li class=\"header--list__link\" data-v-1006e204><a href class=\"header--item phone--box s-member\" data-v-1006e204><div class=\"phone--icon\" data-v-1006e204><svg id=\"icon-smember\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 560\" width=\"20\" data-v-1006e204><defs data-v-1006e204><style data-v-1006e204>#icon-smember .cls-1 {\n                    fill: none;\n                    stroke: #fff;\n                    stroke-width: 30px;\n                  }</style></defs> <title data-v-1006e204>Asset 1</title> <g id=\"Layer_2\" data-name=\"Layer 2\" data-v-1006e204><g id=\"Layer_1-2\" data-name=\"Layer 1\" data-v-1006e204><circle cx=\"280\" cy=\"280\" r=\"265\" class=\"cls-1\" data-v-1006e204></circle> <circle cx=\"280\" cy=\"210\" r=\"115\" class=\"cls-1\" data-v-1006e204></circle> <path d=\"M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4\" class=\"cls-1\" data-v-1006e204></path></g></g></svg></div> <div class=\"phone--content\" data-v-1006e204><p data-v-1006e204>\n                Smember\n              </p></div></a></li></ul></div></header>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/Header/Header.vue?vue&type=template&id=1006e204&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Header/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: "Header"
});
// CONCATENATED MODULE: ./layouts/Header/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/Header/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1006e204",
  "451fe90a"
  
)

/* harmony default export */ var Header = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(29);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_23d47c0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_23d47c0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_23d47c0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_23d47c0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_23d47c0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-23d47c0c]{margin:0;padding:0;box-sizing:border-box}#main--footer[data-v-23d47c0c]{margin-top:20px;width:100%;box-shadow:0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15);position:relative;overflow-x:hidden}#footer[data-v-23d47c0c]{width:100%;font-family:\"Roboto\",sans-serif;max-width:1200px;margin:0 auto 10px}#footer--top[data-v-23d47c0c]{background:#fff!important;padding:15px}.footer--top__container[data-v-23d47c0c]{width:1200px;margin:0 auto;display:block;height:100%;position:relative;box-sizing:border-box;display:flex;justify-content:space-between}.footer--top__col-1[data-v-23d47c0c]{width:25%;padding:12px}.footer--col-1__list[data-v-23d47c0c]{margin-bottom:15px}.footer--col-1__text[data-v-23d47c0c]{margin-bottom:10px}.footer--col-1__list li[data-v-23d47c0c]{margin-bottom:10px;font-size:12px}.footer--col-1__list h4[data-v-23d47c0c]{font-size:16px}.footer--col-1__list.link[data-v-23d47c0c]{display:flex}.footer--col-1__list.link li[data-v-23d47c0c]{border:1px solid #dee2e6;width:50px;height:32px;margin-right:5px}.footer--col-1__list.link li img[data-v-23d47c0c]{height:auto;max-width:100%}.box--warranty a[data-v-23d47c0c]:first-child{width:100%;height:50px;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;margin:5px 0 10px;background:#d70018;padding:5px 10px;border-radius:10px}.box--warranty__left[data-v-23d47c0c]{width:60%;display:flex;justify-content:center;align-items:center}.box--warranty__left p[data-v-23d47c0c]{display:flex;flex-direction:column;font-size:10px;color:#fff}.box--warranty__left p strong[data-v-23d47c0c]{font-size:12px}.box--warranty__right[data-v-23d47c0c]{flex:1}.box--warranty a[data-v-23d47c0c]:last-child{width:100%;height:50px;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;margin:5px 0 10px;background:#334168;padding:5px 10px;border-radius:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1006e204_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1006e204_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1006e204_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1006e204_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1006e204_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-1006e204]{margin:0;padding:0;box-sizing:border-box}#container[data-v-1006e204]{width:100%;font-family:\"Roboto\",sans-serif}.header[data-v-1006e204]{background-color:#d70018;height:64px;display:flex;align-items:center;justify-content:center}.cps--container[data-v-1006e204]{width:1200px;margin:0 auto;height:100%}.header--list[data-v-1006e204]{display:flex;align-content:center;justify-content:space-between;height:100%}.header--list__link[data-v-1006e204],.header--list__link a[data-v-1006e204]{display:flex;align-items:center}.header--list__link:first-child a svg[data-v-1006e204]{width:161px;height:30px}.header--item[data-v-1006e204]{background:hsla(0,0%,100%,.2);display:flex;align-items:center;height:42px;padding:3px 5px;border-radius:10px;text-decoration:none!important;position:relative}.header--item .category--icon[data-v-1006e204]{width:20px;height:20px;margin-right:5px}.header--item.category svg[data-v-1006e204]{height:20px}.header--item .category--content[data-v-1006e204]{color:#fff;font-size:12px}.header--item.location--box[data-v-1006e204]{width:120px;display:flex!important;align-items:center;float:left;margin:0 10px;text-align:center;padding:3px 5px;background:hsla(0,0%,100%,.2);border-radius:10px;position:relative;cursor:pointer}.header--item .location--icon[data-v-1006e204]{width:25px;height:25px;margin-right:5px}.header--item .location--content[data-v-1006e204]{color:#fff;text-align:left}.header--item .location--content p[data-v-1006e204]:first-child{font-size:10px;font-weight:700;line-height:15px}.header--item .location--content p[data-v-1006e204]:last-child{font-size:12px;line-height:18px;display:flex;align-items:center}.header--item .location--content p:last-child span[data-v-1006e204]{margin-right:7px}.header--list__link.search[data-v-1006e204]{width:300px}.header--list__link.search .search--form[data-v-1006e204]{width:100%}.group--search[data-v-1006e204]{display:flex;align-items:center}.button--search[data-v-1006e204]{width:24px}.button--search button[data-v-1006e204]{width:100%;background-color:#fff;box-sizing:border-box;height:34px;border:0;border-radius:10px 0 0 10px;color:#707070;display:flex;align-items:center;justify-content:center;padding-left:6px}.button--search button div[data-v-1006e204]{width:18px;height:18px}.group--search input[data-v-1006e204]{width:100%;height:34px;font-size:16px;border-radius:0 10px 10px 0;outline:none;border:0;padding:.5rem 1rem .5rem .6rem}.header--item.phone--box[data-v-1006e204]{background:unset}.header--item.phone--box[data-v-1006e204]:hover{background:hsla(0,0%,100%,.2)}.phone--icon[data-v-1006e204]{margin-right:5px;width:24px;height:24px}.phone--content[data-v-1006e204]{color:#fff;font-size:12px}.phone--icon.bill[data-v-1006e204]{width:40px}.header--item.phone--box.s-member[data-v-1006e204]{display:block;background:hsla(0,0%,100%,.2)}.header--item.phone--box.s-member .phone--icon[data-v-1006e204]{margin:0 auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Accessory", function() { return Accessory; });
__webpack_require__.d(components_namespaceObject, "Banner", function() { return Banner; });
__webpack_require__.d(components_namespaceObject, "FeaturedProduct", function() { return FeaturedProduct; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(16);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(17);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(8);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(9);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _185f7192 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 4).then(__webpack_require__.bind(null, 90)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _185f7192,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "14a9317a"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "0579b82e"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./layouts/Footer/Footer.vue + 4 modules
var Footer = __webpack_require__(14);

// EXTERNAL MODULE: ./layouts/Header/Header.vue + 4 modules
var Header = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Nuxt')}
var defaultvue_type_template_id_0040005c_staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "4f0b73a4"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_Footer/Footer": sanitizeComponent(Footer["a" /* default */]),
  "_Header/Header": sanitizeComponent(Header["a" /* default */]),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const Accessory = () => __webpack_require__.e(/* import() | components/accessory */ 1).then(__webpack_require__.bind(null, 86)).then(c => wrapFunctional(c.default || c));
const Banner = () => __webpack_require__.e(/* import() | components/banner */ 2).then(__webpack_require__.bind(null, 84)).then(c => wrapFunctional(c.default || c));
const FeaturedProduct = () => __webpack_require__.e(/* import() | components/featured-product */ 3).then(__webpack_require__.bind(null, 85)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(18);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || '/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "clone-Web-Cps",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto:wght@100&display=swap"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Funpkg.com\u002Fswiper@7\u002Fswiper-bundle.min.css"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("swiper/swiper-bundle.js");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map