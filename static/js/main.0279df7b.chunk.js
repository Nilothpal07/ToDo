(this.webpackJsonpproject7=this.webpackJsonpproject7||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),i=n.n(a),s=n(8),d=n(6),r=n(3),l=n.p+"static/media/todo.d03f5fab.png",j=(n(13),n(0)),o=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),o=Object(r.a)(i,2),b=o[0],u=o[1],f=Object(c.useState)(""),m=Object(r.a)(f,2),O=m[0],h=m[1],x=Object(c.useState)(!1),p=Object(r.a)(x,2),v=p[0],g=p[1],N=function(){if(n)if(n&&v)u(b.map((function(e){return e.id===O?Object(d.a)(Object(d.a)({},e),{},{name:n}):e}))),a(""),h(null),g(!1);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(s.a)(b),[e])),a("")}else alert("plz fill the data")};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:l,alt:"todologo"}),Object(j.jsx)("figcaption",{children:"Add Your List Here \u270c"})]}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"\u270d Add Item",className:"form-control",value:n,onChange:function(e){return a(e.target.value)}}),v?Object(j.jsx)("i",{className:"fa fa-edit add-btn",onClick:N}):Object(j.jsx)("i",{className:"fa fa-plus add-btn",onClick:N})]}),Object(j.jsx)("div",{className:"showItems",children:b.map((function(e){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=b.find((function(t){return t.id===e}));a(t.name),h(e),g(!0)}(e.id)}}),Object(j.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=b.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:Object(j.jsx)("span",{children:" CHECK LIST"})})})]})})})},b=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))});i.a.render(Object(j.jsx)(o,{}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.0279df7b.chunk.js.map