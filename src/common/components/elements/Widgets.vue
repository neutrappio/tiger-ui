<template>
  <div class="wwidgets">
    <slot />
  </div>
</template>


<script>
export default {
  components: {},
  setup() {},
};
</script>


<style lang="scss" scoped>
.wwidgets {
  @apply grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4;
}
</style>