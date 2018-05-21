<template>
  <div>
    <h1 class="title">Export</h1>
    <h2 class="subtitle">Here you can export your Theme/Settings</h2>
    <br><br><br>
    <div class="column has-text-centered color">
      <div class="columns">
        <div class="column">
          <h3 class="title is-capitalized">Export Settings</h3>
          <h3 class="subtitle">Export your settings.json</h3>
        </div>
        <div class="column">
          <button 
            class="button is-primary is-outlined" 
            @click="download('settings.json', theme)">Export</button>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h3 class="title is-capitalized">Download theme</h3>
          <h3 class="subtitle">Generate your Bulma theme</h3>
        </div>
        <div class="column">
          <button 
            class="button is-primary" 
            @click="generate">Download</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return JSON.stringify(this.$store.state.themeGenerator)
    },
  },
  methods: {
    generate(event) {
      event.target.disabled = true
      event.target.classList.add("is-loading")

      window.fetch("https://us-central1-bulmagenerator.cloudfunctions.net/generate", {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.theme,
      }).then((res) => res.text())
        .then((data) => this.download('style.css', data))
        .then(() => {
          event.target.disabled = false
          event.target.classList.remove("is-loading")
        })
        .catch(e => console.log(e))
    },
    download(file, value) {
      let element = document.createElement("a")
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(value),
      )
      element.setAttribute("download", file)
      element.style.display = "none"
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
