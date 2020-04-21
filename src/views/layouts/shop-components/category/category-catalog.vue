<template>
  <div class="col-md-12">
    <div class="row">
      <category-item
        v-for="(category,index) in CATEGORY_DETAIL.categories"
        :key="index"
        :category_data="category"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import categoryItem from './category-item'
export default {
  name: 'category-catalog',
  components: {
    categoryItem
  },
  computed: {
    ...mapGetters([
      'CATEGORY_DETAIL'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CATEGORY_DETAIL'
    ])
  },
  watch: {
    $route () {
      this.GET_CATEGORY_DETAIL()
    }
  },
  mounted () {
    this.GET_CATEGORY_DETAIL()
  }
}
</script>

<style scoped>

</style>
