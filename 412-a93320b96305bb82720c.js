(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{2583:function(e,t,n){"use strict";var i=n(11),a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),c=i(n(345)),o=n(976),r=a(n(4)),u=a(n(2584)),s=a(n(1226)),d=a(n(1227)),m=r.default.bind(d.default),p=function(e){var t=[l.default.createElement(c.SectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push((n=e,l.default.createElement(c.Item,{key:n.key},l.default.createElement(o.Placeholder,{title:n.title,className:m("placeholder")}))));var n})),t},y=function(){return l.default.createElement(s.default,null,l.default.createElement(c.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Section"},u.default.map((function(e){return p(e)}))))};t.default=y},2584:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Item 0-0",key:"unique-0-0"},{title:"Item 0-1",key:"unique-0-1"},{title:"Item 0-2",key:"unique-0-2"},{title:"Item 0-3",key:"unique-0-3"},{title:"Item 0-4",key:"unique-0-4"},{title:"Item 0-5",key:"unique-0-5"}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Item 1-0",key:"unique-1-0"},{title:"Item 1-1",key:"unique-1-1"},{title:"Item 1-2",key:"unique-1-2"},{title:"Item 1-3",key:"unique-1-3"},{title:"Item 1-4",key:"unique-1-4"},{title:"Item 1-5",key:"unique-1-5"}]},{title:"Section 2",key:"unique-key-2",childItems:[{title:"Item 3-0",key:"unique-3-0"},{title:"Item 3-1",key:"unique-3-1"},{title:"Item 3-2",key:"unique-3-2"},{title:"Item 3-3",key:"unique-3-3"},{title:"Item 3-4",key:"unique-3-4"},{title:"Item 3-5",key:"unique-3-5"}]},{title:"Section 4",key:"unique-key-4",childItems:[{title:"Item 4-0",key:"unique-4-0"},{title:"Item 4-1",key:"unique-4-1"},{title:"Item 4-2",key:"unique-4-2"},{title:"Item 4-3",key:"unique-4-3"},{title:"Item 4-4",key:"unique-4-4"},{title:"Item 4-5",key:"unique-4-5"}]}];t.default=i},2914:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(0);var i=n(331),a=n(1225),l=n(2583),c=n.n(l);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function s(e){var t=e.components,n=r(e,["components"]);return Object(i.mdx)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(a.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-infinitelist---sections"},"Terra InfiniteList - Sections"),Object(i.mdx)("p",null,"To achieve sections within the InfiniteList the only supported implementation is directly consuming the static variant of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," component. Expand/collapse functionality is not supported within the infinite list. "),Object(i.mdx)("h2",{id:"map-section-structure"},"Map Section Structure"),Object(i.mdx)("p",null,"So in our first step a ",Object(i.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in the following steps."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    return section;\n  };\n")),Object(i.mdx)("p",null,"Next we'll create an array with the first item being our section header, and then loop through the associated child items for the section appending them to the initial array."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    sectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));\n    return section;\n  };\n")),Object(i.mdx)("h2",{id:"unpack-data"},"Unpack Data"),Object(i.mdx)("p",null,"We can then implement the unpack of our data into our list items."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} />\n  </Item>\n);\n\nconst createSections = data => data.map(section => createSection(section));\n")),Object(i.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},'const InfiniteListSection = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle="standard"\n      isFinishedLoading\n    >\n      {createSections(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n')),Object(i.mdx)("p",null,"Using these steps we get the following example:"),Object(i.mdx)("h2",{id:"example"},"Example"),Object(i.mdx)(c.a,{title:"Sections Header Infinite List",mdxType:"InfiniteListSection"}))}s.isMDXComponent=!0}}]);