import { useStore } from 'vuex'
import { watch, ref } from 'vue'

export function useWatchStoreBasketItems() {

  const store = useStore()

  const count = ref(0)
  const basketItemsValue = ref([])

  watch(() => store.getters['basket/getBasketItems'], (value) => {
    count.value = value.length
    basketItemsValue.value = value
  })

  return { count, basketItemsValue }
}