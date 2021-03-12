(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{2853:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(0);var r=n(331);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={};function d(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"logger"},"Logger"),Object(r.mdx)("p",null,Object(r.mdx)("inlineCode",{parentName:"p"},"terra-application")," provides an override-able logger to handle error, info, and warning messages."),Object(r.mdx)("h2",{id:"usage"},"Usage"),Object(r.mdx)("p",null,"The logger works like the ",Object(r.mdx)("inlineCode",{parentName:"p"},"console")," for the ",Object(r.mdx)("inlineCode",{parentName:"p"},"warn"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"error"),", and ",Object(r.mdx)("inlineCode",{parentName:"p"},"info")," methods. By default the logger will send the messages to the corresponding console methods. In production, info and warning messages will be suppressed."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"import logger from 'terra-application/lib/utils/logger';\n\nlogger.error('error');\nlogger.warn('warning');\nlogger.info('info');\n")),Object(r.mdx)("h2",{id:"overriding"},"Overriding"),Object(r.mdx)("p",null,"It may be desirable to override the default implementation of the logger. For example, logs could be sent to a server side log aggregator. The logger is a singleton and should only be overridden once per application. To override the logger implementation, use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"initializeLogger")," function and provide a new function for the logger. All loggers must have a method signature of ",Object(r.mdx)("inlineCode",{parentName:"p"},"(obj1 [, obj2, ..., objN])"),", the same as the ",Object(r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/warn"},"console.warn"),", ",Object(r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/error"},"console.error"),", and ",Object(r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/info"},"console.info")," methods."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"import { initializeLogger } from 'terra-application/lib/logger';\n\ninitializeLogger({\n  onInfo: (...args) => console.log('[Info] ', ...args),\n  onWarn: (...args) => console.warn('[Warn] ', ...args),\n  onError: (...args) => console.log('[Error] ', ...args),\n});\n")),Object(r.mdx)("h2",{id:"api"},"API"),Object(r.mdx)("h3",{id:"logger-1"},"Logger"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"method"),Object(r.mdx)("th",{parentName:"tr",align:null},"syntax"),Object(r.mdx)("th",{parentName:"tr",align:null},"Default Behavior"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"error")),Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"Logger.error(obj1 [, obj2, ..., objN])")),Object(r.mdx)("td",{parentName:"tr",align:null},"Logs an error to the console.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"info")),Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"Logger.info(obj1 [, obj2, ..., objN])")),Object(r.mdx)("td",{parentName:"tr",align:null},"Logs an info message to the console in a non production environment.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"warn")),Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"Logger.warn(obj1 [, obj2, ..., objN])")),Object(r.mdx)("td",{parentName:"tr",align:null},"Logs an warning message to the console in a non production environment.")))),Object(r.mdx)("h3",{id:"initializelogger"},"initializeLogger"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Key Name"),Object(r.mdx)("th",{parentName:"tr",align:null},"Type"),Object(r.mdx)("th",{parentName:"tr",align:null},"Is Required"),Object(r.mdx)("th",{parentName:"tr",align:null},"DefaultValue"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"onInfo")),Object(r.mdx)("td",{parentName:"tr",align:null},"function"),Object(r.mdx)("td",{parentName:"tr",align:null},"optional"),Object(r.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(r.mdx)("td",{parentName:"tr",align:null},"The method to override the default info logging method.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"onWarn")),Object(r.mdx)("td",{parentName:"tr",align:null},"function"),Object(r.mdx)("td",{parentName:"tr",align:null},"optional"),Object(r.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(r.mdx)("td",{parentName:"tr",align:null},"The method to override the default warning logging method.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"onError")),Object(r.mdx)("td",{parentName:"tr",align:null},"function"),Object(r.mdx)("td",{parentName:"tr",align:null},"optional"),Object(r.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(r.mdx)("td",{parentName:"tr",align:null},"The method to override the default error logging method.")))))}d.isMDXComponent=!0}}]);