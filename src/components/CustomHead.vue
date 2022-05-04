<script setup lang='ts'>
import { Head } from '@vueuse/head'
import { useData } from 'vitepress'

const data = useData()
const pagedata = data.page.value.frontmatter
const favicon = data.site.value.themeConfig.favicon
const keywords = pagedata.keywords
const description = pagedata.description
</script>

<template>
  <Head>
    <link v-if="favicon" rel="shortcut icon" :href="favicon" type="image/x-icon">
    <meta v-if="keywords" name="keywords" :content="keywords">
    <meta v-if="description" name="description" :content="description">
  </Head>
</template>

<style scoped></style>
