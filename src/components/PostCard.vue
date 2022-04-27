<script setup lang='ts'>
import type { Post } from '../types'
import Date from './Date.vue'

defineProps<{
  post: Post
}>()
</script>

<template>
  <div class="post-card">
    <Date :date="post.frontmatter.date" />
    <h2>
      <a :href="post.regularPath">{{ post.frontmatter.title }}</a>
    </h2>
    <img :src="post.frontmatter.cover" :alt="post.frontmatter.title">
  </div>
</template>

<style scoped>
.post-card {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 3rem 0 3rem;
}

h2 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}

h2 a {
  color: #444;
  font-size: 2rem;
}

h2 a:hover {
  color: var(--primary-color);
}

time {
  font-size: 1.3rem;
  color: #999;
}

img {
  width: 30%;
  object-fit: cover;
}
</style>
