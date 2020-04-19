чё<template lang="html">
  <section class="dashboard" style = "position: relative">
    <div class="row">
      <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <i class="mdi mdi-cube text-danger icon-lg"></i>
              </div>
              <div>
                <p class="card-text text-right">Кол-во продуктов</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{GET_PRODUCTS_COUNT}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <i class="mdi mdi-receipt text-warning icon-lg"></i>
              </div>
              <div>
                <p class="card-text text-right">Кол-во категории</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{GET_CATEGORIES_COUNT}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <i class="mdi mdi-poll-box text-teal icon-lg"></i>
              </div>
              <div>
                <p class="card-text text-right">Кол-во заказов</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{GET_ORDERS_COUNT}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <i class="mdi mdi-account-location text-info icon-lg"></i>
              </div>
              <div>
                <p class="card-text text-right">Кол-во юзеров</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{GET_USERS_COUNT}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Последние заказы</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Покупатель</th>
                    <th class="border-bottom-0">Статус</th>
                    <th class="border-bottom-0">Дата создания</th>
                  </tr>
                </thead>
                <tbody>
                <tr v-for = "order in ORDERS">
                  <td class="border-bottom-0">{{order.id}}</td>
                  <td class="border-bottom-0">{{order.user.name}}</td>
                  <td class="border-bottom-0">{{order.status}}</td>
                  <td class="border-bottom-0">{{order.created_at | convert}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Последние добавленные продукты</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                <tr>
                  <th class="border-bottom-0">ID</th>
                  <th class="border-bottom-0">Покупатель</th>
                  <th class="border-bottom-0">Статус</th>
                  <th class="border-bottom-0">Сумма</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>035</td>
                  <td>Galaxy S8</td>
                  <td>15 May 2017</td>
                  <td>Dispatched</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style = "display: none" id = "overlay">
      <div class="spinner-border mySpinner" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'GET_ORDERS_COUNT',
      'GET_PRODUCTS_COUNT',
      'GET_USERS_COUNT',
      'GET_CATEGORIES_COUNT',
      'ORDERS'
    ])
  },
  methods: {
    ...mapActions([
      'ORDERS_COUNT_REQUEST',
      'PRODUCTS_COUNT_REQUEST',
      'USERS_COUNT_REQUEST',
      'CATEGORIES_COUNT_REQUEST',
      'GET_ORDERS'
    ])
  },
  mounted () {
    this.ORDERS_COUNT_REQUEST()
    this.PRODUCTS_COUNT_REQUEST()
    this.USERS_COUNT_REQUEST()
    this.CATEGORIES_COUNT_REQUEST()
    this.GET_ORDERS()
  }
}
</script>

<style scoped lang="scss">
</style>
