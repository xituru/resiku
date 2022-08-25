import Component, { mixins } from 'nuxt-class-component'
import IconResiku from '~/assets/icons/resiku-full.svg?inline'
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
  legals: { title: string; slug: string }[] = []

  generateSingleTrackingUrl(courierCode: string) {
    return typeof courierCode === 'string'
      ? `/tracking-awb/${String(courierCode).toLowerCase()}`
      : '/'
  }
  async mounted() {
    const legals = (await this.$content('agreements')
      .only(['title', 'slug'])
      .sortBy('title')
      .fetch()) as unknown as { title: string; slug: string }[]

    this.legals = legals || []
  }
}
