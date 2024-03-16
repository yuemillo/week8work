import{a as M,M as C,_ as x,o as l,c as n,b as t,t as o,g as v,r as m,d as i,w as _,F as w,h as $,e as T,p as L,i as S,f as E}from"./index-AT94opai.js";import{N as V,P as I,S as N,a as R,_ as O,b as U}from"./_c4e786da-8f41-4929-816f-39ee7b5ac64d-Nl5_Oyz9.js";import{c as B}from"./cartStore-57dqN4Sb.js";import{_ as k}from"./_7a1ce4f6-c3f9-45d2-a3b7-94d83cd263da-Yi-XbCI3.js";const j={props:["tempProduct"],data(){return{productModal:null,qty:1}},methods:{open(){this.productModal.show()},close(){this.productModal.hide()},...M(B,["addToCart"])},watch:{tempProduct(){this.qty=1}},template:"#userProductModal",mounted(){this.productModal=new C(this.$refs.modal)}},A={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},q={class:"modal-dialog modal-xl",role:"document"},D={class:"modal-content border-0"},G={class:"modal-header bg-dark text-white"},F={class:"modal-title",id:"exampleModalLabel"},X=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),H={class:"modal-body"},W={class:"row"},Y={class:"col-sm-6"},Z=["src"],z={class:"col-sm-6"},J={class:"badge bg-primary rounded-pill"},K={key:0,class:"h5"},Q={key:1},tt={class:"h6"},st={class:"h5"},at={class:"input-group"};function et(s,d,a,p,c,f){return l(),n("div",A,[t("div",q,[t("div",D,[t("div",G,[t("h5",F,[t("span",null,o(a.tempProduct.title),1)]),X]),t("div",H,[t("div",W,[t("div",Y,[t("img",{class:"img-fluid",src:a.tempProduct.imageUrl,alt:""},null,8,Z)]),t("div",z,[t("span",J,o(a.tempProduct.category),1),t("p",null,"商品描述："+o(a.tempProduct.description),1),t("p",null,"商品內容："+o(a.tempProduct.content),1),a.tempProduct.origin_price===a.tempProduct.price?(l(),n("div",K,o(a.tempProduct.price)+" 元",1)):(l(),n("div",Q,[t("del",tt,"原價 "+o(a.tempProduct.origin_price)+" 元",1),t("div",st,"現在只要 "+o(a.tempProduct.price)+" 元",1)])),t("div",null,[t("div",at,[t("button",{type:"button",class:"btn btn-primary ms-auto",onClick:d[0]||(d[0]=g=>s.addToCart(a.tempProduct.id,c.qty))},"加入購物車")])])])])])])])],512)}const ot=x(j,[["render",et]]),dt="/week8work/assets/_cbcc5ef9-8e33-4006-a889-13c92d6f7275L-YR8viXr9.png",ct="/week8work/assets/_cbcc5ef9-8e33-4006-a889-13c92d6f7275R-XNsT1w_v.png",it="/week8work/assets/OIG2465454646546-UOkrmTLL.jpg",lt="/week8work/assets/OIG4.4BEoVZmcT-s9loEw-P.jpg",nt="/week8work/assets/OIG1 54564646-5NWaETP1.jpg";var rt={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_NAME:h}=rt,_t={data(){return{isLoading:!0,products:[],modules:[V,I],tempProduct:{},carts:{},status:{addCartLoading:"",openModal:""}}},methods:{getProducts(){const s=`${b}/v2/api/${h}/products/all`;v.get(s).then(d=>{this.products=d.data.products})},openModal(s){this.tempProduct=s,this.$refs.userModal.open()},addToCart(s,d=1){const a={productID:s,qty:d};this.status.addCartLoading=s,v.post(`${b}/api/${h}/cart`,{data:a}).then(p=>{console.log(p),alert("已加入購物車"),this.getCart(),this.$refs.userModal.close()})},getCart(){v.get(`${b}/api/${h}/cart`).then(s=>{this.carts=s.data.data,console.log(this.carts)})}},components:{Swiper:N,SwiperSlide:R,ProductCardModalComponent:ot},mounted(){this.getProducts(),setTimeout(()=>{this.isLoading=!1},500)}},e=s=>(L("data-v-bdff459c"),s=s(),S(),s),mt=e(()=>t("span",null,null,-1)),pt=e(()=>t("div",{class:"fw-black text-danger neon"},[t("i",{class:"fa-solid fa-triangle-exclamation"}),E("前方高能 非戰鬥人員迅速撤離"),t("i",{class:"fa-solid fa-triangle-exclamation"})],-1)),ft=e(()=>t("div",{class:"banner container-fluid position-relative"},[t("div",{class:"carouselTitle d-flex flex-column align-items-center position-absolute d-none d-xl-block"},[t("div",{class:"display-1 fw-black text-black"},"最貓的遊戲內容"),t("div",{class:"carouselTitleSmall fs-1 fw-black bg-warning text-dark text-center mt-5"},"等您來加入")])],-1)),ut={class:"container-fluid bg-primary pb-3 d-none d-xl-block"},vt={class:"game-feature-bg d-flex position-relative"},bt=e(()=>t("img",{src:dt,class:"me-auto",alt:""},null,-1)),ht=e(()=>t("img",{src:ct,class:"ms-auto",alt:""},null,-1)),gt={class:"container position-absolute top-50 start-50 translate-middle"},wt=e(()=>t("h3",{class:"display-1 fw-black text-black text-center pt-5 mb-3"},"遊戲特色",-1)),xt=e(()=>t("div",{class:"fs-1 fw-black text-warning position-absolute text-shadow",style:{bottom:"30px",right:"30px"}},"可愛的貓咪英雄",-1)),kt=e(()=>t("img",{src:k,alt:""},null,-1)),Pt=e(()=>t("div",{class:"fs-1 fw-black text-warning position-absolute text-shadow",style:{bottom:"30px",right:"30px"}},"美麗的遊戲場景",-1)),yt=e(()=>t("img",{src:O,alt:""},null,-1)),Mt=e(()=>t("div",{class:"fs-1 fw-black text-warning position-absolute text-shadow",style:{bottom:"30px",right:"30px"}},"豐富的技能和策略選擇",-1)),Ct=e(()=>t("img",{src:U,alt:""},null,-1)),$t=T('<div class="container-fluid bg-primary pb-3 d-xl-none" data-v-bdff459c><div class="container d-flex flex-column align-items-center" data-v-bdff459c><h3 class="display-1 fw-black text-black text-center pt-5 mb-3" data-v-bdff459c>遊戲特色</h3><div class="position-relative" data-v-bdff459c><div class="fs-1 fw-black text-warning position-absolute text-shadow" style="bottom:5px;right:5px;" data-v-bdff459c>可愛的貓咪英雄</div><img src="'+k+'" alt="" width="360px" data-v-bdff459c></div></div></div><div class="container mt-5" data-v-bdff459c><h3 class="display-1 fw-black text-black" data-v-bdff459c>三大遊戲角色類型</h3><div class="d-flex align-items-center" data-v-bdff459c><div class="w-50" data-v-bdff459c><div class="h1 fw-black text-black" data-v-bdff459c>近戰</div><div class="fs-3 text-black mt-3" data-v-bdff459c>擅長在距離敵人較近的位置進行攻擊的角色。他們通常使用各種近戰武器或技能，例如劍、斧、拳、腳等，來對敵人造成物理或魔法傷害。</div></div><img src="'+it+'" class="ms-auto w-50" alt="..." data-v-bdff459c></div><div class="d-flex align-items-center flex-row-reverse" data-v-bdff459c><div class="w-50" data-v-bdff459c><div class="h1 fw-black text-black" data-v-bdff459c>遠程</div><div class="fs-3 text-black mt-3" data-v-bdff459c>擅長在距離敵人較遠的位置進行攻擊的角色。他們通常使用各種遠程武器或法術，例如弓箭、槍械、魔杖、法杖等，來對敵人造成物理或魔法傷害。</div></div><img src="'+lt+'" class="me-auto w-50" alt="..." data-v-bdff459c></div><div class="d-flex align-items-center" data-v-bdff459c><div class="w-50" data-v-bdff459c><div class="h1 fw-black text-black" data-v-bdff459c>輔助</div><div class="fs-3 text-black mt-3" data-v-bdff459c>擅長在戰鬥中提供各種增益、治療或控制的角色。他們通常使用各種法術、樂器、神聖武器等，來幫助隊友或干擾敵人。</div></div><img src="'+nt+'" class="ms-auto w-50" alt="..." data-v-bdff459c></div></div>',2),Tt={class:"game-hero bg-warning pb-5"},Lt={class:"container"},St=e(()=>t("h3",{class:"display-1 fw-black text-black text-center pt-5 mb-3"},"喵喵英雄",-1)),Et={class:"row row-cols-1 row-cols-md-4 g-4"},Vt=["onClick","disabled"],It=["src"],Nt={class:"card-body"},Rt={class:"fs-1 card-title text-content text-center"};function Ot(s,d,a,p,c,f){const g=m("VueLoading"),u=m("swiper-slide"),P=m("swiper"),y=m("ProductCardModalComponent");return l(),n(w,null,[i(g,{active:c.isLoading,class:"bg-dark"},{default:_(()=>[mt,pt]),_:1},8,["active"]),ft,t("div",ut,[t("div",vt,[bt,ht,t("div",gt,[wt,t("div",null,[i(P,{"slides-per-view":1,"space-between":50,modules:c.modules,navigation:"",pagination:{clickable:!0}},{default:_(()=>[i(u,{class:"position-relative"},{default:_(()=>[xt,kt]),_:1}),i(u,null,{default:_(()=>[Pt,yt]),_:1}),i(u,null,{default:_(()=>[Mt,Ct]),_:1})]),_:1},8,["modules"])])])])]),$t,t("div",Tt,[t("div",Lt,[St,t("div",Et,[(l(!0),n(w,null,$(c.products,r=>(l(),n("div",{class:"col",key:r.id},[t("div",{class:"card bg-transparent",onClick:Ut=>f.openModal(r),disabled:r===c.status.openModal},[t("img",{src:r.imageUrl,class:"card-img-top rounded-circle border-bold card-hover",alt:"..."},null,8,It),t("div",Nt,[t("h5",Rt,o(r.title),1)])],8,Vt)]))),128))])])]),i(y,{"temp-product":c.tempProduct,addToCart:f.addToCart,ref:"userModal"},null,8,["temp-product","addToCart"])],64)}const Dt=x(_t,[["render",Ot],["__scopeId","data-v-bdff459c"]]);export{Dt as default};