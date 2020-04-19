<template>
  <section class="list-filters">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body" style = "position:relative">
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
              <b-button @click="editBrand" variant="success" class="mr-2">Сохранить</b-button>
              <b-button variant="light">Cancel</b-button>
            </form>
            <div style = "display: none" id = "overlay">
              <div class="spinner-border mySpinner" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'edit-brand',
  data: function () {
    return {
      brand: {}
    }
  },
  methods: {
    ...mapActions([
      'GET_BRAND_DETAIL',
      'UPDATE_BRAND_DETAIL'
    ]),
    editBrand () {
      let fd = new FormData()
      fd.append('name', this.brand.name)
      fd.append('alias', this.brand.alias)
      fd.append('description', this.brand.description)
      fd.append('image', this.brand.image)
      this.UPDATE_BRAND_DETAIL({brand: fd, obj: this, id: this.brand.id})
    }
  },
  computed: {
    ...mapGetters([
      'BRAND_DETAIL'
    ])
  },
  async mounted () {
    await this.GET_BRAND_DETAIL(this.$route.params.id)
    this.brand = this.BRAND_DETAIL
  }
}
</script>

<style>

</style>
