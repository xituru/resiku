import { mount } from '@vue/test-utils'
import CommTimeline from '~/components/v1.0/commons/timeline/index.vue'
import ReceiptCard from '~/components/v1.0/features/receipt/card/index.vue'

describe('ReceiptCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ReceiptCard, {
      components: { CommTimeline },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
