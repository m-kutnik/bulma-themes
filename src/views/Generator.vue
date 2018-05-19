<template>
  <div class="generator">
    <div 
      class="generator-settings"
      data-simplebar>
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
          name="Custom Colors" 
          icon="fas fa-paint-brush">
          <generator-custom-colors/>
        </tab>
        <tab 
          name="Appearance" 
          icon="fas fa-ruler-combined">
          <generator-appearance/>
        </tab>
        <tab 
          name="Advanced" 
          icon="fas fa-cogs">
          <generator-advanced/>
        </tab>
        <tab 
          name="Save/Export" 
          icon="fas fa-save">
          Test content
        </tab>
      </tabs>
    </div>
    <div class="preview">
      <div class="preview-bar">
        <i class="fas fa-angle-up is-size-3"/>
        <span class="is-size-6">Preview</span>
      </div>
      <div 
        class="preview-content"
        data-simplebar>
        <preview :source="$store.state.themeGenerator"/>
      </div>
    </div>
  </div>
  
</template>

<script>
import GeneratorCustomColors from "./Generator/GeneratorCustomColors"
import GeneratorAppearance from "./Generator/GeneratorAppearance"
import GeneratorThemeColor from "./Generator/GeneratorThemeColor"
import GeneratorAdvanced from './Generator/GeneratorAdvanced'
import GeneratorColors from "./Generator/GeneratorColors"

export default {
  name: "Generator",
  components: {
    GeneratorCustomColors,
    GeneratorAppearance,
    GeneratorThemeColor,
    GeneratorAdvanced,
    GeneratorColors,
  },
  data() {
    return {
      previewStatus: false,
    }
  },
  created() {
    window.onbeforeunload = () => {
      return "Are you sure you want to close the window? Unsaved changes will be lost"
    }
  },
  destroyed() {
    window.onbeforeunload = null
  },
}
</script>

<style lang="scss" scoped>
.generator-settings {
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.preview {
  position: absolute;
  top: 100%;
  height: 100vh;
  width: 100%;
  margin-top: -60px;
}

.preview-bar {
  height: 60px;
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 10;
  border-top: 1px solid #363636;
}

.preview-bar i {
  margin: -8px;
  position: relative;
  top: -4px;
}

.preview-content {
  position: relative;
  height: calc(100% - 41px);
  width: 100%;
  overflow: hidden;
}

@media screen and (min-width: 1408px) {
  .generator {
    display: grid;
    grid-template-columns: 50% auto;
  }

  .preview {
    margin-top: 0;
    top: 0;
    position: relative;
  }

  .preview::before {
    content: "";
    border-left: 5px solid #17a095;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 500;
  }

  .preview-bar {
    height: 41px;
    border-top: none;
  }

  .preview-bar i {
    display: none;
  }
}
</style>
