(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{56:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(23),s=a.n(r),i=(a(56),a(8)),o="HOME",d="TODOS",l="TODO",u="USERS",j="TODOS_LOAD",b="TODOS_SUCCESS",p="TODOS_FAIL",O="TODOS_UPDATE_REQ",m="TODOS_UPDATE_RES",h="USERS_LOAD",x="USERS_SUCCESS",v="USERS_FAIL",f="CHANGE_CURRENT_USER",g=a(14),y=a.n(g),N=a(1),I=function(){return Object(N.jsxs)("section",{className:"container",children:[Object(N.jsx)("h1",{children:"Home"}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-6",children:Object(N.jsx)("div",{className:"card",children:Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("h5",{className:"card-title",children:"Todos"}),Object(N.jsx)("p",{className:"card-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),Object(N.jsx)(g.NavLink,{to:{type:d},className:"btn btn-primary",children:"List Todos"})]})})}),Object(N.jsx)("div",{className:"col-md-6 mt-2 mt-md-0",children:Object(N.jsx)("div",{className:"card",children:Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("h5",{className:"card-title",children:"Users"}),Object(N.jsx)("p",{className:"card-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),Object(N.jsx)(g.NavLink,{to:{type:u},className:"btn btn-primary",children:"List Users"})]})})})]})]})},k=a(31),w=Object(k.a)((function(e){return e.todos.isLoading}),(function(e){return e.users.isLoading}),(function(e,t){return e||t})),L=function(){return Object(N.jsx)("div",{className:"loader-bg",children:Object(N.jsxs)("div",{className:"lds-roller",children:[Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{})]})})},U=function(e){return{type:b,todos:e}},S=function(e,t){return{type:O,id:e,data:t}},T=function(e){return{type:m,todo:e}},C=function(e){return{type:x,users:e}},E=Object(i.connect)((function(e){return{users:e.users}}),(function(e){return{changeCurrentUser:function(t){return e(function(e){return{type:f,id:e}}(t))}}}))((function(e){var t=e.changeCurrentUser,a=e.users;return null!==a.currentUser?Object(N.jsxs)("div",{className:"user-select col-md-4 my-5 mx-auto",children:[Object(N.jsx)("h3",{className:"text-center",children:"Select User"}),Object(N.jsxs)("select",{onChange:function(e){t(e.target.value)},defaultValue:a.currentUser,className:"form-select mt-3",children:[Object(N.jsx)("option",{value:0,children:"Select"},0),a.data.allIds.map((function(e){return Object(N.jsx)("option",{value:e,children:a.data.byId[e].name},e)}))]})]}):null})),D=a(6),_=a.n(D),R=a(19),A=Object(i.connect)((function(e,t){var a,n=(a=t.isChecked,Object(k.a)((function(e){return e.todos.data}),(function(e){return e.users.currentUser}),(function(e,t){return e.allIds.filter((function(n){return e.byId[n].userId===parseInt(t)&&e.byId[n].completed===a})).map((function(t){return e.byId[t]}))})));return function(e,t){return{todos:n(e,t)}}}),(function(e){return{todosUpdateReq:function(t,a){return e(S(t,a))}}}))((function(e){var t=e.title,a=e.todos,n=e.todosUpdateReq,c=function(){var e=Object(R.a)(_.a.mark((function e(t,a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("Are you sure to change status of this todo?")&&n(t.target.value,{title:a,completed:t.target.checked});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return a.length>0?Object(N.jsxs)("div",{className:"todo-list",children:[Object(N.jsx)("h3",{className:"ms-2",children:t}),Object(N.jsx)("ul",{className:"list-group mt-3",children:a.map((function(e){return Object(N.jsxs)("li",{className:"list-group-item d-flex flex-row",children:[Object(N.jsx)("input",{onChange:function(t){return c(t,e.title)},className:"form-check-input me-3",type:"checkbox",value:e.id,checked:e.completed}),Object(N.jsx)(y.a,{style:{flex:1,textDecoration:"none",color:"black"},to:{type:l,payload:{id:e.id}},children:e.title})]},e.id)}))})]}):null})),F=Object(i.connect)((function(e){return{isLoading:w(e)}}))((function(e){var t=e.isLoading;return Object(N.jsxs)("section",{className:"container",children:[t&&Object(N.jsx)(L,{}),Object(N.jsx)("h1",{children:"Todos"}),Object(N.jsx)(E,{}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-6 mb-4",children:Object(N.jsx)(A,{isChecked:!1,title:"Incomplete Todos"})}),Object(N.jsx)("div",{className:"col-md-6",children:Object(N.jsx)(A,{isChecked:!0,title:"Completed Todos"})})]})]})})),H=function(){return Object(N.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(N.jsxs)("div",{className:"container-fluid",children:[Object(N.jsx)(g.NavLink,{className:"navbar-brand",to:{type:o},children:"Todo App"}),Object(N.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(N.jsx)("span",{className:"navbar-toggler-icon"})}),Object(N.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(N.jsxs)("ul",{className:"navbar-nav",children:[Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(g.NavLink,{to:{type:o},exact:!0,className:"nav-link",activeClassName:"active","aria-current":"page",children:"Home"})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(g.NavLink,{to:{type:d},className:"nav-link",activeClassName:"active","aria-current":"page",children:"Todos"})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(g.NavLink,{to:{type:u},className:"nav-link",activeClassName:"active","aria-current":"page",children:"Users"})})]})})]})})},P=c.a.memo(H),q=a(10),M=a(7),B=a(49),J=Object(i.connect)((function(e){var t=e.location,a=e.todos,n=e.users,c=t.payload.id;return{isLoading:a.isLoading||n.isLoading,id:c,todo:a.data.byId[c],user:n.data.allIds.length&&a.data.allIds.length?n.data.byId[a.data.byId[c].userId]:null}}),(function(e){return{todosUpdateReq:function(t,a){return e(S(t,a))}}}))((function(e){var t=e.id,a=e.todo,c=e.user,r=e.todosUpdateReq,s=e.isLoading,i=Object(n.useState)({title:"",completed:!1,isUpdated:!1}),o=Object(B.a)(i,2),d=o[0],l=o[1];Object(n.useEffect)((function(){a&&l({isUpdated:!1,title:a.title,completed:a.completed})}),[a]);var u=function(e){l(Object(M.a)(Object(M.a)({},d),{},Object(q.a)({isUpdated:!0},e.target.id,"checkbox"===e.target.type?e.target.checked:e.target.value)))};return Object(N.jsxs)("section",{className:"container",children:[s&&Object(N.jsx)(L,{}),Object(N.jsx)("h1",{className:"text-center",children:"Update Todo"}),Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(t,{title:d.title,completed:d.completed})},children:[Object(N.jsx)("div",{className:"mb-3",children:Object(N.jsx)("input",{onChange:u,type:"text",className:"form-control form-control-lg",id:"title",value:d.isUpdated?d.title:a?a.title:""})}),Object(N.jsxs)("div",{className:"mb-3 form-check",children:[Object(N.jsx)("input",{onChange:u,type:"checkbox",className:"form-check-input",id:"completed",checked:d.isUpdated?d.completed:!!a&&a.completed}),Object(N.jsx)("label",{className:"form-check-label",htmlFor:"completed",children:"Completed"})]}),Object(N.jsx)("div",{className:"mb-3",children:c&&Object(N.jsxs)("p",{children:["Created by ",Object(N.jsx)("b",{children:c.name})," "]})}),Object(N.jsx)("button",{type:"submit",className:"btn btn-warning",children:"Update"})]})]})})),V=Object(i.connect)((function(e){var t=e.users;return{isLoading:t.isLoading,users:t.data}}))((function(e){var t=e.isLoading,a=e.users;return Object(N.jsxs)("section",{className:"container",children:[t&&Object(N.jsx)(L,{}),Object(N.jsx)("h1",{children:"Users"}),Object(N.jsx)("div",{className:"user-grid",children:a.allIds.map((function(e){return Object(N.jsxs)("div",{className:"card text-white bg-dark",children:[Object(N.jsxs)("div",{className:"card-header",children:["@",a.byId[e].username]}),Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("h5",{className:"card-title",children:a.byId[e].name}),Object(N.jsx)("p",{className:"card-text",children:a.byId[e].email}),Object(N.jsx)("p",{className:"card-text",children:"".concat(a.byId[e].address.street,", ").concat(a.byId[e].address.suite,", ").concat(a.byId[e].address.city," (").concat(a.byId[e].address.zipcode,")")})]})]},e)}))})]})}));var X,z=Object(i.connect)((function(e){return{page:e.page}}))((function(e){var t=e.page,a={Home:I,Todos:F,Todo:J,Users:V}[t];return Object(N.jsxs)(n.Fragment,{children:[Object(N.jsx)(P,{}),Object(N.jsx)(a,{})]})})),G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},Q=a(13),K=a(51),W=a(17),Y=(X={},Object(q.a)(X,o,"/"),Object(q.a)(X,u,"/users"),Object(q.a)(X,d,"/todos"),Object(q.a)(X,l,"/todos/:id"),X);console.log("production");var Z,$=Object(W.connectRoutes)(Y,{basename:"todo-redux-saga",title:function(e){return"".concat(e.page," | Todo App")}}),ee=(Z={},Object(q.a)(Z,o,"Home"),Object(q.a)(Z,d,"Todos"),Object(q.a)(Z,l,"Todo"),Object(q.a)(Z,u,"Users"),Z),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Home",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ee[t.type]||e},ae=a(50),ne={isLoading:!1,data:{byId:{},allIds:[]},error:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case j:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!0,error:""});case b:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!1,data:t.todos,error:""});case p:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!1,error:t.error});case m:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!1,error:"",data:{byId:Object(M.a)(Object(M.a)({},e.data.byId),{},Object(q.a)({},t.todo.id,t.todo)),allIds:Object(ae.a)(e.data.allIds)}});default:return e}},re={currentUser:null,isLoading:!1,data:{byId:{},allIds:[]},error:""},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!0,error:""});case x:return Object(M.a)(Object(M.a)({},e),{},{currentUser:t.users.allIds[0],isLoading:!1,data:t.users,error:""});case v:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!1,error:t.error});case f:return Object(M.a)(Object(M.a)({},e),{},{currentUser:parseInt(t.id)});default:return e}},ie=$.reducer,oe=Object(Q.c)({page:te,location:ie,todos:ce,users:se}),de=a(9),le=a(32),ue=a(25),je=a.n(ue),be=function(){var e=Object(R.a)(_.a.mark((function e(){var t,a,n,c,r,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.a.get("https://jsonplaceholder.typicode.com/todos");case 2:t=e.sent,a=t.data,n={byId:{},allIds:[]},c=Object(le.a)(a);try{for(c.s();!(r=c.n()).done;)s=r.value,n.byId[s.id]=s,n.allIds.push(s.id)}catch(i){c.e(i)}finally{c.f()}return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(R.a)(_.a.mark((function e(){var t,a,n,c,r,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,a=t.data,n={byId:{},allIds:[]},c=Object(le.a)(a);try{for(c.s();!(r=c.n()).done;)s=r.value,n.byId[s.id]=s,n.allIds.push(s.id)}catch(i){c.e(i)}finally{c.f()}return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(R.a)(_.a.mark((function e(t,a){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.a.patch("https://jsonplaceholder.typicode.com/todos/".concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),me=_.a.mark(fe),he=_.a.mark(ge),xe=_.a.mark(ye),ve=_.a.mark(Ne);function fe(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(de.b)(be);case 3:return e=t.sent,t.next=6,Object(de.c)(U(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(de.c)((a=t.t0.toString(),{type:p,error:a}));case 12:case"end":return t.stop()}var a}),me,null,[[0,8]])}function ge(e){var t,a,n;return _.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.id,a=e.data,c.prev=1,c.next=4,Object(de.b)(Oe,t,a);case 4:return n=c.sent,c.next=7,Object(de.c)(T(n));case 7:c.next=11;break;case 9:c.prev=9,c.t0=c.catch(1);case 11:case"end":return c.stop()}}),he,null,[[1,9]])}function ye(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.c)({type:d});case 2:case"end":return e.stop()}}),xe)}function Ne(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.d)(j,fe);case 2:return e.next=4,Object(de.d)(O,ge);case 4:return e.next=6,Object(de.d)(m,ye);case 6:case"end":return e.stop()}}),ve)}var Ie=_.a.mark(we),ke=_.a.mark(Le);function we(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(de.b)(pe);case 3:return e=t.sent,t.next=6,Object(de.c)(C(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(de.c)((a=t.t0.toString(),{type:v,error:a}));case 12:case"end":return t.stop()}var a}),Ie,null,[[0,8]])}function Le(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.d)(h,we);case 2:case"end":return e.stop()}}),ke)}var Ue=_.a.mark(Se);function Se(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.a)([Ne(),Le()]);case 2:case"end":return e.stop()}}),Ue)}var Te=$.middleware,Ce=$.enhancer,Ee=Object(K.a)(),De=Object(Q.a)(Te,Ee),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Re=Object(Q.e)(oe,_e(Ce,De));Ee.run(Se),Re.dispatch({type:h}),Re.dispatch({type:j});var Ae=Re;s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(i.Provider,{store:Ae,children:Object(N.jsx)(z,{})})}),document.getElementById("root")),G()}},[[91,1,2]]]);
//# sourceMappingURL=main.d958ad1c.chunk.js.map