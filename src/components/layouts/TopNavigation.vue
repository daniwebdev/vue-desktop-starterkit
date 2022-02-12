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
    <div class="flex-1">
      <div class="app-menu px-3">
        <router-link to="/help" class="text-sm">
          <i class="fa fa-info-circle" aria-hidden="true"></i> Bantuan
        </router-link>
      </div>
    </div>
    <div class="flex-1">
      {{ pageTitle }}
    </div>
    <div class="flex-none flex items-center">
      <router-link to="/" class="px-3">
        <i class="fas fa-sign-out-alt"></i>
        Logout
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    pageTitle() {
      return this.$store.state.title;
    },
  },
};
</script>