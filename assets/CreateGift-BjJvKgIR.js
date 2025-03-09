import{c as r,o as u,a as e,h as C,s as V,G as B,H as j,d,E as S,p as z,f as m,I as w,J as R,u as h,x as y,w as q,k as x,K as E,q as g,T as L,F as P,r as A,t as N,L as U,_ as D,j as M}from"./index-DcQXbvME.js";import{_ as T,a as H,b as I,c as F,d as J,e as K,f as W,g as O,h as X,i as Y,j as Q,k as Z,l as ee,m as se,n as te,o as ae,p as le,q as oe,r as ie,s as ne,t as re,u as ue,v as me,w as de,x as _e,y as ge,z as ce,A as pe,B as ve,C as fe,D as be,E as xe,F as he,G as $e,H as ye,I as we,J as ke,K as Ce,L as Ee,M as Se}from"./www-starbucks-CRRmuq-P.js";const Pe={class:"flex flex-col gap-3 mt-10"},Ne=["src"],Ve={__name:"CreateGiftSection1",props:["card"],setup(k){const c=a=>new URL(Object.assign({"../../assets/images/gift/0.jpg":Se,"../../assets/images/gift/Starbucks Gift Cards- Starbucks Coffee Company - 3_3_2025 12-11-08 PM.zip":Ee,"../../assets/images/gift/bulk-gift-cards.jpg":Ce,"../../assets/images/gift/card1.png":ke,"../../assets/images/gift/card10.png":we,"../../assets/images/gift/card11.jpg":ye,"../../assets/images/gift/card12.jpg":$e,"../../assets/images/gift/card13.jpg":he,"../../assets/images/gift/card13.png":xe,"../../assets/images/gift/card14.png":be,"../../assets/images/gift/card15.png":fe,"../../assets/images/gift/card16.jpg":ve,"../../assets/images/gift/card16.png":pe,"../../assets/images/gift/card2.png":ce,"../../assets/images/gift/card3.png":ge,"../../assets/images/gift/card4.png":_e,"../../assets/images/gift/card5.png":de,"../../assets/images/gift/card6.png":me,"../../assets/images/gift/card7.png":ue,"../../assets/images/gift/card8.jpg":re,"../../assets/images/gift/card9.png":ne,"../../assets/images/gift/group-gift-cards (1).png":ie,"../../assets/images/gift/group-gift-cards.png":oe,"../../assets/images/gift/image (1).svg":le,"../../assets/images/gift/image (10).svg":ae,"../../assets/images/gift/image (11).svg":te,"../../assets/images/gift/image (2).svg":se,"../../assets/images/gift/image (3).svg":ee,"../../assets/images/gift/image (4).svg":Z,"../../assets/images/gift/image (5).svg":Q,"../../assets/images/gift/image (6).svg":Y,"../../assets/images/gift/image (7).svg":X,"../../assets/images/gift/image (8).svg":O,"../../assets/images/gift/image (9).svg":W,"../../assets/images/gift/image.gif":K,"../../assets/images/gift/image.svg":J,"../../assets/images/gift/placeholder.png":F,"../../assets/images/gift/summary_image.png":I,"../../assets/images/gift/summary_square.png":H,"../../assets/images/gift/www-starbucks.com":T})[`../../assets/images/gift/${a}`],import.meta.url).href;return(a,o)=>(u(),r("div",Pe,[o[0]||(o[0]=e("p",{class:"text-[#00000094]"},"Gift / Create eGift",-1)),o[1]||(o[1]=e("h3",{class:"font-semibold"},"Create eGift",-1)),e("div",null,[e("img",{src:c(k.card),class:"rounded-2xl"},null,8,Ne)]),o[2]||(o[2]=e("p",{class:"text-sm"},[e("span",{class:"text-[#00754a]"},"*"),C(" indicates required field")],-1))]))}},je={class:"flex flex-col gap-7 w-full"},Ae={class:"relative has-focus:border-[#00754a] border border-[#767676] rounded-xl"},Ge={class:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none rotate-90 scale-x-50"},Be={key:0,class:"group transition-all duration-300 ease-in-out"},ze={class:"relative"},Re={class:"error-message"},qe={__name:"GiftAmountSection",emits:["giftAmount"],setup(k,{emit:c}){V.add(B,j);const a=d(null),o=d(25),_=d(!1),i=d(25),l=c;return l("giftAmount",i.value),S(o,async n=>{var s;n==="Custom amount"?(_.value=!0,i.value="",await z(),(s=a.value)==null||s.focus()):(_.value=!1,i.value=n)}),S(i,n=>{l("giftAmount",n)}),(n,s)=>(u(),r("div",je,[s[10]||(s[10]=e("h2",{class:"font-semibold border-b-4 pb-3 border-[#D4E9E2]"},"Gift amount",-1)),e("div",Ae,[w(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),class:"peer py-3 md:text-lg px-5 appearance-none w-full outline-none cursor-pointer"},s[7]||(s[7]=[e("option",{value:"10"},"$10",-1),e("option",{value:"25"},"$25",-1),e("option",{value:"50"},"$50",-1),e("option",{value:"100"},"$100",-1),e("option",null,"Custom amount",-1)]),512),[[R,o.value]]),s[8]||(s[8]=e("label",{class:"peer-focus:text-[#00754A] text-xs md:text-sm text-[#00000094] absolute top-0 left-2 -translate-y-1/2 bg-white px-1"}," * Select gift amount ",-1)),e("p",Ge,[m(h(y),{class:"transition-all duration-300 text-[#00754a]",icon:["fas","greater-than"]})])]),m(L,{name:"roll",onBeforeEnter:s[2]||(s[2]=t=>t.style.maxHeight="0px"),onEnter:s[3]||(s[3]=t=>t.style.maxHeight=t.scrollHeight+"px"),onBeforeLeave:s[4]||(s[4]=t=>t.style.overflow="hidden"),onLeave:s[5]||(s[5]=t=>t.style.maxHeight="0px"),onAfterLeave:s[6]||(s[6]=t=>t.style.display="none")},{default:q(()=>[_.value?(u(),r("div",Be,[e("div",ze,[w(e("input",{id:"custom-amount","onUpdate:modelValue":s[1]||(s[1]=t=>i.value=t),type:"number",min:"5",max:"100",step:"1",ref_key:"customInputRef",ref:a,class:"peer custom-invalid-input custom-input",required:""},null,512),[[E,i.value]]),e("label",{for:"custom-amount",class:g(["custom-label custom-invalid-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2",i.value===""?["top-1/2","md:text-lg"]:["top-0","md:text-sm","text-xs"]])},"* Enter custom dollar amount",2)]),e("p",Re,[m(h(y),{icon:["fas","circle-xmark"],class:""}),s[9]||(s[9]=C(" Please enter a whole amount between $5 and $100 "))])])):x("",!0)]),_:1})]))}};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Le={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},Ue={class:"flex flex-col gap-7 w-full items-center"},De={key:0,class:"flex justify-between w-full"},Me=["onClick"],Te={class:"group transition-all duration-300 ease-in-out"},He={class:"relative"},Ie=["onUpdate:modelValue","id","onBlur"],Fe=["for"],Je={class:"group transition-all duration-300 ease-in-out"},Ke={class:"relative"},We=["onUpdate:modelValue","id","onBlur"],Oe=["for"],Xe={__name:"RecipientsSection",emits:["recipients"],setup(k,{emit:c}){V.add(j,Le);const a=c;d([]);const o=d([{name:"",email:"",touched:!1,valid:!1}]),_=n=>{o.value[n].touched=!0},i=n=>{const s=o.value[n].email;o.value[n].valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),_(n)},l=n=>{o.value.splice(n,1)};return S(o,n=>{a("recipients",n)},{deep:!0}),(n,s)=>(u(),r("div",Ue,[s[3]||(s[3]=e("h2",{class:"font-semibold border-b-4 pb-3 border-[#D4E9E2] w-full"}," Who are you gifting to? ",-1)),(u(!0),r(P,null,A(o.value,(t,p)=>(u(),r("div",{key:t,class:"flex flex-col gap-7 w-full"},[o.value.length>1?(u(),r("div",De,[e("p",null,"Recipient "+N(p+1),1),e("span",{onClick:b=>l(p),class:"cursor-pointer"},[m(h(y),{icon:["far","trash-can"]})],8,Me)])):x("",!0),e("div",Te,[e("div",He,[w(e("input",{"onUpdate:modelValue":b=>t.name=b,type:"text",id:"recipient-name-"+p,class:g(["peer custom-input",t.touched?"custom-invalid-input":""]),onBlur:b=>_(p),required:""},null,42,Ie),[[E,t.name]]),e("label",{for:"recipient-name-"+p,class:g(["custom-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2",t.name===""?["top-1/2","md:text-lg"]:["top-0","md:text-sm","text-xs"],t.touched?"custom-invalid-label":""])},"* Recipient Name",10,Fe)]),t.touched?(u(),r("p",{key:0,class:g(t.touched?"error-message":"")},[m(h(y),{icon:["fas","circle-xmark"],class:""}),s[1]||(s[1]=C(" Please enter the recipient's name. "))],2)):x("",!0)]),e("div",Je,[e("div",Ke,[w(e("input",{"onUpdate:modelValue":b=>t.email=b,type:"email",id:"recipient-email-"+p,class:g(["peer custom-input",t.touched?"custom-invalid-input":""]),onBlur:b=>i(p),required:""},null,42,We),[[E,t.email]]),e("label",{for:"recipient-email-"+p,class:g(["custom-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2",t.email===""?["top-1/2","md:text-lg"]:["top-0","md:text-sm","text-xs"],t.touched?"custom-invalid-label":""])},"* Recipient Email",10,Oe)]),t.touched?(u(),r("p",{key:0,class:g(t.touched?"error-message":"")},[m(h(y),{icon:["fas","circle-xmark"],class:""}),s[2]||(s[2]=C(" Please enter the recipient's email. "))],2)):x("",!0)])]))),128)),s[4]||(s[4]=e("p",null,"Maximum of 10 recipients",-1)),o.value.length<10?(u(),r("button",{key:0,class:"bg-black text-white py-1 px-3 rounded-full cursor-pointer",onClick:s[0]||(s[0]=t=>o.value.length<10?o.value.push({name:"",email:"",touched:!1,valid:!1}):null)}," Add another recipient ")):x("",!0)]))}},Ye={class:"flex flex-col gap-7 w-full items-center"},Qe={__name:"NoteSection",emits:["personalNote"],setup(k,{emit:c}){const a=d(""),o=c;return S(a,_=>{o("personalNote",_)}),(_,i)=>(u(),r("div",Ye,[i[1]||(i[1]=e("h2",{class:"font-semibold border-b-4 pb-3 border-[#D4E9E2] w-full"}," Personal note to all ",-1)),w(e("textarea",{"onUpdate:modelValue":i[0]||(i[0]=l=>a.value=l),class:"custom-input h-[150px]",placeholder:"Write a personal note to all recipients"},"    ",512),[[E,a.value]])]))}},Ze={class:"flex flex-col gap-7 w-full items-center"},es={class:"group transition-all duration-300 ease-in-out w-full"},ss={class:"relative"},ts={class:"group transition-all duration-300 ease-in-out w-full"},as={class:"relative"},ls={__name:"SenderSection",emits:["sender"],setup(k,{emit:c}){V.add(j);const a=d({name:"",email:"",touched:!1,valid:!1}),o=c,_=()=>{const i=a.value.email;a.value.valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)};return S(a,i=>{o("sender",i)},{deep:!0}),(i,l)=>(u(),r("div",Ze,[l[6]||(l[6]=e("h2",{class:"font-semibold border-b-4 pb-3 border-[#D4E9E2] w-full"}," From ",-1)),e("div",es,[e("div",ss,[w(e("input",{"onUpdate:modelValue":l[0]||(l[0]=n=>a.value.name=n),type:"text",id:"sender-name",class:g(["peer custom-input",a.value.touched?"custom-invalid-input":""]),onBlur:l[1]||(l[1]=n=>a.value.touched=!0),required:""},null,34),[[E,a.value.name]]),e("label",{for:"sender-name",class:g(["custom-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2",a.value.name===""?["top-1/2","md:text-lg"]:["top-0","md:text-sm","text-xs"],a.value.touched?"custom-invalid-label":""])},"* Sender Name",2)]),a.value.touched?(u(),r("p",{key:0,class:g(a.value.touched?"error-message":"")},[m(h(y),{icon:["fas","circle-xmark"],class:""}),l[4]||(l[4]=C(" Please enter the sender's name. "))],2)):x("",!0)]),e("div",ts,[e("div",as,[w(e("input",{"onUpdate:modelValue":l[2]||(l[2]=n=>a.value.email=n),type:"email",id:"sender-email",class:g(["peer custom-input",a.value.touched?"custom-invalid-input":""]),onBlur:l[3]||(l[3]=n=>{a.value.touched=!0,_()}),required:""},null,34),[[E,a.value.email]]),e("label",{for:"sender-email",class:g(["custom-label peer-focus:md:text-sm peer-focus:text-xs peer-focus:top-0 -translate-y-1/2",a.value.email===""?["top-1/2","md:text-lg"]:["top-0","md:text-sm","text-xs"],a.value.touched?"custom-invalid-label":""])},"* Sender Email",2)]),a.value.touched?(u(),r("p",{key:0,class:g(a.value.touched?"error-message":"")},[m(h(y),{icon:["fas","circle-xmark"],class:""}),l[5]||(l[5]=C(" Please enter the sender's email. "))],2)):x("",!0)])]))}},os={class:"flex flex-col items-center gap-10 max-md:px-[8.333vw] mx-auto max-w-150"},is={key:0,class:"fixed inset-0 flex items-center justify-center bg-[#00000090] z-50"},ns={class:"bg-white p-6 rounded-lg shadow-lg max-w-md w-full"},rs={class:"list-disc list-inside text-red-500"},ds={__name:"CreateGift",setup(k){const c=U(),a=d(!1),o=()=>{a.value=!1},_=c.query.card,i=d(""),l=d([]),n=d(""),s=d({name:"",email:"",touched:!1}),t=d([]),p=()=>{t.value=[],i.value||t.value.push("Please select a gift amount"),(i.value<5||i.value>100)&&t.value.push("Gift amount should be between $5 and $100"),l.value.length===0&&t.value.push("Please add at least one recipient"),(!s.value.name||!s.value.email)&&t.value.push("Please fill in the sender's name and email"),s.value.valid||t.value.push("Please enter a valid sender email address"),l.value.forEach($=>{!$.name||!$.email?t.value.push("Please fill in all recipient's name and email"):$.valid||t.value.push("Please enter a valid recipient email address")}),t.value.length===0?b():a.value=!0},b=()=>{window.alert(`You're about to send a gift of $${i.value} to ${l.value.length} recipiants as the follwing details: 

${l.value.map($=>`Recipient: ${$.name} - ${$.email}`).join(`
`)}

Personal Note: ${n.value}

Sender: ${s.value.name} - ${s.value.email}`)};return($,v)=>(u(),r(P,null,[m(D),e("main",os,[m(Ve,{card:h(_)},null,8,["card"]),m(qe,{onGiftAmount:v[0]||(v[0]=f=>i.value=f)}),m(Xe,{onRecipients:v[1]||(v[1]=f=>l.value=f)}),m(Qe,{onPersonalNote:v[2]||(v[2]=f=>n.value=f)}),m(ls,{onSender:v[3]||(v[3]=f=>s.value=f)}),e("button",{class:"fixed bg-[#00754a] py-2 lg:py-3 px-6 lg:px-10 text-white rounded-full text-lg md:text-2xl shadow-lg shadow-gray-500 bottom-10 right-5 z-20 transition-all duration-300 ease-in-out active:scale-95",onClick:p}," Checkout $"+N(l.value.length>0?Number(i.value)*l.value.length:0),1)]),m(M),a.value?(u(),r("div",is,[e("div",ns,[v[4]||(v[4]=e("h2",{class:"text-xl font-semibold mb-4"},"Validation Errors",-1)),e("ul",rs,[(u(!0),r(P,null,A(t.value,(f,G)=>(u(),r("li",{key:G},N(f),1))),128))]),e("button",{class:"mt-4 bg-[#00754a] text-white py-2 px-4 rounded",onClick:o}," Close ")])])):x("",!0)],64))}};export{ds as default};
