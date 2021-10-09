import Component from 'nuxt-class-component'
import Vue from 'vue'

@Component
export class InputFn extends Vue {
  onChange(event: InputEvent) {
    this.$emit('change', event)
  }

  onInput(event: InputEvent) {
    this.$emit('input', event)
  }

  onFocus(event: InputEvent) {
    this.$emit('focus', event)
  }

  onKeyDown(event: InputEvent) {
    this.$emit('keydown', event)
  }

  onKeyUp(event: InputEvent) {
    this.$emit('keyup', event)
  }

  onKeyPress(event: InputEvent) {
    this.$emit('keypress', event)
  }

  onBlur(event: InputEvent) {
    this.$emit('blur', event)
  }

  onClick(event: InputEvent) {
    this.$emit('click', event)
  }

  get inputListeners() {
    return {
      ...this.$listeners,
      input: this.onInput,
      change: this.onChange,
      Focus: this.onFocus,
      Blur: this.onBlur,
      onKeyDown: this.onKeyDown,
      KeyPress: this.onKeyPress,
      KeyUp: this.onKeyUp,
      click: this.onClick,
    }
  }
}

export default InputFn
