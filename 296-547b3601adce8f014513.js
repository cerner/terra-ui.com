(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),o=p(n(2)),l=n(8),a=p(n(332)),i=p(n(340)),u=p(n(82)),c=p(n(63));function p(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={children:o.default.node,label:o.default.string.isRequired,defaultValue:o.default.oneOfType([o.default.string,o.default.number,o.default.array]),disabled:o.default.bool,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,intl:o.default.shape({formatMessage:o.default.func}).isRequired,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLabelHidden:o.default.bool,isTouchAccessible:o.default.bool,labelAttrs:o.default.object,maxHeight:o.default.number,maxSelectionCount:o.default.number,maxWidth:o.default.string,onChange:o.default.func,placeholder:o.default.string,required:o.default.bool,selectAttrs:o.default.object,selectId:o.default.string.isRequired,showOptional:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number,o.default.array])},f={children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxHeight:void 0,maxSelectionCount:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},b=function(e){var t,n=e.children,o=e.defaultValue,l=e.disabled,u=e.error,c=e.help,p=e.hideRequired,s=e.intl,f=e.isIncomplete,b=e.isInline,x=e.isInvalid,O=e.isLabelHidden,y=e.isTouchAccessible,v=e.label,h=e.labelAttrs,j=e.maxHeight,M=e.maxSelectionCount,g=e.maxWidth,w=e.onChange,S=e.placeholder,D=e.required,X=e.selectAttrs,T=e.selectId,L=e.showOptional,C=e.value,E=m(e,["children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxSelectionCount","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]),F=c;if(void 0!==M&&M>=2){var N=s.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:M});F=c?r.default.createElement("span",null,N," ",c):N}return c&&u&&x?t="".concat(T,"-error ").concat(T,"-help"):(c&&(t="".concat(T,"-help")),u&&x&&(t="".concat(T,"-error"))),r.default.createElement(a.default,d({},E,{label:v,labelAttrs:h,error:u,help:F,hideRequired:p,required:D,showOptional:L,isInvalid:x,isInline:b,isLabelHidden:O,htmlFor:T,maxWidth:g}),r.default.createElement(i.default,d({},X,{ariaLabel:v,"aria-describedby":t,disabled:X.disabled||l,inputId:T,isIncomplete:f,isInvalid:x,isTouchAccessible:y,defaultValue:o,maxHeight:j||X.maxHeight,maxSelectionCount:void 0!==M&&M<2?void 0:M,onChange:w,placeholder:S,required:D,value:C}),n))};b.propTypes=s,b.defaultProps=f,b.Option=c.default,b.OptGroup=u.default;var x=(0,l.injectIntl)(b);t.default=x},2235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1421)),l=i(n(4)),a=i(n(974));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(a.default),c=function(){return r.default.createElement(o.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",className:u("form-select")},r.default.createElement(o.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(o.default.Option,{value:"small",display:"Small"}),r.default.createElement(o.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(o.default.Option,{value:"large",display:"Large"}),r.default.createElement(o.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},2236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1421)),l=i(n(4)),a=i(n(974));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(a.default),c=function(){return r.default.createElement(o.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",required:!0,className:u("form-select")},r.default.createElement(o.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(o.default.Option,{value:"small",display:"Small"}),r.default.createElement(o.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(o.default.Option,{value:"large",display:"Large"}),r.default.createElement(o.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},2237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1421)),l=i(n(4)),a=i(n(974));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(a.default),c=function(){return r.default.createElement(o.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:u("form-select")},r.default.createElement(o.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(o.default.Option,{value:"small",display:"Small"}),r.default.createElement(o.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(o.default.Option,{value:"large",display:"Large"}),r.default.createElement(o.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},3062:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n(0),o=n.n(r),l=n(331),a=n(990),i=n(2235),u=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={};function m(e){var t=e.components,n=p(e,["components"]);return Object(l.mdx)("wrapper",c({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport MultiSelectField from \'terra-form-select/lib/MultiSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}m.isMDXComponent=!0;var s=n(966),f=n.n(s),b=n(975),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Multi Select Field",description:n,example:o.a.createElement(u.a,null),exampleCssSrc:o.a.createElement(b.a,null),exampleSrc:o.a.createElement(m,null),isExpanded:r})},O=n(2236),y=n.n(O);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function M(e){var t=e.components,n=h(e,["components"]);return Object(l.mdx)("wrapper",v({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport MultiSelectField from \'terra-form-select/lib/MultiSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" required className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}M.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Required Multi Select Field",description:n,example:o.a.createElement(y.a,null),exampleCssSrc:o.a.createElement(b.a,null),exampleSrc:o.a.createElement(M,null),isExpanded:r})},w=n(2237),S=n.n(w);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var T={};function L(e){var t=e.components,n=X(e,["components"]);return Object(l.mdx)("wrapper",D({},T,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport MultiSelectField from \'terra-form-select/lib/MultiSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}L.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Incomplete Multi Select Field",description:n,example:o.a.createElement(S.a,null),exampleCssSrc:o.a.createElement(b.a,null),exampleSrc:o.a.createElement(L,null),isExpanded:r})},E=n(969),F=n.n(E);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var I=function(){return Object(l.mdx)(F.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The select options."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The field label."))}return t.isMDXComponent=!0,t({})}},{name:"defaultValue",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"union"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether the input is disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Error message displayed when the select is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Help message to display with the select."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(l.mdx)("em",{parentName:"p"},"(usage note: ",Object(l.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return t.isMDXComponent=!0,t({})}},{name:"isTouchAccessible",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),Object(l.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Additional attributes to spread onto the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxHeight",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The max height of the dropdown."))}return t.isMDXComponent=!0,t({})}},{name:"maxSelectionCount",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The maximum number of options that can be selected. A value less than 2 will be ignored."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Set the max-width of a field using ",Object(l.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(l.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(l.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Placeholder text."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"selectAttrs",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Additional attributes to spread onto the select."))}return t.isMDXComponent=!0,t({})}},{name:"selectId",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"union"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}}]})};function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A={};function z(e){var t=e.components,n=P(e,["components"]);return Object(l.mdx)("wrapper",V({},A,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(a.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-form-multiselect-field"},"Terra Form MultiSelect Field"),Object(l.mdx)("p",null,"A convenience wrapper assembling a ",Object(l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/MultiSelect.jsx"},"terra-form-select MultiSelect")," within a ",Object(l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import MultiSelectField from 'terra-form-select/lib/MultiSelectField';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(x,{title:"MultiSelect Field Example",mdxType:"MultiSelectFieldExample"}),Object(l.mdx)(g,{title:"Required MultiSelect Field Example",mdxType:"RequiredMultiSelectFieldExample"}),Object(l.mdx)(C,{title:"Incomplete MultiSelect Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteMultiSelectFieldExample"}),Object(l.mdx)("h2",{id:"multi-select-field-props"},"Multi Select Field Props"),Object(l.mdx)(I,{mdxType:"MultiSelectFieldPropsTable"}))}z.isMDXComponent=!0}}]);