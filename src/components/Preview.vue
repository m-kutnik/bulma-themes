<template>
  <div 
    :style="backgroundStyle" 
    class="preview-container container">
    <h1 
      :style="textStyle" 
      class="title">Hi!</h1>
    <h2 
      :style="textDarkStyle" 
      class="subtitle">Here is your theme!</h2>
    <div class="column">
      <section 
        id="buttons" 
        class="section">
        <h1 
          :style="textStyle" 
          class="title"> Buttons </h1>
        <hr>
        <div class="columns">
          <div class="column">
            <div>
              <a 
                :style="primaryColorStyle" 
                class="button"> Primary </a>
              <a 
                :style="linkColorStyle" 
                class="button"> Link </a>
              <a 
                :style="infoColorStyle" 
                class="button"> Info </a>
              <a 
                :style="successColorStyle" 
                class="button"> Success </a>
              <a 
                :style="warningColorStyle" 
                class="button"> Warning </a>
              <a 
                :style="dangerColorStyle" 
                class="button"> Danger </a>
            </div>
            <div>
              <a 
                :style="primaryColorStyle" 
                class="button is-loading">Loading</a>
              <a 
                :style="linkColorStyle" 
                class="button is-loading">Loading</a>
              <a 
                :style="infoColorStyle" 
                class="button is-loading">Loading</a>
              <a 
                :style="successColorStyle" 
                class="button is-loading">Loading</a>
              <a 
                :style="warningColorStyle" 
                class="button is-loading">Loading</a>
              <a 
                :style="dangerColorStyle" 
                class="button is-loading">Loading</a>
            </div>
            <div>
              <a 
                :style="primaryColorStyle" 
                class="button is-round"> Primary </a>
              <a 
                :style="linkColorStyle" 
                class="button is-round"> Link </a>
              <a 
                :style="infoColorStyle" 
                class="button is-round"> Info </a>
              <a 
                :style="successColorStyle" 
                class="button is-round"> Success </a>
              <a 
                :style="warningColorStyle" 
                class="button is-round"> Warning </a>
              <a 
                :style="dangerColorStyle" 
                class="button is-round"> Danger </a>
            </div>
          </div>
        </div>
      </section>
      <section 
        id="typography" 
        class="section">
        <h1 
          :style="textStyle" 
          class="title"> Typography </h1>
        <hr>
        <div class="columns">
          <div class="column">
            <h1 
              :style="textStyle" 
              class="title is-1"> Title 1 </h1>
            <h2 
              :style="textStyle" 
              class="title is-2"> Title 2 </h2>
            <h3 
              :style="textStyle" 
              class="title is-3"> Title 3 </h3>
            <h4 
              :style="textStyle" 
              class="title is-4"> Title 4 </h4>
            <h5 
              :style="textStyle" 
              class="title is-5"> Title 5 </h5>
            <h6 
              :style="textStyle" 
              class="title is-6"> Title 6 </h6> </div>
          <div class="column">
            <h1 
              :style="textDarkStyle" 
              class="subtitle is-1"> Subtitle 1 </h1>
            <h2 
              :style="textDarkStyle" 
              class="subtitle is-2"> Subtitle 2 </h2>
            <h3 
              :style="textDarkStyle" 
              class="subtitle is-3"> Subtitle 3 </h3>
            <h4 
              :style="textDarkStyle" 
              class="subtitle is-4"> Subtitle 4 </h4>
            <h5 
              :style="textDarkStyle" 
              class="subtitle is-5"> Subtitle 5 </h5>
            <h6 
              :style="textDarkStyle" 
              class="subtitle is-6"> Subtitle 6 </h6> </div>
        </div>
      </section>
      <section 
        id="content" 
        class="section">
        <h1 
          :style="textStyle" 
          class="title"> Content </h1>
        <hr>
        <div class="content">
          <h1 :style="textStyle"> Hello World </h1>
          <p :style="textStyle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. </p>
          <h2 :style="textStyle"> Second level </h2>
          <p :style="textStyle"> Curabitur accumsan turpis pharetra <strong> augue tincidunt </strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl. </p>
        </div>
      </section>
      <section 
        id="notifications" 
        class="section">
        <h1 
          :style="textStyle" 
          class="title"> Notifications </h1>
        <hr>
        <div class="columns is-multiline">
          
          <div class="column is-half">
            <div 
              :style="primaryColorStyle" 
              class="notification">
              <button class="delete"/> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
          
          <div class="column is-half">
            <div 
              :style="linkColorStyle" 
              class="notification">
              <button class="delete"/> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
          
          <div class="column is-half">
            <div 
              :style="infoColorStyle" 
              class="notification">
              <button class="delete"/> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
          
          <div class="column is-half">
            <div 
              :style="successColorStyle" 
              class="notification">
              <button class="delete"/> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
          
          <div class="column is-half">
            <div 
              :style="warningColorStyle" 
              class="notification">
              <button class="delete"/> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
          
          <div class="column is-half">
            <div 
              :style="dangerColorStyle" 
              class="notification">
              <button class="delete"/> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
          
        </div>
      </section>
      <section 
        id="notifications" 
        class="section">
        And much more!
      </section>
    </div>
  </div>
</template>

<script>
function invert(hex) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.")
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF"
}

export default {
  props: {
    source: {
      default() {
        return {}
      },
      type: Object,
      require: true,
    },
  },
  computed: {
    theme() {
      return this.source
    },
    backgroundStyle() {
      return {
        background: this.theme.colors.background,
        color: this.textStyle,
      }
    },
    textStyle() {
      return { color: this.theme.shades["grey-darker"] }
    },
    textDarkStyle() {
      return { color: this.theme.shades["grey-dark"] }
    },
    primaryColorStyle() {
      return {
        background: this.theme.colors.primary,
        color: invert(this.theme.colors.primary),
      }
    },
    linkColorStyle() {
      return {
        background: this.theme.colors.link,
        color: invert(this.theme.colors.link),
      }
    },
    infoColorStyle() {
      return {
        background: this.theme.colors.info,
        color: invert(this.theme.colors.info),
      }
    },
    successColorStyle() {
      return {
        background: this.theme.colors.success,
        color: invert(this.theme.colors.success),
      }
    },
    warningColorStyle() {
      return {
        background: this.theme.colors.warning,
        color: invert(this.theme.colors.warning),
      }
    },
    dangerColorStyle() {
      return {
        background: this.theme.colors.danger,
        color: invert(this.theme.colors.danger),
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.preview-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.button {
  border: none;
}

.column div {
  margin-bottom: 10px;
}
</style>
