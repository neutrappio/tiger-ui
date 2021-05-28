<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="tiger-table flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 hidden md:table-header-group">
              <tr>
                <th
                  v-for="col in getColumns"
                  :key="col"
                  scope="col"
                  class="px-6 py-3 tiger-c-title"
                  :class="col.class"
                >
                  {{ col.title }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="row in rows"
                :key="row.id || row"
                class="flex flex-wrap md:table-row w-full"
              >
                <td
                  v-for="col in getColumns"
                  :key="col.id || col"
                  class="px-6 py-4 flex-grow"
                  :class="col.rowclass"
                >
                  <span class="md:hidden tiger-c-title"
                    >{{ col.title }} : <br
                  /></span>
                  <span class="tiger-r-val" v-html="row[col.name]"> </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    getColumns() {
      return this.columns.map((col) => {
        let name = col.name || col.title;
        let title = col.title || col.title;
        return {
          ...col,
          name: name,
          title: title,
        };
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.tiger-table {
  .tiger-c-title {
    @apply text-left font-medium text-gray-500 capitalize tracking-wider;
  }

  .tiger-r-val {
    @apply inline-flex text-base leading-5 font-semibold text-gray-600;
  }
}
</style>