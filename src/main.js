import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {create} from '@/utils/create.js'

Vue.config.productionTip = false

Vue.prototype.$create = create

// new Vue结果是根实例 $root
// App是跟组件  $root.$children[0]
new Vue({
  render: h => h(App),
}).$mount('#app')
