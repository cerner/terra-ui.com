(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{2972:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));n(0);var r=n(331);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function o(e){var t=e.components,n=i(e,["components"]);return Object(r.mdx)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"visual-regression-service"},"Visual Regression Service"),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Visual regression testing for WebdriverIO")),Object(r.mdx)("p",null,"Based on the work of Jan-André Zinser on ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/zinserjan/wdio-visual-regression-service"},"wdio-visual-regression-service")," and ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/zinserjan/wdio-screenshot"},"wdio-screenshot")),Object(r.mdx)("h2",{id:"installation"},"Installation"),Object(r.mdx)("p",null,"The wdio-visual-regression-service should be installed as a dev-dependency:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-sh"},"$ npm install @cerner/terra-functional-testing --save-dev\n")),Object(r.mdx)("h2",{id:"configuration"},"Configuration"),Object(r.mdx)("p",null,"Setup wdio-visual-regression-service by adding ",Object(r.mdx)("inlineCode",{parentName:"p"},"visual-regression")," to the service section of your WebdriverIO config and define your desired comparison strategy in the service options."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\n\nvar path = require('path');\nvar VisualRegressionCompare = require('@cerner/terra-functional-testing/lib/services/wdio-visual-regression-service/compare');\n\nexports.config = {\n  // ...\n  services: [\n    [\n      'visual-regression',\n      {\n        locale: 'en',\n        theme: 'terra-default-theme',\n      }\n    ]\n  ],\n  // ...\n};\n")),Object(r.mdx)("h3",{id:"options"},"Options"),Object(r.mdx)("p",null,"Under the key ",Object(r.mdx)("inlineCode",{parentName:"p"},"visualRegression")," in your wdio.config.js you can pass a configuration object with the following structure:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"locale")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"String")," ( default: 'en' ) ",Object(r.mdx)("br",null),"\nthe locale the test runner is testing against. This is used to categorizes screenshots by locale.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"theme")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"String")," ( default: 'terra-default-theme' ) ",Object(r.mdx)("br",null),"\nthe theme the test runner is testing against. This is used to categorizes screenshots by theme."))),Object(r.mdx)("h3",{id:"compare-methods"},"Compare Methods"),Object(r.mdx)("p",null,"wdio-visual-regression-service allows the usage of different screenshot comparison methods."),Object(r.mdx)("h4",{id:"visualregressioncomparelocalcompare"},"VisualRegressionCompare.LocalCompare"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("em",{parentName:"p"},"LocalCompare")," method captures screenshots on your computer and compares a reference screenshot against the latest (current) screenshots captured in the test run. If a mismatch occurs, a diff screenshot will be outputed. This is the compare method used by the VisualRegressionService."),Object(r.mdx)("p",null,"The screenshot naming pattern is as follows:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"base_directory/test_spec_directory/test_spec_name/__snapshots__/(reference|latest|diff)/theme/locale/browserName_terraViewportName/screenshot.png\n")),Object(r.mdx)("p",null,"You can pass the following options to it's constructor as object:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"locale")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"String")," ( default: 'en' ) ",Object(r.mdx)("br",null),"\nthe locale the test runner is testing against. This is used to categorize screenshots by locale.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"theme")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"String")," ( default: 'terra-default-theme' ) ",Object(r.mdx)("br",null),"\nthe theme the test runner is testing against. This is used to categorize screenshots by theme."))),Object(r.mdx)("p",null,"For an example of generating screenshot filenames dependent on the current test name, have a look at the sample code of ",Object(r.mdx)("a",{parentName:"p",href:"#configuration"},"Configuration"),"."),Object(r.mdx)("h4",{id:"visualregressioncomparesavescreenshot"},"VisualRegressionCompare.SaveScreenshot"),Object(r.mdx)("p",null,"This method is a stripped variant of ",Object(r.mdx)("inlineCode",{parentName:"p"},"VisualRegressionCompare.LocalCompare")," to capture only screenshots. This is quite useful when you just want to create reference screenshots and overwrite the previous one without diffing."),Object(r.mdx)("p",null,"You can pass the following options to it's constructor as object:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("strong",{parentName:"li"},"screenshotName")," ",Object(r.mdx)("inlineCode",{parentName:"li"},"Function")," ",Object(r.mdx)("br",null),"\npass in a function that returns the filename for the current screenshot. Function receives a ",Object(r.mdx)("em",{parentName:"li"},"context")," object as first parameter with all relevant information about the command.")),Object(r.mdx)("h2",{id:"usage"},"Usage"),Object(r.mdx)("p",null,"wdio-visual-regression-service enhances a WebdriverIO instance with the following commands:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"browser.checkElement(elementSelector, {options});"))),Object(r.mdx)("p",null,"All of these provide options that will help you to capture screenshots in different dimensions or to exclude irrelevant parts (e.g. content). The following options are\navailable:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"hide")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"Object[]"),Object(r.mdx)("br",null),"\nhides all elements queried by all kinds of different ",Object(r.mdx)("a",{parentName:"p",href:"http://webdriver.io/guide/usage/selectors.html"},"WebdriverIO selector strategies")," (via ",Object(r.mdx)("inlineCode",{parentName:"p"},"visibility: hidden"),")")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"remove")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"Object[]"),Object(r.mdx)("br",null),"\nremoves all elements queried by all kinds of different ",Object(r.mdx)("a",{parentName:"p",href:"http://webdriver.io/guide/usage/selectors.html"},"WebdriverIO selector strategies")," (via ",Object(r.mdx)("inlineCode",{parentName:"p"},"display: none"),")")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"mismatchTolerance")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"Number")," ",Object(r.mdx)("br",null),"\nOverrides the global ",Object(r.mdx)("em",{parentName:"p"},"mismatchTolerance")," value for this command. Pass in a number between 0 and 100 that defines the degree of mismatch to consider two images as identical.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"ignoreComparison")," ",Object(r.mdx)("inlineCode",{parentName:"p"},"String")," ",Object(r.mdx)("br",null),"\nOverrides the global ",Object(r.mdx)("em",{parentName:"p"},"ignoreComparison")," value for this command. Pass in a string with value of ",Object(r.mdx)("inlineCode",{parentName:"p"},"nothing")," , ",Object(r.mdx)("inlineCode",{parentName:"p"},"colors")," or ",Object(r.mdx)("inlineCode",{parentName:"p"},"antialiasing")," to adjust the comparison method."))))}o.isMDXComponent=!0}}]);