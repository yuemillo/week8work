import{_ as h,a as p,g as c,r,o as _,c as m,b as i,d as s,w as n,f as e,F as f}from"./index-AT94opai.js";import{u as g}from"./toastMessage-LBPOxwBw.js";var k={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:u}=k,$={methods:{...p(g,["pushMessage"]),checkUser(){const t=`${u}/v2/api/user/check`;c.post(t).then(o=>{console.log("成功",o.data.success)}).catch(()=>{this.$router.push("/login")})},logout(){const t=`${u}/v2/logout`;this.$http.post(t).then(o=>{this.pushMessage({style:"success",title:"登出狀態",content:o.data.message})}).catch(o=>{this.pushMessage({style:"danger",title:"登出狀態",content:o.response.data.message})})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=t,this.checkUser()}},v=i("h2",null,"這是後台",-1);function x(t,o,E,V,w,l){const a=r("RouterLink"),d=r("router-view");return _(),m(f,null,[v,i("nav",null,[s(a,{to:"/admin/products"},{default:n(()=>[e("產品列表")]),_:1}),e(" | "),s(a,{to:"/admin/order"},{default:n(()=>[e("訂單列表")]),_:1}),e(" | "),s(a,{to:"/"},{default:n(()=>[e("回到前台")]),_:1}),e(" | "),s(a,{onClick:l.logout,to:"/login"},{default:n(()=>[e("登出")]),_:1},8,["onClick"])]),s(d)],64)}const T=h($,[["render",x]]);export{T as default};