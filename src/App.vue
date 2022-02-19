<template>
  <top-navigation></top-navigation>
  <side-navigation></side-navigation>

  <!-- Main Router -->
  <div class="page-overlay hidden"></div>
  <main>
    <router-view/>
  </main>

  <!-- Footer -->
  <div class="bottom-navigation">

  </div>

  
</template>

<style lang="scss">
  @import './assets/scss/_variables.scss';
  .bottom-navigation {
    height: $bottom-nav-height;
    width: calc(100vw - $side-nav-width);

  }
</style>

<script>
import TopNavigation from '@/components/layouts/TopNavigation.vue'
import SideNavigation from '@/components/layouts/SideNavigation.vue'
import app from '@/config/app'

export default {
  name: 'App',
  components: {
    TopNavigation,
    SideNavigation,
  },

  data() {
    return {
      app
    }
  },

  mounted() {
    document.querySelector('main').addEventListener('contextmenu', (e) => {
      e.preventDefault();
      console.log("Coordinate(X) = " + e.clientX + "<br>Coordinate(Y) = " + e.clientY);

    })
    console.log('App mounted')
  },

  created() {
    this.$store.commit('toggleDarkMode', localStorage.getItem("darkMode") == "true");
  },
}
</script>
