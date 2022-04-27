import { defineConfigWithTheme } from 'vitepress'
import type { ThemeLinearConfig } from './theme/types'
import { getPosts } from './theme/utils'

async function config() {
  const posts = await getPosts('en-US', 'Asia/Shanghai')
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: 'YIYANG SUN',
    description: 'Love for life and technology.',
    themeConfig: {
      links: [
        { name: 'GitHub', link: 'https://github.com/syy11cn', icon: '/assets/images/github.svg' },
        { name: 'Posts', link: '/posts', icon: '/assets/images/post.svg' },
      ],
      posts,
    },
  })
}

export default config()
