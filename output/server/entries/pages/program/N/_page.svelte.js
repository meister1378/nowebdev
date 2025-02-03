import { Z as ensure_array_like } from "../../../../chunks/index2.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload) {
  const programs = [
    {
      id: 1,
      name: "서이추 프로그램",
      description: "서이추 프로그램은 서이추 제품을 위한 통합 솔루션으로, 생산 공정 최적화와 실시간 모니터링을 제공합니다.",
      features: ["실시간 OO", "품질 OOO", "OO OOO", "OO OOO"],
      image: "smart-factory.jpg",
      price: "가격문의"
    },
    {
      id: 2,
      name: "AI 공감 댓글 프로그램",
      description: "AI 공감 댓글 프로그램은 서이추 제품을 위한 통합 솔루션으로, 생산 공정 최적화와 실시간 모니터링을 제공합니다.",
      features: ["OO", "OO", "OO", "OO"],
      image: "logistics.jpg",
      price: "가격문의"
    }
    // 추가 프로그램
  ];
  const each_array = ensure_array_like(programs);
  $$payload.out += `<div><div class="content-container svelte-f2d4ny"><div class="inner-container svelte-f2d4ny"><h1 class="svelte-f2d4ny">N사 프로그램</h1> <div class="program-grid svelte-f2d4ny"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let program = each_array[$$index_1];
    const each_array_1 = ensure_array_like(program.features);
    $$payload.out += `<div class="program-card svelte-f2d4ny"><div class="program-image svelte-f2d4ny"><img${attr("src", program.image)}${attr("alt", program.name)} class="svelte-f2d4ny"></div> <div class="program-content svelte-f2d4ny"><h2 class="svelte-f2d4ny">${escape_html(program.name)}</h2> <p class="description svelte-f2d4ny">${escape_html(program.description)}</p> <div class="features svelte-f2d4ny"><h3 class="svelte-f2d4ny">주요 기능</h3> <ul class="svelte-f2d4ny"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let feature = each_array_1[$$index];
      $$payload.out += `<li class="svelte-f2d4ny">${escape_html(feature)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div> <div class="program-footer svelte-f2d4ny"><span class="price svelte-f2d4ny">${escape_html(program.price)}</span> <button class="inquiry-btn svelte-f2d4ny">문의하기</button></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
}
export {
  _page as default
};
