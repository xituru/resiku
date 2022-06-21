// plugins/apollo-overrides.ts
import { Plugin } from '@nuxt/types'

const apolloOverrides: Plugin = ({ app }) => {
  // disable caching on all the queries
  app.apolloProvider!.defaultClient.defaultOptions = {
    query: {
      fetchPolicy: 'no-cache',
    },
  }
}

export default apolloOverrides
