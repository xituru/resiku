import get from './get'

export type MetaOption = {
  title?: string
  description?: string
  type?: string
  url?: string
  image?: string
}

export const generateMetaTags = (meta?: MetaOption) => {
  const getMeta = (key: string, fallback?: string) =>
    get(
      meta,
      'meta.' + String(key).toLowerCase(),
      get(process.env, 'SITE_' + String(key).toUpperCase(), fallback || key)
    )
  const mergeMeta = (a: string, b: string, separator: string = ' | ') =>
    [getMeta(a), getMeta(b)].join(separator)

  return [
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: getMeta('title'),
    },
    {
      hid: 'description',
      name: 'description',
      content: getMeta('description'),
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: getMeta('title'),
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: getMeta('type', 'website'),
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: getMeta('url'),
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: mergeMeta('description', 'title'),
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: getMeta('description'),
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: getMeta('image'),
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: getMeta('url'),
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: mergeMeta('description', 'title'),
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: getMeta('description'),
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: getMeta('image'),
    },
  ]
    .filter(({ content }) => !!content)
    .map((v) => ({ ...v, content: v.content || '' }))
}

export default generateMetaTags
