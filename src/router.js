import Vue from "vue"
import Router from "vue-router"
const Home = () => import("./views/Home.vue")
const About = () => import("./views/About.vue")
const Presets = () => import("./views/Presets.vue")
const ThemeGenerator = () => import("./views/Generator.vue")

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
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    else return { x: 0, y: 0 }
  },
})
