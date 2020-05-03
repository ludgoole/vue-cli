<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button @click="handleDownload">download</el-button>
    <input @change="handleChange" type="file" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/mixins/store'
// eslint-disable-next-line no-undef
console.log('lodash', _.now())
// eslint-disable-next-line no-undef
console.log('localforage', LocalForage)

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mixins: [store],
  methods: {
    handleDownload () {
      this.download({ filename: '1.xlsx' })
    },
    async handleChange (e) {
      const { files } = e.target
      const file = files[0]
      // console.log(file)
      const res = await this.upload({ file, type: 'ADD' })
      console.log(res)
    }
  },
  async created () {
    const res = await this.getMenu()
    console.log(res)
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/style/variable.less';

  .home {
    color: @color-info;
  }
</style>
