(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=a(3),u=a.n(o),s=a(1),m=a(2),i=a(6),d=(a(13),function(e){return fetch(e).then(function(e){return e.json()})});var b=function(e){var t=e.user;return r.a.createElement("td",{className:"table__item"},t.name)};var p=function(e){var t=e.todo;return r.a.createElement("tr",null,r.a.createElement("td",{className:"table__item"},t.id),r.a.createElement("td",{className:"table__item"},t.title),r.a.createElement(b,{user:t.user}),r.a.createElement("td",{className:"table__item"},t.completed?"+":"-"))},f=function(e){var t=e.fullTodos,a=Object(n.useState)(Object(s.a)(t)),c=Object(m.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(""),i=Object(m.a)(u,2),d=i[0],b=i[1],f=function(e){var t,a;e===d?o(Object(s.a)(l.reverse())):(o(Object(s.a)((t=l,"user"===(a=e)?Object(s.a)(t).sort(function(e,t){return e.user.name.localeCompare(t.user.name)}):Object(s.a)(t).sort(function(e,t){switch(typeof e[a]){case"string":return e[a].localeCompare(t[a]);case"boolean":return Number(t[a])-Number(e[a]);default:return e[a]-t[a]}})))),b(e))};return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,["id","title","user","completed"].map(function(e){return r.a.createElement("th",{className:"table__heading",onClick:function(){return f(e)}},e.toUpperCase())}))),r.a.createElement("tbody",null,l.map(function(e){return r.a.createElement(p,{todo:e,key:e.id})})))},j=function(e,t){return e.map(function(e){return Object(i.a)({},e,{user:t.find(function(t){return t.id===e.userId})})})},E=[],O=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),i=o[0],b=o[1],p=Object(n.useState)(!1),O=Object(m.a)(p,2),v=O[0],h=O[1],N=function(){var e,t;return u.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,h(!1),b(!0),a.next=5,u.a.awrap(d("https://jsonplaceholder.typicode.com/todos"));case 5:return e=a.sent,a.next=8,u.a.awrap(d("https://jsonplaceholder.typicode.com/users"));case 8:t=a.sent,E=Object(s.a)(j(e,t)),c(!0),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),h(!0);case 16:b(!1);case 17:case"end":return a.stop()}},null,null,[[0,13]])};return r.a.createElement("div",{className:"App"},!a&&!i&&!v&&r.a.createElement("button",{type:"button",className:"load load--start",onClick:N},"Load"),i&&!v&&r.a.createElement("p",{className:"loading-text"},"Loading..."),v&&r.a.createElement("button",{type:"button",className:"load load--start",onClick:N},"Try again"),a&&!i&&r.a.createElement(f,{fullTodos:Object(s.a)(E)}))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.67514448.chunk.js.map