<template>
  <div class="d-flex" @mouseleave="resetChosenCategory">
    <div class="d-flex flex-column list sidebar-categories">
      <div v-for="(category,index) in nodes" @mouseover="changeChosenCategory(category)" :key="index" class="menu__item">
        <router-link :to="category.categories.length>0 ? `/categories/${category.id}` :  `/products/category/${category.id}`" class="menu__item">
          {{category.name}}
        </router-link>
      </div>
    </div>
    <sidebar  v-if="chosenCategory && chosenCategory.categories && chosenCategory.categories.length"
              :nodes="chosenCategory.categories" class = "sidebar-categories sidebar-inner"
    ></sidebar>
  </div>
</template>

<script>

export default {
  props: ['nodes'],
  data () {
    return {
      chosenCategory: ''
    }
  },
  name: 'sidebar',
  methods: {
    changeChosenCategory (category) {
      let overlay = document.querySelector('.sidebar-wrapper')
      overlay.style.display = 'block'
      this.chosenCategory = category
    },
    resetChosenCategory () {
      let overlay = document.querySelector('.sidebar-wrapper')
      overlay.style.display = 'none'
      this.chosenCategory = ''
    }
  }
}
</script>

<style scoped>
  .sidebar-inner {
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,.3);
    border:.5px solid rgba(0,0,0,.1);
  }
  .menu__item {
    background-color:#fff;
    border-radius: 2px;
    width: 250px;
    color: black;
    text-decoration: none;
    padding: 5px 15px;
    font-family: "Poppins", sans-serif;
  }
  .list {
    position: relative;
    margin-right: 0;
    margin-left: auto;
    width: 250px;
    height: 100%;
  }
  .menu__item:hover {
    background-color: #00c292;
    cursor: pointer;
    color: white;
  }
  .menu__item:hover a.menu__item {
    background-color: #00c292;
  }

</style>
