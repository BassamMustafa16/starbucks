import{c as n,o as r,a as t,k as h,h as o,l as M,g as k,f as l,t as m,w as f,m as j,F as b,d as p,e as R,p as _,r as E,q as L,n as C,T as F,s as T,_ as A,u as w,j as U}from"./index-DRMhnc_3.js";const I={class:"sticky top-0 flex flex-row justify-between text-sm text-white bg-b-dark-green font-semibold py-3 px-5 md:px-10 z-10"},V={class:""},B={key:0},J={key:0,class:"border rounded-full py-2 px-5 bg-transparent"},N={__name:"Banner",props:["isMobile"],setup(a){return(s,e)=>(r(),n("div",I,[t("p",V,[e[0]||(e[0]=o(" Starbucks® ")),a.isMobile?(r(),n("br",B)):h("",!0),e[1]||(e[1]=o(" Rewards "))]),a.isMobile?(r(),n("button",J," Join in the app ")):h("",!0)]))}},z={class:"relative z-[-1] bg-[#D4E9E2]"},D=["src","alt"],O={class:"absolute flex flex-col gap-5 md:ml-10 max-md:w-full max-md:items-center md:w-1/3 top-10"},q={class:"cursor-pointer lg:text-2xl border rounded-full py-2 px-5 text-white bg-[#00754A] hover:bg-[#158159]"},G={__name:"HeroSection",props:["isMobile"],setup(a){const s=a,e=M(()=>s.isMobile?new URL("/starbucks/assets/hero-mobile-DUniPySW.jpg",import.meta.url).href:new URL("/starbucks/assets/hero-desktop-5wOnQU4j.png",import.meta.url).href);return(i,d)=>{const c=k("RouterLink");return r(),n("div",z,[t("img",{class:"h-full",src:e.value,alt:e.value},null,8,D),t("div",O,[d[0]||(d[0]=t("h2",{class:"font-semibold lg:text-4xl"},[o("FREE COFFEE"),t("br"),o("IS A TAP AWAY")],-1)),d[1]||(d[1]=t("p",{class:"lg:text-2xl"},"Join now to start earning Rewards.",-1)),t("button",q,m(a.isMobile?"Join in the app":"Join Now"),1),l(c,{class:"underline hover:no-underline lg:text-xl",to:"/"},{default:f(()=>[o(m(a.isMobile?"Or join online":"Or join in the app for the best experience"),1)]),_:1})])])}}},W={class:"mt-10 px-5 text-center flex flex-col gap-10"},Y={class:"flex flex-col md:flex-row gap-10"},P={class:"flex flex-row md:flex-col md:items-center items-start gap-5"},H={class:"flex flex-col gap-3"},Q={class:"text-left md:text-center font-semibold"},K={class:"text-left md:text-center"},X={class:"flex flex-row md:flex-col md:items-center items-start gap-5"},Z={class:"flex flex-col gap-3"},ee={class:"text-left md:text-center"},te={__name:"GettingStarted",props:["isMobile"],setup(a){return(s,e)=>{const i=k("RouterLink");return r(),n("div",W,[e[15]||(e[15]=t("div",null,[t("h2",{class:"font-semibold mb-5"},"Getting started is easy"),t("p",null,"Earn Stars and get rewarded in a few easy steps.")],-1)),t("ul",Y,[t("li",P,[e[9]||(e[9]=t("h3",{class:"flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"}," 1 ",-1)),t("div",H,[t("p",Q,m(a.isMobile?"Download the Starbucks® app":"Create an account"),1),t("p",K,[a.isMobile?(r(),n(b,{key:0},[l(i,{to:"/",class:"text-[#00754a] underline"},{default:f(()=>e[0]||(e[0]=[o("Join in the app")])),_:1}),e[2]||(e[2]=o(" to get access to the full range of Starbucks® Rewards benefits. You can also")),l(i,{to:"/",class:"text-[#00754a] underline"},{default:f(()=>e[1]||(e[1]=[o("join online")])),_:1}),e[3]||(e[3]=o(". "))],64)):(r(),n(b,{key:1},[e[6]||(e[6]=o(" To get started,")),l(i,{to:"/",class:"text-[#00754a] underline"},{default:f(()=>e[4]||(e[4]=[o("join now")])),_:1}),e[7]||(e[7]=o(". You can also ")),l(i,{to:"/",class:"text-[#00754a] underline"},{default:f(()=>e[5]||(e[5]=[o("Join in the app")])),_:1}),e[8]||(e[8]=o(" to get access to the full range of Starbucks® Rewards benefits. "))],64))])])]),t("li",X,[e[13]||(e[13]=t("h3",{class:"flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"}," 2 ",-1)),t("div",Z,[e[12]||(e[12]=t("p",{class:"text-left md:text-center font-semibold"}," Order and pay how you’d like ",-1)),t("p",ee,[e[11]||(e[11]=o(" Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. ")),l(i,{to:"/",class:"text-[#00754a] underline"},{default:f(()=>e[10]||(e[10]=[o("Learn how")])),_:1})])])]),e[14]||(e[14]=j('<li class="flex flex-row md:flex-col md:items-center items-start gap-5"><h3 class="flex items-center justify-center text-[#00754a] border-2 rounded-full text-center aspect-square w-13 font-semibold shrink-0"> 3 </h3><div class="flex flex-col gap-3"><p class="text-left md:text-center font-semibold"> Earn Stars, get Rewards </p><p class="text-left md:text-center"> As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars! </p></div></li>',1))])])}}},se={class:"flex flex-col bg-[#F1F8F5] mt-10 pt-15"},oe={id:"list",class:"flex justify-center border-b-2 lg:gap-10 border-gray-300 relative"},le=["onClick"],ae={class:"flex flex-col gap-5 bg-[#D4E9E2] relative h-110 md:h-80 overflow-hidden"},ne={class:"max-w-100"},re=["src","alt"],ie={class:"flex flex-col gap-5 max-md:items-center px-5 max-w-100"},de={class:"font-semibold text-center md:text-left"},ce={class:"text-center md:text-left whitespace-pre-wrap"},ue={__name:"GetFavorites",setup(a){const s=p(0),e=p([]),i=p(0),d=p(0),c=p([{img:"../../assets/images/rewards/25.png",title:"Customize your drink",description:"Make your drink just right with an extra espresso shot or a dash of your favorite syrup."},{img:"../../assets/images/rewards/100.png",title:"Brewed hot or iced coffee or tea, bakery item, packaged snack and more",description:"Treat yourself to an iced coffee, buttery croissant, bag of chips and more."},{img:"../../assets/images/rewards/200.png",title:"Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",description:"Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us."},{img:"../../assets/images/rewards/300.png",title:"Sandwich, protein box or at-home coffee",description:"Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®."},{img:"../../assets/images/rewards/400.png",title:"Select Starbucks® merchandise",description:"Take home a signature cup, drink tumbler or your choice of coffee merch up to $20."}]),y=u=>new URL(u,import.meta.url).href,v=()=>{if(e.value[s.value]){const u=e.value[s.value];i.value=u.offsetLeft,d.value=u.offsetWidth}},$=u=>{s.value=u,_(v)};return R(()=>{_(v)}),(u,x)=>(r(),n("div",se,[x[1]||(x[1]=t("h2",{class:"text-center font-semibold text-lg mb-5 lg:text-2xl"}," Get your favorites for free ",-1)),t("ul",oe,[(r(),n(b,null,E([25,100,200,300,400],(S,g)=>t("li",{key:g,ref_for:!0,ref_key:"listItems",ref:e,class:L(["py-4 px-2 text-lg font-semibold cursor-pointer transition-all duration-300 lg:text-xl",s.value===g?"text-black":"text-gray-500"]),onClick:fe=>$(g)},[o(m(S),1),x[0]||(x[0]=t("span",{class:"text-[#cba258]"},"★",-1))],10,le)),64)),t("div",{class:"absolute bottom-0 h-[3px] bg-[#00754a] transition-all duration-300 ease-in-out",style:C({width:`${d.value}px`,left:`${i.value}px`})},null,4)]),t("div",ae,[l(F,{mode:"out-in","enter-active-class":"transition-opacity duration-300 ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition-opacity duration-300 ease-in-out","leave-to-class":"opacity-0"},{default:f(()=>[c.value[s.value]?(r(),n("div",{key:s.value,class:"flex flex-col items-center md:flex-row absolute inset-0 justify-center"},[t("div",ne,[t("img",{src:y(c.value[s.value].img),alt:c.value[s.value].title,class:"w-full object-contain"},null,8,re)]),t("div",ie,[t("h3",de,m(c.value[s.value].title),1),t("p",ce,m(c.value[s.value].description),1)])])):h("",!0)]),_:1})])]))}},pe={__name:"RewardsView",setup(a){const{isMobile:s}=T(768);return(e,i)=>(r(),n(b,null,[l(A),l(N,{isMobile:w(s)},null,8,["isMobile"]),l(G,{isMobile:w(s)},null,8,["isMobile"]),l(te,{isMobile:w(s)},null,8,["isMobile"]),l(ue),l(U)],64))}};export{pe as default};
