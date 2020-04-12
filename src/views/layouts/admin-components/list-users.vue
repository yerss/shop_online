<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title mb-4">Users</h5>
          <div class="table-responsive">
            <table class="table center-aligned-table table-hover">
              <thead>
              <tr>
                <th class="border-bottom-0">ID</th>
                <th class="border-bottom-0">Name</th>
                <th class="border-bottom-0">Email</th>
                <th class="border-bottom-0">Type</th>
                <th class="border-bottom-0">Registered At</th>
                <th class="border-bottom-0"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="user in USERS" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role.name}}</td>
                <td>{{user.created_at}}</td>
                <td>
                  <font-awesome-icon icon="edit" class="blue pointer"/>
                  /
                  <a @click = "DELETE_USER(user.id)">
                    <font-awesome-icon icon="trash-alt" class="red pointer"/>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div></template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'list-users',
  components: {
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'USERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERS',
      'DELETE_USER'
    ])
  },
  mounted () {
    this.GET_USERS()
  }
}
</script>

<style scoped>

</style>
