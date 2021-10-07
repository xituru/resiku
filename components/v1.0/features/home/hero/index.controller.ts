import Component from 'nuxt-class-component'
import Vue from 'vue'

@Component({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
      required: false,
    },
  },
})
export default class HomeHero extends Vue {}
