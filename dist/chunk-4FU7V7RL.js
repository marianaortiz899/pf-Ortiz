import{a as F,b as Ne}from"./chunk-Y35ZGRMX.js";import{a as $}from"./chunk-FRWBXVHU.js";import{a as A}from"./chunk-C7CHWMTC.js";import{a as te}from"./chunk-5GLVLZJ3.js";import{$ as ve,Ca as ye,G as N,H as ie,I as re,J as ne,K as oe,L as T,M as v,N as D,O as ae,P as me,Q as le,R as se,S as de,T as ce,U as pe,V as ue,W as fe,X as _e,Y as he,Z as Ce,_ as Se,a as ee,aa as xe,ba as ge,ca as Me,da as be,ea as Ee,fa as V,ia as k,ja as Ue,ka as R,la as we,ma as L,na as Ie,oa as j,u as y}from"./chunk-U2C7WTHA.js";import{$a as p,Bb as W,Cb as X,Ea as h,Ga as d,Lb as Y,Mb as Z,Ob as M,Pa as i,Qa as r,Ra as u,S as E,Sa as C,Ta as S,V as H,Va as I,X as U,Y as w,Za as c,a as G,aa as f,ba as _,jb as m,lb as g,ob as P,pb as J,qb as K,v as O,va as s,wa as x,ya as q,za as z,zb as Q}from"./chunk-7WN7TALM.js";var Te=(()=>{let t=class t{constructor(a){this.fb=a,this.userSubmitted=new z,this.userForm=this.fb.group({firstName:this.fb.control("",[v.required,$]),lastName:this.fb.control("",[v.required,$]),email:this.fb.control("",[v.required,v.email]),password:this.fb.control("",[v.required]),role:this.fb.control("",[v.required])})}onSubmit(){this.userForm.invalid?this.userForm.markAllAsTouched():(this.userSubmitted.emit(this.userForm.value),this.userForm.reset(),this.userForm.markAsUntouched())}ngOnInit(){}};t.\u0275fac=function(n){return new(n||t)(x(ce))},t.\u0275cmp=U({type:t,selectors:[["app-user-form"]],outputs:{userSubmitted:"userSubmitted"},decls:33,vars:1,consts:[[1,"grid","formgrid",3,"formGroup","ngSubmit"],[1,"col-6"],[1,"w-full"],["formControlName","firstName","matInput","","type","text"],["formControlName","lastName","matInput","","type","text"],[1,"col-12"],["formControlName","email","matInput","","type","text"],["formControlName","password","matInput","","type","password"],["formControlName","role","matInput",""],["value","Admin"],["value","User"],[1,"col-12","flex","justify-content-end"],["mat-raised-button","","color","accent"]],template:function(n,l){n&1&&(i(0,"form",0),c("ngSubmit",function(){return l.onSubmit()}),i(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),m(4,"Nombre"),r(),u(5,"input",3),r()(),i(6,"div",1)(7,"mat-form-field",2)(8,"mat-label"),m(9,"Apellido"),r(),u(10,"input",4),r()(),i(11,"div",5)(12,"mat-form-field",2)(13,"mat-label"),m(14,"Email"),r(),u(15,"input",6),r()(),i(16,"div",1)(17,"mat-form-field",2)(18,"mat-label"),m(19,"Contrase\xF1a"),r(),u(20,"input",7),r()(),i(21,"div",1)(22,"mat-form-field",2)(23,"mat-label"),m(24,"Rol"),r(),i(25,"mat-select",8)(26,"mat-option",9),m(27,"Admin"),r(),i(28,"mat-option",10),m(29,"User"),r()()()(),i(30,"div",11)(31,"button",12),m(32,"Guardar"),r()()()),n&2&&d("formGroup",l.userForm)},dependencies:[k,V,R,L,y,N,le,T,D,ae,se,de],styles:[".mat-mdc-text-field-wrapper.mdc-text-field{background-color:#fae0e4!important}"]});let e=t;return e})();function $e(e,t){e&1&&(i(0,"th",15),m(1," ID "),r())}function Be(e,t){if(e&1&&(i(0,"td",16),m(1),r()),e&2){let o=t.$implicit;s(),g(" ",o.id," ")}}function Ge(e,t){e&1&&(i(0,"th",15),m(1," Nombre Completo "),r())}function Oe(e,t){if(e&1&&(i(0,"td",16),m(1),P(2,"fullName"),r()),e&2){let o=t.$implicit;s(),g(" ",J(2,1,o)," ")}}function qe(e,t){e&1&&(i(0,"th",15),m(1," Email "),r())}function ze(e,t){if(e&1&&(i(0,"td",16),m(1),r()),e&2){let o=t.$implicit;s(),g(" ",o.email," ")}}function Je(e,t){e&1&&(i(0,"th",15),m(1," Rol "),r())}function Ke(e,t){if(e&1&&(i(0,"td",16),m(1),r()),e&2){let o=t.$implicit;s(),g(" ",o.role," ")}}function Qe(e,t){e&1&&(i(0,"th",15),m(1," Fecha de creaci\xF3n "),r())}function We(e,t){if(e&1&&(i(0,"td",16),m(1),P(2,"date"),r()),e&2){let o=t.$implicit;s(),g(" ",K(2,1,o.fecha,"dd/MM/yyyy")," ")}}function Xe(e,t){e&1&&u(0,"th",17)}function Ye(e,t){if(e&1){let o=I();i(0,"td",16)(1,"button",18),c("click",function(){let l=f(o).$implicit,b=p(2);return _(b.onDeleteUser(l))}),i(2,"mat-icon"),m(3,"delete"),r()(),i(4,"button",18),c("click",function(){let l=f(o).$implicit,b=p(2);return _(b.editarUsuario(l))}),i(5,"mat-icon"),m(6,"edit"),r()(),i(7,"button",19)(8,"mat-icon"),m(9,"visibility"),r()()()}if(e&2){let o=t.$implicit;s(7),d("routerLink",o.id)}}function Ze(e,t){e&1&&u(0,"tr",20)}function et(e,t){e&1&&u(0,"tr",21)}function tt(e,t){if(e&1){let o=I();i(0,"div")(1,"app-user-form",2),c("userSubmitted",function(n){f(o);let l=p();return _(l.onUserSubmitted(n))}),r(),u(2,"h1"),i(3,"table",3),C(4,4),h(5,$e,2,0,"th",5)(6,Be,2,1,"td",6),S(),C(7,7),h(8,Ge,2,0,"th",5)(9,Oe,3,3,"td",6),S(),C(10,8),h(11,qe,2,0,"th",5)(12,ze,2,1,"td",6),S(),C(13,9),h(14,Je,2,0,"th",5)(15,Ke,2,1,"td",6),S(),C(16,10),h(17,Qe,2,0,"th",5)(18,We,3,4,"td",6),S(),C(19,11),h(20,Xe,1,0,"th",12)(21,Ye,10,1,"td",6),S(),h(22,Ze,1,0,"tr",13)(23,et,1,0,"tr",14),r()()}if(e&2){let o=p();s(3),d("dataSource",o.dataSource),s(19),d("matHeaderRowDef",o.displayedColumns),s(),d("matRowDefColumns",o.displayedColumns)}}function it(e,t){if(e&1){let o=I();i(0,"div")(1,"mat-form-field")(2,"mat-label"),m(3,"Nombre"),r(),i(4,"input",22),c("ngModelChange",function(n){f(o);let l=p();return _(l.userEdit.firstName=n)}),r()(),i(5,"mat-form-field")(6,"mat-label"),m(7,"Apellido"),r(),i(8,"input",22),c("ngModelChange",function(n){f(o);let l=p();return _(l.userEdit.lastName=n)}),r()(),i(9,"mat-form-field")(10,"mat-label"),m(11,"Email"),r(),i(12,"input",22),c("ngModelChange",function(n){f(o);let l=p();return _(l.userEdit.email=n)}),r()(),i(13,"mat-form-field")(14,"mat-label"),m(15,"Rol"),r(),i(16,"mat-select",23),c("ngModelChange",function(n){f(o);let l=p();return _(l.userEdit.role=n)}),i(17,"mat-option",24),m(18,"Admin"),r(),i(19,"mat-option",25),m(20,"User"),r()()(),i(21,"button",26),c("click",function(){f(o);let n=p();return _(n.guardar())}),m(22,"guardar"),r(),i(23,"button",26),c("click",function(){f(o);let n=p();return _(n.editar=!1)}),m(24,"cancelar"),r()()}if(e&2){let o=p();s(4),d("ngModel",o.userEdit.firstName),s(4),d("ngModel",o.userEdit.lastName),s(4),d("ngModel",o.userEdit.email),s(4),d("ngModel",o.userEdit.role)}}function rt(e,t){e&1&&(i(0,"div",27),u(1,"mat-spinner",28),r())}var De=(()=>{let t=class t{constructor(a,n,l){this.cdr=a,this.UserService=n,this.loadingService=l,this.roles=[],this.displayedColumns=["id","fullName","email","role","fecha","delete"],this.dataSource=[],this.isLoading=!1,this.editar=!1,this.userEdit={id:0,firstName:"",lastName:"",email:"",password:"",role:"",token:""},this.idCounter=0,this.loadingService.setIsLoading(!0)}ngOnInit(){this.getPageData()}getPageData(){this.loadingService.setIsLoading(!0),O([this.UserService.getRoles(),this.UserService.getUsers()]).subscribe({next:a=>{this.roles=a[0],this.dataSource=a[1]},complete:()=>{this.loadingService.setIsLoading(!1)}})}onUserSubmitted(a){this.loadingService.setIsLoading(!0);let n=this.dataSource.length;this.UserService.createUser(a).subscribe({next:l=>{this.dataSource=[...l]},complete:()=>{this.loadingService.setIsLoading(!1)}})}onDeleteUser(a){this.loadingService.setIsLoading(!0),this.UserService.deleteUser(a.id).subscribe({next:n=>{this.dataSource=[...n]},complete:()=>{this.loadingService.setIsLoading(!1)}})}editarUsuario(a){this.userEdit=G({},a),this.editar=!this.editar}guardar(){let a=this.dataSource.findIndex(n=>n.id===this.userEdit.id);a!==-1&&(this.dataSource[a]=this.userEdit,this.dataSource=[...this.dataSource]),this.editar=!1}};t.\u0275fac=function(n){return new(n||t)(x(q),x(F),x(ee))},t.\u0275cmp=U({type:t,selectors:[["app-users"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","app-loading",4,"ngIf"],[3,"userSubmitted"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","appTitle","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fullName"],["matColumnDef","email"],["matColumnDef","role"],["matColumnDef","fecha"],["matColumnDef","delete",1,"col-6"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","appTitle",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","",1,"col-offset-6",3,"click"],["color","accent","mat-icon-button","",3,"routerLink"],["mat-header-row",""],["mat-row",""],["type","text","matInput","",3,"ngModel","ngModelChange"],["name","role",3,"ngModel","ngModelChange"],["value","Admin"],["value","user"],["mat-raised-button","","color","accent",3,"click"],[1,"app-loading"],["color","accent",1,"example-margin"]],template:function(n,l){n&1&&h(0,tt,24,3,"div",0)(1,it,25,4,"div",0)(2,rt,2,0,"div",1),n&2&&(d("ngIf",!l.isLoading),s(),d("ngIf",l.editar&&!l.isLoading),s(),d("ngIf",l.isLoading))},dependencies:[Q,fe,he,xe,Ce,_e,ge,Se,ve,Me,be,k,V,R,L,y,N,ie,T,D,ne,me,Z,A,Te,W,j],styles:[".col-md-2[_ngcontent-%COMP%]{width:20%}"]});let e=t;return e})();var Fe=(e,t)=>{let o=H(Y);return H(te).authUser?.role==="ADMIN"?!0:o.createUrlTree(["dashboard","courses"])};var nt=[{path:"users",canActivate:[Fe],component:De}],Ve=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=E({imports:[M.forChild(nt),M]});let e=t;return e})();var Kt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=E({providers:[j,F],imports:[X,Ee,Ue,we,Ie,re,ue,oe,ye,pe,M,Ne,A,Ve]});let e=t;return e})();export{Fe as a,Kt as b};