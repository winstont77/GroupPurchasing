import{_ as d,o as c,c as o,p as h,e as l,j as n,b as p}from"./index-d7524602.js";let r=t=>(t=t+1,t),i=t=>(t=t-1,t);const g={addqty:r,reduceqty:i};let _=async t=>{let a=`http://localhost:9191/joinGroupBuy?salepageid=${localStorage.getItem("salepageid")}&recommender=${t}`;const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select();try{document.execCommand("copy"),alert("URL 已複製到剪貼簿!")}catch(s){alert("複製失敗:",s)}document.body.removeChild(e)};const y={shareURL:_};const v={},u=t=>(h("data-v-81195030"),t=t(),l(),t),m={class:"marquee-container"},z={style:{position:"absolute",left:"0"},width:"20px",height:"20px",viewBox:"0 0 1024 1024",class:"icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},V=n('<path d="M184 342.4h161.5V598H184c-13.5 0-24.4-10.9-24.4-24.4V366.8c0-13.5 11-24.4 24.4-24.4z" fill="#F4CE26" data-v-81195030></path><path d="M369.9 622.4H184c-26.9 0-48.8-21.9-48.8-48.8V366.8c0-26.9 21.9-48.8 48.8-48.8h185.9v304.4zM184 366.8v206.8h137.1V366.8H184z" fill="#333333" data-v-81195030></path><path d="M692.9 388.9h-68.6v185.9h68.6c13.5 0 24.4-10.9 24.4-24.4V413.3c0-13.5-10.9-24.4-24.4-24.4z" fill="#F4CE26" data-v-81195030></path><path d="M692.9 599.2h-93V364.5h93c26.9 0 48.8 21.9 48.8 48.8v137.1c0 26.9-21.8 48.8-48.8 48.8z m-44.1-48.8H693V413.3h-44.2v137.1zM810.3 458.6h46.5c12.8 0 23.2 10.4 23.2 23.2 0 12.8-10.4 23.2-23.2 23.2h-46.5c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2zM825 577.9l40.2 23.2c11.1 6.4 14.9 20.6 8.5 31.7-6.4 11.1-20.6 14.9-31.7 8.5l-40.2-23.2c-11.1-6.4-14.9-20.6-8.5-31.7 6.4-11.1 20.6-14.9 31.7-8.5zM801.8 345.5l40.2-23.2c11.1-6.4 25.3-2.6 31.7 8.5 6.4 11.1 2.6 25.3-8.5 31.7L825 385.7c-11.1 6.4-25.3 2.6-31.7-8.5-6.4-11.1-2.6-25.3 8.5-31.7z" fill="#333333" data-v-81195030></path><path d="M345.5 339.6l243-129.2c11.9-6.3 26.7-1.8 33 10.1 1.9 3.5 2.9 7.5 2.9 11.5v497.2c0 13.5-10.9 24.4-24.4 24.4-4.4 0-8.8-1.2-12.6-3.5L345.5 604.9V339.6z" fill="#FFFFFF" data-v-81195030></path><path d="M600 778c-8.8 0-17.5-2.4-25.1-6.9L321.1 618.8V324.9L577 188.8c23.7-12.7 53.4-3.6 66 20.2 3.7 7.1 5.7 15 5.7 22.9v497.2c0.1 27-21.8 48.9-48.7 48.9zM369.9 591.1L600 729.2V232L369.9 354.3v236.8z" fill="#333333" data-v-81195030></path><path d="M206.1 609.6h93v138.3c0 13.5-10.9 24.4-24.4 24.4h-44.2c-13.5 0-24.4-10.9-24.4-24.4V609.6z" fill="#FFFFFF" data-v-81195030></path><path d="M274.7 796.7h-44.2c-26.9 0-48.8-21.9-48.8-48.8V585.2h141.8v162.7c0 26.9-21.9 48.8-48.8 48.8zM230.5 634v113.9h44.2V634h-44.2z" fill="#333333" data-v-81195030></path>',8),f=[V],F=u(()=>p("span",{class:"marquee-text"},"滿NT$ 100，打8折 / 滿NT$ 200，打5折",-1));function M(t,a){return c(),o("div",m,[(c(),o("svg",z,f)),F])}const L=d(v,[["render",M],["__scopeId","data-v-81195030"]]);export{g as c,L as d,y as s};
