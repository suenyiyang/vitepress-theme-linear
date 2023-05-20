<script setup lang='ts'>
import type { Post } from '../types'
import ArticleInfo from './ArticleInfo.vue'

defineProps<{
  post: Post
}>()
</script>

<template>
  <div class="post-card">
    <a class="title" :href="post.regularPath">{{ post.frontmatter.title }}</a>
    <ArticleInfo :post="post" />
  </div>
</template>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em 0;
}

.title {
  color: var(--deep-text);
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin: 0 0 0.5em;
  border-bottom: unset;
  font-weight: 800;
}
</style>
