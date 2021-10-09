import Component from 'nuxt-class-component'
import Vue from 'vue'
import Track from '~/graphql/queries/track.graphql'

@Component({
  apollo: {
    Track: {
      query: Track,
      variables() {
        return {
          awb: this.$data.awb,
          courier: this.$data.courier,
        }
      },
    },
  },
  data() {
    return {
      awb: '',
      courier: null,
    }
  },
})
export class TrackingService extends Vue {
  onSearch(event: InputEvent) {
    this.$data.awb = (<HTMLInputElement>event.target).value
  }
}

export default TrackingService
