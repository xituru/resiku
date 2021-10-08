<template>
  <div class="flex flex-col flex-nowrap">
    <app-home-hero class="flex-1" :title="title">
      <app-input-track />
      <app-receipt-card v-if="false" class="max-w-xs mx-auto mt-10" />
    </app-home-hero>
  </div>
</template>

<script lang="ts" src="./_id.controller.ts"></script>
