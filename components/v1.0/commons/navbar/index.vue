<template>
  <nav
    class="
      navbar
      mb-2
      shadow-lg
      bg-neutral
      text-neutral-content
      rounded-box
      dark:bg-gray-900
    "
  >
    <div class="px-2 mx-2 navbar-start">
      <nuxt-link to="/" class="text-lg font-bold capitalize">
        <div class="flex items-center">
          <icon-resiku class="w-28 h-12" />
        </div>
      </nuxt-link>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
      <div v-if="false" class="flex items-stretch space-x-1.5 font-bold">
        <!-- TODO: Decide list item navbar -->
        <nuxt-link
          to="/"
          class="
            btn btn-ghost btn-sm
            rounded-btn
            hover:bg-gray-300 hover:bg-opacity-80
            dark:hover:bg-gray-500
          "
        >
          Home
        </nuxt-link>
        <a
          class="
            btn btn-ghost btn-sm
            rounded-btn
            hover:bg-gray-300 hover:bg-opacity-80
            dark:hover:bg-gray-500
          "
        >
          About
        </a>
      </div>
    </div>
    <div class="navbar-end">
      <button
        v-if="false"
        class="
          btn btn-square btn-ghost
          hover:bg-gray-300 hover:bg-opacity-80
          dark:hover:bg-gray-500
        "
      >
        <!-- TODO: Decide is the site needs notification? -->
        <icon-notification />
      </button>
      <button class="btn btn-ghost">
        <comm-color-picker />
      </button>
    </div>
  </nav>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
