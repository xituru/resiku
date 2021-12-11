import Component, { mixins } from 'nuxt-class-component'
import Courier from '~/graphql/queries/courier.graphql'
import GetProp from '~/mixins/get-prop'
import IsObject from '~/mixins/is-object'
import TrackingService from '~/mixins/services/tracking'
import TrackToTimeline from '~/mixins/track-to-timeline'

@Component({
  apollo: {
    Courier: {
      query: Courier,
      prefetch: ({ route }) => ({ id: route.params.courier }),
      variables() {
        return { code: String(this.$route.params.courier).toUpperCase() }
      },
    },
  },
  head() {
    return {
      title: [
        (this as TrackingAwbCourierPage).title,
        (this as GetProp).getProp(this.$config, 'site.title'),
      ]
        .filter((title) => !!title)
        .join(' | '),
    }
  },
  created() {
    if (!this.$route.query.awb) return

    this.$data.awb = (this as GetProp).getProp(this.$route, 'query.awb')
    this.$data.courier = String(
      (this as GetProp).getProp(this.$route, 'params.courier')
    ).toUpperCase()
    this.$data.skipQuery = false
  },
  data() {
    return {
      Track: null,
      courier: String(this.$route.params.courier || null).toUpperCase(),
    }
  },
})
export default class TrackingAwbCourierPage extends mixins(
  TrackingService,
  GetProp,
  IsObject,
  TrackToTimeline
) {
  get title() {
    if (this.getProp(this.$route, 'query.awb')) {
      return !!this.$data.Track && this.isObject(this.$data.Track)
        ? `Resi ${[
            this.getProp(this.$data.Track, 'summary.courier.code'),
            this.getProp(this.$data.Track, 'summary.awb'),
          ].join(' ')}`
        : null
    }

    return !!this.$data.Courier && this.isObject(this.$data.Courier)
      ? `Lacak Resi ${this.getProp(this.$data.Courier, 'name')}`
      : null
  }
}
