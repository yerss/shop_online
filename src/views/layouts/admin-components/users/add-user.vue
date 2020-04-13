<template>
  <section class="add-user">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class = "mb-4">Добавление пользователя</h5>
            <label for="name" class = "input-label my-2">Имя</label>
            <input type="text" id = "name" class = "form-control input-border-black" placeholder="Введите ваше имя" v-model="user.name">
            <label for="password" class = "input-label my-2">Пароль</label>
            <input type="password" id = "password" class = "form-control input-border-black" placeholder="Введите ваш пароль" v-model = "user.password">
            <label for="password-confirm" class = "input-label my-2">Подтверждение пароля</label>
            <input type="password" id = "password-confirm" class = "form-control input-border-black" placeholder="Подтвердите ваш пароль" v-model = "confirmedPassword">
            <label for="email" class = "input-label my-2">Email</label>
            <input type="email" id = "email" class = "form-control input-border-black" placeholder="Введите свой email" v-model = "user.email">
            <label for="role" class = "input-label my-2">Роль</label>
            <select id="role" class = "form-control input-border-black" v-model = "user.role_id">
              <option v-for = "(role,index) in roles" v-bind:key="role.id"  :value="index + 1">{{role.name}}</option>
            </select>
            <br />
            <button class = "btn btn-sm success btn-outline-primary" @click = "addUser">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'add-user',
  data: function () {
    return {
      user: {
        name: '',
        password: '',
        email: '',
        role_id: ''
      },
      roles: [],
      confirmedPassword: ''
    }
  },
  computed: {
    ...mapGetters(['ROLES'])
  },
  methods: {
    ...mapActions(['GET_ROLES_REQUEST', 'ADD_USER_REQUEST']),
    async addUser () {
      if (this.user.name && this.user.email && this.user.role_id && (this.user.password === this.confirmedPassword && this.user.password)) {
        await this.ADD_USER_REQUEST(this.user)
        this.user.name = ''
        this.user.email = ''
        this.user.password = ''
        this.user.role_id = 1
        this.confirmedPassword = ''
      } else {
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'error',
          title: 'Заполните все поля правильно'
        })
      }
    }
  },
  async mounted () {
    await this.GET_ROLES_REQUEST()
    this.roles = this.ROLES
    if (this.roles) this.user.role_id = 1
  }
}
</script>

<style scoped>
  .input-border-black{
    outline:1px solid rgba(0,0,0,.3);
  }
  .success{
    background-color: #3c8dbc;
  }
</style>
