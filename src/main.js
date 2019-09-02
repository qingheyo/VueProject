
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
//使用mint-ui引入全部组件
import  Mint from 'mint-ui'
Vue.use(Mint)
//配置axios
Vue.prototype.$axios=Axios;
//配置公共的url
Axios.defaults.baseURL="http://www/sina.online/api/"

import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
//引入全局的css样式
import '../static/css/global.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
