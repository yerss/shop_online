<template>
  <header>
    <div class="header-wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-sm-6 order-1 order-lg-1">
            <div class="logo d-flex justify-content-center">
              <img src="../../assets/images/logo-white.png" alt="Logo">
            </div>
          </div>
          <div class= "col-lg-6 col-12 order-3 order-lg-2">
            <div class="header-search">
              <input type="search" class = "header-search-input" placeholder="Поиск...">
              <div class="search-btn">
                <button><font-awesome-icon icon = "search"></font-awesome-icon></button>
              </div>
            </div>
          </div>
          <div class = "col-lg-3 col-sm-6 order-2 order-lg-3">
              <div class="tools">
<!--                <div class="likedProducts">-->
<!--                  <font-awesome-icon icon = "heart"></font-awesome-icon>-->
<!--                </div>-->
<!--                <router-link :to="`/sign`" style="text-decoration: none;">-->
<!--                  <div class="likedProducts">-->
<!--                    <font-awesome-icon icon = "user"></font-awesome-icon>-->
<!--                  </div>-->
<!--                </router-link>-->
                <div class="profile pr-4" @click = "toggleProfileMenu" data-toggle = "dropdownProfile">
                  <font-awesome-icon icon = "user" class = "mr-2" style = "font-size:1.3em;"></font-awesome-icon>
                  <span class="myProfile">Мой аккаунт</span>
                  <font-awesome-icon icon = "chevron-down" class = "ml-1" style = "font-size:.7em;"></font-awesome-icon>
                  <div class="dropdown-profile">
                    <ul class = "dropdown-profile-menu" id= "dropdownProfile">
                      <div v-if="!isAuthenticated">
                        <li class = "dropdown-profile-item">
                          <router-link :to="`/login`" tag="a">
                            Вход
                          </router-link>
                        </li>
                        <li class = "dropdown-profile-item last">
                          <router-link :to="`/register`" tag="a">
                            Регистрация
                          </router-link>
                        </li>
                      </div>
                      <div v-else>
                        <li class = "dropdown-profile-item">
                          <router-link :to="`/profile`" tag="a">
                            Профиль
                          </router-link>
                        </li>
                        <li class = "dropdown-profile-item last" @click="LOG_OUT">
                          <a href="javascript:void(0)">
                            Выйти
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <router-link tag = "div" class="basket" :to = "{name:'cart'}" >
                  <font-awesome-icon icon = "shopping-cart"></font-awesome-icon>
                  <div class="cart-product-count">
                    <span>{{CART.length}}</span>
                  </div>
                </router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav-wrapper">
      <div class="container p-0">
        <div class="row">
          <div class="col-12 p-0">
            <nav>
              <ul class="header-nav">
                <li class = "nav-item">
                  <router-link :to="{name: 'main'}" tag = "a" exact>
                    Главная страница
                  </router-link></li>
                <li class = "nav-item">
                  <router-link :to="{name:'payment'}" tag = "a">
                     Оплата и доставка
                  </router-link></li>
                <li class = "nav-item"><a href="#">О нас</a></li>
                <li class = "nav-item"><router-link :to = "{name:'contact'}" tag="a">Контакты</router-link></li>
                <li class = "nav-item" v-if="(user_role === 'admin') && isAuthenticated">
                  <a href="#">
                    <router-link :to="{name: 'admin'}">
                     Admin Panel
                    </router-link>
                  </a>
                </li>
                <li class = "nav-item" v-if="(user_role === 'moderator')">
                  <a href="#">
                    &lt;!&ndash;<router-link :to="{name: 'my_products'}">&ndash;&gt;
                    My Products
                    &lt;!&ndash;</router-link>&ndash;&gt;
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data: function () {
    return {
      user_role: localStorage.getItem('user_role'),
      isOpen: false
    }
  },
  directives: {
    'font': {
      bind (el, binding) {
        if (binding.value.color) el.style.color = binding.value.color
        if (binding.value.fontSize) el.style.fontSize = binding.value.fontSize
        if (binding.value.marginRight) el.style.marginRight = binding.value.marginRight
        if (binding.value.marginLeft) el.style.marginLeft = binding.value.marginLeft
      }
    }
  },
  methods: {
    ...mapActions([
      'LOG_OUT'
    ]),
    toggleProfileMenu (e) {
      let dropdownId = e.currentTarget.dataset.toggle
      let dropdown = document.getElementById(dropdownId)
      if (dropdown) dropdown.classList.toggle('show')
    }
  },
  computed: {
    ...mapGetters([
      'CART', 'isAuthenticated'
    ])
  }
}
</script>

