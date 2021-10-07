import Component from 'nuxt-class-component'
import Vue from 'vue'
import isObject from '~/utils/is-object'

@Component
export class IsObject extends Vue {
  isObject = isObject
}

export default IsObject
