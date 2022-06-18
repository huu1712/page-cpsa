exports.ids = [4,1,2,3];
exports.modules = Array(31).concat([
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/4ba7f6bd581a9844c10b.dee4dcf.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/738b71884a2b8a75d33a.b7b4ba8.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/9b8887e0a443641d3d52.c04d763.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("dafbd982", content, true, context)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0d29dada", content, true, context)
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7e0acf01", content, true, context)
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sliderr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scroll; });
/* harmony import */ var swiper_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var swiper_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0__);

function sliderr() {
  const swiper = new swiper_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default.a(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true
  });
  const swiper2 = new swiper_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default.a(".mySwiper2", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    thumbs: {
      swiper: swiper
    }
  });
  return {
    swiper,
    swiper2
  };
}
function scroll() {
  let scrollpos = window.scrollY;
  const header = document.getElementById("header");
  const header_height = header.offsetHeight;

  const add_class_on_scroll = () => header.classList.add("fixed");

  const remove_class_on_scroll = () => header.classList.remove("fixed");

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });
}
;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner1.4e8fc77.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner2.d251321.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner3.0423f70.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner4.413d9ed.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner5.119eb99.jpg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner6.4ffd288.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/RB_galaxy-A73.e645d88.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2cd6effe925952070b48.ddf801c.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5432f3948c334c6d1522.48b3aaa.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/0677df74b2d3728d2bc2.92bd495.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMC41IDIwLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwLjUgMjAuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzIzMUYyMDtzdHJva2Utd2lkdGg6MS4wNztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOiMyMzFGMjA7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8yXzFfIj4NCgk8ZyBpZD0iTGF5ZXJfMS0yIj4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYuNCwwLjVoNy43YzAuOSwwLDEuNywwLjgsMS43LDEuN3YxNmMwLDAuOS0wLjgsMS43LTEuNywxLjdINi40Yy0wLjksMC0xLjctMC44LTEuNy0xLjd2LTE2DQoJCQlDNC43LDEuMyw1LjUsMC41LDYuNCwwLjV6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03LjgsMC4zaDUuNGwwLDB2MS4yYzAsMC4zLTAuMywwLjUtMC41LDAuNWMwLDAsMCwwLDAsMEg4LjNDOCwyLDcuOCwxLjgsNy44LDEuNWwwLDANCgkJCUM3LjgsMS41LDcuOCwwLjMsNy44LDAuM3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cps-380.92e9bcf.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMi4xIDIyLjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyLjEgMjIuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzIzMUYyMDtzdHJva2Utd2lkdGg6MS4wNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQ0KCS5zdDF7ZmlsbDojMjMxRjIwO30NCjwvc3R5bGU+DQo8ZyBpZD0iTGF5ZXJfMl8xXyI+DQoJPGcgaWQ9IkxheWVyXzEtMiI+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00LjcsMC41aDEyLjZjMS4xLDAsMi4xLDAuOSwyLjEsMi4xdjE2LjljMCwxLjEtMC45LDIuMS0yLjEsMi4xSDQuN2MtMS4xLDAtMi4xLTAuOS0yLjEtMi4xVjIuNg0KCQkJQzIuNywxLjUsMy42LDAuNSw0LjcsMC41eiIvPg0KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIxMSIgY3k9IjE4LjgiIHI9IjAuOSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cps-220.ff124a5.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cps-610.36b71fe.svg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cps-1124.6df52cd.svg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cps-30.fef85fc.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_cpu.5b0c3ba.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cps-tcdm.a3760bd.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cps-29.e28f12b.svg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cps-promotion.bfc77f3.svg";

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_250eed14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_250eed14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_250eed14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_250eed14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_250eed14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-250eed14]{margin:0;padding:0;box-sizing:border-box}#banner[data-v-250eed14]{width:100%;font-family:\"Roboto\",sans-serif;margin-top:1rem}.banner--container[data-v-250eed14]{width:1200px;display:flex;margin:0 auto}.category--banner[data-v-250eed14]{width:205px;height:376px;margin-right:15px;display:block;border-radius:15px;overflow:auto;box-shadow:0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)}.category--banner__list[data-v-250eed14]{padding:7px 0;display:flex;flex-direction:column;justify-content:space-between;height:100%}.category--banner__link[data-v-250eed14]{display:flex;align-items:center;justify-content:center;padding:0 10px}.category--banner__link i[data-v-250eed14]{width:25px;height:25px;margin-right:5px}.category--banner__link a[data-v-250eed14]{flex:1;text-decoration:none;color:#343a40;font-size:12px;font-weight:700}.icon--right[data-v-250eed14]{width:7.5px}.icon--right svg[data-v-250eed14]{fill:#777;font-size:12px}.slider--banner[data-v-250eed14]{width:calc(100% - 500px);margin-right:15px;overflow:hidden;border-radius:10px;box-shadow:0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15);height:375px}.slider--banner .mySwiper2[data-v-250eed14]{height:80%}.main-banner__slidding-item img[data-v-250eed14]{width:100%}.slider--banner .mySwiper[data-v-250eed14]{height:20%}.main-banner__navigation-item p[data-v-250eed14]{height:100%;display:flex;align-items:center;justify-content:center}.swiper-slide-thumb-active[data-v-250eed14]{border-bottom:2.5px solid #d70018;font-weight:700;color:#343a40}.main-banner__navigation-item p[data-v-250eed14]{font-size:12px;text-align:center}.swiper-button-prev[data-v-250eed14]{left:-30px}.swiper-button-next[data-v-250eed14],.swiper-button-prev[data-v-250eed14]{width:30px;height:60px;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.3);color:#fff;top:48%;transition:.3s;outline:none;font-size:14px}.swiper-button-next[data-v-250eed14]{right:-30px}.mySwiper2:hover .swiper-button-prev[data-v-250eed14]{left:0;transition:left .3s ease-in}.mySwiper2:hover .swiper-button-next[data-v-250eed14]{right:0;transition:right .3s ease-in}.swiper-button-next[data-v-250eed14],.swiper-button-prev[data-v-250eed14]{--swiper-navigation-color:#fff}.image--banner[data-v-250eed14]{width:265px}.right--banner[data-v-250eed14]{height:115px;margin-bottom:15px;overflow:hidden;width:100%;display:block;border-radius:10px;box-shadow:0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)}.right--banner img[data-v-250eed14]{height:auto;max-width:100%}.horizontal--banner[data-v-250eed14]{max-width:1200px;margin:0 auto 15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_product_vue_vue_type_style_index_0_id_0115c3c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_product_vue_vue_type_style_index_0_id_0115c3c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_product_vue_vue_type_style_index_0_id_0115c3c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_product_vue_vue_type_style_index_0_id_0115c3c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_product_vue_vue_type_style_index_0_id_0115c3c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0115c3c8]{margin:0;padding:0;box-sizing:border-box}#featured-product[data-v-0115c3c8]{width:100%;font-family:\"Roboto\",sans-serif;max-width:1200px;margin:0 auto}#laptop[data-v-0115c3c8],#phone[data-v-0115c3c8],#tablet[data-v-0115c3c8],.product--heading[data-v-0115c3c8]{margin-bottom:15px}.product--heading[data-v-0115c3c8]{display:flex;align-items:center;justify-content:space-between}.product--text[data-v-0115c3c8]{font-size:22px;color:#444;font-weight:600}.product--list[data-v-0115c3c8]{display:flex}.product--link a[data-v-0115c3c8]{border-radius:10px;background-color:#f3f4f6;border:1px solid #e5e7eb;color:#444;padding:10px;font-size:13px;white-space:nowrap;height:34px;margin-right:7px}.product--slider[data-v-0115c3c8]{display:flex}.product--slider__list[data-v-0115c3c8]{max-width:20%;margin-bottom:10px;margin-right:10px;height:auto;min-height:400px;border-radius:15px;padding:0 10px;box-shadow:0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)}.product--image[data-v-0115c3c8]{text-align:center}.product--image img[data-v-0115c3c8]{width:160px;min-height:100%;margin:20px 0 15px}.product--name h3[data-v-0115c3c8]{font-size:14px;font-weight:600;line-height:18px;min-height:48px}.product--price[data-v-0115c3c8]{display:flex;align-items:center}.product--price__show[data-v-0115c3c8]{display:inline-block;margin-bottom:10px!important;font-weight:700;line-height:1.1;color:#d70018;font-size:16px}.product--price__through[data-v-0115c3c8]{display:inline-block;margin:0 0 10px 10px;font-weight:600;text-decoration:line-through;color:#707070;font-size:14px}.product--promotion__details[data-v-0115c3c8]{width:auto;display:flex;margin-bottom:10px;padding:5px;border-radius:5px;border:1px solid #e5e7eb;background:#f3f4f6;align-items:flex-start;margin-left:0;font-size:12px;line-height:1.5;text-transform:none;overflow:hidden}.product--tessti[data-v-0115c3c8]{display:flex;align-items:center}.product--star svg[data-v-0115c3c8]{fill:#f59e0b;height:12px}.product--tessti span[data-v-0115c3c8]{font-size:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand1.b9ff074.jpg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand2.6004209.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand3.2940fc6.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand4.ed2ce6f.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand5.00fe123.jpg";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand6.ce5e5c2.jpg";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand7.f80d11b.jpg";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand8.5766828.jpg";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-1644.dd5f463.svg";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-43.d0b7e33.svg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-286.802aba5.svg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-108.e86c80b.svg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-114.8d3e29d.svg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-122.ddd7479.svg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-676.7513eb2.svg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-363.d2be8e6.svg";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-663.8c83746.svg";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-109.33eaffe.svg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cate-966.6a71677.svg";

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessory_vue_vue_type_style_index_0_id_13b6395a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessory_vue_vue_type_style_index_0_id_13b6395a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessory_vue_vue_type_style_index_0_id_13b6395a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessory_vue_vue_type_style_index_0_id_13b6395a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessory_vue_vue_type_style_index_0_id_13b6395a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-13b6395a]{margin:0;padding:0;box-sizing:border-box}#accessory[data-v-13b6395a],#brand[data-v-13b6395a]{width:100%;font-family:\"Roboto\",sans-serif;max-width:1200px;margin:0 auto 10px}.accessory--heading[data-v-13b6395a]{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.accessory--text__all[data-v-13b6395a]{right:15px;bottom:5px;font-size:13px;font-weight:400;color:#111}.accessory--list[data-v-13b6395a]{display:flex;flex-wrap:wrap}.accessory--item[data-v-13b6395a]{width:110px;margin-bottom:10px;margin-right:10px;border-radius:10px;overflow:hidden}.accessory--item[data-v-13b6395a]:first-child{background-color:#ffa3a3}.accessory--item[data-v-13b6395a]:nth-child(2){background-color:#ffb8b8}.accessory--item[data-v-13b6395a]:nth-child(3){background-color:#ff94eb}.accessory--item[data-v-13b6395a]:nth-child(4){background-color:#e0b3ff}.accessory--item[data-v-13b6395a]:nth-child(5){background-color:#c6d8fb}.accessory--item[data-v-13b6395a]:nth-child(6){background-color:#4d91ff}.accessory--item[data-v-13b6395a]:nth-child(7){background-color:#85ffb1}.accessory--item[data-v-13b6395a]:nth-child(8){background-color:#f5d63d}.accessory--item[data-v-13b6395a]:nth-child(9){background-color:#fda363}.accessory--item[data-v-13b6395a]:nth-child(10){background-color:#f66}.accessory--item[data-v-13b6395a]:nth-child(11){background-color:#d6d6d6}.accessory--item a[data-v-13b6395a]{width:100%;display:block;overflow:hidden;text-decoration:none;position:relative;background-repeat:no-repeat;background-position:100% 100%;background-size:cover;box-shadow:0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15);min-height:125px;border-radius:10px}.accessory--item a p[data-v-13b6395a]{max-width:114px;width:100%;margin-top:5px;padding:0 5px;font-size:14px;font-weight:600;color:#fff;word-break:break-word;z-index:1}.brand--banner[data-v-13b6395a]{display:flex;align-items:center;justify-content:space-between}.brand--banner a[data-v-13b6395a]{display:inline-block;width:calc(25% - 11.25px);box-shadow:0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15);overflow:hidden;border-radius:10px;margin-bottom:15px;height:125.5px}.brand--banner a img[data-v-13b6395a]{height:auto;max-width:100%;border-radius:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=template&id=250eed14&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"banner"}},[_vm._ssrNode("<div class=\"banner--container\" data-v-250eed14><div class=\"category--banner\" data-v-250eed14><ul class=\"category--banner__list\" data-v-250eed14><li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Điện thoại</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl1 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Laptop</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl2 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Máy tính bảng</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl3 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Âm thanh</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl4 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Đồng hồ</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl5 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Nhà thông minh</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl6 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Phụ kiện</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl7 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>PC - Màn hình</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl5 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Tivi</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl8 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Thu cũ</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl9 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Hàng cũ</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li> <li class=\"category--banner__link\" data-v-250eed14><i class=\"category--icon\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundUrl10 + ")") }, null))+" data-v-250eed14></i> <a href data-v-250eed14>Khuyến mãi</a> <div class=\"icon--right\" data-v-250eed14><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" data-v-250eed14><path d=\"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z\" data-v-250eed14></path></svg></div></li></ul></div> <div class=\"main-banner__wrapper slider--banner\" data-v-250eed14><div class=\"swiper mySwiper2\" data-v-250eed14><div class=\"main-banner__slidding swiper-wrapper\" data-v-250eed14><div class=\"main-banner__slidding-item swiper-slide\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt data-v-250eed14></div> <div class=\"main-banner__slidding-item swiper-slide\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-250eed14></div> <div class=\"main-banner__slidding-item swiper-slide\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt data-v-250eed14></div> <div class=\"main-banner__slidding-item swiper-slide\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt data-v-250eed14></div> <div class=\"main-banner__slidding-item swiper-slide\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt data-v-250eed14></div> <div class=\"main-banner__slidding-item swiper-slide\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt data-v-250eed14></div></div> <div class=\"swiper-button-next\" data-v-250eed14></div> <div class=\"swiper-button-prev\" data-v-250eed14></div></div> <div thumbsSlider class=\"swiper mySwiper main-banner__navigation\" data-v-250eed14><div class=\"swiper-wrapper\" data-v-250eed14><div class=\"main-banner__navigation-item swiper-slide active\" data-v-250eed14><p data-v-250eed14>GALAXY TAB S7 PLUS<br data-v-250eed14>Sale sập sàn</p></div> <div class=\"main-banner__navigation-item swiper-slide\" data-v-250eed14><p data-v-250eed14>IMAC M1 2021<br data-v-250eed14>Deal tốt chốt ngay</p></div> <div class=\"main-banner__navigation-item swiper-slide\" data-v-250eed14><p data-v-250eed14>TIVI XIAOMI 4K P1<br data-v-250eed14>Mở bán giá sốc</p></div> <div class=\"main-banner__navigation-item swiper-slide\" data-v-250eed14><p data-v-250eed14>SONY WH-1000XM5<br data-v-250eed14>Nhận ngay quà xịn</p></div> <div class=\"main-banner__navigation-item swiper-slide\" data-v-250eed14><p data-v-250eed14>HUAWEI FATHER'S DAY<br data-v-250eed14>Giá rẻ vô địch</p></div> <div class=\"main-banner__navigation-item swiper-slide\" data-v-250eed14><p data-v-250eed14>ĐỒ DÙNG THÔNG MINH<br data-v-250eed14>Giá sốc tận nóc</p></div></div></div></div> <div class=\"image--banner\" data-v-250eed14><div data-v-250eed14><a href class=\"right--banner\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt data-v-250eed14></a> <a href class=\"right--banner\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt data-v-250eed14></a> <a href class=\"right--banner\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt data-v-250eed14></a></div></div></div> <div class=\"horizontal--banner\" data-v-250eed14><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt data-v-250eed14></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=template&id=250eed14&scoped=true&

