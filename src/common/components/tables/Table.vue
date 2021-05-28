<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="col in getColumns"
                  :key="col"
                  scope="col"
                  class="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                >
                  {{ col.title }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="row in rows" :key="row.id || row">
                <td
                  v-for="col in getColumns"
                  :key="col.id || col"
                  class="px-6 py-4 whitespace-nowrap"
                >
                  <span
                    class="inline-flex text-md leading-5 font-semibold text-gray-600"
                  >
                    {{ row[col.name] }}
                  </span>
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
        return {
          ...col,
          name: name,
        };
      });
    },
  },
  created() {
    console.log("Columns :", this.columns);
    console.log("Rows : ", this.rows);
  },
};
</script>