<template>
  <div>
    <h1 class="title">Advanced Settings</h1>
    <h2 class="subtitle">Be careful when changing these settings</h2>
    <br><br><br>
    <div class="column has-text-centered color">
      <div class="columns">
        <div class="column">
          <h3 class="title is-capitalized">Font Family</h3>
        </div>
        <div class="column has-text-left-desktop">
          <input type="text" class="input" name="font" id="font" placeholder="Your Font Family" :value="fontFamily" @input="changeFontFamily">
        </div>
      </div>
    </div>
    <div class="column has-text-centered color">
      <div class="columns">
        <div class="column">
          <h3 class="title is-capitalized">Custom CSS</h3>
        </div>
        <div class="column has-text-left-desktop">
          <textarea class="textarea" placeholder="Your CSS" :value="customCSS" @input="changeCustomCSS"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce"

export default {
  computed: {
    fontFamily() {
      return this.$store.state.themeGenerator.adv.fontFamily
    },
    customCSS() {
      return this.$store.state.themeGenerator.adv.customCSS
    }
  },
  methods: {
    changeFontFamily(e) {
      this.dispatchMutation("SET_FONTFAMILY", e.target.value, this)
    },
    changeCustomCSS(e) {
      this.dispatchMutation("SET_CUSTOMCSS", e.target.value, this)
    },
    dispatchMutation: debounce((type, value, that) => {
      that.$store.dispatch(type, value)
    }, 500),
  },
}
</script>

<style lang="scss" scoped>
</style>
