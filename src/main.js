import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/all.scss'
import 'bootstrap'
// 引入 VeeValidate 元件跟功能
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import * as AllRules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// import { LoadingPlugin } from 'vue-loading-overlay'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
// vue-loading套件

import axios from 'axios'
import VueAxios from 'vue-axios'

import { date, currency } from '@/methods/filters'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$filters = {
  date,
  currency
}

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.component('VueLoading', Loading)
// app.use(LoadingPlugin, {
//   color: 'blue'
// })

app.mount('#app')
