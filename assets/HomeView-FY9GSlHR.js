import{a as S,M as V,_ as M,o as r,c as v,b as t,t as d,g as h,r as _,d as o,w as l,F as g,h as E,e as I,f as p,p as N,i as R}from"./index-KrAhBxh-.js";import{N as B,P as A,S as j,a as O,_ as C,b as U,c as q}from"./c4e786da-8f41-4929-816f-39ee7b5ac64d-Z_6IJUXr.js";import{c as D}from"./cartStore-zCjZDley.js";import"./sweetalert2.all-zMDkBLp8.js";const G={props:["tempProduct"],data(){return{productModal:null,qty:1,addToCartSuccess:!1}},methods:{open(){this.productModal.show()},close(){this.productModal.hide()},...S(D,["addToCart"]),handleAddToCart(){this.addToCart(this.tempProduct.id,this.qty),this.productModal.hide()}},watch:{tempProduct(){this.qty=1}},template:"#userProductModal",mounted(){this.productModal=new V(this.$refs.modal)}},F={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},H={class:"modal-dialog modal-xl",role:"document"},Z={class:"modal-content border-0"},z={class:"modal-header bg-dark text-white"},J={class:"modal-title",id:"exampleModalLabel"},K=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Q={class:"modal-body"},W={class:"row"},X={class:"col-sm-6"},Y=["src"],tt={class:"col-sm-6"},st={class:"badge bg-primary rounded-pill"},at={key:0,class:"h5"},et={key:1},ot={class:"h6"},dt={class:"h5"},ct={class:"input-group"};function it(e,c,a,$,i,b){return r(),v("div",F,[t("div",H,[t("div",Z,[t("div",z,[t("h5",J,[t("span",null,d(a.tempProduct.title),1)]),K]),t("div",Q,[t("div",W,[t("div",X,[t("img",{class:"img-fluid",src:a.tempProduct.imageUrl,alt:""},null,8,Y)]),t("div",tt,[t("span",st,d(a.tempProduct.category),1),t("p",null,"商品描述："+d(a.tempProduct.description),1),t("p",null,"商品內容："+d(a.tempProduct.content),1),a.tempProduct.origin_price===a.tempProduct.price?(r(),v("div",at,d(a.tempProduct.price)+" 元",1)):(r(),v("div",et,[t("del",ot,"原價 "+d(a.tempProduct.origin_price)+" 元",1),t("div",dt,"現在只要 "+d(a.tempProduct.price)+" 元",1)])),t("div",ct,[t("button",{type:"button",class:"btn btn-primary ms-auto",onClick:c[0]||(c[0]=u=>b.handleAddToCart(a.tempProduct.id,i.qty))},"加入購物車")])])])])])])],512)}const lt=M(G,[["render",it]]),nt="/week8work/cbcc5ef9-8e33-4006-a889-13c92d6f7275L.png",rt="/week8work/cbcc5ef9-8e33-4006-a889-13c92d6f7275R.png",w="/week8work/OIG2465454646546.jpg",x="/week8work/OIG4.4BEoVZmcT.jpg",k="/week8work/OIG1 54564646.jpg";var vt={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:y,VITE_NAME:P}=vt,_t={data(){return{isLoading:!0,products:[],modules:[B,A],tempProduct:{},carts:{},status:{addCartLoading:"",openModal:""}}},methods:{getProducts(){const e=`${y}/v2/api/${P}/products/all`;h.get(e).then(c=>{this.products=c.data.products,this.isLoading=!1}).catch(c=>{console.error("Error fetching products:",c),this.isLoading=!1})},openModal(e){this.tempProduct=e,this.$refs.userModal.open()},getCart(){h.get(`${y}/api/${P}/cart`).then(e=>{this.carts=e.data.data})}},components:{Swiper:j,SwiperSlide:O,ProductCardModalComponent:lt},mounted(){this.getProducts()}},s=e=>(N("data-v-482b3ecf"),e=e(),R(),e),bt=s(()=>t("div",{class:"fw-black text-danger neon"},[t("i",{class:"fa-solid fa-triangle-exclamation"}),p("前方高能 非戰鬥人員迅速撤離"),t("i",{class:"fa-solid fa-triangle-exclamation"})],-1)),mt={class:"banner container-fluid position-relative"},pt=s(()=>t("div",{class:"banner-overlay"},null,-1)),ut={class:"carouselTitle position-absolute d-none d-xl-block"},ft=s(()=>t("div",{class:"carouselTitleBig display-1 fw-black text-white"},"最貓的遊戲內容",-1)),ht={class:"carouselTitleSmall fs-1 fw-black bg-warning text-dark text-center mt-5 cursor"},gt={class:"carouselTitle position-absolute d-block d-xl-none"},wt=s(()=>t("div",{class:"carouselTitleBig fs-2 fw-black text-white text-nowrap"},"最貓的遊戲內容",-1)),xt={class:"d-flex justify-content-center mt-3"},kt={class:"fs-5 fw-black bg-warning text-dark btn btn-waring"},yt={class:"container-fluid bg-primary pb-3 pt-5 d-none d-xl-block"},Pt={class:"game-feature-bg d-flex position-relative"},Mt=s(()=>t("img",{src:nt,class:"me-auto",alt:"埃及石像喵喵"},null,-1)),Ct=s(()=>t("img",{src:rt,class:"ms-auto",alt:"埃及石像喵喵"},null,-1)),$t={class:"container position-absolute top-50 start-50 translate-middle"},Lt=s(()=>t("h3",{class:"display-1 fw-black text-black text-center pt-5 mb-3"},"遊戲特色",-1)),Tt=s(()=>t("div",{class:"fs-1 fw-black text-warning position-absolute text-shadow",style:{bottom:"30px",right:"30px"}},"可愛的貓咪英雄",-1)),St=s(()=>t("img",{src:C,alt:"可愛的貓咪英雄"},null,-1)),Vt=s(()=>t("div",{class:"fs-1 fw-black text-warning position-absolute text-shadow",style:{bottom:"30px",right:"30px"}},"美麗的遊戲場景",-1)),Et=s(()=>t("img",{src:U,alt:"美麗的遊戲場景"},null,-1)),It=s(()=>t("div",{class:"fs-1 fw-black text-warning position-absolute text-shadow",style:{bottom:"30px",right:"30px"}},"豐富的技能和策略選擇",-1)),Nt=s(()=>t("img",{src:q,alt:"豐富的技能和策略選擇"},null,-1)),Rt=I('<div class="container-fluid bg-primary pb-3 d-xl-none" data-v-482b3ecf><div class="container d-flex flex-column align-items-center" data-v-482b3ecf><h3 class="display-3 fw-black text-black text-center pt-5 mb-3" data-v-482b3ecf>遊戲特色</h3><div class="position-relative" data-v-482b3ecf><div class="fs-3 fw-black text-warning position-absolute text-shadow" style="bottom:5px;right:10px;" data-v-482b3ecf>可愛的貓咪英雄</div><img src="'+C+'" alt="可愛的貓咪英雄" width="100%" class="rounded-3 border border-5 border-warning" data-v-482b3ecf></div></div></div><div class="container mt-5" data-v-482b3ecf><h3 class="display-1 fw-black text-black pt-5" data-v-482b3ecf>三大遊戲角色類型</h3><div class="d-none d-lg-block" data-v-482b3ecf><div class="d-flex align-items-center" data-v-482b3ecf><div class="w-50" data-v-482b3ecf><div class="h1 fw-black text-black" data-v-482b3ecf>近戰</div><div class="fs-3 text-black mt-3" data-v-482b3ecf>擅長在距離敵人較近的位置進行攻擊的角色。他們通常使用各種近戰武器或技能，例如劍、斧、拳、腳等，來對敵人造成物理或魔法傷害。</div></div><img src="'+w+'" class="ms-auto w-50" alt="近戰喵喵" data-v-482b3ecf></div></div><div class="d-block d-lg-none" data-v-482b3ecf><img src="'+w+'" class="img-fluid" alt="近戰喵喵" data-v-482b3ecf><div data-v-482b3ecf><div class="h1 fw-black text-black" data-v-482b3ecf>近戰</div><div class="fs-6 text-black mt-3" data-v-482b3ecf>擅長在距離敵人較近的位置進行攻擊的角色。他們通常使用各種近戰武器或技能，例如劍、斧、拳、腳等，來對敵人造成物理或魔法傷害。</div></div></div><hr data-v-482b3ecf><div class="d-none d-lg-block" data-v-482b3ecf><div class="d-flex align-items-center" data-v-482b3ecf><img src="'+x+'" class="me-auto w-50" alt="遠程喵喵" data-v-482b3ecf><div class="w-50" data-v-482b3ecf><div class="h1 fw-black text-black" data-v-482b3ecf>遠程</div><div class="fs-3 text-black mt-3" data-v-482b3ecf>擅長在距離敵人較遠的位置進行攻擊的角色。他們通常使用各種遠程武器或法術，例如弓箭、槍械、魔杖、法杖等，來對敵人造成物理或魔法傷害。</div></div></div></div><div class="d-block d-lg-none" data-v-482b3ecf><img src="'+x+'" class="img-fluid" alt="遠程喵喵" data-v-482b3ecf><div data-v-482b3ecf><div class="h1 fw-black text-black" data-v-482b3ecf>遠程</div><div class="fs-6 text-black mt-3" data-v-482b3ecf>擅長在距離敵人較遠的位置進行攻擊的角色。他們通常使用各種遠程武器或法術，例如弓箭、槍械、魔杖、法杖等，來對敵人造成物理或魔法傷害。</div></div></div><hr data-v-482b3ecf><div class="d-none d-lg-block mb-5" data-v-482b3ecf><div class="d-flex align-items-center" data-v-482b3ecf><div class="w-50" data-v-482b3ecf><div class="h1 fw-black text-black" data-v-482b3ecf>輔助</div><div class="fs-3 text-black mt-3" data-v-482b3ecf>擅長在戰鬥中提供各種增益、治療或控制的角色。他們通常使用各種法術、樂器、神聖武器等，來幫助隊友或干擾敵人。</div></div><img src="'+k+'" class="ms-auto w-50" alt="輔助喵喵" data-v-482b3ecf></div></div><div class="d-block d-lg-none mb-5" data-v-482b3ecf><img src="'+k+'" class="img-fluid" alt="輔助喵喵" data-v-482b3ecf><div data-v-482b3ecf><div class="h1 fw-black text-black" data-v-482b3ecf>輔助</div><div class="fs-6 text-black mt-3" data-v-482b3ecf>&gt;擅長在戰鬥中提供各種增益、治療或控制的角色。他們通常使用各種法術、樂器、神聖武器等，來幫助隊友或干擾敵人。</div></div></div></div>',2),Bt={class:"game-hero bg-warning pb-5 pt-5"},At={class:"container"},jt=s(()=>t("h3",{class:"display-3 fw-black text-black text-center pt-5 mb-3"},"喵喵英雄",-1)),Ot={class:"row row-cols-1 row-cols-md-4 g-4"},Ut=["onClick","disabled"],qt=["src","alt"],Dt={class:"card-body"},Gt={class:"fs-1 card-title text-content text-center"};function Ft(e,c,a,$,i,b){const u=_("VueLoading"),f=_("RouterLink"),m=_("swiper-slide"),L=_("swiper"),T=_("ProductCardModalComponent");return r(),v(g,null,[o(u,{active:i.isLoading,class:"bg-dark"},{default:l(()=>[bt]),_:1},8,["active"]),t("div",mt,[pt,t("div",ut,[ft,t("div",ht,[o(f,{class:"text-black text-decoration-none",to:"/products"},{default:l(()=>[p("等您來加入")]),_:1})])]),t("div",gt,[wt,t("div",xt,[t("div",kt,[o(f,{class:"text-black text-decoration-none",to:"/products"},{default:l(()=>[p("等您來加入")]),_:1})])])])]),t("div",yt,[t("div",Pt,[Mt,Ct,t("div",$t,[Lt,t("div",null,[o(L,{"slides-per-view":1,"space-between":50,modules:i.modules,navigation:"",pagination:{clickable:!0}},{default:l(()=>[o(m,{class:"position-relative"},{default:l(()=>[Tt,St]),_:1}),o(m,null,{default:l(()=>[Vt,Et]),_:1}),o(m,null,{default:l(()=>[It,Nt]),_:1})]),_:1},8,["modules"])])])])]),Rt,t("div",Bt,[t("div",At,[jt,t("div",Ot,[(r(!0),v(g,null,E(i.products,n=>(r(),v("div",{class:"col",key:n.id},[t("div",{class:"card bg-transparent border-0 cursor",onClick:Ht=>b.openModal(n),disabled:n===i.status.openModal},[t("img",{src:n.imageUrl,class:"card-img-top rounded-circle border-bold card-hover",alt:n.title},null,8,qt),t("div",Dt,[t("h5",Gt,d(n.title),1)])],8,Ut)]))),128))])])]),o(T,{"temp-product":i.tempProduct,ref:"userModal"},null,8,["temp-product"])],64)}const Qt=M(_t,[["render",Ft],["__scopeId","data-v-482b3ecf"]]);export{Qt as default};