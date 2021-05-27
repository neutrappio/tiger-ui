<template>
  <widget class="widget">
    <div class="wbody">
      <slot name="flex w-full">
        <div class="icon p-3 text-white rounded-md w-14 h-14" :class="color">
          <component :is="icon" class="w-8 h-8" />
        </div>
        <div class="labels">
          <p class="font-semibold text-gray-500">{{ label }}</p>
          <h1 class="text-2xl font-bold text-gray-800">{{ counter }}</h1>
        </div>
      </slot>
    </div>
  </widget>
</template>

<script>
import Widget from "../elements/Widget.vue";
export default {
  components: {
    Widget,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "InfoIcon",
    },
    counter: {
      type: [String, Number],
      default: 0,
    },
    color: {
      type: String,
      default: "bg-light",
    },
  },
};
</script>


<style  lang="scss" scoped>
.widget {
  @apply flex flex-col;

  .wbody {
    @apply flex space-x-4 items-center;
  }
}
</style>