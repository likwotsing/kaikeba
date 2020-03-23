<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    provide() {
      return {
        // 将表单实例传给后代
        form: this
      }
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: Object
    },
    methods: {
      validate(cb) {
        // 遍历所有的KFormItem, 执行他们的validate方法
        const tasks = this.$children
          .filter(item => item.prop)
          .map(item => item.validate())
        
        Promise.all(tasks)
          .then(() => cb(true))
          .catch(() => cb(false))
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>