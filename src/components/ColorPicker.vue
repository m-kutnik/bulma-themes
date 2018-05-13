<template>
  <div class="picker">
    <div
      :style="{ background: colors.hex }"
      class="picker-color" 
      @click="openPicker"/>
    <div 
      v-show="isActive" 
      class="picker-chrome">
      <div @click="openPicker" class="picker-close"><i class="fas fa-times is-size-5"/></div>
      <chrome-picker v-model="colors"/>
    </div>
    <span class="subtitle">{{ colors.hex }}</span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: "#333",
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
      colors: {},
    }
  },
  mounted() {
    this.colors = { "hex": this.color}
  },
  methods: {
    openPicker() {
      this.isActive = !this.isActive
    },
    updateValue(data) {
      console.log(data)
    }
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
