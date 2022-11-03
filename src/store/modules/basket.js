
export const basketModule = {
  state: () => ({
    basketItems: []
  }),
  getters: {
    getBasketItems(state) {
      return state.basketItems
    },
  },
  mutations: {
    SET_BASKET_ITEMS(state, basketItems) {
      state.basketItems = basketItems
    },
  },
  namespaced: true
}