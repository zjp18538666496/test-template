"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (SearchContainer + Tabs + DataList)();
}
const SearchContainer = () => "./components/SearchContainer.js";
const Tabs = () => "./components/Tabs.js";
const DataList = () => "./components/DataList.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/supAndDem/index.vue"]]);
wx.createPage(MiniProgramPage);
