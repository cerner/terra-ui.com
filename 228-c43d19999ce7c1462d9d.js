(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1157:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(0),n=a.n(l),m=a(967),d=a.n(m),r=function(e){var t=e.url;return n.a.createElement(d.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-avatar",name:"terra-avatar",version:"3.11.0",url:t})}},3226:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));a(0);var l=a(331),n=a(1157);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},m=Object.keys(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r={};function i(e){var t=e.components,a=d(e,["components"]);return Object(l.mdx)("wrapper",m({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"changelog"},"Changelog"),Object(l.mdx)("h2",{id:"unreleased"},"Unreleased"),Object(l.mdx)("h2",{id:"3110---january-5-2021"},"3.11.0 - (January 5, 2021)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed"),Object(l.mdx)("li",{parentName:"ul"},"Fixed broken links in documentation.")),Object(l.mdx)("h2",{id:"3100---december-8-2020"},"3.10.0 - (December 8, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"390---november-17-2020"},"3.9.0 - (November 17, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update wdio tests to remove deprecated Terra.it helpers")))),Object(l.mdx)("h2",{id:"380---august-4-2020"},"3.8.0 - (August 4, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"370---july-29-2020"},"3.7.0 - (July 29, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update changelog formatting")))),Object(l.mdx)("h2",{id:"360---july-7-2020"},"3.6.0 - (July 7, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"350---june-9-2020"},"3.5.0 - (June 9, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),Object(l.mdx)("h2",{id:"340---june-2-2020"},"3.4.0 - (June 2, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated jest snapshots for terra-image change.")))),Object(l.mdx)("h2",{id:"330---may-19-2020"},"3.3.0 - (May 19, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Apply themes by context and directly include packaged themes.")))),Object(l.mdx)("h2",{id:"320---april-28-2020"},"3.2.0 - (April 28, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge'))),Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme wdio screenshots")))),Object(l.mdx)("h2",{id:"310---april-22-2020"},"3.1.0 - (April 22, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated documentation links"),Object(l.mdx)("li",{parentName:"ul"},"Removed extra lines from README")))),Object(l.mdx)("h2",{id:"300---march-31-2020"},"3.0.0 - (March 31, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Breaking Change",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Changed the fallback behavior of Avatar. Such that if the image fails to load, the avatar falls back to the initials display instead of default user icon."),Object(l.mdx)("li",{parentName:"ul"},"To Make all User avatars available in same variant ",Object(l.mdx)("inlineCode",{parentName:"li"},"generic")," subcomponent has been added."),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"generic")," subcomponent replaces the ",Object(l.mdx)("inlineCode",{parentName:"li"},"sharedUser")," subcomponent."),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"generic")," subcomponent contains a ",Object(l.mdx)("inlineCode",{parentName:"li"},"variant")," prop that toggles between ",Object(l.mdx)("inlineCode",{parentName:"li"},"single-user"),", ",Object(l.mdx)("inlineCode",{parentName:"li"},"shared-user"),", and ",Object(l.mdx)("inlineCode",{parentName:"li"},"provider")," user avatar."),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"user")," avatar has been moved into ",Object(l.mdx)("inlineCode",{parentName:"li"},"generic")," sub-comopnent with varaint name ",Object(l.mdx)("inlineCode",{parentName:"li"},"single-user"),".")))),Object(l.mdx)("h2",{id:"2360---march-10-2020"},"2.36.0 - (March 10, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2350---february-25-2020"},"2.35.0 - (February 25, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2340---february-18-2020"},"2.34.0 - (February 18, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme theming files")))),Object(l.mdx)("h2",{id:"2330---february-4-2020"},"2.33.0 - (February 4, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update docs to use MDX syntax")))),Object(l.mdx)("h2",{id:"2320---january-7-2020"},"2.32.0 - (January 7, 2020)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2310---december-3-2019"},"2.31.0 - (December 3, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added orion-fusion-theme and generated the respective reference wdio screenshots."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated snapshots for terra-image change.")))),Object(l.mdx)("h2",{id:"2300---october-30-2019"},"2.30.0 - (October 30, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed lint warnings for multiple empty lines")))),Object(l.mdx)("h2",{id:"2290---october-3-2019"},"2.29.0 - (October 3, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2280---september-26-2019"},"2.28.0 - (September 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2270---september-19-2019"},"2.27.0 - (September 19, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed ",Object(l.mdx)("inlineCode",{parentName:"li"},"details")," tag from doc-site."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Introduce background-clip themeable variable.")))),Object(l.mdx)("h2",{id:"2260---september-6-2019"},"2.26.0 - (September 6, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Props table markdown file import added to doc site page")))),Object(l.mdx)("h2",{id:"2250---august-21-2019"},"2.25.0 - (August 21, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Import for package version from package.json added to doc page"),Object(l.mdx)("li",{parentName:"ul"},"Switch from Object.assign to Object spread syntax."),Object(l.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")))),Object(l.mdx)("h2",{id:"2240---august-14-2019"},"2.24.0 - (August 14, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed issue for avatar to allow non-square images by sending ",Object(l.mdx)("inlineCode",{parentName:"li"},"Fit")," as ",Object(l.mdx)("inlineCode",{parentName:"li"},"cover"),"."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"updated package.json test scripts")))),Object(l.mdx)("h2",{id:"2230---july-30-2019"},"2.23.0 - (July 30, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2220---july-24-2019"},"2.22.0 - (July 24, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2210---july-16-2019"},"2.21.0 - (July 16, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Added",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added documentation on required peerDependencies")))),Object(l.mdx)("h2",{id:"2200----july-11-2019"},"2.20.0  - (July 11, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2190---july-9-2019"},"2.19.0 - (July 9, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update tests to use ",Object(l.mdx)("inlineCode",{parentName:"li"},"Terra.describeViewports")," for setting viewports")))),Object(l.mdx)("h2",{id:"2180---june-28-2019"},"2.18.0 - (June 28, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2170---june-18-2019"},"2.17.0 - (June 18, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed all inline styles from Dev-site components and implemented the same styles using external css.")))),Object(l.mdx)("h2",{id:"2160---june-11-2019"},"2.16.0 - (June 11, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Made required updates to consume terra-toolkit v5 and terra-dev-site v5")))),Object(l.mdx)("h2",{id:"2150---may-1-2019"},"2.15.0 - (May 1, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2140---april-16-2019"},"2.14.0 - (April 16, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2130---april-2-2019"},"2.13.0 - (April 2, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"2120---march-26-2019"},"2.12.0 - (March 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Removed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),Object(l.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),Object(l.mdx)("h2",{id:"2110---march-21-2019"},"2.11.0 - (March 21, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed terra-form-select dependency")))),Object(l.mdx)("h2",{id:"2100---march-6-2019"},"2.10.0 - (March 6, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"290---march-5-2019"},"2.9.0 - (March 5, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fallback icon on invalid image now renders correctly."))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"CSS classes to handle fallback and deceased edge cases.")))),Object(l.mdx)("h2",{id:"280---february-26-2019"},"2.8.0 - (February 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"270---february-12-2019"},"2.7.0 - (February 12, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"260---february-5-2019"},"2.6.0 - (February 5, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"250---january-28-2019"},"2.5.0 - (January 28, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"240---january-26-2019"},"2.4.0 - (January 26, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"230---january-22-2019"},"2.3.0 - (January 22, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"220---january-22-2019"},"2.2.0 - (January 22, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Fixed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Refactor 'netraul' theme var to 'neutral'")))),Object(l.mdx)("h2",{id:"210---january-8-2019"},"2.1.0 - (January 8, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added theme variable change to upgrade guide")))),Object(l.mdx)("h2",{id:"200---january-2-2019"},"2.0.0 - (January 2, 2019)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Breaking Change"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Removed variant prop"),Object(l.mdx)("li",{parentName:"ul"},"Initials prop now only accepts one or two letters"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Split avatar into three functional sub-components - avatar, facility, and shared user."),Object(l.mdx)("li",{parentName:"ul"},"Split theme tests into their own package"),Object(l.mdx)("li",{parentName:"ul"},"Refactor box shadow to after element"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added color variants"),Object(l.mdx)("li",{parentName:"ul"},"Added alt, color, hashValue, isDeceased, isAriaHidden, and size props")))),Object(l.mdx)("h2",{id:"1290---november-19-2018"},"1.29.0 - (November 19, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1280---november-13-2018"},"1.28.0 - (November 13, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1270---november-9-2018"},"1.27.0 - (November 9, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1260---october-30-2018"},"1.26.0 - (October 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Update mixin import to be more explicit")))),Object(l.mdx)("h2",{id:"1250---october-24-2018"},"1.25.0 - (October 24, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1240---october-16-2018"},"1.24.0 - (October 16, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1230---october-8-2018"},"1.23.0 - (October 8, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1220---october-2-2018"},"1.22.0 - (October 2, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1210---september-25-2018"},"1.21.0 - (September 25, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1201---september-6-2018"},"1.20.1 - (September 6, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Patch dependency version bump")))),Object(l.mdx)("h2",{id:"1200---september-5-2018"},"1.20.0 - (September 5, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),Object(l.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),Object(l.mdx)("h2",{id:"1190---september-4-2018"},"1.19.0 - (September 4, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1180---august-29-2018"},"1.18.0 - (August 29, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1170---august-1-2018"},"1.17.0 - (August 1, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1160---july-19-2018"},"1.16.0 - (July 19, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Add .module extension to SCSS file(s)")))),Object(l.mdx)("h2",{id:"1150---july-17-2018"},"1.15.0 - (July 17, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump"),Object(l.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v4 update")))),Object(l.mdx)("h2",{id:"1140---july-10-2018"},"1.14.0 - (July 10, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"1130---june-28-2018"},"1.13.0 - (June 28, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed bug with extra space showing below image avatar"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Added"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Added change log to the documentation on terra-dev-site")))),Object(l.mdx)("h2",{id:"1120---june-22-2018"},"1.12.0 - (June 22, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Moved terra-base from dependency to peerDependency")))),Object(l.mdx)("h2",{id:"1110---june-12-2018"},"1.11.0 - (June 12, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Changed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},'Updated "test:jest" script to work on windows.'))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fixed"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Fixed image flickering when updating ",Object(l.mdx)("inlineCode",{parentName:"li"},"image"),", ",Object(l.mdx)("inlineCode",{parentName:"li"},"alt"),", or ",Object(l.mdx)("inlineCode",{parentName:"li"},"variant")," props")))),Object(l.mdx)("h2",{id:"1100---may-30-2018"},"1.10.0 - (May 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Updated structure to match terra-dev-site 1.0 and moved doc examples internal.")))),Object(l.mdx)("h2",{id:"190---may-23-2018"},"1.9.0 - (May 23, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"180---may-16-2018"},"1.8.0 - (May 16, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"170---may-9-2018"},"1.7.0 - (May 9, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"160---may-2-2018"},"1.6.0 - (May 2, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"150---april-20-2018"},"1.5.0 - (April 20, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"140---april-15-2018"},"1.4.0 - (April 15, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"130---april-5-2018"},"1.3.0 - (April 5, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"120---march-30-2018"},"1.2.0 - (March 30, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),Object(l.mdx)("h2",{id:"110---march-14-2018"},"1.1.0 - (March 14, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Changed",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Exported AvatarVariants constants.")))),Object(l.mdx)("h2",{id:"100---march-6-2018"},"1.0.0 - (March 6, 2018)"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Initial stable release")))}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},m=Object.keys(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)a=m[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}i.isMDXComponent=!0;var b={};function p(e){var t=e.components,a=u(e,["components"]);return Object(l.mdx)("wrapper",c({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(n.a,{mdxType:"Badge"}),Object(l.mdx)(i,{mdxType:"ChangeLog"}))}p.isMDXComponent=!0},967:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(2)),m=r(a(4)),d=r(a(968));function r(e){return e&&e.__esModule?e:{default:e}}var i=m.default.bind(d.default),c={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},u=function(e){var t=e.src,a=e.name,n=e.url,m=e.version,d=l.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(m)},l.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(m))),r=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},d,r)};u.propTypes=c;var b=u;t.default=b},968:function(e,t,a){"use strict";a.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);