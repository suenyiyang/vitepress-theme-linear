/* eslint-disable no-console */
import { defineConfigWithTheme } from 'vitepress'
import { getPostList } from './theme'
import type { ThemeLinearConfig } from './theme'

const posts = getPostList()

export default defineConfigWithTheme<ThemeLinearConfig>({
  title: 'YIYANG SUN',
  description: 'Love for life and technology.',
  themeConfig: {
    links: [
      { name: 'GitHub', link: 'https://github.com/syy11cn', icon: '/assets/images/github.svg' },
    ],
    posts,
  },
})
