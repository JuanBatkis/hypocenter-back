(this["webpackJsonphypocenter-front"]=this["webpackJsonphypocenter-front"]||[]).push([[0],{38:function(e,a,s){},39:function(e,a,s){},64:function(e,a,s){},65:function(e,a,s){"use strict";s.r(a);var t=s(0),i=s(1),n=s(30),r=s.n(n),c=(s(38),s(8)),o=s(9),l=s(11),d=s(10),u=(s(39),s(4)),m=function(e){var a=e.user,s=e.logout;return Object(t.jsxs)("div",{id:"plusBttn",className:"uk-inline",children:[Object(t.jsx)("button",{className:"uk-button uk-button-default",type:"button",children:Object(t.jsx)("span",{"uk-icon":"plus"})}),Object(t.jsx)("div",{"uk-dropdown":"pos: top-right; mode: click; animation: uk-animation-slide-bottom-small; duration: 300",children:a._id?Object(t.jsx)("ul",{className:"uk-nav uk-dropdown-nav",children:Object(t.jsx)("li",{onClick:s,children:Object(t.jsx)(u.b,{to:"#",children:"Logout"})})}):Object(t.jsxs)("ul",{className:"uk-nav uk-dropdown-nav",children:[Object(t.jsx)("li",{children:Object(t.jsx)(u.b,{to:"/login",children:"Login"})}),Object(t.jsx)("li",{children:Object(t.jsx)(u.b,{to:"/signup",children:"Register"})})]})})]})},j=s(2),p=s(20),b=s.n(p);b.a.defaults.withCredentials=!0;var h=b.a.create({baseURL:"https://hypocenter.herokuapp.com/api",timeout:1e4}),x=function(e){return h.post("/user/login",e)},O=function(e){return h.post("/user/signup",e)},v=function(){return h.post("/user/logout")},g=Object(i.createContext)(),f=s(15),k=s.n(f),y=function(e,a){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"check",t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"top-right";k.a.notification({message:"<span uk-icon='icon: ".concat(s,"'></span> ").concat(e),status:a,pos:t})},N=function(e){Object(l.a)(s,e);var a=Object(d.a)(s);function s(){var e;Object(c.a)(this,s);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return(e=a.call.apply(a,[this].concat(i))).state={data:{}},e.handleChange=function(a){var s=a.target,t=s.value,i=s.name,n=e.state.data;n[i]=t,e.setState({data:n})},e.onSubmit=function(a){a.preventDefault();var s=e.props.history;x(e.state.data).then((function(a){e.setState({data:{}}),localStorage.setItem("user",JSON.stringify(a.data.user)),e.context.setUser(a.data.user),s.push("/")})).catch((function(e){var a=e.response.data;("validationError"in a?Object.values(a.validationError):Object.values(a)).map((function(e){return y(e,"danger","warning")}))}))},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.handleChange,a=this.onSubmit,s=this.state.data;return Object(t.jsxs)("section",{className:"uk-section",children:[Object(t.jsx)(u.b,{className:"uk-text-primary",to:"/",children:"Home"}),Object(t.jsx)("div",{className:"uk-container uk-flex uk-flex-center",children:Object(t.jsxs)("div",{className:"uk-width-1-4",children:[Object(t.jsx)("h3",{children:"Log In"}),Object(t.jsxs)("form",{className:"uk-form-stacked uk-flex uk-flex-wrap uk-flex-column",onSubmit:a,children:[Object(t.jsxs)("div",{className:"uk-margin-bottom uk-width-2-2@m",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"email",children:"Email"}),Object(t.jsx)("input",{className:"uk-input",type:"email",name:"email",onChange:e,required:!0,value:s.email?s.email:"",placeholder:"johndoe@email.com"})]}),Object(t.jsxs)("div",{className:"uk-margin-bottom uk-width-2-2@m",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"password",children:"Password"}),Object(t.jsx)("input",{className:"uk-input",type:"password",name:"password",onChange:e,required:!0,value:s.password?s.password:"",placeholder:"********"})]}),Object(t.jsxs)("div",{className:"uk-text-meta uk-margin-small-bottom",children:["Don't have an account?"," ",Object(t.jsx)(u.b,{className:"uk-text-primary",to:"/signup",children:"Create one!"})]}),Object(t.jsx)("button",{className:"uk-button uk-button-primary",children:"Send"})]})]})})]})}}]),s}(i.Component);N.contextType=g;var w=function(e){Object(l.a)(s,e);var a=Object(d.a)(s);function s(){var e;Object(c.a)(this,s);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return(e=a.call.apply(a,[this].concat(i))).state={data:{}},e.handleChange=function(a){var s=a.target,t=s.value,i=s.name,n=e.state.data;n[i]=t,e.setState({data:n})},e.onSubmit=function(a){a.preventDefault();var s=e.props.history;O(e.state.data).then((function(a){e.setState({data:{}}),s.push("/login")})).catch((function(e){var a=e.response.data;("validationError"in a?Object.values(a.validationError):Object.values(a)).map((function(e){return y(e,"danger","warning")}))}))},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.handleChange,a=this.onSubmit,s=this.state.data;return Object(t.jsxs)("section",{className:"uk-section",children:[Object(t.jsx)(u.b,{className:"uk-text-primary",to:"/",children:"Home"}),Object(t.jsx)("div",{className:"uk-container uk-flex uk-flex-center",children:Object(t.jsxs)("div",{className:"uk-width-1-3",children:[Object(t.jsx)("h3",{children:"Sign Up"}),Object(t.jsxs)("form",{className:"uk-form-stacked uk-flex uk-flex-wrap uk-flex-column",onSubmit:a,children:[Object(t.jsxs)("div",{className:"uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m",children:[Object(t.jsxs)("div",{className:"uk-width-1-2@m uk-padding-small-right",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"name",children:"Name"}),Object(t.jsx)("input",{className:"uk-input",id:"name",type:"text",name:"name",onChange:e,required:!0,value:s.name?s.name:"",placeholder:"John"})]}),Object(t.jsxs)("div",{className:"uk-width-1-2@m uk-padding-small-left",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"last_name",children:"Last Name"}),Object(t.jsx)("input",{className:"uk-input",id:"last_name",type:"text",name:"last_name",onChange:e,required:!0,value:s.last_name?s.last_name:"",placeholder:"Doe"})]})]}),Object(t.jsxs)("div",{className:"uk-margin-bottom uk-width-2-2@m",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"email",children:"Email"}),Object(t.jsx)("input",{className:"uk-input",type:"email",name:"email",onChange:e,required:!0,value:s.email?s.email:"",placeholder:"johndoe@email.com"})]}),Object(t.jsxs)("div",{className:"uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m",children:[Object(t.jsxs)("div",{className:"uk-width-1-2@m uk-padding-small-right",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"phone",children:"Phone"}),Object(t.jsx)("input",{className:"uk-input",type:"text",name:"phone",onChange:e,required:!0,value:s.phone?s.phone:"",placeholder:"+54 011 2222-2222"})]}),Object(t.jsxs)("div",{className:"uk-width-1-2@m uk-padding-small-left",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"organization",children:"Organization"}),Object(t.jsx)("input",{className:"uk-input",type:"text",name:"organization",onChange:e,value:s.organization?s.organization:"",placeholder:"O.N.U."})]})]}),Object(t.jsxs)("div",{className:"uk-margin-bottom uk-form-stacked uk-flex uk-flex-wrap uk-width-2-2@m",children:[Object(t.jsxs)("div",{className:"uk-width-1-2@m uk-padding-small-right",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"password",children:"Password"}),Object(t.jsx)("input",{className:"uk-input",type:"password",name:"password",onChange:e,value:s.password?s.password:"",placeholder:"********"})]}),Object(t.jsxs)("div",{className:"uk-width-1-2@m uk-padding-small-left",children:[Object(t.jsx)("label",{className:"uk-form-label",for:"confirmPassword",children:"Confirm Password"}),Object(t.jsx)("input",{className:"uk-input",type:"password",name:"confirmPassword",onChange:e,value:s.confirmPassword?s.confirmPassword:"",placeholder:"********"})]})]}),Object(t.jsxs)("div",{className:"uk-text-meta uk-margin-small-bottom",children:["Already have an account?"," ",Object(t.jsx)(u.b,{className:"uk-text-primary",to:"/login",children:"Log in!"})]}),Object(t.jsx)("button",{className:"uk-button uk-button-primary",children:"Register"})]})]})})]})}}]),s}(i.Component),q=function(e){Object(l.a)(s,e);var a=Object(d.a)(s);function s(){return Object(c.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"uk-child-width-1-2 uk-text-center","uk-grid":!0,id:"article",children:[Object(t.jsxs)("article",{className:"uk-article",children:[Object(t.jsx)("p",{children:"El hipocentro o foco s\xedsmico es el punto interior de la Tierra donde se inicia un movimiento s\xedsmico o terremoto. El epicentro es la proyecci\xf3n del hipocentro sobre la superficie terrestre, la vertical del foco;\u200b que suele ser el lugar donde el sismo se siente con mayor intensidad."}),Object(t.jsx)("p",{children:"Esta plataforma busca ser ese foco en el que se centralicen los datos reportados por los voluntarios que se encuentren en sitios afectados despu\xe9s de un terremoto."}),Object(t.jsx)("p",{children:"Creemos que, as\xed como los movimientos que se originan en lo profundo del manto terrestre se proyectan a la supeficie, un movimiento para gestionar informaci\xf3n durante un desastre por sismo, puede ser \xfatil para brindar apoyo de manera m\xe1s organizada y eficiente."}),Object(t.jsx)("h1",{classNameName:"uk-article-title",id:"subtitle",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Nuestro objetivo"})}),Object(t.jsx)("p",{children:"Hipocentro pone al alcance del p\xfablico una base de consulta con reportes verificados, estos son f\xe1ciles de navegar gracias a la visualizaci\xf3n en forma de fichas y a los filtros que te permiten depurar las b\xfasquedas por:"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"Ofrezco"}),Object(t.jsx)("li",{children:"Necesito"}),Object(t.jsx)("li",{children:"Nombre de un edificio"}),Object(t.jsx)("li",{children:"Ubicaci\xf3n"})]}),Object(t.jsx)("h1",{className:"uk-article-title",id:"subtitle",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Nuestro origen"})}),Object(t.jsx)("p",{children:"El \xe9xito de estas plataformas no es posible sin solidaridad y trabajo en conjunto."}),Object(t.jsx)("p",{children:"Decidimos proponer esta interfaz a partir de los eventos del 19 de Septiembre de 2017 los logros de la organizaci\xf3n #Verificado19s. Este movimiento us\xf3 las herramientas que tuvieron a su alcance para organizar los reportes que los voluntarios y las brigadas compart\xedan. "}),Object(t.jsx)("p",{children:"Gracias a sus incre\xedbles esfuerzos m\xe1s personas recibieron el apoyo que necesitaban de manera oportuna, adem\xe1s, jugaron un papel importante para combatir la ola de desinformaci\xf3n que se gener\xf3 despu\xe9s del sismo. "}),Object(t.jsx)("p",{children:"Con este proyecto buscamos honrar a los voluntarios retomando sus experiencias y proponiendo."}),Object(t.jsx)("p",{}),Object(t.jsx)("h1",{className:"uk-article-title",id:"subtitle",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Fuentes confiables"})}),Object(t.jsxs)("div",{className:"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin","uk-grid":!0,children:[Object(t.jsxs)("div",{className:"uk-card-media-left uk-cover-container",children:[Object(t.jsx)("img",{src:"images/light.jpg",alt:"","uk-cover":!0}),Object(t.jsx)("canvas",{width:"600",height:"400"})]}),Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"uk-card-body",children:[Object(t.jsx)("h3",{className:"uk-card-title",children:"Media Left"}),Object(t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})})]}),Object(t.jsxs)("div",{className:"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin","uk-grid":!0,children:[Object(t.jsxs)("div",{className:"uk-flex-last@s uk-card-media-right uk-cover-container",children:[Object(t.jsx)("img",{src:"images/light.jpg",alt:"","uk-cover":!0}),Object(t.jsx)("canvas",{width:"600",height:"400"})]}),Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"uk-card-body",children:[Object(t.jsx)("h3",{className:"uk-card-title",children:"Media Right"}),Object(t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})})]})]}),Object(t.jsx)("div",{id:"calling",children:Object(t.jsx)("img",{src:"https://res.cloudinary.com/dyvopd0iz/image/upload/v1610221586/Hipocentro/image1-25_zv9wl1.jpg",alt:"Foto del sismo"})})]})}}]),s}(i.Component),C=function(e){Object(l.a)(s,e);var a=Object(d.a)(s);function s(){return Object(c.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"uk-child-width-1-2 uk-text-center","uk-grid":!0,id:"article",children:[Object(t.jsxs)("article",{className:"uk-article",children:[Object(t.jsx)("h1",{className:"uk-article-title",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Etapa 2: la emergencia del d\xeda 0 a 10"})}),Object(t.jsx)("h1",{classNameName:"uk-article-title",id:"subtitle",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Certifica tu seguridad"})}),Object(t.jsx)("p",{children:"Antes de ayudar a otras personas, debes asegurarte de que est\xe1s a salvo."}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"Revisa si tu vivienda sufri\xf3 da\xf1os. De ser as\xed, busca un espacio seguro y notifica a tus vecinos y a las autoridades."}),Object(t.jsx)("br",{}),Object(t.jsx)("li",{children:"Independientemente de los da\xf1os que observes, es conveniente que cierres la llave de paso del gas."}),Object(t.jsx)("br",{}),Object(t.jsx)("li",{children:"No enciendas cerillos, cigarros u otras flamas."}),Object(t.jsx)("br",{})]}),Object(t.jsx)("img",{className:"ilustration",src:"https://res.cloudinary.com/dyvopd0iz/image/upload/v1610227003/Hipocentro/undraw_confirmation_2uy0_kffifk.svg",alt:"Imagen confirmaci\xf3n"}),Object(t.jsx)("h1",{classNameName:"uk-article-title",id:"subtitle",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Decide si es conveniente participar como voluntario e integrar equipos"})}),Object(t.jsx)("p",{children:"Cuando ocurre una emergencia, muchas veces nos sentimos motivados a ayudar. Antes de decidir si lo har\xe1s, conviene reflexionar si puedes desempe\xf1ar un papel que no est\xe9 practicando ya alguna autoridad o grupo especializado. La respuesta probablemente ser\xe1 afirmativa tras desastres de gran magnitud."}),Object(t.jsx)("img",{className:"ilustration",src:"https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_analyze_17kw_yyvfz1.svg",alt:"Ilustraci\xf3n mujer"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"Si tienes el perfil que se requiere para apoyar en las labores de rescate y ayuda inmediata, puedes empezar por contactar a otras personas con tu mismo perfil o a miembros de tu grupo o equipo de trabajo. Juntos pueden decidir d\xf3nde es conveniente trabajar."}),Object(t.jsx)("br",{}),Object(t.jsx)("li",{children:"Si tienes uno de los perfiles requeridos, pero no formas parte de un grupo o cuadrilla organizada, puedes acudir a las zonas de desastre y conformar ah\xed un equipo con personas de tu mismo perfil o de otros, dependiendo del tipo de tareas que se requieran y de las personas disponibles.Si no tienes ninguno de los perfiles requeridos pero consideras oportuno ayudar, puedes acudir a sitios de emergencia e identificar tareas factibles y significativas. Puedes, por ejemplo, participar en el movimiento de escombros y v\xedveres, y en la comunicaci\xf3n de informaci\xf3n a trav\xe9s de redes sociales, siempre y cuando respetes las din\xe1micas y liderazgos de la zona de desastre."}),Object(t.jsx)("br",{})]}),Object(t.jsx)("p",{children:"Es muy importante que tus acciones no obstruyan el trabajo de personas especializadas. Sobre todo en las horas inmediatamente posteriores al desastre, te sugerimos mantenerte a cierta distancia de los sitios en los que se realizan labores de rescate y no obstruir calles, pasillos o andadores."}),Object(t.jsx)("p",{children:"Al asumir el papel de voluntario, debes considerar que, probablemente, tendr\xe1s que abandonar tus actividades habituales durante algunos d\xedas. La ayuda sostenida es preferible a las acciones aisladas."}),Object(t.jsx)("img",{className:"ilustration",src:"https://res.cloudinary.com/dyvopd0iz/image/upload/v1610227205/Hipocentro/undraw_hang_out_h9ud_zn9phw.svg",alt:"Imagen vecinos"})]}),Object(t.jsxs)("div",{id:"calling",children:[Object(t.jsx)("p",{children:"Esta obra est\xe1 licenciada bajo la Licencia Creative Commons Atribuci\xf3n NoComercial-CompartirIgual 4.0 Internacional. Hipocentro MX realiz\xf3 cambios en el contenido e ilustraciones del mismo."}),Object(t.jsx)("p",{children:"Usted es libre de compartir y adaptar sus contenidos siempre y cuando de cr\xe9dito de manera adecuada, no haga uso de ellos con prop\xf3sitos comerciales y, en caso de remezclar, transformar o crear a partir del material, debe distribuir su contribuci\xf3n bajo la misma licencia del original. "}),Object(t.jsxs)("p",{children:["Para mayor informaci\xf3n, visite: ",Object(t.jsx)("a",{className:"uk-link-reset",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:"Creative commons"})]})]})]})}}]),s}(i.Component),z=function(e){Object(l.a)(s,e);var a=Object(d.a)(s);function s(){return Object(c.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"uk-child-width-1-2 uk-text-center","uk-grid":!0,id:"article",children:[Object(t.jsxs)("article",{className:"uk-article",children:[Object(t.jsx)("h1",{className:"uk-article-title",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Etapa 1: Antes de la emergencia"})}),Object(t.jsx)("h1",{classNameName:"uk-article-title",id:"subtitle",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Conoce tu vivienda"})}),Object(t.jsx)("p",{children:"Para poder responder a un desastre de manera eficiente, debes conocer tu vivienda."}),Object(t.jsx)("img",{className:"ilustration",src:"https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_houses3_xwf7_1_ehrkr0.svg",alt:"Imagen casas"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"Ubica salidas de emergencia y establece qu\xe9 es conveniente hacer en caso de un sismo u otra emergencia. Al escuchar la alerta s\xedsmica, tienes aproximadamente cincuenta segundos. Si no puedes salir en ese lapso, te recomendamos que ubiques un espacio seguro donde te puedas resguardar dentro de tu vivienda. Los lugares m\xe1s seguros son al lado de columnas fuertes y junto a muebles resistentes. En las casas de una sola planta hay que buscar \xe1reas con columnas cercanas, como pasillos o dentro de los ba\xf1os. En los edificios, conviene localizar d\xf3nde hay muros estructurales, por ejemplo, junto a los elevadores."}),Object(t.jsx)("li",{children:"Ubica la llave del gas para poder cerrarla si es necesario."}),Object(t.jsx)("li",{children:"Mant\xe9n siempre un extintor y gu\xe1rdalo en un sitio visible. Se recomienda que est\xe9 cerca de alg\xfan acceso."}),Object(t.jsx)("li",{children:"Mant\xe9n un botiqu\xedn de primeros auxilios y una mochila con art\xedculos de primera necesidad. Guarda tambi\xe9n documentos importantes, como escrituras, pagos de servicios e identificaciones de las personas que ocupan la vivienda, en un lugar de f\xe1cil acceso."}),Object(t.jsx)("li",{children:"Aseg\xfarate de que tu familia o las personas con quienes compartes la vivienda sepan c\xf3mo actuar ante una emergencia."})]}),Object(t.jsx)("h1",{classNameName:"uk-article-title",id:"subtitle",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Conoce tu entorno"})}),Object(t.jsx)("img",{className:"ilustration",src:"https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_analyze_17kw_yyvfz1.svg",alt:"Ilustraci\xf3n mujer"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"Ubica si Protecci\xf3n Civil ha establecido un punto de reuni\xf3n cerca de tu vivienda. De no ser as\xed, los parques, plazas, estacionamientos y calles anchas ser\xe1n probablemente los sitios m\xe1s seguros."}),Object(t.jsx)("li",{children:"Ubica hospitales y cl\xednicas y distintas rutas para llegar a ellas."}),Object(t.jsx)("li",{children:"Ubica edificios p\xfablicos en tu entorno, como escuelas y oficinas de gobierno, y comercios donde se puedan obtener v\xedveres y medicamentos."}),Object(t.jsx)("li",{children:"Mant\xe9n una lista de tel\xe9fonos de emergencia actualizada."})]}),Object(t.jsx)("h1",{classNameName:"uk-article-title",id:"subtitle",children:Object(t.jsx)("a",{className:"uk-link-reset",href:"",children:"Establecer un protocolo de emergencia con vecinos y familiares"})}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"Ubica si Protecci\xf3n Civil ha establecido un punto de reuni\xf3n cerca de tu vivienda. De no ser as\xed, los parques, plazas, estacionamientos y calles anchas ser\xe1n probablemente los sitios m\xe1s seguros."}),Object(t.jsx)("li",{children:"Ubica hospitales y cl\xednicas y distintas rutas para llegar a ellas."}),Object(t.jsx)("li",{children:"Ubica edificios p\xfablicos en tu entorno, como escuelas y oficinas de gobierno, y comercios donde se puedan obtener v\xedveres y medicamentos."}),Object(t.jsx)("li",{children:"Mant\xe9n una lista de tel\xe9fonos de emergencia actualizada."})]}),Object(t.jsx)("img",{className:"ilustration",src:"https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225975/Hipocentro/undraw_team_spirit_hrr4_uiamao.svg",alt:"Ilustraci\xf3n vecinos"})]}),Object(t.jsxs)("div",{id:"calling",children:[Object(t.jsx)("p",{children:"Esta obra est\xe1 licenciada bajo la Licencia Creative Commons Atribuci\xf3n NoComercial-CompartirIgual 4.0 Internacional. Hipocentro MX realiz\xf3 cambios en el contenido e ilustraciones del mismo."}),Object(t.jsx)("p",{children:"Usted es libre de compartir y adaptar sus contenidos siempre y cuando de cr\xe9dito de manera adecuada, no haga uso de ellos con prop\xf3sitos comerciales y, en caso de remezclar, transformar o crear a partir del material, debe distribuir su contribuci\xf3n bajo la misma licencia del original. "}),Object(t.jsxs)("p",{children:["Para mayor informaci\xf3n, visite: ",Object(t.jsx)("a",{className:"uk-link-reset",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:"Creative commons"})]})]})]})}}]),s}(i.Component),_=function(){return Object(t.jsxs)(j.c,{children:[Object(t.jsx)(j.a,{exact:!0,path:"/",component:q}),Object(t.jsx)(j.a,{exact:!0,path:"/login",component:N}),Object(t.jsx)(j.a,{exact:!0,path:"/signup",component:w}),Object(t.jsx)(j.a,{exact:!0,path:"/protocolo-preventivo",component:z}),Object(t.jsx)(j.a,{exact:!0,path:"/protocolo-emergencia",component:C})]})},S=function(e){Object(l.a)(s,e);var a=Object(d.a)(s);function s(){var e;Object(c.a)(this,s);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return(e=a.call.apply(a,[this].concat(i))).state={user:JSON.parse(localStorage.getItem("user"))||{}},e.logout=function(){var a=e.props.history;v().then((function(){localStorage.removeItem("user"),e.setState({user:{}}),a.push("/login")}))},e.setUser=function(a){e.setState({user:a})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state,a=this.logout,s=this.setUser;return Object(t.jsx)(g.Provider,{value:{state:e,logout:a,setUser:s},children:Object(t.jsxs)("div",{children:[Object(t.jsx)(m,{user:e.user,logout:a}),Object(t.jsx)(_,{})]})})}}]),s}(i.Component),E=Object(j.f)(S),U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(a){var s=a.getCLS,t=a.getFID,i=a.getFCP,n=a.getLCP,r=a.getTTFB;s(e),t(e),i(e),n(e),r(e)}))},I=s(32),P=s.n(I);s(63),s(64);k.a.use(P.a);var L=function(){return Object(t.jsx)(u.a,{children:Object(t.jsx)(E,{})})};r.a.render(Object(t.jsx)(L,{}),document.getElementById("root")),U()}},[[65,1,2]]]);
//# sourceMappingURL=main.1fcf14c5.chunk.js.map