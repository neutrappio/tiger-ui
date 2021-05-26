<template>
  <component :is="layout">
    <RouterView :key="$route.fullPath" :title="getTitle()" />
  </component>
</template>



<script>
import { useRoute } from "vue-router";
import { shallowRef, watch } from "vue";
import { themeMethods, themeComputed } from "@/state/helpers";
import appConfig from "@/app.config";
import AppLayoutDefault from "@/layouts/Default";

export default {
  setup() {
    const layout = shallowRef(AppLayoutDefault);
    const route = useRoute();
    const getTitle = () => {
      return route.meta.title || route.name;
    };
    const setTitle = (title) => {
      document.title = `${title} - ${appConfig.name}`;
    };

    watch(
      () => route.meta,
      async (meta) => {
        setTitle(getTitle());

        try {
          const component = await import(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || AppLayoutDefault;
        } catch (e) {
          layout.value = AppLayoutDefault;
        }
        return { layout };
      },
      { immediate: true }
    );
    return { route, layout, setTitle, getTitle };
  },
  computed: {
    ...themeComputed,
  },
  methods: {
    ...themeMethods,
  },
  beforeMount() {
    this.initTheme();
  },
};
</script>
