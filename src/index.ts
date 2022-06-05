import type { Theme } from 'vitepress'
import { createHead } from '@vueuse/head'

import './styles/reset.css'
import './styles/fonts.css'
import './styles/global.css'
import './styles/shiki.css'
import './styles/article.css'
import './styles/reactivity.css'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import PostList from './components/PostList.vue'

const head = createHead()

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.use(head)
  },
}

export default theme
