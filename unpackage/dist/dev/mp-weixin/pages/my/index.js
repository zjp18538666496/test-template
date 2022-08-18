"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (UserInfo + CommonFunctions + OtherFunctions)();
}
const UserInfo = () => "./components/UserInfo.js";
const CommonFunctions = () => "./components/CommonFunctions.js";
const OtherFunctions = () => "./components/OtherFunctions.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/test-template/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
