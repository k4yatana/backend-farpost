(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"57gn":function(t,n,r){"use strict";r.r(n),r.d(n,"RoadsModule",(function(){return k}));var e=r("ofXK"),i=r("tyNb"),b=r("fXoL"),o=r("AytR"),a=r("tk/3");let s=(()=>{class t{constructor(t){this.http=t}getAll(){return this.http.get(o.a.baseUrl+"/roads/longest")}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(a.a))},t.\u0275prov=b.zb({token:t,factory:t.\u0275fac}),t})();var c=r("HDdC"),d=r("LRne"),l=r("lJxs"),u=r("JX91"),f=r("JIr8");let g=(()=>{class t{transform(t){return(n=t)&&(n instanceof c.a||"function"==typeof n.lift&&"function"==typeof n.subscribe)?t.pipe(Object(l.a)(t=>({loading:!1,value:t})),Object(u.a)({loading:!0}),Object(f.a)(t=>Object(d.a)({loading:!1,error:t}))):t;var n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=b.Cb({name:"withLoading",type:t,pure:!0}),t})();function p(t,n){if(1&t&&(b.Gb(0,"div",7),b.Gb(1,"div",8),b.Xb(2),b.Fb(),b.Gb(3,"div",8),b.Xb(4),b.Fb(),b.Gb(5,"div",8),b.Xb(6),b.Fb(),b.Fb()),2&t){const t=n.$implicit;b.ub(2),b.Yb(t.place),b.ub(2),b.Yb(t.length),b.ub(2),b.Yb(t.name)}}function v(t,n){if(1&t&&b.Wb(0,p,7,3,"div",10),2&t){const t=b.Ob().ngIf;b.Rb("ngForOf",t.value)}}function h(t,n){1&t&&(b.Gb(0,"div",11),b.Gb(1,"div",8),b.Eb(2,"img",12),b.Gb(3,"div"),b.Xb(4,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),b.Fb(),b.Fb(),b.Fb())}function m(t,n){1&t&&(b.Gb(0,"div",11),b.Gb(1,"div",8),b.Eb(2,"div",13),b.Fb(),b.Fb())}function w(t,n){if(1&t){const t=b.Hb();b.Gb(0,"div",2),b.Gb(1,"div",3),b.Eb(2,"img",4),b.Gb(3,"div",5),b.Xb(4,"\u0421\u0430\u043c\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430\u044f \u0434\u043e\u0440\u043e\u0433\u0430"),b.Fb(),b.Gb(5,"button",6),b.Mb("click",(function(){return b.Tb(t),b.Ob().update()})),b.Xb(6,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"),b.Fb(),b.Fb(),b.Gb(7,"div",7),b.Gb(8,"div",8),b.Xb(9,"\u041c\u0435\u0441\u0442\u043e"),b.Fb(),b.Gb(10,"div",8),b.Xb(11,"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 (\u043a\u043c)"),b.Fb(),b.Gb(12,"div",8),b.Xb(13,"\u0413\u043e\u0440\u043e\u0434\u0430"),b.Fb(),b.Fb(),b.Wb(14,v,1,1,"ng-template",9),b.Wb(15,h,5,0,"ng-template",9),b.Wb(16,m,3,0,"ng-template",9),b.Fb()}if(2&t){const t=n.ngIf;b.ub(5),b.Rb("disabled",t.loading),b.ub(9),b.Rb("ngIf",t.value),b.ub(1),b.Rb("ngIf",t.error),b.ub(1),b.Rb("ngIf",t.loading)}}const F=[{path:"longest",component:(()=>{class t{constructor(t){this.longestService=t,this.roads$=this.longestService.getAll()}update(){this.roads$=this.longestService.getAll()}}return t.\u0275fac=function(n){return new(n||t)(b.Db(s))},t.\u0275cmp=b.xb({type:t,selectors:[["app-longest"]],decls:4,vars:5,consts:[[1,"wrapper"],["class","card",4,"ngIf"],[1,"card"],[1,"card__header","bottom-border"],["src","/assets/back.svg","routerLink","/",1,"back-icon"],[1,"card__text"],[1,"btn",3,"disabled","click"],[1,"row","bottom-border"],[1,"col"],[3,"ngIf"],["class","row bottom-border",4,"ngFor","ngForOf"],[1,"row"],["src","/assets/warning.svg","routerLink","/",1,"warning-icon"],[1,"lds-dual-ring"]],template:function(t,n){1&t&&(b.Gb(0,"div",0),b.Wb(1,w,17,4,"div",1),b.Pb(2,"async"),b.Pb(3,"withLoading"),b.Fb()),2&t&&(b.ub(1),b.Rb("ngIf",b.Qb(2,1,b.Qb(3,3,n.roads$))))},directives:[e.j,i.a,e.i],pipes:[e.b,g],styles:['.back-icon[_ngcontent-%COMP%]{width:20px;cursor:pointer}.lds-dual-ring[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px}.lds-dual-ring[_ngcontent-%COMP%]:after{content:" ";display:block;width:32px;height:32px;margin:8px;border-radius:50%;border-color:#fff transparent;border-style:solid;border-width:6px;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.warning-icon[_ngcontent-%COMP%]{width:64px;height:64px}']}),t})()}];let y=(()=>{class t{}return t.\u0275mod=b.Bb({type:t}),t.\u0275inj=b.Ab({factory:function(n){return new(n||t)},imports:[[i.b.forChild(F)],i.b]}),t})(),G=(()=>{class t{}return t.\u0275mod=b.Bb({type:t}),t.\u0275inj=b.Ab({factory:function(n){return new(n||t)},imports:[[e.c]]}),t})(),k=(()=>{class t{}return t.\u0275mod=b.Bb({type:t}),t.\u0275inj=b.Ab({factory:function(n){return new(n||t)},providers:[s],imports:[[e.c,y,G]]}),t})()}}]);