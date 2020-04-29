<template>
  <div class="v-login-register" style="width: 50%; margin: auto">
    <div class="v-login-register__lr">
      <form action="" >
        <div>
          <div class="single-input">
            <label>Username or email address *</label>
            <input type="text" v-model="login.email" class="border">
          </div>
          <div class="single-input">
            <label>Password *</label>
            <input type="password" v-model="login.password" class="border">
          </div>
          <div class="single-input">
            <button class="btn__dark" type="button" @click="signIn">Login</button>
            <!--<div>
                <input type="checkbox">
                <label for="">Remember me</label>
            </div>-->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'signin',
  props: {},
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'SIGN_IN'
    ]),
    signIn () {
      this.SIGN_IN(this.login)
        .then(() => {
        })
    }
  }
}
</script>

<style>

</style>
