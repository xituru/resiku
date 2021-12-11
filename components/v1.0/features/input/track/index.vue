<template>
  <div class="relative">
    <input
      ref="input"
      type="text"
      :placeholder="loading ? '' : placeholder"
      :disabled="loading"
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
      v-on="inputTrackListeners"
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
      :disabled="loading"
      @click="onSearch"
    >
      <template v-if="!loading">
        {{ buttonText }}
      </template>
      <template v-else>
        <svg
          class="animate-spin mx-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </template>
    </button>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
