<template>
  <div
    class="
      bg-gray-50
      dark:bg-gray-800
      dark:text-gray-300
      flex flex-col
      min-h-screen
    "
  >
    <comm-navbar />
    <nuxt class="mx-auto p-4 flex-1 min-h-screen md:min-h-0" />
    <comm-footer />
  </div>
</template>

<script lang="ts" src="./default.controller.ts"></script>
