<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title mb-4">Orders</h5>
          <div class="table-responsive">
            <table class="table center-aligned-table">
              <thead>
              <tr>
                <th class="border-bottom-0">Order No</th>
                <th class="border-bottom-0">Customer Name</th>
                <th class="border-bottom-0">Purchased On</th>
                <th class="border-bottom-0">Shipping Status</th>
                <th class="border-bottom-0">Order Sum</th>
<!--
                <th class="border-bottom-0">Payment Status</th>
-->
                <th class="border-bottom-0"></th>
                <th class="border-bottom-0"></th>
                <th class="border-bottom-0"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="order in ORDERS" :key="order.id">
                <td>{{order.id}}</td>
                <td>{{order.user.name}}</td>
                <td>{{order.created_at}}</td>
                <td>{{order.status}}</td>
                <td>{{order.sum}}</td>
<!--
                <td><label class="badge badge-teal">Approved</label></td>
-->
                <router-link  :to="`/admin/orders/detail/${order.id}`">
                  <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                </router-link>
                <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'list-orders',
  data () {
    return {}
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'ORDERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_ORDERS'
    ])
  },
  mounted () {
    this.GET_ORDERS()
  }
}
</script>

<style scoped>

</style>
