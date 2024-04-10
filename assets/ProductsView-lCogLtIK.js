import{_ as y,o as i,c as n,b as t,n as x,F as v,h as w,t as _,M as V,A as c,G as u,D as p,I as F,f as U,g as h,r as g,d as P}from"./index-KrAhBxh-.js";import{S as L}from"./sweetalert2.all-zMDkBLp8.js";const A={props:["pages","getProducts","getOrders"],methods:{updatePage(l){this.$emit("emitPages",l)}}},N={"aria-label":"Page navigation example"},D={class:"pagination"},E=t("span",{"aria-hidden":"true"},"«",-1),B=[E],T=["onClick"],S=t("span",{"aria-hidden":"true"},"»",-1),I=[S];function R(l,e,d,M,o,r){return i(),n("nav",N,[t("ul",D,[t("li",{class:x(["page-item",{disabled:!d.pages.has_pre}])},[t("a",{class:"page-link","aria-label":"Previous",onClick:e[0]||(e[0]=s=>d.getProducts(d.pages.current_page-1))},B)],2),(i(!0),n(v,null,w(d.pages.total_pages,s=>(i(),n("li",{class:x(["page-item",{active:s===d.pages.current_page}]),key:s+123},[t("a",{class:"page-link",onClick:m=>d.getProducts(s)},_(s),9,T)],2))),128)),t("li",{class:x(["page-item",{disabled:!d.pages.has_next}])},[t("a",{class:"page-link","aria-label":"Next",onClick:e[1]||(e[1]=s=>d.getProducts(d.pages.current_page+1))},I)],2)])])}const O=y(A,[["render",R]]),z={props:["tempProduct","updateProduct","isNew"],data(){return{productModal:null,editProduct:{},isFieldValid:{title:!0,category:!0,unit:!0,origin_price:!0,price:!0}}},methods:{openModal(){this.productModal.show()},closeModal(){this.productModal.hide()},validateField(l){this.isFieldValid[l]=!!this.editProduct[l]}},watch:{tempProduct(){this.editProduct=this.tempProduct}},mounted(){this.productModal=new V(this.$refs.productModal),this.editProduct=this.tempProduct}},j={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},G={class:"modal-dialog modal-xl"},q={class:"modal-content border-0"},H={class:"modal-header bg-dark text-white"},J={id:"productModalLabel",class:"modal-title"},K={key:0},Q={key:1},W=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-4"},tt={class:"mb-2"},et={class:"mb-3"},ot=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),st=["src"],dt={key:0},lt=["src"],it=["onUpdate:modelValue"],nt={class:"col-sm-8"},rt={ref:"form"},ct={class:"mb-3"},at=t("label",{for:"title",class:"form-label"},"標題",-1),ut={key:0,class:"text-danger"},mt={class:"row"},pt={class:"mb-3 col-md-6"},_t=t("label",{for:"category",class:"form-label"},"分類",-1),ht={key:0,class:"text-danger"},bt={class:"mb-3 col-md-6"},gt=t("label",{for:"price",class:"form-label"},"單位",-1),Pt={key:0,class:"text-danger"},ft={class:"row"},vt={class:"mb-3 col-md-6"},yt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Mt={key:0,class:"text-danger"},kt={class:"mb-3 col-md-6"},xt=t("label",{for:"price",class:"form-label"},"售價",-1),wt={key:0,class:"text-danger"},Ut=t("hr",null,null,-1),Vt={class:"mb-3"},Ct=t("label",{for:"description",class:"form-label"},"產品描述",-1),$t={class:"mb-3"},Ft=t("label",{for:"content",class:"form-label"},"說明內容",-1),Lt={class:"mb-3"},At={class:"form-check"},Nt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Dt={class:"modal-footer"},Et=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Bt(l,e,d,M,o,r){return i(),n("div",j,[t("div",G,[t("div",q,[t("div",H,[t("h5",J,[d.isNew?(i(),n("span",K,"新增產品")):(i(),n("span",Q,"編輯產品"))]),W]),t("div",X,[t("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[ot,c(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=s=>o.editProduct.imageUrl=s),placeholder:"請輸入圖片連結"},null,512),[[u,o.editProduct.imageUrl]]),t("img",{class:"img-fluid",src:o.editProduct.imageUrl,alt:""},null,8,st)])]),Array.isArray(o.editProduct.imagesUrl)?(i(),n("div",dt,[(i(!0),n(v,null,w(o.editProduct.imagesUrl,(s,m)=>(i(),n("div",{key:m+123},[t("img",{src:s,alt:"",class:"img-fluid"},null,8,lt),c(t("input",{type:"text",class:"form-control","onUpdate:modelValue":k=>o.editProduct.imagesUrl[m]=k},null,8,it),[[u,o.editProduct.imagesUrl[m]]])]))),128)),o.editProduct.imagesUrl.length===0||o.editProduct.imagesUrl[o.editProduct.imagesUrl.length-1]?(i(),n("button",{key:0,type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=s=>o.editProduct.imagesUrl.push(""))}," 新增圖片 ")):(i(),n("button",{key:1,type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>o.editProduct.imagesUrl.pop())}," 刪除圖片 "))])):p("",!0)]),t("div",nt,[t("form",rt,[t("div",ct,[at,c(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=s=>o.editProduct.title=s),onBlur:e[4]||(e[4]=s=>r.validateField("title"))},null,544),[[u,o.editProduct.title]]),o.isFieldValid.title?p("",!0):(i(),n("div",ut," 標題為必填欄位。 "))]),t("div",mt,[t("div",pt,[_t,c(t("input",{id:"category",type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=s=>o.editProduct.category=s),placeholder:"請輸入分類",onBlur:e[6]||(e[6]=s=>r.validateField("category"))},null,544),[[u,o.editProduct.category]]),o.isFieldValid.title?p("",!0):(i(),n("div",ht," 分類為必填欄位。 "))]),t("div",bt,[gt,c(t("input",{id:"unit",type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=s=>o.editProduct.unit=s),placeholder:"請輸入單位",onBlur:e[8]||(e[8]=s=>r.validateField("uit"))},null,544),[[u,o.editProduct.unit]]),o.isFieldValid.title?p("",!0):(i(),n("div",Pt," 單位為必填欄位。 "))])]),t("div",ft,[t("div",vt,[yt,c(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=s=>o.editProduct.origin_price=s),placeholder:"請輸入原價",onBlur:e[10]||(e[10]=s=>r.validateField("origin_price"))},null,544),[[u,o.editProduct.origin_price,void 0,{number:!0}]]),o.isFieldValid.title?p("",!0):(i(),n("div",Mt," 原價為必填欄位。 "))]),t("div",kt,[xt,c(t("input",{id:"price",type:"number",min:"0",class:"form-control","onUpdate:modelValue":e[11]||(e[11]=s=>o.editProduct.price=s),placeholder:"請輸入售價",onBlur:e[12]||(e[12]=s=>r.validateField("price"))},null,544),[[u,o.editProduct.price,void 0,{number:!0}]]),o.isFieldValid.title?p("",!0):(i(),n("div",wt," 原價為必填欄位。 "))])]),Ut,t("div",Vt,[Ct,c(t("textarea",{id:"description",type:"text",class:"form-control","onUpdate:modelValue":e[13]||(e[13]=s=>o.editProduct.description=s),placeholder:"請輸入產品描述"},`\r
                  `,512),[[u,o.editProduct.description]])]),t("div",$t,[Ft,c(t("textarea",{id:"content",type:"text",class:"form-control","onUpdate:modelValue":e[14]||(e[14]=s=>o.editProduct.content=s),placeholder:"請輸入說明內容"},`\r
                  `,512),[[u,o.editProduct.content]])]),t("div",Lt,[t("div",At,[c(t("input",{id:"is_enabled","onUpdate:modelValue":e[15]||(e[15]=s=>o.editProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[F,o.editProduct.is_enabled]]),Nt])])],512)])])]),t("div",Dt,[Et,t("button",{type:"button",class:"btn btn-primary",onClick:e[16]||(e[16]=(...s)=>d.updateProduct&&d.updateProduct(...s))}," 確認 ")])])])],512)}const Tt=y(z,[["render",Bt]]),St={props:["tempProduct","deleteProduct"],data(){return{delProductModal:null,editProduct:{}}},methods:{openModal(){this.delProductModal.show()},closeModal(){this.delProductModal.hide()}},watch:{tempProduct(){this.editProduct=this.tempProduct}},mounted(){this.delProductModal=new V(this.$refs.delProductModal),this.editProduct=this.tempProduct}},It={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Rt={class:"modal-dialog"},Ot={class:"modal-content border-0"},zt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),jt={class:"modal-body"},Gt={class:"text-danger"},qt={class:"modal-footer"},Ht=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Jt(l,e,d,M,o,r){return i(),n("div",It,[t("div",Rt,[t("div",Ot,[zt,t("div",jt,[U(" 是否刪除 "),t("strong",Gt,_(o.editProduct.title),1),U(" 商品(刪除後將無法恢復)。 ")]),t("div",qt,[Ht,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...s)=>d.deleteProduct&&d.deleteProduct(...s))}," 確認刪除 ")])])])],512)}const Kt=y(St,[["render",Jt]]);var Qt={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_NAME:f}=Qt,Wt={data(){return{isLoading:!0,products:[],pages:{},tempProduct:{imageUrl:""},isNew:!1}},methods:{checkAdmin(){const l=`${b}/api/user/check`;h.post(l).then(e=>{})},getProducts(l=1){const e=`${b}/v2/api/${f}/admin/products?page=${l}`;h.get(e).then(d=>{this.products=d.data.products,this.pages=d.data.pagination,this.isLoading=!1}).catch(d=>{console.error("Error fetching products:",d),this.isLoading=!1})},openModal(l,e){l==="new"?(Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!0,this.$refs.controlModal.openModal()):l==="edit"?(this.tempProduct={...e},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.controlModal.openModal()):l==="delete"&&(this.tempProduct={...e},this.$refs.controlDelModal.openModal())},updateProduct(){let l=`${b}/v2/api/${f}/admin/product`,e="post";this.isNew||(l=`${b}/v2/api/${f}/admin/product/${this.tempProduct.id}`,e="put"),h[e](l,{data:this.tempProduct}).then(d=>{this.getProducts(),this.$refs.controlModal.closeModal(),this.tempProduct={},L.fire({title:"產品已新增",position:"top-end",showCancelButton:!1,timer:1500})}).catch(d=>{alert(d.data.message)})},deleteProduct(){const l=`${b}/v2/api/${f}/admin/product/${this.tempProduct.id}`;h.delete(l).then(e=>{this.getProducts(),this.$refs.controlDelModal.closeModal()})}},mounted(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");h.defaults.headers.common.Authorization=l,this.checkAdmin(),this.getProducts()},components:{PagintionComponent:O,ProductModalComponent:Tt,DelProductModalComponent:Kt}},Xt=t("h2",null,"產品列表",-1),Yt={class:"container"},Zt={class:"text-end mt-4"},te={class:"table mt-4"},ee=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),oe={class:"text-end"},se={class:"text-end"},de={key:0,class:"text-success"},le={key:1},ie={class:"btn-group"},ne=["onClick"],re=["onClick"];function ce(l,e,d,M,o,r){const s=g("VueLoading"),m=g("PagintionComponent"),k=g("ProductModalComponent"),C=g("DelProductModalComponent");return i(),n(v,null,[P(s,{active:o.isLoading},null,8,["active"]),Xt,t("div",Yt,[t("div",Zt,[t("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=a=>r.openModal("new"))}," 建立新的產品 ")]),t("table",te,[ee,t("tbody",null,[(i(!0),n(v,null,w(o.products,a=>(i(),n("tr",{key:a.id},[t("td",null,_(a.category),1),t("td",null,_(a.title),1),t("td",oe,_(a.origin_price),1),t("td",se,_(a.price),1),t("td",null,[a.is_enabled?(i(),n("span",de,"啟用")):(i(),n("span",le,"未啟用"))]),t("td",null,[t("div",ie,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:$=>r.openModal("edit",a)}," 編輯 ",8,ne),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:$=>r.openModal("delete",a)}," 刪除 ",8,re)])])]))),128))])]),P(m,{pages:o.pages,"get-products":r.getProducts},null,8,["pages","get-products"])]),P(k,{"temp-product":o.tempProduct,"update-Product":r.updateProduct,"is-new":o.isNew,ref:"controlModal"},null,8,["temp-product","update-Product","is-new"]),P(C,{"temp-product":o.tempProduct,"delete-Product":r.deleteProduct,ref:"controlDelModal"},null,8,["temp-product","delete-Product"])],64)}const me=y(Wt,[["render",ce]]);export{me as default};
