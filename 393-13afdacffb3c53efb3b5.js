(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{3159:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));r(0);var o=r(331),n=r(969),a=r.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=function(){return Object(o.mdx)(a.a,{rows:[{name:"children",type:function(){var e={};function t(t){var r=t.components,n=p(t,["components"]);return Object(o.mdx)("wrapper",l({},e,n,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var r=t.components,n=p(t,["components"]);return Object(o.mdx)("wrapper",l({},e,n,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The components to be rendered within the context of the ApplicationLoadingOverlayProvider.\nComponents rendered here are able to interact with ApplicationLoadingOverlayProvider through\nthe ApplicationLoadingOverlayContext."))}return t.isMDXComponent=!0,t({})}},{name:"scrollRefCallback",type:function(){var e={};function t(t){var r=t.components,n=p(t,["components"]);return Object(o.mdx)("wrapper",l({},e,n,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var r=t.components,n=p(t,["components"]);return Object(o.mdx)("wrapper",l({},e,n,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A function to be called with the current ref of the scrollable element rendered within the\nApplicationLoadingOverlayProvider."))}return t.isMDXComponent=!0,t({})}}]})};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c={};function s(e){var t=e.components,r=u(e,["components"]);return Object(o.mdx)("wrapper",d({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"applicationloadingoverlayprovider"},"ApplicationLoadingOverlayProvider"),Object(o.mdx)("p",null,"The ApplicationLoadingOverlayProvider defines a container within which loading overlays may be presented."),Object(o.mdx)("p",null,Object(o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay")," components rendered by children of the ApplicationLoadingOverlayProvider will cause the\nApplicationLoadingOverlayProvider to render a loading overlay on top of those children. A single loading overlay will be rendered,\neven if multiple ApplicationLoadingOverlay components are rendered at the same time."),Object(o.mdx)("p",null,"The style of the overlay will be determined by the ",Object(o.mdx)("inlineCode",{parentName:"p"},"backgroundStyle")," prop specified for each ApplicationLoadingOverlay,\nwith the darkest specified style being honored."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Note: The ApplicationLoadingOverlayProvider has a default height of ",Object(o.mdx)("inlineCode",{parentName:"p"},"100%"),". This allows the overlay to be appropriately\npositioned over the rest of the provider's content. If a different height is desired, a custom class can be provied to\nthe ApplicationOverlayProvider to overwrite the default value.")),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ApplicationLoadingOverlayProvider } from 'terra-application/lib/application-loading-overlay';\n")),Object(o.mdx)("h2",{id:"props"},"Props"),Object(o.mdx)(i,{mdxType:"ApplicationLoadingOverlayProviderProps"}))}s.isMDXComponent=!0},969:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=d(r(2)),l=d(r(4)),p=r(90),i=d(r(970));function d(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var c=l.default.bind(i.default),s={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},_=function(e){var t=e.rows,r=(0,n.useContext)(p.ThemeContext);return n.default.createElement("table",{className:c("table",r.className)},n.default.createElement("thead",null,n.default.createElement("tr",{className:c("tr")},n.default.createElement("th",{className:c("th")},"Prop Name"),n.default.createElement("th",{className:c("th")},"Type"),n.default.createElement("th",{className:c("th")},"Is Required"),n.default.createElement("th",{className:c("th")},"Default Value"),n.default.createElement("th",{className:c("th")},"Description"))),n.default.createElement("tbody",null,t.map((function(e){return n.default.createElement("tr",{className:c("tr","props-tr"),key:e.name},n.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),n.default.createElement("td",{className:c(["td","props-td"])},e.type()),n.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),n.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),n.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};_.propTypes=s;var m=_;t.default=m},970:function(e,t,r){"use strict";r.r(t),t.default={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___3AJGO",a:"PropsTable-module__a___Nl2I_",blockquote:"PropsTable-module__blockquote___1UooW",code:"PropsTable-module__code___2CrUu",dd:"PropsTable-module__dd___-FF1D",dl:"PropsTable-module__dl___xAY9f",dt:"PropsTable-module__dt___3ZdLl",h1:"PropsTable-module__h1___2344J",h2:"PropsTable-module__h2___39ybm",h3:"PropsTable-module__h3___2fnGf",h4:"PropsTable-module__h4___3EKMz",h5:"PropsTable-module__h5___2O9Fr",h6:"PropsTable-module__h6___3yqd6","icon-link":"PropsTable-module__icon-link___3-2wE",anchor:"PropsTable-module__anchor___3FaVY",hr:"PropsTable-module__hr___284T6",img:"PropsTable-module__img___228gq",input:"PropsTable-module__input___37YH2",kbd:"PropsTable-module__kbd___9Qwkj",li:"PropsTable-module__li___2DP3k",p:"PropsTable-module__p___il_ri",ol:"PropsTable-module__ol___31QwV",ul:"PropsTable-module__ul___2emTr",td:"PropsTable-module__td___2UqeU",pre:"PropsTable-module__pre___2B0eh",strong:"PropsTable-module__strong___2t-kf",table:"PropsTable-module__table___1UgXO",th:"PropsTable-module__th___3-CqB",tr:"PropsTable-module__tr___1oPul",icon:"PropsTable-module__icon___2R10q",required:"PropsTable-module__required___r_fIG","props-tr":"PropsTable-module__props-tr___3a95z","props-td":"PropsTable-module__props-td___1xIuD"}}}]);