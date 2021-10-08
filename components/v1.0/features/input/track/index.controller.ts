import Component, { mixins } from 'nuxt-class-component'
import InputFn from '~/mixins/input-fn'

@Component({
  props: {
    placeholder: {
      type: String,
      default: 'Nomor Resi Paket',
    },
    buttonText: {
      type: String,
      default: 'Lacak',
    },
  },
})
export default class InputTrack extends mixins(InputFn) {
  $refs!: {
    input: HTMLInputElement
  }

  onSearch() {
    this.$refs.input.dispatchEvent(new Event('change'))
  }
}
