<template>
  <div v-if="isShow" class="box">
    <h3>{{title}}</h3>
    <p class="box-content">{{message}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show() {
        this.isShow = true
        setTimeout(this.hide, this.duration)
      },
      hide() {
        this.isShow = false
        this.remove()
      }
    },
  }
</script>

<style scoped>
.box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
  background-color: #fff;
  border: 3px solid #ccc;
  box-sizing: border-box;
}
.box-content {
  width: 200px;
  margin: 10px auto;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>