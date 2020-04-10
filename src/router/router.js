import Vue from 'vue'
import Router from 'vue-router'
import vSign from '../components/layouts/v-register-login'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path:'/',
            name: 'sign',
            component: vSign
        }
        ]

})

export default router;