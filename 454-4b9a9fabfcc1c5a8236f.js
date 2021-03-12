(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{2851:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));n(0);var a=n(331);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o={};function l(e){var t=e.components,n=r(e,["components"]);return Object(a.mdx)("wrapper",i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"breakpoints"},"Breakpoints"),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"terra-application")," defines named sizes that correspond to ranges of viewport widths. It also provides a number of utilities\nthat can be used to detect and respond to breakpoint changes."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import breakpoints, { activeBreakpointForSize, isBreakpointActiveForSize } from 'terra-application/lib/breakpoints';\n")),Object(a.mdx)("h3",{id:"breakpoints-1"},Object(a.mdx)("inlineCode",{parentName:"h3"},"breakpoints")),Object(a.mdx)("p",null,"An object containing a mapping of named breakpoint values to their minimum width value."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",{parentName:"tr",align:null},"Breakpoint Name"),Object(a.mdx)("th",{parentName:"tr",align:null},"Minimum Value"),Object(a.mdx)("th",{parentName:"tr",align:null},"Corresponding Media Query"),Object(a.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"tiny")),Object(a.mdx)("td",{parentName:"tr",align:null},"0px"),Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 0px)")),Object(a.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 0px and up")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"small")),Object(a.mdx)("td",{parentName:"tr",align:null},"544px"),Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 544px)")),Object(a.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 544px and up")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"medium")),Object(a.mdx)("td",{parentName:"tr",align:null},"768px"),Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 768px)")),Object(a.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 768px and up")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"large")),Object(a.mdx)("td",{parentName:"tr",align:null},"992px"),Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 992px)")),Object(a.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 992px and up")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"huge")),Object(a.mdx)("td",{parentName:"tr",align:null},"1216px"),Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1216px)")),Object(a.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1216 and up")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"enormous")),Object(a.mdx)("td",{parentName:"tr",align:null},"1440px"),Object(a.mdx)("td",{parentName:"tr",align:null},Object(a.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1440px)")),Object(a.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1440px and up")))),Object(a.mdx)("h3",{id:"activebreakpointforsizewidthvalue"},Object(a.mdx)("inlineCode",{parentName:"h3"},"activeBreakpointForSize(widthValue)")),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"activeBreakpointForSize")," will return the closest active breakpoint that matches the given width value."),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"console.log(activeBreakpointForSize(300));  // 'tiny'\nconsole.log(activeBreakpointForSize(544));  // 'small'\nconsole.log(activeBreakpointForSize(800));  // 'medium'\nconsole.log(activeBreakpointForSize(1000)); // 'large'\nconsole.log(activeBreakpointForSize(1300)); // 'huge'\nconsole.log(activeBreakpointForSize(1500)); // 'enormous'\n")),Object(a.mdx)("h3",{id:"isbreakpointactiveforsizebreakpointname-widthvalue"},Object(a.mdx)("inlineCode",{parentName:"h3"},"isBreakpointActiveForSize(breakpointName, widthValue)")),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"isBreakpointActiveForSize")," will return a boolean value indicating whether or not the given breakpoint name is active for the width value."),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"Note that since the breakpoints are defined as minimum values, a breakpoint will be determined to be active\nif the width value is larger than the defined minimum, even if the width value is included in a higher breakpoint range.")),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"console.log(isBreakpointActiveForSize('tiny', 300));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 544));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 800));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 1000));     // true\n\nconsole.log(isBreakpointActiveForSize('medium', 300));    // false\nconsole.log(isBreakpointActiveForSize('medium', 544));    // false\nconsole.log(isBreakpointActiveForSize('medium', 800));    // true\nconsole.log(isBreakpointActiveForSize('medium', 1500));   // true\n\nconsole.log(isBreakpointActiveForSize('enormous', 300));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 544));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 800));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 1500)); // true\n")),Object(a.mdx)("h3",{id:"media-queries"},"Media Queries"),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"terra-application")," also provides a set of Sass mix-ins that define media queries for the supported breakpoints."),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '~terra-application/lib/breakpoints/media-queries';\n\n.example {\n  color: blue;\n\n  @include terra-mq-small-up {\n    color: red;\n  }\n\n  @include terra-mq-medium-up {\n    color: purple;\n  }\n\n  @include terra-mq-large-up {\n    color: green;\n  }\n\n  @include terra-mq-huge-up {\n    color: yellow;\n  }\n\n  @include terra-mq-enormous-up {\n    color: orange;\n  }\n}\n")))}l.isMDXComponent=!0}}]);