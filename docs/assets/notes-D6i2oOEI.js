import{u as l,j as s}from"./index-CLzoCpN7.js";const a={title:"Notes",description:"undefined"};function i(n){const e={a:"a",code:"code",div:"div",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"notes",children:["Notes",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#notes",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(e.p,{children:"Here are few notes that I believe worth to be aware of while using this library."}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["While using the events: ",s.jsx(e.a,{href:"/api/interfaces/KaPlanckPluginCtx#onkpcollide",children:"onKPCollide"}),`,
`,s.jsx(e.a,{href:"/api/interfaces/KaPlanckPluginCtx#onkpcollideend",children:"onKPCollideEnd"}),`, and
`,s.jsx(e.a,{href:"/api/interfaces/KaPlanckPluginCtx#onkpcollideupdate",children:"onKPCollideUpdate"}),`
please remember that you should not destroy any game object, instead try to use the helper function
`,s.jsx(e.a,{href:"/api/interfaces/KPWorldComp#addtodestroylist",children:"addToDestroyList"})," from the ",s.jsx(e.code,{children:"kpWorld"})," component."]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["Bodies, fixtures, joints have the ",s.jsx(e.a,{href:"/api/interfaces/KPUserData",children:"KPUserData"}),` attached to them incase you need
to access their respective game object.`]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["If your bodies have multiple fixtures, I recommend to create a game object with ",s.jsx(e.code,{children:"kpBody"}),` and add children
with the shapes and fixtures.`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" player"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" worldContainer."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"add"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  k."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"kpPos"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  k."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"kpRotate"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  k."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"kpBody"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"player."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"add"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  k."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"kpBoxShape"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ width: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", height: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  k."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"kpFixture"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"player."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"add"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  k."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"kpCircleShape"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ radius: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0.5"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  k."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"kpFixture"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})})]})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"The previous method can also be applied to things like sprites and other non-physics related components."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.em,{children:"Thanks to ricjones (from KAPLAY's discord) for bring up some of these points!"})})]})}function d(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{d as default,a as frontmatter};
