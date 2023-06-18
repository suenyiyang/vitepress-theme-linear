<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Post } from '../types'
import PostCard from './PostCard.vue'
const data = useData()
const posts: Post[] = data.site.value.themeConfig.posts
const groupPosts = () => {
  const groups: Record<string, Post[]> = {}
  posts.forEach((post) => {
    const date = post.frontmatter.rawDate
    const year = new Date(date).getFullYear().toString()
    if (!groups[year])
      groups[year] = []

    groups[year].push(post)
  })
  return groups
}
const postGroups = groupPosts()

const toTraditionalChinese = (num: string | number) => {
  const numStr = num.toString()
  const numArr = numStr.split('')
  const numArrLen = numArr.length
  const chineseNumArr = ['零', '壹', '貳', '叁', '肆', '伍', '陸', '柒', '捌', '玖']

  let chineseNumStr = ''

  for (let i = 0; i < numArrLen; i++)
    chineseNumStr += chineseNumArr[parseInt(numArr[i])]

  return chineseNumStr
}
</script>

<template>
  <div v-for="year in Object.keys(postGroups).reverse()" :key="year" class="postGroup">
    <div class="background">
      {{ toTraditionalChinese(year) }}
    </div>
    <PostCard v-for="post in postGroups[year]" :key="post.frontmatter.title" :post="post" />
  </div>
</template>

<style scoped>
.postGroup {
  position: relative;
  margin: 10rem 0;
}

.background {
  position: absolute;
  font-size: 10rem;
  z-index: -1;
  opacity: 0.5;
  color: transparent;
  left: -3rem;
  top: -1rem;
  -webkit-text-stroke: 2px var(--border);
}

@media screen and (max-width: 768px) {
  .background {
    font-size: 8rem;
  }
}
</style>
