<template lang = "html">
  <section class="list-filters">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body" style = "position: relative">
            <h5 class="card-title mb-4">Группа фильтров</h5>
            <p class = "mb-4"><router-link tag = "button" :to = "{name:'add-filter-group'}" class = "btn bg-blue btn-primary"><i class = "mdi mdi-hospital"></i>Добавить группу</router-link></p>
            <div class="table-responsive">
              <table class="table center-aligned-table table-hover">
                <thead>
                <tr>
                  <th class="border-bottom-0">ID</th>
                  <th class="border-bottom-0">Наименование</th>
                  <th class="border-bottom-0">Действие</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for = "(filter,index) in GET_FILTER_GROUPS" :key="filter.id">
                  <td>{{index + 1}}</td>
                  <td>{{filter.name}}</td>
                  <td>
                    <router-link :to = "`filters/edit/group/${filter.id}`" tag = "a" style = "color:#3c8dbc;">
                      <font-awesome-icon icon="pencil-alt" class = "pointer"/>
                    </router-link>
                    /
                    <a @click = "DELETE_FILTER_GROUP_REQUEST(filter.id)">
                      <font-awesome-icon icon="times" class = "btn-red pointer"/>
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
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
  name: 'list-filters',
  computed: {
    ...mapGetters([
      'GET_FILTER_GROUPS'
    ])
  },
  methods: {
    ...mapActions([
      'FILTER_GROUPS_REQUEST',
      'DELETE_FILTER_GROUP_REQUEST'
    ])
  },
  mounted () {
    this.FILTER_GROUPS_REQUEST()
  }
}
</script>

<style>
  .bg-blue{
    background-color: #3c8dbc;
  }
  .red{
    color:#a94442;
  }
  .icon{
    font-size: 1.1rem;
  }
  .pointer{
    cursor: pointer;
  }
</style>
