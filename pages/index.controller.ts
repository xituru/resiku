import Component, { mixins } from 'nuxt-class-component'
import GetProp from '~/mixins/get-prop'
import IsObject from '~/mixins/is-object'
import TrackingService from '~/mixins/services/tracking'
import TrackToTimeline from '~/mixins/track-to-timeline'

@Component
export default class IndexPage extends mixins(
  TrackingService,
  GetProp,
  IsObject,
  TrackToTimeline
) {}
