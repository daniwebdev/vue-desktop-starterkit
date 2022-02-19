<template>
  
  <top-navigation></top-navigation>
  <side-navigation></side-navigation>

  <!-- Main Router -->
  <div class="page-overlay hidden"></div>
  <main>
    <router-view/>
  </main>

  <!-- Footer -->
  <div class="bottom-navigation">
    <div>
      Location: {{ current_path }}
    </div>
    <div>
      <div class="clock">
        <i class="fas fa-clock" aria-hidden="true"></i>
        <span>00:00:00</span>
      </div>
    </div>
  </div>
</template>
<script>
import TopNavigation from '@/components/layouts/TopNavigation.vue'
import SideNavigation from '@/components/layouts/SideNavigation.vue'

export default {
  name: 'App',
  components: {
    TopNavigation,
    SideNavigation,
  },

  data() {
    return {
      // current_path: '/',
    }
  },
  computed: {
    current_path() {
      return this.$route.fullPath
    },
  },
  mounted() {
    document.querySelector('main').addEventListener('contextmenu', (e) => {
      e.preventDefault();
      console.log("Coordinate(X) = " + e.clientX + "<br>Coordinate(Y) = " + e.clientY);

    })
    console.log('App mounted');


    setInterval(this.realtime_clock, 1000);
  },

  created() {
    this.$store.commit('toggleDarkMode', localStorage.getItem("darkMode") == "true");
  },
  

  methods: {
    realtime_clock() {
      var clock = document.querySelector('.clock span');
      var time = new Date();
      var hours = time.getHours().toString().padStart(2, '0');
      var minutes = time.getMinutes();
      var seconds = time.getSeconds().toString().padStart(2, '0');
      // var ampm = hours >= 12 ? 'PM' : 'AM';
      // hours = hours % 12;
      // hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      
      clock.innerHTML = hours + ':' + minutes + ':' + seconds;
    },
  },
}
</script>
