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
              <div class="tools ml-sm-5">
                <div class="likedProducts">
                  <font-awesome-icon icon = "heart"></font-awesome-icon>
                </div>
                <router-link :to="`/sign`" style="text-decoration: none;">
                  <div class="likedProducts">
                    <font-awesome-icon icon = "user"></font-awesome-icon>
                  </div>
                </router-link>
                <div class="basket">
                  <font-awesome-icon icon = "shopping-cart"></font-awesome-icon>
                  <div class="cart-product-count">
                    <span>{{CART.length}}</span>
                  </div>
                </div>
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
                <li class = "nav-item active">
                  <router-link :to="{name: 'main'}" tag = "a">
                    Главная страница
                  </router-link></li>
                <li class = "nav-item">
                  <router-link :to="`/`" tag = "a">
                     Магазин
                  </router-link></li>
                <li class = "nav-item"><a href="#">О нас</a></li>
                <li class = "nav-item"><router-link :to = "{name:'contact'}" tag="a">Контакты</router-link></li>
                <li class = "nav-item" v-if="(user_role === 'admin')">
                  <a href="#">
                    <router-link :to="{name: 'admin'}">
                     Admin Panel
                    </router-link>
                  </a>
                </li>
                <li class = "nav-item" v-if="(user_role === 'moderator')">
                  <a href="#">
                    &lt;!&ndash;<router-link :to="{name: 'my_products'}">&ndash;&gt;
                    MY PRODUCTS
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
import {mapGetters} from 'vuex'

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
  computed: {
    ...mapGetters([
      'CART'
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
     .likedProducts,.basket{
       box-sizing: border-box;
       padding: .8em;
       border:1px solid rgba(0,0,0,.3);
       cursor:pointer;
       height: 48px;
       &:hover{
         background-color: rgba(0,0,0,.8);
         color:#fff;
         transition: .3s all ease-in;
         span{
           color:#000;
         }
       }
     }
     .basket{
       margin-left: .2em;
       position: relative;
     }
     .cart-product-count{
       position: absolute;
       top:-9px;
       right: -9px;
       padding:.15em .7em;
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
         padding: .5em 0;
         flex:1;
         height: 40px;
         &:hover{
           border-bottom: 2px solid #f5c002;
           min-height: 38px;
           background-color: #f6f8fd;
         }
       }
       a{
         display: block;
         color:rgba(0,0,0,.8);
         text-decoration: none;
       }
     }
   }
</style>
