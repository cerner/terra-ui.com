(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{2979:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));t(0);var a=t(331);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s={};function l(e){var n=e.components,t=o(e,["components"]);return Object(a.mdx)("wrapper",r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"adding-translations-to-components"},"Adding Translations To Components"),Object(a.mdx)("p",null,"When adding translations to a component, we recommend putting the translations in a directory named ",Object(a.mdx)("inlineCode",{parentName:"p"},"translations"),". The aggregate translations tool will look for translations in ",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit/blob/main/packages/terra-aggregate-translations/src/config/defaultSearchPatterns.js"},"the following directories")," by default. The default search pattern will look for translations a maximum of three levels deep."),Object(a.mdx)("p",null,"Here is an example directory setup:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre"},"src/\n  ↳ MyComponent.jsx\ntranslations/\n  ↳ en.json\n  ↳ es.json\n")),Object(a.mdx)("p",null,"Here is an example translation file."),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "myApp.componentName.error": "Error.",\n  "myApp.componentName.warning": "Warning.",\n  "myApp.componentName.success": "Success."\n}\n')),Object(a.mdx)("p",null,"Translations must be included for each locale the app intends to support. At a minimum, apps must include ",Object(a.mdx)("inlineCode",{parentName:"p"},"en")," translations as it is intended to be the fallback locale for terra-application."),Object(a.mdx)("p",null,"Translation keys should be namespaced and unique to prevent translation key collision from other dependencies."))}l.isMDXComponent=!0}}]);