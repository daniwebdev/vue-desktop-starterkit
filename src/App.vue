<template>
  <top-navigation></top-navigation>
  <left-navigation></left-navigation>

  <!-- Main Router -->
  <div class="page-overlay hidden"></div>
  <main>
    <router-view/>
  </main>
  
</template>

<script>
import TopNavigation from '@/components/layouts/TopNavigation.vue'
import LeftNavigation from '@/components/layouts/LeftNavigation.vue'
import app from '@/config/app'

export default {
  name: 'App',
  components: {
    TopNavigation,
    LeftNavigation,
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
}
</script>

<style lang="scss">
  

</style>
