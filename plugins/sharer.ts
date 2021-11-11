import Vue from 'vue'

const ctx = 'sharer'

interface IShare {
  shareUrl: string
  params?: Object
  isLink?: boolean
  width?: number
  height?: number
}

/**
 *  @function getValue
 *  @description Helper to get the attribute of a DOM element
 */
const getValue = (elem: HTMLElement, attr: string) => {
  let val = elem.getAttribute('data-' + attr)

  // handing facebook hashtag attribute
  if (!!val && attr === 'hashtag') {
    if (!val.startsWith('#')) {
      val = '#' + val
    }
  }

  return val
}

const sharers = (elem: HTMLElement): { [k: string]: IShare } => ({
  facebook: {
    shareUrl: 'https://www.facebook.com/sharer/sharer.php',
    params: {
      u: getValue(elem, 'url'),
      hashtag: getValue(elem, 'hashtag'),
      quote: getValue(elem, 'quote'),
    },
  },
  linkedin: {
    shareUrl: 'https://www.linkedin.com/shareArticle',
    params: {
      url: getValue(elem, 'url'),
      mini: true,
    },
  },
  twitter: {
    shareUrl: 'https://twitter.com/intent/tweet/',
    params: {
      text: getValue(elem, 'title'),
      url: getValue(elem, 'url'),
      hashtags: getValue(elem, 'hashtags'),
      via: getValue(elem, 'via'),
    },
  },
  email: {
    shareUrl: 'mailto:' + getValue(elem, 'to') || '',
    params: {
      subject: getValue(elem, 'subject'),
      body: getValue(elem, 'title') + '\n' + getValue(elem, 'url'),
    },
    isLink: true,
  },
  whatsapp: {
    shareUrl:
      getValue(elem, 'web') !== null
        ? 'https://api.whatsapp.com/send'
        : 'https://wa.me/',
    params: {
      text: getValue(elem, 'title') + ' ' + getValue(elem, 'url'),
    },
  },
  telegram: {
    shareUrl:
      getValue(elem, 'web') !== null
        ? 'https://telegram.me/share'
        : 'tg://msg_url',
    params: {
      text: getValue(elem, 'title'),
      url: getValue(elem, 'url'),
    },
    isLink: true,
  },
  viber: {
    shareUrl: 'viber://forward',
    params: {
      text: getValue(elem, 'title') + ' ' + getValue(elem, 'url'),
    },
    isLink: true,
  },
  line: {
    shareUrl:
      'http://line.me/R/msg/text/?' +
      encodeURIComponent(getValue(elem, 'title') + ' ' + getValue(elem, 'url')),
    isLink: true,
  },
  pinterest: {
    shareUrl: 'https://www.pinterest.com/pin/create/button/',
    params: {
      url: getValue(elem, 'url'),
      media: getValue(elem, 'image'),
      description: getValue(elem, 'description'),
    },
  },
  tumblr: {
    shareUrl: 'http://tumblr.com/widgets/share/tool',
    params: {
      canonicalUrl: getValue(elem, 'url'),
      content: getValue(elem, 'url'),
      posttype: 'link',
      title: getValue(elem, 'title'),
      caption: getValue(elem, 'caption'),
      tags: getValue(elem, 'tags'),
    },
  },
  hackernews: {
    shareUrl: 'https://news.ycombinator.com/submitlink',
    params: {
      u: getValue(elem, 'url'),
      t: getValue(elem, 'title'),
    },
  },
  reddit: {
    shareUrl: 'https://www.reddit.com/submit',
    params: { url: getValue(elem, 'url') },
  },
  vk: {
    shareUrl: 'http://vk.com/share.php',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
      description: getValue(elem, 'caption'),
      image: getValue(elem, 'image'),
    },
  },
  xing: {
    shareUrl: 'https://www.xing.com/social/share/spi',
    params: {
      url: getValue(elem, 'url'),
    },
  },
  buffer: {
    shareUrl: 'https://buffer.com/add',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
      via: getValue(elem, 'via'),
      picture: getValue(elem, 'picture'),
    },
  },
  instapaper: {
    shareUrl: 'http://www.instapaper.com/edit',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
      description: getValue(elem, 'description'),
    },
  },
  pocket: {
    shareUrl: 'https://getpocket.com/save',
    params: {
      url: getValue(elem, 'url'),
    },
  },
  stumbleupon: {
    // Usage deprecated, leaving for backwards compatibility.
    shareUrl: 'http://www.stumbleupon.com/submit',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
    },
  },
  mashable: {
    shareUrl: 'https://mashable.com/submit',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
    },
  },
  mix: {
    shareUrl: 'https://mix.com/add',
    params: {
      url: getValue(elem, 'url'),
    },
  },
  flipboard: {
    shareUrl: 'https://share.flipboard.com/bookmarklet/popout',
    params: {
      v: 2,
      title: getValue(elem, 'title'),
      url: getValue(elem, 'url'),
      t: Date.now(),
    },
  },
  weibo: {
    shareUrl: 'http://service.weibo.com/share/share.php',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
      pic: getValue(elem, 'image'),
      appkey: getValue(elem, 'appkey'),
      ralateUid: getValue(elem, 'ralateuid'),
      language: 'zh_cn',
    },
  },
  renren: {
    shareUrl: 'http://share.renren.com/share/buttonshare',
    params: {
      link: getValue(elem, 'url'),
    },
  },
  myspace: {
    shareUrl: 'https://myspace.com/post',
    params: {
      u: getValue(elem, 'url'),
      t: getValue(elem, 'title'),
      c: getValue(elem, 'description'),
    },
  },
  blogger: {
    shareUrl: 'https://www.blogger.com/blog-this.g',
    params: {
      u: getValue(elem, 'url'),
      n: getValue(elem, 'title'),
      t: getValue(elem, 'description'),
    },
  },
  baidu: {
    shareUrl: 'http://cang.baidu.com/do/add',
    params: {
      it: getValue(elem, 'title'),
      iu: getValue(elem, 'url'),
    },
  },
  douban: {
    shareUrl: 'https://www.douban.com/share/service',
    params: {
      name: getValue(elem, 'name'),
      href: getValue(elem, 'url'),
      image: getValue(elem, 'image'),
      comment: getValue(elem, 'description'),
    },
  },
  okru: {
    shareUrl: 'https://connect.ok.ru/dk',
    params: {
      'st.cmd': 'WidgetSharePreview',
      'st.shareUrl': getValue(elem, 'url'),
      title: getValue(elem, 'title'),
    },
  },
  mailru: {
    shareUrl: 'http://connect.mail.ru/share',
    params: {
      share_url: getValue(elem, 'url'),
      linkname: getValue(elem, 'title'),
      linknote: getValue(elem, 'description'),
      type: 'page',
    },
  },
  evernote: {
    shareUrl: 'https://www.evernote.com/clip.action',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
    },
  },
  skype: {
    shareUrl: 'https://web.skype.com/share',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
    },
  },
  delicious: {
    shareUrl: 'https://del.icio.us/post',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
    },
  },
  sms: {
    shareUrl: 'sms://',
    params: {
      body: getValue(elem, 'body'),
    },
  },
  trello: {
    shareUrl: 'https://trello.com/add-card',
    params: {
      url: getValue(elem, 'url'),
      name: getValue(elem, 'title'),
      desc: getValue(elem, 'description'),
      mode: 'popup',
    },
  },
  messenger: {
    shareUrl: 'fb-messenger://share',
    params: {
      link: getValue(elem, 'url'),
    },
  },
  odnoklassniki: {
    shareUrl: 'https://connect.ok.ru/dk',
    params: {
      st: {
        cmd: 'WidgetSharePreview',
        deprecated: 1,
        shareUrl: getValue(elem, 'url'),
      },
    },
  },
  meneame: {
    shareUrl: 'https://www.meneame.net/submit',
    params: {
      url: getValue(elem, 'url'),
    },
  },
  diaspora: {
    shareUrl: 'https://share.diasporafoundation.org',
    params: {
      title: getValue(elem, 'title'),
      url: getValue(elem, 'url'),
    },
  },
  googlebookmarks: {
    shareUrl: 'https://www.google.com/bookmarks/mark',
    params: {
      op: 'edit',
      bkmk: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
    },
  },
  qzone: {
    shareUrl: 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',
    params: {
      url: getValue(elem, 'url'),
    },
  },
  refind: {
    shareUrl: 'https://refind.com',
    params: {
      url: getValue(elem, 'url'),
    },
  },
  surfingbird: {
    shareUrl: 'https://surfingbird.ru/share',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
      description: getValue(elem, 'description'),
    },
  },
  yahoomail: {
    shareUrl: 'http://compose.mail.yahoo.com',
    params: {
      to: getValue(elem, 'to'),
      subject: getValue(elem, 'subject'),
      body: getValue(elem, 'body'),
    },
  },
  wordpress: {
    shareUrl: 'https://wordpress.com/wp-admin/press-this.php',
    params: {
      u: getValue(elem, 'url'),
      t: getValue(elem, 'title'),
      s: getValue(elem, 'title'),
    },
  },
  amazon: {
    shareUrl: 'https://www.amazon.com/gp/wishlist/static-add',
    params: {
      u: getValue(elem, 'url'),
      t: getValue(elem, 'title'),
    },
  },
  pinboard: {
    shareUrl: 'https://pinboard.in/add',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
      description: getValue(elem, 'description'),
    },
  },
  threema: {
    shareUrl: 'threema://compose',
    params: {
      text: getValue(elem, 'text'),
      id: getValue(elem, 'id'),
    },
  },
  kakaostory: {
    shareUrl: 'https://story.kakao.com/share',
    params: {
      url: getValue(elem, 'url'),
    },
  },
  yummly: {
    shareUrl: 'http://www.yummly.com/urb/verify',
    params: {
      url: getValue(elem, 'url'),
      title: getValue(elem, 'title'),
      yumtype: 'button',
    },
  },
})

