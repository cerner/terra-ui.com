(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),l=u(n(16));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0A14.94 14.94 0 009.1 14.9a15.52 15.52 0 001.5 6.5 14.69 14.69 0 004.1 5.1 12.06 12.06 0 014.3 6.7 2.19 2.19 0 00-1.1 1.8v7.8a2.11 2.11 0 002.1 2.1h1a3 3 0 106 0h.9a2.11 2.11 0 002.1-2.1V35a2.06 2.06 0 00-1.1-1.8 12.4 12.4 0 014.1-6.6 16.23 16.23 0 004.4-5.3 14.43 14.43 0 001.5-6.5A14.92 14.92 0 0024 0zm7 24.4a15.76 15.76 0 00-3.9 5 11.75 11.75 0 00-1.2 3.6h-.2V20h2a1.54 1.54 0 001.5-1.5 1.56 1.56 0 00-1.6-1.5h-7a1.5 1.5 0 000 3h2v13h-.5a13.86 13.86 0 00-1.2-3.6 14.67 14.67 0 00-4.5-5.4h.1a12 12 0 01-4.3-9.1A11.78 11.78 0 0124 3a11.93 11.93 0 0111.9 11.9 12 12 0 01-4.9 9.5z"}))};o.displayName="IconLightbulb",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},1381:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(48)),r=a(n(0)),o=l(n(2)),i=l(n(4)),c=n(227),s=l(n(94)),f=n(225),d=n(90),m=l(n(1776)),p=l(n(1482)),v=l(n(1483)),h=l(n(1777)),E=l(n(1778)),_=l(n(1782)),y=i.default.bind(_.default),g=function(e){var t=e.pageName,n=(0,r.useState)(!1),a=(0,u.default)(n,2),l=a[0],o=a[1],i=(0,r.useContext)(c.ActiveBreakpointContext),_=(0,r.useContext)(f.ApplicationIntlContext),g=r.default.useContext(d.ThemeContext),b=(0,r.useState)(!1),w=(0,u.default)(b,2),x=w[0],P=w[1];if((0,r.useEffect)((function(){if(!l){var e=setTimeout((function(){o(!0)}),window.TEST_APP_TIMEOUT);return function(){clearTimeout(e)}}}),[l]),!l)return r.default.createElement(s.default,{isOpen:!0,backgroundStyle:"clear"});if(x)throw new Error("".concat(t," threw an error to test the application's error handling"));return r.default.createElement("div",{className:y("page-content",g.className)},r.default.createElement("h1",null,t),r.default.createElement("h3",null,"Configuration Properties"),r.default.createElement("p",null,"Active Breakpoint:"," ",r.default.createElement("span",null,i)),r.default.createElement("p",null,"Intl Locale:"," ",r.default.createElement("span",null,_.locale)),r.default.createElement("h3",null,"Error Handling"),r.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework"),r.default.createElement("button",{type:"button",onClick:function(){P(!0)}},"Throw Error"),r.default.createElement(m.default,null),r.default.createElement(h.default,null),r.default.createElement(p.default,null),r.default.createElement(v.default,null),r.default.createElement("h3",null,"Theming"),r.default.createElement("p",null,"The div below uses the theme context to apply styling for theme: ".concat(g.name,".")),r.default.createElement("div",{className:y("themed-block")}),r.default.createElement(E.default,null))};g.propTypes={pageName:o.default.string};var b=g;t.default=b},1482:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=t.default=void 0;var u=l(n(48)),r=a(n(0)),o=l(n(2)),i=l(n(4)),c=l(n(164)),s=n(227),f=l(n(94)),d=l(n(166)),m=n(225),p=n(96),v=l(n(1483)),h=l(n(1774)),E=i.default.bind(h.default),_=function(e){var t=e.name,n=e.onSubmit,a=(0,r.useContext)(s.ActiveBreakpointContext),l=(0,r.useContext)(m.ApplicationIntlContext),o=(0,r.useContext)(p.DisclosureManagerContext),i=(0,r.useState)(!1),h=(0,u.default)(i,2),_=h[0],y=h[1],g=(0,r.useState)(!1),b=(0,u.default)(g,2),w=b[0],x=b[1],P=(0,r.useState)(!1),C=(0,u.default)(P,2),T=C[0],k=C[1],O=(0,r.useRef)();if((0,r.useEffect)((function(){if(!w){var e=setTimeout((function(){x(!0)}),2e3);return clearTimeout(O.current),function(){clearTimeout(e)}}}),[w]),!w)return r.default.createElement(r.default.Fragment,null,r.default.createElement(p.DisclosureManagerHeaderAdapter,{title:t}),r.default.createElement(f.default,{isOpen:!0,backgroundStyle:"clear"}));if(_)throw new Error("Modal Page failed to render");return r.default.createElement(r.default.Fragment,null,r.default.createElement(p.DisclosureManagerHeaderAdapter,{title:t}),r.default.createElement(c.default,null,r.default.createElement("div",{className:E("modal-content")},r.default.createElement("h2",null,t),r.default.createElement("h3",null,"Modal Dismissal"),r.default.createElement("p",null,"This modal will close when the Esc key is pressed, the Close button is pressed, or if the disclosee dismisses it when the Done button is pressed."),r.default.createElement("button",{type:"button",onClick:function(){o.registerDismissCheck((function(){return Promise.resolve()})),n()}},"Done"),r.default.createElement("h3",null,"Configuration Properties"),r.default.createElement("p",null,"Active Breakpoint:"," ",r.default.createElement("span",null,a)),r.default.createElement("p",null,"Intl Locale:"," ",r.default.createElement("span",null,l.locale)),r.default.createElement("h3",null,"Error Handling"),r.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework."),r.default.createElement("button",{type:"button",onClick:function(){y(!0)}},"Throw Error"),r.default.createElement("h3",null,"Status View"),r.default.createElement("p",null,"This component uses the ApplicationStatusOverlay to present a status view over itself and within the modal. The status view in this demo is shown for 2 seconds."),r.default.createElement("p",null,r.default.createElement("button",{disabled:T,type:"button",onClick:function(){k(!0),O.current=setTimeout((function(){k(!1)}),2e3)}},"Show Status View")),T&&r.default.createElement(d.default,{message:"This is a demo status view",variant:"no-data"}),r.default.createElement(v.default,null))))};t.ModalContent=_,_.propTypes={name:o.default.string,onSubmit:o.default.func};var y=function(){var e=(0,r.useContext)(p.DisclosureManagerContext),t=(0,r.useRef)();return r.default.createElement("div",null,r.default.createElement("h3",null,"Modal Presenter"),r.default.createElement("p",null,"This component uses the DisclosureManagerContext to present a modal."),r.default.createElement("button",{type:"button",onClick:function(){e.disclose({preferredType:"modal",size:"large",content:{key:"modal_component_demo",component:r.default.createElement(_,{name:"Modal Component Demo",onSubmit:function(){t.current&&(t.current(),t.current=void 0)}})}}).then((function(e){var n=e.dismissDisclosure;t.current=n}))}},"Show Modal"))};t.default=y},1483:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(48)),r=a(n(0)),o=l(n(4)),i=l(n(95)),c=l(n(1773)),s=o.default.bind(c.default),f=function(){var e=(0,r.useState)(!1),t=(0,u.default)(e,2),n=t[0],a=t[1],l=(0,r.useState)(!1),o=(0,u.default)(l,2),c=o[0],f=o[1];return r.default.createElement("div",null,r.default.createElement("h3",null,"Unsaved Changes"),r.default.createElement("p",null,"This component uses a NavigationPrompt to register unsaved state with framework. Multiple NavigationPrompts can be rendered at the same time."),r.default.createElement("p",{className:n?s("red-text"):null},"Pending Action 1:"," ",r.default.createElement("button",{type:"button",onClick:function(){a(!n)}},n?"Disable":"Activate")),r.default.createElement("p",{className:c?s("red-text"):null},"Pending Action 2:"," ",r.default.createElement("button",{type:"button",onClick:function(){f(!c)}},c?"Disable":"Activate")),n?r.default.createElement(i.default,{description:"Pending Action 1"}):void 0,c?r.default.createElement(i.default,{description:"Pending Action 2"}):void 0)};t.default=f},1770:function(e,t,n){"use strict";var a=n(5),l=n(11);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(0)),r=a(n(1771)),o=n(225),i=a(n(371)),c=n(90),s=a(n(1772));window.TEST_APP_TIMEOUT=1e3;var f=function(){var e=(0,u.useContext)(o.ApplicationIntlContext),t=u.default.useContext(c.ThemeContext);return u.default.createElement(r.default,{locale:e.locale,themeName:t.className},u.default.createElement(i.default,null,u.default.createElement(s.default,null)))};t.default=f},1771:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=a(n(362))},1772:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(48)),r=l(n(11)),o=a(n(0)),i=l(n(1232)),c=l(n(356)),s=n(96),f=n(1482),d=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(n(1775))}))})),m=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(n(1783))}))})),p=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(n(1784))}))})),v={name:"Demo User",initials:"DU"},h=function(){var e,t=(0,o.useContext)(s.DisclosureManagerContext),n=(0,o.useState)("page_1"),a=(0,u.default)(n,2),l=a[0],r=a[1],h=(0,o.useState)(!1),E=(0,u.default)(h,2),_=E[0],y=E[1],g=(0,o.useRef)(),b=(0,o.useRef)([{key:"page_1",text:"Page 1"},{key:"page_2",text:"Page 2"},{key:"page_3",text:"Page 3"}]);if(_)return o.default.createElement("div",null,o.default.createElement("p",null,"Logged Out"),o.default.createElement("button",{type:"button",onClick:function(){y(!1)}},"Reset"));switch(l){case"page_1":e=o.default.createElement(d,null);break;case"page_2":e=o.default.createElement(m,null);break;case"page_3":e=o.default.createElement(p,null);break;default:e=null}return o.default.createElement(c.default,{titleConfig:{title:"Terra Application Demo"},userConfig:v,navigationItems:b.current,activeNavigationItemKey:l,onSelectNavigationItem:function(e){r(e)},extensionItems:[{key:"extension_1",icon:o.default.createElement(i.default,null),text:"Extension 1"}],onSelectExtensionItem:function(e){"extension_1"===e&&t.disclose({preferredType:"modal",size:"large",content:{key:"extension_1_modal",component:o.default.createElement(f.ModalContent,{name:"Extension Modal",onSubmit:function(){g.current&&(g.current(),g.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;g.current=t}))},utilityItems:[{key:"utility_1",text:"Utility Item 1"}],onSelectUtilityItem:function(e){"utility_1"===e&&t.disclose({preferredType:"modal",size:"large",content:{key:"utility_1_modal",component:o.default.createElement(f.ModalContent,{name:"Utility Modal",onSubmit:function(){g.current&&(g.current(),g.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;g.current=t}))},onSelectLogout:function(){y(!0)}},e)};t.default=h},1773:function(e,t,n){"use strict";n.r(t),t.default={"red-text":"PendingActionToggle-module__red-text___2pxxe"}},1774:function(e,t,n){"use strict";n.r(t),t.default={"modal-content":"ModalPresenter-module__modal-content___2wpC_"}},1775:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),u=a(n(1381)),r=function(){return l.default.createElement(u.default,{pageName:"Page 1",pageKey:"page_1"})};t.default=r},1776:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(48)),r=a(n(0)),o=l(n(94)),i=function(){var e=(0,r.useState)(!1),t=(0,u.default)(e,2),n=t[0],a=t[1],l=(0,r.useRef)();return(0,r.useEffect)((function(){return function(){window.clearTimeout(l.current)}}),[]),r.default.createElement("div",null,r.default.createElement("h3",null,"Loading Overlay Presenter"),r.default.createElement("p",null,"This component uses the ApplicationLoadingOverlay to present a loading overlay over itself. The overlay in this demo is shown for 2 seconds."),r.default.createElement("p",null,r.default.createElement("button",{disabled:n,type:"button",onClick:function(){a(!0),l.current=setTimeout((function(){a(!1)}),2e3)}},"Show Loading Overlay")),r.default.createElement(o.default,{isOpen:n,backgroundStyle:"light"}))};t.default=i},1777:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(48)),r=a(n(0)),o=l(n(166)),i=function(){var e=(0,r.useState)(!1),t=(0,u.default)(e,2),n=t[0],a=t[1],l=(0,r.useRef)();return(0,r.useEffect)((function(){window.clearTimeout(l.current)}),[]),r.default.createElement("div",null,r.default.createElement("h3",null,"Status View Presenter"),r.default.createElement("p",null,"This component uses the ApplicationStatusOverlay to present a status view over itself. The status view in this demo is shown for 2 seconds."),r.default.createElement("p",null,r.default.createElement("button",{disabled:n,type:"button",onClick:function(){a(!0),l.current=setTimeout((function(){a(!1)}),2e3)}},"Show Status View")),n&&r.default.createElement(o.default,{message:"This is a demo status view",variant:"no-data"}))};t.default=i},1778:function(e,t,n){"use strict";var a=n(11),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(48)),r=a(n(0)),o=l(n(1779)),i=function(){var e=(0,r.useState)(0),t=(0,u.default)(e,2),n=t[0],a=t[1];return(0,r.useEffect)((function(){var e=function(){a((function(e){return e+1}))};return o.default.on("increment-counter",e),function(){o.default.off("increment-counter",e)}}),[]),r.default.createElement("div",null,r.default.createElement("h3",null,"Event Emitter"),r.default.createElement("p",null,"The EventEmitter is used to facilitate communications within the application. Clicking the emitter button emits an event to the Listener to increment the value by 1."),r.default.createElement("p",null,"Emitter:"," ",r.default.createElement("button",{type:"button",onClick:function(){o.default.emit("increment-counter")}},"Emit event to increment")),r.default.createElement("p",null,"Listener:"," ",n))};t.default=i},1779:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=a(n(1780))},1780:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=new(a(n(1781)).default);t.default=l},1781:function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty,l="~";function u(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,n,a,u){if("function"!=typeof n)throw new TypeError("The listener must be a function");var o=new r(n,a||e,u),i=l?l+t:t;return e._events[i]?e._events[i].fn?e._events[i]=[e._events[i],o]:e._events[i].push(o):(e._events[i]=o,e._eventsCount++),e}function i(e,t){0==--e._eventsCount?e._events=new u:delete e._events[t]}function c(){this._events=new u,this._eventsCount=0}Object.create&&(u.prototype=Object.create(null),(new u).__proto__||(l=!1)),c.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)a.call(e,t)&&n.push(l?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},c.prototype.listeners=function(e){var t=l?l+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var a=0,u=n.length,r=new Array(u);a<u;a++)r[a]=n[a].fn;return r},c.prototype.listenerCount=function(e){var t=l?l+e:e,n=this._events[t];return n?n.fn?1:n.length:0},c.prototype.emit=function(e,t,n,a,u,r){var o=l?l+e:e;if(!this._events[o])return!1;var i,c,s=this._events[o],f=arguments.length;if(s.fn){switch(s.once&&this.removeListener(e,s.fn,void 0,!0),f){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,t),!0;case 3:return s.fn.call(s.context,t,n),!0;case 4:return s.fn.call(s.context,t,n,a),!0;case 5:return s.fn.call(s.context,t,n,a,u),!0;case 6:return s.fn.call(s.context,t,n,a,u,r),!0}for(c=1,i=new Array(f-1);c<f;c++)i[c-1]=arguments[c];s.fn.apply(s.context,i)}else{var d,m=s.length;for(c=0;c<m;c++)switch(s[c].once&&this.removeListener(e,s[c].fn,void 0,!0),f){case 1:s[c].fn.call(s[c].context);break;case 2:s[c].fn.call(s[c].context,t);break;case 3:s[c].fn.call(s[c].context,t,n);break;case 4:s[c].fn.call(s[c].context,t,n,a);break;default:if(!i)for(d=1,i=new Array(f-1);d<f;d++)i[d-1]=arguments[d];s[c].fn.apply(s[c].context,i)}}return!0},c.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,n,a){var u=l?l+e:e;if(!this._events[u])return this;if(!t)return i(this,u),this;var r=this._events[u];if(r.fn)r.fn!==t||a&&!r.once||n&&r.context!==n||i(this,u);else{for(var o=0,c=[],s=r.length;o<s;o++)(r[o].fn!==t||a&&!r[o].once||n&&r[o].context!==n)&&c.push(r[o]);c.length?this._events[u]=1===c.length?c[0]:c:i(this,u)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=l?l+e:e,this._events[t]&&i(this,t)):(this._events=new u,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=l,c.EventEmitter=c,e.exports=c},1782:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"AppPage-module__orion-fusion-theme___3fi-5","page-content":"AppPage-module__page-content___2_Sub","themed-block":"AppPage-module__themed-block___3gZdQ"}},1783:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),u=a(n(1381)),r=function(){return l.default.createElement(u.default,{pageName:"Page 2",pageKey:"page_2"})};t.default=r},1784:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),u=a(n(1381)),r=function(){return l.default.createElement(u.default,{pageName:"Page 3",pageKey:"page_3"})};t.default=r},2864:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(1770)).default;t.default=l}}]);