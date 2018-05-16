<template>
  <div>
    <h1 class="title">Colors</h1>
    <h2 class="subtitle">Modify default colors</h2>
    <br><br><br>
    <div 
      v-for="(color, index) in colors"
      :key="index"
      class="column has-text-centered color"
    >
      <div class="columns">
        <div class="column">
          <h3 class="title is-capitalized">{{ index }} color</h3>
        </div>
        <div class="column has-text-left-desktop">
          <color-picker 
            :color="color" 
            :index="index"
            :type="type"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "colors"
    }
  },
  computed: {
    colors() {
      return this.$store.state.themeGenerator.colors
    },
  },
}
</script>

<style lang="scss" scoped>
.columns {
  align-items: center;
}
</style>
