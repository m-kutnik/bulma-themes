import Vue from "vue"
import Vuex from "vuex"
import themePresets from "./store/themePresets"
import themeGenerator from "./store/themeGenerator"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    themeGenerator,
    themePresets,
  },
})
