import{_ as q,r as a,a as f,f as x,o as r,c as u,b as t,t as i,w as _,v as w,F as y,g as k,h as S,i as C,j as I,p as D,e as j}from"./index-9e69c3c1.js";import{L,_ as V,a as M}from"./Group2-775e9ef1.js";import{a as g,c as G}from"./changeqty-c23fa2bc.js";const N={setup(){let l=a(""),c=a(),d=a(0),o=a(0),v=a(""),h=a(!1),p=s=>{o.value=G.addqty(s)},e=s=>{o.value=G.reduceqty(s)},B=()=>{console.log(o.value),console.log("http://localhost:9191/"),g.post("http://localhost:9191/api/Order/add",{user_name:localStorage.getItem("username"),product_qty:o.value,price:l.value.price,product:l.value.product,picture:l.value.picture,salepageid:l.value.salepageid,shopid:l.value.shopid,skuid:l.value.skuid}).then(s=>{console.log(s)}).catch(s=>{console.log(s)})},m=()=>{window.scrollTo(0,0),h.value=!0,g.post("http://localhost:9191/Carts/Insert",{shopId:l.value.shopid,salePageId:l.value.salepageid,saleProductSKUid:l.value.skuid,qty:d.value}).then(s=>{console.log(s)}).catch(s=>{console.log(s)}).finally(()=>{h.value=!1})};return f(()=>{console.log("http://localhost:9191/"),g.get("http://localhost:9191/api/Order/Detail?salepageid="+localStorage.getItem("salepageid")).then(s=>{console.log(s),l.value=s.data,c.value=s.data.memberData,c.value.forEach(b=>{d.value=d.value+b.qty}),console.log(c.value),v.value="https:"+s.data.picture}).catch(s=>{console.log(s)})}),{data:l,memberData:c,totalqty:d,inputqty:o,imgurl:v,loadingDisplay:h,addqty:p,reduceqty:e,joinGroupBuy:B,insertCart:m}},components:{Loading:L}},n=l=>(D("data-v-c837097d"),l=l(),j(),l),E=n(()=>t("div",{class:"layout-header-fix"},[t("div",{class:"layout-header-fix-logo"},[t("img",{style:{height:"100px"},src:V,alt:""}),t("img",{class:"header-logo",src:M,alt:""})])],-1)),F={class:"hostGroupBuy-content"},O={class:"hostGroupBuy-content-content"},P={class:"hostGroupBuy-content-left"},T={class:"hostGroupBuy-content-left-img"},U={class:"hostGroupBuy-content-left-img-div"},z=["src"],K=n(()=>t("div",{class:"hostGroupBuy-content-left-img-small"},null,-1)),A={class:"hostGroupBuy-content-right"},H={class:"hostGroupBuy-content-right-title"},J=I('<div class="hostGroupBuy-content-right-price" data-v-c837097d>$300</div><div class="hostGroupBuy-content-right-color" data-v-c837097d><div class="hostGroupBuy-content-right-color-title" data-v-c837097d>顏色</div><div class="hostGroupBuy-content-right-color-content" data-v-c837097d><div class="hostGroupBuy-content-right-color-content-color" data-v-c837097d><div class="hostGroupBuy-content-right-color-content-color-color" data-v-c837097d>白色</div></div><div class="hostGroupBuy-content-right-color-content-color" data-v-c837097d><div class="hostGroupBuy-content-right-color-content-color-color" data-v-c837097d>藍色</div></div><div class="hostGroupBuy-content-right-color-content-color" data-v-c837097d><div class="hostGroupBuy-content-right-color-content-color-color" data-v-c837097d>灰色</div></div></div></div><div class="hostGroupBuy-content-right-size" data-v-c837097d><div class="hostGroupBuy-content-right-color-title" data-v-c837097d>尺寸</div><div class="hostGroupBuy-content-right-color-content" data-v-c837097d><div class="hostGroupBuy-content-right-color-content-color" data-v-c837097d><div class="hostGroupBuy-content-right-color-content-color-color" data-v-c837097d>S</div></div><div class="hostGroupBuy-content-right-color-content-color" data-v-c837097d><div class="hostGroupBuy-content-right-color-content-color-color" data-v-c837097d>M</div></div><div class="hostGroupBuy-content-right-color-content-color" data-v-c837097d><div class="hostGroupBuy-content-right-color-content-color-color" data-v-c837097d>L</div></div></div></div>',3),Q={class:"hostGroupBuy-content-right-qty"},R=n(()=>t("div",{class:"hostGroupBuy-content-right-color-title"},"數量",-1)),W={class:"hostGroupBuy-content-right-qty-content"},X={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon"},Y=n(()=>t("polygon",{points:"4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"},null,-1)),Z=[Y],$={style:{width:"10px"},"enable-background":"new 0 0 10 10",viewBox:"0 0 10 10",x:"0",y:"0",class:"shopee-svg-icon icon-plus-sign"},tt=n(()=>t("polygon",{points:"10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"},null,-1)),ot=[tt],st={class:"hostGroupBuy-content-right-color-content-groupbuy"},lt={class:"hostGroup-list"},ct={class:"hostGroup-list-table"},et={class:"hostGroup-list-table-table"},nt=n(()=>t("thead",{class:"hostGroup-list-table-table-thead"},[t("tr",null,[t("th",null,"名稱"),t("th",null,"數量"),t("th",null,"金額"),t("th")])],-1)),at={class:"hostGroup-list-table-table-tbody"},it=n(()=>t("td",null,"取消訂單",-1)),dt={class:"hostGroup-list-total"},rt={class:"hostGroup-list-total-total"},ut={class:"hostGroup-list-total-content"},ht={class:"hostGroup-list-total-button"},vt={class:"loading"};function pt(l,c,d,o,v,h){const p=x("Loading");return r(),u(y,null,[E,t("div",F,[t("div",O,[t("div",P,[t("div",T,[t("div",U,[t("img",{class:"hostGroupBuy-content-left-img-img",src:o.imgurl,alt:""},null,8,z)]),K])]),t("div",A,[t("div",H,i(o.data.product),1),J,t("div",Q,[R,t("div",W,[t("button",{class:"hostGroupBuy-content-right-color-content-minus",onClick:c[0]||(c[0]=e=>o.reduceqty(o.inputqty))},[(r(),u("svg",X,Z))]),_(t("input",{class:"hostGroupBuy-content-right-color-content-input",type:"number","onUpdate:modelValue":c[1]||(c[1]=e=>o.inputqty=e)},null,512),[[w,o.inputqty]]),t("button",{class:"hostGroupBuy-content-right-color-content-plus",onClick:c[2]||(c[2]=e=>o.addqty(o.inputqty))},[(r(),u("svg",$,ot))])])]),t("div",st,[t("button",{class:"hostGroupBuy-content-right-color-content-groupbuy-button",onClick:c[3]||(c[3]=(...e)=>o.joinGroupBuy&&o.joinGroupBuy(...e))}," 加入團購 ")])])])]),t("div",lt,[t("div",ct,[t("table",et,[nt,t("tbody",at,[(r(!0),u(y,null,k(o.memberData,e=>(r(),u("tr",null,[t("td",null,i(e.member),1),t("td",null,i(e.qty),1),t("td",null,i(e.qty*o.data.price),1),it]))),256))])]),t("div",dt,[t("div",rt,[t("div",ut,"共"+i(o.totalqty)+"件，"+i(o.totalqty*o.data.price)+"元",1),t("div",ht,[t("button",{class:"hostGroup-list-total-button-button",onClick:c[4]||(c[4]=(...e)=>o.insertCart&&o.insertCart(...e))},"提交購物車")])])])])]),_(t("div",vt,[C(p)],512),[[S,o.loadingDisplay]])],64)}const Gt=q(N,[["render",pt],["__scopeId","data-v-c837097d"]]);export{Gt as default};
