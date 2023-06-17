<script setup lang='ts'>
import { Waline } from '@waline/client/component'
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import '@waline/client/dist/waline.css'

const data = useData()
const serverURL = data.site.value.themeConfig.walineServerURL
const lang = navigator.language ?? 'zh-CN'
const path = computed(() => {
  // posts/example/index => posts/example
  // posts/example/index.html => posts/example
  return useRoute().path.replace(/(\/)?(index)?(\.html)?$/, '')
})
const shouldShowWaline = computed(() => {
  return serverURL && data.page.value.frontmatter.comments !== false && !data.page.value.isNotFound
})
</script>

<template>
  <Waline v-if="shouldShowWaline" :server-u-r-l="serverURL" :path="path" :lang="lang" dark="body.dark" />
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
