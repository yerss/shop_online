<template>
    <p>{dsdasdasdasdao,likmunjybterwecefvrbtynuioimnubytvr</p>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'order-detail',
  data () {
    return {}
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
      'GET_ORDER_DETAIL'
    ])
  },
  async mounted () {
    await this.GET_ORDER_DETAIL()
  }
}
</script>

<style scoped>

</style>
