import{T as i,aj as v,ak as p,h as d,f as o,J as f,n as u,a as h,s as T}from"./runtime.B7BIZqV9.js";function E(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=u;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&v)!==0,_=(t&p)!==0,a,c=!r.startsWith("<!>");return()=>{if(d)return n(o,null),o;a===void 0&&(a=E(c?r:"<!>"+r),e||(a=i(a)));var s=_?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=i(s),l=s.lastChild;n(m,l)}else n(s,s);return s}}function M(r=""){if(!d){var t=f(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=f()),T(e)),n(e,e),e}function x(){if(d)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=f();return r.append(t,e),n(t,e),r}function N(r,t){if(d){u.nodes_end=o,h();return}r!==null&&r.before(t)}export{N as a,n as b,x as c,M as d,y as t};