// EXTERNAL MODULE: ./assets/image/icon-cps-3.svg
var icon_cps_3 = __webpack_require__(48);
var icon_cps_3_default = /*#__PURE__*/__webpack_require__.n(icon_cps_3);

// EXTERNAL MODULE: ./assets/image/icon-cps-380.svg
var icon_cps_380 = __webpack_require__(49);
var icon_cps_380_default = /*#__PURE__*/__webpack_require__.n(icon_cps_380);

// EXTERNAL MODULE: ./assets/image/icon-cps-4.svg
var icon_cps_4 = __webpack_require__(50);
var icon_cps_4_default = /*#__PURE__*/__webpack_require__.n(icon_cps_4);

// EXTERNAL MODULE: ./assets/image/icon-cps-220.svg
var icon_cps_220 = __webpack_require__(51);
var icon_cps_220_default = /*#__PURE__*/__webpack_require__.n(icon_cps_220);

// EXTERNAL MODULE: ./assets/image/icon-cps-610.svg
var icon_cps_610 = __webpack_require__(52);
var icon_cps_610_default = /*#__PURE__*/__webpack_require__.n(icon_cps_610);

// EXTERNAL MODULE: ./assets/image/icon-cps-1124.svg
var icon_cps_1124 = __webpack_require__(53);
var icon_cps_1124_default = /*#__PURE__*/__webpack_require__.n(icon_cps_1124);

