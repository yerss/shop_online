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
      <b-button href="javascript:void()" variant="success">ADD TO CART</b-button>
    </b-card>
</template>

<script>
export default {
  name: 'product-item',
  components: {},
  computed: {},
  methods: {
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
