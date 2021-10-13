import Component, { mixins } from 'nuxt-class-component'
import GetProp from '~/mixins/get-prop'

@Component({
  mounted() {
    if (process.browser) {
      ;(this as any).$gtag('event', 'conversion', {
        send_to:
          (this as GetProp).getProp(this.$config, 'google.gads', '') +
          '/sY1-CKasifsCEPmSns0D',
      })
    }
  },
})
export default class DefaultLayout extends mixins(GetProp) {}
