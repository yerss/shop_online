<template lang="html">
  <div id="app">
    <div>
      <app-header  v-if="$route.path.indexOf('/admin') < 0"/>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <app-footer v-if="$route.path.indexOf('/admin') < 0"/>
    </div>
  </div>
</template>

<script lang="js">
import AppHeader from './views/layouts/header'
import AppFooter from './views/layouts/footer'
import AdminPanel from './views/layouts/admin'
export default{
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    AdminPanel
  }
}
</script>

<style>
  @import "../node_modules/mdi/css/materialdesignicons.min.css";
  @import "../node_modules/flag-icon-css/css/flag-icon.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
</style>

<style lang="scss">
@import "./assets/scss/style";
</style>
