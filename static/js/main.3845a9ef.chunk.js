(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{21:function(t,e,n){t.exports={title:"Section_title__3V4Zi"}},22:function(t,e,n){t.exports={form:"Form_form__2nI1A",button:"Form_button__2tvD2"}},23:function(t,e,n){t.exports={label:"Filter_label___jGbV",input:"Filter_input__3Pbsz"}},72:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(13),u=n.n(a),o=n(7),i=n(16),s=n(5),l=n(33),b=n.n(l),j=n(3),f=n(6),p=n(2),d=n.n(p),O=n(8),h=n(11),m=n.n(h);function x(){return v.apply(this,arguments)}function v(){return(v=Object(O.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("/contacts");case 2:return e=t.sent,n=e.data,console.log("data >>",n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t,e){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(d.a.mark((function t(e,n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("/contacts",{name:e,number:n});case 2:return r=t.sent,c=r.data,console.log("data >>",c),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return(y=Object(O.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("/contacts/".concat(e));case 2:return console.log("data >>",e),t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}m.a.defaults.baseURL="http://localhost:3030";var C,N,k=Object(s.c)("contacts/getContacts",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,x();case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),F=Object(s.c)("contacts/addContact",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var r,c,a,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,c=e.number,a=n.rejectWithValue,t.prev=2,t.next=5,_(r,c);case 5:return u=t.sent,t.abrupt("return",u);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}()),A=Object(s.c)("contacts/deleteContact",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,w(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),z=Object(s.b)("contacts/filter"),D=Object(s.d)([],(C={},Object(j.a)(C,k.fulfilled,(function(t,e){return e.payload})),Object(j.a)(C,F.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(j.a)(C,A.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),C)),S=Object(s.d)("",Object(j.a)({},z,(function(t,e){return e.payload}))),T=Object(s.d)(!1,(N={},Object(j.a)(N,k.pending,(function(){return!0})),Object(j.a)(N,k.fulfilled,(function(){return!1})),Object(j.a)(N,k.rejected,(function(){return!1})),Object(j.a)(N,F.pending,(function(){return!0})),Object(j.a)(N,F.fulfilled,(function(){return!1})),Object(j.a)(N,F.rejected,(function(){return!1})),Object(j.a)(N,A.pending,(function(){return!0})),Object(j.a)(N,A.fulfilled,(function(){return!1})),Object(j.a)(N,A.rejected,(function(){return!1})),N)),V=Object(f.b)({items:D,filter:S,isLoading:T}),L=[].concat(Object(i.a)(Object(s.e)()),[b.a]),Z=Object(s.a)({reducer:{contacts:V},middleware:L,devTools:!1}),q=n(24),B=n(20),J=n.n(B),W=n(14),E=function(t){return t.contacts.items},G=function(t){return t.contacts.filter},I=Object(W.a)([E,G],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),M=n(21),P=n.n(M),H=n(1),R=function(t){var e=t.title,n=t.children;return Object(H.jsxs)("section",{className:P.a.section,children:[Object(H.jsx)("h2",{className:P.a.title,children:e}),n]})},U=n(22),Y=n.n(U),$=function(){var t=Object(r.useState)(""),e=Object(q.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),u=Object(q.a)(a,2),i=u[0],s=u[1],l=Object(o.c)(E),b=Object(o.b)(),j=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":return c(r);case"number":return s(r)}},f=function(){c(""),s("")},p=J.a.generate(),d=J.a.generate();return Object(H.jsx)(R,{title:"Phonebook",children:Object(H.jsxs)("form",{className:Y.a.form,onSubmit:function(t){if(t.preventDefault(),l.find((function(t){return t.name===n})))return alert("".concat(n," is already in the contact list"));b(F({name:n,number:i})),f()},children:[Object(H.jsxs)("label",{htmlFor:p,children:["Name",Object(H.jsx)("input",{type:"text",name:"name",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",id:p,required:!0})]}),Object(H.jsxs)("label",{htmlFor:d,children:["Number",Object(H.jsx)("input",{type:"tel",name:"number",value:i,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",id:d,required:!0})]}),Object(H.jsx)("button",{type:"submit",className:Y.a.button,children:"Add new contact"})]})})},K=n(23),Q=n.n(K),X=function(){var t=Object(o.c)(G),e=Object(o.b)();return Object(H.jsxs)("label",{className:Q.a.label,children:["Find contacts by name",Object(H.jsx)("input",{className:Q.a.input,name:"filter",type:"text",placeholder:"Type contact name",value:t,onChange:function(t){return e(z(t.currentTarget.value))}})]})},tt=n(9),et=n.n(tt),nt=function(){var t=Object(o.c)(I),e=Object(o.b)();return Object(r.useEffect)((function(){e(k())}),[e]),Object(H.jsx)(R,{title:"Contacts",children:0!==t.length?Object(H.jsx)("ul",{className:et.a.list,children:t.map((function(t){var n=t.id,r=t.name,c=t.number;return Object(H.jsxs)("li",{className:et.a.item,children:[Object(H.jsxs)("div",{className:et.a.position,children:[Object(H.jsxs)("span",{children:[r,":"]}),Object(H.jsx)("span",{children:c})]}),Object(H.jsx)("button",{className:et.a.button,type:"button",onClick:function(){return e(A(n))},children:"Delete"})]},n)}))}):Object(H.jsx)("p",{className:et.a.notification,children:"No contacts found :("})})};function rt(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)($,{}),Object(H.jsx)(X,{}),Object(H.jsx)(nt,{})]})}n(71),n(72);u.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(o.a,{store:Z,children:Object(H.jsx)(rt,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"Contacts_list__3-hwD",item:"Contacts_item__3HfDq",button:"Contacts_button__1BNz9",notification:"Contacts_notification__1bYrG",position:"Contacts_position__1TFAk"}}},[[73,1,2]]]);
//# sourceMappingURL=main.3845a9ef.chunk.js.map