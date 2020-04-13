<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Детали заказа № {{ORDER_DETAIL.id}}</h4>
        <b-tabs class="tab-solid tab-solid-success">
          <b-tab title="Заказы" active>
            <div class="row">
              <div class="col-md-6">
                <b-form-group label="Имя заказчика" label-for="input1">
                  <b-form-input type="text" id="input1" placeholder="City" size="lg" :value="ORDER_DETAIL.user.name" readonly></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group label="Email" label-for="input2">
                  <b-form-input type="text" id="input2" placeholder="Zip code" size="lg" :value="ORDER_DETAIL.user.email" readonly></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <b-form-group label="Номер телефона" label-for="input3">
                  <b-form-input type="text" id="input11" placeholder="Phone" size="lg" :value="ORDER_DETAIL.address.telephone_number" readonly></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <table class="table center-aligned-table">
                  <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Наименование</th>
                    <th class="border-bottom-0">Короткое имя</th>
                    <th class="border-bottom-0">Цена</th>
                    <th class="border-bottom-0 text-center">Кол-во</th>
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
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row  mt-4">
              <div class="col-md-12">
                <div class="d-flex justify-content-end">
                  <button class = "btn btn-sm green btn-outline-success mr-2">Одобрить</button>
                  <button class = "btn btn-sm red btn-outline-danger">Отклонить</button>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab title="Контакты">
                  <div class="row">
                    <div class="col-md-6">
                      <b-form-group label="City" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="City" size="lg" :value="ORDER_DETAIL.address.city.name" readonly></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="col-md-3">
                      <b-form-group label="Zip code" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Zip code" size="lg" :value="ORDER_DETAIL.address.city.zip_code" readonly></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <b-form-group label="Address" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Address" size="lg" :value="ORDER_DETAIL.address.address" readonly></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="col-md-3">
                      <b-form-group label="Zip code" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Zip code" size="lg" :value="ORDER_DETAIL.address.zip_code" readonly></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div></template>
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
  .green{
    background-color: #008d4c;
  }
  .red{
    background-color: #dd4b39;
    color:#fff;
  }
</style>
