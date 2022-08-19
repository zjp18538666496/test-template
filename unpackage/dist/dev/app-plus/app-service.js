var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$G = {
    props: {
      Title: String
    },
    data() {
      return {};
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", { class: "titleBox" }, [
      vue.createElementVNode("image", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args)),
        class: "chatHead",
        src: "/static/back.png"
      }),
      vue.createVNode(_component_view_text, { class: "title-xtxt" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString($props.Title), 1)
        ]),
        _: 1
      })
    ]);
  }
  var Title = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$y], ["__scopeId", "data-v-f41a3be6"], ["__file", "C:/Users/Administrator/Desktop/test-template/components/Title.vue"]]);
  const _sfc_main$F = {
    data() {
      return {
        loginName: "\u9A8C\u8BC1\u7801\u767B\u5F55",
        loginPrompt: "\u9996\u6B21\u767B\u5F55\u5C06\u81EA\u52A8\u6CE8\u518C",
        verificationCode: "\u91CD\u65B0\u83B7\u53D6"
      };
    },
    components: {
      Title
    },
    methods: {
      login() {
        uni.switchTab({
          url: "/pages/index/index"
        });
      },
      doubt() {
        uni.navigateTo({
          url: "/pages/my/signUp/SignUp"
        });
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", { class: "loginBox" }, [
      vue.createElementVNode("view", { class: "signQuickly" }, [
        vue.createVNode(_component_view_text, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u5FEB\u901F\u767B\u5F55")
          ]),
          _: 1
        }),
        vue.createElementVNode("image", {
          class: "detailsImg",
          src: "/static/rightClick.png",
          mode: ""
        })
      ]),
      vue.createElementVNode("view", { class: "loginName" }, vue.toDisplayString($data.loginName), 1),
      vue.createElementVNode("view", { class: "loginPrompt" }, vue.toDisplayString($data.loginPrompt), 1),
      vue.createElementVNode("view", { class: "input" }, [
        vue.createElementVNode("view", { class: "user" }, [
          vue.createElementVNode("input", {
            type: "text",
            placeholder: "\u624B\u673A\u53F7"
          })
        ]),
        vue.createElementVNode("view", { class: "password" }, [
          vue.createElementVNode("input", {
            type: "password",
            placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
          }),
          vue.createVNode(_component_view_text, { class: "verificationCode" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString($data.verificationCode), 1)
            ]),
            _: 1
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "agreement" }, [
        vue.createElementVNode("image", {
          class: "img",
          src: "/static/consent.png"
        }),
        vue.createVNode(_component_view_text, { class: "text1" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u6211\u5DF2\u9605\u8BFB\xA0")
          ]),
          _: 1
        }),
        vue.createVNode(_component_view_text, { class: "text2" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u827E\u4E50\u535A\u670D\u52A1\u534F\u8BAE")
          ]),
          _: 1
        }),
        vue.createVNode(_component_view_text, { class: "text1" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\xA0\u548C\xA0")
          ]),
          _: 1
        }),
        vue.createVNode(_component_view_text, { class: "text2" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u9690\u79C1\u653F\u7B56")
          ]),
          _: 1
        })
      ]),
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.login && $options.login(...args)),
        class: "login"
      }, " \u767B\u5F55 "),
      vue.createElementVNode("view", { class: "doubt" }, [
        vue.createVNode(_component_view_text, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u9A8C\u8BC1\u7801\u767B\u5F55")
          ]),
          _: 1
        }),
        vue.createVNode(_component_view_text, { onClick: $options.doubt }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u6CE8\u518C")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      vue.createCommentVNode(' <view class="tertiaryPeriod">\r\n			<view-text>\u7B2C\u4E09\u65B9\u767B\u5F55</view-text>\r\n			<view class="wx">\r\n\r\n			</view>\r\n		</view> ')
    ]);
  }
  var PagesMyLonginLongin = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$x], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/longin/Longin.vue"]]);
  const _sfc_main$E = {};
  function _sfc_render$w(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "search-container" }, [
      vue.createElementVNode("view", { class: "wrap" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.createElementVNode("view", { class: "label-1" }, "\u827E\u535A\u4E50"),
          vue.createElementVNode("view", { class: "label-2" }, "\u827E\u535A\u4E50\u4F9B\u9700\u5E73\u53F0")
        ])
      ]),
      vue.createElementVNode("image", {
        class: "set-img",
        mode: "aspectFit",
        src: "/static/sydt.png"
      })
    ]);
  }
  var SearchContainer$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$w], ["__scopeId", "data-v-2118b9f6"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/index/components/SearchContainer.vue"]]);
  const _sfc_main$D = {
    __name: "Menus",
    setup(__props) {
      const menusList = [
        { name: "\u5E02\u573A\u9700\u6C42", src: "/static/scxq.png", url: "" },
        { name: "\u5C55\u4F1A\u6D3B\u52A8", src: "/static/zhhd.png", url: "" },
        { name: "\u4F01\u4E1A\u8D44\u8BAF", src: "/static/qyzx.png", url: "" },
        { name: "\u667A\u80FD\u5339\u914D", src: "/static/znpp.png", url: "" }
      ];
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "Menus-container" }, [
          vue.createElementVNode("view", { class: "menus" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(menusList, (item) => {
              return vue.createElementVNode("navigator", {
                class: "one-box",
                "hover-class": "none",
                key: item.name,
                url: item.url
              }, [
                vue.createElementVNode("view", { class: "outside" }, [
                  vue.createElementVNode("image", {
                    class: "icon",
                    src: item.src
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "text-name" }, vue.toDisplayString(item.name), 1)
                ])
              ], 8, ["url"]);
            }), 64))
          ]),
          vue.createElementVNode("view", { class: "express" })
        ]);
      };
    }
  };
  var Menus = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-355151f1"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/index/components/Menus.vue"]]);
  const _sfc_main$C = {};
  function _sfc_render$v(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "QuoteList-container" }, [
      vue.createElementVNode("view", { class: "title-container" }, [
        vue.createElementVNode("view", { class: "title-name" }, "\u4EA7\u54C1\u62A5\u4EF7"),
        vue.createElementVNode("view", { class: "more" }, [
          vue.createElementVNode("view", { class: "more-name" }, "\u66F4\u591A\u62A5\u4EF7"),
          vue.createElementVNode("image", {
            class: "icon",
            src: "/static/rightClick.png"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "data-list" }, [
        (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(4, (item) => {
          return vue.createElementVNode("view", {
            class: "quote",
            key: item
          }, [
            vue.createElementVNode("image", {
              class: "quote-img",
              src: "/static/tc2.png"
            }),
            vue.createElementVNode("view", { class: "quote-right" }, [
              vue.createElementVNode("view", { class: "quote-title" }, "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247"),
              vue.createElementVNode("view", { class: "quote-details" }, "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C \u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247"),
              vue.createElementVNode("view", { class: "label-container" }, [
                vue.createElementVNode("view", { class: "label" }, "\u4F01\u4E1A\u63A8\u8350")
              ]),
              vue.createElementVNode("view", { class: "price-container" }, [
                vue.createElementVNode("view", { class: "price" }, [
                  vue.createElementVNode("text", { class: "text1" }, "\u9884\u7B97\uFF1A"),
                  vue.createElementVNode("text", { class: "text1" }, "\uFFE53499"),
                  vue.createElementVNode("text", { class: "text1" }, "\u5143")
                ]),
                vue.createElementVNode("navigator", { class: "quote-btn" }, "\u6211\u8981\u62A5\u4EF7")
              ])
            ])
          ]);
        }), 64))
      ])
    ]);
  }
  var QuoteList = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$v], ["__scopeId", "data-v-48899a92"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/index/components/QuoteList.vue"]]);
  const _sfc_main$B = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(SearchContainer$1),
          vue.createVNode(Menus),
          vue.createVNode(QuoteList)
        ]);
      };
    }
  };
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__file", "C:/Users/Administrator/Desktop/test-template/pages/index/index.vue"]]);
  const _sfc_main$A = {};
  function _sfc_render$u(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "SearchContainer" }, [
      vue.createElementVNode("view", { class: "select-address" }, [
        vue.createElementVNode("view", { class: "text" }, "\u90D1\u5DDE"),
        vue.createElementVNode("image", {
          class: "arrow",
          src: ""
        })
      ]),
      vue.createElementVNode("view", { class: "search" }, [
        vue.createElementVNode("image", {
          class: "icon",
          src: "/static/logo.png"
        }),
        vue.createElementVNode("input", {
          class: "input",
          placeholder: "\u641C\u7D22\u4F9B\u9700\u4EA7\u54C1"
        })
      ]),
      vue.createElementVNode("view", { class: "add" }, " + ")
    ]);
  }
  var SearchContainer = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$u], ["__scopeId", "data-v-3f62acf6"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/supAndDem/components/SearchContainer.vue"]]);
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$z = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$t], ["__file", "C:/Users/Administrator/Desktop/test-template/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$y = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 2)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$s], ["__scopeId", "data-v-7c43d41b"], ["__file", "C:/Users/Administrator/Desktop/test-template/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$x = {
    __name: "FilterPopup",
    setup(__props, { expose }) {
      const popup = vue.ref();
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
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "FilterPopup-container" }, [
          vue.createVNode(_component_uni_popup, {
            ref_key: "popup",
            ref: popup,
            type: "bottom",
            "mask-click": false
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "popup-container" }, [
                vue.createElementVNode("view", { class: "title" }, [
                  vue.createElementVNode("view", null, "\u7B5B\u9009\u6761\u4EF6"),
                  vue.createElementVNode("image", {
                    class: "close-icon",
                    src: "/static/sl.png",
                    onClick: close
                  })
                ]),
                vue.createElementVNode("view", { class: "scroll-container" }, [
                  (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(3, (item) => {
                    return vue.createElementVNode("view", { key: item }, [
                      vue.createElementVNode("view", { class: "select-title" }, "\u884C\u4E1A\u7C7B\u522B"),
                      vue.createElementVNode("view", { class: "select-container" }, [
                        (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (label) => {
                          return vue.createElementVNode("view", {
                            class: "one-select",
                            key: label
                          }, "\u5236\u9020\u4E1A");
                        }), 64))
                      ])
                    ]);
                  }), 64))
                ]),
                vue.createElementVNode("view", { class: "button-area" }, [
                  vue.createElementVNode("view", { class: "reset" }, "\u91CD\u7F6E"),
                  vue.createElementVNode("view", {
                    onClick: close,
                    class: "ok"
                  }, "\u786E\u5B9A")
                ])
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  };
  var FilterPopup = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-252d3a60"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/supAndDem/components/FilterPopup.vue"]]);
  const _sfc_main$w = {
    __name: "Tabs",
    setup(__props) {
      const FilterPopupRef = vue.ref();
      const open = () => {
        FilterPopupRef.value.open();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "TabsContainer" }, [
            vue.createElementVNode("view", { class: "one-tab" }, [
              vue.createElementVNode("view", null, "\u7EFC\u5408\u6392\u5E8F"),
              vue.createElementVNode("image", {
                class: "arrow",
                src: ""
              })
            ]),
            vue.createElementVNode("view", {
              class: "one-tab",
              onClick: open
            }, "\u9AD8\u7EA7\u7B5B\u9009")
          ]),
          vue.createVNode(FilterPopup, {
            ref_key: "FilterPopupRef",
            ref: FilterPopupRef
          }, null, 512)
        ], 64);
      };
    }
  };
  var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-ea51b03c"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/supAndDem/components/Tabs.vue"]]);
  const _sfc_main$v = {};
  function _sfc_render$r(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "DataListContainer" }, [
      (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(4, (item) => {
        return vue.createElementVNode("view", {
          class: "one-container",
          key: item
        }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("view", { class: "data-type" }, [
              vue.createElementVNode("view", { class: "ball" }, "\u9700"),
              vue.createElementVNode("view", { class: "title" }, "\u91C7\u8D2D\u624B\u673A\u4E3B\u677F")
            ]),
            vue.createElementVNode("view", { class: "label" }, "\u62DB\u6807\u4E2D")
          ]),
          vue.createElementVNode("view", { class: "center" }, [
            vue.createElementVNode("image", {
              class: "left-image",
              mode: "aspectFit",
              src: "/static/tc2.png"
            }),
            vue.createElementVNode("view", { class: "right-data" }, [
              vue.createElementVNode("view", { class: "line" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", { class: "field" }, "\u884C\u4E1A\uFF1A"),
                  vue.createElementVNode("text", { class: "data" }, "\u7535\u5B50\u8BBE\u5907")
                ]),
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", { class: "field" }, "\u4ED8\u6B3E\u65B9\u5F0F\uFF1A"),
                  vue.createElementVNode("text", { class: "data" }, "\u5236\u9020\u4E1A")
                ])
              ]),
              vue.createElementVNode("view", { class: "line" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", { class: "field" }, "\u6570\u91CF\uFF1A"),
                  vue.createElementVNode("text", { class: "data" }, "20000")
                ]),
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", { class: "field" }, "\u53D1\u7968\uFF1A"),
                  vue.createElementVNode("text", { class: "data" }, "\u4E0D\u9650")
                ])
              ]),
              vue.createElementVNode("view", { class: "price" }, [
                vue.createElementVNode("text", { class: "field" }, "\u9884\u7B97\uFF1A"),
                vue.createElementVNode("text", { class: "price-number" }, "1,500,00"),
                vue.createElementVNode("text", { class: "yuan" }, "\u5143")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "bottom" }, [
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("image", {
                class: "icon1",
                src: ""
              }),
              vue.createElementVNode("view", { class: "text" }, "\u6CB3\u5357 \u90D1\u5DDE")
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("image", {
                class: "icon2",
                src: ""
              }),
              vue.createElementVNode("view", { class: "text" }, "888")
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("image", {
                class: "icon3",
                src: ""
              }),
              vue.createElementVNode("view", { class: "text" }, "2022-4-29")
            ])
          ])
        ]);
      }), 64))
    ]);
  }
  var DataList = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$r], ["__scopeId", "data-v-38ced8cc"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/supAndDem/components/DataList.vue"]]);
  const _sfc_main$u = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(SearchContainer),
          vue.createVNode(Tabs),
          vue.createVNode(DataList)
        ]);
      };
    }
  };
  var PagesSupAndDemIndex = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__file", "C:/Users/Administrator/Desktop/test-template/pages/supAndDem/index.vue"]]);
  const _sfc_main$t = {};
  function _sfc_render$q(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "ButtonArea-container" }, [
      vue.createElementVNode("view", { class: "one-button" }, [
        vue.createElementVNode("view", { class: "top" }, [
          vue.createElementVNode("view", { class: "image-container bg1" }, [
            vue.createElementVNode("image", {
              class: "image",
              src: "/static/gxtx.png"
            })
          ]),
          vue.createElementVNode("view", { class: "tips" }, "1")
        ]),
        vue.createElementVNode("view", { class: "button-text" }, "\u4F9B\u9700\u63D0\u9192")
      ]),
      vue.createElementVNode("view", { class: "one-button" }, [
        vue.createElementVNode("view", { class: "top" }, [
          vue.createElementVNode("view", { class: "image-container bg2" }, [
            vue.createElementVNode("image", {
              class: "image",
              src: "/static/xttz.png"
            })
          ]),
          vue.createElementVNode("view", { class: "tips" }, "1")
        ]),
        vue.createElementVNode("view", { class: "button-text" }, "\u7CFB\u7EDF\u901A\u77E5")
      ])
    ]);
  }
  var ButtonArea = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$q], ["__scopeId", "data-v-1ed3d168"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/information/components/ButtonArea.vue"]]);
  const _sfc_main$s = {};
  function _sfc_render$p(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "InfoList-container" }, [
      (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (item) => {
        return vue.createElementVNode("view", {
          class: "one-info",
          key: item
        }, [
          vue.createElementVNode("view", { class: "left" }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(`image-container bg${item % 4}`)
            }, [
              vue.createElementVNode("image", {
                class: vue.normalizeClass(`icon${item % 4}`),
                src: "/static/yqyxqbj.png"
              }, null, 2)
            ], 2)
          ]),
          vue.createElementVNode("view", { class: "info-data" }, [
            vue.createElementVNode("view", { class: "info-title" }, [
              vue.createElementVNode("view", { class: "title" }, "\u6709\u4F01\u4E1A\u5BF9\u53D1\u5E03\u9700\u6C42\u62A5\u4EF7"),
              vue.createElementVNode("view", { class: "time" }, "2022-4-29")
            ]),
            vue.createElementVNode("view", { class: "info-details" }, "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247")
          ])
        ]);
      }), 64))
    ]);
  }
  var InfoList = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$p], ["__scopeId", "data-v-93f24cce"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/information/components/InfoList.vue"]]);
  const _sfc_main$r = {};
  function _sfc_render$o(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "GraBackground" });
  }
  var GraBackground = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$o], ["__scopeId", "data-v-1dc47b59"], ["__file", "C:/Users/Administrator/Desktop/test-template/components/GraBackground.vue"]]);
  const _sfc_main$q = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(GraBackground),
          vue.createElementVNode("view", { class: "navigationBarTitleText" }, "\u6D88\u606F"),
          vue.createVNode(ButtonArea),
          vue.createVNode(InfoList)
        ]);
      };
    }
  };
  var PagesInformationIndex = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "C:/Users/Administrator/Desktop/test-template/pages/information/index.vue"]]);
  const _sfc_main$p = {
    data() {
      return {};
    },
    methods: {
      personalInformation() {
        uni.navigateTo({
          url: "../../pages/personalInformation/personalInformation"
        });
      },
      openSettings() {
        uni.navigateTo({
          url: "../../pages/my/accountSettings/AccountSettings"
        });
      },
      switchSuppliers() {
        uni.navigateTo({
          url: "../../pages/my/suppliers/Suppliers"
        });
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "UserInfo-container" }, [
      vue.createElementVNode("view", { class: "setting" }, [
        vue.createElementVNode("image", {
          class: "icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.openSettings && $options.openSettings(...args)),
          src: "/static/sz.png"
        }),
        vue.createElementVNode("image", {
          class: "icon",
          src: "/static/jl.png"
        })
      ]),
      vue.createElementVNode("view", { class: "userInfo" }, [
        vue.createElementVNode("view", {
          onClick: _cache[1] || (_cache[1] = (...args) => $options.switchSuppliers && $options.switchSuppliers(...args)),
          class: "left"
        }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: "/static/chatHead.png"
          }),
          vue.createElementVNode("view", { class: "identity" }, [
            vue.createElementVNode("image", {
              class: "icon",
              src: ""
            }),
            vue.createElementVNode("view", null, "\u9700\u6C42\u65B9")
          ])
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createElementVNode("view", { class: "userName-container" }, [
            vue.createElementVNode("view", { class: "username" }, "\u5171\u540C\u5BCC\u88D5\u4EA7\u4E1A\u4E92\u52A9\u8054\u76DF"),
            vue.createElementVNode("view", {
              onClick: _cache[2] || (_cache[2] = (...args) => $options.personalInformation && $options.personalInformation(...args)),
              class: "homepage"
            }, [
              vue.createElementVNode("view", null, "\u4E2A\u4EBA\u4E3B\u9875"),
              vue.createElementVNode("image", {
                class: "icon",
                src: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "authentication" }, [
            vue.createElementVNode("image", {
              class: "icon1",
              src: ""
            }),
            vue.createElementVNode("view", { class: "auther-text" }, "\u5F85\u4F01\u4E1A\u8BA4\u8BC1"),
            vue.createElementVNode("image", {
              class: "icon2",
              src: ""
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "VIP-container" }, [
        vue.createElementVNode("image", {
          class: "crown",
          src: ""
        }),
        vue.createElementVNode("view", { class: "vip-text" }, "\u5F00\u901A\u8D85\u7EA7\u4F1A\u5458\uFF0C\u5C0A\u4EAB\u79C1\u4EBA\u5B9A\u5236\u996E\u98DF"),
        vue.createElementVNode("view", { class: "receive" }, "\u9886\u53D6\u6743\u76CA")
      ])
    ]);
  }
  var UserInfo = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$n], ["__scopeId", "data-v-02698530"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/components/UserInfo.vue"]]);
  const _sfc_main$o = {
    data() {
      return {
        menusList: [
          {
            name: "\u6211\u7684\u53D1\u5E03",
            src: "/static/wdfb.png",
            className: "icon1",
            url: "/pages/my/release/Release"
          },
          {
            name: "\u6211\u7684\u6536\u85CF",
            src: "/static/wdsc.png",
            className: "icon2",
            url: ""
          },
          {
            name: "\u6211\u7684\u5173\u6CE8",
            src: "/static/wdgz.png",
            className: "icon3",
            url: ""
          },
          {
            name: "\u516C\u53F8\u4E3B\u9875",
            src: "/static/gszy.png",
            className: "icon4",
            url: "/pages/my/companyHomepage/CompanyHomepage"
          }
        ]
      };
    },
    components: {},
    methods: {
      openPage(index) {
        uni.navigateTo({
          url: "../.." + this.menusList[index].url
        });
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "CommonFunctions box-container" }, [
      vue.createElementVNode("view", { class: "title" }, "\u5E38\u7528\u529F\u80FD"),
      vue.createElementVNode("view", { class: "action-container" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.menusList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            onClick: ($event) => $options.openPage(index),
            class: "one-button",
            key: index
          }, [
            vue.createElementVNode("image", {
              class: vue.normalizeClass(item.className),
              src: item.src
            }, null, 10, ["src"]),
            vue.createElementVNode("view", { class: "button-text" }, vue.toDisplayString(item.name), 1)
          ], 8, ["onClick"]);
        }), 128))
      ])
    ]);
  }
  var CommonFunctions = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$m], ["__scopeId", "data-v-5f08071e"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/components/CommonFunctions.vue"]]);
  const _sfc_main$n = {
    data() {
      return {
        menusList: [
          {
            name: "\u4F01\u4E1A\u8BA4\u8BC1",
            src: "/static/qyrz.png",
            className: "icon1",
            url: ""
          },
          {
            name: "\u8054\u7CFB\u5BA2\u670D",
            src: "/static/lxkf.png",
            className: "icon2",
            url: "/static/qyrz.png"
          },
          {
            name: "\u95EE\u9898\u53CD\u9988",
            src: "/static/wtfk.png",
            className: "icon3",
            url: ""
          },
          {
            name: "\u6211\u7684\u53D1\u7968",
            src: "/static/wdfp.png",
            className: "icon4",
            url: ""
          },
          {
            name: "\u4EA4\u6613\u4E3E\u62A5",
            src: "/static/jyjb.png",
            className: "icon5",
            url: ""
          },
          {
            name: "\u6211\u7684\u6D3B\u52A8",
            src: "/static/wdhd.png",
            className: "icon6",
            url: ""
          },
          {
            name: "\u6211\u7684\u6210\u4EA4",
            src: "/static/wdcj.png",
            className: "icon7",
            url: "/pages/my/transaction/Transaction"
          },
          {
            name: "\u5E38\u7528\u529F\u80FD",
            src: "/static/cygn.png",
            className: "icon8",
            url: ""
          },
          {
            name: "\u53D1\u5E03\u4F9B\u5E94",
            src: "/static/qyrz.png",
            className: "icon8",
            url: "/pages/my/supply/Supply"
          },
          {
            name: "\u53D1\u5E03\u9700\u6C42",
            src: "/static/qyrz.png",
            className: "icon8",
            url: "/pages/my/demand/Demand"
          },
          {
            name: "\u6CE8\u518C",
            src: "/static/qyrz.png",
            className: "icon8",
            url: "/pages/my/signUp/SignUp"
          },
          {
            name: "\u767B\u5F55",
            src: "/static/qyrz.png",
            className: "icon8",
            url: "/pages/my/longin/Longin"
          },
          {
            name: "\u4F01\u4E1A\u5217\u8868",
            src: "/static/qyrz.png",
            className: "icon8",
            url: "/pages/my/enterpriseList/EnterpriseList"
          },
          {
            name: "\u667A\u80FD\u5339\u914D",
            src: "/static/qyrz.png",
            className: "icon8",
            url: "/pages/my/smartMatching/SmartMatching"
          },
          {
            name: "\u4F01\u4E1A\u5165\u9A7B",
            src: "/static/qyrz.png",
            className: "icon8",
            url: "/pages/my/enterpriseSettled/EnterpriseSettled"
          },
          {
            name: "\u4F01\u4E1A\u4FE1\u606F",
            src: "/static/qyrz.png",
            className: "icon8",
            url: "/pages/my/companyInformation/CompanyInformation"
          }
        ]
      };
    },
    components: {},
    methods: {
      openPage(index) {
        uni.navigateTo({
          url: "../.." + this.menusList[index].url
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "OtherFunctions box-container" }, [
      vue.createElementVNode("view", { class: "title" }, "\u5176\u4ED6\u529F\u80FD"),
      vue.createElementVNode("view", { class: "action-container" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.menusList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "one-button",
            key: item.name,
            onClick: ($event) => $options.openPage(index)
          }, [
            vue.createElementVNode("image", {
              class: vue.normalizeClass(item.className),
              src: item.src
            }, null, 10, ["src"]),
            vue.createElementVNode("view", { class: "button-text" }, vue.toDisplayString(item.name), 1)
          ], 8, ["onClick"]);
        }), 128))
      ])
    ]);
  }
  var OtherFunctions = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$l], ["__scopeId", "data-v-78649b0c"], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/components/OtherFunctions.vue"]]);
  const _sfc_main$m = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(UserInfo),
          vue.createVNode(CommonFunctions),
          vue.createVNode(OtherFunctions)
        ]);
      };
    }
  };
  var PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/index.vue"]]);
  const _sfc_main$l = {
    props: {
      personalInformationList: []
    },
    data() {
      return {};
    },
    methods: {
      dynamicEvents(fn) {
        this[fn]();
      },
      accountSecurity() {
        uni.navigateTo({
          url: "../../my/accountSecurity/AccountSecurity"
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.personalInformationList, (item, index) => {
      return vue.openBlock(), vue.createElementBlock("view", {
        class: "propertyBox",
        key: index
      }, [
        vue.createElementVNode("view", {
          class: "personalInformation",
          onClick: ($event) => $options.dynamicEvents(item.fn)
        }, [
          vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.name), 1),
          vue.createElementVNode("view", { class: "detailsBox" }, [
            vue.createVNode(_component_view_text, null, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(item.text), 1)
              ]),
              _: 2
            }, 1024),
            vue.createElementVNode("image", {
              class: "detailsImg",
              src: item.src
            }, null, 8, ["src"])
          ])
        ], 8, ["onClick"])
      ]);
    }), 128);
  }
  var OptionsList = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-2ee24051"], ["__file", "C:/Users/Administrator/Desktop/test-template/components/OptionsList.vue"]]);
  const _sfc_main$k = {
    data() {
      return {
        personalInformationList: [
          {
            name: "\u6635\u79F0",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u5929\u5929\u5411\u4E0A"
          },
          {
            name: "\u6027\u522B",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u7537"
          },
          {
            name: "\u4E2A\u4EBA\u7B80\u4ECB",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          },
          {
            name: "\u6211\u7684\u4F01\u4E1A",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u5171\u540C\u5BCC\u88D5\u4EA7\u4E1A\u4E92\u52A9\u8054\u76DF"
          }
        ]
      };
    },
    components: {
      Title,
      OptionsList
    },
    methods: {}
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_OptionsList = vue.resolveComponent("OptionsList");
    return vue.openBlock(), vue.createElementBlock("view", { class: "personalInformationBox" }, [
      vue.createVNode(_component_Title, { Title: "\u4E2A\u4EBA\u4FE1\u606F" }),
      vue.createElementVNode("view", { class: "propertyBox" }, [
        vue.createElementVNode("view", { class: "personalInformation" }, [
          vue.createElementVNode("view", { class: "title" }, "\u5934\u50CF"),
          vue.createElementVNode("view", { class: "detailsBox" }, [
            vue.createElementVNode("image", {
              class: "chatHead",
              src: "/static/chatHead.png"
            }),
            vue.createElementVNode("image", {
              class: "detailsImg",
              src: "/static/rightClick.png"
            })
          ])
        ])
      ]),
      vue.createVNode(_component_OptionsList, { personalInformationList: $data.personalInformationList }, null, 8, ["personalInformationList"])
    ]);
  }
  var PagesPersonalInformationPersonalInformation = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/personalInformation/personalInformation.vue"]]);
  const _sfc_main$j = {
    data() {
      return {
        list1: [{
          name: "\u4E3B\u9898\u7C7B\u578B",
          src: "/static/rightClick.png",
          className: "",
          url: "",
          text: "\u672A\u5B8C\u5584"
        }],
        list2: [
          {
            name: "\u4F01\u4E1A\u540D\u79F0",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          },
          {
            name: "\u4FE1\u7528\u4EE3\u7801",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          },
          {
            name: "\u6CD5\u4EBA\u59D3\u540D",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          },
          {
            name: "\u6CD5\u4EBA\u8EAB\u4EFD\u8BC1",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          }
        ],
        list3: [
          {
            name: "\u5DE5\u827A",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          },
          {
            name: "\u6750\u6599",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          },
          {
            name: "\u578B\u53F7",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          },
          {
            name: "\u4F01\u4E1A\u89C4\u6A21",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          },
          {
            name: "\u751F\u4EA7\u80FD",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          },
          {
            name: "\u5730\u533A",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B8C\u5584"
          }
        ]
      };
    },
    components: {
      Title,
      OptionsList
    },
    methods: {}
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_OptionsList = vue.resolveComponent("OptionsList");
    return vue.openBlock(), vue.createElementBlock("view", { class: "companyHomepage" }, [
      vue.createVNode(_component_Title, { Title: "\u4F01\u4E1A\u4FE1\u606F" }),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.list1 }, null, 8, ["personalInformationList"])
      ]),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.list2 }, null, 8, ["personalInformationList"])
      ]),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.list3 }, null, 8, ["personalInformationList"])
      ]),
      vue.createElementVNode("view", { class: "" }, [
        vue.createElementVNode("button", { class: "btnSave" }, "\u4FDD\u5B58")
      ])
    ]);
  }
  var PagesMyCompanyHomepageCompanyHomepage = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/companyHomepage/CompanyHomepage.vue"]]);
  const _sfc_main$i = {
    data() {
      return {
        list1: [{
          name: "\u4F01\u4E1A\u4FE1\u606F",
          src: "/static/rightClick.png",
          className: "",
          url: "",
          text: "",
          fn: ""
        }],
        list2: [{
          name: "\u8D26\u53F7\u5B89\u5168",
          src: "/static/rightClick.png",
          className: "",
          url: "",
          text: "",
          fn: "accountSecurity"
        }],
        list3: [
          {
            name: "\u4F01\u4E1A\u4FE1\u606F",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          },
          {
            name: "\u4F01\u4E1A\u4FE1\u606F",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          },
          {
            name: "\u4F01\u4E1A\u4FE1\u606F",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          },
          {
            name: "\u4F01\u4E1A\u4FE1\u606F",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          }
        ],
        list4: [
          {
            name: "\u610F\u89C1\u53CD\u9988",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          },
          {
            name: "\u5173\u4E8E\u6211\u4EEC",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          },
          {
            name: "\u5E94\u7528\u6743\u9650\u8BF4\u660E",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          }
        ]
      };
    },
    components: {
      Title,
      OptionsList
    },
    methods: {
      btnExit() {
        uni.navigateTo({
          url: "../../my/longin/Longin"
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_view_text = vue.resolveComponent("view-text");
    const _component_OptionsList = vue.resolveComponent("OptionsList");
    return vue.openBlock(), vue.createElementBlock("view", { class: "accountSettingsBox" }, [
      vue.createVNode(_component_Title, { Title: "\u8D26\u6237\u8BBE\u7F6E" }),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createElementVNode("view", { class: "propertyBox" }, [
          vue.createElementVNode("view", { class: "personalInformation" }, [
            vue.createElementVNode("view", { class: "personalInformationLeft" }, [
              vue.createElementVNode("image", {
                class: "chatHead",
                src: "/static/chatHead.png"
              }),
              vue.createVNode(_component_view_text, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u5171\u540C\u5BCC\u88D5\u4EA7\u4E1A\u4E92\u52A9\u8054\u76DF")
                ]),
                _: 1
              })
            ]),
            vue.createElementVNode("view", { class: "detailsBox" }, [
              vue.createElementVNode("view", { class: "personalInformationName" }, "\u4E2A\u4EBA\u4FE1\u606F"),
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/rightClick.png"
              })
            ])
          ])
        ]),
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.list1 }, null, 8, ["personalInformationList"])
      ]),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.list2 }, null, 8, ["personalInformationList"])
      ]),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.list3 }, null, 8, ["personalInformationList"])
      ]),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.list4 }, null, 8, ["personalInformationList"])
      ]),
      vue.createElementVNode("view", { class: "" }, [
        vue.createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.btnExit && $options.btnExit(...args)),
          class: "btnExit"
        }, "\u9000\u51FA\u5F53\u524D\u8D26\u53F7")
      ])
    ]);
  }
  var PagesMyAccountSettingsAccountSettings = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/accountSettings/AccountSettings.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        List1: [
          {
            name: "\u4FEE\u6539\u7ED1\u5B9A\u624B\u673A\u53F7",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "18888888888"
          },
          {
            name: "\u4FEE\u6539\u767B\u5F55\u5BC6\u7801",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          },
          {
            name: "\u4FEE\u6539\u7ED1\u5B9A\u90AE\u7BB1",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          },
          {
            name: "\u6CE8\u9500\u8D26\u6237",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: ""
          }
        ],
        List2: [
          {
            name: "\u5B9E\u540D\u8BA4\u8BC1",
            src: "/static/rightClick.png",
            className: "",
            url: "",
            text: "\u672A\u5B9E\u540D"
          }
        ]
      };
    },
    components: {
      Title,
      OptionsList
    },
    methods: {}
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_OptionsList = vue.resolveComponent("OptionsList");
    return vue.openBlock(), vue.createElementBlock("view", { class: "accountSecurity" }, [
      vue.createVNode(_component_Title, { Title: "\u8D26\u6237\u4E0E\u5B89\u5168" }),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.List1 }, null, 8, ["personalInformationList"])
      ]),
      vue.createElementVNode("view", { class: "optionsList" }, [
        vue.createVNode(_component_OptionsList, { personalInformationList: $data.List2 }, null, 8, ["personalInformationList"])
      ])
    ]);
  }
  var PagesMyAccountSecurityAccountSecurity = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/accountSecurity/AccountSecurity.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        list: [
          {
            role: "\u4F9B\u5E94\u5546",
            illustrate: "\u6211\u6765\u63D0\u4F9B\u8BBE\u5907,\u6210\u4EA7\u52A0\u5DE5",
            src: "/static/0.png",
            btn: "\u5207\u6362\u4E3A\u91C7\u8D2D\u5546"
          },
          {
            role: "\u91C7\u8D2D\u5546",
            illustrate: "\u6211\u6709\u5236\u4F5C\u9700\u6C42,\u5BFB\u627E\u5382\u5546",
            src: "/static/xqf.png",
            btn: "\u5207\u6362\u4E3A\u9700\u6C42\u65B9"
          }
        ],
        is: true,
        num: 0
      };
    },
    components: {
      Title
    },
    methods: {
      btnExit() {
        this.is = !this.is;
        this.num = this.is == true ? 0 : 1;
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", { class: "suppliersBox" }, [
      vue.createVNode(_component_Title),
      vue.createElementVNode("view", { class: "currentBox" }, [
        vue.createVNode(_component_view_text, { class: "current" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u5F53\u524D\u4E3A")
          ]),
          _: 1
        }),
        vue.createVNode(_component_view_text, { class: "role" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($data.list[$data.num].role), 1)
          ]),
          _: 1
        })
      ]),
      vue.createElementVNode("view", { class: "illustrate" }, [
        vue.createVNode(_component_view_text, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($data.list[$data.num].illustrate), 1)
          ]),
          _: 1
        })
      ]),
      vue.createElementVNode("view", { class: "img" }, [
        vue.createElementVNode("image", {
          src: $data.list[$data.num].src
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "" }, [
        vue.createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.btnExit && $options.btnExit(...args)),
          class: "btnExit"
        }, vue.toDisplayString($data.list[$data.num].btn), 1)
      ])
    ]);
  }
  var PagesMySuppliersSuppliers = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/suppliers/Suppliers.vue"]]);
  const _sfc_main$f = {
    data() {
      return {};
    },
    props: {
      list: []
    },
    methods: {
      open(index) {
        uni.navigateTo({
          url: "../.." + this.list[index].url
        });
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", { class: "releaseBox" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.list, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "product",
          key: index,
          onClick: ($event) => $options.open(index)
        }, [
          vue.createElementVNode("view", { class: "imageBox" }, [
            vue.createElementVNode("image", {
              class: "icon",
              src: "/static/tc2.png"
            })
          ]),
          vue.createElementVNode("view", { class: "message" }, [
            vue.createVNode(_component_view_text, { class: "text1" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(item.text1), 1)
              ]),
              _: 2
            }, 1024),
            vue.createVNode(_component_view_text, { class: "text2" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(item.text2), 1)
              ]),
              _: 2
            }, 1024),
            vue.createElementVNode("view", { class: "text3box" }, [
              vue.createVNode(_component_view_text, { class: "text3" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(item.text3), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            vue.createElementVNode("view", { class: "text4Box" }, [
              vue.createVNode(_component_view_text, { class: "text4" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u610F\u5411\u91D1\uFF1A")
                ]),
                _: 1
              }),
              vue.createVNode(_component_view_text, { class: "text5" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\uFFE5" + vue.toDisplayString(item.text5) + "\u5143", 1)
                ]),
                _: 2
              }, 1024)
            ])
          ])
        ], 8, ["onClick"]);
      }), 128))
    ]);
  }
  var ProductsList = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-9f491c06"], ["__file", "C:/Users/Administrator/Desktop/test-template/components/ProductsList.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        list1: [
          {
            text1: "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247",
            text2: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF...",
            text3: "\u4F01\u4E1A\u63A8\u8350",
            text5: "3499",
            url: "/my/productDetails/ProductDetails"
          },
          {
            text1: "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247",
            text2: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF...",
            text3: "\u5B98\u65B9\u63A8\u8350",
            text5: "3499",
            url: "/my/productDetails/ProductDetails"
          },
          {
            text1: "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247",
            text2: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF...",
            text3: "\u4F01\u4E1A\u63A8\u8350",
            text5: "3499",
            url: "/my/productDetails/ProductDetails"
          },
          {
            text1: "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247",
            text2: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF...",
            text3: "\u4F01\u4E1A\u63A8\u8350",
            text5: "3499",
            url: "/my/productDetails/ProductDetails"
          }
        ]
      };
    },
    components: {
      Title,
      ProductsList
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_ProductsList = vue.resolveComponent("ProductsList");
    return vue.openBlock(), vue.createElementBlock("view", { class: "releaseBox" }, [
      vue.createVNode(_component_Title, { Title: "\u6211\u7684\u53D1\u5E03" }),
      vue.createVNode(_component_ProductsList, {
        class: "productsList",
        list: $data.list1
      }, null, 8, ["list"])
    ]);
  }
  var PagesMyReleaseRelease = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/release/Release.vue"]]);
  const _sfc_main$d = {
    data() {
      return {};
    },
    components: {
      Title
    },
    methods: {}
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", { class: "signUpBox" }, [
      vue.createVNode(_component_Title, { Title: "\u624B\u673A\u6CE8\u518C" }),
      vue.createElementVNode("view", { class: "roleBox" }, [
        vue.createElementVNode("view", { class: "role1" }, [
          vue.createElementVNode("view", { class: "head" }),
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u6211\u662F\u9700\u6C42\u65B9")
            ]),
            _: 1
          }),
          vue.createVNode(_component_view_text, { class: "text3" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u6211\u8981\u627E\u8D44\u6E90\u529E\u4E8B")
            ]),
            _: 1
          })
        ]),
        vue.createElementVNode("view", { class: "role2" }, [
          vue.createElementVNode("view", { class: "head" }),
          vue.createVNode(_component_view_text, { class: "text2" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u6211\u662F\u4F9B\u5E94\u65B9")
            ]),
            _: 1
          }),
          vue.createVNode(_component_view_text, { class: "text4" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u6211\u8981\u627E\u9700\u6C42\u5408\u4F5C")
            ]),
            _: 1
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "signUp" }, [
        vue.createElementVNode("input", {
          class: "input1",
          "placeholder-style": "font-size:28rpx;color:#ACACAC;",
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
        }),
        vue.createElementVNode("input", {
          class: "input1",
          "placeholder-style": "font-size:28rpx;color:#ACACAC;",
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"
        }),
        vue.createElementVNode("input", {
          class: "input1",
          "placeholder-style": "font-size:28rpx;color:#ACACAC;",
          type: "text",
          placeholder: "\u8BBE\u7F6E\u5BC6\u7801,6-16\u4F4D"
        }),
        vue.createElementVNode("input", {
          class: "input2",
          "placeholder-style": "font-size:28rpx;color:#ACACAC;",
          type: "text",
          placeholder: "\u786E\u8BA4\u5BC6\u7801,6-16\u4F4D"
        }),
        vue.createVNode(_component_view_text, { class: "getProperty" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("|\xA0\u83B7\u53D6\u9A8C\u8BC1\u7801")
          ]),
          _: 1
        })
      ]),
      vue.createElementVNode("view", { class: "login" }, " \u6CE8\u518C "),
      vue.createElementVNode("view", { class: "agreement" }, [
        vue.createElementVNode("image", {
          class: "img",
          src: "/static/consent.png"
        }),
        vue.createVNode(_component_view_text, { class: "text1" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u5DF2\u9605\u8BFB\u5E76\u5DF2\u540C\u610F\xA0")
          ]),
          _: 1
        }),
        vue.createVNode(_component_view_text, { class: "text2" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\u300Axxx\u670D\u52A1\u534F\u8BAE\u300B")
          ]),
          _: 1
        }),
        vue.createVNode(_component_view_text, { class: "text2" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("\xA0\u300A\u9690\u79C1\u653F\u7B56\u300B")
          ]),
          _: 1
        })
      ])
    ]);
  }
  var PagesMySignUpSignUp = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/signUp/SignUp.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        list1: [
          {
            text1: "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247",
            text2: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF...",
            text3: "\u4F01\u4E1A\u63A8\u8350",
            text5: "3499",
            url: "/my/transactionDemandInformation/TransactionDemandInformation"
          },
          {
            text1: "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247",
            text2: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF...",
            text3: "\u5B98\u65B9\u63A8\u8350",
            text5: "3499",
            url: "/my/transactionDemandInformation/TransactionDemandInformation"
          },
          {
            text1: "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247",
            text2: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF...",
            text3: "\u4F01\u4E1A\u63A8\u8350",
            text5: "3499",
            url: "/my/transactionDemandInformation/TransactionDemandInformation"
          },
          {
            text1: "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247",
            text2: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF...",
            text3: "\u4F01\u4E1A\u63A8\u8350",
            text5: "3499",
            url: "/my/transactionDemandInformation/TransactionDemandInformation"
          }
        ]
      };
    },
    components: {
      Title,
      ProductsList
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_ProductsList = vue.resolveComponent("ProductsList");
    return vue.openBlock(), vue.createElementBlock("view", { class: "transactionBox" }, [
      vue.createVNode(_component_Title, { Title: "\u6211\u7684\u6210\u4EA4" }),
      vue.createVNode(_component_ProductsList, {
        class: "productsList",
        list: $data.list1
      }, null, 8, ["list"])
    ]);
  }
  var PagesMyTransactionTransaction = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/transaction/Transaction.vue"]]);
  const _sfc_main$b = {
    name: "RequirementsInformation",
    data() {
      return {};
    },
    props: {
      msgList: [],
      title: {
        text1: "",
        text2: ""
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "requirements" }, [
        vue.createVNode(_component_view_text, { class: "text1" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.title.text1), 1)
          ]),
          _: 1
        }),
        $props.title.is ? (vue.openBlock(), vue.createBlock(_component_view_text, {
          key: 0,
          class: "text2"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.title.text2), 1)
          ]),
          _: 1
        })) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", { class: "msgBox" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.msgList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "msg",
            key: index
          }, [
            vue.createVNode(_component_view_text, { class: "text1" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(item.title) + "\uFF1A", 1)
              ]),
              _: 2
            }, 1024),
            vue.createVNode(_component_view_text, { class: "text2" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(item.msg), 1)
              ]),
              _: 2
            }, 1024)
          ]);
        }), 128))
      ])
    ]);
  }
  var RequirementsInformation = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-cb70521e"], ["__file", "C:/Users/Administrator/Desktop/test-template/components/RequirementsInformation.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        msgList: [
          {
            title: "\u9700\u6C42\u6807\u9898",
            msg: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF\u5927\u8005..."
          },
          {
            title: "\u6240\u9700\u6570\u91CF",
            msg: "20000"
          },
          {
            title: "\u9700\u6C42\u9884\u7B97",
            msg: "100\uFF0C000\u5143"
          },
          {
            title: "\u5DE5  \u827A",
            msg: "\u6A21\u5EA7\u5E95\u9762\u52A0\u5DE5\u3001\u6B63\u9762\u673A\u6784\u52A0\u5DE5\u5B89\u5168..."
          },
          {
            title: "\u6750  \u6599",
            msg: "\u94A2\u6A21\u7248"
          },
          {
            title: "\u578B  \u53F7",
            msg: "\u7535\u5B50\u96F6\u90E8\u4EF6"
          },
          {
            title: "\u4EA4\u4ED8\u65E5\u671F",
            msg: "2024-4-26"
          },
          {
            title: "\u4EA4\u4ED8\u5730\u70B9",
            msg: "\u6CB3\u5357\u7701\u90D1\u5DDE\u5E02\u91D1\u6C34\u533A"
          }
        ],
        title: {
          text1: "\u9700\u6C42\u4FE1\u606F",
          text2: "\u62DB\u6807\u4E2D",
          is: true
        },
        is: true
      };
    },
    components: {
      Title,
      RequirementsInformation
    },
    methods: {
      evaluate() {
        this.is = !this.is;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_view_text = vue.resolveComponent("view-text");
    const _component_RequirementsInformation = vue.resolveComponent("RequirementsInformation");
    return vue.openBlock(), vue.createElementBlock("view", { class: "transactionDemandInformationBox" }, [
      vue.createVNode(_component_Title, { Title: "\u6211\u7684\u6210\u4EA4" }),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "company" }, [
          vue.createElementVNode("view", { class: "ImgBox" }, [
            vue.createElementVNode("image", {
              class: "Img",
              src: "/static/logo.png"
            })
          ]),
          vue.createElementVNode("view", { class: "title" }, [
            vue.createVNode(_component_view_text, { class: "text1" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("\u6CB3\u5357XXXXXX\u6709\u9650\u516C\u53F8")
              ]),
              _: 1
            }),
            vue.createVNode(_component_view_text, { class: "text2" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("\u8054\u7CFB\u65B9\u5F0F\uFF1A152XXXXXX49")
              ]),
              _: 1
            })
          ])
        ]),
        $data.is ? (vue.openBlock(), vue.createBlock(_component_RequirementsInformation, {
          key: 0,
          title: $data.title,
          msgList: $data.msgList
        }, null, 8, ["title", "msgList"])) : vue.createCommentVNode("v-if", true),
        !$data.is ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "score"
        }, [
          vue.createVNode(_component_view_text, null, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u8BC4\u5206\u7B49\u7EA7")
            ]),
            _: 1
          }),
          vue.createElementVNode("view", { class: "" }, [
            vue.createElementVNode("image", {
              class: "Img",
              src: "/static/score1.png"
            }),
            vue.createElementVNode("image", {
              class: "Img",
              src: "/static/score1.png"
            }),
            vue.createElementVNode("image", {
              class: "Img",
              src: "/static/score1.png"
            }),
            vue.createElementVNode("image", {
              class: "Img",
              src: "/static/score1.png"
            }),
            vue.createElementVNode("image", {
              class: "Img",
              src: "/static/score1.png"
            })
          ])
        ])) : vue.createCommentVNode("v-if", true),
        !$data.is ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "satisfaction"
        }, " \u6EE1\u610F\u4F60\u5C31\u5938\u4E00\u5938\uFF0C\u70B9\u51FB\u8FD9\u91CC\u8F93\u5165\u8BC4\u4EF7 ")) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.evaluate && $options.evaluate(...args)),
        class: "evaluate"
      }, " \u8BC4\u4EF7 ")
    ]);
  }
  var PagesMyTransactionDemandInformationTransactionDemandInformation = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/transactionDemandInformation/TransactionDemandInformation.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        msgList: [
          {
            title: "\u9700\u6C42\u6807\u9898",
            msg: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF\u5927\u8005..."
          },
          {
            title: "\u6240\u9700\u6570\u91CF",
            msg: "20000"
          },
          {
            title: "\u9700\u6C42\u9884\u7B97",
            msg: "100\uFF0C000\u5143"
          },
          {
            title: "\u5DE5  \u827A",
            msg: "\u6A21\u5EA7\u5E95\u9762\u52A0\u5DE5\u3001\u6B63\u9762\u673A\u6784\u52A0\u5DE5\u5B89\u5168..."
          },
          {
            title: "\u6750  \u6599",
            msg: "\u94A2\u6A21\u7248"
          },
          {
            title: "\u578B  \u53F7",
            msg: "\u7535\u5B50\u96F6\u90E8\u4EF6"
          },
          {
            title: "\u4EA4\u4ED8\u65E5\u671F",
            msg: "2024-4-26"
          },
          {
            title: "\u4EA4\u4ED8\u5730\u70B9",
            msg: "\u6CB3\u5357\u7701\u90D1\u5DDE\u5E02\u91D1\u6C34\u533A"
          }
        ],
        title: {
          text1: "\u9700\u6C42\u4FE1\u606F",
          text2: "\u62DB\u6807\u4E2D",
          is: true
        }
      };
    },
    components: {
      Title,
      RequirementsInformation
    },
    methods: {}
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_RequirementsInformation = vue.resolveComponent("RequirementsInformation");
    return vue.openBlock(), vue.createElementBlock("view", { class: "productDetailsBox" }, [
      vue.createVNode(_component_Title, { Title: "\u9700\u6C42\u8BE6\u60C5" }),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createVNode(_component_RequirementsInformation, {
          title: $data.title,
          msgList: $data.msgList
        }, null, 8, ["title", "msgList"])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u62A5\u4EF7\u4FE1\u606F "),
        vue.createElementVNode("view", { class: "data-list" }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(4, (item) => {
            return vue.createElementVNode("view", {
              class: "quote",
              key: item
            }, [
              vue.createElementVNode("image", {
                class: "quote-img",
                src: "/static/tc2.png"
              }),
              vue.createElementVNode("view", { class: "quote-right" }, [
                vue.createElementVNode("view", { class: "quote-title" }, "\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247"),
                vue.createElementVNode("view", { class: "quote-details" }, "\u8054\u7CFB\u65B9\u5F0F\uFF1A152XXXXXX49"),
                vue.createElementVNode("view", { class: "price-container" }, [
                  vue.createElementVNode("view", { class: "price" }, [
                    vue.createElementVNode("text", { class: "text1" }, "\u9884\u7B97\uFF1A"),
                    vue.createElementVNode("text", { class: "text2" }, "\uFFE53499"),
                    vue.createElementVNode("text", { class: "text1" }, "\u5143")
                  ]),
                  vue.createElementVNode("navigator", { class: "quote-btn" }, "\u6210\u4EA4")
                ])
              ])
            ]);
          }), 64))
        ])
      ])
    ]);
  }
  var PagesMyProductDetailsProductDetails = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/productDetails/ProductDetails.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    components: {
      Title
    },
    methods: {
      open() {
        uni.navigateTo({
          url: "/pages/my/supplyFish/SupplyFish"
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_Title, { Title: "\u53D1\u5E03" }),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u4F9B\u5E94\u4FE1\u606F "),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u4F9B\u5E94\u6807\u9898")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            type: "text",
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input2" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u4F9B\u5E94\u63CF\u8FF0")
            ]),
            _: 1
          }),
          vue.createElementVNode("textarea", {
            type: "textarea",
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u63CF\u8FF0"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u4F9B\u5E94\u4FE1\u606F "),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u5DE5\u827A")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u6750\u6599")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u578B\u53F7")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u5B9E\u7269\u53C2\u7167 "),
        vue.createElementVNode("view", { class: "imgBox" }, [
          vue.createElementVNode("image", {
            class: "detailsImg",
            src: "/static/tc2.png"
          }),
          vue.createElementVNode("image", {
            class: "detailsImg",
            src: "/static/tc3.png"
          }),
          vue.createElementVNode("image", {
            class: "detailsImg",
            src: "/static/tc4.png"
          }),
          vue.createElementVNode("image", {
            class: "detailsImg",
            src: "/static/tc2.png"
          }),
          vue.createElementVNode("image", {
            class: "detailsImg",
            src: "/static/tc3.png"
          }),
          vue.createElementVNode("image", {
            class: "detailsImg",
            src: "/static/add.png"
          })
        ])
      ]),
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.open && $options.open(...args)),
        class: "btn"
      }, " \u7ACB\u5373\u53D1\u5E03 ")
    ]);
  }
  var PagesMySupplySupply = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/supply/Supply.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    components: {
      Title
    },
    methods: {
      open() {
        uni.navigateTo({
          url: "/pages/my/requirementsDetails/RequirementsDetails"
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_Title, { Title: "\u53D1\u5E03" }),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u9700\u6C42\u4FE1\u606F "),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u9700\u6C42\u6807\u9898")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u6240\u9700\u6570\u91CF")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u9700\u6C42\u9884\u7B97")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u4EA4\u4ED8\u65E5\u671F")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u4EA4\u4ED8\u5730\u70B9")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u8BBE\u5907\u4FE1\u606F "),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u5DE5\u827A")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u6750\u6599")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ]),
        vue.createElementVNode("view", { class: "input1" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u578B\u53F7")
            ]),
            _: 1
          }),
          vue.createElementVNode("input", {
            "placeholder-style": "font-size:28rpx;color:#ACACAC;",
            type: "text",
            placeholder: "\u8BF7\u586B\u5199\u4F9B\u5E94\u6807\u9898"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u9700\u6C42\u8BE6\u60C5 "),
        vue.createElementVNode("view", { class: "inputBox" }, [
          vue.createElementVNode("view", { class: "input2" }, [
            vue.createVNode(_component_view_text, { class: "text1" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("\u9700\u6C42\u63CF\u8FF0")
              ]),
              _: 1
            }),
            vue.createElementVNode("textarea", {
              type: "textarea",
              "placeholder-style": "font-size:28rpx;color:#ACACAC;",
              placeholder: "\u9700\u6C42\u63CF\u8FF0"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "xq" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u5B9E\u7269\u53C2\u7167\uFF08\u9009\u586B\uFF09")
            ]),
            _: 1
          }),
          vue.createElementVNode("view", { class: "input2" }, [
            vue.createElementVNode("view", { class: "imgBox" }, [
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/tc3.png"
              }),
              vue.createElementVNode("view", { style: { "width": "10rpx" } }),
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/tc2.png"
              }),
              vue.createElementVNode("view", { style: { "width": "10rpx" } }),
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/add.png"
              })
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.open && $options.open(...args)),
        class: "btn"
      }, " \u7ACB\u5373\u53D1\u5E03 ")
    ]);
  }
  var PagesMyDemandDemand = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/demand/Demand.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        msgList: [
          {
            title: "\u4F9B\u5E94\u6807\u9898",
            msg: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF\u5927\u8005..."
          },
          {
            title: "\u6240\u9700\u6570\u91CF",
            msg: "20000"
          },
          {
            title: "\u4F9B\u5E94\u9884\u7B97",
            msg: "100\uFF0C000\u5143"
          },
          {
            title: "\u5DE5 \u827A",
            msg: "\u6A21\u5EA7\u5E95\u9762\u52A0\u5DE5\u3001\u6B63\u9762\u673A\u6784\u52A0\u5DE5\u5B89\u5168..."
          },
          {
            title: "\u6750  \u6599",
            msg: "\u94A2\u6A21\u7248"
          },
          {
            title: "\u578B  \u53F7",
            msg: "\u7535\u5B50\u96F6\u90E8\u4EF6"
          },
          {
            title: "\u4EA4\u4ED8\u65E5\u671F",
            msg: "2024-4-26"
          },
          {
            title: "\u4EA4\u4ED8\u5730\u70B9",
            msg: "\u6CB3\u5357\u7701\u90D1\u5DDE\u5E02\u91D1\u6C34\u533A"
          }
        ],
        msgList2: [
          {
            title: "\u5355\u4F4D\u540D\u79F0",
            msg: "\u6CB3\u5357xxx\u6709\u9650\u516C\u53F8"
          },
          {
            title: "\u59D3  \u540D",
            msg: "\u5B98\u65B9\u53D1\u5E03\uFF08\u5DF2\u8BA4\u8BC1\uFF09"
          },
          {
            title: "\u804C  \u52A1",
            msg: "\u91C7\u8D2D/\u4F9B\u5E94"
          },
          {
            title: "\u8054\u7CFB\u7535\u8BDD",
            msg: "152XXXXXX49"
          }
        ],
        title: {
          text1: "\u4F9B\u5E94\u4FE1\u606F",
          text2: "\u62DB\u6807\u4E2D",
          is: true
        },
        title2: {
          text1: "\u8054\u7CFB\u4FE1\u606F",
          text2: "",
          is: false
        }
      };
    },
    components: {
      Title,
      RequirementsInformation
    },
    methods: {
      open() {
        uni.navigateTo({
          url: "/pages/my/supplyFish/SupplyFish"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_RequirementsInformation = vue.resolveComponent("RequirementsInformation");
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_Title, { Title: "\u4F9B\u5E94\u8BE6\u60C5" }),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createVNode(_component_RequirementsInformation, {
          title: $data.title,
          msgList: $data.msgList
        }, null, 8, ["title", "msgList"])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u4F9B\u5E94\u8BE6\u60C5 "),
        vue.createElementVNode("view", { class: "inputBox" }, [
          vue.createElementVNode("view", { class: "input2" }, [
            vue.createVNode(_component_view_text, { class: "text1" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("\u4F9B\u5E94\u63CF\u8FF0")
              ]),
              _: 1
            }),
            vue.createElementVNode("textarea", {
              type: "textarea",
              "placeholder-style": "font-size:28rpx;color:#ACACAC;",
              placeholder: "\u4F9B\u5E94\u63CF\u8FF0"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u5B9E\u7269\u53C2\u7167")
            ]),
            _: 1
          }),
          vue.createElementVNode("view", { class: "input2" }, [
            vue.createElementVNode("view", { class: "imgBox" }, [
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/tc2.png"
              }),
              vue.createElementVNode("view", { style: { "width": "10rpx" } }),
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/tc3.png"
              }),
              vue.createElementVNode("view", { style: { "width": "10rpx" } }),
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/add.png"
              })
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createVNode(_component_RequirementsInformation, {
          title: $data.title2,
          msgList: $data.msgList2
        }, null, 8, ["title", "msgList"])
      ]),
      vue.createElementVNode("view", { class: "btn" }, " \u6211\u8981\u62A5\u4EF7 ")
    ]);
  }
  var PagesMyRequirementsDetailsRequirementsDetails = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/requirementsDetails/RequirementsDetails.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        msgList: [
          {
            title: "\u9700\u6C42\u6807\u9898",
            msg: "\u4F01\u4E1A\u9700\u5927\u91CF\u91C7\u8D2D\u624B\u673A\u82AF\u7247\uFF0C\u91CF\u5927\u8005..."
          },
          {
            title: "\u6240\u9700\u6570\u91CF",
            msg: "20000"
          },
          {
            title: "\u9700\u6C42\u9884\u7B97",
            msg: "100\uFF0C000\u5143"
          },
          {
            title: "\u5DE5 \u827A",
            msg: "\u6A21\u5EA7\u5E95\u9762\u52A0\u5DE5\u3001\u6B63\u9762\u673A\u6784\u52A0\u5DE5\u5B89\u5168..."
          },
          {
            title: "\u6750  \u6599",
            msg: "\u94A2\u6A21\u7248"
          },
          {
            title: "\u578B  \u53F7",
            msg: "\u7535\u5B50\u96F6\u90E8\u4EF6"
          },
          {
            title: "\u4EA4\u4ED8\u65E5\u671F",
            msg: "2024-4-26"
          },
          {
            title: "\u4EA4\u4ED8\u5730\u70B9",
            msg: "\u6CB3\u5357\u7701\u90D1\u5DDE\u5E02\u91D1\u6C34\u533A"
          }
        ],
        msgList2: [
          {
            title: "\u5355\u4F4D\u540D\u79F0",
            msg: "\u6CB3\u5357xxx\u6709\u9650\u516C\u53F8"
          },
          {
            title: "\u59D3  \u540D",
            msg: "\u5B98\u65B9\u53D1\u5E03\uFF08\u5DF2\u8BA4\u8BC1\uFF09"
          },
          {
            title: "\u804C  \u52A1",
            msg: "\u91C7\u8D2D/\u9700\u6C42"
          },
          {
            title: "\u8054\u7CFB\u7535\u8BDD",
            msg: "152XXXXXX49"
          }
        ],
        title: {
          text1: "\u9700\u6C42\u4FE1\u606F",
          text2: "\u62DB\u6807\u4E2D",
          is: true
        },
        title2: {
          text1: "\u8054\u7CFB\u4FE1\u606F",
          text2: "",
          is: false
        }
      };
    },
    components: {
      Title,
      RequirementsInformation
    },
    methods: {
      open() {
        uni.navigateTo({
          url: "/pages/my/supplyFish/SupplyFish"
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Title = vue.resolveComponent("Title");
    const _component_RequirementsInformation = vue.resolveComponent("RequirementsInformation");
    const _component_view_text = vue.resolveComponent("view-text");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_Title, { Title: "\u9700\u6C42\u8BE6\u60C5" }),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createVNode(_component_RequirementsInformation, {
          title: $data.title,
          msgList: $data.msgList
        }, null, 8, ["title", "msgList"])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "requirements" }, " \u9700\u6C42\u8BE6\u60C5 "),
        vue.createElementVNode("view", { class: "inputBox" }, [
          vue.createElementVNode("view", { class: "input2" }, [
            vue.createVNode(_component_view_text, { class: "text1" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("\u9700\u6C42\u63CF\u8FF0")
              ]),
              _: 1
            }),
            vue.createElementVNode("textarea", {
              type: "textarea",
              "placeholder-style": "font-size:28rpx;color:#ACACAC;",
              placeholder: "\u9700\u6C42\u63CF\u8FF0"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "" }, [
          vue.createVNode(_component_view_text, { class: "text1" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u5B9E\u7269\u53C2\u7167")
            ]),
            _: 1
          }),
          vue.createElementVNode("view", { class: "input2" }, [
            vue.createElementVNode("view", { class: "imgBox" }, [
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/tc2.png"
              }),
              vue.createElementVNode("view", { style: { "width": "10rpx" } }),
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/tc3.png"
              }),
              vue.createElementVNode("view", { style: { "width": "10rpx" } }),
              vue.createElementVNode("image", {
                class: "detailsImg",
                src: "/static/add.png"
              })
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createVNode(_component_RequirementsInformation, {
          title: $data.title2,
          msgList: $data.msgList2
        }, null, 8, ["title", "msgList"])
      ]),
      vue.createElementVNode("view", { class: "btn" }, " \u6211\u8981\u62A5\u4EF7 ")
    ]);
  }
  var PagesMySupplyFishSupplyFish = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/supplyFish/SupplyFish.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesMySmartMatchingSmartMatching = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/smartMatching/SmartMatching.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesMyEnterpriseListEnterpriseList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/enterpriseList/EnterpriseList.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesMyEnterpriseSettledEnterpriseSettled = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/enterpriseSettled/EnterpriseSettled.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesMyCompanyInformationCompanyInformation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/Administrator/Desktop/test-template/pages/my/companyInformation/CompanyInformation.vue"]]);
  __definePage("pages/my/longin/Longin", PagesMyLonginLongin);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/supAndDem/index", PagesSupAndDemIndex);
  __definePage("pages/information/index", PagesInformationIndex);
  __definePage("pages/my/index", PagesMyIndex);
  __definePage("pages/personalInformation/personalInformation", PagesPersonalInformationPersonalInformation);
  __definePage("pages/my/companyHomepage/CompanyHomepage", PagesMyCompanyHomepageCompanyHomepage);
  __definePage("pages/my/accountSettings/AccountSettings", PagesMyAccountSettingsAccountSettings);
  __definePage("pages/my/accountSecurity/AccountSecurity", PagesMyAccountSecurityAccountSecurity);
  __definePage("pages/my/suppliers/Suppliers", PagesMySuppliersSuppliers);
  __definePage("pages/my/release/Release", PagesMyReleaseRelease);
  __definePage("pages/my/signUp/SignUp", PagesMySignUpSignUp);
  __definePage("pages/my/transaction/Transaction", PagesMyTransactionTransaction);
  __definePage("pages/my/transactionDemandInformation/TransactionDemandInformation", PagesMyTransactionDemandInformationTransactionDemandInformation);
  __definePage("pages/my/productDetails/ProductDetails", PagesMyProductDetailsProductDetails);
  __definePage("pages/my/supply/Supply", PagesMySupplySupply);
  __definePage("pages/my/demand/Demand", PagesMyDemandDemand);
  __definePage("pages/my/requirementsDetails/RequirementsDetails", PagesMyRequirementsDetailsRequirementsDetails);
  __definePage("pages/my/supplyFish/SupplyFish", PagesMySupplyFishSupplyFish);
  __definePage("pages/my/smartMatching/SmartMatching", PagesMySmartMatchingSmartMatching);
  __definePage("pages/my/enterpriseList/EnterpriseList", PagesMyEnterpriseListEnterpriseList);
  __definePage("pages/my/enterpriseSettled/EnterpriseSettled", PagesMyEnterpriseSettledEnterpriseSettled);
  __definePage("pages/my/companyInformation/CompanyInformation", PagesMyCompanyInformationCompanyInformation);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
      uni.reLaunch({
        url: "/pages/my/longin/Longin",
        success: () => {
          plus.navigator.closeSplashscreen();
        }
      });
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:15", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:18", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/test-template/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
