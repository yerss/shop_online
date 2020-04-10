import Vue from 'vue'
import Router from 'vue-router'
import vSign from '../components/layouts/v-register-login'
import vAdmin from '../components/v-main-wrapper'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path:'/',
            name: 'sign',
            component: vSign
        },
        {
            path:'/admin',
            name: 'admin',
            component: vAdmin
        }
    ]
});

export default router;