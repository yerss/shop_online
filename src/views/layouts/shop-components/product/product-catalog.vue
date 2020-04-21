<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-2">
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
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORY_PRODUCTS',
      'GET_FILTER_GROUPS'
    ])
  },
  components: {
    productItem
  },
  methods: {
    ...mapActions([
      'GET_CATEGORY_PRODUCTS',
      'FILTER_GROUPS_REQUEST'
    ])
  },
  mounted () {
    this.GET_CATEGORY_PRODUCTS()
    this.FILTER_GROUPS_REQUEST()
  }
}
</script>

<style scoped>

</style>
