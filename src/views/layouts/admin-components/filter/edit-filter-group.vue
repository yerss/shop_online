<template>
   <section class="edit-filter-group">
     <div class="row">
       <div class="col-12 grid-margin">
         <div class="card">
           <div class="card-body">
             <h5 class="card-title mb-4">Наименование группы</h5>
             <input type="text" class = "form-control bordered border-success" v-model = "value" placeholder="Введите имя группы фильтра">
             <br />
             <button class = "btn green  btn-outline-success" @click = "updateInfo">Изменить</button>
           </div>
         </div>
       </div>
     </div>
   </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'edit-filter-group',
  computed: {
    ...mapGetters([
      'GET_FILTER_GROUP'
    ]),
    value: {
      get () {
        return this.GET_FILTER_GROUP.name
      },
      set (value) {
        let filter = {
          id: this.$route.params.id,
          name: value
        }
        this.SET_FILTER_GROUP_REQUEST(filter)
      }
    }
  },
  methods: {
    ...mapActions([
      'UPDATE_FILTER_GROUP', 'FILTER_GROUP_REQUEST', 'SET_FILTER_GROUP_REQUEST'
    ]),
    updateInfo () {
      this.UPDATE_FILTER_GROUP(this.GET_FILTER_GROUP)
      this.$router.push({name: 'list-filter'})
    }
  },
  mounted () {
    this.FILTER_GROUP_REQUEST(this.$route.params.id)
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
