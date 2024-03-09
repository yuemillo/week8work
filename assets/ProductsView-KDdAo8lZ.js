import{_ as M,M as w,o as i,c as n,a as t,y as r,z as a,F as v,s as x,B as C,C as V,e as k,t as h,q as p,r as f,b as g}from"./index-0ZTO9Aqe.js";import{P as $}from"./PagintionComponent-5LY0Wp68.js";const N={props:["tempProduct","updateProduct","isNew"],data(){return{productModal:null,editProduct:{}}},methods:{openModal(){this.productModal.show()},closeModal(){this.productModal.hide()}},watch:{tempProduct(){this.editProduct=this.tempProduct}},mounted(){this.productModal=new w(this.$refs.productModal),this.editProduct=this.tempProduct}},D={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},A={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},T={id:"productModalLabel",class:"modal-title"},B={key:0},R={key:1},I=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body"},z={class:"row"},F={class:"col-sm-4"},O={class:"mb-2"},j={class:"mb-3"},q=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),G=["src"],H={key:0},J=["src"],K=["onUpdate:modelValue"],Q={class:"col-sm-8"},W={class:"mb-3"},X=t("label",{for:"title",class:"form-label"},"標題",-1),Y={class:"row"},Z={class:"mb-3 col-md-6"},tt=t("label",{for:"category",class:"form-label"},"分類",-1),ot={class:"mb-3 col-md-6"},et=t("label",{for:"price",class:"form-label"},"單位",-1),st={class:"row"},dt={class:"mb-3 col-md-6"},lt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),it={class:"mb-3 col-md-6"},nt=t("label",{for:"price",class:"form-label"},"售價",-1),rt=t("hr",null,null,-1),ct={class:"mb-3"},at=t("label",{for:"description",class:"form-label"},"產品描述",-1),ut={class:"mb-3"},mt=t("label",{for:"content",class:"form-label"},"說明內容",-1),pt={class:"mb-3"},_t={class:"form-check"},ht=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),bt={class:"modal-footer"},Pt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ft(d,o,l,y,e,u){return i(),n("div",D,[t("div",A,[t("div",E,[t("div",L,[t("h5",T,[l.isNew?(i(),n("span",B,"新增產品")):(i(),n("span",R,"編輯產品"))]),I]),t("div",S,[t("div",z,[t("div",F,[t("div",O,[t("div",j,[q,r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=s=>e.editProduct.imageUrl=s),placeholder:"請輸入圖片連結"},null,512),[[a,e.editProduct.imageUrl]]),t("img",{class:"img-fluid",src:e.editProduct.imageUrl,alt:""},null,8,G)])]),Array.isArray(e.editProduct.imagesUrl)?(i(),n("div",H,[(i(!0),n(v,null,x(e.editProduct.imagesUrl,(s,m)=>(i(),n("div",{key:m+123},[t("img",{src:s,alt:"",class:"img-fluid"},null,8,J),r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":P=>e.editProduct.imagesUrl[m]=P},null,8,K),[[a,e.editProduct.imagesUrl[m]]])]))),128)),e.editProduct.imagesUrl.length===0||e.editProduct.imagesUrl[e.editProduct.imagesUrl.length-1]?(i(),n("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=s=>e.editProduct.imagesUrl.push(""))}," 新增圖片 ")):(i(),n("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.editProduct.imagesUrl.pop())}," 刪除圖片 "))])):C("",!0)]),t("div",Q,[t("div",W,[X,r(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[3]||(o[3]=s=>e.editProduct.title=s)},null,512),[[a,e.editProduct.title]])]),t("div",Y,[t("div",Z,[tt,r(t("input",{id:"category",type:"text",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=s=>e.editProduct.category=s),placeholder:"請輸入分類"},null,512),[[a,e.editProduct.category]])]),t("div",ot,[et,r(t("input",{id:"unit",type:"text",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=s=>e.editProduct.unit=s),placeholder:"請輸入單位"},null,512),[[a,e.editProduct.unit]])])]),t("div",st,[t("div",dt,[lt,r(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control","onUpdate:modelValue":o[6]||(o[6]=s=>e.editProduct.origin_price=s),placeholder:"請輸入原價"},null,512),[[a,e.editProduct.origin_price,void 0,{number:!0}]])]),t("div",it,[nt,r(t("input",{id:"price",type:"number",min:"0",class:"form-control","onUpdate:modelValue":o[7]||(o[7]=s=>e.editProduct.price=s),placeholder:"請輸入售價"},null,512),[[a,e.editProduct.price,void 0,{number:!0}]])])]),rt,t("div",ct,[at,r(t("textarea",{id:"description",type:"text",class:"form-control","onUpdate:modelValue":o[8]||(o[8]=s=>e.editProduct.description=s),placeholder:"請輸入產品描述"},`\r
             `,512),[[a,e.editProduct.description]])]),t("div",ut,[mt,r(t("textarea",{id:"content",type:"text",class:"form-control","onUpdate:modelValue":o[9]||(o[9]=s=>e.editProduct.content=s),placeholder:"請輸入說明內容"},`\r
             `,512),[[a,e.editProduct.content]])]),t("div",pt,[t("div",_t,[r(t("input",{id:"is_enabled","onUpdate:modelValue":o[10]||(o[10]=s=>e.editProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[V,e.editProduct.is_enabled]]),ht])])])])]),t("div",bt,[Pt,t("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=(...s)=>l.updateProduct&&l.updateProduct(...s))}," 確認 ")])])])],512)}const gt=M(N,[["render",ft]]),vt={props:["tempProduct","deleteProduct"],data(){return{delProductModal:null,editProduct:{}}},methods:{openModal(){this.delProductModal.show()},closeModal(){this.delProductModal.hide()}},watch:{tempProduct(){this.editProduct=this.tempProduct}},mounted(){this.delProductModal=new w(this.$refs.delProductModal),this.editProduct=this.tempProduct}},Mt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},yt={class:"modal-dialog"},kt={class:"modal-content border-0"},wt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),xt={class:"modal-body"},Ut={class:"text-danger"},Ct={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function $t(d,o,l,y,e,u){return i(),n("div",Mt,[t("div",yt,[t("div",kt,[wt,t("div",xt,[k(" 是否刪除 "),t("strong",Ut,h(e.editProduct.title),1),k(" 商品(刪除後將無法恢復)。 ")]),t("div",Ct,[Vt,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...s)=>l.deleteProduct&&l.deleteProduct(...s))}," 確認刪除 ")])])])],512)}const Nt=M(vt,[["render",$t]]);var Dt={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"jslong",BASE_URL:"/week8work/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_NAME:b}=Dt,At={data(){return{products:[],pages:{},tempProduct:{imageUrl:""},isNew:!1}},methods:{checkAdmin(){const d=`${_}/api/user/check`;p.post(d).then(o=>{})},getProducts(d=1){const o=`${_}/v2/api/${b}/admin/products?page=${d}`;p.get(o).then(l=>{this.products=l.data.products,this.pages=l.data.pagination})},openModal(d,o){d==="new"?(this.tempProduct={imageUrl:[]},this.isNew=!0,this.$refs.controlModal.openModal()):d==="edit"?(this.tempProduct={...o},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.controlModal.openModal()):d==="delete"&&(this.tempProduct={...o},this.$refs.controlDelModal.openModal())},updateProduct(){let d=`${_}/v2/api/${b}/admin/product`,o="post";this.isNew||(d=`${_}/v2/api/${b}/admin/product/${this.tempProduct.id}`,o="put"),p[o](d,{data:this.tempProduct}).then(l=>{console.log(l),this.getProducts(),this.$refs.controlModal.closeModal(),this.tempProduct={}}).catch(l=>{alert(l.data.message)})},deleteProduct(){const d=`${_}/v2/api/${b}/admin/product/${this.tempProduct.id}`;p.delete(d).then(o=>{console.log(o),this.getProducts(),this.$refs.controlDelModal.closeModal()})}},mounted(){const d=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=d,this.checkAdmin(),this.getProducts()},components:{PagintionComponent:$,ProductModalComponent:gt,DelProductModalComponent:Nt}},Et=t("h2",null,"產品列表",-1),Lt={class:"container"},Tt={class:"text-end mt-4"},Bt={class:"table mt-4"},Rt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),It={class:"text-end"},St={class:"text-end"},zt={key:0,class:"text-success"},Ft={key:1},Ot={class:"btn-group"},jt=["onClick"],qt=["onClick"];function Gt(d,o,l,y,e,u){const s=f("PagintionComponent"),m=f("ProductModalComponent"),P=f("DelProductModalComponent");return i(),n(v,null,[Et,t("div",Lt,[t("div",Tt,[t("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=c=>u.openModal("new"))}," 建立新的產品 ")]),t("table",Bt,[Rt,t("tbody",null,[(i(!0),n(v,null,x(e.products,c=>(i(),n("tr",{key:c.id},[t("td",null,h(c.category),1),t("td",null,h(c.title),1),t("td",It,h(c.origin_price),1),t("td",St,h(c.price),1),t("td",null,[c.is_enabled?(i(),n("span",zt,"啟用")):(i(),n("span",Ft,"未啟用"))]),t("td",null,[t("div",Ot,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:U=>u.openModal("edit",c)}," 編輯 ",8,jt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:U=>u.openModal("delete",c)}," 刪除 ",8,qt)])])]))),128))])]),g(s,{pages:e.pages,"get-products":u.getProducts},null,8,["pages","get-products"])]),g(m,{"temp-product":e.tempProduct,"update-Product":u.updateProduct,"is-new":e.isNew,ref:"controlModal"},null,8,["temp-product","update-Product","is-new"]),g(P,{"temp-product":e.tempProduct,"delete-Product":u.deleteProduct,ref:"controlDelModal"},null,8,["temp-product","delete-Product"])],64)}const Kt=M(At,[["render",Gt]]);export{Kt as default};
