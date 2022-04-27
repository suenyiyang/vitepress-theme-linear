<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Post } from '../types'
import PostCard from './PostCard.vue'
const data = useData()
const posts: Post[] = data.site.value.themeConfig.posts
</script>

<template>
  <PostCard v-for="post in posts" :key="post.frontmatter.title" :post="post" />
</template>

<style scoped></style>
