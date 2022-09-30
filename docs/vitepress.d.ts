declare module 'vitepress-theme-vue/config' {
    import { UserConfig } from 'vitepress'
    const config: () => Promise<UserConfig>
    export default config
}