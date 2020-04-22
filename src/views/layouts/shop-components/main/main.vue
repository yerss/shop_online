<template>
  <div class="d-flex mx-auto justify-content-center position-relative" style="max-width: 70vw">
    <sidebar :nodes="CATEGORIES" class="sidebar-categories"></sidebar>
    <app-content></app-content>
    <div class="sidebar-wrapper"></div>
  </div>
</template>

<style>
  .sidebar-categories {
    background-color: rgba(20, 220, 80, .5);
    position: relative;
    width: 250px;
    z-index: 101;
    height: 100%;
  }
  .sidebar-categories:hover {
    /*position: absolute;*/
  }
  /*.sidebar-categories:hover {*/
  /*  position: relative;*/
  /*}*/

  .sidebar-wrapper {
    background-color: rgb(220, 220, 220);
    opacity: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left:0;
    transition: all .3s;
  }
</style>

<script>
import sidebar from './sidebar'
import appContent from './content'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'main',
  components: {
    sidebar, appContent
  },
  created () {
    this.GET_CATEGORIES()
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CATEGORIES'
    ])
  }
}
</script>
