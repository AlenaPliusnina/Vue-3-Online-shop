
import { createStore } from "vuex";
import { catalogModule } from "./modules/catalog"
import { basketModule } from './modules/basket'

export const store = createStore({
    modules: {
      catalog: catalogModule,
      basket: basketModule
    }
})