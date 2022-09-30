import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import DefaultTheme from "vitepress/theme";
import WYHUI from '../../../src/entry'
//console.log('-------->',theme);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(WYHUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}