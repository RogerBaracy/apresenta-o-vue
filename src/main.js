import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'


import ComponentVIf from '@/components/ComponentVIf.vue'
import ComponentVFor from '@/components/ComponentVFor.vue'
import ComponentVModel from '@/components/ComponentVModel.vue'
import ComponentVBind from '@/components/ComponentVBind.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(ComponentVIf)
Vue.use(ComponentVFor)
Vue.use(ComponentVModel)
Vue.use(ComponentVBind)


new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
