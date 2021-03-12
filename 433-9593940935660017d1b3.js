(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{3235:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return i}));n(0);var t=n(331);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a={};function l(e){var r=e.components,n=c(e,["components"]);return Object(t.mdx)("wrapper",o({},a,n,{components:r,mdxType:"MDXLayout"}),Object(t.mdx)("h1",{id:"custom-property-pseudo-selectors"},"custom-property-pseudo-selectors"),Object(t.mdx)("p",null,"Requires custom properties defined within var functions to include all ancestor pseudo selectors in order."),Object(t.mdx)("p",null,"Identifiers may be placed between selectors, but the selectors must appear in order."),Object(t.mdx)("h2",{id:"options"},"Options"),Object(t.mdx)("p",null,Object(t.mdx)("inlineCode",{parentName:"p"},"boolean"),": ",Object(t.mdx)("inlineCode",{parentName:"p"},"true")),Object(t.mdx)("p",null,"The following patterns are considered violations:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",{parentName:"pre",className:"language-css"},"a:hover {\n  /* Does not contain the hover pseudo selector */\n  color: var(--terra-example-color);\n}\n")),Object(t.mdx)("pre",null,Object(t.mdx)("code",{parentName:"pre",className:"language-css"},"/* Wrong order                               ↓     ↓ */\na:hover:focus { color: var(--terra-example-focus-hover-color); }\n")),Object(t.mdx)("p",null,"The following patterns are ",Object(t.mdx)("em",{parentName:"p"},"not")," considered violations:"),Object(t.mdx)("pre",null,Object(t.mdx)("code",{parentName:"pre",className:"language-css"},"/*                                    ↓ */\na:hover { color: var(--terra-example-hover-color); }\n")),Object(t.mdx)("pre",null,Object(t.mdx)("code",{parentName:"pre",className:"language-css"},".one:hover {\n  .two:focus {\n    /*                               ↓         ↓ */\n    color: var(--terra-example-one-hover-two-focus-color);\n  }\n}\n")))}function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}l.isMDXComponent=!0;var u={};function i(e){var r=e.components,n=s(e,["components"]);return Object(t.mdx)("wrapper",p({},u,n,{components:r,mdxType:"MDXLayout"}),Object(t.mdx)(l,{mdxType:"Readme"}))}i.isMDXComponent=!0}}]);