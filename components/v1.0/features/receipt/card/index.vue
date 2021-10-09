<template>
  <div class="shadow-xl max-w-xs md:max-w-md w-full">
    <div class="card card-success bordered ring rounded">
      <h2 class="card-title uppercase font-semibold flex flex-row items-center">
        <span class="flex-1">{{ status }}</span>
        <span class="w-7 h-7 bg-gray-300 rounded">
          <img v-if="code" :src="`/assets/logisitcs/${code}.svg`" alt="code" />
        </span>
      </h2>
      <div class="card-body">
        <div class="flex flex-row items-center">
          <div class="flex-1 flex-col flex">
            <label class="text-gray-400 text-xs capitalize">Nomor Resi</label>
            <span class="font-semibold">{{ awb }}</span>
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
            @click="expanded = !!!expanded"
          >
            Detail
          </button>
        </div>
        <comm-timeline
          v-if="!!expanded && isArray(checkpoints)"
          class="mt-5"
          :activities="isArray(checkpoints) ? checkpoints : []"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
