<template>
  <div>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" />
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" type="password" />
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from '@/components/form/KInput.vue';
import KFormItem from '@/components/form/KFormItem.vue';
import KForm from '@/components/form/KForm.vue';
export default {
  components: {
    KInput,
    KFormItem,
    KForm
  },
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名'}],
        password: [{ required: true, message: '请输入密码'}]
      }
    }
  },
  methods: {
    onLogin() {
      // 全局校验，执行所有的校验
      this.$refs.loginForm.validate(isValid => {
        if (isValid) {
          console.log('校验通过')
        } else {
          console.log('校验失败')
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>