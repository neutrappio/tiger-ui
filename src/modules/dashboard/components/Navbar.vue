<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/dashboard">
              <img
                class="block lg:hidden h-8 w-auto"
                src="@/assets/images/logo/logo.svg"
                alt="Tiger"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="@/assets/images/logo/logo.svg"
                alt="Tiger"
              />
            </router-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.title"
                :to="item.url"
                :class="[
                  getCurrentPath === item.url
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center',
                ]"
                :aria-current="getCurrentPath === item.url ? 'page' : undefined"
              >
                <component
                  :if="item.icon !== null"
                  :is="item.icon"
                  class="w-4 h-4 mr-1"
                />
                {{ item.title }}
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="bg-gray-800 flex p-1 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">Open user menu</span>
                <UserCircleIcon class="w-6 h-6 text-gray-400" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.title"
          :to="item.url"
          :class="[
            getCurrentPath === item.url
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="getCurrentPath === item.url ? 'page' : undefined"
          >{{ item.title }}</router-link
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>


<script>
import { ref } from "vue";
import { routes } from "@/router";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";

/**
 * Get Naviagation/Profile menu
 */
const privateRoutes = routes.filter(
  (route) => route.meta && route.meta.private
);

const getItemFromRoute = (route) => {
  return {
    title: (route.meta && route.meta.title) || route.name,
    icon: (route.meta && route.meta.icon) || null,
    url: route.path,
  };
};

const navigation = privateRoutes
  .filter((route) => route.meta && route.meta.navigation)
  .map((route) => {
    return getItemFromRoute(route);
  });

const profile = privateRoutes
  .filter((route) => route.meta && route.meta.profile)
  .map((route) => {
    return getItemFromRoute(route);
  });

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  setup() {
    const open = ref(false);

    return {
      navigation,
      profile,
      open,
    };
  },
  computed: {
    getCurrentPath() {
      return this.$route.path;
    },
    getComponentIcon(name) {
      return name;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;

  a:hover {
    @apply cursor-pointer;
  }
}
</style>