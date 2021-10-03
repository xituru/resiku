import Component, { mixins } from 'nuxt-class-component'
import DateFn from '~/mixins/date-fn'

@Component({
  props: {
    activities: {
      type: Array,
      required: true,
    },
  },
})
export default class Timeline extends mixins(DateFn) {}