// EXTERNAL MODULE: ./assets/image/icon-cps-30.svg
var icon_cps_30 = __webpack_require__(54);
var icon_cps_30_default = /*#__PURE__*/__webpack_require__.n(icon_cps_30);

// EXTERNAL MODULE: ./assets/image/icon_cpu.svg
var icon_cpu = __webpack_require__(55);
var icon_cpu_default = /*#__PURE__*/__webpack_require__.n(icon_cpu);

// EXTERNAL MODULE: ./assets/image/icon-cps-tcdm.svg
var icon_cps_tcdm = __webpack_require__(56);
var icon_cps_tcdm_default = /*#__PURE__*/__webpack_require__.n(icon_cps_tcdm);

// EXTERNAL MODULE: ./assets/image/icon-cps-29.svg
var icon_cps_29 = __webpack_require__(57);
var icon_cps_29_default = /*#__PURE__*/__webpack_require__.n(icon_cps_29);

// EXTERNAL MODULE: ./assets/image/icon-cps-promotion.svg
var icon_cps_promotion = __webpack_require__(58);
var icon_cps_promotion_default = /*#__PURE__*/__webpack_require__.n(icon_cps_promotion);

// EXTERNAL MODULE: ./assets/index.js
var assets = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  data() {
    return {
      backgroundUrl: icon_cps_3_default.a,
      backgroundUrl1: icon_cps_380_default.a,
      backgroundUrl2: icon_cps_4_default.a,
      backgroundUrl3: icon_cps_220_default.a,
      backgroundUrl4: icon_cps_610_default.a,
      backgroundUrl5: icon_cps_1124_default.a,
      backgroundUrl6: icon_cps_30_default.a,
      backgroundUrl7: icon_cpu_default.a,
      backgroundUrl8: icon_cps_tcdm_default.a,
      backgroundUrl9: icon_cps_29_default.a,
      backgroundUrl10: icon_cps_promotion_default.a
    };
  },

  name: "Banner",

  mounted() {
    this.$nextTick(() => {
      this.sliderr();
    });
  },

  methods: {
    sliderr: assets["b" /* sliderr */]
  }
});
// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Banner/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Banner_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "250eed14",
  "708cb376"
  
)

