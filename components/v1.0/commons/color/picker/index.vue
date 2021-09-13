<template>
  <div class="flex space-x-1.5">
    <label for="dark-mode" class="cursor-pointer">
      <component :is="`icon-${icon}`" class="w-6 h-6" />
    </label>
    <input
      id="dark-mode"
      type="checkbox"
      :checked="isDark"
      class="toggle"
      @click="$colorMode.preference = isDark ? 'light' : 'dark'"
    />
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
