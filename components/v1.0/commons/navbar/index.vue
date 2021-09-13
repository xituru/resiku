<template>
  <nav
    class="
      navbar
      flex
      items-center
      col-span-1
      shadow-lg
      xl:col-span-3
      rounded-box
      p-2
    "
  >
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold"> Nuxt </span>
    </div>
    <div class="flex justify-center flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <a class="navbar__item"> Home </a>
        <a class="navbar__item"> About </a>
      </div>
    </div>
    <div class="flex-none">
      <button class="navbar__item icon focus:outline-none">
        <icon-notification />
      </button>
    </div>
    <div class="flex-none">
      <div class="navbar__item disabled">
        <comm-color-picker />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
