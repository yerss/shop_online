<template>
  <section class="edit-filter-attribute">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-3">Наименование группы</h5>
            <input type="text" class = "form-control bordered border-success mb-4" v-model = "value" placeholder="Введите имя группы фильтра">
            <h5 class="card-title mb-3">Группа</h5>
            <select class = "form-control bordered border-success" v-model = "groupId" >
              <option v-bind:key="group.id" v-for = "group in GET_FILTER_GROUPS" :value = "group.id">{{group.name}}</option>
            </select>
            <br />
            <button class = "btn green  btn-outline-success" @click = "editFilterAttribute">Изменить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'add-filter-attribute',
  computed: {
    ...mapGetters(['GET_FILTER_ATTRIBUTE', 'GET_FILTER_GROUPS']),
    value: {
      get () {
        // eslint-disable-next-line no-undef
        return this.GET_FILTER_ATTRIBUTE.value
      },
      set (value) {
        this.SET_FILTER_ATTRIBUTE_NAME(value)
      }
    },
    groupId: {
      get () {
        // eslint-disable-next-line no-undef
        return this.GET_FILTER_ATTRIBUTE.filter_group_id
      },
      set (id) {
        this.SET_FILTER_ATTRIBUTE_ID(id)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_FILTER_ATTRIBUTE_NAME', 'SET_FILTER_ATTRIBUTE_ID']),
    ...mapActions(['FILTER_ATTRIBUTE_REQUEST', 'FILTER_GROUPS_REQUEST', 'UPDATE_FILTER_ATTRIBUTE']),
    editFilterAttribute () {
      this.UPDATE_FILTER_ATTRIBUTE(this.GET_FILTER_ATTRIBUTE)
      this.$router.push({name: 'filter-attribute'})
    }
  },
  mounted () {
    this.FILTER_ATTRIBUTE_REQUEST(this.$route.params.id)
    this.FILTER_GROUPS_REQUEST()
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
