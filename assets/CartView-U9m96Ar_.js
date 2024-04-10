import{_ as U,g as b,a as j,m as D,r as u,o as r,c,d,b as t,D as v,w as V,A as h,E as C,F as k,h as M,t as g,f as S,G as w,n as _,p as B,i as N,e as R}from"./index-KrAhBxh-.js";import{S as L}from"./sweetalert2.all-zMDkBLp8.js";import{c as I}from"./cartStore-zCjZDley.js";const T="/week8work/no-d2d1ae91-fee6-432e-a183-b785f3c2ab31.png";var z={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:y,VITE_NAME:x}=z,O={data(){return{isLoading:!0,products:[],tempProduct:{},orderId:this.$route.params.id,status:{addCartLoading:"",cartQtyLoading:""},form:{user:{email:"",name:"",tel:"",address:""},message:""}}},methods:{changeCartQty(a,s=1){const m={product_id:a.product_id,qty:s};this.status.cartQtyLoading=a.id,b.put(`${y}/api/${x}/cart/${a.id}`,{data:m}).then(E=>{this.status.cartQtyLoading="",this.getCart()})},removeCartItem(a){this.status.cartQtyLoading=a,b.delete(`${y}/api/${x}/cart/${a}`).then(s=>{this.status.cartQtyLoading="",L.fire({title:"已刪除產品",position:"top-end",showCancelButton:!1,timer:1500}),this.getCart()})},...j(I,["removeAllCartItem","getCart"]),handleremoveAllCartItem(){this.removeAllCartItem()},createOrder(){const a=`${y}/api/${x}/order`,s=this.form;b.post(a,{data:s}).then(m=>{this.$refs.form.resetForm(),this.getCart(),this.$router.push(`/order/${m.data.orderId}`),L.fire({title:"訂單已送出",position:"top-end",showCancelButton:!1,timer:1500})}).catch(m=>{alert(m.response.data.message)})}},computed:{...D(I,["carts","final_total"]),isSubmitDisabled(){return!this.form.user.email||!this.form.user.name||!this.form.user.tel||!this.form.user.address}},mounted(){this.getCart(),console.log(this.carts),setTimeout(()=>{this.isLoading=!1},500)}},n=a=>(B("data-v-6414df83"),a=a(),N(),a),F={id:"app"},H={class:"container mt90"},P={key:0,class:"process d-flex flex-column justify-content-center align-items-center mt-5"},G=R('<div class="process-container mt-5" data-v-6414df83><div class="strip bg-primary" data-v-6414df83></div><div class="d-flex justify-content-between" data-v-6414df83><div class="process01 d-flex justify-content-center align-items-center bg-primary" data-v-6414df83><p class="text-white fs-3 m-0" data-v-6414df83>1</p></div><div class="process01 d-flex justify-content-center align-items-center border border-3 border-primary bg-white" data-v-6414df83><p class="text-black fs-3 m-0" data-v-6414df83>2</p></div><div class="process01 d-flex justify-content-center align-items-center border border-3 border-primary bg-white" data-v-6414df83><p class="text-black fs-3 m-0" data-v-6414df83>3</p></div></div></div><div class="d-flex justify-content-between mt-1" style="width:340px;" data-v-6414df83><p data-v-6414df83>填寫訂單</p><p data-v-6414df83>確認訂單</p><p data-v-6414df83>完成訂購</p></div>',2),J=[G],K={class:"mt-4"},W={class:"text-end"},X={key:0,class:"d-flex flex-column align-items-center"},Y=n(()=>t("h2",{class:"fs-1 text-center mt-5"},"購物車是空的",-1)),Z=n(()=>t("img",{src:T,width:"500px",alt:"購物車是空的",class:"mx-auto img-fluid"},null,-1)),$={class:"table align-middle"},tt=n(()=>t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",{class:"text-end"},"單價")])],-1)),et=["onClick","disabled"],st={class:"input-group input-group-sm"},at={class:"input-group mb-3"},ot=["disabled","onClick"],lt=["onClick"],dt=n(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[t("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),t("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"})],-1)),nt=[dt],it=["onUpdate:modelValue"],rt=["onClick","disabled"],ct={class:"text-end"},mt=n(()=>t("td",{colspan:"3",class:"text-end"},"總計",-1)),ut={class:"text-end"},pt={class:"my-5 row justify-content-center"},ft={class:"mb-3"},ht=n(()=>t("label",{for:"email",class:"form-label"},"Email",-1)),_t={class:"mb-3"},bt=n(()=>t("label",{for:"name",class:"form-label"},"收件人姓名",-1)),vt={class:"mb-3"},gt=n(()=>t("label",{for:"tel",class:"form-label"},"收件人電話",-1)),yt={class:"mb-3"},xt=n(()=>t("label",{for:"address",class:"form-label"},"收件人地址",-1)),Vt={class:"my-3"},Ct=n(()=>t("label",{for:"message",class:"form-label"},[S("留言"),t("span",{class:"text-muted"},"(選填)")],-1)),kt={class:"text-end"},wt=["disabled"];function Lt(a,s,m,E,l,i){const q=u("VueLoading"),A=u("RouterLink"),p=u("v-field"),f=u("error-message"),Q=u("v-form");return r(),c(k,null,[d(q,{active:l.isLoading},null,8,["active"]),t("div",F,[t("div",H,[this.carts.length!==0?(r(),c("div",P,J)):v("",!0),t("div",K,[t("div",W,[this.carts.length!==0?(r(),c("button",{key:0,class:"btn btn-outline-danger",type:"button",onClick:s[0]||(s[0]=(...e)=>i.handleremoveAllCartItem&&i.handleremoveAllCartItem(...e))},"清空購物車")):v("",!0)]),this.carts.length===0?(r(),c("div",X,[Y,Z,d(A,{class:"text-black text-decoration-none mb-5 fs-3 btn btn-outline-primary",to:"/products"},{default:V(()=>[S("快去選隻喵喵吧!")]),_:1})])):v("",!0),h(t("table",$,[tt,t("tbody",null,[(r(!0),c(k,null,M(this.carts,e=>(r(),c("tr",{key:e.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:o=>i.removeCartItem(e.id),disabled:l.status.cartQtyLoading===e.id}," x ",8,et)]),t("td",null,g(e.product.title),1),t("td",null,[t("div",st,[t("div",at,[e.qty>1?(r(),c("button",{key:0,type:"button",class:"btn btn-outline-primary",disabled:e.qty===1||e.id===l.status.cartQtyLoading,onClick:o=>{e.qty--,i.changeCartQty(e,e.qty)}},"-",8,ot)):(r(),c("button",{key:1,type:"button",class:"btn btn-outline-danger",onClick:o=>i.removeCartItem(e.id)},nt,8,lt)),h(t("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":o=>e.qty=o,readonly:""},null,8,it),[[w,e.qty]]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:o=>{e.qty++,i.changeCartQty(e,e.qty)},disabled:e.id===l.status.cartQtyLoading},"+",8,rt)])])]),t("td",ct,g(e.total),1)]))),128))]),t("tfoot",null,[t("tr",null,[mt,t("td",ut,g(a.final_total),1)])])],512),[[C,this.carts.length!==0]])]),h(t("div",pt,[d(Q,{ref:"form",class:"col-md-6",onSubmit:i.createOrder},{default:V(({errors:e})=>[t("div",ft,[ht,d(p,{id:"email",name:"email",type:"email",class:_(["form-control",{"is-invalid":e.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":s[1]||(s[1]=o=>l.form.user.email=o)},null,8,["class","modelValue"]),d(f,{name:"email",class:"invalid-feedback"})]),t("div",_t,[bt,d(p,{id:"name",name:"姓名",type:"text",class:_(["form-control",{"is-invalid":e.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[2]||(s[2]=o=>l.form.user.name=o)},null,8,["class","modelValue"]),d(f,{name:"姓名",class:"invalid-feedback"})]),t("div",vt,[gt,d(p,{id:"tel",name:"電話",type:"tel",class:_(["form-control",{"is-invalid":e.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":s[3]||(s[3]=o=>l.form.user.tel=o)},null,8,["class","modelValue"]),d(f,{name:"電話",class:"invalid-feedback"})]),t("div",yt,[xt,d(p,{id:"address",name:"地址",type:"text",class:_(["form-control",{"is-invalid":e.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[4]||(s[4]=o=>l.form.user.address=o)},null,8,["class","modelValue"]),d(f,{name:"地址",class:"invalid-feedback"})]),t("div",Vt,[Ct,h(t("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[5]||(s[5]=o=>l.form.message=o)},null,512),[[w,l.form.message]])]),t("div",kt,[t("button",{type:"submit",class:"btn btn-danger",disabled:a.carts.total===0||i.isSubmitDisabled},"送出訂單",8,wt)])]),_:1},8,["onSubmit"])],512),[[C,a.carts.length!==0]])])])],64)}const qt=U(O,[["render",Lt],["__scopeId","data-v-6414df83"]]);export{qt as default};
