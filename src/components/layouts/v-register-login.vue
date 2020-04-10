<template>
    <div class="v-login-register">
        <div class="v-login-register__lr">
            <form action="" >
                <div>
                    <div class="single-input">
                        <label for="">Username or email address *</label>
                        <input type="text" v-model="login.username">
                    </div>
                    <div class="single-input">
                        <label for="">Password *</label>
                        <input type="text" v-model="login.password">
                    </div>
                    <div class="single-input">
                        <button class="btn__dark" type="submit" @click="signIn">Login</button>
                        <!--<div>
                            <input type="checkbox">
                            <label for="">Remember me</label>
                        </div>-->
                    </div>
                </div>
            </form>
        </div>
        <div class="v-login-register__lr">
            <form action="">
                <div>
                    <div class="single-input">
                        <label for="">Username</label>
                        <input type="text" v-model="register.name">
                    </div>
                    <div class="single-input">
                        <label for="">Email address</label>
                        <input type="text" v-model="register.email">
                    </div>
                    <div class="single-input">
                        <label for="">Password</label>
                        <input type="password" v-model="register.password">
                    </div>
                    <div class="single-input">
                        <button class="btn__dark" type="submit" @click="signUp">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "v-register-login",
        props:{},
        data(){
            return {
                login:{
                    username:'',
                    password:''
                },
                register:{
                    name:'',
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            ...mapActions([
                'SIGN_UP',
                'SIGN_IN'
            ]),
            signUp() {
                this.SIGN_UP(this.register)
                    .then(()=>{
                        window.location.href = '/'
                    })
            },
            signIn(){
                this.SIGN_IN(this.login)
                    .then(()=>{
                        window.location.href = '/'
                    })
            }
        }
    }
</script>

<style lang="scss">

</style>