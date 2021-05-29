<template>
  <div class="w-full h-full px-2 md:px-0 space-y-8">
    <widgets>
      <widget-counter
        label="Total Nodes"
        :counter="2000"
        icon="server-icon"
        color="text-green-600"
      />
      <widget-counter
        label="Total Services"
        :counter="2000"
        icon="database-icon"
        color="text-blue-600"
      />
      <widget-counter
        label="Total Regions"
        :counter="2000"
        icon="globe-icon"
        color="text-red-600"
      />
      <widget-counter
        label="Total Eggs"
        :counter="2000"
        icon="beaker-icon"
        color="text-yellow-600"
      />
    </widgets>
  </div>
</template>


<script>
import Widgets from "../../../common/components/elements/Widgets.vue";
import WidgetCounter from "../../../common/components/widgets/WidgetCounter.vue";
export default {
  components: { WidgetCounter, Widgets },
};
</script>
