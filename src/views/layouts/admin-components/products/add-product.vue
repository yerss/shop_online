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
          <b-form-group label="Description"  label-for="description-input">
            <b-form-textarea id="description-input" v-model="product.description" placeholder="Description" :rows="3" :max-rows="6"></b-form-textarea>
          </b-form-group>
          <div class="row mt-2 mb-3">
            <div class="col-md-12">
              <select name="categories" id="category_select" class="custom-select custom-select-sm">
                <option :value="null" selected>Parent</option>
                <option v-for="category in CATEGORIES" :value="category.id" :key="category.id"> {{category.name}}</option>
              </select>
            </div>
          </div>
          <b-form-group label="Email address"  label-for="input6">
            <b-form-input type="email" id="input6" placeholder="Email"></b-form-input>
          </b-form-group>
          <b-form-group label="Password"  label-for="input7">
            <b-form-input type="password" id="input7" placeholder="Password"></b-form-input>
          </b-form-group>
          <b-form-group label="Upload file" label-for="input8">
            <b-form-file v-model="product.image" id="inpu8" :state="Boolean(product.image)" placeholder="Choose a file..."></b-form-file>
          </b-form-group>
          <b-form-group label="City"  label-for="input9">
            <b-form-input type="text" id="input9" placeholder="Location"></b-form-input>
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
      }
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_PRODUCT',
      'GET_CATEGORIES'
    ])
  },
  mounted () {
    this.GET_CATEGORIES()
  }
}
</script>

<style scoped>

</style>
