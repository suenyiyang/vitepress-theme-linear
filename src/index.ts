import type { Theme } from 'vitepress'
import { createHead } from '@vueuse/head'

import './styles/reset.css'
import './styles/fonts.css'
import './styles/global.css'
import './styles/text.css'
import './styles/article.css'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import PostList from './components/PostList.vue'
import Twitter from './components/Twitter.vue'

const LinearTheme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('Twitter', Twitter)
    app.use(createHead() as any)
  },
}

export default LinearTheme
