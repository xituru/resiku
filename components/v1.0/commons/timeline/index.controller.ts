import Component from 'nuxt-class-component'
import Vue from 'vue'

@Component({
  props: {
    activities: {
      type: Array,
      required: true,
    },
  },
})
export default class Timeline extends Vue {}
