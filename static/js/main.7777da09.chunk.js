(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){},63:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),r=n.n(s),i=n(6),o=n(4),l=n(13),d=n.n(l),u=n(17),b=n(3),j=n(8),p=n(9),m=n(22),x=n.n(m),h=null,O=function(){function e(){Object(j.a)(this,e),h||(h=this);return this.client=x.a.create({baseURL:"https://engsoft-production-nmcardoso.cloud.okteto.net"}),h}return Object(p.a)(e,[{key:"setAuthToken",value:function(e){this.client.defaults.headers.common.Authorization="Bearer ".concat(e)}},{key:"removeAuthToken",value:function(){this.client.defaults.headers.common.Authorization=void 0}},{key:"login",value:function(e){var t=e.username,n=e.password;return this.client.post("/auth/login",{username:t,password:n})}},{key:"register",value:function(e){var t=e.username,n=e.password,a=e.nome,c=e.cpf,s=e.idUnidade;return this.client.post("/auth/register",{username:t,password:n,nome:a,cpf:c,id_unidade_saude:s})}},{key:"validateToken",value:function(e){var t={};return e&&(t={headers:{Authorization:"bearer ".concat(e)}}),this.client.get("/auth/validate",t)}},{key:"getUnidadeSaude",value:function(e){var t=Object.entries(e).map((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];return Array.isArray(a)&&(a=a.join(",")),"".concat(n,"=").concat(a)})).join("&");return this.client.get("/unidade_saude?".concat(t))}},{key:"postFormulario",value:function(e){return this.client.post("/formulario",e)}}]),e}(),g=n(0),f=Object(a.createContext)();function v(e){var t=e.children,n=Object(a.useState)({user:null,session:null}),c=Object(b.a)(n,2),s=c[0],r=c[1],i=new O;function o(){return(o=Object(u.a)(d.a.mark((function e(t){var n,a,c,s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.prev=1,e.next=4,i.login({username:n,password:a});case 4:o=e.sent,localStorage.setItem("auth",JSON.stringify({user:o.data.userInfo,session:{token:o.data.token,logged:!0}})),i.setAuthToken(o.data.token),c=o.data.message,s=o.data.success,r({user:o.data.userInfo,session:{token:o.data.token,logged:!0}}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),c=e.t0.data.message,s=e.t0.data.success,r({user:null,session:{logged:!1}});case 17:return e.abrupt("return",{success:s,message:c});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("auth"));e&&(i.setAuthToken(e.session.token),r(e))}),[]),Object(g.jsx)(f.Provider,{value:{user:s.user,session:s.session,login:function(e){return o.apply(this,arguments)},logout:function(){localStorage.removeItem("auth"),i.removeAuthToken(),r({user:null,session:{logged:!1}})}},children:t})}function N(){return Object(a.useContext)(f)}n(36),n(63);var w=n.p+"static/media/homeIcon.982f125b.png";var y=function(){return Object(g.jsx)("div",{className:"buttonContainer",children:Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)("a",{children:Object(g.jsx)("img",{src:w,alt:"icone_home",className:"icon"})})})})};var C=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(b.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(""),p=Object(b.a)(j,2),m=p[0],x=p[1],h=Object(a.useState)(!1),O=Object(b.a)(h,2),f=O[0],v=O[1],w=Object(o.g)(),C=N(),k=C.login,S=(C.logout,C.user,function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),e.next=4,k({username:n,password:i});case 4:(a=e.sent).success?w.push("/dashboard"):(x(a.message),v(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"page-container",children:[Object(g.jsxs)("div",{className:"banner-wrapper d-none d-md-block",children:[Object(g.jsx)("div",{className:"gov-logo"}),Object(g.jsx)("div",{id:"particles-background"}),Object(g.jsx)("div",{id:"particles-foreground"})]}),Object(g.jsxs)("div",{className:"form-wrapper justify-content-center align-items-center",children:[Object(g.jsx)(y,{}),Object(g.jsx)("div",{className:"vacivida-logo"}),Object(g.jsx)("div",{className:"fw-bolder mb-4",style:{fontSize:"2em"},children:"Entrar"}),!!m&&Object(g.jsxs)("div",{className:"alert alert-danger",style:{width:"400px"},role:"alert",children:[Object(g.jsx)("i",{className:"bi bi-exclamation-circle me-2"}),m]}),Object(g.jsxs)("form",{onSubmit:S,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"fw-bolder",htmlFor:"exampleInputEmail1",children:"Usu\xe1rio"}),Object(g.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"",onChange:function(e){return c(e.target.value)}})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsx)("label",{className:"fw-bolder",htmlFor:"exampleInputPassword1",children:"Senha"}),Object(g.jsx)("a",{href:"#",className:"text-decoration-none text-success fw-bold",children:"Esqueceu a senha?"})]}),Object(g.jsx)("input",{type:"password",className:"form-control form-control-lg",id:"exampleInputPassword1",placeholder:"",size:"30",onChange:function(e){return l(e.target.value)}})]}),Object(g.jsxs)("div",{className:"custom-control custom-checkbox mb-4 mx-3 my-2 align-middle",children:[Object(g.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customControlInline",size:"30"}),Object(g.jsx)("label",{className:"custom-control-label mx-1",htmlFor:"customControlInline",children:"Ficar logado?"})]}),f?Object(g.jsxs)("button",{className:"btn btn-success fw-bold py-2 px-3 mx-3",type:"submit",disabled:!0,children:[Object(g.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xa0\xa0\xa0Autenticando..."]}):Object(g.jsx)("button",{type:"submit",className:"btn btn-success btn-block fw-bold py-2 px-3 mx-3",children:"Entrar"})]})]})]})})},k=n(38),S=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new O,e.prev=1,e.next=4,n.getUnidadeSaude({campos:["id","nome"],query:t,limit:20});case 4:return a=e.sent,c=a.data.map((function(e){return{value:e.id,label:e.nome}})),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();var E=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(b.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(""),d=Object(b.a)(l,2),u=d[0],j=d[1],p=Object(a.useState)(""),m=Object(b.a)(p,2),x=m[0],h=m[1],f=Object(a.useState)(null),v=Object(b.a)(f,2),N=v[0],w=v[1],C=Object(a.useState)({}),E=Object(b.a)(C,2),I=E[0],P=E[1],A=Object(a.useState)(!1),F=Object(b.a)(A,2),T=F[0],M=F[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"page-container",children:[Object(g.jsxs)("div",{className:"banner-wrapper d-none d-md-block",children:[Object(g.jsx)("div",{className:"gov-logo"}),Object(g.jsx)("div",{id:"particles-background"}),Object(g.jsx)("div",{id:"particles-foreground"})]}),Object(g.jsxs)("div",{className:"form-wrapper justify-content-center align-items-center",children:[Object(g.jsx)("div",{className:"vacivida-logo"}),Object(g.jsx)("div",{className:"fw-bolder mb-4",style:{fontSize:"2em"},children:"Cadastro"}),!!I.value&&Object(g.jsxs)("div",{className:"error"==I.type?"alert alert-danger":"alert alert-success",style:{width:"400px"},role:"alert",children:["error"==I.type?Object(g.jsx)("i",{class:"bi bi-exclamation-circle me-2"}):Object(g.jsx)("i",{class:"bi bi-check-circle me-2"}),I.value]}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),M(!0),(new O).register({username:u,password:x,nome:n,cpf:i,idUnidade:N}).then((function(e){e.data.success?(P({value:e.data.message,type:"success"}),M(!1)):(P({value:e.data.message,type:"error"}),M(!1))})).catch((function(e){P({value:e.response.data.message,type:"error"}),M(!1)}))},children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"fw-bolder",htmlFor:"exampleInputName",children:"Nome"}),Object(g.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"exampleInputName",placeholder:"",onChange:function(e){return c(e.target.value)}})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"fw-bolder",htmlFor:"exampleInputCPF",children:"CPF"}),Object(g.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"exampleInputCPF",placeholder:"",onChange:function(e){return o(e.target.value)}})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"fw-bolder",htmlFor:"exampleInputEmail1",children:"Usu\xe1rio"}),Object(g.jsx)("input",{type:"text",className:"form-control form-control-lg",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"",onChange:function(e){return j(e.target.value)}})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("div",{className:"d-flex justify-content-between",children:Object(g.jsx)("label",{className:"fw-bolder",htmlFor:"exampleInputPassword1",children:"Senha"})}),Object(g.jsx)("input",{type:"password",className:"form-control form-control-lg",id:"exampleInputPassword1",placeholder:"",size:"30",onChange:function(e){return h(e.target.value)}})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"fw-bolder",htmlFor:"exampleInputUnidade",children:"Unidade"}),Object(g.jsx)(k.a,{cacheOptions:!0,defaultOptions:!0,onChange:function(e){return w(null===e||void 0===e?void 0:e.value)},loadOptions:S,isClearable:!0,loadingMessage:function(){return"Procurando"},noOptionsMessage:function(){return"Nada encontrado"},theme:{spacing:{baseUnit:3,controlHeight:48,menuGutter:0}}})]}),T?Object(g.jsxs)("button",{className:"btn btn-success btn-lg btn-block fw-bold py-3 px-3 mx-1 my-3",type:"submit",disabled:!0,children:[Object(g.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xa0\xa0\xa0Solicitando..."]}):Object(g.jsx)("button",{type:"submit",className:"btn btn-success btn-lg btn-block fw-bold py-3 px-3 mx-1 my-3",children:"Cadastrar"})]})]})]})]})},I=n.p+"static/media/logo_vacivida.c4caa297.png";n(80);var P=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"page-container",children:[Object(g.jsxs)("div",{className:"banner-wrapper d-none d-md-block",children:[Object(g.jsx)("div",{className:"gov-logo"}),Object(g.jsx)("div",{id:"particles-background"}),Object(g.jsx)("div",{id:"particles-foreground"})]}),Object(g.jsxs)("div",{className:"form-wrapper justify-content-center align-items-center",children:[Object(g.jsx)("img",{src:I,width:"250px"}),Object(g.jsxs)("div",{className:"mt-5 d-flex justify-content-around",style:{width:"250px"},children:[Object(g.jsx)(i.b,{to:"/login",className:"btn btn-success btn-block fw-bold px-4",children:"Login"}),Object(g.jsx)(i.b,{to:"/register",className:"btn btn-success btn-block fw-bold",children:"Cadastro"})]})]})]})]})})},A=n(5),F=n(15),T=(n(81),null),M=function(){function e(){Object(j.a)(this,e),T||(T=this);return this.client=x.a.create({baseURL:"https://viacep.com.br/ws"}),T}return Object(p.a)(e,[{key:"getInfo",value:function(e){return this.client.get("/".concat(e,"/json"))}},{key:"getCeps",value:function(e){var t=e.uf,n=e.cidade,a=e.endereco;return this.client.get("/".concat(t,"/").concat(n,"/").concat(a,"/json"))}}]),e}(),B=function(e,t,n){return t?n?e+" is-invalid":e+" is-valid":e},R=["cep","endereco","uf","municipio","endereco","numero","bairro","complemento"],L=Object.fromEntries(R.map((function(e){return[e,""]}))),U=Object.fromEntries(R.map((function(e){return[e,void 0]}))),D=Object.fromEntries(R.map((function(e){return[e,!1]})));function z(e,t){return Object(F.a)(Object(F.a)({},e),t)}function G(e,t){return Object(F.a)(Object(F.a)({},e),t)}var J=function(){var e=N().user,t=Object(a.useReducer)(z,L),n=Object(b.a)(t,2),c=n[0],s=n[1],r=Object(a.useReducer)(G,U),o=Object(b.a)(r,2),l=o[0],d=o[1],u=Object(a.useState)(D),j=Object(b.a)(u,2),p=j[0],m=j[1],x=Object(a.useState)(!1),h=Object(b.a)(x,2),O=h[0],f=h[1],v=Object(a.useState)(""),w=Object(b.a)(v,2),y=(w[0],w[1]),C=Object(a.useState)(""),k=Object(b.a)(C,2),S=(k[0],k[1]),E=Object(a.useState)(""),I=Object(b.a)(E,2),P=(I[0],I[1]),T=Object(a.useState)(""),R=Object(b.a)(T,2),J=(R[0],R[1]),X=Object(a.useState)("Escolher"),_=Object(b.a)(X,2),W=_[0],Y=_[1],V=Object(a.useState)(""),Z=Object(b.a)(V,2),H=(Z[0],Z[1]),q=Object(a.useState)(""),Q=Object(b.a)(q,2),K=(Q[0],Q[1]),$=Object(a.useState)(""),ee=Object(b.a)($,2),te=(ee[0],ee[1]),ne=Object(a.useState)("Escolher"),ae=Object(b.a)(ne,2),ce=ae[0],se=ae[1],re=Object(a.useState)("Escolher"),ie=Object(b.a)(re,2),oe=ie[0],le=ie[1],de=Object(a.useState)("Escolher"),ue=Object(b.a)(de,2),be=ue[0],je=ue[1],pe=Object(a.useState)(!1),me=Object(b.a)(pe,2),xe=(me[0],me[1]),he=Object(a.useState)(!1),Oe=Object(b.a)(he,2),ge=(Oe[0],Oe[1]),fe={endereco:function(e){var t;return e.length<1?t="Informe o endere\xe7o":e.length>254&&(t="Endere\xe7o muito grande"),t},cep:function(e){var t;if(e.length<1)t="Informe o CEP";else if(8!==e.length)t="CEP Inv\xe1lido";else{f(!0),(new M).getInfo(e).then((function(e){var t={endereco:e.data.logradouro,uf:e.data.uf,municipio:e.data.localidade,bairro:e.data.bairro,complemento:e.data.complemento},n={endereco:fe.endereco(t.endereco),municipio:fe.municipio(t.municipio),bairro:fe.bairro(t.bairro)};f(!1),s(t),d(n)})).catch((function(e){f(!1)}))}return t},municipio:function(e){var t;return e.length<1&&(t="Informe o munic\xedpio"),t},numero:function(e){var t;return e.length<1&&(t="Informe o n\xfamero"),t},bairro:function(e){var t;return e.length<1&&(t="Informe o bairro"),t},uf:function(e){return""}},ve=function(e,t,n){if(console.log(e,t),s(Object(A.a)({},e,t)),function(e){p[e]||m(Object(F.a)(Object(F.a)({},p),{},Object(A.a)({},e,!0)))}(e),fe.hasOwnProperty(e)){var a=fe[e](t,n);"string"===typeof a||void 0===a?d(Object(A.a)({},e,a)):"object"===typeof a&&null!==a&&d(Object(F.a)({},a))}};return Object(g.jsx)("div",{className:"d-flex align-items-center justify-content-center vh-100 vw-100",children:e&&0===Object.keys(e).length&&e.constructor===Object?Object(g.jsx)("div",{role:"status",className:"spinner-grow text-success",style:{width:"3rem",height:"3rem"},children:Object(g.jsx)("span",{className:"visually-hidden",children:"Carregando..."})}):Object(g.jsxs)("div",{className:"pageContainer",children:[Object(g.jsxs)("div",{className:"fadeOut",children:["Bem Vindo, ",Object(g.jsx)("b",{children:e.nome})]}),Object(g.jsxs)("div",{className:"fadeIn",children:[Object(g.jsx)("nav",{className:"navbar navbar-light bg-light rounded-top mx-5 mt-3",children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(g.jsx)("span",{className:"navbar-toggler-icon"}),Object(g.jsx)("span",{children:" Menu"})]}),Object(g.jsx)("span",{className:"",children:"Formul\xe1rio"})]})}),Object(g.jsx)("div",{className:"collapse",id:"navbarToggleExternalContent",children:Object(g.jsx)("div",{className:"bg-light pb-3 pt-1 mx-5 px-4 d-flex justify-content-center",children:Object(g.jsxs)("div",{className:"ContainerButton d-inline align-middle",children:[Object(g.jsx)(i.b,{to:"/userpage",children:Object(g.jsx)("button",{className:"btn btn-light fw-bold py-3 px-5 border border-success mx-2",children:"Usu\xe1rio \ud83c\udfe0"})}),Object(g.jsx)(i.b,{to:"/powerbi",children:Object(g.jsx)("button",{className:"btn btn-light fw-bold py-3 px-5 border border-success mx-2",children:"An\xe1lise \ud83d\udcca"})}),Object(g.jsx)(i.b,{to:"/#",children:Object(g.jsx)("button",{className:"btn btn-light fw-bold py-3 px-5 border border-success mx-2",children:"Feedback \ud83d\udd01"})})]})})}),Object(g.jsxs)("form",{children:[Object(g.jsxs)("div",{className:"ContainerForm",children:[Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 px-5 mt-5 w-100",id:"inputTipo1",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Nome"}),Object(g.jsx)("input",{type:"text",className:B("form-control",p.nome,l.nome),placeholder:"Nome paciente","aria-label":"Nome","aria-describedby":"campo-nome",onChange:function(e){return y(e.target.value)}})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 px-5",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Nome da m\xe3e"}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Nome da m\xe3e","aria-label":"Nome da m\xe3e","aria-describedby":"campo-nome-m\xe3e",onChange:function(e){return S(e.target.value)}})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 px-5",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Nome social"}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Nome social","aria-label":"Nome social","aria-describedby":"campo-nome-social",onChange:function(e){return P(e.target.value)}})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-5 pe-1 w-50",children:[Object(g.jsx)("span",{className:"input-group-text w-50 text-wrap",id:"basic-addon1",children:"Data de nascimento"}),Object(g.jsx)("input",{type:"date",className:"form-control",placeholder:"data","aria-label":"Data de nascimento","aria-describedby":"campo-data",onChange:function(e){return J(e.target.value)}})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-1 pe-5 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Sexo"}),Object(g.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:W}),Object(g.jsxs)("ul",{className:"dropdown-menu",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return Y(e.target.textContent)},children:"Feminino"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return Y(e.target.textContent)},children:"Masculino"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return Y(e.target.textContent)},children:"Outros"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return Y(e.target.textContent)},children:"N\xe3o declarado"})})]})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-5 pe-1 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"CPF"}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"CPF","aria-label":"N\xfamero CPF","aria-describedby":"campo-cpf",onChange:function(e){return H(e.target.value)}})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-1 pe-5 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Telefone"}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"DD XXXXXXXXX","aria-label":"Telefone","aria-describedby":"campo-telefone",onChange:function(e){return K(e.target.value)}})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-5 pe-1 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Lote"}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Lote","aria-label":"Lote","aria-describedby":"campo-lote",onChange:function(e){return te(e.target.value)}})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 pe-5 ps-1 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Marca"}),Object(g.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:ce}),Object(g.jsxs)("ul",{className:"dropdown-menu",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return se(e.target.textContent)},children:"CoronaVac"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return se(e.target.textContent)},children:"AstraZeneca"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return se(e.target.textContent)},children:"Pfizer"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return se(e.target.textContent)},children:"Janssen"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return se(e.target.textContent)},children:"Sputnik V"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return se(e.target.textContent)},children:"Covaxin"})})]})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-5 pe-1 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Dose"}),Object(g.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:oe}),Object(g.jsxs)("ul",{className:"dropdown-menu",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return le(e.target.textContent)},children:"1\xaa"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return le(e.target.textContent)},children:"2\xaa"})})]})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-1 pe-5 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Ra\xe7a/Cor/Etnia"}),Object(g.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:be}),Object(g.jsxs)("ul",{className:"dropdown-menu",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return je(e.target.textContent)},children:"Branca"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return je(e.target.textContent)},children:"Preta"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return je(e.target.textContent)},children:"Parda"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return je(e.target.textContent)},children:"Amarela"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return je(e.target.textContent)},children:"Ind\xedgena"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"dropdown-item",onClick:function(e){return je(e.target.textContent)},children:"N\xe3o informada"})})]})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-5 pe-1 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Gestante"}),Object(g.jsx)("div",{className:"input-group-text",children:Object(g.jsx)("input",{className:"form-check-input mt-0",type:"checkbox",id:"declaracao_gestante","aria-label":"Gestante","aria-describedby":"campo-gestante",onClick:function(e){return xe(e.target.checked)}})})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 pe-5 ps-1 w-50",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Pu\xe9rpera"}),Object(g.jsx)("div",{className:"input-group-text",children:Object(g.jsx)("input",{className:"form-check-input mt-0",type:"checkbox",id:"declaracao_puerpera","aria-label":"Puerpera","aria-describedby":"campo-puerpera",onClick:function(e){return ge(e.target.checked)}})})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 px-5 has-validation",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"CEP"}),Object(g.jsx)("input",{type:"text",className:B("form-control",p.cep,l.cep),placeholder:"CEP","aria-label":"CEP","aria-describedby":"campo-cep",value:c.cep,onBlur:function(e){return ve("cep",e.target.value)},onChange:function(e){return ve("cep",e.target.value)}}),O&&Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-center text-light",children:[Object(g.jsx)("span",{className:"spinner-border spinner-border-sm me-2 ms-3",role:"status","aria-hidden":"true"}),Object(g.jsx)("span",{children:"Carregando..."})]})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 pe-1 ps-5 w-50 has-validation",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"UF"}),Object(g.jsxs)("select",{className:"form-select",onChange:function(e){return ve("uf",e.target.value)},value:c.uf,children:[Object(g.jsx)("option",{value:"",disabled:!0,children:"Selecione"}),Object(g.jsx)("option",{value:"AC",children:"AC"}),Object(g.jsx)("option",{value:"AL",children:"AL"}),Object(g.jsx)("option",{value:"AP",children:"AP"}),Object(g.jsx)("option",{value:"AM",children:"AM"}),Object(g.jsx)("option",{value:"BA",children:"BA"}),Object(g.jsx)("option",{value:"CE",children:"CE"}),Object(g.jsx)("option",{value:"DF",children:"DF"}),Object(g.jsx)("option",{value:"ES",children:"ES"}),Object(g.jsx)("option",{value:"GO",children:"GO"}),Object(g.jsx)("option",{value:"MA",children:"MA"}),Object(g.jsx)("option",{value:"MT",children:"MT"}),Object(g.jsx)("option",{value:"MS",children:"MS"}),Object(g.jsx)("option",{value:"MG",children:"MG"}),Object(g.jsx)("option",{value:"PA",children:"PA"}),Object(g.jsx)("option",{value:"PB",children:"PB"}),Object(g.jsx)("option",{value:"PR",children:"PR"}),Object(g.jsx)("option",{value:"PE",children:"PE"}),Object(g.jsx)("option",{value:"PI",children:"PI"}),Object(g.jsx)("option",{value:"RJ",children:"RJ"}),Object(g.jsx)("option",{value:"RN",children:"RN"}),Object(g.jsx)("option",{value:"RS",children:"RS"}),Object(g.jsx)("option",{value:"RO",children:"RO"}),Object(g.jsx)("option",{value:"RR",children:"RR"}),Object(g.jsx)("option",{value:"SC",children:"SC"}),Object(g.jsx)("option",{value:"SP",children:"SP"}),Object(g.jsx)("option",{value:"SE",children:"SE"}),Object(g.jsx)("option",{value:"TO",children:"TO"})]})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-1 pe-5 w-50 has-validation",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Munic\xedpio"}),Object(g.jsx)("input",{type:"text",className:B("form-control",p.municipio,l.municipio),placeholder:"Munic\xedpio",value:c.municipio,onBlur:function(e){return ve("municipio",e.target.value)},onChange:function(e){return ve("municipio",e.target.value)}}),p.municipio&&l.municipio&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.municipio})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 ps-5 pe-1 w-75 has-validation",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Endere\xe7o"}),Object(g.jsx)("input",{type:"text",className:B("form-control",p.endereco,l.endereco),placeholder:"Endere\xe7o",value:c.endereco,onBlur:function(e){return ve("endereco",e.target.value)},onChange:function(e){return ve("endereco",e.target.value)}}),p.endereco&&l.endereco&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.endereco})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 pe-5 ps-1 w-25 has-validation",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"N\xb0"}),Object(g.jsx)("input",{type:"text",className:B("form-control",p.numero,l.numero),placeholder:"n\xb0",value:c.numero,onBlur:function(e){return ve("numero",e.target.value)},onChange:function(e){return ve("numero",e.target.value)}}),p.numero&&l.numero&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.numero})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 px-5 has-validation",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Bairo"}),Object(g.jsx)("input",{type:"text",className:B("form-control",p.bairro,l.bairro),placeholder:"Bairro",value:c.bairro,onBlur:function(e){return ve("bairro",e.target.value)},onChange:function(e){return ve("bairro",e.target.value)}}),p.bairro&&l.bairro&&Object(g.jsx)("div",{className:"invalid-feedback",children:l.bairro})]}),Object(g.jsxs)("div",{className:"input-group input-group-lg mb-3 px-5 has-validation",children:[Object(g.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Complemento"}),Object(g.jsx)("input",{type:"text",className:B("form-control",p.complemento,l.complemento),placeholder:"Complemento","aria-label":"Complemento","aria-describedby":"campo-complemento",onBlur:function(e){return ve("complemento",e.target.value)},onChange:function(e){return ve("complemento",e.target.value)}})]})]}),Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsx)("button",{type:"button",className:"btn btn-primary btn-large mx-5 my-3",children:"Enviar"})})]})]})]})})};var X=function(){return Object(g.jsx)("iframe",{width:"100%",height:"100%",src:"https://app.powerbi.com/view?r=eyJrIjoiOWQ1MTcyYjgtY2E3Yy00Y2NlLTgzYzgtMGVmYWFmZGJmZDI1IiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9",frameBorder:"0",allowFullScreen:!0})};var _=function(e){var t=e.children,n=e.ifLogged,a=e.to,c=N().session;return Object(g.jsx)(g.Fragment,{children:(null===c||void 0===c?void 0:c.logged)&&n||!(null===c||void 0===c?void 0:c.logged)&&!n?Object(g.jsx)(o.a,{to:a}):t})};n(82);var W=function(){var e=N().user;return Object(g.jsx)("div",{className:"pageContainer",children:Object(g.jsxs)("div",{className:"limiter",children:[Object(g.jsx)("nav",{className:"navbar navbar-light bg-light rounded-top mx-5 mt-3",children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(g.jsx)("span",{className:"navbar-toggler-icon"}),Object(g.jsx)("span",{children:" Menu"})]}),Object(g.jsx)("span",{className:"",children:"P\xe1gina do usu\xe1rio"})]})}),Object(g.jsx)("div",{className:"collapse",id:"navbarToggleExternalContent",children:Object(g.jsx)("div",{className:"bg-light pb-3 pt-1 mx-5 px-4 d-flex justify-content-center",children:Object(g.jsxs)("div",{className:"ContainerButton d-inline align-middle",children:[Object(g.jsx)(i.b,{to:"/dashboard",children:Object(g.jsx)("button",{className:"btn btn-light fw-bold py-3 px-5 border border-success mx-2",children:"Formul\xe1rio \u270f\ufe0f\ufe0f"})}),Object(g.jsx)(i.b,{to:"/powerbi",children:Object(g.jsx)("button",{className:"btn btn-light fw-bold py-3 px-5 border border-success mx-2",children:"An\xe1lise \ud83d\udcca"})}),Object(g.jsx)(i.b,{to:"/#",children:Object(g.jsx)("button",{className:"btn btn-light fw-bold py-3 px-5 border border-success mx-2",children:"Feedack \ud83d\udd01"})})]})})}),Object(g.jsxs)("div",{className:"userInfo",children:[Object(g.jsx)("h4",{children:e.nome}),Object(g.jsxs)("h6",{children:["Unidiade de sa\xfade: ",e.id_unidade_saude]}),Object(g.jsx)("hr",{}),Object(g.jsx)("a",{href:"",className:"userActions",children:"Deslogar"}),Object(g.jsx)("p",{}),Object(g.jsx)("a",{href:"",className:"userActions",children:"Trocar senha"})]})]})})};var Y=function(){return Object(g.jsx)(v,{children:Object(g.jsx)(i.a,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exact:!0,path:"/",children:Object(g.jsx)(P,{})}),Object(g.jsx)(o.b,{path:"/login",children:Object(g.jsx)(_,{ifLogged:!0,to:"/dashboard",children:Object(g.jsx)(C,{})})}),Object(g.jsx)(o.b,{path:"/register",children:Object(g.jsx)(_,{ifLogged:!0,to:"/dashboard",children:Object(g.jsx)(E,{})})}),Object(g.jsx)(o.b,{path:"/dashboard",children:Object(g.jsx)(_,{ifLogged:!1,to:"/login",children:Object(g.jsx)(J,{})})}),Object(g.jsx)(o.b,{path:"/powerbi",children:Object(g.jsx)(_,{ifLogged:!1,to:"/login",children:Object(g.jsx)(X,{})})}),Object(g.jsx)(o.b,{path:"/userpage",children:Object(g.jsx)(_,{ifLogged:!1,to:"/login",children:Object(g.jsx)(W,{})})})]})})})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(Y,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.7777da09.chunk.js.map