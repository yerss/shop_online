<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Add product</h4>
        <p class="card-description">
          Product details
        </p>
        <form class="forms-sample">
          <div class="row">
            <div class="col-md-8">
              <b-form-group label="Name"  label-for="name-input">
                <b-form-input type="text" id="name-input" placeholder="Name"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Short name"  label-for="alias-input">
                <b-form-input type="text" id="alias-input" placeholder="Short name"></b-form-input>
              </b-form-group>
            </div>
          </div>
          <b-form-group label-for="Categories">
            <div class="col-md-12">
              <div class="row mb-3">
                <div class="col-md-5 pl-0">
                  <select name="categories" id="category_select" class="custom-select custom-select-sm" v-model="parent_id" @change="onCategoryChanged">
                    <option v-for="category in CATEGORIES" :value="category.id" :key="category.id"> {{category.name}}</option>
                  </select>
                </div>
                <div class="col-md-5">
                  <select name="categories" id="subcategory_select" class="custom-select custom-select-sm" v-model="subcategory_id">
                    <option :value="parent_id" selected>Parent</option>
                    <option v-for="subcategory in SUBCATEGORY" :value="subcategory.id" :key="subcategory.id"> {{subcategory.name}}</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <b-button variant="success" class="btn" @click="addProductCategory">Add</b-button>
                </div>
              </div>
              <div class="row">
                <div v-for="(product_category, index) in PRODUCT_CATEGORIES" :key="index" class="category_item">
                  <b-badge variant="success"><span>{{product_category.name}}</span>  <font-awesome-icon icon="times" class = "icon-red pointer" @click="DELETE_PRODUCT_CATEGORIES(product_category.id)"/></b-badge>
                </div>
              </div>
            </div>
          </b-form-group>
          <b-form-group label-for="Filters">
            <div class="col-md-12">
              <div class="row mb-3">
                <div class="col-md-5 pl-0">
                  <select name="categories" id="filter_select" class="custom-select custom-select-sm" v-model="parent_id" @change="onCategoryChanged">
                    <option v-for="category in CATEGORIES" :value="category.id" :key="category.id"> {{category.name}}</option>
                  </select>
                </div>
                <div class="col-md-5">
                  <select name="categories" id="subfilter_select" class="custom-select custom-select-sm" v-model="subcategory_id">
                    <option :value="parent_id" selected>Parent</option>
                    <option v-for="subcategory in SUBCATEGORY" :value="subcategory.id" :key="subcategory.id"> {{subcategory.name}}</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <b-button variant="success" class="btn" @click="addProductCategory">Add</b-button>
                </div>
              </div>
              <div class="row">
                <div v-for="(product_category, index) in PRODUCT_CATEGORIES" :key="index" class="category_item">
                  <b-badge variant="success"><span>{{product_category.name}}</span>  <font-awesome-icon icon="times" class = "icon-red pointer" @click="DELETE_PRODUCT_CATEGORIES(product_category.id)"/></b-badge>
                </div>
              </div>
            </div>
          </b-form-group>
          <b-form-group label="Description"  label-for="description-input">
            <b-form-textarea id="description-input" v-model="product.description" placeholder="Description" :rows="3" :max-rows="6"></b-form-textarea>
          </b-form-group>
          <b-form-group label="Upload file" label-for="input8">
            <b-form-file v-model="product.image" id="inpu8" :state="Boolean(product.image)" placeholder="Choose a file..."></b-form-file>
          </b-form-group>
          <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
          <b-button variant="light">Cancel</b-button>
        </form>
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
      product: {
        name: '',
        alias: '',
        description: '',
        image: null
      },
      product_category: {
        id: '',
        name: ''
      },
      parent_id: null,
      subcategory_id: null
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES',
      'SUBCATEGORY',
      'PRODUCT_CATEGORIES'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_PRODUCT',
      'GET_CATEGORIES',
      'GET_SUBCATEGORY',
      'ADD_PRODUCT_CATEGORIES',
      'DELETE_PRODUCT_CATEGORIES'
    ]),
    onCategoryChanged () {
      this.GET_SUBCATEGORY(this.parent_id)
    },
    addProductCategory () {
      let category = this.SUBCATEGORY.find(x => x.id === this.subcategory_id) || this.CATEGORIES.find(x => x.id === this.subcategory_id)
      this.product_category.id = category.id
      this.product_category.name = category.name
      this.ADD_PRODUCT_CATEGORIES(this.product_category)
    }
  },
  mounted () {
    this.GET_CATEGORIES()
  }
}
</script>

<style scoped>
  .category_item{
    margin: 2px 2px;
  }
</style>
