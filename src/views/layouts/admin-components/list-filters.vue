<template lang = "html">
  <section class="filters">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Filters</h5>
            <p class = "mb-4"><button class = "btn bg-blue"><i class = "mdi mdi-hospital"></i>Добавить группу</button></p>
            <div class="table-responsive">
              <table class="table center-aligned-table table-hover table-sm">
                <thead>
                <tr>
                  <th class="border-bottom-0">ID</th>
                  <th class="border-bottom-0">Наименование</th>
                  <th class="border-bottom-0">Действие</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>034</td>
                  <td>Iphone 7</td>
                  <td>
                    <a href="#" class = "icon"><i class = "mdi mdi-lead-pencil"></i></a>
                    /
                    <a href="#" class = "icon red"><i class = "mdi mdi-close"></i></a>
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
      id: 0
    }
  },
  computed: {
    ...mapGetters([
      'GET_FILTERS'
    ])
  },
  methods: {
    ...mapActions([
      'FILTERS_LIST'
    ])
  },
  mounted () {
    this.FILTERS_LIST()
  }
}
</script>

<style scoped>
  .bg-blue{
    background-color: #3c8dbc;
  }
  .red{
    color:red;
  }
  .icon{
    font-size: 1.1rem;
  }
</style>
