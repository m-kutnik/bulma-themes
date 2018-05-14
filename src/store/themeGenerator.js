const shades = {
  light: {
    black: "#0A0A0A",
    "black-bis": "#121212",
    "black-ter": "#242424",
    "grey-darker": "#363636",
    "grey-dark": "#4A4A4A",
    "grey-light": "#B5B5B5",
    "grey-lighter": "#DBDBDB",
    "white-ter": "#F5F5F5",
    "white-bis": "#FAFAFA",
    white: "#FFFFFF",
  },
  dark: {
    black: "#FFFFFF",
    "black-bis": "#FAFAFA",
    "black-ter": "#F5F5F5",
    "grey-darker": "#DBDBDB",
    "grey-dark": "#B5B5B5",
    "grey-light": "#4A4A4A",
    "grey-lighter": "#363636",
    "white-ter": "#242424",
    "white-bis": "#121212",
    white: "#0A0A0A",
  },
}

export default {
  state: {
    name: "Generated theme",
    author: "BulmaHero",
    theme: "light",
    colors: {
      background: "#FAFAFA",
      primary: "#00D1B2",
      link: "#3273DC",
      info: "#209CEE",
      success: "#23D160",
      warning: "#FFDD57",
      danger: "#FF3860",
    },
    shades: JSON.parse(JSON.stringify(shades.light)),
    customColors: [],
    appearance: {
      borderRadius: 3,
    },
  },
  mutations: {
    SET_THEME(state, value) {
      state.theme = value
    },
    SET_COLOR(state, value) {
      state.colors[value.index] = value.color
    },
    SET_SHADE(state, value) {
      state.shades = JSON.parse(JSON.stringify(shades[value]))
    },
  },
  actions: {
    SET_THEME({ commit, dispatch }, theme) {
      commit("SET_THEME", theme)
      dispatch("SET_SHADE", theme)
      dispatch("SET_COLOR", {
        index: "background",
        color: shades[theme]["white-bis"],
      })
    },
    SET_COLOR({ commit }, obj) {
      commit("SET_COLOR", obj)
    },
    SET_SHADE({ commit }, theme) {
      commit("SET_SHADE", theme)
    },
  },
}
