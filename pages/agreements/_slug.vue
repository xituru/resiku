<template>
  <div
    class="relative flex flex-col w-full pb-12 lg:m-auto max-w-screen-2xl md:pt-12 md:pb-20 md:px-20 lg:px-40 lg:pt-6"
  >
    <div>
      <h1 class="text-4xl font-semibold">{{ page.title }}</h1>
      <nuxt-content
        class="py-5 mx-auto text-sm prose prose-lg max-w-none dark:text-gray-300"
        :document="page"
      ></nuxt-content>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import type { Context } from '@nuxt/types'

@Component
export default class Agreements extends Vue {
  async asyncData({ $content, route }: Context) {
    const slug = route.params.slug

    const page = await $content('agreements', slug).fetch()
    return {
      page,
    }
  }
}
</script>