<style lang = "scss">
   $yellow:#FFE11B;
   $blue: #0B88EE;
   $white:#fff;
  .header-wrapper{
    display: grid;
    align-items: center;
    background-color: $blue;
    min-height:140px;
  }
  .header-search {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr;
      position: relative;
    .header-search-input {
      grid-column: 2/ 12;
      min-height: 42px;
      background-color: #fff;
      width: 100%;
      border-radius: .5em;
      padding: .4em 1.5em;
      font-size: .8em;
    }
    .search-btn {
      position: absolute;
      right:9%;
      top:2.2px;
      background-color: $yellow;
      padding: .4em .7em;
      box-sizing: border-box;
      border-radius: .5em;
      transition: .3s all ease-in;
      &:hover{
        background-color: $blue;
      }
    }
  }
   .tools{
     display: flex;
     justify-content: center;
     align-items: center;
     .profile{
       color:#fff;
       font-weight: bold;
       font-size:.9em;
       cursor:pointer;
       position: relative;
       .dropdown-profile-menu{
         position: absolute;
         top: 138%;
         left:0;
         right: auto;
         background: #fff;
         border-bottom: 2px solid #0B88EE;
         padding: 0 20px;
         min-width: 150px;
         text-align: left;
         box-shadow: 0 2px 13.95px 1.05px rgba(0,0,0,.05);
         z-index: 99;
         display: none;
         .dropdown-profile-item{
           border-bottom: 1px solid rgba(0,0,0,.2);
         }
         .dropdown-profile-item.last{
           border-bottom: none;
         }
         .dropdown-profile-item a{
           display: block;
           width: 100%;
           clear: both;
           font-weight: 400;
           white-space: nowrap;
           background: 0 0;
           border: 0;
           padding: 10px 0;
           color: #7e7e7e;
           line-height: 25px;
           font-size: 13px;
           text-decoration: none;
           transition: all .4s ease-in-out 0s;
           &:hover{
             color:$blue;
           }
         }
       }
       .dropdown-profile-menu.show{
         transition: .4s all;
         display: block;
       }
     }
     .basket{
       box-sizing: border-box;
       border-radius: 1.5em;
       padding: .8em;
       border:1px solid rgba(0,0,0,.3);
       cursor:pointer;
       width: 48px;
       height: 48px;
       background-color:#fff;
       margin-left: .2em;
       position: relative;
       &:hover{
         background-color:$blue;
         border: 1px solid #fff;
         color:#fff;
         transition: .3s all ease-in;
         span{
           color:#000;
         }
       }
     }
     .cart-product-count{
       position: absolute;
       top:-5px;
       right: -5px;
       padding:.1em .5em;
       min-width: 20px;
       min-height: 5px;
       line-height: 1.5;
       font-weight: 500;
       font-size: .8em;
       border-radius: 1.5em;
       background-color: $yellow;
     }
   }
   .header-nav-wrapper{
     box-shadow: 0 0 7px 0 #ccc;
     margin-bottom: 1.5em;
     .header-nav{
       display: flex;
       list-style: none;
       text-align: center;
       margin-bottom:0;
       .nav-item{
         flex:1;
         height: 40px;
       }
       a{
         display: block;
         padding: .5em 0;
         color:rgba(0,0,0,.8);
         text-decoration: none;
         &:hover{
           border-bottom: 2px solid #f5c002;
           min-height: 38px;
           background-color: #f6f8fd;
         }
       }
       a.active{
         border-bottom: 2px solid #f5c002;
       }
     }
   }
</style>
