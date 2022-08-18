"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  FilterPopup();
}
const FilterPopup = () => "./FilterPopup.js";
const _sfc_main = {
  __name: "Tabs",
  setup(__props) {
    const FilterPopupRef = common_vendor.ref();
    const open = () => {
      FilterPopupRef.value.open();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(open),
        b: common_vendor.sr(FilterPopupRef, "84882c80-0", {
          "k": "FilterPopupRef"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/supAndDem/components/Tabs.vue"]]);
wx.createComponent(Component);
