(function(e){function t(t){for(var s,r,n=t[0],c=t[1],d=t[2],u=0,f=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},o={app:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var d=0;d<n.length;d++)t(n[d]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"015b":function(e,t,a){"use strict";a("7a01")},"097b":function(e,t,a){},"0e2b":function(e,t,a){"use strict";a("c661")},4918:function(e,t,a){e.exports=a.p+"img/undraw_robotics_kep0.a78ee399.svg"},"4cd8":function(e,t,a){e.exports=a.p+"img/Discloud_Dark.622170d1.png"},"4cf5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("router-view")],1)},i=[],r={name:"app"},n=r,c=(a("5c0b"),a("2877")),d=Object(c["a"])(n,o,i,!1,null,null,null),l=d.exports,u=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-page",class:{"theme-ligth":e.nigthMode}},[a("Preloader"),a("nav",{class:{nav_active:e.scrollPosition>70}},[e.nigthMode&&e.scrollPosition>70?a("div",[e._m(0)]):a("div",[e._m(1)]),a("ul",[e._m(2),e._m(3),a("li",{on:{click:function(t){e.showModal=!0}}},[e._v("Contato")])]),e.nigthMode?a("i",{staticClass:"fa-solid fa-moon",on:{click:function(t){e.nigthMode=!e.nigthMode}}}):a("i",{staticClass:"fa-solid fa-sun",on:{click:function(t){e.nigthMode=!e.nigthMode}}})]),a("section",{staticClass:"inicio"},[a("div",{staticClass:"content-inicio"},[e._m(4),a("p",[e._v("Somos uma equipe de desenvolvimento Web e DiscordBots especialista em automatizações para seu servidor")]),a("div",{staticClass:"button-discord",on:{click:function(t){e.showModal=!0}}},[e._m(5)])])]),e._m(6),a("section",{staticClass:"dúvidas",attrs:{id:"duvidas"}},[a("div",{staticClass:"content-dúvidas"},[e._m(7),a("div",{staticClass:"accordion"},e._l(e.faqs,(function(t,s){return a("FAQ",{key:s,attrs:{faq:t,index:s,open:t.open},on:{toggleOpen:e.toggleOpen}})})),1)])]),a("section",{staticClass:"discloud",attrs:{id:"discloud"}},[e._m(8),a("div",{staticClass:"content-discloud"},[e.nigthMode?a("div",[e._m(9)]):a("div",[e._m(10)]),a("p",[e._v("A DisCloud é um projeto sem fins lucrativos com o objetivo de democratizar a hospedagem de Bots Discord, beneficiando centenas de pessoas através dos seus serviços gratuitos a mais de 2 anos, hoje sua plataforma mantém mais de 1000 Bots online e tudo isso é graças a sua equipe, colaboração e carinho dos doadores.")])])]),a("transition",{attrs:{name:"fade"}},[e.showModal?a("div",{staticClass:"popup-wrapper",on:{click:function(t){e.showModal=!1}}},[a("div",{staticClass:"popup"},[a("div",{staticClass:"popup-close"},[e._v("x")]),a("div",{staticClass:"popup-content"},[a("h2",[e._v("Contato para orçamento")]),a("div",{staticClass:"icons"},[a("a",{attrs:{href:"https://discord.gg/5QPcDNc2u7",target:"_blank"}},[a("div",{staticClass:"discord"},[a("i",{staticClass:"fa-brands fa-discord"})])]),a("a",{attrs:{href:"https://www.instagram.com/streeetcodes/",target:"_blank"}},[a("div",{staticClass:"instagram"},[a("i",{staticClass:"fa-brands fa-instagram"})])]),a("div",{staticClass:"whatsapp"},[a("i",{staticClass:"fa-brands fa-whatsapp"})])]),a("p",[e._v("Esteja ciente dos nossos "),a("router-link",{attrs:{to:"/termos"}},[a("strong",[e._v("Termos de Serviço")])]),e._v(" antes de realizar qualquer orçamento")],1)])])]):e._e()]),a("footer",[a("div",{staticClass:"termos"},[a("router-link",{attrs:{to:"/termos"}},[a("p",[e._v("Termos de Serviço")])])],1),e._m(11),e._m(12)])],1)},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("977f"),width:"30px",onselectstart:"return false",oncontextmenu:"return false",ondragstart:"return false",onMouseOver:"window.status='..message perso .. '; return true;"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("706c"),width:"30px",onselectstart:"return false",oncontextmenu:"return false",ondragstart:"return false",onMouseOver:"window.status='..message perso .. '; return true;"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#serviços"}},[e._v("Serviços")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#duvidas"}},[e._v("Dúvidas Frequentes")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Street "),a("span",[e._v("Codes")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icon"},[a("i",{staticClass:"fa-solid fa-box-open"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"serviços",attrs:{id:"serviços"}},[s("div",{staticClass:"content-serviços"},[s("div",{attrs:{id:"title"}},[s("h2",[e._v("Nossos planos para você")]),s("div",{attrs:{id:"line"}})]),s("div",{staticClass:"cards"},[s("div",{staticClass:"card discord"},[s("h3",[e._v("Bot para Discord")]),s("div",{staticClass:"descrição"},[s("ul",[s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Comandos Personalizados")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Integração com APIs")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Integração com Banco de Dados")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Sistemas Exclusivos")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Manutenção Gratuita")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Suporte Rápido")])])]),s("img",{attrs:{src:a("4918"),width:"250px"}})]),s("div",{staticClass:"card website"},[s("h3",[e._v("Website")]),s("div",{staticClass:"descrição"},[s("ul",[s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Página Profissional")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Website Responsivo")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Back-End (NodeJS)")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Sistemas Exclusivos")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Manutenção Gratuita")]),s("li",[s("i",{staticClass:"fa-solid fa-check"}),e._v("Suporte Rápido")])])]),s("img",{attrs:{src:a("8b7d"),width:"250px"}})])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"title"}},[a("h2",[e._v("Dúvidas Frequentes")]),a("div",{attrs:{id:"line"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"title"}},[a("h2",[e._v("Parceiro Oficial")]),a("div",{attrs:{id:"line"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://discord.gg/76M48kF5kY",target:"_blank"}},[s("img",{attrs:{src:a("4cd8"),width:"600px"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://discord.gg/76M48kF5kY",target:"_blank"}},[s("img",{attrs:{src:a("725d"),width:"600px"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("Street Codes")]),e._v(" © 2022 Todos os direitos reservados")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"redes"},[a("a",{attrs:{href:"https://discord.com/invite/5QPcDNc2u7",target:"_blank"}},[a("i",{staticClass:"fa-brands fa-discord"})]),a("a",{attrs:{href:"https://www.instagram.com/streeetcodes/",target:"_blank"}},[a("i",{staticClass:"fa-brands fa-instagram"})]),a("a",{attrs:{href:"https://www.youtube.com/channel/UCdGje4HxUbxFWs9qDKZQbGQ",target:"_blank"}},[a("i",{staticClass:"fa-brands fa-youtube"})])])}],v=(a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"accordion-item",class:e.open?"faq open":"faq",on:{click:function(t){return e.$emit("toggleOpen",e.index)}}},[a("div",{staticClass:"accordion-item-header",class:e.open?"faq open":"faq"},[e._v(" "+e._s(e.faq.question)+" "),e._m(0)]),a("div",{staticClass:"accordion-item-body"},[a("div",{staticClass:"accordion-item-body-content"},[e._v(" "+e._s(e.faq.answer)+" ")])])])}),m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"fa-solid fa-circle-caret-down"})])}],_={name:"FAQ",props:["faq","index","open"]},h=_,g=(a("0e2b"),Object(c["a"])(h,v,m,!1,null,"18b76b06",null)),b=g.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[e.show?s("div",{staticClass:"preloader"},[s("img",{attrs:{src:a("706c"),width:"100px",onselectstart:"return false",oncontextmenu:"return false",ondragstart:"return false",onMouseOver:"window.status='..message perso .. '; return true;"}})]):e._e()])},w=[],k={name:"Preloader",data:function(){return{show:!0}},mounted:function(){this.showToggle()},methods:{showToggle:function(){var e=this;setTimeout((function(){e.show=!1}),1e3)}}},x=k,q=(a("f08f"),Object(c["a"])(x,C,w,!1,null,"1ab2723c",null)),P=q.exports,y={mounted:function(){window.addEventListener("scroll",this.updateScroll)},name:"home",components:{FAQ:b,Preloader:P},data:function(){return{Category:{_id:1},showModal:!1,nigthMode:!1,scrollPosition:null,faqs:[{question:"Como fazer um orçamento?",answer:"Para fazer qualquer tipo de orçamento você pode entrar em contato abrindo um ticket em nosso Discord ou através de nossas redes sociais.",open:!1},{question:"Quais métodos de pagamento aceitamos?",answer:"A Street Codes utiliza os seguintes métodos: PIX, Mercado Pago, PayPal, PicPay, Boleto Bancário e Transferência Bancária.",open:!1},{question:"Como se tornar parceiro da Street Codes?",answer:"Para se tornar um de nossos parceiros entre em contato abrindo um ticket em nosso Discord ou através de nossas redes sociais.",open:!1},{question:"Quais são os beneficios da parceria?",answer:"A parceria deve ser benéfica para ambos e na mesma proporção, nós oferecemos beneficios que podem variar entre WebSites, Bots para Discord ou divulgações.",open:!1}]}},methods:{updateScroll:function(){this.scrollPosition=window.scrollY},toggleOpen:function(e){this.faqs=this.faqs.map((function(t,a){return t.open=e===a&&!t.open,t}))}},computed:{href:function(){return"#"+this.Category._id}}},E=y,M=(a("ca40"),Object(c["a"])(E,f,p,!1,null,"6109fafa",null)),O=M.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"termos"},[a("div",{staticClass:"content-termos"},[a("router-link",{attrs:{to:"/"}},[a("h1",[e._v("Street "),a("span",[e._v("Codes")])])]),a("p",{attrs:{id:"att"}},[e._v("Termos atualizados em 29/03/2022")]),e._m(0),e._m(1),e._m(2),e._m(3),a("br"),a("br"),a("p",[e._v(" Nossos termos poderão sofrer atualizações a qualquer momento, fique sempre informado(a) antes de realizar qualquer pedido. ")])],1)])])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",[e._v("1. Orçamento")]),a("p",[e._v(" 1.1 - Todo orçamento é aconselhável que o próprio cliente faça uma descrição detalhada sobre o pedido. ")]),a("p",[e._v(" 1.2 - Antes do desenvolvimento do pedido o cliente deve enviar 50% ou 100% do pagamento. ")]),a("p",[e._v(" 1.3 - Caso o cliente opte em enviar 50% do pagamento antes do desenvolvimento, o mesmo deve enviar os outros 50% antes da entrega do produto. ")]),a("p",[e._v(" 1.4 - Qualquer alteração feita no pedido, será refeito o orçamento e alteração na data de entrega do pedido. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",[e._v("2. Reembolso")]),a("p",[e._v(" 2.1 - O reembolso pode ser solicitado caso o produto não seja entregue no prazo estabelecido. ")]),a("p",[e._v(" 2.2 - O reembolso pode ser solicitado caso o desenvolvedor ainda não tenha iniciado o desenvolvimento do pedido. ")]),a("p",[e._v("2.3 - Após a entrega do pedido, a solicitação de reembolso será recusada.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",[e._v("3. Manutenções (WebSites/DiscordBots)")]),a("p",[e._v(" 3.1 - Podera haver uma taxa adicional dependendo da solicitação do cliente. ")]),a("p",[e._v(" 3.2 - Caso haja erro na programação do produto por parte da Street Codes faremos a correação do problema. ")]),a("p",[e._v(" 3.3 - Faremos manutenções simples como: alteração de cores, alteração de imagem, correção ortográfica, etc. ")]),a("p",[e._v(" 3.4 - Se necessitar de uma manutenção, o cliente deve solicitar em um prazo de 15 dias após a entrega do produto ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",[e._v("4. Pagamentos")]),a("p",[e._v("4.1 - Nossos meios de pagamentos são: Mercado Pago, Pix, Boleto e PayPal.")]),a("p",[e._v(" 4.2 - Qualquer irregularidade encontrada no pagamento, haverá o cancelamento do projeto e o devolvimento do dinheiro. ")])])}],j={name:"termos"},D=j,z=(a("015b"),Object(c["a"])(D,S,$,!1,null,"063497ac",null)),B=z.exports;s["a"].use(u["a"]);var T=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:O},{path:"/termos",component:B}]});s["a"].config.productionTip=!1,new s["a"]({router:T,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"706c":function(e,t,a){e.exports=a.p+"img/Logo.72115604.png"},"725d":function(e,t,a){e.exports=a.p+"img/Discloud_White.cc488845.png"},"7a01":function(e,t,a){},"8b7d":function(e,t,a){e.exports=a.p+"img/undraw_progressive_app_m-9-ms.59356022.svg"},"977f":function(e,t,a){e.exports=a.p+"img/LogoDark.16dd1b9b.png"},"9c0c":function(e,t,a){},c661:function(e,t,a){},ca40:function(e,t,a){"use strict";a("097b")},f08f:function(e,t,a){"use strict";a("4cf5")}});
//# sourceMappingURL=app.361baa7f.js.map