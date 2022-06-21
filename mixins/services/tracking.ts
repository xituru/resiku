import Component from 'nuxt-class-component'
import Vue from 'vue'
import Track from '~/graphql/queries/track.graphql'

@Component({
  data() {
    return {
      awb: '',
      courier: null,
      skipQuery: true,
      Track: null,
    }
  },
  mounted() {
    this.$data.skipQuery = false
  },
  watch: {
    async awb(n1, n2) {
      if (n1 === n2) return
      const { courier, awb } = this.$data
      const res = await this.$apollo.query({
        query: Track,
        variables: { awb, courier },
      })

      this.$data.Track = res.data.Track
    },
  },
})
export class TrackingService extends Vue {
  onSearch(event: InputEvent) {
    this.$data.awb = (<HTMLInputElement>event.target).value
  }
}

export default TrackingService
