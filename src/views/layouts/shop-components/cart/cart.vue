<template>
<section class="cart mx-5">
    <div class="container">
        <div class="data">
          <div class="row">
            <div class="col-lg-8">
              <div class="title">Корзина</div>
              <div class="products">
                <div class="products__item" v-if = "CART.length">
                  <div class="product__header">
                    <div class="products__titles">
                      <ul class="list">
                        <li class="list-item">Товар</li>
                        <li class="list-item">Кол - во</li>
                        <li class="list-item"></li>
                        <li class="list-item">Цена</li>
                      </ul>
                    </div>
                  </div>
                  <div class="products__inner">
                    <div class="products__content">
                      <ul class="list">
                        <li class="list-item">
                          <div class="list-item__img">
                            <img src="https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/a/9/a94b45e151407d7f4f5366b86866826fa88137e6_9505290387486.jpg" alt="">
                          </div>
                          <div class="list-item__text">
                            Смартфон GSM Samsung SM-A515FZKWSKZ THX-6.5-48-4 Galaxy A51 128Gb Black
                          </div>
                        </li>
                        <li class="list-item">
                          <input type="number" class = "form-control" value = "1">
                        </li>
                        <li class="list-item">
                          <span><font-awesome-icon class = "list-item__icon-1" icon = "eye" /></span>
                          <span><font-awesome-icon class = "list-item__icon-2" icon = "trash-alt"/></span>
                        </li>
                        <li class="list-item">15400</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-else class = "empty">
                  Корзина пуста
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="title">Оплата</div>
              <div class="sumaries">
                <div class="sumaries__inner py-1">
                  <div class="sumaries__text">Количество товаров:</div>
                  <div class="sumaries__count">123</div>
                </div>
                <div class="sumaries__inner pt-2 pb-1">
                  <div class="sumaries__text">Сумма к оплате</div>
                  <div class="sumaries__price">13556</div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button class="btn btn-success w-100 mt-4" :disabled="CART.length">Оформить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</section>
</template>

<script>
import appBreadcrumbs from '../breadcrumbs'
import {mapGetters} from 'vuex'

export default {
  name: 'cart',
  data: function () {
    return {
      count: 0,
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'Корзина',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  components: {
    appBreadcrumbs
  },
  created () {

  }
}
</script>

<style scoped>
  .cart{
    padding-bottom: 80px;
  }
 .title{
   font-size: 25px;
   font-weight: 700;
   color:#000;
   word-spacing: 2px;
   padding-bottom: 10px;
 }
  .products__titles .list-item{
    text-align: left;
  }
  .products__item{
    border:1px solid rgba(0,0,0,.1);
    border-radius:5px;
    padding:15px 24px;
    min-height: 180px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,.2);
    margin-bottom:15px;
  }
  .products__content{
    padding: 15px 0 5px;
    min-height: 100px;
  }
  .products__item:last-child{
    border-bottom: none;
  }
  .list{
    display: flex;
    list-style: none;
    align-items: center;
  }
  .list-item{
    width: 20%;
    font-weight: 500;
    font-size: 15px;
    color:#a7a7a7;
    text-transform: uppercase;
    padding:0 20px;
    text-align: center;
    line-height: 1.2;
  }
  .list-item:first-child{
    width: 40%;
    position: relative;
    text-align: left;
  }
  .list-item:last-child{
    text-align: left;
  }
  .list-item__img{
    position:absolute;
    left:20px;
    top:0;
  }
  .list-item__img img{
    max-width: 60px;
    height: auto;
  }
  .list-item__text{
    padding: 0 0 0 90px;
    font-size: 11px;
  }
  .list-item__icon-1{
    color:darkblue;
    margin-right:10px;
    cursor: pointer;
  }
  .list-item__icon-2{
    color:orangered;
    margin-right: 15px;
    cursor: pointer;
  }
  .sumaries{
    padding:15px 24px;
    border:1px solid rgba(0,0,0,.1);
    border-radius:5px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,.3);
    min-height: 180px;
  }
  .sumaries__inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sumaries__text{
    color:#000;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .sumaries__count,.sumaries__price{
    color:#000;
    font-size: 15px;
  }
  .empty{
    padding:15px 24px;
    border:1px solid rgba(0,0,0,.1);
    border-radius:5px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,.3);
    min-height: 180px;
    text-align: center;
    font-size: 15px;
    font-style: italic;
  }
</style>
