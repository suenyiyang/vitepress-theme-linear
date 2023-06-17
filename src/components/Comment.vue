<script setup lang='ts'>
import { Waline } from '@waline/client/component'
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import '@waline/client/dist/waline.css'

const data = useData()
const serverURL = data.site.value.themeConfig.walineServerURL
const path = computed(() => useRoute().path)
const lang = navigator.language ?? 'zh-CN'
const shouldShowWaline = computed(() => {
  return serverURL && data.page.value.frontmatter.comments !== false && !data.page.value.isNotFound
})
</script>

<template>
  <!-- <div v-show="shouldShowWaline" id="waline">
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@waline/client@v2/dist/waline.css"
      >
    </Head>
  </div> -->
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
