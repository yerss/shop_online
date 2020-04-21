<template>
    <b-card
      :title="product_data.alias"
      :img-src="product_data.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{product_data.name}}
      </b-card-text>
      <b-button href="javascript:void()" variant="success" @click="ADD_ITEM_TO_CART(product_data)">ADD TO CART</b-button>
    </b-card>
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
