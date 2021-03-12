(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1309:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),l=n(967),o=n.n(l),m=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-spacer",name:"terra-spacer",version:"3.52.0",url:t})}},1535:function(e,t,n){"use strict";n.r(t)},2711:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(44)),l=o(n(333));function o(e){return e&&e.__esModule?e:{default:e}}n(1535);var m=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{className:"spacerdemodefault",paddingTop:"large+4",paddingBottom:"large+4",paddingLeft:"large+4",paddingRight:"large+4",isInlineBlock:!0},a.default.createElement(r.default,{text:"Default"})),a.default.createElement(l.default,{className:"spacerdemoprimary",paddingTop:"large+2",paddingBottom:"large+2",paddingLeft:"large+2",paddingRight:"large+2",isInlineBlock:!0},a.default.createElement(r.default,{text:"Emphasis",variant:"emphasis"})))};t.default=m},2712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(44)),l=o(n(333));function o(e){return e&&e.__esModule?e:{default:e}}n(1535);var m=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{className:"spacerdemoprimary",padding:"large small",margin:"medium large+1",isInlineBlock:!0},a.default.createElement(r.default,{text:"Shorthand"})),a.default.createElement(l.default,{className:"spacerdemodefault",paddingTop:"large",paddingBottom:"large",paddingLeft:"small",paddingRight:"small",marginTop:"medium",marginBottom:"medium",marginLeft:"large+1",marginRight:"large+1",isInlineBlock:!0},a.default.createElement(r.default,{text:"Longhand"})))};t.default=m},3073:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(0),r=n.n(a),l=n(331),o=n(1309),m=n(2711),d=n.n(m);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function s(e){var t=e.components,n=c(e,["components"]);return Object(l.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'terra-spacer/lib/terra-dev-site/doc/example/Spacer.module.scss\';\n\nconst SpacerExample = () => (\n  <div>\n    <Spacer className="spacerdemodefault" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock>\n      <Button text="Default" />\n    </Spacer>\n    <Spacer className="spacerdemoprimary" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock>\n      <Button text="Emphasis" variant="emphasis" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerExample;\n\n')))}s.isMDXComponent=!0;var i=n(966),f=n.n(i);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _={};function x(e){var t=e.components,n=b(e,["components"]);return Object(l.mdx)("wrapper",g({},_,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},".spacerdemodefault {\n  background: rgb(195, 207, 142);\n}\n\n.spacerdemoprimary {\n  background: rgb(100, 207, 142);\n}\n\n")))}x.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"Spacer Example",description:n,example:r.a.createElement(d.a,null),exampleCssSrc:r.a.createElement(x,null),exampleSrc:r.a.createElement(s,null),isExpanded:a})},y=n(2712),j=n.n(y);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={};function S(e){var t=e.components,n=h(e,["components"]);return Object(l.mdx)("wrapper",v({},N,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'terra-spacer/lib/terra-dev-site/doc/example/Spacer.module.scss\';\n\nconst SpacerShortVsLongHandExample = () => (\n  <div>\n    <Spacer className="spacerdemoprimary" padding="large small" margin="medium large+1" isInlineBlock>\n      <Button text="Shorthand" />\n    </Spacer>\n    <Spacer className="spacerdemodefault" paddingTop="large" paddingBottom="large" paddingLeft="small" paddingRight="small" marginTop="medium" marginBottom="medium" marginLeft="large+1" marginRight="large+1" isInlineBlock>\n      <Button text="Longhand" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerShortVsLongHandExample;\n\n')))}S.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"Spacer Short Vs Long Hand Example",description:n,example:r.a.createElement(j.a,null),exampleCssSrc:r.a.createElement(x,null),exampleSrc:r.a.createElement(S,null),isExpanded:a})},T=n(969),w=n.n(T);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=function(){return Object(l.mdx)(w.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Child Nodes."))}return t.isMDXComponent=!0,t({})}},{name:"margin",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets margin in a syntax similar to the standard CSS spec ",Object(l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"},"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"),". One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"marginTop",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"marginBottom",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"marginLeft",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"marginRight",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"padding",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets padding in a syntax similar to the standard CSS spec ",Object(l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"},"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"),". One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"paddingTop",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"paddingBottom",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"paddingLeft",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"paddingRight",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"isInlineBlock",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(l.mdx)("wrapper",M({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets the display to be inline-block."))}return t.isMDXComponent=!0,t({})}}]})};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L={};function k(e){var t=e.components,n=X(e,["components"]);return Object(l.mdx)("wrapper",C({},L,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-spacer"},"Terra Spacer"),Object(l.mdx)("p",null,"This component is used to provide margin and/or padding space between two components based on the given values."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-spacer"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(l.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react"),Object(l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(l.mdx)("h2",{id:"naming-convention"},"Naming Convention"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Spacing scale values"),Object(l.mdx)("th",{parentName:"tr",align:null},"Computed REM Value"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"none"),Object(l.mdx)("td",{parentName:"tr",align:null},"0")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"small-2"),Object(l.mdx)("td",{parentName:"tr",align:null},"0.2142857143rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"small-1"),Object(l.mdx)("td",{parentName:"tr",align:null},"0.3571428571rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"small"),Object(l.mdx)("td",{parentName:"tr",align:null},"0.5rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"medium"),Object(l.mdx)("td",{parentName:"tr",align:null},"0.7142857143rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"large"),Object(l.mdx)("td",{parentName:"tr",align:null},"0.8571428571rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"large+1"),Object(l.mdx)("td",{parentName:"tr",align:null},"1.0714285714rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"large+2"),Object(l.mdx)("td",{parentName:"tr",align:null},"1.4285714286rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"large+3"),Object(l.mdx)("td",{parentName:"tr",align:null},"2.1428571429rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"large+4"),Object(l.mdx)("td",{parentName:"tr",align:null},"3.5714285714rem")))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Spacer from 'terra-spacer';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(O,{title:"Spacer",description:"Spacing default button with a padding value of large+4 and primary button with padding value of large+2",mdxType:"Spacer"}),Object(l.mdx)(E,{title:"Spacer Short Vs Long Hand",mdxType:"SpacerShortVsLongHand"}),Object(l.mdx)("h2",{id:"spacer-props"},"Spacer Props"),Object(l.mdx)(D,{mdxType:"SpacerPropsTable"}))}k.isMDXComponent=!0},966:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=s(n(2)),o=s(n(4)),m=n(90),d=s(n(971)),u=s(n(217)),c=n(21),p=s(n(972));function s(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var o,m=e[Symbol.iterator]();!(a=(o=m.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==m.return||m.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var b=o.default.bind(p.default),_={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},O=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,o=e.description,p=e.isExpanded,s=f((0,r.useState)(p),2),i=s[0],g=s[1],_=f((0,r.useState)(!1),2),y=_[0],j=_[1],v=r.default.useContext(m.ThemeContext),h=void 0!==a,N=function(){j(!y),i&&g(!i)},S=function(){g(!i),y&&j(!y)},E=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:b("template",v.className)},r.default.createElement("div",{className:b("header")},l&&r.default.createElement("h2",{className:b("title")},l)),r.default.createElement("div",{className:b("content")},o&&r.default.createElement("div",{className:b("description")},o),t),r.default.createElement("div",{className:b("footer")},n?r.default.createElement("div",{className:b("button-container")},h&&r.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":y}),onClick:N,onKeyDown:function(e){return E(e,N)},onBlur:x,onMouseDown:O,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:b("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:b("chevron")})),r.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":i}),onClick:S,onKeyDown:function(e){return E(e,S)},onBlur:x,onMouseDown:O,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:b("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:b("chevron")}))):null,r.default.createElement("div",null,y&&r.default.createElement("div",{className:b("css")},a),i&&r.default.createElement("div",{className:b("code")},n))))};y.propTypes=_,y.defaultProps={isExpanded:!1};var j=y;t.default=j},967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),r=m(n(2)),l=m(n(4)),o=m(n(968));function m(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(l))),m=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},o,m)};c.propTypes=u;var p=c;t.default=p},968:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},969:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=u(n(2)),o=u(n(4)),m=n(90),d=u(n(970));function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}var p=o.default.bind(d.default),s={rows:l.default.arrayOf(l.default.shape({name:l.default.string,type:l.default.func,required:l.default.bool,defaultValue:l.default.string,description:l.default.func}))},i=function(e){var t=e.rows,n=(0,r.useContext)(m.ThemeContext);return r.default.createElement("table",{className:p("table",n.className)},r.default.createElement("thead",null,r.default.createElement("tr",{className:p("tr")},r.default.createElement("th",{className:p("th")},"Prop Name"),r.default.createElement("th",{className:p("th")},"Type"),r.default.createElement("th",{className:p("th")},"Is Required"),r.default.createElement("th",{className:p("th")},"Default Value"),r.default.createElement("th",{className:p("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:p("tr","props-tr"),key:e.name},r.default.createElement("td",{className:p(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:p(["td","props-td"])},e.type()),r.default.createElement("td",{className:p(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:p(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:p(["td","props-td"])},e.description()))}))))};i.propTypes=s;var f=i;t.default=f},970:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___3AJGO",a:"PropsTable-module__a___Nl2I_",blockquote:"PropsTable-module__blockquote___1UooW",code:"PropsTable-module__code___2CrUu",dd:"PropsTable-module__dd___-FF1D",dl:"PropsTable-module__dl___xAY9f",dt:"PropsTable-module__dt___3ZdLl",h1:"PropsTable-module__h1___2344J",h2:"PropsTable-module__h2___39ybm",h3:"PropsTable-module__h3___2fnGf",h4:"PropsTable-module__h4___3EKMz",h5:"PropsTable-module__h5___2O9Fr",h6:"PropsTable-module__h6___3yqd6","icon-link":"PropsTable-module__icon-link___3-2wE",anchor:"PropsTable-module__anchor___3FaVY",hr:"PropsTable-module__hr___284T6",img:"PropsTable-module__img___228gq",input:"PropsTable-module__input___37YH2",kbd:"PropsTable-module__kbd___9Qwkj",li:"PropsTable-module__li___2DP3k",p:"PropsTable-module__p___il_ri",ol:"PropsTable-module__ol___31QwV",ul:"PropsTable-module__ul___2emTr",td:"PropsTable-module__td___2UqeU",pre:"PropsTable-module__pre___2B0eh",strong:"PropsTable-module__strong___2t-kf",table:"PropsTable-module__table___1UgXO",th:"PropsTable-module__th___3-CqB",tr:"PropsTable-module__tr___1oPul",icon:"PropsTable-module__icon___2R10q",required:"PropsTable-module__required___r_fIG","props-tr":"PropsTable-module__props-tr___3a95z","props-td":"PropsTable-module__props-td___1xIuD"}},971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(16));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=m;t.default=d},972:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}}}]);