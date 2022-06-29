"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[1757],{92760:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var a=l(15007),n=l(473),o=l(75708),r=l(1597),i=l(22041),s=l(790),m=l(55780),c=l(23299),u=l(89703),p=l(54034),E=l(77672),f=function(){var e=(0,r.useStaticQuery)("522971939"),t=(0,a.useRef)(null),l=t.current,f=(0,a.useState)("Buy"),d=f[0],v=f[1],h=(0,a.useState)("Synthetic"),k=h[0],C=h[1],g=(0,a.useState)("0"),b=g[0],y=g[1],x=(0,a.useState)("0"),L=x[0],N=x[1],S=function(e){v(e),l&&(l.resetForm({}),l.setErrors({}),l.setFieldValue("accountType","Synthetic"===k?"Synthetic":"Financial"),l.setFieldValue("optionList","Synthetic"===k?s.xR:s.Hs))},P=function(e){return C(e)};return a.useEffect((function(){null!=l&&l.values.pointValue&&(l.setFieldValue("stopLossPips",(0,i.DG)(t.current.values,"getStopLossPip")),l.setFieldValue("takeProfitPips",(0,i.DG)(t.current.values,"getTakeProfitPip")),y("0"),N("0"))}),[b,L]),a.createElement(a.Fragment,null,a.createElement(n.ko,null,a.createElement(u.kC,{jc:"flex-start",ai:"center"},a.createElement(c.Th,{to:"/trader-tools/",color:"grey-5"},(0,m.NC)("Traders' tools")),a.createElement("img",{src:E.Z,alt:(0,m.NC)("right arrow"),height:"16",width:"16",style:{margin:"0 8px"}}),a.createElement(c.xv,null,(0,m.NC)("PnL for margin")))),a.createElement(n.PP,{direction:"column"},a.createElement(n.Vq,{as:"h3",type:"sub-section-title",align:"center",weight:"normal"},(0,m.NC)("Our profit and loss calculator for margin helps you to approximate your losses and/or gains.")),a.createElement(u.kC,{mt:"80px",mb:"40px",tablet:{mt:"40px",mb:"24px"}},a.createElement(n.En,{active:"Buy"===d,onClick:function(){return S("Buy")}},a.createElement(c.xv,{size:"var(--text-size-m)",align:"center"},(0,m.NC)("Buy"))),a.createElement(n.En,{active:"Sell"===d,onClick:function(){return S("Sell")}},a.createElement(c.xv,{size:"var(--text-size-m)",align:"center"},(0,m.NC)("Sell")))),a.createElement(n.OO,{mb:"4.0rem"},a.createElement(n.n5,null,a.createElement(o.J9,{innerRef:t,enableReinitialize:!0,initialValues:{accountType:"Synthetic",pnlMarginSymbol:"USD",stopLossPips:0,stopLossLevel:0,takeProfitPips:0,takeProfitLevel:0,symbol:"",pointValue:"",volume:"",takeProfitAmount:"",optionList:s.xR,contractSize:"",assetPrice:"",stopLossAmount:""},validate:i.O5,onSubmit:function(e,t){var l=t.setFieldValue;l("stopLossPips",(0,i.DG)(e,"getStopLossPip")),"Buy"===d&&(l("takeProfitLevel",(0,i.DG)(e,"getTakeProfitLevelBuy")),N((0,i.DG)(e,"getTakeProfitLevelBuy")),l("stopLossLevel",(0,i.DG)(e,"getStopLossLevelBuy")),y((0,i.DG)(e,"getStopLossLevelBuy"))),"Sell"===d&&(l("stopLossLevel",(0,i.DG)(e,"getStopLossLevelSell")),y((0,i.DG)(e,"getStopLossLevelSell")),l("takeProfitLevel",(0,i.DG)(e,"getTakeProfitLevelSell")),N((0,i.DG)(e,"getTakeProfitLevelSell"))),l("takeProfitPips",(0,i.DG)(e,"getTakeProfitPip")),l("pointValue",(0,i.lF)(e.pointValue)),l("volume",(0,i.lF)(e.volume)),l("assetPrice",(0,i.lF)(e.assetPrice)),l("stopLossAmount",(0,i.lF)(e.stopLossAmount)),l("takeProfitAmount",(0,i.lF)(e.takeProfitAmount))}},(function(e){var t=e.values,l=e.setFieldValue,r=e.handleBlur,E=e.errors,f=e.touched,d=e.setFieldError,v=e.setFieldTouched,h=e.isValid,C=e.dirty,g=e.setErrors,b=e.resetForm,y=function(){P("Synthetic"),g({}),b()},x=function(){P("Financial"),g({}),b(),l("accountType","Financial"),l("optionList",s.Hs)},L=function(e){l("pnlMarginSymbol",(0,i.zC)(e)),l("contractSize",(0,i.E$)(e)),l("symbol",e)},N=function(e){l("takeProfitAmount","",!1),d("takeProfitAmount",""),v("takeProfitAmount",!1,!1),e.focus()},S=function(e){l("stopLossAmount","",!1),d("stopLossAmount",""),v("stopLossAmount",!1,!1),e.focus()},_=function(e){var n=e.field;return a.createElement(p.Z,Object.assign({},n,{id:"assetPrice",type:"text",value:t.assetPrice,label:(0,m.NC)("Open price of asset"),autoComplete:"off",error:f.assetPrice&&E.assetPrice,onBlur:r,"data-lpignore":"true",handleError:function(e){l("assetPrice","",!1),d("assetPrice",""),v("assetPrice",!1,!1),e.focus()},maxLength:(0,i.CL)(t.assetPrice,15),background:"white"}))},w=function(e){var l=e.field;return a.createElement(p.Z,Object.assign({},l,{id:"assetPrice",type:"text",value:t.stopLossAmount,label:(0,m.NC)("Stop loss amount"),autoComplete:"off",error:f.stopLossAmount&&E.stopLossAmount,onBlur:r,"data-lpignore":"true",handleError:S,maxLength:(0,i.CL)(t.stopLossAmount,15),background:"white"}))},A=function(e){var n=e.field;return a.createElement(p.Z,Object.assign({},n,{id:"pointValue",type:"text",label:(0,m.NC)("Point value"),autoComplete:"off",error:f.pointValue&&E.pointValue,onBlur:r,"data-lpignore":"true",handleError:function(e){l("pointValue","",!1),d("pointValue",""),v("pointValue",!1,!1),e.focus()},maxLength:(0,i.CL)(t.pointValue,8),background:"white"}))},F=function(e){l("takeProfitAmount",e)},B=function(e){l("stopLossAmount",e)},D=function(e){var l=e.field;return a.createElement(p.Z,Object.assign({},l,{id:"takeProfitAmount",type:"text",label:(0,m.NC)("Take profit amount"),autoComplete:"off",error:f.takeProfitAmount&&E.takeProfitAmount,onBlur:r,"data-lpignore":"true",handleError:N,maxLength:(0,i.CL)(t.takeProfitAmount,15),background:"white"}))};return a.createElement(a.Fragment,null,a.createElement(u.di.Desktop,{max_width:"mobileL"},a.createElement(n.ez,null,a.createElement(n.d1,null,a.createElement(u.kC,{mb:"24px"},a.createElement(u.kC,{fd:"column",mr:"24px"},a.createElement(n.iB,{htmlFor:"message"},(0,m.NC)("Stop loss pips")),a.createElement(n.Y$,null,a.createElement(n.Yv,null,t.stopLossPips),a.createElement(n.Aw,null,t.pnlMarginSymbol))),a.createElement(u.kC,{fd:"column"},a.createElement(n.iB,{htmlFor:"message"},(0,m.NC)("Stop loss level")),a.createElement(n.Y$,null,a.createElement(n.Yv,null,t.stopLossLevel),a.createElement(n.Aw,null,t.pnlMarginSymbol)))),a.createElement(u.kC,null,a.createElement(u.kC,{fd:"column",mr:"24px"},a.createElement(n.iB,{htmlFor:"message"},(0,m.NC)("Take profit pips")),a.createElement(n.Y$,null,a.createElement(n.Yv,null,t.takeProfitPips),a.createElement(n.Aw,null,t.pnlMarginSymbol))),a.createElement(u.kC,{fd:"column"},a.createElement(n.iB,{htmlFor:"message"},(0,m.NC)("Take profit level")),a.createElement(n.Y$,null,a.createElement(n.Yv,null,t.takeProfitLevel),a.createElement(n.Aw,null,t.pnlMarginSymbol))))),a.createElement(n.bN,null,a.createElement(n.iB,null,(0,m.NC)("Account type")),a.createElement(u.kC,{mb:"3rem",mt:"1rem",jc:"space-between",tablet:{height:"unset"}},a.createElement(n.HO,{active:"Synthetic"===k,onClick:y},a.createElement(c.xv,{align:"center"},(0,m.NC)("Synthetic"))),a.createElement(n.HO,{active:"Financial"===k,disabled:"Financial"===k,onClick:x},a.createElement(c.xv,{align:"center"},(0,m.NC)("Financial")))),a.createElement(u.kC,{jc:"space-between"},a.createElement(u.kC,{fd:"column",width:"23.4rem"},a.createElement(n.a_,{option_list:t.optionList,label:(0,m.NC)("Symbol"),default_option:s.cK,selected_option:t.symbol,id:"symbol",onChange:L,contractSize:t.contractSize,error:f.symbol&&E.symbol,onBlur:r})),a.createElement(u.kC,{fd:"column",width:"23.4rem"},a.createElement(n.ft,null,a.createElement(o.gN,{name:"pointValue",value:t.pointValue,onChange:function(e){l("pointValue",e)}},A)))),a.createElement(u.kC,{jc:"space-between",mb:"17px"},a.createElement(u.kC,{fd:"column",width:"23.4rem"},a.createElement(n.ft,null,a.createElement(o.gN,{name:"volume",value:t.volume,onChange:function(e){l("volume",e)}},(function(e){var n=e.field;return a.createElement(p.Z,Object.assign({},n,{id:"volume",type:"text",label:(0,m.NC)("Volume"),autoComplete:"off",error:f.volume&&E.volume,onBlur:r,"data-lpignore":"true",handleError:function(e){l("volume","",!1),d("volume",""),v("volume",!1,!1),e.focus()},maxLength:(0,i.CL)(t.volume,8),background:"white"}))})))),a.createElement(u.kC,{fd:"column",width:"23.4rem"},a.createElement(n.ft,null,a.createElement(o.gN,{name:"takeProfitAmount",value:t.takeProfitAmount,onChange:F},D)))),a.createElement(u.kC,{jc:"space-between"},a.createElement(u.kC,{fd:"column",width:"23.4rem"},a.createElement(n.ft,null,a.createElement(o.gN,{name:"assetPrice",value:t.assetPrice,onChange:function(e){l("assetPrice",e)}},_))),a.createElement(u.kC,{fd:"column",width:"23.4rem"},a.createElement(n.ft,null,a.createElement(o.gN,{name:"stopLossAmount",value:t.stopLossAmount,onChange:B},w)))),a.createElement(u.kC,{mt:"1.5rem"},a.createElement(n.ax,{secondary:!0,type:"submit",disabled:!h||!C},(0,m.NC)("Calculate")))))),a.createElement(u.di.Mobile,{min_width:"mobileL"},a.createElement(n.Og,null,a.createElement(n.ag,null,a.createElement(n.n,null,a.createElement(u.kC,{fd:"column"},a.createElement(u.kC,{fd:"column",mr:"24px",mb:"24px"},a.createElement(n.iB,{htmlFor:"message"},(0,m.NC)("Stop loss pips")),a.createElement(n.Y$,null,a.createElement(n.Yv,null,t.stopLossPips),a.createElement(n.Aw,null,t.pnlMarginSymbol))),a.createElement(u.kC,{fd:"column",mb:"24px"},a.createElement(n.iB,{htmlFor:"message"},(0,m.NC)("Stop loss level")),a.createElement(n.Y$,null,a.createElement(n.Yv,null,t.stopLossLevel),a.createElement(n.Aw,null,t.pnlMarginSymbol)))),a.createElement(u.kC,{fd:"column"},a.createElement(u.kC,{fd:"column",mr:"24px",mb:"24px"},a.createElement(n.iB,{htmlFor:"message"},(0,m.NC)("Take profit pips")),a.createElement(n.Y$,null,a.createElement(n.Yv,null,t.takeProfitPips),a.createElement(n.Aw,null,t.pnlMarginSymbol))),a.createElement(u.kC,{fd:"column"},a.createElement(n.iB,{htmlFor:"message"},(0,m.NC)("Take profit level")),a.createElement(n.Y$,null,a.createElement(n.Yv,null,t.takeProfitLevel),a.createElement(n.Aw,null,t.pnlMarginSymbol)))))),a.createElement(n.bN,null,a.createElement(n.iB,null,(0,m.NC)("Account type")),a.createElement(u.kC,{mb:"3rem",mt:"1rem",jc:"space-between",tablet:{height:"unset"}},a.createElement(n.HO,{active:"Synthetic"===k,onClick:y},a.createElement(c.xv,{align:"center"},(0,m.NC)("Synthetic"))),a.createElement(n.HO,{active:"Financial"===k,disabled:"Financial"===k,onClick:x},a.createElement(c.xv,{align:"center"},(0,m.NC)("Financial")))),a.createElement(n.a_,{option_list:t.optionList,label:(0,m.NC)("Symbol"),default_option:s.cK,selected_option:t.symbol,id:"symbol",onChange:L,contractSize:t.contractSize,error:f.symbol&&E.symbol,onBlur:r}),a.createElement(n.BZ,null,a.createElement(o.gN,{name:"volume",value:t.volume,onChange:function(e){l("volume",e)}},(function(e){var n=e.field;return a.createElement(p.Z,Object.assign({},n,{id:"volume",type:"text",label:(0,m.NC)("Volume"),autoComplete:"off",error:f.volume&&E.volume,onBlur:r,"data-lpignore":"true",handleError:function(e){l("volume","",!1),d("volume",""),v("volume",!1,!1),e.focus()},maxLength:(0,i.CL)(t.volume,8),background:"white"}))}))),a.createElement(n.BZ,null,a.createElement(o.gN,{name:"assetPrice",value:t.assetPrice,onChange:function(e){l("assetPrice",e)}},_)),a.createElement(n.BZ,null,a.createElement(o.gN,{name:"pointValue",value:t.pointValue,onChange:function(e){l("pointValue",e)}},A)),a.createElement(n.BZ,null,a.createElement(o.gN,{name:"takeProfitAmount",value:t.takeProfitAmount,onChange:F},D)),a.createElement(n.BZ,null,a.createElement(o.gN,{name:"stopLossAmount",value:t.stopLossAmount,onChange:B},w)),a.createElement(u.kC,{mt:"1.5rem"},a.createElement(n.ax,{secondary:!0,type:"submit",disabled:!h||!C},(0,m.NC)("Calculate")))))))}))),"Buy"===d?a.createElement(n.du,null,a.createElement(c.h4,{as:"h3",type:"section-title",mb:"8px"},(0,m.NC)("How to calculate stop loss and/or take profit level and pip value")),a.createElement(c.xv,{mb:"8px"},(0,m.NC)("The stop loss and/or take profit level and pip value when buying a contract on Deriv MT5 (DMT5) is calculated based on the formula:")),a.createElement(c.xv,{mb:"8px"},a.createElement(m.Xx,{translate_text:"<0>Stop loss and/or take profit level = asset price + {stop loss OR take profit amount ÷ (volume × contract size)}</0>",components:[a.createElement("strong",{key:0})]})),a.createElement(c.xv,{mb:"16px"},a.createElement(m.Xx,{translate_text:"<0>Stop loss and/or take profit pip value = |(stop loss OR take profit level - asset price)| ÷ point value</0>",components:[a.createElement("strong",{key:0})]})),a.createElement(c.xv,{mb:"8px"},(0,m.NC)("The stop loss and/or take profit level helps you to manage your risk when you are buying a contract.")),a.createElement(c.xv,{mb:"8px"},(0,m.NC)("For financial accounts, the stop loss and/or take profit pip value is in the quote currency for forex pairs.")),a.createElement(c.xv,{mb:"40px"},(0,m.NC)("For synthetic accounts, the stop loss and/or take profit pip value is in USD.")),a.createElement(c.h4,{as:"h3",type:"section-title",mb:"8px"},(0,m.NC)("Example calculation")),a.createElement(c.xv,{mb:"16px"},(0,m.NC)("Let’s say you want to calculate the stop loss level and pip value when you want to buy a lot of EUR/USD priced at 1.17524 USD with a stop loss amount of 24 USD.")),a.createElement(c.UQ,{has_single_state:!0},a.createElement(c.Qd,{header:(0,m.NC)("Stop loss level"),header_style:n.$s,style:{padding:"0 0 24px 0"},plus:!0},a.createElement(u.di.Desktop,{max_width:"mobileL"},a.createElement(c.et,{data:e.stop_loss_level_formula,alt:(0,m.NC)("stop loss level formula")})),a.createElement(u.di.Mobile,{min_width:"mobileL"},a.createElement(c.et,{data:e.stop_loss_level_formula_mobile,alt:(0,m.NC)("stop loss level formula")})),a.createElement(n.kC,null,a.createElement(n.mJ,null,a.createElement("li",null,a.createElement("span",null,a.createElement(m.Xx,{translate_text:"The contract size is one standard lot of forex = 100,000 units."})))))),a.createElement(c.Qd,{header:(0,m.NC)("Stop loss pip value"),header_style:n.$s,plus:!0},a.createElement(u.di.Desktop,{max_width:"mobileL"},a.createElement(c.et,{data:e.stop_loss_pip_formula,alt:(0,m.NC)("stop loss pip formula")})),a.createElement(u.di.Mobile,{min_width:"mobileL"},a.createElement(c.et,{data:e.stop_loss_pip_formula_mobile,alt:(0,m.NC)("stop loss pip formula")})),a.createElement(n.kC,null,a.createElement(n.mJ,null,a.createElement("li",null,a.createElement("span",null,(0,m.NC)("The point value is derived from the current digits of the asset. In this example, the digit is 5, so the point value is 0.00001."))))),a.createElement(c.xv,{mt:"1.6rem"},a.createElement(m.Xx,{translate_text:"Your position is automatically closed when your stop loss level is at <0>1.1750</0> and when your stop loss pip value is <0>24 USD</0>.",components:[a.createElement("strong",{key:0})]})))),a.createElement(n.gM,{height:"auto"},a.createElement(n.UN,{secondary:"true",type:"mt5",external:"true",target:"_blank",rel:"noopener noreferrer"},(0,m.NC)("Go to Deriv MT5 dashboard")))):a.createElement(n.du,{key:d},a.createElement(c.h4,{as:"h3",type:"section-title",mb:"8px"},(0,m.NC)("How to calculate stop loss and/or take profit level and pip value")),a.createElement(c.xv,{mb:"8px"},(0,m.NC)("The stop loss and/or take profit level and pip value when selling a contract on Deriv MT5 (DMT5) is calculated based on the formula:")),a.createElement(c.xv,{mb:"8px"},a.createElement(m.Xx,{translate_text:"<0>Stop loss and/or take profit level = asset price - {stop loss OR take profit amount ÷ (volume × contract size)}</0>",components:[a.createElement("strong",{key:0})]})),a.createElement(c.xv,{mb:"16px"},a.createElement(m.Xx,{translate_text:"<0>Stop loss and/or take profit pip value = |(stop loss OR take profit level - asset price)| ÷ point value</0>",components:[a.createElement("strong",{key:0})]})),a.createElement(c.xv,{mb:"8px"},(0,m.NC)("The stop loss and/or take profit level helps you to manage your risk when you are selling a contract.")),a.createElement(c.xv,{mb:"8px"},(0,m.NC)("For financial accounts, the stop loss and/or take profit pip value is in the quote currency for forex pairs.")),a.createElement(c.xv,{mb:"40px"},(0,m.NC)("For synthetic accounts, the stop loss and/or take profit pip value is in USD.")),a.createElement(c.h4,{as:"h3",type:"section-title",mb:"8px"},(0,m.NC)("Example calculation")),a.createElement(c.xv,{mb:"16px"},(0,m.NC)("Let’s say you want to calculate the take profit level and pip value when you want to sell 3 lots of Volatility 50 Index priced at 249.5961 USD with a take profit amount of 84 USD.")),a.createElement(c.UQ,{has_single_state:!0},a.createElement(c.Qd,{header:(0,m.NC)("Take profit level"),header_style:n.$s,style:{padding:"0 0 24px 0"},plus:!0},a.createElement(u.di.Desktop,{max_width:"mobileL"},a.createElement(c.et,{data:e.take_profit_level_formula,alt:(0,m.NC)("take profit level formula")})),a.createElement(u.di.Mobile,{min_width:"mobileL"},a.createElement(c.et,{data:e.take_profit_level_formula_mobile,alt:(0,m.NC)("take profit level formula")})),a.createElement(n.kC,null,a.createElement(n.mJ,null,a.createElement("li",null,a.createElement("span",null,a.createElement(m.Xx,{translate_text:"The contract size is one standard lot of Volatility 50 Index = 1."})))))),a.createElement(c.Qd,{header:(0,m.NC)("Take profit pip value"),header_style:n.$s,plus:!0},a.createElement(u.di.Desktop,{max_width:"mobileL"},a.createElement(c.et,{data:e.take_profit_pip_formula,alt:(0,m.NC)("take profit pip formula")})),a.createElement(u.di.Mobile,{min_width:"mobileL"},a.createElement(c.et,{data:e.take_profit_pip_formula_mobile,alt:(0,m.NC)("take profit pip formula")})),a.createElement(n.kC,null,a.createElement(n.mJ,null,a.createElement("li",null,a.createElement("span",null,(0,m.NC)("The point value is derived from the current digits of the asset. In this example, the digit is 4, so the point value is 0.0001."))))),a.createElement(c.xv,{mt:"1.6rem"},a.createElement(m.Xx,{translate_text:"Your position is automatically closed when your take profit level is at <0>221.5961</0> and the pip value is <0>280,000 USD</0>.",components:[a.createElement("strong",{key:0})]})))),a.createElement(n.gM,{height:"auto"},a.createElement(n.UN,{secondary:"true",type:"mt5",external:"true",target:"_blank",rel:"noopener noreferrer"},(0,m.NC)("Go to Deriv MT5 dashboard")))))))},d=l(34260),v=(0,m.Wm)()((function(){return a.default.createElement(d.Z,null,a.default.createElement(u.HJ,{title:(0,m.NC)("PnL Margin Calculator"),description:(0,m.NC)("PnL Margin Calculator")}),a.default.createElement(n.VM,{jc:"center",ai:"center"},a.default.createElement(u.W2,null,a.default.createElement(n.eb,{as:"h1",type:"display-title",color:"white",align:"center"},(0,m.NC)("Stop loss and/or take profit calculator for margin")))),a.default.createElement(f,null))}))}}]);
//# sourceMappingURL=component---src-pages-trader-tools-pnl-for-margin-index-tsx-bef6db53eb18287aa718.js.map