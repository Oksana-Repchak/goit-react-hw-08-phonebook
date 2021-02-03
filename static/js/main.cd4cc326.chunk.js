(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports={form:"LoginView_form__7gC-w",label:"LoginView_label__3tQDF"}},22:function(e,t,n){e.exports={form:"ContactForm_form___-tLk",formItem:"ContactForm_formItem__RBFcO",input:"ContactForm_input__210rA",button:"ContactForm_button__3G2D3"}},28:function(e,t,n){e.exports={link:"Navigation_link__F87bk",activeLink:"Navigation_activeLink__OiE5-"}},33:function(e,t,n){e.exports={container:"UserMenu_container__2qUQL",name:"UserMenu_name__3Igxn",button:"UserMenu_button__3PFn_"}},34:function(e,t,n){e.exports={list:"ContactList_list__3rXoK",item:"ContactList_item__1VgbW",text:"ContactList_text__3Gk2V",button:"ContactList_button__2OSpD"}},35:function(e,t,n){e.exports={container:"Filter_container__3UtEv",label:"Filter_label__2bmWG",input:"Filter_input__1QSZb"}},42:function(e,t,n){e.exports={link:"AuthNav_link__3Hl0w",activeLink:"AuthNav_activeLink__3ho8u"}},43:function(e,t,n){e.exports={container:"HomeView_container__2ezaa",title:"HomeView_title__AX4dY"}},54:function(e,t,n){e.exports={container:"Container_container__GoBie"}},55:function(e,t,n){e.exports={header:"AppBar_header__34RcJ"}},56:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__3hIw1"}},57:function(e,t,n){e.exports={container:"ContactsView_container__ldz4s"}},8:function(e,t,n){e.exports={form:"RegisterView_form__3ujU7",label:"RegisterView_label__1-7pA"}},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(23),o=n.n(s),i=n(16),u=n(2),l=n(53),b=n(6),j=n(19),d=n(25),f=n(14),O=n.n(f),h=n(21),p=n(13),m=n.n(p),g=n(5);m.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var x,v=function(e){m.a.defaults.headers.common.Authorization="Bearer ".concat(e)},_=function(){m.a.defaults.headers.common.Authorization=""},C={register:Object(g.c)("auth/register",function(){var e=Object(h.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,v(r.token),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),login:Object(g.c)("auth/login",function(){var e=Object(h.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,v(r.token),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),logOut:Object(g.c)("auth/logout",function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/users/logout",t);case 3:_(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),fetchCurrentUser:Object(g.c)("auth/refresh",function(){var e=Object(h.a)(O.a.mark((function e(t,n){var r,a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return v(a),e.prev=5,e.next=8,m.a.get("/users/current");case 8:return c=e.sent,s=c.data,e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},N={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrentUser:function(e){return e.auth.isFetchingCurrentUser},getErrorLogin:function(e){return e.auth.errorLogin},getErrorRegister:function(e){return e.auth.errorRegister},getLoading:function(e){return e.auth.isLoading}},k=n(4),w=Object(g.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1,errorLogin:null,errorRegister:null},extraReducers:(x={},Object(k.a)(x,C.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(k.a)(x,C.register.pending,(function(e,t){e.errorRegister=null})),Object(k.a)(x,C.register.rejected,(function(e,t){e.errorRegister="Registration error. Please try again"})),Object(k.a)(x,C.login.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(k.a)(x,C.login.pending,(function(e,t){e.errorLogin=null})),Object(k.a)(x,C.login.rejected,(function(e,t){e.errorLogin="Something went wrong. Please try again"})),Object(k.a)(x,C.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(k.a)(x,C.fetchCurrentUser.pending,(function(e,t){e.isFetchingCurrentUser=!0})),Object(k.a)(x,C.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(k.a)(x,C.fetchCurrentUser.rejected,(function(e,t){e.isFetchingCurrentUser=!1})),x)}).reducer;function y(e){var t=e.children,n=e.redirectTo,a=void 0===n?"/":n,c=Object(d.a)(e,["children","redirectTo"]),s=Object(u.c)(N.getIsLoggedIn);return Object(r.jsx)(b.b,Object(j.a)(Object(j.a)({},c),{},{children:s?t:Object(r.jsx)(b.a,{to:a})}))}function L(e){var t=e.children,n=e.restricted,a=void 0!==n&&n,c=e.redirectTo,s=void 0===c?"/":c,o=Object(d.a)(e,["children","restricted","redirectTo"]),i=Object(u.c)(N.getIsLoggedIn)&&a;return Object(r.jsx)(b.b,Object(j.a)(Object(j.a)({},o),{},{children:i?Object(r.jsx)(b.a,{to:s}):t}))}var I=n(60),S=n(54),U=n.n(S),F=function(e){var t=e.children;return Object(r.jsx)("div",{className:U.a.container,children:t})},E=n(28),R=n.n(E);var P=function(){var e=Object(u.c)(N.getIsLoggedIn);return Object(r.jsxs)("nav",{children:[Object(r.jsx)(i.b,{to:"/",exact:!0,className:R.a.link,activeClassName:R.a.activeLink,children:"Home"}),e&&Object(r.jsx)(i.b,{to:"/contacts",exact:!0,className:R.a.link,activeClassName:R.a.activeLink,children:"Contacts"})]})},V=n(33),A=n.n(V);function B(){var e=Object(u.b)(),t=Object(u.c)(N.getUsername);return Object(r.jsxs)("div",{className:A.a.container,children:[Object(r.jsxs)("span",{className:A.a.name,children:["Hello, ",t,"!"]}),Object(r.jsx)("button",{className:A.a.button,type:"button",onClick:function(){return e(C.logOut())},children:"Log out"})]})}var T=n(42),z=n.n(T),H={activeLink:{color:"#ffffff",backgroundColor:"rgb(70, 100, 100)",borderColor:"rgb(50, 80, 100)"}};function D(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.b,{to:"/register",exact:!0,className:z.a.link,activeStyle:H.activeLink,children:"Sign up"}),Object(r.jsx)(i.b,{to:"/login",exact:!0,className:z.a.link,activeStyle:H.activeLink,children:"Sign in"})]})}var M=n(55),q=n.n(M);function G(){var e=Object(u.c)(N.getIsLoggedIn);return Object(r.jsxs)("header",{className:q.a.header,children:[Object(r.jsx)(P,{}),e?Object(r.jsx)(B,{}):Object(r.jsx)(D,{})]})}var W=n(43),J=n.n(W),Q=function(){return Object(r.jsx)("div",{className:J.a.container,children:Object(r.jsx)("h1",{className:J.a.title,children:" Welcome!!!"})})},X=n(18),K=n(8),Y=n.n(K);function Z(){var e=Object(u.b)(),t=Object(a.useState)(""),n=Object(X.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(X.a)(o,2),l=i[0],b=i[1],j=Object(a.useState)(""),d=Object(X.a)(j,2),f=d[0],O=d[1],h=Object(u.c)(N.getErrorRegister),p=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return s(r);case"email":return b(r);case"password":return O(r);default:return}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:Y.a.title,children:"Create your account"}),h&&Object(r.jsx)("p",{className:Y.a.star,children:h}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(C.register({name:c,email:l,password:f})),s(""),b(""),O("")},className:Y.a.form,autoComplete:"off",children:[Object(r.jsxs)("label",{className:Y.a.label,children:[Object(r.jsxs)("p",{className:Y.a.text,children:["Username",Object(r.jsx)("span",{className:Y.a.star,children:"*"})]}),Object(r.jsx)("input",{className:Y.a.input,type:"text",name:"name",value:c,onChange:p})]}),Object(r.jsxs)("label",{className:Y.a.label,children:[Object(r.jsxs)("p",{className:Y.a.text,children:["Email address",Object(r.jsx)("span",{className:Y.a.star,children:"*"})]}),Object(r.jsx)("input",{className:Y.a.input,type:"email",name:"email",value:l,onChange:p})]}),Object(r.jsxs)("label",{className:Y.a.label,children:[Object(r.jsxs)("p",{className:Y.a.text,children:["Password",Object(r.jsx)("span",{className:Y.a.star,children:"*"})]}),Object(r.jsx)("input",{className:Y.a.input,type:"password",name:"password",value:f,onChange:p})]}),Object(r.jsx)("button",{className:Y.a.button,type:"submit",children:"Create account"})]})]})}var $=n(17),ee=n.n($);function te(){var e=Object(u.b)(),t=Object(a.useState)(""),n=Object(X.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(X.a)(o,2),l=i[0],b=i[1],j=Object(u.c)(N.getErrorLogin),d=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return s(r);case"password":return b(r);default:return}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:ee.a.title,children:"Sign in to Phonebook"}),j&&Object(r.jsx)("p",{className:ee.a.error,children:j}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(C.login({email:c,password:l})),s(""),b("")},className:ee.a.form,autoComplete:"off",children:[Object(r.jsxs)("label",{className:ee.a.label,children:[Object(r.jsx)("p",{className:ee.a.text,children:"Email address"}),Object(r.jsx)("input",{className:ee.a.input,type:"email",name:"email",value:c,onChange:d})]}),Object(r.jsxs)("label",{className:ee.a.label,children:[Object(r.jsx)("p",{className:ee.a.text,children:"Password"}),Object(r.jsx)("input",{className:ee.a.input,type:"password",name:"password",value:l,onChange:d})]}),Object(r.jsx)("button",{className:ee.a.button,type:"submit",children:"Sign in"})]})]})}var ne=n(56),re=n.n(ne),ae=function(e){var t=e.children,n=e.onClick,a=Object(d.a)(e,["children","onClick"]);return Object(r.jsx)("button",Object(j.a)(Object(j.a)({type:"button",className:re.a.IconButton,onClick:n},a),{},{children:t}))};ae.defaultProps={onClick:function(){return null},children:null};var ce=ae,se=Object(g.b)("contacts/fetchContactsRequest"),oe=Object(g.b)("contacts/fetchContactsSuccess"),ie=Object(g.b)("contacts/fetchContactsError"),ue=Object(g.b)("contacts/addContactRequest"),le=Object(g.b)("contacts/addContactSuccess"),be=Object(g.b)("contacts/addContactError"),je=Object(g.b)("contacts/deleteContactRequest"),de=Object(g.b)("contacts/deleteContactSuccess"),fe=Object(g.b)("contacts/deleteContactError"),Oe=Object(g.b)("contacts/changeFilter");m.a.defaults.baseURL="http://localhost:3000";var he=n(30),pe=function(e){return e.contacts.items},me=function(e){return e.contacts.filter},ge=Object(he.a)([pe,me],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}));function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _e=a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Ce=a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function Ne(e,t){var n=e.title,r=e.titleId,c=ve(e,["title","titleId"]);return a.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,_e,Ce)}var ke=a.forwardRef(Ne),we=(n.p,n(34)),ye=n.n(we);function Le(){var e=Object(u.c)(ge),t=Object(u.b)(),n=function(e){return t(function(e){return function(t){t(je()),m.a.delete("/contacts/".concat(e)).then((function(){return t(de(e))})).catch((function(e){return t(fe(e))}))}}(e))};return Object(r.jsx)("ul",{className:ye.a.list,children:e.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(r.jsxs)("li",{className:ye.a.item,children:[Object(r.jsxs)("p",{className:ye.a.text,children:[a,": ",c]}),Object(r.jsx)(ce,{onClick:function(){return n(t)},"aria-label":"Delete contact",children:Object(r.jsx)(ke,{width:"24",height:"24",fill:"#fff"})})]},t)}))})}var Ie=n(22),Se=n.n(Ie);function Ue(){var e=Object(u.c)(pe),t=Object(u.b)(),n=function(e,n){return t(function(e,t){return function(n){var r={name:e,number:t};n(ue()),m.a.post("/contacts",r).then((function(e){var t=e.data;return n(le(t))})).catch((function(e){return n(be(e))}))}}(e,n))},c=Object(a.useState)(""),s=Object(X.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(""),b=Object(X.a)(l,2),j=b[0],d=b[1],f=function(){i(""),d("")};return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),(e.find((function(e){return o===e.name}))?(alert("".concat(o," is already in contacts")),1):""===o||""===j?(alert("Please enter all data"),1):void 0)||(n(o,j),f())},className:Se.a.form,children:[Object(r.jsxs)("label",{className:Se.a.formItem,children:["Name",Object(r.jsx)("input",{type:"text",name:"name",value:o,placeholder:"\u0421ontact name",onChange:function(e){return i(e.currentTarget.value)},className:Se.a.input})]}),Object(r.jsxs)("label",{className:Se.a.formItem,children:["Number",Object(r.jsx)("input",{type:"tel",name:"number",value:j,placeholder:"\u0421ontact number",onChange:function(e){return d(e.currentTarget.value)},className:Se.a.input})]}),Object(r.jsx)("button",{type:"submit",className:Se.a.button,children:"Add contact"})]})}var Fe=n(35),Ee=n.n(Fe);function Re(){var e=Object(u.c)(me),t=Object(u.b)();return Object(r.jsx)("div",{className:Ee.a.container,children:Object(r.jsxs)("label",{className:Ee.a.label,children:["Find contacts by name",Object(r.jsx)("input",{type:"text",value:e,onChange:function(e){return t(Oe(e.target.value))},className:Ee.a.input})]})})}var Pe=n(57),Ve=n.n(Pe);function Ae(){var e=Object(u.b)();return Object(a.useEffect)((function(){return e(function(){var e=Object(h.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(se()),e.prev=1,e.next=4,m.a.get("/contacts");case 4:n=e.sent,r=n.data,t(oe(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(ie(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.jsxs)("div",{className:Ve.a.container,children:[Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(Ue,{}),Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)(Re,{}),Object(r.jsx)(Le,{})]})}var Be,Te,ze=function(){var e=Object(u.c)(N.getIsFetchingCurrentUser),t=Object(u.b)();return Object(a.useEffect)((function(){t(C.fetchCurrentUser())}),[t]),!e&&Object(r.jsxs)(F,{children:[Object(r.jsx)(G,{}),Object(r.jsxs)(b.d,{children:[Object(r.jsx)(L,{path:"/",exact:!0,children:Object(r.jsx)(Q,{})}),Object(r.jsx)(L,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(r.jsx)(Z,{})}),Object(r.jsx)(L,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(r.jsx)(te,{})}),Object(r.jsx)(y,{path:"/contacts",redirectTo:"/login",children:Object(r.jsx)(Ae,{})})]}),Object(r.jsx)(I.a,{autoClose:3e3,position:"top-center"})]})},He=n(32),De=n(58),Me=n.n(De),qe=n(20),Ge=n(59),We=n.n(Ge),Je=n(7),Qe=Object(g.d)([],(Be={},Object(k.a)(Be,oe,(function(e,t){return t.payload})),Object(k.a)(Be,le,(function(e,t){return[t.payload].concat(Object(He.a)(e))})),Object(k.a)(Be,de,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Be)),Xe=Object(g.d)("",Object(k.a)({},Oe,(function(e,t){return t.payload}))),Ke=Object(g.d)(!1,(Te={},Object(k.a)(Te,se,(function(){return!0})),Object(k.a)(Te,oe,(function(){return!1})),Object(k.a)(Te,ie,(function(){return!1})),Object(k.a)(Te,ue,(function(){return!0})),Object(k.a)(Te,le,(function(){return!1})),Object(k.a)(Te,be,(function(){return!1})),Object(k.a)(Te,je,(function(){return!0})),Object(k.a)(Te,de,(function(){return!1})),Object(k.a)(Te,fe,(function(){return!1})),Te)),Ye=Object(Je.c)({items:Qe,filter:Xe,loading:Ke}),Ze=[].concat(Object(He.a)(Object(g.f)({serializableCheck:{ignoredActions:[qe.a,qe.f,qe.b,qe.c,qe.d,qe.e]}})),[Me.a]),$e={key:"auth",storage:We.a,whitelist:["token"]},et=Object(g.a)({reducer:{auth:Object(qe.g)($e,w),contacts:Ye},middleware:Ze,devTools:!1}),tt=Object(qe.h)(et);n(92);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u.a,{store:et,children:Object(r.jsx)(l.a,{loading:null,persistor:tt,children:Object(r.jsx)(i.a,{children:Object(r.jsx)(ze,{})})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.cd4cc326.chunk.js.map