/* harmony default export */ var Banner = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Featured-product/Featured-product.vue?vue&type=template&id=0115c3c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"featured-product"}},[_vm._ssrNode("<div id=\"phone\" data-v-0115c3c8><div class=\"product--heading\" data-v-0115c3c8><div class=\"product--heading__text\" data-v-0115c3c8><h2 class=\"product--text\" data-v-0115c3c8>\n        ĐIỆN THOẠI NỔI BẬT NHẤT\n      </h2></div> <div class=\"product--heading__link\" data-v-0115c3c8><ul class=\"product--list\" data-v-0115c3c8><li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Apple</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Samsung</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Xiaomi</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>OPPO</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Realme</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Nokia</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Asus</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Techno</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Vivo</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Xem tất cả</a></li></ul></div></div> <div class=\"product--slider\" data-v-0115c3c8><ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Samsung Galaxy Note 20 Ultra 5G</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n          18.990.000 ₫\n        </p> <p class=\"product--price__through\" data-v-0115c3c8>\n          32.990.000 ₫\n        </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n          Thu cũ đổi mới - Trợ giá đến 300.000đ\n        </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Samsung Galaxy Note 20 Ultra 5G</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n          18.990.000 ₫\n        </p> <p class=\"product--price__through\" data-v-0115c3c8>\n          32.990.000 ₫\n        </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n          Thu cũ đổi mới - Trợ giá đến 300.000đ\n        </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Samsung Galaxy Note 20 Ultra 5G</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n          18.990.000 ₫\n        </p> <p class=\"product--price__through\" data-v-0115c3c8>\n          32.990.000 ₫\n        </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n          Thu cũ đổi mới - Trợ giá đến 300.000đ\n        </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Samsung Galaxy Note 20 Ultra 5G</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n          18.990.000 ₫\n        </p> <p class=\"product--price__through\" data-v-0115c3c8>\n          32.990.000 ₫\n        </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n          Thu cũ đổi mới - Trợ giá đến 300.000đ\n        </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Samsung Galaxy Note 20 Ultra 5G</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n          18.990.000 ₫\n        </p> <p class=\"product--price__through\" data-v-0115c3c8>\n          32.990.000 ₫\n        </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n          Thu cũ đổi mới - Trợ giá đến 300.000đ\n        </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul></div></div> <div id=\"laptop\" data-v-0115c3c8><div class=\"product--heading\" data-v-0115c3c8><div class=\"product--heading__text\" data-v-0115c3c8><h2 class=\"product--text\" data-v-0115c3c8>\n          LAPTOP NỔI BẬT NHẤT\n        </h2></div> <div class=\"product--heading__link\" data-v-0115c3c8><ul class=\"product--list\" data-v-0115c3c8><li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Macbook</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Thinkpad</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Asus</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>HP</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Suface</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Acer</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>MSI</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Dell</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Xem tất cả</a></li></ul></div></div> <div class=\"product--slider\" data-v-0115c3c8><ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Laptop Asus Gaming Rog Zenphyrus G14 Ga401QH K2091W</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            24.490.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            29.990.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Ưu đãi 200.000đ khi mua kèm màn hình đồ họa ASUS USB-C\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Laptop Asus Gaming Rog Zenphyrus G14 Ga401QH K2091W</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            24.490.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            29.990.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Ưu đãi 200.000đ khi mua kèm màn hình đồ họa ASUS USB-C\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Laptop Asus Gaming Rog Zenphyrus G14 Ga401QH K2091W</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            24.490.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            29.990.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Ưu đãi 200.000đ khi mua kèm màn hình đồ họa ASUS USB-C\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Laptop Asus Gaming Rog Zenphyrus G14 Ga401QH K2091W</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            24.490.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            29.990.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Ưu đãi 200.000đ khi mua kèm màn hình đồ họa ASUS USB-C\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>Laptop Asus Gaming Rog Zenphyrus G14 Ga401QH K2091W</h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            24.490.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            29.990.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Ưu đãi 200.000đ khi mua kèm màn hình đồ họa ASUS USB-C\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul></div></div> <div id=\"tablet\" data-v-0115c3c8><div class=\"product--heading\" data-v-0115c3c8><div class=\"product--heading__text\" data-v-0115c3c8><h2 class=\"product--text\" data-v-0115c3c8>\n          MÁY TÍNH BẢNG\n        </h2></div> <div class=\"product--heading__link\" data-v-0115c3c8><ul class=\"product--list\" data-v-0115c3c8><li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>iPad Air</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>iPad Pro</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Tab S8 Ultra</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Lenovo</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Samsung</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Xiaomi</a></li> <li class=\"product--link\" data-v-0115c3c8><a href data-v-0115c3c8>Xem tất cả</a></li></ul></div></div> <div class=\"product--slider\" data-v-0115c3c8><ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>iPad Air 10.9 2020 WiFi 64GB I Chính hãng Apple Việt Nam </h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            13.590.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            16.590.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>iPad Air 10.9 2020 WiFi 64GB I Chính hãng Apple Việt Nam </h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            13.590.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            16.590.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>iPad Air 10.9 2020 WiFi 64GB I Chính hãng Apple Việt Nam </h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            13.590.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            16.590.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>iPad Air 10.9 2020 WiFi 64GB I Chính hãng Apple Việt Nam </h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            13.590.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            16.590.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul> <ul class=\"product--slider__list\" data-v-0115c3c8><li class=\"product--image\" data-v-0115c3c8><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-0115c3c8></li> <li class=\"product--name\" data-v-0115c3c8><h3 data-v-0115c3c8>iPad Air 10.9 2020 WiFi 64GB I Chính hãng Apple Việt Nam </h3></li> <li class=\"product--price\" data-v-0115c3c8><p class=\"product--price__show\" data-v-0115c3c8>\n            13.590.000 ₫\n          </p> <p class=\"product--price__through\" data-v-0115c3c8>\n            16.590.000 ₫\n          </p></li> <li class=\"product--promotion\" data-v-0115c3c8><p class=\"product--promotion__details\" data-v-0115c3c8>\n            Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000\n          </p></li> <li class=\"product--tessti\" data-v-0115c3c8><div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <div class=\"product--star\" data-v-0115c3c8><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"star\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" data-v-0115c3c8><path fill=\"#f59e0b\" d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" data-v-0115c3c8></path></svg></div> <span data-v-0115c3c8>   29 đánh giá</span></li></ul></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Featured-product/Featured-product.vue?vue&type=template&id=0115c3c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Featured-product/Featured-product.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Featured_productvue_type_script_lang_js_ = ({
  name: "Featured-product"
});
// CONCATENATED MODULE: ./components/Featured-product/Featured-product.vue?vue&type=script&lang=js&
 /* harmony default export */ var Featured_product_Featured_productvue_type_script_lang_js_ = (Featured_productvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Featured-product/Featured-product.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Featured_product_Featured_productvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0115c3c8",
  "5003e776"
  
)

/* harmony default export */ var Featured_product = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Accessory/Accessory.vue?vue&type=template&id=13b6395a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"all"}},[_vm._ssrNode("<div id=\"accessory\" data-v-13b6395a><div class=\"accessory--heading\" data-v-13b6395a><div class=\"accessory--heading__text\" data-v-13b6395a><h2 class=\"accessory--text\" data-v-13b6395a>\n          PHỤ KIỆN\n        </h2></div> <div class=\"accessory--heading__link\" data-v-13b6395a><p class=\"accessory--text__all\" data-v-13b6395a>\n          Xem tất cả\n        </p></div></div> <div class=\"accessory--all\" data-v-13b6395a><ul class=\"accessory--list\" data-v-13b6395a><li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg + ")")}, null))+" data-v-13b6395a><p data-v-13b6395a>Nổi bật</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg1 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Phụ kiện Apple</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg2 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Dán màn hình</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg3 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Ốp lưng - Bao da</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg4 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Cáp, sạc</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg5 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Pin dự phòng</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg6 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Thiết bị mạng</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg7 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Camera</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg8 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Chuột, bàn phím</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg9 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Thẻ nhớ, USB</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg10 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Thẻ nhớ, USB</p></a></li></ul></div></div> <div id=\"accessory\" data-v-13b6395a><div class=\"accessory--heading\" data-v-13b6395a><div class=\"accessory--heading__text\" data-v-13b6395a><h2 class=\"accessory--text\" data-v-13b6395a>\n          LINH KIỆN MÁY TÍNH\n        </h2></div> <div class=\"accessory--heading__link\" data-v-13b6395a><p class=\"accessory--text__all\" data-v-13b6395a>\n          Xem tất cả\n        </p></div></div> <div class=\"accessory--all\" data-v-13b6395a><ul class=\"accessory--list\" data-v-13b6395a><li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg + ")")}, null))+" data-v-13b6395a><p data-v-13b6395a>Nổi bật</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg1 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Phụ kiện Apple</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg2 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Dán màn hình</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg3 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Ốp lưng - Bao da</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg4 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Cáp, sạc</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg5 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Pin dự phòng</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg6 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Thiết bị mạng</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg7 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Camera</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg8 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Chuột, bàn phím</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg9 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Thẻ nhớ, USB</p></a></li></ul></div></div> <div id=\"accessory\" data-v-13b6395a><div class=\"accessory--heading\" data-v-13b6395a><div class=\"accessory--heading__text\" data-v-13b6395a><h2 class=\"accessory--text\" data-v-13b6395a>\n          HÀNG CŨ\n        </h2></div> <div class=\"accessory--heading__link\" data-v-13b6395a><p class=\"accessory--text__all\" data-v-13b6395a>\n          Xem tất cả\n        </p></div></div> <div class=\"accessory--all\" data-v-13b6395a><ul class=\"accessory--list\" data-v-13b6395a><li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg + ")")}, null))+" data-v-13b6395a><p data-v-13b6395a>Nổi bật</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg1 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Phụ kiện Apple</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg2 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Dán màn hình</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg3 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Ốp lưng - Bao da</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg4 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Cáp, sạc</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg5 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Pin dự phòng</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg6 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Thiết bị mạng</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg7 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Camera</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg8 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Chuột, bàn phím</p></a></li> <li class=\"accessory--item\" data-v-13b6395a><a href"+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.backgroundimg9 + ")") }, null))+" data-v-13b6395a><p data-v-13b6395a>Thẻ nhớ, USB</p></a></li></ul></div></div> <div id=\"brand\" data-v-13b6395a><div class=\"accessory--heading\" data-v-13b6395a><div class=\"accessory--heading__text\" data-v-13b6395a><h2 class=\"accessory--text\" data-v-13b6395a>\n          ƯU ĐÃI THANH TOÁN\n        </h2></div></div> <div class=\"brand--banner\" data-v-13b6395a><a href data-v-13b6395a><img"+(_vm._ssrAttr("src",__webpack_require__(63)))+" alt data-v-13b6395a></a> <a href data-v-13b6395a><img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" alt data-v-13b6395a></a> <a href data-v-13b6395a><img"+(_vm._ssrAttr("src",__webpack_require__(65)))+" alt data-v-13b6395a></a> <a href data-v-13b6395a><img"+(_vm._ssrAttr("src",__webpack_require__(66)))+" alt data-v-13b6395a></a></div></div> <div id=\"brand\" data-v-13b6395a><div class=\"accessory--heading\" data-v-13b6395a><div class=\"accessory--heading__text\" data-v-13b6395a><h2 class=\"accessory--text\" data-v-13b6395a>\n          CHUYÊN TRANG THƯƠNG HIỆU\n        </h2></div></div> <div class=\"brand--banner\" data-v-13b6395a><a href data-v-13b6395a><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" alt data-v-13b6395a></a> <a href data-v-13b6395a><img"+(_vm._ssrAttr("src",__webpack_require__(68)))+" alt data-v-13b6395a></a> <a href data-v-13b6395a><img"+(_vm._ssrAttr("src",__webpack_require__(69)))+" alt data-v-13b6395a></a> <a href data-v-13b6395a><img"+(_vm._ssrAttr("src",__webpack_require__(70)))+" alt data-v-13b6395a></a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Accessory/Accessory.vue?vue&type=template&id=13b6395a&scoped=true&

