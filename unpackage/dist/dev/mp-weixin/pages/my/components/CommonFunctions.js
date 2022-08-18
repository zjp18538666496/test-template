"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "CommonFunctions",
  setup(__props) {
    const menusList = [
      { name: "\u6211\u7684\u53D1\u5E03", src: "", className: "icon1", url: "" },
      { name: "\u6211\u7684\u6536\u85CF", src: "", className: "icon2", url: "" },
      { name: "\u6211\u7684\u5173\u6CE8", src: "", className: "icon3", url: "" },
      { name: "\u516C\u53F8\u4E3B\u9875", src: "", className: "icon4", url: "" }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menusList, (item, k0, i0) => {
          return {
            a: common_vendor.n(item.className),
            b: common_vendor.t(item.name),
            c: item.name
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/my/components/CommonFunctions.vue"]]);
wx.createComponent(Component);
