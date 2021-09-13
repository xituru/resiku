import IconDark from '@/assets/icons/dark.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import Component from 'nuxt-class-component'
import Vue from 'vue'

@Component({
  components: {
    IconLight,
    IconDark,
  },
})
export default class ColorPicker extends Vue {
  get isDark() {
    return this.$colorMode.preference === 'dark'
  }

  get icon() {
    return (this.isDark && 'dark') || 'light'
  }
}
