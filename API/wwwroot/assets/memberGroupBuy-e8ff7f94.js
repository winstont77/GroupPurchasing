import{_ as D,r as d,a as k,f as m,o as u,c as h,b as t,g as f,t as i,w as b,v as P,F as x,h as S,i as C,d as I,p as z,e as L}from"./index-6a09ff33.js";import{L as T,_ as M,a as j}from"./Group2-ba8074f8.js";import{a as y}from"./axios-82afda87.js";import{d as E,c as G,s as O}from"./discountTitle-0ff0a6d5.js";const U={setup(){let l=d({}),s=d(),r=d(0),o=d(0),g=d(""),n=d({}),p=d(!1),_=e=>{o.value=G.addqty(e)},a=e=>{o.value=G.reduceqty(e)},B=async()=>{console.log(o.value),console.log("http://localhost:9191/"),await y.post("http://localhost:9191/api/Order/add",{user_name:localStorage.getItem("username"),product_qty:o.value,price:l.value.price,product:l.value.product,picture:l.value.picture,salepageid:l.value.salepageid,shopid:l.value.shopid,skuid:l.value.skuid,recommender:localStorage.getItem("recommender")}).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),await y.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(e=>{console.log(e),l.value=e.data,console.log(l.value),s.value=e.data.memberData,r.value=0,s.value.forEach(v=>{r.value=r.value+v.qty}),n.value=e.data.discountData,n.value.totalPayment!=0&&n.value.totalPrice&&(l.value.price=l.value.price*(n.value.totalPayment/n.value.totalPrice))}).catch(e=>{console.log(e)}).finally(()=>{window.scrollTo(0,document.body.scrollHeight)})},w=()=>{O.shareURL(localStorage.getItem("username"))},q=()=>{I.push({path:"/profile"})};return k(()=>{p.value=!0,console.log("http://localhost:9191/"),y.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(e=>{console.log(e),l.value=e.data,console.log(l.value),s.value=e.data.memberData,r.value=0,s.value.forEach(v=>{r.value=r.value+v.qty}),console.log(s.value),g.value="https:"+e.data.picture,n.value=e.data.discountData,n.value.totalPayment!=0&&n.value.totalPrice&&(l.value.price=l.value.price*(n.value.totalPayment/n.value.totalPrice))}).catch(e=>{console.log(e)}).finally(()=>{p.value=!1})}),{data:l,memberData:s,totalqty:r,inputqty:o,imgurl:g,discountData:n,loadingDisplay:p,addqty:_,reduceqty:a,joinGroupBuy:B,shareWeb:w,gotoProfile:q}},components:{Loading:T,discountTitle:E}},c=l=>(z("data-v-b0eecae7"),l=l(),L(),l),V={class:"layout-header-fix"},W=c(()=>t("div",{class:"layout-header-fix-logo"},[t("img",{style:{height:"100px"},src:M,alt:""}),t("img",{class:"header-logo",src:j,alt:""})],-1)),F={style:{width:"30px","margin-top":"40px",position:"absolute",right:"150px","border-radius":"50%","border-style":"solid","border-color":"#fff","border-width":"2px"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 256 256","enable-background":"new 0 0 256 256","xml:space":"preserve"},N=c(()=>t("g",null,[t("g",null,[t("g",null,[t("path",{fill:"#ffffff",d:"M120.8,1c-7.2,0.8-17.6,3.8-24.1,7.1C77,18,63.6,35.5,58.6,57.6c-1.7,7.5-1.7,20.5,0,28.1c4.5,20.1,16.5,36.5,34.5,47c2.4,1.4,3.7,2.4,3.3,2.6c-0.4,0.2-3.4,1.2-6.7,2.4c-27.1,9.2-51.6,29.5-65.2,54c-7.8,14.1-12.6,29.6-14.1,45.6c-0.8,8.2-0.5,12.5,0.9,14.3c3.6,4.9,9.9,4.9,13.4,0c0.9-1.2,1.1-2.6,1.5-8.5c1-16.5,4.6-30,11.7-43.5c15.6-29.6,45-49.7,78.2-53.6c48.4-5.6,93.5,23,108.8,69.1c3.4,10.1,4.6,17.1,5.5,32.3c0.5,8.1,9.8,10.8,14.6,4.2c1-1.3,1.1-2.1,1-8.3c-0.3-27.1-12-54.7-32.1-75.5c-13.1-13.5-30.1-24.4-47.3-30.2c-3.3-1.1-6.3-2.2-6.7-2.3c-0.5-0.2,0.9-1.2,3.3-2.6c18.2-10.6,30.7-28,34.7-48.3c1.3-6.6,1.2-19.9-0.3-26.6c-6-28.1-26.4-48.8-54.4-55.3C138,1.2,126.1,0.5,120.8,1z M139.4,18c21.1,4.5,36.8,20,42.1,41.4c1.3,5.2,1.6,17.4,0.5,22.5c-2.5,11.3-7.1,20.2-14.7,28.1c-21.5,22.3-56.9,22.4-78.3,0.1c-7.7-8.1-12.4-16.9-14.8-28.2c-0.9-4.1-0.8-16.2,0-20.6c2.2-10.8,7.4-20.8,15.1-28.5c7.8-7.8,18.4-13.3,28.7-15c2.1-0.3,4.1-0.7,4.5-0.8C124.4,16.6,136.2,17.3,139.4,18z"})])])],-1)),R=[N],H={style:{"background-color":"#fff",width:"calc(100vw - 17px)",height:"fit-content","padding-left":"20px"}},A={class:"hostGroupBuy-content"},J={class:"hostGroupBuy-content-content"},K={class:"hostGroupBuy-content-left"},Q={class:"hostGroupBuy-content-left-img"},X={class:"hostGroupBuy-content-left-img-div"},Y=["src"],Z=c(()=>t("div",{class:"hostGroupBuy-content-left-img-small"},null,-1)),$={class:"hostGroupBuy-content-right"},tt={class:"hostGroupBuy-content-right-title"},ot={class:"hostGroupBuy-content-right-price"},et=c(()=>t("div",{class:"hostGroupBuy-content-right-color"},[t("div",{class:"hostGroupBuy-content-right-color-content"})],-1)),lt=c(()=>t("div",{class:"hostGroupBuy-content-right-size"},[t("div",{class:"hostGroupBuy-content-right-color-content"})],-1)),st={class:"hostGroupBuy-content-right-qty"},at=c(()=>t("div",{class:"hostGroupBuy-content-right-color-title"},"數量",-1)),nt={class:"hostGroupBuy-content-right-qty-content"},it={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon"},ct=c(()=>t("polygon",{points:"4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"},null,-1)),rt=[ct],dt={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon icon-plus-sign"},ut=c(()=>t("polygon",{points:"10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"},null,-1)),ht=[ut],pt={class:"hostGroupBuy-content-right-color-content-groupbuy"},gt={class:"hostGroup-list"},_t={class:"hostGroup-list-table"},vt={class:"hostGroup-list-table-table"},yt=c(()=>t("thead",{class:"hostGroup-list-table-table-thead"},[t("tr",null,[t("th",null,"名稱"),t("th",null,"數量"),t("th",null,"金額")])],-1)),mt={class:"hostGroup-list-table-table-tbody"},ft={class:"hostGroup-list-total"},bt={class:"hostGroup-list-total-total"},xt={class:"hostGroup-list-total-content",style:{display:"flex"}},Gt={style:{"margin-right":"10px","font-size":"16px","align-items":"end",display:"flex"}},Bt={style:{"margin-right":"10px","font-size":"16px","align-items":"end",display:"flex"}},wt={style:{"margin-right":"10px",color:"#70c1d6","align-items":"end",display:"flex"}},qt={class:"loading"};function Dt(l,s,r,o,g,n){const p=m("discountTitle"),_=m("Loading");return u(),h(x,null,[t("div",V,[W,t("div",{onClick:s[0]||(s[0]=(...a)=>o.gotoProfile&&o.gotoProfile(...a))},[(u(),h("svg",F,R))])]),t("div",H,[f(p)]),t("div",A,[t("div",J,[t("div",K,[t("div",Q,[t("div",X,[t("img",{class:"hostGroupBuy-content-left-img-img",src:o.imgurl,alt:""},null,8,Y)]),Z])]),t("div",$,[t("div",tt,i(o.data.product),1),t("div",ot,"$"+i(o.data.price),1),et,lt,t("div",st,[at,t("div",nt,[t("button",{class:"hostGroupBuy-content-right-color-content-minus",onClick:s[1]||(s[1]=a=>o.reduceqty(o.inputqty))},[(u(),h("svg",it,rt))]),b(t("input",{class:"hostGroupBuy-content-right-color-content-input",type:"number","onUpdate:modelValue":s[2]||(s[2]=a=>o.inputqty=a)},null,512),[[P,o.inputqty]]),t("button",{class:"hostGroupBuy-content-right-color-content-plus",onClick:s[3]||(s[3]=a=>o.addqty(o.inputqty))},[(u(),h("svg",dt,ht))])])]),t("div",pt,[t("button",{class:"hostGroupBuy-content-right-color-content-groupbuy-button",onClick:s[4]||(s[4]=(...a)=>o.joinGroupBuy&&o.joinGroupBuy(...a))}," 加入團購 "),t("button",{class:"hostGroupBuy-content-right-color-content-share-button",onClick:s[5]||(s[5]=(...a)=>o.shareWeb&&o.shareWeb(...a))}," 分享連結 ")]),t("div",null,"已選購$"+i(o.discountData.totalPrice),1),t("div",null,"目前折扣"+i(o.discountData.totalDiscount),1),t("div",null,"優惠價"+i(o.discountData.totalPayment),1)])])]),t("div",gt,[t("div",_t,[t("table",vt,[yt,t("tbody",mt,[(u(!0),h(x,null,S(o.memberData,a=>(u(),h("tr",null,[t("td",null,i(a.member),1),t("td",null,i(a.qty),1),t("td",null,i(a.qty*o.data.price),1)]))),256))])]),t("div",ft,[t("div",bt,[t("div",xt,[t("div",Gt,"已選購$"+i(o.discountData.totalPrice),1),t("div",Bt,"目前折扣"+i(o.discountData.totalDiscount),1),t("div",wt,i(o.discountData.totalPayment),1)])])])])]),b(t("div",qt,[f(_)],512),[[C,o.loadingDisplay]])],64)}const It=D(U,[["render",Dt],["__scopeId","data-v-b0eecae7"]]);export{It as default};