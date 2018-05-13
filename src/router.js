import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home"
import About from "./views/About"
import Presets from "./views/Presets"
import ThemeGenerator from "./views/Generator"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/presets",
      name: "presets",
      component: Presets,
    },
    {
      path: "/generator",
      name: "generator",
      component: ThemeGenerator,
    },
  ],
})
