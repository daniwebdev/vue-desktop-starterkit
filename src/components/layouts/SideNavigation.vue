<template>
  <div class="left-navigation">
    <ul class="vertical-menu" v-if="menus.length">
      <li v-for="(menu, index) in menus" :key="index" class="menu-item">
        
        <nav-menu-item :data="menu"></nav-menu-item>

        <ul
          class="submenu"
          v-if="menu.children != undefined && menu.children.length > 0"
        >
          <li class="title">
            {{ menu.name }}
          </li>
          <li
            v-for="(submenu, sub_index) in menu.children"
            :key="'sub_' + sub_index"
          >
            <router-link :to="submenu.route"> {{ submenu.name }} </router-link>
          </li>
        </ul>
      </li>
    </ul>

    <ul class="bottom-section-menu">
      <li @click="reload()">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
      </li>
      <li>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      </li>
    </ul>
  </div>
</template>

<script>
import NavMenuItem from '../menus/NavMenuItem.vue';

export default {
  components: { NavMenuItem },
  data() {
    return {
      menus: [
        {
          name: "Karyawan",
          icon: "fas fa-address-card",
          children: [
            {
              name: "Data Karyawan",
              icon: "fas fa-home",
              route: {
                name: "employee"
              },
            },
            {
              name: "Jam Kerja",
              icon: "fas fa-user",
              route: "#",
            },
          ],
        },
      ],
    };
  },

  methods: {
    reload() {
      console.log('tset');
      location.reload();
    },
  },

  mounted() {
    document.querySelector('.vertical-menu>li').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.page-overlay').classList.toggle('hidden');
        // this.querySelector('.sub-menu').classList.toggle('active');
    });

    document.querySelector('.page-overlay').addEventListener('click', function () {
        this.classList.add('hidden');
        document.querySelector('.vertical-menu>li').classList.remove('active');
        // document.querySelector('.vertical-menu>li').querySelector('.sub-menu').classList.remove('active');
    });
  }
};
</script>

<style lang="scss">

</style>