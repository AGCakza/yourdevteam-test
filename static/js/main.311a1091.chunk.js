(this["webpackJsonpyourdevteam-test"]=this["webpackJsonpyourdevteam-test"]||[]).push([[0],{69:function(e,t,A){},94:function(e,t,A){"use strict";A.r(t);var n=A(0),a=A(9),i=A.n(a),c=(A(69),A(27)),l=A(39),s=A(30),r=A(59),d=A(130),o=A(2),b=function(e){var t=e.handleSubmit,A=e.handleChange,n=e.data;return Object(o.jsxs)("form",{className:"contact_form",onSubmit:t,children:[Object(o.jsxs)("div",{className:"contact_form-group",children:[Object(o.jsx)(d.a,{onChange:A,value:n.email,name:"email",label:"Your email",type:"email",classes:{root:"contact_input_root"}}),Object(o.jsx)(d.a,{onChange:A,value:n.subject,name:"subject",label:"Subject",type:"text",classes:{root:"contact_input_root"}})]}),Object(o.jsx)(d.a,{onChange:A,value:n.message,name:"message",label:"Message here...",type:"text",multiline:!0,rows:3,classes:{root:"contact_input_root"}}),Object(o.jsx)("input",{type:"submit",className:"btn-red contact_form_submit",value:"Send Message"})]})},j=function(){var e=Object(n.useState)({email:"",subject:"",message:""}),t=Object(r.a)(e,2),A=t[0],a=t[1];return Object(o.jsx)("div",{className:"contact",id:"contact",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"contact-wrapper",children:[Object(o.jsx)("div",{className:"contact__sub sub_text uppercase",children:"Contact us"}),Object(o.jsx)("div",{className:"contact__title title_text",children:"Contact us"}),Object(o.jsx)(b,{handleChange:function(e){return a((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},handleSubmit:function(e){e.preventDefault(),alert("email: ".concat(A.email,", subject: ").concat(A.subject,", message: ").concat(A.message))},data:A})]})})})},u=function(){return Object(o.jsx)(o.Fragment,{children:[{link:"/#",label:"Home."},{link:"/#title",label:"About us."},{link:"/#portfolio",label:"Portfolio."},{link:"/",label:"Blog."},{link:"/#contact",label:"Contact us."}].map((function(e,t){return Object(o.jsx)("li",{className:"nav__link",children:Object(o.jsx)("a",{onClick:function(){return document.getElementById("nav").classList.remove("active")},href:e.link,children:e.label})},t)}))})},v=A.p+"static/media/facebook.31406fb3.svg",p=A.p+"static/media/twitter.bcf995ae.svg",m=A.p+"static/media/dribble.7cd9027b.svg",f=function(){var e=[{link:"",img:v,name:"facebook"},{link:"",img:p,name:"twitter"},{link:"",img:m,name:"dribble"}];return Object(o.jsx)("div",{className:"footer__socials",children:e.map((function(e,t){return Object(o.jsx)("div",{className:"footer__socials_item",children:Object(o.jsx)("a",{href:e.link,children:Object(o.jsx)("img",{src:e.img,alt:e.name})})},t)}))})},O=function(){return Object(o.jsx)("div",{className:"footer",id:"footer",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"footer-wrapper",children:[Object(o.jsx)("h4",{className:"footer__sub sub_text uppercase",children:"Doob"}),Object(o.jsx)("h4",{className:"footer__title title_text uppercase",children:"Creativity above"}),Object(o.jsx)("ul",{className:"footer__list list",children:Object(o.jsx)(u,{})}),Object(o.jsx)("p",{className:"footer__label",children:"\xa9 2019 - Doob, All Right Reserved"}),Object(o.jsx)(f,{})]})})})},x=A(57),g=A.n(x),T=A(129),N=function(){return Object(o.jsx)("nav",{id:"nav",children:Object(o.jsx)("div",{className:"nav-wrapper",children:Object(o.jsxs)("div",{className:"container nav-container",children:[Object(o.jsx)("div",{className:"nav__burger",onClick:function(){return document.getElementById("nav").classList.toggle("active")},children:Object(o.jsx)("span",{})}),Object(o.jsxs)("div",{className:"nav__group",children:[Object(o.jsx)("div",{className:"nav__logo",children:Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"})}),Object(o.jsx)("ul",{className:"nav__list list",children:Object(o.jsx)(u,{})})]}),Object(o.jsxs)("div",{className:"nav__group",children:[Object(o.jsx)("div",{className:"nav__lang",children:Object(o.jsxs)(T.a,{native:!0,children:[Object(o.jsx)("option",{value:0,children:"EN"}),Object(o.jsx)("option",{value:1,children:"RU"})]})}),Object(o.jsxs)("a",{href:"/#contact",className:"nav__contact",children:["Contact us ",Object(o.jsx)(g.a,{style:{color:"#ff3a47",fontSize:30}})]})]})]})})})},h=function(e){e.item;var t=e.index;return Object(o.jsx)("div",{className:"portfolio__card"},t)},D=function(){return Object(o.jsx)("div",{className:"portfolio",id:"portfolio",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"portfolio-wrapper",children:[Object(o.jsx)("h3",{className:"portfolio__title title_text",children:"See some of our Creative work."}),Object(o.jsx)("div",{className:"portfolio__content",children:[{},{},{},{},{},{}].map((function(e,t){return Object(o.jsx)(h,{item:e,index:t},t)}))}),Object(o.jsx)(c.b,{to:"/",className:"portfolio_btn btn-tran",children:"See more of These."})]})})})},y=A(58),S=A.n(y),X=A.p+"static/media/title.cc8559c6.png",P=function(e){var t=e.item,A=e.index;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"title__card",children:[Object(o.jsxs)("div",{className:"title__info",children:[Object(o.jsx)("div",{className:"title__info_title",children:Object(o.jsx)("h3",{children:t.title})}),Object(o.jsx)("div",{className:"title__info_label",children:Object(o.jsx)("p",{children:t.label})}),Object(o.jsxs)("div",{className:"title__info__btns",children:[Object(o.jsx)("div",{className:"title__info__btns_about btn-red",children:"More about us"}),Object(o.jsx)(c.b,{to:"/",className:"title__info__btns_touch btn-tran",children:"Get in touch."})]})]}),Object(o.jsx)("div",{className:"title__img",children:Object(o.jsx)("img",{src:t.img,alt:"title"})})]})},A)},E=function(){var e=[{title:"The Spirit of Digital Agency.",label:"Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",img:X},{title:"The Spirit of Digital Agency.2",label:"Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",img:X},{title:"The Spirit of Digital Agency.3",label:"Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",img:X}];return Object(o.jsx)("div",{className:"title",id:"title",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"title-wrapper",children:Object(o.jsx)(S.a,Object(s.a)(Object(s.a)({},{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,zIndex:0,autoplaySpeed:7500,autoplay:!0}),{},{children:e.map((function(e,t){return Object(o.jsx)(P,{item:e,index:t},t)}))}))})})})},k=function(){return Object(o.jsxs)(c.a,{children:[Object(o.jsx)(N,{}),Object(o.jsx)(E,{}),Object(o.jsx)(D,{}),Object(o.jsx)(j,{}),Object(o.jsx)(O,{})]})};i.a.render(Object(o.jsx)(k,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.311a1091.chunk.js.map