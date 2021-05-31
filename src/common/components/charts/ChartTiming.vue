<template>
  <canvas :id="getChartId" class="getClassName"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";

export default {
  props: {
    id: {
      default: `id${Math.random()}`.replace("."),
    },
    label: {
      type: String,
      default: "Time",
    },
    prefix: {
      type: String,
      default: "timing",
    },
    type: {
      default: "line",
    },
    data: {
      default: () => {
        return [];
      },
    },
    options: {
      default: () => {
        return {
          responsive: true,
          maintainAspectRatio: false,

          // Turn off animations and data parsing for performance
          animation: true,
          parsing: true,
          interaction: {
            mode: "nearest",
            axis: "x",
            intersect: false,
          },
          plugins: {
            decimation: {
              enabled: true,
              algorithm: "min-max",
            },
          },
          scales: {
            x: {
              type: "time",
              ticks: {
                source: "auto",
                // Disabled rotation for performance
                maxRotation: 0,
                autoSkip: true,
              },
            },
          },
        };
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    getChartId() {
      return `chart-${this.prefix}-${this.id}`;
    },
    getClassName() {
      return `chart-${this.prefix}`;
    },
    getChartData() {
      return {
        datasets: [
          {
            borderColor: "#f54",
            borderWidth: 1,
            data: this.data,
            label: this.label,
            radius: 0,
          },
        ],
      };
    },
    getOptions() {
      return this.options;
    },
  },
  mounted() {
    let element = document.querySelector(`#${this.getChartId}`);
    element.height = 150;

    this.chart = new Chart(element, {
      type: this.type,
      data: this.getChartData,
      options: this.getOptions,
    });
  },
};
</script>