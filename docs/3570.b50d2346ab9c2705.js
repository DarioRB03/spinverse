"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3570],{3570:(h,u,i)=>{i.r(u),i.d(u,{MinijuegosModule:()=>j});var d=i(177),c=i(9384),o=i(4438),s=i(3667);function r(n,a){if(1&n){const t=o.RV6();o.j41(0,"ion-card",1),o.bIt("click",function(){const l=o.eBV(t).$implicit,M=o.XpG();return o.Njj(M.openMinijuego(l))}),o.j41(1,"ion-card-header"),o.nrm(2,"ion-icon",2),o.j41(3,"ion-card-title"),o.EFF(4),o.k0s()(),o.j41(5,"ion-card-content"),o.EFF(6),o.k0s()()}if(2&n){const t=a.$implicit;o.R7$(2),o.Y8G("name",t.icono),o.R7$(2),o.JRh(t.nombre),o.R7$(2),o.JRh(t.descripcion)}}const g=[{path:"",component:(()=>{var n;class a{constructor(e){this.router=e,this.minijuegos=[{nombre:"Juego de Clics",icono:"hand-left",descripcion:"Haz clic lo m\xe1s r\xe1pido posible.",ruta:"juego-clics"},{nombre:"Quiz",icono:"help-circle",descripcion:"Responde preguntas de conocimiento general.",ruta:"quiz"},{nombre:"Matem\xe1ticas R\xe1pidas",icono:"calculator",descripcion:"Resuelve problemas matem\xe1ticos r\xe1pidamente.",ruta:"math"},{nombre:"Juego de Memoria",icono:"albums",descripcion:"Recuerda la secuencia de colores.",ruta:"memory"},{nombre:"Juego de Reflejos",icono:"flash",descripcion:"Pon a prueba tus reflejos tocando el objetivo.",ruta:"tap"}]}openMinijuego(e){this.router.navigate([`/tabs/minijuegos/${e.ruta}`])}}return(n=a).\u0275fac=function(e){return new(e||n)(o.rXU(c.Ix))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-minijuegos"]],decls:7,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start",3,"name"]],template:function(e,l){1&e&&(o.j41(0,"ion-content")(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),o.EFF(4,"Minijuegos"),o.k0s()()(),o.j41(5,"ion-list"),o.DNE(6,r,7,3,"ion-card",0),o.k0s()()),2&e&&(o.R7$(6),o.Y8G("ngForOf",l.minijuegos))},dependencies:[d.Sq,s.b_,s.I9,s.ME,s.tN,s.W9,s.eU,s.iq,s.nf,s.BC,s.ai]}),a})()},{path:"juego-clics",loadChildren:()=>i.e(4447).then(i.bind(i,4447)).then(n=>n.JuegoClicsPageModule)},{path:"quiz",loadChildren:()=>i.e(5639).then(i.bind(i,5639)).then(n=>n.QuizPageModule)},{path:"math",loadChildren:()=>i.e(3415).then(i.bind(i,3415)).then(n=>n.MathPageModule)},{path:"memory",loadChildren:()=>i.e(2678).then(i.bind(i,2678)).then(n=>n.MemoryPageModule)},{path:"tap",loadChildren:()=>i.e(7080).then(i.bind(i,7080)).then(n=>n.TapPageModule)}];let m=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[c.iI.forChild(g),c.iI]}),a})(),j=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[d.MD,m,s.bv]}),a})()}}]);