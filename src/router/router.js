import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

// Widgets
import widgets from '../views/widgets'

// UI Components
import alerts from '../views/ui-components/alerts'
import badges from '../views/ui-components/badges'
import breadcrumbs from '../views/ui-components/breadcrumbs'
import buttons from '../views/ui-components/buttons'
import carousel from '../views/ui-components/carousel'
import dropdowns from '../views/ui-components/dropdowns'
import icons from '../views/ui-components/icons'
import modals from '../views/ui-components/modals'
import paginations from '../views/ui-components/paginations'
import progress from '../views/ui-components/progress'
import tables from '../views/ui-components/tables'
import typography from '../views/ui-components/typography'
import tabs from '../views/ui-components/tabs'
import tooltips from '../views/ui-components/tooltips'

// Form Components
import forms from '../views/forms/forms'

// Sample Pages
import error404 from '../views/sample-pages/error-404'
import error500 from '../views/sample-pages/error-500'
/* import login from '../views/sample-pages/login'
import register from '../views/sample-pages/register' */

import sign from '../views/layouts/sign'
import admin from '../views/layouts/admin'
import store from '../vuex/store'
Vue.use(Router)

let router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'sign',
      component: sign
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: dashboard
        },
        {
          path: 'widgets',
          name: 'widgets',
          component: widgets
        },
        {
          path: 'alerts',
          name: 'alerts',
          component: alerts
        },
        {
          path: 'badges',
          name: 'badges',
          component: badges
        },
        {
          path: 'breadcrumbs',
          name: 'breadcrumbs',
          component: breadcrumbs
        },
        {
          path: 'buttons',
          name: 'buttons',
          component: buttons
        },
        {
          path: 'carousel',
          name: 'carousel',
          component: carousel
        },
        {
          path: 'dropdowns',
          name: 'dropdowns',
          component: dropdowns
        },
        {
          path: 'icons',
          name: 'icons',
          component: icons
        },
        {
          path: 'modals',
          name: 'modals',
          component: modals
        },
        {
          path: 'paginations',
          name: 'paginations',
          component: paginations
        },
        {
          path: '/admin/progress',
          name: 'progress',
          component: progress
        },
        {
          path: '/admin/tables',
          name: 'tables',
          component: tables
        },
        {
          path: '/admin/typography',
          name: 'typography',
          component: typography
        },
        {
          path: '/admin/tabs',
          name: 'tabs',
          component: tabs
        },
        {
          path: '/admin/tooltips',
          name: 'tooltips',
          component: tooltips
        },
        {
          path: '/admin/forms',
          name: 'forms',
          component: forms
        }
      ]
    },
    {
      path: '/404',
      name: 'error-404',
      component: error404
    },
    {
      path: '/500',
      name: 'error-500',
      component: error500
    }
    /* {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }, */
  ]
})

router.beforeEach((to, from, next) => {
  if ((store.state.role !== 'admin') && (to.path.indexOf('/admin') >= 0)) {
    window.location.href = '/'
  }
  next()
})

export default router
