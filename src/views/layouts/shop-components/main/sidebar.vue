<template>
  <div class="d-flex" @mouseleave="resetChosenCategory">
    <div class="d-flex flex-column list sidebar-categories">
      <div v-for="category in nodes" @mouseover="changeChosenCategory(category)" class="menu__item">
        <router-link :to="`/categories/${category.id}`" class="menu__item">
          {{category.name}}
        </router-link>
      </div>
    </div>
    <sidebar  v-if="chosenCategory && chosenCategory.categories && chosenCategory.categories.length"
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
    border: 0.5px solid #ccc;
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
</style>
