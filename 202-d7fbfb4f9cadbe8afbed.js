(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1323:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),i=n(967),s=n.n(i),l=function(e){var t=e.url;return r.a.createElement(s.a,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/eslint-config-terra",name:"@cerner/eslint-config-terra",version:"5.0.0",url:t})}},2948:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n(0);var a=n(331),r=n(1323);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={};function c(e){var t=e.components,n=s(e,["components"]);return Object(a.mdx)("wrapper",i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(r.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"eslint-config-terra"},"Eslint Config Terra"),Object(a.mdx)("p",null,"This configuration reflects Terra's supported eslint policy for javascript."),Object(a.mdx)("p",null,"Features:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"extends the  ",Object(a.mdx)("a",{parentName:"li",href:"https://github.com/airbnb/javascript/tree/main/packages/eslint-config-airbnb"},"eslint-config-airbnb"),", which exports ESLint rules, including rules for ECMAScript 6+ and React."),Object(a.mdx)("li",{parentName:"ul"},"checks for proper ReactJS Hooks usage via the ",Object(a.mdx)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-rules.html"},"eslint-plugin-react-hooks"),"."),Object(a.mdx)("li",{parentName:"ul"},"checks syntax for targeted browsers support via the ",Object(a.mdx)("a",{parentName:"li",href:"https://github.com/amilajack/eslint-plugin-compat"},"eslint-plugin-compat"),". It is recommended to use Terra's targeted browsers which are specified by the ",Object(a.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-toolkit/tree/main/packages/browserslist-config-terra"},"browserslist-config-terra")," module."),Object(a.mdx)("li",{parentName:"ul"},"defines the browser and jest environment"),Object(a.mdx)("li",{parentName:"ul"},"defines enzyme globals for ",Object(a.mdx)("inlineCode",{parentName:"li"},"shallow"),", ",Object(a.mdx)("inlineCode",{parentName:"li"},"render")," and ",Object(a.mdx)("inlineCode",{parentName:"li"},"mount")," for jest testing")),Object(a.mdx)("h2",{id:"what-is-eslint"},"What is Eslint"),Object(a.mdx)("p",null,Object(a.mdx)("a",{parentName:"p",href:"https://eslint.org/"},"ESlint")," is a pluggable linting utility for JavaScript and JSX."),Object(a.mdx)("h2",{id:"installation"},"Installation"),Object(a.mdx)("p",null,"Install the module"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install eslint --save-dev\nnpm install @cerner/eslint-config-terra --save-dev\n")),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("p",null,"Include the configuration defined by ",Object(a.mdx)("inlineCode",{parentName:"p"},"@cerner/eslint-config-terra")," via the  ",Object(a.mdx)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring#extending-configuration-files"},"extends")," property."),Object(a.mdx)("p",null,"To lint based on supported browsers, add browserlist config as specified in the ",Object(a.mdx)("a",{parentName:"p",href:"dev_tools/cerner/browserslist-config-terra/upgrade-guide"},"browserlist config upgrade guide"),"."),Object(a.mdx)("h3",{id:"packagejson"},"package.json"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eslintConfig": {\n    "extends": "@cerner/terra"\n  },\n}\n')))}c.isMDXComponent=!0},967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(2)),i=l(n(4)),s=l(n(968));function l(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(s.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},d=function(e){var t=e.src,n=e.name,r=e.url,i=e.version,s=a.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},a.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(i))),l=t?a.default.createElement("a",{className:c("badge"),href:t},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},s,l)};d.propTypes=o;var u=d;t.default=u},968:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);