<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title mb-4">Orders</h5>
          <div class="table-responsive">
            <table class="table center-aligned-table table-hover">
              <thead>
              <tr>
                <th class="border-bottom-0 text-center">Order No</th>
                <th class="border-bottom-0 text-center">Customer Name</th>
                <th class="border-bottom-0 text-center">Purchased On</th>
                <th class="border-bottom-0 text-center">Shipping Status</th>
                <th class="border-bottom-0 text-center">Order Sum</th>
<!--
                <th class="border-bottom-0">Payment Status</th>
-->
                <th class="border-bottom-0"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="order in ORDERS" :key="order.id">
                <td class="text-center">{{order.id}}</td>
                <td class="text-center">{{order.user.name}}</td>
                <td class="text-center">{{order.created_at}}</td>
                <td class="text-center">{{order.status}}</td>
                <td class="text-center">0</td>
<!--
                <td><label class="badge badge-teal">Approved</label></td>
-->
                <td>
                  <router-link  :to="`/admin/orders/detail/${order.id}`">
                    <font-awesome-icon icon="eye" class = "blue pointer"/>
                  </router-link>
                  /
                  <a @click = "DELETE_ORDER(order.id)">
                    <font-awesome-icon icon="trash-alt" class = "red pointer"/>
                  </a>
                </td>
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
      'GET_ORDERS',
      'DELETE_ORDER'
    ])
  },
  mounted () {
    this.GET_ORDERS()
  }
}
</script>

<style scoped>

</style>
