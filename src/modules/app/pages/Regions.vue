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
        { name: "description", title: "Description" },
        { name: "continent", title: "Continent" },
        { name: "status", title: "Status" },
      ];
    },
    getRows() {
      return Array(10)
        .fill()
        .map(() => {
          return {
            name: ["France", "Germany", "Brazil", "United Stats"][
              Math.floor(Math.random() * 4)
            ],
            continent: ["EU", "US", "BR", "AS"][Math.floor(Math.random() * 4)],
            description: "Servers from France",
            status: "Active",
          };
        });
    },
  },
};
</script>