import { mount } from '@vue/test-utils'
import InputTrack from '~/components/v1.0/features/input/track/index.vue'

describe('InputTrack', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(InputTrack)
    expect(wrapper.vm).toBeTruthy()
  })
})
