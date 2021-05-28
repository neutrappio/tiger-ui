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
        { name: "host", title: "Host" },
        { name: "ip", title: "IP" },
        { name: "port", title: "Port" },
        { name: "region", title: "Region" },
        { name: "status", title: "Status" },
      ];
    },
    getRows() {
      return [
        {
          name: "FR XL VPS",
          host: "fr-xl-vps.neutr.app",
          ip: "10.0.0.1",
          port: 22,
          region: "Europe",
          status: "Offline",
        },
        {
          name: "FR XL VPS",
          host: "fr-xl-vps.neutr.app",
          ip: "10.0.0.2",
          port: 22,
          region: "Europe",
          status: "Offline",
        },
      ];
    },
  },
};
</script>