class Sharer {
  elem: HTMLElement

  constructor(elem: HTMLElement) {
    this.elem = elem
  }

  /**
   * @event share
   * @description Main share event. Will pop a window or redirect to a link
   * based on the data-sharer attribute.
   */
  share() {
    const identifier = getValue(this.elem, ctx)
    const target = !!identifier && sharers(this.elem)[identifier.toLowerCase()]

    if (target) {
      target.width = +(getValue(this.elem, 'width') || 0)
      target.height = +(getValue(this.elem, 'height') || 0)
    }

    return !!target && this.urlSharer(target)
  }

  /**
   * @event urlSharer
   */
  urlSharer(sharer: IShare) {
    const p = sharer.params || ({} as IShare)
    const keys = Object.keys(p)
    let i
    let str = keys.length > 0 ? '?' : ''

    for (i = 0; i < keys.length; i++) {
      if (str !== '?') {
        str += '&'
      }

      const identifier = keys[i] as keyof typeof p

      if (p[identifier]) {
        str += keys[i] + '=' + encodeURIComponent(p[identifier] as any)
      }
    }

    sharer.shareUrl += str

    if (!sharer.isLink) {
      const popWidth = sharer.width || 600
      const popHeight = sharer.height || 480
      const left = window.innerWidth / 2 - popWidth / 2 + window.screenX
      const top = window.innerHeight / 2 - popHeight / 2 + window.screenY
      const popParams =
        'scrollbars=no, width=' +
        popWidth +
        ', height=' +
        popHeight +
        ', top=' +
        top +
        ', left=' +
        left

      const newWindow = window.open(sharer.shareUrl, '', popParams)

      if (!!newWindow && !!newWindow.focus) {
        newWindow.focus()
      }
    } else {
      window.location.href = sharer.shareUrl
    }
  }
}

function handleShare(e: Event) {
  const sharer = new Sharer(e.target as HTMLElement)

  sharer.share()
}

Vue.directive(ctx, {
  bind(el) {
    el.addEventListener('click', handleShare, false)
  },

  unbind(el) {
    el.removeEventListener('click', handleShare, false)
  },
})
