import{_ as w,r,a as D,f as q,o as d,c as u,b as t,t as a,w as y,v as k,F as m,g as C,h as S,i as I,d as z,p as T,e as L}from"./index-3f86c98a.js";import{L as O,_ as P,a as M}from"./Group2-8e4d6d37.js";import{a as v}from"./axios-82afda87.js";import{c as b,s as j}from"./shareURL-441fc9bd.js";const E={setup(){let l=r({}),s=r(),c=r(0),o=r(0),g=r(""),p=r({}),h=r(!1),n=e=>{o.value=b.addqty(e)},f=e=>{o.value=b.reduceqty(e)},x=async()=>{console.log(o.value),console.log("http://localhost:9191/"),await v.post("http://localhost:9191/api/Order/add",{user_name:localStorage.getItem("username"),product_qty:o.value,price:l.value.price,product:l.value.product,picture:l.value.picture,salepageid:l.value.salepageid,shopid:l.value.shopid,skuid:l.value.skuid,recommender:localStorage.getItem("recommender")}).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),await v.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(e=>{console.log(e),l.value=e.data,console.log(l.value),s.value=e.data.memberData,c.value=0,s.value.forEach(_=>{c.value=c.value+_.qty}),p.value=e.data.discountData}).catch(e=>{console.log(e)}).finally(()=>{window.scrollTo(0,document.body.scrollHeight)})},G=()=>{j.shareURL(localStorage.getItem("username"))},B=()=>{z.push({path:"/profile"})};return D(()=>{h.value=!0,console.log("http://localhost:9191/"),v.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(e=>{console.log(e),l.value=e.data,console.log(l.value),s.value=e.data.memberData,c.value=0,s.value.forEach(_=>{c.value=c.value+_.qty}),console.log(s.value),g.value="https:"+e.data.picture,p.value=e.data.discountData}).catch(e=>{console.log(e)}).finally(()=>{h.value=!1})}),{data:l,memberData:s,totalqty:c,inputqty:o,imgurl:g,discountData:p,loadingDisplay:h,addqty:n,reduceqty:f,joinGroupBuy:x,shareWeb:G,gotoProfile:B}},components:{Loading:O}},i=l=>(T("data-v-a18b9ab2"),l=l(),L(),l),U={class:"layout-header-fix"},V=i(()=>t("div",{class:"layout-header-fix-logo"},[t("img",{style:{height:"100px"},src:P,alt:""}),t("img",{class:"header-logo",src:M,alt:""})],-1)),W={style:{width:"30px","margin-top":"40px",position:"absolute",right:"150px","border-radius":"50%","border-style":"solid","border-color":"#fff","border-width":"2px"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 256 256","enable-background":"new 0 0 256 256","xml:space":"preserve"},F=i(()=>t("g",null,[t("g",null,[t("g",null,[t("path",{fill:"#ffffff",d:"M120.8,1c-7.2,0.8-17.6,3.8-24.1,7.1C77,18,63.6,35.5,58.6,57.6c-1.7,7.5-1.7,20.5,0,28.1c4.5,20.1,16.5,36.5,34.5,47c2.4,1.4,3.7,2.4,3.3,2.6c-0.4,0.2-3.4,1.2-6.7,2.4c-27.1,9.2-51.6,29.5-65.2,54c-7.8,14.1-12.6,29.6-14.1,45.6c-0.8,8.2-0.5,12.5,0.9,14.3c3.6,4.9,9.9,4.9,13.4,0c0.9-1.2,1.1-2.6,1.5-8.5c1-16.5,4.6-30,11.7-43.5c15.6-29.6,45-49.7,78.2-53.6c48.4-5.6,93.5,23,108.8,69.1c3.4,10.1,4.6,17.1,5.5,32.3c0.5,8.1,9.8,10.8,14.6,4.2c1-1.3,1.1-2.1,1-8.3c-0.3-27.1-12-54.7-32.1-75.5c-13.1-13.5-30.1-24.4-47.3-30.2c-3.3-1.1-6.3-2.2-6.7-2.3c-0.5-0.2,0.9-1.2,3.3-2.6c18.2-10.6,30.7-28,34.7-48.3c1.3-6.6,1.2-19.9-0.3-26.6c-6-28.1-26.4-48.8-54.4-55.3C138,1.2,126.1,0.5,120.8,1z M139.4,18c21.1,4.5,36.8,20,42.1,41.4c1.3,5.2,1.6,17.4,0.5,22.5c-2.5,11.3-7.1,20.2-14.7,28.1c-21.5,22.3-56.9,22.4-78.3,0.1c-7.7-8.1-12.4-16.9-14.8-28.2c-0.9-4.1-0.8-16.2,0-20.6c2.2-10.8,7.4-20.8,15.1-28.5c7.8-7.8,18.4-13.3,28.7-15c2.1-0.3,4.1-0.7,4.5-0.8C124.4,16.6,136.2,17.3,139.4,18z"})])])],-1)),N=[F],R={class:"hostGroupBuy-content"},H={class:"hostGroupBuy-content-content"},A={class:"hostGroupBuy-content-left"},J={class:"hostGroupBuy-content-left-img"},K={class:"hostGroupBuy-content-left-img-div"},Q=["src"],X=i(()=>t("div",{class:"hostGroupBuy-content-left-img-small"},null,-1)),Y={class:"hostGroupBuy-content-right"},Z={class:"hostGroupBuy-content-right-title"},$={class:"hostGroupBuy-content-right-price"},tt=i(()=>t("div",{class:"hostGroupBuy-content-right-color"},[t("div",{class:"hostGroupBuy-content-right-color-content"})],-1)),ot=i(()=>t("div",{class:"hostGroupBuy-content-right-size"},[t("div",{class:"hostGroupBuy-content-right-color-content"})],-1)),et={class:"hostGroupBuy-content-right-qty"},st=i(()=>t("div",{class:"hostGroupBuy-content-right-color-title"},"數量",-1)),lt={class:"hostGroupBuy-content-right-qty-content"},nt={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon"},at=i(()=>t("polygon",{points:"4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"},null,-1)),it=[at],ct={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon icon-plus-sign"},rt=i(()=>t("polygon",{points:"10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"},null,-1)),dt=[rt],ut={class:"hostGroupBuy-content-right-color-content-groupbuy"},ht={class:"hostGroup-list"},pt={class:"hostGroup-list-table"},gt={class:"hostGroup-list-table-table"},_t=i(()=>t("thead",{class:"hostGroup-list-table-table-thead"},[t("tr",null,[t("th",null,"名稱"),t("th",null,"數量"),t("th",null,"金額")])],-1)),vt={class:"hostGroup-list-table-table-tbody"},yt={class:"hostGroup-list-total"},mt={class:"hostGroup-list-total-total"},bt={class:"hostGroup-list-total-content",style:{display:"flex"}},ft={style:{"margin-right":"10px","font-size":"16px","align-items":"end",display:"flex"}},xt={style:{"margin-right":"10px","font-size":"16px","align-items":"end",display:"flex"}},Gt={style:{"margin-right":"10px","font-size":"16px","align-items":"end",display:"flex"}},Bt={style:{"margin-right":"10px",color:"#70c1d6","align-items":"end",display:"flex"}},wt={class:"loading"};function Dt(l,s,c,o,g,p){const h=q("Loading");return d(),u(m,null,[t("div",U,[V,t("div",{onClick:s[0]||(s[0]=(...n)=>o.gotoProfile&&o.gotoProfile(...n))},[(d(),u("svg",W,N))])]),t("div",R,[t("div",H,[t("div",A,[t("div",J,[t("div",K,[t("img",{class:"hostGroupBuy-content-left-img-img",src:o.imgurl,alt:""},null,8,Q)]),X])]),t("div",Y,[t("div",Z,a(o.data.product),1),t("div",$,"$"+a(o.data.price),1),tt,ot,t("div",et,[st,t("div",lt,[t("button",{class:"hostGroupBuy-content-right-color-content-minus",onClick:s[1]||(s[1]=n=>o.reduceqty(o.inputqty))},[(d(),u("svg",nt,it))]),y(t("input",{class:"hostGroupBuy-content-right-color-content-input",type:"number","onUpdate:modelValue":s[2]||(s[2]=n=>o.inputqty=n)},null,512),[[k,o.inputqty]]),t("button",{class:"hostGroupBuy-content-right-color-content-plus",onClick:s[3]||(s[3]=n=>o.addqty(o.inputqty))},[(d(),u("svg",ct,dt))])])]),t("div",ut,[t("button",{class:"hostGroupBuy-content-right-color-content-groupbuy-button",onClick:s[4]||(s[4]=(...n)=>o.joinGroupBuy&&o.joinGroupBuy(...n))}," 加入團購 "),t("button",{class:"hostGroupBuy-content-right-color-content-share-button",onClick:s[5]||(s[5]=(...n)=>o.shareWeb&&o.shareWeb(...n))}," 分享連結 ")]),t("div",null,"已選購$"+a(o.discountData.totalOriginalPrice),1),t("div",null,"目前折扣"+a(o.discountData.promotionDiscount),1),t("div",null,a(o.discountData.promotionDiscountTitle),1),t("div",null,a(o.discountData.recommendConditionTitle),1)])])]),t("div",ht,[t("div",pt,[t("table",gt,[_t,t("tbody",vt,[(d(!0),u(m,null,C(o.memberData,n=>(d(),u("tr",null,[t("td",null,a(n.member),1),t("td",null,a(n.qty),1),t("td",null,a(n.qty*o.data.price),1)]))),256))])]),t("div",yt,[t("div",mt,[t("div",bt,[t("div",ft,"已選購$"+a(o.discountData.totalOriginalPrice),1),t("div",xt,"目前折扣"+a(o.discountData.promotionDiscount),1),t("div",Gt,a(o.discountData.recommendConditionTitle),1),t("div",Bt,a(o.discountData.promotionDiscountTitle),1)])])])])]),y(t("div",wt,[I(h)],512),[[S,o.loadingDisplay]])],64)}const It=w(E,[["render",Dt],["__scopeId","data-v-a18b9ab2"]]);export{It as default};
