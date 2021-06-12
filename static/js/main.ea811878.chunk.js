(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{136:function(e,t,r){},217:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(23),c=r.n(n),i=(r(136),r(70)),l=r(61),s=(r(137),r(222)),d=r(223),o=r(127),u=r(126),b=r(13);var j={required:"${label} is required!"};function f(e){var t=e.list,r=e.addTitle,a=e.isCard,n=s.a.useForm(),c=Object(l.a)(n,1)[0],f=Object(b.jsx)(s.a.Item,{name:["user","Description"],label:"Description",rules:[{required:!0}],children:Object(b.jsx)(d.a.TextArea,{allowClear:!0})});return Object(b.jsx)(s.a,{form:c,name:"nest-messages",onFinish:a?function(t){c.resetFields(),e.add(t)}:function(e){var a=e.user.Name,n={Title:a,cards:[]};if(function(e,t){return e.some((function(e){return e.Title===t}))}(t,a))o.b.error("".concat(a," Title already exists"),1);else{var l=[].concat(Object(i.a)(t),[n]);r(l),c.resetFields()}},validateMessages:j,children:Object(b.jsxs)("div",{style:a?null:{display:"flex",margin:"5px"},children:[Object(b.jsx)(s.a.Item,{name:["user","Name"],label:"Title",rules:[{required:!0}],children:Object(b.jsx)(d.a,{allowClear:!0})}),a?f:null,Object(b.jsx)(s.a.Item,{children:Object(b.jsx)(u.a,{type:"primary",htmlType:"submit",children:a?"Add Card":"Add Title"})})]})})}var x=r(97),O=r(220),p=r(221),g=r(62),m=r(225),v=r(224);function h(e){var t=Object(a.useState)(!1),r=Object(l.a)(t,2),n=r[0],c=r[1],i=e.list,s=e.addCard;return Object(b.jsx)(m.a,{content:Object(b.jsx)(f,{isCard:!0,add:function(e){var t=Object(v.a)();e.user.ID=t;var r=e.user;s(i,r),c(!1)}}),title:"Add Card",trigger:"click",visible:n,onVisibleChange:function(){return c(!n)},children:Object(b.jsx)(u.a,{type:"primary",children:n?"Close":"Add Card"})})}function I(e){var t=e.card,r=e.deleteCard,a=e.item;return Object(b.jsx)(p.a,{size:"small",title:t.Name,style:{marginBottom:"10px"},hoverable:!0,extra:Object(b.jsx)(g.a,{onClick:function(){return r(a,t.ID)},style:{fontSize:"13px",color:"red",padding:"5px"}}),children:t.Description})}var T=r(69);function y(e){var t=e.data,r=e.deleteTitle,a=e.deleteCard,n=e.addCard,c={overflowY:"scroll",maxHeight:"400px",marginBottom:"20px"};return Object(b.jsx)(O.b,{grid:{column:4},dataSource:t,renderItem:function(e){return Object(b.jsx)(T.c,{droppableId:e.Title,children:function(t){return Object(b.jsx)("div",{ref:t.innerRef,children:Object(b.jsx)(O.b.Item,{children:Object(b.jsxs)(p.a,{title:e.Title,style:{margin:"15px"},extra:Object(b.jsx)(g.a,{style:{color:"red",padding:"5px"},onClick:function(){return r(e)}}),hoverable:!0,children:[Object(b.jsxs)("div",{style:c,children:[e.cards.map((function(t,r){return Object(b.jsx)(T.b,{draggableId:t.ID,index:r,children:function(n){return Object(b.jsx)("div",Object(x.a)(Object(x.a)(Object(x.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(b.jsx)(I,{card:t,item:e,deleteCard:a},r)}))}},t.ID)})),t.placeholder]}),Object(b.jsx)(h,{list:e,style:{marginLeft:"50%"},cards:e.cards,addCard:n})]})})})}})}})}function C(){return Object(b.jsx)("h1",{style:{textAlign:"center"},children:"Trello"})}var D=r(47),S="TRELLO_REACT_APP_ID";function L(){var e=Object(D.getLocalStorage)(S),t=Object(a.useState)(e),r=Object(l.a)(t,2),n=r[0],c=r[1];function s(e,t){var r=t.Title?t.Title:t;return e.findIndex((function(e){return e.Title===r}))}function d(e,t,r){return e[r].cards.some((function(e){return e.ID===t.ID}))}var u=function(e,t){var r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(r=null===a?s(n,e):a,d(n,t,r))return o.b.error("".concat(t.Name," card already exists"),1),!1;if(null===a){var l=n.slice();return l[r].cards.push({Name:t.Name,Description:t.Description,ID:t.ID}),c(l),Object(D.setLocalStorage)(S,l),o.b.success("".concat(t.Name," card has successfully been added"),1),!0}var u=n.slice();return u[r].cards.splice(i,0,t),c(u),Object(D.setLocalStorage)(S,u),o.b.success("".concat(t.Name," card has successfully been added"),1),!0},j=function(e,t){var r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r=null===a?s(n,e):a;var l=n[r].cards.filter((function(e){return e.ID!==t})),d=Object(i.a)(n);d[r].cards=l,c(d),Object(D.setLocalStorage)(S,d)};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(C,{}),Object(b.jsx)(f,{list:n,addTitle:function(e){c(e),o.b.success("Title has been added successfully",1),Object(D.setLocalStorage)(S,e)},isCard:!1}),Object(b.jsx)(T.a,{onDragEnd:function(e){var t,r,a=e.source,l=e.destination;if(l)if(l.droppableId===a.droppableId){var d=Object(i.a)(n),o=s(n,l.droppableId);d[o].cards=function(e,t,r){var a=e[t];return e[t]=e[r],e[r]=a,e}(d[o].cards,a.index,l.index),c(d),Object(D.setLocalStorage)(S,d)}else{var b=s(n,l.droppableId),f=s(n,a.droppableId),x=(t=n[f].cards,r=e.draggableId,t.filter((function(e){return e.ID===r})));u(n[b].cards,x[0],b,l.index)&&j(n[f].cards,e.draggableId,f)}},children:Object(b.jsx)(y,{data:n,deleteTitle:function(e){var t=n.filter((function(t){return t.Title!==e.Title}));c(t),Object(D.setLocalStorage)(S,t)},deleteCard:j,addCard:u})})]})}c.a.render(Object(b.jsx)(L,{}),document.getElementById("root"))},47:function(e,t){e.exports={setLocalStorage:function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},getLocalStorage:function(e){var t=JSON.parse(window.localStorage.getItem(e));return null===t?[]:t}}}},[[217,1,2]]]);
//# sourceMappingURL=main.ea811878.chunk.js.map