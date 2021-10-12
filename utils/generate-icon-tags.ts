const appleTouchVariants = [
  16, 20, 29, 32, 36, 40, 48, 50, 55, 57, 58, 60, 64, 72, 76, 80, 87, 88, 96,
  100, 114, 120, 128, 144, 152, 167, 172, 180, 192, 196, 256, 512, 1024,
]

const favicon = (filename: string, path: string) => ({
  rel: 'shortcut icon',
  href: `${path}${filename}.ico`,
  type: 'image/x-icon',
})

const appleTouchIcons = (
  filename: string,
  path: string,
  rel: string = 'apple-touch-icon'
) => [
  {
    rel,
    href: `${path}${filename}.png`,
  },
  ...appleTouchVariants.map((variant) => ({
    rel,
    sizes: variant,
    href: `${path}${filename}-${variant}.png`,
  })),
]

export const getIconTags = (
  filePath: string = '/',
  faviconName: string = 'favicon',
  appleTouchIconPathOrName: string = 'apple-touch-icon'
) => [
  favicon(faviconName, filePath),
  ...appleTouchIcons(appleTouchIconPathOrName, filePath),
]

export default getIconTags
