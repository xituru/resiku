import Component, { mixins } from 'nuxt-class-component'
import Courier from '~/graphql/queries/courier.graphql'
import GetProp from '~/mixins/get-prop'
import IsObject from '~/mixins/is-object'

@Component({
  apollo: {
    Courier: {
      query: Courier,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { code: String(this.$route.params.id).toUpperCase() }
      },
    },
  },
  head() {
    return {
      title: (this as TrackingAwbDetailPage).title,
    }
  },
})
export default class TrackingAwbDetailPage extends mixins(GetProp, IsObject) {
  get title() {
    return !!this.$data.Courier &&
      (this as TrackingAwbDetailPage).isObject(this.$data.Courier)
      ? `Lacak Resi ${(this as TrackingAwbDetailPage).getProp(
          this.$data.Courier,
          'name'
        )}`
      : 'Loading'
  }
}
