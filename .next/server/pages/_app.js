(()=>{var e={};e.id=888,e.ids=[888],e.modules={3527:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>h});var t=r(997);r(1367);var i=r(968),l=r.n(i),a=r(6689),c=r(7028);let n={NAV:"NAV",SIDEBAR:"SIDEBAR"},d=(e,s)=>{switch(s.type){case n.NAV:return{...e,nav:s.payload};case n.SIDEBAR:return{...e,sidebar:s.payload};default:return e}},u=e=>{let[s,r]=(0,a.useReducer)(d,{nav:"about",sidebar:!1});return t.jsx(c.Z.Provider,{value:{nav:s.nav,changeNav:e=>{r({type:n.NAV,payload:e})},sidebar:s.sidebar,changeSideBar:e=>{r({type:n.SIDEBAR,payload:e})}},children:e.children})},o=()=>{let[e,s]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{setTimeout(()=>{s(!1)},2e3)},[]),t.jsx("div",{className:"preloader",style:{display:e?"block":"none"},children:t.jsx("div",{className:"centrize full-width",children:t.jsx("div",{className:"vertical-center",children:(0,t.jsxs)("div",{className:"spinner",children:[t.jsx("div",{className:"double-bounce1"}),t.jsx("div",{className:"double-bounce2"})]})})})})};r(6764);let h=function({Component:e,pageProps:s}){return(0,t.jsxs)(u,{children:[(0,t.jsxs)(l(),{children:[t.jsx("link",{href:"https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",rel:"stylesheet"}),t.jsx("link",{rel:"stylesheet",href:"css/basic.css"}),t.jsx("link",{rel:"stylesheet",href:"css/layout.css"}),t.jsx("link",{rel:"stylesheet",href:"css/blogs.css"}),t.jsx("link",{rel:"stylesheet",href:"css/ionicons.css"}),t.jsx("link",{rel:"stylesheet",href:"css/magnific-popup.css"}),t.jsx("link",{rel:"stylesheet",href:"css/animate.css"}),t.jsx("link",{rel:"stylesheet",href:"css/gradient.css"}),t.jsx("title",{children:"Ryan - vCard / Resume / CV Template"}),t.jsx("link",{rel:"shortcut icon",href:"images/favicons/favicon.ico"})]}),t.jsx(o,{}),t.jsx(e,{...s})]})}},7028:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});let t=(0,r(6689).createContext)()},1367:()=>{},6764:()=>{},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")}};var s=require("../webpack-runtime.js");s.C(e);var r=s(s.s=3527);module.exports=r})();