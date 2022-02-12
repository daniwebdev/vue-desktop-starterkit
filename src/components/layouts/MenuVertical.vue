<template>
  <ul class="vertical-menu">
    <li v-for="(menu, index) in menus" :key="index">

      <router-link to="./" :title="menu.title">
        <i class="fas fa-address-card"></i>
      </router-link>

      <ul class="submenu" v-if="menu.children != undefined && menu.children.length > 0">
        <li class="title">
          {{ menu.name }}
        </li>
        <li v-for="(submenu, sub_index) in menu.children" :key="'sub_'+sub_index">
          <router-link to="#"> {{ submenu.name }} </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuVertical',
  data() {
    return {
      menus: [
        {
          name: 'Karyawan',
          icon: 'fas fa-address-card',
          children: [
            {
              name: 'Data Karyawan',
              icon: 'fas fa-home',
              route: '#'
            },
            {
              name: 'Jam Kerja',
              icon: 'fas fa-user',
              route: '#'
            }
          ]
        }
      ]
    }
  },

  mounted() {
    document.querySelector('.vertical-menu>li').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.page-overlay').classList.toggle('hidden');
        // this.querySelector('.sub-menu').classList.toggle('active');
    });

    document.querySelector('.page-overlay').addEventListener('click', function () {
        this.classList.toggle('hidden');
        document.querySelector('.vertical-menu>li').classList.remove('active');
        // document.querySelector('.vertical-menu>li').querySelector('.sub-menu').classList.remove('active');
    });
  }
}
</script>