<script setup>

  import { onMounted } from '@vue/runtime-core'
  import basketItem from './item.vue'
  import { ref } from 'vue'
  import { useWatchStoreBasketItems } from '../../composables/useWatchStoreBasketItems'

  const { basketItemsValue } = useWatchStoreBasketItems()

</script>

<template>
  <div class="basket-items" v-if="basketItemsValue">
    <basketItem v-for="item in basketItemsValue" :key="item.key" :item="item"/>
  </div>
</template>

<style lang="scss" scoped>

  .basket-items {
    margin-top: 41px;
  }
  
</style>