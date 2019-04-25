<template>
  <div class="home">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
    components: {
			Menu
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
			// this.$store.dispatch('getList')
    }
}
</script>

<style lang="scss" scoped>
    .home {

    }
</style>

