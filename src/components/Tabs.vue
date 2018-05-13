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
          <a @click="selectTab(tab)">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childrens: [],
    }
  },
  computed: {
    tabs() {
      return this.childrens.slice(1)
    },
  },
  created() {
    this.childrens = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(29, 29, 29);
  z-index: 10;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.tabs-content {
  margin-top: 5rem;
}
</style>
