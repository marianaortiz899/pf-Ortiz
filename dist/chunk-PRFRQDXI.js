import{a as D}from"./chunk-FRWBXVHU.js";import{a as F}from"./chunk-TYCAFV25.js";import{a as k}from"./chunk-5DVIUDZZ.js";import{c as U}from"./chunk-MGAOFYJB.js";import{n as q}from"./chunk-RJSKI22Y.js";import{a as G}from"./chunk-OW7T7RJ3.js";import{$ as ae,Aa as Me,Ca as De,G as N,H as O,I as P,J as z,K as J,L as K,M,N as Q,O as W,Q as X,R as Y,S as Z,T as ee,W as te,X as ie,Y as oe,Z as ne,_ as re,a as y,aa as me,ba as se,ca as le,da as ce,ea as de,fa as ue,ia as pe,ja as fe,ka as Ce,ta as _e,ua as he,va as xe,wa as ge,xa as be,ya as ve,za as Se}from"./chunk-JAVY5PA6.js";import{Cb as m,Eb as x,Na as l,Oa as u,Vb as H,Xa as c,Za as d,_b as $,da as E,e as A,gb as o,hb as n,ia as w,ib as p,ic as B,ja as T,jb as C,kb as _,lc as j,mb as S,na as b,oa as v,qb as h,sb as f}from"./chunk-KXB77ZPS.js";var Ie=A(G());var L=(()=>{let t=class t{constructor(r,i,a){this.fb=r,this.dialogRef=i,this.editingCourse=a,this.courseForm=this.fb.group({name:this.fb.control("",[M.required,D]),description:this.fb.control("",[M.required,D]),schedule:this.fb.control("",[M.required,D]),price:this.fb.control("",[M.required,D])}),a&&this.courseForm.patchValue(a)}onSave(){this.courseForm.valid?this.dialogRef.close(this.courseForm.value):Ie.default.fire({icon:"error",title:"Error",text:"Todos los campos deben ser completados."})}};t.\u0275fac=function(i){return new(i||t)(u(ee),u(_e),u(he))},t.\u0275cmp=w({type:t,selectors:[["app-course-dialog"]],decls:29,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"grid","formgrid",3,"formGroup"],[1,"col-12"],[1,"w-full"],["formControlName","name","matInput",""],["formControlName","description","matInput",""],["formControlName","schedule","matInput",""],["formControlName","price","matInput",""],["mat-dialog-actions",""],["mat-dialog-close","","mat-button","","mat-raised-button",""],["mat-button","","mat-raised-button","",3,"click"]],template:function(i,a){i&1&&(o(0,"h1",0),m(1,"CURSOS"),n(),o(2,"div",1)(3,"form",2)(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),m(7,"Nombre del curso"),n(),p(8,"input",5),n()(),o(9,"div",3)(10,"mat-form-field",4)(11,"mat-label"),m(12,"Descripci\xF3n"),n(),p(13,"input",6),n()(),o(14,"div",3)(15,"mat-form-field",4)(16,"mat-label"),m(17,"Horario"),n(),p(18,"input",7),n()(),o(19,"div",3)(20,"mat-form-field",4)(21,"mat-label"),m(22,"precio"),n(),p(23,"input",8),n()()()(),o(24,"div",9)(25,"button",10),m(26,"Cancelar"),n(),o(27,"button",11),h("click",function(){return a.onSave()}),m(28,"Guardar"),n()()),i&2&&(l(3),d("formGroup",a.courseForm))},dependencies:[N,ge,be,Se,ve,pe,ue,Ce,X,K,Q,W,Y,Z]});let e=t;return e})();var g=A(G());function Fe(e,t){if(e&1){let s=S();o(0,"button",15),h("click",function(){b(s);let i=f(2);return v(i.onCreate())}),m(1," Agregar "),n()}}function ke(e,t){if(e&1&&(o(0,"div",13),c(1,Fe,2,0,"button",14),n()),e&2){let s=f();l(),d("ngIf",s.role==="ADMIN")}}function Ve(e,t){e&1&&(o(0,"th",16),m(1," No. "),n())}function je(e,t){if(e&1&&(o(0,"td",17),m(1),n()),e&2){let s=t.$implicit;l(),x(" ",s.id," ")}}function Re(e,t){e&1&&(o(0,"th",16),m(1," Nombre del curso "),n())}function Le(e,t){if(e&1&&(o(0,"td",17),m(1),n()),e&2){let s=t.$implicit;l(),x(" ",s.name," ")}}function Ae(e,t){e&1&&(o(0,"th",16),m(1," Descripci\xF3n del curso "),n())}function He(e,t){if(e&1&&(o(0,"td",17),m(1),n()),e&2){let s=t.$implicit;l(),x(" ",s.description," ")}}function $e(e,t){e&1&&(o(0,"th",16),m(1," Horario "),n())}function Be(e,t){if(e&1&&(o(0,"td",17),m(1),n()),e&2){let s=t.$implicit;l(),x(" ",s.schedule," ")}}function Ge(e,t){e&1&&(o(0,"th",16),m(1," Precio "),n())}function qe(e,t){if(e&1&&(o(0,"td",17),m(1),n()),e&2){let s=t.$implicit;l(),x(" ",s.price," ")}}function Ue(e,t){e&1&&(o(0,"th",16),m(1," actions "),n())}function Oe(e,t){if(e&1){let s=S();o(0,"button",21),h("click",function(){b(s);let i=f().$implicit,a=f();return v(a.onDelete(i.id))}),o(1,"mat-icon"),m(2,"delete"),n()()}}function Pe(e,t){if(e&1){let s=S();o(0,"button",20),h("click",function(){b(s);let i=f().$implicit,a=f();return v(a.onEdit(i))}),o(1,"mat-icon"),m(2,"edit"),n()()}}function ze(e,t){if(e&1){let s=S();o(0,"td",17),c(1,Oe,3,0,"button",18)(2,Pe,3,0,"button",19),o(3,"button",20),h("click",function(){let a=b(s).$implicit,I=f();return v(I.onDetail(a))}),o(4,"mat-icon"),m(5,"visibility"),n()()()}if(e&2){let s=f();l(),d("ngIf",s.role==="ADMIN"),l(),d("ngIf",s.role==="ADMIN")}}function Je(e,t){e&1&&p(0,"tr",22)}function Ke(e,t){e&1&&p(0,"tr",23)}function Qe(e,t){e&1&&(o(0,"div",24),p(1,"mat-spinner",25),n())}var Ee=(()=>{let t=class t{constructor(r,i,a,I,Te){this.coursesService=r,this.loadingService=i,this.dialog=a,this.router=I,this.store=Te,this.displayedColumns=["id","name","description","schedule","price","action"],this.isLoading=!1,this.courses=[],this.authUser$=this.store.select(U),this.loadingService.setIsLoading(!0),this.coursesService.getCourses().subscribe({next:V=>{this.courses=V},complete:()=>{this.loadingService.setIsLoading(!1)}}),this.authUser$.subscribe(V=>{this.role=V?.role})}ngOnInit(){this.loadingService.setIsLoading(!0),this.loadingService.isLoading$.subscribe(r=>{this.isLoading=r}),this.coursesService.getCourses().subscribe({next:r=>{this.courses=r},complete:()=>{this.loadingService.setIsLoading(!1)}})}onCreate(){this.dialog.open(L).afterClosed().subscribe({next:r=>{r&&this.coursesService.createCourse(r).subscribe({next:i=>this.courses=i})}})}onEdit(r){this.dialog.open(L,{data:r}).afterClosed().subscribe({next:i=>{i&&this.coursesService.updateCourseByID(r.id,i).subscribe({next:a=>{this.courses=a,g.default.fire("Exito","El curso se edit\xF3 correctamente","success")},error:a=>{g.default.fire("Error","Hubo un problema al editar el curso","error")}})}})}onDelete(r){g.default.fire({title:"\xBFEst\xE1s seguro?",text:"Esta acci\xF3n no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonText:"Aceptar",cancelButtonText:"Cancelar"}).then(i=>{i.isConfirmed&&this.coursesService.deleteCourseById(r).subscribe({next:a=>{this.courses=a,g.default.fire("Realizado","Se elimin\xF3 correctamente","success")},error:a=>{g.default.fire("Error","Hubo un problema al eliminar el curso","error")}})})}onDetail(r){let i={state:r};this.router.navigate(["dashboard/courses/"+r.id],i)}};t.\u0275fac=function(i){return new(i||t)(u(k),u(y),u(xe),u(B),u(q))},t.\u0275cmp=w({type:t,selectors:[["app-courses"]],decls:23,vars:5,consts:[["class","flex justify-content-end m-3",4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","schedule"],["matColumnDef","price"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","app-loading",4,"ngIf"],[1,"flex","justify-content-end","m-3"],["mat-button","",3,"click",4,"ngIf"],["mat-button","",3,"click"],["mat-header-cell",""],["mat-cell",""],["color","primary","mat-icon-button","",3,"click",4,"ngIf"],["color","accent","mat-icon-button","",3,"click",4,"ngIf"],["color","accent","mat-icon-button","",3,"click"],["color","primary","mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""],[1,"app-loading"],["color","accent",1,"example-margin"]],template:function(i,a){i&1&&(c(0,ke,2,1,"div",0),o(1,"table",1),C(2,2),c(3,Ve,2,0,"th",3)(4,je,2,1,"td",4),_(),C(5,5),c(6,Re,2,0,"th",3)(7,Le,2,1,"td",4),_(),C(8,6),c(9,Ae,2,0,"th",3)(10,He,2,1,"td",4),_(),C(11,7),c(12,$e,2,0,"th",3)(13,Be,2,1,"td",4),_(),C(14,8),c(15,Ge,2,0,"th",3)(16,qe,2,1,"td",4),_(),C(17,9),c(18,Ue,2,0,"th",3)(19,ze,6,2,"td",4),_(),c(20,Je,1,0,"tr",10)(21,Ke,1,0,"tr",11),n(),c(22,Qe,2,0,"div",12)),i&2&&(d("ngIf",!a.isLoading),l(),d("dataSource",a.courses),l(19),d("matHeaderRowDef",a.displayedColumns),l(),d("matRowDefColumns",a.displayedColumns),l(),d("ngIf",a.isLoading))},dependencies:[H,te,oe,me,ne,ie,se,re,ae,le,ce,z,N,O,F]});let e=t;return e})();var We=[{path:"courses",component:Ee}],we=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=T({type:t}),t.\u0275inj=E({imports:[j.forChild(We),j]});let e=t;return e})();var Vt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=T({type:t}),t.\u0275inj=E({providers:[k,y],imports:[$,de,J,P,Me,fe,De,F,we]});let e=t;return e})();export{Vt as a};