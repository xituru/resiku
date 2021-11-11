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
  computed: {
    shareUrl() {
      const { protocol, hostname } = location
      const { href } = this.$router.resolve({
        name: 'tracking-awb-courier',
        params: { courier: String(this.$props.code).toLowerCase() },
        query: {
          awb: this.$props.awb,
        },
      })

      return `${protocol}//${hostname}${href}`
    },
  },
})
export default class ReceiptCard extends mixins(IsArray) {}
