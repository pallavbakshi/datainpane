import { defineComponent as w, ref as o, openBlock as i, createElementBlock as c, Fragment as f, createElementVNode as e, renderSlot as y, withDirectives as b, renderList as k, toDisplayString as C, vShow as S } from "../vue.esm-browser.prod.js";
import { s as j } from "./index.es2.js";
const z = {
  method: "get",
  class: "w-full",
  "data-component-name": "app_list_form"
}, B = { class: "w-full" }, P = { class: "relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex" }, L = { class: "flex-1 flex justify-between px-4 sm:px-6" }, M = { class: "flex-1 flex" }, U = { class: "w-full flex md:ml-0" }, A = { class: "relative w-full text-gray-400 focus-within:text-gray-600" }, F = ["value", "placeholder"], V = { class: "bg-gray-100 p-3 w-full flex items-center" }, D = { class: "flex items-center mr-4" }, E = ["checked"], H = { class: "flex items-center" }, J = ["value"], R = ["value"], Q = /* @__PURE__ */ w({
  __name: "SearchQuery.ce",
  props: {
    searchPlaceholder: { type: String }
  },
  setup(h) {
    const p = h, v = (s) => {
      m.value = j(s);
    }, g = (s) => {
      const t = [];
      for (const [l, n] of new URLSearchParams(location.search))
        s === l && t.push(n ? decodeURIComponent(n) : "");
      return t;
    }, r = (s) => {
      const t = g(s);
      return t.length > 0 ? t[0] : "";
    }, d = o(r("owned_by_me") === "on"), u = o(r("project")), x = o(r("name")), a = o(!!u.value || d.value || !1), m = o(), _ = () => a.value = !a.value;
    return (s, t) => (i(), c(f, null, [
      t[3] || (t[3] = e("link", {
        rel: "stylesheet",
        href: "/static/base/style.css"
      }, null, -1)),
      y(s.$slots, "choices-data", { ref: v }),
      e("form", z, [
        e("div", B, [
          e("div", P, [
            e("div", L, [
              e("div", M, [
                e("div", U, [
                  e("div", A, [
                    t[0] || (t[0] = e("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center" }, [
                      e("svg", {
                        class: "flex-shrink-0 h-5 w-5",
                        "x-description": "Heroicon name: solid/search",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      }, [
                        e("path", {
                          "fill-rule": "evenodd",
                          d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                          "clip-rule": "evenodd"
                        })
                      ])
                    ], -1)),
                    e("input", {
                      name: "name",
                      value: x.value,
                      id: "id_name",
                      class: "h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block",
                      placeholder: p.searchPlaceholder,
                      type: "search"
                    }, null, 8, F)
                  ])
                ])
              ]),
              e("div", { class: "ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6" }, [
                e("button", {
                  type: "button",
                  onClick: _,
                  class: "justify-center px-3.5 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }, [...t[1] || (t[1] = [
                  e("svg", {
                    class: "h-5 w-5 text-gray-400",
                    "x-description": "Heroicon name: solid/filter",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true"
                  }, [
                    e("path", {
                      "fill-rule": "evenodd",
                      d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                      "clip-rule": "evenodd"
                    })
                  ], -1)
                ])])
              ])
            ])
          ]),
          b(e("div", V, [
            e("div", D, [
              e("input", {
                type: "checkbox",
                name: "owned_by_me",
                class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",
                id: "id_owned_by_me",
                checked: d.value,
                onchange: "this.form.submit()"
              }, null, 8, E),
              t[2] || (t[2] = e("label", {
                for: "id_owned_by_me",
                class: "block text-gray-700 text-sm ml-1"
              }, " Created by me ", -1))
            ]),
            e("div", H, [
              e("select", {
                value: u.value,
                onchange: "this.form.submit()",
                class: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
                name: "project"
              }, [
                (i(!0), c(f, null, k(m.value, (l, n) => (i(), c("option", {
                  key: n,
                  value: l.value
                }, C(l.text), 9, R))), 128))
              ], 8, J)
            ])
          ], 512), [
            [S, a.value]
          ])
        ])
      ])
    ], 64));
  }
});
export {
  Q as default
};
