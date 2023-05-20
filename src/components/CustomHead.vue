<script setup lang='ts'>
import { Head, useHead } from '@vueuse/head'
import { useData } from 'vitepress'

const data = useData()
const pageData = data.page.value.frontmatter
const siteData = data.site.value.themeConfig
const favicon = siteData.favicon
const googleId = siteData.googleId
const keywords = pageData.keywords
const description = pageData.description

if (googleId) {
  const googleCode = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${googleId}');
  `

  useHead({
    script: [
      { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${googleId}` },
      { children: googleCode },
    ],
  })
}
</script>

<template>
  <Head>
    <link v-if="favicon" rel="shortcut icon" :href="favicon" type="image/x-icon">
    <meta v-if="keywords" name="keywords" :content="keywords">
    <meta v-if="description" name="description" :content="description">
    <meta name="google" content="notranslate">
  </Head>
</template>

<style scoped>
</style>
