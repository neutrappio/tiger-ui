<template>
  <div class="min-h-screen flex flex-col items-center justify-center space-y-6">
    <img src="@/assets/images/logo/logo.svg" class="w-24 h-24" alt="Tiger" />
    <h2 class="text-4xl font-bold">404 Not Found</h2>
    <p class="italic">Oops! This page not found !</p>
    <router-link to="/">
      <div class="flex bg-gray-800 text-white space-x-2 px-6 py-2 rounded-md">
        <arrow-left-icon class="w-6 h-6" />
        <span>Go back</span>
      </div>
    </router-link>
  </div>
</template>