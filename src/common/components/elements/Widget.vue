<template>
  <div class="widget">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.widget {
  @apply rounded-md;
  @apply bg-white border border-gray-100 drop-shadow-sm;
  @apply p-6;
}
</style>