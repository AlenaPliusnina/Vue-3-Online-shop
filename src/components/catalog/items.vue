<script setup>

  import { onMounted } from '@vue/runtime-core'
  import { useStore } from 'vuex'
  import { computed, ref, reactive } from 'vue'
  import catalogItem from './item.vue'

  const catalogItemsProps = defineProps({
    catalogItems: { type: Object, required: true }
  })

</script>

<template>
  <div class="wrapper">
    <h1 class="title">Results found: {{ catalogItems.length }}</h1>
    <catalogItem class="item" :id="`item-${idx + 1}`" v-for="(item, idx) in catalogItems" :key="item.id" :itemData="item"/>
  </div>
</template>

<style lang="scss" scoped>

  .wrapper {
    display: grid;
    row-gap: 40px;
    margin-top: 120px;

    @media (max-width: $breakpoint-notebook - 1) {
      max-width: 335px;
      width: 335px;
      margin: 0 auto;
    }

    @media (min-width: $breakpoint-notebook) {
      grid-template-columns: repeat(4, 1fr);
      align-items: end;
      grid-gap: 60px 20px;
      max-width: 1440px;
    }
  }

  .title {
    grid-column: 1/3;
    align-self: flex-start;
  }

  .item {
    @media (max-width: $breakpoint-notebook - 1){
      grid-column: 1;
    }
  }

  @media (min-width: $breakpoint-notebook){
    #item-3 {
      grid-column: 3/5;
      grid-row: 1/3;
    }

    #item-1, #item-2, 
    #item-4, #item-5,
    #item-6, #item-7 {
      max-width: 335px;
    }
  }

</style>

  

