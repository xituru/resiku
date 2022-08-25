<template>
  <footer
    class="p-10 space-y-5 bg-gray-100 footer text-base-content dark:bg-gray-900 md:space-y-0"
  >
    <div class="sm:max-w-sm">
      <div class="flex items-center">
        <icon-resiku class="w-24 h-12" />
      </div>
      <p>
        <nuxt-link to="/" class="hover:underline focus:underline">
          &copy; 2021
          {{
            String(getProp($config, 'site.url', '')).replace(/https?:\/\//, '')
          }}
        </nuxt-link>
        <br />
        Platform digital untuk melacak lokasi terakhir paket secara cepat dan
        akurat, support banyak ekspedisi, dilengkapi fitur multi tracking, auto
        tracking, dan tracking page.
      </p>
    </div>
    <div>
      <span class="footer-title">Services</span>
      <template v-if="AvailableCourier">
        <div class="grid sm:grid-cols-2">
          <nuxt-link
            v-for="courier in AvailableCourier"
            :key="getProp(courier, 'code')"
            class="link link-hover"
            :to="generateSingleTrackingUrl(getProp(courier, 'code'))"
          >
            Lacak Resi {{ getProp(courier, 'name') }}
          </nuxt-link>
        </div>
      </template>
    </div>
    <div v-if="false">
      <!-- TODO: activate this when company information is ready -->
      <span class="footer-title">Company</span>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </div>
    <div v-if="legals.length">
      <span class="footer-title">Legal</span>
      <nuxt-link
        v-for="legal in legals"
        :key="legal.slug"
        class="link link-hover"
        :to="`/agreements/${legal.slug}`"
      >
        {{ legal.title }}
      </nuxt-link>
    </div>
  </footer>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
