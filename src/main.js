import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ja', // 设置语言环境
  messages: {
    en: {
      un: 'hi',
      message: {
        hello: 'hello world',
        greeting: 'good morning',
        arr: ['a', 'b', 'c'],
      },
    },
    ja: {
      un: 'ちは',
      message: {
        hello: 'こんにちは、世界',
        greeting: 'おはようございます',
        arr: ['1', '2', '3'],
      },
    },
  },
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
