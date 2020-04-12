<template lang = "html">
  <section class="filters">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
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
                <tr v-for = "(filter,index) in filters" :key="filter.id">
                  <td>{{index + 1}}</td>
                  <td>{{filter.name}}</td>
                  <td>
                    <router-link :to = "`filters/edit/group/${filter.id}`" tag = "a" style = "color:#3c8dbc;">
                      <font-awesome-icon icon="pencil-alt" class = "pointer"/>
                    </router-link>
                    /
                    <a @click = "DELETE_FILTER(filter.id)">
                      <font-awesome-icon icon="times" class = "red pointer"/>
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
  name: 'list-filters',
  data: function () {
    return {
      filters: []
    }
  },
  computed: {
    ...mapGetters([
      'GET_FILTERS'
    ])
  },
  methods: {
    ...mapActions([
      'FILTERS_LIST_REQUEST',
      'DELETE_FILTER'
    ])
  },
  async mounted () {
    await this.FILTERS_LIST_REQUEST()
    this.filters = this.GET_FILTERS
    console.log(this.filters)
  }
}
</script>

<<<<<<< HEAD
<style scoped>
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
=======
<style>
>>>>>>> 42e30543ab8a4d837d70c54665deebf2f5e76615
</style>
