import axios from "axios";

export const catalogModule = {
  state: () => ({
    catalogItems: [],
  }),
  getters: {
    getCatalogItems(state, getters) {
      return state.catalogItems
    },
  },
  mutations: {
    SET_CATALOG_ITEMS(state, catalogItems) {
      state.catalogItems = catalogItems
    },
  },
  actions: {
    async getCatalogItems({state, commit}) {
      return await axios.get('../../../public/data/catalogData.json')
        .then(res => {
          commit('SET_CATALOG_ITEMS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  namespaced: true
}