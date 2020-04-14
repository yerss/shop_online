<template>
  <section class="list-filters">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Список брендов</h5>
            <p class = "mb-4">
              <router-link tag = "button" :to = "{name:'add-brand'}" class = "btn bg-blue btn-primary">
                <i class = "mdi mdi-hospital"></i>Добавить бренд
              </router-link>
            </p>
            <div class="table-responsive">
              <table class="table center-aligned-table table-hover">
                <thead>
                <tr>
                  <th class="border-bottom-0">ID</th>
                  <th class="border-bottom-0">Image</th>
                  <th class="border-bottom-0">Name</th>
                  <th class="border-bottom-0">Short name</th>
                  <th class="border-bottom-0"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for = "(brand,index) in BRANDS" :key="brand.id">
                  <td>{{index+1}}</td>
                  <td>
                    <img :src="brand.image">
                  </td>
                  <td>{{brand.name}}</td>
                  <td>{{brand.alias}}</td>
                  <td class="text-center">
                    <router-link :to = "`brands/detail/${brand.id}`" tag = "a" style = "color:#3c8dbc;">
                      <font-awesome-icon icon="edit" class = "pointer"/>
                    </router-link>
                    /
                    <a @click = "DELETE_BRAND(brand.id)">
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
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'list-brands',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'BRANDS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_BRANDS',
      'DELETE_BRAND'
    ])
  },
  mounted () {
    this.GET_BRANDS()
  }

}
</script>

<style scoped>

</style>
