"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (SearchContainer + Menus + QuoteList)();
}
const SearchContainer = () => "./components/SearchContainer.js";
const Menus = () => "./components/Menus.js";
const QuoteList = () => "./components/QuoteList.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
