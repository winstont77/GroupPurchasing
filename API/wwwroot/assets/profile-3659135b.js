import{a as p}from"./axios-82afda87.js";import{L as h,_ as m,a as u}from"./Group2-0fdbe1cf.js";import{_ as f,r as a,a as g,o as l,c as n,b as e,t as c,F as d,h as v,p as b,e as y}from"./index-cca1e4bd.js";const x={setup(){let o=a({}),i=a(localStorage.getItem("username")),s=a([]);return g(()=>{p.get(`http://10.50.10.159:9191/api/Profile/Recommendation?username=${localStorage.getItem("username")}`).then(t=>{console.log(t),o.value=t.data,s.value=t.data.recommendData}).catch(t=>{console.log(t)})}),{data:o,username:i,recommendData:s}},components:{Loading:h}},r=o=>(b("data-v-f0b1d0ea"),o=o(),y(),o),I=r(()=>e("div",{class:"layout-header-fix"},[e("div",{class:"layout-header-fix-logo"},[e("img",{style:{height:"100px"},src:m,alt:""}),e("img",{class:"header-logo",src:u,alt:""})])],-1)),S={class:"profile-content"},D={class:"profile-content-content"},B={class:"profile-name"},G={class:"profile-point"},L=r(()=>e("h5",{class:"profile-point-title"},"積分",-1)),k={class:"profile-point-number"},w={class:"profile-recommender"},F={class:"hostGroup-list-table-table"},$=r(()=>e("thead",{class:"hostGroup-list-table-table-thead"},[e("tr",null,[e("th",{style:{width:"100vh"}},"已推薦用戶")])],-1)),E={class:"hostGroup-list-table-table-tbody"};function M(o,i,s,t,N,P){return l(),n(d,null,[I,e("div",S,[e("div",D,[e("div",B,[e("div",null,[e("h1",null,c(t.username),1)]),e("div",G,[L,e("h2",k,c(t.data.points),1)])]),e("div",w,[e("table",F,[$,e("tbody",E,[(l(!0),n(d,null,v(t.recommendData,_=>(l(),n("tr",null,[e("td",null,c(_.name),1)]))),256))])])])])])],64)}const q=f(x,[["render",M],["__scopeId","data-v-f0b1d0ea"]]);export{q as default};
