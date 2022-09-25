import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from '@/router'
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
    el: '#app',
    render: h => h(App),
    router,

})