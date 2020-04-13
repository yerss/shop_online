<template>
  <section class="editGroup">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-3">Наименование группы</h5>
            <input type="text" class = "form-control bordered border-success mb-4" v-model = "filter.value" placeholder="Введите имя группы фильтра">
            <h5 class="card-title mb-3">Группа</h5>
            <select class = "form-control bordered border-success" v-model = "filter.filter_group_id" >
              <option v-for = "group in groups" :value = "group.id">{{group.name}}</option>
            </select>
            <br />
            <button class = "btn green  btn-outline-success" @click = "addFilterAttribute">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'add-filter-attribute',
  data: function () {
    return {
      filter: {
        value: '',
        // eslint-disable-next-line no-undef
        filter_group_id: ''
      },
      groups: []
    }
  },
  methods: {
    async addFilterAttribute () {
      // eslint-disable-next-line no-undef
      console.log(this.filter)
      if (this.filter.value) {
        await this.$store.dispatch('ADD_FILTER_ATTRIBUTE', this.filter)
        this.$router.push({name: 'filter-attribute'})
      }
    }
  },
  async mounted () {
    await this.$store.dispatch('FILTERS_LIST_REQUEST')
    this.groups = this.$store.getters.GET_FILTERS
    this.filter.filter_group_id = this.groups[0].id
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
