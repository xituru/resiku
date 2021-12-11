<template>
  <div class="shadow-xl">
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
            <span class="font-semibold">
              <span>{{ awb }}</span>
              <app-receipt-share :url="shareUrl" />
            </span>
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
        <div v-if="!!expanded">
          <div class="flex flex-row space-x-2 mt-6">
            <div class="w-1/3">
              <h3 class="font-semibold uppercase">{{ shipper }}</h3>
              <span class="text-gray-400">{{ origin }}</span>
            </div>
            <div class="w-1/3 relative">
              <div
                class="
                  divider
                  border-b-2 border-gray-400
                  divider
                  absolute
                  w-full
                  top-2/3
                  z-0
                "
              ></div>
              <div
                class="
                  divider
                  border-b-2 border-dashed border-gray-400
                  divider
                  absolute
                  w-full
                  bottom-3.5
                "
              ></div>
              <div
                class="
                  divider
                  border-b-2 border-gray-400
                  divider
                  absolute
                  w-full
                  z-0
                  -bottom-0.5
                "
              ></div>
              <icon-truck class="w-20 h-20 mx-auto z-10 relative" />
            </div>
            <div class="w-1/3">
              <h3 class="font-semibold uppercase">{{ receiver }}</h3>
              <span class="text-gray-400">{{ destination }}</span>
            </div>
          </div>
          <comm-timeline
            v-if="activities.length > 0"
            class="mt-5"
            :activities="activities"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
