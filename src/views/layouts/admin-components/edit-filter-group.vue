<template>
   <section class="editGroup">
     <div class="row">
       <div class="col-12 grid-margin">
         <div class="card">
           <div class="card-body">
             <h5 class="card-title mb-4">Наименование группы</h5>
             <input type="text" class = "form-control bordered">
             <br />
             <button class = "btn green  btn-outline-success">Изменить</button>
           </div>
         </div>
       </div>
     </div>
   </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'edit-filter-group',
  computed: {
    ...mapGetters(['GET_FILTERS'])
  },
  mounted () {
    console.log(this.$store.getters.GET_FILTERS)
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
</style>