// EXTERNAL MODULE: ./assets/image/cate-1644.svg
var cate_1644 = __webpack_require__(71);
var cate_1644_default = /*#__PURE__*/__webpack_require__.n(cate_1644);

// EXTERNAL MODULE: ./assets/image/cate-43.svg
var cate_43 = __webpack_require__(72);
var cate_43_default = /*#__PURE__*/__webpack_require__.n(cate_43);

// EXTERNAL MODULE: ./assets/image/cate-286.svg
var cate_286 = __webpack_require__(73);
var cate_286_default = /*#__PURE__*/__webpack_require__.n(cate_286);

// EXTERNAL MODULE: ./assets/image/cate-108.svg
var cate_108 = __webpack_require__(74);
var cate_108_default = /*#__PURE__*/__webpack_require__.n(cate_108);

// EXTERNAL MODULE: ./assets/image/cate-114.svg
var cate_114 = __webpack_require__(75);
var cate_114_default = /*#__PURE__*/__webpack_require__.n(cate_114);

// EXTERNAL MODULE: ./assets/image/cate-122.svg
var cate_122 = __webpack_require__(76);
var cate_122_default = /*#__PURE__*/__webpack_require__.n(cate_122);

// EXTERNAL MODULE: ./assets/image/cate-676.svg
var cate_676 = __webpack_require__(77);
var cate_676_default = /*#__PURE__*/__webpack_require__.n(cate_676);

