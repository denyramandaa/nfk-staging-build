import{_ as u,a as e,o as a,c as r,b as i,f as p,t as d,u as s,n as f}from"./index.32c8eb53.js";const _={key:0,class:"pulse w-[12px] h-[12px] rounded-full bg-white mr-2"},m={class:"capitalize"},b={__name:"ChipProductStatus",props:{statusprod:{type:String,default:"Label"}},setup(o){const t=o,n=e(()=>t.statusprod==="live"?"#F32013":"#EEEEEE"),l=e(()=>t.statusprod==="live"?"#FFFFFF":"#666666"),c=e(()=>t.statusprod==="live"?"Berlangsung":"Sold Out");return(v,x)=>(a(),r("div",{class:"py-1 px-2 w-max text-sm font-bold flex justify-center items-center",style:f({color:s(l),"background-color":s(n)})},[t.statusprod=="live"?(a(),r("div",_)):i("",!0),p("span",m,d(s(c)),1)],4))}};var k=u(b,[["__scopeId","data-v-2f37b53a"]]);export{k as default};
