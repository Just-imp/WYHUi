import Theme from 'vitepress/dist/client/theme-default'
import WYHUI from '../../../src/entry'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(WYHUI)
  },
}