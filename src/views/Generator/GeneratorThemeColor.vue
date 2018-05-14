<template>
  <div>
    <h1 class="title">Theme Color</h1>
    <h2 class="subtitle">Select main theme color</h2>
    <section class="generator-container">
      <div 
        class="input-group light" 
        @click="changeTheme('light')">
        <input 
          id="light" 
          v-model="themeColor" 
          name="theme" 
          type="radio" 
          value="light">
        <label for="light">
          <h2 class="is-size-3">Light Theme</h2>
          <p>Standard, light theme, default in Bulma. The best choice in most cases.</p>
        </label>
      </div>
      <div 
        class="input-group dark" 
        @click="changeTheme('dark')">
        <input 
          id="dark" 
          v-model="themeColor" 
          name="theme" 
          type="radio" 
          value="dark">
        <label for="dark">
          <h2 class="is-size-3">Dark Theme</h2>
          <p>Elegant, dark theme. <i>(Dark theme inverts Bulma's Shades Map)</i></p>
        </label>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    this.themeColor = this.$store.state.themeGenerator.theme
  },
  methods: {
    changeTheme(val) {
      const dispatch = this.$store.dispatch
      dispatch("SET_THEME", val)
    },
  },
}
</script>

<style lang="scss" scoped>
.generator-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;
}

.input-group {
  display: block;
  margin: 10px 20px;
  position: relative;
  height: 300px;
  width: 300px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  transition: all 0.2s ease-in-out;

  &.light {
    color: #303030;
    background: #f5f5f5;
  }

  &.dark {
    color: #f5f5f5;
    background: #303030;
  }

  &:hover {
    box-shadow: 0 4px 13px 0 hsla(0, 0%, 0%, 0.2);
    transform: scale(1.02);
  }

  label {
    padding: 12px 30px;
    width: 100%;
    height: 100%;
    display: block;
    text-align: left;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 200ms ease-in;
    overflow: hidden;

    &:after {
      width: 32px;
      height: 32px;
      content: "";
      border: 2px solid #d1d7dc;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-repeat: no-repeat;
      background-position: 2px 3px;
      border-radius: 50%;
      z-index: 2;
      position: absolute;
      right: 50%;
      bottom: 0;
      margin-right: -16px;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 200ms ease-in;
    }
  }

  input:checked ~ label {
    &:after {
      background-color: #54e0c7;
      border-color: #54e0c7;
    }
  }

  input {
    width: 32px;
    height: 32px;
    order: 1;
    z-index: 2;
    position: absolute;
    right: 50%;
    bottom: 0;
    margin-right: -16px;
    transform: translateY(-50%);
    cursor: pointer;
    visibility: hidden;
  }
}
</style>
