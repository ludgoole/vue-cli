<template>
	<div class="apply">
		<router-link :to="'/home'">apply</router-link>
	</div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      count: 0
    };
  },
  computed: {
    totle() {
      return this.count * 10;
    }
  },
  methods: {
    name() {}
  },
  created() {
    // this.$store.dispatch("getList");
  }
};
</script>

<style lang="scss" scoped>
.apply {
  line-height: calc(11.1rem - 22px);
  font-size: 60px;
}
</style>

