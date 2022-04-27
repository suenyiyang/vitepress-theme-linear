<script setup lang='ts'>
import type { Post } from '../types'
import Date from './Date.vue'

defineProps<{
  post: Post
}>()
</script>

<template>
  <div class="post-card">
    <Date class="date" :date="post.frontmatter.date" />
    <h2>
      <a :href="post.regularPath">{{ post.frontmatter.title }} <sup v-if="post.frontmatter.lang === 'zh'">中文</sup></a>
    </h2>
    <img v-if="post.frontmatter.cover" :src="post.frontmatter.cover" :alt="post.frontmatter.title">
  </div>
</template>

<style scoped>
.post-card {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 2rem 0 2rem;
}

.post-card:first-child {
  margin-top: -3rem;
}

.date {
  min-width: 12rem;
}

h2 {
  justify-content: flex-start;
  height: 100%;
  text-transform: uppercase;
  margin: 0;
}

h2::before {
  border: 0;
}

h2 a {
  color: #444;
  font-size: 2rem;
  display: inline;
  border-bottom: unset;
}

h2 a:hover {
  color: var(--primary-color);
}

h2 sup {
  border: 0.1rem solid #e6e6e6;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  position: relative;
  top: -0.5rem;
  vertical-align: baseline;
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
