import Component, { mixins } from 'nuxt-class-component'
import DateFn from '~/mixins/date-fn'
import GetProp from '~/mixins/get-prop'
import IsArray from '~/mixins/is-array'

@Component({
  props: {
    activities: {
      type: Array,
      required: true,
    },
  },
})
export default class Timeline extends mixins(DateFn, IsArray, GetProp) {}
