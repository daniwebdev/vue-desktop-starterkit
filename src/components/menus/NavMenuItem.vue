<template>
  <router-link to="#" :title="data.name">
    <i class="fas fa-address-card"></i>
    <span>{{ data.name }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'NavMenuItem',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>