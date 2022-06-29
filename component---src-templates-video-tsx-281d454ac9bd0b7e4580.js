/*! For license information please see component---src-templates-video-tsx-281d454ac9bd0b7e4580.js.LICENSE.txt */
"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[2935],{20692:function(e,t,n){n(15007);t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2IDhzLTMtNS41LTgtNS41UzAgOCAwIDhzMyA1LjUgOCA1LjVTMTYgOCAxNiA4ek0xLjE3MyA4Yy40ODQtLjczNSAxLjA0LTEuNDIgMS42Ni0yLjA0M0M0LjEyIDQuNjY4IDUuODggMy41IDggMy41YzIuMTIgMCAzLjg3OSAxLjE2OCA1LjE2OCAyLjQ1N0ExMy4xMyAxMy4xMyAwIDAgMSAxNC44MjggOGMtLjA1OC4wODctLjEyMi4xODMtLjE5NS4yODgtLjMzNS40OC0uODMgMS4xMi0xLjQ2NSAxLjc1NUMxMS44NzkgMTEuMzMyIDEwLjExOSAxMi41IDggMTIuNWMtMi4xMiAwLTMuODc5LTEuMTY4LTUuMTY4LTIuNDU3QTEzLjEzNCAxMy4xMzQgMCAwIDEgMS4xNzIgOGguMDAxeiIgZmlsbD0iIzk5OSIvPjxwYXRoIGQ9Ik04IDUuNWEyLjUgMi41IDAgMSAwIDAgNSAyLjUgMi41IDAgMCAwIDAtNXpNNC41IDhhMy41IDMuNSAwIDEgMSA3IDAgMy41IDMuNSAwIDAgMS03IDB6IiBmaWxsPSIjOTk5Ii8+PC9zdmc+"},27558:function(e,t,n){n.r(t),n.d(t,{default:function(){return Me}});var r=n(15861),o=n(93433),i=n(64687),a=n.n(i),l=n(15007),u=n(1597);n(65743);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=void 0!==n.g&&"[object global]"==={}.toString.call(n.g);function f(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function p(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function h(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function m(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function v(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(h(r))return"https://vimeo.com/".concat(r);if(m(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var y=void 0!==Array.prototype.indexOf,w="undefined"!=typeof window&&void 0!==window.postMessage;if(!(d||y&&w))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),r(e.prototype,"get",(function(e){if(n(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:E);var b,k,x=(b=function(e){var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function l(){for(var e=0;e<this.chain.length;e++)u(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function u(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function c(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i((function(){var r=new f(n);try{t.call(e,(function(){c.apply(r,arguments)}),(function(){s.apply(r,arguments)}))}catch(e){s.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(l,n))}catch(e){s.call(new f(n),e)}}}function s(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(l,t))}function d(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function f(e){this.def=e,this.triggered=!1}function p(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new p(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&i(l,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){c.call(t,e)}),(function(e){s.call(t,e)}))}catch(e){s.call(t,e)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var m=e({},"constructor",h,!1);return h.prototype=m,e(m,"__NPO__",0,!1),e(h,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(h,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(h,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;d(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(h,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");d(t,e,(function(e,t){n(t)}),r)}))})),h},(n=E)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])},b(k={exports:{}},k.exports),k.exports),_=new WeakMap;function M(e,t,n){var r=_.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),_.set(e.element,r)}function C(e,t){return(_.get(e.element)||{})[t]||[]}function T(e,t,n){var r=_.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],_.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),_.set(e.element,r),r[t]&&0===r[t].length}function N(e,t){var n=_.get(e);_.set(t,n),_.delete(e)}function I(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function A(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function P(e,t){var n,r=[];if((t=I(t)).event){if("error"===t.event)C(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),T(e,t.data.method,n)}));r=C(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=C(e,t);if(n.length<1)return!1;var r=n.shift();return T(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var j=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return j.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function L(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!m(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var l="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;l.open("GET",i,!0),l.onload=function(){if(404!==l.status)if(403!==l.status)try{var t=JSON.parse(l.responseText);if(403===t.domain_status_code)return L(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},l.onerror=function(){var e=l.status?" (".concat(l.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},l.send()}))}var O=new WeakMap,F=new WeakMap,V={},z=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!p(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var o=t.querySelector("iframe");o&&(t=o)}if("IFRAME"===t.nodeName&&!m(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(O.has(t))return O.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new x((function(e,o){if(n._onMessage=function(t){if(m(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=I(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var a=r&&"ready"===r.event,l=r&&"ping"===r.method;if(a||l)return n.element.setAttribute("data-ready","true"),void e();P(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=S(t,r);D(g(i),i,t).then((function(e){var r=L(e,t);return n.element=r,n._originalElement=t,N(t,r),O.set(n.element,n),e})).catch(o)}}));if(F.set(this,i),O.set(this.element,this),"IFRAME"===this.element.nodeName&&A(this,"ping"),V.isEnabled){var a=function(){return V.exit()};this.fullscreenchangeHandler=function(){V.isFullscreen?M(n,"event:exitFullscreen",a):T(n,"event:exitFullscreen",a),n.ready().then((function(){A(n,"fullscreenchange",V.isFullscreen)}))},V.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,r;return t=e,n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new x((function(r,o){return t.ready().then((function(){M(t,e,{resolve:r,reject:o}),A(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new x((function(n,r){return e=f(e,"get"),t.ready().then((function(){M(t,e,{resolve:n,reject:r}),A(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new x((function(r,o){if(e=f(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){M(n,e,{resolve:r,reject:o}),A(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===C(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),M(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");T(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=F.get(this)||new x((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return x.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return V.isEnabled?V.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return V.isEnabled?V.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return V.isEnabled?x.resolve(V.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new x((function(t){if(F.delete(e),O.delete(e.element),e._originalElement&&(O.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),V.isEnabled&&V.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n&&s(t.prototype,n),r&&s(t,r),e}();d||(V=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=S(e);D(g(t),t,e).then((function(t){return L(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(m(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(m(t.origin)){var n=I(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;v(i.src)&&a&&new z(i).callMethod("appendVideoMetadata",window.location.href)}}};window.addEventListener("message",t)}}());var R=z;function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}var Z={play:"onPlay",pause:"onPause",ended:"onEnd",timeupdate:"onTimeUpdate",progress:"onProgress",seeked:"onSeeked",texttrackchange:"onTextTrackChange",cuechange:"onCueChange",cuepoint:"onCuePoint",volumechange:"onVolumeChange",playbackratechange:"onPlaybackRateChange",error:"onError",loaded:"onLoaded"},W=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).refContainer=n.refContainer.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,q(t,n);var o=r.prototype;return o.componentDidMount=function(){this.createPlayer()},o.componentDidUpdate=function(e){var t=this,n=Object.keys(this.props).filter((function(n){return t.props[n]!==e[n]}));this.updateProps(n)},o.componentWillUnmount=function(){this.player.destroy()},o.getInitialOptions=function(){return{id:this.props.video,width:this.props.width,height:this.props.height,autopause:this.props.autopause,autoplay:this.props.autoplay,byline:this.props.showByline,color:this.props.color,controls:this.props.controls,loop:this.props.loop,portrait:this.props.showPortrait,title:this.props.showTitle,muted:this.props.muted,background:this.props.background,responsive:this.props.responsive,dnt:this.props.dnt,speed:this.props.speed,keyboard:this.props.keyboard,pip:this.props.pip,playsinline:this.props.playsInline,quality:this.props.quality,texttrack:this.props.textTrack,transparent:this.props.transparent}},o.updateProps=function(e){var t=this,n=this.player;e.forEach((function(e){var r=t.props[e];switch(e){case"autopause":n.setAutopause(r);break;case"color":n.setColor(r);break;case"loop":n.setLoop(r);break;case"volume":n.setVolume(r);break;case"paused":n.getPaused().then((function(e){return r&&!e?n.pause():!r&&e?n.play():null}));break;case"width":case"height":n.element[e]=r;break;case"video":if(r){var o=t.props.start,i=n.loadVideo(r);"number"==typeof o&&i.then((function(){n.setCurrentTime(o)}))}else n.unload()}}))},o.createPlayer=function(){var e=this,t=this.props,n=t.start,r=t.volume;this.player=new R(this.container,this.getInitialOptions()),Object.keys(Z).forEach((function(t){var n=Z[t];e.player.on(t,(function(t){var r=e.props[n];r&&r(t)}))}));var o=this.props,i=o.onError,a=o.onReady;this.player.ready().then((function(){a&&a(e.player)}),(function(e){if(!i)throw e;i(e)})),"number"==typeof n&&this.player.setCurrentTime(n),"number"==typeof r&&this.updateProps(["volume"])},o.refContainer=function(e){this.container=e},o.render=function(){var e=this.props,t=e.id,n=e.className,r=e.style;return l.default.createElement("div",{id:t,className:n,style:r,ref:this.refContainer})},r}(l.default.Component);W.defaultProps={autopause:!0,autoplay:!1,showByline:!0,controls:!0,loop:!1,showPortrait:!0,showTitle:!0,muted:!1,background:!1,responsive:!1,dnt:!1,speed:!1,keyboard:!0,pip:!1,playsInline:!0,transparent:!0};var U=n(51074),H=n(6551),Y=n(13895),B=n(12873),Q=n(95722),G=n(43827),J=n(65084),X=n(37105),$=n(77672),K=n(20692),ee=n(42813),te=n(20655),ne=n(74690),re=n(99509),oe=n(1039),ie=(0,U.default)(G.W2).withConfig({displayName:"video__VideoPageContainer",componentId:"sc-enee9c-0"})(["@media ","{width:100%;}"],te.Z.tabletS),ae=(0,U.default)(G.kC).withConfig({displayName:"video__StickyBreadCrumbsWrapper",componentId:"sc-enee9c-1"})(["background:",";position:",";top:",";z-index:",";height:70px;border-top:1px solid var(--color-grey-8);@media ","{top:",";height:74px;}@media ","{height:66px;top:66px;}@media ","{top:",";height:66px;}"],(function(e){return e.scroll?"var(--color-grey-8)":"var(--color-white)"}),(function(e){return e.scroll?"fixed":"unset"}),(function(e){return e.scroll?"70px":"unset"}),(function(e){return e.scroll?"1":"unset"}),te.Z.desktopL,(function(e){return e.scroll?"82px":"unset"}),te.Z.laptop,te.Z.tabletL,(function(e){return e.scroll?"55px":"unset"})),le=(0,U.default)(G.kC).withConfig({displayName:"video__VideoAndRelatedContainer",componentId:"sc-enee9c-2"})(["flex-direction:row;@media ","{flex-direction:column;margin:auto;}"],te.Z.laptopM),ue=U.default.div.withConfig({displayName:"video__DesktopContainer",componentId:"sc-enee9c-3"})(["display:flex;flex-direction:column;padding:30px 0 80px;"]),ce=U.default.div.withConfig({displayName:"video__VideoContainer",componentId:"sc-enee9c-4"})(["display:flex;flex-direction:column;background-color:#f5f7fa;width:791px;height:615px;border-radius:8px;@media ","{margin-bottom:20px;width:100%;height:auto;}"],te.Z.laptopM),se=U.default.div.withConfig({displayName:"video__RelatedVideos",componentId:"sc-enee9c-5"})(["background-color:#f5f7fa;width:384px;height:615px;border-radius:8px;margin-left:20px;padding:1.5rem;@media ","{margin-left:0;width:100%;height:auto;}"],te.Z.laptopM),de=U.default.div.withConfig({displayName:"video__RelatedVideosContainer",componentId:"sc-enee9c-6"})(["display:flex;flex-direction:column;padding-top:5px;"]),fe=U.default.div.withConfig({displayName:"video__RelatedVideoCard",componentId:"sc-enee9c-7"})(["cursor:pointer;display:flex;width:352px;height:96px;margin:8px 0;@media ","{width:auto;}"],te.Z.laptopM),pe=(0,U.default)(re.et).withConfig({displayName:"video__RelatedVideoImage",componentId:"sc-enee9c-8"})(["width:160px;height:96px;border-radius:2%;"]),he=U.default.div.withConfig({displayName:"video__RelatedVideoDescription",componentId:"sc-enee9c-9"})(["display:flex;flex-direction:column;padding:10px;"]),me=U.default.h3.withConfig({displayName:"video__RelatedVideoTitle",componentId:"sc-enee9c-10"})(["font-size:14px;font-weight:700;line-height:20px;padding-bottom:5px;@media ","{font-size:12px;font-weight:500;line-height:15px;}"],te.Z.mobileM),ve=U.default.div.withConfig({displayName:"video__RelatedVideoDateAndDuration",componentId:"sc-enee9c-11"})(["display:flex;"]),ge=(0,U.default)(W).withConfig({displayName:"video__VideoPlayer",componentId:"sc-enee9c-12"})(["> iframe{width:100%;}"]),ye=U.default.div.withConfig({displayName:"video__VideoDetailsContainer",componentId:"sc-enee9c-13"})(["padding:20px;"]),we=U.default.h1.withConfig({displayName:"video__Title",componentId:"sc-enee9c-14"})(["font-size:24px;font-weight:700;@media (max-width:800px){font-size:18px;line-height:26px;}"]),Ee=U.default.p.withConfig({displayName:"video__VideoDescription",componentId:"sc-enee9c-15"})(["color:var(--color-grey);font-size:16px;padding:16px 0;line-height:24px;@media ","{font-size:14px;line-height:20px;}"],te.Z.tabletS),be=(0,U.default)(G.kC).withConfig({displayName:"video__VideoDetails",componentId:"sc-enee9c-16"})(["justify-content:start;"]),ke=U.default.p.withConfig({displayName:"video__GreyText",componentId:"sc-enee9c-17"})(["color:var(--color-grey);font-size:14px;padding:0 10px;@media ","{font-size:12px;}"],te.Z.tabletS),xe=U.default.p.withConfig({displayName:"video__GreyTextSmall",componentId:"sc-enee9c-18"})(["color:var(--color-grey);font-size:12px;padding-right:10px;"]),_e=(0,U.default)(oe.Qj).withConfig({displayName:"video__AllVideosButton",componentId:"sc-enee9c-19"})(["margin:30px auto 0;width:130px;&:hover{cursor:pointer;}@media ","{width:100%;margin:30px auto 0;}"],te.Z.laptopM),Me=(0,B.Wm)()((function(e){var t,n,i=e.data,c=(0,l.useContext)(ne.c).academy_data,s=(0,l.useState)(0),d=s[0],f=s[1],p=(0,l.useState)(!0),h=p[0],m=p[1],v=(0,X.t)()[0],g=(0,l.useState)(null),y=g[0],w=g[1];(0,l.useEffect)((function(){v&&(k(),window.scrollTo(0,0))}),[v]);var E=(0,l.useRef)(null),b=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*130;E.current.style.width=e+"%"},k=function(){var e=window.scrollY;f(e),m(e>72)};(0,l.useEffect)((function(){return window.addEventListener("scroll",b,{passive:!0}),function(){window.removeEventListener("scroll",b)}}),[]),(0,l.useEffect)((function(){return window.addEventListener("scroll",k),function(){return window.removeEventListener("scroll",k)}}),[d,h,k]);var x,_,M,C=c.videos,T=i.directus.videos[0],N=null==T?void 0:T.video_title,I=null==T?void 0:T.video_description,A=null==T?void 0:T.published_date,P=null==T?void 0:T.video_duration,j=null==T?void 0:T.vimeo_id,S=null==T||null===(t=T.tags[0])||void 0===t||null===(n=t.tags_id)||void 0===n?void 0:n.tag_name;return(0,l.useEffect)((function(){var e="https://vimeo.com/api/v2/video/"+j+".json",t=function(){var t=(0,r.Z)(a().mark((function t(){var n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return r=t.sent,t.next=5,r.json();case 5:o=t.sent,w(null===(n=o[0])||void 0===n?void 0:n.stats_number_of_plays);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[j]),l.default.createElement(Q.Z,{type:"academy",margin_top:"14.4"},l.default.createElement(G.HJ,{description:I,title:N}),l.default.createElement(l.default.Fragment,null,v&&l.default.createElement(G.S$,{padding:"0",position:"relative"},l.default.createElement(G.Hi,{breakpoint:"laptop"},l.default.createElement(ae,{scroll:h},l.default.createElement(H.MH,{scroll:h},l.default.createElement(H.xI,null,l.default.createElement(H.q1,{to:"/academy/",color:"grey-5"},"Academy"),l.default.createElement("img",{src:$.Z,height:"16",width:"16",style:{marginRight:"12px"}}),l.default.createElement(H.q1,{to:"/academy/videos/",color:"grey-5"},"All Videos"),l.default.createElement("img",{src:$.Z,height:"16",width:"16"}),l.default.createElement(H.fu,null,N),l.default.createElement(Y.Z,null))),l.default.createElement(H.LW,{scroll:h},l.default.createElement(H.p1,null,l.default.createElement(H.ko,{ref:E}))))),l.default.createElement(G.ij,{breakpoint:"laptop"},l.default.createElement(ae,{scroll:h},l.default.createElement(H.MH,{scroll:h},l.default.createElement(H.xI,null,l.default.createElement(H.q1,{to:"/academy/videos/",color:"grey-5"},"All Videos"),l.default.createElement("img",{src:$.Z,height:"16",width:"16"}),l.default.createElement(H.fu,null,(0,J.aS)(N,(0,ee.getTruncateLength)())),l.default.createElement(Y.Z,null))),l.default.createElement(H.LW,{scroll:h},l.default.createElement(H.p1,null,l.default.createElement(H.ko,{ref:E}))))),l.default.createElement(ie,null,l.default.createElement(ue,null,l.default.createElement(le,null,l.default.createElement(ce,null,l.default.createElement(ge,{responsive:!0,video:j}),l.default.createElement(ye,null,l.default.createElement(we,null,N),l.default.createElement(Ee,null,I),l.default.createElement(be,null,l.default.createElement("img",{src:K.Z,height:"16",width:"16"}),l.default.createElement(ke,null,y," views"),l.default.createElement(ke,null,"•"),l.default.createElement(ke,null,A),l.default.createElement(ke,null,"•"),l.default.createElement(ke,null,P)))),l.default.createElement(se,null,l.default.createElement(we,null,"Related Videos"),l.default.createElement(de,null,(x=C.filter((function(e){var t;return null==e||null===(t=e.tags)||void 0===t?void 0:t.some((function(e){var t;return(null===(t=e.tags_id)||void 0===t?void 0:t.tag_name)===S}))})).concat(C),_=(0,o.Z)(new Set(x)),M=_.filter((function(e){return e.video_title!==N})),M.length<=5?M:M.slice(0,5)).map((function(e){var t,n,r;return l.default.createElement(fe,{key:N,onClick:function(){(0,u.navigate)("/academy/videos/"+(null==e?void 0:e.video_slug))}},l.default.createElement(pe,{style:{borderRadius:"7px"},data:null==e||null===(t=e.video_thumbnail)||void 0===t||null===(n=t.imageFile)||void 0===n||null===(r=n.childImageSharp)||void 0===r?void 0:r.gatsbyImageData,width:"161px",height:"96px"}),l.default.createElement(he,null,l.default.createElement(me,null,null==e?void 0:e.video_title),l.default.createElement(ve,null,l.default.createElement(xe,null,null==e?void 0:e.published_date),l.default.createElement(xe,null,"•"),l.default.createElement(xe,null,null==e?void 0:e.video_duration))))}))))),l.default.createElement(_e,{tertiary:!0,to:"/academy/videos/"},"See all videos"))))))}))}}]);
//# sourceMappingURL=component---src-templates-video-tsx-281d454ac9bd0b7e4580.js.map