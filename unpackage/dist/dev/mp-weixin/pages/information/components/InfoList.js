"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(10, (item, k0, i0) => {
      return {
        a: common_vendor.n(`icon${item % 4}`),
        b: common_vendor.n(`image-container bg${item % 4}`),
        c: item
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/code/test-template/pages/information/components/InfoList.vue"]]);
wx.createComponent(Component);
