<template>
  <div class="v-login-register" style="width: 50%; margin: auto">
    <div class="v-login-register__lr">
      <form action="">
        <div>
          <div class="single-input">
            <label>Username</label>
            <input type="text" v-model="register.name" class="border">
          </div>
          <div class="single-input">
            <label>Email address</label>
            <input type="text" v-model="register.email" class="border">
          </div>
          <div class="single-input">
            <label>Password</label>
            <input type="password" v-model="register.password" class="border">
          </div>
          <div class="single-input">
            <button class="btn__dark" type="button" @click="signUp">Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'signup',
  props: {},
  data () {
    return {
      register: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'SIGN_UP'
    ]),
    signUp () {
      this.SIGN_UP(this.register)
        .then(() => {
        })
    }
  }
}
</script>

<style scoped>

</style>
