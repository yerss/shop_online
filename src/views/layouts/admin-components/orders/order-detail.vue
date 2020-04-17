<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style = "position: relative">
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
                <div class="table-responsive">
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
                    <tr class = "table_result_bg_color">
                      <td>Итог</td>
                      <td></td>
                      <td></td>
                      <td>{{ORDER_DETAIL.products | sumPrice}}</td>
                      <td class="text-center">{{ORDER_DETAIL.products | sumCount}}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row  mt-4">
              <div class="col-md-12">
                <div class="d-flex justify-content-end">
                  <button class = "btn btn-sm bg-blue btn-outline-primary mr-2" @click = "Return" v-if = "ORDER_DETAIL.status == '1' || ORDER_DETAIL.status =='2'">Вернуть на доработку</button>
                  <button class = "btn btn-sm green btn-outline-success mr-2" @click = "Approve" v-else>Одобрить</button>
                  <button class = "btn btn-sm red btn-outline-danger mr-5" @click = "Decline" v-if = "ORDER_DETAIL.status != '2'">Отклонить</button>
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
        <div style = "display: none" id = "overlay">
          <div class="spinner-border mySpinner" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
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
  filters: {
    sumPrice (products) {
      let sum = 0
      for (let product of products) {
        sum += product.price
      }
      return sum
    },
    sumCount (products) {
      let sum = 0
      for (let product of products) {
        sum += product.pivot.pieces
      }
      return sum
    }
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
      'GET_ORDER_DETAIL', 'UPDATE_ORDER'
    ]),
    Approve () {
      let order = this.ORDER_DETAIL
      order.status = '1'
      order.updated_at = new Date()
      this.UPDATE_ORDER(order)
    },
    Decline () {
      let order = this.ORDER_DETAIL
      order.status = '2'
      order.updated_at = new Date()
      this.UPDATE_ORDER(order)
    },
    Return () {
      let order = this.ORDER_DETAIL
      order.status = '0'
      order.updated_at = new Date()
      this.UPDATE_ORDER(order)
    }
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
  .table_result_bg_color{
   background-color: #f5f5f5;
  }
  .bg-blue {
    background-color: #1991EA;
  }
</style>
