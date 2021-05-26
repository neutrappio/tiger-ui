<template>
  <main id="auth">
    <div class="w-full space-y-8">
      <div id="aform">
        <div class="content">
          <img
            class="mx-auto h-24 w-auto"
            src="../assets/images/logo/logo.svg"
            alt="Tiger"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            We recommend that you to sign-in using your own device.
          </p>
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
#auth {
  @apply min-h-screen grid grid-cols-1 lg:grid-cols-1 bg-gray-50;
  @apply items-center justify-center;

  #aform {
    @apply flex self-center justify-center;
  }
}
.auth-input {
  @apply appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm;
}
</style>