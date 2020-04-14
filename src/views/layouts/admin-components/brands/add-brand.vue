<template>
  <section class="list-filters">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic form</h4>
            <p class="card-description">
              Basic form elements
            </p>
            <form class="forms-sample">
              <b-form-group label="Name"  label-for="name-input">
                <b-form-input v-model="brand.name" type="text" id="name-input" placeholder="Name"></b-form-input>
              </b-form-group>
              <b-form-group label="Short name"  label-for="name-alias">
                <b-form-input v-model="brand.alias" type="text" id="name-alias" placeholder="Short name"></b-form-input>
              </b-form-group>
              <b-form-group label="Description"  label-for="input7">
                <b-form-textarea v-model="brand.description" type="text" id="input7" placeholder="Description" :rows="3" max-rows="5"></b-form-textarea>
              </b-form-group>
              <b-form-group label="Upload file" label-for="input8">
                <b-form-file v-model="brand.image" id="inpu8" :state="Boolean(brand.image)" placeholder="Choose a file..."></b-form-file>
              </b-form-group>
              <b-button @click="addBrand" variant="success" class="mr-2">Submit</b-button>
              <b-button variant="light">Cancel</b-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'add-brand',
  data () {
    return {
      brand: {
        name: '',
        alias: '',
        description: '',
        image: null
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'ADD_BRAND'
    ]),
    addBrand () {
      const fd = new FormData()
      fd.append('name', this.brand.name)
      fd.append('alias', this.brand.alias)
      fd.append('description', this.brand.description)
      fd.append('image', this.brand.image)
      this.ADD_BRAND(fd)
    }
  }
}
</script>

<style scoped>

</style>
