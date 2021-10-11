<template>
  <footer
    class="
      p-10
      footer
      text-base-content
      bg-gray-100
      dark:bg-gray-900
      space-y-5
      md:space-y-0
    "
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
        {{ getProp($config, 'site.description') }}
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
    <div v-if="false">
      <!-- TODO: activate this when legal information is ready -->
      <span class="footer-title">Legal</span>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </div>
  </footer>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
