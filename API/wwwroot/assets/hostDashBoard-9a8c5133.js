import{_ as x,r as u,k as b,a as D,o as r,c,b as t,l as p,w as _,v as g,F as f,h as w,d as y,t as l,p as k,e as B}from"./index-cca1e4bd.js";import{L as G,_ as C,a as I}from"./Group2-0fdbe1cf.js";import{a as M}from"./axios-82afda87.js";import"./HubConnectionBuilder-918d4c92.js";const S={setup(){let a=u({}),o=u("2023-10-01"),i=u("2023-10-31"),s=()=>{y.push({path:"/profile"})},h=b(()=>a.value.filter(n=>{const e=new Date(n.start),m=new Date(o.value),v=new Date(i.value);return e>=m&&e<=v}));return D(()=>{M.get("http://10.50.10.159:9191/api/Dashboard/Grouplist").then(n=>{console.log(n),a.value=n.data}).catch(n=>{console.log(n)})}),{data:a,filteredData:h,startDate:o,endDate:i,gotoProfile:s}},components:{Loading:G}},d=a=>(k("data-v-42d71069"),a=a(),B(),a),V={class:"layout-header-fix"},L=d(()=>t("div",{class:"layout-header-fix-logo"},[t("img",{style:{height:"100px"},src:C,alt:""}),t("img",{class:"header-logo",src:I,alt:""})],-1)),P={style:{width:"30px","margin-top":"40px",position:"absolute",right:"150px","border-radius":"50%","border-style":"solid","border-color":"#fff","border-width":"2px"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 256 256","enable-background":"new 0 0 256 256","xml:space":"preserve"},z=d(()=>t("g",null,[t("g",null,[t("g",null,[t("path",{fill:"#ffffff",d:"M120.8,1c-7.2,0.8-17.6,3.8-24.1,7.1C77,18,63.6,35.5,58.6,57.6c-1.7,7.5-1.7,20.5,0,28.1c4.5,20.1,16.5,36.5,34.5,47c2.4,1.4,3.7,2.4,3.3,2.6c-0.4,0.2-3.4,1.2-6.7,2.4c-27.1,9.2-51.6,29.5-65.2,54c-7.8,14.1-12.6,29.6-14.1,45.6c-0.8,8.2-0.5,12.5,0.9,14.3c3.6,4.9,9.9,4.9,13.4,0c0.9-1.2,1.1-2.6,1.5-8.5c1-16.5,4.6-30,11.7-43.5c15.6-29.6,45-49.7,78.2-53.6c48.4-5.6,93.5,23,108.8,69.1c3.4,10.1,4.6,17.1,5.5,32.3c0.5,8.1,9.8,10.8,14.6,4.2c1-1.3,1.1-2.1,1-8.3c-0.3-27.1-12-54.7-32.1-75.5c-13.1-13.5-30.1-24.4-47.3-30.2c-3.3-1.1-6.3-2.2-6.7-2.3c-0.5-0.2,0.9-1.2,3.3-2.6c18.2-10.6,30.7-28,34.7-48.3c1.3-6.6,1.2-19.9-0.3-26.6c-6-28.1-26.4-48.8-54.4-55.3C138,1.2,126.1,0.5,120.8,1z M139.4,18c21.1,4.5,36.8,20,42.1,41.4c1.3,5.2,1.6,17.4,0.5,22.5c-2.5,11.3-7.1,20.2-14.7,28.1c-21.5,22.3-56.9,22.4-78.3,0.1c-7.7-8.1-12.4-16.9-14.8-28.2c-0.9-4.1-0.8-16.2,0-20.6c2.2-10.8,7.4-20.8,15.1-28.5c7.8-7.8,18.4-13.3,28.7-15c2.1-0.3,4.1-0.7,4.5-0.8C124.4,16.6,136.2,17.3,139.4,18z"})])])],-1)),F=[z],N={class:"search-range-content"},T={class:"search-range"},U={class:"search-range-start-end"},E={class:"search-range-start-end"},j=d(()=>t("div",null,[t("button",{class:"search-range-start-end-button"},"尋找")],-1)),q={class:"hostGroup-list"},A={class:"hostGroup-list-table"},H={class:"hostGroup-list-table-table"},J=d(()=>t("thead",{class:"hostGroup-list-table-table-thead"},[t("tr",null,[t("th",null,"團購活動名稱"),t("th",null,"折扣門檻"),t("th",null,"預計銷售金額"),t("th",null,"實際銷售金額"),t("th",null,"參與人數"),t("th",null,"開始時間"),t("th",null,"結束時間"),t("th",null,"狀態")])],-1)),K={class:"hostGroup-list-table-table-tbody"};function O(a,o,i,s,h,n){return r(),c(f,null,[t("div",V,[L,t("div",{onClick:o[0]||(o[0]=(...e)=>s.gotoProfile&&s.gotoProfile(...e))},[(r(),c("svg",P,F))])]),t("div",N,[t("div",T,[t("div",U,[p(" 開始時間: "),_(t("input",{type:"date",placeholder:"開始時間","onUpdate:modelValue":o[1]||(o[1]=e=>s.startDate=e)},null,512),[[g,s.startDate]])]),t("div",E,[p(" 結束時間: "),_(t("input",{type:"date",placeholder:"結束時間","onUpdate:modelValue":o[2]||(o[2]=e=>s.endDate=e)},null,512),[[g,s.endDate]])]),j])]),t("div",q,[t("div",A,[t("table",H,[J,t("tbody",K,[(r(!0),c(f,null,w(s.filteredData,e=>(r(),c("tr",{key:e.id},[t("td",null,l(e.campaign),1),t("td",null,l(e.totaldiscount),1),t("td",null,l(e.totalprice),1),t("td",null,l(e.afterdiscount),1),t("td",null,l(e.membercount),1),t("td",null,l(e.start),1),t("td",null,l(e.finish),1),t("td",null,l(e.status),1)]))),128))])])])])],64)}const Y=x(S,[["render",O],["__scopeId","data-v-42d71069"]]);export{Y as default};
