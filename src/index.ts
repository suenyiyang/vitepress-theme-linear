import type { Theme } from 'vitepress'

import './styles/reset.css'
import './styles/fonts.css'
import './styles/global.css'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import PostList from './components/PostList.vue'

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
  },
}

export default theme
