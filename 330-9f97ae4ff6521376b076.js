(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1294:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var r=a(0),t=a.n(r),o=a(967),s=a.n(o),l=function(e){var n=e.url;return t.a.createElement(s.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-modal-manager",name:"terra-modal-manager",version:"6.50.0",url:n})}},2919:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return c}));a(0);var r=a(331),t=a(1294);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l={};function c(e){var n=e.components,a=s(e,["components"]);return Object(r.mdx)("wrapper",o({},l,a,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)(t.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-modal-manager---upgrade-guide"},"Terra Modal Manager - Upgrade Guide"),Object(r.mdx)("h2",{id:"upgrading-from-v3x-to-v4x"},"Upgrading from v3.x to v4.x"),Object(r.mdx)("p",null,"With the release of terra-disclosure-manager v3.x, the ModalManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. "),Object(r.mdx)("p",null,"The below example code details the changes necessary to interact with terra-modal-manager v4.x."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"/**\n * v3.x to v4.x\n */\n import Base from 'terra-base';\n import ModalManager from 'terra-modal-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Modal\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <ModalManager>\n       <MyComponent />\n     </ModalManager>\n   </Base>\n );\n")))}c.isMDXComponent=!0},967:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=l(a(0)),t=l(a(2)),o=l(a(4)),s=l(a(968));function l(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(s.default),d={name:t.default.string.isRequired,src:t.default.string,url:t.default.string,version:t.default.string.isRequired},i=function(e){var n=e.src,a=e.name,t=e.url,o=e.version,s=r.default.createElement("a",{className:c("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},r.default.createElement("span",{className:c("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(o))),l=n?r.default.createElement("a",{className:c("badge"),href:n},r.default.createElement("span",{className:c("badge-name")},"github"),r.default.createElement("span",{className:c("badge-version")},"source")):void 0;return r.default.createElement("div",{className:c("badge-container")},s,l)};i.propTypes=d;var p=i;n.default=p},968:function(e,n,a){"use strict";a.r(n),n.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);