import{_ as p,g as a,a as i,m as l,o as _,c as h,b as t,t as s,p as b,i as u}from"./index-pGg0mz2t.js";import{c as n}from"./cartStore-2qU-naPu.js";var m={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_NAME:x}=m,g={data(){return{order:{user:{},product:{}},orderProduct:[],orderId:this.$route.params.id}},methods:{getOrder(e){a.get(`${f}/v2/api/${x}/order/${e}`).then(d=>{this.order=d.data.order,console.log(d),this.orderProducts=Object.keys(this.order.products).map(c=>this.order.products[c])})},...i(n,["getCart"])},computed:{...l(n,["cart"])},mounted(){this.getOrder(this.orderId)}},o=e=>(b("data-v-de042670"),e=e(),u(),e),w={class:"banner container-fluid position-relative"},v={class:"container d-flex flex-column align-items-center"},E={class:"container mt-3"},I={class:"row justify-content-center py-5"},S={class:"col-md-6"},y={class:"border p-4 mb-4 bg-warning border border-primary border-5 rounded-3"},V=o(()=>t("h2",{class:"text-center"},"訂單已成立",-1)),k={class:"table mt-4 border-top border-bottom text-muted border-primary"},O=o(()=>t("th",{scope:"row",class:"border-0 px-0 pt-4 pb-4 font-weight-normal"},"訂單編號",-1)),R={class:"border-0 px-0 pt-4"},A=o(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人姓名",-1)),B={class:"border-0 px-0 pt-0 pb-4"},D=o(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人手機",-1)),T={class:"border-0 px-0 pt-0 pb-4"},j=o(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人Email",-1)),L={class:"border-0 px-0 pt-0 pb-4"},M=o(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人地址",-1)),N={class:"border-0 px-0 pt-0 pb-4"},P=o(()=>t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"備註",-1)),U={class:"border-0 px-0 pt-0 pb-4"};function C(e,d,c,$,r,q){return _(),h("div",w,[t("div",v,[t("div",E,[t("div",I,[t("div",S,[t("div",y,[V,t("table",k,[t("tbody",null,[t("tr",null,[O,t("td",R,s(r.order.id),1)]),t("tr",null,[A,t("td",B,s(r.order.user.name),1)]),t("tr",null,[D,t("td",T,s(r.order.user.tel),1)]),t("tr",null,[j,t("td",L,s(r.order.user.email),1)]),t("tr",null,[M,t("td",N,s(r.order.user.address),1)]),t("tr",null,[P,t("td",U,s(r.order.message),1)])])])])])])])])])}const G=p(g,[["render",C],["__scopeId","data-v-de042670"]]);export{G as default};
