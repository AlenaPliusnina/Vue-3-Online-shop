<script setup>

  import commonInput from '../common/input.vue'
  import commonSelect from '../common/select.vue'
  import commonButton from '../common/button.vue'

  import { ref, defineEmits } from 'vue'
  import { useStore } from 'vuex'

  const searchQuery = ref('')
  const choosenCategory = ref('')
  const choosenSale = ref ('')

  const categories = ref(['Sneakers', 'Boots', 'Any'])
  const sale = ref(['On Sale', 'Without Sale', 'Any'])

  const store = useStore()

  const emit = defineEmits(['applayFilters'])

  const applayFilters = () => {
    emit('applayFilters', { 
      searchQuery: searchQuery.value, 
      category: choosenCategory.value, 
      sale: choosenSale.value 
    })
  } 

</script>

<template>
  <div class="filters">
    <div class="filter__wrapper">
      <span class="filter__title">Search</span>
      <commonInput  
        @update:value="(value) => searchQuery = value"
        v-model="searchQuery" />
    </div>
    <div class="filter__wrapper">
      <span class="filter__title">Product category</span>
      <commonSelect 
        class="select"
        :options="categories"
        @selectUpdated="(value) => choosenCategory = value"/>
    </div>
    <div class="filter__wrapper">
      <span class="filter__title">Sale</span>
      <commonSelect  
        class="select"
        :options="sale"
        @selectUpdated="(value) => choosenSale = value"/>
    </div>
    <div class="btn__wrapper">
      <commonButton text="Applay" class="btn" @click="applayFilters"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .filters {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    row-gap: 40px;

    @media (max-width: $breakpoint-notebook - 1) {
      max-width: 335px;
      width: 335px;
      margin: 0 auto;
    }

    @media (min-width: $breakpoint-notebook) {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 10px;
    }

    @media (min-width: $breakpoint-desktop) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      max-width: 1440px;
    }
  }

  .filter {

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      
      @media (max-width: $breakpoint-notebook - 1) {
        max-width: 335px;
        width: 335px;
      }

      @media (min-width: $breakpoint-notebook) {
        align-self: end;
      }

      @media (min-width: $breakpoint-desktop) {
        margin-bottom: 0;
        max-width: 335px;
        width: 335px;
      }
    }

    &__title {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;

      margin-bottom: 20px;
    }

  }
  
  .select {
    max-width: 335px;
  }

  .btn {
    @media (min-width: $breakpoint-desktop) {
      max-width: 335px;
      width: 335px;
    }

    &__wrapper {
      @media (max-width: $breakpoint-notebook - 1) {
        max-width: 335px;
        width: 335px;
      }

      @media (min-width: $breakpoint-notebook) {
        align-self: end;
        
      }
    }
  }

  .btn:hover {
    background-color: $orange;
    border: 1px solid $orange;
  }

</style>