import{H as q,F as w,Q as L}from"./FooterUTCA.5b6caafb.js";import{Q as B}from"./QBtn.6597607b.js";import{d as u,_ as p,o as r,c as n,w as _,a as o,t as i,b as l,e as I,r as s,f as k,g as d,F as c}from"./index.50e0ea59.js";const S=u({name:"RaceButton",components:{},props:{textColor:{type:String,default:"black"},depart:{type:String,default:void 0},arrivee:{type:String,default:void 0},relais:{type:String,default:void 0},distance:{type:String,required:!0},route:{type:String,required:!0}},data(){return{}}}),T={class:"q-py-none q-px-xl"},P={class:"text-subtitle2"},U={class:"text-h4 text-weight-bold"},A={key:0,class:"text-subtitle2"};function F(t,m,x,v,f,g){return r(),n(B,{"no-caps":"",rounded:"",stack:"",ripple:!1,style:{"background-color":"rgba(255, 255, 255, 0.8)",width:"25%",height:"103px","flex-flow":"row-reverse"},"text-color":t.textColor,to:t.route,class:"bordergreen q-mx-l items-center"},{default:_(()=>[o("div",T,[o("div",P,i(t.depart+" - "+t.arrivee),1),o("div",U,i(t.distance),1),t.relais?(r(),l("div",A,i(t.relais),1)):I("",!0)])]),_:1},8,["text-color","to"])}var O=p(S,[["render",F]]);const R=u({name:"InfoButton",components:{},props:{text:{type:String,required:!0}},data(){return{}}}),H={class:"q-py-none q-px-xl"},b={class:"text-h6 text-weight-bold"};function Q(t,m,x,v,f,g){return r(),n(B,{"no-caps":"",rounded:"",ripple:!1,style:{"background-color":"rgba(255, 255, 255, 0.8)",width:"20%"},"text-color":"black",class:"bordergreen q-mx-l"},{default:_(()=>[o("div",H,[o("div",b,i(t.text),1)])]),_:1})}var j=p(R,[["render",Q]]);const E=u({name:"IndexPage",components:{HeaderUTCA:q,FooterUTCA:w,RaceButton:O,InfoButton:j},data(){return{listBtn1:[{route:"/90km",textColor:"orange",distance:"90 km",depart:"Lannion",arrivee:"Lannion",relais:"SOLO TRIO"},{route:"/60km",textColor:"blue",distance:"60 km",depart:"Tr\xE9gastel",arrivee:"Lannion",relais:"SOLO DUO"},{route:"/47km",textColor:"purple",distance:"47 km",depart:"Landrellec",arrivee:"Lannion",relais:""}],listBtn2:[{route:"/32km",textColor:"green",distance:"32 km",depart:"Ile Grande",arrivee:"Lannion",relais:""},{route:"/20km",textColor:"red",distance:"20 km",depart:"Pors Mabo",arrivee:"Lannion",relais:""},{route:"/11km",textColor:"pink",distance:"11 km",depart:"Beg Hent",arrivee:"Lannion",relais:""}],listBtn3:[{route:"Benevoles",text:"B\xE9n\xE9voles"},{route:"Photos",text:"Photos"},{route:"Environnement",text:"Environnement"},{route:"Contacts",text:"Contact"}]}}}),N={class:"row justify-evenly"},V={class:"q-mt-md row justify-evenly"},D={class:"q-mt-md row justify-evenly"};function G(t,m,x,v,f,g){const h=s("HeaderUTCA"),y=s("RaceButton"),C=s("InfoButton"),$=s("FooterUTCA");return r(),n(L,{class:"customBG"},{default:_(()=>[k(h),o("div",N,[(r(!0),l(c,null,d(t.listBtn1,(e,a)=>(r(),n(y,{class:"col-sm-2",route:e.route,key:a,"text-color":e.textColor,distance:e.distance,depart:e.depart,arrivee:e.arrivee,relais:e.relais},null,8,["route","text-color","distance","depart","arrivee","relais"]))),128))]),o("div",V,[(r(!0),l(c,null,d(t.listBtn2,(e,a)=>(r(),n(y,{class:"col-sm-2 q-px-xl",route:e.route,key:a,"text-color":e.textColor,distance:e.distance,depart:e.depart,arrivee:e.arrivee,relais:e.relais},null,8,["route","text-color","distance","depart","arrivee","relais"]))),128))]),o("div",D,[(r(!0),l(c,null,d(t.listBtn3,(e,a)=>(r(),n(C,{class:"col-sm-2 q-px-xl",key:a,route:e.route,text:e.text},null,8,["route","text"]))),128))]),k($)]),_:1})}var K=p(E,[["render",G]]);export{K as default};
