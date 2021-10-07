<template>
  <div class="flex flex-col flex-nowrap">
    <app-home-hero class="flex-1" :title="title">
      <div class="relative">
        <input
          type="text"
          placeholder="Type something ..."
          class="
            w-full
            pr-16
            input input-primary input-bordered
            focus:ring
            ring-gray-400 ring-offset-1
            border border-gray-500
            rounded-full
            bg-transparent
          "
        />
        <button
          class="
            absolute
            top-0
            right-0
            btn btn-primary
            rounded-full
            bg-gray-800
            dark:bg-gray-500
            text-gray-50
            dark:text-current
            hover:bg-opacity-80
          "
        >
          Search
        </button>
      </div>
      <app-receipt-card v-if="false" class="max-w-xs mx-auto mt-10" />
    </app-home-hero>
  </div>
</template>

<script lang="ts" src="./_id.controller.ts"></script>
