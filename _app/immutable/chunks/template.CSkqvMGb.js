import{J as u,b as y,ah as E,h as d,ai as g,$ as c,c as h,s as l,f as r,T as _,aj as b,ak as A,n as m,a as x}from"./runtime.BBgjYHON.js";let t;function C(){t=void 0}function D(n){let e=null,a=d;var f;if(d){for(e=r,t===void 0&&(t=_(document.head));t!==null&&(t.nodeType!==8||t.data!==g);)t=c(t);t===null?h(!1):t=l(c(t))}d||(f=document.head.appendChild(u()));try{y(()=>n(f),E)}finally{a&&(h(!0),t=r,l(e))}}function M(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function s(n,e){var a=m;a.nodes_start===null&&(a.nodes_start=n,a.nodes_end=e)}function F(n,e){var a=(e&b)!==0,f=(e&A)!==0,i,v=!n.startsWith("<!>");return()=>{if(d)return s(r,null),r;i===void 0&&(i=M(v?n:"<!>"+n),a||(i=_(i)));var o=f?document.importNode(i,!0):i.cloneNode(!0);if(a){var p=_(o),T=o.lastChild;s(p,T)}else s(o,o);return o}}function R(n=""){if(!d){var e=u(n+"");return s(e,e),e}var a=r;return a.nodeType!==3&&(a.before(a=u()),l(a)),s(a,a),a}function H(){if(d)return s(r,null),r;var n=document.createDocumentFragment(),e=document.createComment(""),a=u();return n.append(e,a),s(e,a),n}function L(n,e){if(d){m.nodes_end=r,x();return}n!==null&&n.before(e)}export{L as a,s as b,H as c,R as d,D as h,C as r,F as t};
