<template>
  <section class="add-user">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class = "mb-4">Добавление пользователя</h5>
            <label for="name" class = "input-label my-2">Имя</label>
            <input type="text" id = "name" class = "form-control input-border-black" placeholder="Введите ваше имя" v-model="name">
            <label for="password" class = "input-label my-2">Пароль</label>
            <input type="password" id = "password" class = "form-control input-border-black" placeholder="Введите ваш пароль" v-model = "password">
            <label for="password-confirm" class = "input-label my-2">Подтверждение пароля</label>
            <input type="password" id = "password-confirm" class = "form-control input-border-black" placeholder="Подтвердите ваш пароль" v-model = "confirmePassword">
            <label for="email" class = "input-label my-2">Email</label>
            <input type="email" id = "email" class = "form-control input-border-black" placeholder="Введите свой email" v-model = "email">
            <label for="role" class = "input-label my-2">Роль</label>
            <select id="role" class = "form-control input-border-black" v-model = "role_id">
              <option v-for = "(role,index) in ROLES" v-bind:key="role.id"  :value="index + 1">{{role.name}}</option>
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
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  name: 'add-user',
  computed: {
    ...mapGetters(['ROLES', 'USER']),
    name: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-undef
        return this.USER.name
      },
      set (name) {
        this.SET_USER_NAME(name)
      }
    },
    confirmePassword: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-unused-expressions
        this.USER.confirmPassword
      },
      set (confirmePassword) {
        this.SET_USER_CONFIRM_PASSWORD(confirmePassword)
      }
    },
    password: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-undef
        return this.USER.password
      },
      set (password) {
        this.SET_USER_PASSWORD(password)
      }
    },
    email: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-undef
        return this.USER.email
      },
      set (email) {
        this.SET_USER_EMAIL(email)
      }
    },
    role_id: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-undef
        return this.USER.role_id
      },
      set (role) {
        this.SET_USER_ROLE(role)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_USER_NAME', 'SET_USER_EMAIL', 'SET_USER_PASSWORD', 'SET_USER_ROLE', 'SET_USER_CONFIRM_PASSWORD']),
    ...mapActions(['GET_ROLES_REQUEST', 'ADD_USER_REQUEST', 'GET_USERS']),
    addUser () {
      this.ADD_USER_REQUEST(this.USER)
    }
  },
  mounted () {
    this.GET_ROLES_REQUEST()
  },
  created () {
    this.SET_USER_ROLE(1)
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
