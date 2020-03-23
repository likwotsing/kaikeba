import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

// new Vue结果是根实例 $root
// App是跟组件  $root.$children[0]
new Vue({
  render: h => h(App),
}).$mount('#app')
