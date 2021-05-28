<template>
  <table-component :columns="getCols" :rows="getRows" />
</template>


<script>
import TableComponent from "@/common/components/tables/Table.vue";

export default {
  components: { TableComponent },
  computed: {
    getCols() {
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
}
</style>