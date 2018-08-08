(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Node.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js"),s=a("./node_modules/docz/dist/index.m.js"),m=a("./src/components/Node.tsx");function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;p(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"node"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#node"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Node"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { Node } from 'react-svg-tree';\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"props"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#props"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Props"),o.a.createElement(s.e,{of:m.b}),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-node"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-node"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic Node"),o.a.createElement(r.MDXTag,{name:"p",components:n},"A node is essentially an svg ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"circle"),". All props supported by circle are supported by the node. Node that the x and y props are overriden by the formatting algorithm and should not be set in the render method."),o.a.createElement(s.d,{__position:1,__code:'<svg viewBox="0 0 20 20" style={{ height: 100 }}>\n  <Node id="A" x={10} y={10} r={10} fill="teal" />\n</svg>'},o.a.createElement("svg",{viewBox:"0 0 20 20",style:{height:100}},o.a.createElement(m.b,{id:"A",x:10,y:10,r:10,fill:"teal"}))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"with-label"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#with-label"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"With Label"),o.a.createElement(r.MDXTag,{name:"p",components:n},"A node is essentially an svg ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"circle"),". All props supported by circle are supported by the node. Node that the x and y props are overriden by the formatting algorithm and should not be set in the render method."),o.a.createElement(s.d,{__position:2,__code:'<svg viewBox="0 0 20 20" style={{ height: 100 }}>\n  <Node id="A" x={10} y={10} r={10} fill="teal" showLabel />\n</svg>'},o.a.createElement("svg",{viewBox:"0 0 20 20",style:{height:100}},o.a.createElement(m.b,{id:"A",x:10,y:10,r:10,fill:"teal",showLabel:!0}))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"custom-svg-content"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#custom-svg-content"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Custom svg content"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can pass in a custom svg into node and have that be rendered instead of the default circle."),o.a.createElement(s.d,{__position:3,__code:'<svg viewBox="0 0 20 20" style={{ height: 100 }}>\n  <Node id="A" x={10} y={10}>\n    <rect width={20} height={20} stroke="red" />\n  </Node>\n</svg>'},o.a.createElement("svg",{viewBox:"0 0 20 20",style:{height:100}},o.a.createElement(m.b,{id:"A",x:10,y:10},o.a.createElement("rect",{width:20,height:20,stroke:"red"})))))}}}]);