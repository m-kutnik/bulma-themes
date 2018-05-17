<template>
  <div>
    <h1 class="title">Custom Colors</h1>
    <h2 class="subtitle">Create your color palette. Just provide your color name and click "Add"</h2>
    <h2 class="subtitle">Get access to your colors by "is-(name)" CSS class</h2>
    <br>
    <div class="color-add has-text-centered">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input 
            v-model="name" 
            class="input" 
            type="text" 
            placeholder="Color name">
        </div>
        <div class="control">
          <button 
            type="submit" 
            class="button is-primary" 
            @click="pushCustomColor()">Add</button>
        </div>
      </div>
    </div>
    <br><br>
    <div 
      v-for="(color, index) in customColors"
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
            :type="type"
            :event.sync="event"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      type: "customColors",
      event: "",
    }
  },
  computed: {
    customColors() {
      return this.$store.state.themeGenerator.customColors
    },
  },
  methods: {
    updateColor() {
      this.$forceUpdate
    },
    pushCustomColor() {
      if (!this.name) return
      this.$store.dispatch("SET_COLOR", {
        type: "customColors",
        index: this.name.toLowerCase(),
        color: "#333",
      })
      this.name = ""
    },
  },
}
</script>

<style lang="scss" scoped>
.columns {
  align-items: center;
}

.color-add {
  margin: 0 15%;
}
</style>
