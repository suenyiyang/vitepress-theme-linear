<script setup lang='ts'>
import { init } from '@waline/client'
import { computed, onMounted } from 'vue'
import { Head } from '@vueuse/head'
import { useData } from 'vitepress'
import { useDark } from '@vueuse/core'

const data = useData()
const serverURL = data.site.value.themeConfig.walineServerURL
const isDark = useDark({ valueLight: 'light' })

onMounted(() => {
  if (serverURL) {
    init({
      el: '#waline',
      serverURL,
      lang: navigator.language ?? 'zh-CN',
      dark: isDark.value,
    })
  }
})

const shouldShowWaline = computed(() => {
  return serverURL && data.page.value.frontmatter.comments !== false
})
</script>

<template>
  <div v-show="shouldShowWaline" id="waline">
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@waline/client@v2/dist/waline.css"
      >
    </Head>
  </div>
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
