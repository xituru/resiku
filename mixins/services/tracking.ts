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
      skip() {
        return (
          this.$data.skipQuery ||
          this.$data.awb === '' ||
          this.$data.awb === null
        )
      },
    },
  },
  data() {
    return {
      awb: '',
      courier: null,
      skipQuery: true,
    }
  },
  mounted() {
    this.$data.skipQuery = false
  },
})
export class TrackingService extends Vue {
  onSearch(event: InputEvent) {
    this.$data.awb = (<HTMLInputElement>event.target).value
  }
}

export default TrackingService
