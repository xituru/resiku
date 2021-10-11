export type MetaOption = {
  title?: string
  description?: string
  type?: string
  url?: string
  image?: string
}

export const generateMetaTags = (meta?: MetaOption) => {
  return [
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: (meta && meta.title) || process.env.SITE_TITLE,
    },
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || process.env.SITE_DESCRIPTION,
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: (meta && meta.title) || process.env.SITE_TITLE,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || process.env.SITE_URL,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || process.env.SITE_TITLE,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || process.env.SITE_DESCRIPTION,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.image) || process.env.SITE_IMAGE,
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || process.env.SITE_URL,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || process.env.SITE_TITLE,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || process.env.SITE_DESCRIPTION,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.image) || process.env.SITE_IMAGE,
    },
  ]
    .filter(({ content }) => !!content)
    .map((v) => ({ ...v, content: v.content || '' }))
}

export default generateMetaTags
