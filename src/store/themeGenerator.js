export default {
  state: {
    name: "Generated theme",
    author: "BulmaHero",
    theme: "light",
    colors: {
      primary: "#00D1B2",
      link: "#3273DC",
      info: "#209CEE",
      success: "#23D160",
      warning: "#FFDD57",
      danger: "#FF3860",
    },
  },
  mutations: {
    SET_THEME(state, value) {
      state.theme = value
    },
    SET_COLOR(state, value) {
      state.colors[value.index] = value.color
    },
  },
  actions: {
    SET_THEME({ commit }, theme) {
      commit("SET_THEME", theme)
    },
    SET_COLOR({ commit }, obj) {
      commit("SET_COLOR", obj)
    },
  },
}
