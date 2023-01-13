(()=>{"use strict";var o={6340:(o,a,r)=>{r(6992),r(8674),r(9601),r(7727);var e=r(5010),t=r(3396),n=r(7139),i={class:"column is-one-quarter"},s={class:"column is-three-quarter conteudo"},u={class:"lista"};function c(o,a,r,e,c,l){var d=(0,t.up)("BarraLateral"),m=(0,t.up)("Formulario"),f=(0,t.up)("Tarefa"),p=(0,t.up)("Box");return(0,t.wg)(),(0,t.iD)("main",{class:(0,n.C_)(["columns is-gapless is-multiline",{"modo-escuro":o.modoEscuroAtivo}])},[(0,t._)("div",i,[(0,t.Wm)(d,{onAoTemaAlterado:o.trocarTema},null,8,["onAoTemaAlterado"])]),(0,t._)("div",s,[(0,t.Wm)(m,{onAoSalvarTarefa:o.salvarTarefa},null,8,["onAoSalvarTarefa"]),(0,t._)("div",u,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.tarefas,(function(o,a){return(0,t.wg)(),(0,t.j4)(f,{key:a,tarefa:o},null,8,["tarefa"])})),128)),o.listaVazia?((0,t.wg)(),(0,t.j4)(p,{key:0},{default:(0,t.w5)((function(){return[(0,t.Uk)(" LEVANTA GAY, BORA TRABALHAR!!!!! ")]})),_:1})):(0,t.kq)("",!0)])])],2)}r(7658);const l=r.p+"img/jojo.3dcb9779.png";var d=function(o){return(0,t.dD)("data-v-a32bf9aa"),o=o(),(0,t.Cn)(),o},m=d((function(){return(0,t._)("h1",null,[(0,t._)("img",{src:l,alt:"Logo"})],-1)}));function f(o,a,r,e,i,s){return(0,t.wg)(),(0,t.iD)("header",null,[m,(0,t._)("button",{class:"button",onClick:a[0]||(a[0]=function(){return o.alterarTema&&o.alterarTema.apply(o,arguments)})},(0,n.zw)(o.textoBotao),1)])}const p=(0,t.aZ)({name:"BarraLateral",emits:["aoTemaAlterado"],data:function(){return{modoEscuroAtivo:!1}},computed:{textoBotao:function(){return this.modoEscuroAtivo?"Desativar Modo Escuro":"Ativar Modo Escuro"}},methods:{alterarTema:function(){this.modoEscuroAtivo=!this.modoEscuroAtivo,this.$emit("aoTemaAlterado",this.modoEscuroAtivo)}}});var v=r(89);const h=(0,v.Z)(p,[["render",f],["__scopeId","data-v-a32bf9aa"]]),g=h;var b={class:"box formulario"},T={class:"columns"},_={class:"column is-8",role:"form","aria-label":"Formulário para criação de uma nova tarefa"},A={class:"column"};function w(o,a,r,n,i,s){var u=(0,t.up)("Temporizador");return(0,t.wg)(),(0,t.iD)("div",b,[(0,t._)("div",T,[(0,t._)("div",_,[(0,t.wy)((0,t._)("input",{type:"text",class:"input",placeholder:"Qual tarefa você deseja iniciar?","onUpdate:modelValue":a[0]||(a[0]=function(a){return o.descricao=a})},null,512),[[e.nr,o.descricao]])]),(0,t._)("div",A,[(0,t.Wm)(u,{onAoTemporizadorFinalizado:o.finalizarTarefa},null,8,["onAoTemporizadorFinalizado"])])])])}var E={class:"is-flex is-align-items-center is-justify-content-space-between"},y=["disabled"],z=(0,t._)("span",{class:"icon"},[(0,t._)("i",{class:"fas fa-play"})],-1),S=(0,t._)("span",null,"Play",-1),x=[z,S],j=["disabled"],k=(0,t._)("span",{class:"icon"},[(0,t._)("i",{class:"fas fa-stop"})],-1),C=(0,t._)("span",null,"Stop",-1),O=[k,C];function Z(o,a,r,e,n,i){var s=(0,t.up)("Cronometro");return(0,t.wg)(),(0,t.iD)("div",E,[(0,t.Wm)(s,{tempoEmSegundos:o.tempoEmSegundos},null,8,["tempoEmSegundos"]),(0,t._)("button",{class:"button",onClick:a[0]||(a[0]=function(){return o.iniciar&&o.iniciar.apply(o,arguments)}),disabled:o.cronometroRodando},x,8,y),(0,t._)("button",{class:"button",onClick:a[1]||(a[1]=function(){return o.finalizar&&o.finalizar.apply(o,arguments)}),disabled:!o.cronometroRodando},O,8,j)])}r(2564);var B={class:"display"};function D(o,a,r,e,i,s){return(0,t.wg)(),(0,t.iD)("section",null,[(0,t._)("strong",B,(0,n.zw)(o.tempoDecorrido),1)])}r(9653),r(3650),r(8733),r(3710);const F=(0,t.aZ)({name:"Cronometro",props:{tempoEmSegundos:{type:Number,default:0}},computed:{tempoDecorrido:function(){return new Date(1e3*this.tempoEmSegundos).toISOString().substr(11,8)}}}),R=(0,v.Z)(F,[["render",D]]),L=R,W=(0,t.aZ)({name:"Temporizador",emits:["aoTemporizadorFinalizado"],components:{Cronometro:L},data:function(){return{tempoEmSegundos:0,cronometro:0,cronometroRodando:!1}},methods:{iniciar:function(){var o=this;this.cronometro=setInterval((function(){o.tempoEmSegundos+=1,o.cronometroRodando=!0}),1e3)},finalizar:function(){clearInterval(this.cronometro),this.cronometroRodando=!1,this.$emit("aoTemporizadorFinalizado",this.tempoEmSegundos),this.tempoEmSegundos=0}}}),I=(0,v.Z)(W,[["render",Z]]),q=I,V=(0,t.aZ)({name:"Formulario",emits:["aoSalvarTarefa"],components:{Temporizador:q},data:function(){return{descricao:""}},methods:{finalizarTarefa:function(o){this.$emit("aoSalvarTarefa",{duracaoEmSegundos:o,descricao:this.descricao}),this.descricao=""}}}),$=(0,v.Z)(V,[["render",w]]),M=$;var P={class:"columns"},H={class:"column is-7"},N={class:"column"};function U(o,a,r,e,i,s){var u=(0,t.up)("Cronometro"),c=(0,t.up)("Box");return(0,t.wg)(),(0,t.j4)(c,null,{default:(0,t.w5)((function(){return[(0,t._)("div",P,[(0,t._)("div",H,(0,n.zw)(o.tarefa.descricao||"Tarefa sem descrição"),1),(0,t._)("div",N,[(0,t.Wm)(u,{tempoEmSegundos:o.tarefa.duracaoEmSegundos},null,8,["tempoEmSegundos"])])])]})),_:1})}function Y(o,a,r,e,i,s){return(0,t.wg)(),(0,t.iD)("div",{class:"box has-text-weight-bold",style:(0,n.j5)(o.estilos)},[(0,t.WI)(o.$slots,"default")],4)}const G=(0,t.aZ)({name:"Box",data:function(){return{estilos:{backgroundColor:"#FAF0CA"}}}}),K=(0,v.Z)(G,[["render",Y]]),Q=K,J=(0,t.aZ)({name:"Tarefa",components:{Cronometro:L,Box:Q},props:{tarefa:{type:Object,required:!0}}}),X=(0,v.Z)(J,[["render",U]]),oo=X,ao=(0,t.aZ)({name:"App",components:{BarraLateral:g,Formulario:M,Tarefa:oo,Box:Q},data:function(){return{tarefas:[],modoEscuroAtivo:!1}},computed:{listaVazia:function(){return 0===this.tarefas.length}},methods:{salvarTarefa:function(o){this.tarefas.push(o)},trocarTema:function(o){this.modoEscuroAtivo=o}}}),ro=(0,v.Z)(ao,[["render",c]]),eo=ro;(0,e.ri)(eo).mount("#app")}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,r),n.exports}r.m=o,(()=>{var o=[];r.O=(a,e,t,n)=>{if(!e){var i=1/0;for(l=0;l<o.length;l++){for(var[e,t,n]=o[l],s=!0,u=0;u<e.length;u++)(!1&n||i>=n)&&Object.keys(r.O).every((o=>r.O[o](e[u])))?e.splice(u--,1):(s=!1,n<i&&(i=n));if(s){o.splice(l--,1);var c=t();void 0!==c&&(a=c)}}return a}n=n||0;for(var l=o.length;l>0&&o[l-1][2]>n;l--)o[l]=o[l-1];o[l]=[e,t,n]}})(),(()=>{r.n=o=>{var a=o&&o.__esModule?()=>o["default"]:()=>o;return r.d(a,{a}),a}})(),(()=>{r.d=(o,a)=>{for(var e in a)r.o(a,e)&&!r.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:a[e]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()})(),(()=>{r.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a)})(),(()=>{r.p="/"})(),(()=>{var o={143:0};r.O.j=a=>0===o[a];var a=(a,e)=>{var t,n,[i,s,u]=e,c=0;if(i.some((a=>0!==o[a]))){for(t in s)r.o(s,t)&&(r.m[t]=s[t]);if(u)var l=u(r)}for(a&&a(e);c<i.length;c++)n=i[c],r.o(o,n)&&o[n]&&o[n][0](),o[n]=0;return r.O(l)},e=self["webpackChunkalura_tracker"]=self["webpackChunkalura_tracker"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))})();var e=r.O(void 0,[998],(()=>r(6340)));e=r.O(e)})();
//# sourceMappingURL=app.75b9005e.js.map