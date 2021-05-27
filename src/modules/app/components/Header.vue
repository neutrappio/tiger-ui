<template>
  <div>
    <navbar-component></navbar-component>
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1
          class="flex items-center space-x-2 text-3xl font-bold text-gray-900"
        >
          <component :is="getCurrentIcon" class="w-8 h-8" />
          <span>{{ getCurrentTitle }}</span>
        </h1>
      </div>
    </header>
  </div>
</template>

<script>
import NavbarComponent from "@/modules/dashboard/components/Navbar.vue";

export default {
  components: {
    NavbarComponent,
  },
  computed: {
    getCurrentTitle() {
      let route = this.$route;
      return (route.meta && route.meta.title) || "Tiger";
    },
    getCurrentIcon() {
      let route = this.$route;
      return route.meta && route.meta.icon;
    },
  },
};
</script>