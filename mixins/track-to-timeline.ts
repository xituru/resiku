import Component from 'nuxt-class-component'
import Vue from 'vue'
import get from '~/utils/get'
import isArray from '~/utils/is-array'

@Component
export class TrackToTimeline extends Vue {
  trackToTimeline(track: any) {
    const history: any[] = get(track, 'history', [])

    return (isArray(history) ? history : []).map((current) => ({
      content: get(current, 'desc'),
      date: get(current, 'date'),
    }))
  }
}

export default TrackToTimeline
