"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[5932,3581,650],{14667:function(e,t,n){n.d(t,{u:function(){return l}});var a=n(15007),r=n(65084),l=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],l=(0,r.jU)()&&window.LC_API||{},o=(0,a.useState)(!1),i=o[0],c=o[1],d=new URLSearchParams((0,r.jU)()&&window.location.search||"").get("is_livechat_open");return(0,a.useEffect)((function(){var e=null,t=null;if((0,r.jU)()){var a=(0,r.ge)();e=setInterval((function(){var e=(0,r.KR)(a);c(!!e)}),1e3),t=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){n(!0),"true"===(null==d?void 0:d.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(t)}}),[]),(0,a.useEffect)((function(){if((0,r.jU)()){var e=(0,r.ge)();t&&window.LiveChatWidget.on("ready",(function(){var t;window.LC_API.open_chat_window(),window.LC_API.hide_chat_window();var n=(0,r.$Z)(e),a=(0,r.KR)(e),l=new URLSearchParams(window.location.search),o=n||{},c=o.utm_source,d=o.utm_medium,u=o.utm_campaign,m=a||{},s=m.loginid,f=m.email,p=m.landing_company_shortcode,h=m.currency,v=m.residence,w=m.first_name,y=m.last_name,g={is_logged_in:i,loginid:null!=s?s:"",landing_company_shortcode:null!=p?p:"",currency:null!=h?h:"",residence:null!=v?v:"",email:null!=f?f:"",platform:null!==(t=l.get("platform"))&&void 0!==t?t:"",utm_source:null!=c?c:"",utm_medium:null!=d?d:"",utm_campaign:null!=u?u:""};window.LiveChatWidget.call("set_session_variables",g),i?(f&&window.LiveChatWidget.call("set_customer_email",f),w&&y&&window.LiveChatWidget.call("set_customer_name",w+" "+y)):window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")};var x=l.get("is_livechat_open");"true"===(null==x?void 0:x.toLowerCase())&&window.LC_API.open_chat_window(),window.LiveChatWidget.on("new_event",(function(e){e.greeting&&window.LC_API.open_chat_window()}))}))}}),[i,t]),[t,l]}},75870:function(e,t,n){n.d(t,{d:function(){return w}});var a=n(15007),r=n(51074),l=n(33581),o=n(40650),i=n(95722),c=n(12873),d=n(99509),u=n(43827),m=n(20655),s=n(65084),f=r.default.div.withConfig({displayName:"_article__Content",componentId:"sc-fjf9vc-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),p=r.default.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-fjf9vc-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],m.Z.tabletL),h=r.default.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-fjf9vc-2"})(["margin-top:8rem;"]),v=(0,s.I_)(),w=function(e){var t=e.children,n=e.header,r=void 0===n?"":n,m=e.title,s=void 0===m?"":m,w=e.description,y=void 0===w?"":w,g=e.text,x=void 0===g?"":g,_=e.label,E=void 0===_?"":_,D=e.is_mounted,C=void 0!==D&&D;return a.default.createElement(i.Z,null,a.default.createElement(u.HJ,{title:s,description:y,text:x,label:E,is_mounted:C}),a.default.createElement(u.W2,{align:"left",justify:"flex-start",direction:"column"},a.default.createElement(d.Fg,{to:v?"/help-centre/?platform="+v:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0 0"},(0,c.NC)("Back")),a.default.createElement(f,null,a.default.createElement(p,null,a.default.createElement(d.Uj,{line_height:"1.5",opacity:"0.72",size:"var(--text-size-s)",tab_header:r},t)))),a.default.createElement(h,null,a.default.createElement(o.Community,null),a.default.createElement(l.DidntFindYourAnswerBanner,null)))}},40650:function(e,t,n){n.r(t),n.d(t,{Community:function(){return p}});var a=n(15007),r=n(51074),l=n(1597),o=n(99509),i=n(1039),c=n(12873),d=n(43827),u=n(20655),m=(0,r.default)(i.Qj).withConfig({displayName:"_community__StyledLinkButton",componentId:"sc-1kht508-0"})(["border-radius:4px;width:fit-content;@media ","{font-size:14px;padding:10px 16px;}"],u.Z.tablet),s=(0,r.default)(o.h4).withConfig({displayName:"_community__StyledHeader",componentId:"sc-1kht508-1"})(["@media ","{text-align:center;}"],u.Z.tablet),f=(0,r.default)(d.kC).withConfig({displayName:"_community__StyledFlex",componentId:"sc-1kht508-2"})(["@media ","{margin-left:unset;","{text-align:center;}}"],u.Z.tablet,o.xv),p=function(){var e=(0,l.useStaticQuery)("3807150758");return a.default.createElement(d.S$,{padding:"4rem",background:"var(--color-grey-25)"},a.default.createElement(d.W2,null,a.default.createElement(d.kC,{tablet_direction:"column",tablet_ai:"center",max_width:"92rem"},a.default.createElement(o.et,{alt:"community",data:e.community,width:"41rem"}),a.default.createElement(f,{tablet_ai:"center",ml:"5rem",direction:"column"},a.default.createElement(s,{mt:"1rem",as:"h3",type:"section-title"},(0,c.NC)("Have a question?")),a.default.createElement(o.xv,{size:"var(--text-size-m)",pt:"0.8rem",pb:"3.4rem"},(0,c.NC)("Our Deriv support community can help you find answers.")),a.default.createElement(m,{secondary:"true",to:"",type:"community",external:"true",target:"_blank",rel:"noopener noreferrer"},(0,c.NC)("Ask the community"))))))};t.default=p},33581:function(e,t,n){n.r(t),n.d(t,{DidntFindYourAnswerBanner:function(){return h},default:function(){return v}});var a=n(15007),r=n(51074),l=n(99509),o=n(1039),i=n(12873),c=n(43827),d=n(14667),u=n(20655);var m=r.default.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1xcbcsw-0"})(["background-color:var(--color-black-3);"]),s=(0,r.default)(c.W2).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1xcbcsw-1"})(["padding:3.5rem 0;@media ","{flex-wrap:wrap;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],u.Z.mobileL,o.zx),f=r.default.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1xcbcsw-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],u.Z.tabletL),p=(0,r.default)(l.xv).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1xcbcsw-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],u.Z.mobileL),h=function(){var e=(0,d.u)(),t=e[0],n=e[1];return a.default.createElement(m,null,a.default.createElement(s,null,a.default.createElement(f,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIxMDAlIiB5MT0iODcuOTcyJSIgeTI9IjEyLjAyOCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjQ0NEYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjY0NDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNNjIgMjFhMiAyIDAgMDEyIDJ2MzQuNzczYTIgMiAwIDAxLTMuMzI5IDEuNDk1TDUzLjYyIDUzSDE4YTIgMiAwIDAxLTItMlY0MGgydjExaDM1LjYyYy40OSAwIC45NjIuMTggMS4zMjkuNTA1TDYyIDU3Ljc3M1YyM0g1MnYtMmgxMHpNNDYgNGEyIDIgMCAwMTIgMnYyOGEyIDIgMCAwMS0yIDJIMTAuMzhsLTcuMDUgNi4yNjhBMiAyIDAgMDEwIDQwLjc3M1Y2YTIgMiAwIDAxMi0yem0wIDJIMnYzNC43NzNsNy4wNTEtNi4yNjhjLjM2Ny0uMzI1Ljg0LS41MDUgMS4zMy0uNTA1SDQ2VjZ6TTMwIDIyYTEgMSAwIDAxLjExNyAxLjk5M0wzMCAyNEg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAyMmgyMXptOS04YTEgMSAwIDAxLjExNyAxLjk5M0wzOSAxNkg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAxNGgzMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",alt:"contact us icon"}),a.default.createElement(p,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},(0,i.NC)("Didn’t find your answer? We can help.")),t&&a.default.createElement(o.zx,{secondary:"true",onClick:function(){n.open_chat_window()}},(0,i.NC)("Chat"))))},v=h},14067:function(e,t,n){n.d(t,{DO:function(){return i},dL:function(){return c},eb:function(){return d},qY:function(){return u}});var a=n(51074),r=n(99509),l=n(12873),o=n(20655),i=a.default.div.withConfig({displayName:"_help-centre-style__ArticleWrapper",componentId:"sc-zvcsgj-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:",";}@media ","{margin-left:0;}"],o.Z.laptopL,(function(e){var t=e.margin_left;return null!=t?t:"12.6rem"}),o.Z.tabletL),c=(0,a.default)(l.UE).withConfig({displayName:"_help-centre-style__ExternalLink",componentId:"sc-zvcsgj-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}@media ","{font-size:16px;}"],o.Z.tabletL),d=(0,a.default)(r.h4).withConfig({displayName:"_help-centre-style__StyledHeader",componentId:"sc-zvcsgj-2"})(["font-size:2.4rem;margin-bottom:2.4rem;"]),u=(0,a.default)(r.xv).withConfig({displayName:"_help-centre-style__StyledText",componentId:"sc-zvcsgj-3"})(["margin-top:1.7rem;"])},14015:function(e,t,n){n.r(t);var a=n(15007),r=n(51074),l=n(75870),o=n(14067),i=n(37105),c=n(60431),d=n(99509),u=n(12873),m=r.default.ul.withConfig({displayName:"deriv-x__StyledList",componentId:"sc-g3t8ri-0"})(["list-style:",";padding-left:",";"],(function(e){return e.listStyle}),(function(e){return e.paddingLeft})),s=r.default.li.withConfig({displayName:"deriv-x__StyledListItem",componentId:"sc-g3t8ri-1"})(["color:var(--color-black-3);margin-top:",";"],(function(e){return e.marginTop})),f=r.default.a.withConfig({displayName:"deriv-x__ExternalLink",componentId:"sc-g3t8ri-2"})(["text-decoration:none;color:var(--color-red);font-weight:bold;:hover{text-decoration:underline;}"]),p=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("Deriv X is an-easy-to-use trading platform where you can trade CFDs on various assets on a platform layout that you can customise according to your preference.")))},h=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("There is no minimum deposit. You can make a maximum deposit of USD2,500 twelve times a day.")))},v=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("You can trade CFDs on forex, cryptocurrencies, commodities, and our proprietary synthetic indices on Deriv X.")))},w=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("This depends on the trade type. To find out, right click on the specific asset and select “Instrument info”.")))},y=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("DTrader allows you to trade more than 50 assets in the form of digital options, multipliers, and lookbacks.")),a.default.createElement(o.qY,null,(0,u.NC)("Deriv MT5 (DMT5) and Deriv X are both multi-asset trading platforms where you can trade spot forex and CFDs with leverage on multiple asset classes. The major difference between them is platform layout — MT5 has a simple all-in-one view, while on Deriv X you can customise the layout according to your preference.")))},g=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"<0>Deriv MT5</0> offers CFD trading on forex, stocks, stock indices, commodities, cryptocurrencies, and synthetics. <1>Deriv X</1> offers CFD trading on the same markets, except stocks and stock indices.",components:[a.default.createElement(f,{href:"/dmt5/",target:"_blank",rel:"noopener noreferrer",key:0}),a.default.createElement(f,{href:"/derivx/",target:"_blank",rel:"noopener noreferrer",key:1})]})))},x=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("Follow these steps to add a Deriv X account:")),a.default.createElement(m,{listStyle:"decimal",paddingLeft:"5rem"},a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"<0>Log in</0> to your Deriv account.",components:[a.default.createElement(f,{href:"https://oauth.deriv.com/oauth2/authorize?app_id=16929",target:"_blank",rel:"noopener noreferrer",key:0})]}))),a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"Go to the <0>Deriv X dashboard</0>.",components:[a.default.createElement(f,{href:"https://app.deriv.com/derivx",target:"_blank",rel:"noopener noreferrer",key:0})]}))),a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"Select <0>Real account</0> or <0>Demo account</0>.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"Choose between <0>Synthetic</0> or <0>Financial</0> accounts. Then, hit <0>Add real account</0> or <0>Add demo account</0>.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,(0,u.NC)("If you’re adding your first Deriv X account, you’ll need to set your Deriv X password. If you’ve already set your Deriv X password before, you’ll need to enter it now."))),a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,(0,u.NC)("Your new Deriv X account is now ready.")))))},_=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("You'll need to add a Deriv X account first. After that, follow these steps to log in:")),a.default.createElement(m,{listStyle:"decimal",paddingLeft:"5rem"},a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"Go to your <0>Deriv X dashboard</0>.",components:[a.default.createElement(f,{href:"https://app.deriv.com/derivx",target:"_blank",rel:"noopener noreferrer",key:0})]}))),a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"Take note of your <0>username</0> and password.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"To log in on your desktop, click <0>Trade on web terminal</0>.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(s,{marginTop:"1rem"},a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"To log in on your mobile, you'll need the app. If you haven't got the app, you can download it from your dashboard."})))))},E=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("The Synthetics account allows you to trade on Deriv’s proprietary synthetic indices that are available 24/7 and simulate real-world market movements.")),a.default.createElement(o.qY,null,(0,u.NC)("The Financial account is where you trade contracts for difference (CFDs) on financial markets such as forex, cryptocurrencies, and commodities.")))},D=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("It is a password that you use to log in to the Deriv X trading platform.")))},C=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("Your Deriv X password is linked to the standalone Deriv X trading platform while your Deriv password gives you access to platforms hosted on our website such as DTrader and DBot.")))},b=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"Go to your <0>Account settings</0>. Click the “Security and safety” drop-down menu, and select “Passwords”. Under “Deriv X password”, click “Change password” to reset your password.",components:[a.default.createElement(f,{href:c.MN+"/account/personal-details",target:"_blank",rel:"noopener noreferrer",key:0})],deriv_x_app_url:!0})))},I=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"You can view your account information (account type and login numbers) on the <0>Deriv X dashboard</0>. ",components:[a.default.createElement(f,{href:c.Ep,target:"_blank",rel:"noopener noreferrer",key:0})]})))},N=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,a.default.createElement(u.Xx,{translate_text:"To deposit funds into your Deriv X account on Deriv, you’ll need to use the funds in your Deriv account. Go to Cashier > <0>Transfer between accounts</0> and follow the instructions on the screen.",components:[a.default.createElement(f,{href:c.MN+"/cashier/account-transfer",target:"_blank",rel:"noopener noreferrer",key:0})]})),a.default.createElement(o.qY,null,(0,u.NC)("Transfers are instant. Once you’ve completed all the steps, your Deriv X account balance will be updated immediately.")))},M=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(d.xv,null,(0,u.NC)("To withdraw funds from your Deriv X account on Deriv, you’ll first need to transfer the funds to your Deriv account. Go to Cashier > Transfer between accounts and follow the instructions on the screen.")),a.default.createElement(o.qY,null,(0,u.NC)("To withdraw from your Deriv account into your personal account, go to Cashier -> Withdrawal and follow the instructions on the screen. You’ll need to verify your identity and confirm your withdrawal amount.")),a.default.createElement(d.xv,{mt:"1.7rem"},a.default.createElement(u.Xx,{translate_text:"After the required processing time of your selected payment method, your funds will be deposited into your personal account. You can check processing times on our <0>Payment methods</0> page.",components:[a.default.createElement(d.Th,{to:"/payment-methods/",color:"red",key:0})]})))};t.default=(0,u.Wm)()((function(){var e=(0,i.t)(!1)[0];return a.default.createElement("div",null,a.default.createElement(l.d,{header:"Deriv X",title:(0,u.NC)("Help Center | Frequently asked questions | Deriv X | Deriv"),description:(0,u.NC)("Frequently asked questions - Deriv X"),is_mounted:e},a.default.createElement(p,{text:(0,u.NC)("What is Deriv X?"),label:"what-is-deriv-x",is_mounted:e}),a.default.createElement(h,{text:(0,u.NC)("What is the minimum / maximum I can deposit into my Deriv X account?"),label:"minimum-or-maximum-deposit",is_mounted:e}),a.default.createElement(v,{text:(0,u.NC)("What markets can I trade on Deriv X?"),label:"markets-on-deriv-x",is_mounted:e}),a.default.createElement(w,{text:(0,u.NC)("What is the minimum and maximum amount to trade on Deriv X?"),label:"minimum-and-maximum-amount-to-trade",is_mounted:e}),a.default.createElement(y,{text:(0,u.NC)("What are the major differences between DTrader, Deriv MT5 (DMT5) and Deriv X?"),label:"differences-of-dtrader-dmt5-deriv-x",is_mounted:e}),a.default.createElement(g,{text:(0,u.NC)("What's the difference between Deriv MT5 and Deriv X?"),label:"differences-of-dmt5-deriv-x",is_mounted:e}),a.default.createElement(x,{text:(0,u.NC)("How do I add a Deriv X account?"),label:"add-account",is_mounted:e}),a.default.createElement(_,{text:(0,u.NC)("How do I log in to Deriv X?"),label:"log-in",is_mounted:e}),a.default.createElement(E,{text:(0,u.NC)("What are the differences between Synthetics and Financial accounts?"),label:"differences-of-synthetic-and-financial",is_mounted:e}),a.default.createElement(D,{text:(0,u.NC)("What is a Deriv X password?"),label:"trading-password",is_mounted:e}),a.default.createElement(C,{text:(0,u.NC)("How is my Deriv X password different from my Deriv password?"),label:"differences-of-trading-and-deriv-password",is_mounted:e}),a.default.createElement(b,{text:(0,u.NC)("How do I reset my Deriv X password?"),label:"reset-deriv-x-password",is_mounted:e}),a.default.createElement(I,{text:(0,u.NC)("Where can I find my Deriv X account information?"),label:"deriv-x-account-information",is_mounted:e}),a.default.createElement(N,{text:(0,u.NC)("How can I deposit funds into my Deriv X real money account?"),label:"deposit-funds",is_mounted:e}),a.default.createElement(M,{text:(0,u.NC)("How do I withdraw funds from my Deriv X real money account?"),label:"withdraw-funds-from-deriv-x",is_mounted:e})))}))}}]);
//# sourceMappingURL=component---src-pages-help-centre-deriv-x-tsx-4c898201d503456ab86e.js.map