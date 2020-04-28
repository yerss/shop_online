<template>
  <router-link :to="category_data.categories.length>0 ? `/categories/${category_data.id}` : `/products/category/${category_data.id}`">
    <v-flex ms-3 class="mr-4">
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="category_data.image"
        ></v-img>
        <v-card-title>{{category_data.name}}</v-card-title>
      </v-card>
    </v-flex>
  </router-link>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'category-item',
  components: {},
  computed: {},
  methods: {
    ...mapActions([
      'GET_CATEGORY_DETAIL'
    ])
  },
  props: {
    category_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    $route () {
      this.GET_CATEGORY_DETAIL()
    }
  }
}
</script>

<style>

</style>
