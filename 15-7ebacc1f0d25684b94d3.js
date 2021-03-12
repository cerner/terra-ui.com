(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1272:function(e,t,a){"use strict";(function(e){var n=a(11),r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(23)),o=r(a(17)),u=r(a(22)),s=r(a(24)),l=r(a(30)),d=r(a(27)),h=r(a(28)),p=r(a(29)),c=r(a(0)),f=r(a(2)),y=r(a(9)),m=r(a(4)),v=r(a(6)),b=r(a(127)),g=a(8),D=r(a(986)),k=n(a(21)),M=r(a(1414)),_=r(a(2079));function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,p.default)(e);if(t){var r=(0,p.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,h.default)(this,a)}}var T=m.default.bind(_.default),Y={name:f.default.string.isRequired,dayAttributes:f.default.object,disabled:f.default.bool,displayFormat:f.default.oneOf(["month-day-year","day-month-year"]),intl:f.default.shape({formatMessage:f.default.func,locale:f.default.string}),isIncomplete:f.default.bool,isInvalid:f.default.bool,monthAttributes:f.default.object,onBlur:f.default.func,onChange:f.default.func,onFocus:f.default.func,refCallback:f.default.func,required:f.default.bool,useExternalFormatMask:f.default.bool,value:f.default.string,yearAttributes:f.default.object},E={disabled:!1,monthAttributes:{},dayAttributes:{},yearAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,value:void 0,useExternalFormatMask:!1},F=function(t){(0,d.default)(n,t);var a=C(n);function n(t){var r;(0,u.default)(this,n);var i=(r=a.call(this,t)).props.value;return i&&!M.default.acceptedDateValue(i)&&("production"!==e.env&&console.warn("An invalid date value, ".concat(i,", has been passed to the terra-date-input. ")+"This value has been ignored and will not be rendered. Date values must be in YYYY-MM-DD format."),i=void 0),r.uuid=(0,b.default)(),r.dateInputContainer=c.default.createRef(),r.monthRef=c.default.createRef(),r.handleMonthChange=r.handleMonthChange.bind((0,l.default)(r)),r.handleDayChange=r.handleDayChange.bind((0,l.default)(r)),r.handleYearChange=r.handleYearChange.bind((0,l.default)(r)),r.handleMonthKeyDown=r.handleMonthKeyDown.bind((0,l.default)(r)),r.handleDayKeyDown=r.handleDayKeyDown.bind((0,l.default)(r)),r.handleYearKeyDown=r.handleYearKeyDown.bind((0,l.default)(r)),r.handleFocus=r.handleFocus.bind((0,l.default)(r)),r.handleMonthFocus=r.handleMonthFocus.bind((0,l.default)(r)),r.handleDayFocus=r.handleDayFocus.bind((0,l.default)(r)),r.handleYearFocus=r.handleYearFocus.bind((0,l.default)(r)),r.focusMonth=r.focusMonth.bind((0,l.default)(r)),r.focusDay=r.focusDay.bind((0,l.default)(r)),r.focusYear=r.focusYear.bind((0,l.default)(r)),r.handleMonthBlur=r.handleMonthBlur.bind((0,l.default)(r)),r.handleDayBlur=r.handleDayBlur.bind((0,l.default)(r)),r.handleYearBlur=r.handleYearBlur.bind((0,l.default)(r)),r.formattedRender=r.formattedRender.bind((0,l.default)(r)),r.monthRender=r.monthRender.bind((0,l.default)(r)),r.dayRender=r.dayRender.bind((0,l.default)(r)),r.yearRender=r.yearRender.bind((0,l.default)(r)),r.handleMonthClick=r.handleMonthClick.bind((0,l.default)(r)),r.state={month:M.default.splitMonth(i),day:M.default.splitDay(i),year:M.default.splitYear(i),isFocused:!1,monthIsFocused:!1,dayIsFocused:!1,yearIsFocused:!1,isPlaceholderColored:!0},r}return(0,s.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.setState({month:M.default.splitMonth(this.props.value),day:M.default.splitDay(this.props.value),year:M.default.splitYear(this.props.value)})}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.dateInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleMonthFocus",value:function(e){this.handleFocus(e),this.setState({monthIsFocused:!0})}},{key:"handleDayFocus",value:function(e){this.handleFocus(e),this.setState({dayIsFocused:!0})}},{key:"handleYearFocus",value:function(e){this.handleFocus(e),this.setState({yearIsFocused:!0})}},{key:"handleMonthBlur",value:function(e){this.handleBlur(e,M.default.inputType.MONTH),""===this.state.month&&this.setState({isPlaceholderColored:!0}),this.setState({monthIsFocused:!1})}},{key:"handleDayBlur",value:function(e){this.handleBlur(e,M.default.inputType.DAY),this.setState({dayIsFocused:!1})}},{key:"handleYearBlur",value:function(e){this.handleBlur(e,M.default.inputType.YEAR),this.setState({yearIsFocused:!1})}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===M.default.inputType.DAY){var a=e.target.value;1===a.length&&(a="0".concat(a),this.handleValueChange(e,t,a))}if(this.props.onBlur){var n=e.relatedTarget?e.relatedTarget:document.activeElement;this.dateInputContainer.current.contains(n)||this.props.onBlur(e)}}},{key:"handleMonthKeyDown",value:function(e){var t=M.default.computedDisplayFormat(this.props.displayFormat,this.props.intl.locale);e.keyCode!==k.KEY_BACK_SPACE&&e.keyCode!==k.KEY_DELETE||(this.handleValueChange(e,M.default.inputType.MONTH,""),"day-month-year"===t&&""===e.target.value&&this.focusDay(e)),e.keyCode!==k.KEY_SPACE&&e.keyCode!==k.KEY_UP&&e.keyCode!==k.KEY_DOWN||this.setState({isPlaceholderColored:!1})}},{key:"handleDayKeyDown",value:function(e){var t=this.state.day||"",a=t,n=M.default.computedDisplayFormat(this.props.displayFormat,this.props.intl.locale);e.keyCode!==k.KEY_E&&e.keyCode!==k.KEY_PERIOD&&e.keyCode!==M.default.keyCode.KEY_MINUS&&e.keyCode!==M.default.keyCode.KEY_PLUS?(e.keyCode===k.KEY_UP&&(e.preventDefault(),t=M.default.incrementDay(t)),e.keyCode===k.KEY_DOWN&&(e.preventDefault(),t=M.default.decrementDay(t)),a!==t&&this.handleValueChange(e,M.default.inputType.DAY,t),e.keyCode!==k.KEY_BACK_SPACE&&e.keyCode!==k.KEY_DELETE||"month-day-year"===n&&""===e.target.value&&this.focusMonth(e)):e.preventDefault()}},{key:"handleYearKeyDown",value:function(e){var t=this.state.year||"",a=t,n=M.default.computedDisplayFormat(this.props.displayFormat,this.props.intl.locale);e.keyCode!==k.KEY_E&&e.keyCode!==k.KEY_PERIOD&&e.keyCode!==M.default.keyCode.KEY_MINUS&&e.keyCode!==M.default.keyCode.KEY_PLUS?(e.keyCode===k.KEY_UP&&(e.preventDefault(),t=M.default.incrementYear(t)),e.keyCode===k.KEY_DOWN&&(e.preventDefault(),t=M.default.decrementYear(t)),a!==t&&this.handleValueChange(e,M.default.inputType.YEAR,t),e.keyCode!==k.KEY_BACK_SPACE&&e.keyCode!==k.KEY_DELETE||("month-day-year"===n&&""===e.target.value&&this.focusDay(e),"day-month-year"===n&&""===e.target.value&&this.focusMonth(e))):e.preventDefault()}},{key:"handleMonthChange",value:function(e){if(M.default.validNumericInput(e.target.value)){var t=e.target.value;t===this.state.month||Number(t)>12||this.handleValueChange(e,M.default.inputType.MONTH,t)}}},{key:"handleDayChange",value:function(e){if(M.default.validNumericInput(e.target.value)){var t=e.target.value;t===this.state.day||t.length>2||Number(t)>31||!(2!==t.length||t>0)||this.handleValueChange(e,M.default.inputType.DAY,t)}}},{key:"handleYearChange",value:function(e){if(M.default.validNumericInput(e.target.value)){var t=e.target.value;t.length>5||Number(t)>M.default.MaxYearValue||4===t.length&&Number(t)<M.default.MinYearValue||this.handleValueChange(e,M.default.inputType.YEAR,t)}}},{key:"handleMonthClick",value:function(){this.setState({isPlaceholderColored:!1})}},{key:"handleValueChange",value:function(e,t,a){if(t===M.default.inputType.MONTH?this.setState({month:a}):t===M.default.inputType.DAY?this.setState({day:a}):t===M.default.inputType.YEAR&&this.setState({year:a}),this.props.onChange){var n=t===M.default.inputType.MONTH?a:this.state.month,r=t===M.default.inputType.DAY?a:this.state.day,i=t===M.default.inputType.YEAR?a:this.state.year;if(""===n&&""===r&&""===i)this.handleOnChange(e,"");else{var o="".concat(i,"-").concat(n,"-").concat(r);this.handleOnChange(e,o)}}}},{key:"handleOnChange",value:function(e,t){this.props.onChange&&this.props.onChange(e,t)}},{key:"focusDay",value:function(e){this.dayRef.focus(),e.preventDefault()}},{key:"focusYear",value:function(e){this.yearRef.focus(),e.preventDefault()}},{key:"focusMonth",value:function(e){this.monthRef.current.focus(),e.preventDefault()}},{key:"monthRender",value:function(){var e=T(["month-select-wrapper",{focused:this.state.monthIsFocused},{disabled:this.props.disabled},{error:this.props.isInvalid},{incomplete:this.props.isIncomplete&&this.props.required&&!this.props.isInvalid}]),t=T(["month-select",{"is-placeholder":""===this.state.month&&this.state.isPlaceholderColored},{focused:this.state.monthIsFocused},{disabled:this.props.disabled},{error:this.props.isInvalid},{incomplete:this.props.isIncomplete&&this.props.required&&!this.props.isInvalid}]),a=M.default.getAriaDescriptionId({props:this.props,formatDescriptionId:this.formatDescriptionId,inputAttributes:this.props.monthAttributes});return c.default.createElement("div",{className:e},c.default.createElement("select",(0,o.default)({},this.props.monthAttributes,{"aria-label":this.props.intl.formatMessage({id:"Terra.date.input.monthLabel"}),ref:this.monthRef,className:t,value:this.state.month,name:"terra-date-month-".concat(this.props.name),onChange:this.handleMonthChange,onKeyDown:this.handleMonthKeyDown,onClick:this.handleMonthClick,onFocus:this.handleMonthFocus,onBlur:this.handleMonthBlur,disabled:this.props.disabled,"aria-describedby":a}),c.default.createElement("option",{value:""},this.props.intl.formatMessage({id:"Terra.date.input.monthPlaceholder"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.january"}),value:"01"},this.props.intl.formatMessage({id:"Terra.date.input.january"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.february"}),value:"02"},this.props.intl.formatMessage({id:"Terra.date.input.february"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.march"}),value:"03"},this.props.intl.formatMessage({id:"Terra.date.input.march"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.april"}),value:"04"},this.props.intl.formatMessage({id:"Terra.date.input.april"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.may"}),value:"05"},this.props.intl.formatMessage({id:"Terra.date.input.may"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.june"}),value:"06"},this.props.intl.formatMessage({id:"Terra.date.input.june"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.july"}),value:"07"},this.props.intl.formatMessage({id:"Terra.date.input.july"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.august"}),value:"08"},this.props.intl.formatMessage({id:"Terra.date.input.august"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.september"}),value:"09"},this.props.intl.formatMessage({id:"Terra.date.input.september"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.october"}),value:"10"},this.props.intl.formatMessage({id:"Terra.date.input.october"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.november"}),value:"11"},this.props.intl.formatMessage({id:"Terra.date.input.november"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.december"}),value:"12"},this.props.intl.formatMessage({id:"Terra.date.input.december"}))))}},{key:"dayRender",value:function(){var e=this,t=window.matchMedia("(min--moz-device-pixel-ratio:0)").matches?{type:"text",pattern:"\\d*"}:{type:"number"},a=M.default.getAriaDescriptionId({props:this.props,formatDescriptionId:this.formatDescriptionId,inputAttributes:this.props.dayAttributes});return c.default.createElement(D.default,(0,o.default)({},this.props.dayAttributes,t,{refCallback:function(t){e.dayRef=t},"aria-label":this.props.intl.formatMessage({id:"Terra.date.input.dayLabel"}),className:T("date-input-day",{"is-focused":this.state.dayIsFocused}),value:this.state.day,name:"terra-date-day-".concat(this.props.name),maxLength:"2",onChange:this.handleDayChange,onKeyDown:this.handleDayKeyDown,onFocus:this.handleDayFocus,onBlur:this.handleDayBlur,size:"2",autoComplete:"off",disabled:this.props.disabled,isInvalid:this.props.isInvalid,isIncomplete:this.props.isIncomplete,required:this.props.required,"aria-describedby":a}))}},{key:"yearRender",value:function(){var e=this,t=window.matchMedia("(min--moz-device-pixel-ratio:0)").matches?{type:"text",pattern:"\\d*"}:{type:"number"},a=M.default.getAriaDescriptionId({props:this.props,formatDescriptionId:this.formatDescriptionId,inputAttributes:this.props.yearAttributes});return c.default.createElement(D.default,(0,o.default)({},this.props.yearAttributes,t,{refCallback:function(t){e.yearRef=t},"aria-label":this.props.intl.formatMessage({id:"Terra.date.input.yearLabel"}),className:T("date-input-year",{"is-focused":this.state.yearIsFocused}),value:this.state.year,name:"terra-date-year-".concat(this.props.name),maxLength:"4",onChange:this.handleYearChange,onKeyDown:this.handleYearKeyDown,onFocus:this.handleYearFocus,onBlur:this.handleYearBlur,size:"4",autoComplete:"off",disabled:this.props.disabled,isInvalid:this.props.isInvalid,isIncomplete:this.props.isIncomplete,required:this.props.required,"aria-describedby":a}))}},{key:"formattedRender",value:function(){var e=c.default.createElement(c.default.Fragment,null,this.monthRender(),this.dayRender(),this.yearRender()),t=c.default.createElement(c.default.Fragment,null,this.dayRender(),this.monthRender(),this.yearRender());return"month-day-year"===M.default.computedDisplayFormat(this.props.displayFormat,this.props.intl.locale)?e:t}},{key:"render",value:function(){var e=this,t=this.props,a=t.disabled,n=(t.displayFormat,t.dayAttributes,t.monthAttributes,t.yearAttributes,t.intl),r=(t.isInvalid,t.isIncomplete,t.onBlur,t.onChange,t.onFocus,t.refCallback),u=(t.required,t.name),s=t.useExternalFormatMask,l=(t.value,(0,i.default)(t,["disabled","displayFormat","dayAttributes","monthAttributes","yearAttributes","intl","isInvalid","isIncomplete","onBlur","onChange","onFocus","refCallback","required","name","useExternalFormatMask","value"])),d=this.state,h=d.month,p=d.day,f=d.year,m=this.context,v=(0,y.default)(T({disabled:a},"date-input",{"is-focused":this.state.isFocused},m.className),l.className),b="";(h.length>0||p.length>0||f.length>0)&&(b="".concat(f,"-").concat(h,"-").concat(p)),this.formatDescriptionId="terra-date-input-description-format-".concat(this.uuid);var g=M.default.getDateFormat(this.props);return c.default.createElement("div",(0,o.default)({},l,{className:v,ref:function(t){e.dateInputContainer.current=t,r&&r(t)}}),c.default.createElement("input",{type:"hidden",name:u,value:b}),this.formattedRender(),!1===s&&c.default.createElement("div",{id:this.formatDescriptionId,className:T("format-text"),"aria-label":"".concat(n.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(g)},g))}}]),n}(c.default.Component);F.propTypes=Y,F.defaultProps=E,F.contextType=v.default;var I=(0,g.injectIntl)(F);t.default=I}).call(this,a(1413))},1413:function(e,t){var a,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(a===setTimeout)return setTimeout(e,0);if((a===i||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:i}catch(e){a=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,l=[],d=!1,h=-1;function p(){d&&s&&(d=!1,s.length?l=s.concat(l):h=-1,l.length&&c())}function c(){if(!d){var e=u(p);d=!0;for(var t=l.length;t;){for(s=l,l=[];++h<t;)s&&s[h].run();h=-1,t=l.length}s=null,d=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function y(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new f(e,t)),1!==l.length||d||u(c)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=y,r.addListener=y,r.once=y,r.off=y,r.removeListener=y,r.removeAllListeners=y,r.emit=y,r.prependListener=y,r.prependOnceListener=y,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},1414:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(22)),i=n(a(24)),o=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,null,[{key:"validNumericInput",value:function(e){return 0===e.length||/^\d+$/.test(e)}},{key:"incrementDay",value:function(e){if(""===e)return"01";if(e){var t=Number(e);return 31===t?"01":t<31?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return null}},{key:"decrementDay",value:function(e){if(""===e)return"31";if(e){var t=Number(e);return t<2?"31":t>1?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return null}},{key:"incrementYear",value:function(t){if(""===t)return e.MinYearValue.toString();if(t){var a=Number(t);return a===e.MaxYearValue?e.MinYearValue.toString():a>=e.MinYearValue&&a<e.MaxYearValue?(a+=1).toString():t}return null}},{key:"decrementYear",value:function(t){if(""===t)return e.MaxYearValue.toString();if(t){var a=Number(t);return a===e.MinYearValue?e.MaxYearValue.toString():a>e.MinYearValue?(a-=1).toString():t}return null}},{key:"splitMonth",value:function(e){if("string"==typeof e){var t=e.split("-");if(t[1]&&2===t[1].length){var a=Number(t[1]);if(a>=1&&a<13)return t[1]}return""}return""}},{key:"splitDay",value:function(e){if("string"==typeof e){var t=e.split("-");if(t[2]){var a=Number(t[2]);if(a>=1&&a<32)return t[2];if("0"===t[2])return t[2];if("00"===t[2])return t[2]}return""}return""}},{key:"splitYear",value:function(e){if("string"==typeof e){var t=e.split("-");return t.length&&!Number.isNaN(parseFloat(t[0]))?t[0]:""}return""}},{key:"acceptedDateValue",value:function(e){return/^([0-9][0-9][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(e)}},{key:"computedDisplayFormat",value:function(e,t){return"month-day-year"===e?"month-day-year":"day-month-year"===e?"day-month-year":"en"===t||"en-US"===t?"month-day-year":"day-month-year"}},{key:"getDateFormat",value:function(t){return"month-day-year"===e.computedDisplayFormat(t.displayFormat,t.intl.locale)?"(".concat(t.intl.formatMessage({id:"Terra.date.input.monthLabel"})," ").concat(t.intl.formatMessage({id:"Terra.date.input.dayFormatLabel"})," ").concat(t.intl.formatMessage({id:"Terra.date.input.yearFormatLabel"}),")"):"(".concat(t.intl.formatMessage({id:"Terra.date.input.dayFormatLabel"})," ").concat(t.intl.formatMessage({id:"Terra.date.input.monthLabel"})," ").concat(t.intl.formatMessage({id:"Terra.date.input.yearFormatLabel"}),")")}},{key:"getAriaDescriptionId",value:function(e){var t=e.props,a=e.formatDescriptionId,n=e.inputAttributes;return!1===t.useExternalFormatMask?n&&n["aria-describedby"]?"".concat(a," ").concat(n["aria-describedby"]):a:n&&n["aria-describedby"]?n["aria-describedby"]:void 0}}]),e}();o.inputType={YEAR:0,MONTH:1,DAY:2},o.MinYearValue=1900,o.MaxYearValue=2100,o.keyCode={KEY_PLUS:187,KEY_MINUS:189};var u=o;t.default=u},2079:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"DateInput-module__orion-fusion-theme___3lGB8","date-input":"DateInput-module__date-input___3J_Fu","month-select-wrapper":"DateInput-module__month-select-wrapper___2Fxpk",focused:"DateInput-module__focused___2H7Fl",disabled:"DateInput-module__disabled___1givs",error:"DateInput-module__error___1I9aW",incomplete:"DateInput-module__incomplete___3Rkuc","month-select":"DateInput-module__month-select___30abL","is-placeholder":"DateInput-module__is-placeholder___3rWMi","date-input-day":"DateInput-module__date-input-day___1CD_b","date-input-year":"DateInput-module__date-input-year___175Qc","format-text":"DateInput-module__format-text___1Tbyv"}}}]);