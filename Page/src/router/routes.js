const routes = [
    {
        path:'/test',
        component:() => import('../pages/test.vue')
    },
    {
        path:"/createGroupBuy",
        component:()=>import("../pages/createGroupBuy.vue")
    },
    {
        path:"/joinGroupBuy",
        component:()=>import("../pages/joinGroupBuy.vue")
    },
    {
        path:"/createGroupBuy/hostGroupBuy",
        component:()=>import("../pages/host/hostGroupBuy.vue")
    },
    {
        path:"/joinGroupBuy/memberGroupBuy",
        component:()=>import("../pages/member/memberGroupBuy.vue")
    }
]

export default routes ;