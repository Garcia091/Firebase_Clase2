(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{167:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),o=a.n(c),l=a(6),u=a(28),i="[Auth] Login",s="[Auth Logout]",m="[UI] set Error",d="[UI] Remove Error",p="[UI] Start loading",f="[UI] Finish loading",b="[Notes] New notes",h="[Notes] Set note active",E="[Notes] Load notes",v="[Notes] Update notes",g="[Notes] New notes",j="[Notes] Logout ",y={uid:"",name:""},O=a(5),N={loadding:!1,msjError:null},w=a(43),_={notes:[],active:null},k=a(62),x=Object(u.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return{uid:t.payload.uid,name:t.payload.displayName};case s:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(O.a)(Object(O.a)({},e),{},{msjError:t.payload});case d:return Object(O.a)(Object(O.a)({},e),{},{msjError:null});case p:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case f:case s:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(O.a)(Object(O.a)({},e),{},{active:Object(O.a)({},t.payload)});case E:return console.log(t.payload),Object(O.a)(Object(O.a)({},e),{},{notes:Object(w.a)(t.payload)});case v:return console.log(t.payload.id),Object(O.a)(Object(O.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.notes:e}))});case g:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case b:return Object(O.a)(Object(O.a)({},e),{},{notes:[t.payload].concat(Object(w.a)(e.notes))});case j:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:[]});default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,S=Object(u.d)(x,C(Object(u.a)(k.a))),A=a(7),I=a.n(A),L=a(12),P=a(18),D=a(27);a(169),a(75);D.a.initializeApp({apiKey:"AIzaSyCjEJEW1Ml0UmhpW0HZP5TSs96AsgGkreo",authDomain:"app-frontend-6.firebaseapp.com",projectId:"app-frontend-6",storageBucket:"app-frontend-6.appspot.com",messagingSenderId:"66843513700",appId:"1:66843513700:web:ac800485c5370d3e30a071"});var T=D.a.firestore(),U=new D.a.auth.GoogleAuthProvider,W=a(19),q=a(8),R=function(e){return{type:m,payload:e}},B=function(){return{type:p}},F=function(){return{type:f}},G=function(){var e=Object(L.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.collection("".concat(t,"/journal/note")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(O.a)({id:e.id},e.data()))})),console.log(n),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=a(23),J=a.n(z),M=function(){var e=Object(L.a)(I.a.mark((function e(t){var a,n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/db9wh5uvt/image/upload",(a=new FormData).append("upload_preset","react-app"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/db9wh5uvt/image/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=16;break}return e.next=11,n.json();case 11:return r=e.sent,console.log("data",r),e.abrupt("return",r.secure_url);case 16:return e.next=18,n.json();case 18:throw e.sent;case 19:e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(4),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t){return e.apply(this,arguments)}}(),X=function(e,t){return{type:h,payload:Object(O.a)({id:e},t)}},H=function(e,t){return{type:b,payload:Object(O.a)({id:e},t)}},K=function(e){return function(){var t=Object(L.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e);case 2:n=t.sent,a(V(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},V=function(e){return{type:E,payload:e}},Z=function(e){return function(){var t=Object(L.a)(I.a.mark((function t(a,n){var r,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(O.a)({},e)).id,t.next=6,T.doc("".concat(r,"/journal/note/").concat(e.id)).update(c);case 6:a(Q(e.id,c)),J.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},Q=function(e,t){return{type:v,payload:{id:e,notes:Object(O.a)({id:e},t)}}},Y=function(e){return{type:g,payload:e}},$=function(e,t){return{type:i,payload:{uid:e,displayName:t}}},ee=function(){return{type:s}},te=a(33),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(P.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},l=function(e){var t=e.target;c(Object(O.a)(Object(O.a)({},r),{},Object(te.a)({},t.name,t.value)))};return[r,l,o]},ne=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui}));console.log(t);var a=ae({email:"garcia123@gmail.com",password:"1234567"}),n=Object(P.a)(a,2),c=n[0],o=n[1],u=c.email,i=c.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(a){return a(B),D.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a($(t.uid,t.displayName)),a(F)})).catch((function(e){console.log(e)}))}}(u,i))}},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:i,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){D.a.auth().signInWithPopup(U).then((function(t){var a=t.user;e($(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(W.b,{to:"/auth/register",className:"link"},"Create new account")))},re=a(63),ce=a.n(re),oe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).msjError,a=ae({name:"",email:"",password:"",password2:""}),n=Object(P.a)(a,2),c=n[0],o=n[1],u=c.name,i=c.email,s=c.password,m=c.password2,p=function(){return 0===u.trim().length?(e(R("nombre requerido")),console.log("nombre requerido"),!1):ce.a.isEmail(i)?s!==m?(console.log("La contrase\xf1a es incorrecta"),e(R("La contrase\xf1a es incorrecta")),!1):(e({type:d}),!0):(e(R("Email requerido")),console.log("Email requerido"),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),p()&&e(function(e,t,a){return function(n){D.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(L.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n($(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}(i,s,u))}},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:s,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:m,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(W.b,{to:"/auth/login",className:"link"},"Already registered?")))},le=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(q.d,null,r.a.createElement(q.b,{exact:!0,path:"/auth/login",component:ne}),r.a.createElement(q.b,{exact:!0,path:"/auth/register",component:oe}),r.a.createElement(q.a,{to:"/auth/login"}))))},ue=a(64),ie=a.n(ue),se=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=ie()(a),i=Object(l.b)();return r.a.createElement("div",{className:"journal__entry pointer",onClick:function(){i(X(t,{date:a,title:n,body:c,url:o}))}},r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,u.format("dddd")),r.a.createElement("h4",null,u.format("Do"))))},me=function(){var e=Object(l.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(se,Object.assign({key:e.id},e))})))},de=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name,a=Object(l.c)((function(e){return e.notes})).notes;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("span",null," ",t)),r.a.createElement("button",{className:"btn",onClick:function(){console.log("Click"),e(function(){var e=Object(L.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.auth().signOut();case 2:t(ee()),t({type:j});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(L.a)(I.a.mark((function e(t,a){var n,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,T.collection("".concat(n,"/journal/note")).add(r);case 4:c=e.sent,console.log(),t(X(c.id,r)),t(H(c.id,r));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),console.log("Click",a)}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(me,null))},pe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"28 de agosto 2020"),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];console.log("url cargado",a),a&&e(function(e){return function(){var t=Object(L.a)(I.a.mark((function t(a,n){var r,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,J.a.fire({title:"Uploading...",text:"Please wait ...",allowOutsideClick:!1,onBeforeOpen:function(){J.a.showLoading()}}),t.next=4,M(e);case 4:c=t.sent,r.url=c,a(Z(r)),J.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(Z(t))}},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){var a;e((a=t.id,function(){var e=Object(L.a)(I.a.mark((function e(t,n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().auth.uid,e.next=3,T.doc("".concat(r,"/journal/note/").concat(a)).delete();case 3:t(Y(a)),J.a.fire({position:"top-end",icon:"success",title:"Delete",showConfirmButton:!1,timer:1500});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}},"Eliminar")))},fe=function(){var e=Object(l.c)((function(e){return e.notes})).active,t=Object(l.b)(),a=ae(e),c=Object(P.a)(a,3),o=c[0],u=c[1],i=c[2],s=o.body,m=o.title,d=Object(n.useRef)(e.id);return Object(n.useEffect)((function(){e.id!==d.current&&i(e),d.current=e.id}),[e,i]),Object(n.useEffect)((function(){t(X(o.id,Object(O.a)({},o)))}),[o,t]),r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(pe,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:m,onChange:u}),r.a.createElement("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:s,onChange:u}),e.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:e.url,alt:"imagen"}))))},be=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"pr create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},he=function(){var e=Object(l.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content"},r.a.createElement(de,null),r.a.createElement("main",null,e?r.a.createElement(fe,null):r.a.createElement(be,null)))},Ee=a(35),ve=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Ee.a)(e,["isAuthenticated","component"]);return r.a.createElement(q.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(q.a,{to:"/auth/login"})}}))},ge=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Ee.a)(e,["isAuthenticated","component"]);return r.a.createElement(q.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(q.a,{to:"/"}):r.a.createElement(a,e)}}))},je=function(){return r.a.createElement("div",{className:" text-center"},r.a.createElement("div",{className:"container p-4"},r.a.createElement("div",{className:"  row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body "},r.a.createElement("h1",{className:"h4"},"Add Task"),r.a.createElement("form",{id:"task-form"},r.a.createElement("div",{className:"form-group py-3"},r.a.createElement("input",{type:"text",id:"task-title",className:"form-control",placeholder:"Task Title",autofocus:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{id:"task-description",rows:"3",className:"form-control",placeholder:"Task Description"})),r.a.createElement("button",{className:"btn btn-primary",id:"btn-task-form"},"Save"))))),r.a.createElement("div",{className:"col-md-6",id:"tasks-container"}))))},ye=function(){var e=Object(n.useState)(!0),t=Object(P.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(P.a)(o,2),i=u[0],s=u[1],m=Object(l.b)();return Object(n.useEffect)((function(){D.a.auth().onAuthStateChanged(function(){var e=Object(L.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),(null===t||void 0===t?void 0:t.uid)?(m($(t.uid,t.displayName)),s(!0),m(K(t.uid))):s(!1),c(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[m,c]),a?r.a.createElement("h1",null,"Cargando ..."):r.a.createElement(W.a,null,r.a.createElement("div",null,r.a.createElement(q.d,null,r.a.createElement(ge,{path:"/auth",component:le,isAuthenticated:i}),r.a.createElement(ve,{exact:!0,path:"/",component:he,isAuthenticated:i}),r.a.createElement(ve,{exact:!0,path:"/task",component:je,isAuthenticated:i}),r.a.createElement(q.a,{to:"/auth/login"}))))},Oe=function(){return r.a.createElement(l.a,{store:S},r.a.createElement(ye,null))};a(167);o.a.render(r.a.createElement(Oe,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a(168)}},[[65,1,2]]]);
//# sourceMappingURL=main.ce6cdc74.chunk.js.map