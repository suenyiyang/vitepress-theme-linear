<script setup lang='ts'>
import { useData } from 'vitepress'
import { computed } from 'vue'
import type { Post } from '../types'
import Date from './Date.vue'

const data = useData()
const posts: Post[] = data.site.value.themeConfig.posts

const props = defineProps<{
  post?: Post
}>()

const dataSource = computed(() => (props.post ?? posts.find(post => post.filePath === data.page.value.filePath)))
</script>

<template>
  <div v-if="dataSource" class="info">
    <Date class="date" :date="dataSource.frontmatter.date" />
    <div class="readTime">
      {{ dataSource.frontmatter.readTime }} min
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  align-items: center;
  width: 100%;
}

.info * {
  color: var(--secondary-text);
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.2rem;
}

.info > *:not(:last-child) {
  margin-right: 0.25em;
}

.info > *:not(:last-child)::after {
  content: '•';
  margin-left: 0.25em;
}
</style>
