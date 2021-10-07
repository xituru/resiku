import Component from 'nuxt-class-component'
import Vue from 'vue'
import get from '~/utils/get'

@Component
export class GetProp extends Vue {
  getProp = get
}

export default GetProp
