<script setup>

  import basketSection from './basket/section.vue'
  import { ref, defineEmits } from 'vue'
  import { useWatchStoreBasketItems } from '../composables/useWatchStoreBasketItems'

  const open = ref(false)
  const { count } = useWatchStoreBasketItems()
  const emit = defineEmits(['openBasket', 'closeBasket'])

  const openBasket = () => {
    open.value = true
    emit('openBasket')
  }

  const closeBasket = () => {
    open.value = false
     emit('closeBasket')
  }

</script>

<template>
  <div class="header">
    <div class="header__inner">
      <div class="menu-items menu-items__left">
        <h2>S—SHOP</h2>
        <span>Catalog</span>
      </div>
      <div class="menu-items">
        <span>Profile</span>
        <span @click="openBasket">Basket({{ count }})</span>
      </div>
    </div>
    <hr class="header__line">
    <div @click.self="closeBasket" class="basketSection" :style="{ 'display': open ? 'block' : 'none' }">
      <basketSection/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .header {
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 80px;

    &__inner {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: start;

      max-width: 330px;
      padding-top: 39px;
      padding-bottom: 39px;
      margin: 0 auto;

      @media (min-width: $breakpoint-mobile) {
        justify-content: space-between;
        flex-wrap: nowrap;
        max-width: 1440px;
      }
    }

    &__line {
      border: 1px solid $light-gray;
    }
  }

  .header > span {
    color: $orange;
    cursor: pointer;
    
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }

  .menu-items {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 18px;
    font-weight: 400;
    line-height: 22px;

    &__left {
      width: 222px;
      margin-bottom: 20px;

      @media (min-width: $breakpoint-mobile) {
        margin-bottom: 0;
      }

      @media (min-width: $breakpoint-notebook) {
        width: 422px;
      }
    }
  }

  .menu-items > span:nth-child(1) {
    margin-right: 43px;
  }

  .menu-items > span:hover {
    color: $orange;
    cursor: pointer;
  }

  .basketSection {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    z-index: 1;
  }

</style>