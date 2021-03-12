(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1174:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),a=t.n(r),o=t(967),l=t.n(o),c=function(e){var n=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.23.0",url:n})}},2766:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(988));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.default,{summaryId:"default-header-table",summary:"This table displays the default layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Default Header"},{id:"header-key-1",key:"key-1",children:"Default Header"}]}}),r.default.createElement(a.default,{summaryId:"chevron-header-table",summary:"This table displays the chevron layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",rowStyle:"disclose",hasChevrons:!0,headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Chevron"},{id:"header-key-1",key:"key-1",children:"Selection Style Chevron"}]}}),r.default.createElement(a.default,{summaryId:"check-header-table",summary:"This table displays the checkmark layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",checkStyle:"toggle",headerData:{selectAllColumn:{checkLabel:"Column Title"},cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Checkmark"},{id:"header-key-1",key:"key-1",children:"Selection Style Checkmark"}]}}))};n.default=l},2767:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(988));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.default,{summaryId:"example-check-cell",summary:"This table displaying a default check column.",rowStyle:"toggle",checkStyle:"icon",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title"},cells:[{id:"column-0",key:"key-0",children:"Default"}]}}),r.default.createElement(a.default,{summaryId:"empty-check-cell",summary:"This table displaying a selectable unchecked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"empty"},cells:[{id:"column-0",key:"key-0",children:"Selectable Unchecked"}]}}),r.default.createElement(a.default,{summaryId:"checked-check-cell",summary:"This table displaying a selectable checked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"checked"},cells:[{id:"column-0",key:"key-0",children:"Selectable Checked"}]}}),r.default.createElement(a.default,{summaryId:"indeterminate-check-cell",summary:"This table displaying a selectable indeterminate column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"indeterminate"},cells:[{id:"column-0",key:"key-0",children:"Selectable Indeterminate"}]}}),r.default.createElement(a.default,{summaryId:"disabled-check-cell",summary:"This table displaying a disabled check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},isDisabled:!0},cells:[{id:"column-0",key:"key-0",children:"Disabled"}]}}),r.default.createElement(a.default,{summaryId:"alignment-check-cell",summary:"This table displaying a vertically aligned check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkAlignment:"1rem"},cells:[{id:"column-0",key:"key-0",children:"Vertical Alignment 1rem"}]}}))};n.default=l},3066:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return I}));var r=t(0),a=t.n(r),o=t(331),l=t(1174),c=t(2766),u=t.n(c);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={};function s(e){var n=e.components,t=d(e,["components"]);return Object(o.mdx)("wrapper",m({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderRowExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"default-header-table\"\n      summary=\"This table displays the default layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Default Header' },\n          { id: 'header-key-1', key: 'key-1', children: 'Default Header' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"chevron-header-table\"\n      summary=\"This table displays the chevron layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      hasChevrons\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Chevron' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Chevron' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"check-header-table\"\n      summary=\"This table displays the checkmark layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      checkStyle=\"toggle\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Column Title',\n        },\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Checkmark' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Checkmark' },\n        ],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderRowExample;\n\n")))}s.isMDXComponent=!0;var p=t(966),f=t.n(p),b=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:n||"Header Row Example",description:t,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})},y=t(2767),h=t.n(y);function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var x={};function O(e){var n=e.components,t=_(e,["components"]);return Object(o.mdx)("wrapper",k({},x,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderCheckMarkCellExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"example-check-cell\"\n      summary=\"This table displaying a default check column.\"\n      rowStyle=\"toggle\"\n      checkStyle=\"icon\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Default' }],\n      }}\n    />\n    <Table\n      summaryId=\"empty-check-cell\"\n      summary=\"This table displaying a selectable unchecked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'empty' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Unchecked' }],\n      }}\n    />\n    <Table\n      summaryId=\"checked-check-cell\"\n      summary=\"This table displaying a selectable checked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'checked' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Checked' }],\n      }}\n    />\n    <Table\n      summaryId=\"indeterminate-check-cell\"\n      summary=\"This table displaying a selectable indeterminate column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'indeterminate' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Indeterminate' }],\n      }}\n    />\n    <Table\n      summaryId=\"disabled-check-cell\"\n      summary=\"This table displaying a disabled check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, isDisabled: true },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Disabled' }],\n      }}\n    />\n    <Table\n      summaryId=\"alignment-check-cell\"\n      summary=\"This table displaying a vertically aligned check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkAlignment: '1rem' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Vertical Alignment 1rem' }],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderCheckMarkCellExample;\n\n")))}O.isMDXComponent=!0;var v=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:n||"Header Check Mark Cell Example",description:t,example:a.a.createElement(h.a,null),exampleSrc:a.a.createElement(O,null),isExpanded:r})},g=t(969),j=t.n(g);function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var D=function(){return Object(o.mdx)(j.a,{rows:[{name:"cells",type:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",T({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"arrayOf"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "custom",\n "raw": "headerCellShape"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",T({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The cells to be displayed within the header."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",T({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",T({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback returning the html node for the header."))}return n.isMDXComponent=!0,n({})}},{name:"selectAllColumn",type:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",T({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",T({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The select all column header's properties."))}return n.isMDXComponent=!0,n({})}}]})};function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function M(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var X=function(){return Object(o.mdx)(j.a,{rows:[{name:"id",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,'The id of the header cell for the row cells to set within their "headers" prop.'))}return n.isMDXComponent=!0,n({})}},{name:"key",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The react key to apply to the cell."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Content to be displayed for the column header."))}return n.isMDXComponent=!0,n({})}},{name:"isSortDesc",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the sort indicator is descending."))}return n.isMDXComponent=!0,n({})}},{name:"isSortActive",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the column is to be marked as a sorted column."))}return n.isMDXComponent=!0,n({})}},{name:"metaData",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return n.isMDXComponent=!0,n({})}},{name:"onCellAction",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onCellAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for actions or selections."))}return n.isMDXComponent=!0,n({})}},{name:"onSortAction",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSortAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for sorting."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback returning the html node for the header cell."))}return n.isMDXComponent=!0,n({})}},{name:"removeInner",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the cell's inner containing element responsible for handling table's default padding is removed.\nThis is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding."))}return n.isMDXComponent=!0,n({})}},{name:"attrs",type:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=M(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to be passed to the cell."))}return n.isMDXComponent=!0,n({})}}]})};function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function P(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var E=function(){return Object(o.mdx)(j.a,{rows:[{name:"checkStatus",type:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "empty",\n "checked",\n "indeterminate"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The status of the select all checkbox."))}return n.isMDXComponent=!0,n({})}},{name:"checkAlignment",type:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The alignment prop sets the bottom spacing of the check mar, standard units are valid. This is used when providing your own padding."))}return n.isMDXComponent=!0,n({})}},{name:"checkLabel",type:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The text label for the column header's interaction."))}return n.isMDXComponent=!0,n({})}},{name:"onCheckAction",type:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The function callback triggering when the checkbox within the column header has an interaction."))}return n.isMDXComponent=!0,n({})}},{name:"isDisabled",type:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=P(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not interaction should be disabled."))}return n.isMDXComponent=!0,n({})}}]})};function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function A(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var q={};function I(e){var n=e.components,t=A(e,["components"]);return Object(o.mdx)("wrapper",L({},q,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-table---header"},"Terra Table - Header"),Object(o.mdx)("p",null,"The table's header is comprised of a cells and an optional selectAllColumn. The checkLabel should be provided if the table has toggle behavior."),Object(o.mdx)("h1",{id:"examples"},"Examples"),Object(o.mdx)(b,{mdxType:"HeaderRowExample"}),Object(o.mdx)(v,{mdxType:"HeaderCheckMarkCellExample"}),Object(o.mdx)("h2",{id:"table-header-props"},"Table Header Props"),Object(o.mdx)(D,{mdxType:"HeaderProps"}),Object(o.mdx)("h2",{id:"table-header-cell-props"},"Table Header Cell Props"),Object(o.mdx)(X,{mdxType:"HeaderCellProps"}),Object(o.mdx)("h2",{id:"table-select-all-column-props"},"Table Select All Column Props"),Object(o.mdx)(E,{mdxType:"SelectAllColumnProps"}))}I.isMDXComponent=!0},967:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(2)),o=c(t(4)),l=c(t(968));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),m={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},d=function(e){var n=e.src,t=e.name,a=e.url,o=e.version,l=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(o))),c=n?r.default.createElement("a",{className:u("badge"),href:n},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,c)};d.propTypes=m;var i=d;n.default=i},968:function(e,n,t){"use strict";t.r(n),n.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},969:function(e,n,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d();if(n&&n.has(e))return n.get(e);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(t,o,l):t[o]=e[o]}t.default=e,n&&n.set(e,t);return t}(t(0)),o=m(t(2)),l=m(t(4)),c=t(90),u=m(t(970));function m(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}var i=l.default.bind(u.default),s={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},p=function(e){var n=e.rows,t=(0,a.useContext)(c.ThemeContext);return a.default.createElement("table",{className:i("table",t.className)},a.default.createElement("thead",null,a.default.createElement("tr",{className:i("tr")},a.default.createElement("th",{className:i("th")},"Prop Name"),a.default.createElement("th",{className:i("th")},"Type"),a.default.createElement("th",{className:i("th")},"Is Required"),a.default.createElement("th",{className:i("th")},"Default Value"),a.default.createElement("th",{className:i("th")},"Description"))),a.default.createElement("tbody",null,n.map((function(e){return a.default.createElement("tr",{className:i("tr","props-tr"),key:e.name},a.default.createElement("td",{className:i(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:i(["td","props-td"])},e.type()),a.default.createElement("td",{className:i(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:i(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:i(["td","props-td"])},e.description()))}))))};p.propTypes=s;var f=p;n.default=f},970:function(e,n,t){"use strict";t.r(n),n.default={"orion-fusion-theme":"PropsTable-module__orion-fusion-theme___3AJGO",a:"PropsTable-module__a___Nl2I_",blockquote:"PropsTable-module__blockquote___1UooW",code:"PropsTable-module__code___2CrUu",dd:"PropsTable-module__dd___-FF1D",dl:"PropsTable-module__dl___xAY9f",dt:"PropsTable-module__dt___3ZdLl",h1:"PropsTable-module__h1___2344J",h2:"PropsTable-module__h2___39ybm",h3:"PropsTable-module__h3___2fnGf",h4:"PropsTable-module__h4___3EKMz",h5:"PropsTable-module__h5___2O9Fr",h6:"PropsTable-module__h6___3yqd6","icon-link":"PropsTable-module__icon-link___3-2wE",anchor:"PropsTable-module__anchor___3FaVY",hr:"PropsTable-module__hr___284T6",img:"PropsTable-module__img___228gq",input:"PropsTable-module__input___37YH2",kbd:"PropsTable-module__kbd___9Qwkj",li:"PropsTable-module__li___2DP3k",p:"PropsTable-module__p___il_ri",ol:"PropsTable-module__ol___31QwV",ul:"PropsTable-module__ul___2emTr",td:"PropsTable-module__td___2UqeU",pre:"PropsTable-module__pre___2B0eh",strong:"PropsTable-module__strong___2t-kf",table:"PropsTable-module__table___1UgXO",th:"PropsTable-module__th___3-CqB",tr:"PropsTable-module__tr___1oPul",icon:"PropsTable-module__icon___2R10q",required:"PropsTable-module__required___r_fIG","props-tr":"PropsTable-module__props-tr___3a95z","props-td":"PropsTable-module__props-td___1xIuD"}}}]);