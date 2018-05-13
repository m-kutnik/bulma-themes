<template>
  <div>
    <h1 class="title">Colors</h1>
    <h2 class="subtitle">Create your color palette</h2>
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
          <color-picker :color="color" :index="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.colors = this.$store.state.themeGenerator.colors
  },
  methods: {
    changeColor(val) {
      this.$store.commit("color", val)
    },
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.columns {
  align-items: center;
}
</style>
