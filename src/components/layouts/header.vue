<template>
   <div class = "header">
      <div class="header-wrapper">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-lg-3 col-md-6 col-sm-6 order-1 order-lg-1">
                  <div class="header-logo">
                     <img src="../../assets/logo-white.png" alt="logo">
                  </div>
               </div>
               <div class="col-lg-6 col-12 order-3 order-lg-2 mt-4 mt-lg-0">
                  <div class="header-search">
                     <div class="dropdown-category">
                        <span>All categories</span>
                        <i class="fas fa-chevron-down" v-font = "{fontSize:'10px',marginLeft:'1.1em'}"></i>
                     </div>
                     <input type="text" placeholder="Enter your search key" />
                     <button class = "btn btn-square btn-yellow header-btn"><i class="fas fa-search" v-font = "{color:'rgba(0,0,0,.8)',fontSize: '17px'}"></i></button>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6 order-2 order-lg-3 justify-content-around justify-content-sm-start d-flex align-items-center">
                  <div class="account-box">
                     <button @click = "isOpen = !isOpen">
                        <i class = "fas fa-user" v-font = "{fontSize:'20px',marginRight:'.4em'}"></i>
                        <span>My Account</span>
                        <i class="fas fa-chevron-down" v-font = "{fontSize:'10px',marginLeft:'.4em'}"></i>
                     </button>
                     <div class="account-dropdown" v-show = "isOpen">
                        <ul>
                           <li><a href="#">My account</a></li>
                           <li><a href="#">My wishlist</a></li>
                           <li><a href="#">Checkout</a></li>
                           <li>
                              <router-link :to="{name: 'sign'}">
                                 Sign in
                              </router-link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div class="cart">
                        <span>
                           <i class="fas fa-cart-plus" v-font = "{fontSize:'22px'}"></i>
                        </span>
                     <span class="total">2</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="header-nav">
               <nav>
                  <ul>
                     <li>
                        <a href="#">
                           <router-link :to="{name: 'catalog'}">
                              Home
                           </router-link>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <router-link :to="{name: 'catalog'}">
                              Shop
                           </router-link>
                        </a>
                     </li>
                     <li><a href="#">About us</a></li>
                     <li><a href="#">Contact</a></li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
      export default {
         data : function(){
            return {
               isOpen:false
            }
         },
         directives:{
            'font':{
               bind(el,binding){
                  if(binding.value.color) el.style.color = binding.value.color;
                  if(binding.value.fontSize) el.style.fontSize = binding.value.fontSize;
                  if(binding.value.marginRight)el.style.marginRight = binding.value.marginRight;
                  if(binding.value.marginLeft)el.style.marginLeft = binding.value.marginLeft;
               }
            }
         }
      }
</script>

<style lang = "scss">
   $yellow:#FFE11B;
   $blue: #0B88EE;
   $white:#fff;
      .header-wrapper{
         background-color: $blue;
         min-height: 140px;
         width: 100%;
         padding:2.2em 0;
         box-sizing: border-box;
         display: flex;
         align-items: center;
         .header-search{
            border-radius: .5em;
            background-color: #fff;
            width: 94%;
            margin:0 auto;
            min-height: 48px;
            position: relative;
            .dropdown-category{
               display: flex;
               align-items: center;
               position:absolute;
               left:0;
               width: 30%;
               top:0;
               bottom: 0;
               height: 3.3em;
               color:rgba(0,0,0,.5);
               font-size: .9rem;
               cursor:pointer;
               padding:0 1em;
               box-sizing: border-box;
            }
            input{
               position: absolute;
               top:0;
               right: 0;
               bottom: 0;
               width: 70%;
               border:transparent;
               padding-right:3.4rem;
               padding-left: 1em;
               border-radius: .5em;
               outline: none;
               box-sizing: border-box;
               color:rgba(0,0,0,.5);
               font-size: .9rem;
            }
            .btn{
               border-radius: .5em;
               padding: .7em .8em;
               background-color:$yellow;
               position: absolute;
               right: .3em;
               top:7%;
               bottom:7%;
               outline: none;
               &:hover{
                  background-color: $blue;
                  transition: .5s background-color ease;
               }
            }
         }
            .account-box{
               margin-right: 1.5em;
               position: relative;
               button{
                  background-color: transparent;
                  border:none;
                  color:$white;
                  outline: none;
                  font-weight: 500;
               }
               .account-dropdown{
                  position: absolute;
                  top:1em;
                  left:0;
                  width: 150px;
                  ul {
                     list-style: none;
                     background-color: $white;
                     padding:0 .6em ;
                     border-bottom: 2px solid $blue;
                     a {
                        text-decoration: none;
                        display: block;
                        padding:1em;
                        color:#7e7e7e;
                        text-align: left;
                        font-size: .8em;
                        border-bottom: 1px solid rgba(0,0,0,.1);
                        &:hover{
                           color:$blue;
                           transition: .5s all;
                        }
                     }
                  }
               }
            }
            .cart{
               height: 48px;
               width: 50px;
               border-radius:1.5em;
               background-color: $white;
               box-sizing: border-box;
               cursor: pointer;
               position: relative;
               &:hover{
                  background-color: $blue;
                  border: 1px solid $white;
                  transition: .7s all;
                  i {
                     color:$white;
                  }
               }
               span{
                  line-height: 55px;
               }
               span.total{
                  line-height: 1.5;
                  display: inline-block;
                  width: 23px;
                  height: 23px;
                  border-radius: 1.5em;
                  position: absolute;
                  top:-4px;
                  right: -4px;

                  background-color: $yellow;
                  font-size: 0.9em;
               }
            }
         }

         .header-nav {
            width: 100%;
            text-align: left;
            ul {
               padding: .2em 0;
               list-style: none;
               min-height: 24px;
               box-sizing: border-box;
               background-color: $white;

               li {
                  display: inline-block;
               }

               li + li {
                  margin-left: 4.5em;
               }

               a {
                  display: block;
                  text-decoration: none;
                  color: #000;
                  font-weight: bold;
                  text-transform: uppercase;
                  padding: .2em .4em;
                  box-sizing: border-box;
               }
            }
         }
</style>
