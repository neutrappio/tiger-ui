<template>
  <widget class="widget">
    <div class="wbody">
      <slot name="flex w-full">
        <div class="labels">
          <p class="font-semibold text-gray-500">{{ label }}</p>
          <h1 class="text-2xl font-bold text-gray-800">{{ counter }}</h1>
        </div>
        <div class="icon" :class="color">
          <component :is="icon" class="w-8 h-8" />
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
      default: "text-light",
    },
  },
};
</script>


<style  lang="scss" scoped>
.widget {
  @apply flex flex-col;

  .wbody {
    @apply flex space-x-4 items-center;
    @apply justify-between;
  }
}
</style>