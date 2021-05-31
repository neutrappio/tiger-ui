<template>
  <table-component :columns="getColumns" :rows="getRows">
    <template v-slot:rows>
      <template v-for="row in getRows" :key="row">
        <tr>
          <td
            class="td"
            v-for="col in getColumns"
            :key="col.id || col"
            :class="col.rowclass"
          >
            <span v-if="col.title" class="md:hidden tiger-c-title"
              >{{ col.title }} : <br
            /></span>
            <span class="tiger-r-val" v-html="row[col.name]"> </span>
          </td>
        </tr>
        <tr>
          <td class="td chart-cols" :colspan="getColumns.length">
            <div class="charts">
              <div class="cpu chart-col">
                <ChartCPU :id="row.id" prefix="cpu" />
              </div>
              <div class="cpu chart-col">
                <ChartRAM :id="row.id" prefix="ram" />
              </div>
            </div>
          </td>
        </tr>
      </template>
    </template>
  </table-component>
</template>


<script>
import TableComponent from "@/common/components/tables/Table.vue";
import ChartCPU from "@/common/components/charts/ChartCPU.vue";
import ChartRAM from "@/common/components/charts/ChartRAM.vue";

export default {
  components: { TableComponent, ChartCPU, ChartRAM },
  computed: {
    getColumns() {
      return [
        { name: "name", title: "Name" },
        { name: "node", title: "Node" },
        { name: "egg", title: "Egg" },
        { name: "description", title: "Description" },
        { name: "tags", title: "tags", rowclass: "tags" },
        { name: "status", title: "Status" },
      ];
    },
    getRows() {
      return Array(4)
        .fill()
        .map((_, i) => {
          return {
            id: `id${Math.random()}`.replace(".", ""),
            name: [
              "master-pg-server",
              "master-nginx",
              "php-http-1",
              "master-minio-storage",
            ][i],
            tags: [
              ["pg", "database"],
              ["nginx", "proxy"],
              ["http", "php"],
              ["minio", "objectio"],
            ][i].join(" - "),
            node: ["FR XL VPS", "ES XL VPS", "US SM VPS", "ES XXL VPS"][i],
            egg: ["pgsql-11", "nginx-1.20", "php-7.4", "minio-21-04"][i],
            description: "Servers from France",
            status: "Active",
          };
        });
    },
  },
};
</script>

<style lang="scss" >
.tiger-table {
  .tags {
    .tiger-r-val {
      @apply px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800;
    }
  }

  .td {
    @apply px-6 py-4 flex-grow;
  }
  .chart-cols {
    .charts {
      @apply grid grid-cols-1 md:grid-cols-2;
    }
  }
}
</style>