<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item"
                v-for="(filter,index) in GET_FILTER_GROUPS"
                :key="index"
            >
              <span class="nav-link" v-b-toggle="`filter${index}`">
                <span class="menu-title">
                  {{filter.name}}
                </span>
              </span>
              <b-collapse :id="`filter${index}`">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"
                      v-for="(filter_value, index) in filter.filter_values"
                      :key="index"
                  >
                    <b-form-checkbox @change="addFilter(filter_value.id)">{{filter_value.value}}</b-form-checkbox>
                  </li>
                </ul>
              </b-collapse>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-md-10">
        <div class="row">
          <product-item
            v-for="(product,index) in CATEGORY_PRODUCTS"
            :key="index"
            :product_data="product"
          />
        </div>
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
      filter_values: []
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
    ]),
    addFilter (id) {
      let index = this.filter_values.indexOf(id)
      if (index > -1) {
        this.filter_values.splice(index, 1)
      } else {
        this.filter_values.push(id)
      }
      this.filter_values = [...new Set(this.filter_values)]
      this.GET_CATEGORY_PRODUCTS(this.filter_values.toString())
    }
  },
  mounted () {
    this.GET_CATEGORY_PRODUCTS()
    this.FILTER_GROUPS_REQUEST()
  }
}
</script>

<style scoped>

</style>
