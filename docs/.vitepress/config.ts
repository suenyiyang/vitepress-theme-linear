import { defineConfigWithTheme } from 'vitepress'
import type { ThemeLinearConfig } from './theme/types'
import { getPosts } from './theme/config'

async function config() {
  const posts = await getPosts('en-US', 'Asia/Shanghai')
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: 'Vitepress Theme Linear',
    description: 'A dream theme for vitepress blogs.',
    themeConfig: {
      links: [
        { name: 'GitHub', link: 'https://github.com/syy11cn/vitepress-theme-linear', icon: '/assets/images/github.svg' },
        { name: 'Posts', link: '/posts', icon: '/assets/images/post.svg' },
        { name: 'Links', link: '/links', icon: '/assets/images/link.svg' },
      ],
      posts,
    },
  })
}

export default config()
