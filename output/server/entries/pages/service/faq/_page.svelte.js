import { Z as ensure_array_like, T as stringify, Q as pop, O as push } from "../../../../chunks/index2.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  const allFaqs = [
    {
      id: 1,
      question: "서비스 이용 시간이 어떻게 되나요?",
      answer: "365일 24시간 언제든지 이용 가능합니다. 단, 정기 점검 시간에는 서비스 이용이 제한될 수 있습니다.",
      isOpen: false,
      category: "이용안내"
    },
    {
      id: 2,
      question: "비밀번호를 잊어버렸어요.",
      answer: "로그인 페이지의 '비밀번호 찾기' 기능을 통해 재설정하실 수 있습니다.",
      isOpen: false,
      category: "계정"
    }
    // 더미 데이터 추가
  ];
  let searchQuery = "";
  let faqs = allFaqs;
  const each_array = ensure_array_like(faqs);
  $$payload.out += `<div><div class="content-container svelte-1kw0hh8"><div class="inner-container svelte-1kw0hh8"><h1 class="svelte-1kw0hh8">자주묻는질문</h1> <div class="faq-content"><div class="search-bar svelte-1kw0hh8"><input type="text" placeholder="궁금하신 내용을 검색해보세요"${attr("value", searchQuery)} class="svelte-1kw0hh8"> <button class="svelte-1kw0hh8">검색</button></div> <div class="faq-list svelte-1kw0hh8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let faq = each_array[$$index];
    $$payload.out += `<div class="faq-item svelte-1kw0hh8"><div class="faq-question svelte-1kw0hh8"><span class="q-mark svelte-1kw0hh8">Q</span> <span class="question svelte-1kw0hh8">${escape_html(faq.question)}</span> <span${attr("class", `arrow svelte-1kw0hh8 ${stringify([faq.isOpen ? "open" : ""].filter(Boolean).join(" "))}`)}>▼</span></div> `;
    if (faq.isOpen) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="faq-answer svelte-1kw0hh8"><span class="a-mark svelte-1kw0hh8">A</span> <p class="svelte-1kw0hh8">${escape_html(faq.answer)}</p></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
