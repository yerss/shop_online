<template>
  <table class="table center-aligned-table table-hover">
    <thead>
    <tr>
      <th class="border-bottom-0 text-center">Order No</th>
      <th class="border-bottom-0 text-center">Customer Name</th>
      <th class="border-bottom-0 text-center">Purchased On</th>
      <th class="border-bottom-0 text-center">Shipping Status</th>
      <th class="border-bottom-0 text-center">Order Sum</th>
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
  </table></template>
<script>
export default {
  name: 'list-products'
}
</script>

<style scoped>

</style>
