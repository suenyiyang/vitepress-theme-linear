import type { Theme } from 'vitepress'

import './styles/reset.css'
import './styles/global.css'

import NotFound from './NotFound.vue'
import Layout from './Layout.vue'

const theme: Theme = {
  Layout,
  NotFound,
}

export default theme

export * from './types'
export * from './utils'
