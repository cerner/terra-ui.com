(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(967),l=n.n(o),u=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-paginator",name:"terra-paginator",version:"2.70.0",url:t})}},1186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(0)),a=f(n(2)),o=f(n(9)),l=f(n(4)),u=f(n(6)),i=f(n(44)),s=f(n(49)),d=n(8),c=f(n(2629));function f(e){return e&&e.__esModule?e:{default:e}}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(c.default),b={children:a.default.node,footer:a.default.node.isRequired,header:a.default.node.isRequired,intl:a.default.shape({formatMessage:a.default.func}).isRequired,onClose:a.default.func},y=function(e){var t=e.children,n=e.footer,a=e.header,l=e.intl,d=e.onClose,c=m(e,["children","footer","header","intl","onClose"]),f=r.default.useContext(u.default),b=(0,o.default)(p("dialog",f.className),c.className),y=d?r.default.createElement("div",{className:p("dialog-header-close")},r.default.createElement(i.default,{variant:"utility",text:l.formatMessage({id:"Terra.dialog.close"}),onClick:d,isIconOnly:!0,icon:r.default.createElement("span",{className:p("close-icon")})})):null,h=r.default.createElement("div",{className:p("dialog-header")},r.default.createElement("div",{className:p("dialog-header-title")},a),y);return r.default.createElement("div",_({},c,{className:b}),r.default.createElement(s.default,{fill:!0,header:h,footer:r.default.createElement("div",{className:p("dialog-footer")},n)},r.default.createElement("div",{className:p("dialog-body")},t)))};y.propTypes=b,y.defaultProps={onClose:null,children:null};var h=(0,d.injectIntl)(y);t.default=h},1297:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"Paginator-module__orion-fusion-theme___1yTwL",paginator:"Paginator-module__paginator___3ClLR","nav-link":"Paginator-module__nav-link___9UVYu","is-focused":"Paginator-module__is-focused___9xXlJ","is-active":"Paginator-module__is-active___HUjzf","is-selected":"Paginator-module__is-selected___2csbz","is-disabled":"Paginator-module__is-disabled___30x9U",previous:"Paginator-module__previous___KH_BC","icon-only":"Paginator-module__icon-only___34l6Y",next:"Paginator-module__next___2KEAQ","left-controls":"Paginator-module__left-controls___hzjp1","right-controls":"Paginator-module__right-controls___2KA-a",pageless:"Paginator-module__pageless___12qdr",progressive:"Paginator-module__progressive___X_qEH",icon:"Paginator-module__icon___2IDNK"}},1357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pageSet=t.calculatePages=void 0;t.calculatePages=function(e,t){return t?Math.ceil(e/t):e};t.pageSet=function(e,t){var n=[],r=e;if(r<1?r=1:r>t&&(r=t),r<7)for(var a=t<10?t:10,o=1;o<=a;o+=1)n.push(o);else if(r<=t&&r>t-10&&r>t-5)for(var l=t;l>t-10&&l>0;l-=1)n.push(l);else{for(var u=r;u>=r-5;u-=1)n.push(u);for(var i=r+1;i<=r+4;i+=1)n.push(i)}return n.sort((function(e,t){return e-t}))}},1358:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=s(n(2)),l=s(n(4)),u=c(n(21)),i=s(n(1297));function s(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=l.default.bind(i.default),p={ariaCurrent:o.default.bool,ariaDisabled:o.default.bool,ariaLabel:o.default.string,children:o.default.node,className:o.default.string,disabled:o.default.bool,onClick:o.default.func,tabIndex:o.default.string},b=function(e,t,n){n.nativeEvent.keyCode===u.KEY_TAB&&t(!0),n.nativeEvent.keyCode!==u.KEY_SPACE&&n.nativeEvent.keyCode!==u.KEY_RETURN||("keydown"===n.type?(e(!0),t(!1)):(e(!1),t(!0)))},y=function(e){document.activeElement!==e.currentTarget&&e.currentTarget.focus(),e.preventDefault()};function h(e){var t=f((0,a.useState)(!1),2),n=t[0],r=t[1],o=f((0,a.useState)(!1),2),l=o[0],u=o[1],i=l?"is-focused":void 0,s=n?"is-active":void 0,d=e.ariaCurrent,c=e.ariaDisabled,_=e.ariaLabel,p=e.children,h=e.className,v=e.disabled,g=e.onClick,E=e.tabIndex;return(0,a.useEffect)((function(){r(!1)}),[v]),a.default.createElement("button",{"aria-current":d,"aria-disabled":c,"aria-label":_,className:m([s,i,h]),disabled:v,onBlur:function(){return function(e,t){e(!1),t(!1)}(r,u)},onClick:g,onKeyDown:function(e){return b(r,u,e)},onKeyUp:function(e){return b(r,u,e)},onMouseDown:y,tabIndex:E,type:"button"},p)}h.propTypes=p;var v=h;t.default=v},2629:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"Dialog-module__orion-fusion-theme___2al1n",dialog:"Dialog-module__dialog___kyCYr","dialog-header":"Dialog-module__dialog-header___2fYBD","dialog-header-title":"Dialog-module__dialog-header-title___208vn","dialog-header-close":"Dialog-module__dialog-header-close___3JR8A","close-icon":"Dialog-module__close-icon___odHCh","dialog-body":"Dialog-module__dialog-body___285wi","dialog-footer":"Dialog-module__dialog-footer___1xig4"}},966:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=_();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=f(n(2)),l=f(n(4)),u=n(90),i=f(n(971)),s=f(n(217)),d=n(21),c=f(n(972));function f(e){return e&&e.__esModule?e:{default:e}}function _(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _=function(){return e},e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=l.default.bind(c.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,l=e.description,c=e.isExpanded,f=m((0,a.useState)(c),2),_=f[0],p=f[1],y=m((0,a.useState)(!1),2),g=y[0],E=y[1],P=a.default.useContext(u.ThemeContext),w=void 0!==r,O=function(){E(!g),_&&p(!_)},T=function(){p(!_),g&&E(!g)},j=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:b("template",P.className)},a.default.createElement("div",{className:b("header")},o&&a.default.createElement("h2",{className:b("title")},o)),a.default.createElement("div",{className:b("content")},l&&a.default.createElement("div",{className:b("description")},l),t),a.default.createElement("div",{className:b("footer")},n?a.default.createElement("div",{className:b("button-container")},w&&a.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":g}),onClick:O,onKeyDown:function(e){return j(e,O)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(i.default,{className:b("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(s.default,{className:b("chevron")})),a.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(i.default,{className:b("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(s.default,{className:b("chevron")}))):null,a.default.createElement("div",null,g&&a.default.createElement("div",{className:b("css")},r),_&&a.default.createElement("div",{className:b("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var E=g;t.default=E},967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),o=u(n(4)),l=u(n(968));function u(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),s={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},d=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,l=r.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(o))),u=t?r.default.createElement("a",{className:i("badge"),href:t},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},l,u)};d.propTypes=s;var c=d;t.default=c},968:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},969:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=s(n(2)),l=s(n(4)),u=n(90),i=s(n(970));function s(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}var c=l.default.bind(i.default),f={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},_=function(e){var t=e.rows,n=(0,a.useContext)(u.ThemeContext);return a.default.createElement("table",{className:c("table",n.className)},a.default.createElement("thead",null,a.default.createElement("tr",{className:c("tr")},a.default.createElement("th",{className:c("th")},"Prop Name"),a.default.createElement("th",{className:c("th")},"Type"),a.default.createElement("th",{className:c("th")},"Is Required"),a.default.createElement("th",{className:c("th")},"Default Value"),a.default.createElement("th",{className:c("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:c("tr","props-tr"),key:e.name},a.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:c(["td","props-td"])},e.type()),a.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};_.propTypes=f;var m=_;t.default=m},970:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___3AJGO",a:"PropsTable-module__a___Nl2I_",blockquote:"PropsTable-module__blockquote___1UooW",code:"PropsTable-module__code___2CrUu",dd:"PropsTable-module__dd___-FF1D",dl:"PropsTable-module__dl___xAY9f",dt:"PropsTable-module__dt___3ZdLl",h1:"PropsTable-module__h1___2344J",h2:"PropsTable-module__h2___39ybm",h3:"PropsTable-module__h3___2fnGf",h4:"PropsTable-module__h4___3EKMz",h5:"PropsTable-module__h5___2O9Fr",h6:"PropsTable-module__h6___3yqd6","icon-link":"PropsTable-module__icon-link___3-2wE",anchor:"PropsTable-module__anchor___3FaVY",hr:"PropsTable-module__hr___284T6",img:"PropsTable-module__img___228gq",input:"PropsTable-module__input___37YH2",kbd:"PropsTable-module__kbd___9Qwkj",li:"PropsTable-module__li___2DP3k",p:"PropsTable-module__p___il_ri",ol:"PropsTable-module__ol___31QwV",ul:"PropsTable-module__ul___2emTr",td:"PropsTable-module__td___2UqeU",pre:"PropsTable-module__pre___2B0eh",strong:"PropsTable-module__strong___2t-kf",table:"PropsTable-module__table___1UgXO",th:"PropsTable-module__th___3-CqB",tr:"PropsTable-module__tr___1oPul",icon:"PropsTable-module__icon___2R10q",required:"PropsTable-module__required___r_fIG","props-tr":"PropsTable-module__props-tr___3a95z","props-td":"PropsTable-module__props-td___1xIuD"}},971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(16));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},972:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},996:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var a=s(n(0)),o=s(n(2)),l=s(n(126)),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(161));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var b={children:o.default.node,onChange:o.default.func,onResize:o.default.func,tiny:o.default.element,small:o.default.element,medium:o.default.element,large:o.default.element,huge:o.default.element,enormous:o.default.element,responsiveTo:o.default.oneOf(["window","parent"])},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(i,e);var t,n,r,o=f(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this)).state={element:null},e.setContainer=e.setContainer.bind(m(e)),e.handleResize=e.handleResize.bind(m(e)),e.handleWindowResize=e.handleWindowResize.bind(m(e)),e.animationFrameID=null,e}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new l.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,a=t.tiny,o=t.small,l=t.medium,i=t.large,s=t.huge,d=t.enormous;r&&r(e);var c,f=(0,u.activeBreakpointForSize)(e);n&&f!==this.breakpoint&&n(f),this.breakpoint=f,(a||o||l||i||s||d)&&(c=e>=u.default.enormous&&d?"enormous":e>=u.default.huge&&s?"huge":e>=u.default.large&&i?"large":e>=u.default.medium&&l?"medium":e>=u.default.small&&o?"small":"tiny",this.state.element!==c&&this.setState({element:c}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:a.default.createElement(a.default.Fragment,null,"parent"===n&&!this.container&&a.default.createElement("div",{ref:this.setContainer}),t)}}])&&d(t.prototype,n),r&&d(t,r),i}(a.default.Component);y.propTypes=b,y.defaultProps={responsiveTo:"parent"};var h=y;t.default=h}}]);