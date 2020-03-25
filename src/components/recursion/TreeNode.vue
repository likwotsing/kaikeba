<template>
  <div>
    <div @click="toggle" :style="{paddingLeft: (level-1)+'em'}">
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
      <label>{{model.title}}</label>
    </div>
    <div v-show="open" v-if="isFolder">
      <TreeNode
        v-for="model in model.children"
        :key="model.title"
        :model="model"
        :level="level+1"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TreeNode',
    props: {
      model: Object,
      level: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        open: false
      }
    },
    computed: {
      isFolder() {
        return this.model.children && this.model.children.length
      }
    },
    methods: {
      toggle() {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>