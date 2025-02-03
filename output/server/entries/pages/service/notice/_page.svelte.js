import { Z as ensure_array_like, Q as pop, O as push } from "../../../../chunks/index2.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  const allFiles = [
    {
      id: 1,
      title: "제품 소개서",
      category: "브로슈어",
      date: "2024.03.15",
      size: "2.5MB",
      downloads: 128,
      description: "제품의 주요 특징과 기능을 소개하는 브로슈어입니다."
    },
    {
      id: 2,
      title: "사용자 매뉴얼 v1.2",
      category: "매뉴얼",
      date: "2024.03.10",
      size: "4.8MB",
      downloads: 356,
      description: "제품 사용 방법에 대한 상세 매뉴얼입니다."
    }
    // 더미 데이터 추가
  ];
  let searchQuery = "";
  let files = allFiles;
  function searchFiles() {
    let filteredFiles = allFiles;
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredFiles = filteredFiles.filter((file) => file.title.toLowerCase().includes(query) || file.description.toLowerCase().includes(query) || file.category.toLowerCase().includes(query));
    }
    files = filteredFiles;
  }
  {
    searchFiles();
  }
  const each_array = ensure_array_like(files);
  $$payload.out += `<div><div class="content-container svelte-1teoae5"><div class="inner-container svelte-1teoae5"><h1 class="svelte-1teoae5">공지사항</h1> <div class="notice-content"><div class="search-bar svelte-1teoae5"><select><option value="">전체</option><option value="브로슈어">브로슈어</option><option value="매뉴얼">매뉴얼</option><option value="카탈로그">카탈로그</option></select> <input type="text" placeholder="검색어를 입력하세요"${attr("value", searchQuery)} class="svelte-1teoae5"> <button class="svelte-1teoae5">검색</button></div> <table class="notice-table svelte-1teoae5"><thead><tr><th class="svelte-1teoae5">번호</th><th class="svelte-1teoae5">분류</th><th class="svelte-1teoae5">제목</th><th class="svelte-1teoae5">등록일</th><th class="svelte-1teoae5">조회</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let file = each_array[$$index];
    $$payload.out += `<tr><td class="svelte-1teoae5">${escape_html(file.id)}</td><td class="svelte-1teoae5">${escape_html(file.category)}</td><td class="title svelte-1teoae5">${escape_html(file.title)}</td><td class="svelte-1teoae5">${escape_html(file.date)}</td><td class="svelte-1teoae5">${escape_html(file.downloads)}</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table> <div class="pagination svelte-1teoae5"><a href="#" class="page-btn svelte-1teoae5">이전</a> <a href="#" class="page-num active svelte-1teoae5">1</a> <a href="#" class="page-num svelte-1teoae5">2</a> <a href="#" class="page-num svelte-1teoae5">3</a> <a href="#" class="page-num svelte-1teoae5">4</a> <a href="#" class="page-num svelte-1teoae5">5</a> <a href="#" class="page-btn svelte-1teoae5">다음</a></div></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
