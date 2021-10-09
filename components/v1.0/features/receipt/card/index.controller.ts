import Component, { mixins } from 'nuxt-class-component'
import IsArray from '~/mixins/is-array'

@Component({
  props: {
    awb: String,
    code: String,
    checkpoints: {
      type: Array,
      default: () => [],
    },
    status: String,
    expand: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      expanded: !!this.$props.expand,
    }
  },
})
export default class ReceiptCard extends mixins(IsArray) {}
