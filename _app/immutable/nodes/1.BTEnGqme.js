import{s as S,a as _,u as f,b as x,f as d,g,v as h,d as u,h as q,i as m,n as v,w as $,p as E,c as w}from"../chunks/scheduler.DZ7fMhPQ.js";import{S as y,i as C}from"../chunks/index.DrxBNmUk.js";import{s as H}from"../chunks/entry.DYT6Apos.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function k(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=x(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=q(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return w(s,j,n=>r(0,o=n)),[o]}let F=class extends y{constructor(t){super(),C(this,t,z,k,S,{})}};export{F as component};