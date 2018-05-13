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
    theme(state, theme) {
      state.theme = theme
    },
  },
  actions: {},
}
