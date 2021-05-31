<template>
  <chart-timing :id="id" :data="data" :label="label" />
</template>

<script>
import ChartTiming from "./ChartTiming";

export default {
  components: { ChartTiming },
  props: {
    id: {
      default: `id${Math.random()}`.replace("."),
    },
    label: {
      type: String,
      default: "RAM",
    },
    type: {
      default: "line",
    },
    data: {
      default: () => {
        let data = [];

        let dt = new Date();
        dt.setMinutes(dt.getMinutes() - 10);
        let start = dt.getTime() / 1000;
        let end = new Date().getTime() / 1000;

        for (let i = start; i <= end; i++)
          data.push({ x: i, y: (1 - Math.random()) * 100 });

        return data;
      },
    },
  },
};
</script>