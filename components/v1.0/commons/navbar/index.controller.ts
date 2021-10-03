import Component from 'nuxt-class-component'
import Vue from 'vue'
import IconNotification from '@/assets/icons/notification.svg?inline'

@Component({
  components: {
    IconNotification,
  },
})
export default class Navbar extends Vue {}
