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
/*
import store from '../vuex/store'
*/
import addFilterGroup from '../views/layouts/admin-components/filter/add-filter-group'
// Admin page components
import listProduct from '../views/layouts/admin-components/products/list-products'
import listOrders from '../views/layouts/admin-components/orders/list-orders'
import orderDetail from '../views/layouts/admin-components/orders/order-detail'
import listCategories from '../views/layouts/admin-components/categories/list-categories'
import listUsers from '../views/layouts/admin-components/users/list-users'
import listFilters from '../views/layouts/admin-components/filter/list-filters'
import addProduct from '../views/layouts/admin-components/products/add-product'
import editFilterGroup from '../views/layouts/admin-components/filter/edit-filter-group'
import listFiltersAttributes from '../views/layouts/admin-components/filter/list-filter-attributes'
import addFilterAttributes from '../views/layouts/admin-components/filter/add-filter-attribute'
import editFilterAttributes from '../views/layouts/admin-components/filter/edit-filter-attribute'
Vue.use(Router)

let router = new Router({
  mode: 'history',
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
          path: 'products',
          name: 'list-product',
          component: listProduct
        },
        {
          path: 'add_product',
          name: 'add-product',
          component: addProduct
        },
        {
          path: 'categories',
          name: 'list-categories',
          component: listCategories
        },
        {
          path: 'orders',
          name: 'list-orders',
          component: listOrders
        },
        {
          path: 'orders/detail/:id',
          name: 'order-detail',
          component: orderDetail
        },
        {
          path: 'users',
          name: 'list-users',
          component: listUsers
        },
        {
          path: 'filters',
          name: 'list-filter',
          component: listFilters
        },
        {
          path: 'filters/add/group',
          name: 'add-filter-group',
          component: addFilterGroup
        },
        {
          path: 'filters/edit/group/:id',
          name: 'edit-filter-group',
          component: editFilterGroup
        },
        {
          path: 'filters/attributes',
          name: 'filter-attribute',
          component: listFiltersAttributes
        },
        {
          path: 'filters/attribute/add',
          name: 'add-filter-attribute',
          component: addFilterAttributes
        },
        {
          path: 'filters/edit/attribute/:id',
          name: 'edit-filter-attribute',
          component: editFilterAttributes
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

/* router.beforeEach((to, from, next) => {
  if ((store.state.role !== 'admin') && (to.path.indexOf('/admin') >= 0)) {
    window.location.href = '/'
  }
  next()
}) */

export default router
