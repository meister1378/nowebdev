import { Z as ensure_array_like } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload) {
  const files = [
    {
      id: 1,
      title: "제품 소개서",
      category: "브로슈어",
      date: "2024.03.15",
      size: "2.5MB",
      downloads: 128
    },
    {
      id: 2,
      title: "사용자 매뉴얼 v1.2",
      category: "매뉴얼",
      date: "2024.03.10",
      size: "4.8MB",
      downloads: 356
    }
    // 더미 데이터 추가
  ];
  const each_array = ensure_array_like(files);
  $$payload.out += `<div><div class="content-container svelte-116bgvb"><div class="inner-container svelte-116bgvb"><h1 class="svelte-116bgvb">자료실</h1> <div class="download-content"><div class="search-bar svelte-116bgvb"><select class="svelte-116bgvb"><option value="">전체</option><option value="brochure">브로슈어</option><option value="manual">매뉴얼</option><option value="catalog">카탈로그</option></select> <input type="text" placeholder="검색어를 입력하세요" class="svelte-116bgvb"> <button class="svelte-116bgvb">검색</button></div> <table class="download-table svelte-116bgvb"><thead><tr><th class="svelte-116bgvb">번호</th><th class="svelte-116bgvb">분류</th><th class="svelte-116bgvb">제목</th><th class="svelte-116bgvb">등록일</th><th class="svelte-116bgvb">파일크기</th><th class="svelte-116bgvb">다운로드</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let file = each_array[$$index];
    $$payload.out += `<tr><td class="svelte-116bgvb">${escape_html(file.id)}</td><td class="svelte-116bgvb">${escape_html(file.category)}</td><td class="title svelte-116bgvb">${escape_html(file.title)}</td><td class="svelte-116bgvb">${escape_html(file.date)}</td><td class="svelte-116bgvb">${escape_html(file.size)}</td><td class="svelte-116bgvb"><button class="download-btn svelte-116bgvb">다운로드 <span class="count svelte-116bgvb">(${escape_html(file.downloads)})</span></button></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table> <div class="pagination svelte-116bgvb"><a href="#" class="page-btn svelte-116bgvb">이전</a> <a href="#" class="page-num active svelte-116bgvb">1</a> <a href="#" class="page-num svelte-116bgvb">2</a> <a href="#" class="page-num svelte-116bgvb">3</a> <a href="#" class="page-num svelte-116bgvb">4</a> <a href="#" class="page-num svelte-116bgvb">5</a> <a href="#" class="page-btn svelte-116bgvb">다음</a></div></div></div></div></div>`;
}
export {
  _page as default
};
