import{_ as p,a as d,g as c,r,o as _,c as m,b as u,d as s,w as n,f as e,F as f}from"./index-KrAhBxh-.js";import{u as k}from"./toastMessage-AonHMvdc.js";var g={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:i}=g,x={methods:{...d(k,["pushMessage"]),checkUser(){const t=`${i}/v2/api/user/check`;c.post(t).then(o=>{}).catch(()=>{this.$router.push("/login")})},logout(){const t=`${i}/v2/logout`;this.$http.post(t).then(o=>{document.cookie="hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",this.pushMessage({style:"success",title:"登出狀態",content:o.data.message})}).catch(o=>{this.pushMessage({style:"danger",title:"登出狀態",content:o.response.data.message})})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=t,this.checkUser()}},V=u("h2",null,"這是後台",-1);function $(t,o,R,T,E,l){const a=r("RouterLink"),h=r("RouterView");return _(),m(f,null,[V,u("nav",null,[s(a,{to:"/admin/products"},{default:n(()=>[e("產品列表")]),_:1}),e(" | "),s(a,{to:"/admin/order"},{default:n(()=>[e("訂單列表")]),_:1}),e(" | "),s(a,{to:"/"},{default:n(()=>[e("回到前台")]),_:1}),e(" | "),s(a,{onClick:l.logout,to:"/login"},{default:n(()=>[e("登出")]),_:1},8,["onClick"])]),s(h)],64)}const M=p(x,[["render",$]]);export{M as default};