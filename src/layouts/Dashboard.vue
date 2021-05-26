<template>
  <main id="app">
    <header-component :title="title" />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <slot />
    </div>
  </main>
</template>

<script>
import HeaderComponent from "@/modules/dashboard/components/Header.vue";

export default {
  components: {
    HeaderComponent,
  },
  props: {
    title: {
      type: String,
      default: "Dashboard",
    },
  },
};
</script>

<style lang="scss">
#app {
  @apply min-h-screen grid grid-cols-1 lg:grid-cols-1 bg-gray-100;
}
</style>