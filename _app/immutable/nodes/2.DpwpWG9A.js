import{s as J,a as h,f as v,g as C,d,k as p,i as w,C as D,t as Y,l as R,m as g,p as z,n as L,b as E,h as S,j as P,D as Z,o as ee,e as M,c as te}from"../chunks/scheduler.BMT8A4Tp.js";import{S as A,i as F,g as G,a as B,c as K,t as y,b as j,d as I,m as x,e as V}from"../chunks/index.B7RLeFoU.js";import{F as Q,T as ne}from"../chunks/TextBox.z-99Vxiz.js";import{c as le,f as oe,C as ae}from"../chunks/common.CpltAMs-.js";import{I as W,C as se}from"../chunks/CardBox.DXIIINQB.js";function re(r){let e,n,t,o,i,s;return n=new W({props:{icon:r[1]}}),{c(){e=h("button"),j(n.$$.fragment),this.h()},l(l){e=v(l,"BUTTON",{type:!0,class:!0});var a=C(e);I(n.$$.fragment,a),a.forEach(d),this.h()},h(){p(e,"type","button"),p(e,"class",t=`btn-icon ${r[2]?r[2]:"variant-filled"}`)},m(l,a){w(l,e,a),x(n,e,null),o=!0,i||(s=D(e,"click",r[8]),i=!0)},p(l,a){const f={};a&2&&(f.icon=l[1]),n.$set(f),(!o||a&4&&t!==(t=`btn-icon ${l[2]?l[2]:"variant-filled"}`))&&p(e,"class",t)},i(l){o||(y(n.$$.fragment,l),o=!0)},o(l){B(n.$$.fragment,l),o=!1},d(l){l&&d(e),V(n),i=!1,s()}}}function ie(r){let e,n,t,o,i;return{c(){e=h("button"),n=Y(r[0]),this.h()},l(s){e=v(s,"BUTTON",{type:!0,class:!0});var l=C(e);n=R(l,r[0]),l.forEach(d),this.h()},h(){p(e,"type","button"),p(e,"class",t=`btn ${r[2]?r[2]:"variant-filled"}`)},m(s,l){w(s,e,l),g(e,n),o||(i=D(e,"click",r[7]),o=!0)},p(s,l){l&1&&z(n,s[0]),l&4&&t!==(t=`btn ${s[2]?s[2]:"variant-filled"}`)&&p(e,"class",t)},i:L,o:L,d(s){s&&d(e),o=!1,i()}}}function ce(r){let e,n,t,o,i,s,l,a,f,_;return t=new W({props:{icon:r[1]}}),{c(){e=h("button"),n=h("span"),j(t.$$.fragment),o=E(),i=h("span"),s=Y(r[0]),this.h()},l(u){e=v(u,"BUTTON",{type:!0,class:!0});var c=C(e);n=v(c,"SPAN",{});var m=C(n);I(t.$$.fragment,m),m.forEach(d),o=S(c),i=v(c,"SPAN",{});var b=C(i);s=R(b,r[0]),b.forEach(d),c.forEach(d),this.h()},h(){p(e,"type","button"),p(e,"class",l=`btn ${r[2]?r[2]:"variant-filled"}`)},m(u,c){w(u,e,c),g(e,n),x(t,n,null),g(e,o),g(e,i),g(i,s),a=!0,f||(_=D(e,"click",r[6]),f=!0)},p(u,c){const m={};c&2&&(m.icon=u[1]),t.$set(m),(!a||c&1)&&z(s,u[0]),(!a||c&4&&l!==(l=`btn ${u[2]?u[2]:"variant-filled"}`))&&p(e,"class",l)},i(u){a||(y(t.$$.fragment,u),a=!0)},o(u){B(t.$$.fragment,u),a=!1},d(u){u&&d(e),V(t),f=!1,_()}}}function fe(r){let e,n,t,o;const i=[ce,ie,re],s=[];function l(a,f){return a[0]&&a[1]?0:a[0]?1:a[1]?2:-1}return~(n=l(r))&&(t=s[n]=i[n](r)),{c(){e=h("div"),t&&t.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var f=C(e);t&&t.l(f),f.forEach(d),this.h()},h(){p(e,"class","w-full flex justify-center items-center")},m(a,f){w(a,e,f),~n&&s[n].m(e,null),o=!0},p(a,[f]){let _=n;n=l(a),n===_?~n&&s[n].p(a,f):(t&&(G(),B(s[_],1,1,()=>{s[_]=null}),K()),~n?(t=s[n],t?t.p(a,f):(t=s[n]=i[n](a),t.c()),y(t,1),t.m(e,null)):t=null)},i(a){o||(y(t),o=!0)},o(a){B(t),o=!1},d(a){a&&d(e),~n&&s[n].d()}}}function ue(r,e,n){let{text:t=""}=e,{icon:o=""}=e,{link:i}=e,{newTab:s}=e,{variant:l=""}=e;const a=()=>{s?window.open(i,"_blank"):window.location.href=i},f=()=>a(),_=()=>a(),u=()=>a();return r.$$set=c=>{"text"in c&&n(0,t=c.text),"icon"in c&&n(1,o=c.icon),"link"in c&&n(4,i=c.link),"newTab"in c&&n(5,s=c.newTab),"variant"in c&&n(2,l=c.variant)},[t,o,l,a,i,s,f,_,u]}class de extends A{constructor(e){super(),F(this,e,ue,fe,J,{text:0,icon:1,link:4,newTab:5,variant:2})}}function me(r){let e,n,t,o,i="radial",s,l,a="avatar",f,_,u="loading bar",c,m,b,O,U,q;return b=new Q({props:{layoutConfig:r[0],components:le}}),{c(){e=h("div"),n=h("div"),t=h("div"),o=h("button"),o.textContent=i,s=E(),l=h("button"),l.textContent=a,f=E(),_=h("button"),_.textContent=u,c=E(),m=h("div"),j(b.$$.fragment),this.h()},l(k){e=v(k,"DIV",{class:!0});var T=C(e);n=v(T,"DIV",{class:!0});var N=C(n);t=v(N,"DIV",{class:!0});var $=C(t);o=v($,"BUTTON",{"data-svelte-h":!0}),P(o)!=="svelte-j761s9"&&(o.textContent=i),s=S($),l=v($,"BUTTON",{"data-svelte-h":!0}),P(l)!=="svelte-nmqjl1"&&(l.textContent=a),f=S($),_=v($,"BUTTON",{"data-svelte-h":!0}),P(_)!=="svelte-kqfo63"&&(_.textContent=u),$.forEach(d),N.forEach(d),c=S(T),m=v(T,"DIV",{class:!0});var H=C(m);I(b.$$.fragment,H),H.forEach(d),T.forEach(d),this.h()},h(){p(t,"class","btn-group variant-filled mx-auto"),p(n,"class","flex justify-center mt-6"),p(m,"class","md:h-[40rem] h-[52rem] mt-6"),p(e,"class","w-full")},m(k,T){w(k,e,T),g(e,n),g(n,t),g(t,o),g(t,s),g(t,l),g(t,f),g(t,_),g(e,c),g(e,m),x(b,m,null),O=!0,U||(q=[D(o,"click",r[2]),D(l,"click",r[3]),D(_,"click",r[4])],U=!0)},p(k,[T]){const N={};T&1&&(N.layoutConfig=k[0]),b.$set(N)},i(k){O||(y(b.$$.fragment,k),O=!0)},o(k){B(b.$$.fragment,k),O=!1},d(k){k&&d(e),V(b),U=!1,Z(q)}}}function _e(r,e,n){const t={component:"ProgressRadial",props:{value:"33"},posX:"middle",posY:"middle",nodeClass:"h-full my-12"},o={component:"Avatar",props:{src:"https://placedog.net/512/512",width:"w-32",rounded:"rounded-full"},posX:"middle",posY:"middle",nodeClass:"h-full my-12"},i={component:"ProgressBar",posX:"middle",posY:"middle",wrapperClass:"w-48",nodeClass:"md:h-full my-12"};let s={rows:[{alignHeight:!0,cols:[{component:"CodeBlock",props:{language:"ts",code:"// Select a json to render"}},{component:"CodeBlock",props:{language:"ts",code:"// Select a json to render"}}]}]};const l=()=>{const c=JSON.parse(JSON.stringify(s));return c.rows[0].cols=c.rows[0].cols[0],`const components = { ProgressRadial, Avatar, ProgressBar };
const layoutConfig: LayoutConfig<typeof components> = ${JSON.stringify(c,null,2)}
<Flexilte {layoutConfig} {components}></Flexilte>`},a=c=>{let m={};c==="radial"?m=t:c==="avatar"?m=o:c==="loadingBar"&&(m=i),m&&(n(0,s.rows[0].cols[0]=m,s),n(0,s.rows[0].cols[1].props.code="",s),n(0,s.rows[0].cols[1].props.code=l(),s))};return ee(()=>{a("avatar")}),[s,a,()=>a("radial"),()=>a("avatar"),()=>a("loadingBar")]}class pe extends A{constructor(e){super(),F(this,e,_e,me,J,{})}}function X(r){let e,n,t,o,i='<a href="frontpage.json">Click here to see the JSON of this page</a>',s;return n=new Q({props:{layoutConfig:r[0],components:r[1]}}),{c(){e=h("div"),j(n.$$.fragment),t=E(),o=h("div"),o.innerHTML=i,this.h()},l(l){e=v(l,"DIV",{class:!0});var a=C(e);I(n.$$.fragment,a),a.forEach(d),t=S(l),o=v(l,"DIV",{class:!0,"data-svelte-h":!0}),P(o)!=="svelte-kojcu1"&&(o.innerHTML=i),this.h()},h(){p(e,"class","px-4 container mx-auto"),p(o,"class","text-center m-4 underline")},m(l,a){w(l,e,a),x(n,e,null),w(l,t,a),w(l,o,a),s=!0},p(l,a){const f={};a&1&&(f.layoutConfig=l[0]),n.$set(f)},i(l){s||(y(n.$$.fragment,l),s=!0)},o(l){B(n.$$.fragment,l),s=!1},d(l){l&&(d(e),d(t),d(o)),V(n)}}}function he(r){let e,n,t=r[0]&&X(r);return{c(){t&&t.c(),e=M()},l(o){t&&t.l(o),e=M()},m(o,i){t&&t.m(o,i),w(o,e,i),n=!0},p(o,[i]){o[0]?t?(t.p(o,i),i&1&&y(t,1)):(t=X(o),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(G(),B(t,1,1,()=>{t=null}),K())},i(o){n||(y(t),n=!0)},o(o){B(t),n=!1},d(o){o&&d(e),t&&t.d(o)}}}function ve(r,e,n){let t;return te(r,oe,i=>n(0,t=i)),[t,{TextBox:ne,CardBox:se,CodeBlock:ae,DemoBox:pe,ButtonBox:de}]}class ye extends A{constructor(e){super(),F(this,e,ve,he,J,{})}}export{ye as component};
