"use strict";(self["webpackChunkschoolgroups"]=self["webpackChunkschoolgroups"]||[]).push([[782],{3379:function(s,e,r){r.d(e,{Z:function(){return b}});var n=r(3396),o=r(7139),t=r(9242),p=r.p+"img/cross.80b0a2e1.svg";const u=s=>((0,n.dD)("data-v-3e097969"),s=s(),(0,n.Cn)(),s),i={class:"person"},l=u((()=>(0,n._)("img",{src:p,alt:"icon close"},null,-1))),a=[l];function c(s,e,r,p,u,l){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("span",null,(0,o.zw)(r.name),1),r.isDeleteActive?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:e[0]||(e[0]=(0,t.iM)(((...s)=>l.deletePerson&&l.deletePerson(...s)),["prevent"]))},a)):(0,n.kq)("",!0)])}var g={emits:["deleteId"],props:{id:Number,name:String,isDeleteActive:Boolean},data(){return{}},methods:{deletePerson(){this.$emit("deleteId",this.id)}}},d=r(89);const h=(0,d.Z)(g,[["render",c],["__scopeId","data-v-3e097969"]]);var b=h},509:function(s,e,r){r.r(e),r.d(e,{default:function(){return R}});var n=r(3396),o=r(7139);const t=s=>((0,n.dD)("data-v-8fe9b3c6"),s=s(),(0,n.Cn)(),s),p={class:"groups wrapper"},u={class:"groups-infos"},i={class:"groups-infos-recap"},l={key:0,class:"groups-infos-sup"},a={class:"groups-recaps"},c=t((()=>(0,n._)("h2",{class:"groups-title"},"Récapitulatif :",-1))),g={class:"groups-recaps-list"},d={class:"groups-recaps-item groups-nbGroups"},h={class:"groups-recaps-item groups-nbPersons"},b={class:"groups-groups"},v=t((()=>(0,n._)("h2",{class:"groups-title"},"Liste des groupes :",-1))),f={class:"groups-groups-list"};function w(s,e,r,t,w,P){const _=(0,n.up)("group");return(0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",u,[(0,n._)("p",i,"Vous avez créé "+(0,o.zw)(w.nbGroup)+" groupes de "+(0,o.zw)(w.nbPersonsPerGroup)+" personne(s).",1),0!=w.nbPersonsRemaining?((0,n.wg)(),(0,n.iD)("p",l,"Dont "+(0,o.zw)(w.nbGroupSup)+" groupe de "+(0,o.zw)(w.nbPersonsPerGroup+1)+" personnes.",1)):(0,n.kq)("",!0)]),(0,n._)("div",a,[c,(0,n._)("ul",g,[(0,n._)("li",d,(0,o.zw)(w.nbGroup)+" groupes",1),(0,n._)("li",h,(0,o.zw)(w.nbPersons)+" élèves",1)])]),(0,n._)("div",b,[v,(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.groups,((s,e)=>((0,n.wg)(),(0,n.j4)(_,{key:e,id:parseInt(e),persons:s},null,8,["id","persons"])))),128))])])])}r(7658);var P=r(65);const _=s=>((0,n.dD)("data-v-6ac8de1d"),s=s(),(0,n.Cn)(),s),m={class:"group"},G={class:"group-header"},D=_((()=>(0,n._)("hr",null,null,-1))),k={class:"group-list"};function z(s,e,r,t,p,u){const i=(0,n.up)("Person");return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("header",G,[(0,n._)("h2",null,"Groupe n°"+(0,o.zw)(r.id+1),1),D]),(0,n._)("div",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.persons,((s,e)=>((0,n.wg)(),(0,n.j4)(i,{key:e,id:parseInt(e),name:s,isDeleteActive:!1},null,8,["id","name"])))),128))])])}var I=r(3379),y={props:{id:Number,persons:Object},components:{Person:I.Z}},C=r(89);const S=(0,C.Z)(y,[["render",z],["__scopeId","data-v-6ac8de1d"]]);var A=S,Z={components:{Group:A},data(){return{nbPersons:0,persons:[],nbGroup:0,groups:[],nbPersonsPerGroup:0,nbGroupSup:0,nbPersonsRemaining:0}},mounted(){this.persons=this.$store.getters.getPersons,this.nbGroup=this.$store.getters.getNbGroup,this.nbPersons=this.persons.length;const s=Math.floor(this.persons.length/this.nbGroup),e=this.persons.length%this.nbGroup,r=new Array;for(let n=0;n<this.nbGroup;n++)r[n]=new Array;for(let n=0;n<this.nbGroup;n++)for(let e=0;e<s;e++)r[n].push(...this.persons.splice(0,1));if(0!=e){this.nbGroupSup=this.persons.length;for(let s=0;s<this.persons.length;s++)r[s].push(...this.persons.splice(0,1))}this.groups=r,this.nbPersonsPerGroup=s,this.nbPersonsRemaining=e},computed:{...(0,P.Se)(["getPersons"]),...(0,P.Se)(["getNbGroup"])}};const N=(0,C.Z)(Z,[["render",w],["__scopeId","data-v-8fe9b3c6"]]);var R=N}}]);
//# sourceMappingURL=782.8cf1e5d6.js.map