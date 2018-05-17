<template>
  <div class="picker">
    <div
      :style="{ background: hex }"
      class="picker-color" 
      @click="openPicker"/>
    <div 
      v-show="isActive" 
      class="picker-chrome">
      <div 
        class="picker-close" 
        @click="openPicker"><i class="fas fa-times is-size-5"/></div>
      <chrome-picker 
        :value="hex" 
        @input="updateValue"/>
    </div>
    <span class="subtitle">{{ hex }}</span>
  </div>
</template>

<script>
import debounce from "lodash.debounce"

export default {
  props: {
    color: {
      default: "#333",
      type: String,
      required: true,
    },
    index: {
      default: "",
      type: String,
      required: true,
    },
    type: {
      default: "",
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
      hex: "#333",
    }
  },
  watch: {
    color(newVal) {
      this.hex = newVal
    },
  },
  mounted() {
    this.hex = this.color
    this.colorIndex = this.index
  },
  methods: {
    openPicker() {
      this.isActive = !this.isActive
    },
    updateValue(color) {
      this.colors = color.hex
      this.dispatchMutation(this.type, this.index, this.colors, this)
    },
    dispatchMutation: debounce((type, index, color, that) => {
      that.$emit("update:event", that.colors)
      that.$store.dispatch("SET_COLOR", {
        type: type,
        index: index,
        color: color,
      })
    }, 100),
  },
}
</script>

<style lang="scss" scoped>
.picker {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.picker-color {
  height: 2.5rem;
  width: 2.5rem;
  margin: 10px 0;
  border-radius: 100000px;
  border: 2px solid #9e9e9e;
  cursor: pointer;
}

.picker-chrome {
  position: absolute;
  top: 60px;
  z-index: 10;
}

.picker-close {
  position: absolute;
  top: -20px;
  right: -20px;
  cursor: pointer;
}
</style>
