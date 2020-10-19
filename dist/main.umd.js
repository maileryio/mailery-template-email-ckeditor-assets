(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory((global.mailery = global.mailery || {}, global.mailery.template = global.mailery.template || {}, global.mailery.template.email = global.mailery.template.email || {}, global.mailery.template.email.ckeditor = {})));
}(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var ckeditor = createCommonjsModule(function (module, exports) {
	  /*!*
	  * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
	  * For licensing, see LICENSE.md.
	  */
	  !function (t, e) {
	     module.exports = e() ;
	  }(window, function () {
	    return function (t) {
	      var e = {};

	      function n(o) {
	        if (e[o]) return e[o].exports;
	        var r = e[o] = {
	          i: o,
	          l: !1,
	          exports: {}
	        };
	        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
	      }

	      return n.m = t, n.c = e, n.d = function (t, e, o) {
	        n.o(t, e) || Object.defineProperty(t, e, {
	          enumerable: !0,
	          get: o
	        });
	      }, n.r = function (t) {
	        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
	          value: "Module"
	        }), Object.defineProperty(t, "__esModule", {
	          value: !0
	        });
	      }, n.t = function (t, e) {
	        if (1 & e && (t = n(t)), 8 & e) return t;
	        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
	        var o = Object.create(null);
	        if (n.r(o), Object.defineProperty(o, "default", {
	          enumerable: !0,
	          value: t
	        }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function (e) {
	          return t[e];
	        }.bind(null, r));
	        return o;
	      }, n.n = function (t) {
	        var e = t && t.__esModule ? function () {
	          return t.default;
	        } : function () {
	          return t;
	        };
	        return n.d(e, "a", e), e;
	      }, n.o = function (t, e) {
	        return Object.prototype.hasOwnProperty.call(t, e);
	      }, n.p = "", n(n.s = 1);
	    }([function (t, e) {
	      function n(t, e) {
	        t.onload = function () {
	          this.onerror = this.onload = null, e(null, t);
	        }, t.onerror = function () {
	          this.onerror = this.onload = null, e(new Error("Failed to load " + this.src), t);
	        };
	      }

	      function o(t, e) {
	        t.onreadystatechange = function () {
	          "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, e(null, t));
	        };
	      }

	      t.exports = function (t, e, r) {
	        var i = document.head || document.getElementsByTagName("head")[0],
	            a = document.createElement("script");
	        "function" == typeof e && (r = e, e = {}), e = e || {}, r = r || function () {}, a.type = e.type || "text/javascript", a.charset = e.charset || "utf8", a.async = !("async" in e) || !!e.async, a.src = t, e.attrs && function (t, e) {
	          for (var n in e) t.setAttribute(n, e[n]);
	        }(a, e.attrs), e.text && (a.text = "" + e.text), ("onload" in a ? n : o)(a, r), a.onload || n(a, r), i.appendChild(a);
	      };
	    }, function (t, e, n) {

	      n.r(e);
	      var o = n(0),
	          r = n.n(o);
	      let i;

	      function a(t) {
	        if ("CKEDITOR" in window) return Promise.resolve(CKEDITOR);
	        if (t.length < 1) throw new TypeError("CKEditor URL must be a non-empty string.");
	        return i || (i = a.scriptLoader(t).then(t => (i = void 0, t))), i;
	      }

	      a.scriptLoader = t => new Promise((e, n) => {
	        r()(t, t => t ? n(t) : window.CKEDITOR ? void e(CKEDITOR) : n(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace.")));
	      });

	      var s = {
	        name: "ckeditor",

	        render(t) {
	          return t("div", {}, [t(this.tagName)]);
	        },

	        props: {
	          value: {
	            type: String,
	            default: ""
	          },
	          type: {
	            type: String,
	            default: "classic",
	            validator: t => ["classic", "inline"].includes(t)
	          },
	          editorUrl: {
	            type: String,
	            default: "https://cdn.ckeditor.com/4.15.0/standard-all/ckeditor.js"
	          },
	          config: {
	            type: Object,
	            default: () => {}
	          },
	          tagName: {
	            type: String,
	            default: "textarea"
	          },
	          readOnly: {
	            type: Boolean,
	            default: null
	          }
	        },

	        mounted() {
	          a(this.editorUrl).then(() => {
	            if (this.$_destroyed) return;
	            const t = this.config || {};
	            null !== this.readOnly && (t.readOnly = this.readOnly);
	            const e = "inline" === this.type ? "inline" : "replace",
	                  n = this.$el.firstElementChild,
	                  o = this.instance = CKEDITOR[e](n, t);
	            o.on("instanceReady", () => {
	              const t = this.value;
	              o.fire("lockSnapshot"), o.setData(t, {
	                callback: () => {
	                  this.$_setUpEditorEvents();
	                  const e = o.getData();
	                  t !== e ? (this.$once("input", () => {
	                    this.$emit("ready", o);
	                  }), this.$emit("input", e)) : this.$emit("ready", o), o.fire("unlockSnapshot");
	                }
	              });
	            });
	          });
	        },

	        beforeDestroy() {
	          this.instance && this.instance.destroy(), this.$_destroyed = !0;
	        },

	        watch: {
	          value(t) {
	            this.instance && this.instance.getData() !== t && this.instance.setData(t);
	          },

	          readOnly(t) {
	            this.instance && this.instance.setReadOnly(t);
	          }

	        },
	        methods: {
	          $_setUpEditorEvents() {
	            const t = this.instance;
	            t.on("change", e => {
	              const n = t.getData();
	              this.value !== n && this.$emit("input", n, e, t);
	            }), t.on("focus", e => {
	              this.$emit("focus", e, t);
	            }), t.on("blur", e => {
	              this.$emit("blur", e, t);
	            });
	          }

	        }
	      };
	      const c = {
	        install(t) {
	          t.component("ckeditor", s);
	        },

	        component: s
	      };
	      e.default = c;
	    }]).default;
	  });
	});
	var CKEditor = /*@__PURE__*/unwrapExports(ckeditor);

	//
	var script = {
	  name: 'ui-template-email-ckeditor',
	  props: {
	    inputName: {
	      type: String,
	      default: 'search'
	    },
	    inputValue: {
	      type: String
	    }
	  },
	  components: {
	    ckeditor: CKEditor.component
	  },
	  data: function data() {
	    return {
	      editorData: this.inputValue,
	      editorConfig: {
	        fullPage: true,
	        allowedContent: true,
	        //filebrowserUploadUrl: '/template/image/upload',
	        height: '570px',
	        qtBorder: '0',
	        startupShowBorders: false,
	        removePlugins: 'about'
	      }
	    };
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
	/* server only */
	, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	  if (typeof shadowMode !== 'boolean') {
	    createInjectorSSR = createInjector;
	    createInjector = shadowMode;
	    shadowMode = false;
	  } // Vue.extend constructor export interop.


	  const options = typeof script === 'function' ? script.options : script; // render functions

	  if (template && template.render) {
	    options.render = template.render;
	    options.staticRenderFns = template.staticRenderFns;
	    options._compiled = true; // functional template

	    if (isFunctionalTemplate) {
	      options.functional = true;
	    }
	  } // scopedId


	  if (scopeId) {
	    options._scopeId = scopeId;
	  }

	  let hook;

	  if (moduleIdentifier) {
	    // server build
	    hook = function (context) {
	      // 2.3 injection
	      context = context || // cached call
	      this.$vnode && this.$vnode.ssrContext || // stateful
	      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
	      // 2.2 with runInNewContext: true

	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__;
	      } // inject component styles


	      if (style) {
	        style.call(this, createInjectorSSR(context));
	      } // register component module identifier for async chunk inference


	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier);
	      }
	    }; // used by ssr in case component is cached and beforeCreate
	    // never gets called


	    options._ssrRegister = hook;
	  } else if (style) {
	    hook = shadowMode ? function (context) {
	      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	    } : function (context) {
	      style.call(this, createInjector(context));
	    };
	  }

	  if (hook) {
	    if (options.functional) {
	      // register for functional component in vue file
	      const originalRender = options.render;

	      options.render = function renderWithStyleInjection(h, context) {
	        hook.call(context);
	        return originalRender(h, context);
	      };
	    } else {
	      // inject component registration as beforeCreate hook
	      const existing = options.beforeCreate;
	      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	    }
	  }

	  return script;
	}

	/* script */
	const __vue_script__ = script;

	/* template */
	var __vue_render__ = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    [
	      _c("input", {
	        attrs: { type: "hidden", name: _vm.inputName },
	        domProps: { value: _vm.editorData }
	      }),
	      _vm._v(" "),
	      _c("ckeditor", {
	        attrs: {
	          editor: _vm.editor,
	          config: _vm.editorConfig,
	          "tag-name": "textarea"
	        },
	        model: {
	          value: _vm.editorData,
	          callback: function($$v) {
	            _vm.editorData = $$v;
	          },
	          expression: "editorData"
	        }
	      })
	    ],
	    1
	  )
	};
	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;

	  /* style */
	  const __vue_inject_styles__ = undefined;
	  /* scoped */
	  const __vue_scope_id__ = undefined;
	  /* module identifier */
	  const __vue_module_identifier__ = undefined;
	  /* functional template */
	  const __vue_is_functional_template__ = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__ = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	var plugin = {
	  install: install,
	  CKEditor: __vue_component__
	};

	(function (plugin) {
	  if (typeof window !== 'undefined' && window.Vue) {
	    Vue.use(plugin);
	  }
	})(plugin);

	function install(Vue, options) {
	  Vue.component(__vue_component__.name, __vue_component__);
	}

	exports.default = plugin;
	exports.install = install;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=main.umd.js.map
