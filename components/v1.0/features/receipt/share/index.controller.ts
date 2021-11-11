import Component, { mixins } from 'nuxt-class-component'
import IconFacebook from '~/assets/icons/facebook.svg?inline'
import IconEmail from '~/assets/icons/mail.svg?inline'
import IconShare from '~/assets/icons/share.svg?inline'
import IconTwitter from '~/assets/icons/twitter.svg?inline'
import IconWhatsapp from '~/assets/icons/whatsapp.svg?inline'
import IsArray from '~/mixins/is-array'

const sharers = ['facebook', 'twitter', 'whatsapp', 'email']

@Component({
  components: {
    IconShare,
    IconFacebook,
    IconTwitter,
    IconEmail,
    IconWhatsapp,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'Bagikan',
    },
    sharers: {
      type: Array,
      default: () => sharers,
    },
  },
})
export default class ReceiptShare extends mixins(IsArray) {}
