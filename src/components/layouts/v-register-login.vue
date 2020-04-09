<template>
    <div class="v-login-register">
        <div class="v-login-register__lr">
            <form action="">
                <div>
                    <div class="single-input">
                        <label for="">Username or email address *</label>
                        <input type="text">
                    </div>
                    <div class="single-input">
                        <label for="">Password *</label>
                        <input type="text">
                    </div>
                    <div class="single-input">
                        <button class="btn__dark" type="submit">Login</button>
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
                        <input type="text">
                    </div>
                    <div class="single-input">
                        <label for="">Email address</label>
                        <input type="text">
                    </div>
                    <div class="single-input">
                        <label for="">Password</label>
                        <input type="password">
                    </div>
                    <div class="single-input">
                        <button class="btn__dark" type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-register-login",
        props:{},
        data(){
            return {}
        }
    }
</script>

<style lang="scss">

</style>