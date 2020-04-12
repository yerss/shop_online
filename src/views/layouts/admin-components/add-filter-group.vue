<template>
  <section class="editGroup">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Наименование группы</h5>
            <input type="text" class = "form-control bordered border-success" v-model = "filter.name">
            <br />
            <button class = "btn green  btn-outline-success" @click = "addFilter">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'add-filter-group',
  data: function () {
    return {
      filter: {}
    }
  },
  methods: {
    addFilter () {
      // eslint-disable-next-line no-undef
      if (this.filter.name) {
        this.$store.dispatch('ADD_FILTER', this.filter)
        this.$router.push({name: 'list-filter'})
      }
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
