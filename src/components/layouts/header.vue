<template>
    <div class="v-header">
        <div class="v-header__items">
            <p>HEADER</p>
        </div>
        <div class="v-header__link_to_cart">
            <router-link :to="{name: 'catalog'}">
                <div>
                    Main
                </div>
            </router-link>
        </div>
        <div class="v-header__link_to_cart">
            <router-link :to="{name: 'cart', params: {cart_data: CART}}">
                <div>
                    Cart: {{CART.length}}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "header",
        props:{},
        data(){
            return{}
        },
        computed:{
            ...mapGetters([
                'CART'
            ])
        },
    }
</script>

<style lang="scss">
    .v-header{
        background: #50ad5d;
        display: flex;
        justify-content: space-between;
        &__link_to_cart{
            padding: 15px;
            border: solid 2px $white;
        }
    }
</style>