// EXTERNAL MODULE: ./assets/image/cate-363.svg
var cate_363 = __webpack_require__(78);
var cate_363_default = /*#__PURE__*/__webpack_require__.n(cate_363);

// EXTERNAL MODULE: ./assets/image/cate-663.svg
var cate_663 = __webpack_require__(79);
var cate_663_default = /*#__PURE__*/__webpack_require__.n(cate_663);

// EXTERNAL MODULE: ./assets/image/cate-109.svg
var cate_109 = __webpack_require__(80);
var cate_109_default = /*#__PURE__*/__webpack_require__.n(cate_109);

// EXTERNAL MODULE: ./assets/image/cate-966.svg
var cate_966 = __webpack_require__(81);
var cate_966_default = /*#__PURE__*/__webpack_require__.n(cate_966);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Accessory/Accessory.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ var Accessoryvue_type_script_lang_js_ = ({
  data() {
    return {
      backgroundimg: cate_1644_default.a,
      backgroundimg1: cate_43_default.a,
      backgroundimg2: cate_286_default.a,
      backgroundimg3: cate_108_default.a,
      backgroundimg4: cate_114_default.a,
      backgroundimg5: cate_122_default.a,
      backgroundimg6: cate_676_default.a,
      backgroundimg7: cate_363_default.a,
      backgroundimg8: cate_663_default.a,
      backgroundimg9: cate_109_default.a,
      backgroundimg10: cate_966_default.a
    };
  },

  name: "Accessory"
});
// CONCATENATED MODULE: ./components/Accessory/Accessory.vue?vue&type=script&lang=js&
 /* harmony default export */ var Accessory_Accessoryvue_type_script_lang_js_ = (Accessoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Accessory/Accessory.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Accessory_Accessoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13b6395a",
  "38ef5f9e"
  
)

