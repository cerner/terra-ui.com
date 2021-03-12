(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{2961:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));n(0);var a=n(331);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d={};function o(e){var t=e.components,n=r(e,["components"]);return Object(a.mdx)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"v500-upgrade-guide"},"v5.0.0 Upgrade Guide"),Object(a.mdx)("p",null,"This document will provide information on upgrading from Terra Dev Site ",Object(a.mdx)("inlineCode",{parentName:"p"},"^4.x")," to ",Object(a.mdx)("inlineCode",{parentName:"p"},"5.0.0"),"."),Object(a.mdx)("h2",{id:"webpack-config"},"Webpack Config"),Object(a.mdx)("h3",{id:"aggregate-translations"},"Aggregate Translations"),Object(a.mdx)("p",null,"The default locales have been updated to use ",Object(a.mdx)("inlineCode",{parentName:"p"},"terra-aggregate-translations"),"'s default locale list. This list no longer includes Arabic (ar) by default. If your application needs to use Arabic, add it to the list of locales supplied to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"locales")," key in your ",Object(a.mdx)("inlineCode",{parentName:"p"},"terra.i18n.config"),":"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-diff"},"module.exports = {\n-  locales: ['en', 'en-US'],\n+  locales: ['ar', 'en', 'en-US'],\n};\n")),Object(a.mdx)("h2",{id:"wdio-config"},"Wdio Config"),Object(a.mdx)("p",null,"In the Terra Dev site ",Object(a.mdx)("inlineCode",{parentName:"p"},"v5")," the global refresh thats called in the ",Object(a.mdx)("inlineCode",{parentName:"p"},"before")," hook was removed. This refreshed slowed down test times and increased the flakiness of test run against a selenium grid because the current session is killed and a new session is requested. Refresh in tests should be used only when necessary. Some wdio test might need some clean up, but we discouraging fixing any test issues with adding the refresh in yourself."),Object(a.mdx)("p",null,"The most common example would be the following:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre"},"- A test clicks a button. Something happens.\n- Next test, the screenshot breaks for changed button hover style.\n- Solution, move the mouse position after click, i.e. that test should clean itself up.\n")),Object(a.mdx)("h2",{id:"dependency-changes"},"Dependency Changes"),Object(a.mdx)("h3",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"terra-aggregate-translations ",Object(a.mdx)("inlineCode",{parentName:"li"},"v1"))),Object(a.mdx)("h3",{id:"changed"},"Changed"),Object(a.mdx)("p",null,"Reference ",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/blob/main/docs/guides/UpgradeGuide-v4.0.0.md"},"terra-toolkit's v4 upgrade guide")," for changes needed to consume this Terra Dev Site upgrade."),Object(a.mdx)("p",null,"Terra dev site now requires peer dependencies on the following modules:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"mailto:terra-toolkit@5.0.0"},"terra-toolkit@5.0.0")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"mailto:webpack@4.28.1"},"webpack@4.28.1"))),Object(a.mdx)("h3",{id:"removed"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"babel-core"),Object(a.mdx)("li",{parentName:"ul"},"babel-cli"),Object(a.mdx)("li",{parentName:"ul"},"babel-loader"),Object(a.mdx)("li",{parentName:"ul"},"postcss"),Object(a.mdx)("li",{parentName:"ul"},"terra-navigation-layout"),Object(a.mdx)("li",{parentName:"ul"},"xfc")),Object(a.mdx)("h3",{id:"updated"},"Updated"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"terra-toolkit ",Object(a.mdx)("inlineCode",{parentName:"li"},"v4")," -> ",Object(a.mdx)("inlineCode",{parentName:"li"},"v5")),Object(a.mdx)("li",{parentName:"ul"},"terra-application-layout ",Object(a.mdx)("inlineCode",{parentName:"li"},"v4")," -> ",Object(a.mdx)("inlineCode",{parentName:"li"},"v5"))),Object(a.mdx)("h2",{id:"theme-plugin"},"Theme plugin"),Object(a.mdx)("p",null,"This plugin no longer leveraged in our wepback config. Themes can now be aggregated by using terra-toolkit aggregate-themes pre-build script."),Object(a.mdx)("h2",{id:"removed-xfc-provider-initialization"},"Removed XFC Provider Initialization"),Object(a.mdx)("p",null,"The xfc dependency and xfc provider initialization has been removed from terra-dev-site. If you need to initialized a single xfc provider for you site, this can be done through the ",Object(a.mdx)("inlineCode",{parentName:"p"},"sideEffectImports")," in the site.config.js."))}o.isMDXComponent=!0}}]);