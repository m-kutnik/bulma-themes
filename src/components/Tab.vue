<template>
  <div v-show="isActive">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: "",
      type: String,
      require: true,
    },
    icon: {
      default: "",
      type: String,
    },
    selected: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    this.isActive = this.selected
  },
}
</script>
