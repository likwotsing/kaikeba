<template>
  <div>
    <!-- label标签 -->
    <label v-if="label">{{label}}</label>
    <!-- 插槽 -->
    <slot> </slot>
    <!-- 错误提示 -->
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
// 在KFormItem里进行校验
import schema from 'async-validator'

export default {
  inject: ['form'], // 接收祖先传递的form实例
  data() {
    return {
      error: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: String
  },
  mounted() {
    // KFormItem，谁派发，谁监听
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate() {
      // 获取校验规则及对应的值
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      // 获取校验器
      var descriptor = {
        [this.prop]: rules
      }
      var source = { [this.prop]: value}
      const validator = new schema(descriptor)
      // 执行校验
      return validator.validate(source, errors => {
        if (errors) {
          // 校验失败
          this.error = errors[0].message
        } else {
          // 校验通过，清空之前的错误信息
          this.error = ''
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>