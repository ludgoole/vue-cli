<template>
    <div class="base-component">
        <HelloWorld 
            :is="CurrComponent"
            v-if="isShow"
            id="HelloWorld"
            ref="HelloWorld"
            :title="title"
            @click="clickHandler"
        ></HelloWorld>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    import HelloWorld from '../components/HelloWorld'
    export default {
        // 全局感知
        name: 'base-component',

        // 模板依赖
        components: {
            HelloWorld,
        },
        directives: {
            directive,
        },

        // 组合
        mixins: [
            mixin,
        ],

        // 接口
        props: {
            title: {
                type: String,
                default: 'hello'
            },
        },

        // 本地状态
        data() {
            return {
                isShow: true
            }
        },
        computed: {
            name() {
                return this.title 
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
        mounted () {
            ;
        },
        destroyed () {
            ;
        },

        // 非响应式的属性
        methods: {
            clickHandler() {
                
            }
        },

        // 渲染
        render() {

        }
    }
</script>

<style lang="scss" scoped>
    .base-component {
        text-align: center;
    }
</style>