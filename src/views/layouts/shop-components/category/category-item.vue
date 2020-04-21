<template>
  <div>
    <router-link :to="category_data.categories.length>0 ? `/categories/${category_data.id}` : `/products/category/${category_data.id}`">
      <b-card
        :img-src="category_data.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{category_data.name}}
        </b-card-text>
      </b-card>
    </router-link>
  </div>
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
