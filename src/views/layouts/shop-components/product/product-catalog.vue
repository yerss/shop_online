<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-2">
        dasdasd
      </div>
      <div class="col-md-10">
        <product-item
          v-for="(product,index) in CATEGORY_PRODUCTS"
          :key="index"
          :product_data="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import productItem from './product-item'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'product-catalog',
  computed: {
    ...mapGetters([
      'CATEGORY_PRODUCTS'
    ])
  },
  components: {
    productItem
  },
  methods: {
    ...mapActions([
      'GET_CATEGORY_PRODUCTS'
    ])
  },
  mounted () {
    this.GET_CATEGORY_PRODUCTS()
  }
}
</script>

<style scoped>

</style>
