<template>
  <div class="flex flex-col flex-nowrap">
    <app-home-hero class="flex-1" :title="title">
      <app-input-track v-if="!!!getProp($route, 'query.awb')" v-model="awb" />
      <app-receipt-card
        v-if="isObject(Track)"
        class="mx-auto mt-10"
        :awb="getProp(Track, 'summary.awb')"
        :code="getProp(Track, 'summary.courier.code')"
        :checkpoints="trackToTimeline(Track)"
        :status="getProp(Track, 'status')"
        :expand="!!getProp($route, 'query.awb')"
        :shipper="getProp(Track, 'detail.shipper')"
        :origin="getProp(Track, 'detail.origin')"
        :receiver="getProp(Track, 'detail.receiver')"
        :destination="getProp(Track, 'detail.destination')"
      />
    </app-home-hero>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
