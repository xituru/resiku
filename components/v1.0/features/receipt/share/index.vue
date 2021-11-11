<template>
  <div class="dropdown dropdown-end">
    <button
      tabindex="0"
      class="
        btn
        rounded-full
        border border-gray-500
        hover:bg-gray-100
        dark:hover:bg-gray-900
        min-h-0
        h-7
        text-xs
        flex
        items-center
        justify-center
        space-x-1
        px-2
      "
    >
      <icon-share class="w-3.5 h-3.5" />
      <span>{{ buttonText }}</span>
    </button>
    <div
      tabindex="0"
      class="
        compact
        dropdown-content
        bg-gray-100
        dark:bg-gray-800
        py-2
        px-4
        rounded
        shadow-md
        mt-1
        flex flex-row
        items-center
        justify-center
        space-x-4
      "
    >
      <button
        v-for="sharer in (isArray(sharers) && sharers) || []"
        :key="sharer"
      >
        <component
          :is="'icon-' + sharer"
          v-sharer
          class="w-5 h-5"
          data-title=""
          :data-url="url"
          :data-sharer="sharer"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
