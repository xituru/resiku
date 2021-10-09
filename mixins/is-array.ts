import Component from 'nuxt-class-component'
import Vue from 'vue'
import isArray from '~/utils/is-array'

@Component
export class IsArray extends Vue {
  isArray = isArray
}

export default IsArray
