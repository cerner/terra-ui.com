(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1138:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(e(0)),r=l(e(2)),i=l(e(4)),a=l(e(1139));function l(n){return n&&n.__esModule?n:{default:n}}var u=i.default.bind(a.default),c={text:r.default.string},s=function(n){var t=n.text;return o.default.createElement("div",{className:u("content-cell")},t)};s.propTypes=c;var d=s;t.default=d},1139:function(n,t,e){"use strict";e.r(t),t.default={"content-cell":"ContentCellLayout__content-cell___32Z6a"}},1140:function(n,t,e){"use strict";e.r(t),t.default={"data-grid-basic":"Datagrid-module__data-grid-basic___3qJrc","data-grid-row-style":"Datagrid-module__data-grid-row-style___3Ig3_","data-grid-paging":"Datagrid-module__data-grid-paging___Exaa_","loading-overlay":"Datagrid-module__loading-overlay___2pngy"}},1141:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));e(0);var o=e(331);function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function i(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var a={};function l(n){var t=n.components,e=i(n,["components"]);return Object(o.mdx)("wrapper",r({},a,e,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n}\n\n\n")))}l.isMDXComponent=!0},1918:function(n,t,e){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(e(0)),i=s(e(1183)),a=s(e(355)),l=s(e(4)),u=s(e(1138)),c=s(e(1140));function s(n){return n&&n.__esModule?n:{default:n}}function d(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function p(n,t,e){return t&&d(n.prototype,t),e&&d(n,e),n}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function m(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=y(n);if(t){var r=y(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return g(this,e)}}function g(n,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function y(n){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var h=l.default.bind(c.default),b=[{id:"Column-0",width:200,text:"Column 0"},{id:"Column-1",width:200,text:"Column 1"},{id:"Column-2",width:200,text:"Column 2"}],v=[{id:"Column-3",width:200,text:"Column 3"},{id:"Column-4",width:200,text:"Column 4"},{id:"Column-5",width:200,text:"Column 5"},{id:"Column-6",width:200,text:"Column 6"}],C=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(e,n);var t=m(e);function e(n){var o;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(o=t.call(this,n)).state={sectionCount:1,isLoading:!1,sections:e.buildSections(1)},o}return p(e,null,[{key:"buildRows",value:function(n,t){return new Array(t).fill().map((function(t,e){return{id:"".concat(n,"-Row").concat(e),cells:new Array(10).fill(0).map((function(n,t){return"Column-".concat(t)})).map((function(n){return{columnId:n,component:r.default.createElement(u.default,{text:"Row-".concat(e,", Column ").concat(n)})}}))}}))}},{key:"buildSections",value:function(n){for(var t=[],o=0,r=n;o<r;o+=1){var i="section_".concat(o);t.push({id:i,text:"Section ".concat(o),rows:e.buildRows(i,3)})}return t}}]),p(e,[{key:"componentWillUnmount",value:function(){clearTimeout(this.pagingTimeout)}},{key:"render",value:function(){var n=this;return r.default.createElement("div",{className:h("data-grid-paging")},r.default.createElement(i.default,{id:"paging-example",pinnedColumns:b,overflowColumns:v,sections:this.state.sections,fill:!0,onRequestContent:this.state.sectionCount<10?function(){n.setState({isLoading:!0},(function(){clearTimeout(n.pagingTimeout),n.pagingTimeout=setTimeout((function(){n.setState((function(n){return{sectionCount:n.sectionCount+1,isLoading:!1,sections:e.buildSections(n.sectionCount+1)}}))}),2e3)}))}:void 0}),r.default.createElement(a.default,{isOpen:this.state.isLoading,isRelativeToContainer:!0,isAnimated:!0,className:h("loading-overlay")}))}}]),e}(r.default.Component);t.default=C},3136:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return v}));var o=e(0),r=e.n(o),i=e(331),a=e(1918),l=e.n(a);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function c(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var s={};function d(n){var t=n.components,e=c(n,["components"]);return Object(i.mdx)("wrapper",u({},s,e,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';\nimport classNames from 'classnames/bind';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst pinnedColumns = [\n  {\n    id: 'Column-0',\n    width: 200,\n    text: 'Column 0',\n  },\n  {\n    id: 'Column-1',\n    width: 200,\n    text: 'Column 1',\n  },\n  {\n    id: 'Column-2',\n    width: 200,\n    text: 'Column 2',\n  },\n];\n\nconst overflowColumns = [\n  {\n    id: 'Column-3',\n    width: 200,\n    text: 'Column 3',\n  },\n  {\n    id: 'Column-4',\n    width: 200,\n    text: 'Column 4',\n  },\n  {\n    id: 'Column-5',\n    width: 200,\n    text: 'Column 5',\n  },\n  {\n    id: 'Column-6',\n    width: 200,\n    text: 'Column 6',\n  },\n];\n\nclass DatagridWithPaging extends React.Component {\n  static buildRows(sectionId, num) {\n    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionId}-Row${rowIndex}`,\n      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({\n        columnId: columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, Column ${columnKey}`} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  static buildSections(sectionCount) {\n    const sections = [];\n    for (let i = 0, length = sectionCount; i < length; i += 1) {\n      const sectionId = `section_${i}`;\n      sections.push({\n        id: sectionId,\n        text: `Section ${i}`,\n        rows: DatagridWithPaging.buildRows(sectionId, 3),\n      });\n    }\n\n    return sections;\n  }\n\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      sectionCount: 1,\n      isLoading: false,\n      sections: DatagridWithPaging.buildSections(1),\n    };\n  }\n\n  componentWillUnmount() {\n    clearTimeout(this.pagingTimeout);\n  }\n\n  render() {\n    return (\n      <div className={cx('data-grid-paging')}>\n        <DataGrid\n          id=\"paging-example\"\n          pinnedColumns={pinnedColumns}\n          overflowColumns={overflowColumns}\n          sections={this.state.sections}\n          fill\n          onRequestContent={this.state.sectionCount < 10 ? (() => {\n            this.setState({ isLoading: true }, () => {\n              clearTimeout(this.pagingTimeout);\n              this.pagingTimeout = setTimeout(() => {\n                this.setState(prevState => ({ sectionCount: prevState.sectionCount + 1, isLoading: false, sections: DatagridWithPaging.buildSections(prevState.sectionCount + 1) }));\n              }, 2000);\n            });\n          }) : undefined}\n        />\n        <LoadingOverlay isOpen={this.state.isLoading} isRelativeToContainer isAnimated className={cx('loading-overlay')} />\n      </div>\n    );\n  }\n}\n\nexport default DatagridWithPaging;\n\n")))}d.isMDXComponent=!0;var p=e(966),f=e.n(p),m=e(1141),g=function(n){var t=n.title,e=n.description,o=n.isExpanded;return r.a.createElement(f.a,{title:t||"Datagrid With Paging",description:e,example:r.a.createElement(l.a,null),exampleCssSrc:r.a.createElement(m.a,null),exampleSrc:r.a.createElement(d,null),isExpanded:o})};function y(){return(y=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function h(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var b={};function v(n){var t=n.components,e=h(n,["components"]);return Object(i.mdx)("wrapper",y({},b,e,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(g,{description:"This example features dynamic content loading using the DataGrid's `onRequestContent` prop. \nUp to 10 sections are loaded as the user scrolls through the example.",mdxType:"DatagridWithPaging"}))}v.isMDXComponent=!0}}]);