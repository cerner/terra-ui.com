(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{2049:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17)),a=r(n(22)),i=r(n(24)),c=r(n(30)),p=r(n(27)),u=r(n(28)),d=r(n(29)),l=r(n(0)),s=r(n(4)),m=r(n(2)),f=r(n(2050)),b=r(n(1146));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var x=s.default.bind(b.default),O={selectedDate:m.default.node},v=function(e){(0,p.default)(n,e);var t=h(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={date:r.props.selectedDate},r.handleDateChange=r.handleDateChange.bind((0,c.default)(r)),r.handleDateChangeRaw=r.handleDateChangeRaw.bind((0,c.default)(r)),r}return(0,i.default)(n,[{key:"handleDateChange",value:function(e,t){this.setState({date:t})}},{key:"handleDateChangeRaw",value:function(e,t,n){n.isValidValue||this.setState({date:null})}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("p",null,"Selected ISO Date:",l.default.createElement("span",{className:x("date-wrapper")},this.state.date)),l.default.createElement(f.default,(0,o.default)({label:"Enter Date",name:"date-input",datePickerId:"default-field",onChange:this.handleDateChange,onChangeRaw:this.handleDateChangeRaw},this.props)))}}]),n}(l.default.Component);v.propTypes=O,v.defaultProps={selectedDate:""};var y=v;t.default=y},2050:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17)),a=r(n(57)),i=r(n(23)),c=r(n(0)),p=r(n(2)),u=r(n(1162)),d=n(8),l=r(n(219)),s=r(n(1134));function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={datePickerId:p.default.string.isRequired,disabled:p.default.bool,error:p.default.node,errorIcon:p.default.element,excludeDates:p.default.arrayOf(p.default.string),filterDate:p.default.func,help:p.default.node,hideRequired:p.default.bool,includeDates:p.default.arrayOf(p.default.string),inputAttributes:p.default.object,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string}).isRequired,isIncomplete:p.default.bool,isInline:p.default.bool,isInvalid:p.default.bool,isLabelHidden:p.default.bool,label:p.default.node.isRequired,labelAttrs:p.default.object,maxDate:p.default.string,minDate:p.default.string,name:p.default.string.isRequired,onBlur:p.default.func,onChange:p.default.func,onChangeRaw:p.default.func,onClickOutside:p.default.func,onRequestClose:p.default.func,onFocus:p.default.func,onSelect:p.default.func,required:p.default.bool,maxWidth:p.default.string,selectedDate:p.default.string,showOptional:p.default.bool,value:p.default.string},h={disabled:!1,error:null,errorIcon:c.default.createElement(l.default,null),excludeDates:void 0,filterDate:void 0,help:null,hideRequired:!1,includeDates:void 0,inputAttributes:void 0,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxDate:void 0,maxWidth:void 0,minDate:void 0,onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,selectedDate:void 0,showOptional:!1},x=function(e){var t=e.datePickerId,n=e.disabled,r=e.inputAttributes,a=e.error,p=(e.errorIcon,e.excludeDates),d=e.filterDate,l=e.help,m=e.hideRequired,b=e.isIncomplete,h=e.isInvalid,x=e.isInline,O=e.isLabelHidden,v=e.includeDates,y=e.intl,D=e.label,j=e.labelAttrs,w=e.maxDate,g=e.minDate,M=e.maxWidth,C=e.name,X=e.onBlur,T=e.onChange,k=e.onChangeRaw,L=e.onClickOutside,q=e.onRequestClose,P=e.onFocus,I=e.onSelect,N=e.required,R=e.selectedDate,S=e.showOptional,V=e.value,E=(0,i.default)(e,["datePickerId","disabled","inputAttributes","error","errorIcon","excludeDates","filterDate","help","hideRequired","isIncomplete","isInvalid","isInline","isLabelHidden","includeDates","intl","label","labelAttrs","maxDate","minDate","maxWidth","name","onBlur","onChange","onChangeRaw","onClickOutside","onRequestClose","onFocus","onSelect","required","selectedDate","showOptional","value"]),A="".concat(t,"-help");a&&h&&(A="".concat(t,"-error ").concat(t,"-help"));var F=r&&r["aria-describedby"],W=r;A&&(W=f(f({},r),{},{"aria-describedby":F?"".concat(A," ").concat(F):A}));var B=y.formatMessage({id:"Terra.datePicker.dateFormat"}),Y=l?c.default.createElement("div",{"aria-label":"".concat(y.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(B,", ").concat(l)},"(".concat(B,")")," ",l):c.default.createElement("div",{"aria-label":"".concat(y.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(B)},"(".concat(B,")"));return c.default.createElement(u.default,(0,o.default)({},E,{label:D,labelAttrs:j,error:a,help:Y,hideRequired:m,required:N,showOptional:S,isInvalid:h,isInline:x,isLabelHidden:O,htmlFor:t,maxWidth:M}),c.default.createElement(s.default,{disabled:n,id:t,inputAttributes:W,excludeDates:p,filterDate:d,useExternalFormatMask:!0,includeDates:v,isInvalid:h,isIncomplete:b,maxDate:w,minDate:g,ariaLabel:D,name:C,onBlur:X,onChange:T,onChangeRaw:k,onRequestClose:q,onClickOutside:L,onFocus:P,onSelect:I,required:N,selectedDate:R,value:V}))};x.propTypes=b,x.defaultProps=h;var O=(0,d.injectIntl)(x);t.default=O},3114:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var r=n(0),o=n.n(r),a=n(331),i=n(1161),c=n(969),p=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=function(){return Object(a.mdx)(p.a,{rows:[{name:"datePickerId",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The DatePicker identifier. Links the htmlFor of the field to the select identifier."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the date input should be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error message for when the input is invalid. This will only be displayed if isInvalid is true."))}return t.isMDXComponent=!0,t({})}},{name:"errorIcon",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"<IconError />",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error Icon to display when the input is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"excludeDates",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"arrayOf"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "string"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An array of ISO 8601 string representation of the dates to disable in the picker."))}return t.isMDXComponent=!0,t({})}},{name:"filterDate",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A function that gets called for each date in the picker to evaluate which date should be disabled.\nA return value of true will be enabled and false will be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Help element to display with the input."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"includeDates",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"arrayOf"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "string"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"inputAttributes",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Custom input attributes to apply to the date input. Use the name prop to set the name for the input.\nDo not set the name in inputAttribute as it will be ignored."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(a.mdx)("em",{parentName:"p"},"(usage note: ",Object(a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the field is an inline field."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The label of the form control children."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Attributes to attach to the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxDate",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An ISO 8601 string representation of the maximum date that can be selected. The value must be in the ",Object(a.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Must be on or before ",Object(a.mdx)("inlineCode",{parentName:"p"},"12/31/2100"),"."))}return t.isMDXComponent=!0,t({})}},{name:"minDate",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An ISO 8601 string representation of the minimum date that can be selected. The value must be in the ",Object(a.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Must be on or after ",Object(a.mdx)("inlineCode",{parentName:"p"},"01/01/1900")))}return t.isMDXComponent=!0,t({})}},{name:"name",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Name of the date input. The name should be unique."))}return t.isMDXComponent=!0,t({})}},{name:"onBlur",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function triggered when the date picker component loses focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.\nThe first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered."))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function to execute when a valid date is selected or entered.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered."))}return t.isMDXComponent=!0,t({})}},{name:"onChangeRaw",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function to execute when a change is made in the date input.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered."))}return t.isMDXComponent=!0,t({})}},{name:"onClickOutside",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Deprecated"),", A callback function to execute when clicking outside of the picker to dismiss it. Resolves to ",Object(a.mdx)("inlineCode",{parentName:"p"},"onRequestClose"),"."))}return t.isMDXComponent=!0,t({})}},{name:"onRequestClose",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function to execute when picker is dismissed. onRequestClose(event)"))}return t.isMDXComponent=!0,t({})}},{name:"onFocus",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function triggered when the date picker component receives focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function to execute when a date is selected from within the picker."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the date field is required."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Set the max-width of a field using ",Object(a.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"selectedDate",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An ISO 8601 string representation of the initial value to show in the date input.\nThis prop name is derived from react-datepicker but is analogous to value in a form input field."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",u({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The date value. This prop should only be used for a controlled date picker field.\nWhen this prop is set a handler is needed for both the ",Object(a.mdx)("inlineCode",{parentName:"p"},"onChange")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"onChangeRaw")," props to manage the date value.\nIf both ",Object(a.mdx)("inlineCode",{parentName:"p"},"selectedDate")," and this prop are set, then ",Object(a.mdx)("inlineCode",{parentName:"p"},"selectedDate")," will have no effect.\nThe value must be in the ",Object(a.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format or the all-numeric date format based on the locale."))}return t.isMDXComponent=!0,t({})}}]})},s=n(2049),m=n.n(s);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h={};function x(e){var t=e.components,n=b(e,["components"]);return Object(a.mdx)("wrapper",f({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport PropTypes from 'prop-types';\nimport DatePickerField from 'terra-date-picker/lib/DatePickerField';\nimport styles from './DatePickerExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The current DatePicker date if selected. Use for the selected date message.\n   */\n  selectedDate: PropTypes.node,\n};\n\nconst defaultProps = {\n  selectedDate: '',\n};\n\nclass DatePickerExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { date: this.props.selectedDate };\n    this.handleDateChange = this.handleDateChange.bind(this);\n    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);\n  }\n\n  handleDateChange(event, date) {\n    this.setState({ date });\n  }\n\n  handleDateChangeRaw(event, date, metadata) {\n    if (!metadata.isValidValue) {\n      this.setState({ date: null });\n    }\n  }\n\n  render() {\n    return (\n      <div>\n        <p>\n          Selected ISO Date:\n          <span className={cx('date-wrapper')}>{this.state.date}</span>\n        </p>\n        <DatePickerField\n          label=\"Enter Date\"\n          name=\"date-input\"\n          datePickerId=\"default-field\"\n          onChange={this.handleDateChange}\n          onChangeRaw={this.handleDateChangeRaw}\n          {...this.props}\n        />\n      </div>\n    );\n  }\n}\n\nDatePickerExample.propTypes = propTypes;\nDatePickerExample.defaultProps = defaultProps;\n\nexport default DatePickerExample;\n\n")))}x.isMDXComponent=!0;var O=n(966),v=n.n(O),y=n(1147),D=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"Date Picker Field",description:n,example:o.a.createElement(m.a,null),exampleCssSrc:o.a.createElement(y.a,null),exampleSrc:o.a.createElement(x,null),isExpanded:r})};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g={};function M(e){var t=e.components,n=w(e,["components"]);return Object(a.mdx)("wrapper",j({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(i.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-date-picker-field"},"Terra Date Picker Field"),Object(a.mdx)("p",null,Object(a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker"},"terra-date-picker")," component that is wrapped inside a\n",Object(a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field")," component."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-picker"))))),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(D,{title:"Date Picker Field",mdxType:"DatePickerFieldExample"}),Object(a.mdx)("h2",{id:"date-picker-field-props-table"},"Date Picker field props table"),Object(a.mdx)(l,{mdxType:"DatePickerFieldPropsTable"}))}M.isMDXComponent=!0}}]);