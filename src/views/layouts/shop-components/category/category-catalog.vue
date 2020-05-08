<template>
<!--  <div class="container">-->
<!--    <div class="row">-->
<!--      <category-item-->
<!--        v-for="(category,index) in CATEGORY_DETAIL.categories"-->
<!--        :key="index"-->
<!--        :category_data="category"-->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
  <section class="category">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="category-card">
            <div class="category-card__item"
                 v-for="(category,index) in CATEGORY_DETAIL.categories"
                 :key="index"
            >
              <div class="category-card__img">
                <img :src="category.image" alt="img">
              </div>
              <div class="category-card__text">{{category.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import categoryItem from './category-item'
export default {
  name: 'category-catalog',
  components: {
    categoryItem
  },
  computed: {
    ...mapGetters([
      'CATEGORY_DETAIL'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CATEGORY_DETAIL'
    ])
  },
  watch: {
    $route () {
      this.GET_CATEGORY_DETAIL()
    }
  },
  mounted () {
    this.GET_CATEGORY_DETAIL()
  }
}
</script>

<style scoped>
  .category-card{
    display: flex;
    padding:5px 20px;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .category-card__item{
    border:1px solid rgba(0,0,0,.1);
    border-radius: 10px;
    padding:7px 10px;
    box-sizing: border-box;
    width: 20%;
    margin:0 15px 25px;
    cursor: pointer;
  }
  .category-card__img:hover{
    opacity: .5;
  }
  .category-card__item:hover .category-card__text{
    color:#0B88EE;
  }
  .category-card__img{
    padding-bottom: 100%;
    position: relative;
    opacity: 1;
    transition: .3s opacity linear;
  }
  .category-card__img img{
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .category-card__text{
    margin:12px 0 6px;
    font-size: 15px;
    font-weight: 700;
    padding: 10px;
    text-transform: uppercase;
    color:#7e7e7e;
    text-shadow: 0 2px 3px rgba(0,0,0,.5);
    transition: .2s color linear;
  }
</style>
