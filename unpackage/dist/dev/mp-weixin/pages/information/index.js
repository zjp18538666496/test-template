"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (GraBackground + ButtonArea + InfoList)();
}
const ButtonArea = () => "./components/ButtonArea.js";
const InfoList = () => "./components/InfoList.js";
const GraBackground = () => "../../components/GraBackground.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/information/index.vue"]]);
wx.createPage(MiniProgramPage);
