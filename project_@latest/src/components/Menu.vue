<template>
	<div class="menu flex flex-middle">
			<ul class="menu-list flex">
					<li 
							v-for="(menu, index) in menuList" 
							:key="index">
							<router-link :to="menu.url">{{menu.title}}</router-link>
					</li>
			</ul>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
		data() {
				return {
					meta: 'menu'
				}
		},
		computed: {
			...mapState({
				menuList: state => state.menu.menuList
			})
		},
		methods: {
			...mapMutations([
				'getMenu'
			]),
			...mapActions([
				'getMenu'
			]),
		},
		created() {
			this.getMenu()
		}
	}
</script>

<style lang="scss" scoped>
	$width: 120px;
	$outRadius: 60px;
	$innerRadius: 20px;

	.menu {
		height: 100%;
	}
	.menu-list {
		width: $width * 2 + 8px;
		li {
			width: $width;
			height: $width;
			border: 1px solid #f5f7fa;
			text-align: center;
			line-height: 120px;
		}
	}
</style>
