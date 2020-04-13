<template>
   <section class="editGroup">
     <div class="row">
       <div class="col-12 grid-margin">
         <div class="card">
           <div class="card-body">
             <h5 class="card-title mb-4">Наименование группы</h5>
             <input type="text" class = "form-control bordered border-success" v-model = "filter.name" placeholder="Введите имя группы фильтра">
             <br />
             <button class = "btn green  btn-outline-success" @click = "changeFilterName(filter)">Изменить</button>
           </div>
         </div>
       </div>
     </div>
   </section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'edit-filter-group',
  data: function () {
    return {
      filter: {}
    }
  },
  methods: {
    ...mapActions(['FILTER_GROUP_REQUEST', 'UPDATE_FILTER']),
    changeFilterName (filter) {
      this.UPDATE_FILTER(filter)
      this.$router.push({name: 'list-filter'})
    }
  },
  async mounted () {
    await this.FILTER_GROUP_REQUEST(this.$route.params.id)
    this.filter = this.$store.getters.GET_FILTER
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
