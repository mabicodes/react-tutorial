(this["webpackJsonptutorial-react"]=this["webpackJsonptutorial-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(7),o=n.n(a),i=(n(14),n(9)),s=n(2),c=n(3),l=n(5),j=n(4),b=n(0),u=function(){return Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Nombre"}),Object(b.jsx)("th",{children:"Apellido"})]})})},d=function(e){var t=e.datosPersonas.map((function(t,n){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.nombre}),Object(b.jsx)("td",{children:t.apellido}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return e.eliminarPersona(n)},children:" X "})})]},n)}));return Object(b.jsx)("tbody",{children:t})},m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.datosPersonas,n=e.eliminarPersona;return Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)(u,{}),Object(b.jsx)(d,{datosPersonas:t,eliminarPersona:n})]})}}]),n}(r.Component),h=n(8),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={nombre:"",apellido:""},e.enviarFormulario=function(){e.props.enviarFormulario(e.state),e.setState({nombre:"",apellido:""})},e.gestionarCambio=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(h.a)({},r,a))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.nombre,n=e.apellido;return Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(b.jsx)("input",{type:"text",name:"nombre",id:"nombre",className:"form-control",value:t,onChange:this.gestionarCambio})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"apellido",children:"Apellido"}),Object(b.jsx)("input",{type:"text",name:"apellido",id:"apellido",className:"form-control",value:n,onChange:this.gestionarCambio})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"button",value:"Add",onClick:this.enviarFormulario})})]})}}]),n}(r.Component),O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={personas:[{nombre:"Whitney",apellido:"Houston"},{nombre:"Celine",apellido:"Dion"},{nombre:"Mariah",apellido:"Carey"}]},e.eliminarPersona=function(t){var n=e.state.personas;e.setState({personas:n.filter((function(e,n){return n!==t}))})},e.enviarFormulario=function(t){e.setState({personas:[].concat(Object(i.a)(e.state.personas),[t])})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.personas;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:"Lista de mis cantantes favoritos uwu"}),Object(b.jsx)(m,{datosPersonas:e,eliminarPersona:this.eliminarPersona}),Object(b.jsx)(p,{enviarFormulario:this.enviarFormulario})]})}}]),n}(r.Component);o.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b1e7a69d.chunk.js.map