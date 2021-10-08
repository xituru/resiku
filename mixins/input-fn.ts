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
}

export default InputFn
