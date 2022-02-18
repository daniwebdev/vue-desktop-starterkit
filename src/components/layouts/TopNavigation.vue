<template>
  <nav class="top-navigation flex items-center">
    <div class="brands flex-none">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    </div>

    <div class="flex-none">
      <div class="app-nav px-3">
        <button class="prev-nav-btn" @click="toggleBack()">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </button>

        <button class="next-nav-btn" @click="toggleForward()">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="flex-1 top-nav-center">
      {{ pageTitle }}
    </div>

    <div class="flex-none flex items-center">
      
      <div class="top-nav-menus flex items-center">

        <!-- Global Search -->
        <div class="search-container">
          <div class="search-panel">
            <span>
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <input type="text">
          </div>
          <div class="search-suggestion">
            <div v-for="(x, i) in [1,2,3,4,5,6,7,8]" :key="i" class="p-1 text-sm border-b search-suggestion-item">
              <a class="flex items-center" href="#">
                <div>
                  <img src="//via.placeholder.com/40" alt="">
                </div>
                <div class="ml-1">
                  <span class="">
                    Data Karyawan
                  </span>
                  <small class="text-xs block">Dept. IT Development</small>
                </div>
              </a>
            </div>
          </div>
        </div>

        <ul class="menu-container">
          <li>
            <router-link to="#" class="text-sm">
              <!-- <i class="fa fa-bell" aria-hidden="true"></i> -->
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </router-link>
            <div class="badge">1</div>
          </li>
          <li>
            <router-link to="#" class="text-sm">
              <!-- <i class="fa fa-bell" aria-hidden="true"></i> -->
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </router-link>
            <div class="badge">1</div>
          </li>
        </ul>
      </div>

      <div class="top-nav-divider"></div>
    
      <div class="window-nav">
        <div class="window-nav-item">
          <!-- <i class="fas fa-window-maximize"></i> -->
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
        </div>
        <div class="window-nav-item">
          <!-- <i class="fas fa-window-minimize"></i> -->
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </div>
        <div class="window-nav-item">
          <!-- <i class="fas fa-times"></i> -->
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {searchToggleSuggestion} from "@/utils/common";

export default {
  computed: {
    pageTitle() {
      return this.$store.state.title;
    },
  },
  methods: {
    toggleBack() {
      //get history back
      this.$router.go(-1);
    },
    toggleForward() {
      //get history forward
      this.$router.go(1);
    },
  },
  mounted() {
    searchToggleSuggestion();
  }
};
</script>
