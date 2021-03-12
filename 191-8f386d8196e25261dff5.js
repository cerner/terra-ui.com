(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1262:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),l=n(967),o=n.n(l),i=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-label-value-view",name:"terra-clinical-label-value-view",version:"3.24.0",url:t})}},1498:function(e,t,n){"use strict";n.r(t),t.default={"label-value-view-content":"LabelValueView-module__label-value-view-content___18QYj",container:"LabelValueView-module__container___dEnZs",icon:"LabelValueView-module__icon___3aHUH",text:"LabelValueView-module__text___39p-z"}},1953:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(1214));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{label:"Label",textValue:"Sample Text as Value"}))};t.default=o},1954:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(4)),l=u(n(1254)),o=u(n(1214)),i=u(n(1498));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(i.default),p=function(){return a.default.createElement("div",null,a.default.createElement(o.default,{label:"Label"},a.default.createElement("div",{className:c("container")},a.default.createElement("div",{className:c("icon")},a.default.createElement(l.default,null)),a.default.createElement("div",{className:c("text")},"Clinical-Item-Display as Value"))))};t.default=p},1955:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(1214)),l=i(n(4)),o=i(n(1498));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(o.default),c=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{label:"Label"},a.default.createElement("div",{className:u("label-value-view-content")},a.default.createElement("h3",null,"Custom H3 for the Value"),a.default.createElement("p",null,"Custom paragraph of text for the Value. Lorem ipsum dolor sit amet, consectetur adipiscing elit."))))};t.default=c},3051:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var a=n(0),r=n.n(a),l=n(331),o=n(1262),i=n(1953),u=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function m(e){var t=e.components,n=p(e,["components"]);return Object(l.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\n\nconst LabelValueViewText = () => (\n  <div>\n    <LabelValueView label=\"Label\" textValue=\"Sample Text as Value\" />\n  </div>\n);\n\nexport default LabelValueViewText;\n\n")))}m.isMDXComponent=!0;var d=n(966),b=n.n(d),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(b.a,{title:t||"Label Value View Text",description:n,example:r.a.createElement(u.a,null),exampleSrc:r.a.createElement(m,null),isExpanded:a})},v=n(1954),x=n.n(v);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w={};function j(e){var t=e.components,n=y(e,["components"]);return Object(l.mdx)("wrapper",O({},w,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport IconCritical from 'terra-icon/lib/icon/IconCritical';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport styles from './LabelValueView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LabelValueViewNode = () => (\n  <div>\n    <LabelValueView label=\"Label\">\n      <div className={cx('container')}>\n        <div className={cx('icon')}>\n          <IconCritical />\n        </div>\n        <div className={cx('text')}>\n          Clinical-Item-Display as Value\n        </div>\n      </div>\n    </LabelValueView>\n  </div>\n);\n\nexport default LabelValueViewNode;\n\n")))}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}j.isMDXComponent=!0;var g={};function L(e){var t=e.components,n=V(e,["components"]);return Object(l.mdx)("wrapper",h({},g,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .label-value-view-content {\n    border: 1px solid #d3d4d5;\n    border-radius: 5px;\n    padding: 0 20px;\n    width: 280px;\n  }\n\n  .container {\n    display: flex;\n    font-size: 1rem;\n    line-height: 1.4285714285714286;\n    max-width: 100%;  // Needed for IE10 truncation\n    overflow: hidden; // VERY IMPORTANT FOR IE10\n  }\n\n  .icon {\n    flex: 0 0 auto;\n    overflow: hidden;\n    padding-right: 0.357142857142857rem;\n  }\n\n  .text {\n    color: #c00;\n    flex: 1 1 auto;\n    font-weight: 700;\n    min-width: 10px; // Need min-width, as IE10 will completely squish display\n  }\n}\n\n")))}L.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(b.a,{title:t||"Label Value View Node",description:n,example:r.a.createElement(x.a,null),exampleCssSrc:r.a.createElement(L,null),exampleSrc:r.a.createElement(j,null),isExpanded:a})},E=n(1955),C=n.n(E);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T={};function D(e){var t=e.components,n=M(e,["components"]);return Object(l.mdx)("wrapper",_({},T,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport classNames from 'classnames/bind';\nimport styles from './LabelValueView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LabelValueViewNodeCustom = () => (\n  <div>\n    <LabelValueView label=\"Label\">\n      <div className={cx('label-value-view-content')}>\n        <h3>Custom H3 for the Value</h3>\n        <p>Custom paragraph of text for the Value. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </LabelValueView>\n  </div>\n);\n\nexport default LabelValueViewNodeCustom;\n\n")))}D.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(b.a,{title:t||"Label Value View Node Custom",description:n,example:r.a.createElement(C.a,null),exampleCssSrc:r.a.createElement(L,null),exampleSrc:r.a.createElement(D,null),isExpanded:a})},S=n(969),X=n.n(S);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R=function(){return Object(l.mdx)(X.a,{rows:[{name:"label",type:function(){var e={};function t(t){var n=t.components,a=k(t,["components"]);return Object(l.mdx)("wrapper",I({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=k(t,["components"]);return Object(l.mdx)("wrapper",I({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The label of the LabelValueView."))}return t.isMDXComponent=!0,t({})}},{name:"textValue",type:function(){var e={};function t(t){var n=t.components,a=k(t,["components"]);return Object(l.mdx)("wrapper",I({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"''",description:function(){var e={};function t(t){var n=t.components,a=k(t,["components"]);return Object(l.mdx)("wrapper",I({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The text to be displayed underneath the label with the provided styling."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,a=k(t,["components"]);return Object(l.mdx)("wrapper",I({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=k(t,["components"]);return Object(l.mdx)("wrapper",I({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Child component(s) to display underneath the label."))}return t.isMDXComponent=!0,t({})}}]})};function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var z={};function B(e){var t=e.components,n=H(e,["components"]);return Object(l.mdx)("wrapper",q({},z,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-clinical-label-value-view"},"Terra Clinical Label Value View"),Object(l.mdx)("p",null,"The label value view component displays a label and the associated value or list of values underneath the label."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-label-value-view"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import LabelValueView from 'terra-clinical-label-value-view';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(f,{title:"Label Value View with a Text Input",mdxType:"LabelValueViewText"}),Object(l.mdx)(N,{title:"Label Value View with a Node Input",mdxType:"LabelValueViewNode"}),Object(l.mdx)(P,{title:"Label Value View with a Node Input (Custom)",mdxType:"LabelValueViewNodeCustom"}),Object(l.mdx)("h2",{id:"label-value-view-props"},"Label Value View Props"),Object(l.mdx)(R,{mdxType:"LabelValueViewPropsTable"}))}B.isMDXComponent=!0}}]);