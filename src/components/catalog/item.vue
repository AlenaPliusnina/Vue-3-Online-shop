<script setup>

  import buttonAdd from '../common/buttonAdd.vue'
  import { useStore } from 'vuex'
  import { onMounted, watch, ref } from 'vue'

  const catalogItemProps = defineProps({
    itemData: { type: Object, required: true }
  })

  const store = useStore()

  const added = ref(false)

  watch(() => store.getters['basket/getBasketItems'], (value) => {
    toggleAddBtn(value)
  })

  const toggleAddBtn = (value) => {
    let foundValue = value.find(item => item.id == catalogItemProps.itemData.id)
    added.value =  foundValue !== undefined ? true : false
  }

  const setBasketItems = (items) => {
    store.commit('basket/SET_BASKET_ITEMS', items)
  }

  const addToBasket = () => {
    added.value = !added.value
  }

  const addOrRemoveItemInBasket = (itemData) => {
    addToBasket()

    if (localStorage.getItem("basketItems") !== null) {
      
      let items = JSON.parse(localStorage.getItem("basketItems"))
      let newItems = []

      if (items && items.some(val => val.id === itemData.id)) {
        newItems = items.filter(item => item.id !== itemData.id)
      } else if (items) {
        items.push(itemData)
        newItems = items
      } else {
        newItems.push(itemData) 
      }

      localStorage.setItem("basketItems", JSON.stringify(newItems))
      setBasketItems(newItems)

    } else {
      localStorage.setItem("basketItems", JSON.stringify([itemData]))
      setBasketItems([itemData])
    }
  }

  onMounted(() => {
    let itemsInBasket = store.getters['basket/getBasketItems']
    toggleAddBtn(itemsInBasket)
  })

</script>

<template>
  <div class="item">
    <div class="img-wrapper">
      <img class="img" :src="itemData.img">
      <div class="discount" v-if="itemData.discount">Sale -{{ itemData.discount }}%</div>
    </div>
    <div class="title">{{ itemData.title }}</div>
    <div class="price__wrapper">
      <div class="price">${{ itemData.fullPrice }}</div>
      <div class="price" v-if="itemData.discountPrice">${{ itemData.discountPrice }}</div>
    </div>
    <buttonAdd class="btnAdd" @click="addOrRemoveItemInBasket(itemData)" :added="added"/>
  </div>
</template>

<style lang="scss" scoped>

  .img {
    max-width: 100%;
  }

  .title {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;

    margin-top: 15px;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;

    margin-top: 5px;

    &__wrapper {
      display: flex;
    }

    &__wrapper > div:nth-child(2) {
      margin-left: 10px;
      color: $gray;
      text-decoration: line-through;
      font-weight: 500;
    }
  }

  .btnAdd {
    margin-top: 15px;
  }

  .img-wrapper {
    position: relative;
  }

  .discount {
    position: absolute;
    top: 25px;
    right: 25px;

    background-color: $orange;

    color: white;
    padding: 12px 20px;

    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  
</style>