<script setup>
  import catalogFilters from './filters.vue'
  import catalogItems from './items.vue'

  import { useStore } from 'vuex'
  import { onMounted, computed, ref } from 'vue'

  const store = useStore()
  const searchQuery = ref('')
  const choosenCategory = ref('')
  const choosenSale = ref ('')

  const storeCatalogItems = computed(() => {

    const items = store.getters['catalog/getCatalogItems']
    const searchedItems = items.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    const searchedItemsWithCategory = choosenCategory.value && choosenCategory.value !== 'Any' ? searchedItems.filter(item => item.category == choosenCategory.value.toLowerCase()) : searchedItems

    let searchedItemsWithCategoryAndSale = searchedItemsWithCategory

    if (choosenSale.value && choosenSale.value === 'On Sale') {
      searchedItemsWithCategoryAndSale = searchedItemsWithCategory.filter(item => item.discount !== undefined)
    } else if (choosenSale.value && choosenSale.value === 'Without Sale') {
      searchedItemsWithCategoryAndSale = searchedItemsWithCategory.filter(item => item.discount === undefined)
    }

    return searchedItemsWithCategoryAndSale
  })

  const applayFilters = (data) => {
    searchQuery.value = data.searchQuery
    choosenCategory.value = data.category
    choosenSale.value = data.sale
  }

  onMounted(() => {
    store.dispatch('catalog/getCatalogItems')
  })

  onMounted(() => {
    if (localStorage.getItem('basketItems') !== null) {
      store.commit('basket/SET_BASKET_ITEMS', JSON.parse(localStorage.getItem('basketItems')))
    } 
  })

</script>

<template>
  <div class="catalog__wrapper">
    <catalogFilters @applayFilters="applayFilters"/>
    <catalogItems :catalogItems="storeCatalogItems" class="catalog__items"/>
  </div>
</template>

<style lang="scss" scoped>

  .catalog {

    &__wrapper {
      padding-left: 20px;
      padding-right: 20px;
      margin: 0 auto 120px auto;

      max-width: 1440px;
    }

  }

</style>
