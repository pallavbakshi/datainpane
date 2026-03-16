import { defineComponent as d, ref as m, openBlock as c, createElementBlock as u, Fragment as v, createElementVNode as t, renderSlot as n, withDirectives as i, vShow as a } from "../vue.esm-browser.prod.js";
const f = {
  "data-cy": "modal-component",
  class: "modal-component fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50",
  style: { display: "none" }
}, p = { class: "fixed inset-0 transition-opacity" }, x = {
  style: { "max-height": "40em" },
  class: "text-left relative bg-white rounded-lg px-4 pt-5 pb-4 overflow-x-hidden overflow-y-auto shadow-xl transform transition-all sm:max-w-2xl sm:w-full sm:p-6"
}, h = { class: "hidden sm:block absolute top-0 right-0 pt-5 pr-4" }, y = { class: "sm:flex sm:items-center mb-1" }, b = { class: "mt-3 sm:mt-0 sm:text-left" }, g = { class: "flex items-center" }, _ = { class: "text-lg leading-6 font-medium text-gray-900 pb-1" }, w = { class: "mt-3 w-full" }, k = { class: "text-sm leading-5 text-gray-500" }, $ = {
  class: "mt-4 flex",
  style: { "flex-direction": "row-reverse" }
}, C = { class: "mt-3 sm:mt-0" }, S = /* @__PURE__ */ d({
  __name: "Modal.ce",
  setup(B) {
    const r = new URLSearchParams(document.location.search).has("invite"), s = m(r);
    return (o, e) => (c(), u(v, null, [
      e[5] || (e[5] = t("link", {
        rel: "stylesheet",
        href: "/static/base/style.css"
      }, null, -1)),
      n(o.$slots, "trigger", {
        onClick: e[0] || (e[0] = (l) => s.value = !0)
      }),
      i(t("div", f, [
        i(t("div", p, [
          t("div", {
            onClick: e[1] || (e[1] = (l) => s.value = !1),
            class: "absolute inset-0 bg-gray-500 opacity-75"
          })
        ], 512), [
          [a, s.value]
        ]),
        i(t("div", x, [
          t("div", h, [
            t("button", {
              onClick: e[2] || (e[2] = (l) => s.value = !1),
              type: "button",
              class: "text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            }, [...e[4] || (e[4] = [
              t("svg", {
                class: "h-6 w-6",
                stroke: "currentColor",
                fill: "none",
                viewBox: "0 0 24 24"
              }, [
                t("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ])])
          ]),
          t("div", y, [
            t("div", b, [
              t("div", g, [
                t("h3", _, [
                  n(o.$slots, "title")
                ])
              ])
            ])
          ]),
          t("div", w, [
            t("div", k, [
              n(o.$slots, "default")
            ])
          ]),
          t("div", $, [
            n(o.$slots, "buttons", {}, () => [
              n(o.$slots, "action"),
              t("div", C, [
                t("button", {
                  onClick: e[3] || (e[3] = (l) => s.value = !1),
                  type: "button",
                  class: "dip-btn dip-btn-info mr-3"
                }, " Close ")
              ])
            ])
          ])
        ], 512), [
          [a, s.value]
        ])
      ], 512), [
        [a, s.value]
      ])
    ], 64));
  }
});
export {
  S as default
};
