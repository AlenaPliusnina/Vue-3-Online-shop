<script setup>

  import checkoutBtn from '../common/checkoutBtn.vue'
  import commonLink from '../common/link.vue'
  import basketItems from './items.vue'
  import { useWatchStoreBasketItems } from '../../composables/useWatchStoreBasketItems'
  import { useStore } from 'vuex'
  import { ref } from 'vue'

  const { count, basketItemsValue } = useWatchStoreBasketItems()
  const store = useStore()
  const subtotalPrice = ref(0)
  const sale = ref (0)

  const clearBasket = () => {
    localStorage.removeItem('basketItems')
    store.commit('basket/SET_BASKET_ITEMS', [])
  }

  const getSubtotalPrice = () => {
    let value = 0

    basketItemsValue.value.forEach(item => {
      value += Number(item.fullPrice)
    })

    subtotalPrice.value = value

    return parseFloat(value).toFixed(2)
  }

  const getSale = () => {
    let value = 0

    basketItemsValue.value.forEach(item => {
      if (item.discountPrice) { value += item.discountPrice }
    })

    sale.value = parseFloat(value, 2).toFixed(2)

    return parseFloat(value).toFixed(2)
  }

  const getTotalPrice = () => {
    return parseFloat(subtotalPrice.value - sale.value).toFixed(2)
  }

</script>

<template>
  <div class="basket__wrapper">
    <div class="basket">
      <div class="basket__header">
        <span>Profile</span>
        <span @click="openBasket">Basket({{ count }})</span>
      </div>
      <hr class="basket__line">
      <div class="basket__inner">
        <div class="basket__title">TOTAL</div>
        <div class="amount-wrapper">
          <div>
            <span>Subtotal:</span>
            <span>${{ getSubtotalPrice() }}</span>
          </div>
          <div>
            <span>Sale:</span>
            <span>${{ getSale() }}</span>
          </div>
          <div>
            <span>Content:</span>
            <commonLink text="Remove all" @click="clearBasket"/>
          </div>
        </div>
      </div>
      <hr class="basket__line">
      <div class="basket__inner">
        <div class="basket__total">
          <span>Order Total:</span>
          <span>${{ getTotalPrice() }}</span>
        </div>
      </div>
      <hr class="basket__line">
      <basketItems/>
      <checkoutBtn/>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

  .basket {
    width: 100%;
    max-width: 445px;
    z-index: 2;
    background-color: white;
    position: absolute;
    right: 0;

    &__wrapper {
      z-index: 2;
      position: relative;
      max-width: 1440px;
      margin: 0 auto;
    }

    &__header {
      display: flex;
      justify-content: end;
      margin-right: 20px;
      padding-top: 42px;
      padding-bottom: 42px;

      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }

    &__header > span:nth-child(1) {
      margin-right: 43px;
    }

    &__header > span:nth-child(2) {
      color: $orange;
    }

    &__header > span {
      cursor: pointer;
    }

    &__header > span:hover {
      color: $orange;
    }

    &__inner {
      padding-left: 41px;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;

      margin-bottom: 30px;
    }

    &__line {
      border: 1px solid $light-gray;
    }

    &__total {
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;

      padding-top: 20px;
      padding-bottom: 20px;

      display: flex;
      justify-content: space-between;

      min-width: 315px;
      width: 315px;
    }
  }

  .amount-wrapper {
    max-width: 315px;
    width: 315px;
  }

  .amount-wrapper > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
  }

</style>