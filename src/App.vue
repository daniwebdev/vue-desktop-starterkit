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
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/index.scss';
  
  .top-navigation {
    background: white;
    border-bottom: 1px solid #e5e5e5;
    // padding: 10px;
    height: $top-nav-height;
    top: 0;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1030;

    .brands {
      width: $left-nav-width;
      height: 100%;
      background: #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

</style>
