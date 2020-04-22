<template>
  <div class = "container">
        <sidebar :nodes="CATEGORIES" class="sidebar-categories"></sidebar>
        <content></content>
        <div class="sidebar-wrapper"></div>
  </div>
</template>

<style scoped>
  .sidebar-categories {
    background-color: #fff;
    position: fixed;
    z-index: 101;
    height: 400px;
    overflow: hidden;
  }

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
import content from './content'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'main',
  components: {
    sidebar, content
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
