<template>
  <div id="home">
      <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
    components: {
        HelloWorld,
    },
    data() {
        return {
            count: 0
        }
    },
    computed: {
        totle() {
            return this.count * 10 
        },
    },
    methods: {
        name() {
            
        },
    },
    created() {
        Util.$Vue = this
        this.$store.dispatch('getList')
    }
}
</script>

<style lang="scss" scoped>
    .home {

    }
</style>

