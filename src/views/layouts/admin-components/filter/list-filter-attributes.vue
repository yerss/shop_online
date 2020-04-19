<template lang = "html">
  <section class="list-filter-attributes">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body" style="position:relative">
            <h5 class="card-title mb-4">Фильтры</h5>
            <p class = "mb-4"><router-link tag = "button" :to = "{name:'add-filter-attribute'}" class = "btn bg-blue btn-primary"><i class = "mdi mdi-hospital"></i>Добавить атрибут</router-link></p>
            <div class="table-responsive">
              <table class="table center-aligned-table table-hover" v-if = "GET_FILTER_ATTRIBUTES.length">
                <thead>
                <tr>
                  <th class="border-bottom-0">ID</th>
                  <th class="border-bottom-0">Наименование</th>
                  <th class="border-bottom-0">Группа</th>
                  <th class="border-bottom-0">Действие</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for = "(filter,index) in GET_FILTER_ATTRIBUTES" :key="filter.id">
                  <td>{{index + 1}}</td>
                  <td>{{filter.value}}</td>
                  <td>{{filter.filter_group.name}}</td>
                  <td>
                    <router-link :to = "{name:'edit-filter-attribute',params: {id:filter.id}}" tag = "a" style = "color:#3c8dbc;">
                      <font-awesome-icon icon="pencil-alt" class = "pointer"/>
                    </router-link>
                    /
                    <a @click = "deleteAttribute(filter.id)">
                      <font-awesome-icon icon="times" class = "icon-red pointer"/>
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
              <div v-else>
                Пока что нет никаких фильтров
              </div>
            </div>
            <div style = "display: none" id = "overlay">
              <div class="spinner-border mySpinner" role="status">
                <span class="sr-only">Loading...</span>
              </div>
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
  name: 'list-filters-attribute',
  computed: {
    ...mapGetters([
      'GET_FILTER_ATTRIBUTES'
    ])
  },
  methods: {
    ...mapActions(['DELETE_FILTER_ATTRIBUTE_REQUEST', 'FILTER_ATTRIBUTES_REQUEST']),
    deleteAttribute (id) {
      this.DELETE_FILTER_ATTRIBUTE_REQUEST({id: id, obj: this})
    }
  },
  mounted () {
    this.FILTER_ATTRIBUTES_REQUEST()
  }
}
</script>

<style scoped>
  .bg-blue{
    background-color: #3c8dbc;
  }
  dark{
    color:black;
  }
  icon-red{
    color:#a94442 !important;
  }
  .icon{
    font-size: 1.1rem;
  }
  .pointer{
    cursor: pointer;
  }
</style>
