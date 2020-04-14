<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">ID {{ORDER_DETAIL.id}} - order details</h4>
        <b-tabs class="tab-solid tab-solid-success">
          <b-tab title="Order" active>
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <b-form-group label="Customer name" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="City" size="lg" :value="ORDER_DETAIL.user.name"></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="col-md-6">
                      <b-form-group label="Email" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Zip code" size="lg" :value="ORDER_DETAIL.user.email"></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
                </div>
                <b-form-group label="Customer phone" label-for="input11">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-6">
                        <b-form-input type="text" id="input11" placeholder="Phone" size="lg" :value="ORDER_DETAIL.address.telephone_number"></b-form-input>
                      </div>
                    </div>
                  </div>
                </b-form-group>
                <table class="table center-aligned-table">
                  <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Name</th>
                    <th class="border-bottom-0">Short Name</th>
                    <th class="border-bottom-0">Price</th>
                    <th class="border-bottom-0 text-center">Pieces</th>
                    <th class="border-bottom-0"></th>
                  </tr>
                  </thead>
                  <tbody v-if="ORDER_DETAIL">
                  <tr v-for="product in ORDER_DETAIL.products" :key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.alias}}</td>
                    <td>{{product.price}}</td>
                    <td class="text-center">{{product.pivot.pieces}}</td>
                    <td>
                      <a>
                        <font-awesome-icon icon="trash-alt" class = "red pointer"/>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </b-tab>
          <b-tab title="Contact">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <b-form-group label="City" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="City" size="lg" :value="ORDER_DETAIL.address.city.name"></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="col-md-3">
                      <b-form-group label="Zip code" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Zip code" size="lg" :value="ORDER_DETAIL.address.city.zip_code"></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <b-form-group label="Address" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Address" size="lg" :value="ORDER_DETAIL.address.address"></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="col-md-3">
                      <b-form-group label="Zip code" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Zip code" size="lg" :value="ORDER_DETAIL.address.zip_code"></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'order-detail',
  data () {
    return {}
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'ORDER_DETAIL'
    ])
  },
  methods: {
    ...mapActions([
      'GET_ORDER_DETAIL'
    ])
  },
  mounted () {
    this.GET_ORDER_DETAIL()
  }
}
</script>

<style>

</style>
