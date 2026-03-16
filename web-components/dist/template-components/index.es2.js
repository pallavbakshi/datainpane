import { defineAsyncComponent as l, defineCustomElement as c } from "../vue.esm-browser.prod.js";
const r = (e) => window.addEventListener("DOMContentLoaded", e), a = (e, t, o = {}) => (
  /**
   * Toggle visibility of element with callback
   * elementSelector: The element whose visibility should be toggled
   * toggleVisibilitySelectors: A list of element selectors that toggle the visibility of the element when clicked
   */
  r(() => {
    const n = document.querySelector(e);
    if (!n)
      throw new Error(`Can't find element to toggle: ${e}`);
    o.initialOpen && n.classList.remove("dip-invisible");
    for (const i of t) {
      const s = document.querySelector(i);
      if (!s)
        throw new Error(`Can't find clickable element: ${i}`);
      s.addEventListener("click", () => {
        n.classList.toggle("dip-invisible"), o.callback && o.callback(
          !n.classList.contains("dip-invisible")
        );
      });
    }
  })
), f = (e) => {
  try {
    const t = e.assignedNodes()[0];
    return JSON.parse(
      t.querySelector("script[type='application/json']").textContent
    );
  } catch (t) {
    throw new Error(`Couldn't serialize slot content: ${t}`);
  }
}, d = l(() => import("./Modal.ce.es.js")), m = l(
  () => import("./SearchQuery.ce.es.js")
);
customElements.define("dip-modal", c(d));
customElements.define("dip-search-query", c(m));
const u = {
  toggleVisibility: a,
  onLoad: r
};
export {
  f as s,
  u as t
};
