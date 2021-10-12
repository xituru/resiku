<template>
  <comm-hero>
    <div class="max-w-screen-sm lg:max-w-lg">
      <h1 class="mb-5 text-5xl font-bold text-center">{{ title }}</h1>
      <p v-if="!!description" class="mb-5 text-center">
        {{ description }}
      </p>
      <slot />
    </div>
  </comm-hero>
</template>

<script lang="ts" src="./index.controller.ts"></script>
