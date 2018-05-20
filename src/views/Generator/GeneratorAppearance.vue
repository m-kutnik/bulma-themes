<template>
  <div>
    <h1 class="title">Appearance</h1>
    <h2 class="subtitle">Select main theme color</h2>
    <br><br><br>
    <div class="column has-text-centered color">
      <div class="columns">
        <div class="column">
          <h3 class="title is-capitalized">Border Radius</h3>
        </div>
        <div class="column has-text-left-desktop">
          <input type="number" class="input" name="radius" id="radius" :value="borderRadius" @input="changeBorderRadius">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    borderRadius() {
      return this.$store.state.themeGenerator.appearance.borderRadius
    }
  },
  methods: {
    changeBorderRadius(e) {
      this.$store.dispatch("SET_RADIUS", e.target.value)
    },
  },
}
</script>
<style lang="scss" scoped>

</style>
