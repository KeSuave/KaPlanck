import{u as i,j as e}from"./index-CLzoCpN7.js";const t={title:"Interface: KPBodyComp",description:"undefined"};function d(r){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"interface-kpbodycomp",children:["Interface: KPBodyComp",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interface-kpbodycomp",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"extends",children:["Extends",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#extends",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Comp"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"properties",children:["Properties",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"body"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Body$1"})}),e.jsx(n.td,{children:"The physics body associated with the game object."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"collisionIgnore"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"}),"[]"]}),e.jsx(n.td,{children:"Tags of other components that this body should ignore collisions with."})]})]})]}),`
`,e.jsxs(n.h2,{id:"methods",children:["Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"addtodestroylist",children:["addToDestroyList()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#addtodestroylist",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"addToDestroyList"}),"(): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Adds the game object to a list of objects that will be destroyed when the world is not locked."}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Please consider using ",e.jsx(n.code,{children:"addToDestroyList"})," from ",e.jsx(n.code,{children:"kpWorld"}),` instead of this method, as this will
require to lookup the parent game object with `,e.jsx(n.code,{children:"kpWorld"})," component."]})}),`
`,e.jsxs(n.h4,{id:"returns",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"applyangularimpulse",children:["applyAngularImpulse()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#applyangularimpulse",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"applyAngularImpulse"}),"(",e.jsx(n.code,{children:"impulse"}),", ",e.jsx(n.code,{children:"wake"}),"?): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Applies an angular impulse to the body."}),`
`,e.jsxs(n.h4,{id:"parameters",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"impulse"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"wake"}),"?"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})]})]}),`
`,e.jsxs(n.h4,{id:"returns-1",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"applyforce",children:["applyForce()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#applyforce",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"applyForce"}),"(",e.jsx(n.code,{children:"force"}),", ",e.jsx(n.code,{children:"point"}),", ",e.jsx(n.code,{children:"wake"}),"?): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Applies a linear impulse to the body."}),`
`,e.jsxs(n.h4,{id:"parameters-1",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"force"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"point"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"wake"}),"?"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})]})]}),`
`,e.jsxs(n.h4,{id:"returns-2",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"applyforcetocenter",children:["applyForceToCenter()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#applyforcetocenter",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"applyForceToCenter"}),"(",e.jsx(n.code,{children:"force"}),", ",e.jsx(n.code,{children:"wake"}),"?): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Applies a force to the center of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-2",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"force"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"wake"}),"?"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})]})]}),`
`,e.jsxs(n.h4,{id:"returns-3",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-3",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"applylinearimpulse",children:["applyLinearImpulse()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#applylinearimpulse",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"applyLinearImpulse"}),"(",e.jsx(n.code,{children:"impulse"}),", ",e.jsx(n.code,{children:"point"}),", ",e.jsx(n.code,{children:"wake"}),"?): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Applies a linear impulse to the body."}),`
`,e.jsxs(n.h4,{id:"parameters-3",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-3",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"impulse"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"point"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"wake"}),"?"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})]})]}),`
`,e.jsxs(n.h4,{id:"returns-4",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-4",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsxs(n.h4,{id:"memberof",children:["Memberof",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#memberof",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"KPBodyComp"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"applytorque",children:["applyTorque()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#applytorque",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"applyTorque"}),"(",e.jsx(n.code,{children:"torque"}),", ",e.jsx(n.code,{children:"wake"}),"?): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Applies a torque to the body."}),`
`,e.jsxs(n.h4,{id:"parameters-4",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-4",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"torque"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"wake"}),"?"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})]})]}),`
`,e.jsxs(n.h4,{id:"returns-5",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-5",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"checkcontact",children:["checkContact()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#checkcontact",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"checkContact"}),"(",e.jsx(n.code,{children:"other"}),"): ",e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"Contact"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Checks if this game object is colliding with another game object."}),`
`,e.jsxs(n.h4,{id:"parameters-5",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-5",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"other"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"GameObj"})}),e.jsx(n.td,{children:"The other game object to check for collision with."})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-6",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-6",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"Contact"})]}),`
`,e.jsx(n.p,{children:"The contact information if colliding, otherwise null."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getangulardamping",children:["getAngularDamping()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getangulardamping",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getAngularDamping"}),"(): ",e.jsx(n.code,{children:"number"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the angular damping of the body."}),`
`,e.jsxs(n.h4,{id:"returns-7",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-7",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getangularvelocity",children:["getAngularVelocity()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getangularvelocity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getAngularVelocity"}),"(): ",e.jsx(n.code,{children:"number"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the angular velocity of the body."}),`
`,e.jsxs(n.h4,{id:"returns-8",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-8",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getbodytype",children:["getBodyType()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getbodytype",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getBodyType"}),"(): ",e.jsx(n.code,{children:"BodyType"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the type of the body."}),`
`,e.jsxs(n.h4,{id:"returns-9",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-9",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"BodyType"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getcontactlist",children:["getContactList()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getcontactlist",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getContactList"}),"(): ",e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"ContactEdge"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the contact list of the body."}),`
`,e.jsxs(n.h4,{id:"returns-10",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-10",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"ContactEdge"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getfixturelist",children:["getFixtureList()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getfixturelist",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getFixtureList"}),"(): ",e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"Fixture"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Retuns the fixture list of the body."}),`
`,e.jsxs(n.h4,{id:"returns-11",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-11",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"Fixture"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getgravityscale",children:["getGravityScale()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getgravityscale",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getGravityScale"}),"(): ",e.jsx(n.code,{children:"number"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the gravity scale of the body."}),`
`,e.jsxs(n.h4,{id:"returns-12",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-12",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getinertia",children:["getInertia()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getinertia",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getInertia"}),"(): ",e.jsx(n.code,{children:"number"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the inertia of the body."}),`
`,e.jsxs(n.h4,{id:"returns-13",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-13",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getjointlist",children:["getJointList()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getjointlist",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getJointList"}),"(): ",e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"JointEdge"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the joint list of the body."}),`
`,e.jsxs(n.h4,{id:"returns-14",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-14",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"null"})," | ",e.jsx(n.code,{children:"JointEdge"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getlineardamping",children:["getLinearDamping()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getlineardamping",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getLinearDamping"}),"(): ",e.jsx(n.code,{children:"number"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the linear damping of the body."}),`
`,e.jsxs(n.h4,{id:"returns-15",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-15",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getlinearvelocity",children:["getLinearVelocity()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getlinearvelocity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getLinearVelocity"}),"(): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the linear velocity of the body."}),`
`,e.jsxs(n.h4,{id:"returns-16",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-16",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getlinearvelocityfromlocalpoint",children:["getLinearVelocityFromLocalPoint()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getlinearvelocityfromlocalpoint",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getLinearVelocityFromLocalPoint"}),"(",e.jsx(n.code,{children:"localPoint"}),"): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the linear velocity from a local point."}),`
`,e.jsxs(n.h4,{id:"parameters-6",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-6",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"localPoint"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-17",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-17",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getlinearvelocityfromworldpoint",children:["getLinearVelocityFromWorldPoint()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getlinearvelocityfromworldpoint",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getLinearVelocityFromWorldPoint"}),"(",e.jsx(n.code,{children:"worldPoint"}),"): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the linear velocity from a world point."}),`
`,e.jsxs(n.h4,{id:"parameters-7",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-7",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"worldPoint"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-18",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-18",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getlocalcenter",children:["getLocalCenter()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getlocalcenter",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getLocalCenter"}),"(): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the local center of the body."}),`
`,e.jsxs(n.h4,{id:"returns-19",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-19",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getlocalpoint",children:["getLocalPoint()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getlocalpoint",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getLocalPoint"}),"(",e.jsx(n.code,{children:"worldPoint"}),"): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the local point from a world point."}),`
`,e.jsxs(n.h4,{id:"parameters-8",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-8",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"worldPoint"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-20",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-20",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getlocalvector",children:["getLocalVector()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getlocalvector",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getLocalVector"}),"(",e.jsx(n.code,{children:"worldVector"}),"): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the local vector from a world vector."}),`
`,e.jsxs(n.h4,{id:"parameters-9",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-9",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"worldVector"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-21",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-21",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getmass",children:["getMass()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getmass",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getMass"}),"(): ",e.jsx(n.code,{children:"number"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the mass data of the body."}),`
`,e.jsxs(n.h4,{id:"returns-22",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-22",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getmassdata",children:["getMassData()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getmassdata",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getMassData"}),"(",e.jsx(n.code,{children:"data"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the mass data of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-10",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-10",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"data"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MassData"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-23",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-23",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"gettransform",children:["getTransform()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gettransform",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getTransform"}),"(): ",e.jsx(n.code,{children:"Transform"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the transform of the body."}),`
`,e.jsxs(n.h4,{id:"returns-24",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-24",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Transform"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getworldcenter",children:["getWorldCenter()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getworldcenter",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getWorldCenter"}),"(): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the world center of the body."}),`
`,e.jsxs(n.h4,{id:"returns-25",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-25",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getworldpoint",children:["getWorldPoint()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getworldpoint",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getWorldPoint"}),"(",e.jsx(n.code,{children:"localPoint"}),"): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the world point from a local point."}),`
`,e.jsxs(n.h4,{id:"parameters-11",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-11",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"localPoint"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-26",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-26",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"getworldvector",children:["getWorldVector()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getworldvector",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"getWorldVector"}),"(",e.jsx(n.code,{children:"localVector"}),"): ",e.jsx(n.code,{children:"Vec2"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns the world vector from a local vector."}),`
`,e.jsxs(n.h4,{id:"parameters-12",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-12",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"localVector"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-27",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-27",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Vec2"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"haspoint",children:["hasPoint()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#haspoint",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"hasPoint"}),"(",e.jsx(n.code,{children:"point"}),"): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Checks if the body contains a specific point."}),`
`,e.jsxs(n.h4,{id:"parameters-13",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-13",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"point"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{children:"The point to check for containment within the body."})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-28",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-28",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.p,{children:"True if the point is inside the body, false otherwise."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isactive",children:["isActive()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isactive",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isActive"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the body is active, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-29",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-29",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isawake",children:["isAwake()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isawake",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isAwake"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the body is awake, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-30",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-30",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isbullet",children:["isBullet()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isbullet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isBullet"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the body is bullet, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-31",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-31",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isclicked",children:["isClicked()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isclicked",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isClicked"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Check if the mouse has clicked on this body."}),`
`,e.jsxs(n.h4,{id:"returns-32",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-32",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"iscolliding",children:["isColliding()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iscolliding",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isColliding"}),"(",e.jsx(n.code,{children:"other"}),"): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Checks if this game object is colliding with another game object."}),`
`,e.jsxs(n.h4,{id:"parameters-14",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-14",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"other"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"GameObj"})}),e.jsx(n.td,{children:"The other game object to check for collision with."})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-33",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-33",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.p,{children:"True if colliding, false otherwise."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isdynamic",children:["isDynamic()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isdynamic",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isDynamic"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the body is dynamic, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-34",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-34",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isfixedrotation",children:["isFixedRotation()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isfixedrotation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isFixedRotation"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the body is fixed rotation, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-35",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-35",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"ishovering",children:["isHovering()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ishovering",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isHovering"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Check if the mouse is hovering over this body."}),`
`,e.jsxs(n.h4,{id:"returns-36",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-36",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"iskinematic",children:["isKinematic()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iskinematic",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isKinematic"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the body is kinematic, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-37",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-37",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isoverlapping",children:["isOverlapping()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isoverlapping",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isOverlapping"}),"(",e.jsx(n.code,{children:"other"}),"): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Checks if this game object overlaps with another game object."}),`
`,e.jsxs(n.h4,{id:"parameters-15",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-15",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"other"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"GameObj"})}),e.jsx(n.td,{children:"The other game object to check for overlap with."})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-38",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-38",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.p,{children:"True if overlapping, false otherwise."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"issleepingallowed",children:["isSleepingAllowed()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#issleepingallowed",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isSleepingAllowed"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the body is sleeping allowed, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-39",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-39",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isstatic",children:["isStatic()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isstatic",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isStatic"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the body is static, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-40",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-40",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"isworldlocked",children:["isWorldLocked()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isworldlocked",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isWorldLocked"}),"(): ",e.jsx(n.code,{children:"boolean"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Returns true if the world is locked, false otherwise."}),`
`,e.jsxs(n.h4,{id:"returns-41",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-41",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"boolean"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"onclick",children:["onClick()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#onclick",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onClick"}),"(",e.jsx(n.code,{children:"action"}),", ",e.jsx(n.code,{children:"btn"}),"?): ",e.jsx(n.code,{children:"KEventController"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Add an action to be executed when this body is clicked."}),`
`,e.jsxs(n.h4,{id:"parameters-16",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-16",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["() => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute."})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"btn"}),"?"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MouseButton"})}),e.jsx(n.td,{children:"The mouse button that was used to click (default: MouseButton.LEFT)."})]})]})]}),`
`,e.jsxs(n.h4,{id:"returns-42",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-42",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"KEventController"})}),`
`,e.jsx(n.p,{children:"A controller for managing the event."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"oncollide",children:["onCollide()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oncollide",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"call-signature",children:["Call Signature",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#call-signature",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onCollide"}),"(",e.jsx(n.code,{children:"tag"}),", ",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Add an action to be executed when this game object starts colliding with another game object
containing a specific tag.`}),`
`,e.jsxs(n.h5,{id:"parameters-17",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-17",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tag"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The tag of the other game object to listen for collisions with."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["(",e.jsx(n.code,{children:"obj"}),", ",e.jsx(n.code,{children:"col"}),"?) => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute when a collision starts."})]})]})]}),`
`,e.jsxs(n.h5,{id:"returns-43",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-43",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsxs(n.h4,{id:"call-signature-1",children:["Call Signature",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#call-signature-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onCollide"}),"(",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Add an action to be executed when this game object starts colliding with another game object."}),`
`,e.jsxs(n.h5,{id:"parameters-18",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-18",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["(",e.jsx(n.code,{children:"obj"}),", ",e.jsx(n.code,{children:"col"}),"?) => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute when a collision starts."})]})})]}),`
`,e.jsxs(n.h5,{id:"returns-44",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-44",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"oncollideend",children:["onCollideEnd()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oncollideend",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"call-signature-2",children:["Call Signature",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#call-signature-2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onCollideEnd"}),"(",e.jsx(n.code,{children:"tag"}),", ",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Add an action to be executed when this game object ends colliding with another game object
containing a specific tag.`}),`
`,e.jsxs(n.h5,{id:"parameters-19",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-19",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tag"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The tag of the other game object to listen for collisions with."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["(",e.jsx(n.code,{children:"obj"}),", ",e.jsx(n.code,{children:"col"}),"?) => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute when a collision ends."})]})]})]}),`
`,e.jsxs(n.h5,{id:"returns-45",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-45",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsxs(n.h4,{id:"call-signature-3",children:["Call Signature",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#call-signature-3",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onCollideEnd"}),"(",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Add an action to be executed when this game object ends colliding with another game object
containing a specific tag.`}),`
`,e.jsxs(n.h5,{id:"parameters-20",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-20",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["(",e.jsx(n.code,{children:"obj"}),", ",e.jsx(n.code,{children:"col"}),"?) => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute when a collision ends."})]})})]}),`
`,e.jsxs(n.h5,{id:"returns-46",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-46",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"oncollideupdate",children:["onCollideUpdate()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oncollideupdate",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"call-signature-4",children:["Call Signature",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#call-signature-4",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onCollideUpdate"}),"(",e.jsx(n.code,{children:"tag"}),", ",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Add an action to be executed every frame when this game object starts colliding
with another game object containing a specific tag.`}),`
`,e.jsxs(n.h5,{id:"parameters-21",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-21",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tag"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The tag of the other game object to listen for collisions with."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["(",e.jsx(n.code,{children:"obj"}),", ",e.jsx(n.code,{children:"col"}),"?) => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute every frame."})]})]})]}),`
`,e.jsxs(n.h5,{id:"returns-47",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-47",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsxs(n.h4,{id:"call-signature-5",children:["Call Signature",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#call-signature-5",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onCollideUpdate"}),"(",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Add an action to be executed every frame when this game object starts colliding
with another game object.`}),`
`,e.jsxs(n.h5,{id:"parameters-22",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-22",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["(",e.jsx(n.code,{children:"obj"}),", ",e.jsx(n.code,{children:"col"}),"?) => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute every frame."})]})})]}),`
`,e.jsxs(n.h5,{id:"returns-48",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-48",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"onhover",children:["onHover()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#onhover",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onHover"}),"(",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"KEventController"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Add an action to be executed when the mouse starts hovering over this body."}),`
`,e.jsxs(n.h4,{id:"parameters-23",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-23",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["() => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute."})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-49",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-49",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"KEventController"})}),`
`,e.jsx(n.p,{children:"A controller for managing the event."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"onhoverend",children:["onHoverEnd()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#onhoverend",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onHoverEnd"}),"(",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"KEventController"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Add an action to be executed when the mouse stops hovering over this body."}),`
`,e.jsxs(n.h4,{id:"parameters-24",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-24",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["() => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute."})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-50",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-50",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"KEventController"})}),`
`,e.jsx(n.p,{children:"A controller for managing the event."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"onhoverupdate",children:["onHoverUpdate()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#onhoverupdate",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"onHoverUpdate"}),"(",e.jsx(n.code,{children:"action"}),"): ",e.jsx(n.code,{children:"KEventController"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Add an action to be executed when the mouse updates its position while hovering over this body."}),`
`,e.jsxs(n.h4,{id:"parameters-25",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-25",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"action"})}),e.jsxs(n.td,{children:["() => ",e.jsx(n.code,{children:"void"})]}),e.jsx(n.td,{children:"The action to execute."})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-51",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-51",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"KEventController"})}),`
`,e.jsx(n.p,{children:"A controller for managing the event."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"resetmassdata",children:["resetMassData()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resetmassdata",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"resetMassData"}),"(): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Resets the mass data of the body."}),`
`,e.jsxs(n.h4,{id:"returns-52",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-52",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setactive",children:["setActive()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setactive",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setActive"}),"(",e.jsx(n.code,{children:"flag"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the active state of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-26",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-26",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"flag"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-53",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-53",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setangulardamping",children:["setAngularDamping()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setangulardamping",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setAngularDamping"}),"(",e.jsx(n.code,{children:"damping"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the angular damping of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-27",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-27",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"damping"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-54",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-54",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setangularvelocity",children:["setAngularVelocity()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setangularvelocity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setAngularVelocity"}),"(",e.jsx(n.code,{children:"velocity"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the angular velocity of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-28",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-28",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"velocity"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-55",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-55",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setawake",children:["setAwake()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setawake",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setAwake"}),"(",e.jsx(n.code,{children:"flag"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the awake state of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-29",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-29",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"flag"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-56",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-56",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setbullet",children:["setBullet()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setbullet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setBullet"}),"(",e.jsx(n.code,{children:"flag"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the bullet state of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-30",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-30",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"flag"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-57",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-57",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setdynamic",children:["setDynamic()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setdynamic",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setDynamic"}),"(): ",e.jsx(n.code,{children:"Body$1"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the body to be dynamic."}),`
`,e.jsxs(n.h4,{id:"returns-58",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-58",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Body$1"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setfixedrotation",children:["setFixedRotation()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setfixedrotation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setFixedRotation"}),"(",e.jsx(n.code,{children:"flag"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the fixed rotation state of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-31",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-31",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"flag"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-59",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-59",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setgravityscale",children:["setGravityScale()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setgravityscale",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setGravityScale"}),"(",e.jsx(n.code,{children:"scale"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the gravity scale of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-32",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-32",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"scale"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-60",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-60",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setkinematic",children:["setKinematic()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setkinematic",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setKinematic"}),"(): ",e.jsx(n.code,{children:"Body$1"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the body to be kinematic."}),`
`,e.jsxs(n.h4,{id:"returns-61",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-61",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Body$1"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setlineardamping",children:["setLinearDamping()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setlineardamping",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setLinearDamping"}),"(",e.jsx(n.code,{children:"damping"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the linear damping of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-33",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-33",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"damping"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-62",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-62",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setlinearvelocity",children:["setLinearVelocity()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setlinearvelocity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setLinearVelocity"}),"(",e.jsx(n.code,{children:"velocity"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the linear velocity of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-34",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-34",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"velocity"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-63",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-63",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setmassdata",children:["setMassData()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setmassdata",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setMassData"}),"(",e.jsx(n.code,{children:"data"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the mass data of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-35",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-35",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"data"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MassData"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-64",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-64",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setsleepingallowed",children:["setSleepingAllowed()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setsleepingallowed",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setSleepingAllowed"}),"(",e.jsx(n.code,{children:"flag"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets sleeping allowed state of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-36",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-36",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"flag"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-65",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-65",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"setstatic",children:["setStatic()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setstatic",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setStatic"}),"(): ",e.jsx(n.code,{children:"Body$1"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the type of the body to be static."}),`
`,e.jsxs(n.h4,{id:"returns-66",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-66",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"Body$1"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"settransform",children:["setTransform()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settransform",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setTransform"}),"(",e.jsx(n.code,{children:"position"}),", ",e.jsx(n.code,{children:"angle"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the transform of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-37",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-37",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"position"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Vec2Value"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"angle"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{})]})]})]}),`
`,e.jsxs(n.h4,{id:"returns-67",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-67",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"settype",children:["setType()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settype",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"setType"}),"(",e.jsx(n.code,{children:"type"}),"): ",e.jsx(n.code,{children:"void"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sets the type of the body."}),`
`,e.jsxs(n.h4,{id:"parameters-38",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-38",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"BodyType"})}),e.jsx(n.td,{})]})})]}),`
`,e.jsxs(n.h4,{id:"returns-68",children:["Returns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-68",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"void"})})]})}function h(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{h as default,t as frontmatter};
