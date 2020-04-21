<template>
    <div class="content">
      <div class="content-top">
        <div class="content-left"></div>
        <div class="content-right"></div>
      </div>
      <div class="content-bottom">
        <div class="bottom-item">
          <font-awesome-icon icon="award" class="pointer fa-3x mx-3"/>
          <span><b>Крупнейшая торговая<br> площадка Казахстана</b></span><span class="bottom-item__divider"></span></div>
        <div class="bottom-item">
          <font-awesome-icon icon="shopping-cart" class="pointer fa-3x mx-3"/>
          <span><b>Можно купить все</b><br>10&nbsp;966&nbsp;353 товаров и услуг</span><span
          class="bottom-item__divider"></span></div>
        <div class="bottom-item">
          <font-awesome-icon icon="dollar-sign" class="pointer fa-3x mx-3"/>
          <span><b>Лучшие цены</b><br>Найдите дешевле</span><span class="bottom-item__divider"></span></div>
        <div class="bottom-item">
          <font-awesome-icon icon="thumbs-up" class="pointer fa-3x mx-3"/>
          <span><b>Проверенные продавцы</b><br>Рейтинг по отзывам</span></div>
      </div>
  </div>
</template>

<style scoped>
  .content {
    z-index: -1;
    position: relative;
    flex: 5;
    max-width: 70vw;
  }

  .content-top {
    display: flex;
    flex: 2;
  }

  .content-bottom {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 20px 25px;
  }

  .content-right {
    background: url("~@/assets/images/bg-2.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    flex: 1;
  }

  .content-left {
    margin: 0 10px;
    flex: 2;
    background: url("~@/assets/images/bg-1.jpeg") no-repeat;
    background-size: cover;
    height: 547px;
  }

  .bottom-item__divider {
    padding: 30px;
    height: 60px;
    border-right: 1px solid #ccc;
  }

  .bottom-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
  export default {
    name: 'content'
  }
</script>