/* harmony default export */ var Accessory = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0!important}li,ul{list-style:none}a{text-decoration:none}.fixed{position:fixed;top:0;left:0;right:0;z-index:999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4bb6d5d4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-cps"}},[_c('Header'),_vm._ssrNode(" "),_c('Banner'),_vm._ssrNode(" "),_c('FeaturedProduct'),_vm._ssrNode(" "),_c('Accessory'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4bb6d5d4&

// EXTERNAL MODULE: ./layouts/Header/Header.vue + 4 modules
var Header = __webpack_require__(15);

// EXTERNAL MODULE: ./components/Banner/Banner.vue + 4 modules
var Banner = __webpack_require__(84);

// EXTERNAL MODULE: ./components/Featured-product/Featured-product.vue + 4 modules
var Featured_product = __webpack_require__(85);

// EXTERNAL MODULE: ./components/Accessory/Accessory.vue + 4 modules
var Accessory = __webpack_require__(86);

// EXTERNAL MODULE: ./layouts/Footer/Footer.vue + 4 modules
var Footer = __webpack_require__(14);

// EXTERNAL MODULE: ./assets/index.js
var assets = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',

  mounted() {
    this.$nextTick(() => {
      this.scroll();
    });
  },

  methods: {
    scroll: assets["a" /* scroll */]
  },

  data() {
    return {};
  },

  components: {
    Header: Header["a" /* default */],
    Banner: Banner["default"],
    FeaturedProduct: Featured_product["default"],
    Accessory: Accessory["default"],
    Footer: Footer["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4fbf83db"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Banner: __webpack_require__(84).default,FeaturedProduct: __webpack_require__(85).default,Accessory: __webpack_require__(86).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map