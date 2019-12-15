<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{token}}</p>
    <p>{{_token}}</p>
    <p>{{$route.name}}</p>
    <p>{{$route.meta}}</p>
    <p>{{$route.params.id}}</p>
    <p>{{$route.query.id}}</p>
    <p>{{id}}</p>
    <p>{{title}}</p>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapActions} from 'vuex';
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 's'
    },
  },
  data() {
    return {
      token: ''
    }
  },
  computed: {
    ...mapState({
      _token: state =>state.login.token
    })
  },
  async created() {
    const logindData = await this.login({user: 'ludgoole'});
    this.token = logindData.token;
    console.log(logindData);

    const menu = await this.getMenu();
    console.log(menu);
  },
  methods: {
    ...mapActions({
      login: 'login/login',
      getMenu: 'menu/getMenu'
    })

  },
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/index.scss';

  .home {
    font-size: $font-size;
  }
</style>