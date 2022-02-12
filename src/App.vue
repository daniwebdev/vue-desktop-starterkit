<template>
  <nav class="top-navigation flex items-center">
    <div class="brands flex-none">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    </div>
    <div class="flex-1">
      <a href="./" class="app-title">
          {{ app.name }}
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
<div class="page-overlay hidden"></div>
 <main>
  <router-view/>
 </main>
</template>

<script>
import MenuVertical from '@/components/layouts/MenuVertical.vue'
import app from '@/config/app'

export default {
  name: 'App',
  components: {
    MenuVertical
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

  .left-navigation {
    border-right: 1px solid #e5e5e5;
    position: fixed;
    top: $top-nav-height;
    left: 0;
    width: $left-nav-width;
    height: calc(100vh - $top-nav-height);
    z-index: 1030;

  }

</style>
