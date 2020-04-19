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
        <li class="nav-item"><router-link class="nav-link" to="/admin/orders"><img class="menu-icon" src="../../assets/images/menu_icons/shop.png" alt="menu icon"><span class="menu-title">В магазин</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/dashboard"><img class="menu-icon" src="../../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Админ панель</span></router-link></li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'products'">
            <img class="menu-icon" src="../../assets/images/menu_icons/product.png" alt="menu icon"><span class="menu-title">Товары</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="products">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/admin/products">Список товаров</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/add_product">Добавить товар</router-link></li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/orders"><img class="menu-icon" src="../../assets/images/menu_icons/orders.png" alt="menu icon"><span class="menu-title">Заказы</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/categories"><img class="menu-icon" src="../../assets/images/menu_icons/list.png" alt="menu icon"><span class="menu-title">Категории</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/brands"><img class="menu-icon" src="../../assets/images/menu_icons/brand.png" alt="menu icon"><span class="menu-title">Бренды</span></router-link></li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'users'">
            <img class="menu-icon" src="../../assets/images/menu_icons/users.png" alt="menu icon"><span class="menu-title">Пользователи</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="users">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" :to="{name:'list-users'}">Список пользователей</router-link></li>
              <li class="nav-item"><router-link class="nav-link" :to="{name:'add-user'}">Добавить пользователя</router-link></li>
            </ul>
          </b-collapse>
        </li>
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
