import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { ThemeLinearConfig } from '../../src/types'
import { getPosts } from '../../src/config'

const getConfig = async () => {
  const posts = await getPosts('zh-CN', 'Asia/Shanghai')
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: 'Vitepress Theme Linear',
    description: 'A dream theme for vitepress blogs.',
    cleanUrls: true,
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    vite: {
      resolve: {
        alias: {
          'vitepress-theme-linear': path.join(__dirname, '../../src'),
        },
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
      walineServerURL: 'https://blog-comment-syy11cn.vercel.app/',
      waline: {
        reaction: ['/assets/images/thumbs_up.svg'],
        requiredMeta: ['nick', 'mail'],
        locale: {
          reactionTitle: '',
        },
      },
    },
  })
}

export default getConfig()
