<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Product details</h4>
        <b-tabs class="tab-solid tab-solid-danger">
          <b-tab title="Home" active>
            <div class="row">
                <h5 class="mb-3">Home Content</h5>
              {{PRODUCT_DETAIL}}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </div>
          </b-tab>
          <b-tab title="Profile">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eveniet, sapiente corrupti, vitae excepturi nulla soluta esse in ex, dignissimos velit rerum maiores asperiores!
          </b-tab>
          <b-tab title="Contact">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quibusdam assumenda fugit velit quis hic nulla necessitatibus? Nulla, possimus rerum quia sapiente necessitatibus!
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'product-detail',
  data () {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters([
      'PRODUCT_DETAIL'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCT_DETAIL'
    ])
  },
  mounted () {
    this.GET_PRODUCT_DETAIL()
  }
}
</script>

<style>

</style>
