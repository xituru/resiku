<template>
  <footer
    class="
      footer
      p-10
      bg-base-200
      text-base-content
      bg-gray-100
      dark:bg-gray-900
    "
  >
    <div>
      <div class="flex items-center">
        <icon-resiku class="w-12 h-12" />
        <span class="font-bold text-2xl">nuxt</span>
      </div>
      <p>Company Ltd. <br />Providing reliable tech since 2004</p>
    </div>
    <div>
      <span class="footer-title">Services</span>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </div>
    <div>
      <span class="footer-title">Company</span>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </div>
    <div>
      <span class="footer-title">Legal</span>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </div>
  </footer>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
