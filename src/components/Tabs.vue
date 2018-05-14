<template>
  <div>
    <div class="tabs">
      <router-link to="/"><span class="icon is-small"><i 
        class="fas fa-angle-left" 
        aria-hidden="true"/></span><span>Back</span></router-link>
      <ul>
        <li 
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{'is-active': tab.isActive}"
        >
          <a @click="selectTab(tab, index)">
            <span 
              v-if="tab.icon"
              class="icon is-small"
            >
              <i 
                :class="tab.icon" 
                aria-hidden="true"/>
            </span>
            <span> {{ tab.name }} </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <slot/>
      <br>
      <a 
        v-show="!last" 
        class="button is-primary is-medium" 
        @click="nextTab()">
        <span>Next</span>
        <span class="icon">
          <i class="fas fa-arrow-circle-right"/>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childrens: [],
      index: 0,
    }
  },
  computed: {
    tabs() {
      return this.childrens.slice(1)
    },
    last() {
      return this.index == this.tabs.length - 1
    },
    simplebarNode() {
      return this.$el.parentElement.parentElement
    },
  },
  created() {
    this.childrens = this.$children
  },
  methods: {
    selectTab(selectedTab, index) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name
      })
      this.index = index
      this.scrolltoTop()
    },
    nextTab() {
      this.tabs.forEach(tab => (tab.isActive = false))
      this.tabs[this.index + 1].isActive = true
      this.index++
      this.scrolltoTop()
    },
    scrolltoTop() {
      window.scrollTo(0, 0)
      this.simplebarNode.scrollTop = 0
      this.$forceUpdate()
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  position: absolute;
  top: 0;
  width: 100%;
  background: rgb(29, 29, 29);
  z-index: 10;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.tabs-content {
  padding: 5rem 0 10rem;
}
</style>
