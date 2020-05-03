import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'menu'
    ])
  },
  methods: {
    ...mapActions({
      getMenu: 'getMenu',
      download: 'file/download',
      upload: 'file/upload'
    })
  }
}
