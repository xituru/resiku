<template>
  <div v-if="activities && Array.isArray(activities)">
    <ul class="list-none m-0 p-0">
      <li
        v-for="(activity, index) in activities"
        :key="index"
        class="relative mb-1 pb-1"
      >
        <div
          v-if="!(index >= activities.length - 1)"
          class="border-r border-gray-400 absolute h-full mt-1 left-1 top-2"
        ></div>
        <div class="flex items-start mb-1">
          <div
            class="rounded-full h-2.5 w-2.5 z-10 mt-2"
            :class="[
              [
                index === 0
                  ? 'bg-green-500 ring-2 ring-green-300 '
                  : 'bg-gray-400',
              ],
            ]"
          ></div>
          <div
            class="flex-1 ml-4 font-medium"
            :class="{
              'text-green-500': index === 0,
            }"
          >
            {{ (activity || {}).description || 'No Description' }}
          </div>
        </div>
        <div
          class="ml-7 text-xs"
          :class="[[index === 0 ? 'text-green-500' : 'text-gray-400']]"
        >
          {{ (activity || {}).date }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
