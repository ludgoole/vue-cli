export default {
    // 本地状态
    data() {
        return {
            isShow: true
        }
    },
    computed: {
        name() {
            return this.isShow 
        }
    },

    // 响应式事件触发的回调
    watch: {
        data(newValue, oldValue) {
            
        }
    },
    created () {
        ;
    },

    // 非响应式的属性
    methods: {
        clickHandler() {
            
        }
    },
}