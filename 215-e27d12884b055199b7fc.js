(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1154:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(967),c=a.n(o),i=function(e){var t=e.url;return r.a.createElement(c.a,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/webpack-config-terra",name:"@cerner/webpack-config-terra",version:"1.3.1",url:t})}},2975:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));a(0);var n=a(331),r=a(1154);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={};function l(e){var t=e.components,a=c(e,["components"]);return Object(n.mdx)("wrapper",o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)(r.a,{mdxType:"Badge"}),Object(n.mdx)("h1",{id:"terra-themeconfigjs"},"terra-theme.config.js"),Object(n.mdx)("p",null,"The terra-theme.config.js is used to define the theme for a terra-application. It can be used to specify an default theme, and any scoped themes that can be switched to. Scoped themes are not available in Internet Explorer."),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-js"},"const themeConfig = {\n  theme: 'orion-fusion-theme', // The default theme.\n  scoped: ['clinical-lowlight-theme'], // An array of scoped themes.\n};\n\nmodule.exports = themeConfig;\n")),Object(n.mdx)("h2",{id:"options"},"Options"),Object(n.mdx)("h3",{id:"theme-optional"},"Theme (Optional)"),Object(n.mdx)("p",null,"The ",Object(n.mdx)("inlineCode",{parentName:"p"},"theme")," option accepts the string name of a default theme. The default theme will be applied directly to the application."),Object(n.mdx)("h3",{id:"scoped-optional"},"Scoped (Optional)"),Object(n.mdx)("p",null,"The ",Object(n.mdx)("inlineCode",{parentName:"p"},"scoped")," option accepts an array of theme names to include in the application for theme switching."),Object(n.mdx)("h2",{id:"supported-themes"},"Supported Themes"),Object(n.mdx)("p",null,"Terra supports the following themes:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"orion-fusion-theme"),Object(n.mdx)("li",{parentName:"ul"},"clinical-lowlight-theme"),Object(n.mdx)("li",{parentName:"ul"},"terra-default-theme")))}l.isMDXComponent=!0},967:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(2)),o=i(a(4)),c=i(a(968));function i(e){return e&&e.__esModule?e:{default:e}}var l=o.default.bind(c.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,a=e.name,r=e.url,o=e.version,c=n.default.createElement("a",{className:l("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},n.default.createElement("span",{className:l("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:l("badge-version")},"v".concat(o))),i=t?n.default.createElement("a",{className:l("badge"),href:t},n.default.createElement("span",{className:l("badge-name")},"github"),n.default.createElement("span",{className:l("badge-version")},"source")):void 0;return n.default.createElement("div",{className:l("badge-container")},c,i)};s.propTypes=d;var m=s;t.default=m},968:function(e,t,a){"use strict";a.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);