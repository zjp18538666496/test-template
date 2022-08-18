"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "FilterPopup",
  setup(__props, { expose }) {
    const popup = common_vendor.ref();
    const open = () => {
      popup.value.open();
    };
    const close = () => {
      popup.value.close();
    };
    expose({
      open,
      close
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(close),
        b: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: common_vendor.f(5, (label, k1, i1) => {
              return {
                a: label
              };
            }),
            b: item
          };
        }),
        c: common_vendor.sr(popup, "fc3b7a7c-0", {
          "k": "popup"
        }),
        d: common_vendor.p({
          type: "bottom",
          ["mask-click"]: false
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/supAndDem/components/FilterPopup.vue"]]);
wx.createComponent(Component);
