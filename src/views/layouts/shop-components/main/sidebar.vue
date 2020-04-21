<template>
  <div class="d-flex" @mouseleave="resetChosenCategory">
    <div class="d-flex flex-column">
      <div v-for="(category,index) in nodes" @mouseover="changeChosenCategory(category)" :key="index" class="menu__item">
        <router-link :to="category.categories.length>0 ? `/categories/${category.id}` :  `/products/category/${category.id}`" class="menu__item">
          {{category.name}}
        </router-link>
      </div>
    </div>
    <sidebar  v-if="chosenCategory"
              :nodes="chosenCategory.categories"
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
      overlay.style.opacity = 0.2
      this.chosenCategory = category
    },
    resetChosenCategory () {
      let overlay = document.querySelector('.sidebar-wrapper')
      overlay.style.opacity = 0
      this.chosenCategory = ''
    }
  }
}
</script>

<style scoped>
  .menu__item {
    background-color:#fff;
    border-radius: 2px;
    color: black;
    text-decoration: none;
    padding: 5px 15px;
    font-family: "Poppins", sans-serif;
  }
  .menu__item:hover {
    background-color: #00c292;
    cursor: pointer;
    color: white;
  }
</style>
