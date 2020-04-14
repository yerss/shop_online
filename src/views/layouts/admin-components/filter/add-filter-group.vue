<template>
  <section class="add-filter-group">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Наименование группы</h5>
            <input type="text" class = "form-control bordered border-success" v-model = "name" placeholder="Введите имя группы фильтра">
            <br />
            <button class = "btn green  btn-outline-success" @click = "addFilter">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'add-filter-group',
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions(['ADD_FILTER_GROUP', 'FILTER_GROUPS_REQUEST']),
    addFilter () {
      let filter = {
        id: '',
        name: this.name
      }
      this.ADD_FILTER_GROUP(filter)
      this.FILTER_GROUPS_REQUEST()
      this.$router.push({name: 'list-filter'})
    }
  }
}
</script>

<style>
  .bordered{
    border:1px solid rgba(0,0,0,.2);
  }
  .green{
    background-color: #00a65a;
  }
  .border-success{
    border-color:#00a65a;
  }
</style>
