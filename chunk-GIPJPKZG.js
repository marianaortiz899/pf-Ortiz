import{a as u}from"./chunk-U5QPIUGZ.js";import{b as r}from"./chunk-OW7T7RJ3.js";import{E as a,K as l,ac as c,ca as h,fa as p,q as o,w as n}from"./chunk-KXB77ZPS.js";var m=["ADMIN","USER"];var C=(()=>{let e=class e{constructor(t,s){this.alerts=t,this.httpClient=s}getUsersById(t){return this.httpClient.get(`${r.apiURL}/users/${t}`)}getRoles(){return o(m).pipe(l(1e3))}getUsers(){return this.httpClient.get(`${r.apiURL}/users`).pipe(a(t=>(this.alerts.showError("ERROR AL CARGAR"),o([]))))}createUser(t){return this.httpClient.post(`${r.apiURL}/users`,t).pipe(n(()=>this.getUsers()))}deleteUser(t){return this.httpClient.delete(`${r.apiURL}/users/${t}`).pipe(n(()=>this.getUsers()))}getAllStudents(){return this.httpClient.get(`${r.apiURL}/users?role=STUDENT`)}};e.\u0275fac=function(s){return new(s||e)(p(u),p(c))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{C as a};
