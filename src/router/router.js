import Vue from 'vue'
import Router from 'vue-router'
import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'
import vSign from '../components/layouts/v-register-login'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path: '/',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        },
        {
            path:'/sign',
            name: 'sign',
            component: vSign
        }
        ]

})

export default router;