(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{1448:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));t(0);var r=t(331);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a={};function l(e){var n=e.components,t=c(e,["components"]);return Object(r.mdx)("wrapper",o({},a,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './example.scss';\n\nconst cx = classNames.bind(styles);\n\nconst TagComp = () => (\n  <h1 className={cx('body')}>\n    I am a test\n  </h1>\n);\n\nexport default TagComp;\n\n")))}l.isMDXComponent=!0},2959:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));t(0);var r=t(331),o=t(1448);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l={};function p(e){var n=e.components,t=a(e,["components"]);return Object(r.mdx)("wrapper",c({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"codeblock-loader"},"Codeblock Loader"),Object(r.mdx)("p",null,"The codeblock loader will take the passed in file and return an mdx react component containing a codeblock with the source of the passed in file and a type of the file extension."),Object(r.mdx)("h2",{id:"resource-query"},"Resource query"),Object(r.mdx)("p",null,Object(r.mdx)("inlineCode",{parentName:"p"},"?dev-site-codeblock")),Object(r.mdx)("h2",{id:"example"},"Example"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Codeblock from './example?dev-site-codeblock';\n\n< Codeblock />\n")),Object(r.mdx)("h3",{id:"markdown-output"},"Markdown output"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-md"},"```js\nimport React from 'react';\n\nconst TagComp = () => (\n  <h1>\n    I am a test\n  </h1>\n);\n\nexport default TagComp;\n'''\n")),Object(r.mdx)("h2",{id:"rendered-codeblock"},"Rendered codeblock"),Object(r.mdx)(o.a,{mdxType:"Codeblock"}))}p.isMDXComponent=!0}}]);