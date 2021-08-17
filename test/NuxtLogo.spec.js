import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/v1.0/commons/nuxt/logo/index.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
