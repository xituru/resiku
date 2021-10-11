import Component, { mixins } from 'nuxt-class-component'
import GetProp from '~/mixins/get-prop'
import IsObject from '~/mixins/is-object'
import TrackingService from '~/mixins/services/tracking'
import TrackToTimeline from '~/mixins/track-to-timeline'

@Component({
  head() {
    return {
      title: [
        (this as GetProp).getProp(this.$config, 'site.title'),
        (this as GetProp).getProp(this.$config, 'site.description'),
      ]
        .filter((title) => !!title)
        .join(' - '),
    }
  },
})
export default class IndexPage extends mixins(
  TrackingService,
  GetProp,
  IsObject,
  TrackToTimeline
) {}
