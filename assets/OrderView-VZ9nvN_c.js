import{_ as u,g as p,a as m,m as f,o as c,c as i,b as t,t as e,F as v,h as x,C as y,e as w,p as g,i as I}from"./index-KrAhBxh-.js";import{c as b}from"./cartStore-zCjZDley.js";import"./sweetalert2.all-zMDkBLp8.js";var E={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_NAME:h}=E,S={data(){return{order:{user:{},product:{}},orderProduct:[],orderId:this.$route.params.id}},methods:{getOrder(r){p.get(`${_}/v2/api/${h}/order/${r}`).then(a=>{this.order=a.data.order,this.orderProducts=Object.keys(this.order.products).map(l=>this.order.products[l])})},payOrder(){p.post(`${_}/v2/api/${h}/pay/${this.orderId}`).then(r=>{this.$router.push(`/Checkout/${this.orderId}`)})},...m(b,["getCart"])},computed:{...f(b,["cart"])},mounted(){this.getOrder(this.orderId)}},s=r=>(g("data-v-45c07abf"),r=r(),I(),r),j={class:"container mt90 py-5"},k=w('<div class="process d-flex flex-column justify-content-center align-items-center my-5" data-v-45c07abf><div class="process-container" data-v-45c07abf><div class="strip bg-primary" data-v-45c07abf></div><div class="d-flex justify-content-between" data-v-45c07abf><div class="process01 d-flex justify-content-center align-items-center bg-primary" data-v-45c07abf><p class="text-white fs-3 m-0" data-v-45c07abf>1</p></div><div class="process01 d-flex justify-content-center align-items-center bg-primary" data-v-45c07abf><p class="text-white fs-3 m-0" data-v-45c07abf>2</p></div><div class="process01 d-flex justify-content-center align-items-center border border-3 border-primary bg-white" data-v-45c07abf><p class="text-black fs-3 m-0" data-v-45c07abf>3</p></div></div></div><div class="d-flex justify-content-between mt-1" style="width:340px;" data-v-45c07abf><p data-v-45c07abf>填寫訂單</p><p data-v-45c07abf>確認訂單</p><p data-v-45c07abf>完成訂購</p></div></div>',1),O={class:"row justify-content-center pb-5"},V={class:"col-md-6"},N={class:"border p-4 mb-4"},T={class:"table mt-4 border-top border-bottom text-muted"},R=s(()=>t("th",{scope:"row",class:"border-0 px-0 pt-4 pb-4 font-weight-normal"},"訂單編號",-1)),$={class:"border-0 px-0 pt-4"},A=s(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人姓名",-1)),B={class:"border-0 px-0 pt-0 pb-4"},C=s(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人手機",-1)),D={class:"border-0 px-0 pt-0 pb-4"},L=s(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人Email",-1)),M={class:"border-0 px-0 pt-0 pb-4"},P=s(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人地址",-1)),U={class:"border-0 px-0 pt-0 pb-4"},F=s(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"備註",-1)),q={class:"border-0 px-0 pt-0 pb-4"},z={class:"col-md-4"},G={class:"table table-hover"},H=s(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0 text-center"},"品名"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0 text-end"},"小計")])],-1)),J={class:"py-3"},K={class:"py-3 border-0 align-middle"},Q={class:"py-3 border-0 align-middle",style:{"max-width":"160px"}},W={class:"mb-0 ms-auto text-end"},X=s(()=>t("td",null,null,-1)),Y=s(()=>t("td",null,null,-1)),Z={class:"py-3 text-end"};function tt(r,a,l,et,o,n){return c(),i("div",j,[k,t("div",O,[t("div",V,[t("div",N,[t("table",T,[t("tbody",null,[t("tr",null,[R,t("td",$,e(o.order.id),1)]),t("tr",null,[A,t("td",B,e(o.order.user.name),1)]),t("tr",null,[C,t("td",D,e(o.order.user.tel),1)]),t("tr",null,[L,t("td",M,e(o.order.user.email),1)]),t("tr",null,[P,t("td",U,e(o.order.user.address),1)]),t("tr",null,[F,t("td",q,e(o.order.message),1)])])])])]),t("div",z,[t("table",G,[H,t("tbody",null,[(c(!0),i(v,null,x(o.order.products,d=>(c(),i("tr",{class:"border-bottom border-top",key:d.id},[t("td",J,e(d.product.title),1),t("td",K,e(d.qty),1),t("td",Q,[t("p",W,"NT$ "+e(d.total),1)])]))),128))]),t("tfoot",null,[t("tr",null,[X,Y,t("td",Z,"總計：NT$ "+e(o.order.total),1)])])]),t("button",{type:"submit",class:"btn btn-primary w-100 mt-4",onClick:a[0]||(a[0]=y((...d)=>n.payOrder&&n.payOrder(...d),["prevent"]))},"確認付款")])])])}const dt=u(S,[["render",tt],["__scopeId","data-v-45c07abf"]]);export{dt as default};