<template>
    <div class="v-main-wrapper">
        <v-header/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <v-footer/>
    </div>
</template>
<script>
    import vFooter from "./layouts/footer";
    import vHeader from "./layouts/header";
    export default {
        name: 'v-main-wrapper',
        props: {},
        data(){
            return{
                title: "Main wrapper"
            }
        },
        methods:{},
        watch:{},
        components:{
            vFooter,
            vHeader
        }
    }
</script>
<style>
    .v-main-wrapper{

    }
</style>
