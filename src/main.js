import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Tab from "./components/Tab"
import Tabs from "./components/Tabs"
import { Chrome } from "vue-color"
import ColorPicker from "./components/ColorPicker"
import "./registerServiceWorker"
import "photon"

Vue.config.productionTip = false

Vue.component("colorPicker", ColorPicker)
Vue.component("chromePicker", Chrome)
Vue.component("tabs", Tabs)
Vue.component("tab", Tab)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
