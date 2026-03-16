var Z = Object.defineProperty;
var K = (e, t, r) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var z = (e, t, r) => K(e, typeof t != "symbol" ? t + "" : t, r);
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var clipboard$1 = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var clipboard = clipboard$1.exports, hasRequiredClipboard;
function requireClipboard() {
  return hasRequiredClipboard || (hasRequiredClipboard = 1, (function(e, t) {
    (function(n, a) {
      e.exports = a();
    })(clipboard, function() {
      return (
        /******/
        (function() {
          var r = {
            /***/
            686: (
              /***/
              (function(i, o, s) {
                s.d(o, {
                  default: function() {
                    return (
                      /* binding */
                      $
                    );
                  }
                });
                var u = s(279), l = /* @__PURE__ */ s.n(u), c = s(370), h = /* @__PURE__ */ s.n(c), S = s(817), w = /* @__PURE__ */ s.n(S);
                function g(y) {
                  try {
                    return document.execCommand(y);
                  } catch {
                    return !1;
                  }
                }
                var E = function(d) {
                  var f = w()(d);
                  return g("cut"), f;
                }, v = E;
                function A(y) {
                  var d = document.documentElement.getAttribute("dir") === "rtl", f = document.createElement("textarea");
                  f.style.fontSize = "12pt", f.style.border = "0", f.style.padding = "0", f.style.margin = "0", f.style.position = "absolute", f.style[d ? "right" : "left"] = "-9999px";
                  var m = window.pageYOffset || document.documentElement.scrollTop;
                  return f.style.top = "".concat(m, "px"), f.setAttribute("readonly", ""), f.value = y, f;
                }
                var L = function(d, f) {
                  var m = A(d);
                  f.container.appendChild(m);
                  var p = w()(m);
                  return g("copy"), m.remove(), p;
                }, B = function(d) {
                  var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    container: document.body
                  }, m = "";
                  return typeof d == "string" ? m = L(d, f) : d instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(d == null ? void 0 : d.type) ? m = L(d.value, f) : (m = w()(d), g("copy")), m;
                }, F = B;
                function H(y) {
                  "@babel/helpers - typeof";
                  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? H = function(f) {
                    return typeof f;
                  } : H = function(f) {
                    return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
                  }, H(y);
                }
                var x = function() {
                  var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = d.action, m = f === void 0 ? "copy" : f, p = d.container, b = d.target, C = d.text;
                  if (m !== "copy" && m !== "cut")
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  if (b !== void 0)
                    if (b && H(b) === "object" && b.nodeType === 1) {
                      if (m === "copy" && b.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                      if (m === "cut" && (b.hasAttribute("readonly") || b.hasAttribute("disabled")))
                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                    } else
                      throw new Error('Invalid "target" value, use a valid Element');
                  if (C)
                    return F(C, {
                      container: p
                    });
                  if (b)
                    return m === "cut" ? v(b) : F(b, {
                      container: p
                    });
                }, T = x;
                function O(y) {
                  "@babel/helpers - typeof";
                  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? O = function(f) {
                    return typeof f;
                  } : O = function(f) {
                    return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
                  }, O(y);
                }
                function D(y, d) {
                  if (!(y instanceof d))
                    throw new TypeError("Cannot call a class as a function");
                }
                function W(y, d) {
                  for (var f = 0; f < d.length; f++) {
                    var m = d[f];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(y, m.key, m);
                  }
                }
                function I(y, d, f) {
                  return d && W(y.prototype, d), f && W(y, f), y;
                }
                function J(y, d) {
                  if (typeof d != "function" && d !== null)
                    throw new TypeError("Super expression must either be null or a function");
                  y.prototype = Object.create(d && d.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), d && _(y, d);
                }
                function _(y, d) {
                  return _ = Object.setPrototypeOf || function(m, p) {
                    return m.__proto__ = p, m;
                  }, _(y, d);
                }
                function X(y) {
                  var d = N();
                  return function() {
                    var m = V(y), p;
                    if (d) {
                      var b = V(this).constructor;
                      p = Reflect.construct(m, arguments, b);
                    } else
                      p = m.apply(this, arguments);
                    return G(this, p);
                  };
                }
                function G(y, d) {
                  return d && (O(d) === "object" || typeof d == "function") ? d : Y(y);
                }
                function Y(y) {
                  if (y === void 0)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return y;
                }
                function N() {
                  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    })), !0;
                  } catch {
                    return !1;
                  }
                }
                function V(y) {
                  return V = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
                    return f.__proto__ || Object.getPrototypeOf(f);
                  }, V(y);
                }
                function j(y, d) {
                  var f = "data-clipboard-".concat(y);
                  if (d.hasAttribute(f))
                    return d.getAttribute(f);
                }
                var R = /* @__PURE__ */ (function(y) {
                  J(f, y);
                  var d = X(f);
                  function f(m, p) {
                    var b;
                    return D(this, f), b = d.call(this), b.resolveOptions(p), b.listenClick(m), b;
                  }
                  return I(f, [{
                    key: "resolveOptions",
                    value: function() {
                      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                      this.action = typeof p.action == "function" ? p.action : this.defaultAction, this.target = typeof p.target == "function" ? p.target : this.defaultTarget, this.text = typeof p.text == "function" ? p.text : this.defaultText, this.container = O(p.container) === "object" ? p.container : document.body;
                    }
                    /**
                     * Adds a click event listener to the passed trigger.
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     */
                  }, {
                    key: "listenClick",
                    value: function(p) {
                      var b = this;
                      this.listener = h()(p, "click", function(C) {
                        return b.onClick(C);
                      });
                    }
                    /**
                     * Defines a new `ClipboardAction` on each click event.
                     * @param {Event} e
                     */
                  }, {
                    key: "onClick",
                    value: function(p) {
                      var b = p.delegateTarget || p.currentTarget, C = this.action(b) || "copy", M = T({
                        action: C,
                        container: this.container,
                        target: this.target(b),
                        text: this.text(b)
                      });
                      this.emit(M ? "success" : "error", {
                        action: C,
                        text: M,
                        trigger: b,
                        clearSelection: function() {
                          b && b.focus(), window.getSelection().removeAllRanges();
                        }
                      });
                    }
                    /**
                     * Default `action` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultAction",
                    value: function(p) {
                      return j("action", p);
                    }
                    /**
                     * Default `target` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultTarget",
                    value: function(p) {
                      var b = j("target", p);
                      if (b)
                        return document.querySelector(b);
                    }
                    /**
                     * Allow fire programmatically a copy action
                     * @param {String|HTMLElement} target
                     * @param {Object} options
                     * @returns Text copied.
                     */
                  }, {
                    key: "defaultText",
                    /**
                     * Default `text` lookup function.
                     * @param {Element} trigger
                     */
                    value: function(p) {
                      return j("text", p);
                    }
                    /**
                     * Destroy lifecycle.
                     */
                  }, {
                    key: "destroy",
                    value: function() {
                      this.listener.destroy();
                    }
                  }], [{
                    key: "copy",
                    value: function(p) {
                      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        container: document.body
                      };
                      return F(p, b);
                    }
                    /**
                     * Allow fire programmatically a cut action
                     * @param {String|HTMLElement} target
                     * @returns Text cutted.
                     */
                  }, {
                    key: "cut",
                    value: function(p) {
                      return v(p);
                    }
                    /**
                     * Returns the support of the given action, or all actions if no action is
                     * given.
                     * @param {String} [action]
                     */
                  }, {
                    key: "isSupported",
                    value: function() {
                      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], b = typeof p == "string" ? [p] : p, C = !!document.queryCommandSupported;
                      return b.forEach(function(M) {
                        C = C && !!document.queryCommandSupported(M);
                      }), C;
                    }
                  }]), f;
                })(l()), $ = R;
              })
            ),
            /***/
            828: (
              /***/
              (function(i) {
                var o = 9;
                if (typeof Element < "u" && !Element.prototype.matches) {
                  var s = Element.prototype;
                  s.matches = s.matchesSelector || s.mozMatchesSelector || s.msMatchesSelector || s.oMatchesSelector || s.webkitMatchesSelector;
                }
                function u(l, c) {
                  for (; l && l.nodeType !== o; ) {
                    if (typeof l.matches == "function" && l.matches(c))
                      return l;
                    l = l.parentNode;
                  }
                }
                i.exports = u;
              })
            ),
            /***/
            438: (
              /***/
              (function(i, o, s) {
                var u = s(828);
                function l(S, w, g, E, v) {
                  var A = h.apply(this, arguments);
                  return S.addEventListener(g, A, v), {
                    destroy: function() {
                      S.removeEventListener(g, A, v);
                    }
                  };
                }
                function c(S, w, g, E, v) {
                  return typeof S.addEventListener == "function" ? l.apply(null, arguments) : typeof g == "function" ? l.bind(null, document).apply(null, arguments) : (typeof S == "string" && (S = document.querySelectorAll(S)), Array.prototype.map.call(S, function(A) {
                    return l(A, w, g, E, v);
                  }));
                }
                function h(S, w, g, E) {
                  return function(v) {
                    v.delegateTarget = u(v.target, w), v.delegateTarget && E.call(S, v);
                  };
                }
                i.exports = c;
              })
            ),
            /***/
            879: (
              /***/
              (function(i, o) {
                o.node = function(s) {
                  return s !== void 0 && s instanceof HTMLElement && s.nodeType === 1;
                }, o.nodeList = function(s) {
                  var u = Object.prototype.toString.call(s);
                  return s !== void 0 && (u === "[object NodeList]" || u === "[object HTMLCollection]") && "length" in s && (s.length === 0 || o.node(s[0]));
                }, o.string = function(s) {
                  return typeof s == "string" || s instanceof String;
                }, o.fn = function(s) {
                  var u = Object.prototype.toString.call(s);
                  return u === "[object Function]";
                };
              })
            ),
            /***/
            370: (
              /***/
              (function(i, o, s) {
                var u = s(879), l = s(438);
                function c(g, E, v) {
                  if (!g && !E && !v)
                    throw new Error("Missing required arguments");
                  if (!u.string(E))
                    throw new TypeError("Second argument must be a String");
                  if (!u.fn(v))
                    throw new TypeError("Third argument must be a Function");
                  if (u.node(g))
                    return h(g, E, v);
                  if (u.nodeList(g))
                    return S(g, E, v);
                  if (u.string(g))
                    return w(g, E, v);
                  throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                }
                function h(g, E, v) {
                  return g.addEventListener(E, v), {
                    destroy: function() {
                      g.removeEventListener(E, v);
                    }
                  };
                }
                function S(g, E, v) {
                  return Array.prototype.forEach.call(g, function(A) {
                    A.addEventListener(E, v);
                  }), {
                    destroy: function() {
                      Array.prototype.forEach.call(g, function(A) {
                        A.removeEventListener(E, v);
                      });
                    }
                  };
                }
                function w(g, E, v) {
                  return l(document.body, g, E, v);
                }
                i.exports = c;
              })
            ),
            /***/
            817: (
              /***/
              (function(i) {
                function o(s) {
                  var u;
                  if (s.nodeName === "SELECT")
                    s.focus(), u = s.value;
                  else if (s.nodeName === "INPUT" || s.nodeName === "TEXTAREA") {
                    var l = s.hasAttribute("readonly");
                    l || s.setAttribute("readonly", ""), s.select(), s.setSelectionRange(0, s.value.length), l || s.removeAttribute("readonly"), u = s.value;
                  } else {
                    s.hasAttribute("contenteditable") && s.focus();
                    var c = window.getSelection(), h = document.createRange();
                    h.selectNodeContents(s), c.removeAllRanges(), c.addRange(h), u = c.toString();
                  }
                  return u;
                }
                i.exports = o;
              })
            ),
            /***/
            279: (
              /***/
              (function(i) {
                function o() {
                }
                o.prototype = {
                  on: function(s, u, l) {
                    var c = this.e || (this.e = {});
                    return (c[s] || (c[s] = [])).push({
                      fn: u,
                      ctx: l
                    }), this;
                  },
                  once: function(s, u, l) {
                    var c = this;
                    function h() {
                      c.off(s, h), u.apply(l, arguments);
                    }
                    return h._ = u, this.on(s, h, l);
                  },
                  emit: function(s) {
                    var u = [].slice.call(arguments, 1), l = ((this.e || (this.e = {}))[s] || []).slice(), c = 0, h = l.length;
                    for (c; c < h; c++)
                      l[c].fn.apply(l[c].ctx, u);
                    return this;
                  },
                  off: function(s, u) {
                    var l = this.e || (this.e = {}), c = l[s], h = [];
                    if (c && u)
                      for (var S = 0, w = c.length; S < w; S++)
                        c[S].fn !== u && c[S].fn._ !== u && h.push(c[S]);
                    return h.length ? l[s] = h : delete l[s], this;
                  }
                }, i.exports = o, i.exports.TinyEmitter = o;
              })
            )
            /******/
          }, n = {};
          function a(i) {
            if (n[i])
              return n[i].exports;
            var o = n[i] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return r[i](o, o.exports, a), o.exports;
          }
          return (function() {
            a.n = function(i) {
              var o = i && i.__esModule ? (
                /******/
                function() {
                  return i.default;
                }
              ) : (
                /******/
                function() {
                  return i;
                }
              );
              return a.d(o, { a: o }), o;
            };
          })(), (function() {
            a.d = function(i, o) {
              for (var s in o)
                a.o(o, s) && !a.o(i, s) && Object.defineProperty(i, s, { enumerable: !0, get: o[s] });
            };
          })(), (function() {
            a.o = function(i, o) {
              return Object.prototype.hasOwnProperty.call(i, o);
            };
          })(), a(686);
        })().default
      );
    });
  })(clipboard$1)), clipboard$1.exports;
}
var clipboardExports = requireClipboard();
const ClipboardJS = /* @__PURE__ */ getDefaultExportFromCjs(clipboardExports), k = class k {
  constructor(t, r) {
    /**
     * Clipboard API that binds a clipboard write event to supplied button element,
     * and shows a notification on copy
     */
    z(this, "clip");
    this.clip = new ClipboardJS(t, {
      text() {
        return r.text ? r.text : k.getFieldValue(r.fieldId);
      }
    }), this.clip.on(
      "error",
      () => console.error("An error occurred while copying to clipboard")
    ), this.clip.on("success", k.onSuccess);
  }
  destroy() {
    this.clip.destroy();
  }
  static getFieldValue(t) {
    const r = document.querySelector(`#${t}`);
    if (!r)
      throw `Field with ID ${t} not found`;
    return r.value;
  }
  static async copyOnce(t) {
    try {
      await navigator.clipboard.writeText(t), k.onSuccess();
    } catch (r) {
      console.error("Error copying to clipboard: ", r);
    }
  }
};
z(k, "onSuccess", () => {
  const t = document.getElementById("copy-notification");
  t && (t.classList.toggle("dip-invisible"), setTimeout(
    () => t.classList.toggle("dip-invisible"),
    2e3
  ));
});
let DPClipboard = k;
var htmx$1 = { exports: {} }, htmx = htmx$1.exports, hasRequiredHtmx;
function requireHtmx() {
  return hasRequiredHtmx || (hasRequiredHtmx = 1, (function(module) {
    (function(e, t) {
      module.exports ? module.exports = t() : e.htmx = e.htmx || t();
    })(typeof self < "u" ? self : htmx, function() {
      return (function() {
        var htmx = {
          onLoad: onLoadHelper,
          process: processNode,
          on: addEventListenerImpl,
          off: removeEventListenerImpl,
          trigger: triggerEvent,
          ajax: ajaxHelper,
          find,
          findAll,
          closest,
          values: function(e, t) {
            var r = getInputValues(e, t || "post");
            return r.values;
          },
          remove: removeElement,
          addClass: addClassToElement,
          removeClass: removeClassFromElement,
          toggleClass: toggleClassOnElement,
          takeClass: takeClassForElement,
          defineExtension,
          removeExtension,
          logAll,
          logger: null,
          config: {
            historyEnabled: !0,
            historyCacheSize: 10,
            refreshOnHistoryMiss: !1,
            defaultSwapStyle: "innerHTML",
            defaultSwapDelay: 0,
            defaultSettleDelay: 20,
            includeIndicatorStyles: !0,
            indicatorClass: "htmx-indicator",
            requestClass: "htmx-request",
            addedClass: "htmx-added",
            settlingClass: "htmx-settling",
            swappingClass: "htmx-swapping",
            allowEval: !0,
            inlineScriptNonce: "",
            attributesToSettle: ["class", "style", "width", "height"],
            withCredentials: !1,
            timeout: 0,
            wsReconnectDelay: "full-jitter",
            wsBinaryType: "blob",
            disableSelector: "[hx-disable], [data-hx-disable]",
            useTemplateFragments: !1,
            scrollBehavior: "smooth",
            defaultFocusScroll: !1,
            getCacheBusterParam: !1
          },
          parseInterval,
          _: internalEval,
          createEventSource: function(e) {
            return new EventSource(e, { withCredentials: !0 });
          },
          createWebSocket: function(e) {
            var t = new WebSocket(e, []);
            return t.binaryType = htmx.config.wsBinaryType, t;
          },
          version: "1.8.6"
        }, internalAPI = {
          addTriggerHandler,
          bodyContains,
          canAccessLocalStorage,
          filterValues,
          hasAttribute,
          getAttributeValue,
          getClosestMatch,
          getExpressionVars,
          getHeaders,
          getInputValues,
          getInternalData,
          getSwapSpecification,
          getTriggerSpecs,
          getTarget,
          makeFragment,
          mergeObjects,
          makeSettleInfo,
          oobSwap,
          selectAndSwap,
          settleImmediately,
          shouldCancel,
          triggerEvent,
          triggerErrorEvent,
          withExtensions
        }, VERBS = ["get", "post", "put", "delete", "patch"], VERB_SELECTOR = VERBS.map(function(e) {
          return "[hx-" + e + "], [data-hx-" + e + "]";
        }).join(", ");
        function parseInterval(e) {
          if (e != null)
            return e.slice(-2) == "ms" ? parseFloat(e.slice(0, -2)) || void 0 : e.slice(-1) == "s" ? parseFloat(e.slice(0, -1)) * 1e3 || void 0 : e.slice(-1) == "m" ? parseFloat(e.slice(0, -1)) * 1e3 * 60 || void 0 : parseFloat(e) || void 0;
        }
        function getRawAttribute(e, t) {
          return e.getAttribute && e.getAttribute(t);
        }
        function hasAttribute(e, t) {
          return e.hasAttribute && (e.hasAttribute(t) || e.hasAttribute("data-" + t));
        }
        function getAttributeValue(e, t) {
          return getRawAttribute(e, t) || getRawAttribute(e, "data-" + t);
        }
        function parentElt(e) {
          return e.parentElement;
        }
        function getDocument() {
          return document;
        }
        function getClosestMatch(e, t) {
          for (; e && !t(e); )
            e = parentElt(e);
          return e || null;
        }
        function getAttributeValueWithDisinheritance(e, t, r) {
          var n = getAttributeValue(t, r), a = getAttributeValue(t, "hx-disinherit");
          return e !== t && a && (a === "*" || a.split(" ").indexOf(r) >= 0) ? "unset" : n;
        }
        function getClosestAttributeValue(e, t) {
          var r = null;
          if (getClosestMatch(e, function(n) {
            return r = getAttributeValueWithDisinheritance(e, n, t);
          }), r !== "unset")
            return r;
        }
        function matches(e, t) {
          var r = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
          return r && r.call(e, t);
        }
        function getStartTag(e) {
          var t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, r = t.exec(e);
          return r ? r[1].toLowerCase() : "";
        }
        function parseHTML(e, t) {
          for (var r = new DOMParser(), n = r.parseFromString(e, "text/html"), a = n.body; t > 0; )
            t--, a = a.firstChild;
          return a == null && (a = getDocument().createDocumentFragment()), a;
        }
        function makeFragment(e) {
          if (htmx.config.useTemplateFragments) {
            var t = parseHTML("<body><template>" + e + "</template></body>", 0);
            return t.querySelector("template").content;
          } else {
            var r = getStartTag(e);
            switch (r) {
              case "thead":
              case "tbody":
              case "tfoot":
              case "colgroup":
              case "caption":
                return parseHTML("<table>" + e + "</table>", 1);
              case "col":
                return parseHTML("<table><colgroup>" + e + "</colgroup></table>", 2);
              case "tr":
                return parseHTML("<table><tbody>" + e + "</tbody></table>", 2);
              case "td":
              case "th":
                return parseHTML("<table><tbody><tr>" + e + "</tr></tbody></table>", 3);
              case "script":
                return parseHTML("<div>" + e + "</div>", 1);
              default:
                return parseHTML(e, 0);
            }
          }
        }
        function maybeCall(e) {
          e && e();
        }
        function isType(e, t) {
          return Object.prototype.toString.call(e) === "[object " + t + "]";
        }
        function isFunction(e) {
          return isType(e, "Function");
        }
        function isRawObject(e) {
          return isType(e, "Object");
        }
        function getInternalData(e) {
          var t = "htmx-internal-data", r = e[t];
          return r || (r = e[t] = {}), r;
        }
        function toArray(e) {
          var t = [];
          if (e)
            for (var r = 0; r < e.length; r++)
              t.push(e[r]);
          return t;
        }
        function forEach(e, t) {
          if (e)
            for (var r = 0; r < e.length; r++)
              t(e[r]);
        }
        function isScrolledIntoView(e) {
          var t = e.getBoundingClientRect(), r = t.top, n = t.bottom;
          return r < window.innerHeight && n >= 0;
        }
        function bodyContains(e) {
          return e.getRootNode && e.getRootNode() instanceof ShadowRoot ? getDocument().body.contains(e.getRootNode().host) : getDocument().body.contains(e);
        }
        function splitOnWhitespace(e) {
          return e.trim().split(/\s+/);
        }
        function mergeObjects(e, t) {
          for (var r in t)
            t.hasOwnProperty(r) && (e[r] = t[r]);
          return e;
        }
        function parseJSON(e) {
          try {
            return JSON.parse(e);
          } catch (t) {
            return logError(t), null;
          }
        }
        function canAccessLocalStorage() {
          var e = "htmx:localStorageTest";
          try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
          } catch {
            return !1;
          }
        }
        function internalEval(str) {
          return maybeEval(getDocument().body, function() {
            return eval(str);
          });
        }
        function onLoadHelper(e) {
          var t = htmx.on("htmx:load", function(r) {
            e(r.detail.elt);
          });
          return t;
        }
        function logAll() {
          htmx.logger = function(e, t, r) {
            console && console.log(t, e, r);
          };
        }
        function find(e, t) {
          return t ? e.querySelector(t) : find(getDocument(), e);
        }
        function findAll(e, t) {
          return t ? e.querySelectorAll(t) : findAll(getDocument(), e);
        }
        function removeElement(e, t) {
          e = resolveTarget(e), t ? setTimeout(function() {
            removeElement(e);
          }, t) : e.parentElement.removeChild(e);
        }
        function addClassToElement(e, t, r) {
          e = resolveTarget(e), r ? setTimeout(function() {
            addClassToElement(e, t);
          }, r) : e.classList && e.classList.add(t);
        }
        function removeClassFromElement(e, t, r) {
          e = resolveTarget(e), r ? setTimeout(function() {
            removeClassFromElement(e, t);
          }, r) : e.classList && (e.classList.remove(t), e.classList.length === 0 && e.removeAttribute("class"));
        }
        function toggleClassOnElement(e, t) {
          e = resolveTarget(e), e.classList.toggle(t);
        }
        function takeClassForElement(e, t) {
          e = resolveTarget(e), forEach(e.parentElement.children, function(r) {
            removeClassFromElement(r, t);
          }), addClassToElement(e, t);
        }
        function closest(e, t) {
          if (e = resolveTarget(e), e.closest)
            return e.closest(t);
          do
            if (e == null || matches(e, t))
              return e;
          while (e = e && parentElt(e));
          return null;
        }
        function querySelectorAllExt(e, t) {
          return t.indexOf("closest ") === 0 ? [closest(e, t.substr(8))] : t.indexOf("find ") === 0 ? [find(e, t.substr(5))] : t.indexOf("next ") === 0 ? [scanForwardQuery(e, t.substr(5))] : t.indexOf("previous ") === 0 ? [scanBackwardsQuery(e, t.substr(9))] : t === "document" ? [document] : t === "window" ? [window] : getDocument().querySelectorAll(t);
        }
        var scanForwardQuery = function(e, t) {
          for (var r = getDocument().querySelectorAll(t), n = 0; n < r.length; n++) {
            var a = r[n];
            if (a.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_PRECEDING)
              return a;
          }
        }, scanBackwardsQuery = function(e, t) {
          for (var r = getDocument().querySelectorAll(t), n = r.length - 1; n >= 0; n--) {
            var a = r[n];
            if (a.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_FOLLOWING)
              return a;
          }
        };
        function querySelectorExt(e, t) {
          return t ? querySelectorAllExt(e, t)[0] : querySelectorAllExt(getDocument().body, e)[0];
        }
        function resolveTarget(e) {
          return isType(e, "String") ? find(e) : e;
        }
        function processEventArgs(e, t, r) {
          return isFunction(t) ? {
            target: getDocument().body,
            event: e,
            listener: t
          } : {
            target: resolveTarget(e),
            event: t,
            listener: r
          };
        }
        function addEventListenerImpl(e, t, r) {
          ready(function() {
            var a = processEventArgs(e, t, r);
            a.target.addEventListener(a.event, a.listener);
          });
          var n = isFunction(t);
          return n ? t : r;
        }
        function removeEventListenerImpl(e, t, r) {
          return ready(function() {
            var n = processEventArgs(e, t, r);
            n.target.removeEventListener(n.event, n.listener);
          }), isFunction(t) ? t : r;
        }
        var DUMMY_ELT = getDocument().createElement("output");
        function findAttributeTargets(e, t) {
          var r = getClosestAttributeValue(e, t);
          if (r) {
            if (r === "this")
              return [findThisElement(e, t)];
            var n = querySelectorAllExt(e, r);
            return n.length === 0 ? (logError('The selector "' + r + '" on ' + t + " returned no matches!"), [DUMMY_ELT]) : n;
          }
        }
        function findThisElement(e, t) {
          return getClosestMatch(e, function(r) {
            return getAttributeValue(r, t) != null;
          });
        }
        function getTarget(e) {
          var t = getClosestAttributeValue(e, "hx-target");
          if (t)
            return t === "this" ? findThisElement(e, "hx-target") : querySelectorExt(e, t);
          var r = getInternalData(e);
          return r.boosted ? getDocument().body : e;
        }
        function shouldSettleAttribute(e) {
          for (var t = htmx.config.attributesToSettle, r = 0; r < t.length; r++)
            if (e === t[r])
              return !0;
          return !1;
        }
        function cloneAttributes(e, t) {
          forEach(e.attributes, function(r) {
            !t.hasAttribute(r.name) && shouldSettleAttribute(r.name) && e.removeAttribute(r.name);
          }), forEach(t.attributes, function(r) {
            shouldSettleAttribute(r.name) && e.setAttribute(r.name, r.value);
          });
        }
        function isInlineSwap(e, t) {
          for (var r = getExtensions(t), n = 0; n < r.length; n++) {
            var a = r[n];
            try {
              if (a.isInlineSwap(e))
                return !0;
            } catch (i) {
              logError(i);
            }
          }
          return e === "outerHTML";
        }
        function oobSwap(e, t, r) {
          var n = "#" + t.id, a = "outerHTML";
          e === "true" || (e.indexOf(":") > 0 ? (a = e.substr(0, e.indexOf(":")), n = e.substr(e.indexOf(":") + 1, e.length)) : a = e);
          var i = getDocument().querySelectorAll(n);
          return i ? (forEach(
            i,
            function(o) {
              var s, u = t.cloneNode(!0);
              s = getDocument().createDocumentFragment(), s.appendChild(u), isInlineSwap(a, o) || (s = u);
              var l = { shouldSwap: !0, target: o, fragment: s };
              triggerEvent(o, "htmx:oobBeforeSwap", l) && (o = l.target, l.shouldSwap && swap(a, o, o, s, r), forEach(r.elts, function(c) {
                triggerEvent(c, "htmx:oobAfterSwap", l);
              }));
            }
          ), t.parentNode.removeChild(t)) : (t.parentNode.removeChild(t), triggerErrorEvent(getDocument().body, "htmx:oobErrorNoTarget", { content: t })), e;
        }
        function handleOutOfBandSwaps(e, t, r) {
          var n = getClosestAttributeValue(e, "hx-select-oob");
          if (n) {
            var a = n.split(",");
            for (let l = 0; l < a.length; l++) {
              var i = a[l].split(":", 2), o = i[0];
              o.indexOf("#") === 0 && (o = o.substring(1));
              var s = i[1] || "true", u = t.querySelector("#" + o);
              u && oobSwap(s, u, r);
            }
          }
          forEach(findAll(t, "[hx-swap-oob], [data-hx-swap-oob]"), function(l) {
            var c = getAttributeValue(l, "hx-swap-oob");
            c != null && oobSwap(c, l, r);
          });
        }
        function handlePreservedElements(e) {
          forEach(findAll(e, "[hx-preserve], [data-hx-preserve]"), function(t) {
            var r = getAttributeValue(t, "id"), n = getDocument().getElementById(r);
            n != null && t.parentNode.replaceChild(n, t);
          });
        }
        function handleAttributes(e, t, r) {
          forEach(t.querySelectorAll("[id]"), function(n) {
            if (n.id && n.id.length > 0) {
              var a = n.id.replace("'", "\\'"), i = e.querySelector(n.tagName + "[id='" + a + "']");
              if (i && i !== e) {
                var o = n.cloneNode();
                cloneAttributes(n, i), r.tasks.push(function() {
                  cloneAttributes(n, o);
                });
              }
            }
          });
        }
        function makeAjaxLoadTask(e) {
          return function() {
            removeClassFromElement(e, htmx.config.addedClass), processNode(e), processScripts(e), processFocus(e), triggerEvent(e, "htmx:load");
          };
        }
        function processFocus(e) {
          var t = "[autofocus]", r = matches(e, t) ? e : e.querySelector(t);
          r != null && r.focus();
        }
        function insertNodesBefore(e, t, r, n) {
          for (handleAttributes(e, r, n); r.childNodes.length > 0; ) {
            var a = r.firstChild;
            addClassToElement(a, htmx.config.addedClass), e.insertBefore(a, t), a.nodeType !== Node.TEXT_NODE && a.nodeType !== Node.COMMENT_NODE && n.tasks.push(makeAjaxLoadTask(a));
          }
        }
        function stringHash(e, t) {
          for (var r = 0; r < e.length; )
            t = (t << 5) - t + e.charCodeAt(r++) | 0;
          return t;
        }
        function attributeHash(e) {
          var t = 0;
          if (e.attributes)
            for (var r = 0; r < e.attributes.length; r++) {
              var n = e.attributes[r];
              n.value && (t = stringHash(n.name, t), t = stringHash(n.value, t));
            }
          return t;
        }
        function deInitNode(e) {
          var t = getInternalData(e);
          t.webSocket && t.webSocket.close(), t.sseEventSource && t.sseEventSource.close(), t.listenerInfos && forEach(t.listenerInfos, function(r) {
            r.on && r.on.removeEventListener(r.trigger, r.listener);
          });
        }
        function cleanUpElement(e) {
          triggerEvent(e, "htmx:beforeCleanupElement"), deInitNode(e), e.children && forEach(e.children, function(t) {
            cleanUpElement(t);
          });
        }
        function swapOuterHTML(e, t, r) {
          if (e.tagName === "BODY")
            return swapInnerHTML(e, t, r);
          var n, a = e.previousSibling;
          for (insertNodesBefore(parentElt(e), e, t, r), a == null ? n = parentElt(e).firstChild : n = a.nextSibling, getInternalData(e).replacedWith = n, r.elts = []; n && n !== e; )
            n.nodeType === Node.ELEMENT_NODE && r.elts.push(n), n = n.nextElementSibling;
          cleanUpElement(e), parentElt(e).removeChild(e);
        }
        function swapAfterBegin(e, t, r) {
          return insertNodesBefore(e, e.firstChild, t, r);
        }
        function swapBeforeBegin(e, t, r) {
          return insertNodesBefore(parentElt(e), e, t, r);
        }
        function swapBeforeEnd(e, t, r) {
          return insertNodesBefore(e, null, t, r);
        }
        function swapAfterEnd(e, t, r) {
          return insertNodesBefore(parentElt(e), e.nextSibling, t, r);
        }
        function swapDelete(e, t, r) {
          return cleanUpElement(e), parentElt(e).removeChild(e);
        }
        function swapInnerHTML(e, t, r) {
          var n = e.firstChild;
          if (insertNodesBefore(e, n, t, r), n) {
            for (; n.nextSibling; )
              cleanUpElement(n.nextSibling), e.removeChild(n.nextSibling);
            cleanUpElement(n), e.removeChild(n);
          }
        }
        function maybeSelectFromResponse(e, t) {
          var r = getClosestAttributeValue(e, "hx-select");
          if (r) {
            var n = getDocument().createDocumentFragment();
            forEach(t.querySelectorAll(r), function(a) {
              n.appendChild(a);
            }), t = n;
          }
          return t;
        }
        function swap(e, t, r, n, a) {
          switch (e) {
            case "none":
              return;
            case "outerHTML":
              swapOuterHTML(r, n, a);
              return;
            case "afterbegin":
              swapAfterBegin(r, n, a);
              return;
            case "beforebegin":
              swapBeforeBegin(r, n, a);
              return;
            case "beforeend":
              swapBeforeEnd(r, n, a);
              return;
            case "afterend":
              swapAfterEnd(r, n, a);
              return;
            case "delete":
              swapDelete(r);
              return;
            default:
              for (var i = getExtensions(t), o = 0; o < i.length; o++) {
                var s = i[o];
                try {
                  var u = s.handleSwap(e, r, n, a);
                  if (u) {
                    if (typeof u.length < "u")
                      for (var l = 0; l < u.length; l++) {
                        var c = u[l];
                        c.nodeType !== Node.TEXT_NODE && c.nodeType !== Node.COMMENT_NODE && a.tasks.push(makeAjaxLoadTask(c));
                      }
                    return;
                  }
                } catch (h) {
                  logError(h);
                }
              }
              e === "innerHTML" ? swapInnerHTML(r, n, a) : swap(htmx.config.defaultSwapStyle, t, r, n, a);
          }
        }
        function findTitle(e) {
          if (e.indexOf("<title") > -1) {
            var t = e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, ""), r = t.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
            if (r)
              return r[2];
          }
        }
        function selectAndSwap(e, t, r, n, a) {
          a.title = findTitle(n);
          var i = makeFragment(n);
          if (i)
            return handleOutOfBandSwaps(r, i, a), i = maybeSelectFromResponse(r, i), handlePreservedElements(i), swap(e, r, t, i, a);
        }
        function handleTrigger(e, t, r) {
          var n = e.getResponseHeader(t);
          if (n.indexOf("{") === 0) {
            var a = parseJSON(n);
            for (var i in a)
              if (a.hasOwnProperty(i)) {
                var o = a[i];
                isRawObject(o) || (o = { value: o }), triggerEvent(r, i, o);
              }
          } else
            triggerEvent(r, n, []);
        }
        var WHITESPACE_OR_COMMA = /[\s,]/, SYMBOL_START = /[_$a-zA-Z]/, SYMBOL_CONT = /[_$a-zA-Z0-9]/, STRINGISH_START = ['"', "'", "/"], NOT_WHITESPACE = /[^\s]/;
        function tokenizeString(e) {
          for (var t = [], r = 0; r < e.length; ) {
            if (SYMBOL_START.exec(e.charAt(r))) {
              for (var n = r; SYMBOL_CONT.exec(e.charAt(r + 1)); )
                r++;
              t.push(e.substr(n, r - n + 1));
            } else if (STRINGISH_START.indexOf(e.charAt(r)) !== -1) {
              var a = e.charAt(r), n = r;
              for (r++; r < e.length && e.charAt(r) !== a; )
                e.charAt(r) === "\\" && r++, r++;
              t.push(e.substr(n, r - n + 1));
            } else {
              var i = e.charAt(r);
              t.push(i);
            }
            r++;
          }
          return t;
        }
        function isPossibleRelativeReference(e, t, r) {
          return SYMBOL_START.exec(e.charAt(0)) && e !== "true" && e !== "false" && e !== "this" && e !== r && t !== ".";
        }
        function maybeGenerateConditional(e, t, r) {
          if (t[0] === "[") {
            t.shift();
            for (var n = 1, a = " return (function(" + r + "){ return (", i = null; t.length > 0; ) {
              var o = t[0];
              if (o === "]") {
                if (n--, n === 0) {
                  i === null && (a = a + "true"), t.shift(), a += ")})";
                  try {
                    var s = maybeEval(
                      e,
                      function() {
                        return Function(a)();
                      },
                      function() {
                        return !0;
                      }
                    );
                    return s.source = a, s;
                  } catch (u) {
                    return triggerErrorEvent(getDocument().body, "htmx:syntax:error", { error: u, source: a }), null;
                  }
                }
              } else o === "[" && n++;
              isPossibleRelativeReference(o, i, r) ? a += "((" + r + "." + o + ") ? (" + r + "." + o + ") : (window." + o + "))" : a = a + o, i = t.shift();
            }
          }
        }
        function consumeUntil(e, t) {
          for (var r = ""; e.length > 0 && !e[0].match(t); )
            r += e.shift();
          return r;
        }
        var INPUT_SELECTOR = "input, textarea, select";
        function getTriggerSpecs(e) {
          var t = getAttributeValue(e, "hx-trigger"), r = [];
          if (t) {
            var n = tokenizeString(t);
            do {
              consumeUntil(n, NOT_WHITESPACE);
              var a = n.length, i = consumeUntil(n, /[,\[\s]/);
              if (i !== "")
                if (i === "every") {
                  var o = { trigger: "every" };
                  consumeUntil(n, NOT_WHITESPACE), o.pollInterval = parseInterval(consumeUntil(n, /[,\[\s]/)), consumeUntil(n, NOT_WHITESPACE);
                  var s = maybeGenerateConditional(e, n, "event");
                  s && (o.eventFilter = s), r.push(o);
                } else if (i.indexOf("sse:") === 0)
                  r.push({ trigger: "sse", sseEvent: i.substr(4) });
                else {
                  var u = { trigger: i }, s = maybeGenerateConditional(e, n, "event");
                  for (s && (u.eventFilter = s); n.length > 0 && n[0] !== ","; ) {
                    consumeUntil(n, NOT_WHITESPACE);
                    var l = n.shift();
                    if (l === "changed")
                      u.changed = !0;
                    else if (l === "once")
                      u.once = !0;
                    else if (l === "consume")
                      u.consume = !0;
                    else if (l === "delay" && n[0] === ":")
                      n.shift(), u.delay = parseInterval(consumeUntil(n, WHITESPACE_OR_COMMA));
                    else if (l === "from" && n[0] === ":") {
                      n.shift();
                      var c = consumeUntil(n, WHITESPACE_OR_COMMA);
                      (c === "closest" || c === "find" || c === "next" || c === "previous") && (n.shift(), c += " " + consumeUntil(
                        n,
                        WHITESPACE_OR_COMMA
                      )), u.from = c;
                    } else l === "target" && n[0] === ":" ? (n.shift(), u.target = consumeUntil(n, WHITESPACE_OR_COMMA)) : l === "throttle" && n[0] === ":" ? (n.shift(), u.throttle = parseInterval(consumeUntil(n, WHITESPACE_OR_COMMA))) : l === "queue" && n[0] === ":" ? (n.shift(), u.queue = consumeUntil(n, WHITESPACE_OR_COMMA)) : (l === "root" || l === "threshold") && n[0] === ":" ? (n.shift(), u[l] = consumeUntil(n, WHITESPACE_OR_COMMA)) : triggerErrorEvent(e, "htmx:syntax:error", { token: n.shift() });
                  }
                  r.push(u);
                }
              n.length === a && triggerErrorEvent(e, "htmx:syntax:error", { token: n.shift() }), consumeUntil(n, NOT_WHITESPACE);
            } while (n[0] === "," && n.shift());
          }
          return r.length > 0 ? r : matches(e, "form") ? [{ trigger: "submit" }] : matches(e, 'input[type="button"]') ? [{ trigger: "click" }] : matches(e, INPUT_SELECTOR) ? [{ trigger: "change" }] : [{ trigger: "click" }];
        }
        function cancelPolling(e) {
          getInternalData(e).cancelled = !0;
        }
        function processPolling(e, t, r) {
          var n = getInternalData(e);
          n.timeout = setTimeout(function() {
            bodyContains(e) && n.cancelled !== !0 && (maybeFilterEvent(r, makeEvent("hx:poll:trigger", { triggerSpec: r, target: e })) || t(e), processPolling(e, t, r));
          }, r.pollInterval);
        }
        function isLocalLink(e) {
          return location.hostname === e.hostname && getRawAttribute(e, "href") && getRawAttribute(e, "href").indexOf("#") !== 0;
        }
        function boostElement(e, t, r) {
          if (e.tagName === "A" && isLocalLink(e) && (e.target === "" || e.target === "_self") || e.tagName === "FORM") {
            t.boosted = !0;
            var n, a;
            if (e.tagName === "A")
              n = "get", a = getRawAttribute(e, "href");
            else {
              var i = getRawAttribute(e, "method");
              n = i ? i.toLowerCase() : "get", a = getRawAttribute(e, "action");
            }
            r.forEach(function(o) {
              addEventListener(e, function(s, u) {
                issueAjaxRequest(n, a, s, u);
              }, t, o, !0);
            });
          }
        }
        function shouldCancel(e, t) {
          return !!((e.type === "submit" || e.type === "click") && (t.tagName === "FORM" || matches(t, 'input[type="submit"], button') && closest(t, "form") !== null || t.tagName === "A" && t.href && (t.getAttribute("href") === "#" || t.getAttribute("href").indexOf("#") !== 0)));
        }
        function ignoreBoostedAnchorCtrlClick(e, t) {
          return getInternalData(e).boosted && e.tagName === "A" && t.type === "click" && (t.ctrlKey || t.metaKey);
        }
        function maybeFilterEvent(e, t) {
          var r = e.eventFilter;
          if (r)
            try {
              return r(t) !== !0;
            } catch (n) {
              return triggerErrorEvent(getDocument().body, "htmx:eventFilter:error", { error: n, source: r.source }), !0;
            }
          return !1;
        }
        function addEventListener(e, t, r, n, a) {
          var i = getInternalData(e), o;
          n.from ? o = querySelectorAllExt(e, n.from) : o = [e], n.changed && (i.lastValue = e.value), forEach(o, function(s) {
            var u = function(l) {
              if (!bodyContains(e)) {
                s.removeEventListener(n.trigger, u);
                return;
              }
              if (!ignoreBoostedAnchorCtrlClick(e, l) && ((a || shouldCancel(l, e)) && l.preventDefault(), !maybeFilterEvent(n, l))) {
                var c = getInternalData(l);
                if (c.triggerSpec = n, c.handledFor == null && (c.handledFor = []), c.handledFor.indexOf(e) < 0) {
                  if (c.handledFor.push(e), n.consume && l.stopPropagation(), n.target && l.target && !matches(l.target, n.target))
                    return;
                  if (n.once) {
                    if (i.triggeredOnce)
                      return;
                    i.triggeredOnce = !0;
                  }
                  if (n.changed) {
                    if (i.lastValue === e.value)
                      return;
                    i.lastValue = e.value;
                  }
                  if (i.delayed && clearTimeout(i.delayed), i.throttle)
                    return;
                  n.throttle ? i.throttle || (t(e, l), i.throttle = setTimeout(function() {
                    i.throttle = null;
                  }, n.throttle)) : n.delay ? i.delayed = setTimeout(function() {
                    t(e, l);
                  }, n.delay) : t(e, l);
                }
              }
            };
            r.listenerInfos == null && (r.listenerInfos = []), r.listenerInfos.push({
              trigger: n.trigger,
              listener: u,
              on: s
            }), s.addEventListener(n.trigger, u);
          });
        }
        var windowIsScrolling = !1, scrollHandler = null;
        function initScrollHandler() {
          scrollHandler || (scrollHandler = function() {
            windowIsScrolling = !0;
          }, window.addEventListener("scroll", scrollHandler), setInterval(function() {
            windowIsScrolling && (windowIsScrolling = !1, forEach(getDocument().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e) {
              maybeReveal(e);
            }));
          }, 200));
        }
        function maybeReveal(e) {
          if (!hasAttribute(e, "data-hx-revealed") && isScrolledIntoView(e)) {
            e.setAttribute("data-hx-revealed", "true");
            var t = getInternalData(e);
            t.initHash ? triggerEvent(e, "revealed") : e.addEventListener("htmx:afterProcessNode", function(r) {
              triggerEvent(e, "revealed");
            }, { once: !0 });
          }
        }
        function processWebSocketInfo(e, t, r) {
          for (var n = splitOnWhitespace(r), a = 0; a < n.length; a++) {
            var i = n[a].split(/:(.+)/);
            i[0] === "connect" && ensureWebSocket(e, i[1], 0), i[0] === "send" && processWebSocketSend(e);
          }
        }
        function ensureWebSocket(e, t, r) {
          if (bodyContains(e)) {
            if (t.indexOf("/") == 0) {
              var n = location.hostname + (location.port ? ":" + location.port : "");
              location.protocol == "https:" ? t = "wss://" + n + t : location.protocol == "http:" && (t = "ws://" + n + t);
            }
            var a = htmx.createWebSocket(t);
            a.onerror = function(i) {
              triggerErrorEvent(e, "htmx:wsError", { error: i, socket: a }), maybeCloseWebSocketSource(e);
            }, a.onclose = function(i) {
              if ([1006, 1012, 1013].indexOf(i.code) >= 0) {
                var o = getWebSocketReconnectDelay(r);
                setTimeout(function() {
                  ensureWebSocket(e, t, r + 1);
                }, o);
              }
            }, a.onopen = function(i) {
              r = 0;
            }, getInternalData(e).webSocket = a, a.addEventListener("message", function(i) {
              if (!maybeCloseWebSocketSource(e)) {
                var o = i.data;
                withExtensions(e, function(S) {
                  o = S.transformResponse(o, null, e);
                });
                for (var s = makeSettleInfo(e), u = makeFragment(o), l = toArray(u.children), c = 0; c < l.length; c++) {
                  var h = l[c];
                  oobSwap(getAttributeValue(h, "hx-swap-oob") || "true", h, s);
                }
                settleImmediately(s.tasks);
              }
            });
          }
        }
        function maybeCloseWebSocketSource(e) {
          if (!bodyContains(e))
            return getInternalData(e).webSocket.close(), !0;
        }
        function processWebSocketSend(e) {
          var t = getClosestMatch(e, function(r) {
            return getInternalData(r).webSocket != null;
          });
          t ? e.addEventListener(getTriggerSpecs(e)[0].trigger, function(r) {
            var n = getInternalData(t).webSocket, a = getHeaders(e, t), i = getInputValues(e, "post"), o = i.errors, s = i.values, u = getExpressionVars(e), l = mergeObjects(s, u), c = filterValues(l, e);
            if (c.HEADERS = a, o && o.length > 0) {
              triggerEvent(e, "htmx:validation:halted", o);
              return;
            }
            n.send(JSON.stringify(c)), shouldCancel(r, e) && r.preventDefault();
          }) : triggerErrorEvent(e, "htmx:noWebSocketSourceError");
        }
        function getWebSocketReconnectDelay(e) {
          var t = htmx.config.wsReconnectDelay;
          if (typeof t == "function")
            return t(e);
          if (t === "full-jitter") {
            var r = Math.min(e, 6), n = 1e3 * Math.pow(2, r);
            return n * Math.random();
          }
          logError('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
        }
        function processSSEInfo(e, t, r) {
          for (var n = splitOnWhitespace(r), a = 0; a < n.length; a++) {
            var i = n[a].split(/:(.+)/);
            i[0] === "connect" && processSSESource(e, i[1]), i[0] === "swap" && processSSESwap(e, i[1]);
          }
        }
        function processSSESource(e, t) {
          var r = htmx.createEventSource(t);
          r.onerror = function(n) {
            triggerErrorEvent(e, "htmx:sseError", { error: n, source: r }), maybeCloseSSESource(e);
          }, getInternalData(e).sseEventSource = r;
        }
        function processSSESwap(e, t) {
          var r = getClosestMatch(e, hasEventSource);
          if (r) {
            var n = getInternalData(r).sseEventSource, a = function(i) {
              if (maybeCloseSSESource(r)) {
                n.removeEventListener(t, a);
                return;
              }
              var o = i.data;
              withExtensions(e, function(c) {
                o = c.transformResponse(o, null, e);
              });
              var s = getSwapSpecification(e), u = getTarget(e), l = makeSettleInfo(e);
              selectAndSwap(s.swapStyle, e, u, o, l), settleImmediately(l.tasks), triggerEvent(e, "htmx:sseMessage", i);
            };
            getInternalData(e).sseListener = a, n.addEventListener(t, a);
          } else
            triggerErrorEvent(e, "htmx:noSSESourceError");
        }
        function processSSETrigger(e, t, r) {
          var n = getClosestMatch(e, hasEventSource);
          if (n) {
            var a = getInternalData(n).sseEventSource, i = function() {
              maybeCloseSSESource(n) || (bodyContains(e) ? t(e) : a.removeEventListener(r, i));
            };
            getInternalData(e).sseListener = i, a.addEventListener(r, i);
          } else
            triggerErrorEvent(e, "htmx:noSSESourceError");
        }
        function maybeCloseSSESource(e) {
          if (!bodyContains(e))
            return getInternalData(e).sseEventSource.close(), !0;
        }
        function hasEventSource(e) {
          return getInternalData(e).sseEventSource != null;
        }
        function loadImmediately(e, t, r, n) {
          var a = function() {
            r.loaded || (r.loaded = !0, t(e));
          };
          n ? setTimeout(a, n) : a();
        }
        function processVerbs(e, t, r) {
          var n = !1;
          return forEach(VERBS, function(a) {
            if (hasAttribute(e, "hx-" + a)) {
              var i = getAttributeValue(e, "hx-" + a);
              n = !0, t.path = i, t.verb = a, r.forEach(function(o) {
                addTriggerHandler(e, o, t, function(s, u) {
                  issueAjaxRequest(a, i, s, u);
                });
              });
            }
          }), n;
        }
        function addTriggerHandler(e, t, r, n) {
          if (t.sseEvent)
            processSSETrigger(e, n, t.sseEvent);
          else if (t.trigger === "revealed")
            initScrollHandler(), addEventListener(e, n, r, t), maybeReveal(e);
          else if (t.trigger === "intersect") {
            var a = {};
            t.root && (a.root = querySelectorExt(e, t.root)), t.threshold && (a.threshold = parseFloat(t.threshold));
            var i = new IntersectionObserver(function(o) {
              for (var s = 0; s < o.length; s++) {
                var u = o[s];
                if (u.isIntersecting) {
                  triggerEvent(e, "intersect");
                  break;
                }
              }
            }, a);
            i.observe(e), addEventListener(e, n, r, t);
          } else t.trigger === "load" ? maybeFilterEvent(t, makeEvent("load", { elt: e })) || loadImmediately(e, n, r, t.delay) : t.pollInterval ? (r.polling = !0, processPolling(e, n, t)) : addEventListener(e, n, r, t);
        }
        function evalScript(e) {
          if (e.type === "text/javascript" || e.type === "module" || e.type === "") {
            var t = getDocument().createElement("script");
            forEach(e.attributes, function(n) {
              t.setAttribute(n.name, n.value);
            }), t.textContent = e.textContent, t.async = !1, htmx.config.inlineScriptNonce && (t.nonce = htmx.config.inlineScriptNonce);
            var r = e.parentElement;
            try {
              r.insertBefore(t, e);
            } catch (n) {
              logError(n);
            } finally {
              e.parentElement && e.parentElement.removeChild(e);
            }
          }
        }
        function processScripts(e) {
          matches(e, "script") && evalScript(e), forEach(findAll(e, "script"), function(t) {
            evalScript(t);
          });
        }
        function hasChanceOfBeingBoosted() {
          return document.querySelector("[hx-boost], [data-hx-boost]");
        }
        function findElementsToProcess(e) {
          if (e.querySelectorAll) {
            var t = hasChanceOfBeingBoosted() ? ", a, form" : "", r = e.querySelectorAll(VERB_SELECTOR + t + ", [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext]");
            return r;
          } else
            return [];
        }
        function initButtonTracking(e) {
          var t = function(r) {
            var n = closest(r.target, "button, input[type='submit']");
            if (n !== null) {
              var a = getInternalData(e);
              a.lastButtonClicked = n;
            }
          };
          e.addEventListener("click", t), e.addEventListener("focusin", t), e.addEventListener("focusout", function(r) {
            var n = getInternalData(e);
            n.lastButtonClicked = null;
          });
        }
        function initNode(e) {
          if (!(e.closest && e.closest(htmx.config.disableSelector))) {
            var t = getInternalData(e);
            if (t.initHash !== attributeHash(e)) {
              t.initHash = attributeHash(e), deInitNode(e), triggerEvent(e, "htmx:beforeProcessNode"), e.value && (t.lastValue = e.value);
              var r = getTriggerSpecs(e), n = processVerbs(e, t, r);
              !n && getClosestAttributeValue(e, "hx-boost") === "true" && boostElement(e, t, r), e.tagName === "FORM" && initButtonTracking(e);
              var a = getAttributeValue(e, "hx-sse");
              a && processSSEInfo(e, t, a);
              var i = getAttributeValue(e, "hx-ws");
              i && processWebSocketInfo(e, t, i), triggerEvent(e, "htmx:afterProcessNode");
            }
          }
        }
        function processNode(e) {
          e = resolveTarget(e), initNode(e), forEach(findElementsToProcess(e), function(t) {
            initNode(t);
          });
        }
        function kebabEventName(e) {
          return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function makeEvent(e, t) {
          var r;
          return window.CustomEvent && typeof window.CustomEvent == "function" ? r = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t }) : (r = getDocument().createEvent("CustomEvent"), r.initCustomEvent(e, !0, !0, t)), r;
        }
        function triggerErrorEvent(e, t, r) {
          triggerEvent(e, t, mergeObjects({ error: t }, r));
        }
        function ignoreEventForLogging(e) {
          return e === "htmx:afterProcessNode";
        }
        function withExtensions(e, t) {
          forEach(getExtensions(e), function(r) {
            try {
              t(r);
            } catch (n) {
              logError(n);
            }
          });
        }
        function logError(e) {
          console.error ? console.error(e) : console.log && console.log("ERROR: ", e);
        }
        function triggerEvent(e, t, r) {
          e = resolveTarget(e), r == null && (r = {}), r.elt = e;
          var n = makeEvent(t, r);
          htmx.logger && !ignoreEventForLogging(t) && htmx.logger(e, t, r), r.error && (logError(r.error), triggerEvent(e, "htmx:error", { errorInfo: r }));
          var a = e.dispatchEvent(n), i = kebabEventName(t);
          if (a && i !== t) {
            var o = makeEvent(i, n.detail);
            a = a && e.dispatchEvent(o);
          }
          return withExtensions(e, function(s) {
            a = a && s.onEvent(t, n) !== !1;
          }), a;
        }
        var currentPathForHistory = location.pathname + location.search;
        function getHistoryElement() {
          var e = getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]");
          return e || getDocument().body;
        }
        function saveToHistoryCache(e, t, r, n) {
          if (canAccessLocalStorage()) {
            for (var a = parseJSON(localStorage.getItem("htmx-history-cache")) || [], i = 0; i < a.length; i++)
              if (a[i].url === e) {
                a.splice(i, 1);
                break;
              }
            var o = { url: e, content: t, title: r, scroll: n };
            for (triggerEvent(getDocument().body, "htmx:historyItemCreated", { item: o, cache: a }), a.push(o); a.length > htmx.config.historyCacheSize; )
              a.shift();
            for (; a.length > 0; )
              try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(a));
                break;
              } catch (s) {
                triggerErrorEvent(getDocument().body, "htmx:historyCacheError", { cause: s, cache: a }), a.shift();
              }
          }
        }
        function getCachedHistory(e) {
          if (!canAccessLocalStorage())
            return null;
          for (var t = parseJSON(localStorage.getItem("htmx-history-cache")) || [], r = 0; r < t.length; r++)
            if (t[r].url === e)
              return t[r];
          return null;
        }
        function cleanInnerHtmlForHistory(e) {
          var t = htmx.config.requestClass, r = e.cloneNode(!0);
          return forEach(findAll(r, "." + t), function(n) {
            removeClassFromElement(n, t);
          }), r.innerHTML;
        }
        function saveCurrentPageToHistory() {
          var e = getHistoryElement(), t = currentPathForHistory || location.pathname + location.search, r = getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
          r || (triggerEvent(getDocument().body, "htmx:beforeHistorySave", { path: t, historyElt: e }), saveToHistoryCache(t, cleanInnerHtmlForHistory(e), getDocument().title, window.scrollY)), htmx.config.historyEnabled && history.replaceState({ htmx: !0 }, getDocument().title, window.location.href);
        }
        function pushUrlIntoHistory(e) {
          htmx.config.getCacheBusterParam && (e = e.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (e.endsWith("&") || e.endsWith("?")) && (e = e.slice(0, -1))), htmx.config.historyEnabled && history.pushState({ htmx: !0 }, "", e), currentPathForHistory = e;
        }
        function replaceUrlInHistory(e) {
          htmx.config.historyEnabled && history.replaceState({ htmx: !0 }, "", e), currentPathForHistory = e;
        }
        function settleImmediately(e) {
          forEach(e, function(t) {
            t.call();
          });
        }
        function loadHistoryFromServer(e) {
          var t = new XMLHttpRequest(), r = { path: e, xhr: t };
          triggerEvent(getDocument().body, "htmx:historyCacheMiss", r), t.open("GET", e, !0), t.setRequestHeader("HX-History-Restore-Request", "true"), t.onload = function() {
            if (this.status >= 200 && this.status < 400) {
              triggerEvent(getDocument().body, "htmx:historyCacheMissLoad", r);
              var n = makeFragment(this.response);
              n = n.querySelector("[hx-history-elt],[data-hx-history-elt]") || n;
              var a = getHistoryElement(), i = makeSettleInfo(a), o = findTitle(this.response);
              if (o) {
                var s = find("title");
                s ? s.innerHTML = o : window.document.title = o;
              }
              swapInnerHTML(a, n, i), settleImmediately(i.tasks), currentPathForHistory = e, triggerEvent(getDocument().body, "htmx:historyRestore", { path: e, cacheMiss: !0, serverResponse: this.response });
            } else
              triggerErrorEvent(getDocument().body, "htmx:historyCacheMissLoadError", r);
          }, t.send();
        }
        function restoreHistory(e) {
          saveCurrentPageToHistory(), e = e || location.pathname + location.search;
          var t = getCachedHistory(e);
          if (t) {
            var r = makeFragment(t.content), n = getHistoryElement(), a = makeSettleInfo(n);
            swapInnerHTML(n, r, a), settleImmediately(a.tasks), document.title = t.title, window.scrollTo(0, t.scroll), currentPathForHistory = e, triggerEvent(getDocument().body, "htmx:historyRestore", { path: e, item: t });
          } else
            htmx.config.refreshOnHistoryMiss ? window.location.reload(!0) : loadHistoryFromServer(e);
        }
        function addRequestIndicatorClasses(e) {
          var t = findAttributeTargets(e, "hx-indicator");
          return t == null && (t = [e]), forEach(t, function(r) {
            var n = getInternalData(r);
            n.requestCount = (n.requestCount || 0) + 1, r.classList.add.call(r.classList, htmx.config.requestClass);
          }), t;
        }
        function removeRequestIndicatorClasses(e) {
          forEach(e, function(t) {
            var r = getInternalData(t);
            r.requestCount = (r.requestCount || 0) - 1, r.requestCount === 0 && t.classList.remove.call(t.classList, htmx.config.requestClass);
          });
        }
        function haveSeenNode(e, t) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            if (n.isSameNode(t))
              return !0;
          }
          return !1;
        }
        function shouldInclude(e) {
          return e.name === "" || e.name == null || e.disabled || e.type === "button" || e.type === "submit" || e.tagName === "image" || e.tagName === "reset" || e.tagName === "file" ? !1 : e.type === "checkbox" || e.type === "radio" ? e.checked : !0;
        }
        function processInputValue(e, t, r, n, a) {
          if (!(n == null || haveSeenNode(e, n))) {
            if (e.push(n), shouldInclude(n)) {
              var i = getRawAttribute(n, "name"), o = n.value;
              if (n.multiple && (o = toArray(n.querySelectorAll("option:checked")).map(function(l) {
                return l.value;
              })), n.files && (o = toArray(n.files)), i != null && o != null) {
                var s = t[i];
                s !== void 0 ? Array.isArray(s) ? Array.isArray(o) ? t[i] = s.concat(o) : s.push(o) : Array.isArray(o) ? t[i] = [s].concat(o) : t[i] = [s, o] : t[i] = o;
              }
              a && validateElement(n, r);
            }
            if (matches(n, "form")) {
              var u = n.elements;
              forEach(u, function(l) {
                processInputValue(e, t, r, l, a);
              });
            }
          }
        }
        function validateElement(e, t) {
          e.willValidate && (triggerEvent(e, "htmx:validation:validate"), e.checkValidity() || (t.push({ elt: e, message: e.validationMessage, validity: e.validity }), triggerEvent(e, "htmx:validation:failed", { message: e.validationMessage, validity: e.validity })));
        }
        function getInputValues(e, t) {
          var r = [], n = {}, a = {}, i = [], o = getInternalData(e), s = matches(e, "form") && e.noValidate !== !0 || getAttributeValue(e, "hx-validate") === "true";
          if (o.lastButtonClicked && (s = s && o.lastButtonClicked.formNoValidate !== !0), t !== "get" && processInputValue(r, a, i, closest(e, "form"), s), processInputValue(r, n, i, e, s), o.lastButtonClicked) {
            var u = getRawAttribute(o.lastButtonClicked, "name");
            u && (n[u] = o.lastButtonClicked.value);
          }
          var l = findAttributeTargets(e, "hx-include");
          return forEach(l, function(c) {
            processInputValue(r, n, i, c, s), matches(c, "form") || forEach(c.querySelectorAll(INPUT_SELECTOR), function(h) {
              processInputValue(r, n, i, h, s);
            });
          }), n = mergeObjects(n, a), { errors: i, values: n };
        }
        function appendParam(e, t, r) {
          e !== "" && (e += "&"), String(r) === "[object Object]" && (r = JSON.stringify(r));
          var n = encodeURIComponent(r);
          return e += encodeURIComponent(t) + "=" + n, e;
        }
        function urlEncode(e) {
          var t = "";
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var n = e[r];
              Array.isArray(n) ? forEach(n, function(a) {
                t = appendParam(t, r, a);
              }) : t = appendParam(t, r, n);
            }
          return t;
        }
        function makeFormData(e) {
          var t = new FormData();
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var n = e[r];
              Array.isArray(n) ? forEach(n, function(a) {
                t.append(r, a);
              }) : t.append(r, n);
            }
          return t;
        }
        function getHeaders(e, t, r) {
          var n = {
            "HX-Request": "true",
            "HX-Trigger": getRawAttribute(e, "id"),
            "HX-Trigger-Name": getRawAttribute(e, "name"),
            "HX-Target": getAttributeValue(t, "id"),
            "HX-Current-URL": getDocument().location.href
          };
          return getValuesForElement(e, "hx-headers", !1, n), r !== void 0 && (n["HX-Prompt"] = r), getInternalData(e).boosted && (n["HX-Boosted"] = "true"), n;
        }
        function filterValues(e, t) {
          var r = getClosestAttributeValue(t, "hx-params");
          if (r) {
            if (r === "none")
              return {};
            if (r === "*")
              return e;
            if (r.indexOf("not ") === 0)
              return forEach(r.substr(4).split(","), function(a) {
                a = a.trim(), delete e[a];
              }), e;
            var n = {};
            return forEach(r.split(","), function(a) {
              a = a.trim(), n[a] = e[a];
            }), n;
          } else
            return e;
        }
        function isAnchorLink(e) {
          return getRawAttribute(e, "href") && getRawAttribute(e, "href").indexOf("#") >= 0;
        }
        function getSwapSpecification(e, t) {
          var r = t || getClosestAttributeValue(e, "hx-swap"), n = {
            swapStyle: getInternalData(e).boosted ? "innerHTML" : htmx.config.defaultSwapStyle,
            swapDelay: htmx.config.defaultSwapDelay,
            settleDelay: htmx.config.defaultSettleDelay
          };
          if (getInternalData(e).boosted && !isAnchorLink(e) && (n.show = "top"), r) {
            var a = splitOnWhitespace(r);
            if (a.length > 0) {
              n.swapStyle = a[0];
              for (var i = 1; i < a.length; i++) {
                var o = a[i];
                if (o.indexOf("swap:") === 0 && (n.swapDelay = parseInterval(o.substr(5))), o.indexOf("settle:") === 0 && (n.settleDelay = parseInterval(o.substr(7))), o.indexOf("scroll:") === 0) {
                  var s = o.substr(7), u = s.split(":"), l = u.pop(), c = u.length > 0 ? u.join(":") : null;
                  n.scroll = l, n.scrollTarget = c;
                }
                if (o.indexOf("show:") === 0) {
                  var h = o.substr(5), u = h.split(":"), S = u.pop(), c = u.length > 0 ? u.join(":") : null;
                  n.show = S, n.showTarget = c;
                }
                if (o.indexOf("focus-scroll:") === 0) {
                  var w = o.substr(13);
                  n.focusScroll = w == "true";
                }
              }
            }
          }
          return n;
        }
        function usesFormData(e) {
          return getClosestAttributeValue(e, "hx-encoding") === "multipart/form-data" || matches(e, "form") && getRawAttribute(e, "enctype") === "multipart/form-data";
        }
        function encodeParamsForBody(e, t, r) {
          var n = null;
          return withExtensions(t, function(a) {
            n == null && (n = a.encodeParameters(e, r, t));
          }), n ?? (usesFormData(t) ? makeFormData(r) : urlEncode(r));
        }
        function makeSettleInfo(e) {
          return { tasks: [], elts: [e] };
        }
        function updateScrollState(e, t) {
          var r = e[0], n = e[e.length - 1];
          if (t.scroll) {
            var a = null;
            t.scrollTarget && (a = querySelectorExt(r, t.scrollTarget)), t.scroll === "top" && (r || a) && (a = a || r, a.scrollTop = 0), t.scroll === "bottom" && (n || a) && (a = a || n, a.scrollTop = a.scrollHeight);
          }
          if (t.show) {
            var a = null;
            if (t.showTarget) {
              var i = t.showTarget;
              t.showTarget === "window" && (i = "body"), a = querySelectorExt(r, i);
            }
            t.show === "top" && (r || a) && (a = a || r, a.scrollIntoView({ block: "start", behavior: htmx.config.scrollBehavior })), t.show === "bottom" && (n || a) && (a = a || n, a.scrollIntoView({ block: "end", behavior: htmx.config.scrollBehavior }));
          }
        }
        function getValuesForElement(e, t, r, n) {
          if (n == null && (n = {}), e == null)
            return n;
          var a = getAttributeValue(e, t);
          if (a) {
            var i = a.trim(), o = r;
            if (i === "unset")
              return null;
            i.indexOf("javascript:") === 0 ? (i = i.substr(11), o = !0) : i.indexOf("js:") === 0 && (i = i.substr(3), o = !0), i.indexOf("{") !== 0 && (i = "{" + i + "}");
            var s;
            o ? s = maybeEval(e, function() {
              return Function("return (" + i + ")")();
            }, {}) : s = parseJSON(i);
            for (var u in s)
              s.hasOwnProperty(u) && n[u] == null && (n[u] = s[u]);
          }
          return getValuesForElement(parentElt(e), t, r, n);
        }
        function maybeEval(e, t, r) {
          return htmx.config.allowEval ? t() : (triggerErrorEvent(e, "htmx:evalDisallowedError"), r);
        }
        function getHXVarsForElement(e, t) {
          return getValuesForElement(e, "hx-vars", !0, t);
        }
        function getHXValsForElement(e, t) {
          return getValuesForElement(e, "hx-vals", !1, t);
        }
        function getExpressionVars(e) {
          return mergeObjects(getHXVarsForElement(e), getHXValsForElement(e));
        }
        function safelySetHeaderValue(e, t, r) {
          if (r !== null)
            try {
              e.setRequestHeader(t, r);
            } catch {
              e.setRequestHeader(t, encodeURIComponent(r)), e.setRequestHeader(t + "-URI-AutoEncoded", "true");
            }
        }
        function getPathFromResponse(e) {
          if (e.responseURL && typeof URL < "u")
            try {
              var t = new URL(e.responseURL);
              return t.pathname + t.search;
            } catch {
              triggerErrorEvent(getDocument().body, "htmx:badResponseUrl", { url: e.responseURL });
            }
        }
        function hasHeader(e, t) {
          return e.getAllResponseHeaders().match(t);
        }
        function ajaxHelper(e, t, r) {
          return e = e.toLowerCase(), r ? r instanceof Element || isType(r, "String") ? issueAjaxRequest(e, t, null, null, {
            targetOverride: resolveTarget(r),
            returnPromise: !0
          }) : issueAjaxRequest(
            e,
            t,
            resolveTarget(r.source),
            r.event,
            {
              handler: r.handler,
              headers: r.headers,
              values: r.values,
              targetOverride: resolveTarget(r.target),
              swapOverride: r.swap,
              returnPromise: !0
            }
          ) : issueAjaxRequest(e, t, null, null, {
            returnPromise: !0
          });
        }
        function hierarchyForElt(e) {
          for (var t = []; e; )
            t.push(e), e = e.parentElement;
          return t;
        }
        function issueAjaxRequest(e, t, r, n, a, i) {
          var o = null, s = null;
          if (a = a ?? {}, a.returnPromise && typeof Promise < "u")
            var u = new Promise(function(q, P) {
              o = q, s = P;
            });
          r == null && (r = getDocument().body);
          var l = a.handler || handleAjaxResponse;
          if (bodyContains(r)) {
            var c = a.targetOverride || getTarget(r);
            if (c == null || c == DUMMY_ELT) {
              triggerErrorEvent(r, "htmx:targetError", { target: getAttributeValue(r, "hx-target") });
              return;
            }
            if (!i) {
              var h = function() {
                return issueAjaxRequest(e, t, r, n, a, !0);
              }, S = { target: c, elt: r, path: t, verb: e, triggeringEvent: n, etc: a, issueRequest: h };
              if (triggerEvent(r, "htmx:confirm", S) === !1)
                return;
            }
            var w = r, g = getInternalData(r), E = getClosestAttributeValue(r, "hx-sync"), v = null, A = !1;
            if (E) {
              var L = E.split(":"), B = L[0].trim();
              if (B === "this" ? w = findThisElement(r, "hx-sync") : w = querySelectorExt(r, B), E = (L[1] || "drop").trim(), g = getInternalData(w), E === "drop" && g.xhr && g.abortable !== !0)
                return;
              if (E === "abort") {
                if (g.xhr)
                  return;
                A = !0;
              } else if (E === "replace")
                triggerEvent(w, "htmx:abort");
              else if (E.indexOf("queue") === 0) {
                var F = E.split(" ");
                v = (F[1] || "last").trim();
              }
            }
            if (g.xhr)
              if (g.abortable)
                triggerEvent(w, "htmx:abort");
              else {
                if (v == null) {
                  if (n) {
                    var H = getInternalData(n);
                    H && H.triggerSpec && H.triggerSpec.queue && (v = H.triggerSpec.queue);
                  }
                  v == null && (v = "last");
                }
                g.queuedRequests == null && (g.queuedRequests = []), v === "first" && g.queuedRequests.length === 0 ? g.queuedRequests.push(function() {
                  issueAjaxRequest(e, t, r, n, a);
                }) : v === "all" ? g.queuedRequests.push(function() {
                  issueAjaxRequest(e, t, r, n, a);
                }) : v === "last" && (g.queuedRequests = [], g.queuedRequests.push(function() {
                  issueAjaxRequest(e, t, r, n, a);
                }));
                return;
              }
            var x = new XMLHttpRequest();
            g.xhr = x, g.abortable = A;
            var T = function() {
              if (g.xhr = null, g.abortable = !1, g.queuedRequests != null && g.queuedRequests.length > 0) {
                var q = g.queuedRequests.shift();
                q();
              }
            }, O = getClosestAttributeValue(r, "hx-prompt");
            if (O) {
              var D = prompt(O);
              if (D === null || !triggerEvent(r, "htmx:prompt", { prompt: D, target: c }))
                return maybeCall(o), T(), u;
            }
            var W = getClosestAttributeValue(r, "hx-confirm");
            if (W && !confirm(W))
              return maybeCall(o), T(), u;
            var I = getHeaders(r, c, D);
            a.headers && (I = mergeObjects(I, a.headers));
            var J = getInputValues(r, e), _ = J.errors, X = J.values;
            a.values && (X = mergeObjects(X, a.values));
            var G = getExpressionVars(r), Y = mergeObjects(X, G), N = filterValues(Y, r);
            e !== "get" && !usesFormData(r) && (I["Content-Type"] = "application/x-www-form-urlencoded"), htmx.config.getCacheBusterParam && e === "get" && (N["org.htmx.cache-buster"] = getRawAttribute(c, "id") || "true"), (t == null || t === "") && (t = getDocument().location.href);
            var V = getValuesForElement(r, "hx-request"), j = getInternalData(r).boosted, R = {
              boosted: j,
              parameters: N,
              unfilteredParameters: Y,
              headers: I,
              target: c,
              verb: e,
              errors: _,
              withCredentials: a.credentials || V.credentials || htmx.config.withCredentials,
              timeout: a.timeout || V.timeout || htmx.config.timeout,
              path: t,
              triggeringEvent: n
            };
            if (!triggerEvent(r, "htmx:configRequest", R))
              return maybeCall(o), T(), u;
            if (t = R.path, e = R.verb, I = R.headers, N = R.parameters, _ = R.errors, _ && _.length > 0)
              return triggerEvent(r, "htmx:validation:halted", R), maybeCall(o), T(), u;
            var $ = t.split("#"), y = $[0], d = $[1], f = null;
            if (e === "get") {
              f = y;
              var m = Object.keys(N).length !== 0;
              m && (f.indexOf("?") < 0 ? f += "?" : f += "&", f += urlEncode(N), d && (f += "#" + d)), x.open("GET", f, !0);
            } else
              x.open(e.toUpperCase(), t, !0);
            if (x.overrideMimeType("text/html"), x.withCredentials = R.withCredentials, x.timeout = R.timeout, !V.noHeaders) {
              for (var p in I)
                if (I.hasOwnProperty(p)) {
                  var b = I[p];
                  safelySetHeaderValue(x, p, b);
                }
            }
            var C = {
              xhr: x,
              target: c,
              requestConfig: R,
              etc: a,
              boosted: j,
              pathInfo: {
                requestPath: t,
                finalRequestPath: f || t,
                anchor: d
              }
            };
            if (x.onload = function() {
              try {
                var q = hierarchyForElt(r);
                if (C.pathInfo.responsePath = getPathFromResponse(x), l(r, C), removeRequestIndicatorClasses(M), triggerEvent(r, "htmx:afterRequest", C), triggerEvent(r, "htmx:afterOnLoad", C), !bodyContains(r)) {
                  for (var P = null; q.length > 0 && P == null; ) {
                    var U = q.shift();
                    bodyContains(U) && (P = U);
                  }
                  P && (triggerEvent(P, "htmx:afterRequest", C), triggerEvent(P, "htmx:afterOnLoad", C));
                }
                maybeCall(o), T();
              } catch (Q) {
                throw triggerErrorEvent(r, "htmx:onLoadError", mergeObjects({ error: Q }, C)), Q;
              }
            }, x.onerror = function() {
              removeRequestIndicatorClasses(M), triggerErrorEvent(r, "htmx:afterRequest", C), triggerErrorEvent(r, "htmx:sendError", C), maybeCall(s), T();
            }, x.onabort = function() {
              removeRequestIndicatorClasses(M), triggerErrorEvent(r, "htmx:afterRequest", C), triggerErrorEvent(r, "htmx:sendAbort", C), maybeCall(s), T();
            }, x.ontimeout = function() {
              removeRequestIndicatorClasses(M), triggerErrorEvent(r, "htmx:afterRequest", C), triggerErrorEvent(r, "htmx:timeout", C), maybeCall(s), T();
            }, !triggerEvent(r, "htmx:beforeRequest", C))
              return maybeCall(o), T(), u;
            var M = addRequestIndicatorClasses(r);
            return forEach(["loadstart", "loadend", "progress", "abort"], function(q) {
              forEach([x, x.upload], function(P) {
                P.addEventListener(q, function(U) {
                  triggerEvent(r, "htmx:xhr:" + q, {
                    lengthComputable: U.lengthComputable,
                    loaded: U.loaded,
                    total: U.total
                  });
                });
              });
            }), triggerEvent(r, "htmx:beforeSend", C), x.send(e === "get" ? null : encodeParamsForBody(x, r, N)), u;
          }
        }
        function determineHistoryUpdates(e, t) {
          var r = t.xhr, n = null, a = null;
          if (hasHeader(r, /HX-Push:/i) ? (n = r.getResponseHeader("HX-Push"), a = "push") : hasHeader(r, /HX-Push-Url:/i) ? (n = r.getResponseHeader("HX-Push-Url"), a = "push") : hasHeader(r, /HX-Replace-Url:/i) && (n = r.getResponseHeader("HX-Replace-Url"), a = "replace"), n)
            return n === "false" ? {} : {
              type: a,
              path: n
            };
          var i = t.pathInfo.finalRequestPath, o = t.pathInfo.responsePath, s = getClosestAttributeValue(e, "hx-push-url"), u = getClosestAttributeValue(e, "hx-replace-url"), l = getInternalData(e).boosted, c = null, h = null;
          return s ? (c = "push", h = s) : u ? (c = "replace", h = u) : l && (c = "push", h = o || i), h ? h === "false" ? {} : (h === "true" && (h = o || i), t.pathInfo.anchor && h.indexOf("#") === -1 && (h = h + "#" + t.pathInfo.anchor), {
            type: c,
            path: h
          }) : {};
        }
        function handleAjaxResponse(e, t) {
          var r = t.xhr, n = t.target, a = t.etc;
          if (triggerEvent(e, "htmx:beforeOnLoad", t)) {
            if (hasHeader(r, /HX-Trigger:/i) && handleTrigger(r, "HX-Trigger", e), hasHeader(r, /HX-Location:/i)) {
              saveCurrentPageToHistory();
              var i = r.getResponseHeader("HX-Location"), o;
              i.indexOf("{") === 0 && (o = parseJSON(i), i = o.path, delete o.path), ajaxHelper("GET", i, o).then(function() {
                pushUrlIntoHistory(i);
              });
              return;
            }
            if (hasHeader(r, /HX-Redirect:/i)) {
              location.href = r.getResponseHeader("HX-Redirect");
              return;
            }
            if (hasHeader(r, /HX-Refresh:/i) && r.getResponseHeader("HX-Refresh") === "true") {
              location.reload();
              return;
            }
            hasHeader(r, /HX-Retarget:/i) && (t.target = getDocument().querySelector(r.getResponseHeader("HX-Retarget")));
            var s = determineHistoryUpdates(e, t), u = r.status >= 200 && r.status < 400 && r.status !== 204, l = r.response, c = r.status >= 400, h = mergeObjects({ shouldSwap: u, serverResponse: l, isError: c }, t);
            if (triggerEvent(n, "htmx:beforeSwap", h)) {
              if (n = h.target, l = h.serverResponse, c = h.isError, t.target = n, t.failed = c, t.successful = !c, h.shouldSwap) {
                r.status === 286 && cancelPolling(e), withExtensions(e, function(E) {
                  l = E.transformResponse(l, r, e);
                }), s.type && saveCurrentPageToHistory();
                var S = a.swapOverride;
                hasHeader(r, /HX-Reswap:/i) && (S = r.getResponseHeader("HX-Reswap"));
                var o = getSwapSpecification(e, S);
                n.classList.add(htmx.config.swappingClass);
                var w = function() {
                  try {
                    var E = document.activeElement, v = {};
                    try {
                      v = {
                        elt: E,
                        // @ts-ignore
                        start: E ? E.selectionStart : null,
                        // @ts-ignore
                        end: E ? E.selectionEnd : null
                      };
                    } catch {
                    }
                    var A = makeSettleInfo(n);
                    if (selectAndSwap(o.swapStyle, n, e, l, A), v.elt && !bodyContains(v.elt) && v.elt.id) {
                      var L = document.getElementById(v.elt.id), B = { preventScroll: o.focusScroll !== void 0 ? !o.focusScroll : !htmx.config.defaultFocusScroll };
                      if (L) {
                        if (v.start && L.setSelectionRange)
                          try {
                            L.setSelectionRange(v.start, v.end);
                          } catch {
                          }
                        L.focus(B);
                      }
                    }
                    if (n.classList.remove(htmx.config.swappingClass), forEach(A.elts, function(x) {
                      x.classList && x.classList.add(htmx.config.settlingClass), triggerEvent(x, "htmx:afterSwap", t);
                    }), hasHeader(r, /HX-Trigger-After-Swap:/i)) {
                      var F = e;
                      bodyContains(e) || (F = getDocument().body), handleTrigger(r, "HX-Trigger-After-Swap", F);
                    }
                    var H = function() {
                      if (forEach(A.tasks, function(D) {
                        D.call();
                      }), forEach(A.elts, function(D) {
                        D.classList && D.classList.remove(htmx.config.settlingClass), triggerEvent(D, "htmx:afterSettle", t);
                      }), s.type && (s.type === "push" ? (pushUrlIntoHistory(s.path), triggerEvent(getDocument().body, "htmx:pushedIntoHistory", { path: s.path })) : (replaceUrlInHistory(s.path), triggerEvent(getDocument().body, "htmx:replacedInHistory", { path: s.path }))), t.pathInfo.anchor) {
                        var x = find("#" + t.pathInfo.anchor);
                        x && x.scrollIntoView({ block: "start", behavior: "auto" });
                      }
                      if (A.title) {
                        var T = find("title");
                        T ? T.innerHTML = A.title : window.document.title = A.title;
                      }
                      if (updateScrollState(A.elts, o), hasHeader(r, /HX-Trigger-After-Settle:/i)) {
                        var O = e;
                        bodyContains(e) || (O = getDocument().body), handleTrigger(r, "HX-Trigger-After-Settle", O);
                      }
                    };
                    o.settleDelay > 0 ? setTimeout(H, o.settleDelay) : H();
                  } catch (x) {
                    throw triggerErrorEvent(e, "htmx:swapError", t), x;
                  }
                };
                o.swapDelay > 0 ? setTimeout(w, o.swapDelay) : w();
              }
              c && triggerErrorEvent(e, "htmx:responseError", mergeObjects({ error: "Response Status Error Code " + r.status + " from " + t.pathInfo.requestPath }, t));
            }
          }
        }
        var extensions = {};
        function extensionBase() {
          return {
            init: function(e) {
              return null;
            },
            onEvent: function(e, t) {
              return !0;
            },
            transformResponse: function(e, t, r) {
              return e;
            },
            isInlineSwap: function(e) {
              return !1;
            },
            handleSwap: function(e, t, r, n) {
              return !1;
            },
            encodeParameters: function(e, t, r) {
              return null;
            }
          };
        }
        function defineExtension(e, t) {
          t.init && t.init(internalAPI), extensions[e] = mergeObjects(extensionBase(), t);
        }
        function removeExtension(e) {
          delete extensions[e];
        }
        function getExtensions(e, t, r) {
          if (e == null)
            return t;
          t == null && (t = []), r == null && (r = []);
          var n = getAttributeValue(e, "hx-ext");
          return n && forEach(n.split(","), function(a) {
            if (a = a.replace(/ /g, ""), a.slice(0, 7) == "ignore:") {
              r.push(a.slice(7));
              return;
            }
            if (r.indexOf(a) < 0) {
              var i = extensions[a];
              i && t.indexOf(i) < 0 && t.push(i);
            }
          }), getExtensions(parentElt(e), t, r);
        }
        function ready(e) {
          getDocument().readyState !== "loading" ? e() : getDocument().addEventListener("DOMContentLoaded", e);
        }
        function insertIndicatorStyles() {
          htmx.config.includeIndicatorStyles !== !1 && getDocument().head.insertAdjacentHTML(
            "beforeend",
            "<style>		                      ." + htmx.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}		                      ." + htmx.config.requestClass + " ." + htmx.config.indicatorClass + "{opacity:1}		                      ." + htmx.config.requestClass + "." + htmx.config.indicatorClass + "{opacity:1}		                    </style>"
          );
        }
        function getMetaConfig() {
          var e = getDocument().querySelector('meta[name="htmx-config"]');
          return e ? parseJSON(e.content) : null;
        }
        function mergeMetaConfig() {
          var e = getMetaConfig();
          e && (htmx.config = mergeObjects(htmx.config, e));
        }
        return ready(function() {
          mergeMetaConfig(), insertIndicatorStyles();
          var e = getDocument().body;
          processNode(e);
          var t = getDocument().querySelectorAll(
            "[hx-trigger='restored'],[data-hx-trigger='restored']"
          );
          e.addEventListener("htmx:abort", function(r) {
            var n = r.target, a = getInternalData(n);
            a && a.xhr && a.xhr.abort();
          }), window.onpopstate = function(r) {
            r.state && r.state.htmx && (restoreHistory(), forEach(t, function(n) {
              triggerEvent(n, "htmx:restored", {
                document: getDocument(),
                triggerEvent
              });
            }));
          }, setTimeout(function() {
            triggerEvent(e, "htmx:load", {});
          }, 0);
        }), htmx;
      })();
    });
  })(htmx$1)), htmx$1.exports;
}
requireHtmx();
window.errorHandler = window.errorHandler || {};
export {
  DPClipboard
};
