(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),o=s(a(2)),i=s(a(4)),r=s(a(1825)),l=s(a(1826));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=i.default.bind(l.default),f={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},m=function(e){var t,a=e.isAnimated,o=e.isOpen,i=e.children,l=d(e,["isAnimated","isOpen","children"]),s=o?"auto":0;return t=a?n.default.createElement(r.default,{duration:250,height:s,easing:"ease-out"},i):o&&i,n.default.createElement("div",u({},l,{className:c("toggle",l.className),"aria-hidden":!o}),t)};m.propTypes=f,m.defaultProps={isAnimated:!1,isOpen:!1};var p=m;t.default=p},1825:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=u(a(0)),l=u(a(2)),s=u(a(9));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function m(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];if(!a.length)return e;for(var o={},i=Object.keys(e),r=0;r<i.length;r++){var l=i[r];-1===a.indexOf(l)&&(o[l]=e[l])}return o}function p(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function _(e){return!isNaN(parseFloat(e))&&isFinite(e)}function h(e){return"string"==typeof e&&e.search("%")===e.length-1&&_(e.substr(0,e.length-1))}function g(e,t){e&&"function"==typeof e&&e(t)}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.animationFrameIDs=[];var n="auto",i="visible";_(e.height)?(n=e.height<0||"0"===e.height?0:e.height,i="hidden"):h(e.height)&&(n="0%"===e.height?0:e.height,i="hidden"),a.animationStateClasses=o({},c,e.animationStateClasses);var r=a.getStaticStateClasses(n);return a.state={animationStateClasses:r,height:n,overflow:i,shouldUseTransitions:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var a,n,o=this,i=this.props,r=i.delay,l=i.duration,u=i.height,c=i.onAnimationEnd,f=i.onAnimationStart;if(this.contentElement&&u!==e.height){var m;this.showContent(t.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var y=l+r,v=null,T={height:null,overflow:"hidden"},E="auto"===t.height;_(u)?(v=u<0||"0"===u?0:u,T.height=v):h(u)?(v="0%"===u?0:u,T.height=v):(v=b,T.height="auto",T.overflow=null),E&&(T.height=v,v=b);var S=(0,s.default)((d(m={},this.animationStateClasses.animating,!0),d(m,this.animationStateClasses.animatingUp,"auto"===e.height||u<e.height),d(m,this.animationStateClasses.animatingDown,"auto"===u||u>e.height),d(m,this.animationStateClasses.animatingToHeightZero,0===T.height),d(m,this.animationStateClasses.animatingToHeightAuto,"auto"===T.height),d(m,this.animationStateClasses.animatingToHeightSpecific,T.height>0),m)),w=this.getStaticStateClasses(T.height);this.setState({animationStateClasses:S,height:v,overflow:"hidden",shouldUseTransitions:!E}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),E?(T.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(a=function(){o.setState(T),g(f,{newHeight:T.height})},(n=[])[0]=requestAnimationFrame((function(){n[1]=requestAnimationFrame((function(){a()}))})),n),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:w,shouldUseTransitions:!1}),o.hideContent(T.height),g(c,{newHeight:T.height})}),y)):(g(f,{newHeight:v}),this.timeoutID=setTimeout((function(){T.animationStateClasses=w,T.shouldUseTransitions=!1,o.setState(T),"auto"!==u&&o.hideContent(v),g(c,{newHeight:v})}),y))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,s.default)((d(t={},this.animationStateClasses.static,!0),d(t,this.animationStateClasses.staticHeightZero,0===e),d(t,this.animationStateClasses.staticHeightSpecific,e>0),d(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.animateOpacity,i=a.applyInlineTransitions,l=a.children,u=a.className,c=a.contentClassName,p=a.delay,_=a.duration,h=a.easing,g=a.id,b=a.style,y=this.state,v=y.height,T=y.overflow,E=y.animationStateClasses,S=y.shouldUseTransitions,w=o({},b,{height:v,overflow:T||b.overflow});S&&i&&(w.transition="height "+_+"ms "+h+" "+p+"ms",b.transition&&(w.transition=b.transition+", "+w.transition),w.WebkitTransition=w.transition);var P={};n&&(P.transition="opacity "+_+"ms "+h+" "+p+"ms",P.WebkitTransition=P.transition,0===v&&(P.opacity=0));var O=(0,s.default)((d(e={},E,!0),d(e,u,u),e)),C="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return r.default.createElement("div",o({},m.apply(void 0,[this.props].concat(f)),{"aria-hidden":C,className:O,id:g,style:w}),r.default.createElement("div",{className:c,style:P,ref:function(e){return t.contentElement=e}},l))}}]),t}(r.default.Component);b.propTypes={"aria-hidden":l.default.bool,animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,delay:l.default.number,duration:l.default.number,easing:l.default.string,height:function(e,t,a){var o=e[t];return"number"==typeof o&&o>=0||h(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":n(o))+'" is invalid type for '+t+" in "+a+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:l.default.string,onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:c,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=b},1826:function(e,t,a){"use strict";a.r(t),t.default={toggle:"Toggle-module__toggle___2DkvQ"}},966:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(0)),i=f(a(2)),r=f(a(4)),l=a(90),s=f(a(971)),u=f(a(217)),d=a(21),c=f(a(972));function f(e){return e&&e.__esModule?e:{default:e}}function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,o=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(a.push(r.value),!t||a.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var h=r.default.bind(c.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,i=e.title,r=e.description,c=e.isExpanded,f=p((0,o.useState)(c),2),m=f[0],_=f[1],g=p((0,o.useState)(!1),2),v=g[0],T=g[1],E=o.default.useContext(l.ThemeContext),S=void 0!==n,w=function(){T(!v),m&&_(!m)},P=function(){_(!m),v&&T(!v)},O=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",E.className)},o.default.createElement("div",{className:h("header")},i&&o.default.createElement("h2",{className:h("title")},i)),o.default.createElement("div",{className:h("content")},r&&o.default.createElement("div",{className:h("description")},r),t),o.default.createElement("div",{className:h("footer")},a?o.default.createElement("div",{className:h("button-container")},S&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":v}),onClick:w,onKeyDown:function(e){return O(e,w)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":m}),onClick:P,onKeyDown:function(e){return O(e,P)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:h("chevron")}))):null,o.default.createElement("div",null,v&&o.default.createElement("div",{className:h("css")},n),m&&o.default.createElement("div",{className:h("code")},a))))};v.propTypes=g,v.defaultProps={isExpanded:!1};var T=v;t.default=T},967:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(2)),i=l(a(4)),r=l(a(968));function l(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(r.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},d=function(e){var t=e.src,a=e.name,o=e.url,i=e.version,r=n.default.createElement("a",{className:s("badge"),href:o||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},n.default.createElement("span",{className:s("badge-name")},o?"package":"npm"),n.default.createElement("span",{className:s("badge-version")},"v".concat(i))),l=t?n.default.createElement("a",{className:s("badge"),href:t},n.default.createElement("span",{className:s("badge-name")},"github"),n.default.createElement("span",{className:s("badge-version")},"source")):void 0;return n.default.createElement("div",{className:s("badge-container")},r,l)};d.propTypes=u;var c=d;t.default=c},968:function(e,t,a){"use strict";a.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},969:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(0)),i=u(a(2)),r=u(a(4)),l=a(90),s=u(a(970));function u(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}var c=r.default.bind(s.default),f={rows:i.default.arrayOf(i.default.shape({name:i.default.string,type:i.default.func,required:i.default.bool,defaultValue:i.default.string,description:i.default.func}))},m=function(e){var t=e.rows,a=(0,o.useContext)(l.ThemeContext);return o.default.createElement("table",{className:c("table",a.className)},o.default.createElement("thead",null,o.default.createElement("tr",{className:c("tr")},o.default.createElement("th",{className:c("th")},"Prop Name"),o.default.createElement("th",{className:c("th")},"Type"),o.default.createElement("th",{className:c("th")},"Is Required"),o.default.createElement("th",{className:c("th")},"Default Value"),o.default.createElement("th",{className:c("th")},"Description"))),o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{className:c("tr","props-tr"),key:e.name},o.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:c(["td","props-td"])},e.type()),o.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};m.propTypes=f;var p=m;t.default=p},970:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___3AJGO",a:"PropsTable-module__a___Nl2I_",blockquote:"PropsTable-module__blockquote___1UooW",code:"PropsTable-module__code___2CrUu",dd:"PropsTable-module__dd___-FF1D",dl:"PropsTable-module__dl___xAY9f",dt:"PropsTable-module__dt___3ZdLl",h1:"PropsTable-module__h1___2344J",h2:"PropsTable-module__h2___39ybm",h3:"PropsTable-module__h3___2fnGf",h4:"PropsTable-module__h4___3EKMz",h5:"PropsTable-module__h5___2O9Fr",h6:"PropsTable-module__h6___3yqd6","icon-link":"PropsTable-module__icon-link___3-2wE",anchor:"PropsTable-module__anchor___3FaVY",hr:"PropsTable-module__hr___284T6",img:"PropsTable-module__img___228gq",input:"PropsTable-module__input___37YH2",kbd:"PropsTable-module__kbd___9Qwkj",li:"PropsTable-module__li___2DP3k",p:"PropsTable-module__p___il_ri",ol:"PropsTable-module__ol___31QwV",ul:"PropsTable-module__ul___2emTr",td:"PropsTable-module__td___2UqeU",pre:"PropsTable-module__pre___2B0eh",strong:"PropsTable-module__strong___2t-kf",table:"PropsTable-module__table___1UgXO",th:"PropsTable-module__th___3-CqB",tr:"PropsTable-module__tr___1oPul",icon:"PropsTable-module__icon___2R10q",required:"PropsTable-module__required___r_fIG","props-tr":"PropsTable-module__props-tr___3a95z","props-td":"PropsTable-module__props-td___1xIuD"}},971:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),o=i(a(16));function i(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=r({},e);return n.default.createElement(o.default,t,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var s=l;t.default=s},972:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}}}]);