<template>
  <div class="home">
    <section class="hero is-fullheight is-main">
      <header
        class="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
              BTG
            </span>
            <span 
              class="navbar-burger burger" 
              data-target="navbarMenuHero"
            >
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </span>
          </div>
          <div 
            id="navbarMenuHero" 
            class="navbar-menu"
          >
            <div class="navbar-end">
              <router-link
                to="/"
                class="navbar-item"
              > Home </router-link>
              <router-link
                to="/about"
                class="navbar-item"
              > About </router-link>
              <span class="navbar-item">
                <a class="button is-primary is-inverted is-outlined is-round">
                  <span class="icon">
                    <i class="fab fa-github"/>
                  </span>
                  <span>Check on Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Bulma Theme Generator</h1>
          <h2 class="subtitle">For <i><b>free</b></i>, forever!</h2>
          <br>
          <div class="columns is-centered">
            <div class="column is-4">
              <h3 class="subtitle">Create Own Theme</h3>
              <div class="has-text-justified">Create your own Bulma theme from scratch. Try our generator and configure every aspect of your theme!</div><br>
              <div class="column-bottom">
                <router-link 
                  to="/generator"
                  class="button is-secondary is-inverted is-outlined is-medium is-round"
                >
                  <span class="icon">
                    <i class="fas fa-plus-circle"/>
                  </span>
                  <span>Open Generator</span>
                </router-link>
              </div>
            </div>
            <div class="column is-4">
              <h3 class="subtitle">Use/Modify Presets</h3>
              <div class="has-text-justified">Check our library of ready-to-use presets. Pick one you like, customize it, use it!</div><br>
              <div class="column-bottom">
                <router-link 
                  to="/presets"
                  class="button is-primary is-medium is-round"
                >
                  <span class="icon">
                    <i class="fas fa-palette"/>
                  </span>
                  <span>Browse Presets</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="hero-foot">
        <div class="container">
          <span>
            <i class="fas fa-code"/> with <i class="fas fa-heart"/> by 
            <a 
              href="https://github.com/m-kutnik" 
              class="is-primary is-link"
          > Mike</a></span>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
}
</script>
<style lang="scss" scoped>
.fa-heart {
  color: red;
}

.hero-foot {
  padding-bottom: 10px;
}

.hero-foot a {
  color: #17a095 !important;
}

.column {
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 40px;
}

.column-bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  margin: 0 -12px;
}
</style>
