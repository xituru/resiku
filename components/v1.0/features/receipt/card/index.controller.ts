import Component, { mixins } from 'nuxt-class-component'
import IconTruck from '~/assets/icons/truck.svg?inline'
import IsArray from '~/mixins/is-array'

@Component({
  components: {
    IconTruck,
  },
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
    shipper: String,
    receiver: String,
    origin: String,
    destination: String,
  },
  data() {
    return {
      expanded: !!this.$props.expand,
    }
  },
})
export default class ReceiptCard extends mixins(IsArray) {}
