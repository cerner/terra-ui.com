(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{3153:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));a(0);var n=a(331);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={};function o(e){var t=e.components,a=l(e,["components"]);return Object(n.mdx)("wrapper",r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"terra-aggregate-translations"},"Terra Aggregate Translations"),Object(n.mdx)("p",null,Object(n.mdx)("a",{parentName:"p",href:"https://www.npmjs.org/package/@cerner/terra-aggregate-translations"},Object(n.mdx)("img",{parentName:"a",src:"https://badgen.net/npm/v/terra-aggregate-translations",alt:"NPM version"})),"\n",Object(n.mdx)("a",{parentName:"p",href:"https://travis-ci.com/cerner/terra-toolkit"},Object(n.mdx)("img",{parentName:"a",src:"https://badgen.net/travis/cerner/terra-toolkit",alt:"Build Status"})),"\n",Object(n.mdx)("a",{parentName:"p",href:"https://david-dm.org/cerner/@cerner/terra-aggregate-translations"},Object(n.mdx)("img",{parentName:"a",src:"https://badgen.net/david/dep/cerner/terra-aggregate-translations",alt:"Dependencies status"})),"\n",Object(n.mdx)("a",{parentName:"p",href:"https://david-dm.org/cerner/@cerner/terra-aggregate-translations?type=dev"},Object(n.mdx)("img",{parentName:"a",src:"https://badgen.net/david/dev/cerner/terra-aggregate-translations",alt:"devDependencies status"}))),Object(n.mdx)("h2",{id:"aggregate-translations-tool"},"Aggregate Translations Tool"),Object(n.mdx)("p",null,"This module provides the ",Object(n.mdx)("inlineCode",{parentName:"p"},"aggregate-translations")," pre-build tool to assist with creating the translation and loader files needed for internationalized Terra components to render correctly."),Object(n.mdx)("p",null," The ",Object(n.mdx)("inlineCode",{parentName:"p"},"terra-aggregate-translations")," pre-build tool will aggregate the translations, and create the intl loader and translation loader files that are configured for the specified locales. This tool is offered as a CLI script and as a setup function."),Object(n.mdx)("h2",{id:"how-it-works"},"How It Works"),Object(n.mdx)("p",null,"This script globs the specified translation directory regex pattern(s) to locate the translation directories. Then,\nfor each specified locale, the message-translation pairs from each translation json is extracted and added to the locale's message hash. When all messages have been extracted, the ",Object(n.mdx)("inlineCode",{parentName:"p"},"aggregate-translations")," script will create a single translation javascript file for each locale that exports the ",Object(n.mdx)("inlineCode",{parentName:"p"},"messages")," object, ",Object(n.mdx)("inlineCode",{parentName:"p"},"areTranslationsLoaded")," boolean and ",Object(n.mdx)("inlineCode",{parentName:"p"},"locale")," string. When a translation is missing for a region-specific locale, the message will fallback to the translation defined by the base locale. When a translation file is requested by terra-i18n's ",Object(n.mdx)("inlineCode",{parentName:"p"},"I18nProvider"),", this information is returned and used to provide the locale information."),Object(n.mdx)("p",null,"Once all of the translation files are created for the specified locales, the script will create an intl loader and translation loader that is specific to the specified locales. This is utilized by the by terra-i18n's ",Object(n.mdx)("inlineCode",{parentName:"p"},"I18nLoader")," to load on-demand locale information."),Object(n.mdx)("h2",{id:"translation-format"},"Translation Format"),Object(n.mdx)("p",null,"Translations are expected to be provided in a key / value format in a JSON file. A sample translations file looks like the following:"),Object(n.mdx)("p",null,Object(n.mdx)("inlineCode",{parentName:"p"},"en.json")),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-js"},'{\n  "MyApp.alert.dismiss": "Dismiss",\n  "MyApp.alert.info": "Information.",\n  "MyApp.alert.error": "Error.",\n  "MyApp.alert.warning": "Warning.",\n  "MyApp.alert.alert": "Alert.",\n  "MyApp.alert.advisory": "Advisory.",\n  "MyApp.alert.success": "Success."\n}\n')),Object(n.mdx)("h3",{id:"order-of-operations"},"Order of Operations"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Start with ",Object(n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-aggregate-translations/blob/main/config/defaultSearchPatterns.js"},"default search patterns")),Object(n.mdx)("li",{parentName:"ul"},"Add any ",Object(n.mdx)("inlineCode",{parentName:"li"},"custom directories")," to the list of ",Object(n.mdx)("inlineCode",{parentName:"li"},"default search patterns")," to get an intermediate list of ",Object(n.mdx)("inlineCode",{parentName:"li"},"directories to search")),Object(n.mdx)("li",{parentName:"ul"},"Filter out any directories provided in the ",Object(n.mdx)("inlineCode",{parentName:"li"},"excludes")," option from the intermediate list of ",Object(n.mdx)("inlineCode",{parentName:"li"},"directories to search"))),Object(n.mdx)("h3",{id:"aggregate-translations-options"},Object(n.mdx)("inlineCode",{parentName:"h3"},"aggregate-translations")," Options"),Object(n.mdx)("table",null,Object(n.mdx)("thead",{parentName:"table"},Object(n.mdx)("tr",{parentName:"thead"},Object(n.mdx)("th",{parentName:"tr",align:null},"Option"),Object(n.mdx)("th",{parentName:"tr",align:null},"CLI Option"),Object(n.mdx)("th",{parentName:"tr",align:null},"Type"),Object(n.mdx)("th",{parentName:"tr",align:null},"Description"),Object(n.mdx)("th",{parentName:"tr",align:null},"Default"))),Object(n.mdx)("tbody",{parentName:"table"},Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"baseDir"),Object(n.mdx)("td",{parentName:"tr",align:null},"-b, --baseDir"),Object(n.mdx)("td",{parentName:"tr",align:null},"Path"),Object(n.mdx)("td",{parentName:"tr",align:null},"Directory to search from and to prepend to the output directory."),Object(n.mdx)("td",{parentName:"tr",align:null},"current working directory")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"directories"),Object(n.mdx)("td",{parentName:"tr",align:null},"-d, --directories"),Object(n.mdx)("td",{parentName:"tr",align:null},"Array of Strings"),Object(n.mdx)("td",{parentName:"tr",align:null},"Translation directory regex pattern(s) to glob, in addition to the default search patterns."),Object(n.mdx)("td",{parentName:"tr",align:null},"[ ]")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"excludes"),Object(n.mdx)("td",{parentName:"tr",align:null},"-e, --excludes"),Object(n.mdx)("td",{parentName:"tr",align:null},"Array of Strings"),Object(n.mdx)("td",{parentName:"tr",align:null},"Translation directory regex pattern(s) to glob exclude from the search patterns."),Object(n.mdx)("td",{parentName:"tr",align:null},"[ ]")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"outputFileSystem"),Object(n.mdx)("td",{parentName:"tr",align:null},"N/A"),Object(n.mdx)("td",{parentName:"tr",align:null},"File System Module"),Object(n.mdx)("td",{parentName:"tr",align:null},"The filesystem to use to write the translation and loader files. Note: The file system provide must support ",Object(n.mdx)("inlineCode",{parentName:"td"},"mkdirp"),"."),Object(n.mdx)("td",{parentName:"tr",align:null},Object(n.mdx)("a",{parentName:"td",href:"https://www.npmjs.com/package/fs-extra"},"fs-extra"))),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"locales"),Object(n.mdx)("td",{parentName:"tr",align:null},"-l, --locales"),Object(n.mdx)("td",{parentName:"tr",align:null},"Array of Strings"),Object(n.mdx)("td",{parentName:"tr",align:null},"The list of locale codes to aggregate. ",Object(n.mdx)("strong",{parentName:"td"},"Note: 'en' is always added if not specified.")),Object(n.mdx)("td",{parentName:"tr",align:null},Object(n.mdx)("a",{parentName:"td",href:"https://github.com/cerner/terra-aggregate-translations/blob/main/config/i18nSupportedLocales.js"},"terra-supported locales"))),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"outputDir"),Object(n.mdx)("td",{parentName:"tr",align:null},"-o, --ouputDir"),Object(n.mdx)("td",{parentName:"tr",align:null},"String"),Object(n.mdx)("td",{parentName:"tr",align:null},"Output directory for the translation and loader files"),Object(n.mdx)("td",{parentName:"tr",align:null},"./aggregated-translations")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"configPath"),Object(n.mdx)("td",{parentName:"tr",align:null},"-c, --config"),Object(n.mdx)("td",{parentName:"tr",align:null},"String"),Object(n.mdx)("td",{parentName:"tr",align:null},"The path to the terra i18n configuration file"),Object(n.mdx)("td",{parentName:"tr",align:null},"undefined")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",{parentName:"tr",align:null},"format"),Object(n.mdx)("td",{parentName:"tr",align:null},"-f, --format"),Object(n.mdx)("td",{parentName:"tr",align:null},"String"),Object(n.mdx)("td",{parentName:"tr",align:null},"The format of syntax to output the translations with. Possible values are 'es5' and 'es6'"),Object(n.mdx)("td",{parentName:"tr",align:null},"'es5'")))),Object(n.mdx)("h4",{id:"setup-example"},"Setup Example"),Object(n.mdx)("p",null,"The ",Object(n.mdx)("inlineCode",{parentName:"p"},"aggregate-translations")," setup function can be used as follows:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-js"},"// webpack config file\nconst aggregateTranslations = require('@cerner/terra-aggregate-translations');\n\nconst aggregateOptions = {\n    baseDir: __dirname,\n    excludes: ['./node_modules/packageToExclude'],\n    locales: ['en', 'en-US'],\n    format: 'es6',\n};\n\naggregateTranslations(aggregateOptions);\n\nmodule.exports = // ...webpack config;\n")),Object(n.mdx)("h4",{id:"cli-example"},"CLI Example"),Object(n.mdx)("p",null,"The ",Object(n.mdx)("inlineCode",{parentName:"p"},"aggregate-translations")," CLI is supplied as a bin script, called ",Object(n.mdx)("inlineCode",{parentName:"p"},"tt-aggregate-translations"),", and can be used as follows:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-js"},'scripts: {\n    // ...other scripts\n    "aggregate-translations": "tt-aggregate-translations -l [\'en\',\'es\'] -e ./node_modules/packageToExclude",\n    "start:build": "npm run aggregate-translations && npm run start"\n}\n')),Object(n.mdx)("h4",{id:"terrai18nconfig-example"},"terraI18n.config Example"),Object(n.mdx)("p",null,"Both the setup function and CLI methods allow for the configuration options to be loaded via a config file. The ",Object(n.mdx)("inlineCode",{parentName:"p"},"aggregate-translations")," tool will always attempt to load this config by default. If no config path is provided, the aggregate-translations tool will attempt to load the configuration from ",Object(n.mdx)("inlineCode",{parentName:"p"},"./terraI18n.config.js"),". If this file does not exist, the default configuration is used."),Object(n.mdx)("p",null,"Add a terra-i18n config file like:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  locales: ['en', 'en-US'],\n};\n")),Object(n.mdx)("p",null,"Then, to load the config someplace other than ",Object(n.mdx)("inlineCode",{parentName:"p"},"./terraI18n.config.js"),", simply add the config path as follows:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-js"},'// using setup approach\naggregateTranslations({ configPath: \'./config/terraI18n.config.js\' });\n\n// using CLI approach\n"aggregate-translations": "tt-aggregate-translations -c ./config/terraI18n.config.js",\n')),Object(n.mdx)("h2",{id:"resolving-translations-and-loaders"},"Resolving Translations and Loaders"),Object(n.mdx)("p",null,"To provide the aggregated-translations files and loaders as modules to the terra-i18n component, the translated output directory must be supplied the webpack ",Object(n.mdx)("inlineCode",{parentName:"p"},"resolve.modules")," key before 'node_modules' resolution:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-js"}," resolve: {\n    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],\n },\n")),Object(n.mdx)("p",null,"This ",Object(n.mdx)("inlineCode",{parentName:"p"},"resolve.modules")," configuration indicates module resolving occurs in this order:"),Object(n.mdx)("ol",null,Object(n.mdx)("li",{parentName:"ol"},Object(n.mdx)("inlineCode",{parentName:"li"},"./aggregated_translations")," (or indicated output directory)"),Object(n.mdx)("li",{parentName:"ol"},Object(n.mdx)("inlineCode",{parentName:"li"},"./node_modules"))),Object(n.mdx)("h2",{id:"compiling-with-es6-syntax"},"Compiling with ES6 syntax"),Object(n.mdx)("p",null,"The aggregate-translations script has the ability to compile with ES6 syntax by setting the format prop to 'es6'. To get these to work properly with Jest and the rest of your configuration, you need to add the ",Object(n.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-plugin-syntax-dynamic-import"},"babel-plugin-syntax-dynamic-import")," plugin to your babel configuration. Since we are not using Babel 7 in Terra, you need to use version 6.18.0 to be compatible with our code base."),Object(n.mdx)("h2",{id:"usage-with-railswebpacker"},"Usage with Rails/Webpacker"),Object(n.mdx)("p",null,"If you are using Rails/Webpacker, you can generate the aggregate-translation files and ensure they resolve correctly when running webpack with the following config setup in ",Object(n.mdx)("inlineCode",{parentName:"p"},"app/config/webpack/environment.js")," file."),Object(n.mdx)("pre",null,Object(n.mdx)("code",{parentName:"pre",className:"language-js"},"const { environment } = require('@rails/webpacker')\n\nconst aggregateTranslations = require('@cerner/terra-aggregate-translations');\n\n// generate the 'aggregated-translations' in 'tmp'\naggregateTranslations({\n  format: 'es6',\n  outputDir: 'tmp/aggregated-translations'\n});\n\n// add the 'aggregated-translations' module to the environment\nenvironment.resolvedModules.append('aggregated-translations', 'tmp/aggregated-translations')\n\nmodule.exports = environment\n")),Object(n.mdx)("h2",{id:"license"},"LICENSE"),Object(n.mdx)("p",null,"Copyright 2019 - present Cerner Innovation, Inc."),Object(n.mdx)("p",null,'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at'),Object(n.mdx)("p",null," "," "," "," ",Object(n.mdx)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"http://www.apache.org/licenses/LICENSE-2.0")),Object(n.mdx)("p",null,'Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'))}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}o.isMDXComponent=!0;var c={};function m(e){var t=e.components,a=d(e,["components"]);return Object(n.mdx)("wrapper",s({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)(o,{mdxType:"AggregateTranslationsDoc"}))}m.isMDXComponent=!0}}]);