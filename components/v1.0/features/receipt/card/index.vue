<template>
  <div class="shadow-xl max-w-xs md:max-w-md w-full">
    <div class="card card-success bordered ring rounded">
      <h2 class="card-title uppercase font-semibold flex flex-row items-center">
        <span class="flex-1">Status</span>
        <span class="w-7 h-7 bg-gray-300 rounded"></span>
      </h2>
      <div class="card-body">
        <div class="flex flex-row items-center">
          <div class="flex-1 flex-col flex">
            <label class="text-gray-400 text-xs capitalize">Label</label>
            <span class="font-semibold">#414123112</span>
          </div>
          <button
            class="
              btn
              rounded-full
              border border-gray-500
              h-9
              min-h-0
              hover:bg-gray-100
              dark:hover:bg-gray-900
            "
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
