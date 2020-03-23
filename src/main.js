import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {create} from '@/utils/create'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
Vue.prototype.$create = create

// new Vue结果是根实例  $root
// App是根组件  $children[0]
new Vue({
  render: h => h(App),
}).$mount('#app')
