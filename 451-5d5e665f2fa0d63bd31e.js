(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{2860:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));n(0);var o=n(331);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={};function p(e){var t=e.components,n=a(e,["components"]);return Object(o.mdx)("wrapper",r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"how-to-use-active-breakpoint"},"How To Use Active Breakpoint"),Object(o.mdx)("p",null,"The active breakpoint value can be determined by using the ",Object(o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/contexts/active-breakpoint-context"},"ActiveBreakpointContext"),". Components that use the ActiveBreakpointContext will be updated whenever the active breakpoint value changes."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';\n\nconst ExampleComponent = () => {\n  const activeBreakpoint = useContext(ActiveBreakpointContext);\n\n  return (\n    <div>\n      <p>This component retrieves and renders the active breakpoint</p>\n      <p>{activeBreakpoint}</p>\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n")),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Note: An ActiveBreakpointContext value is provided by ",Object(o.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-base"},"ApplicationBase"),". The rendering of additional ActiveBreakpointContext providers should be unnecessary is most cases.")))}p.isMDXComponent=!0}}]);