/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'

// 主程式
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// 全部規則
import AllRules from '@vee-validate/rules'
// 繁體語系
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

// 設定 VeeValidate 全部規則
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})

// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
// 強制預設為中文語系
setLocale('zh_TW')

// createApp(App).use(router).mount('#app')
const app = createApp(App).use(router)

// VeeValidate 註冊全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
