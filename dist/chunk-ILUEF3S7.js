import{a as N}from"./chunk-GIPJPKZG.js";import{Cb as m,Eb as c,Na as n,Oa as l,Vb as g,Xa as h,Za as x,_b as y,da as a,gb as s,gc as C,hb as o,ia as v,ja as p,lc as u,sb as I}from"./chunk-KXB77ZPS.js";function E(e,t){if(e&1&&(s(0,"div")(1,"p"),m(2),o(),s(3,"p"),m(4),o(),s(5,"p"),m(6),o()()),e&2){let d=I();n(2),c("Name: ",d.foundUser.firstName,""),n(2),c("Email: ",d.foundUser.lastName,""),n(2),c("password: ",d.foundUser.password,"")}}var S=(()=>{let t=class t{constructor(r,i){this.route=r,this.usersService=i,this.usersService.getUsersById(this.route.snapshot.params.id).subscribe({next:f=>{this.foundUser=f}})}};t.\u0275fac=function(i){return new(i||t)(l(C),l(N))},t.\u0275cmp=v({type:t,selectors:[["app-usersdetail"]],decls:4,vars:1,consts:[[4,"ngIf"]],template:function(i,f){i&1&&(s(0,"div")(1,"h2"),m(2,"User Details"),o(),h(3,E,7,3,"div",0),o()),i&2&&(n(3),x("ngIf",f.foundUser))},dependencies:[g]});let e=t;return e})();var w=[{path:"users/:id",component:S}],j=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=a({imports:[u.forChild(w),u]});let e=t;return e})();var G=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=a({imports:[y,j]});let e=t;return e})();export{G as a};