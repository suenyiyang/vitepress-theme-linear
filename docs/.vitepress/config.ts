import { defineConfigWithTheme } from 'vitepress'
import type { ThemeLinearConfig } from './theme/types'
import { getPosts } from './theme/config'

async function config() {
  const posts = await getPosts('en-US', 'Asia/Shanghai')
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: 'Vitepress Theme Linear',
    description: 'A dream theme for vitepress blogs.',
    markdown: {
      theme: {
        light: 'css-variables',
        dark: 'css-variables',
      },
    },
    themeConfig: {
      links: [
        { name: 'GitHub', link: 'https://github.com/syy11cn/vitepress-theme-linear', icon: '/assets/images/github.svg' },
        { name: 'Posts', link: '/posts', icon: '/assets/images/post.svg' },
        { name: 'Links', link: '/links', icon: '/assets/images/link.svg' },
      ],
      posts,
      favicon: 'https://shaun-logo.oss-cn-beijing.aliyuncs.com/avatar.jpg',
    },
  })
}

export default config()
