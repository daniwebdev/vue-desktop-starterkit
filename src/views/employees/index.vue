<template>
  <div>
    <div class="main-control">
      <button>
        <i class="fa fa-plus" aria-hidden="true"></i>
        New
      </button>
      <button>
        <i class="fas fa-file-import" aria-hidden="true"></i>
        Import
      </button>
      <button>
        <i class="fas fa-file-export" aria-hidden="true"></i>
        Export
      </button>
      <button>
        <i class="fas fa-sync" aria-hidden="true"></i>
        Mutation
      </button>
    </div>
    <div class="table-header">
      <div v-for="(col, i) in columnDefs" :key="'col_'+i" class="header-data" :class="{'flex-1': !(col.width > 0)}" :style="(col.width > 0) ? 'width:'+col.width+'px':''">
        <span class="px-2">
          {{ col.headerName }}
        </span>
      </div>
      <!-- <div style="width: 300px">
        <span class="px-2">
          Jabatan
        </span>
      </div>
      <div style="width: 300px">
        <span class="px-2">
          Status
        </span>
      </div> -->
    </div>

    <div class="table-body">
      <div class="table-row" v-for="(items, index) in dataset" :key="'emp_'+index">
        <div v-for="(item, i) in items" :key="'x'+i" class="table-data" :class="{'flex-1': !(columnDefs[i].width > 0)}" :style="(columnDefs[i].width > 0) ? 'width:'+columnDefs[i].width+'px':''">
          <span class="">
            {{ item.data }}
            <!-- <shimmer-text></shimmer-text> -->
          </span>
        </div>
        <!-- <div class="table-data" style="width: 300px">
          <span class="px-2">
            Dept. IT Development
          </span>
        </div>
        <div class="table-data" style="width: 300px">
          <span class="px-2">
            Aktif
          </span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import ShimmerText from './../../components/shimmer/shimmerText.vue'
export default {
  components: {
    // ShimmerText
  },
  data() {
    return {
      columnDefs: [
        {
          headerName: 'Nama Lengkap',
          field: 'name',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Jabatan',
          field: 'position',
          width: 200,
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Status',
          field: 'status',
          width: 200,
          sortable: true,
          filter: true,
        },
      ],
      dataset: [

      ]
    }
  },
  computed: {
    
  },
  created() {
    this.$store.commit('set_title', 'Employee');

    this.add_data_set();
  },
  methods: {
    range(start, from) {
      // return [start, from]
      return Array.from({ length: from - start }, (v, k) => k + start);
      // return Array.from({ length: (from - start) }, (v, k) => k + start);
    },
    add_data_set() {
      this.range(1,10).forEach((i) => {
          this.dataset.push(        [
            {
              data: "Emp " +  i,
            },
            {
              data: "IT Development",
            },
            {
              data: "Aktif",
            },
          ])
      })
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>