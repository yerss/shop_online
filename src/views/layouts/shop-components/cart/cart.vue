<template>
<section class="cart mx-5">
    <div class="row">
      <div class="col-12">
        <h3 class = "cart__heading text-center mb-4">Корзина покупок</h3>
        <div class="table-responsive">
          <table class = "table table-hover table-borderless" v-if = "CART.length">
            <thead>
            <th>Изображение</th>
            <th>Наименовние товара</th>
            <th>Модель</th>
            <th class="text-center">Кол-во</th>
            <th>Цена</th>
            </thead>
            <tbody>
              <tr v-for = "cart in CART" :key="cart.id" >
                <td>
                  <img :src="cart.image" alt="img">
                </td>
                <td>{{cart.alias}}</td>
                <td>{{cart.name}}</td>
                <td class="text-center">
                  <input type="number" class="text-center" v-model = "count">
                </td>
                <td>{{cart.price}}</td>
              </tr>
              <button class = "btn btn-primary mt-5">Оформить</button>
            </tbody>
          </table>
          <div v-else>
            <span class = "cart__empty">Вы не добавили ни одного продукта в корзину</span>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'cart',
  data: function () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  created () {

  }
}
</script>

<style scoped>
  .cart__heading{
    font-size: 1.9em;
  }
  .cart__heading::after{
    content:'';
    display: block;
    width: 250px;
    height: 2px;
    background-color:#FFD400;
    text-align: center;
    margin: .2em auto 0;
  }
  .cart__empty{
    color:red;
    display: block;
    margin-top: 20px;
    text-align: center;
  }
</style>
