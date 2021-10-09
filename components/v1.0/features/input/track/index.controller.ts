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

  get inputTrackListeners() {
    return {
      ...this.inputListeners,
      input: () => {},
      search: (event: InputEvent) => {
        const { value } = <HTMLInputElement>event.target

        if (typeof value !== 'string') return
        if (!value) return
        if (String(value || '').length <= 5) return

        this.$emit('search', value)
        this.$emit('input', value)
      },
    }
  }

  onSearch() {
    this.$refs.input.dispatchEvent(new Event('search'))
  }
}
