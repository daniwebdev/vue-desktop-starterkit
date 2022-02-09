<template>
  <nav class="top-navigation flex items-center">
    <div class="brands flex-none">

    </div>
    <div class="flex-1">
      <a href="./" class="">
          ACCOUNT
      </a>
    </div>
    <div class="flex-1">
          DASHBOARD - Penjualan
    </div>
    <div class="flex-none flex items-center">
      <router-link to="/" class="px-3">
       <i class="fas fa-sign-out-alt    "></i>
       Logout
       </router-link>
    </div>
  </nav>

 <!-- Left Navigation -->
 <div class="left-navigation">
   <menu-vertical/>
 </div>

 <!-- Main Router -->
 <main>
  <router-view/>
 </main>
</template>

<script>
import MenuVertical from '@/components/layouts/MenuVertical.vue'

export default {
  name: 'App',
  components: {
    MenuVertical
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
      background: rgb(26, 21, 21);
    }
  }

  .left-navigation {
    border-right: 1px solid #e5e5e5;
    position: fixed;
    top: $top-nav-height;
    left: 0;
    width: $left-nav-width;
    height: calc(100vh - $top-nav-height);
    z-index: 1030;

  }

  main {
    position: sticky;
    margin-left: $left-nav-width;
    margin-top: $top-nav-height;
    height: calc(100vh - $top-nav-height);
    overflow: auto;
    width: calc(100% - $left-nav-width);
  }
</style>
