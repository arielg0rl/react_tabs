(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),i=n(5),b=n(8),r=n(7),l=n(1),d=n.n(l),o=n(6),u=n.n(o),j=n(0),h=function(t){var e,n=t.tabs,c=t.selectedTabId,a=t.onTabSelected,s=n.find((function(t){return t.id===c}));return e=s?s.content:n[0].content,Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tabs",children:n.map((function(t){return Object(j.jsx)("div",{className:"tabs__container",children:Object(j.jsx)("button",{type:"button",className:u()("tabs__tab",{tabs__selected:t===s}),onClick:function(){return a(t)},children:t.title},t.id)})}))}),Object(j.jsx)("div",{children:e})]})},O=(n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),f=function(t){Object(b.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={selectedTab:O[0]},t.handleSelect=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["Selected tab is",this.state.selectedTab.title]}),Object(j.jsx)(h,{tabs:O,selectedTabId:this.state.selectedTab.id,onTabSelected:this.handleSelect})]})}}]),n}(d.a.Component),m=f;a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8313f39b.chunk.js.map