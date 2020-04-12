<template lang="html">

  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image"> <img src="../../assets/images/faces/face4.jpg" alt="image"/> <span class="online-status online"></span> </div>
            <div class="profile-name">
              <p class="name">Richard V.Welsh</p>
              <p class="designation">Manager</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/dashboard"><img class="menu-icon" src="../../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Dashboard</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/widgets/"><img class="menu-icon" src="../../assets/images/menu_icons/02.png" alt="menu icon"><span class="menu-title">Widgets</span></router-link></li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'products'">
            <img class="menu-icon" src="../../assets/images/menu_icons/product.png" alt="menu icon"><span class="menu-title">Products</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="products">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/admin/products">List Products</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/add_product">Add product</router-link></li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/orders"><img class="menu-icon" src="../../assets/images/menu_icons/orders.png" alt="menu icon"><span class="menu-title">Orders</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/categories"><img class="menu-icon" src="../../assets/images/menu_icons/list.png" alt="menu icon"><span class="menu-title">Categories</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/users"><img class="menu-icon" src="../../assets/images/menu_icons/users.png" alt="menu icon"><span class="menu-title">Users</span></router-link></li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'filters'">
            <img class="menu-icon" src="../../assets/images/menu_icons/filter.png" alt="menu icon"><span class="menu-title">Фильтры</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="filters">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/admin/filters">Группы фильтров</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/filters/attributes">Фильтры</router-link></li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-components'">
            <img class="menu-icon" src="../../assets/images/menu_icons/03.png" alt="menu icon"><span class="menu-title">UI Components</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="ui-components">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/admin/alerts/">Alerts</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/buttons/">Button</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/badges/">Badges</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/breadcrumbs/">Breadcrumbs</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/carousel/">Carousel</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/dropdowns/">Dropdowns</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/typography/">Typography</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/paginations/">Paginations</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/tooltips/">Tooltips</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/progress/">Progress</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/tabs/">Tabs</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/modals/">Modals</router-link></li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/tables/"><img class="menu-icon" src="../../assets/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">Tables</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/icons/"><img class="menu-icon" src="../../assets/images/menu_icons/07.png" alt="menu icon"><span class="menu-title">Icons</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/forms/"><img class="menu-icon" src="../../assets/images/menu_icons/04.png" alt="menu icon"><span class="menu-title">Forms</span></router-link></li>
      </ul>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  name: 'app-sidebar'
}
</script>

<style scoped lang="scss">
.app-sidebar {

}
</style>
