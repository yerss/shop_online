<template>
  <section class="add-filter-attribute">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-3">Наименование группы</h5>
            <input type="text" class = "form-control bordered border-success mb-4" v-model = "name" placeholder="Введите имя группы фильтра">
            <h5 class="card-title mb-3">Группа</h5>
            <select class = "form-control bordered border-success" v-model = "filter_group_id" >
              <option v-bind:key="group.id" v-for = "group in GET_FILTER_GROUPS" :value = "group.id">{{group.name}}</option>
            </select>
            <br />
            <button class = "btn green  btn-outline-success" @click = "addFilter">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'add-filter-group',
  data: function () {
    return {
      name: '',
      filter_group_id: ''
    }
  },
  computed: {
    // eslint-disable-next-line no-undef
    ...mapGetters(['GET_FILTER_GROUPS'])
  },
  methods: {
    ...mapActions(['ADD_FILTER_ATTRIBUTE', 'FILTER_ATTRIBUTES_REQUEST', 'FILTER_GROUPS_REQUEST']),
    addFilter () {
      let filter = {
        id: '',
        value: this.name,
        filter_group_id: this.filter_group_id
      }
      this.ADD_FILTER_ATTRIBUTE(filter)
      this.FILTER_ATTRIBUTES_REQUEST()
      this.$router.push({name: 'filter-attribute'})
    }
  },
  async mounted () {
    await this.FILTER_GROUPS_REQUEST()
    await this.FILTER_ATTRIBUTES_REQUEST()
    this.filter_group_id = this.GET_FILTER_GROUPS[0].id
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
