<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Add product</h4>
        <p class="card-description">
          Product details
        </p>
        <b-form class="forms-sample">
          <div class="row">
            <div class="col-md-8">
              <b-form-group label="Name"  label-for="name-input">
                <b-form-input type="text" id="name-input" placeholder="Name" v-model="product.name"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Short name"  label-for="alias-input">
                <b-form-input type="text" id="alias-input" placeholder="Short name" v-model="product.alias"></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-12 pl-0">
            <b-form-group label="Price"  label-for="price-input">
              <b-form-input type="number" id="price-input" placeholder="Price" v-model="product.price"></b-form-input>
            </b-form-group>
          </div>
          <b-form-group label="Categories">
            <div class="col-md-12">
              <div class="row mb-3">
                <div class="col-md-5 pl-0">
                  <select name="categories" id="category_select" class="custom-select custom-select-sm" v-model="category_id" @change="GET_CATEGORY_SUBCATEGORIES(category_id)">
                    <option v-for="(category, index) in CATEGORIES" :value="category.id" :key="index">{{category.name}}</option>
                  </select>
                </div>
                <div class="col-md-5">
                  <select name="categories" id="subcategory_select" class="custom-select custom-select-sm" v-model="subcategory_id">
                    <option v-for="(subcategory, index) in CATEGORY_SUBCATEGORIES" :value="subcategory.id" :key="index">{{subcategory.name}}</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <b-button variant="success" class="btn btn-fw" @click="ADD_PRODUCT_CATEGORY(subcategory_id)">Add</b-button>
                </div>
              </div>
              <div class="row">
                <div v-for="(product_category, index) in PRODUCT_CATEGORIES" :key="index" class="category_item">
                  <b-badge variant="primary"><span> {{product_category.name}} </span><font-awesome-icon icon="times" class = "icon-red pointer" @click="DELETE_PRODUCT_CATEGORY(product_category.id)"/></b-badge>
                </div>
              </div>
            </div>
          </b-form-group>
          <b-form-group label="Filters">
            <div class="col-md-12">
              <div class="row mb-3">
                <div class="col-md-5 pl-0">
                  <select name="categories" id="filter_select" class="custom-select custom-select-sm" v-model="filter_id" @change="GET_FILTER_VALUES(filter_id)">
                    <option v-for="(filter, index) in GET_FILTER_GROUPS" :value="filter.id" :key="index">{{filter.name}}</option>
                  </select>
                </div>
                <div class="col-md-5">
                  <select name="categories" id="filter_value_select" class="custom-select custom-select-sm" v-model="filter_values_id">
                    <option v-for="(filter_value, index) in FILTER_VALUES" :value="filter_value.id" :key="index">{{filter_value.value}}</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <b-button variant="success" class="btn btn-fw" @click="ADD_PRODUCT_FILTER(filter_values_id)">Add</b-button>
                </div>
              </div>
              <div class="row">
                <div v-for="(product_filter, index) in PRODUCT_FILTERS" :key="index" class="category_item">
                  <b-badge variant="primary"><span> {{product_filter.value}}  </span><font-awesome-icon icon="times" class = "icon-red pointer" @click="DELETE_PRODUCT_FILTER(product_filter.id)"/></b-badge>
                </div>
              </div>
            </div>
          </b-form-group>
          <b-form-group label="Brands">
            <div class="col-md-12">
              <select name="categories" id="brand_select" class="custom-select custom-select-sm" v-model="product.brand_id">
                <option selected :value="1">None</option>
                <option v-for="(brand, index) in BRANDS" :value="brand.id" :key="index">{{brand.name}}</option>
              </select>
            </div>
          </b-form-group>
          <b-form-group label="Description"  label-for="description-input">
            <b-form-textarea id="description-input" placeholder="Description" :rows="3" :max-rows="6" v-model="product.description"></b-form-textarea>
          </b-form-group>
          <b-form-group label="Upload file" label-for="input8">
            <b-form-file multiple drop-placeholder="Image put here" v-model="product.images">
              <template slot="file-name" slot-scope="{ names }">
                <b-badge variant="primary">{{ names[0] }}</b-badge>
                <b-badge v-if="names.length > 1" variant="primary" class="ml-1">
                  + {{ names.length - 1 }} More files
                </b-badge>
              </template>
            </b-form-file>
          </b-form-group>
          <b-button variant="success" class="mr-2" @click="addProduct">Submit</b-button>
          <b-button variant="light">Cancel</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'add-product',
  data () {
    return {
      category_id: '',
      subcategory_id: '',
      filter_id: '',
      filter_values_id: '',
      product: {
        name: '',
        alias: '',
        description: '',
        brand_id: '',
        price: '',
        categories: [],
        filters: [],
        images: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES',
      'CATEGORY_SUBCATEGORIES',
      'PRODUCT_CATEGORIES',
      'GET_FILTER_GROUPS',
      'FILTER_VALUES',
      'PRODUCT_FILTERS',
      'BRANDS'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_PRODUCT',
      'GET_CATEGORIES',
      'GET_CATEGORY_SUBCATEGORIES',
      'ADD_PRODUCT_CATEGORY',
      'DELETE_PRODUCT_CATEGORY',
      'FILTER_GROUPS_REQUEST',
      'GET_FILTER_VALUES',
      'ADD_PRODUCT_FILTER',
      'DELETE_PRODUCT_FILTER',
      'GET_BRANDS'
    ]),
    addProduct () {
      const fd = new FormData()
      this.product.categories = this.PRODUCT_CATEGORIES
      this.product.filters = this.PRODUCT_FILTERS
      fd.append('name', this.product.name)
      fd.append('alias', this.product.alias)
      fd.append('description', this.product.description)
      fd.append('brand_id', this.product.brand_id)
      fd.append('price', this.product.price)
      fd.append('categories', this.product.categories)
      fd.append('filters', this.product.filters)
      fd.append('images', this.product.images)
      this.ADD_PRODUCT(fd)
    }
  },
  mounted () {
    this.GET_CATEGORIES()
    this.FILTER_GROUPS_REQUEST()
    this.GET_BRANDS()
  }
}
</script>

<style scoped>
  .category_item{
    margin: 2px 2px;
  }
</style>
