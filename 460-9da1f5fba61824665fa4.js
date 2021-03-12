(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{3212:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));t(0);var o=t(331);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r={};function s(e){var n=e.components,t=a(e,["components"]);return Object(o.mdx)("wrapper",i({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"const startCase = require('lodash.startcase');\nconst fs = require('fs');\nconst path = require('path');\nconst navConfig = require('./navigation.config');\n\nconst npmPackage = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')));\n\nconst siteConfig = {\n  /* The navigation configuration. */\n  navConfig,\n\n  /* The path to the pages configuration. If this is enabled, the `generatePages` configuration will not be used. */\n  pagesConfig: undefined,\n\n  /** These options are used to find the pages to serve via terra-dev-site. If 'pagesConfig' is provided, this\n   * configuration is not used.\n   * The file extensions pulled in are 'md' extensions and any extension defined in the resolve extensions set in the webpack config.\n   *   The search pattern key options:\n   *      root: where the search pattern starts.\n   *      entryPoint: added to the search pattern and is where the of the directory structure\n   *           for menu navigation will begin.\n   *      dist: (option) the directory containing transpiled code to use if hot reloading is enabled and is in prod.\n   *      source: (option) the directory containing source code to use if hot reloading is enabled and not in prod mode.\n   */\n  generatePages: {\n    searchPatterns: [\n      {\n        root: process.cwd(),\n        source: 'src',\n        dist: 'lib',\n        entryPoint: 'terra-dev-site',\n      },\n    ],\n  },\n\n  /** Whether or not hot reloading section should be enabled. This applies to the search searchPatterns\n   * and mono-repo package aliasing. This is enabled by default for dev builds.\n   */\n  hotReloading: true,\n\n  /** The root-level npm package.json file. Change this if you have a non-standard package.json path.\n   * Defaults to the <root_dir>/package.json\n   */\n  npmPackage,\n\n  /* The list of side effect js files. */\n  sideEffectImports: [],\n\n  /* Path to the image to display as page placeholder when a component does not render. */\n  placeholderSrc: path.join(__dirname, '..', '..', 'terra.png'),\n\n  /* The README content to display on the home page. Set to undefined to opt out. */\n  readMeContent: path.resolve(process.cwd(), 'README.md'),\n\n  appConfig: {\n    /* The title the site header should display. */\n    title: startCase(npmPackage.name), // maps to appTitle\n\n    /* Path to the favicon for the site. */\n    favicon: path.join(__dirname, '..', '..', 'terra-favicon', '32px', 'favicon.ico'),\n\n    /** The themes to supply the ThemeProvider which allows the site to switch\n      * between themes. Providing multiple enables the theme utility to display\n      * in the header's toolbar.\n      */\n    themes: {\n      'Default Theme': '',\n    },\n\n    /** The default theme of the site. Note, this value should be a key that was\n     * supplied to the themes object. The open-sourced theme is the default theme.\n     */\n    defaultTheme: 'Default Theme',\n\n    /** The locales to supply Base with, which allows the site to switch\n     * between locales. Defaulted to the supported locals list in terra-18n.\n     *\n     * NOTE: This configuration has been deprecated as of terra-dev-site 6.23.0\n     * locales: i18nSupportedLocales,\n     */\n\n    /* The default locale of the site. 'en' is the default theme. */\n    defaultLocale: 'en',\n\n    /* The default direction of the site. 'ltr' is the default direction. */\n    defaultDirection: 'ltr',\n\n    /** This section allows you to set custom extensions.\n     * Extensions will be launched in a modal manager. All fields are required.\n     *  Add like:\n     *  extensions: [\n     * {\n     *     iconPath: 'terra-icon/lib/icon/IconSend',\n     *     key: 'terra-dev-site.search',\n     *     text: 'text',\n     *     componentPath: '../path/to/component',\n     *     size: 'small',\n     *   },\n     * ],\n     */\n    extensions: [],\n\n    /** This section allows you to inject arbitrary html into the head tag of index.html.\n     *  It takes an array of strings. You could load the string from an external file if desired.\n     *  Add like:\n     *  headHtml:[\n     *    '<script> console.log(\"Terra Dev Site!\") <\/script>',\n     *  ],\n     */\n    headHtml: [],\n\n  },\n\n  /* The default for whether or not test evidence should be included. 'true' is the default value. */\n  includeTestEvidence: true,\n};\n\nmodule.exports = siteConfig;\n\n")))}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}s.isMDXComponent=!0;var d={};function h(e){var n=e.components,t=c(e,["components"]);return Object(o.mdx)("wrapper",l({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"site-config"},"Site Config"),Object(o.mdx)("p",null,"Site config is the main config for the terra-dev-site. Depending on your repo setup, site config may not be needed. If it is, it must be located in the dev-site-config folder. The site config below is for documentation purposes and may require modifications before use."),Object(o.mdx)("p",null,Object(o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-dev-site/blob/main/config/site/site.config.js"},"Default site config")),Object(o.mdx)(s,{mdxType:"Config"}))}h.isMDXComponent=!0}}]);