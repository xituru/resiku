import { mount } from '@vue/test-utils'
import CommHero from '~/components/v1.0/commons/hero/index.vue'
import HomeHero from '~/components/v1.0/features/home/hero/index.vue'

describe('HomeHero', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomeHero, {
      props: { title: 'Nani' },
      components: { CommHero },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
