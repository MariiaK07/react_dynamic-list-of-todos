(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var n=s(10),r=s.n(n),c=s(7),a=s(2),o=s(3),i=s(5),l=s(4),u=s(6),d=s.n(u),h=s(1),j=s.n(h),p=(s(16),s(17),s(18),s(9)),b=s.n(p),m=s(0),f=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",filter:""},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.query,n=t.filter,r=this.props,c=r.todos,a=r.userId,o=r.selectUser,i=c.filter((function(e){return"active"===n?!e.completed&&e.title.toLowerCase().includes(s.toLowerCase()):"completed"===n?e.completed&&e.title.toLowerCase().includes(s.toLowerCase()):e.title.toLowerCase().includes(s.toLowerCase())}));return Object(m.jsxs)("div",{className:"TodoList",children:[Object(m.jsx)("h2",{children:"Todos:"}),Object(m.jsxs)("div",{className:"TodoList__filter",children:[Object(m.jsx)("input",{type:"text",id:"search-query",className:"TodoList__filter-item",placeholder:"Type search word",onChange:function(t){e.setState({query:t.target.value})}}),Object(m.jsxs)("select",{name:"filter",value:this.state.filter,className:"TodoList__filter-item",onChange:function(t){e.setState({filter:t.target.value})},children:[Object(m.jsx)("option",{value:"all",children:"Show all"}),Object(m.jsx)("option",{value:"active",children:"Show active"}),Object(m.jsx)("option",{value:"completed",children:"Show completed"})]})]}),Object(m.jsx)("div",{className:"TodoList__list-container",children:Object(m.jsx)("ul",{className:"TodoList__list",children:i.map((function(e){return Object(m.jsxs)("li",{className:b()("TodoList__item",{"TodoList__item--unchecked":!e.completed},{"TodoList__item--checked":e.completed}),children:[Object(m.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(m.jsx)("p",{children:e.title}),Object(m.jsxs)("button",{type:"button",className:b()("button","TodoList__user-button",{"TodoList__user-button--selected":a===e.userId}),onClick:function(){return o(e.userId)},children:["User\xa0",e.userId]})]},e.id)}))})})]})}}]),s}(j.a.Component),v=(s(20),function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status,"-").concat(e.statusText));return e.json()}))}),O=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedUser:null},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"loadUser",value:function(){var e=Object(c.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s=this.props.userId,v("users/".concat(s));case 2:t=e.sent,this.setState({selectedUser:t});case 4:case"end":return e.stop()}var s}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.selectedUser;return Object(m.jsx)(m.Fragment,{children:e&&Object(m.jsxs)("div",{className:"CurrentUser",children:[Object(m.jsx)("h2",{className:"CurrentUser__title",children:Object(m.jsxs)("span",{children:["Selected user:\xa0",e.id]})}),Object(m.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(m.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(m.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(m.jsx)("button",{type:"button",className:"button CurrentUser__clear",onClick:this.props.onClear,children:"Clear"})]})})}}]),s}(j.a.Component),_=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.clearCurrentUser=function(){e.setState({selectedUserId:0})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=Object(c.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,s=t.todos,n=t.selectedUserId;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(f,{todos:s,userId:n,selectUser:function(t){e.setState({selectedUserId:t})}})}),Object(m.jsx)("div",{className:"App__content",children:Object(m.jsx)("div",{className:"App__content-container",children:n?Object(m.jsx)(O,{userId:n,onClear:this.clearCurrentUser}):"No user selected"})})]})}}]),s}(j.a.Component),x=_;r.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.27bd17f2.chunk.js.map