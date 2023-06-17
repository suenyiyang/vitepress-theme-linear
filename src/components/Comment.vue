<script setup lang='ts'>
import { Waline } from '@waline/client/component'
import { computed, unref } from 'vue'
import { useData, useRoute } from 'vitepress'
import '@waline/client/dist/waline.css'

const data = useData()
const serverURL = data.site.value.themeConfig.walineServerURL ?? data.site.value.themeConfig.waline?.serverURL
const lang = navigator.language ?? 'zh-CN'
const path = computed(() => {
  // posts/example/index => posts/example
  // posts/example/index.html => posts/example
  return useRoute().path.replace(/(\/)?(index)?(\.html)?$/, '')
})
const shouldShowWaline = computed(() => {
  return serverURL && data.page.value.frontmatter.comments !== false && !data.page.value.isNotFound
})

const walineProps = Object.assign({
  dark: 'body.dark',
  serverURL,
  lang,
}, data.site.value.themeConfig.waline)
</script>

<template>
  <Waline v-if="shouldShowWaline" v-bind="walineProps" :path="path" />
</template>

<style scoped>
#waline {
  margin: 5rem auto;
}
</style>

<style>
:root {
  --waline-font-size: 1.6rem !important;
}
</style>
