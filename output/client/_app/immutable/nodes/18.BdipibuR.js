import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{am as H,ab as Y,an as Z,ao as $,a9 as Q,ac as ee,a6 as i,a7 as n,k as S,m as a,a8 as s,aa as te,ad as M,ap as ae}from"../chunks/runtime.B7BIZqV9.js";import{s as _}from"../chunks/render.DZi9s5lS.js";import{e as se,i as re}from"../chunks/each.ubxR6zv-.js";import{a as j,t as J}from"../chunks/template.BdaENsGl.js";import{r as oe}from"../chunks/attributes.B_QHs-Fo.js";import{l as le,e as D}from"../chunks/events.Bxfgpegf.js";import{t as G,f as ie,a as ne}from"../chunks/index.e1i8K6fS.js";import{b as ve}from"../chunks/input.TeAXKVaF.js";import{i as de}from"../chunks/proxy.DroUi3js.js";import{i as ue}from"../chunks/lifecycle.BJPSgObK.js";function N(e,v,r){if(e.multiple)return _e(e,v);for(var o of e.options){var t=f(o);if(de(t,v)){o.selected=!0;return}}(!r||v!==void 0)&&(e.selectedIndex=-1)}function ce(e,v){H(()=>{var r=new MutationObserver(()=>{var o=e.__value;N(e,o)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function pe(e,v,r=v){var o=!0;le(e,"change",t=>{var u=t?"[selected]":":checked",c;if(e.multiple)c=[].map.call(e.querySelectorAll(u),f);else{var m=e.querySelector(u)??e.querySelector("option:not([disabled])");c=m&&f(m)}r(c)}),H(()=>{var t=v();if(N(e,t,o),o&&t===void 0){var u=e.querySelector(":checked");u!==null&&(t=f(u),r(t))}e.__value=t,o=!1}),ce(e)}function _e(e,v){for(var r of e.options)r.selected=~v.indexOf(f(r))}function f(e){return"__value"in e?e.__value:e.value}var fe=J('<tr><td class="svelte-1teoae5"> </td><td class="svelte-1teoae5"> </td><td class="title svelte-1teoae5"> </td><td class="svelte-1teoae5"> </td><td class="svelte-1teoae5"> </td></tr>'),me=J('<div><div class="content-container svelte-1teoae5"><div class="inner-container svelte-1teoae5"><h1 class="svelte-1teoae5">공지사항</h1> <div class="notice-content"><div class="search-bar svelte-1teoae5"><select><option>전체</option><option>브로슈어</option><option>매뉴얼</option><option>카탈로그</option></select> <input type="text" placeholder="검색어를 입력하세요" class="svelte-1teoae5"> <button class="svelte-1teoae5">검색</button></div> <table class="notice-table svelte-1teoae5"><thead><tr><th class="svelte-1teoae5">번호</th><th class="svelte-1teoae5">분류</th><th class="svelte-1teoae5">제목</th><th class="svelte-1teoae5">등록일</th><th class="svelte-1teoae5">조회</th></tr></thead><tbody></tbody></table> <div class="pagination svelte-1teoae5"><a href="#" class="page-btn svelte-1teoae5">이전</a> <a href="#" class="page-num active svelte-1teoae5">1</a> <a href="#" class="page-num svelte-1teoae5">2</a> <a href="#" class="page-num svelte-1teoae5">3</a> <a href="#" class="page-num svelte-1teoae5">4</a> <a href="#" class="page-num svelte-1teoae5">5</a> <a href="#" class="page-btn svelte-1teoae5">다음</a></div></div></div></div></div>');function Me(e,v){Y(v,!1);const r=[{id:1,title:"제품 소개서",category:"브로슈어",date:"2024.03.15",size:"2.5MB",downloads:128,description:"제품의 주요 특징과 기능을 소개하는 브로슈어입니다."},{id:2,title:"사용자 매뉴얼 v1.2",category:"매뉴얼",date:"2024.03.10",size:"4.8MB",downloads:356,description:"제품 사용 방법에 대한 상세 매뉴얼입니다."}];let o=M(""),t=M(""),u=M(r);function c(){let l=r;if(a(t)&&(l=l.filter(d=>d.category===a(t))),a(o).trim()){const d=a(o).toLowerCase();l=l.filter(p=>p.title.toLowerCase().includes(d)||p.description.toLowerCase().includes(d)||p.category.toLowerCase().includes(d))}S(u,l)}function m(l){l.key==="Enter"&&c()}Z(()=>a(t),()=>{a(t),c()}),$(),ue();var h=me(),z=i(h),B=i(z),O=i(B),A=n(O,2),g=i(A),b=i(g);Q(()=>{a(t),ae(()=>{})});var x=i(b);x.value=((x.__value="")==null,"");var w=n(x);w.value=(w.__value="브로슈어")==null?"":"브로슈어";var k=n(w);k.value=(k.__value="매뉴얼")==null?"":"매뉴얼";var E=n(k);E.value=(E.__value="카탈로그")==null?"":"카탈로그",s(b);var y=n(b,2);oe(y);var R=n(y,2);s(g);var I=n(g,2),K=n(i(I));se(K,5,()=>a(u),re,(l,d)=>{var p=fe(),q=i(p),T=i(q,!0);s(q);var C=n(q),U=i(C,!0);s(C);var L=n(C),V=i(L,!0);s(L);var F=n(L),W=i(F,!0);s(F);var P=n(F),X=i(P,!0);s(P),s(p),Q(()=>{_(T,a(d).id),_(U,a(d).category),_(V,a(d).title),_(W,a(d).date),_(X,a(d).downloads)}),j(l,p)}),s(K),s(I),te(2),s(A),s(B),s(z),s(h),G(1,O,()=>ie,()=>({y:50,duration:500,delay:500})),pe(b,()=>a(t),l=>S(t,l)),ve(y,()=>a(o),l=>S(o,l)),D("keypress",y,m),D("click",R,c),G(1,h,()=>ne,()=>({duration:300,delay:300})),j(e,h),ee()}export{Me as component};
