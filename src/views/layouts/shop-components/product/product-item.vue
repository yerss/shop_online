<template>
  <v-flex sm3 class="mr-3">
    <v-card>
      <v-img
        class="white--text align-end"
        height="250px"
        :src="product_data.image"
      >
      </v-img>
      <v-card-text class="text--primary">
        <div>{{product_data.price}}</div>

        <div>{{product_data.alias}}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="orange"
          text
          @click="ADD_ITEM_TO_CART(product_data)"
        >
          ADD TO CART
        </v-btn>

        <v-btn
          color="orange"
          text
        >
          LIKE
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'product-item',
  components: {},
  computed: {},
  methods: {
    ...mapActions([
      'ADD_ITEM_TO_CART'
    ])
  },
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style>

</style>
