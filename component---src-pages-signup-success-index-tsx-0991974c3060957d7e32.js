(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[9313],{10647:function(e,t,n){var a=n(1702),r=n(47908),i=Math.floor,l=a("".charAt),c=a("".replace),o=a("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,d,m){var f=n+e.length,g=a.length,p=s;return void 0!==d&&(d=r(d),p=u),c(m,p,(function(r,c){var u;switch(l(c,0)){case"$":return"$";case"&":return e;case"`":return o(t,0,n);case"'":return o(t,f);case"<":u=d[o(c,1,-1)];break;default:var s=+c;if(0===s)return r;if(s>g){var m=i(s/10);return 0===m?r:m<=g?void 0===a[m-1]?l(c,1):a[m-1]+l(c,1):r}u=a[s-1]}return void 0===u?"":u}))}},68757:function(e,t,n){"use strict";var a=n(82109),r=n(46916),i=n(1702),l=n(84488),c=n(60614),o=n(47850),u=n(41340),s=n(58173),d=n(34706),m=n(10647),f=n(5112),g=n(31913),p=f("replace"),h=TypeError,v=i("".indexOf),w=i("".replace),y=i("".slice),E=Math.max,x=function(e,t,n){return n>e.length?-1:""===t?n:v(e,t,n)};a({target:"String",proto:!0},{replaceAll:function(e,t){var n,a,i,f,_,k,b,C,q,N=l(this),S=0,$=0,A="";if(null!=e){if((n=o(e))&&(a=u(l(d(e))),!~v(a,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(i=s(e,p))return r(i,e,N,t);if(g&&n)return w(u(N),e,t)}for(f=u(N),_=u(e),(k=c(t))||(t=u(t)),b=_.length,C=E(1,b),S=x(f,_,0);-1!==S;)q=k?u(t(_,S,f)):m(_,f,S,[],void 0,t),A+=y(f,$,S)+q,$=S+b,S=x(f,_,S+C);return $<f.length&&(A+=y(f,$)),A}})},27207:function(e,t,n){n(68757)},49987:function(e,t,n){"use strict";n.r(t);n(27207);var a=n(15007),r=n(51074),i=n(1597),l=n(65084),c=n(95722),o=n(12873),u=n(43827),s=n(20655),d=n(99509),m=r.default.section.withConfig({displayName:"signup-success__Wrapper",componentId:"sc-1a60qq7-0"})(["padding:8rem 0;width:100%;height:80vh;display:flex;justify-content:center;flex-direction:row;background-color:rgba(200,214,215,0.22);@media ","{padding:0;}"],s.Z.mobileL),f=r.default.div.withConfig({displayName:"signup-success__StyledDiv",componentId:"sc-1a60qq7-1"})(["padding:6rem 0;background-color:rgba(200,214,215,0.22);@media ","{padding:0;}"],s.Z.mobileL),g=r.default.div.withConfig({displayName:"signup-success__ResponseWrapper",componentId:"sc-1a60qq7-2"})(["justify-content:center;max-width:33rem;margin:0 auto;flex-direction:column;padding:2rem 1rem;"]),p=(0,r.default)(d.Fg).withConfig({displayName:"signup-success__EmailLink",componentId:"sc-1a60qq7-3"})(["display:table;font-size:1.4rem;margin-top:1.8rem;text-decoration:underline;width:100%;text-align:center;"]);t.default=(0,o.Wm)()((function(){var e=(0,a.useState)(""),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=new URLSearchParams(location.search).get("email"),t="/"+(0,l.G3)()+"/signup-success";n(null==e?void 0:e.replaceAll(" ","+")),(0,i.navigate)(e?t:"/"+(0,l.G3)()+"/",{replace:!0})}),[]),a.default.createElement(c.Z,{type:"static",margin_top:"0"},a.default.createElement(u.HJ,{title:(0,o.NC)("Easy And Free Sign Up | Online Trading | Deriv.com"),description:(0,o.NC)("Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities."),no_index:!0}),a.default.createElement(m,null,a.default.createElement(g,null,a.default.createElement(d.h4,{as:"h3",type:"section-title",align:"center",weight:"normal"},(0,o.NC)("Check your email")),a.default.createElement(i.StaticQuery,{query:"1698913813",render:function(e){return a.default.createElement(u.xu,{m:"3.2rem 0"},a.default.createElement(d.et,{data:e.view_email,alt:"Email image"}))}}),a.default.createElement(d.xv,{align:"center"},a.default.createElement(o.Xx,{translate_text:"We've sent a message to {{email}} with a link to activate your account.",values:{email:t}})),a.default.createElement(p,{to:"/check-email/",align:"center"},(0,o.NC)("Didn't receive your email?")))),a.default.createElement(f,null))}))}}]);
//# sourceMappingURL=component---src-pages-signup-success-index-tsx-0991974c3060957d7e32.js.map