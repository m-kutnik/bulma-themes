<template>
  <div class="generator">
    <tabs>
      <tab 
        :selected="true" 
        name="Theme Color" 
        icon="fas fa-adjust">
        <generator-theme-color/>
      </tab>
      <tab 
        name="Colors" 
        icon="fas fa-palette">
        <generator-colors/>
      </tab>
      <tab 
        name="Test" 
        icon="fas fa-music">
        Test content
      </tab>
    </tabs>
  </div>
</template>

<script>
import GeneratorThemeColor from "./Generator/GeneratorThemeColor"
import GeneratorColors from "./Generator/GeneratorColors"

export default {
  name: "Generator",
  components: {
    GeneratorThemeColor,
    GeneratorColors,
  },
}
</script>
