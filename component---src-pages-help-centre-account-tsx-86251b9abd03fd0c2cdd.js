"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[6141,3581,650],{14667:function(e,t,n){n.d(t,{u:function(){return r}});var a=n(15007),l=n(65084),r=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,l.jU)()&&window.LC_API||{},o=(0,a.useState)(!1),c=o[0],u=o[1],i=new URLSearchParams((0,l.jU)()&&window.location.search||"").get("is_livechat_open");return(0,a.useEffect)((function(){var e=null,t=null;if((0,l.jU)()){var a=(0,l.ge)();e=setInterval((function(){var e=(0,l.KR)(a);u(!!e)}),1e3),t=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){n(!0),"true"===(null==i?void 0:i.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(t)}}),[]),(0,a.useEffect)((function(){if((0,l.jU)()){var e=(0,l.ge)();t&&window.LiveChatWidget.on("ready",(function(){var t;window.LC_API.open_chat_window(),window.LC_API.hide_chat_window();var n=(0,l.$Z)(e),a=(0,l.KR)(e),r=new URLSearchParams(window.location.search),o=n||{},u=o.utm_source,i=o.utm_medium,d=o.utm_campaign,m=a||{},s=m.loginid,f=m.email,p=m.landing_company_shortcode,h=m.currency,y=m.residence,g=m.first_name,E=m.last_name,v={is_logged_in:c,loginid:null!=s?s:"",landing_company_shortcode:null!=p?p:"",currency:null!=h?h:"",residence:null!=y?y:"",email:null!=f?f:"",platform:null!==(t=r.get("platform"))&&void 0!==t?t:"",utm_source:null!=u?u:"",utm_medium:null!=i?i:"",utm_campaign:null!=d?d:""};window.LiveChatWidget.call("set_session_variables",v),c?(f&&window.LiveChatWidget.call("set_customer_email",f),g&&E&&window.LiveChatWidget.call("set_customer_name",g+" "+E)):window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")};var x=r.get("is_livechat_open");"true"===(null==x?void 0:x.toLowerCase())&&window.LC_API.open_chat_window(),window.LiveChatWidget.on("new_event",(function(e){e.greeting&&window.LC_API.open_chat_window()}))}))}}),[c,t]),[t,r]}},75870:function(e,t,n){n.d(t,{d:function(){return g}});var a=n(15007),l=n(51074),r=n(33581),o=n(40650),c=n(95722),u=n(12873),i=n(99509),d=n(43827),m=n(20655),s=n(65084),f=l.default.div.withConfig({displayName:"_article__Content",componentId:"sc-fjf9vc-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),p=l.default.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-fjf9vc-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],m.Z.tabletL),h=l.default.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-fjf9vc-2"})(["margin-top:8rem;"]),y=(0,s.I_)(),g=function(e){var t=e.children,n=e.header,l=void 0===n?"":n,m=e.title,s=void 0===m?"":m,g=e.description,E=void 0===g?"":g,v=e.text,x=void 0===v?"":v,w=e.label,_=void 0===w?"":w,b=e.is_mounted,C=void 0!==b&&b;return a.default.createElement(c.Z,null,a.default.createElement(d.HJ,{title:s,description:E,text:x,label:_,is_mounted:C}),a.default.createElement(d.W2,{align:"left",justify:"flex-start",direction:"column"},a.default.createElement(i.Fg,{to:y?"/help-centre/?platform="+y:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0 0"},(0,u.NC)("Back")),a.default.createElement(f,null,a.default.createElement(p,null,a.default.createElement(i.Uj,{line_height:"1.5",opacity:"0.72",size:"var(--text-size-s)",tab_header:l},t)))),a.default.createElement(h,null,a.default.createElement(o.Community,null),a.default.createElement(r.DidntFindYourAnswerBanner,null)))}},40650:function(e,t,n){n.r(t),n.d(t,{Community:function(){return p}});var a=n(15007),l=n(51074),r=n(1597),o=n(99509),c=n(1039),u=n(12873),i=n(43827),d=n(20655),m=(0,l.default)(c.Qj).withConfig({displayName:"_community__StyledLinkButton",componentId:"sc-1kht508-0"})(["border-radius:4px;width:fit-content;@media ","{font-size:14px;padding:10px 16px;}"],d.Z.tablet),s=(0,l.default)(o.h4).withConfig({displayName:"_community__StyledHeader",componentId:"sc-1kht508-1"})(["@media ","{text-align:center;}"],d.Z.tablet),f=(0,l.default)(i.kC).withConfig({displayName:"_community__StyledFlex",componentId:"sc-1kht508-2"})(["@media ","{margin-left:unset;","{text-align:center;}}"],d.Z.tablet,o.xv),p=function(){var e=(0,r.useStaticQuery)("3807150758");return a.default.createElement(i.S$,{padding:"4rem",background:"var(--color-grey-25)"},a.default.createElement(i.W2,null,a.default.createElement(i.kC,{tablet_direction:"column",tablet_ai:"center",max_width:"92rem"},a.default.createElement(o.et,{alt:"community",data:e.community,width:"41rem"}),a.default.createElement(f,{tablet_ai:"center",ml:"5rem",direction:"column"},a.default.createElement(s,{mt:"1rem",as:"h3",type:"section-title"},(0,u.NC)("Have a question?")),a.default.createElement(o.xv,{size:"var(--text-size-m)",pt:"0.8rem",pb:"3.4rem"},(0,u.NC)("Our Deriv support community can help you find answers.")),a.default.createElement(m,{secondary:"true",to:"",type:"community",external:"true",target:"_blank",rel:"noopener noreferrer"},(0,u.NC)("Ask the community"))))))};t.default=p},33581:function(e,t,n){n.r(t),n.d(t,{DidntFindYourAnswerBanner:function(){return h},default:function(){return y}});var a=n(15007),l=n(51074),r=n(99509),o=n(1039),c=n(12873),u=n(43827),i=n(14667),d=n(20655);var m=l.default.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1xcbcsw-0"})(["background-color:var(--color-black-3);"]),s=(0,l.default)(u.W2).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1xcbcsw-1"})(["padding:3.5rem 0;@media ","{flex-wrap:wrap;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],d.Z.mobileL,o.zx),f=l.default.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1xcbcsw-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],d.Z.tabletL),p=(0,l.default)(r.xv).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1xcbcsw-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],d.Z.mobileL),h=function(){var e=(0,i.u)(),t=e[0],n=e[1];return a.default.createElement(m,null,a.default.createElement(s,null,a.default.createElement(f,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIxMDAlIiB5MT0iODcuOTcyJSIgeTI9IjEyLjAyOCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjQ0NEYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjY0NDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNNjIgMjFhMiAyIDAgMDEyIDJ2MzQuNzczYTIgMiAwIDAxLTMuMzI5IDEuNDk1TDUzLjYyIDUzSDE4YTIgMiAwIDAxLTItMlY0MGgydjExaDM1LjYyYy40OSAwIC45NjIuMTggMS4zMjkuNTA1TDYyIDU3Ljc3M1YyM0g1MnYtMmgxMHpNNDYgNGEyIDIgMCAwMTIgMnYyOGEyIDIgMCAwMS0yIDJIMTAuMzhsLTcuMDUgNi4yNjhBMiAyIDAgMDEwIDQwLjc3M1Y2YTIgMiAwIDAxMi0yem0wIDJIMnYzNC43NzNsNy4wNTEtNi4yNjhjLjM2Ny0uMzI1Ljg0LS41MDUgMS4zMy0uNTA1SDQ2VjZ6TTMwIDIyYTEgMSAwIDAxLjExNyAxLjk5M0wzMCAyNEg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAyMmgyMXptOS04YTEgMSAwIDAxLjExNyAxLjk5M0wzOSAxNkg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAxNGgzMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",alt:"contact us icon"}),a.default.createElement(p,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},(0,c.NC)("Didn’t find your answer? We can help.")),t&&a.default.createElement(o.zx,{secondary:"true",onClick:function(){n.open_chat_window()}},(0,c.NC)("Chat"))))},y=h},14067:function(e,t,n){n.d(t,{DO:function(){return c},dL:function(){return u},eb:function(){return i},qY:function(){return d}});var a=n(51074),l=n(99509),r=n(12873),o=n(20655),c=a.default.div.withConfig({displayName:"_help-centre-style__ArticleWrapper",componentId:"sc-zvcsgj-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:",";}@media ","{margin-left:0;}"],o.Z.laptopL,(function(e){var t=e.margin_left;return null!=t?t:"12.6rem"}),o.Z.tabletL),u=(0,a.default)(r.UE).withConfig({displayName:"_help-centre-style__ExternalLink",componentId:"sc-zvcsgj-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}@media ","{font-size:16px;}"],o.Z.tabletL),i=(0,a.default)(l.h4).withConfig({displayName:"_help-centre-style__StyledHeader",componentId:"sc-zvcsgj-2"})(["font-size:2.4rem;margin-bottom:2.4rem;"]),d=(0,a.default)(l.xv).withConfig({displayName:"_help-centre-style__StyledText",componentId:"sc-zvcsgj-3"})(["margin-top:1.7rem;"])},89012:function(e,t,n){n.r(t);var a=n(15007),l=n(51074),r=n(75870),o=n(14067),c=n(37105),u=n(60431),i=n(99509),d=n(12873),m=n(20655),s=l.default.ul.withConfig({displayName:"account__StyledList",componentId:"sc-1u2to9h-0"})(["list-style:",";padding-left:",";"],(function(e){return e.listStyle}),(function(e){return e.paddingLeft})),f=l.default.li.withConfig({displayName:"account__StyledListItem",componentId:"sc-1u2to9h-1"})(["color:var(--color-black-3);margin-top:",";"],(function(e){return e.marginTop})),p=(0,l.default)(o.dL).withConfig({displayName:"account__StyledLink",componentId:"sc-1u2to9h-2"})(["@media ","{font-size:16px;}"],m.Z.tabletL),h=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("Here are some possible reasons you aren't able to create an account:")),a.default.createElement(s,{listStyle:"disc",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("You’re below 18 years old."))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("You may already have a Deriv account."))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Our services aren't available in your country of residence.")))),a.default.createElement(o.qY,null,a.default.createElement(d.Xx,{translate_text:"You may refer to <0>our terms</0> for more information. If you need help getting into your account, <1>contact us via live chat.</1>",components:[a.default.createElement(p,{to:"/tnc/general-terms.pdf",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0}),a.default.createElement(p,{to:"/contact_us/?is_livechat",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:1})]})))},y=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"You can do so on the <0>Personal details</0> page. If you’re unable to update your details, please <1>contact us via live chat</1>. We may need you to send us some documents for verification.",components:[a.default.createElement(p,{to:u.MN+"/account/personal-details",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0}),a.default.createElement(p,{to:"/contact_us/?is_livechat",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:1})]})))},g=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("While the currencies of your virtual and cryptocurrency accounts are fixed, you can change the currency of your fiat account by following the steps below.")),a.default.createElement(o.qY,null,(0,d.NC)("If you haven’t made a deposit or added a real MT5 account, follow these steps:")),a.default.createElement(s,{listStyle:"decimal",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"1.6rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"Click on your account balance and click <0>Add or manage account.</0>",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"Select <0>Fiat currencies,</0> choose the currency you want, and click <0>Change currency.</0>",components:[a.default.createElement("strong",{key:0})]})))),a.default.createElement(o.qY,null,a.default.createElement(d.Xx,{translate_text:"Need help? Please <0>contact us via live chat.</0>",components:[a.default.createElement(p,{to:"/contact_us/?is_livechat",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})),a.default.createElement(o.qY,null,(0,d.NC)("If you have made a deposit or have added a real MT5 account, follow these steps:")),a.default.createElement(s,{listStyle:"decimal",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"1.6rem"},a.default.createElement(i.xv,null,(0,d.NC)("If you have open positions, close them first.")),a.default.createElement(s,{listStyle:"circle",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"For your Deriv real account, go to <0>Reports</0> to close or sell your open positions.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("For your Deriv MT5 and Deriv X real accounts, log in to close any open positions."))))),a.default.createElement(f,{marginTop:"1.6rem"},a.default.createElement(i.xv,null,(0,d.NC)("Then, withdraw your funds.")),a.default.createElement(s,{listStyle:"circle",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"For your Deriv real account, go to <0>Cashier</0> to withdraw your funds.",components:[a.default.createElement("strong",{key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("For your Deriv MT5 and Deriv X real accounts, go to your dashboard to withdraw your funds."))))),a.default.createElement(f,{marginTop:"1.6rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"<0>Contact us via live chat</0> and we’ll help you change the currency of your account.",components:[a.default.createElement(p,{to:"/contact_us/?is_livechat",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))))},E=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("If you created your Deriv account using Apple/Google/Facebook, try resetting your Apple/Google/Facebook password. After that, you should be able to log in to Deriv as usual.")),a.default.createElement(o.qY,null,(0,d.NC)("If you'd like to log in using your email address instead, follow these steps:")),a.default.createElement(s,{listStyle:"decimal",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"Hit <0>Forgot password?</0> on the <1>login page.</1>",components:[a.default.createElement(p,{to:"/reset-password",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0}),a.default.createElement(p,{to:"https://oauth.deriv.com/oauth2/authorize?app_id=16929",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:1})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Enter the same email address you use for your Apple/Google/Facebook account."))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("We'll email you a verification link. Click that link and set a new password for your Deriv account."))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Now, you'll be able to log in to your Deriv account using your email address and password.")))))},v=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"Click <0>here</0> to close your account.",components:[a.default.createElement(p,{to:u.MN+"/account/deactivate-account",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},x=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:'You can unsubscribe by going to the <0>Personal details</0> page. Uncheck the checkbox that says "Get updates about Deriv products, services and events." at the bottom of the page, and click <1>Submit.</1>',components:[a.default.createElement(p,{to:u.MN+"/account/personal-details",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0}),a.default.createElement("strong",{key:1})]})))},w=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"It's a fee that we charge for accounts that have been inactive for the last 12 months. Refer to <0>our terms</0> for more info.",components:[a.default.createElement(p,{to:"/tnc/general-terms.pdf",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},_=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"Yes. <0>Contact us via live chat</0> and we'll help you with it.",components:[a.default.createElement(p,{to:"/contact_us/?is_livechat",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},b=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"Yes. <0>Contact us via live chat</0>, and we'll help you through it. We'll need the following information:",components:[a.default.createElement(p,{to:"/contact_us/?is_livechat",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})),a.default.createElement(s,{listStyle:"disc",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,a.default.createElement(i.xv,null,(0,d.NC)("Name of entity")))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Certificate of incorporation"))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Memorandum and articles of association"))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("List of directors"))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("List of shareholders"))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Authorisation to manage the account (if your business has more than one director)"))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Passport and utility bill/bank statement of the person managing the account and of each director and shareholder (if your business has more than 1)"))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Utility bill/bank statement containing the address of the business"))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Source of wealth documentation")))),a.default.createElement(o.qY,null,(0,d.NC)("We may request more information during the signup process.")))},C=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"It depends on the laws in your country of residence. Please get professional advice on whether you're required to pay taxes on <0>your profits</0>.",components:[a.default.createElement(p,{to:u.MN+"/reports/profit",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},N=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"You can create an API token <0>here</0>. Give your token a name, select the scope, and click <1>Create</1>.",components:[a.default.createElement(p,{to:u.MN+"/account/api-token",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0}),a.default.createElement("strong",{key:1})]})))},I=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"As per <0>our terms</0>, we only allow one account per client, which you can open in the currency of your choice (either fiat or crypto). If you want to trade with other currencies, you can add multiple cryptocurrency accounts to your profile.",components:[a.default.createElement(p,{to:"/tnc/general-terms.pdf",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},k=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"You can do so on the <0>Self-exclusion</0> page.",components:[a.default.createElement(p,{to:u.MN+"/account/self-exclusion",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},D=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"If you're residing in the EU or UK, <0>contact us via live chat</0>, and we'll help you with it.",components:[a.default.createElement(p,{to:"/contact_us/?is_livechat_open=true",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"If you reside in any other country, you can adjust or remove your limits on the <1>Self-exclusion</1> page. If you’re unable to change your limits, <0>let us know via live chat</0>.",components:[a.default.createElement(p,{to:"/contact_us/?is_livechat_open=true",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0}),a.default.createElement(p,{to:u.MN+"/account/self-exclusion",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},M=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"You may reactivate your account by <1>logging in</1> with your email address and password. If you're unable to do so, please <0>contact us via live chat</0>, and we'll help you further.",components:[a.default.createElement(p,{to:"/contact_us/?is_livechat_open=true",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0}),a.default.createElement(p,{to:"https://oauth.deriv.com/oauth2/authorize?app_id=16929",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},T=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("We’ll prompt you to verify your account when it’s needed.")))},L=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("When we prompt you to verify your account, follow these steps:")),a.default.createElement(s,{listStyle:"decimal",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"<0>Log in</0> to your Deriv account.",components:[a.default.createElement(p,{to:"https://oauth.deriv.com/oauth2/authorize?app_id=16929",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"Go to <0>Settings</0> > <1>Proof of identity</1> or <1>Proof of address</1>.",components:[a.default.createElement(p,{to:u.MN+"/account/personal-details",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0}),a.default.createElement("strong",{key:1})]}))),a.default.createElement(f,{marginTop:"0.3rem"},a.default.createElement(i.xv,null,(0,d.NC)("Follow the instructions on the screen to verify your account.")))),a.default.createElement(o.qY,null,a.default.createElement(d.Xx,{translate_text:"<0>Note:</0> The <0>Proof of identity</0> and <0>Proof of address</0> pages will not be available if your account doesn’t need verification at this time.",components:[a.default.createElement("strong",{key:0})]})))},A=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("You’ll need the following documents to verify your account:")),a.default.createElement(s,{listStyle:"disc",paddingLeft:"5rem"},a.default.createElement(f,{marginTop:"1.6rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"<0>Proof of identity</0>",components:[a.default.createElement("strong",{key:1})]})),a.default.createElement(i.xv,null,(0,d.NC)("You’ll need a valid government-issued identity document such as a national ID card, passport, or driver's licence. Your document must clearly show your name, photo, and date of birth."))),a.default.createElement(f,{marginTop:"1.6rem"},a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"<0>Proof of address</0>",components:[a.default.createElement("strong",{key:1})]})),a.default.createElement(i.xv,null,(0,d.NC)("You’ll need a bank statement, credit card statement, tax statement, or utility bill. Your document must be issued within the last 6 months. It must contain your name, address, the name of the company that issued the document, and the issue date.")))))},S=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("Our regulators require us to verify your account in accordance with anti-money laundering (AML) and Know Your Customer (KYC) laws. If we have prompted you to upload your documents to verify your account, it means that you'll only be able to continue using our services after your account is verified.")))},Y=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("If you’re in the EU or UK:")),a.default.createElement(i.xv,null,(0,d.NC)("No, you must verify your account before trading.")),a.default.createElement(o.qY,null,(0,d.NC)("If you’re in any other country:")),a.default.createElement(i.xv,null,(0,d.NC)("Yes, as long as you haven’t opened a Deriv MT5 Financial STP account, you can still trade without verifying your account.")))},j=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,(0,d.NC)("We try to review your verification documents within the same day. In some cases, due to high traffic, it may take up to 3 business days. You’ll get a confirmation email from us once the review is complete. You can also check the status of your documents at")),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"<0>Settings > Proof of identity</0>",components:[a.default.createElement(p,{to:u.MN+"/account/proof-of-identity",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"<0>Setting > Proof of address</0>",components:[a.default.createElement(p,{to:u.MN+"/account/proof-of-address",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))},z=function(e){var t=e.text;return a.default.createElement(o.DO,null,a.default.createElement(o.eb,{as:"h4"},t),a.default.createElement(i.xv,null,a.default.createElement(d.Xx,{translate_text:"We may have declined your documents because they were unclear, invalid, expired, had cropped edges, or showed details that did not match your Deriv profile. If you need help, please <0>contact us via live chat</0>.",components:[a.default.createElement(p,{to:"/contact_us/?is_livechat_open=true",target:"_blank",external:"true",weight:"bold",rel:"noopener noreferrer",key:0})]})))};t.default=(0,d.Wm)()((function(){var e=(0,c.t)(!1)[0];return a.default.createElement("div",null,a.default.createElement(r.d,{header:(0,d.NC)("Account"),title:(0,d.NC)("Help centre | Frequently asked questions | Account | Deriv"),description:(0,d.NC)("Frequently asked questions - Account")},a.default.createElement(y,{text:(0,d.NC)("How can I change my personal details?"),label:"changing-your-personal-details",is_mounted:e}),a.default.createElement(g,{text:(0,d.NC)("How can I change the currency of my account?"),label:"change-account-currency",is_mounted:e}),a.default.createElement(_,{text:(0,d.NC)("Can I change my email address?"),label:"change-my-email-address",is_mounted:e}),a.default.createElement(h,{text:(0,d.NC)("Why can't I create an account?"),label:"who-can-open-an-account",is_mounted:e}),a.default.createElement(E,{text:(0,d.NC)("I forgot my Google/Facebook/Apple account password. How can I log in to my Deriv account?"),label:"recovering-your-password",is_mounted:e}),a.default.createElement(v,{text:(0,d.NC)("How can I close my account?"),label:"close-your-account",is_mounted:e}),a.default.createElement(x,{text:(0,d.NC)("How do I unsubscribe from marketing emails?"),label:"unsubscribe-marketing-emails",is_mounted:e}),a.default.createElement(w,{text:(0,d.NC)("What is a dormant fee?"),label:"what-is-dormant-fee",is_mounted:e}),a.default.createElement(b,{text:(0,d.NC)("Can I open a corporate or business account?"),label:"open-a-corporate-or-business-account",is_mounted:e}),a.default.createElement(C,{text:(0,d.NC)("Do I need to pay taxes on my trades/profits?"),label:"pay-taxes-on-my-trades-profits",is_mounted:e}),a.default.createElement(I,{text:(0,d.NC)("Can I open more than one Deriv account?"),label:"open-more-than-one-deriv-account",is_mounted:e}),a.default.createElement(N,{text:(0,d.NC)("How do I create an API token?"),label:"create-an-API-token",is_mounted:e}),a.default.createElement(k,{text:(0,d.NC)("How can I set self-exclusion limits on my account?"),label:"self-exclusion-limits-on-my-account",is_mounted:e}),a.default.createElement(D,{text:(0,d.NC)("How can I adjust or remove my self-exclusion limits?"),label:"remove-self-exclusion-limits",is_mounted:e}),a.default.createElement(M,{text:(0,d.NC)("How can I reactivate my Deriv account?"),label:"reactivate-my-Deriv-account",is_mounted:e}),a.default.createElement(T,{text:(0,d.NC)("When do I need to verify my account?"),label:"need-to-verify-my-account",is_mounted:e}),a.default.createElement(L,{text:(0,d.NC)("How do I verify my account?"),label:"How-do-I-verify-my-account",is_mounted:e}),a.default.createElement(A,{text:(0,d.NC)("What documents do I need to verify my account?"),label:"documents-do-I-need-to-verify-my-account",is_mounted:e}),a.default.createElement(S,{text:(0,d.NC)("Why do I need to verify my account?"),label:"Why-do-I-need-to-verify-my-account",is_mounted:e}),a.default.createElement(Y,{text:(0,d.NC)("Can I trade without verifying my account?"),label:"Can-I-trade-without-verifying-my-account",is_mounted:e}),a.default.createElement(j,{text:(0,d.NC)("How long does verification take?"),label:"How-long-does-verification-take",is_mounted:e}),a.default.createElement(z,{text:(0,d.NC)("Why were my documents declined?"),label:"Why-were-my-documents-declined",is_mounted:e})))}))}}]);
//# sourceMappingURL=component---src-pages-help-centre-account-tsx-86251b9abd03fd0c2cdd.js.map