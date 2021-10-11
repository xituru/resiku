import Component, { mixins } from 'nuxt-class-component'
import Track from '~/graphql/queries/track.graphql'
import GetProp from '~/mixins/get-prop'
import IsObject from '~/mixins/is-object'
import TrackToTimeline from '~/mixins/track-to-timeline'

@Component({
  apollo: {
    Track: {
      query: Track,
      variables() {
        return {
          courier: String(this.$route.params.courier).toUpperCase(),
          awb: this.$route.params.awb,
        }
      },
    },
  },
  head() {
    return {
      title: [
        (this as TrackingAwbDetailPage).title,
        (this as GetProp).getProp(this.$config, 'site.title'),
      ]
        .filter((title) => !!title)
        .join(' - '),
    }
  },
  data() {
    return {
      courier: String(this.$route.params.courier || null).toUpperCase(),
      awb: this.$route.params.awb,
    }
  },
})
export default class TrackingAwbDetailPage extends mixins(
  GetProp,
  IsObject,
  TrackToTimeline
) {
  get title() {
    return !!this.$data.Track &&
      (this as TrackingAwbDetailPage).isObject(this.$data.Track)
      ? `Resi ${[
          (this as TrackingAwbDetailPage).getProp(
            this.$data.Track,
            'summary.courier.code'
          ),
          (this as TrackingAwbDetailPage).getProp(
            this.$data.Track,
            'summary.awb'
          ),
        ].join(' ')}`
      : 'Loading'
  }
}
