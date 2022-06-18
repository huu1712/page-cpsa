exports.ids = [2];
exports.modules = Array(34).concat([
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
/* 35 */,
/* 36 */,
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
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
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

/***/ })
]);;
//# sourceMappingURL=banner.js.map