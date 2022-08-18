"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "OtherFunctions",
  setup(__props) {
    const menusList = [
      { name: "\u4F01\u4E1A\u8BA4\u8BC1", src: "", className: "icon1", url: "" },
      { name: "\u8054\u7CFB\u5BA2\u670D", src: "", className: "icon2", url: "" },
      { name: "\u95EE\u9898\u53CD\u9988", src: "", className: "icon3", url: "" },
      { name: "\u6211\u7684\u53D1\u7968", src: "", className: "icon4", url: "" },
      { name: "\u4EA4\u6613\u4E3E\u62A5", src: "", className: "icon5", url: "" },
      { name: "\u6211\u7684\u6D3B\u52A8", src: "", className: "icon6", url: "" },
      { name: "\u6211\u7684\u6210\u4EA4", src: "", className: "icon7", url: "" },
      { name: "\u5E38\u7528\u529F\u80FD", src: "", className: "icon8", url: "" }
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
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/my/components/OtherFunctions.vue"]]);
wx.createComponent(Component);
