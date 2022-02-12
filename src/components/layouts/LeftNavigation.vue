<template>
  <div class="left-navigation">
    <ul class="vertical-menu" v-if="menus.length">
      <li v-for="(menu, index) in menus" :key="index">
        <router-link to="#" :title="menu.name">
          <i class="fas fa-address-card"></i>
        </router-link>

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
  </div>
</template>

<script>

export default {
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
              route: "/employee",
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
  @import '@/assets/scss/variables';
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