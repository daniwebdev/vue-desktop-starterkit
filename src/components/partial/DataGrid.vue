<template>
    <div class="table-header">
      <div v-for="(col, i) in columnDefs" :key="'col_'+i" class="header-data" :class="{'flex-1': !(col.width > 0)}" :style="(col.width > 0) ? 'width:'+col.width+'px':''">
        <span class="px-2">
          {{ col.headerName }}
        </span>
      </div>
    </div>

    <div class="table-body scrollbar">
      <div class="table-row context" v-for="(items, index) in datasets" :key="'emp_'+index">
        <div v-for="(item, i) in items" :key="'x'+i" class="table-data" :class="{'flex-1': !(columnDefs[i].width > 0)}" :style="(columnDefs[i].width > 0) ? 'width:'+columnDefs[i].width+'px':''">
          <span class="">
            {{ item.data }}
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        columnDefs: {
            type: Array,
            required: true,
        },
        datasets: {
            type: Array,
            required: true,
        },
    },
}
</script>