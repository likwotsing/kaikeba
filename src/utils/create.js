// 创建一个create函数，动态生成组件实例，并且挂载到body上

import Vue from 'vue'

export function create(Component, props) {
  // 借用Vue构造函数来动态生成这个组件实例
  const vm = new Vue({
    render(h) {
      // h是createElement别名，它可以返回一个虚拟dom，VNode
      return h(Component, {props})
    }
  })

  // 通过挂载得到真实dom
  vm.$mount()

  // 通过$el属性获取真实dom
  document.body.appendChild(vm.$el)

  // 获取组件
  const comp = vm.$children[0]

  // 销毁组件
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    comp.$destroy()
  }
  return comp
}