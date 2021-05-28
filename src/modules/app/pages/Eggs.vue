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
        { name: "logo", title: "" },
        { name: "title", title: "Title" },
        { name: "name", title: "Name" },
        { name: "version", title: "Version" },
        { name: "releasedate", title: "Release Date" },
        { name: "tags", title: "tags", rowclass: "tags" },
        { name: "status", title: "Status" },
      ];
    },
    getRows() {
      return Array(4)
        .fill()
        .map((_, i) => {
          return {
            logo:
              "<div  class='egg-img'><img src='" +
              [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
                "https://img.icons8.com/color/452/nginx.png",
                "https://www.mindline.co.in/public/assets/pic/logo/Php-removebg-preview.png",
                "https://www.socallinuxexpo.org/sites/default/files/logos/C2qJE7_XEAEn2MQ.png",
              ][i] +
              "' /></div>",
            title: ["Postgres Server", "Nginx", "PHP http", "MinIO"][i],
            name: ["pgsql-11", "nginx-1.20", "php-7.4", "minio-21-04"][i],
            tags: [
              ["pg", "database"],
              ["nginx", "proxy"],
              ["http", "php"],
              ["minio", "objectio"],
            ][i].join(" - "),
            releasedate: "2021-01-01",
            version: "v" + Math.floor(Math.random() * 21),
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

  .egg-img {
    @apply w-14 rounded bg-gray-100 p-2;
    img {
      @apply max-w-full max-h-full;
    }
  }
}
</style>