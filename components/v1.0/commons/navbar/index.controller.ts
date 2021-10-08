import Component from 'nuxt-class-component'
import Vue from 'vue'
import IconNotification from '~/assets/icons/notification.svg?inline'
import IconResiku from '~/assets/icons/resiku-full.svg?inline'

@Component({
  components: {
    IconNotification,
    IconResiku,
  },
})
export default class Navbar extends Vue {}
