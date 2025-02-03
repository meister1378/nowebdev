import { Q as pop, T as stringify, O as push } from "../../chunks/index2.js";
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<nav${attr("class", `svelte-m6hgfw ${stringify([
    "",
    ""
  ].filter(Boolean).join(" "))}`)}><div class="logo svelte-m6hgfw"><img src="/logo.png" alt="Company Logo" class="svelte-m6hgfw"></div> <div class="menu svelte-m6hgfw"><div class="menu-item svelte-m6hgfw">회사소개 <div class="dropdown-container svelte-m6hgfw"><div class="dropdown-menu svelte-m6hgfw"><a href="/company/vision" class="dropdown-item svelte-m6hgfw">Vision</a> <a href="/company/ceo-message" class="dropdown-item svelte-m6hgfw">CEO Message</a> <a href="/company/about-us" class="dropdown-item svelte-m6hgfw">About Us</a> <a href="/company/certifications" class="dropdown-item svelte-m6hgfw">Certifications &amp; Customers</a></div></div></div> <div class="menu-item svelte-m6hgfw">프로그램 <div class="dropdown-container svelte-m6hgfw"><div class="dropdown-menu svelte-m6hgfw"><a href="/program/N" class="dropdown-item svelte-m6hgfw">N사</a> <a href="/program/I" class="dropdown-item svelte-m6hgfw">I사</a> <a href="/program/Y" class="dropdown-item svelte-m6hgfw">Y사</a> <a href="/program/quality_analysis" class="dropdown-item svelte-m6hgfw">품질 분석</a></div></div></div> <div class="menu-item svelte-m6hgfw">사업영역 <div class="dropdown-container svelte-m6hgfw"><div class="dropdown-menu svelte-m6hgfw"><a href="#" class="dropdown-item svelte-m6hgfw">컨설팅</a> <a href="#" class="dropdown-item svelte-m6hgfw">개발</a> <a href="#" class="dropdown-item svelte-m6hgfw">품질 분석</a></div></div></div> <div class="menu-item svelte-m6hgfw">고객지원 <div class="dropdown-container svelte-m6hgfw"><div class="dropdown-menu svelte-m6hgfw"><a href="#" class="dropdown-item svelte-m6hgfw">공지사항</a> <a href="#" class="dropdown-item svelte-m6hgfw">자주묻는질문</a> <a href="#" class="dropdown-item svelte-m6hgfw">자료실</a></div></div></div> <a href="/contact" class="contact-btn svelte-m6hgfw">문의하기</a></div> <div class="menu-divider svelte-m6hgfw"></div></nav>`;
  pop();
}
export {
  _page as default
};
