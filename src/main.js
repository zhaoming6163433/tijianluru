// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import ELEMENTUI from 'element-ui'
import $ from 'n-zepto'
import router from './router'
import VueResource from 'vue-resource'
import vueutil from './util/vueutil.js'
import store from './store'
import 'mint-ui/lib/style.css'
import '../static/css/animate.min.css'
//此处引用本地的element-ui
import '../static/css/element-ui/lib/theme-chalk/index.css'
import App from './App'

//阻止vue在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(MintUI);
Vue.use(ELEMENTUI);
Vue.use(vueutil);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
