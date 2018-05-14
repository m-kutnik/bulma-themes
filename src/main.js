import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ColorPicker from "./components/ColorPicker"
import Preview from "./components/Preview"
import Tabs from "./components/Tabs"
import Tab from "./components/Tab"
import { Chrome } from "vue-color"
import "simplebar/dist/simplebar.css"
import "./registerServiceWorker"
import "simplebar"
import "photon"

Vue.config.productionTip = false

Vue.component("colorPicker", ColorPicker)
Vue.component("chromePicker", Chrome)
Vue.component("preview", Preview)
Vue.component("tabs", Tabs)
Vue.component("tab", Tab)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
