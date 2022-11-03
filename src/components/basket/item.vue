<script setup>

  import { defineProps } from 'vue'
  import commonLink from '../common/link.vue'
  import { useStore } from 'vuex'

  const basketItemProps = defineProps({
    item: { type: Object, required: true }
  })

  const store = useStore()

  const removeBasketItem = (id) => {
    let items = JSON.parse(localStorage.getItem('basketItems'))
    localStorage.setItem('basketItems', JSON.stringify(items.filter(value => value.id !== id)))
    store.commit('basket/SET_BASKET_ITEMS', items.filter(value => value.id !== id))
  }

</script>

<template>
  <div class="basket-item__wrapper">
    <img class="basket-item__img" :src="item.img">
    <div class="basket-item__description">
      <div>
        <div class="basket-item__title">{{ item.title.toUpperCase() }}</div>
        <div class="basket-item__price">${{ item.fullPrice }}</div>
      </div>
      <div>
        <commonLink class="basket-item__remove-link" text="Remove" @click="removeBasketItem(item.id)"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .basket-item {

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      margin-bottom: 40px;
      padding-left: 41px;
    }

    &__title {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;

      color: $medium-gray;

      max-width: 180px;
    }

    &__img {
      max-width: 100px;
      margin-right: 10px;
    }

    &__description {
      display: flex;
      flex-wrap: wrap;
      max-width: 180px;
      width: 180px;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;
    }

    &__price {
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
    }
  }


</style>