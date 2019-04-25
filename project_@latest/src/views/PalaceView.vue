<template>
	<div class="palace">
		<router-link :to="'/home'">palace</router-link>
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
.palace {
  line-height: calc(11.1rem - 22px);
  font-size: 60px;
}
</style>

