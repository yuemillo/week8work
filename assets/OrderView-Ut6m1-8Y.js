import{_ as u,g as a,a as b,m,o as c,c as l,b as t,t as o,F as x,h as f,z as g}from"./index-FKy2mJtA.js";import{c as i}from"./cartStore-C0e8lh7o.js";var w={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_NAME:h}=w,y={data(){return{order:{user:{},product:{}},orderProduct:[],orderId:this.$route.params.id}},methods:{getOrder(d){a.get(`${_}/v2/api/${h}/order/${d}`).then(r=>{this.order=r.data.order,console.log(r),this.orderProducts=Object.keys(this.order.products).map(n=>this.order.products[n])})},payOrder(){a.post(`${_}/v2/api/${h}/pay/${this.orderId}`).then(d=>{console.log(d),this.$router.push("/Checkout")})},...b(i,["getCart"])},computed:{...m(i,["cart"])},mounted(){this.getOrder(this.orderId)}},v={class:"container mt-5"},E={class:"row justify-content-center pb-5"},O={class:"col-md-6"},k={class:"border p-4 mb-4"},I={class:"table mt-4 border-top border-bottom text-muted"},V=t("th",{scope:"row",class:"border-0 px-0 pt-4 pb-4 font-weight-normal"},"訂單編號",-1),S={class:"border-0 px-0 pt-4"},T=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人姓名",-1),N={class:"border-0 px-0 pt-0 pb-4"},R=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人手機",-1),A={class:"border-0 px-0 pt-0 pb-4"},B=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人Email",-1),D={class:"border-0 px-0 pt-0 pb-4"},L=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人地址",-1),M={class:"border-0 px-0 pt-0 pb-4"},$=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"備註",-1),j={class:"border-0 px-0 pt-0 pb-4"},C={class:"col-md-4"},P={class:"table table-hover"},U=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0 text-center"},"品名"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0 text-end"},"小計")])],-1),F={class:"py-3"},q={class:"py-3 border-0 align-middle"},z={class:"py-3 border-0 align-middle",style:{"max-width":"160px"}},G={class:"mb-0 ms-auto text-end"},H=t("td",null,null,-1),J=t("td",null,null,-1),K={class:"py-3 text-end"};function Q(d,r,n,W,s,p){return c(),l("div",v,[t("div",E,[t("div",O,[t("div",k,[t("table",I,[t("tbody",null,[t("tr",null,[V,t("td",S,o(s.order.id),1)]),t("tr",null,[T,t("td",N,o(s.order.user.name),1)]),t("tr",null,[R,t("td",A,o(s.order.user.tel),1)]),t("tr",null,[B,t("td",D,o(s.order.user.email),1)]),t("tr",null,[L,t("td",M,o(s.order.user.address),1)]),t("tr",null,[$,t("td",j,o(s.order.message),1)])])])])]),t("div",C,[t("table",P,[U,t("tbody",null,[(c(!0),l(x,null,f(s.order.products,e=>(c(),l("tr",{class:"border-bottom border-top",key:e.id},[t("td",F,o(e.product.title),1),t("td",q,o(e.qty)+"/ "+o(e.product.unit),1),t("td",z,[t("p",G,"NT$ "+o(e.total),1)])]))),128))]),t("tfoot",null,[t("tr",null,[H,J,t("td",K,"總計：NT$ "+o(s.order.total),1)])])]),t("button",{type:"submit",class:"btn btn-primary w-100 mt-4",onClick:r[0]||(r[0]=g((...e)=>p.payOrder&&p.payOrder(...e),["prevent"]))},"確認付款")])])])}const Z=u(y,[["render",Q]]);export{Z as default};