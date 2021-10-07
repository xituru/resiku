import Component, { mixins } from 'nuxt-class-component'
import IconResiku from '~/assets/icons/resiku.svg?inline'
import availableCourier from '~/graphql/queries/all-courier.graphql'
import GetProp from '~/mixins/get-prop'

@Component({
  apollo: {
    AvailableCourier: {
      prefetch: true,
      query: availableCourier,
    },
  },
  components: {
    IconResiku,
  },
})
export default class Footer extends mixins(GetProp) {
  generateSingleTrackingUrl(courierCode: string) {
    return typeof courierCode === 'string'
      ? `/tracking-awb/${String(courierCode).toLowerCase()}`
      : '/'
  }
}
