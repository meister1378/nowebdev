import { R as getContext, S as store_get, T as stringify, V as slot, W as unsubscribe_stores, Q as pop, O as push } from "../../chunks/index2.js";
import "../../chunks/client.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { a as attr } from "../../chunks/attributes.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const navigating = {
  subscribe(fn) {
    const store = getStores().navigating;
    return store.subscribe(fn);
  }
};
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$navigating", navigating)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="loading-overlay svelte-ajafy3"><div class="loading-container svelte-ajafy3"><div class="progress-bar svelte-ajafy3"><div class="progress-circle svelte-ajafy3"><div class="blue-circle svelte-ajafy3"></div> <div class="mint-overlay svelte-ajafy3"></div></div> <div class="progress-text svelte-ajafy3">${escape_html(store_get($$store_subs ??= {}, "$navigating", navigating)?.to?.route?.id || "Loading...")}</div></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <nav${attr("class", `svelte-ajafy3 ${stringify([
    "",
    ""
  ].filter(Boolean).join(" "))}`)}><div class="logo svelte-ajafy3"><img src="/logo.png" alt="Company Logo" class="svelte-ajafy3"></div> <div class="menu svelte-ajafy3"><div class="menu-item svelte-ajafy3">회사소개 <div class="dropdown-container svelte-ajafy3"><div class="dropdown-menu svelte-ajafy3"><a href="/company/vision" class="dropdown-item svelte-ajafy3">Vision</a> <a href="/company/ceo-message" class="dropdown-item svelte-ajafy3">CEO Message</a> <a href="/company/about-us" class="dropdown-item svelte-ajafy3">About Us</a> <a href="/company/certifications" class="dropdown-item svelte-ajafy3">Certifications &amp; Customers</a></div></div></div> <div class="menu-item svelte-ajafy3">프로그램 <div class="dropdown-container svelte-ajafy3"><div class="dropdown-menu svelte-ajafy3"><a href="/program/N" class="dropdown-item svelte-ajafy3">N사</a> <a href="/program/I" class="dropdown-item svelte-ajafy3">I사</a> <a href="/program/Y" class="dropdown-item svelte-ajafy3">Y사</a></div></div></div> <div class="menu-item svelte-ajafy3">사업영역 <div class="dropdown-container svelte-ajafy3"><div class="dropdown-menu svelte-ajafy3"><a href="/business/consult" class="dropdown-item svelte-ajafy3">컨설팅</a> <a href="/business/develop" class="dropdown-item svelte-ajafy3">개발</a> <a href="/business/analysis" class="dropdown-item svelte-ajafy3">품질 분석</a></div></div></div> <div class="menu-item svelte-ajafy3">고객지원 <div class="dropdown-container svelte-ajafy3"><div class="dropdown-menu svelte-ajafy3"><a href="/service/notice" class="dropdown-item svelte-ajafy3">공지사항</a> <a href="/service/faq" class="dropdown-item svelte-ajafy3">자주묻는질문</a> <a href="/service/download" class="dropdown-item svelte-ajafy3">자료실</a></div></div></div> <a href="/contact" class="contact-btn svelte-ajafy3">문의하기</a></div> <div class="menu-divider svelte-ajafy3"></div></nav> <main${attr("class", `svelte-ajafy3 ${stringify([
    store_get($$store_subs ??= {}, "$navigating", navigating) ? "blur" : ""
  ].filter(Boolean).join(" "))}`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
