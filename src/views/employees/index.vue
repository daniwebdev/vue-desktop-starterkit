<template>
  <div>
    <div class="table-header">
      <div class="flex-1">
        <span class="px-2">
          Nama Lengkap
        </span>
      </div>
      <div style="width: 300px">
        <span class="px-2">
          Jabatan
        </span>
      </div>
      <div style="width: 300px">
        <span class="px-2">
          Status
        </span>
      </div>
    </div>
    <div class="table-body">
      <div class="table-row" v-for="(x, i) in [1,2,3,4,5,6,7,8]" :key="i">
        <div class="table-data flex-1">
          <span class="px-2">
            Data Karyawan
          </span>
        </div>
        <div class="table-data" style="width: 300px">
          <span class="px-2">
            Dept. IT Development
          </span>
        </div>
        <div class="table-data" style="width: 300px">
          <span class="px-2">
            Aktif
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    
  },
  created() {
    this.$store.commit('set_title', 'Employee')
  },
  methods: {
    range(start, from) {
      return [start, from]
      // return Array.from({ length: from - start }, (v, k) => k + start);
      // return Array.from({ length: (from - start) }, (v, k) => k + start);
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/variables";
  .table-header {
    position: fixed;
    height: 40px;
    width: calc(100vw - $left-nav-width);
    display: flex;
    align-items: center;
    background: gray;
  }
  .table-body {
    position: absolute;
    top: 40px;
    width: calc(100vw - $left-nav-width);

    // background: black;

    height: calc(100vh - $top-nav-height - 40px);

    .table-row {
      display: flex;
      border-bottom: 1px solid gray;
      
      .table-data {
        padding: 10px 0px;
      }
    }
  }
</style>