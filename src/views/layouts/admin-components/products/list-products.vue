<template>
    <section class = "list-products">
      <div class="row">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title mb-4">Товары</h5>
              <div class="table-responsive">
                <table class="table center-aligned-table table-hover">
                  <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Категория</th>
                    <th class="border-bottom-0">Наименование</th>
                    <th class="border-bottom-0">Цена</th>
                    <th class="border-bottom-0">Статус</th>
                    <th class="border-bottom-0">Действия</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for = "product in products" v-bind:key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.alias}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.status}}</td>
                    <td>
                      <router-link tag = "a" to = "#">
                        <!--                        :to = "{name:'edit-user',params: {id:user.id}}"-->
                        <font-awesome-icon icon="eye" class="blue pointer"/>
                      </router-link>
                      /
                      <router-link tag = "a" to = "#">
                        <font-awesome-icon icon="times" class="blue pointer"/>
                      </router-link>
                      /
                      <a>
                        <font-awesome-icon icon="times" class="red pointer"/>
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
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'list-products',
  data () {
    return {
      products: []
    }
  },
  computed: {
    ...mapGetters(['GET_PRODUCTS'])
  },
  methods: {
    ...mapActions(['PRODUCTS_LIST_REQUEST'])
  },
  async mounted () {
    await this.PRODUCTS_LIST_REQUEST()
    this.products = this.GET_PRODUCTS
    console.log(this.products)
  }
}
</script>

<style scoped>

</style>
