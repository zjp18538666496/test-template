"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "Menus",
  setup(__props) {
    const menusList = [
      { name: "\u5E02\u573A\u9700\u6C42", src: "/static/logo.png", url: "" },
      { name: "\u5C55\u4F1A\u6D3B\u52A8", src: "/static/logo.png", url: "" },
      { name: "\u4F01\u4E1A\u8D44\u8BAF", src: "/static/logo.png", url: "" },
      { name: "\u667A\u80FD\u5339\u914D", src: "/static/logo.png", url: "" }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menusList, (item, k0, i0) => {
          return {
            a: item.src,
            b: common_vendor.t(item.name),
            c: item.name,
            d: item.url
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/index/components/Menus.vue"]]);
wx.createComponent(Component);
